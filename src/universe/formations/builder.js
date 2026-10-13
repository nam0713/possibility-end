// FormationBuilder: the authoring API every formation uses to place exactly N particles.
//
//   const i = b.point(x, y, z, colorLinear, brightness, worldSize);
//   b.orbit(i, ax, ay, az, angularSpeed, px, py, pz);   // living motion: orbit about an axis through a pivot
//   b.flow(i, vx, vy, vz, rate);                         // living motion: travel along a vector, wrapping
//   b.evolve(i, threshold); b.twinkle(i, amount); b.glint(i, amount); b.key(i, sortKey)
//
// finalize() fills any remaining slots with faint dust, orders the particles by a sort key
// (azimuth by default) so that morphs map neighbourhoods onto neighbourhoods (coherent flows),
// and scatters them through a fixed random permutation so any prefix of the buffer is a uniform
// subsample (adaptive quality trims the draw range).

import { PACK } from '../particles/shaders.js';
import { TAU, clamp, mulberry32 } from '../math.js';

const I16 = 32767;

export class FormationBuilder {
  constructor(count, seed) {
    this.count = count;
    this.n = 0;
    this.rng = mulberry32(seed);
    this.pos = new Float32Array(count * 3);
    this.look = new Uint8Array(count * 4);
    this.spin = new Int16Array(count * 4);
    this.pivot = new Int16Array(count * 3);
    this.stream = new Int16Array(count * 4);
    this.aux = new Uint8Array(count * 4);
    this.keys = null;
    this._spare = null;
    this._ticks = 0;
  }

  /** Yield point for time-sliced builds: true once every 1024 calls. */
  tick() {
    return (++this._ticks & 1023) === 0;
  }

  /**
   * The whole pipeline as a generator: the formation's own build, dust fill, then finalize in
   * stages. Drive it to completion synchronously, or a few milliseconds at a time in idle slots.
   */
  *run(spec, perm, fillDust) {
    yield* spec.build(this);
    if (this.n < this.count) yield* (spec.fill || fillDust)(this);
    return yield* this.finalize(perm);
  }

  get remaining() {
    return this.count - this.n;
  }

  /** Number of particles for a fraction of the total. */
  quota(fraction) {
    return Math.max(0, Math.min(this.remaining, Math.round(this.count * fraction)));
  }

  /** Standard normal deviate. */
  gauss() {
    if (this._spare !== null) {
      const s = this._spare;
      this._spare = null;
      return s;
    }
    let u = 0;
    while (u === 0) u = this.rng();
    const v = this.rng();
    const m = Math.sqrt(-2 * Math.log(u));
    this._spare = m * Math.sin(TAU * v);
    return m * Math.cos(TAU * v);
  }

  range(a, b) {
    return a + (b - a) * this.rng();
  }

  point(x, y, z, color, brightness = 1, size = 0.02) {
    if (this.n >= this.count) return -1;
    const i = this.n++;
    this.pos[i * 3] = x;
    this.pos[i * 3 + 1] = y;
    this.pos[i * 3 + 2] = z;
    const o = i * 4;
    this.look[o] = Math.round(Math.sqrt(clamp(color[0] * brightness, 0, 1)) * 255);
    this.look[o + 1] = Math.round(Math.sqrt(clamp(color[1] * brightness, 0, 1)) * 255);
    this.look[o + 2] = Math.round(Math.sqrt(clamp(color[2] * brightness, 0, 1)) * 255);
    this.look[o + 3] = Math.round(Math.sqrt(clamp(size / PACK.SIZE_MAX, 0, 1)) * 255);
    return i;
  }

  orbit(i, ax, ay, az, w, px = 0, py = 0, pz = 0) {
    if (i < 0 || w === 0) return;
    const l = Math.sqrt(ax * ax + ay * ay + az * az) || 1;
    const o = i * 4;
    this.spin[o] = Math.round((ax / l) * I16);
    this.spin[o + 1] = Math.round((ay / l) * I16);
    this.spin[o + 2] = Math.round((az / l) * I16);
    this.spin[o + 3] = Math.round(clamp(w / PACK.SPIN_MAX, -1, 1) * I16);
    const p = i * 3;
    this.pivot[p] = Math.round(clamp(px / PACK.PIVOT_MAX, -1, 1) * I16);
    this.pivot[p + 1] = Math.round(clamp(py / PACK.PIVOT_MAX, -1, 1) * I16);
    this.pivot[p + 2] = Math.round(clamp(pz / PACK.PIVOT_MAX, -1, 1) * I16);
  }

  /** Pivot without spin (used by formations whose groups drift apart with reading progress). */
  anchor(i, px, py, pz) {
    if (i < 0) return;
    const p = i * 3;
    this.pivot[p] = Math.round(clamp(px / PACK.PIVOT_MAX, -1, 1) * I16);
    this.pivot[p + 1] = Math.round(clamp(py / PACK.PIVOT_MAX, -1, 1) * I16);
    this.pivot[p + 2] = Math.round(clamp(pz / PACK.PIVOT_MAX, -1, 1) * I16);
  }

