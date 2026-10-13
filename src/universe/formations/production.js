// Ch.3 손 PRODUCTION — a closed production loop: a trefoil knot carrying five conveyor lanes of
// ice particles streaming along it (an assembly line), with warm "products" (still glowing, 4800 K)
// riding the lanes. Six factories sit on the knot — furnaces, the brightest lights: orange-hot
// (3900 K) round a white-hot heart, throwing orange sparks — each spawning small deep-blue dependency
// loops, some of which spawn their own.
// While reading, the last stretch of the knot fills in: the loop closes.

import { C, HEX } from '../config.js';
import { TAU, eulerMatrix, kelvin } from '../math.js';
import { circlePoint, cluster, mix, transform } from './common.js';

const S = 0.62;
const M = eulerMatrix(0.42, -0.18, 0.28);
const out = [0, 0, 0];

/** Trefoil (2,3 torus knot) in world space at parameter t ∈ [0, 1). */
export function knotPoint(t, o = out) {
  const a = t * TAU;
  const r = 2 + Math.cos(3 * a);
  return transform(M, r * Math.cos(2 * a) * S, r * Math.sin(2 * a) * S, Math.sin(3 * a) * S, o);
}

/** Unit tangent, normal and binormal of the knot (finite differences + fixed reference). */
export function knotFrame(t, frame) {
  const e = 1e-4;
  const p0 = knotPoint(t - e, [0, 0, 0]);
  const p1 = knotPoint(t + e, [0, 0, 0]);
  let tx = p1[0] - p0[0], ty = p1[1] - p0[1], tz = p1[2] - p0[2];
  const tl = Math.sqrt(tx * tx + ty * ty + tz * tz);
  tx /= tl; ty /= tl; tz /= tl;
  // Reference: direction from the knot's axis (world-space image of local z).
  const ref = transform(M, 0, 0, 1, [0, 0, 0]);
  let nx = ty * ref[2] - tz * ref[1], ny = tz * ref[0] - tx * ref[2], nz = tx * ref[1] - ty * ref[0];
  const nl = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
  nx /= nl; ny /= nl; nz /= nl;
  frame[0] = tx; frame[1] = ty; frame[2] = tz;
  frame[3] = nx; frame[4] = ny; frame[5] = nz;
  frame[6] = ty * nz - tz * ny; frame[7] = tz * nx - tx * nz; frame[8] = tx * ny - ty * nx;
  frame[9] = tl / (2 * e);
  return frame;
}

export const FACTORIES = [0.04, 0.2, 0.37, 0.53, 0.7, 0.87];
const GAP_START = 0.8;

