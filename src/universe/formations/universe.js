// Ch.7 우주 THE UNIVERSE — the late universe: sparse dim cinders (the last small stars, deep blue),
// cold dim remnants of the cosmic web drifting outward (accelerating expansion), and a black hole
// whose ice-white accretion disc (white-hot inside, cooling to deep blue outside) thins and
// evaporates as you read. The light itself fades with reading progress. The event horizon and
// its lensed ring are an accent; here are the disc particles and everything around it.

import { C, HEX } from '../config.js';
import { TAU, basisFromNormal } from '../math.js';
import { keep, mix, unitVector } from './common.js';

const nrm = (x, y, z) => {
  const l = Math.hypot(x, y, z);
  return [x / l, y / l, z / l];
};

export const HOLE = { radius: 0.3, normal: nrm(0.06, 1, 0.16), disc: [0.5, 1.75] };

/** The disc's middle tone: pale ice between the white-hot rim and the deep-blue outskirts. */
const DISC_MID = keep(C.white, C.ice, 0.5);

export default {
  id: 'ch7',
  seed: 2707,
  radius: 2.9,
  center: [0, 0, 0],
  view: { yaw: 0.0, pitch: 0.13 },
  tint: HEX.deep,
  morph: 'chapter',
  // The disc vanishes, the light dims and space stretches as you read.
  reading: { preview: 0.12, evolve: [0.0, 1.0], mode: -1, dim: [1.0, 0.5], expand: [1.0, 1.2] },
  *build(b) {
    const basis = new Float64Array(6);
    const n = HOLE.normal;
    basisFromNormal(basis, n[0], n[1], n[2]);
    const v = [0, 0, 0];

    // Accretion disc: Keplerian, white-hot inside, pale ice, deep blue outside; evaporates with reading.
    const disc = b.quota(0.16);
    const [r0, r1] = HOLE.disc;
    for (let k = 0; k < disc; k++) {
      if (b.tick()) yield;
      const t = Math.pow(b.rng(), 1.7);
      const r = r0 + (r1 - r0) * t;
      const a = b.rng() * TAU;
      const h = b.gauss() * 0.012 * (1 + 3 * t);
      const ca = Math.cos(a) * r, sa = Math.sin(a) * r;
      const x = basis[0] * ca + basis[3] * sa + n[0] * h;
      const y = basis[1] * ca + basis[4] * sa + n[1] * h;
      const z = basis[2] * ca + basis[5] * sa + n[2] * h;
      const col = t < 0.25 ? mix(C.iceHi, DISC_MID, t * 4) : mix(DISC_MID, C.deep, Math.min(1, (t - 0.25) * 1.6));
      const i = b.point(x, y, z, col, (0.42 - 0.3 * t) * (0.6 + 0.6 * b.rng()), 0.011 + 0.008 * b.rng());
      b.orbit(i, n[0], n[1], n[2], 0.62 / Math.pow(r, 1.5));
      // Outer disc evaporates first; the innermost ring lingers.
      b.evolve(i, 0.08 + 0.9 * (0.35 + 0.65 * t) * b.rng());
    }

    // Cinders: the last small stars — few, dim, deep blue, slowly twinkling.
    const dwarfs = Math.min(b.remaining, 70);
    for (let k = 0; k < dwarfs; k++) {
      if (b.tick()) yield;
      unitVector(b, v);
      const r = 1.9 + Math.pow(b.rng(), 0.8) * 3.6;
      const i = b.point(v[0] * r, v[1] * r * 0.55, v[2] * r, mix(C.deep, C.ice, 0.15 + 0.35 * b.rng()), 0.45 + 0.25 * b.rng(), 0.022 + 0.012 * b.rng());
      b.twinkle(i, 0.7);
      b.flow(i, v[0] * 0.25, v[1] * 0.15, v[2] * 0.25, 0.025);
    }

    // Remnants of the cosmic web: dim filaments between random nodes, receding.
    const web = b.quota(0.42);
    const nodes = [];
    for (let k = 0; k < 26; k++) {
      if (b.tick()) yield;
      unitVector(b, v);
      const r = 2.0 + b.rng() * 4.4;
      nodes.push([v[0] * r, v[1] * r * 0.55, v[2] * r]);
    }
    for (let k = 0; k < web; k++) {
      if (b.tick()) yield;
      const A = nodes[k % nodes.length];
      const B = nodes[(k * 7 + 3) % nodes.length];
      const t = b.rng();
      const x = A[0] + (B[0] - A[0]) * t + b.gauss() * 0.12;
      const y = A[1] + (B[1] - A[1]) * t + b.gauss() * 0.12;
      const z = A[2] + (B[2] - A[2]) * t + b.gauss() * 0.12;
      const l = Math.sqrt(x * x + y * y + z * z) || 1;
      const i = b.point(x, y, z, mix(C.deep, C.steel, b.rng()), 0.02 + 0.03 * b.rng(), 0.014 + 0.008 * b.rng());
      b.flow(i, (x / l) * 0.6, (y / l) * 0.6, (z / l) * 0.6, 0.03 + 0.02 * b.rng());
    }

    // Dead galaxies: faint dark-blue smudges far away — deep behind the hole rather than off to the
    // side, so they stay within the framing circle on screen and never drift into a text column.
    const smudges = b.quota(0.08);
    for (let k = 0; k < smudges; k++) {
      if (b.tick()) yield;
      const g = k % 9;
      const a = g * 2.39996;
      const r = 3.6 + (g % 3) * 0.9;
      const cx = Math.cos(a) * r * 0.55, cy = Math.sin(g * 1.7) * 0.9, cz = -1.6 - Math.abs(Math.sin(a)) * r * 0.8;
      const i = b.point(cx + b.gauss() * 0.13, cy + b.gauss() * 0.05, cz + b.gauss() * 0.13, mix(C.mist, C.steel, 0.4), 0.03 + 0.03 * b.rng(), 0.016);
      b.flow(i, cx * 0.08, cy * 0.08, cz * 0.08, 0.02);
    }

  },
};
