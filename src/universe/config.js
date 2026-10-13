// Shared constants: palette, quality tiers, compositions, morph timing and the reading starfield.
// Everything an art director would want to tune lives here.

import { hexToLinear } from './math.js';

/**
 * Display-space palette (sRGB hex): ONE cold hue family, ~190–210° (design/V9.1-FEEDBACK.md). Every
 * colour in the universe is one of these or a mix of them (computed in linear light, so mixes stay
 * inside the family): formations vary luminance and saturation, never hue. No warm colour exists.
 */
export const HEX = {
  space: '#04070b', // background
  white: '#eaf2f8', // fg: cold white (low saturation)
  ink: '#dde6ed', // ink
  ice: '#a9e7f2', // accent — the theme colour: ice cyan (the most saturated light tone)
  iceHi: '#e6fbff', // accent-hi: brightest cores and glows (seed, singularity, star cores)
  deep: '#4f8fb0', // accent-deep: low-emphasis lines and fills, deep glows
  deepest: '#1b3a52', // deepest: dust, far haze
};

/** Linear-light palette for particle colours and shader uniforms. */
export const C = Object.fromEntries(Object.entries(HEX).map(([k, v]) => [k, hexToLinear(v)]));
const mixLinear = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
/** Derived mid-tones (linear mixes of the palette, same hue family). steel: a muted blue-grey. */
C.steel = mixLinear(C.deep, C.white, 0.15);
/** mist: deep, desaturated haze between deep and deepest. */
C.mist = mixLinear(C.deepest, C.deep, 0.5);

/**
 * Quality tiers. `particles` is fixed per tier (the shared morphing system);
 * adaptive quality only trims the draw range, pixel ratio and bloom.
 */
export const TIERS = {
  high: { particles: 163840, stars: 5200, dprCap: 1.75, pixelBudget: 4.2e6, bloom: true, bloomScale: 0.5, grain: true, size: 1.0, gain: 1.0 },
  medium: { particles: 65536, stars: 3000, dprCap: 1.5, pixelBudget: 2.4e6, bloom: true, bloomScale: 0.42, grain: true, size: 1.32, gain: 1.85 },
  low: { particles: 24576, stars: 1600, dprCap: 1.5, pixelBudget: 1.3e6, bloom: false, bloomScale: 0.35, grain: false, size: 1.75, gain: 3.4 },
};

/**
 * Adaptive steps applied on top of a tier (index 0 = full quality). Cheapest losses first: bloom
 * resolution, then pixel ratio down to 1.0 (`floor`: never below min(device ratio, floor)), and only
 * then the draw range (whose light loss is compensated by gain, so formations do not dim).
 */
export const ADAPTIVE_STEPS = [
  { dpr: 1.0, floor: 0, draw: 1.0, bloom: 1.0 },
  { dpr: 1.0, floor: 0, draw: 1.0, bloom: 0.72 },
  { dpr: 0.82, floor: 1, draw: 1.0, bloom: 0.6 },
  { dpr: 0.66, floor: 1, draw: 1.0, bloom: 0.5 },
  { dpr: 0.5, floor: 1, draw: 0.78, bloom: 0.5 },
  { dpr: 0.5, floor: 0.75, draw: 0.62, bloom: 0 },
];

export const CAMERA_FOV = 32;

/**
 * Compositions: where the formation's framing circle sits on screen.
 * cx/cy are viewport fractions (y from the top); r(W, H) is the framing radius in CSS px.
 * `push` moves the camera back (dimmer, smaller); `dim` multiplies the light.
 * `wide` is used for landscape/desktop, `tall` for portrait phones.
 */
export const LAYOUTS = {
  hero: {
    wide: { cx: 0.675, cy: 0.47, r: (W, H) => Math.min(W * 0.255, H * 0.4), push: 1, dim: 1 },
    tall: { cx: 0.5, cy: 0.66, r: (W, H) => Math.min(W * 0.44, H * 0.24), push: 1, dim: 1 },
  },
  explore: {
    wide: { cx: 0.5, cy: 0.49, r: (W, H) => Math.min(W * 0.33, H * 0.41), push: 1, dim: 1 },
    tall: { cx: 0.5, cy: 0.46, r: (W, H) => Math.min(W * 0.47, H * 0.3), push: 1, dim: 1 },
  },
  contents: {
    wide: { cx: 0.245, cy: 0.52, r: (W, H) => Math.min(W * 0.19, H * 0.37), push: 1, dim: 0.92 },
    tall: { cx: 0.5, cy: 0.2, r: (W, H) => Math.min(W * 0.4, H * 0.17), push: 1, dim: 0.9 },
  },
  chapter: {
    wide: { cx: 0.655, cy: 0.5, r: (W, H) => Math.min(W * 0.27, H * 0.42), push: 1, dim: 1 },
    tall: { cx: 0.5, cy: 0.34, r: (W, H) => Math.min(W * 0.45, H * 0.24), push: 1, dim: 1 },
  },
  // Behind the text column (the UI scrims it) and wide enough that the formation's outer structure
  // reaches into the margins on either side, where the universe stays faintly alive while reading.
  reading: {
    wide: { cx: 0.5, cy: 0.5, r: (W, H) => Math.min(W * 0.5, H * 0.8), push: 1, dim: 0.5 },
    tall: { cx: 0.5, cy: 0.46, r: (W, H) => Math.min(W * 0.5, H * 0.3), push: 1.45, dim: 0.5 },
  },
};

