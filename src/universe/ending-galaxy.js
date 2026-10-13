// “어느 평범한 은하” — one ordinary spiral galaxy grown from the hero node:
// a star-particle disk (a white-ice bulge, young ice-blue arms with bright cyan-white
// star-forming knots, a dim inter-arm field, slow differential rotation) over a procedural
// diffuse-light disk (arms, dark blue-grey dust lanes on their inner edges, a smooth bulge).
// All in the film's one cold hue family (ending-glsl.js PALETTE).
// Seen first whole, inclined; then the camera dives to its outskirts and the arms
// resolve into stars streaming past.
import * as THREE from 'three';
import { PALETTE, SIMPLEX } from './ending-glsl.js';
import { gauss } from './ending-math.js';
import { GAL_E1, GALAXY_NORMAL, GALAXY_RADIUS, HERO } from './ending-layout.js';

const ARM_PITCH = 0.34; // tan of the spiral pitch angle (≈ 19°)
const ARM_START = 0.1;
/** Disk scale length (galaxy radii). */
const DISK_SCALE = 0.4;

const POINT_VERT = /* glsl */ `
attribute vec4 aOrbit;  // radius (galaxy radii), angle, height, brightness
attribute vec3 aColor;
uniform float uTime, uOpacity, uScale, uPixelRatio, uNearFade, uRefDepth;
varying vec3 vColor;
void main() {
  float r = aOrbit.x;
  float ang = aOrbit.y + uTime * 0.03 / (r + 0.14);
  vec3 local = vec3(cos(ang) * r, aOrbit.z, sin(ang) * r) * uScale;
  vec4 mv = modelViewMatrix * vec4(local, 1.0);
  float depth = max(-mv.z, 1e-7);
  gl_Position = projectionMatrix * mv;
  // Stars are point sources: a small fixed image, flux falling with distance — so on the way in
  // the nearest resolve into individual bright stars streaming past.
  float flux = min(4.0, (uRefDepth * uRefDepth) / (depth * depth));
  gl_PointSize = (1.25 + 0.85 * min(aOrbit.w, 2.0) + 0.9 * smoothstep(1.2, 4.0, flux)) * uPixelRatio;
  float near = smoothstep(uNearFade * 0.3, uNearFade, depth);
  vColor = aColor * aOrbit.w * flux * uOpacity * near;
}
`;

const POINT_FRAG = /* glsl */ `
varying vec3 vColor;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float d2 = dot(p, p);
  if (d2 > 1.0) discard;
  gl_FragColor = vec4(vColor * exp(-d2 * 4.0) * (1.0 - d2), 1.0);
}
`;

const GLOW_VERT = /* glsl */ `
varying vec2 vP;
varying vec3 vView;
varying vec3 vNormalV;
void main() {
  vP = position.xy;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vView = mv.xyz;
  vNormalV = normalize(normalMatrix * vec3(0.0, 0.0, 1.0));
  gl_Position = projectionMatrix * mv;
}
`;

