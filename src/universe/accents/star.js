// Ch.5 star: a blue-white photosphere (white-hot granules, ice-cyan lanes, a limb that darkens to deep
// blue) with animated granulation, a streamered corona billboard and a wide ice halo. The sphere writes depth (when fully present) so collectors
// passing behind the star are hidden.

import * as THREE from 'three';
import { C } from '../config.js';
import { STAR_RADIUS } from '../formations/energy.js';
import { keep } from '../formations/common.js';
import { additive, billboard, createGlow } from './materials.js';

const noise = /* glsl */ `
float hash3(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
float vnoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash3(i), hash3(i + vec3(1, 0, 0)), f.x), mix(hash3(i + vec3(0, 1, 0)), hash3(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(hash3(i + vec3(0, 0, 1)), hash3(i + vec3(1, 0, 1)), f.x), mix(hash3(i + vec3(0, 1, 1)), hash3(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
// Three and two octaves (normalised like the 4-octave sum it replaces): half the noise of the
// original domain-warped fbm, so the program compiles and runs in a fraction of the time.
float fbm3(vec3 p) {
  float v = 0.5 * vnoise(p);
  p = p * 2.07 + 3.1;
  v += 0.25 * vnoise(p);
  p = p * 2.07 + 3.1;
  v += 0.125 * vnoise(p);
  return v / 0.875 * 0.9375;
}
float fbm2(vec3 p) {
  return (0.5 * vnoise(p) + 0.25 * vnoise(p * 2.07 + 3.1)) / 0.75 * 0.9375;
}
`;

const sphereVertex = /* glsl */ `
varying vec3 vObj;
varying vec3 vN;
varying vec3 vV;
void main() {
  vObj = normalize(position);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vN = normalize(normalMatrix * normal);
  vV = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}
`;

const sphereFragment = /* glsl */ `
uniform float uTime;
uniform float uOpacity;
uniform vec3 uHot;
uniform vec3 uMid;
uniform vec3 uCool;
varying vec3 vObj;
varying vec3 vN;
varying vec3 vV;
${noise}
void main() {
  float mu = clamp(dot(vN, vV), 0.0, 1.0);
  // Granulation: bright cells with dark lanes, slowly boiling; large-scale supergranulation.
  vec3 p = vObj * 9.0 + vec3(0.0, uTime * 0.035, 0.0);
  float cells = fbm3(p + (vnoise(p * 0.7 + uTime * 0.02) * 0.9375) * 1.6);
  float lanes = smoothstep(0.32, 0.62, cells);
  float large = fbm2(vObj * 2.4 - uTime * 0.012);
  float limb = 0.36 + 0.64 * pow(mu, 0.55);
  vec3 col = mix(uCool, uMid, lanes);
  col = mix(col, uHot, smoothstep(0.55, 0.85, cells + large * 0.25) * 0.75);
  col *= limb * (0.85 + 0.3 * large);
  // Thin bright rim (chromosphere) at the limb.
  col += uCool * pow(1.0 - mu, 6.0) * 0.6;
  gl_FragColor = vec4(col * uOpacity, 1.0);
}
`;

const coronaFragment = /* glsl */ `
uniform float uTime;
uniform float uOpacity;
uniform float uExtent;
uniform vec3 uInner;
uniform vec3 uOuter;
varying vec2 vUv;
${noise}
void main() {
  float r = length(vUv) * uExtent;   // in star radii
  if (r < 0.97 || r > uExtent) discard;
  float a = atan(vUv.y, vUv.x);
  float streamers = fbm3(vec3(cos(a) * 2.6, sin(a) * 2.6, r * 0.6 - uTime * 0.05));
  streamers = 0.45 + 0.9 * pow(streamers, 1.6);
  float h = r - 1.0;
  float corona = exp(-h * 3.4) * streamers + exp(-h * 16.0) * 0.8;
  float edge = 1.0 - smoothstep(uExtent * 0.7, uExtent, r);
  vec3 col = mix(uOuter, uInner, exp(-h * 2.4)) * corona * edge;
  gl_FragColor = vec4(col * uOpacity * 0.55, 1.0);
}
`;

const pingPong = (t, P) => {
  const m = t % (2 * P);
  return m < P ? m : 2 * P - m;
};

export class StarAccent {
  constructor() {
    this.group = new THREE.Group();
    // Blue-white: the granules stay just below white so the cells and their ice-cyan lanes read.
    const hot = new THREE.Vector3(...C.iceHi).multiplyScalar(1.3);
    const mid = new THREE.Vector3(...keep(C.white, C.ice, 0.55)).multiplyScalar(0.9);
    const cool = new THREE.Vector3(...keep(C.ice, C.deep, 0.55)).multiplyScalar(0.55);
    this.sphereUniforms = { uTime: { value: 0 }, uOpacity: { value: 0 }, uHot: { value: hot }, uMid: { value: mid }, uCool: { value: cool } };
    this.sphere = new THREE.Mesh(
      new THREE.SphereGeometry(STAR_RADIUS, 96, 64),
      new THREE.ShaderMaterial({ name: 'Star', uniforms: this.sphereUniforms, vertexShader: sphereVertex, fragmentShader: sphereFragment, ...additive, depthWrite: true }),
    );
    this.sphere.renderOrder = 4;
    const extent = 3.4;
    this.coronaUniforms = {
      uScale: { value: STAR_RADIUS * extent },
      uTime: { value: 0 },
      uOpacity: { value: 0 },
      uExtent: { value: extent },
      uInner: { value: new THREE.Vector3(...keep(C.iceHi, C.ice, 0.3)).multiplyScalar(1.3) },
      uOuter: { value: new THREE.Vector3(...keep(C.ice, C.deep, 0.5)).multiplyScalar(0.7) },
    };
    this.corona = new THREE.Mesh(billboard.quad, new THREE.ShaderMaterial({ name: 'Corona', uniforms: this.coronaUniforms, vertexShader: billboard.vertex, fragmentShader: coronaFragment, ...additive }));
    this.corona.frustumCulled = false;
    this.corona.renderOrder = 6;
    this.halo = createGlow({ core: [0, 0, 0], halo: C.ice, scale: STAR_RADIUS * 5.5, intensity: 0.16 });
    this.group.add(this.sphere, this.corona, this.halo);
  }

  update(ctx) {
    const a = ctx.presence;
    this.sphereUniforms.uOpacity.value = a;
    // Boiling noise has no period: its clock runs back and forth (seamless, the direction of
    // the drift reverses every few minutes, which nobody can see), so float32 never degrades.
    const t = pingPong(ctx.time, 600);
    this.sphereUniforms.uTime.value = t;
    this.coronaUniforms.uOpacity.value = a;
    this.coronaUniforms.uTime.value = t;
    this.halo.material.uniforms.uOpacity.value = a;
    // Only occlude what passes behind once the star is fully there (no dark hole while fading).
    const occlude = a > 0.92;
    if (this.sphere.material.depthWrite !== occlude) this.sphere.material.depthWrite = occlude;
  }
}
