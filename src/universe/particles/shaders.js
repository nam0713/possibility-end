// GLSL for the shared particle system.
//
// Every particle carries two complete states ("from" and "to"). Each state has
//   look   (u8 ×4)  display-encoded rgb + size code
//   spin   (i16×4)  orbit axis xyz + angular speed   — living motion #1
//   pivot  (i16×3)  orbit centre
//   stream (i16×4)  travel vector xyz + rate          — living motion #2
//   aux    (u8 ×4)  evolve threshold, twinkle, glint
// The vertex shader animates both states, blends them with a per-particle
// staggered progress and adds a divergence-free "flow" displacement whose
// envelope peaks mid-morph, so matter visibly streams between formations.
//
// When a morph is retargeted mid-flight, the displayed state is baked on the GPU (BAKE variant,
// four float targets: position + carried flow, colour + size, orbit pivot + speed, orbit axis +
// twinkle/glint) and the "from" side reads it back by gl_VertexID (GPU_STATE). The same variant
// with uSnapshot = 1 renders the displayed state for the ending film (position, colour × energy,
// sprite diameter), read back once. The CPU mirror in
// ParticleField implements the same maths for browsers without float render targets.
//
// Reading starfield (Universe.setScatter, uScatter 0..1): on top of the morph, each particle has a
// star of its own — a point of a sparse field anchored to the camera's reference frame (no parallax,
// sway or explore rotation) at a varied depth, filling the viewport whatever the composition. A small
// share (uScatterKeep) stays visible as crisp stars; the rest fade out on the way. Per-particle
// thresholds ordered outer → inner and by slow spatial blobs, plus a coherent flow displacement that
// peaks mid-flight, make regions peel away (and re-attach) as streams. The retarget bake keeps the
// formation (scatter is applied after it); the film snapshot includes it. At uScatter = 1 every
// particle takes a short path that evaluates only its star. Reduced motion (uScatterTravel = 0): no
// travel, a cross-fade between the formation and the field.
//
// Time: the living clock is uploaded wrapped to TIME_PERIOD and every rate that it drives (orbit
// speeds, stream rates, twinkles, glints, the flow field) is quantised to a whole number of cycles
// per period, so the wrap is seamless and float32 never runs out of precision, however long the
// page stays open.
//
// Keep this in sync with ParticleField (the CPU mirror).

import * as THREE from 'three';
import { SCATTER } from '../config.js';

export const PACK = {
  SPIN_MAX: 3.0, // rad/s
  PIVOT_MAX: 12.0, // world units
  STREAM_MAX: 8.0, // world units
  RATE_MAX: 2.0, // cycles/s
  SIZE_MAX: 0.16, // world units
};

/** The living clock wraps at this period (s); every rate it drives is quantised to it. */
export const TIME_PERIOD = 1200;
const QW = TIME_PERIOD / (2 * Math.PI);
/** Angular speed (rad/s) → nearest speed with a whole number of turns per period. */
export const qRate = (w) => Math.floor(w * QW + 0.5) / QW;
/** Cycle rate (1/s) → nearest rate with a whole number of cycles per period (never 0 if > 0). */
export const qCycles = (r) => Math.max(Math.floor(r * TIME_PERIOD + 0.5), 1) / TIME_PERIOD;
/** Wrapped clock as uploaded to the GPU. */
export const wrapTime = (t) => t - Math.floor(t / TIME_PERIOD) * TIME_PERIOD;

// The flow field's time multipliers, quantised once and shared verbatim by GLSL and the CPU mirror.
const glslNum = (x) => Number(x.toFixed(6));
export const FLOW_T = [0.3, 0.6, 0.5, 0.8, 0.4, 0.7, 0.9, 0.5, 0.7, 0.4, 0.6, 0.8].map((c) => glslNum(qRate(c)));
const F = FLOW_T.map((c) => c.toFixed(6));

/**
 * Ch.7 horizon, drawn after bloom (post overlay). Shared by the shadow disc, the disc band and the
 * particle re-draw so their edges agree to the pixel:
 *   holeCover(fragCoord) — anti-aliased coverage of the shadow (screen space): the shadow disc
 *                          minus the footprint of the accretion disc's near side, which passes in
 *                          front of the horizon. There the bloomed main pass is left untouched, so
 *                          the near band crosses the hole exactly as bright, soft and thick as it is
 *                          on either side of it (re-drawing it there, without its glow, made it read
 *                          as a dim, grainy fill clipped to the circle);
 *   holeFront(viewPos)   — 1 when a view-space point is seen in front of the horizon sphere.
 * The engine writes the uniforms every frame the hole is visible.
 */
