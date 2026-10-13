// Ending-film lab: drives src/universe/ending-film.js alone on a full-window canvas
// with a synthesized engine handover, exactly as the engine will.
//
//   tools/lab/ending-lab.html?t=13&paused=1        still at 13 s
//   ?tier=low|medium|high   ?reduced=1   ?origin=0.5,0.8
//   ?scene=seed (default)   the engine's 'ending-ready' at the end of ch.8: the v9.1 seed (core, corona,
//                           faint orbiting arcs, infalling threads, dust) in the reader's composition,
//                           in the cold palette, dimmed like the reading layout, handed over with `focus`
//                           (the seed's world position), `focusLight` (its armed glow) and sizes + energies
//   ?scene=ring             the cover's possibility ring instead (no focus: the centroid fallback)
//   ?focus=0                hand over no focus (the film falls back to its light-weighted centroid)
//   ?seedAt=0.62,0.4        put the seed off-centre on the reader's screen (fractions, y down), with a
//                           one-sided infalling stream so the centroid misses the seed (focus test)
//   ?light=0                hand over no `focusLight` (the seed's glow billboards): the film's defaults
//   ?sizes=0                hand over no sprite sizes/energies (the film estimates them from the colours)
//   ?pre=1  show an engine-like view of the handover (its particles, the seed's glow billboards, the
//           engine's tone curve and background) for 1 s before begin() (continuity check);
//           ?pre=hold keeps it until __lab.release() (stills of the handover frame)
//   ?hud=1  time / phase readout
//   ?build=sync  begin() at once (finishing the build synchronously) instead of after the idle build
//   ?delay=ms    begin that long after the idle build
// window.__lab.info.build: creation / idle-build timings (createMs, steps, longestMs, buildMs),
// `focus` (whether the film collapsed onto the handed-over focus), `exact` (sizes + energies used)
// and `light` ('handover' | 'none' | 'default').
// Keys: space pause · ←/→ seek ∓1 s · r replay · e skip to end · x end()
// Bundle: node tools/build-universe.mjs --entry tools/lab/ending-lab.entry.js --out tools/lab/ending-lab.bundle.js --dev
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { createEndingFilm } from '../../src/universe/ending-film.js';

const params = new URLSearchParams(location.search);
const num = (k, d) => (params.has(k) ? Number(params.get(k)) : d);
const tier = params.get('tier') || 'high';
const scene = params.get('scene') || 'seed';

