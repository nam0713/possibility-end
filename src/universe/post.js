// Post chain: RenderPass (HDR light on black) → UnrealBloomPass (reduced resolution, soft knee) →
// FinishPass (an OutputPass whose shader adds a filmic highlight roll-off, the deep-space background
// composed in display space, vignette, veil dimming, fades and film grain).

import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { HEX, POST } from './config.js';
import { hexToSrgb } from './math.js';

const finishFragment = /* glsl */ `
precision highp float;
uniform sampler2D tDiffuse;
uniform float toneMappingExposure;
uniform vec2 uResolution;
uniform float uTime;
uniform float uGrain;
uniform float uVignette;
uniform float uDim;
uniform float uFade;
uniform float uBlack;
uniform vec3 uBg;
uniform vec3 uBgLift;
uniform vec2 uGlowCenter;
uniform float uGlowRadius;
#include <colorspace_pars_fragment>
varying vec2 vUv;

// Exponential shoulder: linear in the darks, soft roll-off, hot highlights drift toward white.
vec3 filmic(vec3 c) {
  c *= toneMappingExposure;
  vec3 m = 1.0 - exp(-c);
  float peak = max(c.r, max(c.g, c.b));
  float top = max(m.r, max(m.g, m.b));
  return mix(m, vec3(top), smoothstep(1.0, 5.0, peak) * 0.55);
}

float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

void main() {
  vec3 light = texture2D(tDiffuse, vUv).rgb;
  float aspect = uResolution.x / uResolution.y;
  vec2 d = (vUv - 0.5) * vec2(aspect, 1.0);
  float vig = 1.0 - uVignette * smoothstep(0.32, 1.15, length(d) * 1.2);
  vec3 col = filmic(max(light, 0.0) * (uDim * uFade * vig));
  #ifdef SRGB_TRANSFER
  col = sRGBTransferOETF(vec4(col, 1.0)).rgb;
  #endif
  // Deep-space background, composed in display space (screen blend) so #04070b stays exact.
  vec2 g = (vUv - uGlowCenter) * vec2(aspect, 1.0) / uGlowRadius;
  float glow = exp(-dot(g, g) * 1.6);
  vec3 bg = (uBg + uBgLift * glow * uDim) * (0.78 + 0.22 * vig);
  col = 1.0 - (1.0 - bg) * (1.0 - col);
  float n = hash(vUv * uResolution + fract(uTime * 7.31) * 131.0) - 0.5;
  col += n * uGrain * (0.55 + col.g);
  gl_FragColor = vec4(col * uBlack, 1.0);
}
`;

class FinishPass extends OutputPass {
  constructor() {
    super();
    Object.assign(this.uniforms, {
      uResolution: { value: new THREE.Vector2(1, 1) },
      uTime: { value: 0 },
      uGrain: { value: POST.grain },
      uVignette: { value: POST.vignette },
      uDim: { value: 1 },
      uFade: { value: 1 },
      uBlack: { value: 1 },
      uBg: { value: new THREE.Vector3(...hexToSrgb(HEX.space)) },
      uBgLift: { value: new THREE.Vector3(0, 0, 0) },
      uGlowCenter: { value: new THREE.Vector2(0.5, 0.5) },
      uGlowRadius: { value: 0.5 },
    });
    this.material.fragmentShader = finishFragment;
    // Set the defines OutputPass would derive on its first render (sRGB output, no tone mapping:
    // the engine's renderer settings), so the program can be compiled ahead of time.
    this._outputColorSpace = THREE.SRGBColorSpace;
    this._toneMapping = THREE.NoToneMapping;
    this.material.defines = { SRGB_TRANSFER: '' };
    this.material.needsUpdate = true;
  }
}

// The same attributes as three's FullScreenQuad (position + uv, no normals): program keys depend on
// the geometry's attributes, and precompiled programs must match the ones the passes will use.
const quad = new THREE.BufferGeometry();
quad.setAttribute('position', new THREE.Float32BufferAttribute([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
quad.setAttribute('uv', new THREE.Float32BufferAttribute([0, 2, 0, 0, 2, 0], 2));

export class PostChain {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;
    this.composer = new EffectComposer(renderer);
    this.composer.renderToScreen = true;
    this.renderPass = new RenderPass(scene, camera);
    this.renderPass.clearColor = new THREE.Color(0, 0, 0);
    this.renderPass.clearAlpha = 1;
    this.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), POST.bloomStrength, POST.bloomRadius, POST.bloomThreshold);
    this.bloom.highPassUniforms.smoothWidth.value = POST.bloomKnee;
    this.finish = new FinishPass();
    // Post-bloom overlay scene (things that must not be bloomed over, e.g. an event horizon).
    this.overlay = new THREE.Scene();
    this.overlayPass = new RenderPass(this.overlay, camera);
    this.overlayPass.clear = false;
    this.overlayPass.enabled = false;
    this.composer.addPass(this.renderPass);
    this.composer.addPass(this.bloom);
    this.composer.addPass(this.overlayPass);
    this.composer.addPass(this.finish);
    this.bloomScale = 0.5;
    this.width = 1;
    this.height = 1;
    this.pixelRatio = 1;
  }

  get uniforms() {
    return this.finish.uniforms;
  }

  setSize(width, height, pixelRatio) {
    this.width = width;
    this.height = height;
    this.pixelRatio = pixelRatio;
    this.composer.setPixelRatio(pixelRatio);
    this.composer.setSize(width, height);
    this.finish.uniforms.uResolution.value.set(width * pixelRatio, height * pixelRatio);
    this._sizeBloom();
  }

  /** Bloom resolution is a fraction of the drawing buffer (UnrealBloomPass halves it again). */
  setBloom(enabled, scale) {
    this.bloom.enabled = enabled && scale > 0;
    if (scale > 0 && scale !== this.bloomScale) {
      this.bloomScale = scale;
      this._sizeBloom();
    }
  }

  _sizeBloom() {
    const w = Math.max(32, Math.round(this.width * this.pixelRatio * this.bloomScale * 2));
    const h = Math.max(32, Math.round(this.height * this.pixelRatio * this.bloomScale * 2));
    this.bloom.setSize(w, h);
  }

  render(dt) {
    this.composer.render(dt);
  }

  /** Every full-screen ShaderMaterial of the bloom pass, as a scene to compile ahead of time. */
  passScene() {
    const scene = new THREE.Scene();
    const b = this.bloom;
    const mats = [b.materialHighPassFilter, ...(b.separableBlurMaterials || []), b.compositeMaterial, b.blendMaterial].filter(Boolean);
    for (const m of mats) {
      const mesh = new THREE.Mesh(quad, m);
      mesh.frustumCulled = false;
      scene.add(mesh);
    }
    return scene;
  }

  /** The finish pass (drawn to the screen) as a scene to compile ahead of time. */
  finishScene() {
    const scene = new THREE.Scene();
    const mesh = new THREE.Mesh(quad, this.finish.material);
    mesh.frustumCulled = false;
    scene.add(mesh);
    return scene;
  }

  dispose() {
    this.bloom.dispose();
    this.finish.dispose();
    this.composer.dispose();
  }
}
