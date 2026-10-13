// Ch.5 에너지 ENERGY — a star wrapped by a Dyson swarm: "수조 개의 독립된 구조물이 항성을 둘러싼다".
// Collectors ride hundreds of independent inclined orbits in several shells (Keplerian speeds:
// inner shells race, outer shells drift), a few radiators glint as they turn. A pale wind leaves
// the star. The swarm fills in as you read. The star itself is an accent: a blue-white granulated
// sphere + corona. Collectors near the star run white-hot, the outer shells cool to ice and deep blue.

import { C, HEX } from '../config.js';
import { TAU, basisFromNormal } from '../math.js';
import { mix, unitVector } from './common.js';

export const STAR_RADIUS = 0.5;

export default {
  id: 'ch5',
  seed: 2505,
  radius: 2.7,
  center: [0, 0, 0],
  view: { yaw: 0.0, pitch: 0.3 },
  tint: HEX.ice,
  morph: 'chapter',
  // The swarm fills in as you read, from a cover that already reads as a swarm (two thirds).
  reading: { preview: 0.9, evolve: [0.7, 1.0], mode: 1 },
  *build(b) {
    const basis = new Float64Array(6);
    const n = [0, 0, 0];
    // Orbit families: bundles of rings at clearly different inclinations (the gyroscope look of a
    // swarm), each ring a train of independent collectors; plus a sparse cloud of free collectors.
    const families = [
      [0.06, 1, 0.12], [0.92, 0.5, 0.18], [-0.62, 0.55, 0.62], [0.25, 0.32, -0.95], [-0.88, 0.25, -0.35], [0.5, -0.32, 0.82], [0.0, 0.2, 1],
    ];
    const rings = [];
    for (let k = 0; k < 84; k++) {
      if (b.tick()) yield;
      const f = families[k % families.length];
      const nx = f[0] + b.gauss() * 0.07, ny = f[1] + b.gauss() * 0.07, nz = f[2] + b.gauss() * 0.07;
      const l = Math.hypot(nx, ny, nz);
      const r = 0.82 + Math.pow(b.rng(), 0.9) * 1.45;
      rings.push({ n: [nx / l, ny / l, nz / l], r, dir: b.rng() < 0.8 ? 1 : -1, trains: 1 + Math.floor(b.rng() * 4), phase: b.rng() * TAU, weight: 0.6 + b.rng() * 0.8 });
    }
    const ringBudget = b.quota(0.5);
    const totalW = rings.reduce((acc, R) => acc + R.weight * R.r, 0);
    for (const R of rings) {
      const count = Math.round((ringBudget * R.weight * R.r) / totalW);
      basisFromNormal(basis, R.n[0], R.n[1], R.n[2]);
      for (let k = 0; k < count; k++) {
        if (b.tick()) yield;
        // Collectors bunch into trains along the orbit; gaps between them read as motion.
        let a = 0;
        for (let tries = 0; tries < 5; tries++) {
          a = b.rng() * TAU;
          if (b.rng() < 0.25 + 0.75 * Math.pow(0.5 + 0.5 * Math.cos(a * R.trains + R.phase), 2)) break;
        }
        const rr = R.r + b.gauss() * 0.006;
        const ca = Math.cos(a) * rr, sa = Math.sin(a) * rr;
        const off = b.gauss() * 0.006;
        const x = basis[0] * ca + basis[3] * sa + R.n[0] * off;
        const y = basis[1] * ca + basis[4] * sa + R.n[1] * off;
        const z = basis[2] * ca + basis[5] * sa + R.n[2] * off;
        const heat = Math.pow(0.9 / R.r, 2);
        const radiator = b.rng() < 0.05;
        const i = b.point(x, y, z, mix(mix(C.ice, C.deep, 0.25), C.iceHi, Math.min(1, heat) * 0.75), radiator ? 0.5 : (0.12 + 0.14 * b.rng()) * (0.7 + 0.5 * heat), radiator ? 0.016 : 0.0075 + 0.005 * b.rng());
        b.orbit(i, R.n[0], R.n[1], R.n[2], R.dir * 0.3 / Math.pow(R.r, 1.5));
        b.evolve(i, 0.2 + b.rng() * 0.78);
        if (radiator) b.glint(i, 1);
      }
    }
    // Free collectors on their own orbits: the swarm's countless independent structures.
    const free = b.quota(0.2);
    for (let k = 0; k < free; k++) {
      if (b.tick()) yield;
      unitVector(b, n);
      const nx = n[0], ny = n[1], nz = n[2];
      basisFromNormal(basis, nx, ny, nz);
      const r = 0.8 + Math.pow(b.rng(), 0.7) * 1.6;
      const a = b.rng() * TAU;
      const ca = Math.cos(a) * r, sa = Math.sin(a) * r;
      const i = b.point(basis[0] * ca + basis[3] * sa, basis[1] * ca + basis[4] * sa, basis[2] * ca + basis[5] * sa, mix(C.white, C.ice, 0.5), 0.07 + 0.08 * b.rng(), 0.007 + 0.004 * b.rng());
      b.orbit(i, nx, ny, nz, 0.3 / Math.pow(r, 1.5));
      b.evolve(i, 0.2 + b.rng() * 0.78);
      b.twinkle(i, 0.3);
    }

    // Photosphere sparks: white-hot points just above the surface.
    const surface = b.quota(0.05);
    for (let k = 0; k < surface; k++) {
      if (b.tick()) yield;
      unitVector(b, n);
      const r = STAR_RADIUS * (1.02 + Math.abs(b.gauss()) * 0.08);
      const i = b.point(n[0] * r, n[1] * r, n[2] * r, mix(C.iceHi, C.ice, b.rng() * 0.6), 0.18, 0.016);
      b.orbit(i, 0, 1, 0, 0.12);
      b.twinkle(i, 0.6);
    }

    // Stellar wind: faint pale streams leaving the star.
    const wind = b.quota(0.06);
    for (let k = 0; k < wind; k++) {
      if (b.tick()) yield;
      unitVector(b, n);
      const r0 = STAR_RADIUS * 1.15;
      const len = 0.8 + b.rng() * 1.6;
      const i = b.point(n[0] * r0, n[1] * r0, n[2] * r0, mix(C.ice, C.deep, b.rng()), 0.05, 0.012);
      b.flow(i, n[0] * len, n[1] * len, n[2] * len, 0.06 + 0.06 * b.rng());
    }

    // Distant debris: the faint outer system.
    const debris = b.quota(0.08);
    for (let k = 0; k < debris; k++) {
      if (b.tick()) yield;
      const r = 2.7 + Math.pow(b.rng(), 1.3) * 2.2;
      const a = b.rng() * TAU;
      const i = b.point(r * Math.cos(a), b.gauss() * 0.12, r * Math.sin(a), C.deep, 0.012 + 0.014 * b.rng(), 0.012);
      b.orbit(i, 0.05, 1, 0.1, 0.34 / Math.pow(r, 1.5));
    }
  },
};
