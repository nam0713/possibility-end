// Background sky at infinity. Two star fields: the parent universe's (faint, lensed by
// the singularity, darkening as everything is pulled in) and the new universe's night
// sky around the small planet (concentrated toward the galactic band), plus the band
// itself: the home galaxy seen from inside its disk, drawn at full resolution.
import * as THREE from 'three';
import { FULLSCREEN_VERT, HASH, SIMPLEX } from './ending-glsl.js';
import { gauss, rng } from './ending-math.js';
import { GALAXY_NORMAL, HERO, SUN } from './ending-layout.js';

const VERT = /* glsl */ `
attribute vec4 aStar; // rgb tint, magnitude (0 bright .. 1 faint)
uniform float uIntensity;
uniform float uTime;
uniform float uPixelRatio;
uniform float uTwinkle;
uniform float uPull;      // 0..1: the parent sky streaming into the singularity
uniform vec3 uPullDir;    // world direction from the camera to the singularity
varying vec3 vColor;
${HASH}
void main() {
  // The parent sky falls in with everything else: each star slides along its great circle
  // toward the singularity, accelerating (some first), blue-shifting, gone as it arrives.
  float pr = hash13(position * 53.1);
  float x = clamp(uPull * 1.3 - pr * 0.3, 0.0, 1.0);
  float pull = x * x;
  vec3 dirW = position;
  float cosO = dot(position, uPullDir);
  if (pull > 0.0 && cosO > -0.95) {
    float om = acos(clamp(cosO, -1.0, 1.0));
    float so = max(sin(om), 1e-4);
    float s = 1.0 - pull;
    dirW = (sin((1.0 - s) * om) * uPullDir + sin(s * om) * position) / so;
  }
  // Directions at infinity: rotate only.
  vec3 d = mat3(viewMatrix) * dirW;
  vec4 clip = projectionMatrix * vec4(d, 1.0);
  clip.z = clip.w * 0.99999;
  gl_Position = clip;
  float m = aStar.w;
  float b = mix(1.6, 0.05, pow(m, 0.6));
  float phase = hash13(position * 91.7) * 6.283;
  float rate = 0.6 + 2.2 * hash13(position * 17.3);
  b *= 1.0 - uTwinkle * 0.35 * (0.5 + 0.5 * sin(uTime * rate + phase));
  b *= (1.0 + 1.8 * pull) * (1.0 - smoothstep(0.86, 1.0, x));
  float size = mix(2.6, 1.0, m) * uPixelRatio;
  gl_PointSize = size;
  vColor = mix(aStar.rgb, vec3(0.7, 0.88, 1.0), pull) * b * uIntensity;
}
`;

const FRAG = /* glsl */ `
varying vec3 vColor;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float d2 = dot(p, p);
  if (d2 > 1.0) discard;
  gl_FragColor = vec4(vColor * exp(-d2 * 3.5), 1.0);
}
`;

// Star tints: cold white, ice, and a few deeper blue ones (one hue family, ending-glsl.js PALETTE).
const TINT_A = [0.8, 0.92, 1.0];
const TINT_B = [0.62, 0.84, 1.0];
const TINT_C = [0.5, 0.78, 1.0];

/**
 * One star field's data, built resumably (yields every `chunk` stars; see ending-film.js):
 * directions at infinity, tint and magnitude; with `bandNormal`, two thirds crowd toward that plane.
 */
