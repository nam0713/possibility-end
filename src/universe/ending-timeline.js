// The ending film's choreography: every scalar the film shows is a pure function
// of film time, sampled once per frame into a preallocated `frame` object.
// Times are in seconds; the score's impact is at IMPACT.
import { clamp01, createTrack, evalTrack, expoInOut, mix, pulse, smootherstep, smoothstep } from './ending-math.js';

export const IMPACT = 3.6;
export const DURATION = 31;
/** The press flare at the handover: rise and decay (s). */
const PRESS_RISE = 0.14;
const PRESS_DECAY = 0.42;
/** The seed glow's display gain and its bloom stand-in at the handover (calibrated on the engine). */
const SEED_GAIN = 1.12;
const SEED_BLOOM = 1.3;
export const PHASES = Object.freeze([
  Object.freeze({ start: 0, key: 'collapse' }),
  Object.freeze({ start: IMPACT, key: 'birth' }),
  Object.freeze({ start: 9.2, key: 'structure' }),
  Object.freeze({ start: 19.4, key: 'world' }),
]);
/** Representative still per phase, shown for reduced motion when the UI seeks to a phase start. */
export const PHASE_STILLS = Object.freeze([2.7, 4.95, 15.8, DURATION]);

export function phaseIndex(t) {
  let i = 0;
  for (let k = 1; k < PHASES.length; k++) if (t >= PHASES[k].start) i = k;
  return i;
}

// ---------------------------------------------------------------- cosmology

/** Scale factor of the newborn universe: 0 at the impact, 1 once inflation ends. */
export function scaleFactor(t) {
  if (t <= IMPACT) return 0;
  const s = t - IMPACT;
  // “공간이 번져나갔고” — a hot bubble spreads fast, then slows…
  const spread = 0.26 * (1 - Math.exp(-s * 2.4)) * (1 - Math.exp(-s * 6));
  // …“폭발적인 인플레이션이 시작되었다” — then an exponential, violent stretch.
  const inflation = 0.74 * expoInOut(5.2, 6.8, t);
  return spread + inflation;
}

/** Gravitational growth of structure (uniform haze → cosmic web). */
export function growth(t) {
  return smootherstep(9.6, 15.2, t);
}

/** Proto-galaxy spin-up amount and its integral (rotation phase), both pure in t. */
const SPIN_A = 14.6;
const SPIN_B = 19.6;
export function spinAmount(t) {
  return smoothstep(SPIN_A, SPIN_B, t);
}
export function spinPhase(t) {
  if (t <= SPIN_A) return 0;
  const w = SPIN_B - SPIN_A;
  if (t >= SPIN_B) return w * 0.5 + (t - SPIN_B);
  const x = (t - SPIN_A) / w;
  return w * (x * x * x - 0.5 * x * x * x * x);
}

/**
 * Radius of the accretion disk the old universe falls into (F units): it holds while
 * the matter arrives, then plunges into the point over the last ~0.8 s.
 */
export function diskRadius(t) {
  return 0.13 * (1 - Math.pow(clamp01((t - 2.6) / (IMPACT - 2.6)), 2.2)) + 0.003;
}
/** Integrated Keplerian spin of that disk: the angle grows like 1/(remaining time). */
export function diskAngle(t) {
  const k = 0.9;
  return k / Math.max(0.035, IMPACT + 0.12 - t) - k / (IMPACT + 0.12);
}
/** d(diskAngle)/dt, for the disk's rotational motion blur. */
export function diskAngleRate(t) {
  const k = 0.9;
  const x = IMPACT + 0.12 - t;
  return x > 0.035 ? k / (x * x) : 0;
}

// Core temperature of the newborn universe (0..1, see burn() / thermal()): white-hot at the
// impact, still hot once the bubbles have reheated it, then cooling adiabatically as it inflates.
const temperatureTrack = createTrack([
  [IMPACT, 1.0], [4.3, 0.97], [5.4, 0.93], [5.75, 0.86], [6.05, 0.72], [6.6, 0.64], [7.6, 0.52], [8.6, 0.36], [9.8, 0.14], [11.5, 0.04],
]);

