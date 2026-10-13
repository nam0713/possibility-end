// “작은 암석 행성” and its sun-like star (5800 K). The planet cools like a real one (ending-glsl.js:
// blackbody light): a molten, orange-yellow magma ocean churning with brighter seams → a dark
// basalt crust closing over it in plates, its fissures dimming from orange to dull red → steam
// veiling it all → deep-blue seas rising into its basins over grey-brown rock and tan dry belts,
// white weather, a thin Rayleigh-blue rim with a sunset thread at the terminator; finally life
// greens the moist lowlands and blooms faintly teal in the shallow seas — 작고 푸른 행성.
// All lighting is done in view space so the tiny system stays numerically exact.
import * as THREE from 'three';
import { PALETTE, SIMPLEX } from './ending-glsl.js';
import { PLANET, PLANET_RADIUS, SUN, SUN_RADIUS, UP_FINAL, VIEW_FINAL } from './ending-layout.js';
import { createSimplex3, smoothstep } from './ending-math.js';

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
  // Photosphere of a sun-like star (5800 K), limb-darkened: toward the limb we see higher,
  // cooler layers (~4 500 K), so it dims and reddens; faintly granulated when resolved.
  if (r < 1.0) {
    float mu = sqrt(1.0 - r * r);
    float limb = 0.4 + 0.6 * mu;
    float gran = 1.0 + 0.06 * snoise(vec3(vP * 9.0, uTime * 0.3)) * smoothstep(8.0, 40.0, vPx);
    col += blackbody(mix(4500.0, 6100.0, mu)) * 6.4 * limb * gran;
  }
  float e = max(r - 1.0, 0.0);
  // Corona and a wide, soft scattering halo: the photosphere's light, a little warmer as it is
  // scattered (no flares, no rings).
  col += mix(K_SUN, blackbody(4800.0), 0.5) * (1.2 * exp(-e * 4.0) + 0.06 / (1.0 + e * e * 0.5)) * step(1.0, r);
  col *= smoothstep(${SUN_EXTENT.toFixed(1)}, ${(SUN_EXTENT * 0.55).toFixed(1)}, r);
  // While it is still a distant point, the star is lit up for the eye to find.
  float point = exp(-r * r * 0.6) * uBeacon * 20.0;
  gl_FragColor = vec4((col * vEnergy + K_SUN * point) * uIntensity, 1.0);
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
uniform float uCool, uSteam, uOcean, uClouds, uLife, uTime, uOpacity, uCloudSpin;
varying vec3 vObj;
varying vec3 vView;
varying vec3 vNormalV;
uniform sampler2D tSurf;    // baked (bakePlanetSurface): terrain height, ridges, rock grain, moisture
uniform sampler2D tDetail;  // baked: polar-cap edge noise, plankton field, convection cells, fine seams
uniform sampler2D tAir;     // baked: cloud pattern (cyclones included), its streaks, magma churn
${PALETTE}
// Equirectangular lookup of a direction (the baked fields are functions of direction).
vec2 eq(vec3 d) { return vec2(atan(d.z, d.x) * 0.15915494 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * 0.31830989 + 0.5); }
vec3 spin(vec3 p, float a) {
  float c = cos(a), s = sin(a);
  return vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z);
}
// Cloud cover from the baked pattern: a thin equatorial band, clear subtropics, streaky storm
// belts stretched along the parallels, two cyclones, fine broken cells (see bakePlanetSurface).
float clouds(vec4 air) {
  return smoothstep(0.38, 0.8, air.x - 0.3 * (1.0 - uClouds)) * uClouds;
}
void main() {
  vec3 n = normalize(vObj);
  float lat = abs(n.y);
  // Terrain (baked): continents under a light warp, eroded coasts, ridged mountain belts along
  // the continental margins.
  vec4 surf = texture2D(tSurf, eq(n));
  vec4 detail = texture2D(tDetail, eq(n));
  float h = surf.x;
  float ridge = surf.y;
  float sea = mix(-0.42, 0.0, pow(uOcean, 0.8));
  float water = smoothstep(sea + 0.006, sea - 0.006, h);
  float depthW = clamp((sea - h) / 0.3, 0.0, 1.0);

  // Land (linear albedo, as Earth's): young dark basalt, weathering to grey-brown rock; tan dry
  // belts; grey ranges with snow on the highest peaks; once life has come, green moist lowlands.
  float relief = h - sea;
  float dry = smoothstep(0.2, 0.32, lat) * (1.0 - smoothstep(0.45, 0.58, lat));
  float grain = surf.z;
  vec3 basalt = vec3(0.022, 0.02, 0.018) * (0.75 + 0.5 * grain);
  vec3 rock = mix(vec3(0.11, 0.095, 0.08), vec3(0.17, 0.15, 0.13), grain);
  vec3 land = mix(basalt, rock, uOcean * smoothstep(-0.05, 0.25, relief));
  land = mix(land, vec3(0.26, 0.2, 0.13) * (0.85 + 0.3 * grain), dry * uOcean * 0.6 * (1.0 - smoothstep(0.2, 0.4, relief)));
  land = mix(land, vec3(0.2, 0.19, 0.18), smoothstep(0.22, 0.4, relief) * ridge);
  land = mix(land, vec3(0.78, 0.8, 0.83), smoothstep(0.4, 0.5, relief) * uOcean);
  float moist = surf.w;
  float life = uLife * smoothstep(0.3, 0.6, moist) * (1.0 - 0.7 * dry) * smoothstep(0.85, 0.35, lat) * (1.0 - smoothstep(0.15, 0.32, relief));
  vec3 green = mix(vec3(0.035, 0.06, 0.022), vec3(0.08, 0.1, 0.04), grain);
  land = mix(land, green, life * 0.85);
  // Open ocean is a deep blue; shelves along the coasts are a little lighter and greener.
  vec3 ocean = mix(vec3(0.006, 0.03, 0.05), vec3(0.003, 0.012, 0.04), smoothstep(0.0, 0.35, depthW));
  // Life in the sea: faint plankton blooms swirl over the shallow shelves (teal).
  float bloom = smoothstep(0.62, 0.92, detail.y);
  ocean += vec3(0.008, 0.04, 0.035) * bloom * uLife * (1.0 - smoothstep(0.05, 0.4, depthW));
  vec3 albedo = mix(land, ocean, water);
  // A small polar cap with a broken edge.
  float ice = smoothstep(0.93, 0.965, lat + detail.x) * uOcean;
  albedo = mix(albedo, vec3(0.75, 0.78, 0.82), ice);

  vec3 N = normalize(vNormalV);
  vec3 V = normalize(-vView);
  vec3 L = normalize(uSunV);
  float ndl = dot(N, L);
  float diff = max(ndl, 0.0);
  float soft = smoothstep(-0.08, 0.2, ndl);
  // Light of a sun-like star (5800 K), half white-balanced the way a camera would: yellow-white.
  vec3 sunlight = mix(K_SUN, vec3(1.0), 0.55) * 2.8;
  // Clouds drift faster than the ground and shade it. While the crust is young, steam gathers into
  // broken, streaky bands (uSteam) — never a uniform veil — until the seas take the water down.
  vec3 cp = spin(n, uCloudSpin);
  // The molten surface's convection cells (slowly turning over) and fine seams.
  vec4 molten = texture2D(tDetail, eq(spin(n, uTime * 0.012)));
  float cellsM = molten.z;
  float seam = pow(cellsM, 9.0) + 0.5 * molten.w;
  vec4 air = texture2D(tAir, eq(cp));
  float weather = clouds(air);
  float streak = air.y;
  float bands = smoothstep(-0.1, 0.4, streak);
  float veil = uSteam * 0.62 * bands;
  float cover = max(weather, veil);
  // (Cloud shadows fall within a pixel or two of their clouds at this size: the cover itself.)
  float shadow = cover;
  vec3 col = albedo * sunlight * diff * (1.0 - 0.55 * shadow);
  // Ocean glint (sun reflected in the sea), widened by waves near the terminator.
  vec3 H = normalize(L + V);
  float fres = 0.02 + 0.98 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
  float glint = pow(max(dot(N, H), 0.0), 220.0) * 1.4 + pow(max(dot(N, H), 0.0), 30.0) * 0.08;
  col += sunlight * glint * water * soft * (0.3 + fres) * (1.0 - ice) * (1.0 - cover);

  // Molten youth, by temperature (blackbody): a magma ocean (~2 000 K, orange-yellow) churning in
  // convection cells with hotter, brighter seams; then a dark basalt crust closes over it in
  // plates (uCool) and only the fissures between them glow — dimming and reddening as they cool
  // (~1 500 → 950 K) — until the steam and the seas put them out.
  float churn = texture2D(tAir, eq(spin(n, -uTime * 0.008))).z;
  // Plates: the crust covers everything but the fissures as it thickens.
  float plate = smoothstep(0.0, 0.35, uCool * 1.35 - seam * 0.9 + churn * 0.25);
  float magmaT = 1650.0 + 420.0 * churn + 650.0 * seam;
  vec3 magma = blackbody(magmaT) * (1.1 + 1.6 * seam + 0.5 * churn);
  float fissT = mix(1500.0, 950.0, uCool) + 300.0 * seam;
  vec3 fissure = blackbody(fissT) * seam * 2.2 * (1.0 - 0.8 * smoothstep(0.55, 1.0, uCool)) * (1.0 - smoothstep(0.0, 0.45, uOcean));
  vec3 glow = mix(magma, fissure, plate);
  // The crust itself is lit by the sun; the magma outshines it.
  col *= plate;
  col += glow * (1.0 - 0.75 * cover);

  vec3 cloud = vec3(0.86, 0.87, 0.88) * sunlight * (diff * 0.85 + soft * 0.04);
  // Under the steam the fissures light its base: a dull red glow on the night side.
  cloud += fissure * 0.25 * veil * (1.0 - diff);
  col = mix(col, cloud, cover * 0.88);

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
  // Rayleigh scattering of sunlight (∝ λ⁻⁴): a deep sky blue, paling where the limb is seen
  // edge-on (the light has crossed more air and is scattered back toward white).
  vec3 day = vec3(0.16, 0.42, 1.0);
  float limb = smoothstep(0.92, 1.0, b);
  vec3 col = mix(day, vec3(0.5, 0.72, 1.0), limb * 0.35 * (1.0 - smoothstep(-0.05, 0.35, mu))) * lit;
  // At the terminator the light grazes through the whole atmosphere and loses its blue: a thin
  // band of sunset (a ~2 000 K-like orange) along the limb, fading into a faint blue twilight.
  float dusk = exp(-pow((mu - 0.02) / 0.09, 2.0)) * limb;
  col += vec3(1.0, 0.36, 0.1) * dusk * 0.22;
  col += vec3(0.12, 0.2, 0.6) * smoothstep(-0.75, -0.1, mu) * (1.0 - lit) * limb * 0.2;
  float fwd = pow(max(dot(rd, S), 0.0), 5.0);
  col += vec3(0.7, 0.85, 1.0) * fwd * lit * 0.6 * limb;
  float optical = path * dens;
  gl_FragColor = vec4(col * optical * uStrength, 1.0);
}
`;

// ---------------------------------------------------------------- baked surface fields
// The planet's noise fields are functions of direction that do not change over the film (or turn
// too slowly to matter), so they are baked once, in the idle build, into three equirectangular
// half-float textures instead of being evaluated per pixel: ~30 simplex evaluations per pixel made
// the planet's fragment shader take 2–4.5 s to link on ANGLE/D3D11 (the film's slowest), which
// held a jump to the world phase (and every lab still there) on a blank frame.
const SURF_W = 512;
const SURF_H = 256;
const DETAIL_W = 384;
const DETAIL_H = 192;

/** Area-weighted quantiles of an equirectangular field (sampled every few texels). */
function quantiles(field, w, h, qs) {
  const vals = [];
  const wts = [];
  for (let j = 0; j < h; j += 2) {
    const wt = Math.cos(((j + 0.5) / h - 0.5) * Math.PI);
    for (let i = j & 2 ? 1 : 0; i < w; i += 3) { vals.push(field[j * w + i]); wts.push(wt); }
  }
  const order = vals.map((_, k) => k).sort((a, b) => vals[a] - vals[b]);
  let total = 0;
  for (const wt of wts) total += wt;
  const out = [];
  let acc = 0, q = 0;
  for (const k of order) {
    acc += wts[k];
    while (q < qs.length && acc >= qs[q] * total) { out.push(vals[k]); q++; }
  }
  while (out.length < qs.length) out.push(vals[order[order.length - 1]]);
  return out;
}

function makeTexture(data, w, h) {
  const tex = new THREE.DataTexture(data, w, h, THREE.RGBAFormat, THREE.HalfFloatType);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}

/**
 * Bake the planet's fields, resumably (yields every few rows; see ending-film.js):
 * `const surface = yield* bakePlanetSurface()`, then createSystem({ ..., surface }).
 *   tSurf   (512×256): terrain height h, ridge, rock grain, moisture
 *   tDetail (384×192): polar-cap edge noise, plankton field, convection cells, fine seams
 *   tAir    (384×192): cloud pattern c (before the cover threshold; cyclones included), streak, churn
 */
export function* bakePlanetSurface() {
  const half = THREE.DataUtils.toHalfFloat;
  const sn = createSimplex3(9127);
  const fbm = (x, y, z, oct) => {
    let v = 0, a = 0.5;
    for (let o = 0; o < oct; o++) { v += a * sn(x, y, z); x = x * 2.05 + 1.3; y = y * 2.05 + 1.3; z = z * 2.05 + 1.3; a *= 0.5; }
    return v;
  };
  const ridgeOf = v => { const r = 1 - Math.abs(v); return r * r * r * r * r * r; };
  const cyclone = (px, py, pz, c, radius) => {
    // A log-spiral cyclone centred on c (unit), turning with the hemisphere: t1 = normalize(c × up),
    // t2 = c × t1.
    let ax = -c[2], az = c[0];
    const al = Math.hypot(ax, az) || 1;
    ax /= al; az /= al;
    const t2x = c[1] * az, t2y = c[2] * ax - c[0] * az, t2z = -c[1] * ax;
    const dp = px * c[0] + py * c[1] + pz * c[2];
    const dx = px - c[0] * dp, dy = py - c[1] * dp, dz = pz - c[2] * dp;
    const u = dx * ax + dz * az, v = dx * t2x + dy * t2y + dz * t2z;
    const r = Math.hypot(u, v) / radius;
    if (r > 1.6) return 0;
    const th = Math.atan2(v, u) * Math.sign(c[1]);
    const arms = 0.5 + 0.5 * Math.cos(2 * (th + 2.6 * Math.log(r + 0.04)));
    return Math.pow(arms, 1.6) * Math.exp(-r * r * 1.6) * smoothstep(0.03, 0.09, r) * 1.3;
  };
  const norm3 = v => { const l = Math.hypot(v[0], v[1], v[2]); return [v[0] / l, v[1] / l, v[2] / l]; };
  const CY1 = norm3([0.55, 0.62, 0.56]);
  const CY2 = norm3([-0.62, -0.58, 0.52]);

  const surf = new Uint16Array(SURF_W * SURF_H * 4);
  const heights = new Float32Array(SURF_W * SURF_H);
  for (let j = 0; j < SURF_H; j++) {
    if (j % 3 === 0) yield;
    const lat = ((j + 0.5) / SURF_H - 0.5) * Math.PI;
    const y = Math.sin(lat), cl = Math.cos(lat);
    for (let i = 0; i < SURF_W; i++) {
      const lon = ((i + 0.5) / SURF_W - 0.5) * Math.PI * 2;
      const x = cl * Math.cos(lon), z = cl * Math.sin(lon);
      // Continents from a low-frequency field under a light warp, eroded coasts, ridged mountain
      // belts along the continental margins.
      const wx = x + 0.12 * sn(x * 2 + 4, y * 2 + 4, z * 2 + 4);
      const wy = y + 0.12 * sn(x * 2 + 9, y * 2 + 9, z * 2 + 9);
      const wz = z + 0.12 * sn(x * 2 - 3, y * 2 - 3, z * 2 - 3);
      const cont = sn(wx * 1.2, wy * 1.2, wz * 1.2) * 0.6 + sn(wx * 2.4 + 7, wy * 2.4 + 7, wz * 2.4 + 7) * 0.26;
      const erosion = fbm(x * 7 + 2, y * 7 + 2, z * 7 + 2, 3) * 0.17;
      const ridge = ridgeOf(sn(x * 5.2 + 2, y * 5.2 + 2, z * 5.2 + 2));
      const margin = smoothstep(0.08, 0.2, cont) * (1 - smoothstep(0.3, 0.55, cont));
      const k = (j * SURF_W + i) * 4;
      heights[j * SURF_W + i] = cont + erosion + 0.22 * ridge * margin;
      surf[k + 1] = half(ridge);
      surf[k + 2] = half(sn(x * 18, y * 18, z * 18) * 0.5 + 0.5);
      surf[k + 3] = half(sn(x * 2.6 + 7, y * 2.6 + 7, z * 2.6 + 7) * 0.5 + 0.5);
    }
  }
  // Heights by area (rows weighted by cos(latitude)): sea level (0) where ~63 % of the surface is
  // under water once the seas have risen, as on Earth; the land's relief scaled so only the top
  // ~1.5 % carries snow; the seas' depth so the open ocean is deep blue.
  yield;
  const hq = quantiles(heights, SURF_W, SURF_H, [0.06, 0.63, 0.985]);
  for (let j = 0; j < SURF_H; j++) {
    for (let i = 0; i < SURF_W; i++) {
      const h = heights[j * SURF_W + i];
      const hn = h >= hq[1] ? (h - hq[1]) / (hq[2] - hq[1]) * 0.42 : (h - hq[1]) / (hq[1] - hq[0]) * 0.3;
      surf[(j * SURF_W + i) * 4] = half(hn);
    }
  }
  const detail = new Uint16Array(DETAIL_W * DETAIL_H * 4);
  const cloudC = new Float32Array(DETAIL_W * DETAIL_H);
  const air = new Uint16Array(DETAIL_W * DETAIL_H * 4);
  for (let j = 0; j < DETAIL_H; j++) {
    if (j % 3 === 0) yield;
    const lat = ((j + 0.5) / DETAIL_H - 0.5) * Math.PI;
    const y = Math.sin(lat), cl = Math.cos(lat);
    const alat = Math.abs(y);
    const itcz = Math.exp(-((y / 0.06) ** 2)) * 0.34;
    const belts = smoothstep(0.56, 0.66, alat) * (1 - smoothstep(0.78, 0.88, alat)) * 0.42;
    const subtropic = smoothstep(0.22, 0.32, alat) * (1 - smoothstep(0.42, 0.52, alat));
    const base = 0.14 + itcz + belts - 0.24 * subtropic;
    for (let i = 0; i < DETAIL_W; i++) {
      const lon = ((i + 0.5) / DETAIL_W - 0.5) * Math.PI * 2;
      const x = cl * Math.cos(lon), z = cl * Math.sin(lon);
      const k = (j * DETAIL_W + i) * 4;
      detail[k] = half(0.035 * sn(x * 8, y * 8, z * 8) + 0.02 * sn(x * 23, y * 23, z * 23));
      detail[k + 1] = half(sn(x * 7, y * 7, z * 7) * 0.5 + 0.5 + 0.25 * sn(x * 19, y * 19, z * 19));
      detail[k + 2] = half(1 - Math.abs(sn(x * 3.1, y * 3.1, z * 3.1)));
      const f = 1 - Math.abs(sn(x * 6.3 + 3, y * 6.3 + 3, z * 6.3 + 3));
      detail[k + 3] = half(Math.pow(f, 12));
      // Clouds: stretched along longitude (a squeezed latitude axis) into streaks; bands broken up
      // by the streaks themselves, never solid stripes; fine cells; two cyclones.
      const cx = x + 0.08 * sn(x * 3 + 1, y * 3 + 1, z * 3 + 1);
      const cy = y + 0.08 * sn(x * 3 + 6, y * 3 + 6, z * 3 + 6);
      const cz = z + 0.08 * sn(x * 3 + 11, y * 3 + 11, z * 3 + 11);
      const streak = fbm(cx * 2.2, cy * 7.5, cz * 2.2, 3);
      const cells = fbm(cx * 11 + 3, cy * 11 + 3, cz * 11 + 3, 2);
      let c = base * (0.55 + 0.9 * smoothstep(-0.3, 0.4, streak)) + streak * 0.5 + cells * 0.22;
      c = Math.max(c, cyclone(x, y, z, CY1, 0.2) * 0.62, cyclone(x, y, z, CY2, 0.17) * 0.6);
      cloudC[j * DETAIL_W + i] = c;
      air[k + 1] = half(streak);
      air[k + 2] = half(fbm(x * 5, y * 5, z * 5, 2));
      air[k + 3] = half(1);
    }
  }
  // Cloud pattern by area: clear below the median (the cover threshold starts at 0.38), the
  // threshold's midpoint (0.59) at the 76th percentile, full cover from the 97th: the finished
  // planet is roughly a third cloud — white weather over a mostly clear blue world.
  yield;
  const cq = quantiles(cloudC, DETAIL_W, DETAIL_H, [0.5, 0.76, 0.97]);
  for (let k = 0; k < cloudC.length; k++) {
    const c = cloudC[k];
    air[k * 4] = half(c < cq[1] ? 0.38 + (c - cq[0]) / (cq[1] - cq[0]) * 0.21 : 0.59 + (c - cq[1]) / (cq[2] - cq[1]) * 0.21);
  }
  return { surf: makeTexture(surf, SURF_W, SURF_H), detail: makeTexture(detail, DETAIL_W, DETAIL_H), air: makeTexture(air, DETAIL_W, DETAIL_H) };
}

export function createSystem({ segments, surface }) {
  const group = new THREE.Group();

  // ---- the sun-like star
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
    tSurf: { value: surface.surf }, tDetail: { value: surface.detail }, tAir: { value: surface.air },
    uCool: { value: 0 }, uSteam: { value: 0 }, uOcean: { value: 0 }, uClouds: { value: 0 }, uLife: { value: 0 },
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
    spinQ.setFromAxisAngle(yAxis, 5.3 + frame.t * 0.018);
    planet.quaternion.copy(tiltQ).multiply(spinQ);
    // View-space quantities (camera matrices are current).
    tmp.copy(sunWorld).sub(planet.position).normalize();
    tmp.transformDirection(camera.matrixWorldInverse);
    planetUniforms.uSunV.value.copy(tmp);
    atmoUniforms.uSunV.value.copy(tmp);
    atmoUniforms.uCenterV.value.copy(planet.position).applyMatrix4(camera.matrixWorldInverse);
    planetUniforms.uCool.value = frame.cool;
    planetUniforms.uSteam.value = frame.steam;
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
    surface.surf.dispose();
    surface.detail.dispose();
    surface.air.dispose();
  }
  /** After a context loss: strip the old context's dispose hooks from the baked textures. */
  function forget(strip) {
    strip(surface.surf); strip(surface.detail); strip(surface.air);
  }
  return { group, update, dispose, forget };
}