/** Portrait composition. The UI's CSS/JS use the same test: (max-width: 639px), (max-aspect-ratio: 4/5). */
export const isTall = (W, H) => W < 640 || W / H <= 0.8;

/**
 * Morph timing per scene kind (seconds). `sweep` orders the stagger by distance from the target's
 * centre (1 = fully ordered): matter assembles from the centre outward in coherent streams, so the
 * middle of a morph reads as travelling matter, not a uniform haze.
 */
export const MORPH = {
  intro: { duration: 3.4, stagger: 0.45, flow: 0.9, swirl: 1.1, sweep: 0.55, invert: 0 },
  cover: { duration: 2.3, stagger: 0.4, flow: 0.62, swirl: 0.85, sweep: 0.8, invert: 0 },
  preview: { duration: 1.7, stagger: 0.36, flow: 0.5, swirl: 0.7, sweep: 0.85, invert: 0 },
  chapter: { duration: 2.2, stagger: 0.4, flow: 0.6, swirl: 0.85, sweep: 0.85, invert: 0 },
  seed: { duration: 2.4, stagger: 0.42, flow: 0.45, swirl: 1.3, sweep: 0.7, invert: 1 },
  dissolve: { duration: 0.24 },
};

/** Camera easing (critically damped smooth time, seconds). */
export const EASE = { camera: 0.62, cameraReduced: 0.06, parallax: 0.9, veil: 0.35, reading: 0.45, presence: 0.5, scatter: 0.42, scatterReduced: 0.2, arm: 0.32 };

export const POST = {
  bloomStrength: 0.55,
  bloomRadius: 0.08,
  bloomThreshold: 0.48,
  bloomKnee: 0.32,
  exposure: 1.12,
  vignette: 0.42,
  grain: 0.022,
};

/**
 * The reading starfield (Universe.setScatter). At 1 the formation's matter has scattered into a sparse,
 * calm field of crisp stars filling the viewport; only `density` stars per CSS megapixel stay visible
 * (the rest fade out on the way and fade back in when they gather).
 *
 *   stagger   share of the scatter range over which particles start leaving (per-particle thresholds,
 *             ordered outer → inner and by slow spatial blobs, so regions peel away as streams)
 *   flow      curl-noise part of the stream displacement (× formation radius): the streams' curl
 *   outward   outward part of the stream displacement (× formation radius): streams leave radially
 *   near/far  star depths, × the camera's reference distance (varied depths → parallax)
 *   margin    star field extent in NDC (> 1 so drift and parallax never uncover an edge)
 *   px/pxBright  star sprite diameter in CSS px (faint/bright): a Gaussian with σ ≈ px/6.5, wide
 *             enough that sub-pixel drift never aliases into flicker
 *   gain      star brightness; magnitude = rand^`steep` (few bright stars)
 *   drift     max drift cycles across the field per 20 min (near stars; far ones 1) — slow pan
 *   twinkle   twinkle amplitude (subtle)
 *   parallax  pointer parallax / ambient sway kept at full scatter (calm behind text)
 *   bloom     bloom strength kept at full scatter (low bloom: crisp points)
 *   calm      star light kept in the text column (|x| < `column` of the half-width; wide screens)
 */
export const SCATTER = {
  stagger: 0.56,
  flow: 0.9,
  outward: 0.55,
  near: 0.62,
  far: 2.5,
  margin: 1.12,
  density: 1150,
  minStars: 420,
  maxStars: 2600,
  px: 4.0,
  pxBright: 6.2,
  gain: 0.72,
  steep: 5,
  drift: 3,
  twinkle: 0.2,
  parallax: 0.35,
  sway: 0.15,
  bloom: 0.45,
  calm: 0.62,
  column: 0.42,
};
