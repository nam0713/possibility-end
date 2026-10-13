// Ch.6 거리 DISTANCE — one mind split by the speed of light: two spiral galaxies and a small third
// cluster, each turning about its own axis, with faint signal threads crawling between them at a
// visibly slow, constant pace. As you read, the galaxies drift apart (their pivots spread) and the
// threads lengthen.
//
// Two minds, two ages — coloured as astrophotography sees galaxies; the signals between them are ice
// (the UI's colour: the mind itself).
//   bright — older and yellower: a tight two-armed grand design round a large bulge of old stars
//            (~4300 K), arms of a mature, yellow-white population, brown-grey dust in the disc;
//   deep   — younger and bluer: three loose arms of hot young stars (blue-white) beaded with
//            star-forming knots — pink HII regions (H-alpha) and blue-white young clusters — round a
//            small yellowish core;
//   faint  — a small old dwarf, dim yellow-white.

import { C, HEX } from '../config.js';
import { TAU, basisFromNormal, kelvin } from '../math.js';
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

/**
 * Per-kind colours (linear) and brightness. Stellar light is the blackbody of the population's
 * typical temperature (old bulges ~4300 K, young arms 9000–13000 K); knots are pink HII (H-alpha) or
 * blue-white young clusters; the diffuse disc is dust (brown-grey) lit by the stars around it.
 */
export const GALAXY_LOOK = {
  bright: { core: kelvin(4300, 0.85), arm: kelvin(5300, 0.8), outer: kelvin(6400, 0.7), disc: keep(C.dust, kelvin(4600), 0.25), knot: kelvin(9000, 0.8), halo: kelvin(4500, 0.8), br: 1.0, glow: 0.52 },
  deep: { core: kelvin(5000, 0.8), arm: kelvin(15000, 0.95), outer: kelvin(22000, 0.95), disc: keep(C.dust, C.reflection, 0.45), knot: C.halpha, young: kelvin(25000), halo: keep(kelvin(5600, 0.6), C.reflection, 0.4), br: 1.15, glow: 0.42 },
  faint: { core: kelvin(5200, 0.6), arm: kelvin(5800, 0.5), outer: kelvin(6200, 0.4), disc: keep(C.dust, C.mist, 0.5), knot: kelvin(6000, 0.5), halo: kelvin(5600, 0.5), br: 0.8, glow: 0.3 },
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
          // Bulge: large and yellowish (old stars) in the bright galaxy, small in the young one.
          r = Math.abs(b.gauss()) * G.r * (bright ? 0.16 : 0.11);
          a = b.rng() * TAU;
          h = b.gauss() * G.r * (bright ? 0.09 : 0.06);
          col = L.core;
          br = (0.3 + 0.3 * b.rng()) * L.br;
          size = 0.014;
        } else if (roll < G.bulge + 0.64) {
          // Logarithmic arms; scatter grows outward. The deep galaxy's arms are beaded with
          // star-forming knots (density rejection along the arm): pink HII regions and blue-white
          // young clusters.
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
          col = mix(L.core, mix(L.arm, L.outer, t * t), Math.min(1, t * (bright ? 1.3 : 2.4)));
          br = (0.12 + 0.2 * b.rng()) * (1.15 - t * 0.55) * L.br;
          size = 0.011 + 0.008 * b.rng();
          if (G.beads && bead > 0.6) {
            const hii = b.rng() < 0.45;
            col = mix(col, hii ? L.knot : L.young, hii ? 0.8 : 0.7);
            br *= hii ? 2.0 : 1.7;
          }
          if (b.rng() < 0.03) { br = 0.6 * L.br; size = 0.024; }
        } else {
          // Diffuse disc: dust, lit by the stars around it.
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

    // Signal threads: ice points crawling from one galaxy to another at light speed (slowly).
    const signals = b.quota(0.06);
    for (let k = 0; k < signals; k++) {
      if (b.tick()) yield;
      const [ia, ib] = THREADS[k % THREADS.length];
      const A = GALAXIES[ia].c, B = GALAXIES[ib].c;
      const dx = B[0] - A[0], dy = B[1] - A[1], dz = B[2] - A[2];
      const j = 0.012;
      const i = b.point(A[0] + b.gauss() * j, A[1] + b.gauss() * j, A[2] + b.gauss() * j, keep(C.ice, C.iceHi, 0.3), 0.13 + 0.16 * b.rng(), 0.011);
      b.flow(i, dx, dy, dz, 0.045 + 0.01 * b.rng());
      // Anchored at the midpoint: as the galaxies drift apart the threads fall short of them.
      b.anchor(i, (A[0] + B[0]) / 2, (A[1] + B[1]) / 2, (A[2] + B[2]) / 2);
    }

    // Intergalactic medium between them: a faint neutral-blue haze.
    const dust = b.quota(0.08);
    for (let k = 0; k < dust; k++) {
      if (b.tick()) yield;
      const t = b.rng();
      const x = -2.6 + 5.2 * t + b.gauss() * 0.6;
      const i = b.point(x, b.gauss() * 0.7, b.gauss() * 0.8, mix(C.mist, C.web, t), 0.012 + 0.015 * b.rng(), 0.016);
      b.anchor(i, x * 0.5, 0, 0);
      b.twinkle(i, 0.5);
    }
  },
};
