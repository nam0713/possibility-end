// Ch.8 허용된 것들의 끝 POSSIBILITY — everything gathers toward one point: seven logarithmic
// filaments spiral inward and stream into a fragile, flickering seed; a faint outer shell of
// remaining matter falls in radially. The matter brightens and whitens as it nears the seed
// (luminance, never hue). Reading draws it all tighter.

import { C, HEX } from '../config.js';
import { TAU, basisFromNormal } from '../math.js';
import { cluster, mix, unitVector } from './common.js';

const nrm = (x, y, z) => {
  const l = Math.hypot(x, y, z);
  return [x / l, y / l, z / l];
};

// rMax keeps the arms inside the framing radius (like every other formation).
export const VORTEX = { normal: nrm(0.12, 1, 0.28), arms: 7, rMax: 2.78 };

export default {
  id: 'ch8',
  seed: 2808,
  radius: 2.85,
  center: [0, 0, 0],
  view: { yaw: 0.0, pitch: 0.5 },
  tint: HEX.deep,
  morph: 'chapter',
  reading: { preview: 0.3, expand: [1.0, 0.82] },
  // The chapter's title is the longest ('허용된 것들의 끝'): on wide screens the spiral steps right
  // and tightens so it never runs behind the title (cover, and the next-chapter card of ch.7).
  compose: { chapter: { wide: { cx: 0.75, scale: 0.8 } } },
  *build(b) {
    const basis = new Float64Array(6);
    const n = VORTEX.normal;
    basisFromNormal(basis, n[0], n[1], n[2]);
    const v = [0, 0, 0];
    const pitch = 0.27;

    // Spiral filaments: thin and luminous, streaming inward; each arm is a bundle of strands.
    const arms = b.quota(0.62);
    for (let k = 0; k < arms; k++) {
      if (b.tick()) yield;
      const arm = k % VORTEX.arms;
      const strand = (k >> 3) % 5;
      const t = Math.pow(b.rng(), 0.7);
      const r = 0.06 + VORTEX.rMax * t;
      const wind = Math.log(r / 0.06) / Math.tan(pitch) * 0.42;
      const a = (arm / VORTEX.arms) * TAU + wind + (strand - 2) * 0.016 * (0.5 + t) + b.gauss() * 0.0035 * (0.4 + t);
      const h = b.gauss() * 0.006 * (0.4 + t) + Math.sin(a * 2 + arm) * 0.07 * t;
      const ca = Math.cos(a), sa = Math.sin(a);
      const x = (basis[0] * ca + basis[3] * sa) * r + n[0] * h;
      const y = (basis[1] * ca + basis[4] * sa) * r + n[1] * h;
      const z = (basis[2] * ca + basis[5] * sa) * r + n[2] * h;
      const heat = Math.pow(1 - t, 2.4);
      const col = mix(mix(C.white, C.ice, 0.45 * t), C.iceHi, heat * 0.9);
      const i = b.point(x, y, z, col, (0.16 + 0.14 * b.rng()) * (0.45 + 1.1 * heat) * (1.15 - 0.7 * t), 0.0075 + 0.005 * b.rng());
      // Inward travel along the arm's own tangent (dθ/dr = k/r), plus one rigid rotation so the
      // arms never wind up over time.
      const kw = 0.42 / Math.tan(pitch);
      const len = 0.08 + r * 0.07;
      const tx = -ca + kw * sa, tz = -sa - kw * ca;
      const tl = Math.sqrt(tx * tx + tz * tz);
      b.flow(i, ((basis[0] * tx + basis[3] * tz) / tl) * len, ((basis[1] * tx + basis[4] * tz) / tl) * len, ((basis[2] * tx + basis[5] * tz) / tl) * len, 0.16 + 0.1 * b.rng());
      b.orbit(i, n[0], n[1], n[2], 0.07);
    }

    // Diffuse inflow between the arms.
    const diffuse = b.quota(0.1);
    for (let k = 0; k < diffuse; k++) {
      if (b.tick()) yield;
      const r = 0.2 + Math.pow(b.rng(), 0.8) * VORTEX.rMax;
      const a = b.rng() * TAU;
      const ca = Math.cos(a), sa = Math.sin(a);
      const i = b.point((basis[0] * ca + basis[3] * sa) * r, (basis[1] * ca + basis[4] * sa) * r + b.gauss() * 0.05, (basis[2] * ca + basis[5] * sa) * r, mix(C.deep, C.ice, 0.3), 0.02 + 0.02 * b.rng(), 0.01);
      b.flow(i, -(basis[0] * ca + basis[3] * sa) * r * 0.3, -(basis[1] * ca + basis[4] * sa) * r * 0.3, -(basis[2] * ca + basis[5] * sa) * r * 0.3, 0.06);
      b.orbit(i, n[0], n[1], n[2], 0.08);
    }

    // Outer shell: what remains of everything else, falling in.
    const shell = b.quota(0.12);
    for (let k = 0; k < shell; k++) {
      if (b.tick()) yield;
      unitVector(b, v);
      const r = 2.6 + b.rng() * 2.4;
      const i = b.point(v[0] * r, v[1] * r * 0.8, v[2] * r, mix(C.deep, C.ice, b.rng() * 0.4), 0.012 + 0.02 * b.rng(), 0.011);
      b.flow(i, -v[0] * r * 0.4, -v[1] * r * 0.32, -v[2] * r * 0.4, 0.04 + 0.03 * b.rng());
    }

    // The seed: small, bright, fragile.
    cluster(b, b.quota(0.014), 0, 0, 0, 0.04, C.ice, 0.3, 0.012, { falloff: 1.5, spin: 1.2, twinkle: 0.8 });
    cluster(b, b.quota(0.004), 0, 0, 0, 0.012, C.iceHi, 0.7, 0.012, { spin: 1.6, twinkle: 0.5 });
  },
};