  flow(i, vx, vy, vz, rate) {
    if (i < 0 || rate <= 0) return;
    const o = i * 4;
    this.stream[o] = Math.round(clamp(vx / PACK.STREAM_MAX, -1, 1) * I16);
    this.stream[o + 1] = Math.round(clamp(vy / PACK.STREAM_MAX, -1, 1) * I16);
    this.stream[o + 2] = Math.round(clamp(vz / PACK.STREAM_MAX, -1, 1) * I16);
    this.stream[o + 3] = Math.max(1, Math.round(clamp(rate / PACK.RATE_MAX, 0, 1) * I16));
  }

  evolve(i, v) {
    if (i >= 0) this.aux[i * 4] = Math.round(clamp(v, 0, 1) * 255);
  }

  twinkle(i, v) {
    if (i >= 0) this.aux[i * 4 + 1] = Math.round(clamp(v, 0, 1) * 255);
  }

  glint(i, v) {
    if (i >= 0) this.aux[i * 4 + 2] = Math.round(clamp(v, 0, 1) * 255);
  }

  key(i, k) {
    if (i < 0) return;
    if (!this.keys) this.keys = new Float32Array(this.count).fill(-1);
    this.keys[i] = k;
  }

  /**
   * Sorts and permutes into particle order. `perm` is the shared permutation for this count.
   * Returns plain typed arrays ready to be copied into the GPU attributes.
   */
  *finalize(perm) {
    while (this.n < this.count) this.point(0, 0, 0, ZERO, 0, 0);

    // Every loop below yields every CHUNK particles, so a time-sliced build never overruns its slot.
    const N = this.count;
    const BUCKETS = 65536;
    const bucketOf = new Uint32Array(N);
    const counts = new Uint32Array(BUCKETS + 1);
    const pos = this.pos;
    const keys = this.keys;
    for (let c = 0; c < N; c += CHUNK) {
      const end = Math.min(N, c + CHUNK);
      for (let i = c; i < end; i++) {
        let k = keys && keys[i] >= 0 ? keys[i] : Math.atan2(pos[i * 3], pos[i * 3 + 2]) / TAU + 0.5;
        k = clamp(k + (this.rng() - 0.5) * 0.004, 0, 0.99999);
        const bucket = (k * BUCKETS) | 0;
        bucketOf[i] = bucket;
        counts[bucket + 1]++;
      }
      yield;
    }
    for (let b = 1; b <= BUCKETS; b++) counts[b] += counts[b - 1];
    const order = new Uint32Array(N);
    for (let c = 0; c < N; c += CHUNK) {
      const end = Math.min(N, c + CHUNK);
      for (let i = c; i < end; i++) order[counts[bucketOf[i]]++] = i;
      yield;
    }

    const out = {
      count: N,
      pos: new Float32Array(N * 3),
      look: new Uint8Array(N * 4),
      spin: new Int16Array(N * 4),
      pivot: new Int16Array(N * 3),
      stream: new Int16Array(N * 4),
      aux: new Uint8Array(N * 4),
    };
    // Gather into particle order. Explicit per-attribute loops keep every access monomorphic.
    const src = new Uint32Array(N);
    for (let c = 0; c < N; c += CHUNK) {
      const end = Math.min(N, c + CHUNK);
      for (let j = c; j < end; j++) src[j] = order[perm[j]];
      yield;
    }
    for (let c = 0; c < N; c += CHUNK) {
      const end = Math.min(N, c + CHUNK);
      gather3f(out.pos, pos, src, c, end);
      gather4u8(out.look, this.look, src, c, end, N);
      gather4i16(out.spin, this.spin, src, c, end);
      gather3i16(out.pivot, this.pivot, src, c, end);
      gather4i16(out.stream, this.stream, src, c, end);
      gather4u8(out.aux, this.aux, src, c, end, N);
      yield;
    }
    return out;
  }
}

const CHUNK = 8192;

function gather3f(dst, from, src, j0, j1) {
  for (let j = j0, d = j0 * 3; j < j1; j++, d += 3) {
    const e = src[j] * 3;
    dst[d] = from[e]; dst[d + 1] = from[e + 1]; dst[d + 2] = from[e + 2];
  }
}
function gather3i16(dst, from, src, j0, j1) {
  for (let j = j0, d = j0 * 3; j < j1; j++, d += 3) {
    const e = src[j] * 3;
    dst[d] = from[e]; dst[d + 1] = from[e + 1]; dst[d + 2] = from[e + 2];
  }
}
function gather4i16(dst, from, src, j0, j1) {
  for (let j = j0, d = j0 * 4; j < j1; j++, d += 4) {
    const e = src[j] * 4;
    dst[d] = from[e]; dst[d + 1] = from[e + 1]; dst[d + 2] = from[e + 2]; dst[d + 3] = from[e + 3];
  }
}
function gather4u8(dst, from, src, j0, j1, N) {
  // Four bytes per particle: move them as one 32-bit word.
  const d32 = new Uint32Array(dst.buffer, dst.byteOffset, N);
  const s32 = new Uint32Array(from.buffer, from.byteOffset, N);
  for (let j = j0; j < j1; j++) d32[j] = s32[src[j]];
}

const ZERO = [0, 0, 0];


const perms = new Map();

/** Fixed random permutation per particle count (shared by every formation). */
export function permutation(count) {
  let p = perms.get(count);
  if (p) return p;
  p = new Uint32Array(count);
  for (let i = 0; i < count; i++) p[i] = i;
  const rng = mulberry32(0x5eed + count);
  for (let i = count - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const t = p[i];
    p[i] = p[j];
    p[j] = t;
  }
  perms.set(count, p);
  return p;
}
