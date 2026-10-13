// Cover — "the possibility ring": a luminous, twisted (Möbius-like) ribbon of filaments around a
// tiny white-hot singularity. The ribbon rotates rigidly so its twist slides around the loop, while
// a third of the particles slide along the filaments: the ring visibly flows. Faint matter
// spirals inward to the singularity. The 8 chapter nodes ride an inclined orbit (accent).

import { C, HEX } from '../config.js';
import { TAU, eulerMatrix } from '../math.js';
import { cluster, mix, transform } from './common.js';

/** Ring frame: local ring plane is XZ (normal +Y); this matrix tilts it into world space. */
export const RING = {
  radius: 2.0,
  matrix: eulerMatrix(0.1, 0.0, -0.27),
  spin: 0.05,
  nodeOrbit: { radius: 2.95, matrix: eulerMatrix(0.36, 0.0, -0.12), speed: 0.012, phase: 0.42 },
};

const v = [0, 0, 0];
const ax = [0, 0, 0];

export default {
  id: 'cover',
  seed: 1101,
  radius: 3.15,
  center: [0, 0, 0],
  view: { yaw: 0.0, pitch: 0.4 },
  tint: HEX.deep,
  morph: 'cover',
  reading: { preview: 1 },
  *build(b) {
    const M = RING.matrix;
    transform(M, 0, 1, 0, ax);
    const axis = [ax[0], ax[1], ax[2]];
    const put = (x, y, z, col, bright, size) => {
      transform(M, x, y, z, v);
      return b.point(v[0], v[1], v[2], col, bright, size);
    };

    // 1 — the ribbon: S fine filaments across a band that twists 1.5 turns around the loop.
    const S = 26;
    const ribbon = b.quota(0.64);
    const W = 0.34;
    const strandPhase = [];
    for (let s = 0; s < S; s++) strandPhase.push([b.rng() * TAU, 2 + Math.floor(b.rng() * 4), 0.55 + 0.85 * b.rng()]);
    for (let k = 0; k < ribbon; k++) {
      if (b.tick()) yield;
      const s = k % S;
      const [ph, waves, gain] = strandPhase[s];
      const u = -1 + (2 * (s + 0.5)) / S + b.gauss() * 0.0035;
      const t = b.rng() * TAU;
      const theta = 0.35 + 1.5 * t;
      const R = RING.radius + 0.085 * Math.cos(2 * t + 0.5);
      const h = 0.15 * Math.sin(t + 0.7) + 0.045 * Math.sin(3 * t);
      const w = W * (0.86 + 0.2 * Math.sin(2 * t + 1.1));
      const dr = u * w * Math.cos(theta);
      const dy = u * w * Math.sin(theta) * 0.8;
      const fl = b.gauss() * 0.0035;
      const x = (R + dr + fl) * Math.cos(t);
      const z = (R + dr + fl) * Math.sin(t);
      const y = h + dy + fl;
      // Light: one flank of the loop catches more light; the band's edges glow (rim);
      // each filament carries slow brightness waves so the flow reads as it turns. The inner side,
      // facing the singularity, whitens (luminance, never hue).
      const lit = 0.35 + 0.65 * Math.pow(0.5 + 0.5 * Math.cos(t - 2.2), 1.5);
      const edge = s === 0 || s === S - 1 ? 1.9 : 1;
      const rim = (0.4 + 0.6 * Math.pow(Math.abs(u), 4)) * edge;
      const wave = 0.45 + 0.55 * Math.pow(0.5 + 0.5 * Math.sin(t * waves + ph), 2);
      const inner = dr < 0 ? Math.min(1, -dr / W) : 0;
      const col = mix(mix(C.white, C.ice, 0.2 + 0.4 * (1 - Math.abs(u))), C.iceHi, 0.4 * inner * lit);
      const bead = b.rng() < 1 / 140;
      const i = put(x, y, z, col, (bead ? 0.9 : 0.36) * lit * rim * wave * gain, bead ? 0.034 : 0.0085 + b.rng() * 0.006);
      b.orbit(i, axis[0], axis[1], axis[2], RING.spin);
      if (b.rng() < 0.3) {
        // Slide along the loop's tangent: a short dash of travel, faded at both ends.
        const len = 0.22 + b.rng() * 0.25;
        transform(M, -Math.sin(t) * len, 0, Math.cos(t) * len, v);
        b.flow(i, v[0], v[1], v[2], 0.1 + b.rng() * 0.12);
      }
      if (bead) b.twinkle(i, 0.8);
    }

    // 1b — wisps: a few filaments straying off the band.
    const wisps = b.quota(0.03);
    for (let k = 0; k < wisps; k++) {
      if (b.tick()) yield;
      const s = k % 7;
      const t = b.rng() * TAU;
      const off = 0.42 + 0.1 * Math.sin(t * 2 + s) + s * 0.03;
      const R = RING.radius + off * Math.cos(t * 1.5 + s);
      const y = 0.15 * Math.sin(t + 0.7) + off * 0.6 * Math.sin(t * 1.5 + s * 2);
      const i = put(R * Math.cos(t), y, R * Math.sin(t), mix(C.ice, C.steel, 0.4), 0.06 * (0.5 + 0.5 * Math.sin(t * 3 + s)), 0.009);
      b.orbit(i, axis[0], axis[1], axis[2], RING.spin * 0.9);
    }

    // 2 — soft scatter around the ribbon (atmosphere).
    const scatter = b.quota(0.06);
    for (let k = 0; k < scatter; k++) {
      if (b.tick()) yield;
      const t = b.rng() * TAU;
      const R = RING.radius + b.gauss() * 0.16;
      const i = put(R * Math.cos(t), 0.15 * Math.sin(t + 0.7) + b.gauss() * 0.09, R * Math.sin(t), C.steel, 0.05 + b.rng() * 0.05, 0.016 + b.rng() * 0.012);
      b.orbit(i, axis[0], axis[1], axis[2], RING.spin * 0.8);
    }

    // 3 — inner accretion: faint matter spiralling into the singularity, whitening as it nears it.
    const accretion = b.quota(0.075);
    for (let k = 0; k < accretion; k++) {
      if (b.tick()) yield;
      const r = 0.1 + 1.45 * Math.pow(b.rng(), 0.8);
      const t = b.rng() * TAU;
      const heat = Math.pow(1 - r / 1.6, 2.2);
      const col = mix(C.steel, C.iceHi, heat);
      const i = put(r * Math.cos(t), b.gauss() * 0.02 * r, r * Math.sin(t), col, 0.04 + 0.16 * heat, 0.011 + 0.01 * b.rng());
      b.orbit(i, axis[0], axis[1], axis[2], Math.min(1.6, 0.16 / Math.pow(r, 1.25)));
      transform(M, -Math.cos(t) * r * 0.35, 0, -Math.sin(t) * r * 0.35, v);
      b.flow(i, v[0], v[1], v[2], 0.05 + b.rng() * 0.05);
    }

    // 4 — the singularity: a tiny white-hot core in an ice-cyan corona.
    cluster(b, b.quota(0.012), 0, 0, 0, 0.035, C.ice, 0.55, 0.018, { spin: 0.6, falloff: 1.2 });
    cluster(b, b.quota(0.004), 0, 0, 0, 0.012, C.iceHi, 0.9, 0.016, { spin: 0.9 });

    // 5 — outer halo: a thin, very faint disc beyond the ribbon.
    const halo = b.quota(0.09);
    for (let k = 0; k < halo; k++) {
      if (b.tick()) yield;
      const r = 2.45 + Math.pow(b.rng(), 1.4) * 2.4;
      const t = b.rng() * TAU;
      const i = put(r * Math.cos(t), b.gauss() * 0.07, r * Math.sin(t), mix(C.deep, C.ice, b.rng() * 0.4), 0.006 + 0.016 * b.rng() * (3.2 / r), 0.012 + 0.008 * b.rng());
      b.orbit(i, axis[0], axis[1], axis[2], 0.028);
    }
  },
};
