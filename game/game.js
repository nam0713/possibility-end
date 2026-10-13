import { THREE, createWorld } from './world.js';
import { GameAudio } from './audio.js';
import { RELAY_COSTS, RELAY_SECONDS, RELAY_RADIUS, newStats, applyUpgrade, xpNeeded, difficultyAt, clampPosition, segmentHit, pickUpgrades } from './rules.js';

const $=id=>document.getElementById(id);
const ui=Object.fromEntries(['scene','menu','start-button','hud','health-fill','health-text','xp-fill','level-text','time-text','scrap-text','relay-count','objective-title','objective-detail','interact-prompt','dash-fill','pulse-fill','upgrade-screen','upgrade-options','pause-screen','resume-button','restart-button','end-screen','end-title','end-description','end-stats','retry-button','menu-button','sound-button','toast','boss-hud','boss-fill','boss-name','hit-flash','touch-controls','joystick-zone','joystick-knob','touch-fire','touch-dash','touch-interact','loading'].map(id=>[id,$(id)]));
const audio=new GameAudio();
let world;
try { world=createWorld(ui.scene); }
catch(error) {
  ui.loading.textContent='3D 화면을 시작할 수 없습니다. 하드웨어 가속을 켠 Chrome 또는 Edge에서 다시 열어주세요.';
  console.error(error);
  throw error;
}
const {scene,camera,renderer}=world;
for(const r of world.relays){
  const zone=new THREE.Mesh(new THREE.RingGeometry(RELAY_RADIUS-.09,RELAY_RADIUS,96),new THREE.MeshBasicMaterial({color:0xffc68b,transparent:true,opacity:.65,side:THREE.DoubleSide,depthWrite:false}));
  zone.rotation.x=-Math.PI/2;zone.position.set(r.x,.065,r.z);zone.visible=false;scene.add(zone);r.zone=zone;
}
const V=THREE.Vector3;
const geometry={
  box:new THREE.BoxGeometry(1,1,1), sphere:new THREE.IcosahedronGeometry(1,1),
  octa:new THREE.OctahedronGeometry(1), bullet:new THREE.BoxGeometry(.13,.13,1.1),
  cylinder:new THREE.CylinderGeometry(1,1,1,12), ring:new THREE.TorusGeometry(1,.045,5,48),
  flatRing:new THREE.RingGeometry(.91,1,48), cone:new THREE.ConeGeometry(1,1,4),
};
const material=(color,emissive=0,intensity=.5)=>new THREE.MeshStandardMaterial({color,emissive,emissiveIntensity:intensity,metalness:.65,roughness:.4});
const mats={
  hull:material(0xd6e3df,0x1a3034,.2), dark:material(0x17252b), cyan:material(0x64ffff,0x46deda,2),
  enemy:material(0x704646,0x76201b,.35), red:material(0xff6a4f,0xff3f28,2), gold:material(0xffd18a,0xffa043,1.6),
  shot:new THREE.MeshBasicMaterial({color:0xb5fff5}), hostile:new THREE.MeshBasicMaterial({color:0xff7054}),
  pickup:new THREE.MeshBasicMaterial({color:0x62e6df}), health:new THREE.MeshBasicMaterial({color:0xa5f090}),
  white:new THREE.MeshBasicMaterial({color:0xffffff}),
};
const dynamic=new THREE.Group();scene.add(dynamic);
const mesh=(geo,mat,parent,pos=[0,0,0],scale=[1,1,1])=>{
  const m=new THREE.Mesh(geo,mat);m.position.set(...pos);m.scale.set(...scale);m.castShadow=true;
  if(parent)parent.add(m);return m;
};
function robot() {
  const g=new THREE.Group();
  mesh(geometry.box,mats.hull,g,[0,.88,0],[.88,.65,.66]);
  mesh(geometry.box,mats.dark,g,[0,1.35,.06],[.6,.35,.55]);
  mesh(geometry.box,mats.cyan,g,[0,1.38,.35],[.46,.095,.035]);
  mesh(geometry.box,mats.dark,g,[0,.85,-.36],[.65,.54,.25]);
  const legs=[];
  for(const s of [-1,1]) {
    const leg=new THREE.Group();leg.position.set(s*.3,.37,0);g.add(leg);legs.push(leg);
    mesh(geometry.box,mats.dark,leg,[0,0,0],[.24,.52,.29]);
    mesh(geometry.box,mats.hull,leg,[0,-.19,.12],[.32,.15,.5]);
    mesh(geometry.box,mats.hull,g,[s*.62,.9,.1],[.28,.32,.4]);
  }
  const gun=mesh(geometry.box,mats.dark,g,[.57,.88,.55],[.23,.2,1]);
  mesh(geometry.box,mats.cyan,g,[.57,.9,1.06],[.2,.18,.06]);
  const halo=mesh(geometry.flatRing,new THREE.MeshBasicMaterial({color:0x6ee7e2,transparent:true,opacity:.5,side:THREE.DoubleSide}),g,[0,.035,0],[.85,.85,.85]);halo.rotation.x=-Math.PI/2;
  return {g,legs,gun,halo};
}
const hero=robot();dynamic.add(hero.g);
const crosshair=new THREE.Group();
for(let i=0;i<4;i++){
  const a=i*Math.PI/2,m=mesh(geometry.box,mats.shot,crosshair,[Math.sin(a)*.44,0,Math.cos(a)*.44],[.045,.035,.22]);m.rotation.y=a;
}
dynamic.add(crosshair);
const aimLight=new THREE.PointLight(0x73fff4,3,5);hero.g.add(aimLight);aimLight.position.y=1.2;

let mode='menu',hard=false,elapsed=0,kills=0,scrap=0,spent=0,level=1,xp=0,stacks={},stats=newStats(),hp=100;
let enemies=[],bullets=[],pickups=[],particles=[],effects=[],warnings=[],hazards=[],drones=[],chests=[];
let player={x:0,z:7},aim={x:0,z:-1},move={x:0,z:0},dashVector={x:0,z:0};
let shotCd=0,dashCd=0,dashTime=0,pulseCd=0,invincible=0,spawnCd=1.5,shake=0,hitStop=0;
let relaysDone=0,activeRelay=null,boss=null,bossDefeated=false,toastTime=0,pendingLevels=0,upgradeChoices=[];
let joy={x:0,z:0},touchAiming=false,fireHeld=false,pointerActive=false,pointer={x:0,y:0};
let lastTime=performance.now(),hudCd=0,screenFlash=0,endingTime=0;
const keys=new Set(),raycaster=new THREE.Raycaster(),ground=new THREE.Plane(new V(0,1,0),-.85),target=new V();
const touchDevice=matchMedia('(pointer: coarse)').matches;
let muted=false;try{muted=localStorage.getItem('last-light-muted')==='1';}catch{}
audio.setMuted(muted);
function setSoundButton(){ui['sound-button'].textContent=muted?'소리 꺼짐':'소리 켜짐';ui['sound-button'].setAttribute('aria-pressed',String(!muted));}
setSoundButton();

