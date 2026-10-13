import * as THREE from './vendor/three.module.js';

export { THREE };

function batchStaticGeometry(scene, exclusions) {
  scene.updateMatrixWorld(true);
  const batches = new Map();
  scene.traverse(object => {
    if (!object.isMesh || object.isInstancedMesh || Array.isArray(object.material)) return;
    for (let ancestor = object; ancestor; ancestor = ancestor.parent) {
      if (exclusions.has(ancestor)) return;
    }
    const key = `${object.material.uuid}/${object.castShadow}/${object.receiveShadow}`;
    if (!batches.has(key)) batches.set(key, []);
    batches.get(key).push(object);
  });
  for (const objects of batches.values()) {
    if (objects.length < 2) continue;
    const transformed = objects.map(object => {
      const geometry = object.geometry.clone().applyMatrix4(object.matrixWorld);
      if (!geometry.index) return geometry;
      const expanded = geometry.toNonIndexed();
      geometry.dispose();
      return expanded;
    });
    const count = transformed.reduce((sum, geometry) => sum + geometry.attributes.position.count, 0);
    const position = new Float32Array(count * 3);
    const normal = new Float32Array(count * 3);
    const uv = new Float32Array(count * 2);
    let vertex = 0;
    for (const geometry of transformed) {
      position.set(geometry.attributes.position.array, vertex * 3);
      normal.set(geometry.attributes.normal.array, vertex * 3);
      uv.set(geometry.attributes.uv.array, vertex * 2);
      vertex += geometry.attributes.position.count;
      geometry.dispose();
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(position, 3));
    geometry.setAttribute('normal', new THREE.BufferAttribute(normal, 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geometry.computeBoundingBox();
    geometry.computeBoundingSphere();
    const combined = new THREE.Mesh(geometry, objects[0].material);
    combined.name = `static-foundry-${objects[0].material.uuid}`;
    combined.castShadow = objects[0].castShadow;
    combined.receiveShadow = objects[0].receiveShadow;
    combined.matrixAutoUpdate = false;
    scene.add(combined);
    for (const object of objects) object.removeFromParent();
  }
}

// The foundry uses procedural geometry and textures; every playable surface is y=0.
export function createWorld(canvas) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x040914);
  scene.fog = new THREE.FogExp2(0x040914, 0.0026);

  const camera = new THREE.PerspectiveCamera(53, 1, 0.1, 650);
  camera.position.set(36, 40, 48);
  camera.lookAt(-7, 0, 0);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.65));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.16;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const material = (color, metalness = 0.65, roughness = 0.66) => new THREE.MeshStandardMaterial({ color, metalness, roughness });
  const graphite = material(0x182531);
  const dark = material(0x0b141f);
  const edge = material(0x344454, 0.72, 0.44);
  const cyan = new THREE.MeshBasicMaterial({ color: 0x4bbcc9, toneMapped: false });
  const cyanDim = new THREE.MeshBasicMaterial({ color: 0x184454, toneMapped: false });
  const amber = new THREE.MeshBasicMaterial({ color: 0xed9c5b, toneMapped: false });
  const pale = new THREE.MeshBasicMaterial({ color: 0xa5c9d0, toneMapped: false });
  const mesh = (geometry, mat, parent = scene, x = 0, y = 0, z = 0, shadow = false) => {
    const object = new THREE.Mesh(geometry, mat);
    object.position.set(x, y, z);
    object.castShadow = shadow;
    object.receiveShadow = shadow;
    parent.add(object);
    return object;
  };
  const boxGeometries = new Map();
  const box = (w, h, d, mat, parent, x, y, z, shadow = false) => {
    const key = `${w},${h},${d}`;
    if (!boxGeometries.has(key)) boxGeometries.set(key, new THREE.BoxGeometry(w, h, d));
    return mesh(boxGeometries.get(key), mat, parent, x, y, z, shadow);
  };
  const floorRing = (inner, outer, mat, parent = scene, height = 0.025, start = 0, length = Math.PI * 2, segments = 128) => {
    const object = mesh(new THREE.RingGeometry(inner, outer, segments, 1, start, length), mat, parent, 0, height, 0);
    object.rotation.x = -Math.PI / 2;
    return object;
  };

  scene.add(new THREE.HemisphereLight(0xb7d4e1, 0x10182c, 1.9));
  const keyLight = new THREE.DirectionalLight(0xb5d9e8, 2.7);
  keyLight.position.set(-22, 38, 18);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(1024, 1024);
  Object.assign(keyLight.shadow.camera, { left: -42, right: 42, top: 42, bottom: -42, near: 1, far: 110 });
  keyLight.shadow.normalBias = 0.035;
  keyLight.shadow.bias = -0.0004;
  scene.add(keyLight);
  const starLight = new THREE.DirectionalLight(0xffb575, 1.65);
  starLight.position.set(55, 28, -60);
  scene.add(starLight);
  const centerLight = new THREE.PointLight(0x37bdd8, 34, 42, 2);
  centerLight.position.set(0, 4, 0);
  scene.add(centerLight);

  // Deck: twelve inset metal sectors, restrained instrument markings and a solid rim.
  mesh(new THREE.CylinderGeometry(34, 34.5, 1.8, 128), graphite, scene, 0, -0.9, 0, true);
  mesh(new THREE.CylinderGeometry(34.5, 32.2, 2.4, 128), dark, scene, 0, -2.8, 0);
  floorRing(33.2, 34.15, edge);
  floorRing(32.9, 33.02, cyan);
  floorRing(27.3, 27.37, cyanDim);
  floorRing(11.8, 11.86, cyanDim);
  floorRing(5.1, 5.2, edge);
  const sectorMats = [material(0x202f3c, 0.62, 0.78), material(0x1b2935, 0.62, 0.78)];
  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2;
    const sector = floorRing(5.5, 32.65, sectorMats[i % 2], scene, 0.012, angle + 0.009, Math.PI / 6 - 0.018, 12);
    sector.receiveShadow = true;
    const seam = box(0.065, 0.025, 26.8, dark, scene, Math.sin(angle) * 19, 0.034, Math.cos(angle) * 19);
    seam.rotation.y = angle;
    for (let j = 0; j < 3; j++) {
      const markAngle = angle + (j - 1) * 0.033;
      const mark = box(0.12, 0.035, 0.65 + (j === 1 ? 0.3 : 0), j === 1 ? pale : edge, scene, Math.sin(markAngle) * 30.8, 0.05, Math.cos(markAngle) * 30.8);
      mark.rotation.y = markAngle;
    }
  }
  for (let i = 0; i < 64; i++) {
    const a = (i / 64) * Math.PI * 2;
    const marker = box(0.66, 0.07, 0.13, i % 8 === 0 ? amber : cyanDim, scene, Math.sin(a) * 33.7, 0.07, Math.cos(a) * 33.7);
    marker.rotation.y = a;
  }
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    const strut = box(1.3, 2.7, 3.8, edge, scene, Math.sin(a) * 34.7, -1.7, Math.cos(a) * 34.7);
    strut.rotation.y = a;
    const runningLight = box(0.58, 0.14, 2.8, i % 4 === 0 ? amber : cyanDim, scene, Math.sin(a) * 35.1, -0.27, Math.cos(a) * 35.1);
    runningLight.rotation.y = a;
  }

  const relayPoints = [{ x: -20, z: -12 }, { x: 20, z: -12 }, { x: 0, z: 23 }];
  // Paired thin power conduits lead the eye to the three objectives.
  for (const point of relayPoints) {
    const length = Math.hypot(point.x, point.z);
    const direction = Math.atan2(point.x, point.z);
    const lane = new THREE.Group();
    lane.rotation.y = direction;
    scene.add(lane);
    for (const offset of [-0.24, 0.24]) {
      box(0.055, 0.025, length - 7.7, cyanDim, lane, offset, 0.05, (length + 1.5) / 2);
    }
    for (let k = 7; k < length - 4; k += 3) {
      box(0.72, 0.025, 0.1, edge, lane, 0, 0.045, k);
    }
  }

  const obstacles = [
    { x: -9, z: -3, r: 2.1 }, { x: 10, z: -4, r: 2.1 },
    { x: -13, z: 12, r: 2.25 }, { x: 14, z: 13, r: 2.25 },
    { x: -2, z: -23, r: 2.1 }, { x: -27, z: 3, r: 2.1 }, { x: 27, z: 4, r: 2.1 }
  ];
  const coolingFins = new THREE.BoxGeometry(2.35, 0.13, 1.8);
  const coverBase = new THREE.CylinderGeometry(2, 2.1, 0.38, 8);
  for (let i = 0; i < obstacles.length; i++) {
    const { x, z } = obstacles[i];
    const tower = new THREE.Group();
    tower.position.set(x, 0, z);
    tower.rotation.y = (i % 3) * Math.PI / 4;
    scene.add(tower);
    mesh(coverBase, edge, tower, 0, 0.19, 0, true);
    box(2.5, 2.7, 2.1, graphite, tower, 0, 1.7, 0, true);
    box(1.66, 2.3, 0.07, dark, tower, 0, 1.7, 1.1);
    for (let k = 0; k < 6; k++) mesh(coolingFins, edge, tower, 0, 0.65 + k * 0.4, 0);
    box(1.8, 0.19, 1.7, dark, tower, 0, 3.13, 0, true);
    box(1.15, 0.05, 0.09, cyan, tower, 0, 3.25, 0.63);
    for (const side of [-1, 1]) {
      box(0.14, 1.1, 0.045, amber, tower, side * 0.97, 1.9, 1.13);
      box(0.11, 0.35, 0.055, amber, tower, side * 0.97, 0.95, 1.13);
    }
  }

  const labelTexture = (text) => {
    const surface = document.createElement('canvas');
    surface.width = 512; surface.height = 96;
    const context = surface.getContext('2d');
    context.fillStyle = 'rgba(4,12,22,.8)';
    context.fillRect(0, 0, 512, 96);
    context.fillStyle = '#57becb'; context.fillRect(0, 0, 5, 96);
    context.fillStyle = '#bbd5df';
    context.font = '500 28px monospace';
    context.textAlign = 'center'; context.textBaseline = 'middle';
    context.fillText(text, 258, 49);
    const texture = new THREE.CanvasTexture(surface);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  };

  const relayNames = ['01 / COMPUTE', '02 / MATTER', '03 / ENERGY'];
  const relays = relayPoints.map(({ x, z }, index) => {
    const group = new THREE.Group();
    group.position.set(x, 0, z); scene.add(group);
    mesh(new THREE.CylinderGeometry(2.45, 2.7, 0.3, 12), dark, group, 0, 0.15, 0, true);
    floorRing(2.72, 3.9, new THREE.MeshBasicMaterial({ color: 0x2b697a, transparent: true, opacity: 0.1, depthWrite: false }), group, 0.065);
    const ring = mesh(new THREE.TorusGeometry(3.05, 0.055, 6, 96), new THREE.MeshBasicMaterial({ color: 0x4b9bac, toneMapped: false }), group, 0, 0.11, 0);
    ring.rotation.x = -Math.PI / 2;
    floorRing(2.28, 2.36, edge, group, 0.32);
    const cradle = mesh(new THREE.CylinderGeometry(1.05, 1.4, 0.9, 6), edge, group, 0, 0.65, 0, true);
    cradle.rotation.y = Math.PI / 6;
    const coreMat = new THREE.MeshStandardMaterial({ color: 0x4fa9bc, emissive: 0x1b7f9d, emissiveIntensity: 1.2, metalness: 0.25, roughness: 0.32 });
    const core = mesh(new THREE.OctahedronGeometry(0.92, 0), coreMat, group, 0, 2.3, 0, true);
    const cage = mesh(new THREE.TorusGeometry(1.52, 0.065, 6, 48), edge, group, 0, 2.2, 0);
    cage.rotation.x = Math.PI / 2.8;
    const cage2 = mesh(new THREE.TorusGeometry(1.52, 0.038, 5, 48), cyanDim, group, 0, 2.2, 0);
    cage2.rotation.y = Math.PI / 2;
    for (let i = 0; i < 3; i++) {
      const a = i * Math.PI * 2 / 3;
      const leg = box(0.29, 1.8, 0.32, graphite, group, Math.sin(a) * 1.45, 1.22, Math.cos(a) * 1.45, true);
      leg.rotation.y = a;
      const diode = box(0.18, 0.34, 0.34, amber, group, Math.sin(a) * 1.45, 2.2, Math.cos(a) * 1.45);
      diode.rotation.y = a;
    }
    const beam = mesh(new THREE.CylinderGeometry(0.1, 0.55, 22, 16, 1, true), new THREE.MeshBasicMaterial({ color: 0x69d9e2, transparent: true, opacity: 0.16, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false }), group, 0, 12.4, 0);
    beam.visible = false;
    const label = new THREE.Sprite(new THREE.SpriteMaterial({ map: labelTexture(relayNames[index]), transparent: true, depthWrite: false, opacity: 0.8, toneMapped: false }));
    label.position.set(0, 4.8, 0); label.scale.set(6.4, 1.2, 1); group.add(label);
    return { x, z, group, ring, core, beam, label, cage, cage2 };
  });

  const portalGroup = new THREE.Group(); scene.add(portalGroup);
  mesh(new THREE.CylinderGeometry(3.9, 4.2, 0.3, 64), dark, portalGroup, 0, 0.15, 0, true);
  floorRing(3.75, 3.83, cyanDim, portalGroup, 0.32);
  const portalRing = mesh(new THREE.TorusGeometry(2.75, 0.21, 8, 96), new THREE.MeshStandardMaterial({ color: 0x28566e, emissive: 0x0d526b, emissiveIntensity: 0.9, roughness: 0.33, metalness: 0.7 }), portalGroup, 0, 3.05, 0, true);
  portalRing.rotation.y = -0.14;
  const portalCore = mesh(new THREE.IcosahedronGeometry(1.55, 1), new THREE.MeshStandardMaterial({ color: 0x12465e, emissive: 0x0f3d5b, emissiveIntensity: 0.7, roughness: 0.22, metalness: 0.65, transparent: true, opacity: 0.7, wireframe: true }), portalGroup, 0, 3.05, 0);
  for (const side of [-1, 1]) {
    box(0.75, 2.2, 1.1, edge, portalGroup, side * 3.1, 1.15, 0, true);
    box(0.4, 0.08, 1.16, amber, portalGroup, side * 3.1, 2.32, 0);
    box(1.3, 0.28, 1.8, graphite, portalGroup, side * 3.1, 0.44, 0, true);
  }
  const portal = { x: 0, z: 0, group: portalGroup, core: portalCore, ring: portalRing };

  // Deterministic starfield, with no downloadable skybox or large bitmap dependency.
  let seed = 815813;
  const random = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
  const positions = [], colors = [];
  const starColor = new THREE.Color();
  for (let i = 0; i < 1700; i++) {
    const a = random() * Math.PI * 2;
    const elevation = random() * 2 - 1;
    const distance = 190 + random() * 220;
    const radial = Math.sqrt(1 - elevation * elevation);
    positions.push(Math.cos(a) * radial * distance, elevation * distance, Math.sin(a) * radial * distance);
    starColor.setHSL(0.54 + random() * 0.13, 0.1 + random() * 0.3, 0.45 + random() * 0.48);
    colors.push(starColor.r, starColor.g, starColor.b);
  }
  const starsGeo = new THREE.BufferGeometry();
  starsGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  starsGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  const stars = new THREE.Points(starsGeo, new THREE.PointsMaterial({ size: 0.65, vertexColors: true, transparent: true, opacity: 0.8, sizeAttenuation: true, depthWrite: false, fog: false, toneMapped: false }));
  scene.add(stars);

  const haloCanvas = document.createElement('canvas'); haloCanvas.width = haloCanvas.height = 128;
  const haloContext = haloCanvas.getContext('2d');
  const gradient = haloContext.createRadialGradient(64, 64, 4, 64, 64, 64);
  gradient.addColorStop(0, 'rgba(255,186,106,0.8)');
  gradient.addColorStop(0.32, 'rgba(242,121,51,0.27)');
  gradient.addColorStop(0.62, 'rgba(159,61,22,0.08)');
  gradient.addColorStop(1, 'rgba(80,22,8,0)');
  haloContext.fillStyle = gradient; haloContext.fillRect(0, 0, 128, 128);
  const haloMap = new THREE.CanvasTexture(haloCanvas); haloMap.colorSpace = THREE.SRGBColorSpace;
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: haloMap, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false, toneMapped: false }));
  halo.position.set(87, 49, -151); halo.scale.set(90, 90, 1); scene.add(halo);
  const starMaterial = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: 'varying vec3 vPoint; varying vec3 vNormal; void main(){vPoint=position;vNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
    fragmentShader: `uniform float uTime;varying vec3 vPoint;varying vec3 vNormal;
      float hash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
      float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
      void main(){vec3 p=normalize(vPoint);vec3 flow=p*9.0+vec3(0,uTime*.018,uTime*.012);float n=noise(flow)*.52+noise(flow*2.7)*.28+noise(flow*7.0)*.14+noise(flow*19.0)*.06;float limb=pow(max(0.0,normalize(vNormal).z),.3);float heat=clamp(n*1.3+.08,0.0,1.0);vec3 c=mix(vec3(.78,.11,.012),vec3(1.0,.82,.46),heat);c*=.6+limb*.4;gl_FragColor=vec4(c,1.0);}`,
    toneMapped: false
  });
  const sun = mesh(new THREE.SphereGeometry(25, 48, 32), starMaterial, scene, 87, 49, -151);

  // A distant collector ring establishes the station's industrial scale.
  const orbit = new THREE.Group();
  orbit.position.set(-5, -14, -95); orbit.rotation.set(0.42, -0.38, -0.2); scene.add(orbit);
  const distantMetal = material(0x273844, 0.55, 0.65); distantMetal.fog = false;
  const distantDark = material(0x101b29, 0.48, 0.66); distantDark.fog = false;
  const orbitLight = new THREE.MeshBasicMaterial({ color: 0x24505e, toneMapped: false, fog: false });
  mesh(new THREE.TorusGeometry(76, 0.65, 6, 160), distantMetal, orbit);
  mesh(new THREE.TorusGeometry(77.4, 0.065, 4, 160), orbitLight, orbit);
  mesh(new THREE.TorusGeometry(74.5, 0.12, 4, 160), orbitLight, orbit);
  for (let i = 0; i < 28; i++) {
    const a = i / 28 * Math.PI * 2;
    const collector = new THREE.Group();
    collector.position.set(Math.cos(a) * 76, Math.sin(a) * 76, 0);
    collector.rotation.z = a; orbit.add(collector);
    box(7, 1.1, 1.4, distantMetal, collector, 0, 0, 0);
    for (const side of [-1, 1]) {
      box(10.4, 5.6, 0.35, distantDark, collector, 0, side * 5, 0);
      box(10.5, 0.12, 0.39, orbitLight, collector, 0, side * 7.7, 0);
      for (let j = -1; j <= 1; j++) box(0.12, 5.6, 0.39, distantMetal, collector, j * 3.3, side * 5, 0);
    }
    box(1.1, 0.22, 1.6, i % 7 === 0 ? amber : orbitLight, collector, 0, 0, 0.2);
  }
  // Identical collector panels share one draw call per geometry/material pair.
  orbit.updateMatrixWorld(true);
  const orbitInverse = orbit.matrixWorld.clone().invert();
  const batches = new Map();
  orbit.traverse(object => {
    if (!object.isMesh) return;
    const key = `${object.geometry.uuid}/${object.material.uuid}`;
    if (!batches.has(key)) batches.set(key, []);
    batches.get(key).push(object);
  });
  const instanceMatrix = new THREE.Matrix4();
  for (const objects of batches.values()) {
    if (objects.length < 3) continue;
    const instances = new THREE.InstancedMesh(objects[0].geometry, objects[0].material, objects.length);
    objects.forEach((object, index) => {
      instanceMatrix.multiplyMatrices(orbitInverse, object.matrixWorld);
      instances.setMatrixAt(index, instanceMatrix);
    });
    instances.instanceMatrix.needsUpdate = true;
    orbit.add(instances);
    for (const object of objects) object.removeFromParent();
  }
  // Quiet suspension cables below the platform leave the gameplay silhouette clear.
  for (let i = 0; i < 6; i++) {
    const a = i * Math.PI / 3;
    const pylon = new THREE.Group(); pylon.position.set(Math.sin(a) * 43, -7, Math.cos(a) * 43); scene.add(pylon);
    box(3, 12, 3, dark, pylon, 0, 0, 0);
    box(0.18, 9.8, 3.08, cyanDim, pylon, 0, 0, 0);
    box(3.4, 0.3, 3.4, edge, pylon, 0, 5.5, 0);
  }

  // Static meshes keep their materials and shadow roles, but submit as a handful
  // of baked batches. Gameplay actors are added by the caller after this pass.
  batchStaticGeometry(scene, new Set([sun, portalGroup, orbit, ...relays.map(relay => relay.group)]));

  const lookTarget = new THREE.Vector3(-7, 0, 0);
  const cameraGoal = new THREE.Vector3();
  const targetGoal = new THREE.Vector3();
  const skyPosition = new THREE.Vector3();
  function update(time, playerPos, mode, dt = 1 / 60) {
    starMaterial.uniforms.uTime.value = time;
    sun.rotation.y = time * 0.002;
    halo.material.opacity = 0.83 + Math.sin(time * 0.17) * 0.05;
    orbit.rotation.z = -0.2 + time * 0.0017;
    portalCore.rotation.y = time * 0.18;
    portalCore.rotation.z = Math.sin(time * 0.2) * 0.12;
    for (let i = 0; i < relays.length; i++) {
      const relay = relays[i];
      relay.core.position.y = 2.3 + Math.sin(time * 1.3 + i * 2) * 0.16;
      relay.core.rotation.y = time * 0.45 + i;
      relay.cage.rotation.z = time * 0.1;
      relay.cage2.rotation.x = time * 0.13 + i;
    }
    if (mode === 'menu') {
      cameraGoal.set(36 + Math.sin(time * 0.045) * 1.5, 40, 48);
      targetGoal.set(-7, 0, 0);
    } else {
      const px = playerPos?.x || 0, pz = playerPos?.z || 0;
      cameraGoal.set(px, 25.5, pz + 23.5);
      targetGoal.set(px, 0, pz);
    }
    const follow = 1 - Math.exp(-Math.min(dt, 0.1) * 5.5);
    camera.position.lerp(cameraGoal, follow);
    lookTarget.lerp(targetGoal, follow);
    camera.lookAt(lookTarget);
    // Sky objects are effectively infinitely distant. Their framing stays legible
    // as the camera changes from the oblique menu to the overhead combat view.
    camera.updateMatrixWorld();
    const skyDepth = 210;
    const halfHeight = skyDepth * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    skyPosition.set(halfHeight * camera.aspect * 0.61, halfHeight * 0.54, -skyDepth).applyMatrix4(camera.matrixWorld);
    sun.position.copy(skyPosition);
    halo.position.copy(skyPosition);
  }
  function resize() {
    const width = Math.max(1, canvas.clientWidth || window.innerWidth);
    const height = Math.max(1, canvas.clientHeight || window.innerHeight);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }
  resize();
  return { scene, camera, renderer, arenaRadius: 34, obstacles, relays, portal, update, resize, render: () => renderer.render(scene, camera) };
}