export const HOLE_UNIFORMS = {
  uHole: { value: new THREE.Vector4(0, 0, 0, 1) }, // centre x, y, radius, edge half-width (drawing-buffer px, GL origin)
  uHoleView: { value: new THREE.Vector4(0, 0, -1, 0) }, // centre in view space, radius (world units)
  uViewport: { value: new THREE.Vector2(1, 1) }, // drawing-buffer px
  // Particles re-drawn in front of the shadow are the hole's own disc: within reach of the centre
  // and close to the disc plane (view-space normal xyz, half thickness w).
  uHoleReach: { value: 2 },
  uHoleDisc: { value: new THREE.Vector4(0, 1, 0, 0.3) },
  // Pixel → view ray: the projection's P[0], P[5], P[8], P[9] (off-axis composition included).
  uHoleRay: { value: new THREE.Vector4(1, 1, 0, 0) },
  // The disc's lit band in its own plane: inner and outer radius (world units), strength (0 = off).
  uHoleBand: { value: new THREE.Vector4(0, 0, 0, 0) },
};

export const holeChunk = /* glsl */ `
uniform vec4 uHole;
uniform vec4 uHoleView;
uniform vec2 uViewport;
uniform float uHoleReach;
uniform vec4 uHoleDisc;
uniform vec4 uHoleRay;
uniform vec4 uHoleBand;
float holeFront(vec3 p) {
  float L = max(length(p), 1e-4);
  float tc = dot(p, uHoleView.xyz) / L;
  float h2 = dot(uHoleView.xyz, uHoleView.xyz) - tc * tc;
  float r2 = uHoleView.w * uHoleView.w;
  if (h2 >= r2) return 1.0;
  return L < tc - sqrt(r2 - h2) ? 1.0 : 0.0;
}
// Where the view ray through a drawing-buffer pixel meets the disc plane (view space; w = 1 ahead).
vec4 holePlane(vec2 frag) {
  vec2 ndc = frag / uViewport * 2.0 - 1.0;
  vec3 d = vec3((ndc.x + uHoleRay.z) / uHoleRay.x, (ndc.y + uHoleRay.w) / uHoleRay.y, -1.0);
  float dn = dot(d, uHoleDisc.xyz);
  float t = dot(uHoleView.xyz, uHoleDisc.xyz) / (abs(dn) < 1e-6 ? 1e-6 : dn);
  return vec4(d * t, t > 0.0 ? 1.0 : 0.0);
}
// Anti-aliased footprint of the disc's band where it lies in front of the horizon. The gradient is
// taken by finite differences (no derivatives: callers may have discarded already).
float holeBand(vec2 frag) {
  vec4 p = holePlane(frag);
  float r = length(p.xyz - uHoleView.xyz);
  float rx = length(holePlane(frag + vec2(1.0, 0.0)).xyz - uHoleView.xyz);
  float ry = length(holePlane(frag + vec2(0.0, 1.0)).xyz - uHoleView.xyz);
  float g = max(length(vec2(rx - r, ry - r)), 1e-6); // world units per pixel along the plane
  float m = clamp((r - uHoleBand.x) / g + 0.5, 0.0, 1.0) * clamp((uHoleBand.y - r) / g + 0.5, 0.0, 1.0);
  return m * p.w * holeFront(p.xyz) * uHoleBand.z;
}
float holeCover(vec2 frag) {
  float c = 1.0 - smoothstep(uHole.z - uHole.w, uHole.z + uHole.w, length(frag - uHole.xy));
  if (c <= 0.0 || uHoleBand.z <= 0.0) return c;
  return c * (1.0 - holeBand(frag));
}
`;

/** GLSL helpers for the quantised clock (also used by stars and accents). */
export const timeChunk = /* glsl */ `
#define TIME_PERIOD ${TIME_PERIOD.toFixed(1)}
#define TIME_QW ${QW.toFixed(6)}
float qRate(float w) { return floor(w * TIME_QW + 0.5) / TIME_QW; }
float qCycles(float r) { return max(floor(r * TIME_PERIOD + 0.5), 1.0) / TIME_PERIOD; }
`;