function toast(message,seconds=3){ui.toast.textContent=message;ui.toast.hidden=false;toastTime=seconds;}
function remove(obj){if(obj?.parent)obj.parent.remove(obj);}
function clearTransient(){
  for(const list of [enemies,bullets,pickups,particles,effects,warnings,hazards,drones,chests])for(const item of list){remove(item.g||item.m);if(item.disposable)item.m?.material?.dispose();if(item.skin)item.skin.dispose();if(item.line)item.m?.geometry?.dispose();}
  enemies=[];bullets=[];pickups=[];particles=[];effects=[];warnings=[];hazards=[];drones=[];chests=[];
  document.querySelectorAll('.damage-number').forEach(e=>e.remove());
}
function makeChests(){
  for(const [x,z] of [[-10,0],[10,7],[-13,16],[23,7],[-8,-23],[10,-24]]){
    const g=new THREE.Group();g.position.set(x,0,z);dynamic.add(g);
    mesh(geometry.cylinder,mats.dark,g,[0,.3,0],[.85,.5,.85]);
    const lid=mesh(geometry.box,mats.hull,g,[0,.75,0],[1.25,.5,.9]);
    mesh(geometry.box,mats.gold,g,[0,1.03,0],[.75,.045,.6]);
    chests.push({x,z,g,lid,opened:false});
  }
}
function startGame(){
  audio.init();clearTransient();
  mode='playing';elapsed=0;kills=0;scrap=0;spent=0;level=1;xp=0;stacks={};stats=newStats();hp=stats.maxHp;
  player={x:0,z:7};aim={x:0,z:-1};shotCd=0;dashCd=0;dashTime=0;pulseCd=0;invincible=1.5;spawnCd=1.2;
  relaysDone=0;activeRelay=null;boss=null;bossDefeated=false;pendingLevels=0;shake=0;hitStop=0;endingTime=0;
  keys.clear();fireHeld=false;joy={x:0,z:0};
  for(const r of world.relays){r.state='idle';r.progress=0;r.beam.visible=false;r.zone.visible=false;r.core.material.color.setHex(0x77e5df);r.core.material.emissive?.setHex(0x3a9c9c);r.ring.material.color.setHex(0x4a9297);}
  world.portal.core.material.color.setHex(0x96f6e8);world.portal.group.scale.setScalar(1);
  hero.g.visible=true;crosshair.visible=!touchDevice;
  for(const id of ['menu','upgrade-screen','pause-screen','end-screen','boss-hud','interact-prompt'])ui[id].hidden=true;
  ui.hud.hidden=false;ui['touch-controls'].hidden=!touchDevice;document.body.classList.add('is-playing');
  makeChests();toast('보안 기계를 해체해 물질을 회수하세요. 청록색 릴레이 근처에서 E로 가동합니다.',6);updateHud();
}
function pause(){
  if(mode==='playing'){mode='paused';ui['pause-screen'].hidden=false;keys.clear();fireHeld=false;joy={x:0,z:0};}
  else if(mode==='paused'){mode='playing';ui['pause-screen'].hidden=true;audio.init();}
}
function returnMenu(){
  clearTransient();mode='menu';keys.clear();fireHeld=false;joy={x:0,z:0};hero.g.visible=true;crosshair.visible=false;
  hero.g.position.set(0,0,7);
  for(const id of ['hud','upgrade-screen','pause-screen','end-screen','boss-hud','touch-controls','interact-prompt','toast'])ui[id].hidden=true;
  for(const r of world.relays){r.beam.visible=false;r.zone.visible=false;}
  ui.menu.hidden=false;document.body.classList.remove('is-playing');
}
function addParticles(x,z,color,count=9,power=4){
  const mat=color==='red'?mats.hostile:color==='gold'?mats.gold:mats.pickup;
  for(let i=0;i<count&&particles.length<250;i++){
    const m=mesh(geometry.sphere,mat,dynamic,[x,.7,z],[.09,.09,.09]),a=Math.random()*Math.PI*2;
    particles.push({m,vx:Math.sin(a)*power*Math.random(),vz:Math.cos(a)*power*Math.random(),vy:2+Math.random()*3,life:.3+Math.random()*.45});
  }
}
function ringEffect(x,z,color=0x88fff4,size=6,life=.4){
  const mat=new THREE.MeshBasicMaterial({color,transparent:true,opacity:.85,side:THREE.DoubleSide,depthWrite:false});
  const m=mesh(geometry.flatRing,mat,dynamic,[x,.09,z]);m.rotation.x=-Math.PI/2;
  effects.push({m,life,total:life,size,disposable:true});
}
function damageNumber(x,z,amount,crit=false){
  if(document.querySelectorAll('.damage-number').length>25)return;
  const e=document.createElement('span');e.className=`damage-number${crit?' critical':''}`;e.textContent=Math.round(amount);document.body.append(e);
  const p=new V(x,2,z).project(camera);e.style.left=`${(p.x*.5+.5)*innerWidth}px`;e.style.top=`${(-p.y*.5+.5)*innerHeight}px`;
  setTimeout(()=>e.remove(),600);
}
function makeEnemy(type,x,z){
  const g=new THREE.Group();g.position.set(x,0,z);dynamic.add(g);
  let hpBase,speed,radius;
  const skin=mats.enemy.clone();
  if(type==='brute'){
    hpBase=125;speed=2.35;radius=1.15;
    mesh(geometry.box,skin,g,[0,1,0],[1.65,1.7,1.35]);
    mesh(geometry.box,mats.dark,g,[0,1.4,.75],[1.4,.4,.2]);
    mesh(geometry.box,mats.red,g,[0,1.5,.88],[.95,.15,.06]);
    for(const s of [-1,1]){mesh(geometry.cylinder,mats.dark,g,[s*1,.5,0],[.4,.6,.65]);mesh(geometry.box,skin,g,[s*1,1.1,.1],[.5,.7,1]);}
  }else if(type==='shooter'){
    hpBase=43;speed=2.6;radius=.8;
    mesh(geometry.octa,skin,g,[0,1.4,0],[.85,.7,.85]);
    const r=mesh(geometry.ring,mats.red,g,[0,1.35,0],[1,1,1]);r.rotation.x=Math.PI/2;
    mesh(geometry.sphere,mats.red,g,[0,1.5,.55],[.22,.22,.22]);
  }else if(type==='boss'){
    hpBase=hard?4800:3500;speed=1.9;radius=2.6;
    mesh(geometry.octa,skin,g,[0,3,0],[2.6,2.5,2.6]);
    for(let i=0;i<3;i++){
      const ring=mesh(geometry.ring,i===1?mats.gold:mats.red,g,[0,3,0],[3+i*.3,3+i*.3,3+i*.3]);ring.rotation.set(.6+i*.8,0,i*.7);
    }
    mesh(geometry.sphere,mats.red,g,[0,3,0],[1.4,1.4,1.4]);
  }else{
    hpBase=28;speed=3.5+Math.random()*.6;radius=.65;
    mesh(geometry.box,skin,g,[0,.65,0],[.85,.55,1.1]);
    mesh(geometry.box,mats.red,g,[0,.8,.58],[.62,.13,.04]);
    for(const s of [-1,1])for(const t of [-1,1]){
      const leg=mesh(geometry.box,mats.dark,g,[s*.6,.32,t*.4],[.48,.18,.22]);leg.rotation.z=s*.4;
    }
  }
  const d=difficultyAt(elapsed,relaysDone,hard),maxHp=hpBase*(type==='boss'?1:d.health);
  const enemy={g,skin,type,x,z,hp:maxHp,maxHp,speed,radius,attack:1+Math.random(),flash:0,windup:0,phase:0,id:Math.random()};
  enemies.push(enemy);return enemy;
}
function scheduleEnemy(type,position){
  let x,z;
  if(position){x=position.x;z=position.z;}
  else {
    const a=Math.random()*Math.PI*2,r=15+Math.random()*8;
    ({x,z}=clampPosition(player.x+Math.sin(a)*r,player.z+Math.cos(a)*r,world.arenaRadius-1,world.obstacles,.8));
    if(Math.hypot(x-player.x,z-player.z)<9){x=-player.x*.5+Math.sin(a)*25;z=-player.z*.5+Math.cos(a)*25;({x,z}=clampPosition(x,z,33,world.obstacles,.8));}
  }
  const mat=new THREE.MeshBasicMaterial({color:0xff5f47,transparent:true,opacity:.5,side:THREE.DoubleSide,depthWrite:false});
  const m=mesh(geometry.flatRing,mat,dynamic,[x,.055,z],[1.2,1.2,1.2]);m.rotation.x=-Math.PI/2;
  warnings.push({m,x,z,type,life:.8,disposable:true});
}
function shoot(x,z,dx,dz,damage,hostile=false,pierce=0){
  const speed=hostile?10.5:42;
  const m=mesh(geometry.bullet,hostile?mats.hostile:mats.shot,dynamic,[x,hostile?1:.95,z]);m.rotation.y=Math.atan2(dx,dz);
  if(hostile)m.scale.set(2,2,.65);
  bullets.push({m,x,z,vx:dx*speed,vz:dz*speed,life:hostile?4:1.05,damage,hostile,pierce,hit:new Set()});
}
function fire(){
  const base=Math.atan2(aim.x,aim.z);
  for(let i=0;i<stats.multi;i++){
    const angle=base+(i-(stats.multi-1)/2)*.135;
    shoot(player.x+aim.x*.9,player.z+aim.z*.9,Math.sin(angle),Math.cos(angle),stats.damage);
  }
  hero.gun.scale.z=1.25;audio.play('shoot');shotCd+=stats.interval;
  addParticles(player.x+aim.x*1.1,player.z+aim.z*1.1,'cyan',1,1);
}
function dash(){
  if(mode!=='playing'||dashCd>0)return;
  const length=Math.hypot(move.x,move.z);
  dashVector=length>.1?{x:move.x/length,z:move.z/length}:{...aim};
  dashTime=.19;dashCd=stats.dashCooldown;invincible=.32;
  audio.play('dash');ringEffect(player.x,player.z,0x80f8f0,2,.24);
}
function pulse(){
  if(mode!=='playing'||pulseCd>0)return;
  pulseCd=stats.pulseCooldown;audio.play('pulse');shake=.22;ringEffect(player.x,player.z,0x82fff2,stats.pulseRadius,.5);
  for(const e of [...enemies])if(Math.hypot(e.x-player.x,e.z-player.z)<stats.pulseRadius+e.radius){
    const dx=e.x-player.x,dz=e.z-player.z,len=Math.hypot(dx,dz)||1;
    damageEnemy(e,stats.pulseDamage,false,false);
    if(e.type!=='boss'){e.x+=dx/len*2.8;e.z+=dz/len*2.8;}
  }
  for(let i=bullets.length-1;i>=0;i--)if(bullets[i].hostile&&Math.hypot(bullets[i].x-player.x,bullets[i].z-player.z)<stats.pulseRadius){remove(bullets[i].m);bullets.splice(i,1);}
}
function damagePlayer(damage){
  if(invincible>0||mode!=='playing')return;
  hp=Math.max(0,hp-damage);invincible=.65;shake=.24;screenFlash=.28;audio.play('hit');ui['hit-flash'].hidden=false;
  if(hp<=0)finish(false);
}
function chainEffect(from,to){
  const geo=new THREE.BufferGeometry().setFromPoints([new V(from.x,1,from.z),new V((from.x+to.x)/2+.4,1.6,(from.z+to.z)/2),new V(to.x,1,to.z)]);
  const m=new THREE.Line(geo,new THREE.LineBasicMaterial({color:0xb2faff,transparent:true,opacity:1}));dynamic.add(m);
  effects.push({m,life:.13,total:.13,line:true,disposable:true});
}
function damageEnemy(e,damage,canChain=true,showNumber=true){
  if(e.hp<=0)return;
  const crit=Math.random()<stats.crit,actual=damage*(crit?2.2:1);e.hp-=actual;e.flash=.09;
  if(showNumber)damageNumber(e.x,e.z,actual,crit);
  addParticles(e.x,e.z,e.type==='boss'?'gold':'red',3,3);
  if(canChain&&stats.chain>0){
    const candidates=enemies.filter(t=>t!==e&&t.hp>0&&Math.hypot(t.x-e.x,t.z-e.z)<6).sort((a,b)=>Math.hypot(a.x-e.x,a.z-e.z)-Math.hypot(b.x-e.x,b.z-e.z));
    let from=e;
    for(const t of candidates.slice(0,stats.chain)){chainEffect(from,t);damageEnemy(t,damage*.45,false,false);from=t;}
  }
  if(e.hp<=0)killEnemy(e);
}
function killEnemy(e){
  if(e.dead)return;e.dead=true;kills++;
  if(e.type==='boss'){
    bossDefeated=true;boss=null;ui['boss-hud'].hidden=true;audio.play('relay');shake=.65;
    ringEffect(e.x,e.z,0xffd799,15,1.2);addParticles(e.x,e.z,'gold',65,15);
    for(const other of [...enemies])if(other!==e){other.hp=0;other.dead=true;remove(other.g);other.skin.dispose();}
    enemies=enemies.filter(t=>t===e);bullets.forEach(b=>remove(b.m));bullets=[];
    hp=Math.min(stats.maxHp,hp+40);toast('모든 병목이 해제되었습니다. 중앙의 우주 씨앗으로 돌아가 E를 누르세요.',8);
  }else{
    audio.play('kill');const worth=e.type==='brute'?9:e.type==='shooter'?5:3;
    const m=mesh(geometry.octa,mats.pickup,dynamic,[e.x,.6,e.z],[.23,.35,.23]);pickups.push({m,x:e.x,z:e.z,xp:worth*2,matter:worth,life:100});
    if(Math.random()<.09){const h=mesh(geometry.sphere,mats.health,dynamic,[e.x+.4,.6,e.z],[.24,.24,.24]);pickups.push({m:h,x:e.x+.4,z:e.z,heal:12,life:35});}
    hp=Math.min(stats.maxHp,hp+stats.vamp);addParticles(e.x,e.z,'red',7,5);hitStop=.025;
  }
  remove(e.g);e.skin.dispose();enemies=enemies.filter(t=>t!==e);
}
function addXp(amount){
  xp+=amount;
  while(xp>=xpNeeded(level)){xp-=xpNeeded(level);level++;pendingLevels++;hp=Math.min(stats.maxHp,hp+12);}
}
function showUpgrades(){
  if(mode!=='playing')return;
  upgradeChoices=pickUpgrades(stacks);
  if(!upgradeChoices.length){pendingLevels=0;hp=stats.maxHp;return;}
  mode='upgrade';keys.clear();fireHeld=false;joy={x:0,z:0};audio.play('level');
  ui['upgrade-options'].replaceChildren();
  for(let i=0;i<upgradeChoices.length;i++){
    const u=upgradeChoices[i],button=document.createElement('button');button.className='upgrade-card';
    button.innerHTML=`<span class="upgrade-kicker">0${i+1} / ${u.tag}</span><span class="upgrade-icon" aria-hidden="true">${u.icon}</span><h3>${u.name}</h3><p>${u.description}</p><span class="upgrade-meta">${u.detail}${stacks[u.id]?` · 현재 ${stacks[u.id]}중첩`:''}</span>`;
    button.addEventListener('click',()=>chooseUpgrade(i));ui['upgrade-options'].append(button);
  }
  ui['upgrade-screen'].hidden=false;
  requestAnimationFrame(()=>ui['upgrade-options'].firstElementChild?.focus({preventScroll:true}));
}
function chooseUpgrade(index){
  if(mode!=='upgrade'||!upgradeChoices[index])return;
  const u=upgradeChoices[index];applyUpgrade(stats,u.id);stacks[u.id]=(stacks[u.id]||0)+1;
  if(u.id==='hull')hp=Math.min(stats.maxHp,hp+50);
  if(u.id==='drone'){
    const g=new THREE.Group();dynamic.add(g);mesh(geometry.octa,mats.hull,g,[0,0,0],[.3,.2,.4]);mesh(geometry.sphere,mats.cyan,g,[0,0,.3],[.12,.12,.12]);drones.push({g,cd:0});
  }
  pendingLevels=Math.max(0,pendingLevels-1);ui['upgrade-screen'].hidden=true;mode='playing';invincible=.8;
  toast(`${u.name} · ${stacks[u.id]}중첩`,2);updateHud();
  if(pendingLevels>0)showUpgrades();
}
function nearbyInteraction(){
  if(bossDefeated&&Math.hypot(player.x,player.z)<4.2)return {type:'portal',item:world.portal,text:'E  새 우주로 마지막 빛 보내기'};
  const relay=world.relays.find(r=>r.state==='idle'&&Math.hypot(player.x-r.x,player.z-r.z)<3.7);
  if(relay&&!activeRelay&&!bossDefeated){const cost=RELAY_COSTS[relaysDone];return {type:'relay',item:relay,cost,text:`E  릴레이 가동 · 물질 ${cost}${scrap<cost?' 필요':''}`};}
  const chest=chests.find(c=>!c.opened&&Math.hypot(player.x-c.x,player.z-c.z)<2.7);
  if(chest){const cost=12+spent*7;return {type:'chest',item:chest,cost,text:`E  설계 회수 · 물질 ${cost}${scrap<cost?' 필요':''}`};}
  return null;
}
function interact(){
  if(mode!=='playing')return;
  const near=nearbyInteraction();if(!near)return;
  if(near.type==='portal'){finish(true);return;}
  if(scrap<near.cost){toast(`물질이 ${near.cost-scrap} 부족합니다. 기계를 해체하고 청록색 조각을 회수하세요.`,3);return;}
  scrap-=near.cost;
  if(near.type==='relay'){
    activeRelay=near.item;activeRelay.state='charging';activeRelay.progress=0;activeRelay.beam.visible=true;activeRelay.zone.visible=true;
    activeRelay.core.material.color.setHex(0xffc77f);activeRelay.ring.material.color.setHex(0xffc77f);
    audio.play('relay');toast('충전 시작. 빛의 원 안에서 버티세요. 밖으로 나가면 충전이 멈춥니다.',5);
    ringEffect(activeRelay.x,activeRelay.z,0xffc686,RELAY_RADIUS,.7);
    for(let i=0;i<3;i++)scheduleEnemy(i===2?'shooter':'chaser');
  }else{
    near.item.opened=true;near.item.lid.rotation.z=-.65;spent++;pendingLevels++;showUpgrades();
  }
}
function completeRelay(){
  const r=activeRelay;r.state='done';r.progress=RELAY_SECONDS;r.zone.visible=false;r.core.material.color.setHex(0x9cffd5);r.core.material.emissive?.setHex(0x43b59a);r.ring.material.color.setHex(0x96ffdc);
  relaysDone++;activeRelay=null;audio.play('relay');hp=Math.min(stats.maxHp,hp+30);
  for(const p of pickups){if(p.heal)hp=Math.min(stats.maxHp,hp+p.heal);else {scrap+=p.matter;addXp(p.xp);}remove(p.m);}pickups=[];
  pendingLevels++;ringEffect(r.x,r.z,0x9cffe2,12,1);
  if(relaysDone===3){
    toast('마지막 병목: 엔트로피. 중앙 수호체를 해체하세요.',5);audio.play('boss');
    boss=makeEnemy('boss',0,-8);boss.attack=2.5;ui['boss-hud'].hidden=false;ui['boss-name'].textContent='마지막 병목 / ENTROPY';
  }else toast(`병목 ${relaysDone}/3 해제 · 선체 30 복구. 다음 릴레이를 찾으세요.`,5);
}
function finish(won){
  mode=won?'won':'lost';keys.clear();fireHeld=false;joy={x:0,z:0};ui['touch-controls'].hidden=true;ui['interact-prompt'].hidden=true;crosshair.visible=false;
  updateHud();
  audio.play(won?'win':'lose');ui['end-screen'].hidden=false;
  ui['end-title'].textContent=won?'다시, 가능성.':'마지막 빛이 꺼졌습니다.';
  ui['end-description'].textContent=won?'우리는 그 너머를 관측할 수 없었습니다. 다만 가진 것으로, 할 수 있는 영역을 넓혔습니다.':'다음 시도에는 다른 설계를 조합해 보세요. 회피 중에는 무적이며, 충격파로 위험한 탄환을 지울 수 있습니다.';
  let best=0;try{best=Number(localStorage.getItem('last-light-best')||0);if(kills>best)localStorage.setItem('last-light-best',String(kills));}catch{}
  ui['end-stats'].innerHTML=`<div><span>가동 시간</span><strong>${formatTime(elapsed)}</strong></div><div><span>해체한 기계</span><strong>${kills}</strong></div><div><span>해제한 병목</span><strong>${relaysDone} / 3</strong></div><div><span>도달한 설계</span><strong>LV. ${level}</strong></div>`;
  if(won){world.portal.core.material.color.setHex(0xffffff);ringEffect(0,0,0xc5fff1,36,2.5);shake=.6;}
}
function formatTime(t){return `${String(Math.floor(t/60)).padStart(2,'0')}:${String(Math.floor(t%60)).padStart(2,'0')}`;}
function updateHud(){
  ui['health-fill'].style.width=`${hp/stats.maxHp*100}%`;ui['health-text'].textContent=`${Math.ceil(hp)} / ${stats.maxHp}`;
  ui['xp-fill'].style.width=`${xp/xpNeeded(level)*100}%`;ui['level-text'].textContent=`LV. ${level}`;
  ui['time-text'].textContent=formatTime(elapsed);ui['scrap-text'].textContent=String(scrap);ui['relay-count'].textContent=String(relaysDone);
  ui['dash-fill'].style.width=`${Math.max(0,1-dashCd/stats.dashCooldown)*100}%`;ui['pulse-fill'].style.width=`${Math.max(0,1-pulseCd/stats.pulseCooldown)*100}%`;
  if(boss){ui['boss-fill'].style.width=`${Math.max(0,boss.hp/boss.maxHp)*100}%`;}
  if(bossDefeated){ui['objective-title'].textContent='새 우주로 빛 보내기';ui['objective-detail'].textContent='중앙 우주 씨앗으로 돌아가 E';}
  else if(boss){ui['objective-title'].textContent='마지막 병목: 엔트로피';ui['objective-detail'].textContent='수호체 해체 · 붉은 궤도를 회피하세요';}
  else if(activeRelay){const inside=Math.hypot(player.x-activeRelay.x,player.z-activeRelay.z)<RELAY_RADIUS;ui['objective-title'].textContent=`릴레이 충전 ${Math.floor(activeRelay.progress/RELAY_SECONDS*100)}%`;ui['objective-detail'].textContent=inside?'빛의 원 안에서 버티세요':'충전 중단 · 빛의 원으로 돌아가세요';}
  else{ui['objective-title'].textContent=['물질의 병목','에너지의 병목','거리의 병목'][relaysDone]||'릴레이 가동';ui['objective-detail'].textContent=`물질 ${RELAY_COSTS[relaysDone]} 회수 → 청록색 릴레이에서 E`;}
  const near=mode==='playing'?nearbyInteraction():null;ui['interact-prompt'].hidden=!near;
  if(near){ui['interact-prompt'].textContent=near.text;ui['interact-prompt'].classList.toggle('unaffordable',near.cost>scrap);}
  // Objective direction stays readable even when the next relay is outside the camera.
  const marker=$('objective-marker');
  if(marker&&mode==='playing'){
    const goal=bossDefeated?world.portal:boss?null:activeRelay||world.relays.filter(r=>r.state==='idle').sort((a,b)=>Math.hypot(a.x-player.x,a.z-player.z)-Math.hypot(b.x-player.x,b.z-player.z))[0];
    marker.hidden=!goal;
    if(goal){const p=new V(goal.x,2,goal.z).project(camera);const sx=Math.max(65,Math.min(innerWidth-65,(p.x*.5+.5)*innerWidth)),sy=Math.max(135,Math.min(innerHeight-150,(-p.y*.5+.5)*innerHeight));marker.style.left=`${sx}px`;marker.style.top=`${sy}px`;marker.textContent=`◇ ${Math.ceil(Math.hypot(goal.x-player.x,goal.z-player.z))} m`;}
  }
}

