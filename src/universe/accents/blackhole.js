// Ch.7 black hole: an event horizon that occludes what lies behind it, a Keplerian accretion disc
// coloured by the blackbody at its local temperature (T ∝ r^−¾: white-hot at the inner edge, orange,
// then dull orange-red outside), relativistically Doppler-shifted and beamed — the approaching side is
// hotter-looking (bluer) and brighter (δ³), the receding side redder and dimmer — and a lensed image of
// the disc's far side arching over and under the shadow, with a thin white-hot photon ring. As reading
// progresses the disc and the lensed light fade and the horizon shrinks: it evaporates.

import * as THREE from 'three';
import { HOLE } from '../formations/universe.js';
import { blackbodyGlsl } from '../math.js';
import { HOLE_UNIFORMS, holeChunk, timeChunk } from '../particles/shaders.js';
import { additive, billboard } from './materials.js';

// The main-pass horizon (it hides what lies behind from the bloom input) is drawn slightly smaller
// than the true silhouette, so its aliased edge always falls inside the overlay's opaque core.
const CORE = 0.97;

const discVertex = /* glsl */ `
varying vec2 vPolar;
varying float vBeam;
varying vec3 vView;
void main() {
  vec2 p = position.xy;
  float r = length(p);
  vPolar = vec2(r, atan(p.y, p.x));
  // Orbital velocity direction (counter-clockwise in the disc plane), in view space.
  vec3 vel = normalize(normalMatrix * vec3(-p.y, p.x, 0.0));
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vView = mv.xyz;
  vBeam = dot(vel, normalize(-mv.xyz));
  gl_Position = projectionMatrix * mv;
}
`;

const discFragment = /* glsl */ `
${timeChunk}
uniform float uTime;
uniform float uOpacity;
uniform vec2 uRange;
uniform vec4 uThermal;   // x: inner temperature (K) at radius y, z: orbital speed (v/c) there, w: gain
varying vec2 vPolar;
varying float vBeam;
varying vec3 vView;
#ifdef OVERLAY
${holeChunk}
#endif
${blackbodyGlsl()}
void main() {
  float k = 1.0;
  #ifdef OVERLAY
  // After bloom: only the part of the disc in front of the horizon, inside the (anti-aliased)
  // shadow disc. Outside it the main pass already drew the disc; the two meet without a seam.
  k = holeCover(gl_FragCoord.xy) * holeFront(vView);
  if (k <= 0.0) discard;
  k *= 1.4; // stands in for the bloom this re-draw does not get
  #endif
  float r = vPolar.x;
  float t = clamp((r - uRange.x) / (uRange.y - uRange.x), 0.0, 1.0);
  // Keplerian shear: inner rings turn faster.
  float a = vPolar.y + uTime * qRate(0.62 / pow(r, 1.5));
  float rings = 0.55 + 0.45 * sin(r * 46.0 + sin(a * 3.0) * 0.6);
  float streak = 0.6 + 0.4 * sin(a * 7.0 + r * 9.0) * sin(a * 3.0 - r * 21.0);
  float profile = smoothstep(0.0, 0.06, t) * pow(1.0 - t, 1.6);
  // Thin-disc temperature, then the relativistic Doppler factor δ = 1 / (γ (1 − β cos θ)) of the
  // Keplerian orbit (β ∝ r^−½): the observed temperature is δ T and the light is boosted by δ³.
  float x = max(r, uThermal.y * 0.9) / uThermal.y;
  float T = uThermal.x * pow(x, -0.75);
  float beta = uThermal.z * inversesqrt(x);
  float delta = sqrt(1.0 - beta * beta) / (1.0 - beta * vBeam);
  vec3 col = blackbody(T * delta) * (0.35 + 0.65 * T / uThermal.x);
  float beam = delta * delta * delta;
  gl_FragColor = vec4(col * (profile * rings * streak * beam * uThermal.w * uOpacity * k), 1.0);
}
`;

