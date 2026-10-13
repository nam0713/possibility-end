// 'ending-ready' — the bright seed waiting at the end of ch.8: nearly all matter condensed into a
// small, seething, white-hot core in an ice-cyan corona; faint arcs of sparks orbit it; the last
// threads of matter fall in. Plus 'origin': the scattered dust the site loads in from.
//
// Exactly ONE light (design/V9.1-FEEDBACK.md 3): everything bright is concentric with the core at the
// formation's centre (= its focus = the anchor the UI rests the trigger on). Nothing else may read as
// a second light, at any viewport and at any moment:
//   - the spark arcs are faint and have no bright heads, and their orbit planes stay within 50° of
//     facing the camera: an orbit seen edge-on would fold a whole arc into one short, bright dash
//     (the second "white dot" of v9), a face-on one cannot bunch more than ~1.6×;
//   - the corona and the core are radially symmetric about the centre.

import { C, HEX } from '../config.js';
import { TAU, basisFromNormal } from '../math.js';
import { keep, mix, unitVector } from './common.js';

const VIEW = { yaw: 0.0, pitch: 0.2 };
/** Unit vector from the seed toward the camera (the rig orbits the centre at spec.view). */
const TOWARD_CAMERA = [Math.sin(VIEW.yaw) * Math.cos(VIEW.pitch), Math.sin(VIEW.pitch), Math.cos(VIEW.yaw) * Math.cos(VIEW.pitch)];
/** Widest angle between an arc's orbit normal and the view axis. */
const MAX_TILT = 0.87;