function updatePlayer(dt){
  move.x=(keys.has('KeyD')||keys.has('ArrowRight')?1:0)-(keys.has('KeyA')||keys.has('ArrowLeft')?1:0)+joy.x;
  move.z=(keys.has('KeyS')||keys.has('ArrowDown')?1:0)-(keys.has('KeyW')||keys.has('ArrowUp')?1:0)+joy.z;
  const len=Math.hypot(move.x,move.z);if(len>1){move.x/=len;move.z/=len;}
  if(pointerActive&&!touchDevice){
    raycaster.setFromCamera(pointer,camera);
    if(raycaster.ray.intersectPlane(ground,target)){const dx=target.x-player.x,dz=target.z-player.z,l=Math.hypot(dx,dz);if(l>.3)aim={x:dx/l,z:dz/l};crosshair.position.set(target.x,.9,target.z);}
  }else if(touchDevice){
    const closest=enemies.filter(e=>e.hp>0).sort((a,b)=>Math.hypot(a.x-player.x,a.z-player.z)-Math.hypot(b.x-player.x,b.z-player.z))[0];
    if(closest){const l=Math.hypot(closest.x-player.x,closest.z-player.z)||1;aim={x:(closest.x-player.x)/l,z:(closest.z-player.z)/l};}
    else if(len>.2)aim={x:move.x/(len||1),z:move.z/(len||1)};
  }
  const dashing=dashTime>0;dashTime=Math.max(0,dashTime-dt);dashCd=Math.max(0,dashCd-dt);pulseCd=Math.max(0,pulseCd-dt);invincible=Math.max(0,invincible-dt);
  const speed=dashing?34:stats.speed;
  const step=dashing?dashVector:move;
  const pos=clampPosition(player.x+step.x*speed*dt,player.z+step.z*speed*dt,world.arenaRadius,world.obstacles);
  player.x=pos.x;player.z=pos.z;hero.g.position.set(player.x,0,player.z);hero.g.rotation.y=Math.atan2(aim.x,aim.z);
  hero.legs.forEach((leg,i)=>leg.rotation.x=Math.sin(elapsed*18+i*Math.PI)*Math.min(1,len)*.55);
  hero.g.position.y=len>.1?Math.sin(elapsed*36)*.035:0;
  hero.gun.scale.z=THREE.MathUtils.lerp(hero.gun.scale.z,1,dt*20);
  hero.halo.material.opacity=invincible>0?.5+.4*Math.sin(elapsed*40):.35;
  if(dashing)addParticles(player.x,player.z,'cyan',1,1);
  shotCd-=dt;if(fireHeld||keys.has('KeyF')){if(shotCd<=0)fire();}else shotCd=Math.max(0,shotCd);
}
function updateEnemies(dt){
  const d=difficultyAt(elapsed,relaysDone,hard);
  for(const e of [...enemies]){
    if(e.dead)continue;
    const dx=player.x-e.x,dz=player.z-e.z,dist=Math.hypot(dx,dz)||1,nx=dx/dist,nz=dz/dist;
    e.attack-=dt;e.flash=Math.max(0,e.flash-dt);e.skin.emissive.setHex(e.flash>0?0xffffff:0x76201b);e.skin.emissiveIntensity=e.flash>0?1:.35;
    let mx=nx,mz=nz;
    if(e.type==='shooter'){
      const strafe=Math.sin(elapsed*.7+e.id*9)*.55;
      const advance=dist<8?-.6:dist<12?0:1;mx=nx*advance-nz*strafe;mz=nz*advance+nx*strafe;
      if(e.attack<=0&&dist<21){shoot(e.x+nx,e.z+nz,nx,nz,10*d.damage,true);e.attack=hard?1.8:2.4;ringEffect(e.x,e.z,0xff7655,1.3,.15);}
      e.g.position.y=Math.sin(elapsed*3+e.id*5)*.18;
    }else if(e.type==='boss'){
      mx*=dist<6?-.3:.6;mz*=dist<6?-.3:.6;e.g.rotation.y+=dt*.4;
      e.g.children.forEach((child,i)=>{if(i>0&&i<4)child.rotation.y+=dt*(i%2?1:-1)*.6;});
      if(e.attack<=0){
        e.phase++;const count=e.hp/e.maxHp<.5?18:12;
        for(let i=0;i<count;i++){const a=i/count*Math.PI*2+e.phase*.26;shoot(e.x+Math.sin(a)*2,e.z+Math.cos(a)*2,Math.sin(a),Math.cos(a),13*d.damage,true);}
        if(e.phase%2===0){createHazard(player.x,player.z,4.2,1.3,24*d.damage);}
        if(e.phase%3===0){for(let i=0;i<2;i++)scheduleEnemy('chaser');}
        e.attack=e.hp/e.maxHp<.5?1.8:2.6;audio.play('boss');ringEffect(e.x,e.z,0xffb670,5,.35);
      }
    }else if(e.type==='brute'){
      if(e.windup>0){
        e.windup-=dt;mx=0;mz=0;
        if(e.windup<=0){ringEffect(e.x,e.z,0xff6749,3.5,.35);if(dist<3.5)damagePlayer(23*d.damage);}
      }else if(dist<3&&e.attack<=0){e.windup=.65;e.attack=2.1;createHazard(e.x,e.z,3.4,.65,0);}
    }else if(dist<1.3&&e.attack<=0){damagePlayer(11*d.damage);e.attack=.9;}
    // Separation and obstacle steering keep hordes navigable around the foundry towers.
    for(const other of enemies){if(e===other)continue;const ox=e.x-other.x,oz=e.z-other.z,od=Math.hypot(ox,oz),rr=e.radius+other.radius;if(od<rr&&od>.01){mx+=ox/od*(rr-od)*2;mz+=oz/od*(rr-od)*2;}}
    for(const o of world.obstacles){const ox=e.x-o.x,oz=e.z-o.z,od=Math.hypot(ox,oz),rr=o.r+e.radius+1.3;if(od<rr&&od>.01){mx+=ox/od*(rr-od)*2;mz+=oz/od*(rr-od)*2;}}
    const pos=clampPosition(e.x+mx*e.speed*dt,e.z+mz*e.speed*dt,world.arenaRadius,world.obstacles,e.radius);
    e.x=pos.x;e.z=pos.z;e.g.position.x=e.x;e.g.position.z=e.z;
    if(e.type!=='boss')e.g.rotation.y=Math.atan2(nx,nz);
    if(e.type==='chaser')e.g.position.y=Math.sin(elapsed*16+e.id*6)*.06;
    if(dist<e.radius+.7&&e.type==='boss')damagePlayer(18*d.damage);
  }
}
function createHazard(x,z,radius,delay,damage){
  const mat=new THREE.MeshBasicMaterial({color:0xff6545,transparent:true,opacity:.22,side:THREE.DoubleSide,depthWrite:false});
  const m=mesh(geometry.flatRing,mat,dynamic,[x,.08,z],[radius,radius,radius]);m.rotation.x=-Math.PI/2;
  hazards.push({m,x,z,radius,life:delay,total:delay,damage,disposable:true});
}
function updateBullets(dt){
  for(let i=bullets.length-1;i>=0;i--){
    const b=bullets[i];if(!b)continue;
    const ox=b.x,oz=b.z;b.x+=b.vx*dt;b.z+=b.vz*dt;b.life-=dt;
    b.m.position.x=b.x;b.m.position.z=b.z;
    const blocked=world.obstacles.some(o=>segmentHit(ox,oz,b.x,b.z,o.x,o.z,o.r));
    if(blocked){b.life=0;addParticles(b.x,b.z,b.hostile?'red':'cyan',2,2);}
    else if(b.hostile){if(segmentHit(ox,oz,b.x,b.z,player.x,player.z,.7)){damagePlayer(b.damage);b.life=0;}}
    else{
      for(const e of [...enemies])if(!b.hit.has(e.id)&&segmentHit(ox,oz,b.x,b.z,e.x,e.z,e.radius+.15)){
        b.hit.add(e.id);damageEnemy(e,b.damage);b.life=0;break;
      }
    }
    if(Math.hypot(b.x,b.z)>world.arenaRadius+3)b.life=0;
    if(b.life<=0){remove(b.m);bullets.splice(i,1);}
  }
}
function updatePickups(dt){
  for(let i=pickups.length-1;i>=0;i--){
    const p=pickups[i],dx=player.x-p.x,dz=player.z-p.z,dist=Math.hypot(dx,dz)||.01;
    p.life-=dt;p.m.rotation.y+=dt*2;p.m.position.y=.55+Math.sin(elapsed*4+i)*.1;
    if(dist<6.5){const speed=(7-dist)*3+4;p.x+=dx/dist*speed*dt;p.z+=dz/dist*speed*dt;}
    p.m.position.x=p.x;p.m.position.z=p.z;
    if(dist<1.3){
      if(p.heal)hp=Math.min(stats.maxHp,hp+p.heal);else{scrap+=p.matter;addXp(p.xp);}audio.play('pickup');p.life=0;
    }
    if(p.life<=0){remove(p.m);pickups.splice(i,1);}
  }
}
function updateEffects(dt){
  for(let i=particles.length-1;i>=0;i--){const p=particles[i];p.life-=dt;p.vy-=dt*9;p.m.position.x+=p.vx*dt;p.m.position.z+=p.vz*dt;p.m.position.y+=p.vy*dt;p.m.scale.multiplyScalar(Math.max(.1,1-dt*2));if(p.life<=0||p.m.position.y<0){remove(p.m);particles.splice(i,1);}}
  for(let i=effects.length-1;i>=0;i--){const e=effects[i];e.life-=dt;e.m.material.opacity=Math.max(0,e.life/e.total)*.8;if(!e.line)e.m.scale.setScalar((1-e.life/e.total)*e.size+.1);if(e.life<=0){remove(e.m);e.m.material.dispose();if(e.line)e.m.geometry.dispose();effects.splice(i,1);}}
}
function updateDrones(dt){
  for(let i=0;i<drones.length;i++){
    const d=drones[i],a=elapsed*1.5+i/drones.length*Math.PI*2;d.g.position.set(player.x+Math.sin(a)*1.8,1.6,player.z+Math.cos(a)*1.8);d.g.rotation.y=a;
    d.cd-=dt;
    const e=enemies.filter(e=>e.hp>0&&Math.hypot(e.x-player.x,e.z-player.z)<18).sort((a,b)=>Math.hypot(a.x-player.x,a.z-player.z)-Math.hypot(b.x-player.x,b.z-player.z))[0];
    if(e&&d.cd<=0){const dx=e.x-d.g.position.x,dz=e.z-d.g.position.z,l=Math.hypot(dx,dz)||1;shoot(d.g.position.x,d.g.position.z,dx/l,dz/l,stats.damage*.7);d.cd=.45;}
  }
}
function updateWaves(dt){
  if(!bossDefeated){
    spawnCd-=dt;
    if(spawnCd<=0&&enemies.length+warnings.length<65){
      const d=difficultyAt(elapsed,relaysDone,hard);spawnCd=d.interval*(activeRelay?.65:boss?1.5:1);
      const choice=Math.random();const type=elapsed>45&&choice<.17?'brute':elapsed>16&&choice<.43?'shooter':'chaser';
      scheduleEnemy(type);
    }
  }
  for(let i=warnings.length-1;i>=0;i--){const w=warnings[i];w.life-=dt;w.m.material.opacity=.2+Math.abs(Math.sin(w.life*12))*.45;if(w.life<=0){if(!bossDefeated)makeEnemy(w.type,w.x,w.z);remove(w.m);w.m.material.dispose();warnings.splice(i,1);}}
  for(let i=hazards.length-1;i>=0;i--){
    const h=hazards[i];h.life-=dt;h.m.material.opacity=.2+(1-h.life/h.total)*.5;
    if(h.life<=0){if(h.damage&&Math.hypot(player.x-h.x,player.z-h.z)<h.radius)damagePlayer(h.damage);ringEffect(h.x,h.z,0xff7050,h.radius,.2);remove(h.m);h.m.material.dispose();hazards.splice(i,1);}
  }
  if(activeRelay){
    const inside=Math.hypot(player.x-activeRelay.x,player.z-activeRelay.z)<RELAY_RADIUS;
    if(inside)activeRelay.progress+=dt;
    if(activeRelay.beam.material)activeRelay.beam.material.opacity=inside?.15:.035;
    if(activeRelay.progress>=RELAY_SECONDS)completeRelay();
  }
}