const canvas = document.getElementById('lab-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: 'high-performance' });
const pixelRatio = Math.min(window.devicePixelRatio || 1, tier === 'low' ? 1.5 : 2);
renderer.setPixelRatio(pixelRatio);
renderer.setSize(innerWidth, innerHeight, false);
renderer.setClearColor(0x04070b, 1);
// Engine-like renderer state that the film must save and restore.
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;

// ---- synthesized handover --------------------------------------------------
const COUNT = tier === 'low' ? 24576 : tier === 'medium' ? 65536 : 150000;
const STARS = 4000;
const positions = new Float32Array((COUNT + STARS) * 3);
const colors = new Float32Array((COUNT + STARS) * 3);
// Engine sprite diameters (world units) and energies. Like the engine, the colours below fold in a
// sprite energy min(4, size / 0.0032 + 0.25); like the engine with the film's opt-in
// (film.handover.energies), sizes and energies are handed over (?sizes=0: neither, the estimate path).
const sizes = new Float32Array(COUNT + STARS);
const energies = new Float32Array(COUNT + STARS);
const fold = (i, c, size) => {
  sizes[i] = size;
  const e = Math.min(4, size / 0.0032 + 0.25);
  energies[i] = e;
  colors.set(c.map(x => x * e), i * 3);
};
let seed = 12345;
const rand = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
const gauss = () => Math.sqrt(-2 * Math.log(rand() + 1e-9)) * Math.cos(6.283185 * rand());
const lin = h => [((h >> 16) & 255) / 255, ((h >> 8) & 255) / 255, (h & 255) / 255].map(c => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
// The site's one cold palette (design/V9.1-FEEDBACK.md): accent, accent-hi, accent-deep, deepest, fg.
const ICE = lin(0xa9e7f2), HI = lin(0xe6fbff), DEEP = lin(0x4f8fb0), DEEPEST = lin(0x1b3a52), WHITE = lin(0xeaf2f8);
const mixc = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const unit = () => { const d = [gauss(), gauss(), gauss()]; const l = Math.hypot(...d) || 1; return d.map(v => v / l); };

// The engine camera, composed like the engine's rig: the formation's framing radius R spans the
// layout's radius in CSS px (reading layout; the seed composes small and central there).
const W = innerWidth, H = innerHeight;
const tall = W < 640 || W / H <= 0.8;
const FOV = 32;
const tanH = Math.tan((FOV * Math.PI) / 360);
let engineCamera;
let focus = null;
// The seed's glow billboards as the engine draws them (accents/chapters.js SEED_GLOW / SEED_HALO,
// armed) and the reading layout's dim, which the engine applies to all light (colours included):
// handed over as `focusLight` like engine.js focusLight() (?light=0: the film's defaults).
const DIM = scene === 'seed' ? 0.5 : 1;
const LIGHT = [
  { scale: 0.792, intensity: 0.85 * 1.4, core: HI, halo: ICE, breath: 0.26, rays: 0.3 },
  { scale: 2.42, intensity: 0.14 * 1.6, core: [0, 0, 0], halo: mixc(ICE, DEEP, 0.5), breath: 0.1, rays: 0 },
];
const SEED = [0, 0, 0];
if (scene === 'seed') {
  const R = 1.9;
  const rpx = tall ? Math.min(W * 0.5, H * 0.3) : Math.min(W * 0.5, H * 0.8) * 0.37;
  const dist = (R * (H / 2)) / (rpx * tanH) * (tall ? 1.45 : 1);
  const pitch = 0.2;
  engineCamera = { position: [0, dist * Math.sin(pitch), dist * Math.cos(pitch)], target: [0, 0, 0], fov: FOV };
  // Where the seed sits on the reader's screen (the engine composes it with an off-axis view; the
  // handover is sheared so a centred camera sees it there): default the reading layout's centre.
  const at = (params.get('seedAt') || (tall ? '0.5,0.46' : '0.5,0.5')).split(',').map(Number);
  const f = [0, -Math.sin(pitch), -Math.cos(pitch)];
  const right = [1, 0, 0];
  const up = [0, Math.cos(pitch), -Math.sin(pitch)];
  const ox = (at[0] - 0.5) * 2 * tanH * (W / H) * dist, oy = (0.5 - at[1]) * 2 * tanH * dist;
  for (let k = 0; k < 3; k++) SEED[k] = engineCamera.position[k] + f[k] * dist + right[k] * ox + up[k] * oy;
  if (params.get('focus') !== '0') focus = SEED.slice();
  const offCentre = params.has('seedAt');
  // Like formations/seed.js ('ending-ready', v9.1): brightness × energy folded into the colour.
  const put = (i, x, y, z, c, brightness, size) => {
    positions.set([SEED[0] + x, SEED[1] + y, SEED[2] + z], i * 3);
    fold(i, c.map(v => v * brightness), size);
  };
  const quota = f => Math.round(COUNT * f);
  let i = 0;
  // The core: very many very dim particles in a tight, seething ball, white-hot at its heart.
  for (let k = quota(0.46); k > 0; k--, i++) {
    const v = unit();
    const r = Math.abs(gauss()) * 0.09 * (0.6 + 0.4 * rand());
    const heat = Math.exp(-r * 18);
    put(i, v[0] * r, v[1] * r, v[2] * r, mixc(ICE, HI, 0.25 + 0.75 * heat), 0.008 + 0.022 * heat, 0.01);
  }
  // Corona: a wider, fainter glow of points.
  for (let k = quota(0.18); k > 0; k--, i++) {
    const v = unit();
    const r = 0.1 + Math.abs(gauss()) * 0.22;
    put(i, v[0] * r, v[1] * r, v[2] * r, mixc(ICE, DEEP, rand() * 0.5), 0.012 + 0.016 * rand(), 0.011);
  }
  // Sparks: faint arcs on orbits within 50° of facing the camera (no bright heads: one light).
  const view = [0, Math.sin(pitch), Math.cos(pitch)];
  const basisOf = n => {
    const t1 = Math.abs(n[0]) < 0.9 ? [0, -n[2], n[1]] : [-n[2], 0, n[0]];
    const l1 = Math.hypot(...t1);
    const u = t1.map(v => v / l1);
    return [u, [n[1] * u[2] - n[2] * u[1], n[2] * u[0] - n[0] * u[2], n[0] * u[1] - n[1] * u[0]]];
  };
  const [vu, vw] = basisOf(view);
  const cosMax = Math.cos(0.87);
  const orbits = [];
  for (let k = 0; k < 56; k++) {
    const z = cosMax + (1 - cosMax) * rand();
    const a = rand() * 6.283;
    const sz = Math.sqrt(1 - z * z);
    const n = [0, 1, 2].map(j => view[j] * z + (vu[j] * Math.cos(a) + vw[j] * Math.sin(a)) * sz);
    orbits.push([n, 0.3 + Math.pow(rand(), 1.4), rand() < 0.75 ? 1 : -1, rand() * 6.283, 0.5 + rand() * 1.4]);
  }
  const tone = mixc(WHITE, ICE, 0.35);
  for (let k = quota(0.1); k > 0; k--, i++) {
    const [n, r, dir, a0, len] = orbits[k % 56];
    const [u, w] = basisOf(n);
    const fr = rand();
    const a = a0 - dir * fr * len;
    const ca = Math.cos(a) * r, sa = Math.sin(a) * r;
    const lead = Math.pow(1 - fr, 1.4);
    put(i, u[0] * ca + w[0] * sa, u[1] * ca + w[1] * sa, u[2] * ca + w[2] * sa, mixc(tone, DEEP, 0.35 * (r - 0.3)), (0.012 + 0.05 * lead) * (1.2 - r * 0.4), 0.008 + 0.003 * lead);
  }
  // The last matter falling in along a few slow spirals (one long stream when off-centre, so
  // the light-weighted centroid misses the seed and ?focus=0 shows the difference).
  for (let k = quota(0.08); k > 0; k--, i++) {
    const s = k % 5;
    const t = rand() * (offCentre && s === 0 ? 2.2 : 1);
    const r = 0.35 + t * 2.4;
    const a = s * 1.2566 + Math.log(r / 0.35) * 2.2 + gauss() * 0.02;
    put(i, Math.cos(a) * r, Math.sin(a * 0.5 + s) * 0.18 * t, Math.sin(a) * r, mixc(DEEP, ICE, 0.5 * Math.max(0, 1 - t)), (0.03 + 0.04 * rand()) * (1 - 0.3 * Math.min(t, 2)) * (offCentre && s === 0 ? 2.2 : 1), 0.009);
  }
  // Faint dust filling the rest of the field.
  for (; i < COUNT; i++) {
    const v = unit();
    const r = 2.5 + Math.pow(rand(), 0.5) * 7;
    put(i, v[0] * r, v[1] * r * 0.7, v[2] * r, mixc(DEEPEST, DEEP, rand()), 0.01 + 0.012 * rand(), 0.012);
  }
} else {
  // The cover's "possibility ring": an inclined luminous ribbon around a bright singularity.
  engineCamera = { position: [0.4, 1.6, 9.6], target: [0, 0, 0], fov: 38 };
  const tilt = 0.42, roll = -0.18;
  for (let i = 0; i < COUNT; i++) {
    const k = rand();
    let x, y, z, c, e, s;
    if (k < 0.04) {
      const d = [gauss(), gauss(), gauss()];
      const r = Math.abs(gauss()) * 0.12;
      [x, y, z] = d.map(v => v * r);
      c = mixc(HI, WHITE, rand() * 0.5); e = 0.3; s = 0.06 + 0.06 * rand();
    } else {
      const a = rand() * Math.PI * 2;
      const R = 3.0 + gauss() * (k < 0.7 ? 0.08 : 0.32);
      const h = gauss() * (k < 0.7 ? 0.035 : 0.12);
      x = Math.cos(a) * R; y = h; z = Math.sin(a) * R;
      const bright = Math.max(0, Math.cos(a - 0.6)) ** 6;
      c = mixc(mixc(DEEP, ICE, rand()), HI, bright * 0.6); e = 0.35 + rand() * 0.5; s = 0.012 + 0.02 * rand();
    }
    // tilt about X then roll about Z
    const y1 = y * Math.cos(tilt) - z * Math.sin(tilt), z1 = y * Math.sin(tilt) + z * Math.cos(tilt);
    const x2 = x * Math.cos(roll) - y1 * Math.sin(roll), y2 = x * Math.sin(roll) + y1 * Math.cos(roll);
    positions.set([x2, y2, z1], i * 3);
    fold(i, c.map(v => v * e), s);
  }
}
if (DIM !== 1) for (let i = 0; i < COUNT * 3; i++) colors[i] *= DIM;
for (let i = COUNT; i < COUNT + STARS; i++) {
  const d = unit();
  const r = 40 + rand() * 30;
  positions.set(d.map(v => v * r), i * 3);
  const b = 0.05 + Math.pow(rand(), 6) * 1.2;
  fold(i, mixc(WHITE, ICE, rand()).map(v => v * b * DIM), 0.04);
}

// ---- engine-like preview (for ?pre=1) ---------------------------------------
// The handover drawn the way the engine draws it: each particle a Gaussian point sprite of its own
// diameter whose centre pixel is colour / energy (min 1.45 px, light conserved below), the seed's glow
// billboards (`LIGHT`), the engine's post (UnrealBloom 0.55 / 0.08 / 0.48 with its soft knee, the
// exponential-shoulder tone curve at exposure 1.12, #04070b screen-blended with the seed's lift).
// tools/lab/ending-lab.engine.html (the real engine) remains the exact reference.
function enginePreview() {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  g.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
  g.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  g.setAttribute('aEnergy', new THREE.BufferAttribute(energies, 1));
  const pxPerUnit = (H * pixelRatio) / 2 / tanH;
  const points = new THREE.Points(g, new THREE.ShaderMaterial({
    uniforms: { uPx: { value: pxPerUnit }, uMinPx: { value: Math.max(1.5, 1.45 * pixelRatio) }, uMaxPx: { value: 46 * pixelRatio } },
    vertexShader: `attribute vec3 aColor; attribute float aSize, aEnergy; uniform float uPx, uMinPx, uMaxPx; varying vec3 vC;
      void main() { vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv;
        float px = aSize * uPx / max(-mv.z, 0.05); vec3 light = aColor / aEnergy;
        if (px < uMinPx) { light *= (px * px) / (uMinPx * uMinPx); px = uMinPx; }
        gl_PointSize = min(px, uMaxPx); vC = light; }`,
    fragmentShader: `varying vec3 vC; void main() { vec2 q = gl_PointCoord * 2.0 - 1.0; float r2 = dot(q, q); if (r2 > 1.0) discard; gl_FragColor = vec4(vC * exp(-r2 * 5.2) * (1.0 - r2), 1.0); }`,
    transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending,
  }));
  points.frustumCulled = false;
  const glow = (scale, core, halo, intensity, rays) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({
      uniforms: { uScale: { value: scale }, uCore: { value: new THREE.Vector3(...core) }, uHalo: { value: new THREE.Vector3(...halo) }, uI: { value: intensity }, uRays: { value: rays } },
      vertexShader: `uniform float uScale; varying vec2 vUv; void main() { vUv = position.xy; vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0); mv.xy += position.xy * uScale; gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `uniform vec3 uCore, uHalo; uniform float uI, uRays; varying vec2 vUv;
        void main() { float r = length(vUv); if (r > 1.0) discard; float core = exp(-r * r * 160.0), inner = exp(-r * r * 22.0), halo = exp(-r * 5.0) * (1.0 - r);
          float rays = uRays * pow(abs(cos(atan(vUv.y, vUv.x) * 2.0 + 0.4)), 80.0) * exp(-r * 3.5) * (1.0 - r);
          gl_FragColor = vec4((uCore * (core * 4.0 + inner * 0.55) + uHalo * (halo * 0.55 + rays * 0.5)) * uI, 1.0); }`,
      transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending,
    }));
    m.position.set(...SEED);
    m.frustumCulled = false;
    return m;
  };
  const s = new THREE.Scene();
  s.add(points);
  if (scene === 'seed') for (const L of LIGHT) s.add(glow(L.scale, L.core, L.halo, L.intensity * DIM, L.rays));
  const c = new THREE.PerspectiveCamera(engineCamera.fov, W / H, 0.1, 500);
  c.position.set(...engineCamera.position);
  c.lookAt(...engineCamera.target);
  const p = new THREE.Vector3(...SEED).project(c);
  const composer = new EffectComposer(renderer);
  composer.setPixelRatio(pixelRatio);
  composer.setSize(W, H);
  const render = new RenderPass(s, c);
  render.clearColor = new THREE.Color(0, 0, 0);
  render.clearAlpha = 1;
  const bloom = new UnrealBloomPass(new THREE.Vector2(W * pixelRatio, H * pixelRatio), 0.55, 0.08, 0.48);
  bloom.highPassUniforms.smoothWidth.value = 0.32;
  const finish = new ShaderPass({
    uniforms: { tDiffuse: { value: null }, uBg: { value: new THREE.Vector3(4 / 255, 7 / 255, 11 / 255) }, uLift: { value: new THREE.Vector3(0.663 * 0.018 + 0.004, 0.906 * 0.018 + 0.012, 0.949 * 0.018 + 0.022) }, uC: { value: new THREE.Vector2(p.x * 0.5 + 0.5, p.y * 0.5 + 0.5) }, uAspect: { value: W / H }, uR: { value: tall ? 0.42 : 0.55 } },
    vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `uniform sampler2D tDiffuse; uniform vec3 uBg, uLift; uniform vec2 uC; uniform float uAspect, uR; varying vec2 vUv;
      vec3 filmic(vec3 c) { c *= 1.12; vec3 m = 1.0 - exp(-c); float peak = max(c.r, max(c.g, c.b)); float top = max(m.r, max(m.g, m.b)); return mix(m, vec3(top), smoothstep(1.0, 5.0, peak) * 0.55); }
      vec3 srgb(vec3 c) { return mix(c * 12.92, 1.055 * pow(max(c, vec3(0.0)), vec3(1.0 / 2.4)) - 0.055, step(vec3(0.0031308), c)); }
      void main() { vec2 d = (vUv - 0.5) * vec2(uAspect, 1.0); float vig = 1.0 - 0.42 * smoothstep(0.32, 1.15, length(d) * 1.2);
        vec3 col = srgb(filmic(max(texture2D(tDiffuse, vUv).rgb, 0.0) * vig)); vec2 g = (vUv - uC) * vec2(uAspect, 1.0) / uR;
        vec3 bg = (uBg + uLift * exp(-dot(g, g) * 1.6)) * (0.78 + 0.22 * vig); gl_FragColor = vec4(1.0 - (1.0 - bg) * (1.0 - col), 1.0); }`,
  });
  composer.addPass(render);
  composer.addPass(bloom);
  composer.addPass(finish);
  return {
    render() { composer.render(); },
    dispose() {
      renderer.setRenderTarget(null);
      renderer.setClearColor(0x04070b, 1);
      composer.dispose(); bloom.dispose(); finish.material.dispose();
      g.dispose(); points.material.dispose();
      s.traverse(o => { if (o.isMesh) { o.geometry.dispose(); o.material.dispose(); } });
    },
  };
}

// ---- film -----------------------------------------------------------------------
const film = createEndingFilm({ renderer, quality: { tier, particles: COUNT, pixelRatio, bloom: params.get('bloom') !== '0' } });
window.__film = film;
const lab = { frames: 0, ready: false, renderer, info: null, errors: [], createMs: film.info().build.createMs, focus, seed: SEED };
window.__lab = lab;
const origin = (params.get('origin') || '0.5,0.78').split(',').map(Number);

function beginFilm() {
  const exact = params.get('sizes') !== '0';
  const focusLight = scene === 'seed' && params.get('light') !== '0' ? { glows: LIGHT, dim: DIM } : undefined;
  film.begin({ positions, colors, sizes: exact ? sizes : undefined, energies: exact ? energies : undefined, count: COUNT + STARS, camera: engineCamera, focus: focus || undefined, focusLight, origin, width: innerWidth, height: innerHeight, pixelRatio });
  film.setReducedMotion(params.get('reduced') === '1');
  if (params.has('t')) {
    film.seek(num('t', 0));
    if (params.get('play') !== '1') film.pause(true);
  }
  if (params.get('paused') === '1') film.pause(true);
  lab.info = film.info();
  // Shader compilation runs in an idle callback after the build: refresh the report a little later.
  setTimeout(() => { lab.info = film.info(); }, 1500);
}

let preview = params.get('pre') === '1' || params.get('pre') === 'hold' ? enginePreview() : null;
lab.holdPreview = params.get('pre') === 'hold';
lab.release = () => { lab.holdPreview = false; };
const preUntil = performance.now() + 1000;
// Like the engine (which builds the film in idle time while the reader is still in ch.8), begin once
// the idle build is done; ?build=sync begins at once.
let filmReady = params.get('build') === 'sync';
// ?delay=ms: begin that long after the build (the shaders' parallel compile has finished by then).
if (!filmReady) film.ready.then(() => setTimeout(() => { filmReady = true; }, num('delay', 0)));

const hud = document.getElementById('lab-hud');
if (params.get('hud') === '1') hud.hidden = false;

let last = performance.now();
function frame(now) {
  const dt = (now - last) / 1000;
  last = now;
  if (!lab.begun && !preview && filmReady) { lab.begun = true; beginFilm(); }
  if (preview) {
    preview.render();
    lab.previewFrames = (lab.previewFrames || 0) + 1;
    if (now > preUntil && filmReady && !lab.holdPreview) { preview.dispose(); preview = null; lab.begun = true; beginFilm(); }
  } else if (lab.begun) {
    film.update(dt);
    film.render();
    lab.frames++;
    if (lab.frames >= 2) lab.ready = true;
    if (!hud.hidden) {
      const s = film.state();
      hud.textContent = `${s.time.toFixed(2)} / ${s.duration}s · ${s.phases[s.phase].key}${s.paused ? ' · paused' : ''}${s.finished ? ' · finished' : ''} · ${(1 / Math.max(dt, 1e-3)).toFixed(0)} fps`;
    }
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

addEventListener('resize', () => {
  renderer.setSize(innerWidth, innerHeight, false);
  film.resize(innerWidth, innerHeight, pixelRatio);
});
addEventListener('pointermove', e => film.setPointer((e.clientX / innerWidth) * 2 - 1, -((e.clientY / innerHeight) * 2 - 1)));
addEventListener('keydown', e => {
  const s = film.state();
  if (e.key === ' ') film.pause(!s.paused);
  if (e.key === 'ArrowRight') film.seek(s.time + 1);
  if (e.key === 'ArrowLeft') film.seek(s.time - 1);
  if (e.key === 'r') film.replay();
  if (e.key === 'e') film.skipToEnd();
  if (e.key === 'x') { film.end(); }
});
