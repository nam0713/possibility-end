// “작은 암석 행성” and its blue-white star. The planet cools from a dark crust with
// fissures glowing white-hot to deep blue (the film's colours of heat), deep-blue oceans
// rise into its basins over slate and blue-grey land, white clouds form, a thin ice-blue
// atmosphere lights its rim, and finally life darkens the lowlands and blooms faintly
// cyan in the shallow seas. One cold hue family throughout (ending-glsl.js PALETTE):
// no browns, greens or warm terminator — the planet stays small and blue.
// All lighting is done in view space so the tiny system stays numerically exact.
import * as THREE from 'three';
import { PALETTE, SIMPLEX } from './ending-glsl.js';
import { PLANET, PLANET_RADIUS, SUN, SUN_RADIUS, UP_FINAL, VIEW_FINAL } from './ending-layout.js';

const SUN_EXTENT = 34.0;

const SUN_VERT = /* glsl */ `
uniform float uSize, uProjScale, uMinPx;
varying vec2 vP;
varying float vEnergy;
varying float vPx;
void main() {
  vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  float depth = max(-mv.z, 1e-9);
  float px = uSize * uProjScale / depth;
  float size = uSize;
  vEnergy = 1.0;
  if (px < uMinPx) { size = uMinPx * depth / uProjScale; vEnergy = (px * px) / (uMinPx * uMinPx); }
  vPx = px;
  mv.xy += position.xy * size * ${SUN_EXTENT.toFixed(1)};
  vP = position.xy * ${SUN_EXTENT.toFixed(1)};
  gl_Position = projectionMatrix * mv;
}
`;

const SUN_FRAG = /* glsl */ `
uniform float uIntensity, uBeacon, uTime;
varying vec2 vP;
varying float vEnergy;
varying float vPx;
${SIMPLEX}
${PALETTE}
void main() {
  float r = length(vP);
  vec3 col = vec3(0.0);
  // Photosphere of a hot, blue-white star: white-hot at the centre, limb-darkened into ice,
  // faintly granulated when resolved.
  if (r < 1.0) {
    float mu = sqrt(1.0 - r * r);
    float limb = 0.4 + 0.6 * mu;
    float gran = 1.0 + 0.06 * snoise(vec3(vP * 9.0, uTime * 0.3)) * smoothstep(8.0, 40.0, vPx);
    col += mix(vec3(0.62, 0.86, 1.0), P_WHITE, mu) * 6.4 * limb * gran;
  }
  float e = max(r - 1.0, 0.0);
  // Corona and a wide, soft scattering halo, ice blue (no flares, no rings).
  col += vec3(0.6, 0.86, 1.0) * (1.2 * exp(-e * 4.0) + 0.06 / (1.0 + e * e * 0.5)) * step(1.0, r);
  col *= smoothstep(${SUN_EXTENT.toFixed(1)}, ${(SUN_EXTENT * 0.55).toFixed(1)}, r);
  // While it is still a distant point, the star is lit up for the eye to find.
  float point = exp(-r * r * 0.6) * uBeacon * 20.0;
  gl_FragColor = vec4((col * vEnergy + vec3(0.85, 0.96, 1.0) * point) * uIntensity, 1.0);
}
`;

const PLANET_VERT = /* glsl */ `
varying vec3 vObj;
varying vec3 vView;
varying vec3 vNormalV;
void main() {
  vObj = position;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vView = mv.xyz;
  vNormalV = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * mv;
}
`;

