// Ch.6 거리 DISTANCE — one mind split by the speed of light: two spiral galaxies and a small third
// cluster, each turning about its own axis, with faint signal threads crawling between them at a
// visibly slow, constant pace. As you read, the galaxies drift apart (their pivots spread) and the
// threads lengthen.
//
// One hue family only: the two minds differ in luminance, saturation and structure, never in hue.
//   bright — a tight two-armed grand design with a large white-hot bulge: luminous and pale;
//   deep   — three loose, beaded arms in saturated ice cyan fading to deep blue, a small core:
//            dimmer overall, its star-forming knots the most saturated points of the scene;
//   faint  — a small steel-blue cluster.

import { C, HEX } from '../config.js';
import { TAU, basisFromNormal } from '../math.js';
import { keep, mix } from './common.js';

const nrm = (x, y, z) => {
  const l = Math.hypot(x, y, z);
  return [x / l, y / l, z / l];
};

export const GALAXIES = [
  { c: [-2.05, 0.32, -0.35], n: nrm(0.32, 1, 0.5), r: 1.3, w: 0.07, kind: 'bright', share: 0.4, arms: 2, pitch: 0.27, bulge: 0.2, spread: 0.13, beads: 0 },
  { c: [2.1, -0.28, 0.32], n: nrm(-0.55, 0.62, 0.72), r: 1.15, w: -0.08, kind: 'deep', share: 0.36, arms: 3, pitch: 0.42, bulge: 0.07, spread: 0.24, beads: 1 },
  { c: [0.35, 1.45, -1.7], n: nrm(0.1, 0.6, 1), r: 0.42, w: 0.12, kind: 'faint', share: 0.05, arms: 2, pitch: 0.32, bulge: 0.14, spread: 0.18, beads: 0 },
];

/** Per-kind colours (linear) and brightness: luminance and saturation tell the galaxies apart. */
export const GALAXY_LOOK = {
  bright: { core: C.iceHi, arm: keep(C.white, C.iceHi, 0.4), outer: keep(C.white, C.steel, 0.35), disc: keep(C.white, C.steel, 0.55), knot: C.iceHi, br: 1.15, glow: 0.62 },
  deep: { core: C.ice, arm: keep(C.ice, C.deep, 0.22), outer: keep(C.deep, C.ice, 0.25), disc: keep(C.deep, C.mist, 0.35), knot: C.ice, br: 0.82, glow: 0.42 },
  faint: { core: C.white, arm: C.steel, outer: C.steel, disc: C.mist, knot: C.white, br: 0.8, glow: 0.34 },
};

/** Signal threads (galaxy index pairs). */
export const THREADS = [[0, 1], [1, 0], [0, 2], [2, 1]];

