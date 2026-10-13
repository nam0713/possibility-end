// Formation registry + bounded LRU cache. A formation is generated deterministically for a given
// particle count (typed arrays in particle order). Builds run in a Worker when one is available
// (formations are pure functions of spec, count and seed; the arrays come back as transferables),
// otherwise as resumable generators on the main thread: synchronously on demand, in idle slices
// when prewarming.

import { FormationBuilder, permutation } from './builder.js';
import { fillDust } from './common.js';
import { PACK } from '../particles/shaders.js';
import { C } from '../config.js';
import { mulberry32 } from '../math.js';
import cover from './cover.js';
import intelligence from './intelligence.js';
import computation from './computation.js';
import production from './production.js';
import matter from './matter.js';
import energy from './energy.js';
import distance from './distance.js';
import universe from './universe.js';
import possibility from './possibility.js';
import { seed, origin } from './seed.js';

export const SPECS = {
  origin,
  cover,
  ch1: intelligence,
  ch2: computation,
  ch3: production,
  ch4: matter,
  ch5: energy,
  ch6: distance,
  ch7: universe,
  ch8: possibility,
  seed,
};

const READING_DEFAULTS = { preview: 1, evolve: [1, 1], mode: 0, expand: [1, 1], spread: [0, 0], dim: [1, 1] };
for (const spec of Object.values(SPECS)) spec.reading = { ...READING_DEFAULTS, ...spec.reading };

export function formationId(scene, chapter) {
  if (scene === 'cover') return 'cover';
  if (scene === 'ending-ready') return 'seed';
  if (scene === 'origin') return 'origin';
  const n = Math.max(1, Math.min(8, chapter | 0 || 1));
  return `ch${n}`;
}

/** The whole build as a generator (yields every ~1k particles and between finalize stages). */
export function* buildSteps(id, count) {
  const spec = SPECS[id] || SPECS.cover;
  const b = new FormationBuilder(count, spec.seed);
  return yield* b.run(spec, permutation(count), fillDust);
}

/** Synchronous build (worker, or the main-thread fallback). */
export function buildNow(id, count) {
  const gen = buildSteps(id, count);
  let r;
  do r = gen.next();
  while (!r.done);
  return r.value;
}

/**
 * The load-in dust, derived from the first formation: every particle starts far out along the
 * direction of its own destination, dim and slowly turning, so the intro streams inward with
 * perfect correspondence. O(N), no sort: it costs almost nothing.
 */
export function deriveOrigin(target, count) {
  const rng = mulberry32(3001);
  const out = {
    count,
    pos: new Float32Array(count * 3),
    look: new Uint8Array(count * 4),
    spin: new Int16Array(count * 4),
    pivot: new Int16Array(count * 3),
    stream: new Int16Array(count * 4),
    aux: new Uint8Array(count * 4),
  };
  const P = target.pos;
  const a = C.steel, b = C.ice;
  const sizeCode = Math.round(Math.sqrt(0.02 / PACK.SIZE_MAX) * 255);
  for (let i = 0; i < count; i++) {
    let x = P[i * 3], y = P[i * 3 + 1], z = P[i * 3 + 2];
    let l = Math.sqrt(x * x + y * y + z * z);
    if (l < 1e-3) {
      const zz = rng() * 2 - 1, t = rng() * Math.PI * 2, s = Math.sqrt(1 - zz * zz);
      x = s * Math.cos(t); y = zz; z = s * Math.sin(t); l = 1;
    }
    const r = (5.5 + Math.sqrt(rng()) * 9) / l;
    out.pos[i * 3] = x * r;
    out.pos[i * 3 + 1] = y * r * 0.7;
    out.pos[i * 3 + 2] = z * r;
    const m = rng() * 0.3, k = 0.008 + 0.012 * rng();
    out.look[i * 4] = Math.round(Math.sqrt(Math.min(1, (a[0] + (b[0] - a[0]) * m) * k)) * 255);
    out.look[i * 4 + 1] = Math.round(Math.sqrt(Math.min(1, (a[1] + (b[1] - a[1]) * m) * k)) * 255);
    out.look[i * 4 + 2] = Math.round(Math.sqrt(Math.min(1, (a[2] + (b[2] - a[2]) * m) * k)) * 255);
    out.look[i * 4 + 3] = sizeCode;
    out.spin[i * 4 + 1] = 32767;
    out.spin[i * 4 + 3] = Math.round(((0.02 + 0.02 * rng()) / PACK.SPIN_MAX) * 32767);
  }
  return out;
}

