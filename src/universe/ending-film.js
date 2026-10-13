// The ending film of 가능성의 끝 — “단 하나의 가능성.”
//
// The reader's universe (handed over by the engine, particle for particle) falls
// into one point; at 3.6 s, on the score's impact, the experiment detonates and a
// new universe is born inside it: time begins, space spreads, the vacuum chooses
// its state, inflation drags us through the plasma's incandescent threads, fields and
// particles separate, it turns transparent; in the dark ages gas condenses into the
// first knots, the first stars ignite, the cosmic web and proto-galaxies form — then
// one ordinary spiral galaxy, a dive to its outskirts, a sun-like star and a small rocky
// planet that cools into a blue world. Physically motivated colour (ending-glsl.js): thermal light
// by blackbody temperature, gas and dust in astrophotography colours, a planet lit by its star.
//
// The entry is one light: the seed the reader pressed. The engine hands over its world
// position (`focus`); the film collapses exactly onto it, and its first frames continue the
// seed's own light (same place, size and brightness) — it flares, then becomes the collapse core.
//
// Everything on screen is a pure function of film time (see ending-timeline.js and
// ending-camera.js), so seek / skip / replay / reduced-motion stills are exact.
// Contract: see design/V9-BRIEF.md and design/V9-ENDING.md.
import * as THREE from 'three';
import { DURATION, IMPACT, PHASES, PHASE_STILLS, createFrame, phaseIndex, sampleFrame, scaleFactor, setSeedLift } from './ending-timeline.js';
import { cameraAt, createCameraState } from './ending-camera.js';
import { buildMatterData, createMatter } from './ending-matter.js';
import { DEFAULT_SEED_LIGHT, createCore } from './ending-core.js';
import { buildSkyData, createSkies } from './ending-sky.js';
import { createSoft } from './ending-soft.js';
import { createGalaxy, fillGalaxyStars } from './ending-galaxy.js';
import { bakePlanetSurface, createSystem } from './ending-planet.js';
import { createPost } from './ending-post.js';
import { GALAXY_NORMAL, HERO, SUN } from './ending-layout.js';
import { clamp, mix, rng, smoothstep } from './ending-math.js';

/** GPU cost knobs per quality tier (see design/V9-ENDING.md). */
export const ENDING_TIERS = Object.freeze({
  high: { matter: 160000, nodes: 56, galaxy: 90000, sky: 4200, bloomLevels: 6, softScale: 0.5, plasmaSteps: 7, plasmaOctaves: 4, shells: 6, threadScale: 0.85, planetSegments: 128, maxPixels: 3.4e6 },
  medium: { matter: 90000, nodes: 48, galaxy: 52000, sky: 3000, bloomLevels: 5, softScale: 0.42, plasmaSteps: 6, plasmaOctaves: 4, shells: 5, threadScale: 0.72, planetSegments: 96, maxPixels: 2.1e6 },
  low: { matter: 38000, nodes: 36, galaxy: 24000, sky: 2000, bloomLevels: 4, softScale: 0.34, plasmaSteps: 4, plasmaOctaves: 3, shells: 4, threadScale: 0.6, planetSegments: 64, maxPixels: 1.1e6 },
});

/** Time slice per idle callback while the film builds (ms), and the fallback when idle callbacks are unavailable. */
const SLICE_MS = 6;
/** Build slice while a film waits to start (ms of work between frames). */
const RUSH_MS = 16;
/** The longest the film holds its clock for a program that is still linking (ms); then three links it as usual. */
const HOLD_MAX_MS = 2500;

/**
 * Create the film. Returns at once: the content (≈ 0.2 s of data generation and GPU setup) is
 * built in idle-time slices of a few milliseconds, then its shaders are compiled asynchronously,
 * one at a time, in the order the film first draws them. begin() never finishes either on the
 * click that opens the film: the film holds the engine's last frame and its own clock until what
 * the next frame draws is built and linked (the score follows the film's clock), so it always
 * plays complete and never stalls the page on a shader link.
 */