export default {
  id: 'ch3',
  seed: 2303,
  radius: 2.55,
  center: [0, 0, 0],
  view: { yaw: 0.0, pitch: 0.22 },
  tint: HEX.deep,
  morph: 'chapter',
  // Chapter start: the loop is open (its last stretch missing); it closes as you read.
  reading: { preview: 1, evolve: [0.42, 1.0], mode: 1 },
  *build(b) {
    const fr = new Float64Array(10);
    const p = [0, 0, 0];

    // Conveyor lanes around the knot tube.
    const lanes = 5;
    const tube = 0.12;
    const laneBudget = b.quota(0.52);
    for (let k = 0; k < laneBudget; k++) {
      if (b.tick()) yield;
      const lane = k % lanes;
      const t = b.rng();
      knotFrame(t, fr);
      knotPoint(t, p);
      const ang = (lane / lanes) * TAU + t * TAU * 2;
      const rr = tube * (0.92 + b.rng() * 0.16);
      const ox = (fr[3] * Math.cos(ang) + fr[6] * Math.sin(ang)) * rr;
      const oy = (fr[4] * Math.cos(ang) + fr[7] * Math.sin(ang)) * rr;
      const oz = (fr[5] * Math.cos(ang) + fr[8] * Math.sin(ang)) * rr;
      const product = b.rng() < 0.012;
      const i = b.point(p[0] + ox, p[1] + oy, p[2] + oz, product ? C.yellow : mix(C.white, C.ice, 0.3 + 0.4 * (lane / lanes)), product ? 0.8 : 0.19 + 0.12 * b.rng(), product ? 0.042 : 0.012 + 0.008 * b.rng());
      const len = 0.16;
      b.flow(i, fr[0] * len, fr[1] * len, fr[2] * len, 0.32 + 0.06 * (lane % 2));
      if (t > GAP_START) b.evolve(i, 0.42 + ((t - GAP_START) / (1 - GAP_START)) * 0.56);
      b.key(i, t);
    }

    // Core filament: a faint continuous spine inside the tube.
    const spine = b.quota(0.08);
    for (let k = 0; k < spine; k++) {
      if (b.tick()) yield;
      const t = b.rng();
      knotPoint(t, p);
      knotFrame(t, fr);
      const i = b.point(p[0] + b.gauss() * 0.03, p[1] + b.gauss() * 0.03, p[2] + b.gauss() * 0.03, C.steel, 0.07, 0.016);
      b.flow(i, fr[0] * 0.1, fr[1] * 0.1, fr[2] * 0.1, 0.2);
      if (t > GAP_START) b.evolve(i, 0.42 + ((t - GAP_START) / (1 - GAP_START)) * 0.56);
      b.key(i, t);
    }

    // Factories: furnace-hot clusters on the knot, each with dependency loops branching off.
    const factoryBudget = b.quota(0.07);
    const loopBudget = b.quota(0.2);
    const loops = [];
    FACTORIES.forEach((t, f) => {
      knotPoint(t, p);
      knotFrame(t, fr);
      const fp = [p[0], p[1], p[2]];
      cluster(b, Math.round(factoryBudget / FACTORIES.length), fp[0], fp[1], fp[2], 0.06, mix(C.orange, C.sun, 0.45), 0.32, 0.018, { falloff: 1.1, twinkle: 0.4 });
      // Primary dependency loop: lies in the (tangent, normal) plane, offset outward.
      const side = f % 2 ? 1 : -1;
      const r1 = 0.3 + 0.06 * (f % 3);
      const c1 = [fp[0] + fr[3] * side * (r1 + 0.1), fp[1] + fr[4] * side * (r1 + 0.1), fp[2] + fr[5] * side * (r1 + 0.1)];
      const n1 = [fr[6], fr[7], fr[8]];
      loops.push({ c: c1, n: n1, r: r1, w: 0.55 * side });
      if (f % 2 === 0) {
        const c2 = [c1[0] + fr[3] * side * (r1 + 0.18), c1[1] + fr[4] * side * (r1 + 0.18), c1[2] + fr[5] * side * (r1 + 0.18)];
        loops.push({ c: c2, n: [fr[0], fr[1], fr[2]], r: 0.15, w: -1.1 * side });
      }
    });
    const total = loops.reduce((s, l) => s + l.r, 0);
    for (const L of loops) {
      const n = Math.round((loopBudget * L.r) / total);
      for (let k = 0; k < n; k++) {
        if (b.tick()) yield;
        circlePoint(p, L.c[0], L.c[1], L.c[2], L.n[0], L.n[1], L.n[2], L.r + b.gauss() * 0.012, b.rng() * TAU);
        const i = b.point(p[0], p[1], p[2], mix(C.deep, C.ice, 0.35), 0.22 + 0.12 * b.rng(), 0.012 + 0.006 * b.rng());
        b.orbit(i, L.n[0], L.n[1], L.n[2], L.w, L.c[0], L.c[1], L.c[2]);
      }
    }

    // Sparks: orange glints around the factories (2300–3600 K, cooling as they fly).
    const sparks = b.quota(0.04);
    const spark = [0, 0, 0];
    for (let k = 0; k < sparks; k++) {
      if (b.tick()) yield;
      knotPoint(FACTORIES[k % FACTORIES.length], p);
      const i = b.point(p[0] + b.gauss() * 0.22, p[1] + b.gauss() * 0.22, p[2] + b.gauss() * 0.22, kelvin(2300 + 1300 * b.rng(), 1, spark), 0.13, 0.012);
      b.twinkle(i, 1);
      b.glint(i, 0.25);
    }
  },
};