// Post-bloom shadow: a screen-space quad around the horizon that darkens the bloomed image by the
// shadow's anti-aliased coverage (dst × (1 − coverage)); what lies in front is then added back.
const shadowVertex = /* glsl */ `
uniform vec4 uHole;
uniform vec2 uViewport;
void main() {
  vec2 c = uHole.xy / uViewport * 2.0 - 1.0;
  vec2 ext = (uHole.z + uHole.w + 2.0) / uViewport * 2.0;
  gl_Position = vec4(c + position.xy * ext, 0.0, 1.0);
}
`;

const shadowFragment = /* glsl */ `
${holeChunk}
void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, holeCover(gl_FragCoord.xy));
}
`;

const lensFragment = /* glsl */ `
${timeChunk}
uniform float uOpacity;
uniform float uBand;
uniform float uExtent;
uniform float uTime;
uniform vec4 uThermal;   // x: the disc's inner temperature (K), y: arc temperature (× x), z: Doppler β, w: gain
varying vec2 vUv;
${blackbodyGlsl()}
void main() {
  vec2 q = vUv * uExtent;            // in shadow radii
  float r = length(q);
  if (r > uExtent) discard;
  float up = q.y / max(r, 1e-3);
  // The near side of the disc passes in front of the lower photon ring: it reads as covered there
  // (less so as the disc evaporates).
  float photon = exp(-pow((r - 1.06) / 0.03, 2.0)) * 1.4 * (1.0 - uBand * (1.0 - smoothstep(-0.85, -0.2, up)));
  // Lensed far side of the disc: a thick arc over the top, a thinner one beneath.
  float arcTop = exp(-pow((r - 1.42) / 0.26, 2.0)) * smoothstep(-0.35, 0.85, up);
  float arcBottom = exp(-pow((r - 1.22) / 0.12, 2.0)) * smoothstep(0.1, -0.9, up) * 0.55;
  // The approaching side (−x, as the disc turns) is Doppler-boosted: bluer and brighter.
  float side = -q.x / max(r, 1e-3);
  float delta = sqrt(1.0 - uThermal.z * uThermal.z) / (1.0 - uThermal.z * side);
  float shimmer = 0.85 + 0.15 * sin(atan(q.y, q.x) * 9.0 - uTime * qRate(0.8));
  // The photon ring is the inner disc's light, white-hot; the arcs are the lensed far side, a little
  // cooler (they show the disc a little further out).
  vec3 ring = blackbody(uThermal.x * delta) * photon * (0.75 + 0.25 * delta * delta);
  vec3 arcs = blackbody(uThermal.x * uThermal.y * delta) * 0.42 * (arcTop + arcBottom) * delta * delta * delta * shimmer;
  float glow = exp(-(r - 1.0) * 2.6) * 0.05;
  vec3 col = ring * 0.75 + arcs + blackbody(uThermal.x * uThermal.y) * 0.22 * glow;
  col *= uThermal.w;
  gl_FragColor = vec4(col * uOpacity * (1.0 - smoothstep(uExtent * 0.75, uExtent, r)), 1.0);
}
`;