export class FormationCache {
  constructor(count, worker = null) {
    this.count = count;
    // ~6.9 MB per formation on the high tier: room for the cover and every chapter at once is
    // kept for the smaller tiers only; the high tier evicts the least recently used.
    this.limit = count > 100000 ? 9 : 12;
    this.map = new Map();
    this.pending = new Map();
    this.worker = worker;
    this.lastBuildMs = 0;
  }

  /** Cached formation (marked recently used) or null. */
  peek(id) {
    const hit = this.map.get(id);
    if (!hit) return null;
    this.map.delete(id);
    this.map.set(id, hit);
    return hit;
  }

  /** Formation data for id, built synchronously (main thread) if it is not cached yet. */
  get(id) {
    const hit = this.peek(id);
    if (hit) return hit;
    const t0 = performance.now();
    const data = buildNow(id, this.count);
    this.lastBuildMs = performance.now() - t0;
    return this._store(id, data);
  }

  /** Whether builds run off the main thread. */
  get async() {
    return !!(this.worker && this.worker.alive);
  }

  /**
   * Formation data for id as a promise. With a worker the build never touches the main thread;
   * without one it is built synchronously (on demand). origin: also derive the load-in dust.
   */
  request(id, { origin = false } = {}) {
    const hit = this.peek(id);
    if (hit && (!origin || hit.origin)) return Promise.resolve(hit);
    const inflight = this.pending.get(id);
    if (inflight && (!origin || inflight.origin)) return inflight.promise;
    if (!this.async) {
      const data = this.get(id);
      if (origin && !data.origin) data.origin = deriveOrigin(data, this.count);
      return Promise.resolve(data);
    }
    const t0 = performance.now();
    const promise = this.worker.build(id, this.count, origin).then(
      (data) => {
        this.pending.delete(id);
        this.lastBuildMs = performance.now() - t0;
        const have = this.map.get(id);
        if (have) {
          // Built meanwhile on the main thread (lab settle): keep it, take the origin if asked.
          if (data.origin && !have.origin) have.origin = data.origin;
          return have;
        }
        return this._store(id, data);
      },
      (err) => {
        this.pending.delete(id);
        console.warn('Universe: formation worker failed, building on the main thread —', err && err.message);
        const data = this.get(id);
        if (origin && !data.origin) data.origin = deriveOrigin(data, this.count);
        return data;
      },
    );
    this.pending.set(id, { promise, origin });
    return promise;
  }

  _store(id, data) {
    const spec = SPECS[id] || SPECS.cover;
    data.id = spec.id;
    data.spec = spec;
    this.map.set(id, data);
    while (this.map.size > this.limit) this.map.delete(this.map.keys().next().value);
    return data;
  }

  /**
   * A resumable main-thread build (prewarm without a worker): job.step(ms) advances it for about
   * ms milliseconds and returns true when the formation is finished and cached (job.result).
   */
  job(id) {
    const gen = buildSteps(id, this.count);
    const cache = this;
    let spent = 0;
    let cost = 0.5; // EWMA of one gen.next() (ms): a slice stops before it would overrun
    return {
      id,
      result: null,
      step(ms) {
        if (this.result) return true;
        const t0 = performance.now();
        const end = t0 + ms;
        let r;
        let now = t0;
        do {
          const s = now;
          r = gen.next();
          now = performance.now();
          cost = cost * 0.8 + (now - s) * 0.2;
        } while (!r.done && now + cost < end);
        spent += now - t0;
        if (!r.done) return false;
        cache.lastBuildMs = spent;
        this.result = cache.map.get(id) || cache._store(id, r.value);
        return true;
      },
    };
  }

  has(id) {
    return this.map.has(id);
  }

  delete(id) {
    this.map.delete(id);
  }

  get size() {
    return this.map.size;
  }

  clear() {
    this.map.clear();
  }
}
