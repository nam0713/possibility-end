// Ch.4 물질 MATTER — a crystal assembling itself from a white-hot seed: a cubic lattice grown as an
// octahedral core with six dendrite arms and fishbone side branches. Each lattice site is an
// atom (a bright point in a faint shell). Loose matter around it falls onto the growth front.
// The lattice reveals outward from the seed as you read — structure and program merge.

import { C, HEX } from '../config.js';
import { eulerMatrix } from '../math.js';
import { cluster, keep, mix, transform, unitVector } from './common.js';

export const CRYSTAL = {
  a: 0.19,
  matrix: eulerMatrix(0.55, 0.62, 0.18),
  spin: 0.045,
  axis: [0, 1, 0],
};

/** Lattice sites (integer coordinates) of the dendrite, sorted by distance from the seed. */
export function crystalSites() {
  const sites = new Map();
  const add = (i, j, k) => sites.set(`${i},${j},${k}`, [i, j, k]);
  // Octahedral core.
  for (let i = -4; i <= 4; i++) for (let j = -4; j <= 4; j++) for (let k = -4; k <= 4; k++) if (Math.abs(i) + Math.abs(j) + Math.abs(k) <= 3) add(i, j, k);
  // Six main arms with fishbone branches.
  const axes = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
  for (const d of axes) {
    const perp = axes.filter((q) => q[0] * d[0] + q[1] * d[1] + q[2] * d[2] === 0);
    for (let s = 1; s <= 11; s++) {
      const thick = s < 5 ? 1 : 0;
      for (let u = -thick; u <= thick; u++) for (let w = -thick; w <= thick; w++) {
        if (Math.abs(u) + Math.abs(w) > thick) continue;
        const p1 = perp[0], p2 = perp[2];
        add(d[0] * s + p1[0] * u + p2[0] * w, d[1] * s + p1[1] * u + p2[1] * w, d[2] * s + p1[2] * u + p2[2] * w);
      }
      if (s === 4 || s === 7 || s === 9) {
        const len = s === 4 ? 5 : s === 7 ? 3 : 2;
        for (const q of perp) for (let l = 1; l <= len; l++) add(d[0] * s + q[0] * l, d[1] * s + q[1] * l, d[2] * s + q[2] * l);
      }
    }
  }
  const list = [...sites.values()];
  list.sort((p, q) => Math.hypot(...p) - Math.hypot(...q));
  return list;
}

/** World position of a lattice site. */
export function sitePosition(s, out) {
  const a = CRYSTAL.a;
  return transform(CRYSTAL.matrix, s[0] * a, s[1] * a, s[2] * a, out);
}

export default {
  id: 'ch4',
  seed: 2404,
  radius: 2.45,
  center: [0, 0, 0],
  view: { yaw: 0.0, pitch: 0.28 },
  tint: HEX.ice,
  morph: 'chapter',
  // Reveal outward from the seed as you read. The chapter cover (reading 0) already shows a
  // substantial crystal, about three quarters grown; the last stretch grows with the text.
  reading: { preview: 0.92, evolve: [0.74, 1.0], mode: 1 },
  *build(b) {
    const sites = crystalSites();
    const maxD = Math.hypot(11, 1, 0);
    const p = [0, 0, 0];
    const dir = [0, 0, 0];
    const ax = CRYSTAL.axis;
    const atomBudget = b.quota(0.6);
    const perAtom = Math.max(3, Math.floor(atomBudget / sites.length));
    for (const s of sites) {
      sitePosition(s, p);
      const d = Math.hypot(s[0], s[1], s[2]) / maxD;
      const ev = Math.min(0.97, 0.04 + d * 0.92);
      // The seed's neighbourhood is white-hot; the grown lattice cools to ice (luminance, not hue).
      const col = keep(C.iceHi, keep(C.white, C.ice, 0.55), Math.min(1, d * 2.4));
      // Nucleus.
      for (let k = 0; k < perAtom; k++) {
        if (b.tick()) yield;
        const nucleus = k < perAtom * 0.4;
        const sig = nucleus ? 0.008 : 0.026;
        const i = b.point(p[0] + b.gauss() * sig, p[1] + b.gauss() * sig, p[2] + b.gauss() * sig, col, nucleus ? 0.42 : 0.035, nucleus ? 0.012 : 0.01);
        b.orbit(i, ax[0], ax[1], ax[2], CRYSTAL.spin);
        b.evolve(i, ev);
      }
    }

    // The growth front: loose matter falling onto the outer sites.
    const front = b.quota(0.14);
    const outer = sites.slice(Math.floor(sites.length * 0.45));
    for (let k = 0; k < front; k++) {
      if (b.tick()) yield;
      const s = outer[Math.floor(b.rng() * outer.length)];
      sitePosition(s, p);
      unitVector(b, dir);
      const r = 0.25 + b.rng() * 0.35;
      const i = b.point(p[0] + dir[0] * r, p[1] + dir[1] * r, p[2] + dir[2] * r, mix(C.ice, C.white, b.rng()), 0.12, 0.01);
      b.flow(i, -dir[0] * r, -dir[1] * r, -dir[2] * r, 0.22 + 0.15 * b.rng());
      b.orbit(i, ax[0], ax[1], ax[2], CRYSTAL.spin);
    }

    // Seed: a white-hot heart.
    cluster(b, b.quota(0.012), 0, 0, 0, 0.04, C.iceHi, 0.7, 0.02, { falloff: 1.2 });

    // Disordered gas: the raw matter still waiting to be organised.
    const gas = b.quota(0.18);
    for (let k = 0; k < gas; k++) {
      if (b.tick()) yield;
      unitVector(b, dir);
      const r = 1.0 + Math.pow(b.rng(), 0.7) * 2.6;
      const i = b.point(dir[0] * r, dir[1] * r * 0.85, dir[2] * r, mix(C.steel, C.deep, b.rng()), 0.012 + 0.018 * b.rng(), 0.011 + 0.006 * b.rng());
      b.orbit(i, b.rng() - 0.5, 1, b.rng() - 0.5, 0.05 + 0.08 * b.rng());
      b.twinkle(i, 0.5);
    }
  },
};