export const seed = {
  id: 'seed',
  seed: 2909,
  radius: 1.9,
  center: [0, 0, 0],
  view: VIEW,
  tint: HEX.ice,
  morph: 'seed',
  reading: { preview: 1 },
  // The end of ch.8 waits in the 'reading' composition: the seed stays small and central there (the
  // UI's trigger rests on it), not spread to the margins like a chapter's formation behind its text.
  compose: { reading: { wide: { scale: 0.37 } } },
  *build(b) {
    const v = [0, 0, 0];
    // The core: very many very dim particles in a tight, seething ball, white-hot at its heart.
    const core = b.quota(0.46);
    for (let k = 0; k < core; k++) {
      if (b.tick()) yield;
      unitVector(b, v);
      const r = Math.abs(b.gauss()) * 0.09 * (0.6 + 0.4 * b.rng());
      const heat = Math.exp(-r * 18);
      const i = b.point(v[0] * r, v[1] * r, v[2] * r, mix(C.ice, C.iceHi, 0.25 + 0.75 * heat), 0.008 + 0.022 * heat, 0.01);
      b.orbit(i, b.rng() - 0.5, b.rng() - 0.5, b.rng() - 0.5, 0.4 + 1.2 * b.rng());
    }
    // Corona of the seed: a wider, fainter glow of points.
    const corona = b.quota(0.18);
    for (let k = 0; k < corona; k++) {
      if (b.tick()) yield;
      unitVector(b, v);
      const r = 0.1 + Math.abs(b.gauss()) * 0.22;
      const i = b.point(v[0] * r, v[1] * r, v[2] * r, mix(C.ice, C.deep, b.rng() * 0.5), 0.012 + 0.016 * b.rng(), 0.011);
      b.orbit(i, v[2], 1, -v[0], 0.3 + 0.5 * b.rng());
      b.twinkle(i, 0.5);
    }
    // Sparks: faint arcs on inclined orbits (never edge-on, see above), brighter toward the leading
    // end but never bright enough to read as a point of their own.
    const sparks = b.quota(0.1);
    const orbits = [];
    const basis = new Float64Array(6);
    basisFromNormal(basis, TOWARD_CAMERA[0], TOWARD_CAMERA[1], TOWARD_CAMERA[2]);
    const cosMax = Math.cos(MAX_TILT);
    for (let k = 0; k < 56; k++) {
      if (b.tick()) yield;
      // Uniform on the spherical cap around the view axis.
      const z = cosMax + (1 - cosMax) * b.rng();
      const a = b.rng() * TAU;
      const s = Math.sqrt(1 - z * z);
      const nx = TOWARD_CAMERA[0] * z + (basis[0] * Math.cos(a) + basis[3] * Math.sin(a)) * s;
      const ny = TOWARD_CAMERA[1] * z + (basis[1] * Math.cos(a) + basis[4] * Math.sin(a)) * s;
      const nz = TOWARD_CAMERA[2] * z + (basis[2] * Math.cos(a) + basis[5] * Math.sin(a)) * s;
      const r = 0.3 + Math.pow(b.rng(), 1.4) * 1.0;
      orbits.push([nx, ny, nz, r, b.rng() < 0.75 ? 1 : -1, b.rng() * TAU, 0.5 + b.rng() * 1.4]);
    }
    const arc = new Float64Array(6);
    const tone = keep(C.white, C.ice, 0.35);
    for (let k = 0; k < sparks; k++) {
      if (b.tick()) yield;
      const [nx, ny, nz, r, dir, a0, len] = orbits[k % orbits.length];
      basisFromNormal(arc, nx, ny, nz);
      const f = b.rng();
      // The leading end is a little brighter, the tail fades (arcs move head-first: dir sets the side).
      const a = a0 - dir * f * len;
      const ca = Math.cos(a) * r, sa = Math.sin(a) * r;
      const lead = Math.pow(1 - f, 1.4);
      const i = b.point(arc[0] * ca + arc[3] * sa, arc[1] * ca + arc[4] * sa, arc[2] * ca + arc[5] * sa, mix(tone, C.deep, 0.35 * (r - 0.3)), (0.012 + 0.05 * lead) * (1.2 - r * 0.4), 0.008 + 0.003 * lead);
      b.orbit(i, nx, ny, nz, (dir * 0.32) / Math.pow(r, 1.5));
      b.twinkle(i, 0.3);
    }
    // Last matter falling in along a few slow spirals.
    const threads = b.quota(0.08);
    for (let k = 0; k < threads; k++) {
      if (b.tick()) yield;
      const s = k % 5;
      const t = b.rng();
      const r = 0.35 + t * 2.4;
      const a = s * 1.2566 + Math.log(r / 0.35) * 2.2 + b.gauss() * 0.02;
      const x = Math.cos(a) * r, z = Math.sin(a) * r, y = Math.sin(a * 0.5 + s) * 0.18 * t;
      const i = b.point(x, y, z, mix(C.deep, C.ice, 0.5 * (1 - t)), (0.03 + 0.04 * b.rng()) * (1 - 0.6 * t), 0.009);
      const len = 0.25 + r * 0.15;
      b.flow(i, (-Math.cos(a) - Math.sin(a) * 0.45) * len, 0, (-Math.sin(a) + Math.cos(a) * 0.45) * len, 0.08);
      b.orbit(i, 0, 1, 0, 0.1);
    }
  },
};

export const origin = {
  id: 'origin',
  seed: 3001,
  radius: 3.2,
  center: [0, 0, 0],
  view: { yaw: 0.0, pitch: 0.35 },
  tint: HEX.deep,
  morph: 'intro',
  reading: { preview: 1 },
  *build(b) {
    const v = [0, 0, 0];
    while (b.remaining > 0) {
      if (b.tick()) yield;
      unitVector(b, v);
      const r = 5.5 + Math.pow(b.rng(), 0.5) * 9;
      const i = b.point(v[0] * r, v[1] * r * 0.7, v[2] * r, mix(C.steel, C.ice, b.rng() * 0.3), 0.008 + 0.012 * b.rng(), 0.02);
      b.orbit(i, 0, 1, 0, 0.02 + 0.02 * b.rng());
    }
  },
};