function* buildSky(count, seed, bandNormal, chunk = 3000) {
  const rand = rng(seed);
  const pos = new Float32Array(count * 3);
  const star = new Float32Array(count * 4);
  // The galactic plane's basis (u, v), for the band's concentration.
  const n = bandNormal || [0, 1, 0];
  const t1 = Math.abs(n[0]) < 0.9 ? [0, -n[2], n[1]] : [-n[2], 0, n[0]];
  const l1 = Math.hypot(t1[0], t1[1], t1[2]);
  const u = [t1[0] / l1, t1[1] / l1, t1[2] / l1];
  const v = [n[1] * u[2] - n[2] * u[1], n[2] * u[0] - n[0] * u[2], n[0] * u[1] - n[1] * u[0]];
  for (let i = 0; i < count; i++) {
    if (i > 0 && i % chunk === 0) yield;
    let x, y, z;
    if (bandNormal && rand() < 0.68) {
      // Concentrate toward the galactic plane.
      const a = rand() * Math.PI * 2;
      const e = gauss(rand) * 0.085;
      const c = Math.cos(e), se = Math.sin(e), ca = Math.cos(a), sa = Math.sin(a);
      x = (u[0] * ca + v[0] * sa) * c + n[0] * se;
      y = (u[1] * ca + v[1] * sa) * c + n[1] * se;
      z = (u[2] * ca + v[2] * sa) * c + n[2] * se;
    } else {
      z = rand() * 2 - 1;
      const a = rand() * Math.PI * 2;
      const s = Math.sqrt(1 - z * z);
      x = s * Math.cos(a); y = s * Math.sin(a);
    }
    pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z;
    const k = rand();
    const tint = k < 0.62 ? TINT_A : k < 0.86 ? TINT_B : TINT_C;
    star[i * 4] = tint[0]; star[i * 4 + 1] = tint[1]; star[i * 4 + 2] = tint[2];
    star[i * 4 + 3] = 1 - Math.pow(rand(), 5.0);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geometry.setAttribute('aStar', new THREE.BufferAttribute(star, 4));
  geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e6);
  return geometry;
}

/** Both star fields' geometry, resumably: `const g = yield* buildSkyData(count)`, then createSkies({ ...g }). */
export function* buildSkyData(count) {
  const parent = yield* buildSky(count, 7001, null);
  yield;
  const fresh = yield* buildSky(count * 3, 3307, GALAXY_NORMAL);
  return { parent, fresh };
}

// The galaxy from inside its disk: unresolved star grain in bright star clouds, dark
// rifts along the plane, a faint diffuse glow, paler and whiter toward the galactic centre.
const BAND_FRAG = /* glsl */ `
uniform vec3 uCamRight, uCamUp, uCamFwd;
uniform vec2 uTan;
uniform vec3 uGalN, uGalIn;
uniform float uIntensity, uGrainScale;
varying vec2 vUv;
${HASH}
${SIMPLEX}
float fbm3(vec3 p) { return snoise(p) * 0.55 + snoise(p * 2.1 + 3.7) * 0.3 + snoise(p * 4.3 - 1.9) * 0.15; }
// Fine stars fixed to the sky: one candidate per cell of a direction-space grid.
float grain(vec3 rd, float density) {
  vec3 g = rd * uGrainScale;
  vec3 c = floor(g);
  float h = hash13(c);
  float on = step(1.0 - density, h);
  vec3 f = fract(g) - 0.5;
  float b = hash13(c + 7.1);
  return on * exp(-dot(f, f) * 12.0) * (0.12 + 0.88 * b * b * b);
}
void main() {
  vec2 ndc = vUv * 2.0 - 1.0;
  vec3 rd = normalize(uCamFwd + ndc.x * uTan.x * uCamRight + ndc.y * uTan.y * uCamUp);
  float e = dot(rd, uGalN);
  vec3 inPlane = normalize(rd - uGalN * e + 1e-5);
  float toward = dot(inPlane, uGalIn);
  float w = 0.07 + 0.05 * smoothstep(-0.2, 1.0, toward);
  float strip = exp(-pow(e / w, 2.0));
  float wide = exp(-pow(e / (w * 2.6), 2.0));
  float core = exp(-pow(e / (w * 0.65), 2.0)) * pow(max(0.0, 0.5 + 0.5 * toward), 8.0);
  float clouds = smoothstep(-0.25, 0.75, fbm3(rd * 7.0 + 3.0));
  float rift = smoothstep(0.0, 0.5, fbm3(rd * 5.5 + 13.0) * 0.5 + 0.5 + 0.15 * snoise(rd * 21.0));
  float lane = rift * exp(-pow((e + 0.008) / (w * 0.42), 2.0));
  float dust = 1.0 - 0.88 * lane;
  vec3 cool = vec3(0.6, 0.8, 1.0);
  vec3 pale = vec3(0.8, 0.94, 1.0) * 0.92;
  vec3 tint = mix(cool, pale, smoothstep(0.3, 1.0, toward) * 0.7);
  float diffuse = (strip * (0.18 + 0.82 * clouds) + wide * 0.1 + core * 0.9) * dust;
  float density = clamp((strip * (0.2 + 0.8 * clouds * clouds) + wide * 0.05) * dust, 0.0, 1.0) * 0.4 + 0.0015;
  float stars = grain(rd, density) + grain(rd * 1.7 + 0.31, density * 0.6) * 0.5;
  vec3 col = tint * (diffuse * 0.055 + stars * 0.42);
  gl_FragColor = vec4(col * uIntensity, 1.0);
}
`;