const packDefines = `
#define SPIN_MAX ${PACK.SPIN_MAX.toFixed(4)}
#define PIVOT_MAX ${PACK.PIVOT_MAX.toFixed(4)}
#define STREAM_MAX ${PACK.STREAM_MAX.toFixed(4)}
#define RATE_MAX ${PACK.RATE_MAX.toFixed(4)}
#define SIZE_MAX ${PACK.SIZE_MAX.toFixed(4)}
`;

const f4 = (x) => Number(x).toFixed(4);
/** Scatter constants (config.js SCATTER), compiled in. */
const scatterDefines = `
#define SC_STAGGER ${f4(SCATTER.stagger)}
#define SC_NEAR ${f4(SCATTER.near)}
#define SC_FAR ${f4(SCATTER.far)}
#define SC_MARGIN ${f4(SCATTER.margin)}
#define SC_STEEP ${f4(SCATTER.steep)}
#define SC_DRIFT ${f4(SCATTER.drift)}
#define SC_TONE0 ${f4(SCATTER.tones[0])}
#define SC_TONE1 ${f4(SCATTER.tones[1])}
#define SC_COLUMN ${f4(SCATTER.column)}
`;

/** Hash seed of the scatter star stream (shared with the CPU mirror). */
export const SCATTER_SEED = 0x2545f491;

/** Width (texels) of the baked state textures; height = ceil(count / width). */
export const STATE_WIDTH = 1024;