ui['start-button'].addEventListener('click',startGame);
ui['retry-button'].addEventListener('click',startGame);ui['restart-button'].addEventListener('click',startGame);
ui['resume-button'].addEventListener('click',pause);ui['menu-button'].addEventListener('click',returnMenu);
$('pause-button')?.addEventListener('click',pause);
ui['sound-button'].addEventListener('click',()=>{muted=!muted;audio.setMuted(muted);if(!muted)audio.init();setSoundButton();try{localStorage.setItem('last-light-muted',muted?'1':'0');}catch{}});
for(const name of ['normal','hard'])$(`difficulty-${name}`)?.addEventListener('click',()=>{hard=name==='hard';for(const n of ['normal','hard'])$(`difficulty-${n}`)?.setAttribute('aria-pressed',String(n===name));});
addEventListener('keydown',e=>{
  if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code)&&mode!=='menu')e.preventDefault();
  if(e.repeat)return;
  if(mode==='upgrade'&&['Digit1','Digit2','Digit3'].includes(e.code)){chooseUpgrade(Number(e.code.at(-1))-1);return;}
  if(e.code==='Escape'){pause();return;}
  if(mode!=='playing')return;
  keys.add(e.code);if(e.code==='Space')dash();if(e.code==='KeyE')interact();if(e.code==='KeyQ')pulse();
});
addEventListener('keyup',e=>keys.delete(e.code));
ui.scene.addEventListener('pointermove',e=>{pointer={x:e.clientX/innerWidth*2-1,y:-(e.clientY/innerHeight)*2+1};pointerActive=true;});
ui.scene.addEventListener('pointerdown',e=>{if(mode!=='playing')return;pointer={x:e.clientX/innerWidth*2-1,y:-(e.clientY/innerHeight)*2+1};pointerActive=true;if(e.button===0)fireHeld=true;if(e.button===2)pulse();});
addEventListener('pointerup',e=>{if(e.pointerType!=='touch'&&e.button===0)fireHeld=false;});
ui.scene.addEventListener('contextmenu',e=>e.preventDefault());
addEventListener('blur',()=>{keys.clear();fireHeld=false;joy={x:0,z:0};if(mode==='playing')pause();});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&mode==='playing')pause();});
addEventListener('resize',()=>world.resize());
let joyPointer=null,joyOrigin={x:0,y:0};
ui['joystick-zone'].addEventListener('pointerdown',e=>{joyPointer=e.pointerId;joyOrigin={x:e.clientX,y:e.clientY};ui['joystick-zone'].setPointerCapture(e.pointerId);});
ui['joystick-zone'].addEventListener('pointermove',e=>{
  if(e.pointerId!==joyPointer)return;const dx=e.clientX-joyOrigin.x,dy=e.clientY-joyOrigin.y,l=Math.hypot(dx,dy),s=l>42?42/l:1;
  joy={x:dx*s/42,z:dy*s/42};ui['joystick-knob'].style.transform=`translate(${dx*s}px,${dy*s}px)`;
});
function releaseJoy(){joyPointer=null;joy={x:0,z:0};ui['joystick-knob'].style.transform='translate(0,0)';}
ui['joystick-zone'].addEventListener('pointerup',releaseJoy);ui['joystick-zone'].addEventListener('pointercancel',releaseJoy);
ui['touch-fire'].addEventListener('pointerdown',e=>{e.preventDefault();fireHeld=true;ui['touch-fire'].setPointerCapture(e.pointerId);});
ui['touch-fire'].addEventListener('pointerup',()=>fireHeld=false);ui['touch-fire'].addEventListener('pointercancel',()=>fireHeld=false);
ui['touch-dash'].addEventListener('pointerdown',e=>{e.preventDefault();dash();});ui['touch-interact'].addEventListener('click',interact);
const pulseButton=document.createElement('button');pulseButton.id='touch-pulse';pulseButton.textContent='충격파';pulseButton.setAttribute('aria-label','충격파 사용');pulseButton.addEventListener('pointerdown',e=>{e.preventDefault();pulse();});ui['touch-controls'].append(pulseButton);
const marker=document.createElement('div');marker.id='objective-marker';marker.hidden=true;ui.hud.append(marker);
ui['start-button'].disabled=false;ui.loading.hidden=true;crosshair.visible=false;
hero.g.position.set(0,0,7);