export class BlackHoleAccent {
  constructor() {
    this.group = new THREE.Group();
    // Horizon: opaque black, drawn before the particles; writes depth.
    this.horizon = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 32), new THREE.MeshBasicMaterial({ color: 0x000000 }));
    this.horizon.renderOrder = 3;

    const [r0, r1] = HOLE.disc;
    const discGeo = new THREE.RingGeometry(r0 * 0.92, r1 * 1.05, 180, 8);
    this.discUniforms = {
      ...HOLE_UNIFORMS,
      uTime: { value: 0 },
      uOpacity: { value: 0 },
      uRange: { value: new THREE.Vector2(r0 * 0.92, r1 * 1.05) },
      uThermal: { value: new THREE.Vector4(HOLE.tIn, r0, 0.45, 1.25) },
    };
    this.disc = new THREE.Mesh(discGeo, new THREE.ShaderMaterial({ name: 'AccretionDisc', uniforms: this.discUniforms, vertexShader: discVertex, fragmentShader: discFragment, ...additive, side: THREE.DoubleSide }));
    this.disc.renderOrder = 6;
    // Orient the disc plane (local +Z normal) to the hole's normal.
    this.disc.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(...HOLE.normal));

    const extent = 2.4;
    this.lensUniforms = {
      uScale: { value: HOLE.radius * extent },
      uOpacity: { value: 0 },
      uBand: { value: 1 },
      uExtent: { value: extent },
      uTime: { value: 0 },
      uThermal: { value: new THREE.Vector4(HOLE.tIn, 0.72, 0.3, 1) },
    };
    this.lens = new THREE.Mesh(billboard.quad, new THREE.ShaderMaterial({ name: 'LensedRing', uniforms: this.lensUniforms, vertexShader: billboard.vertex, fragmentShader: lensFragment, ...additive }));
    this.lens.frustumCulled = false;
    this.lens.renderOrder = 7;
    this.group.add(this.horizon, this.disc, this.lens);

    // Post-bloom overlay (so no glow ever leaks into the shadow): an anti-aliased shadow disc that
    // spares the near side of the accretion disc where it crosses the hole (the bloomed main pass
    // shows through there, continuous with the band on either side), then whatever else lies in
    // front of the horizon is added back inside it: the disc here, and the particles themselves
    // (the field's overlay points, attached by the engine), e.g. the rim's scattered grains. Edges
    // come from the same coverage function, so the disc reads as one continuous body in front.
    this.overlay = new THREE.Group();
    this.horizonOverlay = new THREE.Mesh(
      billboard.quad,
      new THREE.ShaderMaterial({
        name: 'HorizonShadow',
        uniforms: HOLE_UNIFORMS,
        vertexShader: shadowVertex,
        fragmentShader: shadowFragment,
        transparent: true,
        depthTest: false,
        depthWrite: false,
        blending: THREE.CustomBlending,
        blendEquation: THREE.AddEquation,
        blendSrc: THREE.ZeroFactor,
        blendDst: THREE.OneMinusSrcAlphaFactor,
      }),
    );
    this.horizonOverlay.frustumCulled = false;
    this.discOverlay = new THREE.Mesh(discGeo, new THREE.ShaderMaterial({ name: 'AccretionDiscFront', defines: { OVERLAY: '' }, uniforms: this.discUniforms, vertexShader: discVertex, fragmentShader: discFragment, ...additive, depthTest: false, side: THREE.DoubleSide }));
    this.discOverlay.quaternion.copy(this.disc.quaternion);
    this.horizonOverlay.renderOrder = 1;
    this.discOverlay.renderOrder = 2;
    this.overlay.add(this.horizonOverlay, this.discOverlay);
    this.radius = 0;
  }

  update(ctx) {
    const a = ctx.presence;
    const fade = a * (1 - 0.86 * ctx.reading);
    const shrink = 1 - 0.42 * ctx.reading;
    const rs = HOLE.radius * shrink * Math.min(1, a * 1.15);
    this.horizon.visible = rs > 0.004;
    this.horizon.scale.setScalar(Math.max(rs * CORE, 0.001));
    this.horizonOverlay.visible = this.horizon.visible;
    this.radius = rs;
    // Matter re-drawn in front of the shadow: the disc (it expands with reading).
    this.reach = HOLE.disc[1] * 1.12 * ctx.expand;
    this.thickness = 0.2 * ctx.expand;
    // The disc's lit band in its plane (the hot inner rim at r0; the mesh starts at 0.92 r0 and
    // ramps up): where its near side crosses the hole, the shadow leaves the bloomed band alone.
    this.bandInner = HOLE.disc[0] * 0.98;
    this.bandOuter = HOLE.disc[1] * 1.05 * Math.max(1, ctx.expand);
    this.discUniforms.uOpacity.value = fade;
    this.discUniforms.uTime.value = ctx.gpuTime;
    this.lensUniforms.uOpacity.value = fade;
    this.lensUniforms.uBand.value = Math.max(0, 1 - 1.15 * ctx.reading);
    this.lensUniforms.uTime.value = ctx.gpuTime;
    this.lensUniforms.uScale.value = Math.max(rs, 0.001) * this.lensUniforms.uExtent.value;
  }
}
