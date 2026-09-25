/* V5 / The Last Experiment — fullscreen within the current page
 * Self-contained procedural WebGL film. No video, texture, network service or saved state.
 * Four acts: collapse, expansion, structure, a new beginning. Artistic, not cosmological data.
 * A Canvas2D alternative, explicit still mode and reduced-motion mode remain fully navigable.
 */
(() => {
  'use strict';
  const $=id=>document.getElementById(id);
  const view=$('ending-view'), reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const TAU=Math.PI*2, duration=28;
  let playRevision=0;
  const clamp=(n,a,b)=>Math.min(b,Math.max(a,n));
  const smooth=(a,b,x)=>{const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t);};
  const rng=(seed)=>()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return ((t^t>>>14)>>>0)/4294967296;};
  const quadVertex=`attribute vec2 aPosition;varying vec2 vUv;void main(){vUv=aPosition*.5+.5;gl_Position=vec4(aPosition,0.,1.);}`;
  const nebulaFragment=`precision highp float;
    varying vec2 vUv;uniform vec2 uResolution,uCenter,uTurn;uniform float uTime,uDrift,uStarted,uEntrance;
    float hash(vec3 p){p=fract(p*.3183099+vec3(.11,.21,.31));p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
    float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
      return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
    float fbm(vec3 p){float v=0.,a=.53;for(int i=0;i<4;i++){v+=noise(p)*a;p=p*2.08+vec3(4.1,7.3,2.8);a*=.49;}return v;}
    mat2 rot(float a){float c=cos(a),s=sin(a);return mat2(c,-s,s,c);}
    float stars(vec2 p,float scale){vec2 id=floor(p*scale),f=fract(p*scale)-.5;float h=hash(vec3(id,1.));vec2 offset=vec2(hash(vec3(id,4.)),hash(vec3(id,7.)))-.5;float d=length(f-offset*.70);return step(.966,h)*exp(-d*d*1900.)*(.1+h*.45);}
    void main(){
      vec2 uv=vec2(vUv.x,1.-vUv.y);float aspect=uResolution.x/uResolution.y;
      vec2 p=(uv-uCenter)*vec2(aspect,1.)/(.025+.975*uEntrance);p=rot(-.23+uTurn.x*.07)*p;
      float r=length(p),t=uTime,age=max(0.,t-3.6),drift=uDrift*.018;
      float started=uStarted, collapse=mix(1.,1.-smoothstep(.0,3.6,t),started);
      float birth=started*smoothstep(3.55,4.45,t), settle=smoothstep(12.,26.,t);
      vec3 color=vec3(.0014,.0024,.0065);
      float star=stars((uv-.5)*vec2(aspect,1.),57.)+stars((uv-.5)*vec2(aspect,1.)+.27,113.)*.46;
      color+=vec3(.58,.72,.92)*star;
      // The initial accretion field contracts into a single point.
      vec2 q=rot(.13)*p; q.y/=.30+uTurn.y*.045;
      float rd=length(q),angle=atan(q.y,q.x);
      float n=fbm(vec3(q*7.5,drift));
      float rimR=.012+.235*collapse;
      float disk=exp(-pow((rd-rimR)/(.004+.027*collapse),2.));
      float filaments=.33+.67*pow(.5+.5*sin(rd*190.+angle*3.+n*8.),2.);
      vec3 ringColor=mix(vec3(.34,.60,1.),vec3(1.,.72,.39),smoothstep(-.3,.8,q.x+n*.4));
      float old=1.-smoothstep(3.9,5.0,t)*started;
      color+=ringColor*disk*filaments*1.35*old;
      color+=vec3(.32,.46,.85)*exp(-r*7.)*.045*old;
      float coreR=.0035+.008*collapse;
      float core=exp(-r*r/(coreR*coreR))*5.0+exp(-r*73.)*.23;
      color+=vec3(.79,.87,1.)*core*old;
      // Expansion front: irregular, layered membranes rather than cartoon concentric circles.
      float front=.017+1.34*(1.-exp(-age*.17));
      float field=fbm(vec3(p*6.5+vec2(0.,t*.013),1.7));
      float tendril=fbm(vec3(p*23.+vec2(t*.035,0.),2.6));
      float warp=.022*sin(atan(p.y,p.x)*17.+field*8.)+.012*cos(atan(p.y,p.x)*37.+tendril*5.)+.07*(field-.5);
      float shell=exp(-pow((r-front+warp)/(.014+age*.0015),2.));
      float innerShell=exp(-pow((r-front*.86+warp*.7)/(.037+age*.0012),2.));
      vec3 waveColor=mix(vec3(.21,.50,1.0),vec3(1.0,.66,.27),smoothstep(.38,.70,field));
      color+=waveColor*(shell*(.18+tendril)*1.15+innerShell*.18)*birth*(1.-smoothstep(9.,19.,t));
      float blastGlow=exp(-r*r/(.002+age*.009))*(1.-smoothstep(4.5,11.5,t))*birth;
      color+=vec3(.80,.88,1.0)*blastGlow*2.7;
      float flare=exp(-abs(p.y)*320.)*exp(-abs(p.x)*1.7);
      color+=vec3(.62,.76,1.)*flare*birth*(1.-smoothstep(6.,15.,t))*.5;
      // After the front passes, filamentary gas organizes into a new luminous space.
      vec2 g=rot(-.10+uTurn.x*.18)*p;g.y/=.53+uTurn.y*.06;
      float gr=length(g),ga=atan(g.y,g.x);
      float neb=fbm(vec3(g*7.+vec2(t*.012,0.),6.1));
      float fine=fbm(vec3(g*27.,4.8));
      float spiral=pow(.5+.5*sin(ga*3.-gr*15.+neb*4.+drift),5.);
      float envelope=exp(-pow((gr-.39)/.28,2.))*smoothstep(.022,.14,gr);
      float strands=pow(max(0.,fine-.25)*1.5,2.);
      float cloud=(.14+spiral*.85)*envelope*(.15+strands*1.6);
      float density=smoothstep(4.8,14.,t)*(.78+.22*settle)*started;
      vec3 cloudColor=mix(vec3(.13,.36,.82),vec3(1.,.57,.26),smoothstep(.24,.82,neb));
      color+=cloudColor*cloud*density*.95;
      float inner=exp(-gr*15.)*(.10+.15*neb);
      color+=vec3(.70,.82,1.)*inner*density;
      color+=vec3(.16,.30,.61)*exp(-r*r*5.)*density*.026;
      float nucleus=exp(-r*r/.00006)*1.5+exp(-r*r/.002)*.10;
      color+=vec3(.88,.91,1.)*nucleus*density;
      // Filmic highlight roll-off; one gradual bloom, no repeated full-screen flashes.
      color=1.-exp(-color*1.22);color=pow(max(color,0.),vec3(.90));
      float edge=1.-smoothstep(.5,1.30,length((uv-.5)*vec2(1.,.85)));
      gl_FragColor=vec4(color*(.40+.60*edge),1.);
    }`;
  const particleVertex=`
    attribute vec3 aDirection,aTarget,aColor;attribute vec4 aParam;
    uniform mat3 uView;uniform vec2 uResolution,uCenter;uniform float uTime,uStarted,uDpr,uDrift,uFocal,uLine;
    varying vec3 vColor;varying float vAlpha;
    void main(){float t=uTime,age=max(0.,t-3.6);
      float collapse=mix(1.,1.-smoothstep(0.,3.6,t),uStarted);
      float spread=1.-exp(-age*.27);
      float radial=(.018+(1.4+aParam.x*2.2)*collapse)*(1.-step(3.6,t)*uStarted);
      radial+=(.02+spread*(2.5+aParam.x*5.2))*step(3.6,t)*uStarted;
      float streak=smoothstep(3.65,4.6,t)*(1.-smoothstep(12.,22.,t));
      radial*=1.-aParam.z*streak*(.07+aParam.x*.06);
      vec3 v=aDirection*radial;
      v=mix(v,aTarget,smoothstep(10.,25.,t)*uStarted);
      v=uView*v;
      float depth=max(1.3,8.-v.z);
      vec2 px=uCenter*uResolution+vec2(v.x,-v.y)*uFocal/depth;
      gl_Position=vec4(px.x/uResolution.x*2.-1.,1.-px.y/uResolution.y*2.,0.,1.);
      float size=(.008+aParam.y*.013)*uFocal/depth*uDpr;
      gl_PointSize=clamp(size,1.0,5.0*uDpr);
      float bright=.20+aParam.y*.85;
      float reveal=mix(.45,1.,smoothstep(3.6,6.,t)*uStarted);
      vAlpha=bright*reveal;
      if(uLine>.5)vAlpha*=streak*.075;
      vColor=aColor;
    }`;
  const particleFragment=`precision mediump float;varying vec3 vColor;varying float vAlpha;void main(){vec2 p=gl_PointCoord*2.-1.;float rr=dot(p,p);if(rr>1.)discard;float a=(exp(-rr*5.)*.65+exp(-rr*23.)*.58)*vAlpha;gl_FragColor=vec4(vColor*a,a);}`;
  const streakFragment=`precision mediump float;varying vec3 vColor;varying float vAlpha;void main(){gl_FragColor=vec4(vColor*vAlpha,vAlpha);}`;

  class Film {
    constructor(){
      this.canvas=$('bigbang-canvas');this.active=false;this.started=false;this.paused=false;this.finished=false;this.static=false;
      this.entrance=1;this.entryOrigin=[.5,.6];this.transportHold=false;this.pixelBudgetScale=1;this.slowFrames=0;
      this.t=0;this.drift=0;this.frameId=0;this.last=0;this.frames=0;this.yaw=.12;this.pitch=.85;this.drag=null;this.lastPhase=-1;
      this.setup();this.createParticles();this.attach();this.resize();
      this.ro=new ResizeObserver(()=>this.resize());this.ro.observe(this.canvas);
    }
    compile(vs,fs){
      const g=this.gl;
      const shader=(type,source)=>{const sh=g.createShader(type);g.shaderSource(sh,source);g.compileShader(sh);if(!g.getShaderParameter(sh,g.COMPILE_STATUS))throw new Error(g.getShaderInfoLog(sh));return sh;};
      const v=shader(g.VERTEX_SHADER,vs),f=shader(g.FRAGMENT_SHADER,fs),p=g.createProgram();g.attachShader(p,v);g.attachShader(p,f);g.linkProgram(p);g.deleteShader(v);g.deleteShader(f);
      if(!g.getProgramParameter(p,g.LINK_STATUS))throw new Error(g.getProgramInfoLog(p));
      const u={},a={};for(const n of ['uResolution','uCenter','uTurn','uTime','uDrift','uStarted','uEntrance','uView','uDpr','uFocal','uLine'])u[n]=g.getUniformLocation(p,n);
      for(const n of ['aPosition','aDirection','aTarget','aColor','aParam'])a[n]=g.getAttribLocation(p,n);
      return {p,u,a};
    }
    setup(){
      try {
        this.gl=this.canvas.getContext('webgl',{alpha:false,antialias:false,depth:false,powerPreference:'high-performance',preserveDrawingBuffer:false});
        if(!this.gl)throw new Error('WebGL unavailable');this.initGL();this.canvas.dataset.renderer='webgl';
      }catch(error){
        if(this.gl){const old=this.canvas;this.canvas=old.cloneNode(false);old.replaceWith(this.canvas);this.gl=null;}
        this.ctx=this.canvas.getContext('2d',{alpha:false});this.canvas.dataset.renderer=this.ctx?'canvas2d':'unavailable';
        console.warn('Ending: using static-capable Canvas2D alternative.',error.message);
      }
    }
    initGL(){
      const g=this.gl;this.nebula=this.compile(quadVertex,nebulaFragment);this.particles=this.compile(particleVertex,particleFragment);this.streaks=this.compile(particleVertex,streakFragment);
      this.quad=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,this.quad);g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),g.STATIC_DRAW);
      this.pointsBuffer=g.createBuffer();this.streakBuffer=g.createBuffer();g.disable(g.DEPTH_TEST);g.clearColor(0,0,0,1);
    }
    createParticles(){
      const rand=rng(428913),data=[],lines=[];
      const count=innerWidth<=760?20000:42000;
      for(let i=0;i<count;i++){
        const a=rand()*TAU,z=rand()*2-1,r=Math.sqrt(1-z*z);
        const dir=[r*Math.cos(a),z,r*Math.sin(a)];
        const radius=Math.pow(rand(),.60)*4.9,arm=(i%3)*TAU/3+radius*.91+(rand()-.5)*.62;
        const target=[Math.cos(arm)*radius,(rand()-.5)*(.14+radius*.16),Math.sin(arm)*radius];
        if(i%9===0){target[0]*=1.4;target[1]=(rand()-.5)*3.;target[2]*=1.4;}
        const warm=rand()>.66,col=warm?[1.,.74+rand()*.18,.48+rand()*.18]:[.60+rand()*.22,.77+rand()*.18,1.];
        const seed=rand(),size=i%97===0?2.5:.25+rand()*.75;
        data.push(...dir,...target,...col,seed,size,0,0);
        if(i<1600){lines.push(...dir,...target,...col,seed,size,0,1,...dir,...target,...col,seed,size,1,1);}
      }
      this.data=new Float32Array(data);this.lineData=new Float32Array(lines);this.upload();
    }
    upload(){if(!this.gl||this.lost)return;const g=this.gl;g.bindBuffer(g.ARRAY_BUFFER,this.pointsBuffer);g.bufferData(g.ARRAY_BUFFER,this.data,g.STATIC_DRAW);g.bindBuffer(g.ARRAY_BUFFER,this.streakBuffer);g.bufferData(g.ARRAY_BUFFER,this.lineData,g.STATIC_DRAW);}
    resize(){
      const rect=this.canvas.getBoundingClientRect();this.w=Math.max(1,rect.width);this.h=Math.max(1,rect.height);
      const budget=(this.w<=760?620000:1250000)*this.pixelBudgetScale;
      this.dpr=Math.min(devicePixelRatio||1,1.4,Math.sqrt(budget/(this.w*this.h)));
      this.canvas.width=Math.max(1,Math.floor(this.w*this.dpr));this.canvas.height=Math.max(1,Math.floor(this.h*this.dpr));
      if(this.gl)this.gl.viewport(0,0,this.canvas.width,this.canvas.height);
      this.request();
    }
    enter(){
      if(this.active)return;this.active=true;this.transportHold=false;this.entrance=1;this.last=0;this.t=0;this.drift=0;this.started=false;this.finished=false;this.static=false;this.paused=false;this.yaw=.12;this.pitch=.85;this.lastPhase=-1;
      if(reduced.matches)this.finish(true,false);else {this.ui();this.resize();this.request();}
    }
    leave(){playRevision++;this.active=false;cancelAnimationFrame(this.frameId);this.frameId=0;this.last=0;this.drag=null;view.classList.remove("is-loading");}
    start(){
      if(reduced.matches){this.finish(true,true);return;}
      this.transportHold=false;this.entrance=1;this.t=0;this.started=true;this.finished=false;this.static=false;this.paused=false;this.last=0;this.lastPhase=-1;
      this.ui();$('ending-announcement').textContent='마지막 실험을 시작합니다. 응축, 빛의 확산, 새로운 구조, 다음의 시작으로 이어집니다.';
      this.canvas.focus({preventScroll:true});this.request();
    }
    finish(still=false,focus=true){
      playRevision++;view.classList.remove("is-loading");window.NovelSound?.stillFilm();
      this.t=duration;this.started=true;this.finished=true;this.static=still;this.paused=false;this.last=0;this.lastPhase=-1;
      this.ui();this.resize();this.request();
      if(focus)$('finale-title').focus({preventScroll:true});
    }
    pause(){if(!this.started||this.finished)return;this.paused=!this.paused;this.last=0;window.NovelSound?.pauseFilm(this.t,this.paused);this.ui();this.request();}
    center(){
      const e=this.started?smooth(0,4.5,this.t):0,final=this.started?smooth(15,27,this.t):0;
      const mobile=this.w<=760;
      const target=[mobile?.52:.5,mobile?(.53-.19*final):(.49-.16*final)];
      return [this.entryOrigin[0]+(target[0]-this.entryOrigin[0])*this.entrance,this.entryOrigin[1]+(target[1]-this.entryOrigin[1])*this.entrance];
    }
    matrix(){
      const y=this.yaw,p=this.pitch,roll=-.24,c=Math.cos(y),s=Math.sin(y),cp=Math.cos(p),sp=Math.sin(p),cr=Math.cos(roll),sr=Math.sin(roll);
      return new Float32Array([cr*c-sr*sp*s,sr*c+cr*sp*s,-cp*s,-sr*cp,cr*cp,sp,cr*s+sr*sp*c,sr*s-cr*sp*c,cp*c]);
    }
    request(){if(this.active&&!document.hidden&&!this.lost&&!this.frameId)this.frameId=requestAnimationFrame(t=>this.frame(t));}
    frame(now){
      this.frameId=0;if(!this.active||document.hidden||this.lost)return;
      const dt=this.last?Math.min(.25,(now-this.last)/1000):0;this.last=now;
      // Lower fragment resolution only on a renderer that cannot maintain fluid motion.
      // Particle count and composition are unchanged; normal GPUs keep the original budget.
      if(this.gl&&dt>.055)this.slowFrames++;else if(dt>0&&dt<.033)this.slowFrames=0;
      if(this.slowFrames>=4&&this.pixelBudgetScale>.28){this.pixelBudgetScale=Math.max(.28,this.pixelBudgetScale*.72);this.slowFrames=0;this.resize();}
      if(!this.paused&&!this.static&&!this.transportHold&&!reduced.matches){
        if(!this.finished)this.drift+=dt;
        if(this.started&&!this.finished){const soundTime=window.NovelSound?.filmTime();this.t=Math.min(duration,soundTime==null?this.t+dt:soundTime);if(this.t>=duration){this.finished=true;window.NovelSound?.visualEnd();this.ui();}}
      }
      this.draw();this.frames++;
      if(this.started&&!this.finished&&!this.paused)this.uiProgress();
      if(!this.paused&&!this.finished&&!this.static&&!this.transportHold&&!reduced.matches)this.request();
    }
    uniforms(program,line=0){
      const g=this.gl,u=program.u,c=this.center();g.useProgram(program.p);
      if(u.uResolution)g.uniform2f(u.uResolution,this.w,this.h);
      if(u.uCenter)g.uniform2f(u.uCenter,c[0],c[1]);
      if(u.uTurn)g.uniform2f(u.uTurn,this.yaw,this.pitch);
      if(u.uTime)g.uniform1f(u.uTime,this.t);
      if(u.uDrift)g.uniform1f(u.uDrift,this.drift);
      if(u.uStarted)g.uniform1f(u.uStarted,this.started?1:0);
      if(u.uEntrance)g.uniform1f(u.uEntrance,this.entrance);
      if(u.uView)g.uniformMatrix3fv(u.uView,false,this.matrix());
      if(u.uDpr)g.uniform1f(u.uDpr,this.dpr);
      if(u.uFocal)g.uniform1f(u.uFocal,Math.min(this.w*.93,this.h*1.28)*(.025+.975*this.entrance));
      if(u.uLine)g.uniform1f(u.uLine,line);
    }
    bind(program,name,count,stride,offset){const i=program.a[name];if(i<0)return;this.gl.enableVertexAttribArray(i);this.gl.vertexAttribPointer(i,count,this.gl.FLOAT,false,stride,offset);}
    draw(){
      if(!this.gl){this.draw2D();return;}
      const g=this.gl;
      // Attribute arrays used by one program must not leak into the fullscreen pass.
      const max=g.getParameter(g.MAX_VERTEX_ATTRIBS);for(let i=0;i<max;i++)g.disableVertexAttribArray(i);
      g.disable(g.BLEND);this.uniforms(this.nebula);g.bindBuffer(g.ARRAY_BUFFER,this.quad);this.bind(this.nebula,'aPosition',2,8,0);g.drawArrays(g.TRIANGLES,0,6);
      for(let i=0;i<max;i++)g.disableVertexAttribArray(i);
      g.enable(g.BLEND);g.blendFunc(g.ONE,g.ONE);
      const pass=(program,buffer,data,type,line)=>{
        this.uniforms(program,line);g.bindBuffer(g.ARRAY_BUFFER,buffer);
        this.bind(program,'aDirection',3,52,0);this.bind(program,'aTarget',3,52,12);this.bind(program,'aColor',3,52,24);this.bind(program,'aParam',4,52,36);g.drawArrays(type,0,data.length/13);
      };
      if(this.started&&this.t>3.6&&this.t<22)pass(this.streaks,this.streakBuffer,this.lineData,g.LINES,1);
      pass(this.particles,this.pointsBuffer,this.data,g.POINTS,0);
    }
    draw2D(){
      if(!this.ctx)return;const ctx=this.ctx,c=this.center(),cx=c[0]*this.w,cy=c[1]*this.h;
      ctx.setTransform(this.dpr,0,0,this.dpr,0,0);ctx.globalCompositeOperation='source-over';ctx.fillStyle='#020309';ctx.fillRect(0,0,this.w,this.h);
      const glow=(r,tint,alpha)=>{const gr=ctx.createRadialGradient(cx,cy,0,cx,cy,r);gr.addColorStop(0,`rgba(${tint},${alpha})`);gr.addColorStop(.13,`rgba(${tint},${alpha*.26})`);gr.addColorStop(1,`rgba(${tint},0)`);ctx.fillStyle=gr;ctx.fillRect(0,0,this.w,this.h);};
      glow(this.h*.42,'52,99,170',.15);ctx.globalCompositeOperation='lighter';
      const age=Math.max(0,this.t-3.6),expansion=1-Math.exp(-age*.27),merge=smooth(10,25,this.t),matrix=this.matrix(),focal=Math.min(this.w*.93,this.h*1.28)*(.025+.975*this.entrance),a=this.data;
      for(let i=0;i<a.length;i+=13*5){
        let radius=this.started&&this.t>=3.6?.02+expansion*(2.5+a[i+9]*5.2):.018+(1.4+a[i+9]*2.2)*(this.started?1-smooth(0,3.6,this.t):1);
        let x=a[i]*radius,y=a[i+1]*radius,z=a[i+2]*radius;
        x=x*(1-merge)+a[i+3]*merge;y=y*(1-merge)+a[i+4]*merge;z=z*(1-merge)+a[i+5]*merge;
        const X=matrix[0]*x+matrix[3]*y+matrix[6]*z,Y=matrix[1]*x+matrix[4]*y+matrix[7]*z,Z=matrix[2]*x+matrix[5]*y+matrix[8]*z,depth=Math.max(1.3,8-Z);
        const px=cx+X*focal/depth,py=cy-Y*focal/depth;
        ctx.fillStyle=`rgba(${Math.round(a[i+6]*255)},${Math.round(a[i+7]*255)},${Math.round(a[i+8]*255)},.65)`;const size=Math.min(3,(.008+a[i+10]*.013)*focal/depth);ctx.fillRect(px,py,Math.max(.7,size),Math.max(.7,size));
      }
      if(this.started&&this.t<15){glow(this.h*(.07+expansion*.15),'177,210,255',.85*(1-smooth(5,15,this.t)));ctx.strokeStyle='rgba(109,167,243,.22)';ctx.lineWidth=1.5;ctx.beginPath();ctx.ellipse(cx,cy,this.h*expansion*.85,this.h*expansion*.51,-.24,0,TAU);ctx.stroke();}
      else glow(this.h*.08,'205,222,255',.75);
      ctx.globalCompositeOperation='source-over';
    }
    ui(){
      $('ending-intro').hidden=this.started;
      $('ending-finale').hidden=!this.finished;
      view.classList.toggle('is-playing',this.started&&!this.finished);
      view.classList.toggle('is-finished',this.finished);
      $('bigbang-pause').hidden=!this.started||this.finished||reduced.matches;
      $('bigbang-pause').setAttribute('aria-pressed',String(this.paused));
      $('bigbang-pause').setAttribute('aria-label',this.paused?'엔딩 연출 계속 재생':'엔딩 연출 멈추기');
      $('bigbang-pause').textContent=this.paused?'▷':'Ⅱ';
      $('bigbang-pause').title=this.paused?'계속':'멈춤';
      $('bigbang-skip').hidden=this.finished;
      $('bigbang-replay').hidden=reduced.matches;
      $('ending-mode-label').textContent=this.finished?(reduced.matches?'움직임 줄이기 · 정지 장면':this.static?'정지 장면 · 드래그로 시점 조작':'다음의 시작 · 드래그로 시점 조작'):this.started?'THE LAST EXPERIMENT':'한 점에 남은 우주';
      this.uiProgress();
    }
    uiProgress(){
      $('ending-progress').style.transform=`scaleX(${this.started?this.t/duration:0})`;
      const phase=!this.started?0:this.t<3.6?0:this.t<11?1:this.t<21?2:3;
      if(phase!==this.lastPhase){this.lastPhase=phase;$('phase-index').textContent=`0${phase+1} / 04`;$('phase-title').textContent=['모든 것이 한 점으로.','그리고, 빛이 태어났다.','흩어진 빛이 서로를 찾아.','다시, 가능한 모든 것.'][phase];}
    }
    attach(){
      this.canvas.addEventListener('pointerdown',e=>{if(e.button!==0)return;this.drag={id:e.pointerId,x:e.clientX,y:e.clientY};try{this.canvas.setPointerCapture(e.pointerId);}catch{}});
      this.canvas.addEventListener('pointermove',e=>{if(!this.drag||this.drag.id!==e.pointerId)return;this.yaw+=(e.clientX-this.drag.x)*.004;this.pitch=clamp(this.pitch+(e.clientY-this.drag.y)*.004,-1.1,1.1);this.drag.x=e.clientX;this.drag.y=e.clientY;this.request();});
      for(const n of ['pointerup','pointercancel','lostpointercapture'])this.canvas.addEventListener(n,()=>{this.drag=null;});
      this.canvas.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();if(e.key==='ArrowLeft')this.yaw-=.08;if(e.key==='ArrowRight')this.yaw+=.08;if(e.key==='ArrowUp')this.pitch-=.06;if(e.key==='ArrowDown')this.pitch+=.06;this.pitch=clamp(this.pitch,-1.1,1.1);this.request();}});
      this.canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();this.lost=true;cancelAnimationFrame(this.frameId);this.frameId=0;this.canvas.dataset.renderer='context-lost';$('ending-announcement').textContent='그래픽 장치가 일시 중단되었습니다. 연출 건너뛰기로 엔딩 문장을 읽을 수 있습니다.';});
      this.canvas.addEventListener('webglcontextrestored',()=>{try{this.lost=false;this.initGL();this.upload();this.canvas.dataset.renderer='webgl';this.resize();}catch{this.canvas.dataset.renderer='unavailable';}});
    }
    seek(time){playRevision++;window.NovelSound?.pauseFilm(clamp(time,0,duration),true);this.started=true;this.t=clamp(time,0,duration);this.finished=this.t>=duration;this.paused=true;this.static=false;this.ui();this.request();}
  }
  let film=null;
  function ensure(){if(!film)film=new Film();return film;}
  async function play(){
    const f=ensure();if(!f.active)return;
    if(reduced.matches){f.finish(true,true);return;}
    const version=++playRevision;
    view.classList.add('is-loading');
    // Unlock audio inside this explicit interaction. Failure falls back to silent visuals.
    try{await Promise.race([window.NovelSound?.prepareEnding(),new Promise(r=>setTimeout(r,1200))]);}catch{}
    if(!f.active||version!==playRevision)return;
    view.classList.remove('is-loading');f.start();window.NovelSound?.playFilm(0);
  }
  window.BigBang={
    enter:()=>ensure().enter(),leave:()=>film?.leave(),play,
    setEntrance:(p,origin)=>{const f=ensure();f.entrance=clamp(p,0,1);if(origin)f.entryOrigin=origin;f.request();},
    holdForTransition:()=>{if(film){film.transportHold=true;film.request();}},
    getCenter:()=>film?.center(),
    // Deterministic preview hooks for testing and video capture; nothing is persisted.
    seek:t=>ensure().seek(t),
    getState:()=>film?{active:film.active,time:film.t,started:film.started,finished:film.finished,paused:film.paused,still:film.static,renderer:film.canvas.dataset.renderer,particles:film.data.length/13,frames:film.frames,yaw:film.yaw,pitch:film.pitch,reduced:reduced.matches,entrance:film.entrance,buffer:[film.canvas.width,film.canvas.height]}:null
  };
  $('bigbang-start')?.addEventListener('click',play);
  $('bigbang-replay').addEventListener('click',play);
  $('bigbang-still')?.addEventListener('click',()=>ensure().finish(true));
  $('bigbang-skip').addEventListener('click',()=>ensure().finish(true));
  $('bigbang-pause').addEventListener('click',()=>film?.pause());
  document.addEventListener('visibilitychange',()=>{if(!film)return;film.last=0;if(document.hidden){cancelAnimationFrame(film.frameId);film.frameId=0;}else film.request();});
  reduced.addEventListener?.('change',()=>{if(film?.active&&reduced.matches)film.finish(true,false);});
  if(view.open)window.BigBang.enter();
})();
