// Bundles the three.js universe (src/universe/*.js, ES modules importing 'three')
// into one tree-shaken, minified classic script: src/generated/universe.js.
// The main `npm run build` only inlines that generated file, so the site build
// itself still needs no npm packages. Run `npm install` in tools/ once, then:
//
//   node tools/build-universe.mjs                 (site bundle)
//   node tools/build-universe.mjs --watch
//   node tools/build-universe.mjs --entry tools/lab/x.entry.js --out tools/lab/x.bundle.js --dev
import * as esbuild from 'esbuild';
import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (name, fallback) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : fallback; };
const entry = path.resolve(root, opt('entry', 'src/universe/index.js'));
const out = path.resolve(root, opt('out', 'src/generated/universe.js'));
const dev = args.includes('--dev');
const license = (await readFile(path.join(root, 'tools/node_modules/three/LICENSE'), 'utf8')).trim();

await mkdir(path.dirname(out), { recursive: true });
const options = {
  entryPoints: [entry],
  outfile: out,
  bundle: true,
  format: 'iife',
  target: ['es2020', 'chrome100', 'safari15', 'firefox100'],
  minify: !dev,
  sourcemap: false,
  legalComments: 'none',
  nodePaths: [path.join(root, 'tools/node_modules')],
  // The output is inlined into a <script> element in index.html.
  banner: { js: `/* Universe — three.js r186 (MIT). ${license.split('\n')[0]} */` },
  define: { 'process.env.NODE_ENV': dev ? '"development"' : '"production"' },
  logLevel: 'info',
  metafile: true,
};
if (args.includes('--watch')) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  console.log(`Watching ${path.relative(root, entry)} → ${path.relative(root, out)}`);
} else {
  const result = await esbuild.build(options);
  const bytes = Object.values(result.metafile.outputs)[0].bytes;
  console.log(`Universe bundle: ${path.relative(root, out)} ${(bytes / 1024).toFixed(0)} KB`);
}
