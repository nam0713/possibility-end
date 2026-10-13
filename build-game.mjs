import { mkdir, copyFile } from 'node:fs/promises';
const root=new URL('./',import.meta.url);
await mkdir(new URL('dist/game/vendor/',root),{recursive:true});
for(const name of ['index.html','style.css','game.js','world.js','rules.js','audio.js','vendor/three.module.js','vendor/three.core.js','vendor/THREE-LICENSE.txt']){
  await copyFile(new URL(`game/${name}`,root),new URL(`dist/game/${name}`,root));
}
console.log('Built LAST LIGHT → dist/game/ (local Three.js, no CDN required).');