const PLANET_FRAG = /* glsl */ `
uniform vec3 uSunV;       // direction to the sun, view space
uniform vec3 uSunO;       // direction to the sun, planet (object) space
uniform float uCool, uOcean, uClouds, uLife, uTime, uOpacity, uCloudSpin;
varying vec3 vObj;
varying vec3 vView;
varying vec3 vNormalV;
${SIMPLEX}
${PALETTE}
float fbm(vec3 p, int oct) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 6; i++) { if (i >= oct) break; v += a * snoise(p); p = p * 2.05 + 1.3; a *= 0.5; }
  return v;
}
vec3 spin(vec3 p, float a) {
  float c = cos(a), s = sin(a);
  return vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z);
}
// A log-spiral cyclone centred on c (unit), turning with the hemisphere: cover in 0..1.
float cyclone(vec3 p, vec3 c, float radius) {
  vec3 t1 = normalize(cross(c, vec3(0.0, 1.0, 0.0)));
  vec3 t2 = cross(c, t1);
  vec3 d = p - c * dot(p, c);
  float u = dot(d, t1), v = dot(d, t2);
  float r = length(vec2(u, v)) / radius;
  if (r > 1.6) return 0.0;
  float th = atan(v, u) * sign(c.y);
  float arms = 0.5 + 0.5 * cos(2.0 * (th + 2.6 * log(r + 0.04)));
  float eye = smoothstep(0.03, 0.09, r);
  return pow(arms, 1.6) * exp(-r * r * 1.6) * eye * 1.3;
}
// Cloud cover: a thin equatorial band, clear subtropics, streaky storm belts stretched along
// the parallels, two cyclones; fine broken cells.
float clouds(vec3 cp) {
  float y = cp.y;
  float lat = abs(y);
  float itcz = exp(-pow(y / 0.06, 2.0)) * 0.34;
  float belts = smoothstep(0.56, 0.66, lat) * (1.0 - smoothstep(0.78, 0.88, lat)) * 0.42;
  float subtropic = smoothstep(0.22, 0.32, lat) * (1.0 - smoothstep(0.42, 0.52, lat));
  vec3 cw = cp + 0.08 * vec3(snoise(cp * 3.0 + 1.0), snoise(cp * 3.0 + 6.0), snoise(cp * 3.0 + 11.0));
  // Stretched along longitude (a squeezed latitude axis): streaks, not cotton balls.
  float streak = fbm(cw * vec3(2.2, 7.5, 2.2) + vec3(0.0, 0.0, uTime * 0.006), 4);
  float cells = fbm(cw * 11.0 + 3.0, 3);
  float base = 0.14 + itcz + belts - 0.24 * subtropic;
  // Bands are broken up by the streaks themselves, never solid stripes.
  float c = base * (0.55 + 0.9 * smoothstep(-0.3, 0.4, streak)) + streak * 0.5 + cells * 0.22;
  c = max(c, cyclone(cp, normalize(vec3(0.55, 0.62, 0.56)), 0.26));
  c = max(c, cyclone(cp, normalize(vec3(-0.62, -0.58, 0.52)), 0.2) * 0.9);
  return smoothstep(0.38, 0.8, c - 0.3 * (1.0 - uClouds)) * uClouds;
}
void main() {
  vec3 n = normalize(vObj);
  float lat = abs(n.y);
  // Terrain: continents from a low-frequency field under a light warp, eroded coasts, and
  // ridged mountain belts along the continental margins.
  vec3 w = n + 0.12 * vec3(snoise(n * 2.0 + 4.0), snoise(n * 2.0 + 9.0), snoise(n * 2.0 - 3.0));
  float cont = snoise(w * 1.2) * 0.6 + snoise(w * 2.4 + 7.0) * 0.26;
  float erosion = fbm(n * 7.0 + 2.0, 4) * 0.16 + snoise(n * 26.0) * 0.03;
  float h = cont + erosion;
  float ridge = pow(1.0 - abs(snoise(n * 5.2 + 2.0)), 6.0);
  float margin = smoothstep(0.08, 0.2, cont) * (1.0 - smoothstep(0.3, 0.55, cont));
  h += 0.22 * ridge * margin;
  float sea = mix(-0.9, -0.02, uOcean);
  float water = smoothstep(sea + 0.006, sea - 0.006, h);
  float depthW = clamp((sea - h) / 0.3, 0.0, 1.0);

  // Land: dark basalt slate in the lowlands, blue-grey uplands, paler dry belts, bare ranges,
  // snow on the highest peaks. Life darkens the moist lowlands to a deeper slate-blue.
  float relief = h - sea;
  float dry = smoothstep(0.2, 0.32, lat) * (1.0 - smoothstep(0.45, 0.58, lat));
  vec3 land = mix(vec3(0.035, 0.045, 0.056), vec3(0.1, 0.12, 0.14), smoothstep(0.0, 0.25, relief));
  land = mix(land, vec3(0.17, 0.2, 0.23), dry * 0.55 * (1.0 - smoothstep(0.2, 0.4, relief)));
  land = mix(land, vec3(0.22, 0.25, 0.28), smoothstep(0.22, 0.4, relief) * ridge);
  land = mix(land, vec3(0.76, 0.82, 0.87), smoothstep(0.4, 0.5, relief) * uOcean);
  float moist = snoise(n * 2.6 + 7.0) * 0.5 + 0.5;
  float life = uLife * smoothstep(0.4, 0.7, moist) * (1.0 - dry) * smoothstep(0.85, 0.35, lat) * (1.0 - smoothstep(0.12, 0.3, relief));
  land = mix(land, land * vec3(0.5, 0.66, 0.82), life * 0.8);
  // Open ocean is a deep blue; shelves along the coasts are a little lighter.
  vec3 ocean = mix(vec3(0.008, 0.035, 0.06), vec3(0.004, 0.018, 0.044), smoothstep(0.0, 0.35, depthW));
  // Life in the sea: faint ice-cyan blooms swirl over the shallow shelves.
  float bloom = smoothstep(0.62, 0.92, snoise(n * 7.0 + vec3(0.0, 0.0, uTime * 0.003)) * 0.5 + 0.5 + 0.25 * snoise(n * 19.0));
  ocean += vec3(0.02, 0.07, 0.085) * bloom * uLife * (1.0 - smoothstep(0.05, 0.4, depthW));
  vec3 albedo = mix(land, ocean, water);
  // A small polar cap with a broken edge.
  float ice = smoothstep(0.93, 0.965, lat + 0.035 * snoise(n * 8.0) + 0.02 * snoise(n * 23.0)) * uOcean;
  albedo = mix(albedo, vec3(0.76, 0.84, 0.9), ice);

  vec3 N = normalize(vNormalV);
  vec3 V = normalize(-vView);
  vec3 L = normalize(uSunV);
  float ndl = dot(N, L);
  float diff = max(ndl, 0.0);
  float soft = smoothstep(-0.08, 0.2, ndl);
  // Light of a blue-white star.
  vec3 sunlight = vec3(0.9, 0.96, 1.0) * 2.8;
  // Clouds drift faster than the ground; their shadows fall a little away from the sun.
  vec3 cp = spin(n, uCloudSpin);
  float cover = clouds(cp);
  vec3 so = normalize(uSunO);
  float shadow = clouds(spin(normalize(n - so * 0.018), uCloudSpin));
  vec3 col = albedo * sunlight * diff * (1.0 - 0.55 * shadow);
  // Ocean glint (sun reflected in the sea), widened by waves near the terminator.
  vec3 H = normalize(L + V);
  float fres = 0.02 + 0.98 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
  float glint = pow(max(dot(N, H), 0.0), 220.0) * 1.4 + pow(max(dot(N, H), 0.0), 30.0) * 0.08;
  col += sunlight * glint * water * soft * (0.3 + fres) * (1.0 - ice) * (1.0 - cover);

  // Molten youth: a dark crust and fissures glowing in the film's colours of heat — a deep-blue
  // glow, white-hot in the open cracks — that fade as it cools.
  float hotness = 1.0 - uCool;
  float crack = pow(1.0 - abs(snoise(n * 2.4)), 10.0) + 0.45 * pow(1.0 - abs(snoise(n * 4.8 + 3.0)), 10.0);
  col *= mix(1.0, 0.3, hotness);
  float heat = crack * 2.6 + 0.16 + 0.12 * (h + 0.5);
  col += mix(P_ABYSS * 0.95, P_HI, smoothstep(0.5, 2.4, heat)) * heat * hotness * hotness;

  vec3 cloud = vec3(0.86, 0.91, 0.95) * sunlight * (diff * 0.85 + soft * 0.04);
  col = mix(col, cloud, cover * 0.85);

  gl_FragColor = vec4(col, uOpacity);
}
`;

