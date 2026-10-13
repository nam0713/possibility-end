// Geometry helpers shared by the formations. All randomness flows through the builder's
// seeded RNG so every formation is deterministic.

import { C } from '../config.js';
import { TAU, basisFromNormal } from '../math.js';

export const tmp3 = [0, 0, 0];
const basis = new Float64Array(6);

/** Uniform direction on the unit sphere. */
export function unitVector(b, out = tmp3) {
  const z = b.rng() * 2 - 1;
  const a = b.rng() * TAU;
  const r = Math.sqrt(1 - z * z);
  out[0] = r * Math.cos(a);
  out[1] = z;
  out[2] = r * Math.sin(a);
  return out;
}

/** Mix two linear colours into a fresh array (for colours that are kept, e.g. per group). */
export const keep = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];

// Per-particle mixing writes into a small rotating pool instead of allocating: the result is
// consumed immediately by b.point(), and nesting up to 8 deep is safe.
const pool = Array.from({ length: 8 }, () => [0, 0, 0]);
let poolIndex = 0;
export function mix(a, b, t) {
  const o = pool[(poolIndex = (poolIndex + 1) & 7)];
  o[0] = a[0] + (b[0] - a[0]) * t;
  o[1] = a[1] + (b[1] - a[1]) * t;
  o[2] = a[2] + (b[2] - a[2]) * t;
  return o;
}

/** 3×3 row-major rotation helpers for authoring. */
export function transform(m, x, y, z, out = tmp3) {
  out[0] = m[0] * x + m[1] * y + m[2] * z;
  out[1] = m[3] * x + m[4] * y + m[5] * z;
  out[2] = m[6] * x + m[7] * y + m[8] * z;
  return out;
}

/** Points on a circle of radius r around centre c with unit normal n, at angle a. */
export function circlePoint(out, cx, cy, cz, nx, ny, nz, r, a) {
  basisFromNormal(basis, nx, ny, nz);
  const ca = Math.cos(a) * r;
  const sa = Math.sin(a) * r;
  out[0] = cx + basis[0] * ca + basis[3] * sa;
  out[1] = cy + basis[1] * ca + basis[4] * sa;
  out[2] = cz + basis[2] * ca + basis[5] * sa;
  return out;
}

/**
 * Faint background dust filling the remaining slots: a sparse shell of matter that every
 * formation shares, so leftovers never collapse into visible clumps.
 */
export function* fillDust(b, { rMin = 4.2, rMax = 9.5, color = C.deep, brightness = 0.008, size = 0.016, flatten = 0.75, spin = 0.012 } = {}) {
  const v = [0, 0, 0];
  while (b.remaining > 0) {
    if (b.tick()) yield;
    unitVector(b, v);
    const r = rMin + (rMax - rMin) * Math.pow(b.rng(), 0.7);
    const i = b.point(v[0] * r, v[1] * r * flatten, v[2] * r, color, brightness * (0.4 + b.rng() * 1.2), size * (0.7 + b.rng() * 0.8));
    b.orbit(i, 0, 1, 0, spin);
    b.twinkle(i, 0.4);
  }
}

/** Gaussian cluster ("node", "atom", "core"). */
export function cluster(b, n, cx, cy, cz, sigma, color, brightness, size, opts = {}) {
  for (let k = 0; k < n; k++) {
    const g = Math.abs(b.gauss());
    const i = b.point(cx + b.gauss() * sigma, cy + b.gauss() * sigma, cz + b.gauss() * sigma, color, brightness * (opts.falloff ? Math.exp(-g * opts.falloff) + 0.25 : 1) * (0.6 + b.rng() * 0.8), size * (0.75 + b.rng() * 0.6));
    if (opts.spin) b.orbit(i, b.rng() - 0.5, b.rng() - 0.5, b.rng() - 0.5, opts.spin * (0.5 + b.rng()), cx, cy, cz);
    if (opts.twinkle) b.twinkle(i, opts.twinkle);
    if (opts.evolve !== undefined) b.evolve(i, opts.evolve);
    if (opts.anchor) b.anchor(i, opts.anchor[0], opts.anchor[1], opts.anchor[2]);
  }
}

/** Particles streaming along a straight connection A → B (pulses). */
export function connection(b, n, ax, ay, az, bx, by, bz, color, brightness, size, rate, jitter = 0.01) {
  const dx = bx - ax, dy = by - ay, dz = bz - az;
  for (let k = 0; k < n; k++) {
    const i = b.point(ax + b.gauss() * jitter, ay + b.gauss() * jitter, az + b.gauss() * jitter, color, brightness * (0.6 + b.rng() * 0.8), size * (0.8 + b.rng() * 0.5));
    b.flow(i, dx, dy, dz, rate * (0.85 + b.rng() * 0.3));
  }
}
