import { mkdir, copyFile } from 'node:fs/promises';
const here = new URL('./', import.meta.url);
await mkdir(new URL('vendor/', here), { recursive: true });
for (const name of ['three.module.js', 'three.core.js']) {
  await copyFile(new URL(`node_modules/three/build/${name}`, here), new URL(`vendor/${name}`, here));
}
await copyFile(new URL('node_modules/three/LICENSE', here), new URL('vendor/THREE-LICENSE.txt', here));
console.log('Three.js vendored locally; the game needs no CDN.');
