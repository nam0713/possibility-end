/* Possibility / Cosmos Edition
 * Small dependency-free WebGL renderer. Real 3D projection; no background video.
 * Bodies, positions and chapter names are fictional editorial illustrations.
 * No fonts, textures, telemetry or third-party JavaScript are bundled.
 */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const TAU = Math.PI * 2;
  const clamp = (x,a,b) => Math.max(a,Math.min(b,x));
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const chapters = JSON.parse($('novel-data').textContent);
  const instances = new Set();
  const hero = document.querySelector('.hero');
  const touchDevice = matchMedia('(pointer: coarse)');
  // The compositor owns page scrolling. Keep the last painted scene during a swipe,
  // including its inertial tail; resume the same camera only after scrolling settles.
  let pageScrolling=false, scrollIdleTimer=0, scrollUntil=0, nativeTouches=0;
  function holdForScroll(){
    if(!touchDevice.matches||document.body.classList.contains('ending-open'))return;
    pageScrolling=true;scrollUntil=performance.now()+180;
    for(const scene of instances){
      if(scene.drag?.axis==='scene')continue;
      if(scene.raf)cancelAnimationFrame(scene.raf);
      scene.raf=0;scene.lastTime=0;
    }
    clearTimeout(scrollIdleTimer);
    scrollIdleTimer=setTimeout(releaseScroll,200);
  }
  function releaseScroll(){
    if(nativeTouches){scrollIdleTimer=setTimeout(releaseScroll,120);return;}
    const remaining=scrollUntil-performance.now();
    if(remaining>0){scrollIdleTimer=setTimeout(releaseScroll,remaining+20);return;}
    pageScrolling=false;scrollIdleTimer=0;
    for(const scene of instances){
      scene.lastTime=0;
      if(scene.pendingResize){scene.pendingResize=false;scene.resize();}
      if(scene.visible)scene.request();
    }
  }
  const palette = [[.65,.78,.96],[.93,.84,.70],[.76,.87,.95],[.84,.72,.57],[1,.70,.39],[.51,.70,.86],[.70,.46,.33],[.85,.87,.98]];
  function random(seed) {return () => {seed |= 0;seed = seed + 0x6D2B79F5 | 0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return ((t^t>>>14)>>>0)/4294967296;};}
  function rotation(yaw,pitch,roll) {
    const a=Math.cos(yaw), b=Math.sin(yaw), c=Math.cos(pitch), d=Math.sin(pitch), e=Math.cos(roll), f=Math.sin(roll);
    // Column-major Rz * Rx * Ry, identical on CPU and in GLSL.
    return [e*a-f*d*b,f*a+e*d*b,-c*b, -f*c,e*c,d, e*b+f*d*a,f*b-e*d*a,c*a];
  }
  const transform=(m,p)=>[m[0]*p[0]+m[3]*p[1]+m[6]*p[2],m[1]*p[0]+m[4]*p[1]+m[7]*p[2],m[2]*p[0]+m[5]*p[1]+m[8]*p[2]];
  const inverse=(m,p)=>[m[0]*p[0]+m[1]*p[1]+m[2]*p[2],m[3]*p[0]+m[4]*p[1]+m[5]*p[2],m[6]*p[0]+m[7]*p[1]+m[8]*p[2]];
  const vert = `attribute vec3 aPosition;attribute vec3 aColor;attribute float aSize;
    uniform mat3 uView;uniform vec2 uScreen,uCenter;uniform float uFocal,uCamera,uDpr,uTime,uBackground;
    varying vec3 vColor;varying float vAlpha;
    void main(){vec3 v=uView*aPosition;float depth=max(1.0,uCamera-v.z);
      vec2 px=uCenter+vec2(v.x,-v.y)*uFocal/depth;
      gl_Position=vec4(px.x/uScreen.x*2.0-1.0,1.0-px.y/uScreen.y*2.0,0.0,1.0);
      gl_PointSize=clamp(aSize*uFocal/depth*uDpr,1.0,9.0*uDpr);
      vColor=aColor;vAlpha=(0.77+0.23*sin(uTime*.32+aPosition.x*3.1+aPosition.y*2.2));}
  `;
  const frag = `precision mediump float;varying vec3 vColor;varying float vAlpha;
    void main(){vec2 p=gl_PointCoord*2.0-1.0;float rr=dot(p,p);if(rr>1.0)discard;
    float a=(exp(-rr*5.0)*.80+exp(-rr*32.0)*.65)*vAlpha;
    gl_FragColor=vec4(vColor*a,a);}`;
  const lineVert = `attribute vec3 aPosition;attribute vec3 aColor;uniform mat3 uView;uniform vec2 uScreen,uCenter;uniform float uFocal,uCamera;varying vec3 vColor;
    void main(){vec3 v=uView*aPosition;float dep=max(1.0,uCamera-v.z);vec2 px=uCenter+vec2(v.x,-v.y)*uFocal/dep;
    gl_Position=vec4(px.x/uScreen.x*2.0-1.0,1.0-px.y/uScreen.y*2.0,0.,1.);vColor=aColor;}`;
  const lineFrag = `precision mediump float;varying vec3 vColor;void main(){gl_FragColor=vec4(vColor,.14);}`;
  const bodyVert = `attribute vec2 aCorner;uniform vec2 uCenter,uScreen;uniform float uRadius;varying vec2 vUv;
    void main(){vUv=aCorner;vec2 px=uCenter+aCorner*uRadius;gl_Position=vec4(px.x/uScreen.x*2.0-1.0,1.0-px.y/uScreen.y*2.0,0.,1.);}`;
  const bodyFrag = `precision highp float;
    uniform vec3 uColor;uniform float uTime,uStar,uSeed;varying vec2 vUv;
    float hash(vec3 p){p=fract(p*.3183099+vec3(.1,.2,.3));p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
    float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
      return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),
      mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
    float fbm(vec3 p){float n=0.,a=.5;for(int i=0;i<4;i++){n+=a*noise(p);p=p*2.08+3.2;a*=.5;}return n;}
    void main(){float ratio=uStar>.5?.29:.72;vec2 uv=vUv/ratio;float r=length(uv);
      if(uStar>.5){
        float halo=exp(-max(0.,r-1.)*3.5)*.40+exp(-max(0.,r-1.)*1.8)*.10;
        halo*=1.-smoothstep(2.9,3.44,r);
        if(r>1.){float a=atan(uv.y,uv.x);float ray=.8+.2*sin(a*15.+uTime*.10)*sin(a*23.-r*3.);
          gl_FragColor=vec4(uColor*halo*ray,halo*ray);return;}
        vec3 normal=vec3(uv,sqrt(max(0.,1.-r*r)));
        float gran=fbm(normal*19.+vec3(uTime*.08,0,uSeed));
        float swirls=fbm(normal*5.+vec3(0,uTime*.035,0));
        float light=(.42+.60*normal.z)*(1.+gran*.42);
        vec3 color=mix(uColor,vec3(1.),.68+gran*.2)*(1.05+normal.z*.2);
        if(uStar>1.5){color=mix(vec3(.71,.27,.06),vec3(1.,.88,.60),smoothstep(.12,.88,gran+swirls*.26));color=mix(color,vec3(1.,.93,.75),.18*normal.z)*light;}
        if(uSeed>7.5)color*=vec3(.81,.90,1.2);
        float rim=pow(1.-normal.z,4.)*.2;
        gl_FragColor=vec4(color+uColor*rim,1.);return;}
      if(r>1.08)discard;
      if(r>1.){float a=(1.-smoothstep(1.,1.08,r))*.14;gl_FragColor=vec4(uColor*a,a);return;}
      vec3 normal=vec3(uv,sqrt(max(0.,1.-r*r)));
      float tex=fbm(normal*(uSeed>5.?13.:7.)+vec3(uSeed*3.,uTime*.015,0));
      float bands=sin(normal.y*21.+tex*6.)*.13;
      float lighting=max(0.,dot(normal,normalize(vec3(-.75,-.45,1.))))*.85+.06;
      vec3 color=uColor*(.49+tex*.82+bands)*lighting;
      color+=uColor*pow(1.-normal.z,5.)*.15;
      gl_FragColor=vec4(color,1.);
    }`;

  class Space {
    constructor(canvas,{mini=false,immersive=false,theme=0,hotspots=null}={}) {
      this.canvas=canvas;this.mini=mini;this.immersive=immersive;this.theme=theme;this.hotspots=hotspots;this.localPaused=false;
      this.form='ring';this.time=0;this.yaw=.22;this.pitch=.59;this.roll=-.32;this.zoom=1;
      this.offsets=Array.from({length:8},()=>[0,0,0]);this.projected=[];this.selected=0;
      this.visible=false;this.destroyed=false;this.raf=0;this.lastTime=0;this.drag=null;
      this.stats={frames:0,rotations:0,moves:0,zooms:0,resets:0,resizes:0,renderMs:0,maxRenderMs:0};this.abort=new AbortController();
      this.lastPaint=0;this.pendingResize=false;
      this.hotspotButtons=hotspots?[...hotspots.querySelectorAll('[data-star]')]:null;
      this.orbit=hotspots?$('chapter-orbit'):null;
      this.orbitLine=hotspots?$('chapter-orbit-line'):null;
      this.orbitFocus=hotspots?$('chapter-orbit-focus'):null;
      this.hotspotCache=Array.from({length:8},()=>({}));
      this.setupRenderer();this.createData();this.attach();instances.add(this);
      this.resizeObserver=new ResizeObserver(()=>this.resize());this.resizeObserver.observe(this.canvas);
      this.visibilityObserver=new IntersectionObserver(entries=>{
        const e=entries[0];this.visible=e.isIntersecting&&e.intersectionRect.width>0&&e.intersectionRect.height>0;
        this.lastTime=0;
        if(this.visible)this.request();
        else {cancelAnimationFrame(this.raf);this.raf=0;}
      },{threshold:0});this.visibilityObserver.observe(this.canvas);
      this.resize();
    }
    setupRenderer(){
      try{
        this.gl=this.canvas.getContext('webgl',{alpha:true,antialias:false,depth:false,premultipliedAlpha:true,powerPreference:'low-power'});
        if(!this.gl)throw new Error('WebGL unavailable');
        this.initGL();this.canvas.dataset.renderer='webgl';
      }catch(error){
        console.warn('Cosmos: using Canvas2D fallback:',error.message);
        if(this.gl){const old=this.canvas;this.canvas=old.cloneNode(false);old.replaceWith(this.canvas);this.gl=null;}
        this.ctx=this.canvas.getContext('2d',{alpha:true});this.canvas.dataset.renderer='canvas2d';
        if(!this.ctx)this.canvas.dataset.renderer='unavailable';
      }
    }
    program(vs,fs){
      const gl=this.gl;
      const shader=(type,source)=>{const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s;};
      const v=shader(gl.VERTEX_SHADER,vs),f=shader(gl.FRAGMENT_SHADER,fs),p=gl.createProgram();gl.attachShader(p,v);gl.attachShader(p,f);gl.linkProgram(p);gl.deleteShader(v);gl.deleteShader(f);
      if(!gl.getProgramParameter(p,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(p));
      const result={p,u:{},a:{}};
      for(const n of ['uView','uScreen','uCenter','uFocal','uCamera','uDpr','uTime','uBackground','uRadius','uColor','uStar','uSeed'])result.u[n]=gl.getUniformLocation(p,n);
      for(const n of ['aPosition','aColor','aSize','aCorner'])result.a[n]=gl.getAttribLocation(p,n);
      return result;
    }
    initGL(){
      const gl=this.gl;this.pointProgram=this.program(vert,frag);this.lineProgram=this.program(lineVert,lineFrag);this.bodyProgram=this.program(bodyVert,bodyFrag);
      this.bgBuffer=gl.createBuffer();this.pointBuffer=gl.createBuffer();this.lineBuffer=gl.createBuffer();this.quadBuffer=gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER,this.quadBuffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
      gl.disable(gl.DEPTH_TEST);gl.enable(gl.BLEND);gl.clearColor(0,0,0,0);
    }
    createData(){
      const rng=random(5142+this.theme*7), points=[],background=[],lines=[];
      const point=(p,c,size=.022)=>points.push(...p,...c,size);
      for(let i=0;i<(this.mini?120:650);i++){
        const p=[(rng()-.5)*60,(rng()-.5)*36,-8-rng()*32],c=[.80,.84,.90];const brightness=.12+rng()*.40;
        background.push(...p,...c.map(x=>x*brightness),i%39===0?.075:.012+rng()*.034);
      }
      const sculpted=!this.mini&&this.form==='ring';
      const count=this.mini?(this.immersive?(innerWidth<760?22000:36000):12000):(sculpted?(innerWidth<760?27000:52000):(innerWidth<760?8000:15000)),mode=this.theme;
      for(let i=0;i<count;i++){
        let p,c;const a=rng()*TAU,r=Math.pow(rng(),.65)*4.0;
        if(sculpted){
          // A folded toroidal ribbon; no logo, stock texture or numeral is copied.
          // Layered filaments preserve a crisp, particulate surface in motion.
          const t=rng()*TAU, strand=Math.floor(rng()*32), v=strand/32*TAU+(rng()-.5)*.026;
          const scatter=Math.pow(rng(),3), tube=i%3===0?.29+scatter*.20:.38+(rng()-.5)*.033;
          const twist=v+t*1.6, rad=2.05+Math.cos(t*2)*.13+tube*Math.cos(twist);
          const flutter=(rng()-.5)*.024;
          p=[rad*Math.cos(t),rad*Math.sin(t)*.84,tube*Math.sin(twist)+.48*Math.sin(t)+.11*Math.sin(t*3)];
          p[0]+=flutter;p[1]+=flutter;
          if(i%11===0){const scale=.88+rng()*.32;p=p.map(x=>x*scale);p[2]+=(rng()-.5)*.25;}
          if(i%29===0){const scale=.9+rng()*.7;p=p.map(x=>x*scale);}
          const diffuse=.38+.62*Math.pow(Math.max(0,Math.sin(t-.9)*.5+Math.cos(twist)*.5),.6);
          const shade=(.48+rng()*.70)*diffuse;
          const warmth=(Math.sin(t+1)*.5+.5)*.13;
          c=[shade,shade*(.99-warmth*.15),shade*(1.03-warmth)];
          point(p,c,(i%113===0?.038:.011+rng()*.015));
          continue;
        } else if(!this.mini||mode===5){
          const angle=a+r*1.1;const arm=Math.floor(rng()*3)*TAU/3+r*1.0+(rng()-.5)*1.55;
          const ar=i%3===0?angle:arm;
          p=[Math.cos(ar)*r,(rng()-.5)*(.10+r*.09),Math.sin(ar)*r];
          if(i%5===0){const z=rng()*2-1,rr=Math.sqrt(1-z*z)*r*.72;p=[rr*Math.cos(ar),z*r*.62,rr*Math.sin(ar)];}
          c=i%7===0?[.40,.59,.81]:[.69,.64,.53];
        } else if(mode===1){
          // Nested field lines: a luminous, recursive structure rather than a small ball.
          const t=rng()*TAU, strand=Math.floor(rng()*42), v=strand/42*Math.PI;
          const radius=2.03+.19*Math.sin(t*4+v*3), drift=(rng()-.5)*.018;
          p=[Math.cos(t)*Math.cos(v)*radius+drift,Math.sin(t)*radius,Math.cos(t)*Math.sin(v)*radius];
          c=i%13===0?[.95,.79,.57]:[.65,.82,1.0];
        } else if(mode===2){
          const axis=i%3,step=.4;
          p=[(Math.floor(rng()*10)-4.5)*step,(Math.floor(rng()*10)-4.5)*step,(Math.floor(rng()*10)-4.5)*step];
          p[axis]=(rng()-.5)*3.6;
          p=p.map(x=>x+(rng()-.5)*.014);c=i%31===0?[.95,.86,.71]:[.62,.82,1.0];
        } else if(mode===3){
          const t=a,v=Math.floor(rng()*26)/26*TAU,rr=.13+rng()*.027;
          p=[(Math.sin(t)+2*Math.sin(2*t))*.71+rr*Math.cos(v),(Math.cos(t)-2*Math.cos(2*t))*.71+rr*Math.sin(v),-Math.sin(3*t)*.96+rr*Math.sin(v+t)];
          c=i%17===0?[.99,.80,.55]:[.70,.82,.95];
        } else if(mode===4){
          const t=a,s=Math.floor(rng()*3)*TAU/3, v=rng()*TAU, thickness=.09;
          const rad=2.08+Math.cos(v)*thickness;
          p=[Math.cos(t)*rad,Math.sin(t)*Math.sin(s)*rad+Math.sin(v)*thickness,Math.sin(t)*Math.cos(s)*rad];
          c=i%5===0?[.94,.76,.51]:[.76,.87,.99];
        } else if(mode===6){
          const side=i%2===0?-1:1, rad=Math.pow(rng(),.6)*1.12,phase=Math.floor(rng()*3)*TAU/3+rad*2.7+(rng()-.5)*.55;
          p=[side*1.55+Math.cos(phase)*rad,(rng()-.5)*.12,Math.sin(phase)*rad+side*.33];
          c=side<0?[1.,.75,.47]:[.50,.76,1.0];
        } else if(mode===7){
          const rad=1.14+Math.pow(rng(),2)*1.46;
          p=[Math.cos(a)*rad,(rng()-.5)*.11+Math.sin(a*3)*.022,Math.sin(a)*rad];
          c=i%7===0?[.44,.68,1.]:[1.,.69,.36];
        } else {
          const z=rng()*2-1,rr=1.8+.40*Math.sin(a*4+z*3)+(rng()-.5)*.025,rz=Math.sqrt(1-z*z);
          p=[rr*rz*Math.cos(a),rr*z,rr*rz*Math.sin(a)];c=i%19===0?[1.,.76,.52]:[.76,.85,1.];
        }
        const intensity=.23+rng()*.66;point(p,c.map(x=>x*intensity),(this.immersive?.012:.016)+rng()*.022);
      }
      // Deliberate guide orbits: quiet, not a decorative wireframe cage.
      const orbit=(radius,tilt,color=[.065,.085,.11])=>{
        const segments=this.mini?140:220;
        for(let j=0;j<segments;j++){
          if(j%11===0)continue;
          for(let k=0;k<2;k++){const a=(j+k)/segments*TAU;
            lines.push(Math.cos(a)*radius,Math.sin(a)*tilt,Math.sin(a)*radius,...color);}
        }
      };
      if((!this.mini&&!sculpted)||this.mini&&[4,5,7].includes(mode))for(let i=0;i<3;i++)orbit(this.mini?1.25+i*.5:1.1+i*1.29,this.mini?.42:i*.048);
      if(this.mini&&mode===2){for(let i=-1;i<=1;i+=2)for(let j=-1;j<=1;j+=2)for(let axis=0;axis<3;axis++){let p1=[i*1.75,j*1.75,-1.75],p2=[i*1.75,j*1.75,1.75];if(axis===1){p1=[p1[2],p1[0],p1[1]];p2=[p2[2],p2[0],p2[1]];}if(axis===2){p1=[p1[0],p1[2],p1[1]];p2=[p2[0],p2[2],p2[1]];}lines.push(...p1,.15,.24,.30,...p2,.15,.24,.30);}}
      this.points=new Float32Array(points);this.background=new Float32Array(background);this.lines=new Float32Array(lines);
      this.prepareFallback();this.upload();
    }
    prepareFallback(){
      if(!this.ctx)return;
      // Pre-bucket colours and sample the cloud once, instead of allocating vectors,
      // subarrays and thousands of rgba strings on every Canvas2D frame.
      const bins=new Map(),p=this.points;
      const limit=touchDevice.matches?10000:26000;
      const step=Math.max(2,Math.ceil(p.length/7/limit))*7;
      for(let i=0;i<p.length;i+=step){
        const c=[p[i+3],p[i+4],p[i+5]].map(v=>clamp(Math.round(v*255/16)*16,0,255));
        const key=c.join(',');if(!bins.has(key))bins.set(key,[]);
        bins.get(key).push(p[i],p[i+1],p[i+2]);
      }
      this.fallbackGroups=[...bins].map(([color,xyz])=>({color:`rgba(${color},.72)`,xyz:new Float32Array(xyz)}));
      this.fallbackBackground=null;
    }
    upload(){if(!this.gl||this.contextLost)return;const g=this.gl;for(const [buf,data] of [[this.bgBuffer,this.background],[this.pointBuffer,this.points],[this.lineBuffer,this.lines]]){g.bindBuffer(g.ARRAY_BUFFER,buf);g.bufferData(g.ARRAY_BUFFER,data,g.STATIC_DRAW);}}
    resize(){
      const w=this.canvas.clientWidth,h=this.canvas.clientHeight;
      if(!w||!h)return;
      const maxPixels=touchDevice.matches?1100000:this.immersive?1900000:this.mini?650000:2300000;
      const dpr=Math.min(devicePixelRatio||1,1.5,Math.sqrt(maxPixels/(w*h)));
      const bw=Math.max(1,Math.floor(w*dpr)),bh=Math.max(1,Math.floor(h*dpr));
      if(this.w===w&&this.h===h&&this.canvas.width===bw&&this.canvas.height===bh){this.request();return;}
      if(pageScrolling&&this.w){this.pendingResize=true;return;}
      this.w=w;this.h=h;this.dpr=dpr;
      if(this.canvas.width!==bw)this.canvas.width=bw;
      if(this.canvas.height!==bh)this.canvas.height=bh;
      this.stats.resizes++;this.fallbackBackground=null;
      if(this.gl)this.gl.viewport(0,0,this.canvas.width,this.canvas.height);
      this.metrics();this.request();
    }
    metrics(){
      const exploring=hero.classList.contains('is-exploring');
      if(this.immersive){
        const mobile=this.w<=760;
        this.center=[this.w*(mobile?.52:.72),this.h*(mobile?.54:.365)];
        this.focal=mobile?this.w*1.63:Math.min(this.w*.70,this.h*.81)*1.37;
        this.camera=6.6/this.zoom;
      }
      else if(this.mini){this.center=[this.w*.5,this.h*.49];this.focal=Math.min(this.w,this.h)*1.38;this.camera=6.6/this.zoom;}
      else if(this.w<=760){
        const landscape=this.w>this.h*1.2;
        this.center=[this.w*(landscape&&!exploring?.71:.5),this.h*(landscape?.43:exploring?.40:this.h<660?.445:.455)];
        this.focal=Math.min(this.w*(this.form==='ring'?1.18:.92),this.h*(exploring?.74:this.h<660?.47:.56));this.camera=7.8/this.zoom;
      }
      else{this.center=[this.w*(exploring?.5:.69),this.h*(exploring?.45:.455)];this.focal=Math.min(this.w*.57,this.h*.93)*(this.form==='ring'?1:.83);this.camera=7.8/this.zoom;}
      this.matrix=rotation(this.yaw,this.pitch,this.roll);
    }
    project(p){const v=transform(this.matrix,p),d=Math.max(1,this.camera-v[2]);return {x:this.center[0]+v[0]*this.focal/d,y:this.center[1]-v[1]*this.focal/d,z:v[2],depth:d};}
    bodies(){
      if(this.mini){
        if([1,2,3,8].includes(this.theme))return [{n:this.theme,p:[0,0,0],radius:.045,color:palette[this.theme-1],star:true}];
        if(this.theme===6)return [{n:6,p:[-1.65,0,-.3],radius:.075,color:palette[1],star:true},{n:6,p:[1.65,0,.3],radius:.08,color:palette[0],star:true}];
        if(this.theme===7)return [];
        return [{n:this.theme,p:[0,0,0],radius:this.theme===5?.39:.16,color:palette[this.theme-1],star:true}];
      }
      if(this.form==='ring'){
        const sizes=[.032,.037,.030,.035,.043,.032,.038,.030];
        return sizes.map((radius,i)=>{
          const t=i/8*TAU+.18+this.time*.007,r=2.88+(i%2)*.13,o=this.offsets[i];
          const p=[Math.cos(t)*r+o[0],Math.sin(t)*r*.84+o[1],.38*Math.sin(t)+o[2]];
          return {n:i+1,p,radius,color:i===4?[1,.90,.76]:[.83,.91,1],star:true};
        });
      }
      const radii=[1.10,1.55,1.98,2.42,0,2.87,3.3,3.73],angles=[.55,2.48,4.45,3.5,0,5.5,2.06,4.60];
      return radii.map((r,i)=>{
        const angle=angles[i]+this.time*.009/(r||1),o=this.offsets[i],central=i===4;
        const p=[Math.cos(angle)*r+o[0],Math.sin(angle)*r*.05+o[1],Math.sin(angle)*r+o[2]];
        return {n:i+1,p:central?[...o]:p,radius:central?.53:[.11,.16,.13,.10,0,.12,.19,.043][i],color:palette[i],star:central||i===7};
      });
    }
    auto(){return (!this.mini||this.immersive)&&!this.localPaused&&!document.hidden&&!document.body.classList.contains('ending-open')&&!reduced.matches&&!document.body.classList.contains('motion-paused')&&!this.drag&&this.visible&&(this.immersive?document.body.dataset.view==='reader'&&window.scrollY<650:document.body.dataset.view==='home');}
    request(){
      if(pageScrolling&&this.drag?.axis!=='scene')return;
      if(this.visible&&!document.body.classList.contains('ending-open')&&!this.raf&&!this.destroyed&&!document.hidden&&!this.contextLost)this.raf=requestAnimationFrame(t=>this.frame(t));
    }
    frame(t){
      this.raf=0;if(!this.visible||this.destroyed||document.hidden||this.contextLost||document.body.classList.contains('ending-open'))return;
      if(pageScrolling&&this.drag?.axis!=='scene'){this.lastTime=0;return;}
      // Slow atmospheric drift does not need 60 heavy repaints on a phone.
      // Direct dragging stays responsive at the display refresh rate.
      const interval=(touchDevice.matches||this.ctx)&&this.auto()&&!this.drag?1000/30:0;
      if(interval&&this.lastPaint&&t-this.lastPaint<interval-1){this.request();return;}
      this.lastPaint=t;const began=performance.now();
      const dt=this.lastTime?Math.min(50,t-this.lastTime):16;this.lastTime=t;
      if(this.auto()){this.time+=dt*.001;this.yaw+=dt*(this.immersive?.000009:.000003);}
      this.metrics();const bodies=this.bodies();this.projected=bodies.map(b=>({...b,...this.project(b.p)}));
      if(this.gl)this.drawGL(bodies);else if(this.ctx)this.draw2D(bodies);
      this.updateHotspots();this.stats.frames++;
      const cost=performance.now()-began;this.stats.renderMs+=cost;this.stats.maxRenderMs=Math.max(this.stats.maxRenderMs,cost);
      if(this.auto())this.request();
    }
    common(program,background=false){
      const g=this.gl,u=program.u;g.useProgram(program.p);
      if(u.uView)g.uniformMatrix3fv(u.uView,false,new Float32Array(background?rotation(this.yaw*.10,this.pitch*.14,0):this.matrix));
      if(u.uScreen)g.uniform2f(u.uScreen,this.w,this.h);
      if(u.uCenter)g.uniform2f(u.uCenter,...(background?[this.w*.5,this.h*.5]:this.center));
      if(u.uFocal)g.uniform1f(u.uFocal,this.focal);
      if(u.uCamera)g.uniform1f(u.uCamera,background?9:this.camera);
      if(u.uDpr)g.uniform1f(u.uDpr,this.dpr);
      if(u.uTime)g.uniform1f(u.uTime,this.time);
    }
    attrib(program,name,size,stride,offset){const a=program.a[name];if(a<0)return;const g=this.gl;g.enableVertexAttribArray(a);g.vertexAttribPointer(a,size,g.FLOAT,false,stride,offset);}
    drawGL(bodies){
      const g=this.gl;g.clear(g.COLOR_BUFFER_BIT);g.blendFunc(g.ONE,g.ONE);
      const points=(buffer,array,bg)=>{const p=this.pointProgram;this.common(p,bg);g.bindBuffer(g.ARRAY_BUFFER,buffer);this.attrib(p,'aPosition',3,28,0);this.attrib(p,'aColor',3,28,12);this.attrib(p,'aSize',1,28,24);g.drawArrays(g.POINTS,0,array.length/7);};
      points(this.bgBuffer,this.background,true);
      if(this.lines.length){const p=this.lineProgram;this.common(p);g.bindBuffer(g.ARRAY_BUFFER,this.lineBuffer);this.attrib(p,'aPosition',3,24,0);this.attrib(p,'aColor',3,24,12);g.drawArrays(g.LINES,0,this.lines.length/6);}
      points(this.pointBuffer,this.points,false);
      // Sort billboards in camera depth, with premultiplied alpha for opaque planets.
      this.projected.sort((a,b)=>a.z-b.z);
      for(const b of this.projected){
        const p=this.bodyProgram,u=p.u;g.useProgram(p.p);g.blendFunc(g.ONE,g.ONE_MINUS_SRC_ALPHA);
        const r=b.radius*this.focal/b.depth/(b.star?.29:.72);
        g.uniform2f(u.uScreen,this.w,this.h);g.uniform2f(u.uCenter,b.x,b.y);g.uniform1f(u.uRadius,r);g.uniform3f(u.uColor,...b.color);g.uniform1f(u.uStar,b.star?(this.form==='galaxy'&&!this.mini?2:1):0);g.uniform1f(u.uTime,this.time);g.uniform1f(u.uSeed,b.n);
        g.bindBuffer(g.ARRAY_BUFFER,this.quadBuffer);this.attrib(p,'aCorner',2,8,0);g.drawArrays(g.TRIANGLES,0,6);
      }
    }
    draw2D(){
      const ctx=this.ctx;ctx.setTransform(this.dpr,0,0,this.dpr,0,0);ctx.clearRect(0,0,this.w,this.h);ctx.globalCompositeOperation='lighter';
      if(!this.fallbackBackground){
        const cache=document.createElement('canvas');cache.width=this.canvas.width;cache.height=this.canvas.height;
        const c=cache.getContext('2d');c.scale(this.dpr,this.dpr);
        const rng=random(371);for(let i=0;i<(this.mini?60:380);i++){const a=.12+rng()*.43;c.fillStyle=`rgba(190,197,209,${a*.55})`;c.beginPath();c.arc(rng()*this.w,rng()*this.h,.25+rng()*.75,0,TAU);c.fill();}
        this.fallbackBackground=cache;
      }
      ctx.drawImage(this.fallbackBackground,0,0,this.w,this.h);
      ctx.lineWidth=.6;ctx.strokeStyle='rgba(93,118,152,.22)';ctx.beginPath();for(let i=0;i<this.lines.length;i+=12){const a=this.project(this.lines.subarray(i,i+3)),b=this.project(this.lines.subarray(i+6,i+9));ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);}ctx.stroke();
      const m=this.matrix,f=this.focal,cx=this.center[0],cy=this.center[1],camera=this.camera;
      for(const group of this.fallbackGroups){
        ctx.fillStyle=group.color;const p=group.xyz;
        for(let i=0;i<p.length;i+=3){
          const x=p[i],y=p[i+1],z=p[i+2];
          const d=Math.max(1,camera-(m[2]*x+m[5]*y+m[8]*z));
          ctx.fillRect(cx+(m[0]*x+m[3]*y+m[6]*z)*f/d,cy-(m[1]*x+m[4]*y+m[7]*z)*f/d,1,1);
        }
      }
      ctx.globalCompositeOperation='source-over';
      for(const b of this.projected.sort((a,b)=>a.z-b.z)){
        const r=Math.max(2,b.radius*this.focal/b.depth);if(b.star){const tint=this.form==='ring'?b.color.map(c=>Math.round(c*255)).join(','):'242,157,77';const halo=ctx.createRadialGradient(b.x,b.y,r*.8,b.x,b.y,r*3.4);halo.addColorStop(0,`rgba(${tint},.45)`);halo.addColorStop(.45,`rgba(${tint},.12)`);halo.addColorStop(1,`rgba(${tint},0)`);ctx.fillStyle=halo;ctx.beginPath();ctx.arc(b.x,b.y,r*3.4,0,TAU);ctx.fill();}
        const g=ctx.createRadialGradient(b.x-r*.35,b.y-r*.4,r*.05,b.x,b.y,r);g.addColorStop(0,b.star?(this.form==='ring'?'#ffffff':'#fce0aa'):`rgb(${b.color.map(c=>Math.round(c*230)).join(',')})`);g.addColorStop(.65,b.star?(this.form==='ring'?'#dddce3':'#d89b55'):`rgb(${b.color.map(c=>Math.round(c*105)).join(',')})`);g.addColorStop(1,b.star?(this.form==='ring'?'#bcbcc4':'#995629'):'#0b1019');ctx.fillStyle=g;ctx.beginPath();ctx.arc(b.x,b.y,r,0,TAU);ctx.fill();
      }
    }
    updateHotspots(){
      if(!this.hotspots)return;
      const normal=!hero.classList.contains('is-exploring');
      for(const b of this.projected){
        const el=this.hotspotButtons[b.n-1],cache=this.hotspotCache[b.n-1];if(!el)continue;
        // The cover title now occupies the left column; controls occupy the bottom.
        const mobile=this.w<=760,landscape=this.w>this.h*1.2;
        const obscured=normal&&(mobile&&!landscape?b.y<205:b.x<this.w*.44&&b.y<this.h*.65);
        const out=b.x<24||b.y<100||b.x>this.w-34||b.y>this.h-(mobile?235:165)||obscured;
        if(el.hidden!==out)el.hidden=out;
        if(out)continue;
        const pos=`translate3d(${(Math.round((b.x-22)*2)/2)}px,${(Math.round((b.y-22)*2)/2)}px,0)`;
        const radius=(b.radius*this.focal/b.depth).toFixed(1),selected=String(b.n===this.selected),central=b.n===5;
        if(cache.pos!==pos){el.style.transform=pos;cache.pos=pos;}
        if(cache.radius!==radius){el.style.setProperty('--body-radius',`${radius}px`);cache.radius=radius;}
        if(cache.central!==central){el.classList.toggle('is-central',central);cache.central=central;}
        if(cache.selected!==selected){el.setAttribute('aria-pressed',selected);cache.selected=selected;}
      }
      if(this.orbit){
        this.orbit.toggleAttribute('hidden',this.form!=='ring');
        const nodes=[...this.projected].sort((a,b)=>a.n-b.n);
        this.orbitLine.setAttribute('d',nodes.map((b,i)=>`${i?'L':'M'}${b.x.toFixed(1)} ${b.y.toFixed(1)}`).join(' ')+' Z');
        const selected=nodes.find(b=>b.n===this.selected);
        this.orbitFocus.toggleAttribute('hidden',!selected);
        if(selected){this.orbitFocus.setAttribute('cx',selected.x.toFixed(1));this.orbitFocus.setAttribute('cy',selected.y.toFixed(1));}
      }
    }
    pick(x,y){if(this.mini)return null;let selected=null,dist=Infinity;for(const b of this.projected){const d=Math.hypot(x-b.x,y-b.y),limit=Math.max(24,b.radius*this.focal/b.depth+12);if(d<limit&&d<dist){dist=d;selected=b;}}return selected;}
    attach(){
      const signal=this.abort.signal,el=this.hotspots?this.canvas.parentElement:this.canvas;
      const listen=(node,event,fn,opts={})=>node.addEventListener(event,fn,{...opts,signal});
      const capture=id=>{try{el.setPointerCapture(id);}catch{}};
      listen(el,'pointerdown',e=>{
        if(e.button!==0||!e.isPrimary||e.target.closest('.mini-reset'))return;
        const r=this.canvas.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
        const nativePan=e.pointerType==='touch'&&(this.mini||!hero.classList.contains('is-exploring'));
        this.drag={id:e.pointerId,x,y,startX:x,startY:y,left:r.left,top:r.top,body:this.pick(x,y),moved:false,axis:nativePan?'pending':'scene'};
        if(nativePan){holdForScroll();return;}
        capture(e.pointerId);if(!this.mini)el.classList.add('is-dragging');
      },{passive:true});
      listen(el,'pointermove',e=>{
        if(!this.drag||this.drag.id!==e.pointerId)return;
        const d=this.drag,x=e.clientX-d.left,y=e.clientY-d.top;
        const totalX=x-d.startX,totalY=y-d.startY;
        if(d.axis==='pending'){
          if(Math.max(Math.abs(totalX),Math.abs(totalY))<9)return;
          if(Math.abs(totalY)>=Math.abs(totalX)*.85){this.drag=null;holdForScroll();return;}
          d.axis='scene';capture(e.pointerId);if(!this.mini)el.classList.add('is-dragging');
        }
        const dx=x-d.x,dy=y-d.y;d.x=x;d.y=y;
        if(Math.hypot(totalX,totalY)>4)d.moved=true;
        if(d.body){const view=[dx*d.body.depth/this.focal,-dy*d.body.depth/this.focal,0],world=inverse(this.matrix,view),off=this.offsets[d.body.n-1];for(let i=0;i<3;i++)off[i]=clamp(off[i]+world[i],-4.5,4.5);this.stats.moves++;}
        else{this.yaw+=dx*.005;this.pitch=clamp(this.pitch+dy*.004,-1.3,1.3);this.stats.rotations++;}
        this.request();
      },{passive:true});
      const end=e=>{
        if(!this.drag||e.pointerId!==this.drag.id)return;
        const d=this.drag;this.drag=null;
        if(!this.mini)el.classList.remove('is-dragging');
        if(e.type!=='pointercancel'&&d.body){this.select(d.body.n);if(d.moved)$('cosmos-announcement').textContent=`${chapters[d.body.n-1].short} 별의 위치를 옮겼습니다. 초기화 버튼으로 복원할 수 있습니다.`;}
        if(e.type==='pointercancel'&&d.axis==='pending')holdForScroll();
        this.lastTime=0;this.request();
      };
      listen(el,'pointerup',end,{passive:true});listen(el,'pointercancel',end,{passive:true});
      listen(el,'lostpointercapture',e=>{if(e.target!==el||el.hasPointerCapture(e.pointerId))return;if(this.drag&&e.pointerId===this.drag.id){this.drag=null;el.classList.remove('is-dragging');this.request();}},{passive:true});
      listen(this.canvas,'keydown',e=>{
        if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','=','-','r','R'].includes(e.key)){
          e.preventDefault();if(e.key==='ArrowLeft')this.yaw-=.09;if(e.key==='ArrowRight')this.yaw+=.09;if(e.key==='ArrowUp')this.pitch=clamp(this.pitch-.08,-1.3,1.3);if(e.key==='ArrowDown')this.pitch=clamp(this.pitch+.08,-1.3,1.3);
          if(e.key==='+'||e.key==='=')this.adjustZoom(1.10);if(e.key==='-')this.adjustZoom(1/1.10);if(e.key.toLowerCase()==='r')this.reset();this.request();
        }
      });
      if(!this.mini){
        this.wheelTarget=el;
        this.wheelZoom=e=>{if(!e.ctrlKey){e.preventDefault();this.adjustZoom(Math.exp(-e.deltaY*.001));}};
      }
      listen(this.canvas,'webglcontextlost',e=>{e.preventDefault();this.contextLost=true;if(this.raf)cancelAnimationFrame(this.raf);this.raf=0;this.canvas.dataset.renderer='context-lost';});
      listen(this.canvas,'webglcontextrestored',()=>{try{this.contextLost=false;this.initGL();this.upload();this.canvas.dataset.renderer='webgl';this.resize();}catch{this.canvas.dataset.renderer='unavailable';}});
    }
    setWheelCapture(active){
      if(!this.wheelTarget)return;
      this.wheelTarget.removeEventListener('wheel',this.wheelZoom);
      if(active)this.wheelTarget.addEventListener('wheel',this.wheelZoom,{passive:false,signal:this.abort.signal});
    }
    select(n){this.selected=n;this.request();if(this.mini)return;showSelection(n);}
    adjustZoom(mult){this.zoom=clamp(this.zoom*mult,.67,1.55);this.stats.zooms++;this.request();if(!this.mini){$('cosmos-zoom-in').disabled=this.zoom>=1.549;$('cosmos-zoom-out').disabled=this.zoom<=.671;}}
    reset(){this.yaw=.22;this.pitch=.59;this.roll=-.32;this.zoom=1;this.time=0;this.offsets=Array.from({length:8},()=>[0,0,0]);this.stats.resets++;this.selected=0;if(!this.mini){hero.classList.remove('has-selection');$('star-inspector').hidden=true;$('cosmos-zoom-in').disabled=false;$('cosmos-zoom-out').disabled=false;document.querySelectorAll('.constellation-nav button').forEach(e=>e.setAttribute('aria-pressed','false'));$('cosmos-announcement').textContent='처음의 우주로 돌아왔습니다.';}this.request();}
    setForm(form){if(!['ring','galaxy'].includes(form)||this.mini||this.form===form)return;this.form=form;this.reset();this.createData();this.resize();}
    setTheme(n){if(this.theme===n)return;this.theme=n;this.reset();this.createData();this.request();}
    dispose(){
      if(this.destroyed)return;this.destroyed=true;cancelAnimationFrame(this.raf);this.abort.abort();this.resizeObserver.disconnect();this.visibilityObserver.disconnect();instances.delete(this);
      if(this.gl){const g=this.gl;for(const p of [this.pointProgram,this.lineProgram,this.bodyProgram])g.deleteProgram(p.p);for(const b of [this.bgBuffer,this.pointBuffer,this.lineBuffer,this.quadBuffer])g.deleteBuffer(b);g.getExtension('WEBGL_lose_context')?.loseContext();}
    }
  }

  // Accessible HTML buttons sit on top of the actual 3D positions, not fake links.
  const hotspots=$('star-hotspots');
  chapters.forEach(c=>{
    const b=document.createElement('button');b.className='star-hotspot';b.dataset.star=c.number;b.setAttribute('aria-label',`${c.number}번 별, ${c.short} 선택. 드래그로 이동`);b.setAttribute('aria-pressed','false');
    const label=document.createElement('span');label.className='star-label';label.textContent=String(c.number).padStart(2,'0');const title=document.createElement('b');title.textContent=c.short;label.append(title);b.append(label);hotspots.append(b);
    b.addEventListener('click',e=>{if(e.detail===0)universe.select(c.number);});
    const tab=document.createElement('button');tab.dataset.selectStar=c.number;tab.setAttribute('aria-pressed','false');tab.innerHTML=`<span class="mono">${String(c.number).padStart(2,'0')}</span><span>${c.number===8?'가능성':c.short}</span>`;tab.setAttribute('aria-label',`${c.title} 별 선택`);tab.addEventListener('click',()=>universe.select(c.number));$('constellation-nav').append(tab);
  });
  const universe=new Space($('cosmos-canvas'),{hotspots});
  function showSelection(n){
    hero.classList.add('has-selection');
    const c=chapters[n-1];$('star-number').textContent=`${String(n).padStart(2,'0')} / 08`;$('star-title').textContent=c.short;$('star-deck').textContent=c.deck.replace(/\n/g,' ');$('star-read').href=`#chapter-${n}`;$('star-inspector').hidden=false;
    document.querySelectorAll('.constellation-nav button').forEach(e=>e.setAttribute('aria-pressed',String(+e.dataset.selectStar===n)));
    $('cosmos-announcement').textContent=`${c.title} 선택. ‘읽기’로 장을 열 수 있습니다.`;
    document.dispatchEvent(new CustomEvent('novel:selection',{detail:n}));
  }
  function setExploring(value,focus=true){
    hero.classList.toggle('is-exploring',value);$('explore-universe').setAttribute('aria-pressed',String(value));$('exit-universe').hidden=!value;
    for(const el of [document.querySelector('.hero-content')])if(el)el.inert=value;
    $('star-inspector').hidden=true;universe.selected=0;
    hero.classList.remove('has-selection');
    document.querySelectorAll('.constellation-nav button').forEach(e=>e.setAttribute('aria-pressed','false'));
    if(value)window.scrollTo({top:0,behavior:'instant'});
    universe.setWheelCapture(value);universe.resize();
    if(focus)(value?universe.canvas:$('explore-universe')).focus({preventScroll:true});
  }
  document.querySelectorAll('[data-form]').forEach(button=>button.addEventListener('click',()=>{universe.setForm(button.dataset.form);document.querySelectorAll('[data-form]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));$('cosmos-announcement').textContent=button.dataset.form==='ring'?'빛의 고리로 전환했습니다.':'은하와 천체로 전환했습니다.';}));
  $('explore-universe').addEventListener('click',()=>setExploring(true));$('exit-universe').addEventListener('click',()=>setExploring(false));
  $('cosmos-zoom-in').addEventListener('click',()=>universe.adjustZoom(1.12));$('cosmos-zoom-out').addEventListener('click',()=>universe.adjustZoom(1/1.12));$('cosmos-reset').addEventListener('click',()=>universe.reset());
  $('star-dismiss').addEventListener('click',()=>{const selected=universe.selected;$('star-inspector').hidden=true;hero.classList.remove('has-selection');universe.selected=0;document.querySelectorAll('.constellation-nav button').forEach(e=>e.setAttribute('aria-pressed','false'));universe.request();const target=document.querySelector(`.constellation-nav button[data-select-star="${selected}"]`);target?.focus({preventScroll:true});});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&hero.classList.contains('is-exploring')&&!document.querySelector('dialog[open]'))setExploring(false);});
  let preview=null,reader=null;
  function mini(container,theme){
    container.innerHTML='';container.removeAttribute('aria-hidden');
    const canvas=document.createElement('canvas');canvas.className='mini-space';canvas.tabIndex=0;canvas.setAttribute('aria-label',`${chapters[theme-1].figure}. 드래그 또는 방향키로 회전, R로 초기화`);container.append(canvas);
    const label=document.createElement('span');label.className='mini-caption';label.textContent='드래그하여 회전';container.append(label);
    const reset=document.createElement('button');reset.className='mini-reset';reset.textContent='↺';reset.setAttribute('aria-label','우주 도형 초기화');container.append(reset);
    const instance=new Space(canvas,{mini:true,immersive:container.id==='reader-art',theme});reset.addEventListener('click',()=>instance.reset());return instance;
  }
  window.CosmosScenes={
    preview(n){if(preview){preview.setTheme(n);preview.canvas.setAttribute('aria-label',`${chapters[n-1].figure}. 드래그 또는 방향키로 회전, R로 초기화`);}else preview=mini($('preview-figure'),n);},
    chapter(n){if(reader){reader.setTheme(n);reader.canvas.setAttribute('aria-label',`${chapters[n-1].figure}. 드래그 또는 방향키로 회전, R로 초기화`);reader.resize();}else reader=mini($('reader-art'),n);}
  };
  $('chapter-zoom-in').addEventListener('click',()=>reader?.adjustZoom(1.12));
  $('chapter-zoom-out').addEventListener('click',()=>reader?.adjustZoom(1/1.12));
  $('chapter-reset').addEventListener('click',()=>reader?.reset());
  $('chapter-motion').addEventListener('click',()=>{
    if(!reader)return;reader.localPaused=!reader.localPaused;
    $('chapter-motion').setAttribute('aria-pressed',String(reader.localPaused));
    $('chapter-motion').setAttribute('aria-label',reader.localPaused?'구조물 움직임 재생':'구조물 움직임 멈추기');
    $('chapter-motion').textContent=reader.localPaused?'▷':'Ⅱ';reader.request();
  });
  // Passive page scrolling does no layout reads, no DOM writes and no drawing.
  // There is deliberately no per-scroll-frame redraw of an offscreen chapter canvas.
  // pointercancel hands scrolling to the browser, but does not mean the finger lifted.
  // Track that physical lifetime passively so a slow swipe cannot restart drawing.
  document.addEventListener('touchstart',e=>{nativeTouches=e.touches.length;},{passive:true});
  const touchFinish=e=>{
    nativeTouches=e.touches.length;
    if(!nativeTouches&&pageScrolling){scrollUntil=performance.now()+180;clearTimeout(scrollIdleTimer);scrollIdleTimer=setTimeout(releaseScroll,200);}
  };
  document.addEventListener('touchend',touchFinish,{passive:true});
  document.addEventListener('touchcancel',touchFinish,{passive:true});
  addEventListener('scroll',holdForScroll,{passive:true});
  addEventListener('scrollend',()=>{
    if(!pageScrolling)return;
    scrollUntil=performance.now()+60;
    clearTimeout(scrollIdleTimer);scrollIdleTimer=setTimeout(releaseScroll,80);
  },{passive:true});
  document.addEventListener('novel:ending',()=>{for(const s of instances){s.visible=false;cancelAnimationFrame(s.raf);s.raf=0;}});
  document.addEventListener('novel:ending-close',()=>{for(const scene of instances){const r=scene.canvas.getBoundingClientRect();scene.visible=r.width>0&&r.height>0&&r.bottom>0&&r.top<innerHeight;scene.lastTime=0;scene.request();}});
  window.CosmosScenes.preview(+$('preview-figure').dataset.chapter||1);
  if(document.body.dataset.view==='reader')window.CosmosScenes.chapter(+$('reader-art').dataset.chapter||1);
  document.addEventListener('novel:chapter',()=>{setExploring(false,false);universe.visible=false;});
  document.addEventListener('novel:home',()=>{if(reader)reader.visible=false;setExploring(false,false);requestAnimationFrame(()=>{universe.resize();preview?.resize();});});
  const wake=()=>{for(const s of instances){s.lastTime=0;if(!document.hidden)s.request();else if(s.raf){cancelAnimationFrame(s.raf);s.raf=0;}}};
  new MutationObserver(wake).observe(document.body,{attributes:true,attributeFilter:['class','data-reader-theme','data-view']});
  reduced.addEventListener?.('change',wake);document.addEventListener('visibilitychange',wake);
  // Read-only diagnostics for reproducible browser tests and integration support.
  window.PossibilityCosmos={getState:()=>({renderer:universe.canvas.dataset.renderer,form:universe.form,exploring:hero.classList.contains('is-exploring'),yaw:universe.yaw,pitch:universe.pitch,zoom:universe.zoom,scrolling:pageScrolling,selected:universe.selected,offsets:universe.offsets.map(p=>[...p]),stats:{...universe.stats},stars:universe.projected.map(b=>({number:b.n,x:b.x,y:b.y,radius:b.radius*universe.focal/b.depth})),contexts:instances.size,miniThemes:{preview:preview?.theme,reader:reader?.theme},reader:reader?{yaw:reader.yaw,pitch:reader.pitch,zoom:reader.zoom,auto:reader.auto(),renderer:reader.canvas.dataset.renderer,particles:reader.points.length/7,frames:reader.stats.frames,bounds:[reader.w,reader.h]}:null,particles:universe.points.length/7,stage:[universe.w,universe.h],buffer:[universe.canvas.width,universe.canvas.height],autoAnimating:universe.auto()})};
})();
