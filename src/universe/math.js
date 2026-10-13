// Small, allocation-free math helpers shared by the universe engine.

export const TAU = Math.PI * 2;

export const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
export const smootherstep = (t) => t * t * t * (t * (t * 6 - 15) + 10);

/** Deterministic PRNG (mulberry32). Returns a function producing [0, 1). */
export function mulberry32(seed) {
  let s = seed >>> 0;
  return function next() {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** GLSL-compatible fract. */
export const fract = (x) => x - Math.floor(x);

export const srgbToLinear = (c) => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
export const linearToSrgb = (c) => (c <= 0.0031308 ? c * 12.92 : 1.055 * Math.pow(c, 1 / 2.4) - 0.055);

/** '#rrggbb' → linear-light [r, g, b]. */
export function hexToLinear(hex) {
  const v = parseInt(hex.slice(1), 16);
  return [srgbToLinear(((v >> 16) & 255) / 255), srgbToLinear(((v >> 8) & 255) / 255), srgbToLinear((v & 255) / 255)];
}

/** '#rrggbb' → display-space [r, g, b] in 0..1. */
export function hexToSrgb(hex) {
  const v = parseInt(hex.slice(1), 16);
  return [((v >> 16) & 255) / 255, ((v >> 8) & 255) / 255, (v & 255) / 255];
}

/** Mix two linear colours into `out`. */
export function mixColor(out, a, b, t) {
  out[0] = a[0] + (b[0] - a[0]) * t;
  out[1] = a[1] + (b[1] - a[1]) * t;
  out[2] = a[2] + (b[2] - a[2]) * t;
  return out;
}

/**
 * Critically damped spring towards a target (Unity-style SmoothDamp).
 * `s` is a reusable {value, velocity} record; returns the new value.
 */
export function smoothDamp(s, target, smoothTime, dt) {
  const st = Math.max(0.0001, smoothTime);
  const omega = 2 / st;
  const x = omega * dt;
  const exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
  const change = s.value - target;
  const temp = (s.velocity + omega * change) * dt;
  s.velocity = (s.velocity - omega * temp) * exp;
  let value = target + (change + temp) * exp;
  // Prevent overshoot.
  if ((target - s.value > 0) === (value > target)) {
    value = target;
    s.velocity = (value - target) / Math.max(dt, 1e-5);
  }
  s.value = value;
  return value;
}

export const damper = (value = 0) => ({ value, velocity: 0 });

/** Exponential approach, frame-rate independent. */
export const approach = (current, target, rate, dt) => current + (target - current) * (1 - Math.exp(-rate * dt));

/**
 * Rodrigues rotation of (x, y, z) about the unit axis (ax, ay, az) by `angle`,
 * written into out[o..o+2]. Mirrors rotateAxis() in the particle shader.
 */
export function rotateAxis(out, o, x, y, z, ax, ay, az, angle) {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  const d = (ax * x + ay * y + az * z) * (1 - c);
  out[o] = x * c + (ay * z - az * y) * s + ax * d;
  out[o + 1] = y * c + (az * x - ax * z) * s + ay * d;
  out[o + 2] = z * c + (ax * y - ay * x) * s + az * d;
}

/** Builds an orthonormal basis (u, v) perpendicular to unit n. Writes 6 numbers into out. */
export function basisFromNormal(out, nx, ny, nz) {
  // Pick the least aligned helper axis.
  let hx = 0, hy = 1, hz = 0;
  if (Math.abs(ny) > 0.9) { hx = 1; hy = 0; }
  // u = normalize(h × n)
  let ux = hy * nz - hz * ny, uy = hz * nx - hx * nz, uz = hx * ny - hy * nx;
  const ul = Math.hypot(ux, uy, uz) || 1;
  ux /= ul; uy /= ul; uz /= ul;
  // v = n × u
  out[0] = ux; out[1] = uy; out[2] = uz;
  out[3] = ny * uz - nz * uy; out[4] = nz * ux - nx * uz; out[5] = nx * uy - ny * ux;
  return out;
}

export function normalize3(out, x, y, z) {
  const l = Math.hypot(x, y, z) || 1;
  out[0] = x / l; out[1] = y / l; out[2] = z / l;
  return out;
}

/** Rotation matrix from Euler angles (XYZ order), row-major 3×3 in a Float64Array(9). */
export function eulerMatrix(rx, ry, rz) {
  const cx = Math.cos(rx), sx = Math.sin(rx), cy = Math.cos(ry), sy = Math.sin(ry), cz = Math.cos(rz), sz = Math.sin(rz);
  // R = Rz * Ry * Rx
  return new Float64Array([
    cz * cy, cz * sy * sx - sz * cx, cz * sy * cx + sz * sx,
    sz * cy, sz * sy * sx + cz * cx, sz * sy * cx - cz * sx,
    -sy, cy * sx, cy * cx,
  ]);
}

export function applyMatrix(out, m, x, y, z) {
  out[0] = m[0] * x + m[1] * y + m[2] * z;
  out[1] = m[3] * x + m[4] * y + m[5] * z;
  out[2] = m[6] * x + m[7] * y + m[8] * z;
  return out;
}
