// Rendering-independent rules are shared by the game and its simulation checks.
export const RELAY_COSTS = [18, 36, 54];
export const RELAY_SECONDS = 32;
export const RELAY_RADIUS = 8.5;
export const UPGRADES = [
  { id:'damage', icon:'✳', name:'광자 가속기', tag:'화력', description:'주 무기 피해 +30%. 여러 번 선택하면 곱연산으로 강해집니다.', detail:'피해 ×1.30', max:8 },
  { id:'rate', icon:'≋', name:'병렬 연산', tag:'연사', description:'발사 속도 +22%. 더 많은 빛을 더 빠르게 쏟아냅니다.', detail:'연사 ×1.22', max:6 },
  { id:'multi', icon:'⋔', name:'분기하는 빛', tag:'다중 사격', description:'한 번에 발사하는 탄환 +1. 가까이 붙으면 모든 탄이 적중합니다.', detail:'탄환 +1 · 최대 5발', max:4 },
  { id:'chain', icon:'ϟ', name:'초전도 연결', tag:'연쇄', description:'적중 시 주변 적에게 피해의 45%가 전이됩니다. 중첩하면 더 멀리 연결됩니다.', detail:'연쇄 대상 +1', max:4 },
  { id:'drone', icon:'◇', name:'자기복제 드론', tag:'자동 공격', description:'주위를 도는 지원 드론이 가까운 적을 자동으로 공격합니다.', detail:'지원 드론 +1', max:4 },
  { id:'vamp', icon:'✚', name:'물질 재조립', tag:'회복', description:'기계를 해체할 때마다 선체를 2 복구합니다.', detail:'처치 시 회복 +2', max:4 },
  { id:'hull', icon:'⬡', name:'적층 장갑', tag:'생존', description:'최대 선체 +35. 즉시 선체를 50 복구합니다.', detail:'최대 선체 +35 · 회복 50', max:6 },
  { id:'speed', icon:'»', name:'관성 해방', tag:'기동', description:'이동 속도 +15%, 회피 재사용 시간 −15%.', detail:'이동 ×1.15 · 회피 시간 ×0.85', max:4 },
  { id:'pulse', icon:'◎', name:'항성 충격파', tag:'범위 공격', description:'충격파 피해 +50%, 범위 +15%, 재사용 시간 −12%.', detail:'충격파 강화', max:4 },
  { id:'crit', icon:'⌖', name:'예측 사격', tag:'치명타', description:'치명타 확률 +18%. 치명타는 2.2배의 피해를 줍니다.', detail:'치명타 확률 +18%', max:4 },
];
export function newStats() {
  return { maxHp:100, damage:17, interval:.17, speed:9, dashCooldown:2.5, pulseDamage:65, pulseRadius:7, pulseCooldown:8, multi:1, chain:0, drone:0, vamp:0, crit:.07 };
}
export function applyUpgrade(stats,id) {
  switch(id) {
    case 'damage':stats.damage*=1.3;break;
    case 'rate':stats.interval/=1.22;break;
    case 'multi':stats.multi+=1;break;
    case 'chain':stats.chain+=1;break;
    case 'drone':stats.drone+=1;break;
    case 'vamp':stats.vamp+=2;break;
    case 'hull':stats.maxHp+=35;break;
    case 'speed':stats.speed*=1.15;stats.dashCooldown*=.85;break;
    case 'pulse':stats.pulseDamage*=1.5;stats.pulseRadius*=1.15;stats.pulseCooldown*=.88;break;
    case 'crit':stats.crit=Math.min(.85,stats.crit+.18);break;
    default:throw new Error(`Unknown upgrade: ${id}`);
  }
  return stats;
}
export function xpNeeded(level) { return 18 + level*12; }
export function difficultyAt(seconds,relays,hard=false) {
  const threat=seconds/65+relays*.75;
  return { threat, health:(1+threat*.12)*(hard?1.25:1), damage:(1+threat*.09)*(hard?1.25:1), interval:Math.max(.34,1.25-threat*.12)*(hard?.8:1) };
}
export function clampPosition(x,z,radius,obstacles,bodyRadius=.65) {
  for(let pass=0;pass<3;pass++) {
    const length=Math.hypot(x,z), limit=radius-bodyRadius;
    if(length>limit) {x=x/length*limit;z=z/length*limit;}
    for(const o of obstacles) {
      let dx=x-o.x,dz=z-o.z;
      let distance=Math.hypot(dx,dz); const minDistance=o.r+bodyRadius;
      if(distance<minDistance) {
        if(distance<.0001){dx=1;dz=0;distance=1;}
        const before={x,z},scale=minDistance/distance;
        x=o.x+dx*scale;z=o.z+dz*scale;
        // Resolve simultaneous deck-edge and obstacle contact at their circle
        // intersection, instead of oscillating between the two constraints.
        if(Math.hypot(x,z)>limit){
          const centerDistance=Math.hypot(o.x,o.z);
          const along=(limit*limit-minDistance*minDistance+centerDistance*centerDistance)/(2*centerDistance);
          const heightSquared=limit*limit-along*along;
          if(centerDistance>0&&heightSquared>=0){
            const nx=o.x/centerDistance,nz=o.z/centerDistance,h=Math.sqrt(heightSquared);
            const a={x:nx*along-nz*h,z:nz*along+nx*h};
            const b={x:nx*along+nz*h,z:nz*along-nx*h};
            const nearest=Math.hypot(a.x-before.x,a.z-before.z)<=Math.hypot(b.x-before.x,b.z-before.z)?a:b;
            x=nearest.x;z=nearest.z;
          }else{const length=Math.hypot(x,z);x=x/length*limit;z=z/length*limit;}
        }
      }
    }
  }
  return {x,z};
}
export function segmentHit(ax,az,bx,bz,x,z,radius) {
  const dx=bx-ax,dz=bz-az;
  const t=Math.max(0,Math.min(1,((x-ax)*dx+(z-az)*dz)/(dx*dx+dz*dz||1)));
  return (ax+dx*t-x)**2+(az+dz*t-z)**2 <= radius*radius;
}
export function pickUpgrades(stacks,random=Math.random) {
  const pool=UPGRADES.filter(u=>(stacks[u.id]||0)<u.max);
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  return pool.slice(0,3);
}
