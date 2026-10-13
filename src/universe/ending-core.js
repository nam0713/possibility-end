// The singularity: the reader's seed — the one light at the end of ch.8 — flaring when the
// reader presses it and brightening as the old universe falls into it, with a thin,
// Doppler-beamed accretion swirl in the collapse plane (white-hot inside, ice, then deep blue).
// At the impact the seed becomes the white point the new universe expands from.
//
// At the handover the seed's own glow is drawn exactly as the engine drew it (its glow
// billboards: the handover's `focusLight`, or the engine's defaults), centred on the collapse point,
// so the film's first frame continues the reader's one light; it flares with the press, then
// gathers into the film's core sprite (concentric: one light, never two).
import * as THREE from 'three';
import { PALETTE, SIMPLEX } from './ending-glsl.js';
import { COLLAPSE_AXIS } from './ending-layout.js';

const CORE_EXTENT = 14.0; // quad half-size in core radii (room for the halo)

const CORE_VERT = /* glsl */ `
uniform float uSize;
uniform float uMinPx;
uniform float uProjScale;
varying vec2 vP;
varying float vEnergy;
void main() {
  vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  float depth = max(-mv.z, 1e-6);
  // Keep the seed at least a few pixels wide; conserve its energy when enlarged.
  float px = uSize * uProjScale / depth;
  float size = uSize;
  vEnergy = 1.0;
  if (px < uMinPx) { size = uMinPx * depth / uProjScale; vEnergy = (px * px) / (uMinPx * uMinPx); }
  mv.xy += position.xy * size * ${CORE_EXTENT.toFixed(1)};
  vP = position.xy * ${CORE_EXTENT.toFixed(1)};
  gl_Position = projectionMatrix * mv;
}
`;

const CORE_FRAG = /* glsl */ `
uniform float uIntensity;
uniform float uTint;
uniform float uTime;
varying vec2 vP;
varying float vEnergy;
${PALETTE}
void main() {
  float r = length(vP);
  // A soft, gradient-lit core (white-hot at the centre, ice outward) rather than a clipped disc:
  // a smooth power-law profile whose peak stays near the tone curve's shoulder.
  float core = 1.0 / ((1.0 + r * r * 1.4) * (1.0 + r * r * 1.4));
  float halo = 0.12 / (1.0 + r * r * 1.2);
  float wide = 0.03 * exp(-r * 0.4);
  // uTint: the seed's own ice tint as the engine drew it (1), turning white-hot toward the impact (0).
  vec3 coreCol = mix(P_HI, P_WHITE, core);
  vec3 col = mix(coreCol, mix(coreCol, P_ICE, 0.45), uTint) * core * 2.2
           + mix(P_WHITE * 0.7, P_ICE * 0.9, uTint) * halo
           + mix(P_BLUE, P_ICE * 0.6, uTint) * wide;
  // A faint, slow shimmer: the seed is alive, never a static dot.
  col *= 1.0 + 0.05 * sin(uTime * 7.0 + r * 0.8);
  col *= smoothstep(${CORE_EXTENT.toFixed(1)}, ${(CORE_EXTENT * 0.6).toFixed(1)}, r);
  gl_FragColor = vec4(col * uIntensity * vEnergy, 1.0);
}
`;

// The engine's seed glow (accents/materials.js glowFragment, same profile): a tight core, an inner
// glow, a halo and four faint rays on a camera-facing billboard of half-size uScale. uWidth plays the
// engine's breath (the profile's width): it swells with the press and tightens as the light gathers.
// uBloom stands in for what the engine's bloom (UnrealBloom: threshold, tight mips) adds around the
// glow's bright core, which the film's own, wider bloom does not concentrate there.
const SEED_VERT = /* glsl */ `
uniform float uScale;
varying vec2 vUv;
void main() {
  vUv = position.xy;
  vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  mv.xy += position.xy * uScale;
  gl_Position = projectionMatrix * mv;
}
`;

const SEED_FRAG = /* glsl */ `
uniform vec3 uCore;
uniform vec3 uHalo;
uniform float uIntensity;
uniform float uRays;
uniform float uWidth;
uniform float uBloom;
varying vec2 vUv;
void main() {
  float r = length(vUv);
  if (r > 1.0) discard;
  float core = exp(-r * r * 160.0 / uWidth);
  float inner = exp(-r * r * 22.0 / uWidth);
  float halo = exp(-r * 5.0) * (1.0 - r);
  float ang = atan(vUv.y, vUv.x);
  float rays = uRays * pow(abs(cos(ang * 2.0 + 0.4)), 80.0) * exp(-r * 3.5) * (1.0 - r);
  vec3 c = uCore * (core * 4.0 + inner * 0.55) + uHalo * (halo * 0.55 + rays * 0.5);
  c += uCore * uBloom * (exp(-r * r * 60.0 / uWidth) * 1.0 + exp(-r * r * 12.0 / uWidth) * 0.2) * (1.0 - r);
  gl_FragColor = vec4(c * uIntensity, 1.0);
}
`;