const ATMO_VERT = /* glsl */ `
varying vec3 vView;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vView = mv.xyz;
  gl_Position = projectionMatrix * mv;
}
`;

const ATMO_FRAG = /* glsl */ `
uniform vec3 uCenterV;   // planet centre, view space
uniform vec3 uSunV;
uniform float uRadius, uOuter, uStrength;
varying vec3 vView;
${PALETTE}
void main() {
  vec3 rd = normalize(vView);
  vec3 oc = -uCenterV;                    // camera relative to the centre
  float tca = -dot(oc, rd);
  vec3 closest = oc + rd * tca;
  float b = length(closest) / uRadius;
  float Ra = uOuter / uRadius;
  float outer = sqrt(max(Ra * Ra - b * b, 0.0));
  float inner = b < 1.0 ? sqrt(1.0 - b * b) : 0.0;
  // Path through the shell: limb rays graze it, rays over the disc only cross it.
  float path = b < 1.0 ? (outer - inner) * 0.22 : 2.0 * outer;
  float h = max(b - 1.0, 0.0);
  float dens = exp(-h / 0.018);
  vec3 p = b < 1.0 ? normalize(oc + rd * (tca - inner * uRadius)) : normalize(closest);
  vec3 S = normalize(uSunV);
  float mu = dot(p, S);
  float lit = smoothstep(-0.28, 0.32, mu);
  vec3 day = vec3(0.18, 0.55, 1.0);
  // Toward the terminator the limb, where the light grazes through the air, pales to ice
  // (no sunset tones: a cold, blue world).
  float limb = smoothstep(0.92, 1.0, b);
  vec3 col = mix(day, mix(day, P_ICE, limb * 0.35), 1.0 - smoothstep(-0.05, 0.35, mu)) * lit;
  // Twilight: a faint blue thread of scattered light around the night-side limb.
  col += vec3(0.1, 0.38, 0.9) * smoothstep(-0.75, -0.1, mu) * (1.0 - lit) * limb * 0.22;
  float fwd = pow(max(dot(rd, S), 0.0), 5.0);
  col += vec3(0.75, 0.95, 1.0) * fwd * lit * 0.6 * limb;
  float optical = path * dens;
  gl_FragColor = vec4(col * optical * uStrength, 1.0);
}
`;

