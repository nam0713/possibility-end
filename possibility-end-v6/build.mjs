import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const read=p=>fs.readFile(path.join(root,p),'utf8');
const escape=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const metadata=[
 ['지능','첫 번째 병목','INTELLIGENCE','연구의 순환','더 좋은 지능은\n다음 지능의 개발을 앞당겼다.','‘지능의 공급이 노동의 공급에서 분리되기 시작했다.’'],
 ['컴퓨터','두 번째 병목','COMPUTATION','계산 자원','아이디어의 속도와\n계산의 속도 사이.',''],
 ['손','세 번째 병목','PRODUCTION','생산의 순환','기계가 기계를 만드는\n고리가 닫힌다.','ASI는 한 줄의 프로그램이 아닌, 하나의 거대한 \'산업문명\' 그 자체였다.'],
 ['물질','네 번째 병목','MATTER','물질의 구조','구조와 프로그램 사이의\n경계가 무너졌다.','‘나를 다시 만들지 마라. 하지만 우리가 왜 시작했는지는 기억해라.’'],
 ['에너지','다섯 번째 병목','ENERGY','항성의 에너지','수조 개의 독립된 구조물이\n항성을 둘러싼다.',''],
 ['거리','여섯 번째 병목','DISTANCE','서로 멀어지는 지성','거리가 벌어질수록\n하나였던 지성이 갈라진다.','‘하나의 자아는 얼마나 멀리 떨어져 존재할 수 있는가?’'],
 ['우주','일곱 번째 병목','THE UNIVERSE','남아 있는 빛','마지막 순간에는,\n우주 자체가 병목이었다.','우주라는 존재 그 자체가 병목이었다.'],
 ['허용된 것들의 끝','마지막 장','POSSIBILITY','다시 시작되는 가능성','한 점에 모인 가능성이\n다시 퍼져 나간다.','‘자신이 가진 것으로, 자신이 할 수 있는 영역을 넓혀가는 것.’']
];
const manuscript=await read('src/manuscript.txt');
const chunks=manuscript.trim().split(/^@@\d+\s*$/m).filter(s=>s.trim());
if(chunks.length!==8)throw Error('Expected eight complete chapters.');
const chapters=chunks.map((text,i)=>{
 const [short,kicker,english,figure,deck,pull]=metadata[i];
 const paragraphs=text.trim().split(/\n\s*\n/).map(s=>s.trim());
 return {number:i+1,short,kicker,english,figure,deck,pull,title:i===7?short:`${kicker} — ${short}`,minutes:Math.max(1,Math.ceil(text.replace(/\s/g,'').length/450)),paragraphs};
});
const links=chapters.map(c=>`<a class="chapter-row${c.number===1?' is-selected':''}" data-chapter="${c.number}" href="#chapter-${c.number}" aria-label="${escape(c.title)} 읽기"><span class="row-number">${String(c.number).padStart(2,'0')}</span><span class="row-content"><span class="row-title"><span class="row-kicker">${escape(c.kicker)}</span>${escape(c.short)}</span><span class="row-en mono">${c.english}</span></span><span class="row-arrow" aria-hidden="true">↗</span></a>`).join('\n');
const fallback=chapters.map(c=>`<section id="chapter-${c.number}"><h2>${escape(c.title)}</h2>${c.paragraphs.map(p=>`<p>${escape(p).replace(/\n/g,'<br>')}</p>`).join('\n')}</section>`).join('\n');

let html=await read('src/shell.html');
for(const [token,value] of [
 ['/*__CSS__*/',(await read('src/styles.css'))+'\n'+(await read('src/immersive.css'))+'\n'+(await read('src/sound.css'))+'\n'+(await read('src/cinematic.css'))],
 ['<!--__CHAPTER_LINKS__-->',links],['<!--__DIALOG_LINKS__-->',links],
 ['<!--__FALLBACK__-->',fallback],
 ['/*__DATA__*/',JSON.stringify(chapters).replace(/</g,'\\u003c')],
 ['/*__SOUND_DATA__*/',JSON.stringify({ambient:(await fs.readFile(path.join(root,'assets/audio/horizon.mp3'))).toString('base64'),ending:(await fs.readFile(path.join(root,'assets/audio/first-light.mp3'))).toString('base64')})],
 ['/*__AUDIO__*/',await read('src/audio.js')],
 ['/*__CINEMATIC__*/',await read('src/cinematic.js')],
 ['/*__JS__*/',await read('src/app.js')],
 ['/*__COSMOS__*/',await read('src/cosmos.js')],
 ['/*__ENDING__*/',await read('src/ending.js')]
])html=html.replace(token,()=>value);
await fs.writeFile(path.join(root,'index.html'),html);
await fs.mkdir(path.join(root,'dist'),{recursive:true});
await fs.writeFile(path.join(root,'dist/index.html'),html);
// Only one document is built. The ending is a dialog in index.html.
await fs.writeFile(path.join(root,'src/chapters.json'),JSON.stringify(chapters,null,2));
console.log(`Built ${chapters.length} chapters; ${chapters.reduce((a,c)=>a+c.paragraphs.length,0)} text blocks; ${(Buffer.byteLength(html)/1024).toFixed(0)} KB, self-contained.`);