export function createEndingFilm({ renderer, quality = {} } = {}) {
  const t0 = now();
  const tierName = ENDING_TIERS[quality.tier] ? quality.tier : 'high';
  const tier = ENDING_TIERS[tierName];
  const matterCount = Math.round(Math.max(4000, Math.min(tier.matter, quality.particles > 0 ? Math.max(quality.particles, tier.matter * 0.5) : tier.matter)));
  const bloomEnabled = quality.bloom !== false;

  // ---- content (built by buildSteps(), below)
  let matter = null, core = null, skies = null, soft = null, galaxy = null, system = null, post = null;
  const scene = new THREE.Scene();
  scene.matrixWorldAutoUpdate = true;
  const camera = new THREE.PerspectiveCamera(45, 1, 0.02, 40);
  let built = false;
  let buildIdle = 0;
  let buildTimer = 0;
  let readyResolve = null;
  const ready = new Promise(resolve => { readyResolve = resolve; });
  /**
   * Build diagnostics (labs): synchronous creation time, idle steps, longest step, total; whether
   * begin() came before the build finished; the compile chain's wall time; begin()'s own cost
   * (centroid, handover copy) and the programs it left to the chain; the longest hold for a link.
   */
  const buildReport = { createMs: 0, steps: 0, longestMs: 0, buildMs: 0, beganBeforeBuild: false, compileMs: 0, beginMs: 0, beginCompileMs: 0, beginPending: 0, centreMs: 0, handoverMs: 0, heldMs: 0, firstFrameMs: -1, focus: false, exact: false, light: 'default' };

  // ---- state
  const frame = createFrame();
  const cam = createCameraState();
  const look = { x: 0, y: 0, tx: 0, ty: 0 };
  const view = {
    width: 1, height: 1, pixelRatio: 1, projScale: 1000, focus: 1, aperture: 0, nearFade: 0.02, size: 0.0016,
    gain: 1, galaxyGain: 1, cameraDistance: 1,
  };
  const postParams = {
    exposure: 1, bloom: 0.08, bloomAdd: 0, flash: 0, grain: 0.04, vignette: 0.3, aberration: 0, time: 0, curveMix: 1, hueCurve: 0, scrim: 0, scrimLow: 0, scrimHeight: 0.42,
    centerX: 0.5, centerY: 0.5, lensR: 0, shockRadius: 0, shockAmp: 0, bg: frame.bg,
    glareX: 0, glareY: 0, glare: 0, lift: frame.lift, liftRadius: 0.55, softBlur: 0.8, threadZoom: 0,
  };
  let time = 0;
  let started = false;
  let paused = false;
  let finished = false;
  let reduced = false;
  let engineFov = 45;
  let cssWidth = 1, cssHeight = 1, dpr = 1;
  let saved = null;
  let disposed = false;
  const tmpV = new THREE.Vector3();
  /** The handover's world → film transform and engine view (begin() → matter.loadHandover). */
  const handoverXf = {
    p0: [0, 0, 0], scale: 1, x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1],
    eye: [0, 0, 1], forward: [0, 0, -1], right: [1, 0, 0], up: [0, 1, 0], kx: 0.5, ky: 0.5, ox: 0.5, oy: 0.62, aspect: 1, invDiag: 1,
  };
  const sizeProbe = new THREE.Vector2();
  /** Layer switches and frame-value multipliers for labs (diagnostics only). */
  const layers = { matter: true, soft: true };
  const tuning = {};
  const lensMatterGain = matterGainFor(matterCount);
  const steps = buildSteps();
  // Context loss: everything GPU-side the film holds belongs to the lost context.
  const canvas = renderer.domElement;
  let lost = false;
  let losses = 0;
  let compiling = false;
  let allLinked = false;
  let holdSince = 0;
  /** When the current run began (startRun), for buildReport.firstFrameMs. */
  let runStart = 0;
  /** A handover waiting for the build (begin() before the idle build finished). */
  let pending = null;
  let buildError = null;
  canvas?.addEventListener?.('webglcontextlost', onContextLost);
  canvas?.addEventListener?.('webglcontextrestored', onContextRestored);
  scheduleBuild();
  buildReport.createMs = now() - t0;

  // ---------------------------------------------------------------- build

  /** The construction, as resumable steps of a few milliseconds each. */
  function* buildSteps() {
    const data = yield* buildMatterData(matterCount, tier.nodes, 4000);
    matter = createMatter(data);
    yield;
    core = createCore();
    // The galaxy's stars (shared distribution with the hero proto-galaxy, ending-galaxy.js).
    const galRand = rng(24680);
    const galOrbit = new Float32Array(tier.galaxy * 4);
    const galColor = new Float32Array(tier.galaxy * 3);
    for (let i = 0; i < tier.galaxy; i += 8000) {
      yield;
      fillGalaxyStars(galRand, galOrbit, galColor, i, Math.min(tier.galaxy, i + 8000));
    }
    galaxy = createGalaxy({ count: tier.galaxy, orbit: galOrbit, color: galColor });
    yield;
    skies = createSkies(yield* buildSkyData(tier.sky));
    yield;
    soft = createSoft({ steps: tier.plasmaSteps, octaves: tier.plasmaOctaves, shells: tier.shells, nodes: matter.nodes });
    yield;
    const surface = yield* bakePlanetSurface();
    yield;
    system = createSystem({ segments: tier.planetSegments, surface });
    yield;
    post = createPost(renderer, { bloomLevels: tier.bloomLevels, softScale: tier.softScale, threadScale: tier.threadScale, bloom: bloomEnabled });
    scene.add(skies.band, skies.parent, skies.fresh, galaxy.group, matter.mesh, core.group, system.group);
    built = true;
  }

  function step() {
    const s0 = now();
    steps.next();
    const ms = now() - s0;
    buildReport.steps++;
    buildReport.longestMs = Math.max(buildReport.longestMs, ms);
    if (built) {
      buildReport.buildMs = now() - t0;
      readyResolve(true);
    }
  }

  function scheduleBuild() {
    if (built || disposed || buildIdle || buildTimer) return;
    // A film waiting to start (begin() came before the build finished) builds in short slices
    // between frames rather than in idle time only.
    if (pending) buildTimer = setTimeout(pump, 0);
    else if (typeof requestIdleCallback === 'function') buildIdle = requestIdleCallback(pump, { timeout: 1000 });
    else buildTimer = setTimeout(pump, 16);
  }

  function pump(deadline) {
    buildIdle = 0;
    buildTimer = 0;
    if (built || disposed) return;
    const s0 = now();
    const budget = pending ? RUSH_MS
      : deadline && typeof deadline.timeRemaining === 'function' && !deadline.didTimeout
        ? Math.min(12, Math.max(SLICE_MS * 0.5, deadline.timeRemaining() - 1))
        : SLICE_MS;
    try {
      do step(); while (!built && now() - s0 < budget * 0.5);
    } catch (error) {
      console.error('Universe: ending film build failed', error);
      buildError = error;
      pending = null;
      readyResolve(false);
      return;
    }
    if (!built) { scheduleBuild(); return; }
    if (pending) {
      const handover = pending;
      pending = null;
      startRun(handover);
    }
    compileWhenIdle();
  }

  /** begin() came before the build finished: build the rest now, in short slices between frames. */
  function rushBuild() {
    if (built) return;
    if (buildIdle && typeof cancelIdleCallback === 'function') cancelIdleCallback(buildIdle);
    buildIdle = 0;
    if (!buildTimer) scheduleBuild();
  }

  /**
   * Compile every program in idle time once built, one program at a time and in the order the
   * film first draws them: each waits until the previous one has linked (KHR_parallel_shader_compile),
   * so the GPU process never has a queue of heavy shaders to translate — a queue the page's next
   * frame would otherwise wait on. Each linked program's first use (link check, uniform and
   * attribute lookups: synchronous GPU queries) is paid here too, in idle time, instead of on the
   * film's first frame. `soon`: start now rather than in idle time (begin() hands the rest over).
   */
  function compileWhenIdle(soon = false) {
    if (compiling || disposed || lost || !built) return;
    const list = compileUnits();
    if (list.every(u => u.done)) return;
    compiling = true;
    const c0 = now();
    const generation = losses;
    const probe = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, depthBuffer: false });
    const async = typeof renderer.compileAsync === 'function';
    let i = 0;
    const stale = () => disposed || lost || generation !== losses;
    const finish = () => {
      // A context loss ends this chain (its pending promise may never resolve); onContextLost has
      // already reset `compiling`, and the probe died with the context.
      if (generation !== losses) { forgetDisposeHooks(probe); return; }
      compiling = false;
      probe.dispose();
      if (list.every(u => u.done)) buildReport.compileMs = now() - c0;
    };
    // Each program is issued as soon as the previous one has linked and been used once (issuing
    // costs the main thread ~1 ms; the translation runs in the GPU process).
    const next = () => {
      while (i < list.length && list[i].done) i++;
      if (stale() || i >= list.length) { finish(); return; }
      // What the film draws now comes first (after a jump), then everything in order. While the
      // film holds its frame for them (holdSince) they are issued together — their translations run
      // in parallel in the GPU process — and the chain runs at once, not in idle time.
      const t = displayTime();
      let batch = started ? list.filter(u => !u.done && !u.issued && u.at <= t && u.until >= t) : [];
      if (batch.length > 1 && !holdSince) batch = batch.slice(0, 1);
      if (!batch.length) {
        const unit = list[i++];
        if (unit.issued) { next(); return; }
        batch = [unit];
      }
      const jobs = batch.map(unit => {
        unit.issued = true;
        try { return compileUnit(unit, probe, async); } catch (error) { return null; /* reported again on first render */ }
      });
      Promise.all(jobs.map(job => Promise.resolve(job).catch(() => {}))).then(() => (holdSince ? setTimeout : idle)(() => {
        if (!stale()) for (const unit of batch) firstUse(unit);
        next();
      }));
    };
    if (soon) next();
    else idle(next);
  }

  /**
   * The film's programs as compile units, in the order the film first draws them (`at`, film
   * seconds): the collapse from the first frame, the newborn universe from the impact, the
   * galaxy and the planet from the world phase.
   */
  let units = null;
  function compileUnits() {
    if (units) return units;
    const list = [];
    const seen = new Set();
    // `until`: the last film second the unit draws (conservative), so a seek only waits for what
    // that time draws (see linkedBy / seek).
    const add = (root, at, until = Infinity) => root.traverse(o => {
      if (!o.material || seen.has(o)) return;
      seen.add(o);
      list.push({ object: o, camera, scene, screen: false, at, until, done: false });
    });
    add(matter.mesh, 0, 24.5);
    add(core.group, 0, 7.6);
    add(skies.parent, 0, IMPACT);
    // (The fireball and gas share the soft pass; the threads and their zoom blur follow at 5.8 s.)
    const passUntil = new Map([[soft.material, 21.0], [soft.threads, 9.7]]);
    for (const unit of post.compileUnits([[soft.material, IMPACT], [soft.threads, 5.8]], IMPACT, 5.8)) {
      list.push({ ...unit, until: passUntil.get(unit.object.material) ?? (unit.at > IMPACT ? 9.7 : unit.at > 0 ? 21.0 : Infinity), done: false });
    }
    add(galaxy.group, 18.9);
    add(system.group, 21.6);
    add(skies.fresh, 22.6);
    add(skies.band, 23.5);
    // Anything else in the scene: from the first frame.
    add(scene, 0);
    units = list.sort((a, b) => a.at - b.at);
    return units;
  }

  /** A compiled unit's first use: its link check and uniform/attribute lookups, done once. */
  function firstUse(unit) {
    const material = unit.object.material;
    const program = material && renderer.properties?.get(material)?.currentProgram;
    try {
      if (program && program.getUniforms) { program.getUniforms(); program.getAttributes(); }
    } catch (error) { /* reported again on first render */ }
    unit.done = true;
    if (units.every(u => u.done)) allLinked = true;
  }

  /**
   * Whether every program the film draws up to time t has linked. It never blocks (completion
   * queries of KHR_parallel_shader_compile; without the extension programs count as linked). While
   * it is false the film holds its clock and its last frame — at the start, the engine's frame —
   * instead of stalling the page on a link: the compile chain is working on exactly those
   * programs, in that order. The score follows the film's clock (src/audio.js).
   */
  function linkedBy(t) {
    if (allLinked || !units) return true;
    let ok = true;
    for (let k = 0; k < units.length && units[k].at <= t; k++) {
      const unit = units[k];
      if (unit.done || unit.until < t) continue;
      const material = unit.object.material;
      const program = material ? renderer.properties.get(material).currentProgram : null;
      if (!program || (typeof program.isReady === 'function' && !program.isReady())) { ok = false; break; }
    }
    if (ok) { holdSince = 0; return true; }
    if (!compiling) compileWhenIdle(true);
    const n = now();
    if (!holdSince) holdSince = n;
    if (n - holdSince < HOLD_MAX_MS) { buildReport.heldMs = Math.max(buildReport.heldMs, n - holdSince); return false; }
    return true;
  }

  /** Compile one unit under the renderer state the film runs with. */
  function compileUnit(unit, probe, async) {
    const prevTarget = renderer.getRenderTarget();
    const prevSpace = renderer.outputColorSpace;
    const prevTone = renderer.toneMapping;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NoToneMapping;
    let job;
    try {
      renderer.setRenderTarget(unit.screen ? null : probe);
      job = async ? renderer.compileAsync(unit.object, unit.camera, unit.scene) : renderer.compile(unit.object, unit.camera, unit.scene);
    } finally {
      renderer.setRenderTarget(prevTarget);
      renderer.outputColorSpace = prevSpace;
      renderer.toneMapping = prevTone;
    }
    return job;
  }

  function idle(fn) {
    // While the film plays the chain must keep up with it (the impact's programs by 3.6 s).
    if (typeof requestIdleCallback === 'function') requestIdleCallback(fn, { timeout: started ? 120 : 1000 });
    else setTimeout(fn, 16);
  }

  function onContextLost() {
    lost = true;
    losses++;
    compiling = false;
    allLinked = false;
    holdSince = 0;
    if (units) for (const unit of units) { unit.done = false; unit.issued = false; }
    // Every GL object the film made died with the context. three re-creates them from our data on
    // first use after a restore; the dispose hooks it registered belong to the old context, so they
    // must never run (deleting foreign objects floods the console with warnings).
    forgetGpu();
  }

  function onContextRestored() {
    lost = false;
    if (built && !disposed) compileWhenIdle();
  }

  function forgetGpu() {
    scene.traverse(o => {
      forgetDisposeHooks(o.geometry);
      forgetDisposeHooks(o.material);
    });
    if (soft) { forgetDisposeHooks(soft.material); forgetDisposeHooks(soft.threads); }
    post?.forget(forgetDisposeHooks);
    system?.forget(forgetDisposeHooks);
  }

  // ---------------------------------------------------------------- helpers

  /**
   * begin(): issue the programs the first frames draw (the collapse) that the idle compile has
   * not reached yet, without waiting for them (the film holds its first frame until they have
   * linked, see linkedBy); the rest is left to the background chain, in order, while the matter
   * falls. Forcing every remaining program here put all their links on the click.
   */
  function prime() {
    if (!built) return;
    let probe = null;
    let left = 0;
    for (const unit of compileUnits()) {
      if (unit.done) continue;
      left++;
      const material = unit.object.material;
      if (unit.at >= IMPACT || (material && renderer.properties.get(material).currentProgram)) continue;
      probe = probe || new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, depthBuffer: false });
      try { compileUnit(unit, probe, false); } catch (error) { /* reported again on first render */ }
    }
    probe?.dispose();
    buildReport.beginPending = left;
    holdSince = 0;
    if (left) compileWhenIdle(true);
  }

  function matterGainFor(n) {
    // Fewer particles on small tiers: each carries a little more light.
    return Math.min(2.2, Math.sqrt(160000 / n));
  }

  function saveRenderer() {
    saved = {
      toneMapping: renderer.toneMapping,
      toneMappingExposure: renderer.toneMappingExposure,
      clearColor: renderer.getClearColor(new THREE.Color()),
      clearAlpha: renderer.getClearAlpha(),
      autoClear: renderer.autoClear,
      outputColorSpace: renderer.outputColorSpace,
      renderTarget: renderer.getRenderTarget(),
    };
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.autoClear = false;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
  }

  function restoreRenderer() {
    if (!saved) return;
    renderer.toneMapping = saved.toneMapping;
    renderer.toneMappingExposure = saved.toneMappingExposure;
    renderer.setClearColor(saved.clearColor, saved.clearAlpha);
    renderer.autoClear = saved.autoClear;
    renderer.outputColorSpace = saved.outputColorSpace;
    renderer.setRenderTarget(saved.renderTarget);
    saved = null;
  }

  function allocateTargets() {
    const w = Math.max(1, Math.round(cssWidth * dpr));
    const h = Math.max(1, Math.round(cssHeight * dpr));
    const k = Math.min(1, Math.sqrt(tier.maxPixels / (w * h)));
    post.allocate(Math.max(1, Math.round(w * k)), Math.max(1, Math.round(h * k)));
    view.width = Math.max(1, Math.round(w * k));
    view.height = Math.max(1, Math.round(h * k));
    view.pixelRatio = dpr * k;
  }

  /** The time actually shown: reduced motion turns each phase start into its composed still. */
  function displayTime() {
    if (reduced && paused) {
      for (let i = 0; i < PHASES.length; i++) if (Math.abs(time - PHASES[i].start) < 1e-3) return PHASE_STILLS[i];
    }
    return time;
  }

  /**
   * The collapse point when the engine hands over no `focus` (older engines, labs): the
   * light-weighted centroid, trimmed twice so far-away stars do not pull it. Sampled (~16 000
   * points per pass): it runs on the click that opens the film.
   */
  function robustCentre(positions, colors, count, fallback) {
    let cx = 0, cy = 0, cz = 0;
    const step = Math.max(1, Math.floor(count / 16000));
    const ds = new Float32Array(Math.ceil(count / (step * 4)));
    let r2 = Infinity;
    for (let pass = 0; pass < 3; pass++) {
      let sx = 0, sy = 0, sz = 0, sw = 0;
      for (let i = 0; i < count; i += step) {
        const x = positions[i * 3], y = positions[i * 3 + 1], z = positions[i * 3 + 2];
        const dx = x - cx, dy = y - cy, dz = z - cz;
        if (dx * dx + dy * dy + dz * dz > r2) continue;
        const w = colors ? 0.05 + colors[i * 3] * 0.3 + colors[i * 3 + 1] * 0.55 + colors[i * 3 + 2] * 0.15 : 1;
        sx += x * w; sy += y * w; sz += z * w; sw += w;
      }
      if (!(sw > 0)) return fallback.slice();
      cx = sx / sw; cy = sy / sw; cz = sz / sw;
      if (pass < 2) {
        // Next pass keeps points within 2.5× the median distance from this estimate.
        let n = 0;
        for (let i = 0; i < count; i += step * 4) {
          const dx = positions[i * 3] - cx, dy = positions[i * 3 + 1] - cy, dz = positions[i * 3 + 2] - cz;
          ds[n++] = Math.sqrt(dx * dx + dy * dy + dz * dz);
        }
        const sorted = ds.subarray(0, n).sort();
        const radius = (sorted[n >> 1] || 1) * 2.5;
        r2 = radius * radius;
      }
    }
    return [cx, cy, cz];
  }

  // ---------------------------------------------------------------- contract

  function begin(handover = {}) {
    if (disposed || buildError) return;
    time = 0;
    started = true;
    paused = false;
    finished = false;
    if (built) {
      startRun(handover);
      return;
    }
    // Never finish the build on the click: the film holds the engine's last frame (and its clock)
    // while the remaining steps run in short slices between frames, then starts from time 0.
    buildReport.beganBeforeBuild = true;
    pending = handover;
    rushBuild();
  }

  /** Place the handover and start the run (the build is complete). */
  function startRun(handover) {
    const b0 = now();
    runStart = b0;
    buildReport.firstFrameMs = -1;
    const { positions = null, colors = null, sizes = null, energies = null, camera: hc = null, origin = [0.5, 0.62], focus = null, focusLight } = handover;
    const count = positions ? Math.min(handover.count || positions.length / 3, Math.floor(positions.length / 3)) : 0;
    // Size: from the handover, else from the shared renderer itself.
    renderer.getSize(sizeProbe);
    cssWidth = handover.width > 0 ? handover.width : sizeProbe.x || cssWidth;
    cssHeight = handover.height > 0 ? handover.height : sizeProbe.y || cssHeight;
    dpr = handover.pixelRatio > 0 ? handover.pixelRatio : quality.pixelRatio > 0 ? quality.pixelRatio : renderer.getPixelRatio() || 1;
    if (!saved) saveRenderer();
    allocateTargets();
    const w0 = now();
    prime();
    buildReport.beginCompileMs = now() - w0;

    // ---- film space (see ending-layout.js)
    const C0 = hc?.position || [0, 0.6, 6];
    const T0 = hc?.target || [0, 0, 0];
    engineFov = hc?.fov || 45;
    // The point everything falls into: the seed itself, the one light on the reader's screen (the
    // engine's `focus`, world space like `positions`), so the core, the disk, the lens and the flash
    // all sit exactly on it. Without one: the light-weighted centre of what the reader sees.
    const c0 = now();
    const seed = pointOf(focus, C0);
    buildReport.focus = !!seed;
    const P0 = seed || (count > 0 ? robustCentre(positions, colors, count, T0) : T0.slice());
    let zx = C0[0] - P0[0], zy = C0[1] - P0[1], zz = C0[2] - P0[2];
    const d0 = Math.hypot(zx, zy, zz) || 1;
    zx /= d0; zy /= d0; zz /= d0;
    let ux = 0, uy = 1, uz = 0;
    if (Math.abs(zy) > 0.995) { uy = 0; uz = -1; }
    let xx = uy * zz - uz * zy, xy = uz * zx - ux * zz, xz = ux * zy - uy * zx;
    const xl = Math.hypot(xx, xy, xz) || 1;
    xx /= xl; xy /= xl; xz /= xl;
    const yx = zy * xz - zz * xy, yy = zz * xx - zx * xz, yz = zx * xy - zy * xx;
    const xf = handoverXf;
    xf.p0[0] = P0[0]; xf.p0[1] = P0[1]; xf.p0[2] = P0[2];
    xf.scale = 1 / d0;
    xf.x[0] = xx; xf.x[1] = xy; xf.x[2] = xz;
    xf.y[0] = yx; xf.y[1] = yy; xf.y[2] = yz;
    xf.z[0] = zx; xf.z[1] = zy; xf.z[2] = zz;
    // The engine's exact view at t = 0: camera at (0, 0, 1), looking at its own target.
    {
      const rx = T0[0] - P0[0], ry = T0[1] - P0[1], rz = T0[2] - P0[2];
      const ht = cam.handoverTarget;
      ht[0] = (rx * xx + ry * xy + rz * xz) / d0;
      ht[1] = (rx * yx + ry * yy + rz * yz) / d0;
      ht[2] = (rx * zx + ry * zy + rz * zz) / d0;
    }
    const hu = cam.handoverUp;
    hu[0] = ux * xx + uy * xy + uz * xz; hu[1] = ux * yx + uy * yy + uz * yz; hu[2] = ux * zx + uy * zy + uz * zz;

    // Engine view basis, to place every particle on the reader's screen (distance from the trigger).
    let fx = T0[0] - C0[0], fy = T0[1] - C0[1], fz = T0[2] - C0[2];
    const fl = Math.hypot(fx, fy, fz) || 1;
    fx /= fl; fy /= fl; fz /= fl;
    let rx = fy * uz - fz * uy, ry = fz * ux - fx * uz, rz = fx * uy - fy * ux;
    const rl = Math.hypot(rx, ry, rz) || 1;
    rx /= rl; ry /= rl; rz /= rl;
    const aspect = cssWidth / cssHeight;
    const tanH = Math.tan((engineFov * Math.PI) / 360);
    xf.eye[0] = C0[0]; xf.eye[1] = C0[1]; xf.eye[2] = C0[2];
    xf.forward[0] = fx; xf.forward[1] = fy; xf.forward[2] = fz;
    xf.right[0] = rx; xf.right[1] = ry; xf.right[2] = rz;
    xf.up[0] = ry * fz - rz * fy; xf.up[1] = rz * fx - rx * fz; xf.up[2] = rx * fy - ry * fx;
    xf.kx = 0.5 / (tanH * aspect);
    xf.ky = 0.5 / tanH;
    xf.ox = clamp(origin?.[0] ?? 0.5, 0, 1);
    xf.oy = clamp(origin?.[1] ?? 0.62, 0, 1);
    xf.aspect = aspect;
    xf.invDiag = 1 / Math.hypot(aspect, 1);
    // Optional `sizes` (engine sprite diameters, world units) with their `energies` (the factor
    // folded into each colour) make the first frame exact; one without the other is ignored.
    const exact = !!(sizes && energies && sizes.length >= count && energies.length >= count);
    buildReport.exact = exact && count > 0;
    const h0 = now();
    buildReport.centreMs = h0 - c0;
    matter.loadHandover(positions, colors, count, count > 0 ? xf : null, 1 / d0, exact ? sizes : null, exact ? energies : null);
    // The seed's own glow, continued at the collapse point: as the engine drew it (`focusLight`:
    // its glow billboards and the light's dim); none when the engine says none is showing (null);
    // the engine's defaults when the handover does not say (older engines, labs).
    const seedLight = focusLight === undefined ? DEFAULT_SEED_LIGHT : lightOf(focusLight) || [];
    buildReport.light = focusLight === undefined ? 'default' : seedLight.length ? 'handover' : 'none';
    core.setLight(seedLight, 1 / d0);
    // The engine's background lift around the seed is tinted by the seed's colour (its formation
    // tint, the glow's halo colour): continue it in that colour.
    setSeedLift(seedLight.length ? srgbOf(seedLight[0].halo) : null);
    buildReport.handoverMs = now() - h0;

    buildReport.beginMs = now() - b0;
  }

  function update(dt) {
    if (disposed) return;
    const step = clamp(Number.isFinite(dt) ? dt : 0, 0, 0.1);
    // Pointer parallax eases outside film time (it keeps responding while paused).
    const k = 1 - Math.exp(-step * 2.5);
    look.x += ((reduced ? 0 : look.tx) - look.x) * k;
    look.y += ((reduced ? 0 : look.ty) - look.y) * k;
    if (!started || paused) return;
    // The clock waits for the build (begin() before it finished) and while a program the next
    // frame draws is still linking (see linkedBy).
    if (pending || !built || !linkedBy(time + step)) return;
    time += step;
    if (time >= DURATION) finished = true;
  }

  function render() {
    // A failed build ends the run (the engine's film host catches this and hands back).
    if (buildError && started) throw buildError;
    if (disposed || !started || !built || lost) return;
    if (!saved) saveRenderer();
    const t = displayTime();
    // Hold the last frame (at the start: the engine's) while a program it draws is still linking.
    if (!linkedBy(t)) return;
    if (buildReport.firstFrameMs < 0) buildReport.firstFrameMs = now() - runStart;
    if (!post.allocated) allocateTargets();
    sampleFrame(frame, t, reduced);
    // Lab-only: multiply chosen frame values (e.g. { plasmaEmit: 0.5 }) for art tuning.
    for (const key in tuning) if (typeof frame[key] === 'number') frame[key] *= tuning[key];
    const aspect = view.width / view.height;
    // Short landscape screens (phones on their side): the UI's caption sits at ~0.72 H, over the
    // web. The camera lifts the web's hero node above centre and the scrim deepens behind the line.
    const shortScreen = clamp((600 - cssHeight) / 80, 0, 1) * clamp((aspect - 1.1) / 0.3, 0, 1);
    cam.shortScreen = shortScreen;
    cameraAt(cam, t, frame, aspect, engineFov, look, reduced);

    camera.position.set(cam.position[0], cam.position[1], cam.position[2]);
    camera.up.set(cam.up[0], cam.up[1], cam.up[2]);
    camera.lookAt(cam.look[0], cam.look[1], cam.look[2]);
    camera.fov = cam.fov;
    camera.aspect = aspect;
    camera.near = cam.near;
    camera.far = cam.far;
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld(true);

    // View constants shared by the particle shaders.
    const tanH = Math.tan((cam.fov * Math.PI) / 360);
    view.projScale = (view.height * 0.5) / tanH;
    view.cameraDistance = cam.distance;
    view.focus = cam.distance;
    // Shallow depth of field once we are inside the new universe (matter rushing past the lens).
    // It ends as the web forms: the web itself reads as fine dust and gas, not bokeh.
    view.aperture = 0.0016 * smoothstep(IMPACT, 4.2, t) * (1 - smoothstep(12.5, 15.0, t));
    // On the approach to the galaxy the web between us and it clears early (no beads over its disk).
    view.nearFade = t < IMPACT ? cam.distance * 0.04
      : Math.max(Math.min(0.14, cam.distance * 0.2), cam.distance * 1.1 * smoothstep(18.8, 20.4, t) * (1 - smoothstep(23.0, 24.5, t)));
    view.size = t < IMPACT ? 0.0016 : mix(0.0019, 0.0023, smoothstep(8, 12, t));
    view.gain = lensMatterGain;
    view.galaxyGain = 1;

    // Once the web has faded behind the galaxy, skip the 4 × N vertex invocations entirely.
    matter.mesh.visible = layers.matter && (frame.webFade > 0.001 || frame.heroFade > 0.001);
    matter.update(frame, view);
    core.update(frame, view, cam.position);
    skies.update(frame, view, reduced, cam, aspect);
    const toPlane = Math.abs((cam.position[0] - HERO[0]) * GALAXY_NORMAL[0] + (cam.position[1] - HERO[1]) * GALAXY_NORMAL[1] + (cam.position[2] - HERO[2]) * GALAXY_NORMAL[2]);
    galaxy.update(frame, view, toPlane);
    system.update(frame, view, camera);
    const passes = soft.update(frame, cam, aspect, scaleFactor(Math.max(0, t - frame.shutter * 0.6)));

    // Singularity on screen (lens and shockwave centre).
    tmpV.set(0, 0, 0).project(camera);
    postParams.centerX = tmpV.x * 0.5 + 0.5;
    postParams.centerY = tmpV.y * 0.5 + 0.5;
    // Einstein radius (screen heights). The lens is screen-space (it cannot tell the disk from
    // the sky behind it), so it stays modest and fades out over the inner disk (ending-post.js).
    postParams.lensR = 0.022 * frame.lens;
    // The engine's background lift around the seed (in the seed's tint), fading as space darkens.
    postParams.liftRadius = aspect < 0.8 ? 0.42 : 0.55;
    // The star's veiling glare once it has slid out of the frame (it must be in front of us).
    postParams.glare = 0;
    if (frame.sun > 0.001 && t > 25) {
      tmpV.set(SUN[0], SUN[1], SUN[2]).applyMatrix4(camera.matrixWorldInverse);
      if (tmpV.z < 0) {
        tmpV.applyMatrix4(camera.projectionMatrix);
        // Pinned just outside the nearest edge, fading as the star swings further away.
        const off = Math.max(Math.abs(tmpV.x), Math.abs(tmpV.y));
        postParams.glareX = clamp(tmpV.x * 0.5 + 0.5, -0.35, 1.35);
        postParams.glareY = clamp(tmpV.y * 0.5 + 0.5, -0.35, 1.35);
        postParams.glare = frame.sun * 0.07 * smoothstep(0.9, 1.3, off) * (1 - 0.75 * smoothstep(1.5, 12.0, off));
      }
    }
    postParams.shockRadius = frame.shockRadius;
    postParams.shockAmp = frame.shockAmp;
    postParams.exposure = frame.exposure;
    postParams.bloom = frame.bloom;
    postParams.bloomAdd = frame.bloomAdd;
    postParams.flash = frame.flash;
    postParams.grain = frame.grain;
    postParams.vignette = frame.vignette;
    postParams.aberration = frame.aberration;
    postParams.curveMix = frame.curveMix;
    postParams.hueCurve = frame.hueCurve;
    // On short landscape screens, through the web (the first stars to the galaxy): a scrim at full
    // strength up to just above the caption's line, fading out by 0.62 H from the bottom.
    const webScrim = shortScreen * smoothstep(10.6, 12.2, t) * (1 - smoothstep(20.4, 22.4, t));
    postParams.scrim = frame.scrim + 0.3 * webScrim;
    postParams.scrimLow = 0.27 * webScrim;
    postParams.scrimHeight = 0.42 + 0.2 * webScrim;
    postParams.time = reduced ? Math.floor(t) : t;
    // The gas is smooth: a wider blur hides the low-resolution grid.
    postParams.softBlur = 0.8 + 0.4 * smoothstep(8.4, 9.4, t);
    postParams.threadZoom = reduced ? 0 : frame.threadZoom;

    post.render(scene, camera, passes.soft && layers.soft ? soft.material : null, passes.threads && layers.soft ? soft.threads : null, postParams);
  }

  function resize(width, height, pixelRatio) {
    if (width > 0) cssWidth = width;
    if (height > 0) cssHeight = height;
    if (pixelRatio > 0) dpr = pixelRatio;
    if (post?.allocated) allocateTargets();
  }

  function state() {
    const index = phaseIndex(time);
    return {
      time,
      duration: DURATION,
      started,
      paused,
      finished,
      phase: index,
      phaseKey: PHASES[index].key,
      phases: PHASES,
      impact: IMPACT,
    };
  }

  function pause(value) {
    paused = value === undefined ? !paused : !!value;
  }

  function seek(seconds) {
    time = clamp(Number(seconds) || 0, 0, DURATION);
    started = true;
    finished = time >= DURATION;
    jumpTo();
  }

  function skipToEnd() {
    time = DURATION;
    started = true;
    finished = true;
    paused = false;
    jumpTo();
  }

  /**
   * A jump (seek, skip): the compile chain serves the programs the film draws at its current time
   * first (see compileWhenIdle), so a jump far ahead does not wait for everything before it while
   * the film holds its last frame — in a lab still, nothing at all (a black frame).
   */
  function jumpTo() {
    if (allLinked || !built || lost || disposed || !saved) return;
    if (!compiling) compileWhenIdle(true);
  }


  function replay() {
    time = 0;
    started = true;
    finished = false;
    paused = false;
  }

  function setPointer(nx, ny) {
    look.tx = clamp(Number(nx) || 0, -1, 1);
    look.ty = clamp(Number(ny) || 0, -1, 1);
  }

  function setReducedMotion(value) {
    reduced = !!value;
  }

  function end() {
    // A pending start is dropped; the build goes on in idle time.
    if (pending) {
      pending = null;
      if (buildTimer) clearTimeout(buildTimer);
      buildTimer = 0;
      scheduleBuild();
    }
    restoreRenderer();
    post?.release();
    started = false;
    paused = false;
  }

  function dispose() {
    if (disposed) return;
    end();
    disposed = true;
    pending = null;
    if (buildIdle && typeof cancelIdleCallback === 'function') cancelIdleCallback(buildIdle);
    if (buildTimer) clearTimeout(buildTimer);
    canvas?.removeEventListener?.('webglcontextlost', onContextLost);
    canvas?.removeEventListener?.('webglcontextrestored', onContextRestored);
    matter?.dispose();
    core?.dispose();
    skies?.dispose();
    soft?.dispose();
    galaxy?.dispose();
    system?.dispose();
    post?.dispose();
  }

  return {
    begin, update, render, resize, state, pause, seek, skipToEnd, replay, setPointer, setReducedMotion, end, dispose,
    /**
     * What the film reads from the handover beyond positions and colours (src/universe/film-host.js):
     * the engine's sprite sizes together with their energies make the first frame exact.
     */
    handover: Object.freeze({ energies: true, focus: true, focusLight: true }),
    /** Resolves once the content is built (shaders then compile in idle time). Labs/tests. */
    ready,
    /** Diagnostics for labs/tests. */
    info: () => ({ tier: tierName, particles: matterCount, bloom: bloomEnabled, buffer: [view.width, view.height], built, build: { ...buildReport } }),
    layers,
    tuning,
  };
}

