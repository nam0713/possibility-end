// Cover accent: the faint orbit the eight chapter nodes ride, the nodes themselves (crisp discs
// with a hairline ring; the selected one turns ice cyan — the theme colour — with a pulsing ring) and
// the singularity's white-hot glow.

import * as THREE from 'three';
import { C } from '../config.js';
import { TAU } from '../math.js';
import { RING } from '../formations/cover.js';
import { transform } from '../formations/common.js';
import { additive, createGlow, createPulseLines, polylineSegments } from './materials.js';
import { timeChunk } from '../particles/shaders.js';

export const NODE_COUNT = 8;
export const NODE_RADIUS = 0.042;

/**
 * World position of chapter node i (0-based) for orbit spin `spin` (rad). Free rotation:
 * spin = living time × RING.nodeOrbit.speed (+ an offset); focusNode turns it (see focus.js).
 */
export function nodePosition(i, spin, out) {
  const o = RING.nodeOrbit;
  const a = (i / NODE_COUNT) * TAU + o.phase + spin;
  return transform(o.matrix, Math.cos(a) * o.radius, 0, -Math.sin(a) * o.radius, out);
}

const nodeVertex = /* glsl */ `
attribute float aIndex;
uniform float uPixelScale;
uniform float uRadius;
uniform float uSelected;
uniform float uMinPx;
uniform float uFocus;
varying float vSel;
varying float vScale;
varying float vNear;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  vNear = clamp(1.0 - (-mv.z - uFocus) / 3.2, 0.35, 1.0);
  float sel = abs(aIndex - uSelected) < 0.5 ? 1.0 : 0.0;
  vSel = sel;
  vScale = sel > 0.5 ? 10.0 : 6.0;
  float px = max(uRadius * uPixelScale / max(0.1, -mv.z), uMinPx);
  gl_PointSize = px * 2.0 * vScale;
}
`;

const nodeFragment = /* glsl */ `
${timeChunk}
uniform float uOpacity;
uniform float uTime;
uniform vec3 uCold;
uniform vec3 uAccent;
varying float vSel;
varying float vScale;
varying float vNear;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r = length(q);
  if (r > 1.0) discard;
  float rn = r * vScale;               // distance in node radii
  float disc = 1.0 - smoothstep(0.7, 1.0, rn);
  float halo = exp(-rn * 1.8) * 0.22;
  float ring = exp(-pow((rn - 2.4) / 0.14, 2.0)) * 0.18;
  vec3 col = uCold * (disc * 0.95 + halo) * vNear + uCold * ring;
  if (vSel > 0.5) {
    float pulse = 0.5 + 0.5 * sin(uTime * qRate(2.4));
    float er = 3.0 + 0.5 * pulse;
    float accentRing = exp(-pow((rn - er) / 0.22, 2.0)) * (0.9 + 0.4 * pulse);
    col = mix(col, uAccent * (disc * 2.6 + halo * 1.6), 0.55) + uAccent * (accentRing + exp(-rn * 0.55) * 0.35);
  }
  gl_FragColor = vec4(col * uOpacity * (1.0 - smoothstep(0.85, 1.0, r)), 1.0);
}
`;

const scratch = [0, 0, 0];

export class CoverAccent {
  constructor() {
    this.group = new THREE.Group();
    // Orbit path with soft comets travelling along it.
    const pts = [];
    const p = [0, 0, 0];
    const o = RING.nodeOrbit;
    for (let k = 0; k < 240; k++) {
      const a = (k / 240) * TAU;
      transform(o.matrix, Math.cos(a) * o.radius, 0, -Math.sin(a) * o.radius, p);
      pts.push([p[0], p[1], p[2]]);
    }
    this.orbit = createPulseLines(polylineSegments(pts, { closed: true, tScale: 1 / (TAU * o.radius) }), {
      base: 0.085, pulse: 0.22, density: 3, width: 0.08, color: C.steel, pulseColor: C.ice,
    });
    this.group.add(this.orbit);

    // Nodes.
    this.positions = new Float32Array(NODE_COUNT * 3);
    const index = new Float32Array(NODE_COUNT);
    for (let i = 0; i < NODE_COUNT; i++) index[i] = i + 1;
    const g = new THREE.BufferGeometry();
    this.nodeAttr = new THREE.BufferAttribute(this.positions, 3).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.nodeAttr);
    g.setAttribute('aIndex', new THREE.BufferAttribute(index, 1));
    this.nodeUniforms = {
      uPixelScale: { value: 1000 },
      uRadius: { value: NODE_RADIUS },
      uSelected: { value: 0 },
      uMinPx: { value: 2.5 },
      uFocus: { value: 10 },
      uOpacity: { value: 0 },
      uTime: { value: 0 },
      uCold: { value: new THREE.Vector3(...C.white).multiplyScalar(0.9) },
      uAccent: { value: new THREE.Vector3(...C.ice).multiplyScalar(1.15) },
    };
    this.nodes = new THREE.Points(g, new THREE.ShaderMaterial({ name: 'CoverNodes', uniforms: this.nodeUniforms, vertexShader: nodeVertex, fragmentShader: nodeFragment, ...additive }));
    this.nodes.frustumCulled = false;
    this.nodes.renderOrder = 30;
    this.group.add(this.nodes);

    this.glow = createGlow({ core: C.core, halo: C.sun, scale: 0.3, intensity: 0.6, flicker: 0.06, breath: 0.06 });
    this.group.add(this.glow);
    this.spin = NaN;
  }

  update(ctx) {
    if (ctx.nodeSpin !== this.spin) {
      this.spin = ctx.nodeSpin;
      const p = scratch;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodePosition(i, ctx.nodeSpin, p);
        this.positions[i * 3] = p[0];
        this.positions[i * 3 + 1] = p[1];
        this.positions[i * 3 + 2] = p[2];
      }
      this.nodeAttr.needsUpdate = true;
    }
    const a = ctx.presence;
    this.orbit.material.uniforms.uOpacity.value = a;
    this.orbit.material.uniforms.uPhase.value = (ctx.time * 0.035) % 1;
    this.orbit.material.uniforms.uFocus.value = ctx.focus;
    const nu = this.nodeUniforms;
    nu.uOpacity.value = a;
    nu.uTime.value = ctx.gpuTime;
    nu.uSelected.value = ctx.selected;
    nu.uPixelScale.value = ctx.pixelScale;
    // Never smaller than ~2.4 buffer px, so nodes stay round even at a reduced pixel ratio.
    nu.uMinPx.value = Math.max(2.4, 2.2 * ctx.pixelRatio);
    nu.uFocus.value = ctx.focus;
    this.glow.material.uniforms.uOpacity.value = a;
    this.glow.material.uniforms.uTime.value = ctx.gpuTime;
  }
}