export default {
  id: 'ch6',
  seed: 2606,
  radius: 3.05,
  center: [0, 0.1, 0],
  view: { yaw: 0.0, pitch: 0.24 },
  tint: HEX.deep,
  morph: 'chapter',
  reading: { preview: 0.35, spread: [0.0, 0.3] },
  // The bright galaxy sits far left of centre: on wide screens the trio steps right and tightens so
  // it stays out of the title column (chapter cover, litany, next-chapter card) and the contents list.
  compose: { chapter: { wide: { cx: 0.7, scale: 0.8 } }, contents: { wide: { scale: 0.86 } } },
  *build(b) {
    const basis = new Float64Array(6);
    const total = b.count;
    for (const G of GALAXIES) {
      basisFromNormal(basis, G.n[0], G.n[1], G.n[2]);
      const n = Math.round(total * G.share);
      const L = GALAXY_LOOK[G.kind];
      const tanPitch = Math.tan(G.pitch);
      const bright = G.kind === 'bright';
      for (let k = 0; k < n; k++) {
        if (b.tick()) yield;
        const roll = b.rng();
        let r, a, h, col, br, size;
        if (roll < G.bulge) {
          // Bulge: large and white-hot in the bright galaxy, a small ice core in the deep one.
          r = Math.abs(b.gauss()) * G.r * (bright ? 0.16 : 0.11);
          a = b.rng() * TAU;
          h = b.gauss() * G.r * (bright ? 0.09 : 0.06);
          col = L.core;
          br = (0.3 + 0.3 * b.rng()) * L.br;
          size = 0.014;
        } else if (roll < G.bulge + 0.64) {
          // Logarithmic arms; scatter grows outward. The deep galaxy's arms are beaded with
          // star-forming knots (density rejection along the arm), saturated at their peaks.
          let t = 0;
          let bead = 0;
          for (let tries = 0; tries < 5; tries++) {
            t = Math.pow(b.rng(), 0.75);
            if (!G.beads) break;
            bead = Math.pow(0.5 + 0.5 * Math.sin(t * 29 + k % G.arms * 2.1), 6);
            if (b.rng() < 0.3 + 0.7 * bead) break;
          }
          r = G.r * (0.12 + 0.88 * t);
          const armIdx = ((k % G.arms) / G.arms) * TAU;
          a = armIdx + Math.log(r / (G.r * 0.12)) / tanPitch + b.gauss() * G.spread * (0.6 + t);
          h = b.gauss() * 0.03;
          col = mix(L.core, mix(L.arm, L.outer, t * t), Math.min(1, t * 1.3));
          br = (0.12 + 0.2 * b.rng()) * (1.15 - t * 0.55) * L.br;
          size = 0.011 + 0.008 * b.rng();
          if (G.beads && bead > 0.6) {
            col = mix(col, L.knot, 0.7);
            br *= 1.6;
          }
          if (b.rng() < 0.03) { br = 0.6 * L.br; size = 0.024; }
        } else {
          // Diffuse disc.
          r = G.r * Math.pow(b.rng(), 0.6);
          a = b.rng() * TAU;
          h = b.gauss() * 0.05;
          col = L.disc;
          br = (0.04 + 0.05 * b.rng()) * L.br;
          size = 0.013;
        }
        const ca = Math.cos(a) * r, sa = Math.sin(a) * r;
        const x = G.c[0] + basis[0] * ca + basis[3] * sa + G.n[0] * h;
        const y = G.c[1] + basis[1] * ca + basis[4] * sa + G.n[1] * h;
        const z = G.c[2] + basis[2] * ca + basis[5] * sa + G.n[2] * h;
        const i = b.point(x, y, z, col, br, size);
        b.orbit(i, G.n[0], G.n[1], G.n[2], G.w, G.c[0], G.c[1], G.c[2]);
        b.twinkle(i, 0.12);
      }
    }

    // Signal threads: points crawling from one galaxy to another at light speed (slowly), each in
    // its sender's light (pale from the bright mind, ice cyan from the deep one).
    const signals = b.quota(0.06);
    for (let k = 0; k < signals; k++) {
      if (b.tick()) yield;
      const [ia, ib] = THREADS[k % THREADS.length];
      const A = GALAXIES[ia].c, B = GALAXIES[ib].c;
      const dx = B[0] - A[0], dy = B[1] - A[1], dz = B[2] - A[2];
      const j = 0.012;
      const i = b.point(A[0] + b.gauss() * j, A[1] + b.gauss() * j, A[2] + b.gauss() * j, GALAXY_LOOK[GALAXIES[ia].kind].knot, 0.12 + 0.16 * b.rng(), 0.011);
      b.flow(i, dx, dy, dz, 0.045 + 0.01 * b.rng());
      // Anchored at the midpoint: as the galaxies drift apart the threads fall short of them.
      b.anchor(i, (A[0] + B[0]) / 2, (A[1] + B[1]) / 2, (A[2] + B[2]) / 2);
    }

    // Intergalactic dust between them: pale on the bright side, deep blue on the other.
    const dust = b.quota(0.08);
    for (let k = 0; k < dust; k++) {
      if (b.tick()) yield;
      const t = b.rng();
      const x = -2.6 + 5.2 * t + b.gauss() * 0.6;
      const i = b.point(x, b.gauss() * 0.7, b.gauss() * 0.8, mix(C.steel, C.deep, t), 0.012 + 0.015 * b.rng(), 0.016);
      b.anchor(i, x * 0.5, 0, 0);
      b.twinkle(i, 0.5);
    }
  },
};
