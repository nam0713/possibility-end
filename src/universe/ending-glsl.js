// Shared GLSL chunks for the ending film.
// Noise: 3D simplex noise after Ashima Arts / Stefan Gustavson (MIT), hashes after
// Dave Hoskins' "hash without sine" (MIT). Everything else is written for this film.
import { BB_MAX_K, BB_MIN_K, BB_STEPS, BB_TABLE, blackbodyExact as blackbody } from './ending-math.js';

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

const v3 = c => `vec3(${c.map(x => x.toFixed(4)).join(', ')})`;
const BB_GLSL = BB_TABLE.map(v3).join(',\n  ');

/**
 * The film's light, physically motivated (design/V9.1-FEEDBACK.md, amendment 2).
 *
 * Thermal light follows a blackbody: `blackbody(T)` is Planck's law integrated against the CIE
 * colour-matching functions, in linear sRGB with its largest channel 1 (ending-math.js
 * BB_TABLE, 32 log-spaced samples from 800 K to 40 000 K, interpolated in log T): dull red →
 * orange → yellow → white (6500 K) → a faint blue-white for the hottest.
 *
 * Gas and dust take the colours astrophotographs show them in:
 *   H_ALPHA    ionised hydrogen (HII regions, remnants): pink-red
 *   O_III      doubly ionised oxygen (enriched, hot gas): teal
 *   REFLECTION starlight scattered by dust: blue
 *   DUST_LANE  transmission of a dust lane (absorbs blue first): brown-grey, a multiplier
 *   WEB        the cosmic web in a survey render: a neutral, slightly blue grey-white
 * plus a few named temperatures: K_SUN (5800 K, sun-like yellow-white), K_POP3 (40 000 K, the
 * first, massive stars), K_BULGE (4200 K, old stars), K_YOUNG (11 000 K, young blue arms).
 */
export const PALETTE = /* glsl */ `
const vec3 BB[${BB_STEPS}] = vec3[${BB_STEPS}](
  ${BB_GLSL}
);
vec3 blackbody(float T) {
  float x = clamp(log(max(T, 1.0) / ${BB_MIN_K.toFixed(1)}) * ${((BB_STEPS - 1) / Math.log(BB_MAX_K / BB_MIN_K)).toFixed(6)}, 0.0, ${(BB_STEPS - 1).toFixed(1)});
  float i = min(floor(x), ${(BB_STEPS - 2).toFixed(1)});
  int k = int(i);
  return mix(BB[k], BB[k + 1], x - i);
}
const vec3 LUMA = vec3(0.2126, 0.7152, 0.0722);
const vec3 H_ALPHA = vec3(1.0, 0.1, 0.14);
const vec3 O_III = vec3(0.06, 0.78, 0.72);
const vec3 REFLECTION = vec3(0.24, 0.44, 1.0);
const vec3 DUST_LANE = vec3(0.42, 0.33, 0.25);
const vec3 WEB = vec3(0.6, 0.7, 1.0);
const vec3 K_SUN = ${v3(blackbody(5800))};
const vec3 K_POP3 = ${v3(blackbody(40000))};
const vec3 K_BULGE = ${v3(blackbody(4200))};
const vec3 K_YOUNG = ${v3(blackbody(11000))};
const vec3 K_WHITE = ${v3(blackbody(6500))};
`;

/**
 * The film's heat index k (0 … 1.15) as a temperature: k = 0 is 800 K (a dull red glow), 0.3 ≈
 * 1 500 K (red-orange), 0.5 ≈ 2 400 K (orange), 0.8 ≈ 4 500 K (yellow-white), 1 = 7 000 K (white),
 * 1.15 ≈ 9 700 K (white with a breath of blue): log T linear in k.
 *
 * thermal(k): that colour at unit-ish brightness (0.12 … 1, peak channel).
 */
export const THERMAL = /* glsl */ `
float kelvin(float k) { return 800.0 * pow(8.75, k); }
vec3 thermal(float k) {
  k = clamp(k, 0.0, 1.15);
  return blackbody(kelvin(k)) * (0.12 + 0.88 * min(k, 1.0));
}
`;

/**
 * Incandescence: the blackbody colour of heat index k at a radiance that rises steeply with
 * temperature (roughly Stefan–Boltzmann over the film's exposure range): a fireball reads as a
 * white-hot core burning out through yellow and orange into a dull red limb, a thread's faint
 * skirt is red while its core is white. Peak channel ~0.03 (k = 0) … ~3 (k = 1).
 *
 * burnHot(k): a hotter population at the same radiance (its colour taken 0.25 further up the
 * scale): blue-white cores, yellow-white bodies, orange skirts — the plasma's second family.
 */
export const BURN = /* glsl */ `
float kelvinB(float k) { return 800.0 * pow(8.75, k); }
float burnRadiance(float k) { return (0.06 + 2.94 * k * k) * (0.55 + 0.45 * smoothstep(0.0, 0.45, k)); }
vec3 burn(float k) {
  k = clamp(k, 0.0, 1.15);
  return blackbody(kelvinB(k)) * burnRadiance(k);
}
vec3 burnHot(float k) {
  k = clamp(k, 0.0, 1.15);
  return blackbody(kelvinB(k + 0.25)) * burnRadiance(k);
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