export const particleVertex = /* glsl */ `
${packDefines}
${scatterDefines}
${timeChunk}
uniform float uTime;          // living clock, wrapped to TIME_PERIOD
uniform float uFlowTime;      // morph flow clock, wrapped to TIME_PERIOD
uniform float uMorph;
uniform float uStagger;
uniform vec3 uSweep;          // x: mix toward radial order, y: invert, z: radius
uniform float uFlowAmp;
uniform float uSwirl;
uniform vec2 uCarry;          // flow amplitude and swirl of the interrupted morph (carried flow)
uniform float uDissolve;      // 1 = reduced-motion cross-dissolve
uniform float uSide;          // dissolve only: 0 draws the from state, 1 the to state
uniform float uToExpand;
uniform float uToSpread;
uniform float uToDim;
uniform float uEvolve;
uniform float uEvolveMode;    // 1 reveal, -1 vanish, 0 off
// The same per-formation controls for the "from" side (frozen at the moment buffers are swapped;
// identity after a bake, whose positions/colours are already absolute).
uniform float uFromExpand;
uniform float uFromSpread;
uniform float uFromDim;
uniform float uFromEvolve;
uniform float uFromEvolveMode;
uniform float uPixelScale;    // drawing-buffer px per world unit at distance 1
uniform float uSizeScale;
uniform float uGain;
uniform float uFocus;
uniform float uDof;
uniform float uMinPx;
uniform float uMaxPx;
uniform float uTwinkle;
// Reading starfield (see the header).
uniform float uScatter;       // 0 formation … 1 scattered (eased by the engine)
uniform float uScatterKeep;   // share of particles that stay visible as stars
uniform float uScatterTravel; // 1: matter travels in streams; 0: reduced motion (cross-fade in place)
uniform mat4 uScatterFrame;   // reference camera (no parallax, sway or explore rotation) → world
uniform vec4 uScatterRay;     // projection P[0], P[5], P[8], P[9] (off-axis composition included)
uniform vec4 uScatterCenter;  // formation centre xyz (eased with the composition), framing radius w
uniform vec4 uScatterLook;    // x: reference camera distance, y: star gain, z/w: faint/bright sprite px
uniform vec4 uScatterMotion;  // x: flow, y: outward push (× radius), z: twinkle, w: light kept in the text column
uniform vec3 uScatterTone0;   // star colours (linear, equal luminance): blackbody orange, yellow-white, white, blue-white
uniform vec3 uScatterTone1;
uniform vec3 uScatterTone2;
uniform vec3 uScatterTone3;
#ifdef GPU_STATE
uniform float uFromTex;       // 1: the from side is the baked state (textures below)
uniform highp sampler2D uState0;
uniform highp sampler2D uState1;
uniform highp sampler2D uState2;
uniform highp sampler2D uState3;
#endif
#ifdef BAKE
uniform float uSnapshot;      // 0: bake the state for a retarget, 1: displayed state for the film
uniform vec2 uStateSize;
varying vec4 vS0;
varying vec4 vS1;
varying vec4 vS2;
varying vec4 vS3;
#endif

attribute vec4 aFromLook;
attribute vec4 aFromSpin;
attribute vec3 aFromPivot;
attribute vec4 aFromStream;
attribute vec4 aFromAux;
attribute vec3 aTo;
attribute vec4 aToLook;
attribute vec4 aToSpin;
attribute vec3 aToPivot;
attribute vec4 aToStream;
attribute vec4 aToAux;
attribute vec2 aMeta;         // x: seed, y: carried flow weight of an interrupted morph

varying vec3 vColor;
varying float vSoft;
#ifdef OVERLAY
${holeChunk}
#endif

vec3 rotateAxis(vec3 p, vec3 axis, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return p * c + cross(axis, p) * s + axis * dot(axis, p) * (1.0 - c);
}

// Living motion: travel along a stream vector (wrapping, faded at the ends),
// then orbit about an axis through a pivot.
vec3 living(vec3 base, vec4 spin, vec3 pivot, vec4 stream, float seed, out float fade) {
  vec3 p = base;
  fade = 1.0;
  float rate = stream.w * RATE_MAX;
  if (rate > 0.0) {
    float ph = fract(uTime * qCycles(rate) + seed * 7.31);
    p += stream.xyz * (STREAM_MAX * ph);
    fade = smoothstep(0.0, 0.16, ph) * (1.0 - smoothstep(0.74, 1.0, ph));
  }
  float w = qRate(spin.w * SPIN_MAX);
  if (w != 0.0) {
    vec3 c = pivot * PIVOT_MAX;
    p = c + rotateAxis(p - c, normalize(spin.xyz), uTime * w);
  }
  return p;
}

// Divergence-free field: the analytic curl of a sum of sinusoidal potentials.
vec3 flowField(vec3 p, float t) {
  vec3 v = vec3(
    2.7 * cos(2.7 * p.y + ${F[0]} * t) - 1.7 * cos(1.7 * p.z + ${F[1]} * t + 2.0),
    2.1 * cos(2.1 * p.z - ${F[2]} * t) - 1.9 * cos(1.9 * p.x - ${F[3]} * t + 3.0),
    2.3 * cos(2.3 * p.x + ${F[4]} * t) - 1.3 * cos(1.3 * p.y + ${F[5]} * t + 1.0));
  vec3 q = vec3(p.y + p.z, p.z - p.x, p.x + p.y) * 1.9 + 4.0;
  v += 0.5 * vec3(
    3.1 * cos(3.1 * q.y - ${F[6]} * t) - 2.6 * cos(2.6 * q.z + ${F[7]} * t),
    2.9 * cos(2.9 * q.z + ${F[8]} * t) - 3.3 * cos(3.3 * q.x - ${F[9]} * t),
    2.4 * cos(2.4 * q.x - ${F[10]} * t) - 2.8 * cos(2.8 * q.y + ${F[11]} * t));
  return v * 0.16;
}

// Reveal (mode 1): visible once evolve passes the particle's threshold.
// Vanish (mode -1): particles with a threshold fade out as evolve passes 1 - threshold.
float evolveGate(float ev, float evolve, float mode) {
  if (mode > 0.5) return smoothstep(ev - 0.06, ev, evolve);
  if (mode < -0.5 && ev > 0.0) return 1.0 - smoothstep(1.0 - ev, 1.06 - ev, evolve);
  return 1.0;
}

// Colours are stored gamma-2 encoded in u8 (more precision in the darks); CPU encodes with sqrt.
vec3 decode(vec3 c) { return c * c; }

// ---- reading starfield
uint scHash(uint v) {
  uint s = v * 747796405u + 2891336453u;
  uint w = ((s >> ((s >> 28u) + 4u)) ^ s) * 277803737u;
  return (w >> 22u) ^ w;
}
float scUnit(inout uint h) {
  h = scHash(h);
  return float(h >> 8u) * (1.0 / 16777216.0);
}
// Slow spatial blobs (0..1): neighbouring matter shares a threshold, so regions leave as streams.
float scBlobs(vec3 p) {
  return 0.5 + 0.25 * (sin(dot(p, vec3(1.9, 1.0, -1.4)) + 1.6 * sin(dot(p, vec3(-0.9, 1.5, 0.8)) + 1.0))
                     + sin(dot(p, vec3(0.7, -1.6, 1.7)) + 1.4 * sin(dot(p, vec3(1.3, 0.6, 1.4)) + 2.0)));
}
// This particle's star: world position, light (linear colour × energy), sprite px, depth, kept (1:
// stays visible). Stars sit at NDC (u, v) of the reference camera at a depth of near…far × its
// distance; they pan slowly (nearer ones faster, whole cycles per clock period) and twinkle subtly.
void scatterStar(out vec3 wpos, out vec3 light, out float px, out float depth, out float kept) {
  uint h = uint(gl_VertexID) ^ ${SCATTER_SEED}u;
  kept = scUnit(h) < uScatterKeep ? 1.0 : 0.0;
  float u0 = scUnit(h);
  float v0 = scUnit(h);
  float dz = scUnit(h);
  float mag = pow(scUnit(h), SC_STEEP);
  float tone = scUnit(h);
  float tw = scUnit(h);
  float near = 1.0 - dz;
  float cycles = 1.0 + floor(near * (SC_DRIFT - 0.001));
  float u = (fract(u0 - uTime * (cycles / TIME_PERIOD)) * 2.0 - 1.0) * SC_MARGIN;
  float v = (v0 * 2.0 - 1.0) * SC_MARGIN;
  depth = uScatterLook.x * mix(SC_NEAR, SC_FAR, dz);
  vec3 view = vec3(depth * (u + uScatterRay.z) / uScatterRay.x, depth * (v + uScatterRay.w) / uScatterRay.y, -depth);
  wpos = (uScatterFrame * vec4(view, 1.0)).xyz;
  // A realistic spread of stellar temperatures along the blackbody locus: a few orange (K/M), many
  // yellow-white and white (G/F/A), some blue-white (B) — piecewise between four blackbody tones.
  vec3 c = tone < SC_TONE0 ? mix(uScatterTone0, uScatterTone1, tone / SC_TONE0)
         : tone < SC_TONE1 ? mix(uScatterTone1, uScatterTone2, (tone - SC_TONE0) / (SC_TONE1 - SC_TONE0))
         : mix(uScatterTone2, uScatterTone3, (tone - SC_TONE1) / (1.0 - SC_TONE1));
  float edge = 1.0 - smoothstep(1.0, SC_MARGIN, abs(u)); // the pan wraps off screen
  float calm = mix(uScatterMotion.w, 1.0, smoothstep(SC_COLUMN, SC_COLUMN + 0.25, abs(u)));
  float twk = 1.0 + uTwinkle * uScatterMotion.z * (0.5 + 0.5 * mag) * sin(uTime * qRate(0.7 + 2.0 * tw) + tw * 40.0);
  light = c * (uScatterLook.y * (0.08 + 0.92 * mag) * (0.6 + 0.4 * near) * edge * calm * twk);
  px = mix(uScatterLook.z, uScatterLook.w, mag);
}

void main() {
  #ifndef BAKE
  if (uScatter >= 1.0) {
    // Fully scattered: only the kept stars are drawn, and nothing of the formation is evaluated.
    vec3 wpos, light;
    float spx, sdepth, kept;
    scatterStar(wpos, light, spx, sdepth, kept);
    #ifdef OVERLAY
    kept = 0.0; // the ch.7 horizon is gone with its formation
    #endif
    if (uDissolve > 0.5) light *= uSide > 0.5 ? uMorph : 1.0 - uMorph;
    vec4 smv = modelViewMatrix * vec4(wpos, 1.0);
    gl_Position = kept > 0.5 ? projectionMatrix * smv : vec4(2.0, 2.0, 2.0, 1.0);
    if (spx < uMinPx) {
      light *= (spx * spx) / (uMinPx * uMinPx);
      spx = uMinPx;
    }
    gl_PointSize = min(spx, uMaxPx);
    vColor = light;
    vSoft = 0.0;
    return;
  }
  #endif
  float seed = aMeta.x;
  float r1 = fract(seed * 91.3458);
  float r2 = fract(seed * 47.853);

  // Per-particle staggered progress (random, optionally ordered by distance to the centre).
  float radial = clamp(length(aTo) / uSweep.z, 0.0, 1.0);
  radial = mix(radial, 1.0 - radial, uSweep.y);
  float delay = uStagger * mix(r1, radial, uSweep.x);
  float p = clamp((uMorph - delay) / (1.0 - uStagger), 0.0, 1.0);
  float e = p * p * p * (p * (p * 6.0 - 15.0) + 10.0);
  if (uDissolve > 0.5) {
    #ifdef BAKE
    e = uMorph >= 0.5 ? 1.0 : 0.0;
    #else
    e = uSide;
    #endif
  }

  // ---- from side: attributes, or the baked state of an interrupted morph.
  vec3 a;
  vec3 colA;
  float sizeA;
  float carried;
  float twkA;
  float glintA;
  vec4 fromSpin = aFromSpin;
  vec3 fromPivot = aFromPivot * PIVOT_MAX;
  #ifdef GPU_STATE
  if (uFromTex > 0.5) {
    ivec2 st = ivec2(gl_VertexID % ${STATE_WIDTH}, gl_VertexID / ${STATE_WIDTH});
    vec4 s0 = texelFetch(uState0, st, 0);
    vec4 s1 = texelFetch(uState1, st, 0);
    vec4 s2 = texelFetch(uState2, st, 0);
    vec4 s3 = texelFetch(uState3, st, 0);
    a = s0.xyz;
    if (s2.w != 0.0) a = s2.xyz + rotateAxis(a - s2.xyz, s3.xyz, uTime * s2.w);
    colA = s1.rgb;
    sizeA = s1.a;
    carried = s0.w;
    twkA = mod(s3.w, 256.0) / 255.0;
    glintA = floor(s3.w / 256.0) / 255.0;
    fromSpin = vec4(s3.xyz, s2.w / SPIN_MAX);
    fromPivot = s2.xyz;
  } else
  #endif
  {
    float fadeA;
    a = living(position, aFromSpin, aFromPivot, aFromStream, seed, fadeA);
    a = (a + aFromPivot * (PIVOT_MAX * uFromSpread)) * uFromExpand;
    float gateA = evolveGate(aFromAux.x, uFromEvolve, uFromEvolveMode);
    colA = decode(aFromLook.rgb) * (fadeA * gateA * uFromDim);
    sizeA = aFromLook.a * aFromLook.a;
    carried = aMeta.y;
    twkA = aFromAux.y;
    glintA = aFromAux.z;
  }

  // ---- to side.
  float fadeB;
  vec3 b = living(aTo, aToSpin, aToPivot, aToStream, seed, fadeB);
  b = (b + aToPivot * (PIVOT_MAX * uToSpread)) * uToExpand;
  float gate = evolveGate(aToAux.x, uEvolve, uEvolveMode);
  vec3 colB = decode(aToLook.rgb) * (fadeB * gate * uToDim);

  float sizeCode = mix(sizeA, aToLook.a * aToLook.a, e);
  float size = sizeCode * SIZE_MAX;
  vec3 pos = mix(a, b, e);
  vec3 col = mix(colA, colB, e);

  // Flow: curl-like displacement + swirl, strongest mid-morph. A retargeted morph carries the
  // interrupted one's displacement (its own amplitude, decaying as the particle travels on).
  float kN = 4.0 * p * (1.0 - p);
  kN = kN * kN * (3.0 - 2.0 * kN);
  float kC = carried * (1.0 - p) * (1.0 - p);
  if (uDissolve > 0.5) {
    kN = 0.0;
    kC = 0.0;
  }

  #ifdef BAKE
  vec2 texel = vec2(float(gl_VertexID % ${STATE_WIDTH}), float(gl_VertexID / ${STATE_WIDTH}));
  gl_Position = vec4((texel + 0.5) / uStateSize * 2.0 - 1.0, 0.0, 1.0);
  gl_PointSize = 1.0;
  if (uSnapshot < 0.5) {
    // Re-express the position in the dominant side's orbit so the particle keeps living on it.
    vec4 dSpin = e >= 0.5 ? aToSpin : fromSpin;
    vec3 dPivot = e >= 0.5 ? aToPivot * PIVOT_MAX : fromPivot;
    float w = qRate(dSpin.w * SPIN_MAX);
    vec3 axis = dot(dSpin.xyz, dSpin.xyz) > 0.0 ? normalize(dSpin.xyz) : vec3(0.0, 1.0, 0.0);
    vec3 R = pos;
    if (w != 0.0) R = dPivot + rotateAxis(R - dPivot, axis, -uTime * w);
    // Carried flow weight, in units of the interrupted morph's own amplitude (uFlowAmp).
    float cNext = kN + (uFlowAmp > 1e-4 ? uCarry.x / uFlowAmp : 0.0) * kC;
    float twk = e >= 0.5 ? aToAux.y : twkA;
    float gli = e >= 0.5 ? aToAux.z : glintA;
    vS0 = vec4(R, cNext);
    vS1 = vec4(col, sizeCode);
    vS2 = vec4(dPivot, w);
    vS3 = vec4(axis, floor(twk * 255.0 + 0.5) + floor(gli * 255.0 + 0.5) * 256.0);
    return;
  }
  #endif

  if (kN + kC > 0.001) {
    // Sampled by position only: neighbours share a displacement, so matter moves in coherent streams.
    pos += flowField(pos * 0.55, uFlowTime) * ((uFlowAmp * kN + uCarry.x * kC) * (0.85 + 0.3 * r2));
    float ang = (uSwirl * kN + uCarry.y * kC) * (0.8 + 0.4 * r1);
    float cs = cos(ang);
    float sn = sin(ang);
    pos.xz = vec2(cs * pos.x - sn * pos.z, sn * pos.x + cs * pos.z);
    col *= 1.0 + 0.15 * min(1.0, kN + kC);
  }

  // ---- reading starfield: the formation's matter peels away in streams into its stars, and back.
  float se = 0.0;          // this particle's share of the star sprite
  vec3 starLight = vec3(0.0);
  float starPx = 0.0;
  float starDepth = 1.0;
  if (uScatter > 0.0) {
    vec3 wpos;
    float kept;
    scatterStar(wpos, starLight, starPx, starDepth, kept);
    if (uScatterTravel > 0.5) {
      // Staggered threshold: outer matter first, then region by region (blobs), spread along the way.
      vec3 rel = pos - uScatterCenter.xyz;
      float rl = length(rel);
      float order = 0.45 * (1.0 - clamp(rl / uScatterCenter.w, 0.0, 1.0)) + 0.33 * scBlobs(pos) + 0.22 * r1;
      float sp = clamp((uScatter - SC_STAGGER * order) / (1.0 - SC_STAGGER), 0.0, 1.0);
      // The path: matter first leaves along a stream displacement D shared by its neighbours (an
      // outward push curled by the slowly living flow field, sampled where it left from), so a
      // region peels away as a coherent stream; only then does each particle spread to its own star.
      // Reversed, the stars converge into streams that flow back into the formation.
      vec3 outward = rl > 1e-4 ? rel / rl : vec3(0.0, 1.0, 0.0);
      vec3 D = (outward * uScatterMotion.y + flowField(pos * 0.42 + 2.3, uFlowTime) * uScatterMotion.x) * uScatterCenter.w;
      float f = smoothstep(0.0, 0.62, sp);
      float g = smoothstep(0.42, 1.0, sp);
      pos += D * f + (wpos - pos - D) * g;
      // Matter that does not stay as a star stays lit along its stream and fades as it spreads (and
      // back in on its way home); a kept particle cross-fades into its star.
      se = kept * smoothstep(0.5, 0.92, sp);
      col *= kept > 0.5 ? 1.0 - se : 1.0 - smoothstep(0.45, 0.95, sp);
    } else {
      // Reduced motion: nothing travels. The formation fades out where it is, the stars fade in
      // where they are (a kept particle switches sides at 0.5, ~7 % bright on either side).
      if (kept > 0.5 && uScatter >= 0.5) {
        pos = wpos;
        col *= 0.0;
        se = 1.0;
        starLight *= smoothstep(0.4, 1.0, uScatter);
      } else {
        col *= 1.0 - smoothstep(0.0, 0.6, uScatter);
      }
    }
  }

  #ifdef BAKE
  // Snapshot for the film: world position with flow (and scatter), linear colour × sprite energy,
  // and the sprite's world diameter before depth of field (the engine applies that per view depth).
  // A star's sprite is fixed in pixels: its world diameter at its own depth.
  vS0 = vec4(pos, 1.0);
  vS1 = vec4(col * (uGain * min(4.0, sizeCode / 0.02 + 0.25)) + starLight * se, 1.0);
  vS2 = vec4(mix(size * uSizeScale, starPx * starDepth / uPixelScale, se), 0.0, 0.0, 0.0);
  vS3 = vec4(0.0);
  return;
  #endif

  // Twinkle and radiator glints (frozen when ambient motion is paused).
  float twk = mix(twkA, aToAux.y, e);
  float glint = mix(glintA, aToAux.z, e);
  float g = pow(max(0.0, sin(uTime * qRate(0.31 + 0.5 * r2) + seed * 23.0)), 48.0);
  col *= 1.0 + uTwinkle * (twk * 0.42 * sin(uTime * qRate(1.1 + 2.6 * r1) + seed * 61.0) + glint * 7.0 * g);

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;

  // Depth-attenuated size with fake depth of field: blur grows away from the focus plane,
  // energy is conserved (bigger => dimmer) and tiny points never alias to 1px mush.
  float dist = max(0.05, -mv.z);
  float px = size * uSizeScale * uPixelScale / dist;
  float coc = abs(dist - uFocus) / uFocus;
  float blur = 1.0 + uDof * coc;
  px *= blur;
  vec3 light = col * (uGain / (blur * blur));
  vSoft = clamp((blur - 1.0) * 1.4, 0.0, 1.0);
  if (se > 0.0) {
    // One sprite cross-fading from the formation's grain into the crisp star (its own size and light).
    px = mix(px, starPx, se);
    light += starLight * se;
    vSoft *= 1.0 - se;
  }
  if (uDissolve > 0.5) light *= uSide > 0.5 ? uMorph : 1.0 - uMorph;
  if (px < uMinPx) {
    light *= (px * px) / (uMinPx * uMinPx);
    px = uMinPx;
  }
  px = min(px, uMaxPx);
  gl_PointSize = px;
  vColor = light;
  if (vColor.r + vColor.g + vColor.b < 0.00035) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
  #ifdef OVERLAY
  // Post-bloom re-draw of what lies in front of the ch.7 horizon: only sprites in front of the
  // sphere that touch the shadow disc are rasterised at all.
  vColor *= 1.4; // stands in for the bloom this re-draw does not get
  vec2 sp = (gl_Position.xy / gl_Position.w * 0.5 + 0.5) * uViewport;
  // Only the hole's own disc is re-drawn: distant foreground dust would speckle the shadow.
  vec3 rel = mv.xyz - uHoleView.xyz;
  if (holeFront(mv.xyz) < 0.5 || length(rel) > uHoleReach || abs(dot(rel, uHoleDisc.xyz)) > uHoleDisc.w || length(sp - uHole.xy) > uHole.z + uHole.w + 0.5 * px) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
  #endif
}
`;