export function createSystem({ segments }) {
  const group = new THREE.Group();

  // ---- the blue-white star
  const quad = new THREE.PlaneGeometry(2, 2);
  const sunUniforms = {
    uSize: { value: SUN_RADIUS }, uProjScale: { value: 1000 }, uMinPx: { value: 3 },
    uIntensity: { value: 0 }, uBeacon: { value: 0 }, uTime: { value: 0 },
  };
  const sun = new THREE.Mesh(quad, new THREE.ShaderMaterial({
    vertexShader: SUN_VERT, fragmentShader: SUN_FRAG, uniforms: sunUniforms,
    transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
  }));
  sun.position.set(SUN[0], SUN[1], SUN[2]);
  sun.frustumCulled = false;
  sun.renderOrder = 20;

  // ---- the planet
  const sphere = new THREE.SphereGeometry(1, segments, Math.round(segments / 2));
  const planetUniforms = {
    uSunV: { value: new THREE.Vector3() },
    uSunO: { value: new THREE.Vector3(0, 0, 1) },
    uCool: { value: 0 }, uOcean: { value: 0 }, uClouds: { value: 0 }, uLife: { value: 0 },
    uTime: { value: 0 }, uOpacity: { value: 0 }, uCloudSpin: { value: 0 },
  };
  const planet = new THREE.Mesh(sphere, new THREE.ShaderMaterial({
    vertexShader: PLANET_VERT, fragmentShader: PLANET_FRAG, uniforms: planetUniforms,
    transparent: true, depthTest: false, depthWrite: false, toneMapped: false,
  }));
  planet.position.set(PLANET[0], PLANET[1], PLANET[2]);
  planet.scale.setScalar(PLANET_RADIUS);
  planet.frustumCulled = false;
  planet.renderOrder = 30;

  const atmoUniforms = {
    uCenterV: { value: new THREE.Vector3() }, uSunV: { value: new THREE.Vector3() },
    uRadius: { value: PLANET_RADIUS }, uOuter: { value: PLANET_RADIUS * 1.07 }, uStrength: { value: 0 },
  };
  const atmosphere = new THREE.Mesh(sphere, new THREE.ShaderMaterial({
    vertexShader: ATMO_VERT, fragmentShader: ATMO_FRAG, uniforms: atmoUniforms,
    transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
  }));
  atmosphere.position.copy(planet.position);
  atmosphere.scale.setScalar(PLANET_RADIUS * 1.07);
  atmosphere.frustumCulled = false;
  atmosphere.renderOrder = 31;

  group.add(sun, planet, atmosphere);

  // Spin axis: tilted, so continents drift diagonally across the lit face.
  const axis = new THREE.Vector3(...UP_FINAL).multiplyScalar(0.92).addScaledVector(new THREE.Vector3(...VIEW_FINAL), -0.4).normalize();
  const tiltQ = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), axis);
  const spinQ = new THREE.Quaternion();
  const yAxis = new THREE.Vector3(0, 1, 0);
  const sunWorld = new THREE.Vector3(SUN[0], SUN[1], SUN[2]);
  const tmp = new THREE.Vector3();
  const invQ = new THREE.Quaternion();

  function update(frame, view, camera) {
    // ---- sun
    sun.visible = frame.sun > 0.001;
    sunUniforms.uIntensity.value = frame.sun;
    sunUniforms.uBeacon.value = frame.sunBeacon;
    sunUniforms.uProjScale.value = view.projScale;
    sunUniforms.uMinPx.value = 2.2 * view.pixelRatio;
    sunUniforms.uTime.value = frame.t;
    // ---- planet
    const show = frame.planet > 0.001;
    planet.visible = show;
    atmosphere.visible = show && frame.atmo > 0.001;
    if (!show) return;
    spinQ.setFromAxisAngle(yAxis, 2.2 + frame.t * 0.018);
    planet.quaternion.copy(tiltQ).multiply(spinQ);
    // View-space quantities (camera matrices are current).
    tmp.copy(sunWorld).sub(planet.position).normalize();
    // Planet (object) space, for the cloud shadows.
    invQ.copy(planet.quaternion).invert();
    planetUniforms.uSunO.value.copy(tmp).applyQuaternion(invQ);
    tmp.transformDirection(camera.matrixWorldInverse);
    planetUniforms.uSunV.value.copy(tmp);
    atmoUniforms.uSunV.value.copy(tmp);
    atmoUniforms.uCenterV.value.copy(planet.position).applyMatrix4(camera.matrixWorldInverse);
    planetUniforms.uCool.value = frame.cool;
    planetUniforms.uOcean.value = frame.ocean;
    planetUniforms.uClouds.value = frame.clouds;
    planetUniforms.uLife.value = frame.life;
    planetUniforms.uTime.value = frame.t;
    planetUniforms.uOpacity.value = frame.planet;
    planetUniforms.uCloudSpin.value = frame.t * 0.006;
    atmoUniforms.uStrength.value = frame.atmo * frame.planet * 3.0;
  }

  function dispose() {
    quad.dispose();
    sphere.dispose();
    sun.material.dispose();
    planet.material.dispose();
    atmosphere.material.dispose();
  }
  return { group, update, dispose };
}