/** @param {{parent: THREE.BufferGeometry, fresh: THREE.BufferGeometry}} data  from buildSkyData() */
export function createSkies(data) {
  const make = (geometry) => {
    const material = new THREE.ShaderMaterial({
      vertexShader: VERT, fragmentShader: FRAG,
      uniforms: {
        uIntensity: { value: 0 }, uTime: { value: 0 }, uPixelRatio: { value: 1 }, uTwinkle: { value: 1 },
        uPull: { value: 0 }, uPullDir: { value: new THREE.Vector3(0, 0, -1) },
      },
      transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
    });
    const points = new THREE.Points(geometry, material);
    points.frustumCulled = false;
    points.renderOrder = -10;
    return points;
  };
  const parent = make(data.parent);
  // Full-screen band (a single triangle, drawn first).
  const bandGeometry = new THREE.BufferGeometry();
  bandGeometry.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
  const galIn = new THREE.Vector3(HERO[0] - SUN[0], HERO[1] - SUN[1], HERO[2] - SUN[2]).normalize();
  const bandUniforms = {
    uCamRight: { value: new THREE.Vector3() }, uCamUp: { value: new THREE.Vector3() }, uCamFwd: { value: new THREE.Vector3() },
    uTan: { value: new THREE.Vector2(1, 1) },
    uGalN: { value: new THREE.Vector3(...GALAXY_NORMAL) }, uGalIn: { value: galIn },
    uIntensity: { value: 0 }, uGrainScale: { value: 900 },
  };
  const band = new THREE.Mesh(bandGeometry, new THREE.ShaderMaterial({
    vertexShader: FULLSCREEN_VERT, fragmentShader: BAND_FRAG, uniforms: bandUniforms,
    transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
  }));
  band.frustumCulled = false;
  band.renderOrder = -20;
  const fresh = make(data.fresh);

  function set(points, k, frame, view, reduced) {
    points.visible = k > 0.002;
    const u = points.material.uniforms;
    u.uIntensity.value = k;
    u.uTime.value = frame.t;
    u.uPixelRatio.value = view.pixelRatio;
    u.uTwinkle.value = reduced ? 0 : 1;
  }

  function update(frame, view, reduced, cam, aspect) {
    set(parent, frame.parentSky * 0.55, frame, view, reduced);
    const pu = parent.material.uniforms;
    pu.uPull.value = frame.skyPull;
    // The singularity sits at the film-space origin.
    pu.uPullDir.value.set(-cam.position[0], -cam.position[1], -cam.position[2]).normalize();
    set(fresh, frame.newSky * 0.7, frame, view, reduced);
    band.visible = frame.band > 0.001;
    if (band.visible) {
      bandUniforms.uCamRight.value.set(cam.right[0], cam.right[1], cam.right[2]);
      bandUniforms.uCamUp.value.set(cam.up[0], cam.up[1], cam.up[2]);
      bandUniforms.uCamFwd.value.set(-cam.dir[0], -cam.dir[1], -cam.dir[2]);
      const tanH = Math.tan((cam.fov * Math.PI) / 360);
      bandUniforms.uTan.value.set(tanH * aspect, tanH);
      bandUniforms.uIntensity.value = frame.band;
      // About two pixels per grain cell at any resolution.
      bandUniforms.uGrainScale.value = (view.height / tanH) * 0.42;
    }
  }

  function dispose() {
    for (const p of [parent, fresh, band]) { p.geometry.dispose(); p.material.dispose(); }
  }
  return { parent, fresh, band, update, dispose };
}
