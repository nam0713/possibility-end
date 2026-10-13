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