function frame(now){
  requestAnimationFrame(frame);
  if(document.hidden){lastTime=now;return;}
  let dt=Math.min((now-lastTime)/1000,.04);lastTime=now;
  const visualTime=now/1000;
  if(mode==='playing'){
    if(hitStop>0){hitStop-=dt;dt*=.3;}
    elapsed+=dt;updatePlayer(dt);updateWaves(dt);
    if(mode==='playing')updateEnemies(dt);
    if(mode==='playing')updateBullets(dt);
    if(mode==='playing')updatePickups(dt);
    if(mode==='playing')updateDrones(dt);
    updateEffects(dt);
    if(pendingLevels>0&&mode==='playing')showUpgrades();
    toastTime-=dt;if(toastTime<=0)ui.toast.hidden=true;
    hudCd-=dt;if(hudCd<=0){updateHud();hudCd=.07;}
    audio.update(Math.min(1,enemies.length/30+(boss?.3:0)),dt);
  }else if(mode==='won'){
    endingTime+=dt;updateEffects(dt);world.portal.group.scale.setScalar(1+Math.min(endingTime*.12,1));
  }
  screenFlash=Math.max(0,screenFlash-dt);if(screenFlash<=0)ui['hit-flash'].hidden=true;
  world.update(visualTime,new V(player.x,0,player.z),mode,dt);
  if(shake>0){shake=Math.max(0,shake-dt*1.5);camera.position.x+=(Math.random()-.5)*shake;camera.position.y+=(Math.random()-.5)*shake;}
  renderer.render(scene,camera);
}
requestAnimationFrame(frame);

// An explicit test-only bridge enables deterministic browser integration checks.
// It is absent in normal play, including the distributable without ?qa=1.
if(new URLSearchParams(location.search).get('qa')==='1'){
  window.__lastLight={
    snapshot:()=>({mode,elapsed,hp,maxHp:stats.maxHp,kills,scrap,level,xp,relaysDone,player:{...player},stats:{...stats},enemies:enemies.map(e=>({x:e.x,z:e.z,type:e.type,hp:e.hp})),activeRelay:activeRelay?{x:activeRelay.x,z:activeRelay.z,progress:activeRelay.progress}:null,boss:!!boss,bossDefeated,bullets:bullets.length,renderer:renderer.info.render}),
    grantMatter:n=>{scrap+=n;},teleport:(x,z)=>{player=clampPosition(x,z,world.arenaRadius,world.obstacles);},
    grantXp:addXp,damagePlayer,spawn:(type,x,z)=>makeEnemy(type,x,z),
    completeCharge:()=>{if(activeRelay)completeRelay();},killBoss:()=>{if(boss)damageEnemy(boss,boss.hp*2,false);},
    killAll:()=>{for(const e of [...enemies])damageEnemy(e,e.hp*2,false,false);},
    setHp:n=>{hp=n;},
  };
}