export const particleFragment = /* glsl */ `
varying vec3 vColor;
varying float vSoft;
#ifdef OVERLAY
${holeChunk}
#endif

void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(q, q);
  if (r2 > 1.0) discard;
  // Gaussian core, softer when defocused; forced to zero at the rim.
  float a = exp(-r2 * mix(5.2, 2.3, vSoft)) * (1.0 - r2);
  #ifdef OVERLAY
  a *= holeCover(gl_FragCoord.xy);
  #endif
  gl_FragColor = vec4(vColor * a, 1.0);
}
`;

/** Bake / snapshot pass: one point per particle, four float outputs (GLSL 3, MRT). */
export const bakeFragment = /* glsl */ `
varying vec4 vS0;
varying vec4 vS1;
varying vec4 vS2;
varying vec4 vS3;
layout(location = 0) out highp vec4 oState0;
layout(location = 1) out highp vec4 oState1;
layout(location = 2) out highp vec4 oState2;
layout(location = 3) out highp vec4 oState3;
void main() {
  oState0 = vS0;
  oState1 = vS1;
  oState2 = vS2;
  oState3 = vS3;
}
`;

/** Background stars: fixed pixel sizes, gentle twinkle, slight parallax via the camera. */
export const starVertex = /* glsl */ `
${timeChunk}
uniform float uTime;
uniform float uPixelRatio;
uniform float uTwinkle;
uniform float uGain;
attribute vec4 aLook;   // rgb (display) + magnitude
attribute float aSeed;
varying vec3 vColor;
varying float vSharp;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float m = aLook.a;
  float px = (1.35 + 3.4 * m * m) * uPixelRatio;
  float tw = 1.0 + uTwinkle * 0.28 * sin(uTime * qRate(0.6 + aSeed * 1.7) + aSeed * 40.0);
  vec3 c = aLook.rgb * aLook.rgb;
  float energy = (0.05 + 0.95 * m * m) * tw * uGain;
  float minPx = 1.6 * uPixelRatio;
  if (px < minPx) { energy *= px * px / (minPx * minPx); px = minPx; }
  gl_PointSize = px;
  vColor = c * energy;
  vSharp = 4.0 + 3.0 * m;
}
`;

export const starFragment = /* glsl */ `
varying vec3 vColor;
varying float vSharp;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(q, q);
  if (r2 > 1.0) discard;
  float a = exp(-r2 * vSharp) * (1.0 - r2);
  gl_FragColor = vec4(vColor * a, 1.0);
}
`;
