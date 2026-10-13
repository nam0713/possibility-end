// Small, allocation-free math helpers shared by the ending film modules.
// Everything the film shows is a pure function of film time, so these are the
// building blocks of its timeline curves and camera tracks.

export const TAU = Math.PI * 2;

export const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
export const clamp01 = x => (x < 0 ? 0 : x > 1 ? 1 : x);
export const mix = (a, b, t) => a + (b - a) * t;

/** Hermite smoothstep from a to b (a > b allowed for a falling edge). */
export function smoothstep(a, b, x) {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
}

/** Quintic smootherstep: zero 1st and 2nd derivatives at the ends. */
export function smootherstep(a, b, x) {
  const t = clamp01((x - a) / (b - a));
  return t * t * t * (t * (t * 6 - 15) + 10);
}

/** 0 → 1 over [a, b] with an exponential in-out profile (violent middle). */
export function expoInOut(a, b, x) {
  const t = clamp01((x - a) / (b - a));
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  return t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2;
}

/** A pulse that rises over `attack` seconds at t0 and decays with time constant `tau`. */
export function pulse(t, t0, attack, tau) {
  if (t < t0 - attack) return 0;
  if (t < t0) return smoothstep(t0 - attack, t0, t);
  return Math.exp(-(t - t0) / tau);
}

/** Deterministic PRNG (mulberry32). Returns a function producing [0, 1). */
export function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Standard normal sample from a uniform generator (Box–Muller). */
export function gauss(rand) {
  let u = rand();
  if (u < 1e-9) u = 1e-9;
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(TAU * rand());
}

/** sRGB (0..1) → linear, used for palette constants and handed-over colours. */
export function srgbToLinear(c) {
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

/** '#rrggbb' → linear RGB array. */
export function hexLinear(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [srgbToLinear(((n >> 16) & 255) / 255), srgbToLinear(((n >> 8) & 255) / 255), srgbToLinear((n & 255) / 255)];
}

/**
 * Monotone cubic (Fritsch–Carlson) track over keys [[t, v], ...].
 * Never overshoots between keys, so camera distances and fades stay in range.
 * Values before the first / after the last key are held.
 */
export function createTrack(keys, easeIn = true, easeOut = true) {
  const n = keys.length;
  const ts = new Float64Array(n);
  const vs = new Float64Array(n);
  const ms = new Float64Array(n);
  for (let i = 0; i < n; i++) { ts[i] = keys[i][0]; vs[i] = keys[i][1]; }
  const d = new Float64Array(Math.max(1, n - 1));
  for (let i = 0; i < n - 1; i++) d[i] = (vs[i + 1] - vs[i]) / (ts[i + 1] - ts[i]);
  for (let i = 0; i < n; i++) {
    if (i === 0) ms[i] = n > 1 ? d[0] : 0;
    else if (i === n - 1) ms[i] = d[n - 2];
    else ms[i] = d[i - 1] * d[i] <= 0 ? 0 : (d[i - 1] + d[i]) / 2;
  }
  // Ease in/out at the first and last key (or keep the one-sided slope).
  if (easeIn) ms[0] = 0;
  if (easeOut) ms[n - 1] = 0;
  for (let i = 0; i < n - 1; i++) {
    if (d[i] === 0) { ms[i] = 0; ms[i + 1] = 0; continue; }
    const a = ms[i] / d[i];
    const b = ms[i + 1] / d[i];
    const h = a * a + b * b;
    if (h > 9) {
      const k = 3 / Math.sqrt(h);
      ms[i] = k * a * d[i];
      ms[i + 1] = k * b * d[i];
    }
  }
  return { ts, vs, ms, n };
}

export function evalTrack(track, t) {
  const { ts, vs, ms, n } = track;
  if (t <= ts[0]) return vs[0];
  if (t >= ts[n - 1]) return vs[n - 1];
  let i = 0;
  while (i < n - 2 && t > ts[i + 1]) i++;
  const h = ts[i + 1] - ts[i];
  const s = (t - ts[i]) / h;
  const s2 = s * s;
  const s3 = s2 * s;
  return (2 * s3 - 3 * s2 + 1) * vs[i] + (s3 - 2 * s2 + s) * h * ms[i] + (-2 * s3 + 3 * s2) * vs[i + 1] + (s3 - s2) * h * ms[i + 1];
}

// ------------------------------------------------------------- blackbody light
// Physically based colour of thermal light (design/V9.1-FEEDBACK.md, amendment 2): Planck's law
// integrated against the CIE 1931 2° colour-matching functions (the multi-lobe Gaussian fit of
// Wyman, Sloan & Shirley 2013, JCGT 2(2)), XYZ → linear sRGB (D65), out-of-gamut negatives
// clipped, normalised so the largest channel is 1. 6500 K comes out white; a sun-like 5800 K a
// pale yellow-white; 1000 K a deep red; 20 000 K a pale blue-white.

const cmfLobe = (x, m, s1, s2) => { const t = (x - m) * (x < m ? s1 : s2); return Math.exp(-0.5 * t * t); };

/** Linear-sRGB colour of a blackbody at T kelvin (largest channel 1), integrated exactly. */
export function blackbodyExact(T) {
  let X = 0, Y = 0, Z = 0;
  for (let l = 380; l <= 780; l += 2) {
    const m = l * 1e-9;
    const B = 1 / (m ** 5 * (Math.exp(1.4388e-2 / (m * T)) - 1));
    X += B * (1.056 * cmfLobe(l, 599.8, 0.0264, 0.0323) + 0.362 * cmfLobe(l, 442.0, 0.0624, 0.0374) - 0.065 * cmfLobe(l, 501.1, 0.049, 0.0382));
    Y += B * (0.821 * cmfLobe(l, 568.8, 0.0213, 0.0247) + 0.286 * cmfLobe(l, 530.9, 0.0613, 0.0322));
    Z += B * (1.217 * cmfLobe(l, 437.0, 0.0845, 0.0278) + 0.681 * cmfLobe(l, 459.0, 0.0385, 0.0725));
  }
  const r = Math.max(0, 3.2406 * X - 1.5372 * Y - 0.4986 * Z);
  const g = Math.max(0, -0.9689 * X + 1.8758 * Y + 0.0415 * Z);
  const b = Math.max(0, 0.0557 * X - 0.204 * Y + 1.057 * Z);
  const m = Math.max(r, g, b) || 1;
  return [r / m, g / m, b / m];
}

/** The blackbody table the film samples (GLSL `blackbody()` and JS `blackbody()`): log-spaced kelvins. */
export const BB_MIN_K = 800;
export const BB_MAX_K = 40000;
export const BB_STEPS = 32;
export const BB_TABLE = Object.freeze(Array.from({ length: BB_STEPS }, (_, i) => Object.freeze(blackbodyExact(BB_MIN_K * Math.pow(BB_MAX_K / BB_MIN_K, i / (BB_STEPS - 1))))));

/** Linear-sRGB tint (largest channel 1) of thermal light at T kelvin, from the table. */
export function blackbody(T, out = [0, 0, 0]) {
  const x = clamp(Math.log(Math.max(T, 1) / BB_MIN_K) / Math.log(BB_MAX_K / BB_MIN_K) * (BB_STEPS - 1), 0, BB_STEPS - 1);
  const i = Math.min(BB_STEPS - 2, Math.floor(x));
  const f = x - i;
  const a = BB_TABLE[i], b = BB_TABLE[i + 1];
  out[0] = a[0] + (b[0] - a[0]) * f; out[1] = a[1] + (b[1] - a[1]) * f; out[2] = a[2] + (b[2] - a[2]) * f;
  return out;
}

// ------------------------------------------------------------- simplex noise (CPU)
// 3D simplex noise after Stefan Gustavson's public-domain reference (2005, “Simplex noise
// demystified”), for fields the film bakes into textures at build time. Range ≈ −1 … 1.
const GRAD3 = new Int8Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]);

