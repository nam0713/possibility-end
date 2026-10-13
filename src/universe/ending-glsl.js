// Shared GLSL chunks for the ending film.
// Noise: 3D simplex noise after Ashima Arts / Stefan Gustavson (MIT), hashes after
// Dave Hoskins' "hash without sine" (MIT). Everything else is written for this film.

export const HASH = /* glsl */ `
float hash11(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float hash13(vec3 p3) { p3 = fract(p3 * 0.1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
vec3 hash33(vec3 p3) {
  p3 = fract(p3 * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yxz + 33.33);
  return fract((p3.xxy + p3.yxx) * p3.zyx);
}
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
`;

export const SIMPLEX = /* glsl */ `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 10.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.5 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 105.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
`;

/**
 * The film's one colour family (design/V9.1-FEEDBACK.md): ice cyan to deep blue, hue ~190–210°.
 * Everything the film draws — hot or cold, star or planet — varies luminance and saturation inside
 * it, never the hue. In this film temperature reads as brightness and pallor: white-hot cores,
 * ice cyan, then a saturated deep blue as light cools and fades into black.
 *
 * Linear RGB tints (largest channel 1, so they scale cleanly):
 *   P_WHITE  white-hot, a breath of ice        P_HI    accent-hi  #e6fbff
 *   P_ICE    accent     #a9e7f2 (the theme)     P_BLUE  accent-deep #4f8fb0
 *   P_DEEP   deepest    #1b3a52 (saturated)     P_ABYSS the deepest blue a fading skirt reaches
 */
export const PALETTE = /* glsl */ `
const vec3 P_WHITE = vec3(0.93, 0.985, 1.0);
const vec3 P_HI = vec3(0.79, 0.965, 1.0);
const vec3 P_ICE = vec3(0.45, 0.9, 1.0);
const vec3 P_BLUE = vec3(0.18, 0.63, 1.0);
const vec3 P_DEEP = vec3(0.12, 0.5, 1.0);
const vec3 P_ABYSS = vec3(0.06, 0.35, 0.9);
`;

/** Thermal colour ramp: k = 0 (cold: dim deepest blue) … 1 (hot: ice-white). Linear RGB, unit-ish brightness. */
export const THERMAL = /* glsl */ `
vec3 thermal(float k) {
  k = clamp(k, 0.0, 1.0);
  // Luminance rises 0.035 → 0.23 → 0.55 → 0.78 → 0.93 (as the old ramp did); the hue stays put.
  vec3 c0 = vec3(0.0092, 0.0385, 0.077);
  vec3 c1 = vec3(0.073, 0.255, 0.405);
  vec3 c2 = vec3(0.26, 0.607, 0.867);
  vec3 c3 = vec3(0.43, 0.86, 0.954);
  vec3 c4 = vec3(0.80, 0.95, 1.00);
  if (k < 0.25) return mix(c0, c1, k / 0.25);
  if (k < 0.5) return mix(c1, c2, (k - 0.25) / 0.25);
  if (k < 0.75) return mix(c2, c3, (k - 0.5) / 0.25);
  return mix(c3, c4, (k - 0.75) / 0.25);
}
`;

/**
 * Incandescence in the cold family: k = 0 (a dim, saturated deep blue) … 0.3 (deep blue) … 0.52
 * (electric cerulean) … 0.72 (bright cerulean-cyan) … 0.9 (ice) … 1.1 (white-hot). Unlike thermal()
 * the radiance rises steeply with temperature (roughly Stefan–Boltzmann), so a fireball reads as a
 * white-hot core burning out through ice cyan into deep blue, and a thread's faint skirt is blue
 * while its core is white. Saturated through the middle, pale only near the top; each stop keeps
 * about the luminance the v9 ramp had there, so exposures stay as tuned. Linear RGB; the peak
 * channel spans ~0.02 (k = 0) … ~3 (k = 1).
 */
export const BURN = /* glsl */ `
vec3 burn(float k) {
  k = clamp(k, 0.0, 1.15);
  vec3 c;
  if (k < 0.3) c = mix(vec3(0.018, 0.105, 0.27), vec3(0.062, 0.26, 0.62), k / 0.3);
  else if (k < 0.52) c = mix(vec3(0.062, 0.26, 0.62), vec3(0.1, 0.48, 1.03), (k - 0.3) / 0.22);
  else if (k < 0.72) c = mix(vec3(0.1, 0.48, 1.03), vec3(0.24, 0.74, 1.2), (k - 0.52) / 0.2);
  else if (k < 0.9) c = mix(vec3(0.24, 0.74, 1.2), vec3(0.5, 0.84, 1.0), (k - 0.72) / 0.18);
  else c = mix(vec3(0.5, 0.84, 1.0), vec3(0.93, 0.98, 1.0), clamp((k - 0.9) / 0.2, 0.0, 1.0));
  return c * (0.06 + 2.94 * k * k);
}
`;

/** Fullscreen triangle vertex shader (no camera). */
export const FULLSCREEN_VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;