const now = () => (typeof performance !== 'undefined' ? performance.now() : Date.now());

/**
 * The seed's glow billboards from the handover's `focusLight` (engine.js focusLight(): { glows:
 * [{scale (world half-size), intensity, core, halo (linear rgb), breath, rays}], dim, … }, glow
 * intensities before the light's dim), as {scale, intensity × dim, core, halo, rays} for
 * ending-core.js; null when absent or unusable.
 */
function lightOf(focusLight) {
  const glows = focusLight && Array.isArray(focusLight.glows) ? focusLight.glows : null;
  if (!glows || !glows.length) return null;
  const dim = Number.isFinite(Number(focusLight.dim)) && Number(focusLight.dim) >= 0 ? Number(focusLight.dim) : 1;
  const list = [];
  for (const g of glows) {
    if (!g || !(Number(g.scale) > 0) || !(Number(g.intensity) >= 0)) continue;
    list.push({ scale: Number(g.scale), intensity: Number(g.intensity) * dim, core: g.core, halo: g.halo, rays: Number(g.rays) || 0 });
  }
  return list.length ? list : null;
}

/** Display-space (sRGB, 0..1) colour of a linear rgb triple, or null. */
function srgbOf(c) {
  if (!c || c.length < 3) return null;
  const out = [];
  for (let k = 0; k < 3; k++) {
    const v = Math.max(0, Math.min(1, Number(c[k])));
    if (!Number.isFinite(v)) return null;
    out.push(v <= 0.0031308 ? v * 12.92 : 1.055 * Math.pow(v, 1 / 2.4) - 0.055);
  }
  return Math.max(out[0], out[1], out[2]) > 0.02 ? out : null;
}

/** A usable handover point [x, y, z] (finite, not at the camera's eye C), or null. */
function pointOf(p, C) {
  if (!p || typeof p.length !== 'number' || p.length < 3) return null;
  const x = Number(p[0]), y = Number(p[1]), z = Number(p[2]);
  if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z)) return null;
  if (Math.hypot(x - C[0], y - C[1], z - C[2]) < 1e-6) return null;
  return [x, y, z];
}

/** Remove three's 'dispose' hooks from a GL resource whose context was lost (see onContextLost). */
function forgetDisposeHooks(resource) {
  const hooks = resource && resource._listeners;
  if (hooks && hooks.dispose) hooks.dispose.length = 0;
  if (resource && resource.isRenderTarget) forgetDisposeHooks(resource.texture);
}