const GLOW_FRAG = /* glsl */ `
uniform float uOpacity, uTime;
varying vec2 vP;
varying vec3 vView;
varying vec3 vNormalV;
${SIMPLEX}
${PALETTE}
void main() {
  vec2 p = vP * 1.3;              // quad spans ±1.3 galaxy radii
  float r = length(p);
  if (r > 1.3) discard;
  // The plane is laid down with local z = −vP.y; match the star particles' angle and rotation.
  float th = atan(-p.y, p.x) - uTime * 0.03 / (r + 0.14);
  vec2 pr = vec2(cos(th), sin(th)) * r;
  // Two grand-design arms broken into flocculent spurs and star-forming knots.
  float wob = snoise(vec3(pr * 3.0, 2.0)) * 0.8 + snoise(vec3(pr * 7.5, 5.0)) * 0.3;
  float spiral = th - log(max(r, ${ARM_START.toFixed(3)}) / ${ARM_START.toFixed(3)}) / ${ARM_PITCH.toFixed(3)};
  float phase = 2.0 * spiral + wob;
  // The arms grow out of the bulge (no bright clumps where they start) and fade at the rim.
  float armOn = smoothstep(0.07, 0.26, r) * smoothstep(1.2, 0.72, r);
  float arm = pow(0.5 + 0.5 * cos(phase), 3.0) * armOn;
  float n = snoise(vec3(pr * 9.0, 1.3)) * 0.5 + 0.5;
  float spur = pow(0.5 + 0.5 * cos(phase + 1.9 + n * 2.8), 6.0) * armOn * 0.35;
  // Dust lanes run along the inner (concave) edge of each arm, broken into patches.
  float lane = pow(0.5 + 0.5 * cos(phase + 0.6), 7.0) * smoothstep(0.1, 0.24, r) * smoothstep(1.0, 0.35, r)
             * smoothstep(0.25, 0.65, n);
  // Star clouds, and (the brightest of them) cyan-white star-forming knots.
  float fine = snoise(vec3(pr * 30.0, 4.1)) * 0.5 + 0.5;
  float clumps = smoothstep(0.55, 0.95, fine);
  float hii = smoothstep(0.86, 0.99, fine) * arm;
  float disk = exp(-r / ${(DISK_SCALE * 0.82).toFixed(3)}) * smoothstep(1.3, 0.85, r);
  float halo = exp(-r / 0.55) * 0.08;
  float bulge = exp(-pow(r / 0.07, 0.9)) + 0.2 * exp(-r / 0.14);
  // A white-ice bulge, ice-blue arms, bright cyan-white knots.
  vec3 core = P_HI * 0.86;
  vec3 cool = vec3(0.5, 0.8, 1.0);
  vec3 knot = vec3(0.68, 0.94, 1.0);
  vec3 col = core * bulge * 1.3;
  col += mix(core * 0.5, cool, smoothstep(0.08, 0.42, r)) * (disk * (0.12 + 1.3 * (arm + spur) * (0.55 + 0.6 * n)) + halo);
  col += cool * clumps * (arm + spur) * disk * 0.9;
  col += knot * hii * disk * 1.05;
  // Dust lanes swallow the paler light first: dark, blue-grey.
  col *= mix(vec3(1.0), vec3(0.34, 0.41, 0.47), lane);
  // A thin disk seen at a grazing angle is brighter (a longer path through it): from near the
  // plane it gathers toward the band across the sky.
  float dist = length(vView);
  float cosv = abs(dot(vView / max(dist, 1e-9), vNormalV));
  float graze = clamp(0.42 / max(cosv, 0.1), 1.0, 2.4);
  // Close up, the diffuse light resolves into the stars themselves (the particles): fade it.
  float resolve = smoothstep(${(GALAXY_RADIUS * 0.06).toFixed(4)}, ${(GALAXY_RADIUS * 0.3).toFixed(4)}, dist);
  gl_FragColor = vec4(col * uOpacity * graze * resolve, 1.0);
}
`;

/**
 * One star of the galaxy's distribution (shared with the hero proto-galaxy so the
 * handover between them matches): radius in galaxy radii, angle, height, kind.
 */
export function sampleGalaxyStar(rand, out) {
  const k = rand();
  if (k < 0.13) {
    out.r = Math.abs(gauss(rand)) * 0.075 + 0.005;
    out.ang = rand() * Math.PI * 2;
    out.h = gauss(rand) * 0.035 * Math.max(0.2, 1 - out.r * 3);
    out.kind = 0; // bulge
    return out;
  }
  out.r = -Math.log(1 - rand() * 0.985) * DISK_SCALE + 0.03;
  // The rare far tail folds back into the outer disk (a clamp would pile it into a ring at the rim).
  if (out.r > 1.15) out.r = 0.45 + ((out.r - 1.15) % 0.7);
  const inArm = rand() < 0.64;
  const base = Math.log(Math.max(out.r, ARM_START) / ARM_START) / ARM_PITCH;
  const armIndex = rand() < 0.5 ? 0 : Math.PI;
  // Arms are tight in the disk and dissolve into the bulge toward the centre.
  const loose = 1 + 3.5 * Math.max(0, 1 - (out.r - 0.08) / 0.2);
  const spread = inArm ? gauss(rand) * (0.12 + 0.08 * rand()) * loose : rand() * Math.PI * 2;
  out.ang = base + armIndex + spread;
  out.h = gauss(rand) * (0.008 + 0.012 * out.r);
  out.kind = inArm ? 1 : 2; // arm / inter-arm
  return out;
}

