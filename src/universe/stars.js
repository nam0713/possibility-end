// Background starfield: a static, deterministic shell of distant stars. Rendered with fixed pixel
// sizes (no depth attenuation); they shift only through camera rotation, which reads as depth.

import * as THREE from 'three';
import { starFragment, starVertex } from './particles/shaders.js';
import { mulberry32, TAU } from './math.js';

export class Starfield {
  constructor(count) {
    const rng = mulberry32(7741);
    const pos = new Float32Array(count * 3);
    const look = new Uint8Array(count * 4);
    const seeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const z = rng() * 2 - 1;
      const a = rng() * TAU;
      const s = Math.sqrt(1 - z * z);
      // Slight concentration toward a faint galactic band.
      const band = rng() < 0.35 ? 0.28 : 1;
      const r = 60 + rng() * 30;
      pos[i * 3] = s * Math.cos(a) * r;
      pos[i * 3 + 1] = z * band * r;
      pos[i * 3 + 2] = s * Math.sin(a) * r;
      const m = Math.pow(rng(), 5.5); // few bright stars
      const tone = rng();
      // Display-space colours, one hue family (~190–210°): mostly cold white, some ice cyan, a few
      // deeper blue — varied in luminance and saturation, never in hue.
      const [cr, cg, cb] = tone < 0.12 ? [0.66, 0.9, 0.95] : tone < 0.3 ? [0.6, 0.78, 0.9] : [0.9, 0.95, 0.97];
      const lum = 0.22 + 0.78 * Math.pow(rng(), 2.2) * (0.4 + m);
      look[i * 4] = Math.round(Math.min(1, cr * lum) * 255);
      look[i * 4 + 1] = Math.round(Math.min(1, cg * lum) * 255);
      look[i * 4 + 2] = Math.round(Math.min(1, cb * lum) * 255);
      look[i * 4 + 3] = Math.round(m * 255);
      seeds[i] = rng();
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aLook', new THREE.BufferAttribute(look, 4, true));
    g.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
    this.positions = pos;
    this.look = look;
    this.count = count;
    this.uniforms = {
      uTime: { value: 0 },
      uPixelRatio: { value: 1 },
      uTwinkle: { value: 1 },
      uGain: { value: 0.55 },
    };
    this.material = new THREE.ShaderMaterial({
      name: 'UniverseStars',
      uniforms: this.uniforms,
      vertexShader: starVertex,
      fragmentShader: starFragment,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      blending: THREE.CustomBlending,
      blendEquation: THREE.AddEquation,
      blendSrc: THREE.OneFactor,
      blendDst: THREE.OneFactor,
    });
    this.points = new THREE.Points(g, this.material);
    this.points.frustumCulled = false;
    this.points.renderOrder = 1;
    this.geometry = g;
  }

  /** Linear colours for the ending handover. */
  snapshot(positions, colors, offset) {
    const g = this.uniforms.uGain.value;
    for (let i = 0; i < this.count; i++) {
      const o = (offset + i) * 3;
      positions[o] = this.positions[i * 3];
      positions[o + 1] = this.positions[i * 3 + 1];
      positions[o + 2] = this.positions[i * 3 + 2];
      const m = this.look[i * 4 + 3] / 255;
      const e = (0.05 + 0.95 * m * m) * g;
      for (let k = 0; k < 3; k++) {
        const c = this.look[i * 4 + k] / 255;
        colors[o + k] = c * c * e;
      }
    }
  }

  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}