// Emission keeps the light chromatic: as the plasma thins, the dark between the threads grows,
// the threads themselves stay bright (see ending-soft.js).
const plasmaEmitTrack = createTrack([
  [IMPACT, 0], [3.68, 30.0], [5.7, 30.0], [6.1, 14.0], [6.6, 11.0], [7.6, 10.0], [8.4, 6.5], [9.0, 2.4], [9.6, 0.0],
]);
// Opacity: a dense but translucent fireball, clearer inside the bubbles, transparent once inflated.
const plasmaKappaTrack = createTrack([
  [IMPACT, 16.0], [4.4, 12.0], [5.4, 10.0], [5.85, 5.0], [6.2, 2.4], [7.0, 1.8], [8.6, 0.9], [9.4, 0.6],
]);
// How much smooth glow the true vacuum keeps around its threads: little, and none once inflated.
const plasmaFillTrack = createTrack([[IMPACT, 0.22], [5.4, 0.22], [5.75, 0.08], [5.95, 0.0]]);

// Inside the plasma (the thread pass, ending-soft.js). The camera is engulfed at ~6.0 s; just
// before, the fireball resolves into the threads we then fly into.
const THREADS_IN = 5.84;
const THREADS_FULL = 5.98;
// Which regions carry threads (a threshold on a large-scale field): almost all at first, then
// fewer and fewer as the plasma thins — the dark between them grows.
const threadOpenTrack = createTrack([[THREADS_IN, -0.85], [6.4, -0.6], [7.0, -0.28], [8.0, -0.08], [9.2, 0.1]]);
// Strands per bundle: thick braids while the plasma is dense, single strands once it has thinned.
const threadDenseTrack = createTrack([[THREADS_IN, 1.0], [6.5, 0.85], [7.4, 0.4], [8.4, 0.1]]);
// Brightness: a blaze as we are engulfed, settling as the plasma inflates and cools.
const threadGainTrack = createTrack([[THREADS_IN, 2.0], [6.3, 1.7], [7.0, 1.25], [8.0, 1.1], [8.8, 1.0]]);

// ------------------------------------------------------------------- frame

/** Allocate the per-frame parameter block (filled by sampleFrame; never reallocated). */
export function createFrame() {
  return {
    t: 0,
    // matter (the particles that were the old universe and become the new one)
    a: 0, g: 0, spin: 0, spinPhase: 0,
    shutter: 0.02,
    matterGain: 1,
    webFade: 1, heroFade: 1, filFade: 1,
    // singularity (the reader's seed): press flare, the seed's own glow, the film's core, accretion disk
    press: 0, seedGlow: 1, seedScale: 1, seedWidth: 1, seedBloom: 0,
    core: 0, coreSize: 0.02, coreTint: 1, disk: 0, diskRadius: 0.1, diskSpin: 0, diskSpinRate: 0,
    // soft layer (plasma / galactic band)
    plasma: 0, plasmaEmit: 0, plasmaKappa: 0, plasmaFill: 0.3, temp: 0, supercool: 0,
    bubble: 0, bubbleDone: 0, bubbleWall: 0, diff: 0,
    threads: 0, threadOpen: 0, threadDense: 0, threadBead: 0, threadCool: 0, threadZoom: 0,
    gas: 0, condense: 0, gasLit: 0,
    band: 0,
    // skies
    parentSky: 0, skyPull: 0, newSky: 0,
    // world
    galaxy: 0, galaxyGlow: 0, galaxyStars: 1, sun: 0, sunBeacon: 0,
    planet: 0, cool: 0, ocean: 0, clouds: 0, life: 0, atmo: 0,
    // camera
    shake: 0,
    // post
    exposure: 1, bloom: 0.08, bloomAdd: 0, flash: 0, shockRadius: 0, shockAmp: 0, lens: 0, aberration: 0, curveMix: 1,
    hueCurve: 0, scrim: 0, grain: 0.05, vignette: 0.32,
    bg: [0, 0, 0],
    lift: [0, 0, 0],
  };
}