/** Fill star orbits and colours for indices [i0, i1) (resumable: see ending-film.js). */
export function fillGalaxyStars(rand, orbit, color, i0, i1) {
  const star = { r: 0, ang: 0, h: 0, kind: 0 };
  for (let i = i0; i < i1; i++) {
    sampleGalaxyStar(rand, star);
    let bright, c0, c1, c2;
    if (star.kind === 0) {
      // Bulge: old, dense and white-ice.
      bright = (0.3 + rand() * 0.45) * 0.85;
      c0 = 0.84; c1 = 0.95; c2 = 1.0;
    } else {
      // Disk: young ice-blue stars light the arms; the older field is pale and dim.
      const young = star.kind === 1 && rand() < 0.45;
      bright = young ? 0.32 + Math.pow(rand(), 4) * 2.4 : 0.1 + rand() * 0.22;
      if (young) { c0 = 0.55; c1 = 0.82; c2 = 1.0; }
      else if (rand() < 0.5) { c0 = 0.84; c1 = 0.93; c2 = 1.0; }
      else { c0 = 0.72; c1 = 0.87; c2 = 1.0; }
      // Star-forming knots: bright cyan-white.
      if (young && rand() < 0.06) { c0 = 0.68; c1 = 0.94; c2 = 1.0; bright *= 1.3; }
    }
    orbit[i * 4] = star.r; orbit[i * 4 + 1] = star.ang; orbit[i * 4 + 2] = star.h; orbit[i * 4 + 3] = bright;
    color[i * 3] = c0; color[i * 3 + 1] = c1; color[i * 3 + 2] = c2;
  }
}

/**
 * @param {{count:number, orbit:Float32Array, color:Float32Array}} opts  star data from fillGalaxyStars
 */
export function createGalaxy({ count, orbit, color }) {
  const group = new THREE.Group();
  // Local frame: X = e1, Y = galactic normal, Z = X × Y.
  const X = new THREE.Vector3(...GAL_E1);
  const Y = new THREE.Vector3(...GALAXY_NORMAL);
  const Z = new THREE.Vector3().crossVectors(X, Y);
  group.matrixAutoUpdate = false;
  group.matrix.makeBasis(X, Y, Z).setPosition(HERO[0], HERO[1], HERO[2]);
  group.matrixWorldNeedsUpdate = true;

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
  geometry.setAttribute('aOrbit', new THREE.BufferAttribute(orbit, 4));
  geometry.setAttribute('aColor', new THREE.BufferAttribute(color, 3));
  geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e6);

  const pointUniforms = {
    uTime: { value: 0 }, uOpacity: { value: 0 }, uScale: { value: GALAXY_RADIUS },
    uPixelRatio: { value: 1 }, uNearFade: { value: 0.002 }, uRefDepth: { value: 0.4 },
  };
  const points = new THREE.Points(geometry, new THREE.ShaderMaterial({
    vertexShader: POINT_VERT, fragmentShader: POINT_FRAG, uniforms: pointUniforms,
    transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
  }));
  points.frustumCulled = false;
  points.renderOrder = 2;

  const glowUniforms = { uOpacity: { value: 0 }, uTime: { value: 0 } };
  const glowGeometry = new THREE.PlaneGeometry(2, 2);
  const glow = new THREE.Mesh(glowGeometry, new THREE.ShaderMaterial({
    vertexShader: GLOW_VERT, fragmentShader: GLOW_FRAG, uniforms: glowUniforms,
    transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
    side: THREE.DoubleSide,
  }));
  // The plane geometry is in XY; lay it into the galactic plane (local XZ).
  glow.rotation.x = -Math.PI / 2;
  glow.scale.setScalar(GALAXY_RADIUS * 1.3);
  glow.frustumCulled = false;
  glow.renderOrder = 1;
  group.add(glow, points);

  function update(frame, view, camDistanceToPlane) {
    group.visible = frame.galaxy > 0.001;
    if (!group.visible) return;
    pointUniforms.uTime.value = frame.t;
    pointUniforms.uOpacity.value = frame.galaxy * frame.galaxyStars * view.galaxyGain;
    pointUniforms.uPixelRatio.value = view.pixelRatio;
    // Only the stars right at the lens fade: the rest resolve as we dive in.
    pointUniforms.uNearFade.value = Math.max(1e-6, view.cameraDistance * 0.3);
    // Flux reference: the establishing distance, so the whole galaxy reads at once.
    pointUniforms.uRefDepth.value = Math.max(0.05, Math.min(0.45, view.cameraDistance));
    glowUniforms.uTime.value = frame.t;
    // The diffuse sheet only reads from outside; it hands over to the sky band inside.
    const outside = Math.min(1, Math.max(0, (camDistanceToPlane - 0.003) / 0.006));
    glowUniforms.uOpacity.value = frame.galaxyGlow * 0.5 * outside;
    glow.visible = glowUniforms.uOpacity.value > 0.001;
  }

  function dispose() {
    geometry.dispose();
    points.material.dispose();
    glowGeometry.dispose();
    glow.material.dispose();
  }
  return { group, update, dispose };
}
