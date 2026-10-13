// Ch.5 star: a sun-like photosphere (STAR_TEMP, 5000 K) coloured by the blackbody per fragment — hot granules
// (rising, ~+250 K) and cooler intergranular lanes (~−330 K), boiling slowly; limb darkening in both
// intensity (quadratic law) and colour (toward the limb we see higher, cooler layers: yellow-white at
// the centre, orange toward the edge); a thin pink H-alpha chromosphere at the limb; a pearly corona
// (scattered photospheric light) with streamers and a wide, faint halo. The sphere writes depth (when
// fully present) so collectors passing behind the star are hidden.

import * as THREE from 'three';
import { C } from '../config.js';
import { blackbodyGlsl, kelvin } from '../math.js';
import { STAR_RADIUS } from '../formations/energy.js';
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
uniform float uTemp;
uniform float uGain;
uniform vec3 uChromo;
varying vec3 vObj;
varying vec3 vN;
varying vec3 vV;
${noise}
${blackbodyGlsl()}
void main() {
  float mu = clamp(dot(vN, vV), 0.0, 1.0);
  // Granulation: hot rising cells, cooler sinking lanes, slowly boiling; large-scale supergranulation.
  vec3 p = vObj * 17.0 + vec3(0.0, uTime * 0.05, 0.0);
  float cells = fbm3(p + (vnoise(p * 0.7 + uTime * 0.03) * 0.9375) * 1.6);
  float gran = smoothstep(0.3, 0.66, cells);
  float large = fbm2(vObj * 3.1 - uTime * 0.012);
  float hot = smoothstep(0.58, 0.85, cells + large * 0.2);
  float T = uTemp + mix(-260.0, 40.0, gran) + 150.0 * hot + 60.0 * (large - 0.5);
  // Limb: the intensity falls by the quadratic law, and the light comes from higher, cooler layers.
  float m1 = 1.0 - mu;
  float I = 1.0 - 0.47 * m1 - 0.23 * m1 * m1;
  float Tlimb = T * mix(0.7, 1.0, pow(mu, 0.35));
  float contrast = pow(T / uTemp, 4.0);
  vec3 col = blackbody(Tlimb) * (I * contrast * uGain);
  // The chromosphere: a thin H-alpha rim at the very limb.
  col += uChromo * pow(m1, 7.0);
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
  float corona = exp(-h * 3.4) * streamers + exp(-h * 16.0) * 0.3;
  float edge = 1.0 - smoothstep(uExtent * 0.7, uExtent, r);
  vec3 col = mix(uOuter, uInner, exp(-h * 2.4)) * corona * edge;
  gl_FragColor = vec4(col * uOpacity * 0.55, 1.0);
}
`;

/**
 * The photosphere's temperature: sun-like. 5800 K is the Sun's effective temperature, but rendered
 * bright through the filmic shoulder it reads plain white; the yellow-white Sun of every photograph
 * (seen through air, exposed to keep the disc) sits nearer 5000 K, which is what the eye reads as 'a sun'.
 */
const STAR_TEMP = 5000;

const pingPong = (t, P) => {
  const m = t % (2 * P);
  return m < P ? m : 2 * P - m;
};

export class StarAccent {
  constructor() {
    this.group = new THREE.Group();
    // A sun-like photosphere: colour from the blackbody at each fragment's temperature.
    this.sphereUniforms = {
      uTime: { value: 0 },
      uOpacity: { value: 0 },
      uTemp: { value: STAR_TEMP },
      uGain: { value: 0.95 },
      uChromo: { value: new THREE.Vector3(...C.halpha).multiplyScalar(0.3) },
    };
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
      // The corona is photospheric light scattered by free electrons: pearly, barely warm.
      uInner: { value: new THREE.Vector3(...kelvin(STAR_TEMP, 0.7)).multiplyScalar(0.75) },
      uOuter: { value: new THREE.Vector3(...kelvin(STAR_TEMP, 0.5)).multiplyScalar(0.3) },
    };
    this.corona = new THREE.Mesh(billboard.quad, new THREE.ShaderMaterial({ name: 'Corona', uniforms: this.coronaUniforms, vertexShader: billboard.vertex, fragmentShader: coronaFragment, ...additive }));
    this.corona.frustumCulled = false;
    this.corona.renderOrder = 6;
    this.halo = createGlow({ core: [0, 0, 0], halo: kelvin(STAR_TEMP, 0.8), scale: STAR_RADIUS * 5.5, intensity: 0.05 });
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