// Background colours in display space (screen-blended over the image): #04070b is the site's space.
// The void inside the new universe and its final night sky stay in the same cold hue (~210°).
const BG_PARENT = [4 / 255, 7 / 255, 11 / 255];
const BG_VOID = [1.0 / 255, 1.8 / 255, 2.6 / 255];
const BG_WORLD = [3 / 255, 6 / 255, 9 / 255];
// The engine's background lift for the seed (its tint × 0.018 + base, display space): the seed's
// tint is the theme colour, ice cyan #a9e7f2 (design/V9.1-FEEDBACK.md).
const LIFT = [0.663 * 0.018 + 0.004, 0.906 * 0.018 + 0.012, 0.949 * 0.018 + 0.022];

/**
 * Fill `f` with every scalar of the film at time t.
 * `reduced` softens the impact (no strobe, no shake) for prefers-reduced-motion.
 */
export function sampleFrame(f, t, reduced) {
  f.t = t;
  const after = t - IMPACT;

  // ---- matter
  f.a = scaleFactor(t);
  f.g = growth(t);
  f.spin = spinAmount(t);
  f.spinPhase = spinPhase(t);
  // Longer shutter through the violent part of the birth: inflation reads as streaks.
  // Short once matter merely drifts into the web (the dust stays points, not dashes).
  f.shutter = 0.022 * (1 - 0.7 * smoothstep(9.0, 10.0, t)) + 0.03 * smoothstep(IMPACT, 3.75, t) * (1 - smoothstep(6.9, 8.2, t)) + 0.02 * smoothstep(1.8, 3.4, t) * (1 - smoothstep(3.6, 3.8, t));
  f.webFade = 1 - smoothstep(20.6, 23.0, t);
  f.filFade = 1 - smoothstep(19.5, 21.3, t);
  f.heroFade = 1 - smoothstep(19.0, 21.4, t);
  f.matterGain = 1;

  // ---- singularity: the reader's seed, the one light on screen. At the handover it glows exactly
  // as the engine drew it (its own glow billboards, ending-core.js); the press makes it flare (the
  // light answers the touch), then it gathers into the film's core — concentric, a tighter and
  // hotter point — which brightens as everything falls into it.
  const fall = smoothstep(0.2, IMPACT, t);
  const inhale = smoothstep(3.32, 3.56, t) * (1 - smoothstep(3.56, IMPACT, t));
  const press = smoothstep(0, PRESS_RISE, t) * Math.exp(-Math.max(0, t - PRESS_RISE) / PRESS_DECAY);
  f.press = press;
  f.seedGlow = t < 1.6 ? SEED_GAIN * (1 + 0.7 * press) * (1 - smoothstep(0.3, 1.5, t)) : 0;
  f.seedScale = 1 + 0.12 * press;
  f.seedWidth = (1 + 0.25 * press) * (1 - 0.4 * smoothstep(0.25, 1.3, t));
  // The engine's bloom around the glow's bright core, which the film's own bloom spreads wider:
  // stands in at the handover and hands over to the film's look as its tone curve does.
  f.seedBloom = SEED_BLOOM * (1 - smoothstep(0.15, 2.2, t));
  let core = (0.9 * smoothstep(0.04, 0.9, t) + 2.2 * fall * fall * fall + 2.2 * pulse(t, IMPACT, 0.04, 0.16)) * (1 + 0.85 * press);
  core *= 1 - 0.55 * inhale;
  if (t > IMPACT) core = (1.2 + 7.0 * Math.exp(-after / 0.05)) * Math.exp(-after / 0.5);
  f.core = core;
  f.coreSize = t <= IMPACT ? mix(0.008, 0.0045, fall) * (1 - 0.35 * inhale) * (1 + 0.28 * press) : 0.006 + 0.006 * (1 - Math.exp(-after * 5));
  // The seed's ice tint, turning white-hot as the collapse nears the impact.
  f.coreTint = t <= IMPACT ? 1 - 0.65 * smoothstep(2.6, IMPACT, t) : 0;
  f.disk = smoothstep(1.1, 2.4, t) * (1 - smoothstep(3.5, IMPACT, t));
  f.diskRadius = diskRadius(t);
  f.diskSpin = diskAngle(t);
  f.diskSpinRate = diskAngleRate(t);

  // ---- birth plasma
  f.temp = t <= IMPACT ? 1 : evalTrack(temperatureTrack, t);
  f.plasmaEmit = t <= IMPACT ? 0 : evalTrack(plasmaEmitTrack, t);
  // The fireball is ray-marched from outside; once it engulfs the camera the threads take over.
  f.plasma = t <= IMPACT ? 0 : 1 - smoothstep(THREADS_IN, THREADS_FULL, t);
  f.plasmaKappa = evalTrack(plasmaKappaTrack, t);
  f.plasmaFill = evalTrack(plasmaFillTrack, t);
  // “진공이 고유의 상태를 선택”: the false vacuum supercools (a dimmer, deeper blue) while a few bubbles of the
  // true vacuum nucleate, reheated and brighter than around them, their walls lit; they merge.
  f.supercool = 0.3 * smoothstep(4.25, 4.8, t);
  f.bubble = smoothstep(4.3, 5.6, t);
  f.bubbleWall = 2.2 * smoothstep(4.4, 4.52, t) * (1 - smoothstep(5.35, 5.85, t));
  // Once every bubble has merged the whole universe shares the new vacuum.
  f.bubbleDone = smoothstep(5.35, 5.85, t);
  f.diff = smoothstep(6.4, 8.0, t);
  // “폭발적인 인플레이션 … 장과 입자들로 분화”: inside the plasma, a web of incandescent threads
  // streaks past (inflation), thins, splits into deep-blue and pale ice strands, breaks into beads
  // and dissolves.
  f.threads = smoothstep(THREADS_IN, THREADS_FULL, t) * (1 - smoothstep(8.8, 9.6, t)) * evalTrack(threadGainTrack, t);
  f.threadOpen = evalTrack(threadOpenTrack, t);
  f.threadDense = evalTrack(threadDenseTrack, t);
  f.threadBead = smoothstep(7.8, 9.0, t);
  f.threadCool = smoothstep(6.2, 9.0, t);
  // The violent stretch: the strands streak outward from the centre of view (a zoom blur).
  f.threadZoom = 0.035 * smoothstep(5.94, 6.02, t) * (1 - smoothstep(6.2, 6.8, t));
  // The plasma has turned transparent: its last threads break into dust, and the dark ages begin
  // (“처음에는 원자도, 별도…”). Their gas condenses into the first density knots; the most massive
  // collapse first and their first stars light them (“중력이 물질을 끌어모아 첫 번째 별들의 불을 켰다”).
  f.gas = smoothstep(9.2, 10.4, t) * (1 - 0.75 * smoothstep(13.2, 15.6, t)) * (1 - smoothstep(19.2, 21.0, t));
  f.condense = smootherstep(9.4, 12.4, t);
  f.gasLit = smoothstep(12.0, 13.6, t);

  // ---- skies
  // The parent sky does not fade: it streams into the point with the rest of the old universe.
  f.parentSky = smoothstep(0.0, 0.7, t) * (1 - smoothstep(3.25, 3.55, t));
  f.skyPull = smoothstep(0.9, 3.45, t);
  f.newSky = smoothstep(22.6, 26.5, t);
  f.band = smoothstep(23.5, 25.7, t);

  // ---- world
  f.galaxy = smoothstep(18.9, 21.2, t);
  f.galaxyGlow = smoothstep(19.2, 21.6, t);
  // Inside the disk the galaxy is the band of the sky (soft layer) and the new sky's stars.
  f.galaxyStars = 1 - 0.85 * smoothstep(24.0, 26.4, t);
  f.sun = smoothstep(21.6, 23.6, t);
  f.sunBeacon = smoothstep(21.8, 23.2, t) * (1 - smoothstep(24.6, 26.2, t));
  f.planet = smoothstep(24.6, 25.6, t);
  // “작은 암석 행성 하나가 식어 갔다. 바다가 차오르고…” — the planet cools, oceans rise, clouds and life follow.
  f.cool = smoothstep(25.6, 27.8, t);
  f.ocean = smoothstep(26.6, 29.0, t);
  f.clouds = smoothstep(27.4, 29.8, t);
  f.life = smoothstep(28.6, 30.6, t);
  f.atmo = smoothstep(26.8, 29.6, t);

  // ---- camera shake right after the impact
  f.shake = reduced ? 0 : pulse(t, IMPACT, 0.02, 0.32) * (t >= IMPACT ? 1 : 0);

  // ---- post
  const flash = t >= IMPACT ? Math.exp(-after / 0.085) : 0;
  const flashGain = reduced ? 0.2 : 1;
  f.flash = flash * flashGain;
  // The flash itself is concentrated light at the singularity (ending-post.js); exposure only lifts a little.
  f.exposure = (1.0 - 0.3 * inhale - 0.18 * smoothstep(9.0, 10.4, t) * (1 - smoothstep(12.0, 14.0, t))) * (1 + 0.35 * flash * flashGain);
  // Bloom starts like the engine's (an additive glow around its seed), then tightens into the film's.
  f.bloom = 0.075 + 0.08 * (1 - smoothstep(0.1, 2.0, t)) + 0.05 * fall * (t <= IMPACT ? 1 : 0) + 0.08 * flashGain * pulse(t, IMPACT, 0.04, 0.16) + 0.04 * smoothstep(12.5, 15, t);
  f.bloomAdd = 0.55 * (1 - smoothstep(0.1, 2.0, t));
  f.shockRadius = t >= IMPACT ? 0.04 + 1.9 * (1 - Math.exp(-after * 2.6)) : 0;
  f.shockAmp = reduced ? 0 : (t >= IMPACT ? Math.exp(-after / 0.45) * smoothstep(IMPACT, 3.62, t) : 0);
  f.lens = smoothstep(1.0, 2.9, t) * (1 - smoothstep(3.36, 3.56, t));
  f.aberration = 0.25 + (reduced ? 0 : 2.5 * pulse(t, IMPACT, 0.04, 0.3));
  f.grain = mix(0.022, 0.042, smoothstep(0.2, 2.0, t));
  // Tone curve: the engine's at the handover, the film's own once the collapse is under way.
  f.curveMix = smoothstep(0.15, 2.2, t);
  // Through the birth a hue-preserving shoulder keeps the cold fire chromatic (white-hot core, ice
  // cyan, deep blue) instead of greying; it lingers into the dark ages so the faint first haze keeps
  // its blue.
  f.hueCurve = smoothstep(3.56, 3.72, t) * (1 - smoothstep(10.4, 12.2, t));
  // A graduated darkening of the lower band, where the UI sets its captions and controls: strongest
  // over the bright birth, lighter over the web, the galaxy and the final composition.
  f.scrim = smoothstep(0.3, 1.6, t) * (0.2 + 0.32 * smoothstep(3.56, 3.7, t) * (1 - smoothstep(8.8, 9.8, t)) + 0.1 * smoothstep(11.0, 13.0, t) * (1 - smoothstep(22.0, 24.0, t)));
  f.vignette = 0.3 + 0.12 * fall * (t <= IMPACT ? 1 : 0);

  // ---- the engine's background lift around the seed (display space), fading out
  const liftK = 1 - smoothstep(0.2, 1.8, t);
  f.lift[0] = LIFT[0] * liftK; f.lift[1] = LIFT[1] * liftK; f.lift[2] = LIFT[2] * liftK;

  // ---- background: the parent universe darkens; the inside starts black; the new sky is deep blue
  const dark = smoothstep(0.6, 3.3, t);
  const toWorld = smoothstep(21.0, 27.0, t);
  for (let i = 0; i < 3; i++) {
    const parent = mix(BG_PARENT[i], BG_VOID[i], dark);
    f.bg[i] = t < IMPACT ? parent : mix(BG_VOID[i], BG_WORLD[i], toWorld);
  }
  return f;
}