/** A seeded 3D simplex noise function (x, y, z) → ≈ −1 … 1. */
export function createSimplex3(seed) {
  const rand = rng(seed);
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); const t = p[i]; p[i] = p[j]; p[j] = t; }
  const perm = new Uint8Array(512);
  const g12 = new Uint8Array(512);
  for (let i = 0; i < 512; i++) { perm[i] = p[i & 255]; g12[i] = (perm[i] % 12) * 3; }
  const F3 = 1 / 3, G3 = 1 / 6;
  return function noise(x, y, z) {
    const s = (x + y + z) * F3;
    const i = Math.floor(x + s), j = Math.floor(y + s), k = Math.floor(z + s);
    const t = (i + j + k) * G3;
    const x0 = x - (i - t), y0 = y - (j - t), z0 = z - (k - t);
    let i1, j1, k1, i2, j2, k2;
    if (x0 >= y0) {
      if (y0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
      else if (x0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1; }
      else { i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1; }
    } else if (y0 < z0) { i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1; }
    else if (x0 < z0) { i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1; }
    else { i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
    const x1 = x0 - i1 + G3, y1 = y0 - j1 + G3, z1 = z0 - k1 + G3;
    const x2 = x0 - i2 + 2 * G3, y2 = y0 - j2 + 2 * G3, z2 = z0 - k2 + 2 * G3;
    const x3 = x0 - 1 + 0.5, y3 = y0 - 1 + 0.5, z3 = z0 - 1 + 0.5;
    const ii = i & 255, jj = j & 255, kk = k & 255;
    let n = 0, tt, g;
    tt = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
    if (tt > 0) { g = g12[ii + perm[jj + perm[kk]]]; tt *= tt; n += tt * tt * (GRAD3[g] * x0 + GRAD3[g + 1] * y0 + GRAD3[g + 2] * z0); }
    tt = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
    if (tt > 0) { g = g12[ii + i1 + perm[jj + j1 + perm[kk + k1]]]; tt *= tt; n += tt * tt * (GRAD3[g] * x1 + GRAD3[g + 1] * y1 + GRAD3[g + 2] * z1); }
    tt = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
    if (tt > 0) { g = g12[ii + i2 + perm[jj + j2 + perm[kk + k2]]]; tt *= tt; n += tt * tt * (GRAD3[g] * x2 + GRAD3[g + 1] * y2 + GRAD3[g + 2] * z2); }
    tt = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
    if (tt > 0) { g = g12[ii + 1 + perm[jj + 1 + perm[kk + 1]]]; tt *= tt; n += tt * tt * (GRAD3[g] * x3 + GRAD3[g + 1] * y3 + GRAD3[g + 2] * z3); }
    return 32 * n;
  };
}