/**
 * The seed's glow when the handover carries none: the engine's two seed billboards
 * (accents/chapters.js SEED_GLOW and SEED_HALO), armed (the reader's pointer or focus is on it when
 * they press), at the brightness the reading layout shows them. World units, linear colours.
 */
export const DEFAULT_SEED_LIGHT = Object.freeze([
  Object.freeze({ scale: 0.79, intensity: 0.6, core: [0.791, 0.965, 1.0], halo: [0.397, 0.799, 0.888], rays: 0.3 }),
  Object.freeze({ scale: 2.42, intensity: 0.112, core: [0, 0, 0], halo: [0.2375, 0.537, 0.661], rays: 0 }),
]);
const SEED_GLOWS = 2;

const DISK_VERT = /* glsl */ `
varying vec2 vP;
void main() {
  vP = position.xy;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const DISK_FRAG = /* glsl */ `
uniform float uOpacity;
uniform float uSpin;      // integrated Keplerian angle at r = 1 (rad)
uniform float uSpinRate;  // its rate (rad/s), for the rotational motion blur
uniform vec2 uBeam;       // camera direction projected into the disk plane
varying vec2 vP;
${SIMPLEX}
${PALETTE}
#define SHEAR_PERIOD 1.3
// Lanes: radially fine, angularly long (the noise runs round a small circle in its (y, z)
// plane while log r runs fast along x), so the disk is streaks from the first frame.
float lanes(float lr, float th, float seed, float aaFine, float angKeep) {
  vec2 cs = vec2(cos(th), sin(th));
  vec3 o = vec3(seed * 7.31, seed * 3.17, seed * 5.53);
  float a = snoise(vec3(lr * 9.0, cs * 1.25 * angKeep) + o);
  float b = snoise(vec3(lr * 21.0 + 4.0, cs * 2.6 * angKeep) + o * 1.7);
  return a * 0.7 + b * 0.45 * aaFine;
}
void main() {
  float r = length(vP);
  if (r > 1.0) discard;
  float th = atan(vP.y, vP.x);
  float lr = log(max(r, 0.02));
  // Keplerian angular speed relative to r = 1, softened at the inner edge.
  float omega = pow(max(r, 0.14), -1.5);
  // Rotational motion blur: where the lanes sweep by faster than ~half a feature per frame
  // their angular variation averages out into smooth rings (no strobing, no moire).
  float sweep = omega * uSpinRate * 0.35 / 60.0;
  float angKeep = 1.0 / (1.0 + sweep * sweep * 4.0);
  // Anti-aliasing: the fine radial octave fades where it would fall below two pixels.
  float aaFine = 1.0 - smoothstep(0.18, 0.4, fwidth(lr * 21.0));
  // Flow-map shear: two layers offset by half a period, each sheared by a bounded angle and
  // crossfaded, so the winding (and its radial gradient) never runs away while the lanes keep
  // streaming round; each cycle draws a fresh pattern.
  float cyc = uSpin * 0.35 / SHEAR_PERIOD;
  float n = 0.0;
  for (int i = 0; i < 2; i++) {
    float c = cyc + 0.5 * float(i);
    float f = fract(c);
    float w = 1.0 - abs(2.0 * f - 1.0);
    // The winding is capped (the inner disk is averaged into rings by the blur above anyway).
    float sheared = th - min(omega, 3.2) * f * SHEAR_PERIOD - floor(c) * 2.3999;
    n += w * lanes(lr, sheared, floor(c) + float(i) * 13.0, aaFine, angKeep);
  }
  // Trailing lanes with dark gaps between them.
  float streaks = smoothstep(-0.25, 0.75, n);
  float ring = smoothstep(0.08, 0.24, r) * (1.0 - smoothstep(0.55, 1.0, r));
  // Relativistic beaming: the side moving toward the camera is brighter.
  vec2 tangent = vec2(-sin(th), cos(th));
  float beam = 1.0 + 0.7 * dot(tangent, uBeam);
  // White-hot inside, ice through the middle, a saturated deep blue at the rim (no warm skirt).
  vec3 inner = P_WHITE;
  vec3 mid = P_ICE * 0.93;
  vec3 outer = P_DEEP;
  vec3 col = mix(inner * 1.8, mid, smoothstep(0.15, 0.45, r));
  col = mix(col, outer, smoothstep(0.45, 0.9, r));
  float e = ring * (0.25 + 0.75 * streaks) * streaks * beam * (1.0 + 2.5 * exp(-r * 7.0));
  gl_FragColor = vec4(col * e * uOpacity, 1.0);
}
`;

export function createCore() {
  const group = new THREE.Group();
  const quad = new THREE.PlaneGeometry(2, 2);

  const coreUniforms = {
    uSize: { value: 0.016 },
    uMinPx: { value: 3 },
    uProjScale: { value: 1000 },
    uIntensity: { value: 1 },
    uTint: { value: 1 },
    uTime: { value: 0 },
  };
  const coreMaterial = new THREE.ShaderMaterial({
    vertexShader: CORE_VERT, fragmentShader: CORE_FRAG, uniforms: coreUniforms,
    transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
  });
  const core = new THREE.Mesh(quad, coreMaterial);
  core.frustumCulled = false;
  core.renderOrder = 5;

  const diskUniforms = { uOpacity: { value: 0 }, uSpin: { value: 0 }, uSpinRate: { value: 0 }, uBeam: { value: new THREE.Vector2() } };
  const diskMaterial = new THREE.ShaderMaterial({
    vertexShader: DISK_VERT, fragmentShader: DISK_FRAG, uniforms: diskUniforms,
    transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
    side: THREE.DoubleSide,
  });
  const disk = new THREE.Mesh(quad, diskMaterial);
  disk.frustumCulled = false;
  disk.renderOrder = 4;
  // Orient the disk: local +Z = collapse axis.
  const axis = new THREE.Vector3(...COLLAPSE_AXIS);
  disk.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), axis);
  const diskX = new THREE.Vector3(1, 0, 0).applyQuaternion(disk.quaternion);
  const diskY = new THREE.Vector3(0, 1, 0).applyQuaternion(disk.quaternion);

  // The seed's own glow billboards (see SEED_FRAG), set per run by setLight().
  const seedGlows = [];
  for (let k = 0; k < SEED_GLOWS; k++) {
    const material = new THREE.ShaderMaterial({
      vertexShader: SEED_VERT, fragmentShader: SEED_FRAG,
      uniforms: { uScale: { value: 0.1 }, uCore: { value: new THREE.Vector3() }, uHalo: { value: new THREE.Vector3() }, uIntensity: { value: 0 }, uRays: { value: 0 }, uWidth: { value: 1 }, uBloom: { value: 0 } },
      transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
    });
    const mesh = new THREE.Mesh(quad, material);
    mesh.frustumCulled = false;
    mesh.renderOrder = 3;
    mesh.visible = false;
    seedGlows.push({ mesh, material, scale: 0, intensity: 0 });
  }

  group.add(disk, ...seedGlows.map(g => g.mesh), core);
  const camDir = new THREE.Vector3();

  /**
   * The seed's glow for this run: up to two billboards {scale (world half-size), intensity, core,
   * halo (linear rgb), rays} as the engine drew them (the handover's `focusLight`, ending-film.js
   * decides; an empty list draws none). worldToFilm: the handover's world → film scale.
   */
  function setLight(light, worldToFilm) {
    const list = Array.isArray(light) ? light : DEFAULT_SEED_LIGHT;
    for (let k = 0; k < SEED_GLOWS; k++) {
      const g = seedGlows[k];
      const L = list[k];
      const ok = L && Number(L.scale) > 0 && Number(L.intensity) > 0;
      g.scale = ok ? Number(L.scale) * worldToFilm : 0;
      g.intensity = ok ? Number(L.intensity) : 0;
      const u = g.material.uniforms;
      u.uCore.value.fromArray(ok && L.core ? L.core : [0, 0, 0]);
      u.uHalo.value.fromArray(ok && L.halo ? L.halo : [0, 0, 0]);
      u.uRays.value = ok ? Number(L.rays) || 0 : 0;
    }
  }
  setLight(null, 0.09);

  function update(frame, view, cameraPosition) {
    const visible = frame.core > 0.001;
    core.visible = visible;
    coreUniforms.uIntensity.value = frame.core;
    coreUniforms.uSize.value = frame.coreSize;
    coreUniforms.uTint.value = frame.coreTint;
    coreUniforms.uTime.value = frame.t;
    for (const g of seedGlows) {
      g.mesh.visible = frame.seedGlow > 0.001 && g.intensity > 0;
      if (!g.mesh.visible) continue;
      const u = g.material.uniforms;
      u.uScale.value = g.scale * frame.seedScale;
      u.uIntensity.value = g.intensity * frame.seedGlow;
      u.uWidth.value = frame.seedWidth;
      u.uBloom.value = frame.seedBloom;
    }
    coreUniforms.uProjScale.value = view.projScale;
    coreUniforms.uMinPx.value = 2.5 * view.pixelRatio;

    disk.visible = frame.disk > 0.001;
    if (disk.visible) {
      disk.scale.setScalar(frame.diskRadius * 1.25);
      // Luminance rises as the disk plunges toward the point.
      diskUniforms.uOpacity.value = frame.disk * (0.9 + 1.6 * Math.max(0, Math.min(1, (frame.t - 2.6) / 0.9)));
      diskUniforms.uSpin.value = frame.diskSpin;
      diskUniforms.uSpinRate.value = frame.diskSpinRate;
      camDir.set(cameraPosition[0], cameraPosition[1], cameraPosition[2]).normalize();
      diskUniforms.uBeam.value.set(camDir.dot(diskX), camDir.dot(diskY));
    }
  }

  function dispose() {
    quad.dispose();
    coreMaterial.dispose();
    diskMaterial.dispose();
    for (const g of seedGlows) g.material.dispose();
  }

  return { group, update, setLight, dispose };
}
