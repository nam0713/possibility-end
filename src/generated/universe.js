/* Universe — three.js r186 (MIT). The MIT License */
(()=>{var im=Object.defineProperty;var nm=(i,e,t)=>e in i?im(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var yi=(i,e,t)=>nm(i,typeof e!="symbol"?e+"":e,t);var ef=0,Kh=1,tf=2;var ka=1,nf=2,zr=3,Is=0,zi=1,Mi=2,Si=0,Hr=1,Vt=2,Jh=3,jh=4,Yn=5;var Hi=100,sf=101,rf=102,af=103,of=104,Ul=200,Fn=201,lf=202,cf=203,Qh=204,za=205,hf=206,uf=207,df=208,ff=209,pf=210,mf=211,gf=212,vf=213,xf=214,tl=0,il=1,nl=2,Ir=3,sl=4,rl=5,al=6,ol=7,eu=0,_f=1,yf=2,ai=0,Ha=1,Va=2,Ga=3,Wa=4,Xa=5,qa=6,Ya=7;var tu=300,Ls=301,Ks=302,Nl=303,Ol=304,$a=306,ll=1e3,on=1001,cl=1002,Yt=1003,Mf=1004;var Za=1005;var Qt=1006,Bl=1007;var Ds=1008;var cn=1009,iu=1010,nu=1011,Vr=1012,kl=1013,Un=1014,Ji=1015,Wt=1016,zl=1017,Hl=1018,Gr=1020,su=35902,ru=35899,au=1021,ou=1022,wi=1023,Xn=1026,Fs=1027,lu=1028,Vl=1029,Us=1030,Gl=1031;var Wl=1033,Ka=33776,Ja=33777,ja=33778,Qa=33779,Xl=35840,ql=35841,Yl=35842,$l=35843,Zl=36196,Kl=37492,Jl=37496,jl=37488,Ql=37489,eo=37490,ec=37491,tc=37808,ic=37809,nc=37810,sc=37811,rc=37812,ac=37813,oc=37814,lc=37815,cc=37816,hc=37817,uc=37818,dc=37819,fc=37820,pc=37821,mc=36492,gc=36494,vc=36495,xc=36283,_c=36284,to=36285,yc=36286;var Ma=2300,hl=2301,Qo=2302,Gh=2303,Wh=2400,Xh=2401,qh=2402;var Sf=3200;var cu=0,wf=1,as="",jt="srgb",Sa="srgb-linear",wa="linear",_t="srgb";var el=7680;var bf=519,Tf=512,Ef=513,Af=514,Mc=515,Rf=516,Cf=517,Sc=518,Pf=519,If=35044,io=35048;var no="300 es",In=2e3,ba=2001;function sm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function rm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ta(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lf(){let i=Ta("canvas");return i.style.display="block",i}var Rd={},Lr=null;function hu(...i){let e="THREE."+i.shift();Lr?Lr("log",e,...i):console.log(e,...i)}function Df(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function We(...i){i=Df(i);let e="THREE."+i.shift();if(Lr)Lr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=Df(i);let e="THREE."+i.shift();if(Lr)Lr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function $s(...i){let e=i.join(" ");e in Rd||(Rd[e]=!0,We(...i))}function Ff(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Uf={[tl]:il,[nl]:al,[sl]:ol,[Ir]:rl,[il]:tl,[al]:nl,[ol]:sl,[rl]:Ir},qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Li=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cd=1234567,_a=Math.PI/180,Dr=180/Math.PI;function Wr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Li[i&255]+Li[i>>8&255]+Li[i>>16&255]+Li[i>>24&255]+"-"+Li[e&255]+Li[e>>8&255]+"-"+Li[e>>16&15|64]+Li[e>>24&255]+"-"+Li[t&63|128]+Li[t>>8&255]+"-"+Li[t>>16&255]+Li[t>>24&255]+Li[n&255]+Li[n>>8&255]+Li[n>>16&255]+Li[n>>24&255]).toLowerCase()}function dt(i,e,t){return Math.max(e,Math.min(t,i))}function uu(i,e){return(i%e+e)%e}function am(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function om(i,e,t){return i!==e?(t-i)/(e-i):0}function ya(i,e,t){return(1-t)*i+t*e}function lm(i,e,t,n){return ya(i,e,1-Math.exp(-t*n))}function cm(i,e=1){return e-Math.abs(uu(i,e*2)-e)}function hm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function um(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function dm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function fm(i,e){return i+Math.random()*(e-i)}function pm(i){return i*(.5-Math.random())}function mm(i){i!==void 0&&(Cd=i);let e=Cd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gm(i){return i*_a}function vm(i){return i*Dr}function xm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function _m(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ym(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mm(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),d=a((e+n)/2),u=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*d,l*u,l*h,o*c);break;case"YZY":i.set(l*h,o*d,l*u,o*c);break;case"ZXZ":i.set(l*u,l*h,o*d,o*c);break;case"XZX":i.set(o*d,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*d,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*d,o*c);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Bi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var so={DEG2RAD:_a,RAD2DEG:Dr,generateUUID:Wr,clamp:dt,euclideanModulo:uu,mapLinear:am,inverseLerp:om,lerp:ya,damp:lm,pingpong:cm,smoothstep:hm,smootherstep:um,randInt:dm,randFloat:fm,randFloatSpread:pm,seededRandom:mm,degToRad:gm,radToDeg:vm,isPowerOfTwo:xm,ceilPowerOfTwo:_m,floorPowerOfTwo:ym,setQuaternionFromProperEuler:Mm,normalize:Bi,denormalize:Cr},gu=class gu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gu.prototype.isVector2=!0;var ye=gu,Yi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3],h=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(u!==v||l!==h||c!==f||d!==g){let p=l*h+c*f+d*g+u*v;p<0&&(h=-h,f=-f,g=-g,v=-v,p=-p);let m=1-o;if(p<.9995){let _=Math.acos(p),A=Math.sin(_);m=Math.sin(m*_)/A,o=Math.sin(o*_)/A,l=l*m+h*o,c=c*m+f*o,d=d*m+g*o,u=u*m+v*o}else{l=l*m+h*o,c=c*m+f*o,d=d*m+g*o,u=u*m+v*o;let _=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=_,c*=_,d*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+d*u+l*f-c*h,e[t+1]=l*g+d*h+c*u-o*f,e[t+2]=c*g+d*f+o*h-l*u,e[t+3]=d*g-o*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),u=o(r/2),h=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"YXZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"ZXY":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"ZYX":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"YZX":this._x=h*d*u+c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u-h*f*g;break;case"XZY":this._x=h*d*u-c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u+h*f*g;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+o+u;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(d-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},vu=class vu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*d,this.y=n+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sh.copy(this).projectOnVector(e),this.sub(Sh)}reflect(e){return this.sub(Sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vu.prototype.isVector3=!0;var L=vu,Sh=new L,Pd=new Yi,xu=class xu{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],f=n[5],g=n[8],v=s[0],p=s[3],m=s[6],_=s[1],A=s[4],S=s[7],w=s[2],y=s[5],T=s[8];return r[0]=a*v+o*_+l*w,r[3]=a*p+o*A+l*y,r[6]=a*m+o*S+l*T,r[1]=c*v+d*_+u*w,r[4]=c*p+d*A+u*y,r[7]=c*m+d*S+u*T,r[2]=h*v+f*_+g*w,r[5]=h*p+f*A+g*y,r[8]=h*m+f*S+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,h=o*l-d*r,f=c*r-a*l,g=t*u+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-d*n)*v,e[2]=(o*n-s*a)*v,e[3]=h*v,e[4]=(d*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return $s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wh.makeScale(e,t)),this}rotate(e){return $s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wh.makeRotation(-e)),this}translate(e,t){return $s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xu.prototype.isMatrix3=!0;var et=xu,wh=new et,Id=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ld=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sm(){let i={enabled:!0,workingColorSpace:Sa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_t&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(s.r=Pr(s.r),s.g=Pr(s.g),s.b=Pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===as?wa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Sa]:{primaries:e,whitePoint:n,transfer:wa,toXYZ:Id,fromXYZ:Ld,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Id,fromXYZ:Ld,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),i}var ct=Sm();function ns(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gr,ul=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gr===void 0&&(gr=Ta("canvas")),gr.width=e.width,gr.height=e.height;let s=gr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=gr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ta("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ns(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ns(t[n]/255)*255):t[n]=ns(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wm=0,Fr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=Wr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(bh(s[a].image)):r.push(bh(s[a]))}else r=bh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function bh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ul.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var bm=0,Th=new L,$i=class i extends qn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=on,s=on,r=Qt,a=Ds,o=wi,l=cn,c=i.DEFAULT_ANISOTROPY,d=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Wr(),this.name="",this.source=new Fr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Th).x}get height(){return this.source.getSize(Th).y}get depth(){return this.source.getSize(Th).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ll:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ll:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$i.DEFAULT_IMAGE=null;$i.DEFAULT_MAPPING=tu;$i.DEFAULT_ANISOTROPY=1;var _u=class _u{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,S=(f+1)/2,w=(m+1)/2,y=(d+h)/4,T=(u+v)/4,x=(g+p)/4;return A>S&&A>w?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=y/n,r=T/n):S>w?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=y/s,r=x/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=T/r,s=x/r),this.set(n,s,r,t),this}let _=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(u-v)/_,this.z=(h-d)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_u.prototype.isVector4=!0;var Xe=_u,dl=class extends qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Xe(0,0,e,t),this.scissorTest=!1,this.viewport=new Xe(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new $i(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Fr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rt=class extends dl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ea=class extends $i{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var fl=class extends $i{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Fl=class Fl{constructor(e,t,n,s,r,a,o,l,c,d,u,h,f,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,u,h,f,g,v,p)}set(e,t,n,s,r,a,o,l,c,d,u,h,f,g,v,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=d,m[10]=u,m[14]=h,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/vr.setFromMatrixColumn(e,0).length(),r=1/vr.setFromMatrixColumn(e,1).length(),a=1/vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let h=a*d,f=a*u,g=o*d,v=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*d,f=l*u,g=c*d,v=c*u;t[0]=h+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=f*o-g,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*d,f=l*u,g=c*d,v=c*u;t[0]=h-v*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*d,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*d,f=a*u,g=o*d,v=o*u;t[0]=l*d,t[4]=g*c-f,t[8]=h*c+v,t[1]=l*u,t[5]=v*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*d,t[4]=v-h*u,t[8]=g*u+f,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*u+g,t[10]=h-v*u}else if(e.order==="XZY"){let h=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+v,t[5]=a*d,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*d,t[10]=v*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tm,e,Em)}lookAt(e,t,n){let s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),_s.crossVectors(n,rn),_s.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),_s.crossVectors(n,rn)),_s.normalize(),Po.crossVectors(rn,_s),s[0]=_s.x,s[4]=Po.x,s[8]=rn.x,s[1]=_s.y,s[5]=Po.y,s[9]=rn.y,s[2]=_s.z,s[6]=Po.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],_=n[3],A=n[7],S=n[11],w=n[15],y=s[0],T=s[4],x=s[8],E=s[12],R=s[1],D=s[5],F=s[9],I=s[13],C=s[2],U=s[6],H=s[10],G=s[14],K=s[3],N=s[7],V=s[11],Y=s[15];return r[0]=a*y+o*R+l*C+c*K,r[4]=a*T+o*D+l*U+c*N,r[8]=a*x+o*F+l*H+c*V,r[12]=a*E+o*I+l*G+c*Y,r[1]=d*y+u*R+h*C+f*K,r[5]=d*T+u*D+h*U+f*N,r[9]=d*x+u*F+h*H+f*V,r[13]=d*E+u*I+h*G+f*Y,r[2]=g*y+v*R+p*C+m*K,r[6]=g*T+v*D+p*U+m*N,r[10]=g*x+v*F+p*H+m*V,r[14]=g*E+v*I+p*G+m*Y,r[3]=_*y+A*R+S*C+w*K,r[7]=_*T+A*D+S*U+w*N,r[11]=_*x+A*F+S*H+w*V,r[15]=_*E+A*I+S*G+w*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],g=e[3],v=e[7],p=e[11],m=e[15],_=l*f-c*h,A=o*f-c*u,S=o*h-l*u,w=a*f-c*d,y=a*h-l*d,T=a*u-o*d;return t*(v*_-p*A+m*S)-n*(g*_-p*w+m*y)+s*(g*A-v*w+m*T)-r*(g*S-v*y+p*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-n*(r*d-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],g=e[12],v=e[13],p=e[14],m=e[15],_=t*o-n*a,A=t*l-s*a,S=t*c-r*a,w=n*l-s*o,y=n*c-r*o,T=s*c-r*l,x=d*v-u*g,E=d*p-h*g,R=d*m-f*g,D=u*p-h*v,F=u*m-f*v,I=h*m-f*p,C=_*I-A*F+S*D+w*R-y*E+T*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/C;return e[0]=(o*I-l*F+c*D)*U,e[1]=(s*F-n*I-r*D)*U,e[2]=(v*T-p*y+m*w)*U,e[3]=(h*y-u*T-f*w)*U,e[4]=(l*R-a*I-c*E)*U,e[5]=(t*I-s*R+r*E)*U,e[6]=(p*S-g*T-m*A)*U,e[7]=(d*T-h*S+f*A)*U,e[8]=(a*F-o*R+c*x)*U,e[9]=(n*R-t*F-r*x)*U,e[10]=(g*y-v*S+m*_)*U,e[11]=(u*S-d*y-f*_)*U,e[12]=(o*E-a*D-l*x)*U,e[13]=(t*D-n*E+s*x)*U,e[14]=(v*A-g*w-p*_)*U,e[15]=(d*w-u*A+h*_)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,u=o+o,h=r*c,f=r*d,g=r*u,v=a*d,p=a*u,m=o*u,_=l*c,A=l*d,S=l*u,w=n.x,y=n.y,T=n.z;return s[0]=(1-(v+m))*w,s[1]=(f+S)*w,s[2]=(g-A)*w,s[3]=0,s[4]=(f-S)*y,s[5]=(1-(h+m))*y,s[6]=(p+_)*y,s[7]=0,s[8]=(g+A)*T,s[9]=(p-_)*T,s[10]=(1-(h+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=vr.set(s[0],s[1],s[2]).length(),o=vr.set(s[4],s[5],s[6]).length(),l=vr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),An.copy(this);let c=1/a,d=1/o,u=1/l;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=d,An.elements[5]*=d,An.elements[6]*=d,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,t.setFromRotationMatrix(An),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=In,l=!1){let c=this.elements,d=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===In)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ba)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=In,l=!1){let c=this.elements,d=2/(t-e),u=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===In)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===ba)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Fl.prototype.isMatrix4=!0;var bt=Fl,vr=new L,An=new bt,Tm=new L(0,0,0),Em=new L(1,1,1),_s=new L,Po=new L,rn=new L,Dd=new bt,Fd=new Yi,Ts=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fd.setFromEuler(this),this.setFromQuaternion(Fd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ts.DEFAULT_ORDER="XYZ";var Aa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Am=0,Ud=new L,xr=new Yi,jn=new bt,Io=new L,pa=new L,Rm=new L,Cm=new Yi,Nd=new L(1,0,0),Od=new L(0,1,0),Bd=new L(0,0,1),kd={type:"added"},Pm={type:"removed"},_r={type:"childadded",child:null},Eh={type:"childremoved",child:null},Zi=class i extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Ts,n=new Yi,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new et}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(Nd,e)}rotateY(e){return this.rotateOnAxis(Od,e)}rotateZ(e){return this.rotateOnAxis(Bd,e)}translateOnAxis(e,t){return Ud.copy(e).applyQuaternion(this.quaternion),this.position.add(Ud.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nd,e)}translateY(e){return this.translateOnAxis(Od,e)}translateZ(e){return this.translateOnAxis(Bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Io.copy(e):Io.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(pa,Io,this.up):jn.lookAt(Io,pa,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),xr.setFromRotationMatrix(jn),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kd),_r.child=e,this.dispatchEvent(_r),_r.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pm),Eh.child=e,this.dispatchEvent(Eh),Eh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kd),_r.child=e,this.dispatchEvent(_r),_r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,e,Rm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,Cm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Zi.DEFAULT_UP=new L(0,1,0);Zi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wt=class extends Zi{constructor(){super(),this.isGroup=!0,this.type="Group"}},Im={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Im)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function Ah(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=uu(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ah(a,r,e+1/3),this.g=Ah(a,r,e),this.b=Ah(a,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=jt){function n(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){let n=Nf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return ct.workingToColorSpace(Di.copy(this),e),Math.round(dt(Di.r*255,0,255))*65536+Math.round(dt(Di.g*255,0,255))*256+Math.round(dt(Di.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Di.copy(this),t);let n=Di.r,s=Di.g,r=Di.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Di.copy(this),t),e.r=Di.r,e.g=Di.g,e.b=Di.b,e}getStyle(e=jt){ct.workingToColorSpace(Di.copy(this),e);let t=Di.r,n=Di.g,s=Di.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ys),this.setHSL(ys.h+e,ys.s+t,ys.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ys),e.getHSL(Lo);let n=ya(ys.h,Lo.h,t),s=ya(ys.s,Lo.s,t),r=ya(ys.l,Lo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Di=new je;je.NAMES=Nf;var mi=class extends Zi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ts,this.environmentIntensity=1,this.environmentRotation=new Ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Rn=new L,Qn=new L,Rh=new L,es=new L,yr=new L,Mr=new L,zd=new L,Ch=new L,Ph=new L,Ih=new L,Lh=new Xe,Dh=new Xe,Fh=new Xe,bs=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Rn.subVectors(e,t),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Rn.subVectors(s,t),Qn.subVectors(n,t),Rh.subVectors(e,t);let a=Rn.dot(Rn),o=Rn.dot(Qn),l=Rn.dot(Rh),c=Qn.dot(Qn),d=Qn.dot(Rh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let h=1/u,f=(c*l-o*d)*h,g=(a*d-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,es)===null?!1:es.x>=0&&es.y>=0&&es.x+es.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,es)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,es.x),l.addScaledVector(a,es.y),l.addScaledVector(o,es.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Lh.setScalar(0),Dh.setScalar(0),Fh.setScalar(0),Lh.fromBufferAttribute(e,t),Dh.fromBufferAttribute(e,n),Fh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Lh,r.x),a.addScaledVector(Dh,r.y),a.addScaledVector(Fh,r.z),a}static isFrontFacing(e,t,n,s){return Rn.subVectors(n,t),Qn.subVectors(e,t),Rn.cross(Qn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Rn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;yr.subVectors(s,n),Mr.subVectors(r,n),Ch.subVectors(e,n);let l=yr.dot(Ch),c=Mr.dot(Ch);if(l<=0&&c<=0)return t.copy(n);Ph.subVectors(e,s);let d=yr.dot(Ph),u=Mr.dot(Ph);if(d>=0&&u<=d)return t.copy(s);let h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(yr,a);Ih.subVectors(e,r);let f=yr.dot(Ih),g=Mr.dot(Ih);if(g>=0&&f<=g)return t.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Mr,o);let p=d*g-f*u;if(p<=0&&u-d>=0&&f-g>=0)return zd.subVectors(r,s),o=(u-d)/(u-d+(f-g)),t.copy(s).addScaledVector(zd,o);let m=1/(p+v+h);return a=v*m,o=h*m,t.copy(n).addScaledVector(yr,a).addScaledVector(Mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Es=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Do.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Do.copy(n.boundingBox)),Do.applyMatrix4(e.matrixWorld),this.union(Do)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),Fo.subVectors(this.max,ma),Sr.subVectors(e.a,ma),wr.subVectors(e.b,ma),br.subVectors(e.c,ma),Ms.subVectors(wr,Sr),Ss.subVectors(br,wr),Ws.subVectors(Sr,br);let t=[0,-Ms.z,Ms.y,0,-Ss.z,Ss.y,0,-Ws.z,Ws.y,Ms.z,0,-Ms.x,Ss.z,0,-Ss.x,Ws.z,0,-Ws.x,-Ms.y,Ms.x,0,-Ss.y,Ss.x,0,-Ws.y,Ws.x,0];return!Uh(t,Sr,wr,br,Fo)||(t=[1,0,0,0,1,0,0,0,1],!Uh(t,Sr,wr,br,Fo))?!1:(Uo.crossVectors(Ms,Ss),t=[Uo.x,Uo.y,Uo.z],Uh(t,Sr,wr,br,Fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ts),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ts=[new L,new L,new L,new L,new L,new L,new L,new L],Cn=new L,Do=new Es,Sr=new L,wr=new L,br=new L,Ms=new L,Ss=new L,Ws=new L,ma=new L,Fo=new L,Uo=new L,Xs=new L;function Uh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xs.fromArray(i,r);let o=s.x*Math.abs(Xs.x)+s.y*Math.abs(Xs.y)+s.z*Math.abs(Xs.z),l=e.dot(Xs),c=t.dot(Xs),d=n.dot(Xs);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var Jt=new L,No=new ye,Lm=0,ft=class extends qn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=If,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)No.fromBufferAttribute(this,t),No.applyMatrix3(e),this.setXY(t,No.x,No.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bi(t,this.array),n=Bi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Bi(t,this.array),n=Bi(n,this.array),s=Bi(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Bi(t,this.array),n=Bi(n,this.array),s=Bi(s,this.array),r=Bi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ra=class extends ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ca=class extends ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var yt=class extends ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},Dm=new Es,ga=new L,Nh=new L,Ki=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Dm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);let t=ga.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ga,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(Nh)),this.expandByPoint(ga.copy(e.center).sub(Nh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Fm=0,pn=new bt,Oh=new Zi,Tr=new L,an=new Es,va=new Es,fi=new L,pt=class i extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sm(e)?Ca:Ra)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return Oh.lookAt(e),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Es);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(fi.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(fi),fi.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(fi)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];va.setFromBufferAttribute(o),this.morphTargetsRelative?(fi.addVectors(an.min,va.min),an.expandByPoint(fi),fi.addVectors(an.max,va.max),an.expandByPoint(fi)):(an.expandByPoint(va.min),an.expandByPoint(va.max))}an.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)fi.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(fi));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)fi.fromBufferAttribute(o,c),l&&(Tr.fromBufferAttribute(e,c),fi.add(Tr)),s=Math.max(s,n.distanceToSquared(fi))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ft(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new L,l[x]=new L;let c=new L,d=new L,u=new L,h=new ye,f=new ye,g=new ye,v=new L,p=new L;function m(x,E,R){c.fromBufferAttribute(n,x),d.fromBufferAttribute(n,E),u.fromBufferAttribute(n,R),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,R),d.sub(c),u.sub(c),f.sub(h),g.sub(h);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),p.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(D),o[x].add(v),o[E].add(v),o[R].add(v),l[x].add(p),l[E].add(p),l[R].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let x=0,E=_.length;x<E;++x){let R=_[x],D=R.start,F=R.count;for(let I=D,C=D+F;I<C;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let A=new L,S=new L,w=new L,y=new L;function T(x){w.fromBufferAttribute(s,x),y.copy(w);let E=o[x];A.copy(E),A.sub(w.multiplyScalar(w.dot(E))).normalize(),S.crossVectors(y,E);let D=S.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,D)}for(let x=0,E=_.length;x<E;++x){let R=_[x],D=R.start,F=R.count;for(let I=D,C=D+F;I<C;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,d=new L,u=new L;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fi.fromBufferAttribute(e,t),fi.normalize(),e.setXYZ(t,fi.x,fi.y,fi.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d),f=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*d;for(let m=0;m<d;m++)h[g++]=c[f++]}return new ft(h,d,u)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){let h=c[d],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){let f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],u=r[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,d=a.length;c<d;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Bh=new L,Um=new L,Nm=new et,Pn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Bh.subVectors(n,t).cross(Um.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Bh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Nm.getNormalMatrix(e),s=this.coplanarPoint(Bh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Om=0,ss=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=Hr,this.side=Is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qh,this.blendDst=za,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=el,this.stencilZFail=el,this.stencilZPass=el,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Pn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ye().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var is=new L,kh=new L,Oo=new L,Bo=new L,Nr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,is)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=is.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(is.copy(this.origin).addScaledVector(this.direction,t),is.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){kh.copy(e).add(t).multiplyScalar(.5),Oo.copy(t).sub(e).normalize(),Bo.copy(this.origin).sub(kh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Oo),o=Bo.dot(this.direction),l=-Bo.dot(Oo),c=Bo.lengthSq(),d=Math.abs(1-a*a),u,h,f,g;if(d>0)if(u=a*l-o,h=a*o-l,g=r*d,u>=0)if(h>=-g)if(h<=g){let v=1/d;u*=v,h*=v,f=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(kh).addScaledVector(Oo,h),f}intersectSphere(e,t){if(e.radius<0)return null;is.subVectors(e.center,this.origin);let n=is.dot(this.direction),s=is.dot(is)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,is)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,u=e.x-a.x,h=e.y-a.y,f=e.z-a.z,g=t.x-a.x,v=t.y-a.y,p=t.z-a.z,m=n.x-a.x,_=n.y-a.y,A=n.z-a.z,S=Math.abs(l),w=Math.abs(c),y=Math.abs(d),T,x,E,R,D,F,I,C,U,H,G,K;if(S>=w&&S>=y?(E=l,F=u,U=g,K=m,l>=0?(T=c,x=d,R=h,D=f,I=v,C=p,H=_,G=A):(T=d,x=c,R=f,D=h,I=p,C=v,H=A,G=_)):w>=y?(E=c,F=h,U=v,K=_,c>=0?(T=d,x=l,R=f,D=u,I=p,C=g,H=A,G=m):(T=l,x=d,R=u,D=f,I=g,C=p,H=m,G=A)):(E=d,F=f,U=p,K=A,d>=0?(T=l,x=c,R=u,D=h,I=g,C=v,H=m,G=_):(T=c,x=l,R=h,D=u,I=v,C=g,H=_,G=m)),E===0)return null;let N=T/E,V=x/E,Y=1/E,re=R-N*F,ee=D-V*F,Pe=I-N*U,Ce=C-V*U,Le=H-N*K,J=G-V*K,te=Le*Ce-J*Pe,ue=re*J-ee*Le,Ie=Pe*ee-Ce*re;if(s){if(te<0||ue<0||Ie<0)return null}else if((te<0||ue<0||Ie<0)&&(te>0||ue>0||Ie>0))return null;let Me=te+ue+Ie;if(Me===0)return null;let Je=Y*(te*F+ue*U+Ie*K);return(Me>0?Je<0:Je>0)?null:this.at(Je/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ln=class extends ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ts,this.combine=eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Hd=new bt,qs=new Nr,ko=new Ki,Vd=new L,zo=new L,Ho=new L,Vo=new L,zh=new L,Go=new L,Gd=new L,Wo=new L,$e=class extends Zi{constructor(e=new pt,t=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Go.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],u=r[l];d!==0&&(zh.fromBufferAttribute(u,e),a?Go.addScaledVector(zh,d):Go.addScaledVector(zh.sub(t),d))}t.add(Go)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(r),qs.copy(e.ray).recast(e.near),!(ko.containsPoint(qs.origin)===!1&&(qs.intersectSphere(ko,Vd)===null||qs.origin.distanceToSquared(Vd)>(e.far-e.near)**2))&&(Hd.copy(r).invert(),qs.copy(e.ray).applyMatrix4(Hd),!(n.boundingBox!==null&&qs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let p=h[g],m=a[p.materialIndex],_=Math.max(p.start,f.start),A=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let S=_,w=A;S<w;S+=3){let y=o.getX(S),T=o.getX(S+1),x=o.getX(S+2);s=Xo(this,m,e,n,c,d,u,y,T,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let _=o.getX(p),A=o.getX(p+1),S=o.getX(p+2);s=Xo(this,a,e,n,c,d,u,_,A,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let p=h[g],m=a[p.materialIndex],_=Math.max(p.start,f.start),A=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=_,w=A;S<w;S+=3){let y=S,T=S+1,x=S+2;s=Xo(this,m,e,n,c,d,u,y,T,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let _=p,A=p+1,S=p+2;s=Xo(this,a,e,n,c,d,u,_,A,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Bm(i,e,t,n,s,r,a,o){let l;if(e.side===zi?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Is,o),l===null)return null;Wo.copy(o),Wo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Wo);return c<t.near||c>t.far?null:{distance:c,point:Wo.clone(),object:i}}function Xo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,zo),i.getVertexPosition(l,Ho),i.getVertexPosition(c,Vo);let d=Bm(i,e,t,n,zo,Ho,Vo,Gd);if(d){let u=new L;bs.getBarycoord(Gd,zo,Ho,Vo,u),s&&(d.uv=bs.getInterpolatedAttribute(s,o,l,c,u,new ye)),r&&(d.uv1=bs.getInterpolatedAttribute(r,o,l,c,u,new ye)),a&&(d.normal=bs.getInterpolatedAttribute(a,o,l,c,u,new L),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new L,materialIndex:0};bs.getNormal(zo,Ho,Vo,h.normal),d.face=h,d.barycoord=u}return d}var Or=class extends $i{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Yt,d=Yt,u,h){super(null,a,o,l,c,d,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pa=class extends ft{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};var Ys=new Ki,km=new ye(.5,.5),qo=new L,Ia=class{constructor(e=new Pn,t=new Pn,n=new Pn,s=new Pn,r=new Pn,a=new Pn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=In,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],f=r[7],g=r[8],v=r[9],p=r[10],m=r[11],_=r[12],A=r[13],S=r[14],w=r[15];if(s[0].setComponents(c-a,f-d,m-g,w-_).normalize(),s[1].setComponents(c+a,f+d,m+g,w+_).normalize(),s[2].setComponents(c+o,f+u,m+v,w+A).normalize(),s[3].setComponents(c-o,f-u,m-v,w-A).normalize(),n)s[4].setComponents(l,h,p,S).normalize(),s[5].setComponents(c-l,f-h,m-p,w-S).normalize();else if(s[4].setComponents(c-l,f-h,m-p,w-S).normalize(),t===In)s[5].setComponents(c+l,f+h,m+p,w+S).normalize();else if(t===ba)s[5].setComponents(l,h,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(e){Ys.center.set(0,0,0);let t=km.distanceTo(e.center);return Ys.radius=.7071067811865476+t,Ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(qo.x=s.normal.x>0?e.max.x:e.min.x,qo.y=s.normal.y>0?e.max.y:e.min.y,qo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var pl=class extends ss{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ml=new L,gl=new L,Wd=new bt,xa=new Nr,Yo=new Ki,Hh=new L,Xd=new L,vl=class extends Zi{constructor(e=new pt,t=new pl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ml.fromBufferAttribute(t,s-1),gl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ml.distanceTo(gl);e.setAttribute("lineDistance",new yt(n,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(s),Yo.radius+=r,e.ray.intersectsSphere(Yo)===!1)return;Wd.copy(s).invert(),xa.copy(e.ray).applyMatrix4(Wd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,p=g-1;v<p;v+=c){let m=d.getX(v),_=d.getX(v+1),A=$o(this,e,xa,l,m,_,v);A&&t.push(A)}if(this.isLineLoop){let v=d.getX(g-1),p=d.getX(f),m=$o(this,e,xa,l,v,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,p=g-1;v<p;v+=c){let m=$o(this,e,xa,l,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){let v=$o(this,e,xa,l,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function $o(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(ml.fromBufferAttribute(o,s),gl.fromBufferAttribute(o,r),t.distanceSqToSegment(ml,gl,Hh,Xd)>n)return;Hh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Hh);if(!(c<e.near||c>e.far))return{distance:c,point:Xd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var qd=new L,Yd=new L,La=class extends vl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)qd.fromBufferAttribute(t,s),Yd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+qd.distanceTo(Yd);e.setAttribute("lineDistance",new yt(n,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var xl=class extends ss{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$d=new bt,Yh=new Nr,Zo=new Ki,Ko=new L,Fi=class extends Zi{constructor(e=new pt,t=new xl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,e.ray.intersectsSphere(Zo)===!1)return;$d.copy(s).invert(),Yh.copy(e.ray).applyMatrix4($d);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,v=f;g<v;g++){let p=c.getX(g);Ko.fromBufferAttribute(u,p),Zd(Ko,p,l,s,e,t,this)}}else{let h=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=h,v=f;g<v;g++)Ko.fromBufferAttribute(u,g),Zd(Ko,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zd(i,e,t,n,s,r,a){let o=Yh.distanceSqToPoint(i);if(o<t){let l=new L;Yh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Da=class extends $i{constructor(e=[],t=Ls,n,s,r,a,o,l,c,d){super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var As=class extends $i{constructor(e,t,n=Un,s,r,a,o=Yt,l=Yt,c,d=Xn,u=1){if(d!==Xn&&d!==Fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:u};super(h,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},_l=class extends As{constructor(e,t=Un,n=Ls,s,r,a=Yt,o=Yt,l,c=Xn){let d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fa=class extends $i{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Br=class i extends pt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],u=[],h=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(u,2));function g(v,p,m,_,A,S,w,y,T,x,E){let R=S/T,D=w/x,F=S/2,I=w/2,C=y/2,U=T+1,H=x+1,G=0,K=0,N=new L;for(let V=0;V<H;V++){let Y=V*D-I;for(let re=0;re<U;re++){let ee=re*R-F;N[v]=ee*_,N[p]=Y*A,N[m]=C,c.push(N.x,N.y,N.z),N[v]=0,N[p]=0,N[m]=y>0?1:-1,d.push(N.x,N.y,N.z),u.push(re/T),u.push(1-V/x),G+=1}}for(let V=0;V<x;V++)for(let Y=0;Y<T;Y++){let re=h+Y+U*V,ee=h+Y+U*(V+1),Pe=h+(Y+1)+U*(V+1),Ce=h+(Y+1)+U*V;l.push(re,ee,Ce),l.push(ee,Pe,Ce),K+=6}o.addGroup(f,K,E),f+=K,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ki=class i extends pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,u=e/o,h=t/l,f=[],g=[],v=[],p=[];for(let m=0;m<d;m++){let _=m*h-a;for(let A=0;A<c;A++){let S=A*u-r;g.push(S,-_,0),v.push(0,0,1),p.push(A/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let A=_+c*m,S=_+c*(m+1),w=_+1+c*(m+1),y=_+1+c*m;f.push(A,S,y),f.push(S,w,y)}this.setIndex(f),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ua=class i extends pt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],d=[],u=e,h=(t-e)/s,f=new L,g=new ye;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){let m=r+p/n*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,d.push(g.x,g.y)}u+=h}for(let v=0;v<s;v++){let p=v*(n+1);for(let m=0;m<n;m++){let _=m+p,A=_,S=_+n+1,w=_+n+2,y=_+1;o.push(A,S,y),o.push(S,w,y)}}this.setIndex(o),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var rs=class i extends pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,d=[],u=new L,h=new L,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){let _=[],A=m/n,S=a+A*o,w=e*Math.cos(S),y=Math.sqrt(e*e-w*w),T=0;m===0&&a===0?T=.5/t:m===n&&l===Math.PI&&(T=-.5/t);for(let x=0;x<=t;x++){let E=x/t,R=s+E*r;u.x=-y*Math.cos(R),u.y=w,u.z=y*Math.sin(R),g.push(u.x,u.y,u.z),h.copy(u).normalize(),v.push(h.x,h.y,h.z),p.push(E+T,1-A),_.push(c++)}d.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let A=d[m][_+1],S=d[m][_],w=d[m+1][_],y=d[m+1][_+1];(m!==0||a>0)&&f.push(A,S,y),(m!==n-1||l<Math.PI)&&f.push(S,w,y)}this.setIndex(f),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Js(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Kd(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Kd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ui(i){let e={};for(let t=0;t<i.length;t++){let n=Js(i[t]);for(let s in n)e[s]=n[s]}return e}function Kd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function zm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function du(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var os={clone:Js,merge:Ui},Hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fe=class extends ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hm,this.fragmentShader=Vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=zm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new je().setHex(s.value);break;case"v2":this.uniforms[n].value=new ye().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Xe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new et().fromArray(s.value);break;case"m4":this.uniforms[n].value=new bt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},kr=class extends Fe{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var yl=class extends ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ml=class extends ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Er(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Vh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Rs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];i:{e:{let a;t:{n:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break n;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break i}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Sl=class extends Rs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wh,endingEnd:Wh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xh:r=e,o=2*t-n;break;case qh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xh:a=e,l=2*n-t;break;case qh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,p=v*g,m=-h*p+2*h*v-h*g,_=(1+h)*p+(-1.5-2*h)*v+(-.5+h)*g+1,A=(-1-f)*p+(1.5+f)*v+.5*g,S=f*p-f*v;for(let w=0;w!==o;++w)r[w]=m*a[d+w]+_*a[c+w]+A*a[l+w]+S*a[u+w];return r}},wl=class extends Rs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(s-t),u=1-d;for(let h=0;h!==o;++h)r[h]=a[c+h]*u+a[l+h]*d;return r}},bl=class extends Rs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Tl=class extends Rs{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this.inTangents,u=this.outTangents;if(!d||!u){let g=(n-t)/(s-t),v=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*v+a[l+p]*g;return r}let h=o*2,f=e-1;for(let g=0;g!==o;++g){let v=a[c+g],p=a[l+g],m=f*h+g*2,_=u[m],A=u[m+1],S=e*h+g*2,w=d[S],y=d[S+1],T=Wm(n,t,_,w,s);r[g]=Of(T,v,A,y,p)}return r}};function Of(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Gm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Wm(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Of(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Gm(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var ln=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Er(t,this.TimeBufferType),this.values=Er(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Er(e.times,Array),values:Er(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Vh(e.settings)&&(n.settings={inTangents:Er(e.settings.inTangents,Array),outTangents:Er(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Tl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ma:t=this.InterpolantFactoryMethodDiscrete;break;case hl:t=this.InterpolantFactoryMethodLinear;break;case Qo:t=this.InterpolantFactoryMethodSmooth;break;case Gh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ma;case this.InterpolantFactoryMethodLinear:return hl;case this.InterpolantFactoryMethodSmooth:return Qo;case this.InterpolantFactoryMethodBezier:return Gh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Vh(this.settings)&&(Jd(this.settings.inTangents,e),Jd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ye("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ye("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&rm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ye("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,h=u-n,f=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[h+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Vh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Jd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}ln.prototype.ValueTypeName="";ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=hl;var Cs=class extends ln{constructor(e,t,n){super(e,t,n)}};Cs.prototype.ValueTypeName="bool";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=Ma;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var El=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}};El.prototype.ValueTypeName="color";var Al=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}};Al.prototype.ValueTypeName="number";var Rl=class extends Rs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let d=c+o;c!==d;c+=4)Yi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Na=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Rl(this.times,this.values,this.getValueSize(),e)}};Na.prototype.ValueTypeName="quaternion";Na.prototype.InterpolantFactoryMethodSmooth=void 0;var Ps=class extends ln{constructor(e,t,n){super(e,t,n)}};Ps.prototype.ValueTypeName="string";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=Ma;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}};Cl.prototype.ValueTypeName="vector";var Pl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Bf=new Pl,Il=class{constructor(e){this.manager=e!==void 0?e:Bf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Il.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jo=new L,jo=new Yi,Wn=new L,Zs=class extends Zi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jo,jo,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,jo,Wn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Jo,jo,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,jo,Wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ws=new L,jd=new ye,Qd=new ye,pi=class extends Zs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dr*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ws.x,ws.y).multiplyScalar(-e/ws.z),ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ws.x,ws.y).multiplyScalar(-e/ws.z)}getViewSize(e,t){return this.getViewBounds(e,jd,Qd),t.subVectors(Qd,jd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_a*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Dn=class extends Zs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Oa=class extends pt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Ar=-90,Rr=1,Ll=class extends Zi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pi(Ar,Rr,e,t);s.layers=this.layers,this.add(s);let r=new pi(Ar,Rr,e,t);r.layers=this.layers,this.add(r);let a=new pi(Ar,Rr,e,t);a.layers=this.layers,this.add(a);let o=new pi(Ar,Rr,e,t);o.layers=this.layers,this.add(o);let l=new pi(Ar,Rr,e,t);l.layers=this.layers,this.add(l);let c=new pi(Ar,Rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Dl=class extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ba=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Xm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Xm(){this._document.hidden===!1&&this.reset()}var fu="\\[\\]\\.:\\/",qm=new RegExp("["+fu+"]","g"),pu="[^"+fu+"]",Ym="[^"+fu.replace("\\.","")+"]",$m=/((?:WC+[\/:])*)/.source.replace("WC",pu),Zm=/(WCOD+)?/.source.replace("WCOD",Ym),Km=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pu),Jm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pu),jm=new RegExp("^"+$m+Zm+Km+Jm+"$"),Qm=["material","materials","bones","map"],$h=class{constructor(e,t,n){let s=n||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qm,"")}static parseTrackName(e){let t=jm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Qm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=$h;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vS=new Float32Array(1);var yu=class yu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};yu.prototype.isMatrix2=!0;var Zh=yu;function mu(i,e,t,n){let s=eg(n);switch(t){case au:return i*e;case lu:return i*e/s.components*s.byteLength;case Vl:return i*e/s.components*s.byteLength;case Us:return i*e*2/s.components*s.byteLength;case Gl:return i*e*2/s.components*s.byteLength;case ou:return i*e*3/s.components*s.byteLength;case wi:return i*e*4/s.components*s.byteLength;case Wl:return i*e*4/s.components*s.byteLength;case Ka:case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ja:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ql:case $l:return Math.max(i,16)*Math.max(e,8)/4;case Xl:case Yl:return Math.max(i,8)*Math.max(e,8)/2;case Zl:case Kl:case jl:case Ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jl:case eo:case ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case nc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case rc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ac:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case oc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case uc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case pc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case mc:case gc:case vc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xc:case _c:return Math.ceil(i/4)*Math.ceil(e/4)*8;case to:case yc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function eg(i){switch(i){case cn:case iu:return{byteLength:1,components:1};case Vr:case nu:case Wt:return{byteLength:2,components:1};case zl:case Hl:return{byteLength:2,components:4};case Un:case kl:case Ji:return{byteLength:4,components:1};case su:case ru:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ap(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ig(i){let e=new WeakMap;function t(o,l){let c=o.array,d=o.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let d=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,d);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){let g=u[h],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,u[h]=v)}u.length=h+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];i.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ng=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ag=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,og=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ug=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,dg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Eg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ag=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ug=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ng=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Og=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$g=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Zg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Kg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ev=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,av=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ov=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_v=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ev=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Av=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Dv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ov=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$v=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ux=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,px=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_x=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ex=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Px=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ux=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:ng,alphahash_pars_fragment:sg,alphamap_fragment:rg,alphamap_pars_fragment:ag,alphatest_fragment:og,alphatest_pars_fragment:lg,aomap_fragment:cg,aomap_pars_fragment:hg,batching_pars_vertex:ug,batching_vertex:dg,begin_vertex:fg,beginnormal_vertex:pg,bsdfs:mg,iridescence_fragment:gg,bumpmap_pars_fragment:vg,clipping_planes_fragment:xg,clipping_planes_pars_fragment:_g,clipping_planes_pars_vertex:yg,clipping_planes_vertex:Mg,color_fragment:Sg,color_pars_fragment:wg,color_pars_vertex:bg,color_vertex:Tg,common:Eg,cube_uv_reflection_fragment:Ag,defaultnormal_vertex:Rg,displacementmap_pars_vertex:Cg,displacementmap_vertex:Pg,emissivemap_fragment:Ig,emissivemap_pars_fragment:Lg,colorspace_fragment:Dg,colorspace_pars_fragment:Fg,envmap_fragment:Ug,envmap_common_pars_fragment:Ng,envmap_pars_fragment:Og,envmap_pars_vertex:Bg,envmap_physical_pars_fragment:Zg,envmap_vertex:kg,fog_vertex:zg,fog_pars_vertex:Hg,fog_fragment:Vg,fog_pars_fragment:Gg,gradientmap_pars_fragment:Wg,lightmap_pars_fragment:Xg,lights_lambert_fragment:qg,lights_lambert_pars_fragment:Yg,lights_pars_begin:$g,lights_toon_fragment:Kg,lights_toon_pars_fragment:Jg,lights_phong_fragment:jg,lights_phong_pars_fragment:Qg,lights_physical_fragment:ev,lights_physical_pars_fragment:tv,lights_fragment_begin:iv,lights_fragment_maps:nv,lights_fragment_end:sv,lightprobes_pars_fragment:rv,logdepthbuf_fragment:av,logdepthbuf_pars_fragment:ov,logdepthbuf_pars_vertex:lv,logdepthbuf_vertex:cv,map_fragment:hv,map_pars_fragment:uv,map_particle_fragment:dv,map_particle_pars_fragment:fv,metalnessmap_fragment:pv,metalnessmap_pars_fragment:mv,morphinstance_vertex:gv,morphcolor_vertex:vv,morphnormal_vertex:xv,morphtarget_pars_vertex:_v,morphtarget_vertex:yv,normal_fragment_begin:Mv,normal_fragment_maps:Sv,normal_pars_fragment:wv,normal_pars_vertex:bv,normal_vertex:Tv,normalmap_pars_fragment:Ev,clearcoat_normal_fragment_begin:Av,clearcoat_normal_fragment_maps:Rv,clearcoat_pars_fragment:Cv,iridescence_pars_fragment:Pv,opaque_fragment:Iv,packing:Lv,premultiplied_alpha_fragment:Dv,project_vertex:Fv,dithering_fragment:Uv,dithering_pars_fragment:Nv,roughnessmap_fragment:Ov,roughnessmap_pars_fragment:Bv,shadowmap_pars_fragment:kv,shadowmap_pars_vertex:zv,shadowmap_vertex:Hv,shadowmask_pars_fragment:Vv,skinbase_vertex:Gv,skinning_pars_vertex:Wv,skinning_vertex:Xv,skinnormal_vertex:qv,specularmap_fragment:Yv,specularmap_pars_fragment:$v,tonemapping_fragment:Zv,tonemapping_pars_fragment:Kv,transmission_fragment:Jv,transmission_pars_fragment:jv,uv_pars_fragment:Qv,uv_pars_vertex:ex,uv_vertex:tx,worldpos_vertex:ix,background_vert:nx,background_frag:sx,backgroundCube_vert:rx,backgroundCube_frag:ax,cube_vert:ox,cube_frag:lx,depth_vert:cx,depth_frag:hx,distance_vert:ux,distance_frag:dx,equirect_vert:fx,equirect_frag:px,linedashed_vert:mx,linedashed_frag:gx,meshbasic_vert:vx,meshbasic_frag:xx,meshlambert_vert:_x,meshlambert_frag:yx,meshmatcap_vert:Mx,meshmatcap_frag:Sx,meshnormal_vert:wx,meshnormal_frag:bx,meshphong_vert:Tx,meshphong_frag:Ex,meshphysical_vert:Ax,meshphysical_frag:Rx,meshtoon_vert:Cx,meshtoon_frag:Px,points_vert:Ix,points_frag:Lx,shadow_vert:Dx,shadow_frag:Fx,sprite_vert:Ux,sprite_frag:Nx},_e={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Zn={basic:{uniforms:Ui([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Ui([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Ui([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Ui([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Ui([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new je(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Ui([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Ui([_e.points,_e.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Ui([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Ui([_e.common,_e.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Ui([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Ui([_e.sprite,_e.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:Ui([_e.common,_e.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:Ui([_e.lights,_e.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Zn.physical={uniforms:Ui([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var wc={r:0,b:0,g:0},Ox=new bt,op=new et;op.set(-1,0,0,0,1,0,0,0,1);function Bx(i,e,t,n,s,r){let a=new je(0),o=s===!0?0:1,l,c,d=null,u=0,h=null;function f(_){let A=_.isScene===!0?_.background:null;if(A&&A.isTexture){let S=_.backgroundBlurriness>0;A=e.get(A,S)}return A}function g(_){let A=!1,S=f(_);S===null?p(a,o):S&&S.isColor&&(p(S,1),A=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(_,A){let S=f(A);S&&(S.isCubeTexture||S.mapping===$a)?(c===void 0&&(c=new $e(new Br(1,1,1),new Fe({name:"BackgroundCubeMaterial",uniforms:Js(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ox.makeRotationFromEuler(A.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(op),c.material.toneMapped=ct.getTransfer(S.colorSpace)!==_t,(d!==S||u!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=S,u=S.version,h=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new $e(new ki(2,2),new Fe({name:"BackgroundMaterial",uniforms:Js(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ct.getTransfer(S.colorSpace)!==_t,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||u!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=S,u=S.version,h=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,A){_.getRGB(wc,du(i)),t.buffers.color.setClear(wc.r,wc.g,wc.b,A,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,A=1){a.set(_),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,p(a,o)},render:g,addToRenderList:v,dispose:m}}function kx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(D,F,I,C,U){let H=!1,G=u(D,C,I,F);r!==G&&(r=G,c(r.object)),H=f(D,C,I,U),H&&g(D,C,I,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,S(D,F,I,C),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function d(D){return i.deleteVertexArray(D)}function u(D,F,I,C){let U=C.wireframe===!0,H=n[F.id];H===void 0&&(H={},n[F.id]=H);let G=D.isInstancedMesh===!0?D.id:0,K=H[G];K===void 0&&(K={},H[G]=K);let N=K[I.id];N===void 0&&(N={},K[I.id]=N);let V=N[U];return V===void 0&&(V=h(l()),N[U]=V),V}function h(D){let F=[],I=[],C=[];for(let U=0;U<t;U++)F[U]=0,I[U]=0,C[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:I,attributeDivisors:C,object:D,attributes:{},index:null}}function f(D,F,I,C){let U=r.attributes,H=F.attributes,G=0,K=I.getAttributes();for(let N in K)if(K[N].location>=0){let Y=U[N],re=H[N];if(re===void 0&&(N==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),N==="instanceColor"&&D.instanceColor&&(re=D.instanceColor)),Y===void 0||Y.attribute!==re||re&&Y.data!==re.data)return!0;G++}return r.attributesNum!==G||r.index!==C}function g(D,F,I,C){let U={},H=F.attributes,G=0,K=I.getAttributes();for(let N in K)if(K[N].location>=0){let Y=H[N];Y===void 0&&(N==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),N==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor));let re={};re.attribute=Y,Y&&Y.data&&(re.data=Y.data),U[N]=re,G++}r.attributes=U,r.attributesNum=G,r.index=C}function v(){let D=r.newAttributes;for(let F=0,I=D.length;F<I;F++)D[F]=0}function p(D){m(D,0)}function m(D,F){let I=r.newAttributes,C=r.enabledAttributes,U=r.attributeDivisors;I[D]=1,C[D]===0&&(i.enableVertexAttribArray(D),C[D]=1),U[D]!==F&&(i.vertexAttribDivisor(D,F),U[D]=F)}function _(){let D=r.newAttributes,F=r.enabledAttributes;for(let I=0,C=F.length;I<C;I++)F[I]!==D[I]&&(i.disableVertexAttribArray(I),F[I]=0)}function A(D,F,I,C,U,H,G){G===!0?i.vertexAttribIPointer(D,F,I,U,H):i.vertexAttribPointer(D,F,I,C,U,H)}function S(D,F,I,C){v();let U=C.attributes,H=I.getAttributes(),G=F.defaultAttributeValues;for(let K in H){let N=H[K];if(N.location>=0){let V=U[K];if(V===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(V=D.instanceColor)),V!==void 0){let Y=V.normalized,re=V.itemSize,ee=e.get(V);if(ee===void 0)continue;let Pe=ee.buffer,Ce=ee.type,Le=ee.bytesPerElement,J=Ce===i.INT||Ce===i.UNSIGNED_INT||V.gpuType===kl;if(V.isInterleavedBufferAttribute){let te=V.data,ue=te.stride,Ie=V.offset;if(te.isInstancedInterleavedBuffer){for(let Me=0;Me<N.locationSize;Me++)m(N.location+Me,te.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Me=0;Me<N.locationSize;Me++)p(N.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let Me=0;Me<N.locationSize;Me++)A(N.location+Me,re/N.locationSize,Ce,Y,ue*Le,(Ie+re/N.locationSize*Me)*Le,J)}else{if(V.isInstancedBufferAttribute){for(let te=0;te<N.locationSize;te++)m(N.location+te,V.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let te=0;te<N.locationSize;te++)p(N.location+te);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let te=0;te<N.locationSize;te++)A(N.location+te,re/N.locationSize,Ce,Y,re*Le,re/N.locationSize*te*Le,J)}}else if(G!==void 0){let Y=G[K];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(N.location,Y);break;case 3:i.vertexAttrib3fv(N.location,Y);break;case 4:i.vertexAttrib4fv(N.location,Y);break;default:i.vertexAttrib1fv(N.location,Y)}}}}_()}function w(){E();for(let D in n){let F=n[D];for(let I in F){let C=F[I];for(let U in C){let H=C[U];for(let G in H)d(H[G].object),delete H[G];delete C[U]}}delete n[D]}}function y(D){if(n[D.id]===void 0)return;let F=n[D.id];for(let I in F){let C=F[I];for(let U in C){let H=C[U];for(let G in H)d(H[G].object),delete H[G];delete C[U]}}delete n[D.id]}function T(D){for(let F in n){let I=n[F];for(let C in I){let U=I[C];if(U[D.id]===void 0)continue;let H=U[D.id];for(let G in H)d(H[G].object),delete H[G];delete U[D.id]}}}function x(D){for(let F in n){let I=n[F],C=D.isInstancedMesh===!0?D.id:0,U=I[C];if(U!==void 0){for(let H in U){let G=U[H];for(let K in G)d(G[K].object),delete G[K];delete U[H]}delete I[C],Object.keys(I).length===0&&delete n[F]}}}function E(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:y,releaseStatesOfObject:x,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function zx(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let h=0;for(let f=0;f<d;f++)h+=c[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Hx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==wi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let x=T===Wt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==cn&&T!==Ji&&!x&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(We("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:A,maxFragmentUniforms:S,maxSamples:w,samples:y}}function Vx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Pn,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let f=u.length!==0||h||n!==0||s;return s=h,n=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?d(null):c();else{let _=r?0:n,A=_*4,S=m.clippingState||null;l.value=S,S=d(g,h,A,f);for(let w=0;w!==A;++w)S[w]=t[w];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,f,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let m=f+v*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,S=f;A!==v;++A,S+=4)a.copy(u[A]).applyMatrix4(_,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}var qr=4,Gx=6,Wx=20,Xx=256,ro=new Dn,kf=new je,Mu=null,Su=0,wu=0,bu=!1,qx=new L,js=new L,Tc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=qx}=r;Mu=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel(),bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Mu,Su,wu),this._renderer.xr.enabled=bu,e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ls||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mu=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel(),bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Wt,format:wi,colorSpace:Sa,depthBuffer:!1},s=zf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Yx(r)),this._blurMaterial=Zx(r,e,t),this._ggxMaterial=$x(r,e,t)}return s}_compileMaterial(e){let t=new $e(new pt,e);this._renderer.compile(t,ro)}_sceneToCubeUV(e,t,n,s,r){let l=new pi(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(kf),u.toneMapping=ai,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $e(new Br,new Ln({name:"PMREM.Background",side:zi,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,p=v.material,m=!1,_=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,m=!0):(p.color.copy(kf),m=!0);for(let A=0;A<6;A++){let S=A%3;S===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[A],r.y,r.z)):S===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[A]));let w=this._cubeSize;Xr(s,S*w,A>2?w:0,w,w),u.setRenderTarget(s),m&&u.render(v,l),u.render(e,l)}u.toneMapping=f,u.autoClear=h,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ls||e.mapping===Ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Xr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ro)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-d*d),h=c*1.25,f=u*h,{_lodMax:g}=this,v=this._sizeLods[n],p=3*v*(n>g-qr?n-g+qr:0),m=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Xr(r,p,m,3*v,2*v),s.setRenderTarget(r),s.render(o,ro),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Xr(e,p,m,3*v,2*v),s.setRenderTarget(e),s.render(o,ro)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],u=3*d*(s>this._lodMax-qr?s-this._lodMax+qr:0),h=4*(this._cubeSize-d);Xr(t,u,h,3*d,2*d),a.setRenderTarget(t),a.render(l,ro)}};function Yx(i){let e=[],t=[],n=i,s=i-qr+1+Gx;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,h=6,f=3,g=new Float32Array(f*h*u),v=new Float32Array(f*h*u);for(let m=0;m<u;m++){let _=m%3*2/3-1,A=m>2?0:-1,S=[_,A,0,_+2/3,A,0,_+2/3,A+1,0,_,A,0,_+2/3,A+1,0,_,A+1,0];g.set(S,f*h*m);for(let w=0;w<h;w++){let y=d[w*2]*2-1,T=d[w*2+1]*2-1;m===0?js.set(1,T,y):m===1?js.set(-y,1,-T):m===2?js.set(-y,T,1):m===3?js.set(-1,T,-y):m===4?js.set(-y,-1,T):js.set(y,T,-1),js.toArray(v,(m*h+w)*f)}}let p=new pt;p.setAttribute("position",new ft(g,f)),p.setAttribute("outputDirection",new ft(v,f)),t.push(new $e(p,null)),n>qr&&n--}return{lodMeshes:t,sizeLods:e}}function zf(i,e,t){let n=new Rt(i,e,t);return n.texture.mapping=$a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function $x(i,e,t){return new Fe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Zx(i,e,t){return new Fe({name:"SphericalGaussianBlur",defines:{SAMPLES:Wx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Hf(){return new Fe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Vf(){return new Fe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Rc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ec=class extends Rt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Da(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Br(5,5,5),r=new Fe({name:"CubemapFromEquirect",uniforms:Js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zi,blending:Si});r.uniforms.tEquirect.value=t;let a=new $e(s,r),o=t.minFilter;return t.minFilter===Ds&&(t.minFilter=Qt),new Ll(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Kx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Nl||f===Ol)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let v=new Ec(g.height);return v.fromEquirectangularTexture(i,h),e.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===Nl||f===Ol,v=f===Ls||f===Ks;if(g||v){let p=t.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Tc(i)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{let _=h.image;return g&&_&&_.height>0||v&&_&&l(_)?(n===null&&(n=new Tc(i)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",d),p.texture):null}}}return h}function o(h,f){return f===Nl?h.mapping=Ls:f===Ol&&(h.mapping=Ks),h}function l(h){let f=0,g=6;for(let v=0;v<g;v++)h[v]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(h){let f=h.target;f.removeEventListener("dispose",d);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Jx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&$s("WebGLRenderer: "+n+" extension not supported."),s}}}function jx(i,e,t,n){let s={},r=new WeakMap;function a(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(u){let h=u.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(u){let h=[],f=u.index,g=u.attributes.position,v=0;if(g===void 0)return;if(f!==null){let _=f.array;v=f.version;for(let A=0,S=_.length;A<S;A+=3){let w=_[A+0],y=_[A+1],T=_[A+2];h.push(w,y,y,T,T,w)}}else{let _=g.array;v=g.version;for(let A=0,S=_.length/3-1;A<S;A+=3){let w=A+0,y=A+1,T=A+2;h.push(w,y,y,T,T,w)}}let p=new(g.count>=65535?Ca:Ra)(h,1);p.version=v;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function d(u){let h=r.get(u);if(h){let f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function Qx(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,h){i.drawElements(n,h,r,u*a),t.update(h,n,1)}function c(u,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,u*a,f),t.update(h,n,f))}function d(u,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,u,0,f);let v=0;for(let p=0;p<f;p++)v+=h[p];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function e_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function t_(i,e,t){let n=new WeakMap,s=new Xe;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0,h=n.get(o);if(h===void 0||h.count!==u){let E=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),v===!0&&(A=3);let S=o.attributes.position.count*A,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let y=new Float32Array(S*w*4*u),T=new Ea(y,S,w,u);T.type=Ji,T.needsUpdate=!0;let x=A*4;for(let R=0;R<u;R++){let D=p[R],F=m[R],I=_[R],C=S*w*4*R;for(let U=0;U<D.count;U++){let H=U*x;f===!0&&(s.fromBufferAttribute(D,U),y[C+H+0]=s.x,y[C+H+1]=s.y,y[C+H+2]=s.z,y[C+H+3]=0),g===!0&&(s.fromBufferAttribute(F,U),y[C+H+4]=s.x,y[C+H+5]=s.y,y[C+H+6]=s.z,y[C+H+7]=0),v===!0&&(s.fromBufferAttribute(I,U),y[C+H+8]=s.x,y[C+H+9]=s.y,y[C+H+10]=s.z,y[C+H+11]=I.itemSize===4?s.w:1)}}h={count:u,texture:T,size:new ye(S,w)},n.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function i_(i,e,t,n,s){let r=new WeakMap;function a(c){let d=s.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return h}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}var n_={[Ha]:"LINEAR_TONE_MAPPING",[Va]:"REINHARD_TONE_MAPPING",[Ga]:"CINEON_TONE_MAPPING",[Wa]:"ACES_FILMIC_TONE_MAPPING",[qa]:"AGX_TONE_MAPPING",[Ya]:"NEUTRAL_TONE_MAPPING",[Xa]:"CUSTOM_TONE_MAPPING"};function s_(i,e,t,n,s,r){let a=new Rt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new pt;c.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new yt([0,2,0,0,2,0],2));let d=new kr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new $e(c,d),h=new Dn(-1,1,1,-1,0,1),f=null,g=null,v=!1,p,m=null,_=[],A=!1;this.setSize=function(S,w){a.setSize(S,w),o!==null&&o.setSize(S,w),l!==null&&l.setSize(S,w);for(let y=0;y<_.length;y++){let T=_[y];T.setSize&&T.setSize(S,w)}},this.setEffects=function(S){_=S,A=_.length>0&&_[0].isRenderPass===!0;let w=a.width,y=a.height;_.length>0&&o===null&&(o=new Rt(w,y,{type:Wt,depthBuffer:!1,stencilBuffer:!1}),l=new Rt(w,y,{type:Wt,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<_.length;T++){let x=_[T];x.setSize&&x.setSize(w,y)}},this.begin=function(S,w){if(v||S.toneMapping===ai&&_.length===0)return!1;if(m=w,w!==null){let y=w.width,T=w.height;(a.width!==y||a.height!==T)&&this.setSize(y,T)}return A===!1&&S.setRenderTarget(a),p=S.toneMapping,S.toneMapping=ai,!0},this.hasRenderPass=function(){return A},this.end=function(S,w){S.toneMapping=p,v=!0;let y=a,T=o;for(let x=0;x<_.length;x++){let E=_[x];E.enabled!==!1&&(E.render(S,T,y,w),E.needsSwap!==!1&&(y=T,T=T===o?l:o))}if(f!==S.outputColorSpace||g!==S.toneMapping){f=S.outputColorSpace,g=S.toneMapping,d.defines={},ct.getTransfer(f)===_t&&(d.defines.SRGB_TRANSFER="");let x=n_[g];x&&(d.defines[x]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=y.texture,S.setRenderTarget(m),S.render(u,h),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var lp=new $i,Au=new As(1,1),cp=new Ea,hp=new fl,up=new Da,Gf=[],Wf=[],Xf=new Float32Array(16),qf=new Float32Array(9),Yf=new Float32Array(4);function $r(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Gf[s];if(r===void 0&&(r=new Float32Array(s),Gf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function oi(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function li(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Cc(i,e){let t=Wf[e];t===void 0&&(t=new Int32Array(e),Wf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function r_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function a_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(oi(t,e))return;i.uniform2fv(this.addr,e),li(t,e)}}function o_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(oi(t,e))return;i.uniform3fv(this.addr,e),li(t,e)}}function l_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(oi(t,e))return;i.uniform4fv(this.addr,e),li(t,e)}}function c_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(oi(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),li(t,e)}else{if(oi(t,n))return;Yf.set(n),i.uniformMatrix2fv(this.addr,!1,Yf),li(t,n)}}function h_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(oi(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),li(t,e)}else{if(oi(t,n))return;qf.set(n),i.uniformMatrix3fv(this.addr,!1,qf),li(t,n)}}function u_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(oi(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),li(t,e)}else{if(oi(t,n))return;Xf.set(n),i.uniformMatrix4fv(this.addr,!1,Xf),li(t,n)}}function d_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function f_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(oi(t,e))return;i.uniform2iv(this.addr,e),li(t,e)}}function p_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(oi(t,e))return;i.uniform3iv(this.addr,e),li(t,e)}}function m_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(oi(t,e))return;i.uniform4iv(this.addr,e),li(t,e)}}function g_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function v_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(oi(t,e))return;i.uniform2uiv(this.addr,e),li(t,e)}}function x_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(oi(t,e))return;i.uniform3uiv(this.addr,e),li(t,e)}}function __(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(oi(t,e))return;i.uniform4uiv(this.addr,e),li(t,e)}}function y_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Au.compareFunction=t.isReversedDepthBuffer()?Sc:Mc,r=Au):r=lp,t.setTexture2D(e||r,s)}function M_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||hp,s)}function S_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||up,s)}function w_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||cp,s)}function b_(i){switch(i){case 5126:return r_;case 35664:return a_;case 35665:return o_;case 35666:return l_;case 35674:return c_;case 35675:return h_;case 35676:return u_;case 5124:case 35670:return d_;case 35667:case 35671:return f_;case 35668:case 35672:return p_;case 35669:case 35673:return m_;case 5125:return g_;case 36294:return v_;case 36295:return x_;case 36296:return __;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return w_}}function T_(i,e){i.uniform1fv(this.addr,e)}function E_(i,e){let t=$r(e,this.size,2);i.uniform2fv(this.addr,t)}function A_(i,e){let t=$r(e,this.size,3);i.uniform3fv(this.addr,t)}function R_(i,e){let t=$r(e,this.size,4);i.uniform4fv(this.addr,t)}function C_(i,e){let t=$r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function P_(i,e){let t=$r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function I_(i,e){let t=$r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function L_(i,e){i.uniform1iv(this.addr,e)}function D_(i,e){i.uniform2iv(this.addr,e)}function F_(i,e){i.uniform3iv(this.addr,e)}function U_(i,e){i.uniform4iv(this.addr,e)}function N_(i,e){i.uniform1uiv(this.addr,e)}function O_(i,e){i.uniform2uiv(this.addr,e)}function B_(i,e){i.uniform3uiv(this.addr,e)}function k_(i,e){i.uniform4uiv(this.addr,e)}function z_(i,e,t){let n=this.cache,s=e.length,r=Cc(t,s);oi(n,r)||(i.uniform1iv(this.addr,r),li(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Au:a=lp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function H_(i,e,t){let n=this.cache,s=e.length,r=Cc(t,s);oi(n,r)||(i.uniform1iv(this.addr,r),li(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||hp,r[a])}function V_(i,e,t){let n=this.cache,s=e.length,r=Cc(t,s);oi(n,r)||(i.uniform1iv(this.addr,r),li(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||up,r[a])}function G_(i,e,t){let n=this.cache,s=e.length,r=Cc(t,s);oi(n,r)||(i.uniform1iv(this.addr,r),li(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||cp,r[a])}function W_(i){switch(i){case 5126:return T_;case 35664:return E_;case 35665:return A_;case 35666:return R_;case 35674:return C_;case 35675:return P_;case 35676:return I_;case 5124:case 35670:return L_;case 35667:case 35671:return D_;case 35668:case 35672:return F_;case 35669:case 35673:return U_;case 5125:return N_;case 36294:return O_;case 36295:return B_;case 36296:return k_;case 35678:case 36198:case 36298:case 36306:case 35682:return z_;case 35679:case 36299:case 36307:return H_;case 35680:case 36300:case 36308:case 36293:return V_;case 36289:case 36303:case 36311:case 36292:return G_}}var Ru=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=b_(t.type)}},Cu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=W_(t.type)}},Pu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Tu=/(\w+)(\])?(\[|\.)?/g;function $f(i,e){i.seq.push(e),i.map[e.id]=e}function X_(i,e,t){let n=i.name,s=n.length;for(Tu.lastIndex=0;;){let r=Tu.exec(n),a=Tu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){$f(t,c===void 0?new Ru(o,i,e):new Cu(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Pu(o),$f(t,u)),t=u}}}var Yr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);X_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Zf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var q_=37297,Y_=0;function $_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Kf=new et;function Z_(i){ct._getMatrix(Kf,ct.workingColorSpace,i);let e=`mat3( ${Kf.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case wa:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+$_(i.getShaderSource(e),o)}else return r}function K_(i,e){let t=Z_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var J_={[Ha]:"Linear",[Va]:"Reinhard",[Ga]:"Cineon",[Wa]:"ACESFilmic",[qa]:"AgX",[Ya]:"Neutral",[Xa]:"Custom"};function j_(i,e){let t=J_[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var bc=new L;function Q_(){ct.getLuminanceCoefficients(bc);let i=bc.x.toFixed(4),e=bc.y.toFixed(4),t=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ey(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function ty(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function iy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function oo(i){return i!==""}function jf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ny=/^[ \t]*#include +<([\w\d./]+)>/gm;function Iu(i){return i.replace(ny,ry)}var sy=new Map;function ry(i,e){let t=st[e];if(t===void 0){let n=sy.get(e);if(n!==void 0)t=st[n],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Iu(t)}var ay=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ep(i){return i.replace(ay,oy)}function oy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var ly={[ka]:"SHADOWMAP_TYPE_PCF",[zr]:"SHADOWMAP_TYPE_VSM"};function cy(i){return ly[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var hy={[Ls]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE",[$a]:"ENVMAP_TYPE_CUBE_UV"};function uy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":hy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var dy={[Ks]:"ENVMAP_MODE_REFRACTION"};function fy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":dy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var py={[eu]:"ENVMAP_BLENDING_MULTIPLY",[_f]:"ENVMAP_BLENDING_MIX",[yf]:"ENVMAP_BLENDING_ADD"};function my(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":py[i.combine]||"ENVMAP_BLENDING_NONE"}function gy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function vy(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=cy(t),c=uy(t),d=fy(t),u=my(t),h=gy(t),f=ey(t),g=ty(r),v=s.createProgram(),p,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(oo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(oo).join(`
`),m.length>0&&(m+=`
`)):(p=[tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),m=[tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?st.tonemapping_pars_fragment:"",t.toneMapping!==ai?j_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,K_("linearToOutputTexel",t.outputColorSpace),Q_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oo).join(`
`)),a=Iu(a),a=jf(a,t),a=Qf(a,t),o=Iu(o),o=jf(o,t),o=Qf(o,t),a=ep(a),o=ep(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===no?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===no?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let A=_+p+a,S=_+m+o,w=Zf(s,s.VERTEX_SHADER,A),y=Zf(s,s.FRAGMENT_SHADER,S);s.attachShader(v,w),s.attachShader(v,y),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(D){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(v)||"",I=s.getShaderInfoLog(w)||"",C=s.getShaderInfoLog(y)||"",U=F.trim(),H=I.trim(),G=C.trim(),K=!0,N=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,y);else{let V=Jf(s,w,"vertex"),Y=Jf(s,y,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+V+`
`+Y)}else U!==""?We("WebGLProgram: Program Info Log:",U):(H===""||G==="")&&(N=!1);N&&(D.diagnostics={runnable:K,programLog:U,vertexShader:{log:H,prefix:p},fragmentShader:{log:G,prefix:m}})}s.deleteShader(w),s.deleteShader(y),x=new Yr(s,v),E=iy(s,v)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(v,q_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Y_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=y,this}var xy=0,Lu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Du(e),t.set(e,n)),n}},Du=class{constructor(e){this.id=xy++,this.code=e,this.usedTimes=0}};function _y(i){return i===Us||i===eo||i===to}function yy(i,e,t,n,s,r){let a=new Aa,o=new Lu,l=new Set,c=[],d=new Map,u=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,E,R,D,F,I){let C=D.fog,U=F.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=e.get(x.envMap||H,G),N=K&&K.mapping===$a?K.image.height:null,V=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&We("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let Y=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,re=Y!==void 0?Y.length:0,ee=0;U.morphAttributes.position!==void 0&&(ee=1),U.morphAttributes.normal!==void 0&&(ee=2),U.morphAttributes.color!==void 0&&(ee=3);let Pe,Ce,Le,J;if(V){let Et=Zn[V];Pe=Et.vertexShader,Ce=Et.fragmentShader}else{Pe=x.vertexShader,Ce=x.fragmentShader;let Et=o.getVertexShaderStage(x),mt=o.getFragmentShaderStage(x);o.update(x,Et,mt),Le=Et.id,J=mt.id}let te=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),Ie=F.isInstancedMesh===!0,Me=F.isBatchedMesh===!0,Je=!!x.map,tt=!!x.matcap,Ee=!!K,Ae=!!x.aoMap,Ve=!!x.lightMap,Be=!!x.bumpMap&&x.wireframe===!1,ht=!!x.normalMap,Ct=!!x.displacementMap,ui=!!x.emissiveMap,Ft=!!x.metalnessMap,Ut=!!x.roughnessMap,B=x.anisotropy>0,ii=x.clearcoat>0,Mt=x.dispersion>0,P=x.retroreflectivity>0,M=x.iridescence>0,W=x.sheen>0,$=x.transmission>0,j=B&&!!x.anisotropyMap,ce=ii&&!!x.clearcoatMap,he=ii&&!!x.clearcoatNormalMap,Q=ii&&!!x.clearcoatRoughnessMap,ne=M&&!!x.iridescenceMap,de=M&&!!x.iridescenceThicknessMap,Ue=W&&!!x.sheenColorMap,ve=W&&!!x.sheenRoughnessMap,fe=!!x.specularMap,Ne=!!x.specularColorMap,Ge=!!x.specularIntensityMap,it=$&&!!x.transmissionMap,z=$&&!!x.thicknessMap,pe=!!x.gradientMap,ie=!!x.alphaMap,me=x.alphaTest>0,Se=!!x.alphaHash,ae=!!x.extensions,ke=ai;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ke=i.toneMapping);let De={shaderID:V,shaderType:x.type,shaderName:x.name,vertexShader:Pe,fragmentShader:Ce,defines:x.defines,customVertexShaderID:Le,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Me,batchingColor:Me&&F._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&F.instanceColor!==null,instancingMorph:Ie&&F.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Je,matcap:tt,envMap:Ee,envMapMode:Ee&&K.mapping,envMapCubeUVHeight:N,aoMap:Ae,lightMap:Ve,bumpMap:Be,normalMap:ht,displacementMap:Ct,emissiveMap:ui,normalMapObjectSpace:ht&&x.normalMapType===wf,normalMapTangentSpace:ht&&x.normalMapType===cu,packedNormalMap:ht&&x.normalMapType===cu&&_y(x.normalMap.format),metalnessMap:Ft,roughnessMap:Ut,anisotropy:B,anisotropyMap:j,clearcoat:ii,clearcoatMap:ce,clearcoatNormalMap:he,clearcoatRoughnessMap:Q,dispersion:Mt,retroreflection:P,iridescence:M,iridescenceMap:ne,iridescenceThicknessMap:de,sheen:W,sheenColorMap:Ue,sheenRoughnessMap:ve,specularMap:fe,specularColorMap:Ne,specularIntensityMap:Ge,transmission:$,transmissionMap:it,thicknessMap:z,gradientMap:pe,opaque:x.transparent===!1&&x.blending===Hr&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:me,alphaHash:Se,combine:x.combine,mapUv:Je&&g(x.map.channel),aoMapUv:Ae&&g(x.aoMap.channel),lightMapUv:Ve&&g(x.lightMap.channel),bumpMapUv:Be&&g(x.bumpMap.channel),normalMapUv:ht&&g(x.normalMap.channel),displacementMapUv:Ct&&g(x.displacementMap.channel),emissiveMapUv:ui&&g(x.emissiveMap.channel),metalnessMapUv:Ft&&g(x.metalnessMap.channel),roughnessMapUv:Ut&&g(x.roughnessMap.channel),anisotropyMapUv:j&&g(x.anisotropyMap.channel),clearcoatMapUv:ce&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:de&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(x.sheenRoughnessMap.channel),specularMapUv:fe&&g(x.specularMap.channel),specularColorMapUv:Ne&&g(x.specularColorMap.channel),specularIntensityMapUv:Ge&&g(x.specularIntensityMap.channel),transmissionMapUv:it&&g(x.transmissionMap.channel),thicknessMapUv:z&&g(x.thicknessMap.channel),alphaMapUv:ie&&g(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ht||B),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!U.attributes.uv&&(Je||ie),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&ht===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ue,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ee,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:Je&&x.map.isVideoTexture===!0&&ct.getTransfer(x.map.colorSpace)===_t,decodeVideoTextureEmissive:ui&&x.emissiveMap.isVideoTexture===!0&&ct.getTransfer(x.emissiveMap.colorSpace)===_t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mi,flipSided:x.side===zi,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&x.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function p(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)E.push(R),E.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(E,x),_(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function m(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function _(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let E=f[x.type],R;if(E){let D=Zn[E];R=os.clone(D.uniforms)}else R=x.uniforms;return R}function S(x,E){let R=d.get(E);return R!==void 0?++R.usedTimes:(R=new vy(i,E,x,s),c.push(R),d.set(E,R)),R}function w(x){if(--x.usedTimes===0){let E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function y(x){o.remove(x)}function T(){o.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:A,acquireProgram:S,releaseProgram:w,releaseShaderCache:y,programs:c,dispose:T}}function My(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Sy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ip(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function np(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,v,p,m){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:p,group:m},i[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=g,_.materialVariant=a(h),_.groupOrder=v,_.renderOrder=h.renderOrder,_.z=p,_.group=m),e++,_}function l(h,f,g,v,p,m,_){_.reversedDepth===!0&&(p=-p);let A=o(h,f,g,v,p,m);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):t.push(A)}function c(h,f,g,v,p,m){let _=o(h,f,g,v,p,m);g.transmission>0?n.unshift(_):g.transparent===!0?s.unshift(_):t.unshift(_)}function d(h,f){t.length>1&&t.sort(h||Sy),n.length>1&&n.sort(f||ip),s.length>1&&s.sort(f||ip)}function u(){for(let h=e,f=i.length;h<f;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:d}}function wy(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new np,i.set(n,[a])):s>=r.length?(a=new np,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function by(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new je};break;case"SpotLight":t={position:new L,direction:new L,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Ty(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ey=0;function Ay(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ry(i){let e=new by,t=Ty(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new bt,a=new bt;function o(c){let d=0,u=0,h=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,_=0,A=0,S=0,w=0,y=0,T=0,x=0,E=0,R=0;c.sort(Ay);for(let F=0,I=c.length;F<I;F++){let C=c[F],U=C.color,H=C.intensity,G=C.distance,K=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Us?K=C.shadow.map.texture:K=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)d+=U.r*H,u+=U.g*H,h+=U.b*H;else if(C.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(C.sh.coefficients[N],H);R++}else if(C.isSunLight){let N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let V=C.shadow,Y=t.get(C);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[g]=Y,n.sunShadowMap[g]=K;let re=V.getViewportCount();for(let ee=0;ee<re;ee++)n.sunShadowMatrix[v+ee]=V.getMatrix(ee),n.sunShadowCascade[v+ee]=V._cascadeData[ee];v+=re,g++}n.sun[f]=N,f++}else if(C.isDirectionalLight){let N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let V=C.shadow,Y=t.get(C);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=C.shadow.matrix,w++}n.directional[p]=N,p++}else if(C.isSpotLight){let N=e.get(C);N.position.setFromMatrixPosition(C.matrixWorld),N.color.copy(U).multiplyScalar(H),N.distance=G,N.coneCos=Math.cos(C.angle),N.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),N.decay=C.decay,n.spot[_]=N;let V=C.shadow;if(C.map&&(n.spotLightMap[x]=C.map,x++,V.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[_]=V.matrix,C.castShadow){let Y=t.get(C);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=K,T++}_++}else if(C.isRectAreaLight){let N=e.get(C);N.color.copy(U).multiplyScalar(H),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),n.rectArea[A]=N,A++}else if(C.isPointLight){let N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),N.distance=C.distance,N.decay=C.decay,C.castShadow){let V=C.shadow,Y=t.get(C);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,Y.shadowCameraNear=V.camera.near,Y.shadowCameraFar=V.camera.far,n.pointShadow[m]=Y,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=C.shadow.matrix,y++}n.point[m]=N,m++}else if(C.isHemisphereLight){let N=e.get(C);N.skyColor.copy(C.color).multiplyScalar(H),N.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[S]=N,S++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;let D=n.hash;(D.sunLength!==f||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==A||D.hemiLength!==S||D.numSunShadows!==g||D.numDirectionalShadows!==w||D.numPointShadows!==y||D.numSpotShadows!==T||D.numSpotMaps!==x||D.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=_,n.rectArea.length=A,n.point.length=m,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+x-E,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,D.sunLength=f,D.directionalLength=p,D.pointLength=m,D.spotLength=_,D.rectAreaLength=A,D.hemiLength=S,D.numSunShadows=g,D.numDirectionalShadows=w,D.numPointShadows=y,D.numSpotShadows=T,D.numSpotMaps=x,D.numLightProbes=R,n.version=Ey++)}function l(c,d){let u=0,h=0,f=0,g=0,v=0,p=0,m=d.matrixWorldInverse;for(let _=0,A=c.length;_<A;_++){let S=c[_];if(S.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),u++}else if(S.isDirectionalLight){let w=n.directional[h];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),h++}else if(S.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),g++}else if(S.isRectAreaLight){let w=n.rectArea[v];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let w=n.hemi[p];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function sp(i){let e=new Ry(i),t=[],n=[],s=[];function r(h){u.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function d(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Cy(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new sp(i),e.set(s,[o])):r>=a.length?(o=new sp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Py=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ly=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Dy=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],rp=new bt,ao=new L,Eu=new L;function Fy(i,e,t){let n=new Ia,s=new ye,r=new ye,a=new Xe,o=new yl,l=new Ml,c={},d=t.maxTextureSize,u={[Is]:zi,[zi]:Is,[Mi]:Mi},h=new Fe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:Py,fragmentShader:Iy}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new pt;g.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new $e(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ka;let m=this.type;this.render=function(y,T,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;this.type===nf&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ka);let E=i.getRenderTarget(),R=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Si),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let I=m!==this.type;I&&T.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(U=>U.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,U=y.length;C<U;C++){let H=y[C],G=H.shadow;if(G===void 0){We("WebGLShadowMap:",H,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let K=G.getFrameExtents();s.multiply(K),r.copy(G.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/K.x),s.x=r.x*K.x,G.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/K.y),s.y=r.y*K.y,G.mapSize.y=r.y));let N=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=N,G.map===null||I===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===zr){if(H.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Rt(s.x,s.y,{format:Us,type:Wt,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),G.map.texture.name=H.name+".shadowMap",G.map.depthTexture=new As(s.x,s.y,Ji),G.map.depthTexture.name=H.name+".shadowMapDepth",G.map.depthTexture.format=Xn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Yt,G.map.depthTexture.magFilter=Yt}else H.isPointLight?(G.map=new Ec(s.x),G.map.depthTexture=new _l(s.x,Un)):(G.map=new Rt(s.x,s.y),G.map.depthTexture=new As(s.x,s.y,Un)),G.map.depthTexture.name=H.name+".shadowMap",G.map.depthTexture.format=Xn,this.type===ka?(G.map.depthTexture.compareFunction=N?Sc:Mc,G.map.depthTexture.minFilter=Qt,G.map.depthTexture.magFilter=Qt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Yt,G.map.depthTexture.magFilter=Yt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let V=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();H.isPointLight!==!0&&G.updateMatrices(H,x);for(let Y=0;Y<V;Y++){let re=G.getCamera(Y);if(H.isPointLight){let ee=G.camera,Pe=G.matrix,Ce=H.distance||ee.far;Ce!==ee.far&&(ee.far=Ce,ee.updateProjectionMatrix()),ao.setFromMatrixPosition(H.matrixWorld),ee.position.copy(ao),Eu.copy(ee.position),Eu.add(Ly[Y]),ee.up.copy(Dy[Y]),ee.lookAt(Eu),ee.updateMatrixWorld(),Pe.makeTranslation(-ao.x,-ao.y,-ao.z),rp.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),G._frustum.setFromProjectionMatrix(rp,ee.coordinateSystem,ee.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,Y),i.clear();else{Y===0&&(i.setRenderTarget(G.map),i.clear());let ee=G.getViewport(Y);a.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),F.viewport(a)}n=G.getFrustum(Y),S(T,x,re,H,this.type)}G.isPointLightShadow!==!0&&this.type===zr&&_(G,x),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(E,R,D)};function _(y,T){let x=e.update(v);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null?y.mapPass=new Rt(s.x,s.y,{format:Us,type:Wt}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),h.uniforms.shadow_pass.value=y.map.depthTexture,h.uniforms.resolution.value.set(y.map.width,y.map.height),h.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(T,null,x,h,v,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value.set(y.map.width,y.map.height),f.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(T,null,x,f,v,null)}function A(y,T,x,E){let R=null,D=x.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(D!==void 0)R=D;else if(R=x.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let F=R.uuid,I=T.uuid,C=c[F];C===void 0&&(C={},c[F]=C);let U=C[I];U===void 0&&(U=R.clone(),C[I]=U,T.addEventListener("dispose",w)),R=U}if(R.visible=T.visible,R.wireframe=T.wireframe,E===zr?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:u[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=i.properties.get(R);F.light=x}return R}function S(y,T,x,E,R){if(y.visible===!1)return;if(y.layers.test(T.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&R===zr)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,y.matrixWorld);let I=e.update(y),C=y.material;if(Array.isArray(C)){let U=I.groups;for(let H=0,G=U.length;H<G;H++){let K=U[H],N=C[K.materialIndex];if(N&&N.visible){let V=A(y,N,E,R);y.onBeforeShadow(i,y,T,x,I,V,K),i.renderBufferDirect(x,null,I,V,y,K),y.onAfterShadow(i,y,T,x,I,V,K)}}}else if(C.visible){let U=A(y,C,E,R);y.onBeforeShadow(i,y,T,x,I,U,null),i.renderBufferDirect(x,null,I,U,y,null),y.onAfterShadow(i,y,T,x,I,U,null)}}let F=y.children;for(let I=0,C=F.length;I<C;I++)S(F[I],T,x,E,R)}function w(y){y.target.removeEventListener("dispose",w);for(let x in c){let E=c[x],R=y.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function Uy(i,e){function t(){let z=!1,pe=new Xe,ie=null,me=new Xe(0,0,0,0);return{setMask:function(Se){ie!==Se&&!z&&(i.colorMask(Se,Se,Se,Se),ie=Se)},setLocked:function(Se){z=Se},setClear:function(Se,ae,ke,De,Et){Et===!0&&(Se*=De,ae*=De,ke*=De),pe.set(Se,ae,ke,De),me.equals(pe)===!1&&(i.clearColor(Se,ae,ke,De),me.copy(pe))},reset:function(){z=!1,ie=null,me.set(-1,0,0,0)}}}function n(){let z=!1,pe=!1,ie=null,me=null,Se=null;return{setReversed:function(ae){if(pe!==ae){let ke=e.get("EXT_clip_control");ae?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),pe=ae;let De=Se;Se=null,this.setClear(De)}},getReversed:function(){return pe},setTest:function(ae){ae?te(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(ae){ie!==ae&&!z&&(i.depthMask(ae),ie=ae)},setFunc:function(ae){if(pe&&(ae=Uf[ae]),me!==ae){switch(ae){case tl:i.depthFunc(i.NEVER);break;case il:i.depthFunc(i.ALWAYS);break;case nl:i.depthFunc(i.LESS);break;case Ir:i.depthFunc(i.LEQUAL);break;case sl:i.depthFunc(i.EQUAL);break;case rl:i.depthFunc(i.GEQUAL);break;case al:i.depthFunc(i.GREATER);break;case ol:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=ae}},setLocked:function(ae){z=ae},setClear:function(ae){Se!==ae&&(Se=ae,pe&&(ae=1-ae),i.clearDepth(ae))},reset:function(){z=!1,ie=null,me=null,Se=null,pe=!1}}}function s(){let z=!1,pe=null,ie=null,me=null,Se=null,ae=null,ke=null,De=null,Et=null;return{setTest:function(mt){z||(mt?te(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(mt){pe!==mt&&!z&&(i.stencilMask(mt),pe=mt)},setFunc:function(mt,nn,se){(ie!==mt||me!==nn||Se!==se)&&(i.stencilFunc(mt,nn,se),ie=mt,me=nn,Se=se)},setOp:function(mt,nn,se){(ae!==mt||ke!==nn||De!==se)&&(i.stencilOp(mt,nn,se),ae=mt,ke=nn,De=se)},setLocked:function(mt){z=mt},setClear:function(mt){Et!==mt&&(i.clearStencil(mt),Et=mt)},reset:function(){z=!1,pe=null,ie=null,me=null,Se=null,ae=null,ke=null,De=null,Et=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,d={},u={},h={},f=new WeakMap,g=[],v=null,p=!1,m=null,_=null,A=null,S=null,w=null,y=null,T=null,x=new je(0,0,0),E=0,R=!1,D=null,F=null,I=null,C=null,U=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,K=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(N)[1]),G=K>=1):N.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),G=K>=2);let V=null,Y={},re=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),Pe=new Xe().fromArray(re),Ce=new Xe().fromArray(ee);function Le(z,pe,ie,me){let Se=new Uint8Array(4),ae=i.createTexture();i.bindTexture(z,ae),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<ie;ke++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(pe+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return ae}let J={};J[i.TEXTURE_2D]=Le(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(Ir),Be(!1),ht(Kh),te(i.CULL_FACE),Ae(Si);function te(z){d[z]!==!0&&(i.enable(z),d[z]=!0)}function ue(z){d[z]!==!1&&(i.disable(z),d[z]=!1)}function Ie(z,pe){return h[z]!==pe?(i.bindFramebuffer(z,pe),h[z]=pe,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pe),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Me(z,pe){let ie=g,me=!1;if(z){ie=f.get(pe),ie===void 0&&(ie=[],f.set(pe,ie));let Se=z.textures;if(ie.length!==Se.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,ke=Se.length;ae<ke;ae++)ie[ae]=i.COLOR_ATTACHMENT0+ae;ie.length=Se.length,me=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,me=!0);me&&i.drawBuffers(ie)}function Je(z){return v!==z?(i.useProgram(z),v=z,!0):!1}let tt={[Hi]:i.FUNC_ADD,[sf]:i.FUNC_SUBTRACT,[rf]:i.FUNC_REVERSE_SUBTRACT};tt[af]=i.MIN,tt[of]=i.MAX;let Ee={[Ul]:i.ZERO,[Fn]:i.ONE,[lf]:i.SRC_COLOR,[Qh]:i.SRC_ALPHA,[pf]:i.SRC_ALPHA_SATURATE,[df]:i.DST_COLOR,[hf]:i.DST_ALPHA,[cf]:i.ONE_MINUS_SRC_COLOR,[za]:i.ONE_MINUS_SRC_ALPHA,[ff]:i.ONE_MINUS_DST_COLOR,[uf]:i.ONE_MINUS_DST_ALPHA,[mf]:i.CONSTANT_COLOR,[gf]:i.ONE_MINUS_CONSTANT_COLOR,[vf]:i.CONSTANT_ALPHA,[xf]:i.ONE_MINUS_CONSTANT_ALPHA};function Ae(z,pe,ie,me,Se,ae,ke,De,Et,mt){if(z===Si){p===!0&&(ue(i.BLEND),p=!1);return}if(p===!1&&(te(i.BLEND),p=!0),z!==Yn){if(z!==m||mt!==R){if((_!==Hi||w!==Hi)&&(i.blendEquation(i.FUNC_ADD),_=Hi,w=Hi),mt)switch(z){case Hr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vt:i.blendFunc(i.ONE,i.ONE);break;case Jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",z);break}else switch(z){case Hr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Jh:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jh:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",z);break}A=null,S=null,y=null,T=null,x.set(0,0,0),E=0,m=z,R=mt}return}Se=Se||pe,ae=ae||ie,ke=ke||me,(pe!==_||Se!==w)&&(i.blendEquationSeparate(tt[pe],tt[Se]),_=pe,w=Se),(ie!==A||me!==S||ae!==y||ke!==T)&&(i.blendFuncSeparate(Ee[ie],Ee[me],Ee[ae],Ee[ke]),A=ie,S=me,y=ae,T=ke),(De.equals(x)===!1||Et!==E)&&(i.blendColor(De.r,De.g,De.b,Et),x.copy(De),E=Et),m=z,R=!1}function Ve(z,pe){z.side===Mi?ue(i.CULL_FACE):te(i.CULL_FACE);let ie=z.side===zi;pe&&(ie=!ie),Be(ie),z.blending===Hr&&z.transparent===!1?Ae(Si):Ae(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let me=z.stencilWrite;o.setTest(me),me&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ui(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(z){D!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),D=z)}function ht(z){z!==ef?(te(i.CULL_FACE),z!==F&&(z===Kh?i.cullFace(i.BACK):z===tf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),F=z}function Ct(z){z!==I&&(G&&i.lineWidth(z),I=z)}function ui(z,pe,ie){z?(te(i.POLYGON_OFFSET_FILL),(C!==pe||U!==ie)&&(C=pe,U=ie,a.getReversed()&&(pe=-pe),i.polygonOffset(pe,ie))):ue(i.POLYGON_OFFSET_FILL)}function Ft(z){z?te(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function Ut(z){z===void 0&&(z=i.TEXTURE0+H-1),V!==z&&(i.activeTexture(z),V=z)}function B(z,pe,ie){ie===void 0&&(V===null?ie=i.TEXTURE0+H-1:ie=V);let me=Y[ie];me===void 0&&(me={type:void 0,texture:void 0},Y[ie]=me),(me.type!==z||me.texture!==pe)&&(V!==ie&&(i.activeTexture(ie),V=ie),i.bindTexture(z,pe||J[z]),me.type=z,me.texture=pe)}function ii(){let z=Y[V];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Mt(){try{i.compressedTexImage2D(...arguments)}catch(z){Ye("WebGLState:",z)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(z){Ye("WebGLState:",z)}}function M(){try{i.texSubImage2D(...arguments)}catch(z){Ye("WebGLState:",z)}}function W(){try{i.texSubImage3D(...arguments)}catch(z){Ye("WebGLState:",z)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(z){Ye("WebGLState:",z)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(z){Ye("WebGLState:",z)}}function ce(){try{i.texStorage2D(...arguments)}catch(z){Ye("WebGLState:",z)}}function he(){try{i.texStorage3D(...arguments)}catch(z){Ye("WebGLState:",z)}}function Q(){try{i.texImage2D(...arguments)}catch(z){Ye("WebGLState:",z)}}function ne(){try{i.texImage3D(...arguments)}catch(z){Ye("WebGLState:",z)}}function de(z){return u[z]!==void 0?u[z]:i.getParameter(z)}function Ue(z,pe){u[z]!==pe&&(i.pixelStorei(z,pe),u[z]=pe)}function ve(z){Pe.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Pe.copy(z))}function fe(z){Ce.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Ce.copy(z))}function Ne(z,pe){let ie=c.get(pe);ie===void 0&&(ie=new WeakMap,c.set(pe,ie));let me=ie.get(z);me===void 0&&(me=i.getUniformBlockIndex(pe,z.name),ie.set(z,me))}function Ge(z,pe){let me=c.get(pe).get(z);l.get(pe)!==me&&(i.uniformBlockBinding(pe,me,z.__bindingPointIndex),l.set(pe,me))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},u={},V=null,Y={},h={},f=new WeakMap,g=[],v=null,p=!1,m=null,_=null,A=null,S=null,w=null,y=null,T=null,x=new je(0,0,0),E=0,R=!1,D=null,F=null,I=null,C=null,U=null,Pe.set(0,0,i.canvas.width,i.canvas.height),Ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:ue,bindFramebuffer:Ie,drawBuffers:Me,useProgram:Je,setBlending:Ae,setMaterial:Ve,setFlipSided:Be,setCullFace:ht,setLineWidth:Ct,setPolygonOffset:ui,setScissorTest:Ft,activeTexture:Ut,bindTexture:B,unbindTexture:ii,compressedTexImage2D:Mt,compressedTexImage3D:P,texImage2D:Q,texImage3D:ne,pixelStorei:Ue,getParameter:de,updateUBOMapping:Ne,uniformBlockBinding:Ge,texStorage2D:ce,texStorage3D:he,texSubImage2D:M,texSubImage3D:W,compressedTexSubImage2D:$,compressedTexSubImage3D:j,scissor:ve,viewport:fe,reset:it}}function Ny(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,d=new WeakMap,u=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,M){return g?new OffscreenCanvas(P,M):Ta("canvas")}function p(P,M,W){let $=1,j=Mt(P);if((j.width>W||j.height>W)&&($=W/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ce=Math.floor($*j.width),he=Math.floor($*j.height);h===void 0&&(h=v(ce,he));let Q=M?v(ce,he):h;return Q.width=ce,Q.height=he,Q.getContext("2d").drawImage(P,0,0,ce,he),We("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ce+"x"+he+")."),Q}else return"data"in P&&We("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),P;return P}function m(P){return P.generateMipmaps}function _(P){i.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(P,M,W,$,j,ce=!1){if(P!==null){if(i[P]!==void 0)return i[P];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let he;$&&(he=e.get("EXT_texture_norm16"),he||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=M;if(M===i.RED&&(W===i.FLOAT&&(Q=i.R32F),W===i.HALF_FLOAT&&(Q=i.R16F),W===i.UNSIGNED_BYTE&&(Q=i.R8),W===i.UNSIGNED_SHORT&&he&&(Q=he.R16_EXT),W===i.SHORT&&he&&(Q=he.R16_SNORM_EXT)),M===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.R8UI),W===i.UNSIGNED_SHORT&&(Q=i.R16UI),W===i.UNSIGNED_INT&&(Q=i.R32UI),W===i.BYTE&&(Q=i.R8I),W===i.SHORT&&(Q=i.R16I),W===i.INT&&(Q=i.R32I)),M===i.RG&&(W===i.FLOAT&&(Q=i.RG32F),W===i.HALF_FLOAT&&(Q=i.RG16F),W===i.UNSIGNED_BYTE&&(Q=i.RG8),W===i.UNSIGNED_SHORT&&he&&(Q=he.RG16_EXT),W===i.SHORT&&he&&(Q=he.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RG8UI),W===i.UNSIGNED_SHORT&&(Q=i.RG16UI),W===i.UNSIGNED_INT&&(Q=i.RG32UI),W===i.BYTE&&(Q=i.RG8I),W===i.SHORT&&(Q=i.RG16I),W===i.INT&&(Q=i.RG32I)),M===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),W===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),W===i.UNSIGNED_INT&&(Q=i.RGB32UI),W===i.BYTE&&(Q=i.RGB8I),W===i.SHORT&&(Q=i.RGB16I),W===i.INT&&(Q=i.RGB32I)),M===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),W===i.UNSIGNED_INT&&(Q=i.RGBA32UI),W===i.BYTE&&(Q=i.RGBA8I),W===i.SHORT&&(Q=i.RGBA16I),W===i.INT&&(Q=i.RGBA32I)),M===i.RGB&&(W===i.UNSIGNED_SHORT&&he&&(Q=he.RGB16_EXT),W===i.SHORT&&he&&(Q=he.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),M===i.RGBA){let ne=ce?wa:ct.getTransfer(j);W===i.FLOAT&&(Q=i.RGBA32F),W===i.HALF_FLOAT&&(Q=i.RGBA16F),W===i.UNSIGNED_BYTE&&(Q=ne===_t?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&he&&(Q=he.RGBA16_EXT),W===i.SHORT&&he&&(Q=he.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function w(P,M){let W;return P?M===null||M===Un||M===Gr?W=i.DEPTH24_STENCIL8:M===Ji?W=i.DEPTH32F_STENCIL8:M===Vr&&(W=i.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Un||M===Gr?W=i.DEPTH_COMPONENT24:M===Ji?W=i.DEPTH_COMPONENT32F:M===Vr&&(W=i.DEPTH_COMPONENT16),W}function y(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Yt&&P.minFilter!==Qt?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function T(P){let M=P.target;M.removeEventListener("dispose",T),E(M),M.isVideoTexture&&d.delete(M),M.isHTMLTexture&&u.delete(M)}function x(P){let M=P.target;M.removeEventListener("dispose",x),D(M)}function E(P){let M=n.get(P);if(M.__webglInit===void 0)return;let W=P.source,$=f.get(W);if($){let j=$[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(P),Object.keys($).length===0&&f.delete(W)}n.remove(P)}function R(P){let M=n.get(P);i.deleteTexture(M.__webglTexture);let W=P.source,$=f.get(W);delete $[M.__cacheKey],a.memory.textures--}function D(P){let M=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let j=0;j<M.__webglFramebuffer[$].length;j++)i.deleteFramebuffer(M.__webglFramebuffer[$][j]);else i.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)i.deleteFramebuffer(M.__webglFramebuffer[$]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let W=P.textures;for(let $=0,j=W.length;$<j;$++){let ce=n.get(W[$]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(W[$])}n.remove(P)}let F=0;function I(){F=0}function C(){return F}function U(P){F=P}function H(){let P=F;return P>=s.maxTextures&&We("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,P}function G(P){let M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function K(P,M){let W=n.get(P);if(P.isVideoTexture&&B(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){let $=P.image;if($===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(W,P,M);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+M)}function N(P,M){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){ue(W,P,M);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+M)}function V(P,M){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){ue(W,P,M);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+M)}function Y(P,M){let W=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&W.__version!==P.version){Ie(W,P,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+M)}let re={[ll]:i.REPEAT,[on]:i.CLAMP_TO_EDGE,[cl]:i.MIRRORED_REPEAT},ee={[Yt]:i.NEAREST,[Mf]:i.NEAREST_MIPMAP_NEAREST,[Za]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[Bl]:i.LINEAR_MIPMAP_NEAREST,[Ds]:i.LINEAR_MIPMAP_LINEAR},Pe={[Tf]:i.NEVER,[Pf]:i.ALWAYS,[Ef]:i.LESS,[Mc]:i.LEQUAL,[Af]:i.EQUAL,[Sc]:i.GEQUAL,[Rf]:i.GREATER,[Cf]:i.NOTEQUAL};function Ce(P,M){if(M.type===Ji&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Qt||M.magFilter===Bl||M.magFilter===Za||M.magFilter===Ds||M.minFilter===Qt||M.minFilter===Bl||M.minFilter===Za||M.minFilter===Ds)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,re[M.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,re[M.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,re[M.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ee[M.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ee[M.minFilter]),M.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Pe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Yt||M.minFilter!==Za&&M.minFilter!==Ds||M.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Le(P,M){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",T));let $=M.source,j=f.get($);j===void 0&&(j={},f.set($,j));let ce=G(M);if(ce!==P.__cacheKey){j[ce]===void 0&&(j[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),j[ce].usedTimes++;let he=j[P.__cacheKey];he!==void 0&&(j[P.__cacheKey].usedTimes--,he.usedTimes===0&&R(M)),P.__cacheKey=ce,P.__webglTexture=j[ce].texture}return W}function J(P,M,W){return Math.floor(Math.floor(P/W)/M)}function te(P,M,W,$){let ce=P.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,W,$,M.data);else{ce.sort((Ue,ve)=>Ue.start-ve.start);let he=0;for(let Ue=1;Ue<ce.length;Ue++){let ve=ce[he],fe=ce[Ue],Ne=ve.start+ve.count,Ge=J(fe.start,M.width,4),it=J(ve.start,M.width,4);fe.start<=Ne+1&&Ge===it&&J(fe.start+fe.count-1,M.width,4)===Ge?ve.count=Math.max(ve.count,fe.start+fe.count-ve.start):(++he,ce[he]=fe)}ce.length=he+1;let Q=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),de=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Ue=0,ve=ce.length;Ue<ve;Ue++){let fe=ce[Ue],Ne=Math.floor(fe.start/4),Ge=Math.ceil(fe.count/4),it=Ne%M.width,z=Math.floor(Ne/M.width),pe=Ge,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,it),t.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,it,z,pe,ie,W,$,M.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,de)}}function ue(P,M,W){let $=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=i.TEXTURE_3D);let j=Le(P,M),ce=M.source;t.bindTexture($,P.__webglTexture,i.TEXTURE0+W);let he=n.get(ce);if(ce.version!==he.__version||j===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let ie=ct.getPrimaries(ct.workingColorSpace),me=M.colorSpace===as?null:ct.getPrimaries(M.colorSpace),Se=M.colorSpace===as||ie===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let ne=p(M.image,!1,s.maxTextureSize);ne=ii(M,ne);let de=r.convert(M.format,M.colorSpace),Ue=r.convert(M.type),ve=S(M.internalFormat,de,Ue,M.normalized,M.colorSpace,M.isVideoTexture);Ce($,M);let fe,Ne=M.mipmaps,Ge=M.isVideoTexture!==!0,it=he.__version===void 0||j===!0,z=ce.dataReady,pe=y(M,ne);if(M.isDepthTexture)ve=w(M.format===Fs,M.type),it&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,ve,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,ve,ne.width,ne.height,0,de,Ue,null));else if(M.isDataTexture)if(Ne.length>0){Ge&&it&&t.texStorage2D(i.TEXTURE_2D,pe,ve,Ne[0].width,Ne[0].height);for(let ie=0,me=Ne.length;ie<me;ie++)fe=Ne[ie],Ge?z&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,fe.width,fe.height,de,Ue,fe.data):t.texImage2D(i.TEXTURE_2D,ie,ve,fe.width,fe.height,0,de,Ue,fe.data);M.generateMipmaps=!1}else Ge?(it&&t.texStorage2D(i.TEXTURE_2D,pe,ve,ne.width,ne.height),z&&te(M,ne,de,Ue)):t.texImage2D(i.TEXTURE_2D,0,ve,ne.width,ne.height,0,de,Ue,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ge&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ve,Ne[0].width,Ne[0].height,ne.depth);for(let ie=0,me=Ne.length;ie<me;ie++)if(fe=Ne[ie],M.format!==wi)if(de!==null)if(Ge){if(z)if(M.layerUpdates.size>0){let Se=mu(fe.width,fe.height,M.format,M.type);for(let ae of M.layerUpdates){let ke=fe.data.subarray(ae*Se/fe.data.BYTES_PER_ELEMENT,(ae+1)*Se/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,ae,fe.width,fe.height,1,de,ke)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,ne.depth,de,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,ve,fe.width,fe.height,ne.depth,0,fe.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,ne.depth,de,Ue,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,ve,fe.width,fe.height,ne.depth,0,de,Ue,fe.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Ge&&it&&t.texStorage2D(i.TEXTURE_2D,pe,ve,Ne[0].width,Ne[0].height);for(let ie=0,me=Ne.length;ie<me;ie++)fe=Ne[ie],M.format!==wi?de!==null?Ge?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,ve,fe.width,fe.height,0,fe.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?z&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,fe.width,fe.height,de,Ue,fe.data):t.texImage2D(i.TEXTURE_2D,ie,ve,fe.width,fe.height,0,de,Ue,fe.data)}else if(M.isDataArrayTexture)if(Ge){if(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ve,ne.width,ne.height,ne.depth),z)if(M.layerUpdates.size>0){let ie=mu(ne.width,ne.height,M.format,M.type);for(let me of M.layerUpdates){let Se=ne.data.subarray(me*ie/ne.data.BYTES_PER_ELEMENT,(me+1)*ie/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,ne.width,ne.height,1,de,Ue,Se)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,de,Ue,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,ne.width,ne.height,ne.depth,0,de,Ue,ne.data);else if(M.isData3DTexture)Ge?(it&&t.texStorage3D(i.TEXTURE_3D,pe,ve,ne.width,ne.height,ne.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,de,Ue,ne.data)):t.texImage3D(i.TEXTURE_3D,0,ve,ne.width,ne.height,ne.depth,0,de,Ue,ne.data);else if(M.isFramebufferTexture){if(it)if(Ge)t.texStorage2D(i.TEXTURE_2D,pe,ve,ne.width,ne.height);else{let ie=ne.width,me=ne.height;for(let Se=0;Se<pe;Se++)t.texImage2D(i.TEXTURE_2D,Se,ve,ie,me,0,de,Ue,null),ie>>=1,me>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),ne.parentNode!==ie){ie.appendChild(ne),u.add(M),ie.onpaint=me=>{let Se=me.changedElements;for(let ae of u)Se.includes(ae.image)&&(ae.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let Se=i.RGBA,ae=i.RGBA,ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Se,ae,ke,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Ge&&it){let ie=Mt(Ne[0]);t.texStorage2D(i.TEXTURE_2D,pe,ve,ie.width,ie.height)}for(let ie=0,me=Ne.length;ie<me;ie++)fe=Ne[ie],Ge?z&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,de,Ue,fe):t.texImage2D(i.TEXTURE_2D,ie,ve,de,Ue,fe);M.generateMipmaps=!1}else if(Ge){if(it){let ie=Mt(ne);t.texStorage2D(i.TEXTURE_2D,pe,ve,ie.width,ie.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Ue,ne)}else t.texImage2D(i.TEXTURE_2D,0,ve,de,Ue,ne);m(M)&&_($),he.__version=ce.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Ie(P,M,W){if(M.image.length!==6)return;let $=Le(P,M),j=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);let ce=n.get(j);if(j.version!==ce.__version||$===!0){t.activeTexture(i.TEXTURE0+W);let he=ct.getPrimaries(ct.workingColorSpace),Q=M.colorSpace===as?null:ct.getPrimaries(M.colorSpace),ne=M.colorSpace===as||he===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let de=M.isCompressedTexture||M.image[0].isCompressedTexture,Ue=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let ae=0;ae<6;ae++)!de&&!Ue?ve[ae]=p(M.image[ae],!0,s.maxCubemapSize):ve[ae]=Ue?M.image[ae].image:M.image[ae],ve[ae]=ii(M,ve[ae]);let fe=ve[0],Ne=r.convert(M.format,M.colorSpace),Ge=r.convert(M.type),it=S(M.internalFormat,Ne,Ge,M.normalized,M.colorSpace),z=M.isVideoTexture!==!0,pe=ce.__version===void 0||$===!0,ie=j.dataReady,me=y(M,fe);Ce(i.TEXTURE_CUBE_MAP,M);let Se;if(de){z&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,it,fe.width,fe.height);for(let ae=0;ae<6;ae++){Se=ve[ae].mipmaps;for(let ke=0;ke<Se.length;ke++){let De=Se[ke];M.format!==wi?Ne!==null?z?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke,0,0,De.width,De.height,Ne,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke,it,De.width,De.height,0,De.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke,0,0,De.width,De.height,Ne,Ge,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke,it,De.width,De.height,0,Ne,Ge,De.data)}}}else{if(Se=M.mipmaps,z&&pe){Se.length>0&&me++;let ae=Mt(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,it,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Ue){z?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ve[ae].width,ve[ae].height,Ne,Ge,ve[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,it,ve[ae].width,ve[ae].height,0,Ne,Ge,ve[ae].data);for(let ke=0;ke<Se.length;ke++){let Et=Se[ke].image[ae].image;z?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke+1,0,0,Et.width,Et.height,Ne,Ge,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke+1,it,Et.width,Et.height,0,Ne,Ge,Et.data)}}else{z?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ne,Ge,ve[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,it,Ne,Ge,ve[ae]);for(let ke=0;ke<Se.length;ke++){let De=Se[ke];z?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke+1,0,0,Ne,Ge,De.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke+1,it,Ne,Ge,De.image[ae])}}}m(M)&&_(i.TEXTURE_CUBE_MAP),ce.__version=j.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Me(P,M,W,$,j,ce){let he=r.convert(W.format,W.colorSpace),Q=r.convert(W.type),ne=S(W.internalFormat,he,Q,W.normalized,W.colorSpace),de=n.get(M),Ue=n.get(W);if(Ue.__renderTarget=M,!de.__hasExternalTextures){let ve=Math.max(1,M.width>>ce),fe=Math.max(1,M.height>>ce);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,ce,ne,ve,fe,M.depth,0,he,Q,null):t.texImage2D(j,ce,ne,ve,fe,0,he,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Ut(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,j,Ue.__webglTexture,0,Ft(M)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,j,Ue.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(P,M,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),M.depthBuffer){let $=M.depthTexture,j=$&&$.isDepthTexture?$.type:null,ce=w(M.stencilBuffer,j),he=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ut(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft(M),ce,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft(M),ce,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ce,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,P)}else{let $=M.textures;for(let j=0;j<$.length;j++){let ce=$[j],he=r.convert(ce.format,ce.colorSpace),Q=r.convert(ce.type),ne=S(ce.internalFormat,he,Q,ce.normalized,ce.colorSpace);Ut(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft(M),ne,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft(M),ne,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ne,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function tt(P,M,W){let $=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(M.depthTexture);if(j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$){if(j.__webglInit===void 0&&(j.__webglInit=!0,M.depthTexture.addEventListener("dispose",T)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,M.depthTexture);let de=r.convert(M.depthTexture.format),Ue=r.convert(M.depthTexture.type),ve;M.depthTexture.format===Xn?ve=i.DEPTH_COMPONENT24:M.depthTexture.format===Fs&&(ve=i.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ve,M.width,M.height,0,de,Ue,null)}}else K(M.depthTexture,0);let ce=j.__webglTexture,he=Ft(M),Q=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,ne=M.depthTexture.format===Fs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Xn)Ut(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Q,ce,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,ne,Q,ce,0);else if(M.depthTexture.format===Fs)Ut(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Q,ce,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,ne,Q,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ee(P){let M=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){let $=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){let j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=$}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let $=0;$<6;$++)tt(M.__webglFramebuffer[$],P,$);else{let $=P.texture.mipmaps;$&&$.length>0?tt(M.__webglFramebuffer[0],P,0):tt(M.__webglFramebuffer,P,0)}else if(W){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=i.createRenderbuffer(),Je(M.__webglDepthbuffer[$],P,!1);else{let j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ce)}}else{let $=P.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Je(M.__webglDepthbuffer,P,!1);else{let j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(P,M,W){let $=n.get(P);M!==void 0&&Me($.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Ee(P)}function Ve(P){let M=P.texture,W=n.get(P),$=n.get(M);P.addEventListener("dispose",x);let j=P.textures,ce=P.isWebGLCubeRenderTarget===!0,he=j.length>1;if(he||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=M.version,a.memory.textures++),ce){W.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[Q]=[];for(let ne=0;ne<M.mipmaps.length;ne++)W.__webglFramebuffer[Q][ne]=i.createFramebuffer()}else W.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let Q=0;Q<M.mipmaps.length;Q++)W.__webglFramebuffer[Q]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(he)for(let Q=0,ne=j.length;Q<ne;Q++){let de=n.get(j[Q]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Ut(P)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Q=0;Q<j.length;Q++){let ne=j[Q];W.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[Q]);let de=r.convert(ne.format,ne.colorSpace),Ue=r.convert(ne.type),ve=S(ne.internalFormat,de,Ue,ne.normalized,ne.colorSpace,P.isXRRenderTarget===!0),fe=Ft(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,ve,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,W.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,M);for(let Q=0;Q<6;Q++)if(M.mipmaps&&M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)Me(W.__webglFramebuffer[Q][ne],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ne);else Me(W.__webglFramebuffer[Q],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(M)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let Q=0,ne=j.length;Q<ne;Q++){let de=j[Q],Ue=n.get(de),ve=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ve=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,Ue.__webglTexture),Ce(ve,de),Me(W.__webglFramebuffer,P,de,i.COLOR_ATTACHMENT0+Q,ve,0),m(de)&&_(ve)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Q=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,$.__webglTexture),Ce(Q,M),M.mipmaps&&M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)Me(W.__webglFramebuffer[ne],P,M,i.COLOR_ATTACHMENT0,Q,ne);else Me(W.__webglFramebuffer,P,M,i.COLOR_ATTACHMENT0,Q,0);m(M)&&_(Q),t.unbindTexture()}P.depthBuffer&&Ee(P)}function Be(P){let M=P.textures;for(let W=0,$=M.length;W<$;W++){let j=M[W];if(m(j)){let ce=A(P),he=n.get(j).__webglTexture;t.bindTexture(ce,he),_(ce),t.unbindTexture()}}}let ht=[],Ct=[];function ui(P){if(P.samples>0){if(Ut(P)===!1){let M=P.textures,W=P.width,$=P.height,j=i.COLOR_BUFFER_BIT,ce=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(P),Q=M.length>1;if(Q)for(let de=0;de<M.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let ne=P.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let de=0;de<M.length;de++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[de]);let Ue=n.get(M[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ue,0)}i.blitFramebuffer(0,0,W,$,0,0,W,$,j,i.NEAREST),l===!0&&(ht.length=0,Ct.length=0,ht.push(i.COLOR_ATTACHMENT0+de),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(ht.push(ce),Ct.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ct)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let de=0;de<M.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,he.__webglColorRenderbuffer[de]);let Ue=n.get(M[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let M=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Ft(P){return Math.min(s.maxSamples,P.samples)}function Ut(P){let M=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function B(P){let M=a.render.frame;d.get(P)!==M&&(d.set(P,M),P.update())}function ii(P,M){let W=P.colorSpace,$=P.format,j=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==Sa&&W!==as&&(ct.getTransfer(W)===_t?($!==wi||j!==cn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",W)),M}function Mt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=I,this.getTextureUnits=C,this.setTextureUnits=U,this.setTexture2D=K,this.setTexture2DArray=N,this.setTexture3D=V,this.setTextureCube=Y,this.rebindTextures=Ae,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=ui,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Oy(i,e){function t(n,s=as){let r,a=ct.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===zl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===su)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ru)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===iu)return i.BYTE;if(n===nu)return i.SHORT;if(n===Vr)return i.UNSIGNED_SHORT;if(n===kl)return i.INT;if(n===Un)return i.UNSIGNED_INT;if(n===Ji)return i.FLOAT;if(n===Wt)return i.HALF_FLOAT;if(n===au)return i.ALPHA;if(n===ou)return i.RGB;if(n===wi)return i.RGBA;if(n===Xn)return i.DEPTH_COMPONENT;if(n===Fs)return i.DEPTH_STENCIL;if(n===lu)return i.RED;if(n===Vl)return i.RED_INTEGER;if(n===Us)return i.RG;if(n===Gl)return i.RG_INTEGER;if(n===Wl)return i.RGBA_INTEGER;if(n===Ka||n===Ja||n===ja||n===Qa)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xl||n===ql||n===Yl||n===$l)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$l)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zl||n===Kl||n===Jl||n===jl||n===Ql||n===eo||n===ec)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zl||n===Kl)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===jl)return r.COMPRESSED_R11_EAC;if(n===Ql)return r.COMPRESSED_SIGNED_R11_EAC;if(n===eo)return r.COMPRESSED_RG11_EAC;if(n===ec)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tc||n===ic||n===nc||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ic)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ac)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mc||n===gc||n===vc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===mc)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xc||n===_c||n===to||n===yc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===xc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===to)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var By=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ky=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Fu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Fa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Fe({vertexShader:By,fragmentShader:ky,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uu=class extends qn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,g=null,v=typeof XRWebGLBinding<"u",p=new Fu,m={},_=t.getContextAttributes(),A=null,S=null,w=[],y=[],T=new ye,x=null,E=null,R=new pi;R.viewport=new Xe;let D=new pi;D.viewport=new Xe;let F=[R,D],I=new Dl,C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let te=w[J];return te===void 0&&(te=new Ur,w[J]=te),te.getTargetRaySpace()},this.getControllerGrip=function(J){let te=w[J];return te===void 0&&(te=new Ur,w[J]=te),te.getGripSpace()},this.getHand=function(J){let te=w[J];return te===void 0&&(te=new Ur,w[J]=te),te.getHandSpace()};function H(J){let te=y.indexOf(J.inputSource);if(te===-1)return;let ue=w[te];ue!==void 0&&(ue.update(J.inputSource,J.frame,c||a),ue.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",K);for(let J=0;J<w.length;J++){let te=y[J];te!==null&&(y[J]=null,w[J].disconnect(te))}C=null,U=null,p.reset();for(let J in m)delete m[J];if(e.setRenderTarget(A),f=null,h=null,u=null,s=null,S=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(T.width,T.height,!1),E!==null){let J=E.camera;J.fov=E.fov,J.zoom=E.zoom,J.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",G),s.addEventListener("inputsourceschange",K),_.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Ie=null,Me=null;_.depth&&(Me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=_.stencil?Fs:Xn,Ie=_.stencil?Gr:Un);let Je={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(Je),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Rt(h.textureWidth,h.textureHeight,{format:wi,type:cn,depthTexture:new As(h.textureWidth,h.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ue={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Rt(f.framebufferWidth,f.framebufferHeight,{format:wi,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Le.setContext(s),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(J){for(let te=0;te<J.removed.length;te++){let ue=J.removed[te],Ie=y.indexOf(ue);Ie>=0&&(y[Ie]=null,w[Ie].disconnect(ue))}for(let te=0;te<J.added.length;te++){let ue=J.added[te],Ie=y.indexOf(ue);if(Ie===-1){for(let Je=0;Je<w.length;Je++)if(Je>=y.length){y.push(ue),Ie=Je;break}else if(y[Je]===null){y[Je]=ue,Ie=Je;break}if(Ie===-1)break}let Me=w[Ie];Me&&Me.connect(ue)}}let N=new L,V=new L;function Y(J,te,ue){N.setFromMatrixPosition(te.matrixWorld),V.setFromMatrixPosition(ue.matrixWorld);let Ie=N.distanceTo(V),Me=te.projectionMatrix.elements,Je=ue.projectionMatrix.elements,tt=Me[14]/(Me[10]-1),Ee=Me[14]/(Me[10]+1),Ae=(Me[9]+1)/Me[5],Ve=(Me[9]-1)/Me[5],Be=(Me[8]-1)/Me[0],ht=(Je[8]+1)/Je[0],Ct=tt*Be,ui=tt*ht,Ft=Ie/(-Be+ht),Ut=Ft*-Be;if(te.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ut),J.translateZ(Ft),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Me[10]===-1)J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let B=tt+Ft,ii=Ee+Ft,Mt=Ct-Ut,P=ui+(Ie-Ut),M=Ae*Ee/ii*B,W=Ve*Ee/ii*B;J.projectionMatrix.makePerspective(Mt,P,M,W,B,ii),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function re(J,te){te===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(te.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let te=J.near,ue=J.far;p.texture!==null&&(p.depthNear>0&&(te=p.depthNear),p.depthFar>0&&(ue=p.depthFar)),I.near=D.near=R.near=te,I.far=D.far=R.far=ue,(C!==I.near||U!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),C=I.near,U=I.far),I.layers.mask=J.layers.mask|6,R.layers.mask=I.layers.mask&-5,D.layers.mask=I.layers.mask&-3;let Ie=J.parent,Me=I.cameras;re(I,Ie);for(let Je=0;Je<Me.length;Je++)re(Me[Je],Ie);Me.length===2?Y(I,R,D):I.projectionMatrix.copy(R.projectionMatrix),E===null&&J.isPerspectiveCamera&&(E={camera:J,fov:J.fov,zoom:J.zoom}),ee(J,I,Ie)};function ee(J,te,ue){ue===null?J.matrix.copy(te.matrixWorld):(J.matrix.copy(ue.matrixWorld),J.matrix.invert(),J.matrix.multiply(te.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Dr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(J){return m[J]};let Pe=null;function Ce(J,te){if(d=te.getViewerPose(c||a),g=te,d!==null){let ue=d.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Ie=!1;ue.length!==I.cameras.length&&(I.cameras.length=0,Ie=!0);for(let Ee=0;Ee<ue.length;Ee++){let Ae=ue[Ee],Ve=null;if(f!==null)Ve=f.getViewport(Ae);else{let ht=u.getViewSubImage(h,Ae);Ve=ht.viewport,Ee===0&&(e.setRenderTargetTextures(S,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(S))}let Be=F[Ee];Be===void 0&&(Be=new pi,Be.layers.enable(Ee),Be.viewport=new Xe,F[Ee]=Be),Be.matrix.fromArray(Ae.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ae.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Ee===0&&(I.matrix.copy(Be.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ie===!0&&I.cameras.push(Be)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let Ee=u.getDepthInformation(ue[0]);Ee&&Ee.isValid&&Ee.texture&&p.init(Ee,s.renderState)}if(Me&&Me.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let Ee=0;Ee<ue.length;Ee++){let Ae=ue[Ee].camera;if(Ae){let Ve=m[Ae];Ve||(Ve=new Fa,m[Ae]=Ve);let Be=u.getCameraImage(Ae);Ve.sourceTexture=Be}}}}for(let ue=0;ue<w.length;ue++){let Ie=y[ue],Me=w[ue];Ie!==null&&Me!==void 0&&Me.update(Ie,te,c||a)}Pe&&Pe(J,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}let Le=new ap;Le.setAnimationLoop(Ce),this.setAnimationLoop=function(J){Pe=J},this.dispose=function(){}}},zy=new bt,dp=new et;dp.set(-1,0,0,0,1,0,0,0,1);function Hy(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,du(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,_,A,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),d(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,_,A):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===zi&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===zi&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=e.get(m),A=_.envMap,S=_.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(zy.makeRotationFromEuler(S)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(dp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=A*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function d(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===zi&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let _=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vy(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){let y=w.program;n.uniformBlockBinding(S,y)}function c(S,w){let y=s[S.id];y===void 0&&(p(S),y=d(S),s[S.id]=y,S.addEventListener("dispose",_));let T=w.program;n.updateUBOMapping(S,T);let x=e.render.frame;r[S.id]!==x&&(h(S),r[S.id]=x)}function d(S){let w=u();S.__bindingPointIndex=w;let y=i.createBuffer(),T=S.__size,x=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,y),y}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let w=s[S.id],y=S.uniforms,T=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let x=0,E=y.length;x<E;x++){let R=y[x];if(Array.isArray(R))for(let D=0,F=R.length;D<F;D++)f(R[D],x,D,T);else f(R,x,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,w,y,T){if(v(S,w,y,T)===!0){let x=S.__offset,E=S.value;if(Array.isArray(E)){let R=0;for(let D=0;D<E.length;D++){let F=E[D],I=m(F);g(F,S.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,S.__data)}}function g(S,w,y){typeof S=="number"||typeof S=="boolean"?w[0]=S:S.isMatrix3?(w[0]=S.elements[0],w[1]=S.elements[1],w[2]=S.elements[2],w[3]=0,w[4]=S.elements[3],w[5]=S.elements[4],w[6]=S.elements[5],w[7]=0,w[8]=S.elements[6],w[9]=S.elements[7],w[10]=S.elements[8],w[11]=0):ArrayBuffer.isView(S)?w.set(new S.constructor(S.buffer,S.byteOffset,w.length)):S.toArray(w,y)}function v(S,w,y,T){let x=S.value,E=w+"_"+y;if(T[E]===void 0)return typeof x=="number"||typeof x=="boolean"?T[E]=x:ArrayBuffer.isView(x)?T[E]=x.slice():T[E]=x.clone(),!0;{let R=T[E];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return T[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function p(S){let w=S.uniforms,y=0,T=16;for(let E=0,R=w.length;E<R;E++){let D=Array.isArray(w[E])?w[E]:[w[E]];for(let F=0,I=D.length;F<I;F++){let C=D[F],U=Array.isArray(C.value)?C.value:[C.value];for(let H=0,G=U.length;H<G;H++){let K=U[H],N=m(K),V=y%T,Y=V%N.boundary,re=V+Y;y+=Y,re!==0&&T-re<N.storage&&(y+=T-re),C.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,y+=N.storage}}}let x=y%T;return x>0&&(y+=T-x),S.__size=y,S.__cache={},this}function m(S){let w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):We("WebGLRenderer: Unsupported uniform value type.",S),w}function _(S){let w=S.target;w.removeEventListener("dispose",_);let y=a.indexOf(w.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function A(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var Gy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$n=null;function Wy(){return $n===null&&($n=new Or(Gy,16,16,Us,Wt),$n.name="DFG_LUT",$n.minFilter=Qt,$n.magFilter=Qt,$n.wrapS=on,$n.wrapT=on,$n.generateMipmaps=!1,$n.needsUpdate=!0),$n}var Ac=class{constructor(e={}){let{canvas:t=Lf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:f=cn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=f,p=new Set([Wl,Gl,Vl]),m=new Set([cn,Un,Vr,Gr,zl,Hl]),_=new Uint32Array(4),A=new Int32Array(4),S=new L,w=null,y=null,T=[],x=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,F=null,I=null,C=null,U=null;this._outputColorSpace=jt;let H=0,G=0,K=null,N=-1,V=null,Y=new Xe,re=new Xe,ee=null,Pe=new je(0),Ce=0,Le=t.width,J=t.height,te=1,ue=null,Ie=null,Me=new Xe(0,0,Le,J),Je=new Xe(0,0,Le,J),tt=!1,Ee=new Ia,Ae=!1,Ve=!1,Be=new bt,ht=new L,Ct=new Xe,ui={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ft=!1;function Ut(){return K===null?te:1}let B=n;function ii(b,O){return t.getContext(b,O)}let Mt,P,M,W,$,j,ce,he,Q,ne,de,Ue,ve,fe,Ne,Ge,it,z,pe,ie,me,Se,ae;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",nn,!1),B===null){let O="webgl2";if(B=ii(O,b),B===null)throw ii(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(b){throw t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",nn,!1),Ye("WebGLRenderer: "+b.message),b}function ke(){Mt=new Jx(B),Mt.init(),me=new Oy(B,Mt),P=new Hx(B,Mt,e,me),M=new Uy(B,Mt),P.reversedDepthBuffer&&h&&M.buffers.depth.setReversed(!0),I=B.createFramebuffer(),C=B.createFramebuffer(),U=B.createFramebuffer(),W=new e_(B),$=new My,j=new Ny(B,Mt,M,$,P,me,W),ce=new Kx(R),he=new ig(B),Se=new kx(B,he),Q=new jx(B,he,W,Se),ne=new i_(B,Q,he,Se,W),z=new t_(B,P,j),Ne=new Vx($),de=new yy(R,ce,Mt,P,Se,Ne),Ue=new Hy(R,$),ve=new wy,fe=new Cy(Mt),it=new Bx(R,ce,M,ne,g,l),Ge=new Fy(R,ne,P),ae=new Vy(B,W,P,M),pe=new zx(B,Mt,W),ie=new Qx(B,Mt,W),W.programs=de.programs,R.capabilities=P,R.extensions=Mt,R.properties=$,R.renderLists=ve,R.shadowMap=Ge,R.state=M,R.info=W}v!==cn&&(E=new s_(v,t.width,t.height,o,s,r));let De=new Uu(R,B);this.xr=De,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let b=Mt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Mt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(b){b!==void 0&&(te=b,this.setSize(Le,J,!1))},this.getSize=function(b){return b.set(Le,J)},this.setSize=function(b,O,Z=!0){if(De.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Le=b,J=O,t.width=Math.floor(b*te),t.height=Math.floor(O*te),Z===!0&&(t.style.width=b+"px",t.style.height=O+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(Le*te,J*te).floor()},this.setDrawingBufferSize=function(b,O,Z){Le=b,J=O,te=Z,t.width=Math.floor(b*Z),t.height=Math.floor(O*Z),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(v===cn){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Y)},this.getViewport=function(b){return b.copy(Me)},this.setViewport=function(b,O,Z,X){b.isVector4?Me.set(b.x,b.y,b.z,b.w):Me.set(b,O,Z,X),M.viewport(Y.copy(Me).multiplyScalar(te).round())},this.getScissor=function(b){return b.copy(Je)},this.setScissor=function(b,O,Z,X){b.isVector4?Je.set(b.x,b.y,b.z,b.w):Je.set(b,O,Z,X),M.scissor(re.copy(Je).multiplyScalar(te).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(b){M.setScissorTest(tt=b)},this.setOpaqueSort=function(b){ue=b},this.setTransparentSort=function(b){Ie=b},this.getClearColor=function(b){return b.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,Z=!0){let X=0;if(b){let q=!1;if(K!==null){let xe=K.texture.format;q=p.has(xe)}if(q){let xe=K.texture.type,be=m.has(xe),ge=it.getClearColor(),Re=it.getClearAlpha(),le=ge.r,nt=ge.g,Qe=ge.b;be?(_[0]=le,_[1]=nt,_[2]=Qe,_[3]=Re,B.clearBufferuiv(B.COLOR,0,_)):(A[0]=le,A[1]=nt,A[2]=Qe,A[3]=Re,B.clearBufferiv(B.COLOR,0,A))}else X|=B.COLOR_BUFFER_BIT}O&&(X|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",nn,!1),it.dispose(),ve.dispose(),fe.dispose(),$.dispose(),ce.dispose(),ne.dispose(),Se.dispose(),ae.dispose(),de.dispose(),De.dispose(),De.removeEventListener("sessionstart",At),De.removeEventListener("sessionend",ni),Wi.stop()};function Et(b){b.preventDefault(),hu("WebGLRenderer: Context Lost."),D=!0}function mt(){hu("WebGLRenderer: Context Restored."),D=!1;let b=W.autoReset,O=Ge.enabled,Z=Ge.autoUpdate,X=Ge.needsUpdate,q=Ge.type;ke(),W.autoReset=b,Ge.enabled=O,Ge.autoUpdate=Z,Ge.needsUpdate=X,Ge.type=q}function nn(b){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function se(b){let O=b.target;O.removeEventListener("dispose",se),He(O)}function He(b){Oe(b),$.remove(b)}function Oe(b){let O=$.get(b).programs;O!==void 0&&(O.forEach(function(Z){de.releaseProgram(Z)}),b.isShaderMaterial&&de.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,Z,X,q,xe){O===null&&(O=ui);let be=q.isMesh&&q.matrixWorld.determinantAffine()<0,ge=qt(b,O,Z,X,q);M.setMaterial(X,be);let Re=Z.index,le=1;if(X.wireframe===!0){if(Re=Q.getWireframeAttribute(Z),Re===void 0)return;le=2}let nt=Z.drawRange,Qe=Z.attributes.position,Te=nt.start*le,lt=(nt.start+nt.count)*le;xe!==null&&(Te=Math.max(Te,xe.start*le),lt=Math.min(lt,(xe.start+xe.count)*le)),Re!==null?(Te=Math.max(Te,0),lt=Math.min(lt,Re.count)):Qe!=null&&(Te=Math.max(Te,0),lt=Math.min(lt,Qe.count));let kt=lt-Te;if(kt<0||kt===1/0)return;Se.setup(q,X,ge,Z,Re);let St,vt=pe;if(Re!==null&&(St=he.get(Re),vt=ie,vt.setIndex(St)),q.isMesh)X.wireframe===!0?(M.setLineWidth(X.wireframeLinewidth*Ut()),vt.setMode(B.LINES)):vt.setMode(B.TRIANGLES);else if(q.isLine){let Gt=X.linewidth;Gt===void 0&&(Gt=1),M.setLineWidth(Gt*Ut()),q.isLineSegments?vt.setMode(B.LINES):q.isLineLoop?vt.setMode(B.LINE_LOOP):vt.setMode(B.LINE_STRIP)}else q.isPoints?vt.setMode(B.POINTS):q.isSprite&&vt.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(Mt.get("WEBGL_multi_draw"))vt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Gt=q._multiDrawStarts,we=q._multiDrawCounts,ri=q._multiDrawCount,ut=Re?he.get(Re).bytesPerElement:1,Ii=$.get(X).currentProgram.getUniforms();for(let sn=0;sn<ri;sn++)Ii.setValue(B,"_gl_DrawID",sn),vt.render(Gt[sn]/ut,we[sn])}else if(q.isInstancedMesh)vt.renderInstances(Te,kt,q.count);else if(Z.isInstancedBufferGeometry){let Gt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,we=Math.min(Z.instanceCount,Gt);vt.renderInstances(Te,kt,we)}else vt.render(Te,kt)};function at(b,O,Z,X){F!==null&&b.isNodeMaterial&&F.setObject(X,b),Ae===!0&&Ne.setState(b,Z,!1),b.transparent===!0&&b.side===Mi&&b.forceSinglePass===!1?(b.side=zi,b.needsUpdate=!0,dn(b,O,X),b.side=Is,b.needsUpdate=!0,dn(b,O,X),b.side=Mi):dn(b,O,X)}this.compile=function(b,O,Z=null){Z===null&&(Z=b),F!==null&&F.renderStart(b,O,Z),y=fe.get(Z),y.init(O),x.push(y),Z.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(y.pushLight(q),q.castShadow&&y.pushShadow(q))}),b!==Z&&b.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(y.pushLight(q),q.castShadow&&y.pushShadow(q))}),y.setupLights(),F!==null&&F.updateLights(y.state.lightsArray),Ve=this.localClippingEnabled,Ae=Ne.init(this.clippingPlanes,Ve),Ae===!0&&Ne.setGlobalState(this.clippingPlanes,O),F!==null&&Ge.render(y.state.shadowsArray,Z,O);let X=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let xe=q.material;if(xe)if(Array.isArray(xe))for(let be=0;be<xe.length;be++){let ge=xe[be];at(ge,Z,O,q),X.add(ge)}else at(xe,Z,O,q),X.add(xe)}),y=x.pop(),F!==null&&F.renderEnd(),X},this.compileAsync=function(b,O,Z=null){let X=this.compile(b,O,Z);return new Promise(q=>{function xe(){if(X.forEach(function(be){let Re=$.get(be).currentProgram;(Re===void 0||Re.isReady())&&X.delete(be)}),X.size===0){q(b);return}setTimeout(xe,10)}Mt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let gt=null;function Nt(b){gt&&gt(b)}function At(){Wi.stop()}function ni(){Wi.start()}let Wi=new ap;Wi.setAnimationLoop(Nt),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(b){gt=b,De.setAnimationLoop(b),b===null?Wi.stop():Wi.start()},De.addEventListener("sessionstart",At),De.addEventListener("sessionend",ni),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(b,O);let Z=De.enabled===!0&&De.isPresenting===!0,X=E!==null&&(K===null||Z)&&E.begin(R,K);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(O),O=De.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,O,K),y=fe.get(b,x.length),y.init(O),y.state.textureUnits=j.getTextureUnits(),x.push(y),Be.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ee.setFromProjectionMatrix(Be,In,O.reversedDepth),Ve=this.localClippingEnabled,Ae=Ne.init(this.clippingPlanes,Ve),w=ve.get(b,T.length),w.init(),T.push(w),De.enabled===!0&&De.isPresenting===!0){let be=R.xr.getDepthSensingMesh();be!==null&&Xi(be,O,-1/0,R.sortObjects)}Xi(b,O,0,R.sortObjects),w.finish(),F!==null&&F.updateLights(y.state.lightsArray),R.sortObjects===!0&&w.sort(ue,Ie),Ft=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,Ft&&it.addToRenderList(w,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ae===!0&&Ne.beginShadows();let q=y.state.shadowsArray;if(Ge.render(q,b,O),Ae===!0&&Ne.endShadows(),(X&&E.hasRenderPass())===!1){let be=w.opaque,ge=w.transmissive;if(y.setupLights(),O.isArrayCamera){let Re=O.cameras;if(ge.length>0)for(let le=0,nt=Re.length;le<nt;le++){let Qe=Re[le];Vn(be,ge,b,Qe)}Ft&&it.render(b);for(let le=0,nt=Re.length;le<nt;le++){let Qe=Re[le];Xt(w,b,Qe,Qe.viewport)}}else ge.length>0&&Vn(be,ge,b,O),Ft&&it.render(b),Xt(w,b,O)}K!==null&&G===0&&(j.updateMultisampleRenderTarget(K),j.updateRenderTargetMipmap(K)),X&&E.end(R),b.isScene===!0&&b.onAfterRender(R,b,O),Se.resetDefaultState(),N=-1,V=null,x.pop(),x.length>0?(y=x[x.length-1],j.setTextureUnits(y.state.textureUnits),Ae===!0&&Ne.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,T.pop(),T.length>0?w=T[T.length-1]:w=null,F!==null&&F.renderEnd()};function Xi(b,O,Z,X){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)Z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLightProbeGrid)y.pushLightProbeGrid(b);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Ee)){X&&Ct.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Be);let be=ne.update(b),ge=b.material;ge.visible&&w.push(b,be,ge,Z,Ct.z,null,O)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Ee))){let be=ne.update(b),ge=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ct.copy(b.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ct.copy(be.boundingSphere.center)),Ct.applyMatrix4(b.matrixWorld).applyMatrix4(Be)),Array.isArray(ge)){let Re=be.groups;for(let le=0,nt=Re.length;le<nt;le++){let Qe=Re[le],Te=ge[Qe.materialIndex];Te&&Te.visible&&w.push(b,be,Te,Z,Ct.z,Qe,O)}}else ge.visible&&w.push(b,be,ge,Z,Ct.z,null,O)}}let xe=b.children;for(let be=0,ge=xe.length;be<ge;be++)Xi(xe[be],O,Z,X)}function Xt(b,O,Z,X){let{opaque:q,transmissive:xe,transparent:be}=b;y.setupLightsView(Z),Ae===!0&&Ne.setGlobalState(R.clippingPlanes,Z),X&&M.viewport(Y.copy(X)),q.length>0&&si(q,O,Z),xe.length>0&&si(xe,O,Z),be.length>0&&si(be,O,Z),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Vn(b,O,Z,X){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[X.id]===void 0){let Te=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[X.id]=new Rt(1,1,{generateMipmaps:!0,type:Te?Wt:cn,minFilter:Ds,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let xe=y.state.transmissionRenderTarget[X.id],be=X.viewport||Y;xe.setSize(be.z*R.transmissionResolutionScale,be.w*R.transmissionResolutionScale);let ge=R.getRenderTarget(),Re=R.getActiveCubeFace(),le=R.getActiveMipmapLevel();R.setRenderTarget(xe),R.getClearColor(Pe),Ce=R.getClearAlpha(),Ce<1&&R.setClearColor(16777215,.5),R.clear(),Ft&&it.render(Z);let nt=R.toneMapping;R.toneMapping=ai;let Qe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),y.setupLightsView(X),Ae===!0&&Ne.setGlobalState(R.clippingPlanes,X),si(b,Z,X),j.updateMultisampleRenderTarget(xe),j.updateRenderTargetMipmap(xe),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let lt=0,kt=O.length;lt<kt;lt++){let St=O[lt],{object:vt,geometry:Gt,material:we,group:ri}=St;if(we.side===Mi&&vt.layers.test(X.layers)){let ut=we.side;we.side=zi,we.needsUpdate=!0,qi(vt,Z,X,Gt,we,ri),we.side=ut,we.needsUpdate=!0,Te=!0}}Te===!0&&(j.updateMultisampleRenderTarget(xe),j.updateRenderTargetMipmap(xe))}R.setRenderTarget(ge,Re,le),R.setClearColor(Pe,Ce),Qe!==void 0&&(X.viewport=Qe),R.toneMapping=nt}function si(b,O,Z){let X=O.isScene===!0?O.overrideMaterial:null;for(let q=0,xe=b.length;q<xe;q++){let be=b[q],{object:ge,geometry:Re,group:le}=be,nt=be.material;nt.allowOverride===!0&&X!==null&&(nt=X),ge.layers.test(Z.layers)&&qi(ge,O,Z,Re,nt,le)}}function qi(b,O,Z,X,q,xe){F!==null&&q.isNodeMaterial&&F.setObject(b,q),b.onBeforeRender(R,O,Z,X,q,xe),b.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(R,O,Z,X,b,xe),q.transparent===!0&&q.side===Mi&&q.forceSinglePass===!1?(q.side=zi,q.needsUpdate=!0,R.renderBufferDirect(Z,O,X,q,b,xe),q.side=Is,q.needsUpdate=!0,R.renderBufferDirect(Z,O,X,q,b,xe),q.side=Mi):R.renderBufferDirect(Z,O,X,q,b,xe),b.onAfterRender(R,O,Z,X,q,xe)}function dn(b,O,Z){O.isScene!==!0&&(O=ui);let X=$.get(b),q=y.state.lights,xe=y.state.shadowsArray,be=q.state.version,ge=de.getParameters(b,q.state,xe,O,Z,y.state.lightProbeGridArray),Re=de.getProgramCacheKey(ge),le=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,X.fog=O.fog;let nt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=ce.get(b.envMap||X.environment,nt),X.envMapRotation=X.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,le===void 0&&(b.addEventListener("dispose",se),le=new Map,X.programs=le);let Qe=le.get(Re);if(Qe!==void 0){if(X.currentProgram===Qe&&X.lightsStateVersion===be)return Ci(b,ge),Qe}else ge.uniforms=de.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,Z,ge),b.onBeforeCompile(ge,R),Qe=de.acquireProgram(ge,Re),le.set(Re,Qe),X.uniforms=ge.uniforms;let Te=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Te.clippingPlanes=Ne.uniform),Ci(b,ge),X.needsLights=_i(b),X.lightsStateVersion=be,X.needsLights&&(Te.ambientLightColor.value=q.state.ambient,Te.lightProbe.value=q.state.probe,Te.sunLights.value=q.state.sun,Te.sunLightShadows.value=q.state.sunShadow,Te.directionalLights.value=q.state.directional,Te.directionalLightShadows.value=q.state.directionalShadow,Te.spotLights.value=q.state.spot,Te.spotLightShadows.value=q.state.spotShadow,Te.rectAreaLights.value=q.state.rectArea,Te.ltc_1.value=q.state.rectAreaLTC1,Te.ltc_2.value=q.state.rectAreaLTC2,Te.pointLights.value=q.state.point,Te.pointLightShadows.value=q.state.pointShadow,Te.hemisphereLights.value=q.state.hemi,Te.sunShadowMatrix.value=q.state.sunShadowMatrix,Te.sunShadowCascade.value=q.state.sunShadowCascade,Te.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Te.spotLightMatrix.value=q.state.spotLightMatrix,Te.spotLightMap.value=q.state.spotLightMap,Te.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=y.state.lightProbeGridArray.length>0,X.currentProgram=Qe,X.uniformsList=null,Qe}function di(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=Yr.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Ci(b,O){let Z=$.get(b);Z.outputColorSpace=O.outputColorSpace,Z.batching=O.batching,Z.batchingColor=O.batchingColor,Z.instancing=O.instancing,Z.instancingColor=O.instancingColor,Z.instancingMorph=O.instancingMorph,Z.skinning=O.skinning,Z.morphTargets=O.morphTargets,Z.morphNormals=O.morphNormals,Z.morphColors=O.morphColors,Z.morphTargetsCount=O.morphTargetsCount,Z.numClippingPlanes=O.numClippingPlanes,Z.numIntersection=O.numClipIntersection,Z.vertexAlphas=O.vertexAlphas,Z.vertexTangents=O.vertexTangents,Z.toneMapping=O.toneMapping}function vi(b,O){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;S.setFromMatrixPosition(O.matrixWorld);for(let Z=0,X=b.length;Z<X;Z++){let q=b[Z];if(q.texture!==null&&q.boundingBox.containsPoint(S))return q}return null}function qt(b,O,Z,X,q){O.isScene!==!0&&(O=ui),j.resetTextureUnits();let xe=O.fog,be=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?O.environment:null,ge=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ct.workingColorSpace,Re=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,le=ce.get(X.envMap||be,Re),nt=X.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Qe=!!Z.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Te=!!Z.morphAttributes.position,lt=!!Z.morphAttributes.normal,kt=!!Z.morphAttributes.color,St=ai;X.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(St=R.toneMapping);let vt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Gt=vt!==void 0?vt.length:0,we=$.get(X),ri=y.state.lights;if(Ae===!0&&(Ve===!0||b!==V)){let Pt=b===V&&X.id===N;Ne.setState(X,b,Pt)}let ut=!1;X.version===we.__version?(we.needsLights&&we.lightsStateVersion!==ri.state.version||we.outputColorSpace!==ge||q.isBatchedMesh&&we.batching===!1||!q.isBatchedMesh&&we.batching===!0||q.isBatchedMesh&&we.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&we.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&we.instancing===!1||!q.isInstancedMesh&&we.instancing===!0||q.isSkinnedMesh&&we.skinning===!1||!q.isSkinnedMesh&&we.skinning===!0||q.isInstancedMesh&&we.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&we.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&we.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&we.instancingMorph===!1&&q.morphTexture!==null||we.envMap!==le||X.fog===!0&&we.fog!==xe||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Ne.numPlanes||we.numIntersection!==Ne.numIntersection)||we.vertexAlphas!==nt||we.vertexTangents!==Qe||we.morphTargets!==Te||we.morphNormals!==lt||we.morphColors!==kt||we.toneMapping!==St||we.morphTargetsCount!==Gt||!!we.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,we.__version=X.version);let Ii=we.currentProgram;ut===!0&&(Ii=dn(X,O,q),F&&X.isNodeMaterial&&F.onUpdateProgram(X,Ii,we));let sn=!1,En=!1,Gn=!1,xt=Ii.getUniforms(),Ot=we.uniforms;if(M.useProgram(Ii.program)&&(sn=!0,En=!0,Gn=!0),X.id!==N&&(N=X.id,En=!0),we.needsLights){let Pt=vi(y.state.lightProbeGridArray,q);we.lightProbeGrid!==Pt&&(we.lightProbeGrid=Pt,En=!0)}if(sn||V!==b){M.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),xt.setValue(B,"projectionMatrix",b.projectionMatrix),xt.setValue(B,"viewMatrix",b.matrixWorldInverse);let xs=xt.map.cameraPosition;xs!==void 0&&xs.setValue(B,ht.setFromMatrixPosition(b.matrixWorld)),P.logarithmicDepthBuffer&&xt.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xt.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),V!==b&&(V=b,En=!0,Gn=!0)}if(we.needsLights&&(ri.state.sunShadowMap.length>0&&xt.setValue(B,"sunShadowMap",ri.state.sunShadowMap,j),ri.state.directionalShadowMap.length>0&&xt.setValue(B,"directionalShadowMap",ri.state.directionalShadowMap,j),ri.state.spotShadowMap.length>0&&xt.setValue(B,"spotShadowMap",ri.state.spotShadowMap,j),ri.state.pointShadowMap.length>0&&xt.setValue(B,"pointShadowMap",ri.state.pointShadowMap,j)),q.isSkinnedMesh){xt.setOptional(B,q,"bindMatrix"),xt.setOptional(B,q,"bindMatrixInverse");let Pt=q.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),xt.setValue(B,"boneTexture",Pt.boneTexture,j))}q.isBatchedMesh&&(xt.setOptional(B,q,"batchingTexture"),xt.setValue(B,"batchingTexture",q._matricesTexture,j),xt.setOptional(B,q,"batchingIdTexture"),xt.setValue(B,"batchingIdTexture",q._indirectTexture,j),xt.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&xt.setValue(B,"batchingColorTexture",q._colorsTexture,j));let fn=Z.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&z.update(q,Z,Ii),(En||we.receiveShadow!==q.receiveShadow)&&(we.receiveShadow=q.receiveShadow,xt.setValue(B,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&O.environment!==null&&(Ot.envMapIntensity.value=O.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=Wy()),En){if(xt.setValue(B,"toneMappingExposure",R.toneMappingExposure),we.needsLights&&xi(Ot,Gn),xe&&X.fog===!0&&Ue.refreshFogUniforms(Ot,xe),Ue.refreshMaterialUniforms(Ot,X,te,J,y.state.transmissionRenderTarget[b.id]),we.needsLights&&we.lightProbeGrid){let Pt=we.lightProbeGrid;Ot.probesSH.value=Pt.texture,Ot.probesMin.value.copy(Pt.boundingBox.min),Ot.probesMax.value.copy(Pt.boundingBox.max),Ot.probesResolution.value.copy(Pt.resolution)}Yr.upload(B,di(we),Ot,j)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Yr.upload(B,di(we),Ot,j),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xt.setValue(B,"center",q.center),xt.setValue(B,"modelViewMatrix",q.modelViewMatrix),xt.setValue(B,"normalMatrix",q.normalMatrix),xt.setValue(B,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let Pt=X.uniformsGroups;for(let xs=0,mr=Pt.length;xs<mr;xs++){let Ad=Pt[xs];ae.update(Ad,Ii),ae.bind(Ad,Ii)}}return Ii}function xi(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.sunLights.needsUpdate=O,b.sunLightShadows.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function _i(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(b,O,Z){let X=$.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),$.get(b.texture).__webglTexture=O,$.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Z,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){let Z=$.get(b);Z.__webglFramebuffer=O,Z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,Z=0){K=b,H=O,G=Z;let X=null,q=!1,xe=!1;if(b){let ge=$.get(b);if(ge.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(B.FRAMEBUFFER,ge.__webglFramebuffer),Y.copy(b.viewport),re.copy(b.scissor),ee=b.scissorTest,M.viewport(Y),M.scissor(re),M.setScissorTest(ee),N=-1;return}else if(ge.__webglFramebuffer===void 0)j.setupRenderTarget(b);else if(ge.__hasExternalTextures)j.rebindTextures(b,$.get(b.texture).__webglTexture,$.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let nt=b.depthTexture;if(ge.__boundDepthTexture!==nt){if(nt!==null&&$.has(nt)&&(b.width!==nt.image.width||b.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(b)}}let Re=b.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(xe=!0);let le=$.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(le[O])?X=le[O][Z]:X=le[O],q=!0):b.samples>0&&j.useMultisampledRTT(b)===!1?X=$.get(b).__webglMultisampledFramebuffer:Array.isArray(le)?X=le[Z]:X=le,Y.copy(b.viewport),re.copy(b.scissor),ee=b.scissorTest}else Y.copy(Me).multiplyScalar(te).floor(),re.copy(Je).multiplyScalar(te).floor(),ee=tt;if(Z!==0&&(X=I),M.bindFramebuffer(B.FRAMEBUFFER,X)&&M.drawBuffers(b,X),M.viewport(Y),M.scissor(re),M.setScissorTest(ee),q){let ge=$.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,ge.__webglTexture,Z)}else if(xe){let ge=O;for(let Re=0;Re<b.textures.length;Re++){let le=$.get(b.textures[Re]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Re,le.__webglTexture,Z,ge)}}else if(b!==null&&Z!==0){let ge=$.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ge.__webglTexture,Z)}N=-1};function Pi(b){let O=$.get(b);return(O.__readFormat!==b.format||O.__readType!==b.type)&&(O.__readFormat=b.format,O.__readType=b.type,O.__formatReadable=P.textureFormatReadable(b.format),O.__typeReadable=P.textureTypeReadable(b.type)),O}this.readRenderTargetPixels=function(b,O,Z,X,q,xe,be,ge=0){if(!(b&&b.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=$.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Re=Re[be]),Re){M.bindFramebuffer(B.FRAMEBUFFER,Re);try{let le=b.textures[ge],nt=le.format,Qe=le.type;b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ge);let Te=Pi(le);if(Te.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-X&&Z>=0&&Z<=b.height-q&&B.readPixels(O,Z,X,q,me.convert(nt),me.convert(Qe),xe)}finally{let le=K!==null?$.get(K).__webglFramebuffer:null;M.bindFramebuffer(B.FRAMEBUFFER,le)}}},this.readRenderTargetPixelsAsync=async function(b,O,Z,X,q,xe,be,ge=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=$.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Re=Re[be]),Re)if(O>=0&&O<=b.width-X&&Z>=0&&Z<=b.height-q){M.bindFramebuffer(B.FRAMEBUFFER,Re);let le=b.textures[ge],nt=le.format,Qe=le.type;b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ge);let Te=Pi(le);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let lt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,lt),B.bufferData(B.PIXEL_PACK_BUFFER,xe.byteLength,B.STREAM_READ),B.readPixels(O,Z,X,q,me.convert(nt),me.convert(Qe),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let kt=K!==null?$.get(K).__webglFramebuffer:null;M.bindFramebuffer(B.FRAMEBUFFER,kt);let St=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ff(B,St,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,lt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,xe),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(lt),B.deleteSync(St),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,Z=0){let X=Math.pow(2,-Z),q=Math.floor(b.image.width*X),xe=Math.floor(b.image.height*X),be=O!==null?O.x:0,ge=O!==null?O.y:0;j.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,be,ge,q,xe),M.unbindTexture()},this.copyTextureToTexture=function(b,O,Z=null,X=null,q=0,xe=0){let be,ge,Re,le,nt,Qe,Te,lt,kt,St=b.isCompressedTexture?b.mipmaps[xe]:b.image;if(Z!==null)be=Z.max.x-Z.min.x,ge=Z.max.y-Z.min.y,Re=Z.isBox3?Z.max.z-Z.min.z:1,le=Z.min.x,nt=Z.min.y,Qe=Z.isBox3?Z.min.z:0;else{let Ot=Math.pow(2,-q);be=Math.floor(St.width*Ot),ge=Math.floor(St.height*Ot),b.isDataArrayTexture?Re=St.depth:b.isData3DTexture?Re=Math.floor(St.depth*Ot):Re=1,le=0,nt=0,Qe=0}X!==null?(Te=X.x,lt=X.y,kt=X.z):(Te=0,lt=0,kt=0);let vt=me.convert(O.format),Gt=me.convert(O.type),we;O.isData3DTexture?(j.setTexture3D(O,0),we=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(j.setTexture2DArray(O,0),we=B.TEXTURE_2D_ARRAY):(j.setTexture2D(O,0),we=B.TEXTURE_2D),M.activeTexture(B.TEXTURE0),M.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),M.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),M.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);let ri=M.getParameter(B.UNPACK_ROW_LENGTH),ut=M.getParameter(B.UNPACK_IMAGE_HEIGHT),Ii=M.getParameter(B.UNPACK_SKIP_PIXELS),sn=M.getParameter(B.UNPACK_SKIP_ROWS),En=M.getParameter(B.UNPACK_SKIP_IMAGES);M.pixelStorei(B.UNPACK_ROW_LENGTH,St.width),M.pixelStorei(B.UNPACK_IMAGE_HEIGHT,St.height),M.pixelStorei(B.UNPACK_SKIP_PIXELS,le),M.pixelStorei(B.UNPACK_SKIP_ROWS,nt),M.pixelStorei(B.UNPACK_SKIP_IMAGES,Qe);let Gn=b.isDataArrayTexture||b.isData3DTexture,xt=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){let Ot=$.get(b),fn=$.get(O),Pt=$.get(Ot.__renderTarget),xs=$.get(fn.__renderTarget);M.bindFramebuffer(B.READ_FRAMEBUFFER,Pt.__webglFramebuffer),M.bindFramebuffer(B.DRAW_FRAMEBUFFER,xs.__webglFramebuffer);for(let mr=0;mr<Re;mr++)Gn&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$.get(b).__webglTexture,q,Qe+mr),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$.get(O).__webglTexture,xe,kt+mr)),B.blitFramebuffer(le,nt,be,ge,Te,lt,be,ge,B.DEPTH_BUFFER_BIT,B.NEAREST);M.bindFramebuffer(B.READ_FRAMEBUFFER,null),M.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||$.has(b)){let Ot=$.get(b),fn=$.get(O);M.bindFramebuffer(B.READ_FRAMEBUFFER,C),M.bindFramebuffer(B.DRAW_FRAMEBUFFER,U);for(let Pt=0;Pt<Re;Pt++)Gn?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ot.__webglTexture,q,Qe+Pt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ot.__webglTexture,q),xt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,fn.__webglTexture,xe,kt+Pt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,fn.__webglTexture,xe),q!==0?B.blitFramebuffer(le,nt,be,ge,Te,lt,be,ge,B.COLOR_BUFFER_BIT,B.NEAREST):xt?B.copyTexSubImage3D(we,xe,Te,lt,kt+Pt,le,nt,be,ge):B.copyTexSubImage2D(we,xe,Te,lt,le,nt,be,ge);M.bindFramebuffer(B.READ_FRAMEBUFFER,null),M.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else xt?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(we,xe,Te,lt,kt,be,ge,Re,vt,Gt,St.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(we,xe,Te,lt,kt,be,ge,Re,vt,St.data):B.texSubImage3D(we,xe,Te,lt,kt,be,ge,Re,vt,Gt,St):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,xe,Te,lt,be,ge,vt,Gt,St.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,xe,Te,lt,St.width,St.height,vt,St.data):B.texSubImage2D(B.TEXTURE_2D,xe,Te,lt,be,ge,vt,Gt,St);M.pixelStorei(B.UNPACK_ROW_LENGTH,ri),M.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ut),M.pixelStorei(B.UNPACK_SKIP_PIXELS,Ii),M.pixelStorei(B.UNPACK_SKIP_ROWS,sn),M.pixelStorei(B.UNPACK_SKIP_IMAGES,En),xe===0&&O.generateMipmaps&&B.generateMipmap(we),M.unbindTexture()},this.initRenderTarget=function(b){$.get(b).__webglFramebuffer===void 0&&j.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?j.setTextureCube(b,0):b.isData3DTexture?j.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?j.setTexture2DArray(b,0):j.setTexture2D(b,0),M.unbindTexture()},this.resetState=function(){H=0,G=0,K=null,M.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var qe=Math.PI*2,Ze=(i,e,t)=>i<e?e:i>t?t:i,Zr=(i,e,t)=>i+(e-i)*t,Ou=(i,e,t)=>{let n=Ze((t-i)/(e-i),0,1);return n*n*(3-2*n)};function ls(i){let e=i>>>0;return function(){e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}var Qs=i=>i-Math.floor(i),Nu=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);function fp(i){let e=parseInt(i.slice(1),16);return[Nu((e>>16&255)/255),Nu((e>>8&255)/255),Nu((e&255)/255)]}function Pc(i){let e=parseInt(i.slice(1),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}function ei(i,e,t,n){let r=2/Math.max(1e-4,t),a=r*n,o=1/(1+a+.48*a*a+.235*a*a*a),l=i.value-e,c=(i.velocity+r*l)*n;i.velocity=(i.velocity-r*c)*o;let d=e+(l+c)*o;return e-i.value>0==d>e&&(d=e,i.velocity=(d-e)/Math.max(n,1e-5)),i.value=d,d}var Zt=(i=0)=>({value:i,velocity:0});function Bu(i,e,t,n,s,r,a,o,l){let c=Math.cos(l),d=Math.sin(l),u=(r*t+a*n+o*s)*(1-c);i[e]=t*c+(a*s-o*n)*d+r*u,i[e+1]=n*c+(o*t-r*s)*d+a*u,i[e+2]=s*c+(r*n-a*t)*d+o*u}function Ni(i,e,t,n){let s=0,r=1,a=0;Math.abs(t)>.9&&(s=1,r=0);let o=r*n-a*t,l=a*e-s*n,c=s*t-r*e,d=Math.hypot(o,l,c)||1;return o/=d,l/=d,c/=d,i[0]=o,i[1]=l,i[2]=c,i[3]=t*c-n*l,i[4]=n*o-e*c,i[5]=e*l-t*o,i}function cs(i,e,t){let n=Math.cos(i),s=Math.sin(i),r=Math.cos(e),a=Math.sin(e),o=Math.cos(t),l=Math.sin(t);return new Float64Array([o*r,o*a*s-l*n,o*a*n+l*s,l*r,l*a*s+o*n,l*a*n-o*s,-a,r*s,r*n])}var It={space:"#04070b",white:"#eaf2f8",ink:"#dde6ed",ice:"#a9e7f2",iceHi:"#e6fbff",deep:"#4f8fb0",deepest:"#1b3a52"},k=Object.fromEntries(Object.entries(It).map(([i,e])=>[i,fp(e)])),pp=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t];k.steel=pp(k.deep,k.white,.15);k.mist=pp(k.deepest,k.deep,.5);var hs={high:{particles:163840,stars:5200,dprCap:1.75,pixelBudget:42e5,bloom:!0,bloomScale:.5,grain:!0,size:1,gain:1},medium:{particles:65536,stars:3e3,dprCap:1.5,pixelBudget:24e5,bloom:!0,bloomScale:.42,grain:!0,size:1.32,gain:1.85},low:{particles:24576,stars:1600,dprCap:1.5,pixelBudget:13e5,bloom:!1,bloomScale:.35,grain:!1,size:1.75,gain:3.4}},Nn=[{dpr:1,floor:0,draw:1,bloom:1},{dpr:1,floor:0,draw:1,bloom:.72},{dpr:.82,floor:1,draw:1,bloom:.6},{dpr:.66,floor:1,draw:1,bloom:.5},{dpr:.5,floor:1,draw:.78,bloom:.5},{dpr:.5,floor:.75,draw:.62,bloom:0}],lo=32,Ic={hero:{wide:{cx:.675,cy:.47,r:(i,e)=>Math.min(i*.255,e*.4),push:1,dim:1},tall:{cx:.5,cy:.66,r:(i,e)=>Math.min(i*.44,e*.24),push:1,dim:1}},explore:{wide:{cx:.5,cy:.49,r:(i,e)=>Math.min(i*.33,e*.41),push:1,dim:1},tall:{cx:.5,cy:.46,r:(i,e)=>Math.min(i*.47,e*.3),push:1,dim:1}},contents:{wide:{cx:.245,cy:.52,r:(i,e)=>Math.min(i*.19,e*.37),push:1,dim:.92},tall:{cx:.5,cy:.2,r:(i,e)=>Math.min(i*.4,e*.17),push:1,dim:.9}},chapter:{wide:{cx:.655,cy:.5,r:(i,e)=>Math.min(i*.27,e*.42),push:1,dim:1},tall:{cx:.5,cy:.34,r:(i,e)=>Math.min(i*.45,e*.24),push:1,dim:1}},reading:{wide:{cx:.5,cy:.5,r:(i,e)=>Math.min(i*.5,e*.8),push:1,dim:.5},tall:{cx:.5,cy:.46,r:(i,e)=>Math.min(i*.5,e*.3),push:1.45,dim:.5}}},co=(i,e)=>i<640||i/e<=.8,Lc={intro:{duration:3.4,stagger:.45,flow:.9,swirl:1.1,sweep:.55,invert:0},cover:{duration:2.3,stagger:.4,flow:.62,swirl:.85,sweep:.8,invert:0},preview:{duration:1.7,stagger:.36,flow:.5,swirl:.7,sweep:.85,invert:0},chapter:{duration:2.2,stagger:.4,flow:.6,swirl:.85,sweep:.85,invert:0},seed:{duration:2.4,stagger:.42,flow:.45,swirl:1.3,sweep:.7,invert:1},dissolve:{duration:.24}},mn={camera:.62,cameraReduced:.06,parallax:.9,veil:.35,reading:.45,presence:.5,scatter:.42,scatterReduced:.2,arm:.32},ji={bloomStrength:.55,bloomRadius:.08,bloomThreshold:.48,bloomKnee:.32,exposure:1.12,vignette:.42,grain:.022},ot={stagger:.56,flow:.9,outward:.55,near:.62,far:2.5,margin:1.12,density:1150,minStars:420,maxStars:2600,px:4,pxBright:6.2,gain:.72,steep:5,drift:3,twinkle:.2,parallax:.35,sway:.15,bloom:.45,calm:.62,column:.42};var rt={SPIN_MAX:3,PIVOT_MAX:12,STREAM_MAX:8,RATE_MAX:2,SIZE_MAX:.16},Ns=1200,ku=Ns/(2*Math.PI),Kr=i=>Math.floor(i*ku+.5)/ku,mp=i=>Math.max(Math.floor(i*Ns+.5),1)/Ns,ir=i=>i-Math.floor(i/Ns)*Ns,Xy=i=>Number(i.toFixed(6)),zu=[.3,.6,.5,.8,.4,.7,.9,.5,.7,.4,.6,.8].map(i=>Xy(Kr(i))),gn=zu.map(i=>i.toFixed(6)),nr={uHole:{value:new Xe(0,0,0,1)},uHoleView:{value:new Xe(0,0,-1,0)},uViewport:{value:new ye(1,1)},uHoleReach:{value:2},uHoleDisc:{value:new Xe(0,1,0,.3)},uHoleRay:{value:new Xe(1,1,0,0)},uHoleBand:{value:new Xe(0,0,0,0)}},ho=`
uniform vec4 uHole;
uniform vec4 uHoleView;
uniform vec2 uViewport;
uniform float uHoleReach;
uniform vec4 uHoleDisc;
uniform vec4 uHoleRay;
uniform vec4 uHoleBand;
float holeFront(vec3 p) {
  float L = max(length(p), 1e-4);
  float tc = dot(p, uHoleView.xyz) / L;
  float h2 = dot(uHoleView.xyz, uHoleView.xyz) - tc * tc;
  float r2 = uHoleView.w * uHoleView.w;
  if (h2 >= r2) return 1.0;
  return L < tc - sqrt(r2 - h2) ? 1.0 : 0.0;
}
// Where the view ray through a drawing-buffer pixel meets the disc plane (view space; w = 1 ahead).
vec4 holePlane(vec2 frag) {
  vec2 ndc = frag / uViewport * 2.0 - 1.0;
  vec3 d = vec3((ndc.x + uHoleRay.z) / uHoleRay.x, (ndc.y + uHoleRay.w) / uHoleRay.y, -1.0);
  float dn = dot(d, uHoleDisc.xyz);
  float t = dot(uHoleView.xyz, uHoleDisc.xyz) / (abs(dn) < 1e-6 ? 1e-6 : dn);
  return vec4(d * t, t > 0.0 ? 1.0 : 0.0);
}
// Anti-aliased footprint of the disc's band where it lies in front of the horizon. The gradient is
// taken by finite differences (no derivatives: callers may have discarded already).
float holeBand(vec2 frag) {
  vec4 p = holePlane(frag);
  float r = length(p.xyz - uHoleView.xyz);
  float rx = length(holePlane(frag + vec2(1.0, 0.0)).xyz - uHoleView.xyz);
  float ry = length(holePlane(frag + vec2(0.0, 1.0)).xyz - uHoleView.xyz);
  float g = max(length(vec2(rx - r, ry - r)), 1e-6); // world units per pixel along the plane
  float m = clamp((r - uHoleBand.x) / g + 0.5, 0.0, 1.0) * clamp((uHoleBand.y - r) / g + 0.5, 0.0, 1.0);
  return m * p.w * holeFront(p.xyz) * uHoleBand.z;
}
float holeCover(vec2 frag) {
  float c = 1.0 - smoothstep(uHole.z - uHole.w, uHole.z + uHole.w, length(frag - uHole.xy));
  if (c <= 0.0 || uHoleBand.z <= 0.0) return c;
  return c * (1.0 - holeBand(frag));
}
`,us=`
#define TIME_PERIOD ${Ns.toFixed(1)}
#define TIME_QW ${ku.toFixed(6)}
float qRate(float w) { return floor(w * TIME_QW + 0.5) / TIME_QW; }
float qCycles(float r) { return max(floor(r * TIME_PERIOD + 0.5), 1.0) / TIME_PERIOD; }
`,qy=`
#define SPIN_MAX ${rt.SPIN_MAX.toFixed(4)}
#define PIVOT_MAX ${rt.PIVOT_MAX.toFixed(4)}
#define STREAM_MAX ${rt.STREAM_MAX.toFixed(4)}
#define RATE_MAX ${rt.RATE_MAX.toFixed(4)}
#define SIZE_MAX ${rt.SIZE_MAX.toFixed(4)}
`,er=i=>Number(i).toFixed(4),Yy=`
#define SC_STAGGER ${er(ot.stagger)}
#define SC_NEAR ${er(ot.near)}
#define SC_FAR ${er(ot.far)}
#define SC_MARGIN ${er(ot.margin)}
#define SC_STEEP ${er(ot.steep)}
#define SC_DRIFT ${er(ot.drift)}
#define SC_COLUMN ${er(ot.column)}
`,Hu=625341585,tr=1024,uo=`
${qy}
${Yy}
${us}
uniform float uTime;          // living clock, wrapped to TIME_PERIOD
uniform float uFlowTime;      // morph flow clock, wrapped to TIME_PERIOD
uniform float uMorph;
uniform float uStagger;
uniform vec3 uSweep;          // x: mix toward radial order, y: invert, z: radius
uniform float uFlowAmp;
uniform float uSwirl;
uniform vec2 uCarry;          // flow amplitude and swirl of the interrupted morph (carried flow)
uniform float uDissolve;      // 1 = reduced-motion cross-dissolve
uniform float uSide;          // dissolve only: 0 draws the from state, 1 the to state
uniform float uToExpand;
uniform float uToSpread;
uniform float uToDim;
uniform float uEvolve;
uniform float uEvolveMode;    // 1 reveal, -1 vanish, 0 off
// The same per-formation controls for the "from" side (frozen at the moment buffers are swapped;
// identity after a bake, whose positions/colours are already absolute).
uniform float uFromExpand;
uniform float uFromSpread;
uniform float uFromDim;
uniform float uFromEvolve;
uniform float uFromEvolveMode;
uniform float uPixelScale;    // drawing-buffer px per world unit at distance 1
uniform float uSizeScale;
uniform float uGain;
uniform float uFocus;
uniform float uDof;
uniform float uMinPx;
uniform float uMaxPx;
uniform float uTwinkle;
// Reading starfield (see the header).
uniform float uScatter;       // 0 formation \u2026 1 scattered (eased by the engine)
uniform float uScatterKeep;   // share of particles that stay visible as stars
uniform float uScatterTravel; // 1: matter travels in streams; 0: reduced motion (cross-fade in place)
uniform mat4 uScatterFrame;   // reference camera (no parallax, sway or explore rotation) \u2192 world
uniform vec4 uScatterRay;     // projection P[0], P[5], P[8], P[9] (off-axis composition included)
uniform vec4 uScatterCenter;  // formation centre xyz (eased with the composition), framing radius w
uniform vec4 uScatterLook;    // x: reference camera distance, y: star gain, z/w: faint/bright sprite px
uniform vec4 uScatterMotion;  // x: flow, y: outward push (\xD7 radius), z: twinkle, w: light kept in the text column
uniform vec3 uScatterTone0;   // star colours (linear): cold white, ice, accent-hi, deep
uniform vec3 uScatterTone1;
uniform vec3 uScatterTone2;
uniform vec3 uScatterTone3;
#ifdef GPU_STATE
uniform float uFromTex;       // 1: the from side is the baked state (textures below)
uniform highp sampler2D uState0;
uniform highp sampler2D uState1;
uniform highp sampler2D uState2;
uniform highp sampler2D uState3;
#endif
#ifdef BAKE
uniform float uSnapshot;      // 0: bake the state for a retarget, 1: displayed state for the film
uniform vec2 uStateSize;
varying vec4 vS0;
varying vec4 vS1;
varying vec4 vS2;
varying vec4 vS3;
#endif

attribute vec4 aFromLook;
attribute vec4 aFromSpin;
attribute vec3 aFromPivot;
attribute vec4 aFromStream;
attribute vec4 aFromAux;
attribute vec3 aTo;
attribute vec4 aToLook;
attribute vec4 aToSpin;
attribute vec3 aToPivot;
attribute vec4 aToStream;
attribute vec4 aToAux;
attribute vec2 aMeta;         // x: seed, y: carried flow weight of an interrupted morph

varying vec3 vColor;
varying float vSoft;
#ifdef OVERLAY
${ho}
#endif

vec3 rotateAxis(vec3 p, vec3 axis, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return p * c + cross(axis, p) * s + axis * dot(axis, p) * (1.0 - c);
}

// Living motion: travel along a stream vector (wrapping, faded at the ends),
// then orbit about an axis through a pivot.
vec3 living(vec3 base, vec4 spin, vec3 pivot, vec4 stream, float seed, out float fade) {
  vec3 p = base;
  fade = 1.0;
  float rate = stream.w * RATE_MAX;
  if (rate > 0.0) {
    float ph = fract(uTime * qCycles(rate) + seed * 7.31);
    p += stream.xyz * (STREAM_MAX * ph);
    fade = smoothstep(0.0, 0.16, ph) * (1.0 - smoothstep(0.74, 1.0, ph));
  }
  float w = qRate(spin.w * SPIN_MAX);
  if (w != 0.0) {
    vec3 c = pivot * PIVOT_MAX;
    p = c + rotateAxis(p - c, normalize(spin.xyz), uTime * w);
  }
  return p;
}

// Divergence-free field: the analytic curl of a sum of sinusoidal potentials.
vec3 flowField(vec3 p, float t) {
  vec3 v = vec3(
    2.7 * cos(2.7 * p.y + ${gn[0]} * t) - 1.7 * cos(1.7 * p.z + ${gn[1]} * t + 2.0),
    2.1 * cos(2.1 * p.z - ${gn[2]} * t) - 1.9 * cos(1.9 * p.x - ${gn[3]} * t + 3.0),
    2.3 * cos(2.3 * p.x + ${gn[4]} * t) - 1.3 * cos(1.3 * p.y + ${gn[5]} * t + 1.0));
  vec3 q = vec3(p.y + p.z, p.z - p.x, p.x + p.y) * 1.9 + 4.0;
  v += 0.5 * vec3(
    3.1 * cos(3.1 * q.y - ${gn[6]} * t) - 2.6 * cos(2.6 * q.z + ${gn[7]} * t),
    2.9 * cos(2.9 * q.z + ${gn[8]} * t) - 3.3 * cos(3.3 * q.x - ${gn[9]} * t),
    2.4 * cos(2.4 * q.x - ${gn[10]} * t) - 2.8 * cos(2.8 * q.y + ${gn[11]} * t));
  return v * 0.16;
}

// Reveal (mode 1): visible once evolve passes the particle's threshold.
// Vanish (mode -1): particles with a threshold fade out as evolve passes 1 - threshold.
float evolveGate(float ev, float evolve, float mode) {
  if (mode > 0.5) return smoothstep(ev - 0.06, ev, evolve);
  if (mode < -0.5 && ev > 0.0) return 1.0 - smoothstep(1.0 - ev, 1.06 - ev, evolve);
  return 1.0;
}

// Colours are stored gamma-2 encoded in u8 (more precision in the darks); CPU encodes with sqrt.
vec3 decode(vec3 c) { return c * c; }

// ---- reading starfield
uint scHash(uint v) {
  uint s = v * 747796405u + 2891336453u;
  uint w = ((s >> ((s >> 28u) + 4u)) ^ s) * 277803737u;
  return (w >> 22u) ^ w;
}
float scUnit(inout uint h) {
  h = scHash(h);
  return float(h >> 8u) * (1.0 / 16777216.0);
}
// Slow spatial blobs (0..1): neighbouring matter shares a threshold, so regions leave as streams.
float scBlobs(vec3 p) {
  return 0.5 + 0.25 * (sin(dot(p, vec3(1.9, 1.0, -1.4)) + 1.6 * sin(dot(p, vec3(-0.9, 1.5, 0.8)) + 1.0))
                     + sin(dot(p, vec3(0.7, -1.6, 1.7)) + 1.4 * sin(dot(p, vec3(1.3, 0.6, 1.4)) + 2.0)));
}
// This particle's star: world position, light (linear colour \xD7 energy), sprite px, depth, kept (1:
// stays visible). Stars sit at NDC (u, v) of the reference camera at a depth of near\u2026far \xD7 its
// distance; they pan slowly (nearer ones faster, whole cycles per clock period) and twinkle subtly.
void scatterStar(out vec3 wpos, out vec3 light, out float px, out float depth, out float kept) {
  uint h = uint(gl_VertexID) ^ ${Hu}u;
  kept = scUnit(h) < uScatterKeep ? 1.0 : 0.0;
  float u0 = scUnit(h);
  float v0 = scUnit(h);
  float dz = scUnit(h);
  float mag = pow(scUnit(h), SC_STEEP);
  float tone = scUnit(h);
  float tw = scUnit(h);
  float near = 1.0 - dz;
  float cycles = 1.0 + floor(near * (SC_DRIFT - 0.001));
  float u = (fract(u0 - uTime * (cycles / TIME_PERIOD)) * 2.0 - 1.0) * SC_MARGIN;
  float v = (v0 * 2.0 - 1.0) * SC_MARGIN;
  depth = uScatterLook.x * mix(SC_NEAR, SC_FAR, dz);
  vec3 view = vec3(depth * (u + uScatterRay.z) / uScatterRay.x, depth * (v + uScatterRay.w) / uScatterRay.y, -depth);
  wpos = (uScatterFrame * vec4(view, 1.0)).xyz;
  // Mostly cold white, some ice cyan, a few accent-hi; faint, far stars lean deep blue.
  vec3 c = tone < 0.55 ? uScatterTone0 : tone < 0.85 ? uScatterTone1 : uScatterTone2;
  c = mix(c, uScatterTone3, 0.45 * dz * (1.0 - mag));
  float edge = 1.0 - smoothstep(1.0, SC_MARGIN, abs(u)); // the pan wraps off screen
  float calm = mix(uScatterMotion.w, 1.0, smoothstep(SC_COLUMN, SC_COLUMN + 0.25, abs(u)));
  float twk = 1.0 + uTwinkle * uScatterMotion.z * (0.5 + 0.5 * mag) * sin(uTime * qRate(0.7 + 2.0 * tw) + tw * 40.0);
  light = c * (uScatterLook.y * (0.08 + 0.92 * mag) * (0.6 + 0.4 * near) * edge * calm * twk);
  px = mix(uScatterLook.z, uScatterLook.w, mag);
}

void main() {
  #ifndef BAKE
  if (uScatter >= 1.0) {
    // Fully scattered: only the kept stars are drawn, and nothing of the formation is evaluated.
    vec3 wpos, light;
    float spx, sdepth, kept;
    scatterStar(wpos, light, spx, sdepth, kept);
    #ifdef OVERLAY
    kept = 0.0; // the ch.7 horizon is gone with its formation
    #endif
    if (uDissolve > 0.5) light *= uSide > 0.5 ? uMorph : 1.0 - uMorph;
    vec4 smv = modelViewMatrix * vec4(wpos, 1.0);
    gl_Position = kept > 0.5 ? projectionMatrix * smv : vec4(2.0, 2.0, 2.0, 1.0);
    if (spx < uMinPx) {
      light *= (spx * spx) / (uMinPx * uMinPx);
      spx = uMinPx;
    }
    gl_PointSize = min(spx, uMaxPx);
    vColor = light;
    vSoft = 0.0;
    return;
  }
  #endif
  float seed = aMeta.x;
  float r1 = fract(seed * 91.3458);
  float r2 = fract(seed * 47.853);

  // Per-particle staggered progress (random, optionally ordered by distance to the centre).
  float radial = clamp(length(aTo) / uSweep.z, 0.0, 1.0);
  radial = mix(radial, 1.0 - radial, uSweep.y);
  float delay = uStagger * mix(r1, radial, uSweep.x);
  float p = clamp((uMorph - delay) / (1.0 - uStagger), 0.0, 1.0);
  float e = p * p * p * (p * (p * 6.0 - 15.0) + 10.0);
  if (uDissolve > 0.5) {
    #ifdef BAKE
    e = uMorph >= 0.5 ? 1.0 : 0.0;
    #else
    e = uSide;
    #endif
  }

  // ---- from side: attributes, or the baked state of an interrupted morph.
  vec3 a;
  vec3 colA;
  float sizeA;
  float carried;
  float twkA;
  float glintA;
  vec4 fromSpin = aFromSpin;
  vec3 fromPivot = aFromPivot * PIVOT_MAX;
  #ifdef GPU_STATE
  if (uFromTex > 0.5) {
    ivec2 st = ivec2(gl_VertexID % ${tr}, gl_VertexID / ${tr});
    vec4 s0 = texelFetch(uState0, st, 0);
    vec4 s1 = texelFetch(uState1, st, 0);
    vec4 s2 = texelFetch(uState2, st, 0);
    vec4 s3 = texelFetch(uState3, st, 0);
    a = s0.xyz;
    if (s2.w != 0.0) a = s2.xyz + rotateAxis(a - s2.xyz, s3.xyz, uTime * s2.w);
    colA = s1.rgb;
    sizeA = s1.a;
    carried = s0.w;
    twkA = mod(s3.w, 256.0) / 255.0;
    glintA = floor(s3.w / 256.0) / 255.0;
    fromSpin = vec4(s3.xyz, s2.w / SPIN_MAX);
    fromPivot = s2.xyz;
  } else
  #endif
  {
    float fadeA;
    a = living(position, aFromSpin, aFromPivot, aFromStream, seed, fadeA);
    a = (a + aFromPivot * (PIVOT_MAX * uFromSpread)) * uFromExpand;
    float gateA = evolveGate(aFromAux.x, uFromEvolve, uFromEvolveMode);
    colA = decode(aFromLook.rgb) * (fadeA * gateA * uFromDim);
    sizeA = aFromLook.a * aFromLook.a;
    carried = aMeta.y;
    twkA = aFromAux.y;
    glintA = aFromAux.z;
  }

  // ---- to side.
  float fadeB;
  vec3 b = living(aTo, aToSpin, aToPivot, aToStream, seed, fadeB);
  b = (b + aToPivot * (PIVOT_MAX * uToSpread)) * uToExpand;
  float gate = evolveGate(aToAux.x, uEvolve, uEvolveMode);
  vec3 colB = decode(aToLook.rgb) * (fadeB * gate * uToDim);

  float sizeCode = mix(sizeA, aToLook.a * aToLook.a, e);
  float size = sizeCode * SIZE_MAX;
  vec3 pos = mix(a, b, e);
  vec3 col = mix(colA, colB, e);

  // Flow: curl-like displacement + swirl, strongest mid-morph. A retargeted morph carries the
  // interrupted one's displacement (its own amplitude, decaying as the particle travels on).
  float kN = 4.0 * p * (1.0 - p);
  kN = kN * kN * (3.0 - 2.0 * kN);
  float kC = carried * (1.0 - p) * (1.0 - p);
  if (uDissolve > 0.5) {
    kN = 0.0;
    kC = 0.0;
  }

  #ifdef BAKE
  vec2 texel = vec2(float(gl_VertexID % ${tr}), float(gl_VertexID / ${tr}));
  gl_Position = vec4((texel + 0.5) / uStateSize * 2.0 - 1.0, 0.0, 1.0);
  gl_PointSize = 1.0;
  if (uSnapshot < 0.5) {
    // Re-express the position in the dominant side's orbit so the particle keeps living on it.
    vec4 dSpin = e >= 0.5 ? aToSpin : fromSpin;
    vec3 dPivot = e >= 0.5 ? aToPivot * PIVOT_MAX : fromPivot;
    float w = qRate(dSpin.w * SPIN_MAX);
    vec3 axis = dot(dSpin.xyz, dSpin.xyz) > 0.0 ? normalize(dSpin.xyz) : vec3(0.0, 1.0, 0.0);
    vec3 R = pos;
    if (w != 0.0) R = dPivot + rotateAxis(R - dPivot, axis, -uTime * w);
    // Carried flow weight, in units of the interrupted morph's own amplitude (uFlowAmp).
    float cNext = kN + (uFlowAmp > 1e-4 ? uCarry.x / uFlowAmp : 0.0) * kC;
    float twk = e >= 0.5 ? aToAux.y : twkA;
    float gli = e >= 0.5 ? aToAux.z : glintA;
    vS0 = vec4(R, cNext);
    vS1 = vec4(col, sizeCode);
    vS2 = vec4(dPivot, w);
    vS3 = vec4(axis, floor(twk * 255.0 + 0.5) + floor(gli * 255.0 + 0.5) * 256.0);
    return;
  }
  #endif

  if (kN + kC > 0.001) {
    // Sampled by position only: neighbours share a displacement, so matter moves in coherent streams.
    pos += flowField(pos * 0.55, uFlowTime) * ((uFlowAmp * kN + uCarry.x * kC) * (0.85 + 0.3 * r2));
    float ang = (uSwirl * kN + uCarry.y * kC) * (0.8 + 0.4 * r1);
    float cs = cos(ang);
    float sn = sin(ang);
    pos.xz = vec2(cs * pos.x - sn * pos.z, sn * pos.x + cs * pos.z);
    col *= 1.0 + 0.15 * min(1.0, kN + kC);
  }

  // ---- reading starfield: the formation's matter peels away in streams into its stars, and back.
  float se = 0.0;          // this particle's share of the star sprite
  vec3 starLight = vec3(0.0);
  float starPx = 0.0;
  float starDepth = 1.0;
  if (uScatter > 0.0) {
    vec3 wpos;
    float kept;
    scatterStar(wpos, starLight, starPx, starDepth, kept);
    if (uScatterTravel > 0.5) {
      // Staggered threshold: outer matter first, then region by region (blobs), spread along the way.
      vec3 rel = pos - uScatterCenter.xyz;
      float rl = length(rel);
      float order = 0.45 * (1.0 - clamp(rl / uScatterCenter.w, 0.0, 1.0)) + 0.33 * scBlobs(pos) + 0.22 * r1;
      float sp = clamp((uScatter - SC_STAGGER * order) / (1.0 - SC_STAGGER), 0.0, 1.0);
      // The path: matter first leaves along a stream displacement D shared by its neighbours (an
      // outward push curled by the slowly living flow field, sampled where it left from), so a
      // region peels away as a coherent stream; only then does each particle spread to its own star.
      // Reversed, the stars converge into streams that flow back into the formation.
      vec3 outward = rl > 1e-4 ? rel / rl : vec3(0.0, 1.0, 0.0);
      vec3 D = (outward * uScatterMotion.y + flowField(pos * 0.42 + 2.3, uFlowTime) * uScatterMotion.x) * uScatterCenter.w;
      float f = smoothstep(0.0, 0.62, sp);
      float g = smoothstep(0.42, 1.0, sp);
      pos += D * f + (wpos - pos - D) * g;
      // Matter that does not stay as a star stays lit along its stream and fades as it spreads (and
      // back in on its way home); a kept particle cross-fades into its star.
      se = kept * smoothstep(0.5, 0.92, sp);
      col *= kept > 0.5 ? 1.0 - se : 1.0 - smoothstep(0.45, 0.95, sp);
    } else {
      // Reduced motion: nothing travels. The formation fades out where it is, the stars fade in
      // where they are (a kept particle switches sides at 0.5, ~7 % bright on either side).
      if (kept > 0.5 && uScatter >= 0.5) {
        pos = wpos;
        col *= 0.0;
        se = 1.0;
        starLight *= smoothstep(0.4, 1.0, uScatter);
      } else {
        col *= 1.0 - smoothstep(0.0, 0.6, uScatter);
      }
    }
  }

  #ifdef BAKE
  // Snapshot for the film: world position with flow (and scatter), linear colour \xD7 sprite energy,
  // and the sprite's world diameter before depth of field (the engine applies that per view depth).
  // A star's sprite is fixed in pixels: its world diameter at its own depth.
  vS0 = vec4(pos, 1.0);
  vS1 = vec4(col * (uGain * min(4.0, sizeCode / 0.02 + 0.25)) + starLight * se, 1.0);
  vS2 = vec4(mix(size * uSizeScale, starPx * starDepth / uPixelScale, se), 0.0, 0.0, 0.0);
  vS3 = vec4(0.0);
  return;
  #endif

  // Twinkle and radiator glints (frozen when ambient motion is paused).
  float twk = mix(twkA, aToAux.y, e);
  float glint = mix(glintA, aToAux.z, e);
  float g = pow(max(0.0, sin(uTime * qRate(0.31 + 0.5 * r2) + seed * 23.0)), 48.0);
  col *= 1.0 + uTwinkle * (twk * 0.42 * sin(uTime * qRate(1.1 + 2.6 * r1) + seed * 61.0) + glint * 7.0 * g);

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;

  // Depth-attenuated size with fake depth of field: blur grows away from the focus plane,
  // energy is conserved (bigger => dimmer) and tiny points never alias to 1px mush.
  float dist = max(0.05, -mv.z);
  float px = size * uSizeScale * uPixelScale / dist;
  float coc = abs(dist - uFocus) / uFocus;
  float blur = 1.0 + uDof * coc;
  px *= blur;
  vec3 light = col * (uGain / (blur * blur));
  vSoft = clamp((blur - 1.0) * 1.4, 0.0, 1.0);
  if (se > 0.0) {
    // One sprite cross-fading from the formation's grain into the crisp star (its own size and light).
    px = mix(px, starPx, se);
    light += starLight * se;
    vSoft *= 1.0 - se;
  }
  if (uDissolve > 0.5) light *= uSide > 0.5 ? uMorph : 1.0 - uMorph;
  if (px < uMinPx) {
    light *= (px * px) / (uMinPx * uMinPx);
    px = uMinPx;
  }
  px = min(px, uMaxPx);
  gl_PointSize = px;
  vColor = light;
  if (vColor.r + vColor.g + vColor.b < 0.00035) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
  #ifdef OVERLAY
  // Post-bloom re-draw of what lies in front of the ch.7 horizon: only sprites in front of the
  // sphere that touch the shadow disc are rasterised at all.
  vColor *= 1.4; // stands in for the bloom this re-draw does not get
  vec2 sp = (gl_Position.xy / gl_Position.w * 0.5 + 0.5) * uViewport;
  // Only the hole's own disc is re-drawn: distant foreground dust would speckle the shadow.
  vec3 rel = mv.xyz - uHoleView.xyz;
  if (holeFront(mv.xyz) < 0.5 || length(rel) > uHoleReach || abs(dot(rel, uHoleDisc.xyz)) > uHoleDisc.w || length(sp - uHole.xy) > uHole.z + uHole.w + 0.5 * px) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
  #endif
}
`,Dc=`
varying vec3 vColor;
varying float vSoft;
#ifdef OVERLAY
${ho}
#endif

void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(q, q);
  if (r2 > 1.0) discard;
  // Gaussian core, softer when defocused; forced to zero at the rim.
  float a = exp(-r2 * mix(5.2, 2.3, vSoft)) * (1.0 - r2);
  #ifdef OVERLAY
  a *= holeCover(gl_FragCoord.xy);
  #endif
  gl_FragColor = vec4(vColor * a, 1.0);
}
`,gp=`
varying vec4 vS0;
varying vec4 vS1;
varying vec4 vS2;
varying vec4 vS3;
layout(location = 0) out highp vec4 oState0;
layout(location = 1) out highp vec4 oState1;
layout(location = 2) out highp vec4 oState2;
layout(location = 3) out highp vec4 oState3;
void main() {
  oState0 = vS0;
  oState1 = vS1;
  oState2 = vS2;
  oState3 = vS3;
}
`,vp=`
${us}
uniform float uTime;
uniform float uPixelRatio;
uniform float uTwinkle;
uniform float uGain;
attribute vec4 aLook;   // rgb (display) + magnitude
attribute float aSeed;
varying vec3 vColor;
varying float vSharp;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float m = aLook.a;
  float px = (1.35 + 3.4 * m * m) * uPixelRatio;
  float tw = 1.0 + uTwinkle * 0.28 * sin(uTime * qRate(0.6 + aSeed * 1.7) + aSeed * 40.0);
  vec3 c = aLook.rgb * aLook.rgb;
  float energy = (0.05 + 0.95 * m * m) * tw * uGain;
  float minPx = 1.6 * uPixelRatio;
  if (px < minPx) { energy *= px * px / (minPx * minPx); px = minPx; }
  gl_PointSize = px;
  vColor = c * energy;
  vSharp = 4.0 + 3.0 * m;
}
`,xp=`
varying vec3 vColor;
varying float vSharp;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(q, q);
  if (r2 > 1.0) discard;
  float a = exp(-r2 * vSharp) * (1.0 - r2);
  gl_FragColor = vec4(vColor * a, 1.0);
}
`;var $y=1/32767,Jr=1/255,wp=[["look",4,Uint8Array],["spin",4,Int16Array],["pivot",3,Int16Array],["stream",4,Int16Array],["aux",4,Uint8Array]];function _p(i){let e={pos:new Float32Array(i*3)};for(let[t,n,s]of wp)e[t]=new s(i*n);return e}var zt=i=>Math.max(i*$y,-1),Vu=["position","aFromLook","aFromSpin","aFromPivot","aFromStream","aFromAux"],Fc=["aTo","aToLook","aToSpin","aToPivot","aToStream","aToAux"],vn=(i,e,t)=>{let n=Ze((t-i)/(e-i),0,1);return n*n*(3-2*n)};function yp(i,e,t){return t>.5?vn(i-.06,i,e):t<-.5&&i>0?1-vn(1-i,1.06-i,e):1}function Mp(i){let e=4*i*(1-i);return e*e*(3-2*e)}var Ht=[0,0,0],bi=[0,0,0],Vi=[0,0,0];function bp(i){try{return!!(i&&i.capabilities.isWebGL2!==!1&&i.extensions.has("EXT_color_buffer_float"))}catch{return!1}}var Uc=class{constructor(e,{renderer:t=null,gpuState:n=!1}={}){this.count=e,this.renderer=t,this.gpu=!!(n&&t),this.from=_p(e),this.to=_p(e),this.meta=new Float32Array(e*2);let s=ls(12648430);for(let c=0;c<e;c++)this.meta[c*2]=s();let r=new pt,a=(c,d,u)=>new ft(c,d,u).setUsage(io);r.setAttribute("position",a(this.from.pos,3,!1)),r.setAttribute("aTo",a(this.to.pos,3,!1));for(let[c,d]of wp){let u=c[0].toUpperCase()+c.slice(1);r.setAttribute(`aFrom${u}`,a(this.from[c],d,!0)),r.setAttribute(`aTo${u}`,a(this.to[c],d,!0))}r.setAttribute("aMeta",a(this.meta,2,!1)),this.geometry=r,this.uniforms={uTime:{value:0},uFlowTime:{value:0},uMorph:{value:1},uStagger:{value:.4},uSweep:{value:new L(.5,0,3)},uFlowAmp:{value:.6},uSwirl:{value:.8},uCarry:{value:new ye(0,0)},uDissolve:{value:0},uSide:{value:0},uToExpand:{value:1},uToSpread:{value:0},uToDim:{value:1},uEvolve:{value:1},uEvolveMode:{value:0},uFromExpand:{value:1},uFromSpread:{value:0},uFromDim:{value:1},uFromEvolve:{value:1},uFromEvolveMode:{value:0},uPixelScale:{value:1e3},uSizeScale:{value:1},uGain:{value:1},uFocus:{value:10},uDof:{value:1.6},uMinPx:{value:1.8},uMaxPx:{value:48},uTwinkle:{value:1},uFromTex:{value:0},uState0:{value:null},uState1:{value:null},uState2:{value:null},uState3:{value:null},uScatter:{value:0},uScatterKeep:{value:.01},uScatterTravel:{value:1},uScatterFrame:{value:new bt},uScatterRay:{value:new Xe(1,1,0,0)},uScatterCenter:{value:new Xe(0,0,0,3)},uScatterLook:{value:new Xe(10,ot.gain,ot.px,ot.pxBright)},uScatterMotion:{value:new Xe(ot.flow,ot.outward,ot.twinkle,1)},uScatterTone0:{value:new L(...k.white)},uScatterTone1:{value:new L(...k.ice)},uScatterTone2:{value:new L(...k.iceHi)},uScatterTone3:{value:new L(...k.deep)}};let o={transparent:!0,depthWrite:!1,depthTest:!0,blending:Yn,blendEquation:Hi,blendSrc:Fn,blendDst:Fn},l=this.gpu?{GPU_STATE:""}:{};this.material=new Fe({name:"UniverseParticles",defines:{...l},uniforms:this.uniforms,vertexShader:uo,fragmentShader:Dc,...o}),this.ghostMaterial=new Fe({name:"UniverseParticlesGhost",defines:{...l},uniforms:{...this.uniforms,uSide:{value:1}},vertexShader:uo,fragmentShader:Dc,...o}),this.overlayMaterial=new Fe({name:"UniverseParticlesFront",defines:{OVERLAY:"",...l},uniforms:{...this.uniforms,...nr},vertexShader:uo,fragmentShader:Dc,...o,depthTest:!1}),this.points=new Fi(r,this.material),this.ghost=new Fi(r,this.ghostMaterial),this.overlay=new Fi(r,this.overlayMaterial);for(let c of[this.points,this.ghost,this.overlay])c.frustumCulled=!1,c.renderOrder=10;this.ghost.visible=!1,this.gpu&&this._initGpuState(),this.morphing=!1,this.duration=1,this.formation=null,this.drawCount=e,this.flowTime=0,this.lastBakeMs=0,this.envDirty=!1}_initGpuState(){let e=tr,t=Math.ceil(this.count/e),n=()=>{let a=new Rt(e,t,{count:4,type:Ji,format:wi,minFilter:Yt,magFilter:Yt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});for(let o of a.textures)o.generateMipmaps=!1;return a};this.states=[n(),n()],this.stateIndex=0,this.bakeUniforms={...this.uniforms,uSnapshot:{value:0},uStateSize:{value:new ye(e,t)}},this.bakeMaterial=new Fe({name:"UniverseParticlesBake",glslVersion:no,defines:{GPU_STATE:"",BAKE:""},uniforms:this.bakeUniforms,vertexShader:uo,fragmentShader:gp,blending:Si,depthTest:!1,depthWrite:!1});let s=new Fi(this.geometry,this.bakeMaterial);s.frustumCulled=!1,this.bakeScene=new mi,this.bakeScene.add(s),this.bakeCamera=new Zs,this.readBuffer=null;let r=this.renderer.capabilities;this.gpuRead=!!(r.textureTypeReadable&&r.textureTypeReadable(Ji)&&r.textureFormatReadable(wi))}get spareState(){return this.states?this.states[1-this.stateIndex]:null}setImmediate(e){this._copy(this.from,e),this._copy(this.to,e);for(let t=0;t<this.count;t++)this.meta[t*2+1]=0;this.envDirty=!1,this.formation=e,this._resetFrom(),this.uniforms.uMorph.value=1,this.uniforms.uDissolve.value=0,this.ghost.visible=!1,this.morphing=!1,this._upload()}setPair(e,t,n,s){this._copy(this.from,e),this._copy(this.to,t);for(let r=0;r<this.count;r++)this.meta[r*2+1]=0;this.envDirty=!1,this._resetFrom(),this.formation=t,this._start(n,s),this._upload()}_resetFrom(){let e=this.uniforms;e.uFromExpand.value=1,e.uFromSpread.value=0,e.uFromDim.value=1,e.uFromEvolve.value=1,e.uFromEvolveMode.value=0,e.uFromTex.value=0,e.uCarry.value.set(0,0)}_start(e,t){let n=this.uniforms;n.uMorph.value=0,n.uStagger.value=t?0:e.stagger,n.uSweep.value.set(e.sweep,e.invert,Math.max(.5,e.radius||3)),n.uFlowAmp.value=e.flow,n.uSwirl.value=e.swirl,n.uDissolve.value=t?1:0,this.ghost.visible=!!t,this.duration=Math.max(.05,e.duration),this.morphing=!0}morphTo(e,t,n,s){let r=performance.now(),a=this.uniforms,o=!1;if(!this.morphing&&a.uMorph.value>=1){if(this._swapSides(),a.uFromExpand.value=a.uToExpand.value,a.uFromSpread.value=a.uToSpread.value,a.uFromDim.value=a.uToDim.value,a.uFromEvolve.value=a.uEvolve.value,a.uFromEvolveMode.value=a.uEvolveMode.value,a.uFromTex.value=0,a.uCarry.value.set(0,0),this.envDirty){for(let l=0;l<this.count;l++)this.meta[l*2+1]=0;this.geometry.attributes.aMeta.needsUpdate=!0,this.envDirty=!1}this._copy(this.to,e),this._upload(Fc)}else a.uTime.value=ir(t),this.gpu?(this._bakeGpu(),this._upload(Fc)):(this.bake(t),this._upload()),a.uCarry.value.set(a.uFlowAmp.value,a.uSwirl.value),a.uFromExpand.value=1,a.uFromSpread.value=0,a.uFromDim.value=1,a.uFromEvolve.value=1,a.uFromEvolveMode.value=0,this._copy(this.to,e),o=!0;return this.formation=e,this._start(n,s),this.lastBakeMs=performance.now()-r,o}_bakeGpu(){let e=this.renderer,t=this.spareState,n=this.geometry.drawRange,s=n.start,r=n.count;this.geometry.setDrawRange(0,this.count),this.bakeUniforms.uSnapshot.value=0;let a=e.getRenderTarget(),o=e.autoClear;e.autoClear=!0,e.setRenderTarget(t),e.render(this.bakeScene,this.bakeCamera),e.setRenderTarget(a),e.autoClear=o,this.geometry.setDrawRange(s,r),this.stateIndex=1-this.stateIndex;let l=this.uniforms;l.uState0.value=t.textures[0],l.uState1.value=t.textures[1],l.uState2.value=t.textures[2],l.uState3.value=t.textures[3],l.uFromTex.value=1}update(e){let t=this.uniforms;return this.flowTime=ir(this.flowTime+e),t.uFlowTime.value=this.flowTime,this.morphing?(t.uMorph.value=Math.min(1,t.uMorph.value+e/this.duration),t.uMorph.value>=1&&(this.morphing=!1,t.uDissolve.value=0,this.ghost.visible=!1),this.morphing):!1}settle(){this.uniforms.uMorph.value=1,this.update(0),this.morphing=!1,this.uniforms.uDissolve.value=0,this.ghost.visible=!1}setDrawCount(e){this.drawCount=Math.max(1,Math.min(this.count,Math.round(e))),this.geometry.setDrawRange(0,this.drawCount)}_living(e,t,n,s,r){let a=e.pos,o=e.stream,l=e.spin,c=e.pivot,d=a[t*3],u=a[t*3+1],h=a[t*3+2],f=1,g=zt(o[t*4+3])*rt.RATE_MAX;if(g>0){let p=Qs(n*mp(g)+s*7.31),m=rt.STREAM_MAX*p;d+=zt(o[t*4])*m,u+=zt(o[t*4+1])*m,h+=zt(o[t*4+2])*m,f=vn(0,.16,p)*(1-vn(.74,1,p))}let v=Kr(zt(l[t*4+3])*rt.SPIN_MAX);if(v!==0){let p=zt(l[t*4]),m=zt(l[t*4+1]),_=zt(l[t*4+2]),A=Math.sqrt(p*p+m*m+_*_)||1;p/=A,m/=A,_/=A;let S=zt(c[t*3])*rt.PIVOT_MAX,w=zt(c[t*3+1])*rt.PIVOT_MAX,y=zt(c[t*3+2])*rt.PIVOT_MAX;Bu(r,0,d-S,u-w,h-y,p,m,_,n*v),r[0]+=S,r[1]+=w,r[2]+=y}else r[0]=d,r[1]=u,r[2]=h;return f}_progress(e){let t=this.uniforms;if(t.uDissolve.value>.5)return this._e=t.uMorph.value>=.5?1:0,1;let n=this.meta[e*2],s=Qs(n*91.3458),r=this.to.pos,a=r[e*3],o=r[e*3+1],l=r[e*3+2],c=Ze(Math.sqrt(a*a+o*o+l*l)/t.uSweep.value.z,0,1);t.uSweep.value.y>.5&&(c=1-c);let d=t.uStagger.value,u=d*(s+(c-s)*t.uSweep.value.x),h=Ze((t.uMorph.value-u)/(1-d),0,1);return this._e=h*h*h*(h*(h*6-15)+10),h}_evaluate(e,t){let n=this.uniforms,s=this.meta[e*2],r=this._progress(e),a=this._e,o=0,l=0;if(a<1){o=this._living(this.from,e,t,s,Ht);let p=this.from.pivot,m=n.uFromSpread.value*rt.PIVOT_MAX,_=n.uFromExpand.value;(m!==0||_!==1)&&(Ht[0]=(Ht[0]+zt(p[e*3])*m)*_,Ht[1]=(Ht[1]+zt(p[e*3+1])*m)*_,Ht[2]=(Ht[2]+zt(p[e*3+2])*m)*_),o*=yp(this.from.aux[e*4]*Jr,n.uFromEvolve.value,n.uFromEvolveMode.value)*n.uFromDim.value}if(a>0){l=this._living(this.to,e,t,s,bi);let p=this.to.pivot,m=n.uToSpread.value*rt.PIVOT_MAX,_=n.uToExpand.value;bi[0]=(bi[0]+zt(p[e*3])*m)*_,bi[1]=(bi[1]+zt(p[e*3+1])*m)*_,bi[2]=(bi[2]+zt(p[e*3+2])*m)*_}let c=yp(this.to.aux[e*4]*Jr,n.uEvolve.value,n.uEvolveMode.value),d=this.from.look,u=this.to.look,h=l*c*n.uToDim.value,f=this._c;for(let p=0;p<3;p++){let m=d[e*4+p]*Jr,_=u[e*4+p]*Jr,A=m*m*o,S=_*_*h;f[p]=a<=0?A:a>=1?S:A+(S-A)*a}let g=d[e*4+3]*Jr,v=u[e*4+3]*Jr;return f[3]=g*g+(v*v-g*g)*a,a<=0?(Vi[0]=Ht[0],Vi[1]=Ht[1],Vi[2]=Ht[2]):a>=1?(Vi[0]=bi[0],Vi[1]=bi[1],Vi[2]=bi[2]):(Vi[0]=Ht[0]+(bi[0]-Ht[0])*a,Vi[1]=Ht[1]+(bi[1]-Ht[1])*a,Vi[2]=Ht[2]+(bi[2]-Ht[2])*a),r}bake(e){this._c||(this._c=new Float32Array(4));let t=ir(e),n=this.count,s=this.from,r=this.to,a=this.meta,o=this.uniforms,l=o.uDissolve.value>.5,c=o.uFlowAmp.value>1e-4?o.uCarry.value.x/o.uFlowAmp.value:0,d=!1;for(let u=0;u<n;u++){let h=this._evaluate(u,t),f=this._e,g=l?0:Mp(h)+c*a[u*2+1]*(1-h)*(1-h),v=f>=.5?r:s,p=v.spin[u*4],m=v.spin[u*4+1],_=v.spin[u*4+2],A=v.spin[u*4+3],S=v.pivot[u*3],w=v.pivot[u*3+1],y=v.pivot[u*3+2],T=v.aux[u*4+1],x=v.aux[u*4+2],E=Kr(zt(A)*rt.SPIN_MAX),R=Vi[0],D=Vi[1],F=Vi[2];if(E!==0){let C=zt(p),U=zt(m),H=zt(_),G=Math.sqrt(C*C+U*U+H*H)||1;C/=G,U/=G,H/=G;let K=zt(S)*rt.PIVOT_MAX,N=zt(w)*rt.PIVOT_MAX,V=zt(y)*rt.PIVOT_MAX;Bu(Ht,0,R-K,D-N,F-V,C,U,H,-t*E),R=Ht[0]+K,D=Ht[1]+N,F=Ht[2]+V}let I=this._c;s.pos[u*3]=R,s.pos[u*3+1]=D,s.pos[u*3+2]=F,s.spin[u*4]=p,s.spin[u*4+1]=m,s.spin[u*4+2]=_,s.spin[u*4+3]=A,s.pivot[u*3]=S,s.pivot[u*3+1]=w,s.pivot[u*3+2]=y,s.stream[u*4]=0,s.stream[u*4+1]=0,s.stream[u*4+2]=0,s.stream[u*4+3]=0,s.aux[u*4]=0,s.aux[u*4+1]=T,s.aux[u*4+2]=x,s.aux[u*4+3]=0,s.look[u*4]=Math.round(Math.sqrt(Ze(I[0],0,1))*255),s.look[u*4+1]=Math.round(Math.sqrt(Ze(I[1],0,1))*255),s.look[u*4+2]=Math.round(Math.sqrt(Ze(I[2],0,1))*255),s.look[u*4+3]=Math.round(Math.sqrt(Ze(I[3],0,1))*255),a[u*2+1]=g,g>0&&(d=!0)}this.envDirty=d}snapshot(e,t,n,s,r){if(this.gpu&&this.gpuRead&&this._snapshotGpu(t,n,s,r))return;this._c||(this._c=new Float32Array(4));let a=ir(e),o=this.uniforms,l=this._c,c=o.uFlowTime.value,d=o.uGain.value;o.uFromTex.value>.5&&this.settle();let u=o.uScatter.value,h=o.uScatterTravel.value>.5,f=o.uScatterCenter.value;for(let g=0;g<s;g++){let v=this._evaluate(g,a),p=Vi[0],m=Vi[1],_=Vi[2],A=this.meta[g*2];if(o.uDissolve.value<.5){let E=Mp(v),R=this.meta[g*2+1]*(1-v)*(1-v);if(E+R>.001){let D=Qs(A*91.3458),F=Qs(A*47.853);Sp(p*.55,m*.55,_*.55,c,Ht);let I=(o.uFlowAmp.value*E+o.uCarry.value.x*R)*(.85+.3*F);p+=Ht[0]*I,m+=Ht[1]*I,_+=Ht[2]*I;let C=(o.uSwirl.value*E+o.uCarry.value.y*R)*(.8+.4*D),U=Math.cos(C),H=Math.sin(C),G=U*p-H*_,K=H*p+U*_;p=G,_=K;let N=1+.15*Math.min(1,E+R);l[0]*=N,l[1]*=N,l[2]*=N}}let S=d*Math.min(4,l[3]/.02+.25),w=l[0]*S,y=l[1]*S,T=l[2]*S,x=l[3]*rt.SIZE_MAX*o.uSizeScale.value;if(u>0){let E=this._star(g,a,Zy),R=1,D=0,F=0;if(h){let I=p-f.x,C=m-f.y,U=_-f.z,H=Math.sqrt(I*I+C*C+U*U),G=.45*(1-Ze(H/f.w,0,1))+.33*Jy(p,m,_)+.22*Qs(A*91.3458),K=Ze((u-ot.stagger*G)/(1-ot.stagger),0,1);Sp(p*.42+2.3,m*.42+2.3,_*.42+2.3,c,bi);let N=H>1e-4?I/H:0,V=H>1e-4?C/H:1,Y=H>1e-4?U/H:0,re=o.uScatterMotion.value,ee=(N*re.y+bi[0]*re.x)*f.w,Pe=(V*re.y+bi[1]*re.x)*f.w,Ce=(Y*re.y+bi[2]*re.x)*f.w,Le=vn(0,.62,K),J=vn(.42,1,K);p+=ee*Le+(E.x-p-ee)*J,m+=Pe*Le+(E.y-m-Pe)*J,_+=Ce*Le+(E.z-_-Ce)*J;let te=E.kept*vn(.5,.92,K);R=E.kept>.5?1-te:1-vn(.45,.95,K),D=te,F=te}else E.kept>.5&&u>=.5?(p=E.x,m=E.y,_=E.z,R=0,D=vn(.4,1,u),F=1):R=1-vn(0,.6,u);w=w*R+E.r*D,y=y*R+E.g*D,T=T*R+E.b*D,x+=(E.px*E.depth/o.uPixelScale.value-x)*F}t[g*3]=p,t[g*3+1]=m,t[g*3+2]=_,n[g*3]=w,n[g*3+1]=y,n[g*3+2]=T,r&&(r[g]=x)}}_snapshotGpu(e,t,n,s){try{let r=this.renderer,a=this.spareState,o=tr,l=Math.ceil(n/o),c=this.geometry.drawRange,d=c.start,u=c.count;this.geometry.setDrawRange(0,this.count),this.bakeUniforms.uSnapshot.value=1;let h=r.getRenderTarget();r.setRenderTarget(a),r.render(this.bakeScene,this.bakeCamera),r.setRenderTarget(h),this.bakeUniforms.uSnapshot.value=0,this.geometry.setDrawRange(d,u);let f=this.readBuffer&&this.readBuffer.length>=o*l*4?this.readBuffer:this.readBuffer=new Float32Array(o*l*4);r.readRenderTargetPixels(a,0,0,o,l,f,void 0,0);for(let g=0;g<n;g++)e[g*3]=f[g*4],e[g*3+1]=f[g*4+1],e[g*3+2]=f[g*4+2];r.readRenderTargetPixels(a,0,0,o,l,f,void 0,1);for(let g=0;g<n;g++)t[g*3]=f[g*4],t[g*3+1]=f[g*4+1],t[g*3+2]=f[g*4+2];if(s){r.readRenderTargetPixels(a,0,0,o,l,f,void 0,2);for(let g=0;g<n;g++)s[g]=f[g*4]}return!0}catch(r){return console.warn("Universe: GPU snapshot failed, using the CPU mirror",r),!1}}_star(e,t,n){let s=this.uniforms,r=(e^Hu)>>>0,a=()=>(r=Ky(r))>>>8;n.kept=a()/16777216<s.uScatterKeep.value?1:0;let o=a()/16777216,l=a()/16777216,c=a()/16777216,d=Math.pow(a()/16777216,ot.steep),u=a()/16777216;a();let h=1-c,f=1+Math.floor(h*(ot.drift-.001)),g=(Qs(o-t*(f/Ns))*2-1)*ot.margin,v=(l*2-1)*ot.margin,p=s.uScatterLook.value,m=s.uScatterRay.value,_=p.x*(ot.near+(ot.far-ot.near)*c),A=_*(g+m.z)/m.x,S=_*(v+m.w)/m.y,w=-_,y=s.uScatterFrame.value.elements;n.x=y[0]*A+y[4]*S+y[8]*w+y[12],n.y=y[1]*A+y[5]*S+y[9]*w+y[13],n.z=y[2]*A+y[6]*S+y[10]*w+y[14];let T=u<.55?s.uScatterTone0.value:u<.85?s.uScatterTone1.value:s.uScatterTone2.value,x=s.uScatterTone3.value,E=.45*c*(1-d),R=1-vn(1,ot.margin,Math.abs(g)),D=s.uScatterMotion.value.w+(1-s.uScatterMotion.value.w)*vn(ot.column,ot.column+.25,Math.abs(g)),F=p.y*(.08+.92*d)*(.6+.4*h)*R*D;return n.r=(T.x+(x.x-T.x)*E)*F,n.g=(T.y+(x.y-T.y)*E)*F,n.b=(T.z+(x.z-T.z)*E)*F,n.px=p.z+(p.w-p.z)*d,n.depth=_,n}_copy(e,t){e.pos.set(t.pos),e.look.set(t.look),e.spin.set(t.spin),e.pivot.set(t.pivot),e.stream.set(t.stream),e.aux.set(t.aux)}_upload(e){let t=this.geometry.attributes;if(e)for(let n of e)t[n].needsUpdate=!0;else for(let n in t)t[n].needsUpdate=!0}_swapSides(){let e=this.from;this.from=this.to,this.to=e;let t=this.geometry;for(let n=0;n<Vu.length;n++){let s=t.attributes[Vu[n]];t.setAttribute(Vu[n],t.attributes[Fc[n]]),t.setAttribute(Fc[n],s)}}markDirty(){this.uniforms.uFromTex.value>.5&&(this.uniforms.uFromTex.value=0,this.settle()),this._upload()}dispose(){if(this.overlay.removeFromParent(),this.geometry.dispose(),this.material.dispose(),this.ghostMaterial.dispose(),this.overlayMaterial.dispose(),this.states){for(let e of this.states)e.dispose();this.bakeMaterial.dispose()}}},Zy={x:0,y:0,z:0,r:0,g:0,b:0,px:0,depth:1,kept:0};function Ky(i){let e=Math.imul(i,747796405)+2891336453>>>0,t=Math.imul((e>>>(e>>>28)+4^e)>>>0,277803737)>>>0;return(t>>>22^t)>>>0}function Jy(i,e,t){return .5+.25*(Math.sin(1.9*i+1*e-1.4*t+1.6*Math.sin(-.9*i+1.5*e+.8*t+1))+Math.sin(.7*i-1.6*e+1.7*t+1.4*Math.sin(1.3*i+.6*e+1.4*t+2)))}function Sp(i,e,t,n,s){let r=zu,a=2.7*Math.cos(2.7*e+r[0]*n)-1.7*Math.cos(1.7*t+r[1]*n+2),o=2.1*Math.cos(2.1*t-r[2]*n)-1.9*Math.cos(1.9*i-r[3]*n+3),l=2.3*Math.cos(2.3*i+r[4]*n)-1.3*Math.cos(1.3*e+r[5]*n+1),c=(e+t)*1.9+4,d=(t-i)*1.9+4,u=(i+e)*1.9+4;return a+=.5*(3.1*Math.cos(3.1*d-r[6]*n)-2.6*Math.cos(2.6*u+r[7]*n)),o+=.5*(2.9*Math.cos(2.9*u+r[8]*n)-3.3*Math.cos(3.3*c-r[9]*n)),l+=.5*(2.4*Math.cos(2.4*c-r[10]*n)-2.8*Math.cos(2.8*d+r[11]*n)),s[0]=a*.16,s[1]=o*.16,s[2]=l*.16,s}var Ep=[0,0,0],sr=new Float64Array(6);function Ti(i,e=Ep){let t=i.rng()*2-1,n=i.rng()*qe,s=Math.sqrt(1-t*t);return e[0]=s*Math.cos(n),e[1]=t,e[2]=s*Math.sin(n),e}var Lt=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t],jy=Array.from({length:8},()=>[0,0,0]),Tp=0;function Ke(i,e,t){let n=jy[Tp=Tp+1&7];return n[0]=i[0]+(e[0]-i[0])*t,n[1]=i[1]+(e[1]-i[1])*t,n[2]=i[2]+(e[2]-i[2])*t,n}function ci(i,e,t,n,s=Ep){return s[0]=i[0]*e+i[1]*t+i[2]*n,s[1]=i[3]*e+i[4]*t+i[5]*n,s[2]=i[6]*e+i[7]*t+i[8]*n,s}function rr(i,e,t,n,s,r,a,o,l){Ni(sr,s,r,a);let c=Math.cos(l)*o,d=Math.sin(l)*o;return i[0]=e+sr[0]*c+sr[3]*d,i[1]=t+sr[1]*c+sr[4]*d,i[2]=n+sr[2]*c+sr[5]*d,i}function*Ap(i,{rMin:e=4.2,rMax:t=9.5,color:n=k.deep,brightness:s=.008,size:r=.016,flatten:a=.75,spin:o=.012}={}){let l=[0,0,0];for(;i.remaining>0;){i.tick()&&(yield),Ti(i,l);let c=e+(t-e)*Math.pow(i.rng(),.7),d=i.point(l[0]*c,l[1]*c*a,l[2]*c,n,s*(.4+i.rng()*1.2),r*(.7+i.rng()*.8));i.orbit(d,0,1,0,o),i.twinkle(d,.4)}}function Qi(i,e,t,n,s,r,a,o,l,c={}){for(let d=0;d<e;d++){let u=Math.abs(i.gauss()),h=i.point(t+i.gauss()*r,n+i.gauss()*r,s+i.gauss()*r,a,o*(c.falloff?Math.exp(-u*c.falloff)+.25:1)*(.6+i.rng()*.8),l*(.75+i.rng()*.6));c.spin&&i.orbit(h,i.rng()-.5,i.rng()-.5,i.rng()-.5,c.spin*(.5+i.rng()),t,n,s),c.twinkle&&i.twinkle(h,c.twinkle),c.evolve!==void 0&&i.evolve(h,c.evolve),c.anchor&&i.anchor(h,c.anchor[0],c.anchor[1],c.anchor[2])}}function Rp(i,e,t,n,s,r,a,o,l,c,d,u,h=.01){let f=r-t,g=a-n,v=o-s;for(let p=0;p<e;p++){let m=i.point(t+i.gauss()*h,n+i.gauss()*h,s+i.gauss()*h,l,c*(.6+i.rng()*.8),d*(.8+i.rng()*.5));i.flow(m,f,g,v,u*(.85+i.rng()*.3))}}var Qy=(i,e,t)=>{let n=Math.hypot(i,e,t);return[i/n,e/n,t/n]},xn={radius:.3,normal:Qy(.06,1,.16),disc:[.5,1.75]},Cp=Lt(k.white,k.ice,.5),Pp={id:"ch7",seed:2707,radius:2.9,center:[0,0,0],view:{yaw:0,pitch:.13},tint:It.deep,morph:"chapter",reading:{preview:.12,evolve:[0,1],mode:-1,dim:[1,.5],expand:[1,1.2]},*build(i){let e=new Float64Array(6),t=xn.normal;Ni(e,t[0],t[1],t[2]);let n=[0,0,0],s=i.quota(.16),[r,a]=xn.disc;for(let u=0;u<s;u++){i.tick()&&(yield);let h=Math.pow(i.rng(),1.7),f=r+(a-r)*h,g=i.rng()*qe,v=i.gauss()*.012*(1+3*h),p=Math.cos(g)*f,m=Math.sin(g)*f,_=e[0]*p+e[3]*m+t[0]*v,A=e[1]*p+e[4]*m+t[1]*v,S=e[2]*p+e[5]*m+t[2]*v,w=h<.25?Ke(k.iceHi,Cp,h*4):Ke(Cp,k.deep,Math.min(1,(h-.25)*1.6)),y=i.point(_,A,S,w,(.42-.3*h)*(.6+.6*i.rng()),.011+.008*i.rng());i.orbit(y,t[0],t[1],t[2],.62/Math.pow(f,1.5)),i.evolve(y,.08+.9*(.35+.65*h)*i.rng())}let o=Math.min(i.remaining,70);for(let u=0;u<o;u++){i.tick()&&(yield),Ti(i,n);let h=1.9+Math.pow(i.rng(),.8)*3.6,f=i.point(n[0]*h,n[1]*h*.55,n[2]*h,Ke(k.deep,k.ice,.15+.35*i.rng()),.45+.25*i.rng(),.022+.012*i.rng());i.twinkle(f,.7),i.flow(f,n[0]*.25,n[1]*.15,n[2]*.25,.025)}let l=i.quota(.42),c=[];for(let u=0;u<26;u++){i.tick()&&(yield),Ti(i,n);let h=2+i.rng()*4.4;c.push([n[0]*h,n[1]*h*.55,n[2]*h])}for(let u=0;u<l;u++){i.tick()&&(yield);let h=c[u%c.length],f=c[(u*7+3)%c.length],g=i.rng(),v=h[0]+(f[0]-h[0])*g+i.gauss()*.12,p=h[1]+(f[1]-h[1])*g+i.gauss()*.12,m=h[2]+(f[2]-h[2])*g+i.gauss()*.12,_=Math.sqrt(v*v+p*p+m*m)||1,A=i.point(v,p,m,Ke(k.deep,k.steel,i.rng()),.02+.03*i.rng(),.014+.008*i.rng());i.flow(A,v/_*.6,p/_*.6,m/_*.6,.03+.02*i.rng())}let d=i.quota(.08);for(let u=0;u<d;u++){i.tick()&&(yield);let h=u%9,f=h*2.39996,g=3.6+h%3*.9,v=Math.cos(f)*g*.55,p=Math.sin(h*1.7)*.9,m=-1.6-Math.abs(Math.sin(f))*g*.8,_=i.point(v+i.gauss()*.13,p+i.gauss()*.05,m+i.gauss()*.13,Ke(k.mist,k.steel,.4),.03+.03*i.rng(),.016);i.flow(_,v*.08,p*.08,m*.08,.02)}}};var en=32767,Nc=class{constructor(e,t){this.count=e,this.n=0,this.rng=ls(t),this.pos=new Float32Array(e*3),this.look=new Uint8Array(e*4),this.spin=new Int16Array(e*4),this.pivot=new Int16Array(e*3),this.stream=new Int16Array(e*4),this.aux=new Uint8Array(e*4),this.keys=null,this._spare=null,this._ticks=0}tick(){return(++this._ticks&1023)===0}*run(e,t,n){return yield*e.build(this),this.n<this.count&&(yield*(e.fill||n)(this)),yield*this.finalize(t)}get remaining(){return this.count-this.n}quota(e){return Math.max(0,Math.min(this.remaining,Math.round(this.count*e)))}gauss(){if(this._spare!==null){let s=this._spare;return this._spare=null,s}let e=0;for(;e===0;)e=this.rng();let t=this.rng(),n=Math.sqrt(-2*Math.log(e));return this._spare=n*Math.sin(qe*t),n*Math.cos(qe*t)}range(e,t){return e+(t-e)*this.rng()}point(e,t,n,s,r=1,a=.02){if(this.n>=this.count)return-1;let o=this.n++;this.pos[o*3]=e,this.pos[o*3+1]=t,this.pos[o*3+2]=n;let l=o*4;return this.look[l]=Math.round(Math.sqrt(Ze(s[0]*r,0,1))*255),this.look[l+1]=Math.round(Math.sqrt(Ze(s[1]*r,0,1))*255),this.look[l+2]=Math.round(Math.sqrt(Ze(s[2]*r,0,1))*255),this.look[l+3]=Math.round(Math.sqrt(Ze(a/rt.SIZE_MAX,0,1))*255),o}orbit(e,t,n,s,r,a=0,o=0,l=0){if(e<0||r===0)return;let c=Math.sqrt(t*t+n*n+s*s)||1,d=e*4;this.spin[d]=Math.round(t/c*en),this.spin[d+1]=Math.round(n/c*en),this.spin[d+2]=Math.round(s/c*en),this.spin[d+3]=Math.round(Ze(r/rt.SPIN_MAX,-1,1)*en);let u=e*3;this.pivot[u]=Math.round(Ze(a/rt.PIVOT_MAX,-1,1)*en),this.pivot[u+1]=Math.round(Ze(o/rt.PIVOT_MAX,-1,1)*en),this.pivot[u+2]=Math.round(Ze(l/rt.PIVOT_MAX,-1,1)*en)}anchor(e,t,n,s){if(e<0)return;let r=e*3;this.pivot[r]=Math.round(Ze(t/rt.PIVOT_MAX,-1,1)*en),this.pivot[r+1]=Math.round(Ze(n/rt.PIVOT_MAX,-1,1)*en),this.pivot[r+2]=Math.round(Ze(s/rt.PIVOT_MAX,-1,1)*en)}flow(e,t,n,s,r){if(e<0||r<=0)return;let a=e*4;this.stream[a]=Math.round(Ze(t/rt.STREAM_MAX,-1,1)*en),this.stream[a+1]=Math.round(Ze(n/rt.STREAM_MAX,-1,1)*en),this.stream[a+2]=Math.round(Ze(s/rt.STREAM_MAX,-1,1)*en),this.stream[a+3]=Math.max(1,Math.round(Ze(r/rt.RATE_MAX,0,1)*en))}evolve(e,t){e>=0&&(this.aux[e*4]=Math.round(Ze(t,0,1)*255))}twinkle(e,t){e>=0&&(this.aux[e*4+1]=Math.round(Ze(t,0,1)*255))}glint(e,t){e>=0&&(this.aux[e*4+2]=Math.round(Ze(t,0,1)*255))}key(e,t){e<0||(this.keys||(this.keys=new Float32Array(this.count).fill(-1)),this.keys[e]=t)}*finalize(e){for(;this.n<this.count;)this.point(0,0,0,i1,0,0);let t=this.count,n=65536,s=new Uint32Array(t),r=new Uint32Array(n+1),a=this.pos,o=this.keys;for(let u=0;u<t;u+=Os){let h=Math.min(t,u+Os);for(let f=u;f<h;f++){let g=o&&o[f]>=0?o[f]:Math.atan2(a[f*3],a[f*3+2])/qe+.5;g=Ze(g+(this.rng()-.5)*.004,0,.99999);let v=g*n|0;s[f]=v,r[v+1]++}yield}for(let u=1;u<=n;u++)r[u]+=r[u-1];let l=new Uint32Array(t);for(let u=0;u<t;u+=Os){let h=Math.min(t,u+Os);for(let f=u;f<h;f++)l[r[s[f]]++]=f;yield}let c={count:t,pos:new Float32Array(t*3),look:new Uint8Array(t*4),spin:new Int16Array(t*4),pivot:new Int16Array(t*3),stream:new Int16Array(t*4),aux:new Uint8Array(t*4)},d=new Uint32Array(t);for(let u=0;u<t;u+=Os){let h=Math.min(t,u+Os);for(let f=u;f<h;f++)d[f]=l[e[f]];yield}for(let u=0;u<t;u+=Os){let h=Math.min(t,u+Os);e1(c.pos,a,d,u,h),Lp(c.look,this.look,d,u,h,t),Ip(c.spin,this.spin,d,u,h),t1(c.pivot,this.pivot,d,u,h),Ip(c.stream,this.stream,d,u,h),Lp(c.aux,this.aux,d,u,h,t),yield}return c}},Os=8192;function e1(i,e,t,n,s){for(let r=n,a=n*3;r<s;r++,a+=3){let o=t[r]*3;i[a]=e[o],i[a+1]=e[o+1],i[a+2]=e[o+2]}}function t1(i,e,t,n,s){for(let r=n,a=n*3;r<s;r++,a+=3){let o=t[r]*3;i[a]=e[o],i[a+1]=e[o+1],i[a+2]=e[o+2]}}function Ip(i,e,t,n,s){for(let r=n,a=n*4;r<s;r++,a+=4){let o=t[r]*4;i[a]=e[o],i[a+1]=e[o+1],i[a+2]=e[o+2],i[a+3]=e[o+3]}}function Lp(i,e,t,n,s,r){let a=new Uint32Array(i.buffer,i.byteOffset,r),o=new Uint32Array(e.buffer,e.byteOffset,r);for(let l=n;l<s;l++)a[l]=o[t[l]]}var i1=[0,0,0],Dp=new Map;function Fp(i){let e=Dp.get(i);if(e)return e;e=new Uint32Array(i);for(let n=0;n<i;n++)e[n]=n;let t=ls(24301+i);for(let n=i-1;n>0;n--){let s=Math.floor(t()*(n+1)),r=e[n];e[n]=e[s],e[s]=r}return Dp.set(i,e),e}var yn={radius:2,matrix:cs(.1,0,-.27),spin:.05,nodeOrbit:{radius:2.95,matrix:cs(.36,0,-.12),speed:.012,phase:.42}},_n=[0,0,0],Oc=[0,0,0],Up={id:"cover",seed:1101,radius:3.15,center:[0,0,0],view:{yaw:0,pitch:.4},tint:It.deep,morph:"cover",reading:{preview:1},*build(i){let e=yn.matrix;ci(e,0,1,0,Oc);let t=[Oc[0],Oc[1],Oc[2]],n=(h,f,g,v,p,m)=>(ci(e,h,f,g,_n),i.point(_n[0],_n[1],_n[2],v,p,m)),s=26,r=i.quota(.64),a=.34,o=[];for(let h=0;h<s;h++)o.push([i.rng()*qe,2+Math.floor(i.rng()*4),.55+.85*i.rng()]);for(let h=0;h<r;h++){i.tick()&&(yield);let f=h%s,[g,v,p]=o[f],m=-1+2*(f+.5)/s+i.gauss()*.0035,_=i.rng()*qe,A=.35+1.5*_,S=yn.radius+.085*Math.cos(2*_+.5),w=.15*Math.sin(_+.7)+.045*Math.sin(3*_),y=a*(.86+.2*Math.sin(2*_+1.1)),T=m*y*Math.cos(A),x=m*y*Math.sin(A)*.8,E=i.gauss()*.0035,R=(S+T+E)*Math.cos(_),D=(S+T+E)*Math.sin(_),F=w+x+E,I=.35+.65*Math.pow(.5+.5*Math.cos(_-2.2),1.5),C=f===0||f===s-1?1.9:1,U=(.4+.6*Math.pow(Math.abs(m),4))*C,H=.45+.55*Math.pow(.5+.5*Math.sin(_*v+g),2),G=T<0?Math.min(1,-T/a):0,K=Ke(Ke(k.white,k.ice,.2+.4*(1-Math.abs(m))),k.iceHi,.4*G*I),N=i.rng()<1/140,V=n(R,F,D,K,(N?.9:.36)*I*U*H*p,N?.034:.0085+i.rng()*.006);if(i.orbit(V,t[0],t[1],t[2],yn.spin),i.rng()<.3){let Y=.22+i.rng()*.25;ci(e,-Math.sin(_)*Y,0,Math.cos(_)*Y,_n),i.flow(V,_n[0],_n[1],_n[2],.1+i.rng()*.12)}N&&i.twinkle(V,.8)}let l=i.quota(.03);for(let h=0;h<l;h++){i.tick()&&(yield);let f=h%7,g=i.rng()*qe,v=.42+.1*Math.sin(g*2+f)+f*.03,p=yn.radius+v*Math.cos(g*1.5+f),m=.15*Math.sin(g+.7)+v*.6*Math.sin(g*1.5+f*2),_=n(p*Math.cos(g),m,p*Math.sin(g),Ke(k.ice,k.steel,.4),.06*(.5+.5*Math.sin(g*3+f)),.009);i.orbit(_,t[0],t[1],t[2],yn.spin*.9)}let c=i.quota(.06);for(let h=0;h<c;h++){i.tick()&&(yield);let f=i.rng()*qe,g=yn.radius+i.gauss()*.16,v=n(g*Math.cos(f),.15*Math.sin(f+.7)+i.gauss()*.09,g*Math.sin(f),k.steel,.05+i.rng()*.05,.016+i.rng()*.012);i.orbit(v,t[0],t[1],t[2],yn.spin*.8)}let d=i.quota(.075);for(let h=0;h<d;h++){i.tick()&&(yield);let f=.1+1.45*Math.pow(i.rng(),.8),g=i.rng()*qe,v=Math.pow(1-f/1.6,2.2),p=Ke(k.steel,k.iceHi,v),m=n(f*Math.cos(g),i.gauss()*.02*f,f*Math.sin(g),p,.04+.16*v,.011+.01*i.rng());i.orbit(m,t[0],t[1],t[2],Math.min(1.6,.16/Math.pow(f,1.25))),ci(e,-Math.cos(g)*f*.35,0,-Math.sin(g)*f*.35,_n),i.flow(m,_n[0],_n[1],_n[2],.05+i.rng()*.05)}Qi(i,i.quota(.012),0,0,0,.035,k.ice,.55,.018,{spin:.6,falloff:1.2}),Qi(i,i.quota(.004),0,0,0,.012,k.iceHi,.9,.016,{spin:.9});let u=i.quota(.09);for(let h=0;h<u;h++){i.tick()&&(yield);let f=2.45+Math.pow(i.rng(),1.4)*2.4,g=i.rng()*qe,v=n(f*Math.cos(g),i.gauss()*.07,f*Math.sin(g),Ke(k.deep,k.ice,i.rng()*.4),.006+.016*i.rng()*(3.2/f),.012+.008*i.rng());i.orbit(v,t[0],t[1],t[2],.028)}}};var fo=(i,e,t)=>{let n=Math.hypot(i,e,t);return[i/n,e/n,t/n]};function Gu(){let i=[],e=[{p:[0,0,0],level:0}],t=[],n={c:[0,0,0],n:fo(.18,1,.32),r:2.05,level:1,w:.09},s={c:[0,0,0],n:fo(-.62,.55,.58),r:1.18,level:1,w:-.16};i.push(n,s);let r=[0,0,0],a=new Float64Array(6);for(let o=0;o<5;o++){let l=o/5*qe+.3;rr(r,0,0,0,n.n[0],n.n[1],n.n[2],n.r,l);let c=[r[0],r[1],r[2]],d=e.push({p:c,level:1})-1;t.push([0,d]),Ni(a,n.n[0],n.n[1],n.n[2]);let u=-Math.sin(l)*a[0]+Math.cos(l)*a[3],h=-Math.sin(l)*a[1]+Math.cos(l)*a[4],f=-Math.sin(l)*a[2]+Math.cos(l)*a[5],g=fo(u+.25*n.n[0],h+.25*n.n[1],f+.25*n.n[2]),v=.58,p=fo(c[0],c[1],c[2]),m=[c[0]+p[0]*v*.92,c[1]+p[1]*v*.92,c[2]+p[2]*v*.92];i.push({c:m,n:g,r:v,level:2,w:.42*(o%2?1:-1)});for(let _=0;_<3;_++){let A=_/3*qe+o;rr(r,m[0],m[1],m[2],g[0],g[1],g[2],v,A);let S=[r[0],r[1],r[2]],w=e.push({p:S,level:2})-1;t.push([d,w]);let y=fo(Math.sin(o*3+_),Math.cos(o+_*2),Math.sin(_*5+1));i.push({c:S,n:y,r:.17,level:3,w:1.15*(_%2?1:-1)})}}for(let o=0;o<3;o++){rr(r,0,0,0,s.n[0],s.n[1],s.n[2],s.r,o/3*qe+.9);let l=e.push({p:[r[0],r[1],r[2]],level:1})-1;t.push([0,l]),t.push([l,1+o*2%5*4])}for(let o=0;o<5;o++)t.push([1+o*4,1+(o+2)%5*4]);return{loops:i,nodes:e,links:t}}var Np={id:"ch1",seed:2101,radius:3.2,center:[0,0,0],view:{yaw:0,pitch:.26},tint:It.ice,morph:"chapter",reading:{preview:.7},compose:{contents:{wide:{scale:.93}}},*build(i){let{loops:e,nodes:t,links:n}=Gu(),s=[0,0,0],r=[k.white,k.ice,Lt(k.ice,k.white,.5),Lt(k.iceHi,k.white,.35)],a=e.reduce((u,h)=>u+h.r*(h.level===1?1.5:1),0),o=i.quota(.56);for(let u of e){let h=Math.round(o*u.r*(u.level===1?1.5:1)/a),f=u.level===1?23:u.level===2?9:4,g=u.level===1?.022:u.level===2?.015:.009;for(let v=0;v<h;v++){i.tick()&&(yield);let p=0;for(let _=0;_<6&&(p=i.rng()*qe,!(i.rng()<.22+.78*Math.pow(.5+.5*Math.sin(p*f),3)));_++);rr(s,u.c[0],u.c[1],u.c[2],u.n[0],u.n[1],u.n[2],u.r+i.gauss()*g,p);let m=i.point(s[0]+i.gauss()*g*.4,s[1]+i.gauss()*g*.4,s[2]+i.gauss()*g*.4,r[u.level],(u.level===3?.3:.2)*(.5+i.rng()*.9),.01+i.rng()*.009);i.orbit(m,u.n[0],u.n[1],u.n[2],u.w,u.c[0],u.c[1],u.c[2])}}Qi(i,i.quota(.025),0,0,0,.06,k.white,.34,.016,{falloff:1.6,spin:.5}),Qi(i,i.quota(.006),0,0,0,.03,k.iceHi,.9,.02,{spin:.8});let l=i.quota(.075)/(t.length-1);for(let u=1;u<t.length;u++){yield;let h=t[u];Qi(i,Math.round(l*(h.level===1?1.7:.75)),h.p[0],h.p[1],h.p[2],h.level===1?.036:.022,k.white,.3,.014,{falloff:1.4,twinkle:.3})}let c=i.quota(.17)/n.length;for(let[u,h]of n){yield;let f=t[u].p,g=t[h].p,v=t[h].level,p=v===2?.55:.3;Rp(i,Math.round(c*(v===2?.7:1.3)),f[0],f[1],f[2],g[0],g[1],g[2],Ke(k.white,k.ice,.4),.32,.016,p,.012)}let d=i.quota(.1);for(let u=0;u<d;u++){i.tick()&&(yield);let h=.5+Math.pow(i.rng(),.6)*2.8,f=i.rng()*2-1,g=i.rng()*qe,v=Math.sqrt(1-f*f),p=i.point(h*v*Math.cos(g),h*f*.7,h*v*Math.sin(g),Ke(k.deep,k.ice,i.rng()*.6),.006+.014*i.rng(),.01+i.rng()*.008);i.orbit(p,.18,1,.32,.04),i.twinkle(p,.9)}}};var po={matrix:cs(0,.62,0),layers:[-.92,0,.92],half:1.5,rackCols:[-.72,.72],rackRows:[-1.1,-.55,0,.55,1.1],rack:{w:.9,h:.46,d:.3}},Mn=[0,0,0],Op={id:"ch2",seed:2202,radius:2.55,center:[0,.05,0],view:{yaw:0,pitch:.5},tint:It.ice,morph:"chapter",reading:{preview:.6},*build(i){let e=po.matrix,t=(I,C,U,H,G,K)=>(ci(e,I,C,U,Mn),i.point(Mn[0],Mn[1],Mn[2],H,G,K)),n=(I,C,U,H,G)=>{ci(e,C,U,H,Mn),i.flow(I,Mn[0],Mn[1],Mn[2],G)},{layers:s,rackCols:r,rackRows:a,rack:o,half:l}=po,c=[];for(let I of s)for(let C of r)for(let U of a)C>0&&U===0&&I===0||c.push([C,I,U]);let d=i.quota(.3),u=Math.floor(d/c.length),{w:h,h:f,d:g}=o,v=[];for(let I of[-1,1])for(let C of[-1,1])v.push([[I*h/2,0,C*g/2],[I*h/2,f,C*g/2]]);for(let I of[0,f])for(let C of[-1,1])v.push([[-h/2,I,C*g/2],[h/2,I,C*g/2]]);for(let I of[0,f])for(let C of[-1,1])v.push([[C*h/2,I,-g/2],[C*h/2,I,g/2]]);let p=v.map(([I,C])=>Math.hypot(C[0]-I[0],C[1]-I[1],C[2]-I[2])),m=p.reduce((I,C)=>I+C,0);for(let[I,C,U]of c)for(let H=0;H<u;H++){i.tick()&&(yield);let G=i.rng()*m,K=0;for(;G>p[K]&&K<v.length-1;)G-=p[K++];let[N,V]=v[K],Y=i.rng(),re=t(I+N[0]+(V[0]-N[0])*Y,C+N[1]+(V[1]-N[1])*Y,U+N[2]+(V[2]-N[2])*Y,Ke(k.white,k.ice,.5),.14+.08*i.rng(),.011+.006*i.rng());i.twinkle(re,.05)}let _=i.quota(.17),A=.042;for(let I=0;I<_;I++){i.tick()&&(yield);let[C,U,H]=c[Math.floor(i.rng()*c.length)],G=i.rng(),K,N,V,Y=(re,ee)=>Math.round(re/A)*A-ee%A/2;G<.5?(K=C-Math.sign(C)*h/2,N=Math.min(f,Math.max(0,Y(i.rng()*f,f))),V=Math.max(-g/2,Math.min(g/2,Y((i.rng()-.5)*g,g)))):G<.8?(K=Math.max(-h/2,Math.min(h/2,Y((i.rng()-.5)*h,h)))+C,N=f,V=Math.max(-g/2,Math.min(g/2,Y((i.rng()-.5)*g,g)))):(K=Math.max(-h/2,Math.min(h/2,Y((i.rng()-.5)*h,h)))+C,N=Math.min(f,Math.max(0,Y(i.rng()*f,f))),V=(i.rng()<.5?-1:1)*g/2),t(K,U+N,H+V,k.steel,.05+.05*i.rng(),.011)}let S=i.quota(.05);for(let I=0;I<S;I++){i.tick()&&(yield);let[C,U,H]=c[Math.floor(i.rng()*c.length)],G=i.rng()<.08,K=Math.round(i.rng()*9)/9*f*.9+f*.05,N=Math.round((i.rng()-.5)*6)/6*g*.85,V=t(C-Math.sign(C)*(h/2+.006),U+K,H+N,G?k.iceHi:k.ice,G?.8:.45,.014);i.twinkle(V,1)}let w=i.quota(.07),y=.15,T=Math.round(2*l/y);for(let I=0;I<w;I++){i.tick()&&(yield);let C=s[Math.floor(i.rng()*s.length)]-.02,U=-l+Math.floor(i.rng()*(T+1))*y,H=-l+Math.floor(i.rng()*(T+1))*y;t(U,C,H,k.deep,.05+.03*i.rng(),.012)}let x=i.quota(.025);for(let I=0;I<x;I++){i.tick()&&(yield);let C=(I&1?1:-1)*l,U=(I&2?1:-1)*l;t(C,-.94+i.rng()*1.9,U,k.steel,.1,.012)}let E=i.quota(.03);for(let I=0;I<E;I++){i.tick()&&(yield);let C=s[I%3],U=i.rng()*qe,H=.13+i.gauss()*.006,G=t(H*Math.cos(U),C+.02+i.gauss()*.006,H*Math.sin(U),k.iceHi,.6,.014);ci(e,0,1,0,Mn),i.orbit(G,Mn[0],Mn[1],Mn[2],.6)}let R=i.quota(.08);for(let I=0;I<R;I++){i.tick()&&(yield);let C=s[I%3]+.03,U=i.rng()<.5?-1:1,H=.15+Math.pow(i.rng(),1.6)*.6,G=1-H/.75,K=t(i.gauss()*.035,C+Math.abs(i.gauss())*.02,U*H,Ke(k.ice,k.iceHi,G*G),.16+.36*G,.013);n(K,0,0,-U*.07,.05+.04*i.rng())}let D=i.quota(.1);for(let I=0;I<D;I++){i.tick()&&(yield);let C=s[I%3]+.03,U=i.rng()<.5?-1:1,H;if(i.rng()<.6)H=t(i.gauss()*.012,C,U*l,k.white,.26,.013),n(H,0,0,-U*(l-.72),.22+.08*i.rng());else{let G=(a[Math.floor(i.rng()*4)]+.275)*1,K=i.rng()<.5?-1:1;H=t(K*l,C,G,k.ice,.22,.012),n(H,-K*l,0,0,.16+.06*i.rng())}}let F=i.quota(.05);for(let I=0;I<F;I++){i.tick()&&(yield);let C=t(i.gauss()*.02,-.95,i.gauss()*.02,Ke(k.iceHi,k.white,i.rng()*.6),.26,.012);n(C,0,2.4,0,.12+.04*i.rng())}}};var Wu=.62,Bp=cs(.42,-.18,.28),n1=[0,0,0];function ds(i,e=n1){let t=i*qe,n=2+Math.cos(3*t);return ci(Bp,n*Math.cos(2*t)*Wu,n*Math.sin(2*t)*Wu,Math.sin(3*t)*Wu,e)}function Xu(i,e){let n=ds(i-1e-4,[0,0,0]),s=ds(i+1e-4,[0,0,0]),r=s[0]-n[0],a=s[1]-n[1],o=s[2]-n[2],l=Math.sqrt(r*r+a*a+o*o);r/=l,a/=l,o/=l;let c=ci(Bp,0,0,1,[0,0,0]),d=a*c[2]-o*c[1],u=o*c[0]-r*c[2],h=r*c[1]-a*c[0],f=Math.sqrt(d*d+u*u+h*h)||1;return d/=f,u/=f,h/=f,e[0]=r,e[1]=a,e[2]=o,e[3]=d,e[4]=u,e[5]=h,e[6]=a*h-o*u,e[7]=o*d-r*h,e[8]=r*u-a*d,e[9]=l/(2*1e-4),e}var Qr=[.04,.2,.37,.53,.7,.87],jr=.8,kp={id:"ch3",seed:2303,radius:2.55,center:[0,0,0],view:{yaw:0,pitch:.22},tint:It.deep,morph:"chapter",reading:{preview:1,evolve:[.42,1],mode:1},*build(i){let e=new Float64Array(10),t=[0,0,0],n=5,s=.12,r=i.quota(.52);for(let h=0;h<r;h++){i.tick()&&(yield);let f=h%n,g=i.rng();Xu(g,e),ds(g,t);let v=f/n*qe+g*qe*2,p=s*(.92+i.rng()*.16),m=(e[3]*Math.cos(v)+e[6]*Math.sin(v))*p,_=(e[4]*Math.cos(v)+e[7]*Math.sin(v))*p,A=(e[5]*Math.cos(v)+e[8]*Math.sin(v))*p,S=i.rng()<.012,w=i.point(t[0]+m,t[1]+_,t[2]+A,S?k.white:Ke(k.white,k.ice,.3+.4*(f/n)),S?.85:.19+.12*i.rng(),S?.042:.012+.008*i.rng()),y=.16;i.flow(w,e[0]*y,e[1]*y,e[2]*y,.32+.06*(f%2)),g>jr&&i.evolve(w,.42+(g-jr)/(1-jr)*.56),i.key(w,g)}let a=i.quota(.08);for(let h=0;h<a;h++){i.tick()&&(yield);let f=i.rng();ds(f,t),Xu(f,e);let g=i.point(t[0]+i.gauss()*.03,t[1]+i.gauss()*.03,t[2]+i.gauss()*.03,k.steel,.07,.016);i.flow(g,e[0]*.1,e[1]*.1,e[2]*.1,.2),f>jr&&i.evolve(g,.42+(f-jr)/(1-jr)*.56),i.key(g,f)}let o=i.quota(.07),l=i.quota(.2),c=[];Qr.forEach((h,f)=>{ds(h,t),Xu(h,e);let g=[t[0],t[1],t[2]];Qi(i,Math.round(o/Qr.length),g[0],g[1],g[2],.06,k.iceHi,.32,.018,{falloff:1.1,twinkle:.4});let v=f%2?1:-1,p=.3+.06*(f%3),m=[g[0]+e[3]*v*(p+.1),g[1]+e[4]*v*(p+.1),g[2]+e[5]*v*(p+.1)],_=[e[6],e[7],e[8]];if(c.push({c:m,n:_,r:p,w:.55*v}),f%2===0){let A=[m[0]+e[3]*v*(p+.18),m[1]+e[4]*v*(p+.18),m[2]+e[5]*v*(p+.18)];c.push({c:A,n:[e[0],e[1],e[2]],r:.15,w:-1.1*v})}});let d=c.reduce((h,f)=>h+f.r,0);for(let h of c){let f=Math.round(l*h.r/d);for(let g=0;g<f;g++){i.tick()&&(yield),rr(t,h.c[0],h.c[1],h.c[2],h.n[0],h.n[1],h.n[2],h.r+i.gauss()*.012,i.rng()*qe);let v=i.point(t[0],t[1],t[2],Ke(k.ice,k.deep,.3),.26+.14*i.rng(),.012+.006*i.rng());i.orbit(v,h.n[0],h.n[1],h.n[2],h.w,h.c[0],h.c[1],h.c[2])}}let u=i.quota(.04);for(let h=0;h<u;h++){i.tick()&&(yield),ds(Qr[h%Qr.length],t);let f=i.point(t[0]+i.gauss()*.22,t[1]+i.gauss()*.22,t[2]+i.gauss()*.22,k.iceHi,.13,.012);i.twinkle(f,1),i.glint(f,.25)}}};var Bs={a:.19,matrix:cs(.55,.62,.18),spin:.045,axis:[0,1,0]};function qu(){let i=new Map,e=(s,r,a)=>i.set(`${s},${r},${a}`,[s,r,a]);for(let s=-4;s<=4;s++)for(let r=-4;r<=4;r++)for(let a=-4;a<=4;a++)Math.abs(s)+Math.abs(r)+Math.abs(a)<=3&&e(s,r,a);let t=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];for(let s of t){let r=t.filter(a=>a[0]*s[0]+a[1]*s[1]+a[2]*s[2]===0);for(let a=1;a<=11;a++){let o=a<5?1:0;for(let l=-o;l<=o;l++)for(let c=-o;c<=o;c++){if(Math.abs(l)+Math.abs(c)>o)continue;let d=r[0],u=r[2];e(s[0]*a+d[0]*l+u[0]*c,s[1]*a+d[1]*l+u[1]*c,s[2]*a+d[2]*l+u[2]*c)}if(a===4||a===7||a===9){let l=a===4?5:a===7?3:2;for(let c of r)for(let d=1;d<=l;d++)e(s[0]*a+c[0]*d,s[1]*a+c[1]*d,s[2]*a+c[2]*d)}}}let n=[...i.values()];return n.sort((s,r)=>Math.hypot(...s)-Math.hypot(...r)),n}function mo(i,e){let t=Bs.a;return ci(Bs.matrix,i[0]*t,i[1]*t,i[2]*t,e)}var zp={id:"ch4",seed:2404,radius:2.45,center:[0,0,0],view:{yaw:0,pitch:.28},tint:It.ice,morph:"chapter",reading:{preview:.92,evolve:[.74,1],mode:1},*build(i){let e=qu(),t=Math.hypot(11,1,0),n=[0,0,0],s=[0,0,0],r=Bs.axis,a=i.quota(.6),o=Math.max(3,Math.floor(a/e.length));for(let u of e){mo(u,n);let h=Math.hypot(u[0],u[1],u[2])/t,f=Math.min(.97,.04+h*.92),g=Lt(k.iceHi,Lt(k.white,k.ice,.55),Math.min(1,h*2.4));for(let v=0;v<o;v++){i.tick()&&(yield);let p=v<o*.4,m=p?.008:.026,_=i.point(n[0]+i.gauss()*m,n[1]+i.gauss()*m,n[2]+i.gauss()*m,g,p?.42:.035,p?.012:.01);i.orbit(_,r[0],r[1],r[2],Bs.spin),i.evolve(_,f)}}let l=i.quota(.14),c=e.slice(Math.floor(e.length*.45));for(let u=0;u<l;u++){i.tick()&&(yield);let h=c[Math.floor(i.rng()*c.length)];mo(h,n),Ti(i,s);let f=.25+i.rng()*.35,g=i.point(n[0]+s[0]*f,n[1]+s[1]*f,n[2]+s[2]*f,Ke(k.ice,k.white,i.rng()),.12,.01);i.flow(g,-s[0]*f,-s[1]*f,-s[2]*f,.22+.15*i.rng()),i.orbit(g,r[0],r[1],r[2],Bs.spin)}Qi(i,i.quota(.012),0,0,0,.04,k.iceHi,.7,.02,{falloff:1.2});let d=i.quota(.18);for(let u=0;u<d;u++){i.tick()&&(yield),Ti(i,s);let h=1+Math.pow(i.rng(),.7)*2.6,f=i.point(s[0]*h,s[1]*h*.85,s[2]*h,Ke(k.steel,k.deep,i.rng()),.012+.018*i.rng(),.011+.006*i.rng());i.orbit(f,i.rng()-.5,1,i.rng()-.5,.05+.08*i.rng()),i.twinkle(f,.5)}}};var ea=.5,Hp={id:"ch5",seed:2505,radius:2.7,center:[0,0,0],view:{yaw:0,pitch:.3},tint:It.ice,morph:"chapter",reading:{preview:.9,evolve:[.7,1],mode:1},*build(i){let e=new Float64Array(6),t=[0,0,0],n=[[.06,1,.12],[.92,.5,.18],[-.62,.55,.62],[.25,.32,-.95],[-.88,.25,-.35],[.5,-.32,.82],[0,.2,1]],s=[];for(let u=0;u<84;u++){i.tick()&&(yield);let h=n[u%n.length],f=h[0]+i.gauss()*.07,g=h[1]+i.gauss()*.07,v=h[2]+i.gauss()*.07,p=Math.hypot(f,g,v),m=.82+Math.pow(i.rng(),.9)*1.45;s.push({n:[f/p,g/p,v/p],r:m,dir:i.rng()<.8?1:-1,trains:1+Math.floor(i.rng()*4),phase:i.rng()*qe,weight:.6+i.rng()*.8})}let r=i.quota(.5),a=s.reduce((u,h)=>u+h.weight*h.r,0);for(let u of s){let h=Math.round(r*u.weight*u.r/a);Ni(e,u.n[0],u.n[1],u.n[2]);for(let f=0;f<h;f++){i.tick()&&(yield);let g=0;for(let E=0;E<5&&(g=i.rng()*qe,!(i.rng()<.25+.75*Math.pow(.5+.5*Math.cos(g*u.trains+u.phase),2)));E++);let v=u.r+i.gauss()*.006,p=Math.cos(g)*v,m=Math.sin(g)*v,_=i.gauss()*.006,A=e[0]*p+e[3]*m+u.n[0]*_,S=e[1]*p+e[4]*m+u.n[1]*_,w=e[2]*p+e[5]*m+u.n[2]*_,y=Math.pow(.9/u.r,2),T=i.rng()<.05,x=i.point(A,S,w,Ke(Ke(k.ice,k.deep,.25),k.iceHi,Math.min(1,y)*.75),T?.5:(.12+.14*i.rng())*(.7+.5*y),T?.016:.0075+.005*i.rng());i.orbit(x,u.n[0],u.n[1],u.n[2],u.dir*.3/Math.pow(u.r,1.5)),i.evolve(x,.2+i.rng()*.78),T&&i.glint(x,1)}}let o=i.quota(.2);for(let u=0;u<o;u++){i.tick()&&(yield),Ti(i,t);let h=t[0],f=t[1],g=t[2];Ni(e,h,f,g);let v=.8+Math.pow(i.rng(),.7)*1.6,p=i.rng()*qe,m=Math.cos(p)*v,_=Math.sin(p)*v,A=i.point(e[0]*m+e[3]*_,e[1]*m+e[4]*_,e[2]*m+e[5]*_,Ke(k.white,k.ice,.5),.07+.08*i.rng(),.007+.004*i.rng());i.orbit(A,h,f,g,.3/Math.pow(v,1.5)),i.evolve(A,.2+i.rng()*.78),i.twinkle(A,.3)}let l=i.quota(.05);for(let u=0;u<l;u++){i.tick()&&(yield),Ti(i,t);let h=ea*(1.02+Math.abs(i.gauss())*.08),f=i.point(t[0]*h,t[1]*h,t[2]*h,Ke(k.iceHi,k.ice,i.rng()*.6),.18,.016);i.orbit(f,0,1,0,.12),i.twinkle(f,.6)}let c=i.quota(.06);for(let u=0;u<c;u++){i.tick()&&(yield),Ti(i,t);let h=ea*1.15,f=.8+i.rng()*1.6,g=i.point(t[0]*h,t[1]*h,t[2]*h,Ke(k.ice,k.deep,i.rng()),.05,.012);i.flow(g,t[0]*f,t[1]*f,t[2]*f,.06+.06*i.rng())}let d=i.quota(.08);for(let u=0;u<d;u++){i.tick()&&(yield);let h=2.7+Math.pow(i.rng(),1.3)*2.2,f=i.rng()*qe,g=i.point(h*Math.cos(f),i.gauss()*.12,h*Math.sin(f),k.deep,.012+.014*i.rng(),.012);i.orbit(g,.05,1,.1,.34/Math.pow(h,1.5))}}};var Yu=(i,e,t)=>{let n=Math.hypot(i,e,t);return[i/n,e/n,t/n]},Kn=[{c:[-2.05,.32,-.35],n:Yu(.32,1,.5),r:1.3,w:.07,kind:"bright",share:.4,arms:2,pitch:.27,bulge:.2,spread:.13,beads:0},{c:[2.1,-.28,.32],n:Yu(-.55,.62,.72),r:1.15,w:-.08,kind:"deep",share:.36,arms:3,pitch:.42,bulge:.07,spread:.24,beads:1},{c:[.35,1.45,-1.7],n:Yu(.1,.6,1),r:.42,w:.12,kind:"faint",share:.05,arms:2,pitch:.32,bulge:.14,spread:.18,beads:0}],go={bright:{core:k.iceHi,arm:Lt(k.white,k.iceHi,.4),outer:Lt(k.white,k.steel,.35),disc:Lt(k.white,k.steel,.55),knot:k.iceHi,br:1.15,glow:.62},deep:{core:k.ice,arm:Lt(k.ice,k.deep,.22),outer:Lt(k.deep,k.ice,.25),disc:Lt(k.deep,k.mist,.35),knot:k.ice,br:.82,glow:.42},faint:{core:k.white,arm:k.steel,outer:k.steel,disc:k.mist,knot:k.white,br:.8,glow:.34}},Bc=[[0,1],[1,0],[0,2],[2,1]],Vp={id:"ch6",seed:2606,radius:3.05,center:[0,.1,0],view:{yaw:0,pitch:.24},tint:It.deep,morph:"chapter",reading:{preview:.35,spread:[0,.3]},compose:{chapter:{wide:{cx:.7,scale:.8}},contents:{wide:{scale:.86}}},*build(i){let e=new Float64Array(6),t=i.count;for(let r of Kn){Ni(e,r.n[0],r.n[1],r.n[2]);let a=Math.round(t*r.share),o=go[r.kind],l=Math.tan(r.pitch),c=r.kind==="bright";for(let d=0;d<a;d++){i.tick()&&(yield);let u=i.rng(),h,f,g,v,p,m;if(u<r.bulge)h=Math.abs(i.gauss())*r.r*(c?.16:.11),f=i.rng()*qe,g=i.gauss()*r.r*(c?.09:.06),v=o.core,p=(.3+.3*i.rng())*o.br,m=.014;else if(u<r.bulge+.64){let x=0,E=0;for(let D=0;D<5&&(x=Math.pow(i.rng(),.75),!(!r.beads||(E=Math.pow(.5+.5*Math.sin(x*29+d%r.arms*2.1),6),i.rng()<.3+.7*E)));D++);h=r.r*(.12+.88*x),f=d%r.arms/r.arms*qe+Math.log(h/(r.r*.12))/l+i.gauss()*r.spread*(.6+x),g=i.gauss()*.03,v=Ke(o.core,Ke(o.arm,o.outer,x*x),Math.min(1,x*1.3)),p=(.12+.2*i.rng())*(1.15-x*.55)*o.br,m=.011+.008*i.rng(),r.beads&&E>.6&&(v=Ke(v,o.knot,.7),p*=1.6),i.rng()<.03&&(p=.6*o.br,m=.024)}else h=r.r*Math.pow(i.rng(),.6),f=i.rng()*qe,g=i.gauss()*.05,v=o.disc,p=(.04+.05*i.rng())*o.br,m=.013;let _=Math.cos(f)*h,A=Math.sin(f)*h,S=r.c[0]+e[0]*_+e[3]*A+r.n[0]*g,w=r.c[1]+e[1]*_+e[4]*A+r.n[1]*g,y=r.c[2]+e[2]*_+e[5]*A+r.n[2]*g,T=i.point(S,w,y,v,p,m);i.orbit(T,r.n[0],r.n[1],r.n[2],r.w,r.c[0],r.c[1],r.c[2]),i.twinkle(T,.12)}}let n=i.quota(.06);for(let r=0;r<n;r++){i.tick()&&(yield);let[a,o]=Bc[r%Bc.length],l=Kn[a].c,c=Kn[o].c,d=c[0]-l[0],u=c[1]-l[1],h=c[2]-l[2],f=.012,g=i.point(l[0]+i.gauss()*f,l[1]+i.gauss()*f,l[2]+i.gauss()*f,go[Kn[a].kind].knot,.12+.16*i.rng(),.011);i.flow(g,d,u,h,.045+.01*i.rng()),i.anchor(g,(l[0]+c[0])/2,(l[1]+c[1])/2,(l[2]+c[2])/2)}let s=i.quota(.08);for(let r=0;r<s;r++){i.tick()&&(yield);let a=i.rng(),o=-2.6+5.2*a+i.gauss()*.6,l=i.point(o,i.gauss()*.7,i.gauss()*.8,Ke(k.steel,k.deep,a),.012+.015*i.rng(),.016);i.anchor(l,o*.5,0,0),i.twinkle(l,.5)}}};var s1=(i,e,t)=>{let n=Math.hypot(i,e,t);return[i/n,e/n,t/n]},vo={normal:s1(.12,1,.28),arms:7,rMax:2.78},Gp={id:"ch8",seed:2808,radius:2.85,center:[0,0,0],view:{yaw:0,pitch:.5},tint:It.deep,morph:"chapter",reading:{preview:.3,expand:[1,.82]},compose:{chapter:{wide:{cx:.75,scale:.8}}},*build(i){let e=new Float64Array(6),t=vo.normal;Ni(e,t[0],t[1],t[2]);let n=[0,0,0],s=.27,r=i.quota(.62);for(let l=0;l<r;l++){i.tick()&&(yield);let c=l%vo.arms,d=(l>>3)%5,u=Math.pow(i.rng(),.7),h=.06+vo.rMax*u,f=Math.log(h/.06)/Math.tan(s)*.42,g=c/vo.arms*qe+f+(d-2)*.016*(.5+u)+i.gauss()*.0035*(.4+u),v=i.gauss()*.006*(.4+u)+Math.sin(g*2+c)*.07*u,p=Math.cos(g),m=Math.sin(g),_=(e[0]*p+e[3]*m)*h+t[0]*v,A=(e[1]*p+e[4]*m)*h+t[1]*v,S=(e[2]*p+e[5]*m)*h+t[2]*v,w=Math.pow(1-u,2.4),y=Ke(Ke(k.white,k.ice,.45*u),k.iceHi,w*.9),T=i.point(_,A,S,y,(.16+.14*i.rng())*(.45+1.1*w)*(1.15-.7*u),.0075+.005*i.rng()),x=.42/Math.tan(s),E=.08+h*.07,R=-p+x*m,D=-m-x*p,F=Math.sqrt(R*R+D*D);i.flow(T,(e[0]*R+e[3]*D)/F*E,(e[1]*R+e[4]*D)/F*E,(e[2]*R+e[5]*D)/F*E,.16+.1*i.rng()),i.orbit(T,t[0],t[1],t[2],.07)}let a=i.quota(.1);for(let l=0;l<a;l++){i.tick()&&(yield);let c=.2+Math.pow(i.rng(),.8)*vo.rMax,d=i.rng()*qe,u=Math.cos(d),h=Math.sin(d),f=i.point((e[0]*u+e[3]*h)*c,(e[1]*u+e[4]*h)*c+i.gauss()*.05,(e[2]*u+e[5]*h)*c,Ke(k.deep,k.ice,.3),.02+.02*i.rng(),.01);i.flow(f,-(e[0]*u+e[3]*h)*c*.3,-(e[1]*u+e[4]*h)*c*.3,-(e[2]*u+e[5]*h)*c*.3,.06),i.orbit(f,t[0],t[1],t[2],.08)}let o=i.quota(.12);for(let l=0;l<o;l++){i.tick()&&(yield),Ti(i,n);let c=2.6+i.rng()*2.4,d=i.point(n[0]*c,n[1]*c*.8,n[2]*c,Ke(k.deep,k.ice,i.rng()*.4),.012+.02*i.rng(),.011);i.flow(d,-n[0]*c*.4,-n[1]*c*.32,-n[2]*c*.4,.04+.03*i.rng())}Qi(i,i.quota(.014),0,0,0,.04,k.ice,.3,.012,{falloff:1.5,spin:1.2,twinkle:.8}),Qi(i,i.quota(.004),0,0,0,.012,k.iceHi,.7,.012,{spin:1.6,twinkle:.5})}};var ia={yaw:0,pitch:.2},ta=[Math.sin(ia.yaw)*Math.cos(ia.pitch),Math.sin(ia.pitch),Math.cos(ia.yaw)*Math.cos(ia.pitch)],r1=.87,Wp={id:"seed",seed:2909,radius:1.9,center:[0,0,0],view:ia,tint:It.ice,morph:"seed",reading:{preview:1},compose:{reading:{wide:{scale:.37}}},*build(i){let e=[0,0,0],t=i.quota(.46);for(let u=0;u<t;u++){i.tick()&&(yield),Ti(i,e);let h=Math.abs(i.gauss())*.09*(.6+.4*i.rng()),f=Math.exp(-h*18),g=i.point(e[0]*h,e[1]*h,e[2]*h,Ke(k.ice,k.iceHi,.25+.75*f),.008+.022*f,.01);i.orbit(g,i.rng()-.5,i.rng()-.5,i.rng()-.5,.4+1.2*i.rng())}let n=i.quota(.18);for(let u=0;u<n;u++){i.tick()&&(yield),Ti(i,e);let h=.1+Math.abs(i.gauss())*.22,f=i.point(e[0]*h,e[1]*h,e[2]*h,Ke(k.ice,k.deep,i.rng()*.5),.012+.016*i.rng(),.011);i.orbit(f,e[2],1,-e[0],.3+.5*i.rng()),i.twinkle(f,.5)}let s=i.quota(.1),r=[],a=new Float64Array(6);Ni(a,ta[0],ta[1],ta[2]);let o=Math.cos(r1);for(let u=0;u<56;u++){i.tick()&&(yield);let h=o+(1-o)*i.rng(),f=i.rng()*qe,g=Math.sqrt(1-h*h),v=ta[0]*h+(a[0]*Math.cos(f)+a[3]*Math.sin(f))*g,p=ta[1]*h+(a[1]*Math.cos(f)+a[4]*Math.sin(f))*g,m=ta[2]*h+(a[2]*Math.cos(f)+a[5]*Math.sin(f))*g,_=.3+Math.pow(i.rng(),1.4)*1;r.push([v,p,m,_,i.rng()<.75?1:-1,i.rng()*qe,.5+i.rng()*1.4])}let l=new Float64Array(6),c=Lt(k.white,k.ice,.35);for(let u=0;u<s;u++){i.tick()&&(yield);let[h,f,g,v,p,m,_]=r[u%r.length];Ni(l,h,f,g);let A=i.rng(),S=m-p*A*_,w=Math.cos(S)*v,y=Math.sin(S)*v,T=Math.pow(1-A,1.4),x=i.point(l[0]*w+l[3]*y,l[1]*w+l[4]*y,l[2]*w+l[5]*y,Ke(c,k.deep,.35*(v-.3)),(.012+.05*T)*(1.2-v*.4),.008+.003*T);i.orbit(x,h,f,g,p*.32/Math.pow(v,1.5)),i.twinkle(x,.3)}let d=i.quota(.08);for(let u=0;u<d;u++){i.tick()&&(yield);let h=u%5,f=i.rng(),g=.35+f*2.4,v=h*1.2566+Math.log(g/.35)*2.2+i.gauss()*.02,p=Math.cos(v)*g,m=Math.sin(v)*g,_=Math.sin(v*.5+h)*.18*f,A=i.point(p,_,m,Ke(k.deep,k.ice,.5*(1-f)),(.03+.04*i.rng())*(1-.6*f),.009),S=.25+g*.15;i.flow(A,(-Math.cos(v)-Math.sin(v)*.45)*S,0,(-Math.sin(v)+Math.cos(v)*.45)*S,.08),i.orbit(A,0,1,0,.1)}}},Xp={id:"origin",seed:3001,radius:3.2,center:[0,0,0],view:{yaw:0,pitch:.35},tint:It.deep,morph:"intro",reading:{preview:1},*build(i){let e=[0,0,0];for(;i.remaining>0;){i.tick()&&(yield),Ti(i,e);let t=5.5+Math.pow(i.rng(),.5)*9,n=i.point(e[0]*t,e[1]*t*.7,e[2]*t,Ke(k.steel,k.ice,i.rng()*.3),.008+.012*i.rng(),.02);i.orbit(n,0,1,0,.02+.02*i.rng())}}};var ar={origin:Xp,cover:Up,ch1:Np,ch2:Op,ch3:kp,ch4:zp,ch5:Hp,ch6:Vp,ch7:Pp,ch8:Gp,seed:Wp},a1={preview:1,evolve:[1,1],mode:0,expand:[1,1],spread:[0,0],dim:[1,1]};for(let i of Object.values(ar))i.reading={...a1,...i.reading};function qp(i,e){return i==="cover"?"cover":i==="ending-ready"?"seed":i==="origin"?"origin":`ch${Math.max(1,Math.min(8,e|0||1))}`}function*Yp(i,e){let t=ar[i]||ar.cover;return yield*new Nc(e,t.seed).run(t,Fp(e),Ap)}function $u(i,e){let t=Yp(i,e),n;do n=t.next();while(!n.done);return n.value}function na(i,e){let t=ls(3001),n={count:e,pos:new Float32Array(e*3),look:new Uint8Array(e*4),spin:new Int16Array(e*4),pivot:new Int16Array(e*3),stream:new Int16Array(e*4),aux:new Uint8Array(e*4)},s=i.pos,r=k.steel,a=k.ice,o=Math.round(Math.sqrt(.02/rt.SIZE_MAX)*255);for(let l=0;l<e;l++){let c=s[l*3],d=s[l*3+1],u=s[l*3+2],h=Math.sqrt(c*c+d*d+u*u);if(h<.001){let p=t()*2-1,m=t()*Math.PI*2,_=Math.sqrt(1-p*p);c=_*Math.cos(m),d=p,u=_*Math.sin(m),h=1}let f=(5.5+Math.sqrt(t())*9)/h;n.pos[l*3]=c*f,n.pos[l*3+1]=d*f*.7,n.pos[l*3+2]=u*f;let g=t()*.3,v=.008+.012*t();n.look[l*4]=Math.round(Math.sqrt(Math.min(1,(r[0]+(a[0]-r[0])*g)*v))*255),n.look[l*4+1]=Math.round(Math.sqrt(Math.min(1,(r[1]+(a[1]-r[1])*g)*v))*255),n.look[l*4+2]=Math.round(Math.sqrt(Math.min(1,(r[2]+(a[2]-r[2])*g)*v))*255),n.look[l*4+3]=o,n.spin[l*4+1]=32767,n.spin[l*4+3]=Math.round((.02+.02*t())/rt.SPIN_MAX*32767)}return n}var kc=class{constructor(e,t=null){this.count=e,this.limit=e>1e5?9:12,this.map=new Map,this.pending=new Map,this.worker=t,this.lastBuildMs=0}peek(e){let t=this.map.get(e);return t?(this.map.delete(e),this.map.set(e,t),t):null}get(e){let t=this.peek(e);if(t)return t;let n=performance.now(),s=$u(e,this.count);return this.lastBuildMs=performance.now()-n,this._store(e,s)}get async(){return!!(this.worker&&this.worker.alive)}request(e,{origin:t=!1}={}){let n=this.peek(e);if(n&&(!t||n.origin))return Promise.resolve(n);let s=this.pending.get(e);if(s&&(!t||s.origin))return s.promise;if(!this.async){let o=this.get(e);return t&&!o.origin&&(o.origin=na(o,this.count)),Promise.resolve(o)}let r=performance.now(),a=this.worker.build(e,this.count,t).then(o=>{this.pending.delete(e),this.lastBuildMs=performance.now()-r;let l=this.map.get(e);return l?(o.origin&&!l.origin&&(l.origin=o.origin),l):this._store(e,o)},o=>{this.pending.delete(e),console.warn("Universe: formation worker failed, building on the main thread \u2014",o&&o.message);let l=this.get(e);return t&&!l.origin&&(l.origin=na(l,this.count)),l});return this.pending.set(e,{promise:a,origin:t}),a}_store(e,t){let n=ar[e]||ar.cover;for(t.id=n.id,t.spec=n,this.map.set(e,t);this.map.size>this.limit;)this.map.delete(this.map.keys().next().value);return t}job(e){let t=Yp(e,this.count),n=this,s=0,r=.5;return{id:e,result:null,step(a){if(this.result)return!0;let o=performance.now(),l=o+a,c,d=o;do{let u=d;c=t.next(),d=performance.now(),r=r*.8+(d-u)*.2}while(!c.done&&d+r<l);return s+=d-o,c.done?(n.lastBuildMs=s,this.result=n.map.get(e)||n._store(e,c.value),!0):!1}}}has(e){return this.map.has(e)}delete(e){this.map.delete(e)}get size(){return this.map.size}clear(){this.map.clear()}};var o1=4e3;function $p(i){i.onmessage=e=>{let t=e.data||{};if(t.type==="build")try{let n=$u(t.id,t.count),s=[n.pos.buffer,n.look.buffer,n.spin.buffer,n.pivot.buffer,n.stream.buffer,n.aux.buffer],r=null;t.origin&&(r=na(n,t.count),s.push(r.pos.buffer,r.look.buffer,r.spin.buffer,r.pivot.buffer,r.stream.buffer,r.aux.buffer)),i.postMessage({type:"built",req:t.req,data:n,origin:r},s)}catch(n){i.postMessage({type:"error",req:t.req,message:String(n&&n.message||n)})}},i.postMessage({type:"ready"})}function Zp(){return typeof window>"u"&&typeof self<"u"&&typeof self.postMessage=="function"&&typeof importScripts=="function"}var zc=class i{static create(e){if(typeof Worker>"u"||!e)return null;let t=null,n=!1;try{if(e.src)t=e.src;else{let s=e.text||e.textContent||"";if(s.length<1e3||typeof Blob>"u"||typeof URL>"u"||!URL.createObjectURL)return null;t=URL.createObjectURL(new Blob([s],{type:"text/javascript"})),n=!0}return new i(new Worker(t),n?t:null)}catch{return n&&t&&URL.revokeObjectURL(t),null}}constructor(e,t){this.worker=e,this.blobUrl=t,this.alive=!0,this.ready=!1,this.seq=0,this.jobs=new Map,this.timer=setTimeout(()=>{this.ready||this.fail(new Error("formation worker did not start"))},o1),e.onmessage=n=>this.onMessage(n.data||{}),e.onerror=n=>{n.preventDefault?.(),this.fail(new Error(n&&n.message||"formation worker error"))}}onMessage(e){if(e.type==="ready"){this.ready=!0,clearTimeout(this.timer),this.blobUrl&&(URL.revokeObjectURL(this.blobUrl),this.blobUrl=null);return}let t=this.jobs.get(e.req);if(t)if(this.jobs.delete(e.req),e.type==="built"){let n=e.data;e.origin&&(n.origin=e.origin),t.resolve(n)}else t.reject(new Error(e.message||"build failed"))}build(e,t,n){return this.alive?new Promise((s,r)=>{let a=++this.seq;this.jobs.set(a,{resolve:s,reject:r});try{this.worker.postMessage({type:"build",req:a,id:e,count:t,origin:!!n})}catch(o){this.jobs.delete(a),r(o)}}):Promise.reject(new Error("formation worker unavailable"))}fail(e){if(this.alive){this.alive=!1,clearTimeout(this.timer);try{this.worker.terminate()}catch{}this.blobUrl&&URL.revokeObjectURL(this.blobUrl);for(let t of this.jobs.values())t.reject(e);this.jobs.clear()}}dispose(){this.fail(new Error("disposed"))}};var Hc=class{constructor(e){let t=ls(7741),n=new Float32Array(e*3),s=new Uint8Array(e*4),r=new Float32Array(e);for(let o=0;o<e;o++){let l=t()*2-1,c=t()*qe,d=Math.sqrt(1-l*l),u=t()<.35?.28:1,h=60+t()*30;n[o*3]=d*Math.cos(c)*h,n[o*3+1]=l*u*h,n[o*3+2]=d*Math.sin(c)*h;let f=Math.pow(t(),5.5),g=t(),[v,p,m]=g<.12?[.66,.9,.95]:g<.3?[.6,.78,.9]:[.9,.95,.97],_=.22+.78*Math.pow(t(),2.2)*(.4+f);s[o*4]=Math.round(Math.min(1,v*_)*255),s[o*4+1]=Math.round(Math.min(1,p*_)*255),s[o*4+2]=Math.round(Math.min(1,m*_)*255),s[o*4+3]=Math.round(f*255),r[o]=t()}let a=new pt;a.setAttribute("position",new ft(n,3)),a.setAttribute("aLook",new ft(s,4,!0)),a.setAttribute("aSeed",new ft(r,1)),this.positions=n,this.look=s,this.count=e,this.uniforms={uTime:{value:0},uPixelRatio:{value:1},uTwinkle:{value:1},uGain:{value:.55}},this.material=new Fe({name:"UniverseStars",uniforms:this.uniforms,vertexShader:vp,fragmentShader:xp,transparent:!0,depthWrite:!1,depthTest:!0,blending:Yn,blendEquation:Hi,blendSrc:Fn,blendDst:Fn}),this.points=new Fi(a,this.material),this.points.frustumCulled=!1,this.points.renderOrder=1,this.geometry=a}snapshot(e,t,n){let s=this.uniforms.uGain.value;for(let r=0;r<this.count;r++){let a=(n+r)*3;e[a]=this.positions[r*3],e[a+1]=this.positions[r*3+1],e[a+2]=this.positions[r*3+2];let o=this.look[r*4+3]/255,l=(.05+.95*o*o)*s;for(let c=0;c<3;c++){let d=this.look[r*4+c]/255;t[a+c]=d*d*l}}}dispose(){this.geometry.dispose(),this.material.dispose()}};var On={transparent:!0,depthWrite:!1,depthTest:!0,blending:Yn,blendEquation:Hi,blendSrc:Fn,blendDst:Fn},Kp=new ki(2,2),Jp=`
uniform float uScale;
varying vec2 vUv;
void main() {
  vUv = position.xy;
  vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  mv.xy += position.xy * uScale;
  gl_Position = projectionMatrix * mv;
}
`,l1=`
${us}
uniform vec3 uCore;
uniform vec3 uHalo;
uniform float uIntensity;
uniform float uOpacity;
uniform float uTime;
uniform float uFlicker;
uniform float uBreath;
uniform float uRays;
varying vec2 vUv;
void main() {
  float r = length(vUv);
  if (r > 1.0) discard;
  float breath = 1.0 + uBreath * sin(uTime * qRate(0.9));
  float flick = 1.0 + uFlicker * (0.45 * sin(uTime * qRate(7.3)) + 0.3 * sin(uTime * qRate(12.9) + 1.0) + 0.25 * sin(uTime * qRate(21.7) + 2.0));
  float core = exp(-r * r * 160.0 / breath);
  float inner = exp(-r * r * 22.0 / breath);
  float halo = exp(-r * 5.0) * (1.0 - r);
  float ang = atan(vUv.y, vUv.x);
  float rays = uRays * pow(abs(cos(ang * 2.0 + 0.4)), 80.0) * exp(-r * 3.5) * (1.0 - r);
  vec3 c = uCore * (core * 4.0 + inner * 0.55) + uHalo * (halo * 0.55 + rays * 0.5);
  gl_FragColor = vec4(c * (uIntensity * uOpacity * flick * breath), 1.0);
}
`;function hn({core:i,halo:e,scale:t=.5,intensity:n=1,flicker:s=0,breath:r=0,rays:a=0}){let o={uScale:{value:t},uCore:{value:new L(...i)},uHalo:{value:new L(...e)},uIntensity:{value:n},uOpacity:{value:0},uTime:{value:0},uFlicker:{value:s},uBreath:{value:r},uRays:{value:a}},l=new $e(Kp,new Fe({name:"AccentGlow",uniforms:o,vertexShader:Jp,fragmentShader:l1,...On}));return l.frustumCulled=!1,l.renderOrder=20,l}var or={vertex:Jp,quad:Kp},c1=`
attribute float aT;
attribute float aSeed;
attribute float aR;
varying float vT;
varying float vSeed;
varying float vR;
varying float vDepth;
void main() {
  vT = aT;
  vSeed = aSeed;
  vR = aR;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`,h1=`
uniform float uPhase;
uniform float uOpacity;
uniform float uBase;
uniform float uPulse;
uniform float uDensity;
uniform float uWidth;
uniform float uStep;
uniform float uReveal;
uniform float uFocus;
uniform vec3 uColor;
uniform vec3 uPulseColor;
varying float vT;
varying float vSeed;
varying float vR;
varying float vDepth;
void main() {
  float s = uPhase + vSeed;
  if (uStep > 0.5) s = floor(s) + smoothstep(0.2, 0.8, fract(s));
  float ph = fract(vT * uDensity - s);
  float pulse = exp(-pow((ph - 0.5) / uWidth, 2.0));
  float gate = 1.0 - smoothstep(uReveal - 0.05, uReveal, vR);
  float depth = clamp(1.3 - (vDepth - uFocus) / uFocus * 1.6, 0.3, 1.0);
  vec3 c = uColor * uBase + uPulseColor * (uPulse * pulse);
  gl_FragColor = vec4(c * (uOpacity * gate * depth), 1.0);
}
`;function fs(i,e={}){let t=i.length,n=new Float32Array(t*6),s=new Float32Array(t*2),r=new Float32Array(t*2),a=new Float32Array(t*2);i.forEach((d,u)=>{n.set(d.a,u*6),n.set(d.b,u*6+3),s[u*2]=d.t0??0,s[u*2+1]=d.t1??1,r[u*2]=r[u*2+1]=d.seed??0,a[u*2]=d.r0??0,a[u*2+1]=d.r1??0});let o=new pt;o.setAttribute("position",new ft(n,3)),o.setAttribute("aT",new ft(s,1)),o.setAttribute("aSeed",new ft(r,1)),o.setAttribute("aR",new ft(a,1));let l={uPhase:{value:0},uOpacity:{value:0},uBase:{value:e.base??.05},uPulse:{value:e.pulse??.6},uDensity:{value:e.density??1},uWidth:{value:e.width??.06},uStep:{value:e.step?1:0},uReveal:{value:e.reveal??10},uFocus:{value:10},uColor:{value:new L(...e.color||[.6,.8,.9])},uPulseColor:{value:new L(...e.pulseColor||e.color||[1,1,1])}},c=new La(o,new Fe({name:"AccentLines",uniforms:l,vertexShader:c1,fragmentShader:h1,...On}));return c.frustumCulled=!1,c.renderOrder=5,c}function lr(i,{closed:e=!1,seed:t=0,tScale:n=1,reveal:s=null}={}){let r=[],a=0,o=i.length,l=e?o:o-1;for(let c=0;c<l;c++){let d=i[c],u=i[(c+1)%o],h=Math.hypot(u[0]-d[0],u[1]-d[1],u[2]-d[2]);r.push({a:d,b:u,t0:a*n,t1:(a+h)*n,seed:t,r0:s?s(d):0,r1:s?s(u):0}),a+=h}return r}var Jn=8,Zu=.042;function u1(i,e,t){let n=yn.nodeOrbit,s=i/Jn*qe+n.phase+e*n.speed;return ci(n.matrix,Math.cos(s)*n.radius,0,-Math.sin(s)*n.radius,t)}var d1=`
attribute float aIndex;
uniform float uPixelScale;
uniform float uRadius;
uniform float uSelected;
uniform float uMinPx;
uniform float uFocus;
varying float vSel;
varying float vScale;
varying float vNear;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  vNear = clamp(1.0 - (-mv.z - uFocus) / 3.2, 0.35, 1.0);
  float sel = abs(aIndex - uSelected) < 0.5 ? 1.0 : 0.0;
  vSel = sel;
  vScale = sel > 0.5 ? 10.0 : 6.0;
  float px = max(uRadius * uPixelScale / max(0.1, -mv.z), uMinPx);
  gl_PointSize = px * 2.0 * vScale;
}
`,f1=`
${us}
uniform float uOpacity;
uniform float uTime;
uniform vec3 uCold;
uniform vec3 uAccent;
varying float vSel;
varying float vScale;
varying float vNear;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r = length(q);
  if (r > 1.0) discard;
  float rn = r * vScale;               // distance in node radii
  float disc = 1.0 - smoothstep(0.7, 1.0, rn);
  float halo = exp(-rn * 1.8) * 0.22;
  float ring = exp(-pow((rn - 2.4) / 0.14, 2.0)) * 0.18;
  vec3 col = uCold * (disc * 0.95 + halo) * vNear + uCold * ring;
  if (vSel > 0.5) {
    float pulse = 0.5 + 0.5 * sin(uTime * qRate(2.4));
    float er = 3.0 + 0.5 * pulse;
    float accentRing = exp(-pow((rn - er) / 0.22, 2.0)) * (0.9 + 0.4 * pulse);
    col = mix(col, uAccent * (disc * 2.6 + halo * 1.6), 0.55) + uAccent * (accentRing + exp(-rn * 0.55) * 0.35);
  }
  gl_FragColor = vec4(col * uOpacity * (1.0 - smoothstep(0.85, 1.0, r)), 1.0);
}
`,p1=[0,0,0],Vc=class{constructor(){this.group=new wt;let e=[],t=[0,0,0],n=yn.nodeOrbit;for(let a=0;a<240;a++){let o=a/240*qe;ci(n.matrix,Math.cos(o)*n.radius,0,-Math.sin(o)*n.radius,t),e.push([t[0],t[1],t[2]])}this.orbit=fs(lr(e,{closed:!0,tScale:1/(qe*n.radius)}),{base:.085,pulse:.22,density:3,width:.08,color:k.steel,pulseColor:k.ice}),this.group.add(this.orbit),this.positions=new Float32Array(Jn*3);let s=new Float32Array(Jn);for(let a=0;a<Jn;a++)s[a]=a+1;let r=new pt;this.nodeAttr=new ft(this.positions,3).setUsage(io),r.setAttribute("position",this.nodeAttr),r.setAttribute("aIndex",new ft(s,1)),this.nodeUniforms={uPixelScale:{value:1e3},uRadius:{value:Zu},uSelected:{value:0},uMinPx:{value:2.5},uFocus:{value:10},uOpacity:{value:0},uTime:{value:0},uCold:{value:new L(...k.white).multiplyScalar(.9)},uAccent:{value:new L(...k.ice).multiplyScalar(1.15)}},this.nodes=new Fi(r,new Fe({name:"CoverNodes",uniforms:this.nodeUniforms,vertexShader:d1,fragmentShader:f1,...On})),this.nodes.frustumCulled=!1,this.nodes.renderOrder=30,this.group.add(this.nodes),this.glow=hn({core:k.iceHi,halo:k.ice,scale:.3,intensity:.6,flicker:.06,breath:.06}),this.group.add(this.glow),this.time=-1}update(e){if(e.time!==this.time){this.time=e.time;let s=p1;for(let r=0;r<Jn;r++)u1(r,e.time,s),this.positions[r*3]=s[0],this.positions[r*3+1]=s[1],this.positions[r*3+2]=s[2];this.nodeAttr.needsUpdate=!0}let t=e.presence;this.orbit.material.uniforms.uOpacity.value=t,this.orbit.material.uniforms.uPhase.value=e.time*.035%1,this.orbit.material.uniforms.uFocus.value=e.focus;let n=this.nodeUniforms;n.uOpacity.value=t,n.uTime.value=e.gpuTime,n.uSelected.value=e.selected,n.uPixelScale.value=e.pixelScale,n.uMinPx.value=Math.max(2.4,2.2*e.pixelRatio),n.uFocus.value=e.focus,this.glow.material.uniforms.uOpacity.value=t,this.glow.material.uniforms.uTime.value=e.gpuTime}};var m1=Kr(Math.round(Bs.spin/rt.SPIN_MAX*32767)/32767*rt.SPIN_MAX);function Zc(i,e){for(let t=0;t<i.length;t++){let n=i[t].material.uniforms;n.uOpacity.value=e.presence,n.uTime.value=e.gpuTime}}var sa=(i,e,t)=>{let n=i.material.uniforms;n.uOpacity.value=e.presence,n.uFocus.value=e.focus,t!==void 0&&(n.uPhase.value=t%1)},Wc=class{constructor(){let{nodes:e,links:t}=Gu(),n=t.map(([s,r],a)=>({a:e[s].p,b:e[r].p,t0:0,t1:1,seed:a*.618%1}));this.lines=fs(n,{base:.05,pulse:.85,density:1,width:.05,color:k.ice,pulseColor:k.white}),this.core=hn({core:k.white,halo:k.ice,scale:.42,intensity:.75,flicker:.04}),this.group=new wt,this.group.add(this.lines,this.core),this.phase=0}update(e){let t=e.time/12%1,n=.18+.9*t*t+.5*e.reading;this.phase=(this.phase+e.dtLiving*n)%1,sa(this.lines,e,this.phase),this.core.material.uniforms.uOpacity.value=e.presence,this.core.material.uniforms.uTime.value=e.gpuTime}},Xc=class{constructor(){let e=po.matrix,t=(v,p,m)=>ci(e,v,p,m,[0,0,0]),{layers:n,rackCols:s,rackRows:r,rack:a,half:o}=po,l=[],{w:c,h:d,d:u}=a,h=[];for(let v of[-1,1])for(let p of[-1,1])h.push([[v*c/2,0,p*u/2],[v*c/2,d,p*u/2]]);for(let v of[0,d])for(let p of[-1,1])h.push([[-c/2,v,p*u/2],[c/2,v,p*u/2]]);for(let v of[0,d])for(let p of[-1,1])h.push([[p*c/2,v,-u/2],[p*c/2,v,u/2]]);for(let v of n){for(let m of s)for(let _ of r)if(!(m>0&&_===0&&v===0))for(let[A,S]of h)l.push({a:t(m+A[0],v+A[1],_+A[2]),b:t(m+S[0],v+S[1],_+S[2])});let p=[[-o,-o],[o,-o],[o,o],[-o,o]];for(let m=0;m<4;m++)l.push({a:t(p[m][0],v-.02,p[m][1]),b:t(p[(m+1)%4][0],v-.02,p[(m+1)%4][1])})}for(let[v,p]of[[-o,-o],[o,-o],[o,o],[-o,o]])l.push({a:t(v,n[0]-.02,p),b:t(v,n[2]-.02,p)});this.structure=fs(l,{base:.045,pulse:0,color:k.steel});let f=[];n.forEach((v,p)=>{for(let m of[-1,1]){let _=[];for(let A=0;A<=12;A++)_.push(t(0,v+.03,m*o*(1-A/12)));f.push(...lr(_,{seed:p*.37+(m>0?.5:0),tScale:1/o}))}});let g=[];for(let v=0;v<=16;v++)g.push(t(0,-.95+v/16*2.4,0));f.push(...lr(g,{seed:.2,tScale:1/2.4})),this.aisles=fs(f,{base:.03,pulse:.75,density:3,width:.05,step:!0,color:k.ice,pulseColor:k.iceHi}),this.gates=n.map(v=>{let p=hn({core:k.iceHi,halo:k.ice,scale:.36,intensity:.55,flicker:.08}),m=t(0,v+.02,0);return p.position.set(m[0],m[1],m[2]),p}),this.group=new wt,this.group.add(this.structure,this.aisles,...this.gates)}update(e){sa(this.structure,e),sa(this.aisles,e,e.time*.45),Zc(this.gates,e)}},qc=class{constructor(){let e=[];for(let n=0;n<360;n++){let s=ds(n/360,[0,0,0]);e.push([s[0],s[1],s[2]])}let t=lr(e,{closed:!0,tScale:1});t.forEach((n,s)=>{let r=s/360,a=(s+1)/360,o=l=>l>.8?.42+(l-.8)/.2*.56:0;n.r0=o(r),n.r1=o(Math.min(a,.9999))}),this.spine=fs(t,{base:.05,pulse:.5,density:.9,width:.04,color:k.steel,pulseColor:k.white}),this.factories=Qr.map(n=>{let s=hn({core:k.iceHi,halo:k.ice,scale:.34,intensity:.45,flicker:.12}),r=ds(n,[0,0,0]);return s.position.set(r[0],r[1],r[2]),s}),this.group=new wt,this.group.add(this.spine,...this.factories)}update(e){sa(this.spine,e,e.time*.32),this.spine.material.uniforms.uReveal.value=e.evolve,Zc(this.factories,e)}},Yc=class{constructor(){let e=qu(),t=o=>o.join(","),n=new Map(e.map(o=>[t(o),o])),s=Math.hypot(11,1,0),r=o=>Math.min(.97,.04+Math.hypot(...o)/s*.92),a=[];for(let o of e)for(let l of[[1,0,0],[0,1,0],[0,0,1]]){let c=n.get(t([o[0]+l[0],o[1]+l[1],o[2]+l[2]]));c&&a.push({a:mo(o,[0,0,0]),b:mo(c,[0,0,0]),t0:0,t1:1,seed:a.length*.618034%1,r0:r(o),r1:r(c)})}this.bonds=fs(a,{base:.16,pulse:.22,density:1,width:.2,color:k.ice,pulseColor:k.white}),this.seed=hn({core:k.iceHi,halo:k.ice,scale:.42,intensity:.75,flicker:.05,breath:.05}),this.spinner=new wt,this.spinner.add(this.bonds),this.group=new wt,this.group.add(this.spinner,this.seed),this.axis=new L(...Bs.axis).normalize()}update(e){sa(this.bonds,e,e.time*.2),this.bonds.material.uniforms.uReveal.value=e.evolve,this.spinner.quaternion.setFromAxisAngle(this.axis,e.gpuTime*m1),this.seed.material.uniforms.uOpacity.value=e.presence,this.seed.material.uniforms.uTime.value=e.gpuTime}},$c=class{constructor(){this.group=new wt,this.threads=Bc.map(([e,t],n)=>{let s=Kn[e].c,r=Kn[t].c,a=[];for(let o=0;o<=24;o++){let l=o/24;a.push([s[0]+(r[0]-s[0])*l,s[1]+(r[1]-s[1])*l,s[2]+(r[2]-s[2])*l])}return fs(lr(a,{seed:n*.31,tScale:1/Math.hypot(r[0]-s[0],r[1]-s[1],r[2]-s[2])}),{base:.018,pulse:.42,density:2,width:.03,color:k.steel,pulseColor:go[Kn[e].kind].knot})}),this.scaler=new wt,this.scaler.add(...this.threads),this.cores=Kn.map(e=>{let t=go[e.kind];return hn({core:t.core,halo:e.kind==="bright"?k.steel:k.deep,scale:e.r*.42,intensity:t.glow,breath:.03})}),this.group.add(this.scaler,...this.cores)}update(e){let t=1+e.spread;this.scaler.scale.setScalar(t);for(let n=0;n<this.threads.length;n++)sa(this.threads[n],e,e.time*.04);for(let n=0;n<this.cores.length;n++){let s=Kn[n].c;this.cores[n].position.set(s[0]*t,s[1]*t,s[2]*t)}Zc(this.cores,e)}},Ku={core:k.iceHi,halo:k.ice,scale:.72,intensity:.85,breath:.16,rays:.3,flicker:.02},jp={core:[0,0,0],halo:Lt(k.ice,k.deep,.5),scale:2.2,intensity:.14,breath:.1},Gc={intensity:.4,breath:.1,scale:.1,halo:.6},xo=class{constructor(e){this.strong=e,this.glow=e?hn(Ku):hn({core:k.iceHi,halo:k.ice,scale:.5,intensity:.8,flicker:.22}),this.halo=e?hn(jp):null,this.glows=this.halo?[this.glow,this.halo]:[this.glow],this.group=new wt,this.group.add(...this.glows),this.presence=0,this.arm=0}update(e){Zc(this.glows,e),this.presence=e.presence;let t=e.expand;if(this.strong){let n=this.arm=e.arm||0,s=this.glow.material.uniforms;s.uIntensity.value=Ku.intensity*(1+Gc.intensity*n),s.uBreath.value=Ku.breath+Gc.breath*n,this.halo.material.uniforms.uIntensity.value=jp.intensity*(1+Gc.halo*n),t=1+Gc.scale*n}this.group.scale.setScalar(t)}light(){let e=[];for(let t of this.glows){let n=t.material.uniforms;e.push({scale:n.uScale.value*this.group.scale.x,intensity:n.uIntensity.value*n.uOpacity.value,core:[n.uCore.value.x,n.uCore.value.y,n.uCore.value.z],halo:[n.uHalo.value.x,n.uHalo.value.y,n.uHalo.value.z],breath:n.uBreath.value,rays:n.uRays.value})}return e}};var Qp=`
float hash3(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
float vnoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash3(i), hash3(i + vec3(1, 0, 0)), f.x), mix(hash3(i + vec3(0, 1, 0)), hash3(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(hash3(i + vec3(0, 0, 1)), hash3(i + vec3(1, 0, 1)), f.x), mix(hash3(i + vec3(0, 1, 1)), hash3(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
// Three and two octaves (normalised like the 4-octave sum it replaces): half the noise of the
// original domain-warped fbm, so the program compiles and runs in a fraction of the time.
float fbm3(vec3 p) {
  float v = 0.5 * vnoise(p);
  p = p * 2.07 + 3.1;
  v += 0.25 * vnoise(p);
  p = p * 2.07 + 3.1;
  v += 0.125 * vnoise(p);
  return v / 0.875 * 0.9375;
}
float fbm2(vec3 p) {
  return (0.5 * vnoise(p) + 0.25 * vnoise(p * 2.07 + 3.1)) / 0.75 * 0.9375;
}
`,g1=`
varying vec3 vObj;
varying vec3 vN;
varying vec3 vV;
void main() {
  vObj = normalize(position);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vN = normalize(normalMatrix * normal);
  vV = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}
`,v1=`
uniform float uTime;
uniform float uOpacity;
uniform vec3 uHot;
uniform vec3 uMid;
uniform vec3 uCool;
varying vec3 vObj;
varying vec3 vN;
varying vec3 vV;
${Qp}
void main() {
  float mu = clamp(dot(vN, vV), 0.0, 1.0);
  // Granulation: bright cells with dark lanes, slowly boiling; large-scale supergranulation.
  vec3 p = vObj * 9.0 + vec3(0.0, uTime * 0.035, 0.0);
  float cells = fbm3(p + (vnoise(p * 0.7 + uTime * 0.02) * 0.9375) * 1.6);
  float lanes = smoothstep(0.32, 0.62, cells);
  float large = fbm2(vObj * 2.4 - uTime * 0.012);
  float limb = 0.36 + 0.64 * pow(mu, 0.55);
  vec3 col = mix(uCool, uMid, lanes);
  col = mix(col, uHot, smoothstep(0.55, 0.85, cells + large * 0.25) * 0.75);
  col *= limb * (0.85 + 0.3 * large);
  // Thin bright rim (chromosphere) at the limb.
  col += uCool * pow(1.0 - mu, 6.0) * 0.6;
  gl_FragColor = vec4(col * uOpacity, 1.0);
}
`,x1=`
uniform float uTime;
uniform float uOpacity;
uniform float uExtent;
uniform vec3 uInner;
uniform vec3 uOuter;
varying vec2 vUv;
${Qp}
void main() {
  float r = length(vUv) * uExtent;   // in star radii
  if (r < 0.97 || r > uExtent) discard;
  float a = atan(vUv.y, vUv.x);
  float streamers = fbm3(vec3(cos(a) * 2.6, sin(a) * 2.6, r * 0.6 - uTime * 0.05));
  streamers = 0.45 + 0.9 * pow(streamers, 1.6);
  float h = r - 1.0;
  float corona = exp(-h * 3.4) * streamers + exp(-h * 16.0) * 0.8;
  float edge = 1.0 - smoothstep(uExtent * 0.7, uExtent, r);
  vec3 col = mix(uOuter, uInner, exp(-h * 2.4)) * corona * edge;
  gl_FragColor = vec4(col * uOpacity * 0.55, 1.0);
}
`,_1=(i,e)=>{let t=i%(2*e);return t<e?t:2*e-t},Kc=class{constructor(){this.group=new wt;let e=new L(...k.iceHi).multiplyScalar(1.3),t=new L(...Lt(k.white,k.ice,.55)).multiplyScalar(.9),n=new L(...Lt(k.ice,k.deep,.55)).multiplyScalar(.55);this.sphereUniforms={uTime:{value:0},uOpacity:{value:0},uHot:{value:e},uMid:{value:t},uCool:{value:n}},this.sphere=new $e(new rs(ea,96,64),new Fe({name:"Star",uniforms:this.sphereUniforms,vertexShader:g1,fragmentShader:v1,...On,depthWrite:!0})),this.sphere.renderOrder=4;let s=3.4;this.coronaUniforms={uScale:{value:ea*s},uTime:{value:0},uOpacity:{value:0},uExtent:{value:s},uInner:{value:new L(...Lt(k.iceHi,k.ice,.3)).multiplyScalar(1.3)},uOuter:{value:new L(...Lt(k.ice,k.deep,.5)).multiplyScalar(.7)}},this.corona=new $e(or.quad,new Fe({name:"Corona",uniforms:this.coronaUniforms,vertexShader:or.vertex,fragmentShader:x1,...On})),this.corona.frustumCulled=!1,this.corona.renderOrder=6,this.halo=hn({core:[0,0,0],halo:k.ice,scale:ea*5.5,intensity:.16}),this.group.add(this.sphere,this.corona,this.halo)}update(e){let t=e.presence;this.sphereUniforms.uOpacity.value=t;let n=_1(e.time,600);this.sphereUniforms.uTime.value=n,this.coronaUniforms.uOpacity.value=t,this.coronaUniforms.uTime.value=n,this.halo.material.uniforms.uOpacity.value=t;let s=t>.92;this.sphere.material.depthWrite!==s&&(this.sphere.material.depthWrite=s)}};var y1=.97,e0=`
varying vec2 vPolar;
varying float vBeam;
varying vec3 vView;
void main() {
  vec2 p = position.xy;
  float r = length(p);
  vPolar = vec2(r, atan(p.y, p.x));
  // Orbital velocity direction (counter-clockwise in the disc plane), in view space.
  vec3 vel = normalize(normalMatrix * vec3(-p.y, p.x, 0.0));
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vView = mv.xyz;
  vBeam = dot(vel, normalize(-mv.xyz));
  gl_Position = projectionMatrix * mv;
}
`,t0=`
${us}
uniform float uTime;
uniform float uOpacity;
uniform vec2 uRange;
uniform vec3 uHot;
uniform vec3 uMid;
uniform vec3 uCool;
varying vec2 vPolar;
varying float vBeam;
varying vec3 vView;
#ifdef OVERLAY
${ho}
#endif
void main() {
  float k = 1.0;
  #ifdef OVERLAY
  // After bloom: only the part of the disc in front of the horizon, inside the (anti-aliased)
  // shadow disc. Outside it the main pass already drew the disc; the two meet without a seam.
  k = holeCover(gl_FragCoord.xy) * holeFront(vView);
  if (k <= 0.0) discard;
  k *= 1.4; // stands in for the bloom this re-draw does not get
  #endif
  float r = vPolar.x;
  float t = clamp((r - uRange.x) / (uRange.y - uRange.x), 0.0, 1.0);
  // Keplerian shear: inner rings turn faster.
  float a = vPolar.y + uTime * qRate(0.62 / pow(r, 1.5));
  float rings = 0.55 + 0.45 * sin(r * 46.0 + sin(a * 3.0) * 0.6);
  float streak = 0.6 + 0.4 * sin(a * 7.0 + r * 9.0) * sin(a * 3.0 - r * 21.0);
  float profile = smoothstep(0.0, 0.06, t) * pow(1.0 - t, 1.6);
  vec3 col = t < 0.3 ? mix(uHot, uMid, t / 0.3) : mix(uMid, uCool, (t - 0.3) / 0.7);
  float beam = pow(1.0 + 0.62 * vBeam, 3.0);
  gl_FragColor = vec4(col * (profile * rings * streak * beam * uOpacity * k), 1.0);
}
`,M1=`
uniform vec4 uHole;
uniform vec2 uViewport;
void main() {
  vec2 c = uHole.xy / uViewport * 2.0 - 1.0;
  vec2 ext = (uHole.z + uHole.w + 2.0) / uViewport * 2.0;
  gl_Position = vec4(c + position.xy * ext, 0.0, 1.0);
}
`,S1=`
${ho}
void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, holeCover(gl_FragCoord.xy));
}
`,w1=`
${us}
uniform float uOpacity;
uniform float uBand;
uniform float uExtent;
uniform float uTime;
uniform vec3 uHot;
uniform vec3 uMid;
varying vec2 vUv;
void main() {
  vec2 q = vUv * uExtent;            // in shadow radii
  float r = length(q);
  if (r > uExtent) discard;
  float up = q.y / max(r, 1e-3);
  // The near side of the disc passes in front of the lower photon ring: it reads as covered there
  // (less so as the disc evaporates).
  float photon = exp(-pow((r - 1.06) / 0.03, 2.0)) * 1.4 * (1.0 - uBand * (1.0 - smoothstep(-0.85, -0.2, up)));
  // Lensed far side of the disc: a thick arc over the top, a thinner one beneath.
  float arcTop = exp(-pow((r - 1.42) / 0.26, 2.0)) * smoothstep(-0.35, 0.85, up);
  float arcBottom = exp(-pow((r - 1.22) / 0.12, 2.0)) * smoothstep(0.1, -0.9, up) * 0.55;
  float doppler = 1.0 + 0.45 * (-q.x / max(r, 1e-3));
  float shimmer = 0.85 + 0.15 * sin(atan(q.y, q.x) * 9.0 - uTime * qRate(0.8));
  vec3 col = uHot * photon + mix(uMid, uHot, 0.35) * (arcTop + arcBottom) * doppler * shimmer;
  float glow = exp(-(r - 1.0) * 2.6) * 0.05;
  col += uMid * glow;
  gl_FragColor = vec4(col * uOpacity * (1.0 - smoothstep(uExtent * 0.75, uExtent, r)), 1.0);
}
`,Jc=class{constructor(){this.group=new wt,this.horizon=new $e(new rs(1,48,32),new Ln({color:0})),this.horizon.renderOrder=3;let[e,t]=xn.disc,n=new Ua(e*.92,t*1.05,180,8);this.discUniforms={...nr,uTime:{value:0},uOpacity:{value:0},uRange:{value:new ye(e*.92,t*1.05)},uHot:{value:new L(...k.iceHi).multiplyScalar(.9)},uMid:{value:new L(...Lt(k.white,k.ice,.5)).multiplyScalar(.5)},uCool:{value:new L(...k.deep).multiplyScalar(.3)}},this.disc=new $e(n,new Fe({name:"AccretionDisc",uniforms:this.discUniforms,vertexShader:e0,fragmentShader:t0,...On,side:Mi})),this.disc.renderOrder=6,this.disc.quaternion.setFromUnitVectors(new L(0,0,1),new L(...xn.normal));let s=2.4;this.lensUniforms={uScale:{value:xn.radius*s},uOpacity:{value:0},uBand:{value:1},uExtent:{value:s},uTime:{value:0},uHot:{value:new L(...k.iceHi).multiplyScalar(.75)},uMid:{value:new L(...k.ice).multiplyScalar(.42)}},this.lens=new $e(or.quad,new Fe({name:"LensedRing",uniforms:this.lensUniforms,vertexShader:or.vertex,fragmentShader:w1,...On})),this.lens.frustumCulled=!1,this.lens.renderOrder=7,this.group.add(this.horizon,this.disc,this.lens),this.overlay=new wt,this.horizonOverlay=new $e(or.quad,new Fe({name:"HorizonShadow",uniforms:nr,vertexShader:M1,fragmentShader:S1,transparent:!0,depthTest:!1,depthWrite:!1,blending:Yn,blendEquation:Hi,blendSrc:Ul,blendDst:za})),this.horizonOverlay.frustumCulled=!1,this.discOverlay=new $e(n,new Fe({name:"AccretionDiscFront",defines:{OVERLAY:""},uniforms:this.discUniforms,vertexShader:e0,fragmentShader:t0,...On,depthTest:!1,side:Mi})),this.discOverlay.quaternion.copy(this.disc.quaternion),this.horizonOverlay.renderOrder=1,this.discOverlay.renderOrder=2,this.overlay.add(this.horizonOverlay,this.discOverlay),this.radius=0}update(e){let t=e.presence,n=t*(1-.86*e.reading),s=1-.42*e.reading,r=xn.radius*s*Math.min(1,t*1.15);this.horizon.visible=r>.004,this.horizon.scale.setScalar(Math.max(r*y1,.001)),this.horizonOverlay.visible=this.horizon.visible,this.radius=r,this.reach=xn.disc[1]*1.12*e.expand,this.thickness=.2*e.expand,this.bandInner=xn.disc[0]*.98,this.bandOuter=xn.disc[1]*1.05*Math.max(1,e.expand),this.discUniforms.uOpacity.value=n,this.discUniforms.uTime.value=e.gpuTime,this.lensUniforms.uOpacity.value=n,this.lensUniforms.uBand.value=Math.max(0,1-1.15*e.reading),this.lensUniforms.uTime.value=e.gpuTime,this.lensUniforms.uScale.value=Math.max(r,.001)*this.lensUniforms.uExtent.value}};var Ju={cover:()=>new Vc,ch1:()=>new Wc,ch2:()=>new Xc,ch3:()=>new qc,ch4:()=>new Yc,ch5:()=>new Kc,ch6:()=>new $c,ch7:()=>new Jc,ch8:()=>new xo(!1),seed:()=>new xo(!0)},ju=i=>i*i*(3-2*i),b1=(i,e,t)=>ju(Math.min(1,Math.max(0,(t-i)/(e-i)))),i0=[.62,.95],jc=class{constructor(e){this.root=new wt,this.root.name="accents",e.add(this.root),this.items=new Map,this.list=[],this.activeId=null,this.solid=1}_item(e){let t=this.items.get(e);if(t||!Ju[e])return t||null;let n=Ju[e]();return n.group.visible=!1,this.root.add(n.group),t={accent:n,presence:0,target:0,rate:1,reading:0,evolve:1,spread:0,expand:1},this.items.set(e,t),this.list.push(t),t}createAll(){for(let e of Object.keys(Ju))this._item(e)}get(e){let t=this.items.get(e);return t?t.accent:null}visible(e){let t=this.items.get(e);return t&&t.presence>.001&&this.solid>.001?t.accent:null}presence(e){let t=this.items.get(e);return t?ju(t.presence)*this.solid:0}setActive(e,t,n=!1){this.activeId=e;for(let[r,a]of this.items)r!==e&&(a.target=0,a.rate=1/Math.max(.12,t*.3),n&&(a.presence=0));let s=this._item(e);s&&(s.target=1,n&&(s.presence=1))}update(e,t){let n=!1,s=t.reading,r=t.evolve,a=t.spread,o=t.expand,l=this.solid=t.solid===void 0?1:t.solid,c=b1(i0[0],i0[1],t.morph);for(let d=0;d<this.list.length;d++){let u=this.list[d];u.target===1?(u.reading=s,u.evolve=r,u.spread=a,u.expand=o,c>u.presence&&(u.presence=c)):u.presence>0&&(u.presence=Math.max(0,u.presence-u.rate*e),n=!0);let h=u.presence>.001&&l>.001;u.accent.group.visible=h,h&&(t.presence=ju(u.presence)*l,t.reading=u.reading,t.evolve=u.evolve,t.spread=u.spread,t.expand=u.expand,u.accent.update(t))}return t.reading=s,t.evolve=r,t.spread=a,t.expand=o,n}settle(){for(let e of this.items.values())e.presence=e.target}dispose(){this.root.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.root.removeFromParent(),this.items.clear(),this.list.length=0}};var ra={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var un=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},T1=new Dn(-1,1,1,-1,0,1),Qu=class extends pt{constructor(){super(),this.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new yt([0,2,0,0,2,0],2))}},E1=new Qu,ks=class{constructor(e){this._mesh=new $e(E1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,T1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Qc=class extends un{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Fe?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=os.clone(e.uniforms),this.material=new Fe({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ks(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var _o=class extends un{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},eh=class extends un{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var th=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ye);this._width=n.width,this._height=n.height,t=new Rt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qc(ra),this.copyPass.material.blending=Si,this.timer=new Ba}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}_o!==void 0&&(a instanceof _o?n=!0:a instanceof eh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var yo=class extends un{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new je}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var n0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new je(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var aa=class i extends un{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ye(e.x,e.y):new ye(256,256),this.clearColor=new je(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Rt(r,a,{type:Wt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new Rt(r,a,{type:Wt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let h=new Rt(r,a,{type:Wt,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+d,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}let o=n0;this.highPassUniforms=os.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Fe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ye(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=os.clone(ra.uniforms),this.blendMaterial=new Fe({uniforms:this.copyUniforms,vertexShader:ra.vertexShader,fragmentShader:ra.fragmentShader,premultipliedAlpha:!0,blending:Vt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new je,this._oldClearAlpha=1,this._basic=new Ln,this._fsQuad=new ks(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ye(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Fe({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ye(.5,.5)},direction:{value:new ye(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Fe({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};aa.BlurDirectionX=new ye(1,0);aa.BlurDirectionY=new ye(0,1);var Mo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ih=class extends un{constructor(){super(),this.isOutputPass=!0,this.uniforms=os.clone(Mo.uniforms),this.material=new kr({name:Mo.name,uniforms:this.uniforms,vertexShader:Mo.vertexShader,fragmentShader:Mo.fragmentShader}),this._fsQuad=new ks(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ct.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ha?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Va?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ga?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Wa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ya?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Xa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var A1=`
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
`,ed=class extends ih{constructor(){super(),Object.assign(this.uniforms,{uResolution:{value:new ye(1,1)},uTime:{value:0},uGrain:{value:ji.grain},uVignette:{value:ji.vignette},uDim:{value:1},uFade:{value:1},uBlack:{value:1},uBg:{value:new L(...Pc(It.space))},uBgLift:{value:new L(0,0,0)},uGlowCenter:{value:new ye(.5,.5)},uGlowRadius:{value:.5}}),this.material.fragmentShader=A1,this._outputColorSpace=jt,this._toneMapping=ai,this.material.defines={SRGB_TRANSFER:""},this.material.needsUpdate=!0}},nh=new pt;nh.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3));nh.setAttribute("uv",new yt([0,2,0,0,2,0],2));var So=class{constructor(e,t,n){this.renderer=e,this.composer=new th(e),this.composer.renderToScreen=!0,this.renderPass=new yo(t,n),this.renderPass.clearColor=new je(0,0,0),this.renderPass.clearAlpha=1,this.bloom=new aa(new ye(256,256),ji.bloomStrength,ji.bloomRadius,ji.bloomThreshold),this.bloom.highPassUniforms.smoothWidth.value=ji.bloomKnee,this.finish=new ed,this.overlay=new mi,this.overlayPass=new yo(this.overlay,n),this.overlayPass.clear=!1,this.overlayPass.enabled=!1,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloom),this.composer.addPass(this.overlayPass),this.composer.addPass(this.finish),this.bloomScale=.5,this.width=1,this.height=1,this.pixelRatio=1}get uniforms(){return this.finish.uniforms}setSize(e,t,n){this.width=e,this.height=t,this.pixelRatio=n,this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.finish.uniforms.uResolution.value.set(e*n,t*n),this._sizeBloom()}setBloom(e,t){this.bloom.enabled=e&&t>0,t>0&&t!==this.bloomScale&&(this.bloomScale=t,this._sizeBloom())}_sizeBloom(){let e=Math.max(32,Math.round(this.width*this.pixelRatio*this.bloomScale*2)),t=Math.max(32,Math.round(this.height*this.pixelRatio*this.bloomScale*2));this.bloom.setSize(e,t)}render(e){this.composer.render(e)}passScene(){let e=new mi,t=this.bloom,n=[t.materialHighPassFilter,...t.separableBlurMaterials||[],t.compositeMaterial,t.blendMaterial].filter(Boolean);for(let s of n){let r=new $e(nh,s);r.frustumCulled=!1,e.add(r)}return e}finishScene(){let e=new mi,t=new $e(nh,this.finish.material);return t.frustumCulled=!1,e.add(t),e}dispose(){this.bloom.dispose(),this.finish.dispose(),this.composer.dispose()}};var s0=.62,r0=2.4,zs=1.32,oa=(i,e)=>i.focus?i.focus[e]-i.center[e]:0,sh=class{constructor(e){this.camera=e,this.W=1,this.H=1,this.Hf=1,this.tanHalf=Math.tan(so.degToRad(lo)/2),this.layout="hero",this.spec=null,this.cx=Zt(.5),this.cy=Zt(.5),this.dist=Zt(14),this.tx=Zt(0),this.ty=Zt(0),this.tz=Zt(0),this.fx=Zt(0),this.fy=Zt(0),this.fz=Zt(0),this.vYaw=Zt(0),this.vPitch=Zt(.35),this.dim=Zt(1),this.veil=Zt(0),this.veilTarget=0,this.pointer=[0,0],this.px=Zt(0),this.py=Zt(0),this.exYaw=0,this.exPitch=0,this.velYaw=0,this.velPitch=0,this.zoom=Zt(1),this.zoomTarget=1,this.returning=!1,this.dragging=!1,this.moving=!0,this._v=new L,this.target=new L,this.calm=0,this.refMatrix=new bt,this.refDistance=14,this._ref=new L}setViewport(e,t,n=t){this.W=e,this.H=t,this.Hf=Math.min(t,n||t),this.camera.aspect=e/t,this._targets(),this.cx.value=this._t.cx,this.cy.value=this._t.cy,this.dist.value=this._t.dist}setFormation(e){this.spec=e}setLayout(e){Ic[e]&&(this.layout=e)}setVeil(e){this.veilTarget=Ze(e,0,1)}setPointer(e,t){this.pointer[0]=Ze(e,-1,1),this.pointer[1]=Ze(t,-1,1)}beginDrag(){this.dragging=!0,this.returning=!1,this.velYaw=0,this.velPitch=0}dragBy(e,t,n){let s=-e*.0044,r=t*.0036;if(this.exYaw+=s,this.exPitch=Ze(this.exPitch+r,-zs-.4,zs-.4),n>0){let a=Math.min(1,n*18);this.velYaw+=(s/n-this.velYaw)*a,this.velPitch+=(r/n-this.velPitch)*a}}endDrag(){this.dragging=!1}zoomBy(e){this.returning=!1,this.zoomTarget=Ze(this.zoomTarget*e,s0,r0)}get zoomLimits(){return[s0,r0]}reset(){this.returning=!0,this.velYaw=0,this.velPitch=0,this.zoomTarget=1}_targets(){let e=Ic[this.layout]||Ic.hero,t=co(this.W,this.Hf),n=t?e.tall:e.wide,s=this.spec,r=s?s.radius:3,a=s&&s.compose&&s.compose[this.layout]?s.compose[this.layout][t?"tall":"wide"]:null,o=Math.max(40,n.r(this.W,this.Hf)*(a&&a.scale?a.scale:1)),l=this.veil.value,c=r*(this.H/2)/(o*this.tanHalf)*n.push*(1+.42*l);return this._t=this._t||{},this._t.cx=a&&a.cx!==void 0?a.cx:n.cx,this._t.cy=a&&a.cy!==void 0?a.cy:n.cy,this._t.dist=c,this._t.dim=n.dim*(1-.86*l),this._t}snapComposition(e,t){let n=this._targets();if(Math.abs(this.veilTarget-this.veil.value)<=e&&Math.abs(n.cx-this.cx.value)<=t&&Math.abs(n.cy-this.cy.value)<=t)return!1;this.veil.value=this.veilTarget,this.veil.velocity=0;let s=this._targets();return this.cx.value=s.cx,this.cy.value=s.cy,this.dim.value=s.dim,this.cx.velocity=0,this.cy.velocity=0,this.dim.velocity=0,!0}snap(){this.veil.value=this.veilTarget;let e=this._targets();this.cx.value=e.cx,this.cy.value=e.cy,this.dist.value=e.dist,this.dim.value=e.dim;let t=this.spec;t&&(this.tx.value=t.center[0],this.ty.value=t.center[1],this.tz.value=t.center[2],this.fx.value=oa(t,0),this.fy.value=oa(t,1),this.fz.value=oa(t,2),this.vYaw.value=t.view.yaw,this.vPitch.value=t.view.pitch);for(let n of[this.cx,this.cy,this.dist,this.dim,this.tx,this.ty,this.tz,this.fx,this.fy,this.fz,this.vYaw,this.vPitch,this.veil])n.velocity=0}update(e,t,n,s){let r=n?mn.cameraReduced:mn.camera;ei(this.veil,this.veilTarget,n?.05:mn.veil,e);let a=this._targets();ei(this.cx,a.cx,r,e),ei(this.cy,a.cy,r,e),ei(this.dist,a.dist,r,e),ei(this.dim,a.dim,n?.05:mn.veil,e);let o=this.spec;o&&(ei(this.tx,o.center[0],r,e),ei(this.ty,o.center[1],r,e),ei(this.tz,o.center[2],r,e),ei(this.fx,oa(o,0),r,e),ei(this.fy,oa(o,1),r,e),ei(this.fz,oa(o,2),r,e),ei(this.vYaw,o.view.yaw,r,e),ei(this.vPitch,o.view.pitch,r,e)),ei(this.px,s?this.pointer[0]:0,mn.parallax,e),ei(this.py,s?this.pointer[1]:0,mn.parallax,e),ei(this.zoom,this.zoomTarget,n?.05:.18,e);let l=!1;if(!this.dragging){if(this.returning)this.exYaw+=(0-this.exYaw)*(1-Math.exp(-e*4)),this.exPitch+=(0-this.exPitch)*(1-Math.exp(-e*4)),Math.abs(this.exYaw)<1e-4&&Math.abs(this.exPitch)<1e-4&&(this.exYaw=0,this.exPitch=0,this.returning=!1),l=this.returning;else if(Math.abs(this.velYaw)+Math.abs(this.velPitch)>.001){this.exYaw+=this.velYaw*e,this.exPitch=Ze(this.exPitch+this.velPitch*e,-zs-.4,zs-.4);let y=Math.exp(-e*4.2);this.velYaw*=y,this.velPitch*=y,l=!0}}let c=1e-4;this.moving=l||this.dragging||Math.abs(this.cx.velocity)>c||Math.abs(this.cy.velocity)>c||Math.abs(this.dist.velocity)>c*10||Math.abs(this.vYaw.velocity)>c||Math.abs(this.vPitch.velocity)>c||Math.abs(this.tx.velocity)+Math.abs(this.ty.velocity)+Math.abs(this.tz.velocity)+Math.abs(this.fx.velocity)+Math.abs(this.fy.velocity)+Math.abs(this.fz.velocity)>c||Math.abs(this.px.velocity)+Math.abs(this.py.velocity)>c||Math.abs(this.zoom.velocity)>c||Math.abs(this.veil.velocity)>c||Math.abs(this.dim.velocity)>c;let d=1-(1-ot.sway)*this.calm,u=1-(1-ot.parallax)*this.calm,h=(.075*Math.sin(t*.041)+.022*Math.sin(t*.107+1))*d,f=.028*Math.sin(t*.059+2)*d,g=this.vYaw.value+this.exYaw+this.px.value*.07*u+h,v=Ze(this.vPitch.value+this.exPitch-this.py.value*.045*u+f,-zs,zs),p=this.dist.value/this.zoom.value,m=this.camera;this.target.set(this.tx.value,this.ty.value,this.tz.value),m.position.set(this.target.x+p*Math.sin(g)*Math.cos(v),this.target.y+p*Math.sin(v),this.target.z+p*Math.cos(g)*Math.cos(v)),m.lookAt(this.target),m.setViewOffset(this.W,this.H,(.5-this.cx.value)*this.W,.5*this.H-this.cy.value*this.Hf,this.W,this.H),m.updateMatrixWorld(),this.distance=p;let _=this.vYaw.value,A=Ze(this.vPitch.value,-zs,zs),S=this.dist.value,w=this.target;return this._ref.set(w.x+S*Math.sin(_)*Math.cos(A),w.y+S*Math.sin(A),w.z+S*Math.cos(_)*Math.cos(A)),this.refMatrix.lookAt(this._ref,w,m.up),this.refMatrix.setPosition(this._ref),this.refDistance=S,this.moving}focusPoint(e){return e[0]=this.tx.value+this.fx.value,e[1]=this.ty.value+this.fy.value,e[2]=this.tz.value+this.fz.value,e}pxPerUnit(e){return this.H/2/(e*this.tanHalf)}project(e,t,n,s){let r=this._v.set(e,t,n),a=r.distanceTo(this.camera.position);return r.project(this.camera),s[0]=(r.x*.5+.5)*this.W,s[1]=(.5-r.y*.5)*this.H,s[2]=a,s[3]=r.z,s}};var R1=.5,wo=i=>Math.round(i*10)/10,rh=class{constructor(){this.subs=new Set,this.frame={scene:"cover",nodes:[],selected:0,anchor:{x:0,y:0,visible:!1}};for(let e=1;e<=Jn;e++)this.frame.nodes.push({n:e,x:0,y:0,radius:0,depth:0,visible:!1});this.prev=new Float32Array(Jn*4).fill(-1),this.prevScene="",this.prevSelected=-1,this.scratch=[0,0,0,0],this.center=[0,0,0,0],this.dirty=!0,this.allHidden=!1,this.pending=!1,this.notifyOne=e=>{try{e(this.frame)}catch(t){console.error(t)}}}subscribe(e){return typeof e!="function"?()=>{}:(this.subs.add(e),this.dirty=!0,()=>this.subs.delete(e))}update(e,t,n,s,r,a,o){let l=this.frame,c=e.W,d=e.H,u=this.dirty||s!==this.prevScene||r!==this.prevSelected,h=e.project(a[0],a[1],a[2],this.scratch),f=wo(h[0]),g=wo(h[1]),v=!!o&&h[3]<1&&h[0]>=0&&h[0]<=c&&h[1]>=0&&h[1]<=d,p=l.anchor;if((p.x!==f||p.y!==g||p.visible!==v)&&(p.x=f,p.y=g,p.visible=v,u=!0),t&&!(n<=.001&&this.allHidden&&!this.dirty)){let m=e.project(0,0,0,this.center),_=m[2],A=R1*e.pxPerUnit(_),S=yn.nodeOrbit.radius;for(let y=0;y<Jn;y++){let T=l.nodes[y],x=e.project(t[y*3],t[y*3+1],t[y*3+2],this.scratch),E=Zu*e.pxPerUnit(x[2]),R=x[2]>_&&Math.hypot(x[0]-m[0],x[1]-m[1])<A,D=x[3]<1&&x[0]>-E&&x[0]<c+E&&x[1]>-E&&x[1]<d+E,F=n>.5&&D&&!R;T.x=wo(x[0]),T.y=wo(x[1]),T.radius=wo(E),T.depth=Math.round(Math.min(1,Math.max(0,(x[2]-(_-S))/(2*S)))*1e3)/1e3,T.visible=F;let I=y*4;(this.prev[I]!==T.x||this.prev[I+1]!==T.y||this.prev[I+2]!==T.radius||this.prev[I+3]!==(F?1:0))&&(u=!0,this.prev[I]=T.x,this.prev[I+1]=T.y,this.prev[I+2]=T.radius,this.prev[I+3]=F?1:0)}let w=!0;for(let y=0;y<Jn;y++)l.nodes[y].visible&&(w=!1);this.allHidden=w}return!u||!this.subs.size?!1:(this.dirty=!1,this.prevScene=s,this.prevSelected=r,l.scene=s,l.selected=r,this.pending=!0,!0)}flush(){this.pending&&(this.pending=!1,this.subs.forEach(this.notifyOne))}pick(e,t){let n=0,s=1/0;for(let r of this.frame.nodes){if(!r.visible)continue;let a=Math.hypot(e-r.x,t-r.y),o=Math.max(22,r.radius+12);a<o&&a<s&&(s=a,n=r.n)}return n}};var ah=class{constructor(e){yi(this,"onWindowPointer",e=>{if(e.pointerType==="touch")return;let t=window.innerWidth||1,n=window.innerHeight||1;this.engine.pointerMoved(e.clientX/t*2-1,e.clientY/n*2-1)});yi(this,"onScroll",()=>{this.lastScroll=performance.now(),!(!this.coarse.matches||this.engine.endingActive||this.dragging)&&this.hold(150)});yi(this,"onScrollEnd",()=>{this.holding&&(this.holdUntil=performance.now()+40,this.schedule(60))});yi(this,"onTouch",e=>{this.touches=e.touches.length});yi(this,"onTouchEnd",e=>{this.touches=e.touches.length,!this.touches&&this.holding&&(this.holdUntil=performance.now()+150,this.schedule(170))});yi(this,"release",()=>{if(this.touches){this.schedule(120);return}let e=this.holdUntil-performance.now();if(e>0){this.schedule(e+15);return}this.holdTimer=0,this.holding=!1,this.engine.onHold(!1)});yi(this,"onDown",e=>{if(!(e.pointerType==="mouse"&&e.button!==0)){this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,t:e.timeStamp});try{this.canvas.setPointerCapture(e.pointerId)}catch{}this.pointers.size===1&&this.engine.rig.beginDrag(),this.pointers.size===2&&(this.pinch=this.pinchDistance()),this.engine.request()}});yi(this,"onMove",e=>{let t=this.pointers.get(e.pointerId);if(!t)return;let n=e.clientX-t.x,s=e.clientY-t.y,r=Math.max(.001,(e.timeStamp-t.t)/1e3);if(t.x=e.clientX,t.y=e.clientY,t.t=e.timeStamp,this.pointers.size===1)this.engine.rig.dragBy(n,s,r);else if(this.pointers.size===2){let a=this.pinchDistance();this.pinch>0&&a>0&&this.engine.rig.zoomBy(a/this.pinch),this.pinch=a}this.engine.request()});yi(this,"onUp",e=>{this.pointers.delete(e.pointerId)&&(this.pointers.size===0?this.engine.rig.endDrag():this.pointers.size===1&&this.engine.rig.beginDrag(),this.pinch=0,this.engine.request())});yi(this,"onWheel",e=>{if(e.ctrlKey&&!this.interactive)return;e.preventDefault();let t=e.deltaMode===1?.05:e.deltaMode===2?1:.0012;this.engine.rig.zoomBy(Math.exp(-e.deltaY*t)),this.engine.request()});yi(this,"onKey",e=>{let t=this.engine.rig,n=!0;switch(e.key){case"ArrowLeft":t.dragBy(-28,0,0);break;case"ArrowRight":t.dragBy(28,0,0);break;case"ArrowUp":t.dragBy(0,-24,0);break;case"ArrowDown":t.dragBy(0,24,0);break;case"+":case"=":t.zoomBy(1.12);break;case"-":case"_":t.zoomBy(1/1.12);break;case"r":case"R":t.reset();break;default:n=!1}n&&(e.preventDefault(),this.engine.request())});this.engine=e,this.canvas=e.canvas,this.coarse=typeof matchMedia=="function"?matchMedia("(pointer: coarse)"):{matches:!1},this.interactive=!1,this.holding=!1,this.touches=0,this.holdUntil=0,this.holdTimer=0,this.pointers=new Map,this.pinch=0,this.lastScroll=-1e9,this.abort=new AbortController,this.exploreAbort=null;let t={passive:!0,signal:this.abort.signal};window.addEventListener("pointermove",this.onWindowPointer,t),window.addEventListener("scroll",this.onScroll,t),window.addEventListener("scrollend",this.onScrollEnd,t),document.addEventListener("touchstart",this.onTouch,t),document.addEventListener("touchend",this.onTouchEnd,t),document.addEventListener("touchcancel",this.onTouchEnd,t)}get dragging(){return this.pointers.size>0}hold(e){this.holding||(this.holding=!0,this.engine.onHold(!0)),this.holdUntil=performance.now()+e,this.schedule(e+20)}schedule(e){clearTimeout(this.holdTimer),this.holdTimer=setTimeout(this.release,e)}setInteractive(e){if(e=!!e,e!==this.interactive)if(this.interactive=e,e){this.exploreAbort=new AbortController;let t=this.canvas,n={passive:!0,signal:this.exploreAbort.signal};t.addEventListener("pointerdown",this.onDown,n),t.addEventListener("pointermove",this.onMove,n),t.addEventListener("pointerup",this.onUp,n),t.addEventListener("pointercancel",this.onUp,n),t.addEventListener("lostpointercapture",this.onUp,n),t.addEventListener("wheel",this.onWheel,{passive:!1,signal:this.exploreAbort.signal}),t.addEventListener("keydown",this.onKey,{signal:this.exploreAbort.signal})}else this.exploreAbort?.abort(),this.exploreAbort=null,this.pointers.clear(),this.engine.rig.endDrag()}pinchDistance(){let e=this.pointers.values(),t=e.next().value,n=e.next().value;return t&&n?Math.hypot(t.x-n.x,t.y-n.y):0}dispose(){clearTimeout(this.holdTimer),this.abort.abort(),this.exploreAbort?.abort()}};function id(i){let e="";try{let r=i.getExtension("WEBGL_debug_renderer_info");e=String(i.getParameter(r?r.UNMASKED_RENDERER_WEBGL:i.RENDERER)||"")}catch{e=""}let t=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,n=navigator.deviceMemory||4,s=navigator.hardwareConcurrency||4;return/swiftshader|llvmpipe|software|basic render/i.test(e)?"low":t?n<=3||s<=4?"low":"medium":n<=2||s<=2?"medium":"high"}var nd=i=>hs[i]?i:null,lh=class{constructor(e){this.gl=e,this.ext=null,this.ring=[],this.head=0,this.active=null,this.restore()}get available(){return!!this.ext}restore(){this.ring=[],this.active=null,this.head=0;try{this.ext=this.gl.isContextLost()?null:this.gl.getExtension("EXT_disjoint_timer_query_webgl2")}catch{this.ext=null}if(this.ext)try{for(let e=0;e<4;e++)this.ring.push({q:this.gl.createQuery(),pending:!1,skip:!1})}catch{this.ext=null}}begin(){if(!this.ext||this.active)return;let e=this.ring[this.head];if(!(!e||e.pending))try{this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT,e.q),this.active=e}catch{this.active=null}}end(e){let t=this.active;if(t){this.active=null;try{this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),t.pending=!0,t.skip=!!e,this.head=(this.head+1)%this.ring.length}catch{}}}poll(e){if(!this.ext)return;let t=this.gl,n=!1;try{n=!!t.getParameter(this.ext.GPU_DISJOINT_EXT)}catch{return}for(let s=0;s<this.ring.length;s++){let r=this.ring[s];if(!r.pending)continue;let a=!1;try{a=t.getQueryParameter(r.q,t.QUERY_RESULT_AVAILABLE)}catch{a=!0,n=!0}if(!a||(r.pending=!1,n||r.skip))continue;let o=t.getQueryParameter(r.q,t.QUERY_RESULT);e(o/1e6)}}},a0=2e3,td=16.667,oh=td*.75,C1=.85,o0=6e4,l0=1e4,P1=3e5;function bo(i,e,t){return e?i.slice(0,e).sort((s,r)=>s-r)[Math.min(e-1,Math.floor(t*(e-1)+.5))]:0}var ch=class{constructor(e=!0){this.enabled=e,this.maxLevel=Nn.length-1,this.cpu=new Float32Array(512),this.gpu=new Float32Array(512),this.intervals=new Float32Array(512),this.drops=0,this.history=new Float32Array(90),this.reset()}get step(){return Nn[this.level]}reset(){this.level=0,this.nCpu=0,this.nGpu=0,this.nInt=0,this.drops=0,this.hHead=0,this.hCount=0,this.windowStart=0,this.overWindows=0,this.underMs=0,this.verify=null,this.probe=null,this.blocked=new Float64Array(Nn.length),this.upgradeAt=0,this.backoff=l0,this.lastMetric=0,this.mode="none",this.cadence=0}sample(e,t,n,s){!this.enabled||s||(this.nCpu<512&&(this.cpu[this.nCpu++]=t),!(!(e>0)||e>400)&&(n||(this.history[this.hHead]=e,this.hHead=(this.hHead+1)%this.history.length,this.hCount<this.history.length&&this.hCount++),this.nInt<512&&(this.intervals[this.nInt++]=n?-e:e)))}gpuSample(e){this.enabled&&this.nGpu<512&&(this.gpu[this.nGpu++]=e)}_cadence(){let e=this.hCount;return e<12?0:bo(this.history,e,.5)}decide(e,t){if(!this.enabled||(this.windowStart||(this.windowStart=e),e-this.windowStart<a0))return 0;let n=e-this.windowStart;this.windowStart=e;let s=this._evaluate(e,n,t);return this.nCpu=0,this.nGpu=0,this.nInt=0,s}_evaluate(e,t,n){let s=bo(this.cpu,this.nCpu,.75),r=0,a=!1,o=!1,l=!1,c=this._cadence();if(this.cadence=c,n&&this.nGpu>=8){this.mode="timer";let d=bo(this.gpu,this.nGpu,.75);r=d,l=!0,a=d>oh,o=d*this._upRatio()<oh*.5&&s<oh}else if(this.nInt>=12){this.mode="cadence";let d=0,u=0;for(let g=0;g<this.nInt;g++){let v=this.intervals[g],p=v<0?Math.max(33.3,c):Math.max(td,c||td);Math.abs(v)>p*1.5&&d++,v>0&&u++}let h=d/this.nInt;r=h+1e-4,l=!0;let f=!1;if(u>=12&&c>20){let g=bo(this.history,this.hCount,.25),p=(bo(this.history,this.hCount,.75)-g)/c<.1,m=_=>{let A=Math.round(c/_);return A>=1&&Math.abs(c-A*_)/c<.08};f=p&&!m(16.667)&&!m(8.333),f&&(r=Math.max(r,c/100))}a=h>.2||f,o=h<.03&&!f&&s<oh*.5}if(this.lastMetric=r,!l)return 0;if(this.probe){if(a){let d=this.probe.from;return this.probe=null,this.backoff=Math.min(P1,this.backoff*2),this.upgradeAt=e+this.backoff,this.overWindows=0,this.underMs=0,d!==this.level?(this.level=d,1):0}e-this.probe.at>a0*2.5&&(this.probe=null,this.backoff=l0)}if(this.verify){let d=this.verify;if(this.verify=null,r>d.metric*C1){let u=this.level;if(this.cutsFill?this.cutsFill(u,d.level):!0)for(let f=d.level+1;f<=this.maxLevel;f++)this.blocked[f]=e+o0;else this.blocked[u]=e+o0;return this.level=d.level,this.overWindows=0,this.underMs=0,-1}}if(a){if(this.underMs=0,this.overWindows++,this.overWindows>=2){let d=this._nextDown(e);if(d>this.level)return this.verify={level:this.level,metric:r},this.level=d,this.overWindows=0,1}return 0}if(this.overWindows=0,o&&this.level>0){if(this.underMs+=t,this.underMs>=5e3&&e>=this.upgradeAt)return this.probe={from:this.level,at:e},this.level=this._nextUp(),this.underMs=0,-1}else this.underMs=0;return 0}_nextDown(e){for(let t=this.level+1;t<=this.maxLevel;t++)if(!(this.blocked[t]>e)&&(!this.isNoop||!this.isNoop(t,this.level)))return t;return this.level}_nextUp(){for(let e=this.level-1;e>0;e--)if(!this.isNoop||!this.isNoop(e,this.level))return e;return 0}_upRatio(){if(this.level===0)return 1;let e=Nn[this.level],t=Nn[this._nextUp()],n=this.pixelRatioOf?(this.pixelRatioOf(t)/Math.max(.01,this.pixelRatioOf(e)))**2:1;return Math.max(n,t.draw/e.draw,1)}info(){return{level:this.level,mode:this.mode,metric:Math.round(this.lastMetric*100)/100,cadence:Math.round(this.cadence*10)/10,backoff:this.backoff}}};var I1=Math.PI*2,tn=(i,e,t)=>i<e?e:i>t?t:i,cr=i=>i<0?0:i>1?1:i,hi=(i,e,t)=>i+(e-i)*t;function oe(i,e,t){let n=cr((t-i)/(e-i));return n*n*(3-2*n)}function ps(i,e,t){let n=cr((t-i)/(e-i));return n*n*n*(n*(n*6-15)+10)}function c0(i,e,t){let n=cr((t-i)/(e-i));return n<=0?0:n>=1?1:n<.5?Math.pow(2,20*n-10)/2:(2-Math.pow(2,-20*n+10))/2}function To(i,e,t,n){return i<e-t?0:i<e?oe(e-t,e,i):Math.exp(-(i-e)/n)}function Hs(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function gi(i){let e=i();return e<1e-9&&(e=1e-9),Math.sqrt(-2*Math.log(e))*Math.cos(I1*i())}function Ei(i,e=!0,t=!0){let n=i.length,s=new Float64Array(n),r=new Float64Array(n),a=new Float64Array(n);for(let l=0;l<n;l++)s[l]=i[l][0],r[l]=i[l][1];let o=new Float64Array(Math.max(1,n-1));for(let l=0;l<n-1;l++)o[l]=(r[l+1]-r[l])/(s[l+1]-s[l]);for(let l=0;l<n;l++)l===0?a[l]=n>1?o[0]:0:l===n-1?a[l]=o[n-2]:a[l]=o[l-1]*o[l]<=0?0:(o[l-1]+o[l])/2;e&&(a[0]=0),t&&(a[n-1]=0);for(let l=0;l<n-1;l++){if(o[l]===0){a[l]=0,a[l+1]=0;continue}let c=a[l]/o[l],d=a[l+1]/o[l],u=c*c+d*d;if(u>9){let h=3/Math.sqrt(u);a[l]=h*c*o[l],a[l+1]=h*d*o[l]}}return{ts:s,vs:r,ms:a,n}}function Ai(i,e){let{ts:t,vs:n,ms:s,n:r}=i;if(e<=t[0])return n[0];if(e>=t[r-1])return n[r-1];let a=0;for(;a<r-2&&e>t[a+1];)a++;let o=t[a+1]-t[a],l=(e-t[a])/o,c=l*l,d=c*l;return(2*d-3*c+1)*n[a]+(d-2*c+l)*o*s[a]+(-2*d+3*c)*n[a+1]+(d-c)*o*s[a+1]}var ze=3.6,Bn=31,h0=.14,L1=.42,D1=1.12,F1=1.3,hr=Object.freeze([Object.freeze({start:0,key:"collapse"}),Object.freeze({start:ze,key:"birth"}),Object.freeze({start:9.2,key:"structure"}),Object.freeze({start:19.4,key:"world"})]),f0=Object.freeze([2.7,4.95,15.8,Bn]);function p0(i){let e=0;for(let t=1;t<hr.length;t++)i>=hr[t].start&&(e=t);return e}function Ao(i){if(i<=ze)return 0;let e=i-ze,t=.26*(1-Math.exp(-e*2.4))*(1-Math.exp(-e*6)),n=.74*c0(5.2,6.8,i);return t+n}function rd(i){return ps(9.6,15.2,i)}var hh=14.6,uh=19.6;function ad(i){return oe(hh,uh,i)}function od(i){if(i<=hh)return 0;let e=uh-hh;if(i>=uh)return e*.5+(i-uh);let t=(i-hh)/e;return e*(t*t*t-.5*t*t*t*t)}function ld(i){return .13*(1-Math.pow(cr((i-2.6)/(ze-2.6)),2.2))+.003}function cd(i){return .9/Math.max(.035,ze+.12-i)-.9/(ze+.12)}function U1(i){let t=ze+.12-i;return t>.035?.9/(t*t):0}var N1=Ei([[ze,1],[4.3,.97],[5.4,.93],[5.75,.86],[6.05,.72],[6.6,.64],[7.6,.52],[8.6,.36],[9.8,.14],[11.5,.04]]),O1=Ei([[ze,0],[3.68,30],[5.7,30],[6.1,14],[6.6,11],[7.6,10],[8.4,6.5],[9,2.4],[9.6,0]]),B1=Ei([[ze,16],[4.4,12],[5.4,10],[5.85,5],[6.2,2.4],[7,1.8],[8.6,.9],[9.4,.6]]),k1=Ei([[ze,.22],[5.4,.22],[5.75,.08],[5.95,0]]),Eo=5.84,u0=5.98,z1=Ei([[Eo,-.85],[6.4,-.6],[7,-.28],[8,-.08],[9.2,.1]]),H1=Ei([[Eo,1],[6.5,.85],[7.4,.4],[8.4,.1]]),V1=Ei([[Eo,2],[6.3,1.7],[7,1.25],[8,1.1],[8.8,1]]);function m0(){return{t:0,a:0,g:0,spin:0,spinPhase:0,shutter:.02,matterGain:1,webFade:1,heroFade:1,filFade:1,press:0,seedGlow:1,seedScale:1,seedWidth:1,seedBloom:0,core:0,coreSize:.02,coreTint:1,disk:0,diskRadius:.1,diskSpin:0,diskSpinRate:0,plasma:0,plasmaEmit:0,plasmaKappa:0,plasmaFill:.3,temp:0,supercool:0,bubble:0,bubbleDone:0,bubbleWall:0,diff:0,threads:0,threadOpen:0,threadDense:0,threadBead:0,threadCool:0,threadZoom:0,gas:0,condense:0,gasLit:0,band:0,parentSky:0,skyPull:0,newSky:0,galaxy:0,galaxyGlow:0,galaxyStars:1,sun:0,sunBeacon:0,planet:0,cool:0,ocean:0,clouds:0,life:0,atmo:0,shake:0,exposure:1,bloom:.08,bloomAdd:0,flash:0,shockRadius:0,shockAmp:0,lens:0,aberration:0,curveMix:1,hueCurve:0,scrim:0,grain:.05,vignette:.32,bg:[0,0,0],lift:[0,0,0]}}var G1=[4/255,7/255,11/255],d0=[1/255,1.8/255,2.6/255],W1=[3/255,6/255,9/255],sd=[.663*.018+.004,.906*.018+.012,.949*.018+.022];function g0(i,e,t){i.t=e;let n=e-ze;i.a=Ao(e),i.g=rd(e),i.spin=ad(e),i.spinPhase=od(e),i.shutter=.022*(1-.7*oe(9,10,e))+.03*oe(ze,3.75,e)*(1-oe(6.9,8.2,e))+.02*oe(1.8,3.4,e)*(1-oe(3.6,3.8,e)),i.webFade=1-oe(20.6,23,e),i.filFade=1-oe(19.5,21.3,e),i.heroFade=1-oe(19,21.4,e),i.matterGain=1;let s=oe(.2,ze,e),r=oe(3.32,3.56,e)*(1-oe(3.56,ze,e)),a=oe(0,h0,e)*Math.exp(-Math.max(0,e-h0)/L1);i.press=a,i.seedGlow=e<1.6?D1*(1+.7*a)*(1-oe(.3,1.5,e)):0,i.seedScale=1+.12*a,i.seedWidth=(1+.25*a)*(1-.4*oe(.25,1.3,e)),i.seedBloom=F1*(1-oe(.15,2.2,e));let o=(.9*oe(.04,.9,e)+2.2*s*s*s+2.2*To(e,ze,.04,.16))*(1+.85*a);o*=1-.55*r,e>ze&&(o=(1.2+7*Math.exp(-n/.05))*Math.exp(-n/.5)),i.core=o,i.coreSize=e<=ze?hi(.008,.0045,s)*(1-.35*r)*(1+.28*a):.006+.006*(1-Math.exp(-n*5)),i.coreTint=e<=ze?1-.65*oe(2.6,ze,e):0,i.disk=oe(1.1,2.4,e)*(1-oe(3.5,ze,e)),i.diskRadius=ld(e),i.diskSpin=cd(e),i.diskSpinRate=U1(e),i.temp=e<=ze?1:Ai(N1,e),i.plasmaEmit=e<=ze?0:Ai(O1,e),i.plasma=e<=ze?0:1-oe(Eo,u0,e),i.plasmaKappa=Ai(B1,e),i.plasmaFill=Ai(k1,e),i.supercool=.3*oe(4.25,4.8,e),i.bubble=oe(4.3,5.6,e),i.bubbleWall=2.2*oe(4.4,4.52,e)*(1-oe(5.35,5.85,e)),i.bubbleDone=oe(5.35,5.85,e),i.diff=oe(6.4,8,e),i.threads=oe(Eo,u0,e)*(1-oe(8.8,9.6,e))*Ai(V1,e),i.threadOpen=Ai(z1,e),i.threadDense=Ai(H1,e),i.threadBead=oe(7.8,9,e),i.threadCool=oe(6.2,9,e),i.threadZoom=.035*oe(5.94,6.02,e)*(1-oe(6.2,6.8,e)),i.gas=oe(9.2,10.4,e)*(1-.75*oe(13.2,15.6,e))*(1-oe(19.2,21,e)),i.condense=ps(9.4,12.4,e),i.gasLit=oe(12,13.6,e),i.parentSky=oe(0,.7,e)*(1-oe(3.25,3.55,e)),i.skyPull=oe(.9,3.45,e),i.newSky=oe(22.6,26.5,e),i.band=oe(23.5,25.7,e),i.galaxy=oe(18.9,21.2,e),i.galaxyGlow=oe(19.2,21.6,e),i.galaxyStars=1-.85*oe(24,26.4,e),i.sun=oe(21.6,23.6,e),i.sunBeacon=oe(21.8,23.2,e)*(1-oe(24.6,26.2,e)),i.planet=oe(24.6,25.6,e),i.cool=oe(25.6,27.8,e),i.ocean=oe(26.6,29,e),i.clouds=oe(27.4,29.8,e),i.life=oe(28.6,30.6,e),i.atmo=oe(26.8,29.6,e),i.shake=t?0:To(e,ze,.02,.32)*(e>=ze?1:0);let l=e>=ze?Math.exp(-n/.085):0,c=t?.2:1;i.flash=l*c,i.exposure=(1-.3*r-.18*oe(9,10.4,e)*(1-oe(12,14,e)))*(1+.35*l*c),i.bloom=.075+.08*(1-oe(.1,2,e))+.05*s*(e<=ze?1:0)+.08*c*To(e,ze,.04,.16)+.04*oe(12.5,15,e),i.bloomAdd=.55*(1-oe(.1,2,e)),i.shockRadius=e>=ze?.04+1.9*(1-Math.exp(-n*2.6)):0,i.shockAmp=t?0:e>=ze?Math.exp(-n/.45)*oe(ze,3.62,e):0,i.lens=oe(1,2.9,e)*(1-oe(3.36,3.56,e)),i.aberration=.25+(t?0:2.5*To(e,ze,.04,.3)),i.grain=hi(.022,.042,oe(.2,2,e)),i.curveMix=oe(.15,2.2,e),i.hueCurve=oe(3.56,3.72,e)*(1-oe(10.4,12.2,e)),i.scrim=oe(.3,1.6,e)*(.2+.32*oe(3.56,3.7,e)*(1-oe(8.8,9.8,e))+.1*oe(11,13,e)*(1-oe(22,24,e))),i.vignette=.3+.12*s*(e<=ze?1:0);let d=1-oe(.2,1.8,e);i.lift[0]=sd[0]*d,i.lift[1]=sd[1]*d,i.lift[2]=sd[2]*d;let u=oe(.6,3.3,e),h=oe(21,27,e);for(let f=0;f<3;f++){let g=hi(G1[f],d0[f],u);i.bg[f]=e<ze?g:hi(d0[f],W1[f],h)}return i}var dh=(i,e,t)=>[i,e,t],X1=i=>Math.hypot(i[0],i[1],i[2]),Sn=i=>{let e=X1(i)||1;return[i[0]/e,i[1]/e,i[2]/e]},ca=(i,e)=>[i[0]+e[0],i[1]+e[1],i[2]+e[2]],fh=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],kn=(i,e)=>[i[0]*e,i[1]*e,i[2]*e],la=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],hd=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]];function v0(i,e,t){let n=Math.cos(t),s=Math.sin(t),r=la(e,i),a=hd(e,i);return[i[0]*n+a[0]*s+e[0]*r*(1-n),i[1]*n+a[1]*s+e[1]*r*(1-n),i[2]*n+a[2]*s+e[2]*r*(1-n)]}var Ro=2.5,ud=2.6,ph=Sn(dh(.16,.95,.27)),Kt=dh(.46,.1,-1),Gi=Sn(dh(-.3,1,.42)),Hn=.15,ur=Sn(dh(-.25,.42,1)),ms=Gi,q1=fh(ur,kn(ms,la(ur,ms))),wn=Sn(q1),mh=Sn(hd(ms,wn));function Y1(i,e){let t=Math.cos(e);return Sn(ca(ca(kn(wn,Math.cos(i)*t),kn(mh,Math.sin(i)*t)),kn(ms,Math.sin(e))))}var Co=.62,ti=ca(Kt,kn(Y1(Co,0),Hn*.72)),Vs=2e-5,x0=Vs*4.2,$1=Vs*36,Z1=Sn(fh(Kt,ti)),K1=v0(Z1,ms,-.66),zn=Sn(ca(K1,kn(ms,-.07))),J1=-.36,j1=Sn(fh(ms,kn(zn,la(ms,zn)))),Gs=Sn(v0(j1,zn,J1)),Q1=Sn(hd(zn,Gs)),eM=Sn(ca(ca(kn(zn,-.34),kn(Q1,-.86)),kn(Gs,.38))),ha=fh(ti,kn(eM,$1)),_0=Vs*9.6;function dd(i){let e=Math.asin(Math.max(-1,Math.min(1,la(i,ms))));return[Math.atan2(la(i,mh),la(i,wn)),e]}var gs=19.4,pd=12.3,tM=[0,1,2].map(i=>Ei([[ze,0],[9.4,[0,0,0][i]],[pd,[.16,.04,-.55][i]],[16.2,[.26,.06,-.76][i]],[gs,Kt[i]]])),iM=[[0,[0,0,1]],[ze,[0,0,1]],[9.4,[.04,.03,1]],[pd,[0,.1,1]],[14.6,[-.14,.3,1]],[16.2,[-.2,.36,1]],[gs,ur]],nM=[0,1,2].map(i=>Ei(iM.map(([e,t])=>[e,t[i]]))),[gh,sM]=dd(ur),[da,rM]=dd([-zn[0],-zn[1],-zn[2]]);for(;da-gh>Math.PI;)da-=Math.PI*2;for(;da-gh<-Math.PI;)da+=Math.PI*2;var aM=Ei([[gs,gh],[21.6,gh+.32],[23,Co*.85],[24.6,Co],[26.2,hi(Co,da,.65)],[28.8,da]]),oM=Ei([[gs,sM],[21.2,.8],[22.4,.7],[23.4,.5],[24.6,.2],[26.2,.1],[28.8,rM]]),lM=Ei([[0,0],[1.4,Math.log(.985)],[2.7,Math.log(.86)],[ze,Math.log(.6)]],!0,!1),cM=Ei([[ze,Math.log(.6)],[3.85,Math.log(.8)],[4.05,Math.log(1.25)],[4.35,Math.log(1.7)],[4.7,Math.log(1.95)],[5.1,Math.log(2.05)],[5.5,Math.log(2.1)],[5.9,Math.log(1.95)],[7,Math.log(.95)],[9.4,Math.log(.66)],[pd,Math.log(.62)],[14.6,Math.log(1.3)],[17,Math.log(.84)],[gs,Math.log(.56)],[21.2,Math.log(.36)],[22.4,Math.log(.21)],[23.4,Math.log(.075)],[24.3,Math.log(.022)],[25.4,Math.log(.0034)],[26.6,Math.log(85e-5)],[28.2,Math.log(29e-5)],[30.4,Math.log(_0)]]),hM=Ei([[ze,52],[9.4,50],[gs,44],[25,40],[Bn,38]]),uM=Ei([[ze,46],[gs,46],[23,44],[26.6,42],[28.4,31],[29.5,30]]),dM=27,fM=.12,pM=.2;function M0(i,e,t){let n=2*Math.atan(Math.tan(t*Math.PI/360)/e)*180/Math.PI;return Math.max(i,n)}function y0(i,e,t){return hi(t,M0(t,e,dM),oe(.2,2,i))}function S0(i,e,t,n,s,r,a){let o=i.target,l=i.dir,c=i.up,d;if(e<=ze){let m=ps(.15,3.1,e),_=i.handoverTarget,A=i.handoverUp;for(let w=0;w<3;w++)o[w]=_[w]*(1-m);let S=Math.exp(Ai(lM,e));l[0]=-o[0],l[1]=-o[1],l[2]=S-o[2],d=Math.hypot(l[0],l[1],l[2]),c[0]=hi(A[0],0,m),c[1]=hi(A[1],1,m),c[2]=hi(A[2],0,m)}else{if(e<=gs)for(let _=0;_<3;_++)o[_]=Ai(tM[_],e);else{let _=ps(21,24.4,e),A=tn((.8-n)/.35,0,1),S=ps(hi(24.8,24.5,A),hi(27.9,27.1,A),e);for(let w=0;w<3;w++)o[w]=Kt[w]+(ti[w]-Kt[w])*_+(ha[w]-ti[w])*S}if(e<=gs)for(let _=0;_<3;_++)l[_]=Ai(nM[_],e);else{let _=Ai(aM,e),A=Ai(oM,e),S=Math.cos(_)*Math.cos(A),w=Math.sin(_)*Math.cos(A),y=Math.sin(A);for(let T=0;T<3;T++)l[T]=wn[T]*S+mh[T]*w+Gi[T]*y}d=Math.exp(Ai(cM,e));let m=ps(21,28.8,e);c[0]=hi(0,Gs[0],m),c[1]=hi(1,Gs[1],m),c[2]=hi(0,Gs[2],m)}ua(l);let u=i.right;fd(u,c,l),ua(u),fd(c,l,u),ua(c);let h=0,f=0;if(t.shake>0&&(h+=t.shake*.014*(Math.sin(e*71)+.6*Math.sin(e*133+1.7)),f+=t.shake*.012*(Math.sin(e*89+.4)+.5*Math.sin(e*151+2.9))),h-=r.x*.032,f+=r.y*.022,!a&&e>Bn-1.5){let m=e-(Bn-1.5),_=oe(0,6,m);h+=_*.022*Math.sin(m*.061),f+=_*.012*Math.sin(m*.043+1.1)}for(let m=0;m<3;m++)l[m]+=u[m]*h+c[m]*f;ua(l),i.distance=d;let g=i.position;for(let m=0;m<3;m++)g[m]=o[m]+l[m]*d;if(e<=ze)i.fov=y0(e,n,s);else{let m=M0(Ai(hM,e),n,Ai(uM,e));i.fov=hi(y0(ze,n,s),m,ps(ze,4.1,e))}i.fov=tn(i.fov,10,100);let v=fM*Math.min(1,n)*oe(ze,3.95,e)*(1-oe(5.6,6.3,e))+pM*i.shortScreen*oe(9.6,11.2,e)*(1-oe(19.4,20.8,e)),p=i.look;if(v>0){let m=v*Math.tan(i.fov*Math.PI/360);for(let _=0;_<3;_++)l[_]+=c[_]*m;ua(l),fd(c,l,u),ua(c)}for(let m=0;m<3;m++)p[m]=g[m]-l[m]*d;return i.near=Math.max(d*.02,1e-7),i.far=40,i}function w0(){return{position:[0,0,1],target:[0,0,0],look:[0,0,0],dir:[0,0,1],up:[0,1,0],right:[1,0,0],fov:45,near:.02,far:40,distance:1,handoverTarget:[0,0,0],handoverUp:[0,1,0],shortScreen:0}}function ua(i){let e=Math.hypot(i[0],i[1],i[2])||1;i[0]/=e,i[1]/=e,i[2]/=e}function fd(i,e,t){let n=e[1]*t[2]-e[2]*t[1],s=e[2]*t[0]-e[0]*t[2],r=e[0]*t[1]-e[1]*t[0];i[0]=n,i[1]=s,i[2]=r}var vs=`
float hash11(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float hash13(vec3 p3) { p3 = fract(p3 * 0.1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
vec3 hash33(vec3 p3) {
  p3 = fract(p3 * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yxz + 33.33);
  return fract((p3.xxy + p3.yxx) * p3.zyx);
}
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
`,bn=`
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 10.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.5 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 105.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
`,Oi=`
const vec3 P_WHITE = vec3(0.93, 0.985, 1.0);
const vec3 P_HI = vec3(0.79, 0.965, 1.0);
const vec3 P_ICE = vec3(0.45, 0.9, 1.0);
const vec3 P_BLUE = vec3(0.18, 0.63, 1.0);
const vec3 P_DEEP = vec3(0.12, 0.5, 1.0);
const vec3 P_ABYSS = vec3(0.06, 0.35, 0.9);
`,b0=`
vec3 thermal(float k) {
  k = clamp(k, 0.0, 1.0);
  // Luminance rises 0.035 \u2192 0.23 \u2192 0.55 \u2192 0.78 \u2192 0.93 (as the old ramp did); the hue stays put.
  vec3 c0 = vec3(0.0092, 0.0385, 0.077);
  vec3 c1 = vec3(0.073, 0.255, 0.405);
  vec3 c2 = vec3(0.26, 0.607, 0.867);
  vec3 c3 = vec3(0.43, 0.86, 0.954);
  vec3 c4 = vec3(0.80, 0.95, 1.00);
  if (k < 0.25) return mix(c0, c1, k / 0.25);
  if (k < 0.5) return mix(c1, c2, (k - 0.25) / 0.25);
  if (k < 0.75) return mix(c2, c3, (k - 0.5) / 0.25);
  return mix(c3, c4, (k - 0.75) / 0.25);
}
`,md=`
vec3 burn(float k) {
  k = clamp(k, 0.0, 1.15);
  vec3 c;
  if (k < 0.3) c = mix(vec3(0.018, 0.105, 0.27), vec3(0.062, 0.26, 0.62), k / 0.3);
  else if (k < 0.52) c = mix(vec3(0.062, 0.26, 0.62), vec3(0.1, 0.48, 1.03), (k - 0.3) / 0.22);
  else if (k < 0.72) c = mix(vec3(0.1, 0.48, 1.03), vec3(0.24, 0.74, 1.2), (k - 0.52) / 0.2);
  else if (k < 0.9) c = mix(vec3(0.24, 0.74, 1.2), vec3(0.5, 0.84, 1.0), (k - 0.72) / 0.18);
  else c = mix(vec3(0.5, 0.84, 1.0), vec3(0.93, 0.98, 1.0), clamp((k - 0.9) / 0.2, 0.0, 1.0));
  return c * (0.06 + 2.94 * k * k);
}
`,dr=`
varying vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;var T0=.34,vh=.1,E0=.4,mM=`
attribute vec4 aOrbit;  // radius (galaxy radii), angle, height, brightness
attribute vec3 aColor;
uniform float uTime, uOpacity, uScale, uPixelRatio, uNearFade, uRefDepth;
varying vec3 vColor;
void main() {
  float r = aOrbit.x;
  float ang = aOrbit.y + uTime * 0.03 / (r + 0.14);
  vec3 local = vec3(cos(ang) * r, aOrbit.z, sin(ang) * r) * uScale;
  vec4 mv = modelViewMatrix * vec4(local, 1.0);
  float depth = max(-mv.z, 1e-7);
  gl_Position = projectionMatrix * mv;
  // Stars are point sources: a small fixed image, flux falling with distance \u2014 so on the way in
  // the nearest resolve into individual bright stars streaming past.
  float flux = min(4.0, (uRefDepth * uRefDepth) / (depth * depth));
  gl_PointSize = (1.25 + 0.85 * min(aOrbit.w, 2.0) + 0.9 * smoothstep(1.2, 4.0, flux)) * uPixelRatio;
  float near = smoothstep(uNearFade * 0.3, uNearFade, depth);
  vColor = aColor * aOrbit.w * flux * uOpacity * near;
}
`,gM=`
varying vec3 vColor;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float d2 = dot(p, p);
  if (d2 > 1.0) discard;
  gl_FragColor = vec4(vColor * exp(-d2 * 4.0) * (1.0 - d2), 1.0);
}
`,vM=`
varying vec2 vP;
varying vec3 vView;
varying vec3 vNormalV;
void main() {
  vP = position.xy;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vView = mv.xyz;
  vNormalV = normalize(normalMatrix * vec3(0.0, 0.0, 1.0));
  gl_Position = projectionMatrix * mv;
}
`,xM=`
uniform float uOpacity, uTime;
varying vec2 vP;
varying vec3 vView;
varying vec3 vNormalV;
${bn}
${Oi}
void main() {
  vec2 p = vP * 1.3;              // quad spans \xB11.3 galaxy radii
  float r = length(p);
  if (r > 1.3) discard;
  // The plane is laid down with local z = \u2212vP.y; match the star particles' angle and rotation.
  float th = atan(-p.y, p.x) - uTime * 0.03 / (r + 0.14);
  vec2 pr = vec2(cos(th), sin(th)) * r;
  // Two grand-design arms broken into flocculent spurs and star-forming knots.
  float wob = snoise(vec3(pr * 3.0, 2.0)) * 0.8 + snoise(vec3(pr * 7.5, 5.0)) * 0.3;
  float spiral = th - log(max(r, ${vh.toFixed(3)}) / ${vh.toFixed(3)}) / ${T0.toFixed(3)};
  float phase = 2.0 * spiral + wob;
  // The arms grow out of the bulge (no bright clumps where they start) and fade at the rim.
  float armOn = smoothstep(0.07, 0.26, r) * smoothstep(1.2, 0.72, r);
  float arm = pow(0.5 + 0.5 * cos(phase), 3.0) * armOn;
  float n = snoise(vec3(pr * 9.0, 1.3)) * 0.5 + 0.5;
  float spur = pow(0.5 + 0.5 * cos(phase + 1.9 + n * 2.8), 6.0) * armOn * 0.35;
  // Dust lanes run along the inner (concave) edge of each arm, broken into patches.
  float lane = pow(0.5 + 0.5 * cos(phase + 0.6), 7.0) * smoothstep(0.1, 0.24, r) * smoothstep(1.0, 0.35, r)
             * smoothstep(0.25, 0.65, n);
  // Star clouds, and (the brightest of them) cyan-white star-forming knots.
  float fine = snoise(vec3(pr * 30.0, 4.1)) * 0.5 + 0.5;
  float clumps = smoothstep(0.55, 0.95, fine);
  float hii = smoothstep(0.86, 0.99, fine) * arm;
  float disk = exp(-r / ${(E0*.82).toFixed(3)}) * smoothstep(1.3, 0.85, r);
  float halo = exp(-r / 0.55) * 0.08;
  float bulge = exp(-pow(r / 0.07, 0.9)) + 0.2 * exp(-r / 0.14);
  // A white-ice bulge, ice-blue arms, bright cyan-white knots.
  vec3 core = P_HI * 0.86;
  vec3 cool = vec3(0.5, 0.8, 1.0);
  vec3 knot = vec3(0.68, 0.94, 1.0);
  vec3 col = core * bulge * 1.3;
  col += mix(core * 0.5, cool, smoothstep(0.08, 0.42, r)) * (disk * (0.12 + 1.3 * (arm + spur) * (0.55 + 0.6 * n)) + halo);
  col += cool * clumps * (arm + spur) * disk * 0.9;
  col += knot * hii * disk * 1.05;
  // Dust lanes swallow the paler light first: dark, blue-grey.
  col *= mix(vec3(1.0), vec3(0.34, 0.41, 0.47), lane);
  // A thin disk seen at a grazing angle is brighter (a longer path through it): from near the
  // plane it gathers toward the band across the sky.
  float dist = length(vView);
  float cosv = abs(dot(vView / max(dist, 1e-9), vNormalV));
  float graze = clamp(0.42 / max(cosv, 0.1), 1.0, 2.4);
  // Close up, the diffuse light resolves into the stars themselves (the particles): fade it.
  float resolve = smoothstep(${(Hn*.06).toFixed(4)}, ${(Hn*.3).toFixed(4)}, dist);
  gl_FragColor = vec4(col * uOpacity * graze * resolve, 1.0);
}
`;function gd(i,e){if(i()<.13)return e.r=Math.abs(gi(i))*.075+.005,e.ang=i()*Math.PI*2,e.h=gi(i)*.035*Math.max(.2,1-e.r*3),e.kind=0,e;e.r=-Math.log(1-i()*.985)*E0+.03,e.r>1.15&&(e.r=.45+(e.r-1.15)%.7);let n=i()<.64,s=Math.log(Math.max(e.r,vh)/vh)/T0,r=i()<.5?0:Math.PI,a=1+3.5*Math.max(0,1-(e.r-.08)/.2),o=n?gi(i)*(.12+.08*i())*a:i()*Math.PI*2;return e.ang=s+r+o,e.h=gi(i)*(.008+.012*e.r),e.kind=n?1:2,e}function A0(i,e,t,n,s){let r={r:0,ang:0,h:0,kind:0};for(let a=n;a<s;a++){gd(i,r);let o,l,c,d;if(r.kind===0)o=(.3+i()*.45)*.85,l=.84,c=.95,d=1;else{let u=r.kind===1&&i()<.45;o=u?.32+Math.pow(i(),4)*2.4:.1+i()*.22,u?(l=.55,c=.82,d=1):i()<.5?(l=.84,c=.93,d=1):(l=.72,c=.87,d=1),u&&i()<.06&&(l=.68,c=.94,d=1,o*=1.3)}e[a*4]=r.r,e[a*4+1]=r.ang,e[a*4+2]=r.h,e[a*4+3]=o,t[a*3]=l,t[a*3+1]=c,t[a*3+2]=d}}function R0({count:i,orbit:e,color:t}){let n=new wt,s=new L(...wn),r=new L(...Gi),a=new L().crossVectors(s,r);n.matrixAutoUpdate=!1,n.matrix.makeBasis(s,r,a).setPosition(Kt[0],Kt[1],Kt[2]),n.matrixWorldNeedsUpdate=!0;let o=new pt;o.setAttribute("position",new ft(new Float32Array(i*3),3)),o.setAttribute("aOrbit",new ft(e,4)),o.setAttribute("aColor",new ft(t,3)),o.boundingSphere=new Ki(new L,1e6);let l={uTime:{value:0},uOpacity:{value:0},uScale:{value:Hn},uPixelRatio:{value:1},uNearFade:{value:.002},uRefDepth:{value:.4}},c=new Fi(o,new Fe({vertexShader:mM,fragmentShader:gM,uniforms:l,transparent:!0,depthTest:!1,depthWrite:!1,blending:Vt,toneMapped:!1}));c.frustumCulled=!1,c.renderOrder=2;let d={uOpacity:{value:0},uTime:{value:0}},u=new ki(2,2),h=new $e(u,new Fe({vertexShader:vM,fragmentShader:xM,uniforms:d,transparent:!0,depthTest:!1,depthWrite:!1,blending:Vt,toneMapped:!1,side:Mi}));h.rotation.x=-Math.PI/2,h.scale.setScalar(Hn*1.3),h.frustumCulled=!1,h.renderOrder=1,n.add(h,c);function f(v,p,m){if(n.visible=v.galaxy>.001,!n.visible)return;l.uTime.value=v.t,l.uOpacity.value=v.galaxy*v.galaxyStars*p.galaxyGain,l.uPixelRatio.value=p.pixelRatio,l.uNearFade.value=Math.max(1e-6,p.cameraDistance*.3),l.uRefDepth.value=Math.max(.05,Math.min(.45,p.cameraDistance)),d.uTime.value=v.t;let _=Math.min(1,Math.max(0,(m-.003)/.006));d.uOpacity.value=v.galaxyGlow*.5*_,h.visible=d.uOpacity.value>.001}function g(){o.dispose(),c.material.dispose(),u.dispose(),h.material.dispose()}return{group:n,update:f,dispose:g}}var xd=56;function _M(i,e){let t=[{p:Kt.slice(),mass:2.6,r:Hn*.9,axis:Gi.slice(),spin:-.35}],n=[0,0,.6],s=Kt.map((c,d)=>c+ur[d]*.56),r=c=>MM(c,n,s);for(let c of[[-.42,-.3,-.85],[.1,.42,-1.75],[-.85,.2,-1.45],[.95,-.35,-1.6],[-.2,-.75,-1.9],[.62,.62,-.55]])r(c)<.3||t.push({p:c,mass:.7+i()*.6,r:.035+.045*1,axis:vd(i),spin:i()<.5?1:-1});let a=0;for(;t.length<e&&a++<2e4;){let c=Ro*.92*Math.cbrt(i()),d=vd(i),u=[d[0]*c,d[1]*c,d[2]*c];if(r(u)<.3||t.some(f=>C0(f.p,u)<.38))continue;let h=.25+Math.pow(i(),2.6)*1.6;t.push({p:u,mass:h,r:.035+.045*h,axis:vd(i),spin:i()<.5?1:-1})}let o=[],l=new Set;return t.forEach((c,d)=>{let u=t.map((f,g)=>[g,C0(c.p,f.p)]).filter(([f])=>f!==d).sort((f,g)=>f[1]-g[1]),h=d===0?5:4;for(let f=0;f<h&&f<u.length;f++){let g=u[f][0];if(u[f][1]>1.2)break;let v=d<g?`${d}-${g}`:`${g}-${d}`;l.has(v)||(l.add(v),o.push({a:d,b:g,len:u[f][1],w:u[f][1]*(t[d].mass+t[g].mass)}))}}),{nodes:t,edges:o}}function vd(i){return _d(i,[0,0,0])}function _d(i,e){let t=i()*2-1,n=i()*Math.PI*2,s=Math.sqrt(1-t*t);return e[0]=s*Math.cos(n),e[1]=t,e[2]=s*Math.sin(n),e}function yM(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}function C0(i,e){return Math.hypot(i[0]-e[0],i[1]-e[1],i[2]-e[2])}function MM(i,e,t){let n=[t[0]-e[0],t[1]-e[1],t[2]-e[2]],s=[i[0]-e[0],i[1]-e[1],i[2]-e[2]],r=cr((s[0]*n[0]+s[1]*n[1]+s[2]*n[2])/(n[0]**2+n[1]**2+n[2]**2));return Math.hypot(s[0]-n[0]*r,s[1]-n[1]*r,s[2]-n[2]*r)}function P0(i,e){let t=0,n=i.length-1;for(;t<n;){let s=t+n>>1;i[s]<e?t=s+1:n=s}return t}function*SM(i,e,t,n){let s=Hs(90417),{nodes:r,edges:a}=_M(s,e),o=[],l=0;r.forEach(S=>{l+=S.mass,o.push(l)});let c=[],d=0;a.forEach(S=>{d+=S.w,c.push(d)}),yield;let{q:u,web:h,star:f,rnd:g}=t,v={r:0,ang:0,h:0,kind:0},p=yM(wn,Gi),m=new Int16Array(i).fill(-1),_=new Float32Array(r.length).fill(99),A=[0,0,0];for(let S=0;S<i;S++){S>0&&S%n===0&&(yield);let w=s(),y,T,x,E=.2,R=-1;if(w<.3){R=P0(o,s()*l);let N=r[R];if(R===0){gd(s,v);let V=v.r*Hn,Y=v.ang,re=v.h*Hn+gi(s)*Hn*.12,ee=Math.cos(Y)*V,Pe=Math.sin(Y)*V;y=N.p[0]+wn[0]*ee+p[0]*Pe+N.axis[0]*re,T=N.p[1]+wn[1]*ee+p[1]*Pe+N.axis[1]*re,x=N.p[2]+wn[2]*ee+p[2]*Pe+N.axis[2]*re}else{let V=N.r*(s()<.7?.45:1.1);y=N.p[0]+gi(s)*V,T=N.p[1]+gi(s)*V,x=N.p[2]+gi(s)*V}E=.24}else if(w<.84){let N=a[P0(c,s()*d)],V=r[N.a].p,Y=r[N.b].p,re=s(),ee=.014+.03*(1-Math.sin(Math.PI*re))+.012*Math.max(0,Math.sin(re*23+N.len*7));y=V[0]+(Y[0]-V[0])*re+gi(s)*ee,T=V[1]+(Y[1]-V[1])*re+gi(s)*ee,x=V[2]+(Y[2]-V[2])*re+gi(s)*ee,E=.2}else{_d(s,A);let N=Ro*Math.cbrt(s());y=A[0]*N,T=A[1]*N,x=A[2]*N,E=.06}let D=y+gi(s)*E,F=T+gi(s)*E,I=x+gi(s)*E,C=Math.sqrt(D*D+F*F+I*I);if(C>Ro*1.04){let N=Ro*1.04/C;D*=N,F*=N,I*=N}u[S*3]=D,u[S*3+1]=F,u[S*3+2]=I,h[S*4]=y,h[S*4+1]=T,h[S*4+2]=x,h[S*4+3]=w>=.84?-1:R+1,m[S]=R,g[S*4]=s(),g[S*4+1]=s(),g[S*4+2]=s(),g[S*4+3]=s();let U=99,H=99,G=0,K=R===0?.03:R>0?.05:w<.84?.012:0;if(s()<K){let N=R>=0?r[R].mass:.3;U=11.95+Math.pow(s(),1.5)*2.4+(1-Math.min(1,N/1.8))*.9,G=.45+Math.pow(s(),3)*2.4,U<12.8&&(G*=2),s()<.34&&(H=U+1+s()*2.2,H>17.6?H=99:R>=0&&(_[R]=Math.min(_[R],H)))}f[S*4]=U,f[S*4+1]=H,f[S*4+3]=G}yield;for(let S=0;S<i;S++){S>0&&S%(n*4)===0&&(yield);let w=m[S],y=w>=0?_[w]:99;f[S*4+2]=y<99?y+g[S*4+2]*1.6:99,f[S*4+3]===0&&y<99&&s()<.045&&(f[S*4]=y+.5+s()*2.2,f[S*4+1]=99,f[S*4+3]=-(.4+Math.pow(s(),3)*1.4))}return{nodes:r,edges:a}}function*I0(i,e,t=6e3){let n={start:new Float32Array(i*3),color:new Float32Array(i*3),size:new Float32Array(i),energy:new Float32Array(i),q:new Float32Array(i*3),web:new Float32Array(i*4),star:new Float32Array(i*4),rnd:new Float32Array(i*4)},{nodes:s,edges:r}=yield*SM(i,Math.min(e,xd),n,t);return{count:i,arrays:n,nodes:s,edges:r}}var wM=`
#define IMPACT ${ze.toFixed(3)}
#define MAX_NODES ${xd}
#define QUAD_EXTENT 0.78
attribute vec3 aStart;   // handover position (engine world space; film space for the haze)
attribute vec3 aColor;   // handover colour (linear, sprite energy folded in)
attribute float aSize;   // handover sprite diameter (world units); < 0: estimate it from the colour
attribute float aEnergy; // the sprite energy folded into aColor (handed over with the sizes); < 0: estimate
attribute vec3 aQ;       // comoving position after inflation (pre-clustering)
attribute vec4 aWeb;     // web target xyz, w: node index + 1 (0 = filament, \u22121 = void)
attribute vec4 aStar;    // ignition, death (supernova), enrichment time, brightness (<0: second generation)
attribute vec4 aRnd;

uniform vec4 uS[2];      // per time sample: (t, a, growth, spin phase)
uniform vec4 uC[2];      // per time sample: (disk radius, disk angle, spin amount, 0)
uniform vec3 uAxis;
uniform vec4 uNodes[MAX_NODES];     // centre, radius
uniform vec4 uNodeAxes[MAX_NODES];  // axis, spin direction
uniform float uTemp, uDiff, uWebFade, uHeroFade, uFilFade, uGain, uEngineMaxPx;
uniform vec2 uHalfView;  // half viewport in px
uniform float uProjScale; // px per world unit at depth 1
uniform float uSize;      // base world radius
uniform float uMinPx, uMaxPx, uMaxStreak;
uniform float uFocus, uAperture, uNearFade;
// The handover (set once per run, see loadHandover): world \u2192 film space, the engine's view
// (rows: right, up, forward, from its eye) to measure each particle's distance on the reader's
// screen from the trigger, (kx, ky, trigger x, trigger y), (aspect, 1 / diagonal, radius scale,
// world \u2192 film scale).
uniform mat4 uHandover;
uniform mat4 uEngineView;
uniform vec4 uHandA;
uniform vec4 uHandB;

varying vec2 vUv;
varying float vHalf;
varying vec3 vColor;

${vs}
${Oi}
${b0}

// The handover, placed: film-space start, colour, and the collapse schedule
// (x: collapse start, y: arrival, z: settle orbit (< 0: far matter in front), w: engine sprite
// diameter in film units). Evaluated per vertex from the raw engine state, so starting the film
// costs the main thread nothing but one copy of that state.
vec3 hStart;
vec3 hColor;
vec4 hMeta;
float hEnergy;
void placeHandover() {
  hStart = (uHandover * vec4(aStart, 1.0)).xyz;
  // Screen position in the engine view (y down) \u2192 distance from the trigger.
  vec3 q = (uEngineView * vec4(aStart, 1.0)).xyz;
  float depth = max(1e-3, q.z);
  float ex = (q.x * uHandA.x / depth + 0.5 - uHandA.z) * uHandB.x;
  float ey = 0.5 - q.y * uHandA.y / depth - uHandA.w;
  float delay = min(1.4, sqrt(ex * ex + ey * ey) * uHandB.y);
  float r = length(hStart);
  // The engine hands over linear colours with the sprite energy folded in. Matter behind the
  // reader's camera was never on screen: it falls dimmed, so it does not scratch the frame as
  // it sweeps past the lens.
  vec3 c = clamp(aColor, 0.0, 6.0);
  hColor = c * (hStart.z > 1.0 && r > 1.2 ? 0.12 : 1.0);
  // The engine folds a sprite energy (\u221D size, saturating at 4) into the colour. With the engine's
  // sprite sizes and energies handed over the first frame is exact (colour / energy is the sprite's
  // centre pixel as the engine drew it); otherwise both are estimated back from the colour (palette
  // maxima ~0.9).
  hEnergy = aEnergy > 0.0 ? aEnergy : clamp(max(c.r, max(c.g, c.b)) / 0.9, 0.25, 4.0);
  float size = aSize;
  if (size < 0.0) {
    // Below saturation the energy is linear in size; saturated sprites get a modest size
    // (the seed's broad glow is its own glow's job, see ending-core.js).
    size = hEnergy > 3.8 ? 0.03 : clamp(0.0032 * (hEnergy - 0.25) * 2.2, 0.004, 0.03);
  }
  float rn = min(1.2, r / uHandB.z);
  // Free-fall: the inner matter arrives first, everything is in by the impact.
  // Most matter reaches the disk by ~3.3 s; the farthest threads (and stars) fall in last.
  float arrive = rn > 1.05 ? 3.42 + (rn - 1.05) + aRnd.y * 0.06 : 2.25 + pow(min(1.0, rn), 0.7) + (aRnd.y - 0.5) * 0.12;
  arrive = min(IMPACT - 0.03, arrive);
  // The gathering sweeps across the screen from where the reader pressed. The far matter (the
  // reader's stars) falls longest: it starts drifting early and streams in, accelerating, over
  // the last two seconds.
  float st = min(0.04 + 0.95 * min(1.0, delay) + aRnd.z * 0.16, rn > 1.05 ? arrive - 2.3 : arrive - 1.05);
  // Settle orbit; negative for far matter in front of the reader's camera (see collapsePos).
  float orbit = 0.3 + 0.7 * pow(aRnd.w, 0.7);
  hMeta = vec4(max(0.0, st), arrive, rn > 1.05 && hStart.z < 0.9 ? -orbit : orbit, size * uHandB.w);
}

vec3 rotateAxis(vec3 v, vec3 k, float a) {
  float c = cos(a), s = sin(a);
  return v * c + cross(k, v) * s + k * dot(k, v) * (1.0 - c);
}

// The old universe falls into one point, spiralling with accelerating, gravity-like easing.
vec3 collapsePos(float t, float diskR, float diskAng) {
  float ts = hMeta.x, ta = hMeta.y;
  float u = clamp((t - ts) / (ta - ts), 0.0, 1.0);
  float f = pow(1.0 - u * u, 0.8);
  vec3 start = hStart;
  if (hMeta.z < 0.0) {
    // Far matter in front of the reader (its stars): a straight fall would hardly move on
    // screen until the last instant, so it is drawn toward the line of sight first \u2014 the sky
    // visibly streams toward the point, its streaks lengthening \u2014 and plunges at the end.
    start.xy *= 1.0 - 0.8 * smoothstep(0.0, 0.9, u);
  }
  float h0 = dot(start, uAxis);
  vec3 pl = start - uAxis * h0;
  float rp = length(pl);
  vec3 pd = rp > 1e-6 ? pl / rp : vec3(1.0, 0.0, 0.0);
  float orbit = abs(hMeta.z);
  float settled = 1.0 - f;
  float R = rp * f + diskR * orbit * settled;
  float h = h0 * pow(f, 1.7) + diskR * 0.06 * (aRnd.x - 0.5) * settled;
  float wind = (1.0 / (1.0 - 0.88 * settled) - 1.0) * 0.42 * (0.7 + aRnd.z * 0.6);
  float ang = wind + settled * diskAng / pow(orbit, 1.5);
  // The far matter comes straight in \u2014 radial streaks converging on the point \u2014 instead of
  // being whirled round the camera by the disk's Keplerian spin.
  if (hMeta.z < 0.0) ang = 0.0;
  return rotateAxis(pd, uAxis, ang) * R + uAxis * h;
}

float clusterOf(float g) {
  float x = clamp((g - aRnd.x * 0.3) / 0.7, 0.0, 1.0);
  return x * x * (3.0 - 2.0 * x);
}

// The newborn universe: Hubble flow of the comoving position, then gravitational clustering.
vec3 cosmosPos(float t, float a, float g, float spinPh, float spinAmt) {
  vec3 x = mix(aQ, aWeb.xyz, clusterOf(g));
  int ni = int(aWeb.w + 0.5) - 1;
  if (ni >= 0 && spinAmt > 0.0) {
    vec4 node = uNodes[ni];
    vec4 ax = uNodeAxes[ni];
    vec3 rel = x - node.xyz;
    float hh = dot(rel, ax.xyz);
    vec3 pl = rel - ax.xyz * hh;
    float rn = length(pl) / node.w;
    pl *= mix(1.0, 0.8, spinAmt);
    hh *= mix(1.0, 0.12, spinAmt);
    float ang = spinPh * ax.w * 0.9 / (rn + 0.22);
    pl = rotateAxis(pl, ax.xyz, ang);
    x = node.xyz + pl + ax.xyz * hh;
  }
  // The first sparks jet ahead of the expansion, then rejoin the Hubble flow.
  float spark = step(0.95, aRnd.y);
  float age = max(0.0, t - IMPACT);
  float boost = spark * 0.42 * age / (age + 0.35) * (1.0 - smoothstep(5.0, 6.9, t));
  return x * (a + boost * (0.55 + 0.45 * aRnd.z));
}

// (Single exit and constant uniform indices: HLSL translators otherwise warn about
// potentially uninitialised results.)
vec3 positionAt(vec4 s, vec4 c) {
  vec3 p;
  if (s.x < IMPACT) p = collapsePos(s.x, c.x, c.y);
  else p = cosmosPos(s.x, s.y, s.z, s.w, c.z);
  return p;
}

// The new universe's matter in the film's one hue family (ending-glsl.js PALETTE).
const vec3 ICE = vec3(0.42, 0.80, 1.0);
const vec3 COLD = vec3(0.82, 0.94, 1.0);
const vec3 DEEP = P_DEEP;
const vec3 GAS = vec3(0.16, 0.48, 1.0);

// Colour (intensity included) and size factor of this particle at time t.
// Before the impact: the reader's matter falling in.
vec3 collapseLook(float t, float rad, out float size) {
  float u = clamp((t - hMeta.x) / (hMeta.y - hMeta.x), 0.0, 1.0);
  float heat = u * u;
  // Falling matter accelerates and heats: ice \u2192 white-hot, brighter as it plunges.
  vec3 hot = mix(vec3(0.55, 0.88, 1.0), vec3(0.85, 0.96, 1.0), heat);
  // Settled matter glows by its orbit, like the disk: white-hot near the point, deep blue further out.
  vec3 orbitCol = mix(P_HI, DEEP, smoothstep(0.35, 1.0, abs(hMeta.z)));
  float diskR = uC[0].x;
  // Each parcel keeps its light until it crosses into the disk, then gives it to the disk
  // (ending-core.js), so the swirl stays legible: space darkens because matter leaves it.
  // (Gated by the fall's progress: at the handover every parcel is exactly as the engine drew it.)
  float keep = 1.0 - (1.0 - smoothstep(diskR * 1.1, diskR * 2.8, rad)) * smoothstep(0.1, 0.7, u);
  vec3 hot2 = mix(hot, orbitCol, (1.0 - keep) * smoothstep(0.5, 1.0, heat));
  // The reader's stars (far matter) brighten most: their streaks lengthen and whiten as they fall.
  float beam = hMeta.z < 0.0 ? 4.0 : 1.6;
  vec3 col = mix(hColor, hot2 * max(0.35, dot(hColor, vec3(0.33))), heat * 0.9) * mix(0.06, 1.0, keep) * (1.0 + beam * heat * keep);
  col *= 1.0 - 0.85 * smoothstep(0.86, 1.0, u);
  size = mix(1.0, 0.75, heat);
  return col;
}

// After the impact: the new universe's matter.
vec3 cosmosLook(float t, float g, out float size) {
  size = 1.0;
  // Birth: sparks materialise out of the flash, white-hot, cooling through ice cyan to deep blue,
  // then differentiating into fields (ice, cold white, deep blue).
  float sp = aRnd.w;
  float age = t - IMPACT;
  vec3 hot = thermal(0.12 + 0.88 * uTemp + (sp - 0.5) * 0.12);
  vec3 field = sp < 0.34 ? ICE : sp < 0.67 ? COLD : DEEP;
  // A third of the matter jets out at once as streaks; the rest condenses later as fine dust.
  float spark = step(0.95, aRnd.y);
  float jet = spark * (0.55 * exp(-age * 5.0) + 0.035) * smoothstep(0.0, 0.02, age) * (1.0 - smoothstep(5.6, 7.0, t));
  float dust = 0.15 * smoothstep(7.2, 8.8, t);
  float bright = (jet + dust) * mix(0.35, 1.0, uTemp);
  vec3 col = mix(hot, field * 0.8, uDiff * 0.8) * bright;
  // Structure: cold gas glows where gravity gathers it; nodes glow brighter.
  float c = clusterOf(g);
  float isNode = step(0.5, aWeb.w);
  float voidDim = mix(1.0, 0.3, step(aWeb.w, -0.5));
  vec3 gasTint = mix(GAS, ICE, 0.35 + 0.4 * aRnd.z);
  // Dim while spread out, brightening as gravity gathers it: dark voids, legible knots.
  vec3 gas = gasTint * (0.14 + 0.82 * c + 0.08 * c * isNode) * (0.5 + aRnd.y) * voidDim;
  col = mix(col, gas, smoothstep(8.4, 11.0, t));
  // Heavy elements from the first supernovae light the gas: it brightens and pales toward ice-white.
  float enr = smoothstep(aStar.z, aStar.z + 2.4, t);
  col = mix(col, P_HI * dot(col, vec3(0.45)), enr * 0.6);
  // Stars.
  if (aStar.w != 0.0 && t > aStar.x) {
    float age = t - aStar.x;
    float ign = smoothstep(0.0, 0.18, age);
    float b = abs(aStar.w);
    // The first generation burns blue-white; the second (enriched) a paler ice-white.
    vec3 sc = aStar.w > 0.0 ? vec3(0.6, 0.86, 1.0) : vec3(0.88, 0.97, 1.0);
    // Ignition: a short, bright flare (the first light of the first stars), then a steady glow.
    vec3 st = sc * b * (1.4 + 11.0 * exp(-age * 2.2)) * ign;
    float twinkle = 0.85 + 0.15 * sin(t * (2.0 + aRnd.z * 3.0) + aRnd.y * 6.28);
    st *= twinkle;
    if (t > aStar.y) {
      float sa = t - aStar.y;
      // A supernova: a white-hot flash, then a slow deep-blue afterglow.
      st = P_WHITE * b * 16.0 * exp(-sa * 2.6) + P_BLUE * b * 0.25 * exp(-sa * 0.5);
      size *= 1.0 + 1.5 * exp(-sa * 1.5);
    }
    col = col * 0.25 + st;
    size *= 1.0 + ign * (0.7 + 1.2 * exp(-age * 2.0));
  }
  return col;
}

void main() {
  // (Both time samples share the handover; it only matters before the impact.)
  if (uS[1].x < IMPACT) placeHandover();
  else { hStart = vec3(0.0); hColor = vec3(0.0); hMeta = vec4(0.0, 1.0, 1.0, 0.0); hEnergy = 1.0; }
  vec3 p1 = positionAt(uS[0], uC[0]);
  vec3 p0 = positionAt(uS[1], uC[1]);
  float t = uS[0].x;
  // Across the impact the previous sample is the singularity itself.
  if (uS[1].x < IMPACT && t >= IMPACT) p0 = vec3(0.0);

  float size = 1.0;
  vec3 col;
  if (t < IMPACT) col = collapseLook(t, length(p1), size);
  else col = cosmosLook(t, uS[0].z, size);
  if (t >= IMPACT) {
    col *= mix(1.0, uWebFade, smoothstep(9.0, 10.0, t));
    // Billions of years: the filaments dissolve first, the other galaxies linger a while.
    if (aWeb.w < 0.5) col *= uFilFade;
    if (aWeb.w > 0.5 && aWeb.w < 1.5) col *= uHeroFade * 0.7;
  }

  vec4 v1 = modelViewMatrix * vec4(p1, 1.0);
  vec4 v0 = modelViewMatrix * vec4(p0, 1.0);
  float depth = -v1.z;
  if (depth < uNearFade * 0.25 || dot(col, col) < 1e-8) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    vHalf = 0.0; vUv = vec2(0.0); vColor = vec3(0.0);
    return;
  }
  col *= smoothstep(uNearFade * 0.25, uNearFade, depth);
  if (-v0.z < uNearFade * 0.25) v0 = v1;
  vec4 c1 = projectionMatrix * v1;
  vec4 c0 = projectionMatrix * v0;
  vec2 s1 = c1.xy / c1.w * uHalfView;
  vec2 s0 = c0.xy / c0.w * uHalfView;

  // The web era: a skewed (log-normal-like) spread of sizes \u2014 many sub-pixel dust motes, a few
  // larger and dimmer glows \u2014 instead of uniform discs.
  float webEra = t > IMPACT ? smoothstep(8.5, 11.0, t) : 0.0;
  float sr = fract(aRnd.y * 7.31 + aRnd.x * 3.71);
  float spread = mix(0.65 + 0.7 * aRnd.y, 0.4 + 2.3 * sr * sr * sr * sr, webEra);
  // A tenth of the filament and node matter is drawn as wide, faint, energy-conserving gas
  // sprites: continuous luminous gas along the filaments under the points.
  float gas = webEra * step(0.9, aRnd.z) * step(-0.5, aWeb.w) * smoothstep(0.35, 0.8, depth);
  // Some of the rest is drawn as large, faint sprites: a soft glow under the points.
  float soft = t > IMPACT ? step(0.86, aRnd.z) * smoothstep(0.5, 0.9, depth) * (1.0 - gas) : 0.0;
  float grow = (1.0 + 1.6 * soft) * (1.0 + 4.0 * gas);
  float rFilm = uSize * size * spread * grow * uProjScale / depth;
  float r = rFilm;
  float filmLook = 1.0;
  if (t < IMPACT) {
    // Until a particle starts to fall it is drawn exactly as the engine drew it (its own sprite
    // size; the colour with the engine's folded-in sprite energy taken back out). As it falls it
    // morphs into the film's sprite with its light conserved.
    filmLook = smoothstep(0.0, 0.9, t - hMeta.x);
    float rEng = 0.5 * hMeta.w * uProjScale / depth;
    r = mix(rEng, rFilm, filmLook);
    col *= (0.84 / hEnergy) * (rEng * rEng) / max(r * r, 1e-8);
  } else {
    // Larger motes are dimmer per pixel; gas spreads its light over its whole sprite.
    // (Finer sprites carry less light: the web era gets some of it back.)
    col *= uGain * mix(1.0, 1.8 / spread, webEra) * mix(1.0, 1.5 / (grow * grow), gas);
  }
  float coc = uAperture * abs(1.0 / depth - 1.0 / uFocus) * uProjScale;
  float rt = sqrt(r * r + coc * coc);
  float energy = (r * r) / (rt * rt + 1e-6);
  rt = min(rt, mix(uEngineMaxPx, uMaxPx * (1.0 + 1.3 * soft) * (1.0 + 4.0 * gas), filmLook));
  if (rt < uMinPx) { energy *= (rt * rt) / (uMinPx * uMinPx); rt = uMinPx; }

  vec2 d = s1 - s0;
  float L = length(d);
  vec2 dir = L > 1e-4 ? d / L : vec2(1.0, 0.0);
  L = min(L, uMaxStreak);
  energy *= rt / (rt + L * 0.85);
  vec2 n = vec2(-dir.y, dir.x);
  float half_ = 0.5 * L;
  vec2 mid = s1 - dir * half_;
  vec2 corner = position.xy;
  // The quad covers only the visible core of the Gaussian (|d| < QUAD_EXTENT radii): less overdraw.
  vec2 sp = mid + dir * corner.x * (half_ + rt * QUAD_EXTENT) + n * corner.y * rt * QUAD_EXTENT;
  gl_Position = vec4(sp / uHalfView * c1.w, c1.z, c1.w);
  vUv = vec2(corner.x * (half_ + rt * QUAD_EXTENT) / rt, corner.y * QUAD_EXTENT);
  vHalf = half_ / rt;
  vColor = col * energy;
}
`,bM=`
varying vec2 vUv;
varying float vHalf;
varying vec3 vColor;
void main() {
  float dx = max(abs(vUv.x) - vHalf, 0.0);
  float d2 = dx * dx + vUv.y * vUv.y;
  if (d2 > 0.6084) discard;
  float a = exp(-d2 * 4.0) * (1.0 - d2);
  gl_FragColor = vec4(vColor * a, 1.0);
}
`;function L0(i){let{count:e,arrays:t,nodes:n,edges:s}=i,r=new Oa;r.setAttribute("position",new yt([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),r.setIndex([0,1,2,0,2,3]),r.instanceCount=e;let a=(w,y,T)=>{let x=new Pa(y,T);return r.setAttribute(w,x),x},o=a("aStart",t.start,3),l=a("aColor",t.color,3),c=a("aSize",t.size,1),d=a("aEnergy",t.energy,1);a("aQ",t.q,3),a("aWeb",t.web,4),a("aStar",t.star,4),a("aRnd",t.rnd,4),r.boundingSphere=new Ki(new L,1e6);let u=[],h=[];for(let w=0;w<xd;w++){let y=n[w];u.push(y?new Xe(y.p[0],y.p[1],y.p[2],y.r):new Xe(0,0,0,1)),h.push(y?new Xe(y.axis[0],y.axis[1],y.axis[2],y.spin):new Xe(0,1,0,1))}let f={uS:{value:[new Xe,new Xe]},uC:{value:[new Xe,new Xe]},uAxis:{value:new L(...ph)},uNodes:{value:u},uNodeAxes:{value:h},uTemp:{value:1},uDiff:{value:0},uWebFade:{value:1},uHeroFade:{value:1},uFilFade:{value:1},uGain:{value:1},uEngineMaxPx:{value:23},uHalfView:{value:new ye(720,450)},uProjScale:{value:1e3},uSize:{value:.0016},uMinPx:{value:.8},uMaxPx:{value:26},uMaxStreak:{value:260},uFocus:{value:1},uAperture:{value:0},uNearFade:{value:.02},uHandover:{value:new bt},uEngineView:{value:new bt},uHandA:{value:new Xe(.5,.5,.5,.5)},uHandB:{value:new Xe(1,1,1,1)}},g=new Fe({vertexShader:wM,fragmentShader:bM,uniforms:f,transparent:!0,depthTest:!1,depthWrite:!1,blending:Vt,toneMapped:!1}),v=new $e(r,g);v.frustumCulled=!1;function p(w,y,T,x,E=1,R=null,D=null){let{start:F,color:I,size:C,energy:U}=t;(!R||!D)&&(R=null,D=null);let H=f;if(!(T>0&&w&&x)){Je();return}let G=T<e,K=T/e;if(!G&&y){for(let tt=0,Ee=0;tt<e;tt++,Ee+=3){let Ae=(tt*K|0)*3;F[Ee]=w[Ae],F[Ee+1]=w[Ae+1],F[Ee+2]=w[Ae+2],I[Ee]=y[Ae],I[Ee+1]=y[Ae+1],I[Ee+2]=y[Ae+2]}if(R)for(let tt=0;tt<e;tt++){let Ee=tt*K|0;C[tt]=R[Ee],U[tt]=D[Ee]}else C.fill(-1),U.fill(-1)}else{let tt=Hs(5521),Ee=.012/x.scale;for(let Ae=0;Ae<e;Ae++){let Ve=G?Ae%T:Ae*K|0,Be=Ae*3,ht=Ve*3;F[Be]=w[ht],F[Be+1]=w[ht+1],F[Be+2]=w[ht+2],G&&Ae>=T&&(F[Be]+=(tt()-.5)*Ee,F[Be+1]+=(tt()-.5)*Ee,F[Be+2]+=(tt()-.5)*Ee),y?(I[Be]=y[ht],I[Be+1]=y[ht+1],I[Be+2]=y[ht+2]):(I[Be]=.7,I[Be+1]=.85,I[Be+2]=1),C[Ae]=R?R[Ve]:-1,U[Ae]=D?D[Ve]:-1}}let N=H.uHandover.value,V=x.x,Y=x.y,re=x.z,ee=x.p0,Pe=x.scale;N.set(V[0]*Pe,V[1]*Pe,V[2]*Pe,-(V[0]*ee[0]+V[1]*ee[1]+V[2]*ee[2])*Pe,Y[0]*Pe,Y[1]*Pe,Y[2]*Pe,-(Y[0]*ee[0]+Y[1]*ee[1]+Y[2]*ee[2])*Pe,re[0]*Pe,re[1]*Pe,re[2]*Pe,-(re[0]*ee[0]+re[1]*ee[1]+re[2]*ee[2])*Pe,0,0,0,1);let Ce=H.uEngineView.value,Le=x.right,J=x.up,te=x.forward,ue=x.eye;Ce.set(Le[0],Le[1],Le[2],-(Le[0]*ue[0]+Le[1]*ue[1]+Le[2]*ue[2]),J[0],J[1],J[2],-(J[0]*ue[0]+J[1]*ue[1]+J[2]*ue[2]),te[0],te[1],te[2],-(te[0]*ue[0]+te[1]*ue[1]+te[2]*ue[2]),0,0,0,1),H.uHandA.value.set(x.kx,x.ky,x.ox,x.oy);let Ie=N.elements,Me=m(tt=>{let Ee=F[tt*3],Ae=F[tt*3+1],Ve=F[tt*3+2],Be=Ie[0]*Ee+Ie[4]*Ae+Ie[8]*Ve+Ie[12],ht=Ie[1]*Ee+Ie[5]*Ae+Ie[9]*Ve+Ie[13],Ct=Ie[2]*Ee+Ie[6]*Ae+Ie[10]*Ve+Ie[14];return Math.sqrt(Be*Be+ht*ht+Ct*Ct)});H.uHandB.value.set(x.aspect,x.invDiag,Me,E),o.needsUpdate=!0,l.needsUpdate=!0,c.needsUpdate=!0,d.needsUpdate=!0;function Je(){let tt=Hs(5521),Ee=[0,0,0];for(let Ve=0;Ve<e;Ve++){_d(tt,Ee);let Be=.15+.6*Math.cbrt(tt());F[Ve*3]=Ee[0]*Be,F[Ve*3+1]=Ee[1]*Be*.4,F[Ve*3+2]=Ee[2]*Be,I[Ve*3]=.7,I[Ve*3+1]=.88,I[Ve*3+2]=1,C[Ve]=.003,U[Ve]=-1}H.uHandover.value.identity(),H.uEngineView.value.set(1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1),H.uHandA.value.set(.5,.5,.5,.5);let Ae=m(Ve=>Math.hypot(F[Ve*3],F[Ve*3+1],F[Ve*3+2]));H.uHandB.value.set(1,1,Ae,1),o.needsUpdate=!0,l.needsUpdate=!0,c.needsUpdate=!0,d.needsUpdate=!0}}function m(w){let y=Math.max(1,Math.floor(e/4e3)),T=new Float32Array(Math.ceil(e/y)),x=0;for(let E=0;E<e;E+=y)T[x++]=w(E);return T.sort(),Math.max(1e-4,T[Math.floor(x*.97)]||1)}function _(w,y){let T=w.t,x=Math.max(0,T-w.shutter);A(f.uS.value[0],f.uC.value[0],T),A(f.uS.value[1],f.uC.value[1],x),f.uTemp.value=w.temp,f.uDiff.value=w.diff,f.uWebFade.value=w.webFade,f.uHeroFade.value=w.heroFade,f.uFilFade.value=w.filFade,f.uGain.value=w.matterGain*y.gain,f.uHalfView.value.set(y.width*.5,y.height*.5),f.uProjScale.value=y.projScale,f.uMinPx.value=.75*y.pixelRatio,f.uMaxPx.value=4*y.pixelRatio,f.uEngineMaxPx.value=23*y.pixelRatio,f.uMaxStreak.value=.22*y.height,f.uFocus.value=y.focus,f.uAperture.value=y.aperture,f.uNearFade.value=y.nearFade,f.uSize.value=y.size}function A(w,y,T){w.set(T,Ao(T),rd(T),od(T)),y.set(ld(T),cd(T),ad(T),0)}function S(){r.dispose(),g.dispose()}return{mesh:v,loadHandover:p,update:_,dispose:S,nodes:n,edges:s,count:e}}var xh=14,TM=`
uniform float uSize;
uniform float uMinPx;
uniform float uProjScale;
varying vec2 vP;
varying float vEnergy;
void main() {
  vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  float depth = max(-mv.z, 1e-6);
  // Keep the seed at least a few pixels wide; conserve its energy when enlarged.
  float px = uSize * uProjScale / depth;
  float size = uSize;
  vEnergy = 1.0;
  if (px < uMinPx) { size = uMinPx * depth / uProjScale; vEnergy = (px * px) / (uMinPx * uMinPx); }
  mv.xy += position.xy * size * ${xh.toFixed(1)};
  vP = position.xy * ${xh.toFixed(1)};
  gl_Position = projectionMatrix * mv;
}
`,EM=`
uniform float uIntensity;
uniform float uTint;
uniform float uTime;
varying vec2 vP;
varying float vEnergy;
${Oi}
void main() {
  float r = length(vP);
  // A soft, gradient-lit core (white-hot at the centre, ice outward) rather than a clipped disc:
  // a smooth power-law profile whose peak stays near the tone curve's shoulder.
  float core = 1.0 / ((1.0 + r * r * 1.4) * (1.0 + r * r * 1.4));
  float halo = 0.12 / (1.0 + r * r * 1.2);
  float wide = 0.03 * exp(-r * 0.4);
  // uTint: the seed's own ice tint as the engine drew it (1), turning white-hot toward the impact (0).
  vec3 coreCol = mix(P_HI, P_WHITE, core);
  vec3 col = mix(coreCol, mix(coreCol, P_ICE, 0.45), uTint) * core * 2.2
           + mix(P_WHITE * 0.7, P_ICE * 0.9, uTint) * halo
           + mix(P_BLUE, P_ICE * 0.6, uTint) * wide;
  // A faint, slow shimmer: the seed is alive, never a static dot.
  col *= 1.0 + 0.05 * sin(uTime * 7.0 + r * 0.8);
  col *= smoothstep(${xh.toFixed(1)}, ${(xh*.6).toFixed(1)}, r);
  gl_FragColor = vec4(col * uIntensity * vEnergy, 1.0);
}
`,AM=`
uniform float uScale;
varying vec2 vUv;
void main() {
  vUv = position.xy;
  vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  mv.xy += position.xy * uScale;
  gl_Position = projectionMatrix * mv;
}
`,RM=`
uniform vec3 uCore;
uniform vec3 uHalo;
uniform float uIntensity;
uniform float uRays;
uniform float uWidth;
uniform float uBloom;
varying vec2 vUv;
void main() {
  float r = length(vUv);
  if (r > 1.0) discard;
  float core = exp(-r * r * 160.0 / uWidth);
  float inner = exp(-r * r * 22.0 / uWidth);
  float halo = exp(-r * 5.0) * (1.0 - r);
  float ang = atan(vUv.y, vUv.x);
  float rays = uRays * pow(abs(cos(ang * 2.0 + 0.4)), 80.0) * exp(-r * 3.5) * (1.0 - r);
  vec3 c = uCore * (core * 4.0 + inner * 0.55) + uHalo * (halo * 0.55 + rays * 0.5);
  c += uCore * uBloom * (exp(-r * r * 60.0 / uWidth) * 1.0 + exp(-r * r * 12.0 / uWidth) * 0.2) * (1.0 - r);
  gl_FragColor = vec4(c * uIntensity, 1.0);
}
`,yd=Object.freeze([Object.freeze({scale:.79,intensity:.6,core:[.791,.965,1],halo:[.397,.799,.888],rays:.3}),Object.freeze({scale:2.42,intensity:.112,core:[0,0,0],halo:[.2375,.537,.661],rays:0})]),D0=2,CM=`
varying vec2 vP;
void main() {
  vP = position.xy;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,PM=`
uniform float uOpacity;
uniform float uSpin;      // integrated Keplerian angle at r = 1 (rad)
uniform float uSpinRate;  // its rate (rad/s), for the rotational motion blur
uniform vec2 uBeam;       // camera direction projected into the disk plane
varying vec2 vP;
${bn}
${Oi}
#define SHEAR_PERIOD 1.3
// Lanes: radially fine, angularly long (the noise runs round a small circle in its (y, z)
// plane while log r runs fast along x), so the disk is streaks from the first frame.
float lanes(float lr, float th, float seed, float aaFine, float angKeep) {
  vec2 cs = vec2(cos(th), sin(th));
  vec3 o = vec3(seed * 7.31, seed * 3.17, seed * 5.53);
  float a = snoise(vec3(lr * 9.0, cs * 1.25 * angKeep) + o);
  float b = snoise(vec3(lr * 21.0 + 4.0, cs * 2.6 * angKeep) + o * 1.7);
  return a * 0.7 + b * 0.45 * aaFine;
}
void main() {
  float r = length(vP);
  if (r > 1.0) discard;
  float th = atan(vP.y, vP.x);
  float lr = log(max(r, 0.02));
  // Keplerian angular speed relative to r = 1, softened at the inner edge.
  float omega = pow(max(r, 0.14), -1.5);
  // Rotational motion blur: where the lanes sweep by faster than ~half a feature per frame
  // their angular variation averages out into smooth rings (no strobing, no moire).
  float sweep = omega * uSpinRate * 0.35 / 60.0;
  float angKeep = 1.0 / (1.0 + sweep * sweep * 4.0);
  // Anti-aliasing: the fine radial octave fades where it would fall below two pixels.
  float aaFine = 1.0 - smoothstep(0.18, 0.4, fwidth(lr * 21.0));
  // Flow-map shear: two layers offset by half a period, each sheared by a bounded angle and
  // crossfaded, so the winding (and its radial gradient) never runs away while the lanes keep
  // streaming round; each cycle draws a fresh pattern.
  float cyc = uSpin * 0.35 / SHEAR_PERIOD;
  float n = 0.0;
  for (int i = 0; i < 2; i++) {
    float c = cyc + 0.5 * float(i);
    float f = fract(c);
    float w = 1.0 - abs(2.0 * f - 1.0);
    // The winding is capped (the inner disk is averaged into rings by the blur above anyway).
    float sheared = th - min(omega, 3.2) * f * SHEAR_PERIOD - floor(c) * 2.3999;
    n += w * lanes(lr, sheared, floor(c) + float(i) * 13.0, aaFine, angKeep);
  }
  // Trailing lanes with dark gaps between them.
  float streaks = smoothstep(-0.25, 0.75, n);
  float ring = smoothstep(0.08, 0.24, r) * (1.0 - smoothstep(0.55, 1.0, r));
  // Relativistic beaming: the side moving toward the camera is brighter.
  vec2 tangent = vec2(-sin(th), cos(th));
  float beam = 1.0 + 0.7 * dot(tangent, uBeam);
  // White-hot inside, ice through the middle, a saturated deep blue at the rim (no warm skirt).
  vec3 inner = P_WHITE;
  vec3 mid = P_ICE * 0.93;
  vec3 outer = P_DEEP;
  vec3 col = mix(inner * 1.8, mid, smoothstep(0.15, 0.45, r));
  col = mix(col, outer, smoothstep(0.45, 0.9, r));
  float e = ring * (0.25 + 0.75 * streaks) * streaks * beam * (1.0 + 2.5 * exp(-r * 7.0));
  gl_FragColor = vec4(col * e * uOpacity, 1.0);
}
`;function F0(){let i=new wt,e=new ki(2,2),t={uSize:{value:.016},uMinPx:{value:3},uProjScale:{value:1e3},uIntensity:{value:1},uTint:{value:1},uTime:{value:0}},n=new Fe({vertexShader:TM,fragmentShader:EM,uniforms:t,transparent:!0,depthTest:!1,depthWrite:!1,blending:Vt,toneMapped:!1}),s=new $e(e,n);s.frustumCulled=!1,s.renderOrder=5;let r={uOpacity:{value:0},uSpin:{value:0},uSpinRate:{value:0},uBeam:{value:new ye}},a=new Fe({vertexShader:CM,fragmentShader:PM,uniforms:r,transparent:!0,depthTest:!1,depthWrite:!1,blending:Vt,toneMapped:!1,side:Mi}),o=new $e(e,a);o.frustumCulled=!1,o.renderOrder=4;let l=new L(...ph);o.quaternion.setFromUnitVectors(new L(0,0,1),l);let c=new L(1,0,0).applyQuaternion(o.quaternion),d=new L(0,1,0).applyQuaternion(o.quaternion),u=[];for(let p=0;p<D0;p++){let m=new Fe({vertexShader:AM,fragmentShader:RM,uniforms:{uScale:{value:.1},uCore:{value:new L},uHalo:{value:new L},uIntensity:{value:0},uRays:{value:0},uWidth:{value:1},uBloom:{value:0}},transparent:!0,depthTest:!1,depthWrite:!1,blending:Vt,toneMapped:!1}),_=new $e(e,m);_.frustumCulled=!1,_.renderOrder=3,_.visible=!1,u.push({mesh:_,material:m,scale:0,intensity:0})}i.add(o,...u.map(p=>p.mesh),s);let h=new L;function f(p,m){let _=Array.isArray(p)?p:yd;for(let A=0;A<D0;A++){let S=u[A],w=_[A],y=w&&Number(w.scale)>0&&Number(w.intensity)>0;S.scale=y?Number(w.scale)*m:0,S.intensity=y?Number(w.intensity):0;let T=S.material.uniforms;T.uCore.value.fromArray(y&&w.core?w.core:[0,0,0]),T.uHalo.value.fromArray(y&&w.halo?w.halo:[0,0,0]),T.uRays.value=y&&Number(w.rays)||0}}f(null,.09);function g(p,m,_){let A=p.core>.001;s.visible=A,t.uIntensity.value=p.core,t.uSize.value=p.coreSize,t.uTint.value=p.coreTint,t.uTime.value=p.t;for(let S of u){if(S.mesh.visible=p.seedGlow>.001&&S.intensity>0,!S.mesh.visible)continue;let w=S.material.uniforms;w.uScale.value=S.scale*p.seedScale,w.uIntensity.value=S.intensity*p.seedGlow,w.uWidth.value=p.seedWidth,w.uBloom.value=p.seedBloom}t.uProjScale.value=m.projScale,t.uMinPx.value=2.5*m.pixelRatio,o.visible=p.disk>.001,o.visible&&(o.scale.setScalar(p.diskRadius*1.25),r.uOpacity.value=p.disk*(.9+1.6*Math.max(0,Math.min(1,(p.t-2.6)/.9))),r.uSpin.value=p.diskSpin,r.uSpinRate.value=p.diskSpinRate,h.set(_[0],_[1],_[2]).normalize(),r.uBeam.value.set(h.dot(c),h.dot(d)))}function v(){e.dispose(),n.dispose(),a.dispose();for(let p of u)p.material.dispose()}return{group:i,update:g,setLight:f,dispose:v}}var IM=`
attribute vec4 aStar; // rgb tint, magnitude (0 bright .. 1 faint)
uniform float uIntensity;
uniform float uTime;
uniform float uPixelRatio;
uniform float uTwinkle;
uniform float uPull;      // 0..1: the parent sky streaming into the singularity
uniform vec3 uPullDir;    // world direction from the camera to the singularity
varying vec3 vColor;
${vs}
void main() {
  // The parent sky falls in with everything else: each star slides along its great circle
  // toward the singularity, accelerating (some first), blue-shifting, gone as it arrives.
  float pr = hash13(position * 53.1);
  float x = clamp(uPull * 1.3 - pr * 0.3, 0.0, 1.0);
  float pull = x * x;
  vec3 dirW = position;
  float cosO = dot(position, uPullDir);
  if (pull > 0.0 && cosO > -0.95) {
    float om = acos(clamp(cosO, -1.0, 1.0));
    float so = max(sin(om), 1e-4);
    float s = 1.0 - pull;
    dirW = (sin((1.0 - s) * om) * uPullDir + sin(s * om) * position) / so;
  }
  // Directions at infinity: rotate only.
  vec3 d = mat3(viewMatrix) * dirW;
  vec4 clip = projectionMatrix * vec4(d, 1.0);
  clip.z = clip.w * 0.99999;
  gl_Position = clip;
  float m = aStar.w;
  float b = mix(1.6, 0.05, pow(m, 0.6));
  float phase = hash13(position * 91.7) * 6.283;
  float rate = 0.6 + 2.2 * hash13(position * 17.3);
  b *= 1.0 - uTwinkle * 0.35 * (0.5 + 0.5 * sin(uTime * rate + phase));
  b *= (1.0 + 1.8 * pull) * (1.0 - smoothstep(0.86, 1.0, x));
  float size = mix(2.6, 1.0, m) * uPixelRatio;
  gl_PointSize = size;
  vColor = mix(aStar.rgb, vec3(0.7, 0.88, 1.0), pull) * b * uIntensity;
}
`,LM=`
varying vec3 vColor;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float d2 = dot(p, p);
  if (d2 > 1.0) discard;
  gl_FragColor = vec4(vColor * exp(-d2 * 3.5), 1.0);
}
`,DM=[.8,.92,1],FM=[.62,.84,1],UM=[.5,.78,1];function*U0(i,e,t,n=3e3){let s=Hs(e),r=new Float32Array(i*3),a=new Float32Array(i*4),o=t||[0,1,0],l=Math.abs(o[0])<.9?[0,-o[2],o[1]]:[-o[2],0,o[0]],c=Math.hypot(l[0],l[1],l[2]),d=[l[0]/c,l[1]/c,l[2]/c],u=[o[1]*d[2]-o[2]*d[1],o[2]*d[0]-o[0]*d[2],o[0]*d[1]-o[1]*d[0]];for(let f=0;f<i;f++){f>0&&f%n===0&&(yield);let g,v,p;if(t&&s()<.68){let A=s()*Math.PI*2,S=gi(s)*.085,w=Math.cos(S),y=Math.sin(S),T=Math.cos(A),x=Math.sin(A);g=(d[0]*T+u[0]*x)*w+o[0]*y,v=(d[1]*T+u[1]*x)*w+o[1]*y,p=(d[2]*T+u[2]*x)*w+o[2]*y}else{p=s()*2-1;let A=s()*Math.PI*2,S=Math.sqrt(1-p*p);g=S*Math.cos(A),v=S*Math.sin(A)}r[f*3]=g,r[f*3+1]=v,r[f*3+2]=p;let m=s(),_=m<.62?DM:m<.86?FM:UM;a[f*4]=_[0],a[f*4+1]=_[1],a[f*4+2]=_[2],a[f*4+3]=1-Math.pow(s(),5)}let h=new pt;return h.setAttribute("position",new ft(r,3)),h.setAttribute("aStar",new ft(a,4)),h.boundingSphere=new Ki(new L,1e6),h}function*N0(i){let e=yield*U0(i,7001,null);yield;let t=yield*U0(i*3,3307,Gi);return{parent:e,fresh:t}}var NM=`
uniform vec3 uCamRight, uCamUp, uCamFwd;
uniform vec2 uTan;
uniform vec3 uGalN, uGalIn;
uniform float uIntensity, uGrainScale;
varying vec2 vUv;
${vs}
${bn}
float fbm3(vec3 p) { return snoise(p) * 0.55 + snoise(p * 2.1 + 3.7) * 0.3 + snoise(p * 4.3 - 1.9) * 0.15; }
// Fine stars fixed to the sky: one candidate per cell of a direction-space grid.
float grain(vec3 rd, float density) {
  vec3 g = rd * uGrainScale;
  vec3 c = floor(g);
  float h = hash13(c);
  float on = step(1.0 - density, h);
  vec3 f = fract(g) - 0.5;
  float b = hash13(c + 7.1);
  return on * exp(-dot(f, f) * 12.0) * (0.12 + 0.88 * b * b * b);
}
void main() {
  vec2 ndc = vUv * 2.0 - 1.0;
  vec3 rd = normalize(uCamFwd + ndc.x * uTan.x * uCamRight + ndc.y * uTan.y * uCamUp);
  float e = dot(rd, uGalN);
  vec3 inPlane = normalize(rd - uGalN * e + 1e-5);
  float toward = dot(inPlane, uGalIn);
  float w = 0.07 + 0.05 * smoothstep(-0.2, 1.0, toward);
  float strip = exp(-pow(e / w, 2.0));
  float wide = exp(-pow(e / (w * 2.6), 2.0));
  float core = exp(-pow(e / (w * 0.65), 2.0)) * pow(max(0.0, 0.5 + 0.5 * toward), 8.0);
  float clouds = smoothstep(-0.25, 0.75, fbm3(rd * 7.0 + 3.0));
  float rift = smoothstep(0.0, 0.5, fbm3(rd * 5.5 + 13.0) * 0.5 + 0.5 + 0.15 * snoise(rd * 21.0));
  float lane = rift * exp(-pow((e + 0.008) / (w * 0.42), 2.0));
  float dust = 1.0 - 0.88 * lane;
  vec3 cool = vec3(0.6, 0.8, 1.0);
  vec3 pale = vec3(0.8, 0.94, 1.0) * 0.92;
  vec3 tint = mix(cool, pale, smoothstep(0.3, 1.0, toward) * 0.7);
  float diffuse = (strip * (0.18 + 0.82 * clouds) + wide * 0.1 + core * 0.9) * dust;
  float density = clamp((strip * (0.2 + 0.8 * clouds * clouds) + wide * 0.05) * dust, 0.0, 1.0) * 0.4 + 0.0015;
  float stars = grain(rd, density) + grain(rd * 1.7 + 0.31, density * 0.6) * 0.5;
  vec3 col = tint * (diffuse * 0.055 + stars * 0.42);
  gl_FragColor = vec4(col * uIntensity, 1.0);
}
`;function O0(i){let e=u=>{let h=new Fe({vertexShader:IM,fragmentShader:LM,uniforms:{uIntensity:{value:0},uTime:{value:0},uPixelRatio:{value:1},uTwinkle:{value:1},uPull:{value:0},uPullDir:{value:new L(0,0,-1)}},transparent:!0,depthTest:!1,depthWrite:!1,blending:Vt,toneMapped:!1}),f=new Fi(u,h);return f.frustumCulled=!1,f.renderOrder=-10,f},t=e(i.parent),n=new pt;n.setAttribute("position",new yt([-1,-1,0,3,-1,0,-1,3,0],3));let s=new L(Kt[0]-ti[0],Kt[1]-ti[1],Kt[2]-ti[2]).normalize(),r={uCamRight:{value:new L},uCamUp:{value:new L},uCamFwd:{value:new L},uTan:{value:new ye(1,1)},uGalN:{value:new L(...Gi)},uGalIn:{value:s},uIntensity:{value:0},uGrainScale:{value:900}},a=new $e(n,new Fe({vertexShader:dr,fragmentShader:NM,uniforms:r,transparent:!0,depthTest:!1,depthWrite:!1,blending:Vt,toneMapped:!1}));a.frustumCulled=!1,a.renderOrder=-20;let o=e(i.fresh);function l(u,h,f,g,v){u.visible=h>.002;let p=u.material.uniforms;p.uIntensity.value=h,p.uTime.value=f.t,p.uPixelRatio.value=g.pixelRatio,p.uTwinkle.value=v?0:1}function c(u,h,f,g,v){l(t,u.parentSky*.55,u,h,f);let p=t.material.uniforms;if(p.uPull.value=u.skyPull,p.uPullDir.value.set(-g.position[0],-g.position[1],-g.position[2]).normalize(),l(o,u.newSky*.7,u,h,f),a.visible=u.band>.001,a.visible){r.uCamRight.value.set(g.right[0],g.right[1],g.right[2]),r.uCamUp.value.set(g.up[0],g.up[1],g.up[2]),r.uCamFwd.value.set(-g.dir[0],-g.dir[1],-g.dir[2]);let m=Math.tan(g.fov*Math.PI/360);r.uTan.value.set(m*v,m),r.uIntensity.value=u.band,r.uGrainScale.value=h.height/m*.42}}function d(){for(let u of[t,o,a])u.geometry.dispose(),u.material.dispose()}return{parent:t,fresh:o,band:a,update:c,dispose:d}}var Md=[[.75,.5,1.95,4.42,2.25],[-1.25,-.55,1.75,4.58,1.85],[.35,-1.45,1.6,4.7,2],[-.55,1.45,1.75,4.86,1.55],[1.65,-.55,1.35,5,1.6],[-1.75,.95,.95,5.12,1.35]],OM=.3,BM=(i,e,t)=>`
#define STEPS ${i}
#define OCTAVES ${e}
#define BUBBLES ${Md.length}
#define KNOTS ${t}
uniform vec3 uCamPos, uCamRight, uCamUp, uCamFwd;
uniform vec2 uTan;
uniform float uTime, uA, uAPrev, uTemp, uEmit, uKappa, uBubble, uBubbleDone, uFill, uPlasma;
uniform float uSupercool, uWall;
uniform float uGas, uCondense, uGasLit;
uniform vec4 uBub[BUBBLES];    // comoving centre, nucleation time
uniform float uBubV[BUBBLES];  // wall speed, comoving units per second
uniform vec4 uKnot[KNOTS];     // centre, condensed radius
uniform vec4 uKnotB[KNOTS];    // light, collapse delay (0..1), tint, -
varying vec2 vUv;
${vs}
${bn}
${Oi}
${md}

float fbm(vec3 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < OCTAVES; i++) { v += a * snoise(p); p = p * 2.03 + vec3(1.7, 9.2, 3.1); a *= 0.5; }
  return v;
}

// True-vacuum bubbles; returns (inside, wall). wob: a low-frequency noise shared with the
// fireball's edge, so no wall is a perfect circle.
vec2 bubbles(vec3 c, float wob) {
  float ins[BUBBLES];
  float dist[BUBBLES];
  float inside = 0.0;
  for (int i = 0; i < BUBBLES; i++) {
    float R = max(0.0, uTime - uBub[i].w) * uBubV[i];
    dist[i] = length(c - uBub[i].xyz) + wob * 0.2 * min(R, 1.4) - R;
    ins[i] = R > 0.0 ? smoothstep(0.03, -0.03, dist[i]) : 0.0;
    inside = max(inside, ins[i]);
  }
  // Walls are thin and bright; where two bubbles have merged the wall between them is gone.
  float wall = 0.0;
  for (int i = 0; i < BUBBLES; i++) {
    float R = max(0.0, uTime - uBub[i].w) * uBubV[i];
    float w = 0.035 + 0.012 * R;
    float x = dist[i] / w;
    float others = 0.0;
    for (int j = 0; j < BUBBLES; j++) if (j != i) others = max(others, ins[j]);
    wall = max(wall, R > 0.0 ? exp(-x * x) * smoothstep(0.0, 0.3, R) * (1.0 - others) : 0.0);
  }
  return vec2(inside, wall);
}

// The fireball seen from outside (the camera is engulfed at ~6 s; the thread pass takes over).
vec3 plasma(vec3 ro, vec3 rd) {
  float rho = uA * ${ud.toFixed(2)};
  // The ragged edge reaches a little past rho.
  float rb = rho * 1.1;
  float b = dot(ro, rd);
  float c = dot(ro, ro) - rb * rb;
  float disc = b * b - c;
  bool outside = c > 0.0;
  // The fireball's light spills into the dark around its limb.
  vec3 halo = vec3(0.0);
  if (outside && b < 0.0) {
    float miss = sqrt(max(dot(ro, ro) - b * b, 0.0));
    float h = max(miss - rho * 0.92, 0.0) / max(rho, 1e-4);
    halo = burn(0.6 * uTemp - 0.3 * uSupercool) * exp(-h * 6.0) * 0.006 * smoothstep(0.7 * rho, 0.98 * rho, miss);
  }
  if (disc <= 0.0) return halo * uEmit;
  float sq = sqrt(disc);
  float t0 = max(-b - sq, outside ? 0.0 : 0.3);
  float t1 = -b + sq;
  if (t1 <= 0.0) return halo * uEmit;
  bool bubbling = uBubble > 0.0 && uBubbleDone < 1.0;
  // March a limited depth: nearer structure dominates, far layers do not fog the view.
  float span = min(t1 - t0, min(2.6 / (uKappa * (bubbling ? 0.55 : 1.0)), 1.6));
  // Interleaved gradient noise: low-discrepancy and static; the soft-layer blur smooths it.
  float jitter = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
  float dt = span / float(STEPS);
  vec3 acc = vec3(0.0);
  float trans = 1.0;
  // Sight lines through the middle reach the hot core; toward the limb they only graze the
  // cooler outer layers: a white-hot core burning out through ice cyan into deep blue.
  float mu = 1.0;
  if (outside) {
    float miss = sqrt(max(dot(ro, ro) - b * b, 0.0)) / max(rho, 1e-5);
    mu = sqrt(max(1.0 - miss * miss, 0.0));
  }
  float coreHeat = outside ? 0.55 * pow(1.0 - mu, 1.3) : 0.0;
  for (int i = 0; i < STEPS; i++) {
    float fi = (float(i) + jitter) / float(STEPS);
    vec3 p = ro + rd * (t0 + fi * span);
    // Motion blur along the expansion: each sample sees a slightly earlier scale factor.
    float ai = max(mix(uA, uAPrev, fi), 1e-4);
    vec3 cpos = p / ai;
    float rn = length(p) / max(rho, 1e-5);
    vec3 q = cpos * 1.45 + vec3(0.0, 0.0, uTime * 0.14);
    float warp = snoise(q * 0.6 + 5.0);
    float n = fbm(q + warp * 0.75);
    // Filaments: where two noise zero-sets meet (curves in 3D, crisp in projection).
    float s1 = snoise(q * 1.25 + 3.1 + n * 0.8);
    float s2 = snoise(q * 1.25 - 5.7 - n * 0.8);
    float fil = pow(1.0 - abs(s1), 8.0) * pow(1.0 - abs(s2), 8.0) * smoothstep(-0.15, 0.45, n);
    float wob = snoise(cpos * 1.1 + 7.3);
    // A soft, torn edge rather than the hard limb of a solid ball.
    float edge = smoothstep(1.08 + 0.09 * wob, 0.66 + 0.09 * wob, rn);
    vec2 bw = bubbling ? bubbles(cpos, wob) : vec2(0.0);
    float phase = max(bw.x, uBubbleDone);
    // False vacuum: a turbulent, smooth glow. True vacuum: bright threads in a clear medium.
    float glow = 0.3 + 0.7 * smoothstep(-0.55, 0.6, n);
    float threads = fil * 4.0 + smoothstep(0.3, 0.9, n) * 0.1;
    float dens = mix(glow, mix(threads, glow, uFill), phase) * edge;
    // The supercooled false vacuum sinks to a dimmer, deeper blue; the reheated true vacuum inside
    // the bubbles burns hotter (paler, brighter).
    float k = uTemp + 0.24 * n - coreHeat - 0.22 * smoothstep(0.8, 1.08, rn) - uSupercool * (1.0 - phase) + 0.14 * min(fil * 3.0, 1.0);
    float fresh = bw.x * (1.0 - uBubbleDone);
    vec3 src = burn(k) * (1.0 + 0.9 * fresh);
    float kap = uKappa * mix(1.0, 0.3, fresh);
    float front = exp(-fi * 1.2);
    // The bubble walls: a thin, bright, ice-white front where the latent heat is released.
    vec3 wall = P_HI * bw.y * uWall * edge;
    acc += trans * (src * dens + wall) * dt * front;
    trans *= exp(-kap * dens * dt);
    if (trans < 0.02) break;
  }
  return (acc + halo) * uEmit;
}

// The dark ages' gas: one Gaussian cloud per web node, integrated analytically along the ray.
// Each starts broad and faint (an almost uniform haze) and collapses on its own schedule \u2014
// massive knots first \u2014 conserving its light, so it brightens as it condenses.
vec3 gas(vec3 ro, vec3 rd) {
  vec3 acc = vec3(0.0);
  for (int i = 0; i < KNOTS; i++) {
    vec4 ka = uKnot[i];
    vec4 kb = uKnotB[i];
    float x = clamp((uCondense - kb.y) / (1.0 - kb.y + 1e-3), 0.0, 1.0);
    x = x * x * (3.0 - 2.0 * x);
    float sig = mix(${OM.toFixed(3)}, ka.w, x);
    vec3 v = ka.xyz - ro;
    float tc = dot(v, rd);
    float b2 = max(dot(v, v) - tc * tc, 0.0);
    float s2 = sig * sig;
    // Most knots are far from most sight lines (or behind the camera): skip them early.
    if (b2 > 40.0 * s2 || tc < -2.5 * sig) continue;
    // Column density of a normalised 3D Gaussian (erf by tanh): a dense core in a wider halo.
    // (Normalised as 1/\u03C3^1.5, not 1/\u03C3\xB2: the gas also heats as it collapses, so the broad clouds
    // already glow and the knots do not blind.)
    float col = (exp(-b2 / s2) * 0.62 + exp(-b2 / (s2 * 6.0)) * 0.38 / 6.0) * (0.5 + 0.5 * tanh(1.15 * tc / sig)) * sqrt(sig) * 2.5 / s2;
    // Not over the lens: a cloud the camera is inside only lifts the haze.
    col *= smoothstep(sig * 0.6, sig * 2.2, length(v));
    // Cold gas: deep blue in the small knots, paler ice in the massive ones.
    vec3 tint = mix(P_DEEP, vec3(0.5, 0.82, 1.0), kb.z);
    // The first stars light the densest knots once they ignite: their gas brightens toward ice-white.
    tint = mix(tint, P_HI * 1.15, uGasLit * x * kb.z);
    acc += tint * col * kb.x * (0.35 + 0.65 * x);
  }
  return acc;
}

void main() {
  vec2 ndc = vUv * 2.0 - 1.0;
  vec3 rd = normalize(uCamFwd + ndc.x * uTan.x * uCamRight + ndc.y * uTan.y * uCamUp);
  vec3 col = vec3(0.0);
  if (uPlasma > 0.001) col += plasma(uCamPos, rd) * uPlasma;
  if (uGas > 0.001) col += gas(uCamPos, rd) * uGas;
  gl_FragColor = vec4(col, 1.0);
}
`,kM=i=>`
#define SHELLS ${i}
uniform vec3 uCamPos, uCamRight, uCamUp, uCamFwd;
uniform vec2 uTan;
uniform float uTime, uA, uTemp, uDiff, uGain, uOpen, uBead, uDense, uRho, uCool;
uniform float uNear, uRatio;
varying vec2 vUv;
${bn}
${Oi}
${md}

// The second family of strands (differentiation): pale ice, white at the core.
const vec3 ICE = vec3(0.36, 0.82, 1.0);

// A strand's cross-section: a thin core and a short skirt (fainter, so it burns a deeper blue).
float strand(float x, float wc, float hw) {
  return exp(-x * x / (wc * wc)) * 0.82 + exp(-x / hw) * 0.18;
}

void main() {
  vec2 ndc = vUv * 2.0 - 1.0;
  vec3 rd = normalize(uCamFwd + ndc.x * uTan.x * uCamRight + ndc.y * uTan.y * uCamUp);
  vec3 col = vec3(0.0);
  float d = uNear;
  // Incandescence: a strand's temperature follows its brightness \u2014 white-hot where it blazes,
  // ice cyan, then deep blue toward its faint parts and edges. The whole web cools with time.
  float kBase = mix(0.24, 0.04, uCool);
  float kSpan = mix(0.98, 0.7, uCool);
  // Strands run in braided bundles (iso-lines of one field at a few levels); as the plasma thins
  // the outer strands fade, and pale ice strands appear between the cooling deep-blue ones
  // (differentiation).
  const float LEVEL = 0.1;
  for (int k = 0; k < SHELLS; k++) {
    float fk = float(k);
    vec3 p = uCamPos + rd * d;
    vec3 q = p / uA * 1.5 + vec3(0.0, 0.0, uTime * 0.05);
    // Large-scale field (which regions carry strands); a two-field warp stretches the iso-lines
    // into long flowing filaments; a third field sets each strand's brightness along its length.
    float n = snoise(q * 0.4 + 5.3);
    float w1 = snoise(q * 0.62 - 2.1);
    float w2 = snoise(q * 0.62 + 7.7);
    vec3 off = vec3(w1, w2, w1 - w2) * 0.62;
    float s = snoise(q + off);
    float m = snoise(q * 1.6 + off * 1.4 + 3.3);
    float fw = max(fwidth(s), 1e-4);
    // The nearest shell is a little out of focus.
    float bpx = 2.2 * exp(-fk * 1.8);
    float wc = fw * (1.05 + bpx);
    float focus = 1.05 / (1.05 + bpx);
    float hw = fw * (2.4 + bpx);
    float dense = uDense * smoothstep(0.5, 2.0, fk);
    float hotV = strand(abs(s), wc, hw)
      + dense * (0.62 * (strand(abs(s - LEVEL), wc, hw) + strand(abs(s + LEVEL), wc, hw))
               + 0.34 * (strand(abs(s - 2.0 * LEVEL), wc, hw) + strand(abs(s + 2.0 * LEVEL), wc, hw)));
    float iceV = uDiff > 0.0 ? strand(abs(s - 0.5 * LEVEL), wc, hw) + 0.55 * strand(abs(s + 1.5 * LEVEL), wc, hw) : 0.0;
    // Where strands would crowd below a few pixels apart they fade instead of aliasing.
    float crowd = 1.0 - smoothstep(0.035, 0.09, fw);
    float gate = smoothstep(uOpen, uOpen + 0.45, n);
    float along = 0.22 + 0.78 * smoothstep(-0.55, 0.75, m);
    float bead = 1.0;
    if (uBead > 0.0) bead = mix(1.0, smoothstep(0.1, 0.62, snoise(q * 3.4 + off * 2.0 + 9.1)), uBead);
    float edge = smoothstep(1.08, 0.82, length(p) / uRho);
    float att = gate * edge * crowd * bead * focus * (1.0 - 0.08 * fk);
    float lum = min(hotV, 1.6) * along;
    // Farther strands are a little cooler (the eye reads them as deeper).
    vec3 hot = burn(kBase + kSpan * min(lum, 1.15) - 0.03 * fk) * lum;
    float li = iceV * along;
    vec3 ice = (ICE + vec3(0.6) * li * li) * li * 1.25;
    col += (hot * (1.0 - 0.35 * uDiff) + ice * uDiff * smoothstep(-0.4, 0.4, 0.15 - n)) * att;
    d *= uRatio;
  }
  gl_FragColor = vec4(col * uGain, 1.0);
}
`;function B0({steps:i,octaves:e,shells:t,nodes:n}){let s=Math.max(1,n.length),r=[],a=[],o=0;for(let g of n)o=Math.max(o,g.mass);for(let g=0;g<s;g++){let v=n[g];if(!v){r.push(new Xe(0,0,0,1)),a.push(new Xe(0,1,0,0));continue}let p=v.mass/o;r.push(new Xe(v.p[0],v.p[1],v.p[2],Math.max(.035,v.r*(g===0?.5:.75)))),a.push(new Xe(.0011*(.35+v.mass),.42*(1-Math.sqrt(p)),Math.sqrt(p),0))}let l={uCamPos:{value:new L},uCamRight:{value:new L},uCamUp:{value:new L},uCamFwd:{value:new L},uTan:{value:new ye(1,1)},uTime:{value:0},uA:{value:0},uAPrev:{value:0},uTemp:{value:1},uEmit:{value:0},uKappa:{value:1},uBubble:{value:0},uBubbleDone:{value:0},uFill:{value:.2},uPlasma:{value:0},uSupercool:{value:0},uWall:{value:0},uGas:{value:0},uCondense:{value:0},uGasLit:{value:0},uBub:{value:Md.map(g=>new Xe(g[0],g[1],g[2],g[3]))},uBubV:{value:Md.map(g=>g[4])},uKnot:{value:r},uKnotB:{value:a}},c=new Fe({vertexShader:dr,fragmentShader:BM(i,e,s),uniforms:l,depthTest:!1,depthWrite:!1,toneMapped:!1}),d={uCamPos:l.uCamPos,uCamRight:l.uCamRight,uCamUp:l.uCamUp,uCamFwd:l.uCamFwd,uTan:l.uTan,uTime:l.uTime,uA:l.uA,uTemp:l.uTemp,uDiff:{value:0},uGain:{value:0},uOpen:{value:0},uBead:{value:0},uDense:{value:0},uRho:{value:1},uCool:{value:0},uNear:{value:.13},uRatio:{value:Math.pow(1.45/.13,1/Math.max(1,t-1))}},u=new Fe({vertexShader:dr,fragmentShader:kM(t),uniforms:d,depthTest:!1,depthWrite:!1,toneMapped:!1}),h={soft:!1,threads:!1};function f(g,v,p,m){l.uCamPos.value.set(v.position[0],v.position[1],v.position[2]),l.uCamRight.value.set(v.right[0],v.right[1],v.right[2]),l.uCamUp.value.set(v.up[0],v.up[1],v.up[2]),l.uCamFwd.value.set(-v.dir[0],-v.dir[1],-v.dir[2]);let _=Math.tan(v.fov*Math.PI/360);return l.uTan.value.set(_*p,_),l.uTime.value=g.t,l.uA.value=Math.max(g.a,1e-4),l.uAPrev.value=Math.max(m,1e-4),l.uTemp.value=g.temp,l.uEmit.value=g.plasmaEmit,l.uKappa.value=g.plasmaKappa,l.uBubble.value=g.bubble,l.uBubbleDone.value=g.bubbleDone,l.uFill.value=g.plasmaFill,l.uSupercool.value=g.supercool,l.uWall.value=g.bubbleWall,l.uPlasma.value=g.plasma*(g.plasmaEmit>.001?1:0),l.uGas.value=g.gas,l.uCondense.value=g.condense,l.uGasLit.value=g.gasLit,h.soft=l.uPlasma.value>.001||g.gas>.001,d.uGain.value=g.threads,h.threads=g.threads>.001,h.threads&&(d.uDiff.value=g.diff,d.uOpen.value=g.threadOpen,d.uBead.value=g.threadBead,d.uDense.value=g.threadDense,d.uCool.value=g.threadCool,d.uRho.value=Math.max(.001,g.a*ud*1.1)),h}return{material:c,threads:u,update:f,dispose:()=>{c.dispose(),u.dispose()}}}var _h=34,zM=`
uniform float uSize, uProjScale, uMinPx;
varying vec2 vP;
varying float vEnergy;
varying float vPx;
void main() {
  vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  float depth = max(-mv.z, 1e-9);
  float px = uSize * uProjScale / depth;
  float size = uSize;
  vEnergy = 1.0;
  if (px < uMinPx) { size = uMinPx * depth / uProjScale; vEnergy = (px * px) / (uMinPx * uMinPx); }
  vPx = px;
  mv.xy += position.xy * size * ${_h.toFixed(1)};
  vP = position.xy * ${_h.toFixed(1)};
  gl_Position = projectionMatrix * mv;
}
`,HM=`
uniform float uIntensity, uBeacon, uTime;
varying vec2 vP;
varying float vEnergy;
varying float vPx;
${bn}
${Oi}
void main() {
  float r = length(vP);
  vec3 col = vec3(0.0);
  // Photosphere of a hot, blue-white star: white-hot at the centre, limb-darkened into ice,
  // faintly granulated when resolved.
  if (r < 1.0) {
    float mu = sqrt(1.0 - r * r);
    float limb = 0.4 + 0.6 * mu;
    float gran = 1.0 + 0.06 * snoise(vec3(vP * 9.0, uTime * 0.3)) * smoothstep(8.0, 40.0, vPx);
    col += mix(vec3(0.62, 0.86, 1.0), P_WHITE, mu) * 6.4 * limb * gran;
  }
  float e = max(r - 1.0, 0.0);
  // Corona and a wide, soft scattering halo, ice blue (no flares, no rings).
  col += vec3(0.6, 0.86, 1.0) * (1.2 * exp(-e * 4.0) + 0.06 / (1.0 + e * e * 0.5)) * step(1.0, r);
  col *= smoothstep(${_h.toFixed(1)}, ${(_h*.55).toFixed(1)}, r);
  // While it is still a distant point, the star is lit up for the eye to find.
  float point = exp(-r * r * 0.6) * uBeacon * 20.0;
  gl_FragColor = vec4((col * vEnergy + vec3(0.85, 0.96, 1.0) * point) * uIntensity, 1.0);
}
`,VM=`
varying vec3 vObj;
varying vec3 vView;
varying vec3 vNormalV;
void main() {
  vObj = position;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vView = mv.xyz;
  vNormalV = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * mv;
}
`,GM=`
uniform vec3 uSunV;       // direction to the sun, view space
uniform vec3 uSunO;       // direction to the sun, planet (object) space
uniform float uCool, uOcean, uClouds, uLife, uTime, uOpacity, uCloudSpin;
varying vec3 vObj;
varying vec3 vView;
varying vec3 vNormalV;
${bn}
${Oi}
float fbm(vec3 p, int oct) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 6; i++) { if (i >= oct) break; v += a * snoise(p); p = p * 2.05 + 1.3; a *= 0.5; }
  return v;
}
vec3 spin(vec3 p, float a) {
  float c = cos(a), s = sin(a);
  return vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z);
}
// A log-spiral cyclone centred on c (unit), turning with the hemisphere: cover in 0..1.
float cyclone(vec3 p, vec3 c, float radius) {
  vec3 t1 = normalize(cross(c, vec3(0.0, 1.0, 0.0)));
  vec3 t2 = cross(c, t1);
  vec3 d = p - c * dot(p, c);
  float u = dot(d, t1), v = dot(d, t2);
  float r = length(vec2(u, v)) / radius;
  if (r > 1.6) return 0.0;
  float th = atan(v, u) * sign(c.y);
  float arms = 0.5 + 0.5 * cos(2.0 * (th + 2.6 * log(r + 0.04)));
  float eye = smoothstep(0.03, 0.09, r);
  return pow(arms, 1.6) * exp(-r * r * 1.6) * eye * 1.3;
}
// Cloud cover: a thin equatorial band, clear subtropics, streaky storm belts stretched along
// the parallels, two cyclones; fine broken cells.
float clouds(vec3 cp) {
  float y = cp.y;
  float lat = abs(y);
  float itcz = exp(-pow(y / 0.06, 2.0)) * 0.34;
  float belts = smoothstep(0.56, 0.66, lat) * (1.0 - smoothstep(0.78, 0.88, lat)) * 0.42;
  float subtropic = smoothstep(0.22, 0.32, lat) * (1.0 - smoothstep(0.42, 0.52, lat));
  vec3 cw = cp + 0.08 * vec3(snoise(cp * 3.0 + 1.0), snoise(cp * 3.0 + 6.0), snoise(cp * 3.0 + 11.0));
  // Stretched along longitude (a squeezed latitude axis): streaks, not cotton balls.
  float streak = fbm(cw * vec3(2.2, 7.5, 2.2) + vec3(0.0, 0.0, uTime * 0.006), 4);
  float cells = fbm(cw * 11.0 + 3.0, 3);
  float base = 0.14 + itcz + belts - 0.24 * subtropic;
  // Bands are broken up by the streaks themselves, never solid stripes.
  float c = base * (0.55 + 0.9 * smoothstep(-0.3, 0.4, streak)) + streak * 0.5 + cells * 0.22;
  c = max(c, cyclone(cp, normalize(vec3(0.55, 0.62, 0.56)), 0.26));
  c = max(c, cyclone(cp, normalize(vec3(-0.62, -0.58, 0.52)), 0.2) * 0.9);
  return smoothstep(0.38, 0.8, c - 0.3 * (1.0 - uClouds)) * uClouds;
}
void main() {
  vec3 n = normalize(vObj);
  float lat = abs(n.y);
  // Terrain: continents from a low-frequency field under a light warp, eroded coasts, and
  // ridged mountain belts along the continental margins.
  vec3 w = n + 0.12 * vec3(snoise(n * 2.0 + 4.0), snoise(n * 2.0 + 9.0), snoise(n * 2.0 - 3.0));
  float cont = snoise(w * 1.2) * 0.6 + snoise(w * 2.4 + 7.0) * 0.26;
  float erosion = fbm(n * 7.0 + 2.0, 4) * 0.16 + snoise(n * 26.0) * 0.03;
  float h = cont + erosion;
  float ridge = pow(1.0 - abs(snoise(n * 5.2 + 2.0)), 6.0);
  float margin = smoothstep(0.08, 0.2, cont) * (1.0 - smoothstep(0.3, 0.55, cont));
  h += 0.22 * ridge * margin;
  float sea = mix(-0.9, -0.02, uOcean);
  float water = smoothstep(sea + 0.006, sea - 0.006, h);
  float depthW = clamp((sea - h) / 0.3, 0.0, 1.0);

  // Land: dark basalt slate in the lowlands, blue-grey uplands, paler dry belts, bare ranges,
  // snow on the highest peaks. Life darkens the moist lowlands to a deeper slate-blue.
  float relief = h - sea;
  float dry = smoothstep(0.2, 0.32, lat) * (1.0 - smoothstep(0.45, 0.58, lat));
  vec3 land = mix(vec3(0.035, 0.045, 0.056), vec3(0.1, 0.12, 0.14), smoothstep(0.0, 0.25, relief));
  land = mix(land, vec3(0.17, 0.2, 0.23), dry * 0.55 * (1.0 - smoothstep(0.2, 0.4, relief)));
  land = mix(land, vec3(0.22, 0.25, 0.28), smoothstep(0.22, 0.4, relief) * ridge);
  land = mix(land, vec3(0.76, 0.82, 0.87), smoothstep(0.4, 0.5, relief) * uOcean);
  float moist = snoise(n * 2.6 + 7.0) * 0.5 + 0.5;
  float life = uLife * smoothstep(0.4, 0.7, moist) * (1.0 - dry) * smoothstep(0.85, 0.35, lat) * (1.0 - smoothstep(0.12, 0.3, relief));
  land = mix(land, land * vec3(0.5, 0.66, 0.82), life * 0.8);
  // Open ocean is a deep blue; shelves along the coasts are a little lighter.
  vec3 ocean = mix(vec3(0.008, 0.035, 0.06), vec3(0.004, 0.018, 0.044), smoothstep(0.0, 0.35, depthW));
  // Life in the sea: faint ice-cyan blooms swirl over the shallow shelves.
  float bloom = smoothstep(0.62, 0.92, snoise(n * 7.0 + vec3(0.0, 0.0, uTime * 0.003)) * 0.5 + 0.5 + 0.25 * snoise(n * 19.0));
  ocean += vec3(0.02, 0.07, 0.085) * bloom * uLife * (1.0 - smoothstep(0.05, 0.4, depthW));
  vec3 albedo = mix(land, ocean, water);
  // A small polar cap with a broken edge.
  float ice = smoothstep(0.93, 0.965, lat + 0.035 * snoise(n * 8.0) + 0.02 * snoise(n * 23.0)) * uOcean;
  albedo = mix(albedo, vec3(0.76, 0.84, 0.9), ice);

  vec3 N = normalize(vNormalV);
  vec3 V = normalize(-vView);
  vec3 L = normalize(uSunV);
  float ndl = dot(N, L);
  float diff = max(ndl, 0.0);
  float soft = smoothstep(-0.08, 0.2, ndl);
  // Light of a blue-white star.
  vec3 sunlight = vec3(0.9, 0.96, 1.0) * 2.8;
  // Clouds drift faster than the ground; their shadows fall a little away from the sun.
  vec3 cp = spin(n, uCloudSpin);
  float cover = clouds(cp);
  vec3 so = normalize(uSunO);
  float shadow = clouds(spin(normalize(n - so * 0.018), uCloudSpin));
  vec3 col = albedo * sunlight * diff * (1.0 - 0.55 * shadow);
  // Ocean glint (sun reflected in the sea), widened by waves near the terminator.
  vec3 H = normalize(L + V);
  float fres = 0.02 + 0.98 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
  float glint = pow(max(dot(N, H), 0.0), 220.0) * 1.4 + pow(max(dot(N, H), 0.0), 30.0) * 0.08;
  col += sunlight * glint * water * soft * (0.3 + fres) * (1.0 - ice) * (1.0 - cover);

  // Molten youth: a dark crust and fissures glowing in the film's colours of heat \u2014 a deep-blue
  // glow, white-hot in the open cracks \u2014 that fade as it cools.
  float hotness = 1.0 - uCool;
  float crack = pow(1.0 - abs(snoise(n * 2.4)), 10.0) + 0.45 * pow(1.0 - abs(snoise(n * 4.8 + 3.0)), 10.0);
  col *= mix(1.0, 0.3, hotness);
  float heat = crack * 2.6 + 0.16 + 0.12 * (h + 0.5);
  col += mix(P_ABYSS * 0.95, P_HI, smoothstep(0.5, 2.4, heat)) * heat * hotness * hotness;

  vec3 cloud = vec3(0.86, 0.91, 0.95) * sunlight * (diff * 0.85 + soft * 0.04);
  col = mix(col, cloud, cover * 0.85);

  gl_FragColor = vec4(col, uOpacity);
}
`,WM=`
varying vec3 vView;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vView = mv.xyz;
  gl_Position = projectionMatrix * mv;
}
`,XM=`
uniform vec3 uCenterV;   // planet centre, view space
uniform vec3 uSunV;
uniform float uRadius, uOuter, uStrength;
varying vec3 vView;
${Oi}
void main() {
  vec3 rd = normalize(vView);
  vec3 oc = -uCenterV;                    // camera relative to the centre
  float tca = -dot(oc, rd);
  vec3 closest = oc + rd * tca;
  float b = length(closest) / uRadius;
  float Ra = uOuter / uRadius;
  float outer = sqrt(max(Ra * Ra - b * b, 0.0));
  float inner = b < 1.0 ? sqrt(1.0 - b * b) : 0.0;
  // Path through the shell: limb rays graze it, rays over the disc only cross it.
  float path = b < 1.0 ? (outer - inner) * 0.22 : 2.0 * outer;
  float h = max(b - 1.0, 0.0);
  float dens = exp(-h / 0.018);
  vec3 p = b < 1.0 ? normalize(oc + rd * (tca - inner * uRadius)) : normalize(closest);
  vec3 S = normalize(uSunV);
  float mu = dot(p, S);
  float lit = smoothstep(-0.28, 0.32, mu);
  vec3 day = vec3(0.18, 0.55, 1.0);
  // Toward the terminator the limb, where the light grazes through the air, pales to ice
  // (no sunset tones: a cold, blue world).
  float limb = smoothstep(0.92, 1.0, b);
  vec3 col = mix(day, mix(day, P_ICE, limb * 0.35), 1.0 - smoothstep(-0.05, 0.35, mu)) * lit;
  // Twilight: a faint blue thread of scattered light around the night-side limb.
  col += vec3(0.1, 0.38, 0.9) * smoothstep(-0.75, -0.1, mu) * (1.0 - lit) * limb * 0.22;
  float fwd = pow(max(dot(rd, S), 0.0), 5.0);
  col += vec3(0.75, 0.95, 1.0) * fwd * lit * 0.6 * limb;
  float optical = path * dens;
  gl_FragColor = vec4(col * optical * uStrength, 1.0);
}
`;function k0({segments:i}){let e=new wt,t=new ki(2,2),n={uSize:{value:x0},uProjScale:{value:1e3},uMinPx:{value:3},uIntensity:{value:0},uBeacon:{value:0},uTime:{value:0}},s=new $e(t,new Fe({vertexShader:zM,fragmentShader:HM,uniforms:n,transparent:!0,depthTest:!1,depthWrite:!1,blending:Vt,toneMapped:!1}));s.position.set(ti[0],ti[1],ti[2]),s.frustumCulled=!1,s.renderOrder=20;let r=new rs(1,i,Math.round(i/2)),a={uSunV:{value:new L},uSunO:{value:new L(0,0,1)},uCool:{value:0},uOcean:{value:0},uClouds:{value:0},uLife:{value:0},uTime:{value:0},uOpacity:{value:0},uCloudSpin:{value:0}},o=new $e(r,new Fe({vertexShader:VM,fragmentShader:GM,uniforms:a,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}));o.position.set(ha[0],ha[1],ha[2]),o.scale.setScalar(Vs),o.frustumCulled=!1,o.renderOrder=30;let l={uCenterV:{value:new L},uSunV:{value:new L},uRadius:{value:Vs},uOuter:{value:Vs*1.07},uStrength:{value:0}},c=new $e(r,new Fe({vertexShader:WM,fragmentShader:XM,uniforms:l,transparent:!0,depthTest:!1,depthWrite:!1,blending:Vt,toneMapped:!1}));c.position.copy(o.position),c.scale.setScalar(Vs*1.07),c.frustumCulled=!1,c.renderOrder=31,e.add(s,o,c);let d=new L(...Gs).multiplyScalar(.92).addScaledVector(new L(...zn),-.4).normalize(),u=new Yi().setFromUnitVectors(new L(0,1,0),d),h=new Yi,f=new L(0,1,0),g=new L(ti[0],ti[1],ti[2]),v=new L,p=new Yi;function m(A,S,w){s.visible=A.sun>.001,n.uIntensity.value=A.sun,n.uBeacon.value=A.sunBeacon,n.uProjScale.value=S.projScale,n.uMinPx.value=2.2*S.pixelRatio,n.uTime.value=A.t;let y=A.planet>.001;o.visible=y,c.visible=y&&A.atmo>.001,y&&(h.setFromAxisAngle(f,2.2+A.t*.018),o.quaternion.copy(u).multiply(h),v.copy(g).sub(o.position).normalize(),p.copy(o.quaternion).invert(),a.uSunO.value.copy(v).applyQuaternion(p),v.transformDirection(w.matrixWorldInverse),a.uSunV.value.copy(v),l.uSunV.value.copy(v),l.uCenterV.value.copy(o.position).applyMatrix4(w.matrixWorldInverse),a.uCool.value=A.cool,a.uOcean.value=A.ocean,a.uClouds.value=A.clouds,a.uLife.value=A.life,a.uTime.value=A.t,a.uOpacity.value=A.planet,a.uCloudSpin.value=A.t*.006,l.uStrength.value=A.atmo*A.planet*3)}function _(){t.dispose(),r.dispose(),s.material.dispose(),o.material.dispose(),c.material.dispose()}return{group:e,update:m,dispose:_}}var qM=`
uniform sampler2D tSrc;
uniform vec2 uTexel;
uniform float uKaris;
varying vec2 vUv;
vec3 s(vec2 o) { return texture2D(tSrc, vUv + o * uTexel).rgb; }
float kw(vec3 c) { return 1.0 / (1.0 + dot(c, vec3(0.2126, 0.7152, 0.0722))); }
void main() {
  vec3 a = s(vec2(-2.0, 2.0)), b = s(vec2(0.0, 2.0)), c = s(vec2(2.0, 2.0));
  vec3 d = s(vec2(-2.0, 0.0)), e = s(vec2(0.0)), f = s(vec2(2.0, 0.0));
  vec3 g = s(vec2(-2.0, -2.0)), h = s(vec2(0.0, -2.0)), i = s(vec2(2.0, -2.0));
  vec3 j = s(vec2(-1.0, 1.0)), k = s(vec2(1.0, 1.0)), l = s(vec2(-1.0, -1.0)), m = s(vec2(1.0, -1.0));
  vec3 g0 = (j + k + l + m) * 0.25;
  vec3 g1 = (a + b + d + e) * 0.25;
  vec3 g2 = (b + c + e + f) * 0.25;
  vec3 g3 = (d + e + g + h) * 0.25;
  vec3 g4 = (e + f + h + i) * 0.25;
  vec3 col;
  if (uKaris > 0.5) {
    // Karis average on the first level suppresses single-pixel fireflies.
    float w0 = kw(g0) * 0.5, w1 = kw(g1) * 0.125, w2 = kw(g2) * 0.125, w3 = kw(g3) * 0.125, w4 = kw(g4) * 0.125;
    col = (g0 * w0 + g1 * w1 + g2 * w2 + g3 * w3 + g4 * w4) / (w0 + w1 + w2 + w3 + w4);
  } else {
    col = g0 * 0.5 + (g1 + g2 + g3 + g4) * 0.125;
  }
  gl_FragColor = vec4(col, 1.0);
}
`,YM=`
uniform sampler2D tSrc;
uniform vec2 uTexel;
uniform float uRadius;
varying vec2 vUv;
vec3 s(vec2 o) { return texture2D(tSrc, vUv + o * uTexel * uRadius).rgb; }
void main() {
  vec3 col = s(vec2(0.0)) * 4.0;
  col += (s(vec2(-1.0, 0.0)) + s(vec2(1.0, 0.0)) + s(vec2(0.0, -1.0)) + s(vec2(0.0, 1.0))) * 2.0;
  col += s(vec2(-1.0, -1.0)) + s(vec2(1.0, -1.0)) + s(vec2(-1.0, 1.0)) + s(vec2(1.0, 1.0));
  gl_FragColor = vec4(col / 16.0, 1.0);
}
`,$M=`
uniform sampler2D tSrc;
uniform vec2 uStep;
varying vec2 vUv;
void main() {
  vec3 c = texture2D(tSrc, vUv).rgb * 0.227027;
  c += texture2D(tSrc, vUv + uStep * 1.384615).rgb * 0.316216;
  c += texture2D(tSrc, vUv - uStep * 1.384615).rgb * 0.316216;
  c += texture2D(tSrc, vUv + uStep * 3.230769).rgb * 0.070270;
  c += texture2D(tSrc, vUv - uStep * 3.230769).rgb * 0.070270;
  gl_FragColor = vec4(c, 1.0);
}
`,ZM=`
uniform sampler2D tSrc;
uniform vec2 uCenter;
uniform float uAmount, uFade;
varying vec2 vUv;
void main() {
  vec2 dir = vUv - uCenter;
  vec3 acc = vec3(0.0);
  float wsum = 0.0;
  for (int i = 0; i < 8; i++) {
    float f = float(i) / 8.0;
    float w = 1.0 - uFade * f;
    acc += texture2D(tSrc, uCenter + dir * (1.0 - uAmount * f)).rgb * w;
    wsum += w;
  }
  gl_FragColor = vec4(acc / wsum, 1.0);
}
`,KM=`
uniform sampler2D tSrc;
varying vec2 vUv;
void main() { gl_FragColor = vec4(texture2D(tSrc, vUv).rgb, 1.0); }
`,JM=`
uniform sampler2D tScene;
uniform sampler2D tBloom;
uniform float uBloom, uBloomAdd, uBloomNorm, uExposure, uFlash, uGrain, uVignette, uAberration, uTime, uAspect, uCurveMix;
uniform float uHue;         // weight of the hue-preserving curve (the birth)
uniform float uScrim;       // graduated darkening of the lower band (UI captions and controls)
uniform vec2 uScrimBand;    // its full-strength top and its fade-out height (screen heights)
uniform vec2 uCenter;      // uv of the singularity
uniform float uLensR;      // Einstein radius, in screen heights
uniform float uShockR, uShockAmp;
uniform vec3 uBg;
uniform vec2 uResolution;
uniform vec3 uGlare;       // xy: sun position in uv (may lie off-screen), z: strength
uniform vec3 uLift;        // display-space background lift around the singularity
uniform float uLiftRadius;
varying vec2 vUv;
${vs}
${Oi}

vec3 aces(vec3 x) {
  const mat3 ACESIn = mat3(0.59719, 0.07600, 0.02840, 0.35458, 0.90834, 0.13383, 0.04823, 0.01566, 0.83777);
  const mat3 ACESOut = mat3(1.60475, -0.10208, -0.00327, -0.53108, 1.10813, -0.07276, -0.07367, -0.00605, 1.07602);
  x = ACESIn * x;
  vec3 a = x * (x + 0.0245786) - 0.000090537;
  vec3 b = x * (0.983729 * x + 0.4329510) + 0.238081;
  return clamp(ACESOut * (a / b), 0.0, 1.0);
}
// The engine's curve (linear darks, exponential shoulder, hot highlights drift to white):
// the film starts on it so the handover frame matches, then blends into its own ACES look.
vec3 shoulder(vec3 c) {
  vec3 m = 1.0 - exp(-c);
  float peak = max(c.r, max(c.g, c.b));
  float top = max(m.r, max(m.g, m.b));
  return mix(m, vec3(top), smoothstep(1.0, 5.0, peak) * 0.55);
}
// Hue-preserving shoulder for the birth: the peak channel is compressed and the others follow in
// proportion, so the cold fire keeps its ice and deep blue instead of greying out; only light far
// past the shoulder burns through to white.
vec3 incandescent(vec3 x) {
  float m = max(x.r, max(x.g, x.b));
  float mt = 1.0 - exp(-m);
  vec3 c = x * (mt / max(m, 1e-6));
  return mix(c, vec3(mt), smoothstep(2.0, 12.0, m) * 0.7);
}
vec3 toSRGB(vec3 c) {
  return mix(c * 12.92, 1.055 * pow(max(c, vec3(0.0)), vec3(1.0 / 2.4)) - 0.055, step(vec3(0.0031308), c));
}

void main() {
  vec2 asp = vec2(uAspect, 1.0);
  vec2 p = (vUv - uCenter) * asp;
  float r = length(p);
  float shockEdge = 0.0;
  // Point-mass lens (the image at \u03B8 shows the source at \u03B8 \u2212 \u03B8E\xB2/\u03B8), faded out inside
  // the Einstein radius so the bright core itself is never magnified.
  if (uLensR > 0.0) {
    float defl = uLensR * uLensR / max(r, 1e-5) * smoothstep(1.2 * uLensR, 3.0 * uLensR, r);
    p -= (p / max(r, 1e-5)) * defl;
  }
  // Impact shockwave: a refracting shell racing outward (derivative-of-Gaussian profile).
  if (uShockAmp > 0.0) {
    float x = (r - uShockR) / (0.045 + 0.05 * uShockR);
    float wave = x * exp(-x * x);
    shockEdge = exp(-x * x) * uShockAmp;
    p += (p / max(r, 1e-5)) * wave * uShockAmp * 0.035;
  }
  vec2 suv = uCenter + p / asp;
  vec2 fromC = suv - 0.5;
  float ca = (uAberration * 0.0035 + shockEdge * 0.006) * (0.3 + dot(fromC, fromC) * 3.0);
  // Lens dispersion, cold: light displaced from nearer the centre adds an ice fringe, light from
  // further out a deep-blue one (energy is only added, never split out of white into warm).
  vec3 col = texture2D(tScene, suv).rgb;
  if (ca > 0.0) {
    const vec3 Y = vec3(0.2126, 0.7152, 0.0722);
    float l0 = dot(col, Y);
    float lIn = dot(texture2D(tScene, suv - fromC * ca).rgb, Y);
    float lOut = dot(texture2D(tScene, suv + fromC * ca).rgb, Y);
    col += P_ICE * max(lIn - l0, 0.0) * 0.45 + P_BLUE * max(lOut - l0, 0.0) * 0.4;
  }
  vec3 bloom = texture2D(tBloom, suv).rgb * uBloomNorm;
  // Energy-conserving bloom, plus (only at the handover) the engine's additive glow.
  col = mix(col, bloom, uBloom) + bloom * uBloomAdd;
  // Vignette on the light only; the background below stays exact.
  vec2 vq = (vUv - 0.5) * asp;
  float vig = 1.0 - uVignette * smoothstep(0.3, 1.25, length(vq));
  col *= vig;
  // The shock front itself: a faint, irregular shell of ice-blue light, broken by a smooth noise
  // around the circle (48 cells, seamless; a hash of the direction grid drew rectangles where the
  // front is wide).
  if (shockEdge > 0.0) {
    float around = (atan(p.y, p.x) * 0.15915494 + 0.5) * 48.0;
    float cell = floor(around), fc = fract(around);
    float breakup = mix(hash11(mod(cell, 48.0)), hash11(mod(cell + 1.0, 48.0)), fc * fc * (3.0 - 2.0 * fc)) * 0.6 + 0.4;
    col += vec3(0.5, 0.85, 1.0) * shockEdge * shockEdge * breakup * 0.05;
  }
  // Veiling glare from the blue-white star just outside the frame: a soft ice wash, no ghosts.
  if (uGlare.z > 0.0) {
    vec2 gd = (vUv - uGlare.xy) * asp;
    col += vec3(0.62, 0.87, 1.0) * uGlare.z * (0.05 / (0.06 + dot(gd, gd)));
  }
  col *= uExposure;
  // The impact's light: ice-white, concentrated at the singularity (the bloom spreads it); the
  // blacks stay deep.
  col += uFlash * vec3(0.85, 0.96, 1.0) * 1.3 * exp(-r * r * 60.0);
  vec3 lin = col;
  col = mix(shoulder(lin * 1.12), aces(lin * 1.35), uCurveMix);
  if (uHue > 0.0) col = mix(col, incandescent(lin * 1.25), uHue);
  // Grade: cool the shadows a touch (less through the birth, whose deep blues are already
  // saturated), keep highlights clean.
  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col *= mix(mix(vec3(0.92, 0.99, 1.05), vec3(1.0), smoothstep(0.0, 0.5, l)), vec3(1.0), 0.6 * uHue);
  col = toSRGB(col);
  // Graduated filter over the lower band, applied to the light only (the background stays exact).
  col *= 1.0 - uScrim * pow(1.0 - smoothstep(uScrimBand.x, uScrimBand.y, vUv.y), 1.6);
  // Deep-space background composed in display space (screen blend), as the engine does,
  // so #04070b stays exact under any tone curve.
  vec2 lg = (vUv - uCenter) * asp / uLiftRadius;
  vec3 bg = (uBg + uLift * exp(-dot(lg, lg) * 1.6)) * (0.78 + 0.22 * vig);
  col = 1.0 - (1.0 - bg) * (1.0 - col);
  // Film grain (luminance-aware), also dithering the gradients.
  vec2 fc = gl_FragCoord.xy;
  float seed = floor(uTime * 24.0);
  float g = hash12(fc + seed * vec2(37.0, 17.0)) + hash12(fc * 1.37 + seed * vec2(11.0, 53.0)) - 1.0;
  col += g * uGrain * mix(0.55 + col.g, 0.35 + 0.65 * (1.0 - l), uCurveMix);
  gl_FragColor = vec4(col, 1.0);
}
`;function fa(i,e){return new Rt(Math.max(1,i),Math.max(1,e),{type:Wt,format:wi,depthBuffer:!1,stencilBuffer:!1,minFilter:Qt,magFilter:Qt,generateMipmaps:!1,wrapS:on,wrapT:on})}function z0(i,{bloomLevels:e,softScale:t,threadScale:n=.8,bloom:s}){let r=new pt;r.setAttribute("position",new yt([-1,-1,0,3,-1,0,-1,3,0],3));let a=new Dn(-1,1,1,-1,0,1),o=new mi,l=new $e(r);l.frustumCulled=!1,o.add(l);let c=(N,V,Y=Si)=>new Fe({vertexShader:dr,fragmentShader:N,uniforms:V,blending:Y,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:Y!==Si}),d=c(qM,{tSrc:{value:null},uTexel:{value:new ye},uKaris:{value:0}}),u=c(YM,{tSrc:{value:null},uTexel:{value:new ye},uRadius:{value:1}},Vt),h=c(KM,{tSrc:{value:null}},Vt),f=c($M,{tSrc:{value:null},uStep:{value:new ye}}),g=c(ZM,{tSrc:{value:null},uCenter:{value:new ye(.5,.5)},uAmount:{value:0},uFade:{value:0}}),v=new Or(new Uint8Array([0,0,0,255]),1,1);v.needsUpdate=!0;let p={tScene:{value:null},tBloom:{value:v},uBloom:{value:0},uBloomAdd:{value:0},uBloomNorm:{value:1},uExposure:{value:1},uFlash:{value:0},uHue:{value:0},uScrim:{value:0},uScrimBand:{value:new ye(0,.42)},uGrain:{value:.04},uVignette:{value:.3},uAberration:{value:0},uTime:{value:0},uAspect:{value:1},uCurveMix:{value:1},uCenter:{value:new ye(.5,.5)},uLensR:{value:0},uShockR:{value:0},uShockAmp:{value:0},uBg:{value:new L},uResolution:{value:new ye(1,1)},uGlare:{value:new L},uLift:{value:new L},uLiftRadius:{value:.55}},m=c(JM,p),_=null,A=null,S=null,w=null,y=null,T=[],x=1,E=1;function R(N,V){D(),x=N,E=V,_=fa(N,V);let Y=Math.max(t,Math.min(.75,300/Math.max(1,Math.min(N,V))));A=fa(Math.round(N*Y),Math.round(V*Y)),S=fa(Math.round(N*Y),Math.round(V*Y));let re=Math.max(n,Math.min(1,480/Math.max(1,Math.min(N,V))));if(w=fa(Math.round(N*re),Math.round(V*re)),y=fa(Math.round(N*re),Math.round(V*re)),s){let ee=N,Pe=V;for(let Ce=0;Ce<e&&(ee=Math.max(1,Math.round(ee/2)),Pe=Math.max(1,Math.round(Pe/2)),T.push(fa(ee,Pe)),!(ee<=4||Pe<=4));Ce++);}}function D(){for(_?.dispose(),_=null,A?.dispose(),A=null,S?.dispose(),S=null,w?.dispose(),w=null,y?.dispose(),y=null;T.length;)T.pop().dispose()}function F(N,V){l.material=N,i.setRenderTarget(V),i.render(o,a)}function I(N,V,Y,re,ee){if(!_)return;if(i.setClearColor(0,0),Y){F(Y,A),f.uniforms.tSrc.value=A.texture;let Ce=ee.softBlur||.8;f.uniforms.uStep.value.set(Ce/A.width,0),F(f,S),f.uniforms.tSrc.value=S.texture,f.uniforms.uStep.value.set(0,Ce/A.height),F(f,A)}let Pe=null;if(re&&(F(re,w),Pe=w,ee.threadZoom>.001)){let Ce=g.uniforms;Ce.uCenter.value.set(ee.centerX,ee.centerY),Ce.tSrc.value=w.texture,Ce.uAmount.value=ee.threadZoom/8,Ce.uFade.value=0,F(g,y),Ce.tSrc.value=y.texture,Ce.uAmount.value=ee.threadZoom,Ce.uFade.value=.7,F(g,w)}if(i.setRenderTarget(_),i.clear(!0,!1,!1),Y&&(h.uniforms.tSrc.value=A.texture,F(h,_)),Pe&&(h.uniforms.tSrc.value=Pe.texture,F(h,_)),i.setRenderTarget(_),i.render(N,V),T.length){let Ce=_;for(let Le=0;Le<T.length;Le++)d.uniforms.tSrc.value=Ce.texture,d.uniforms.uTexel.value.set(1/Ce.width,1/Ce.height),d.uniforms.uKaris.value=Le===0?1:0,F(d,T[Le]),Ce=T[Le];for(let Le=T.length-1;Le>0;Le--)u.uniforms.tSrc.value=T[Le].texture,u.uniforms.uTexel.value.set(1/T[Le].width,1/T[Le].height),u.uniforms.uRadius.value=1,F(u,T[Le-1]);p.tBloom.value=T[0].texture,p.uBloomNorm.value=1/T.length,p.uBloom.value=ee.bloom,p.uBloomAdd.value=ee.bloomAdd}else p.tBloom.value=v,p.uBloom.value=0,p.uBloomAdd.value=0;p.tScene.value=_.texture,p.uExposure.value=ee.exposure,p.uFlash.value=ee.flash,p.uCurveMix.value=ee.curveMix,p.uHue.value=ee.hueCurve,p.uScrim.value=ee.scrim,p.uScrimBand.value.set(ee.scrimLow||0,ee.scrimHeight||.42),p.uGrain.value=ee.grain,p.uVignette.value=ee.vignette,p.uAberration.value=ee.aberration,p.uTime.value=ee.time,p.uAspect.value=x/E,p.uCenter.value.set(ee.centerX,ee.centerY),p.uLensR.value=ee.lensR,p.uShockR.value=ee.shockRadius,p.uShockAmp.value=ee.shockAmp,p.uBg.value.set(ee.bg[0],ee.bg[1],ee.bg[2]),p.uResolution.value.set(x,E),p.uGlare.value.set(ee.glareX,ee.glareY,ee.glare),p.uLift.value.set(ee.lift[0],ee.lift[1],ee.lift[2]),p.uLiftRadius.value=ee.liftRadius,F(m,null)}let C=null,U=new mi;function H(N,V=3.6,Y=5.8){if(!C){let re=(ee,Pe,Ce=!1)=>{let Le=new $e(r,ee);return Le.frustumCulled=!1,{object:Le,camera:a,scene:U,screen:Ce,at:Pe}};C=[re(d,0),re(u,0),re(m,0,!0),re(h,V),re(f,V),re(g,Y)];for(let[ee,Pe]of N)C.push(re(ee,Pe))}return C}function G(){D(),r.dispose(),d.dispose(),u.dispose(),h.dispose(),f.dispose(),g.dispose(),m.dispose(),v.dispose()}function K(N){for(let V of[_,A,S,w,y,...T])V&&N(V);for(let V of[r,d,u,h,f,g,m,v])N(V)}return{allocate:R,release:D,render:I,compileUnits:H,forget:K,dispose:G,get allocated(){return!!_}}}var H0=Object.freeze({high:{matter:16e4,nodes:56,galaxy:9e4,sky:4200,bloomLevels:6,softScale:.5,plasmaSteps:7,plasmaOctaves:4,shells:6,threadScale:.85,planetSegments:128,maxPixels:34e5},medium:{matter:9e4,nodes:48,galaxy:52e3,sky:3e3,bloomLevels:5,softScale:.42,plasmaSteps:6,plasmaOctaves:4,shells:5,threadScale:.72,planetSegments:96,maxPixels:21e5},low:{matter:38e3,nodes:36,galaxy:24e3,sky:2e3,bloomLevels:4,softScale:.34,plasmaSteps:4,plasmaOctaves:3,shells:4,threadScale:.6,planetSegments:64,maxPixels:11e5}}),V0=6,jM=16,QM=2500;function G0({renderer:i,quality:e={}}={}){let t=Ri(),n=H0[e.tier]?e.tier:"high",s=H0[n],r=Math.round(Math.max(4e3,Math.min(s.matter,e.particles>0?Math.max(e.particles,s.matter*.5):s.matter))),a=e.bloom!==!1,o=null,l=null,c=null,d=null,u=null,h=null,f=null,g=new mi;g.matrixWorldAutoUpdate=!0;let v=new pi(45,1,.02,40),p=!1,m=0,_=0,A=null,S=new Promise(se=>{A=se}),w={createMs:0,steps:0,longestMs:0,buildMs:0,beganBeforeBuild:!1,compileMs:0,beginMs:0,beginCompileMs:0,beginPending:0,centreMs:0,handoverMs:0,heldMs:0,focus:!1,exact:!1,light:"default"},y=m0(),T=w0(),x={x:0,y:0,tx:0,ty:0},E={width:1,height:1,pixelRatio:1,projScale:1e3,focus:1,aperture:0,nearFade:.02,size:.0016,gain:1,galaxyGain:1,cameraDistance:1},R={exposure:1,bloom:.08,bloomAdd:0,flash:0,grain:.04,vignette:.3,aberration:0,time:0,curveMix:1,hueCurve:0,scrim:0,scrimLow:0,scrimHeight:.42,centerX:.5,centerY:.5,lensR:0,shockRadius:0,shockAmp:0,bg:y.bg,glareX:0,glareY:0,glare:0,lift:y.lift,liftRadius:.55,softBlur:.8,threadZoom:0},D=0,F=!1,I=!1,C=!1,U=!1,H=45,G=1,K=1,N=1,V=null,Y=!1,re=new L,ee={p0:[0,0,0],scale:1,x:[1,0,0],y:[0,1,0],z:[0,0,1],eye:[0,0,1],forward:[0,0,-1],right:[1,0,0],up:[0,1,0],kx:.5,ky:.5,ox:.5,oy:.62,aspect:1,invDiag:1},Pe=new ye,Ce={matter:!0,soft:!0},Le={},J=Q(r),te=Be(),ue=i.domElement,Ie=!1,Me=0,Je=!1,tt=!1,Ee=0,Ae=null,Ve=null;ue?.addEventListener?.("webglcontextlost",$),ue?.addEventListener?.("webglcontextrestored",j),Ct(),w.createMs=Ri()-t;function*Be(){let se=yield*I0(r,s.nodes,4e3);o=L0(se),yield,l=F0();let He=Hs(24680),Oe=new Float32Array(s.galaxy*4),at=new Float32Array(s.galaxy*3);for(let gt=0;gt<s.galaxy;gt+=8e3)yield,A0(He,Oe,at,gt,Math.min(s.galaxy,gt+8e3));u=R0({count:s.galaxy,orbit:Oe,color:at}),yield,c=O0(yield*N0(s.sky)),yield,d=B0({steps:s.plasmaSteps,octaves:s.plasmaOctaves,shells:s.shells,nodes:o.nodes}),yield,h=k0({segments:s.planetSegments}),yield,f=z0(i,{bloomLevels:s.bloomLevels,softScale:s.softScale,threadScale:s.threadScale,bloom:a}),g.add(c.band,c.parent,c.fresh,u.group,o.mesh,l.group,h.group),p=!0}function ht(){let se=Ri();te.next();let He=Ri()-se;w.steps++,w.longestMs=Math.max(w.longestMs,He),p&&(w.buildMs=Ri()-t,A(!0))}function Ct(){p||Y||m||_||(Ae?_=setTimeout(ui,0):typeof requestIdleCallback=="function"?m=requestIdleCallback(ui,{timeout:1e3}):_=setTimeout(ui,16))}function ui(se){if(m=0,_=0,p||Y)return;let He=Ri(),Oe=Ae?jM:se&&typeof se.timeRemaining=="function"&&!se.didTimeout?Math.min(12,Math.max(V0*.5,se.timeRemaining()-1)):V0;try{do ht();while(!p&&Ri()-He<Oe*.5)}catch(at){console.error("Universe: ending film build failed",at),Ve=at,Ae=null,A(!1);return}if(!p){Ct();return}if(Ae){let at=Ae;Ae=null,Ge(at)}Ut()}function Ft(){p||(m&&typeof cancelIdleCallback=="function"&&cancelIdleCallback(m),m=0,_||Ct())}function Ut(se=!1){if(Je||Y||Ie||!p)return;let He=ii();if(He.every(Xt=>Xt.done))return;Je=!0;let Oe=Ri(),at=Me,gt=new Rt(1,1,{type:Wt,depthBuffer:!1}),Nt=typeof i.compileAsync=="function",At=0,ni=()=>Y||Ie||at!==Me,Wi=()=>{if(at!==Me){fr(gt);return}Je=!1,gt.dispose(),He.every(Xt=>Xt.done)&&(w.compileMs=Ri()-Oe)},Xi=()=>{for(;At<He.length&&He[At].done;)At++;if(ni()||At>=He.length){Wi();return}let Xt=He[At++],Vn=null;try{Vn=M(Xt,gt,Nt)}catch{}Promise.resolve(Vn).catch(()=>{}).then(()=>W(()=>{ni()||Mt(Xt),Xi()}))};se?Xi():W(Xi)}let B=null;function ii(){if(B)return B;let se=[],He=new Set,Oe=(at,gt)=>at.traverse(Nt=>{!Nt.material||He.has(Nt)||(He.add(Nt),se.push({object:Nt,camera:v,scene:g,screen:!1,at:gt,done:!1}))});Oe(o.mesh,0),Oe(l.group,0),Oe(c.parent,0);for(let at of f.compileUnits([[d.material,ze],[d.threads,5.8]],ze,5.8))se.push({...at,done:!1});return Oe(u.group,18.9),Oe(h.group,21.6),Oe(c.fresh,22.6),Oe(c.band,23.5),Oe(g,0),B=se.sort((at,gt)=>at.at-gt.at),B}function Mt(se){let He=se.object.material,Oe=He&&i.properties?.get(He)?.currentProgram;try{Oe&&Oe.getUniforms&&(Oe.getUniforms(),Oe.getAttributes())}catch{}se.done=!0,B.every(at=>at.done)&&(tt=!0)}function P(se){if(tt||!B)return!0;let He=!0;for(let at=0;at<B.length&&B[at].at<=se;at++){let gt=B[at];if(gt.done)continue;let Nt=gt.object.material,At=Nt?i.properties.get(Nt).currentProgram:null;if(!At||typeof At.isReady=="function"&&!At.isReady()){He=!1;break}}if(He)return Ee=0,!0;Je||Ut(!0);let Oe=Ri();return Ee||(Ee=Oe),Oe-Ee<QM?(w.heldMs=Math.max(w.heldMs,Oe-Ee),!1):!0}function M(se,He,Oe){let at=i.getRenderTarget(),gt=i.outputColorSpace,Nt=i.toneMapping;i.outputColorSpace=jt,i.toneMapping=ai;let At;try{i.setRenderTarget(se.screen?null:He),At=Oe?i.compileAsync(se.object,se.camera,se.scene):i.compile(se.object,se.camera,se.scene)}finally{i.setRenderTarget(at),i.outputColorSpace=gt,i.toneMapping=Nt}return At}function W(se){typeof requestIdleCallback=="function"?requestIdleCallback(se,{timeout:F?120:1e3}):setTimeout(se,16)}function $(){if(Ie=!0,Me++,Je=!1,tt=!1,Ee=0,B)for(let se of B)se.done=!1;ce()}function j(){Ie=!1,p&&!Y&&Ut()}function ce(){g.traverse(se=>{fr(se.geometry),fr(se.material)}),d&&(fr(d.material),fr(d.threads)),f?.forget(fr)}function he(){if(!p)return;let se=null,He=0;for(let Oe of ii()){if(Oe.done)continue;He++;let at=Oe.object.material;if(!(Oe.at>=ze||at&&i.properties.get(at).currentProgram)){se=se||new Rt(1,1,{type:Wt,depthBuffer:!1});try{M(Oe,se,!1)}catch{}}}se?.dispose(),w.beginPending=He,Ee=0,He&&Ut(!0)}function Q(se){return Math.min(2.2,Math.sqrt(16e4/se))}function ne(){V={toneMapping:i.toneMapping,toneMappingExposure:i.toneMappingExposure,clearColor:i.getClearColor(new je),clearAlpha:i.getClearAlpha(),autoClear:i.autoClear,outputColorSpace:i.outputColorSpace,renderTarget:i.getRenderTarget()},i.toneMapping=ai,i.toneMappingExposure=1,i.autoClear=!1,i.outputColorSpace=jt}function de(){V&&(i.toneMapping=V.toneMapping,i.toneMappingExposure=V.toneMappingExposure,i.setClearColor(V.clearColor,V.clearAlpha),i.autoClear=V.autoClear,i.outputColorSpace=V.outputColorSpace,i.setRenderTarget(V.renderTarget),V=null)}function Ue(){let se=Math.max(1,Math.round(G*N)),He=Math.max(1,Math.round(K*N)),Oe=Math.min(1,Math.sqrt(s.maxPixels/(se*He)));f.allocate(Math.max(1,Math.round(se*Oe)),Math.max(1,Math.round(He*Oe))),E.width=Math.max(1,Math.round(se*Oe)),E.height=Math.max(1,Math.round(He*Oe)),E.pixelRatio=N*Oe}function ve(){if(U&&I){for(let se=0;se<hr.length;se++)if(Math.abs(D-hr[se].start)<.001)return f0[se]}return D}function fe(se,He,Oe,at){let gt=0,Nt=0,At=0,ni=Math.max(1,Math.floor(Oe/16e3)),Wi=new Float32Array(Math.ceil(Oe/(ni*4))),Xi=1/0;for(let Xt=0;Xt<3;Xt++){let Vn=0,si=0,qi=0,dn=0;for(let di=0;di<Oe;di+=ni){let Ci=se[di*3],vi=se[di*3+1],qt=se[di*3+2],xi=Ci-gt,_i=vi-Nt,Pi=qt-At;if(xi*xi+_i*_i+Pi*Pi>Xi)continue;let b=He?.05+He[di*3]*.3+He[di*3+1]*.55+He[di*3+2]*.15:1;Vn+=Ci*b,si+=vi*b,qi+=qt*b,dn+=b}if(!(dn>0))return at.slice();if(gt=Vn/dn,Nt=si/dn,At=qi/dn,Xt<2){let di=0;for(let qt=0;qt<Oe;qt+=ni*4){let xi=se[qt*3]-gt,_i=se[qt*3+1]-Nt,Pi=se[qt*3+2]-At;Wi[di++]=Math.sqrt(xi*xi+_i*_i+Pi*Pi)}let vi=(Wi.subarray(0,di).sort()[di>>1]||1)*2.5;Xi=vi*vi}}return[gt,Nt,At]}function Ne(se={}){if(!(Y||Ve)){if(D=0,F=!0,I=!1,C=!1,p){Ge(se);return}w.beganBeforeBuild=!0,Ae=se,Ft()}}function Ge(se){let He=Ri(),{positions:Oe=null,colors:at=null,sizes:gt=null,energies:Nt=null,camera:At=null,origin:ni=[.5,.62],focus:Wi=null,focusLight:Xi}=se,Xt=Oe?Math.min(se.count||Oe.length/3,Math.floor(Oe.length/3)):0;i.getSize(Pe),G=se.width>0?se.width:Pe.x||G,K=se.height>0?se.height:Pe.y||K,N=se.pixelRatio>0?se.pixelRatio:e.pixelRatio>0?e.pixelRatio:i.getPixelRatio()||1,V||ne(),Ue();let Vn=Ri();he(),w.beginCompileMs=Ri()-Vn;let si=At?.position||[0,.6,6],qi=At?.target||[0,0,0];H=At?.fov||45;let dn=Ri(),di=tS(Wi,si);w.focus=!!di;let Ci=di||(Xt>0?fe(Oe,at,Xt,qi):qi.slice()),vi=si[0]-Ci[0],qt=si[1]-Ci[1],xi=si[2]-Ci[2],_i=Math.hypot(vi,qt,xi)||1;vi/=_i,qt/=_i,xi/=_i;let Pi=0,b=1,O=0;Math.abs(qt)>.995&&(b=0,O=-1);let Z=b*xi-O*qt,X=O*vi-Pi*xi,q=Pi*qt-b*vi,xe=Math.hypot(Z,X,q)||1;Z/=xe,X/=xe,q/=xe;let be=qt*q-xi*X,ge=xi*Z-vi*q,Re=vi*X-qt*Z,le=ee;le.p0[0]=Ci[0],le.p0[1]=Ci[1],le.p0[2]=Ci[2],le.scale=1/_i,le.x[0]=Z,le.x[1]=X,le.x[2]=q,le.y[0]=be,le.y[1]=ge,le.y[2]=Re,le.z[0]=vi,le.z[1]=qt,le.z[2]=xi;{let Gn=qi[0]-Ci[0],xt=qi[1]-Ci[1],Ot=qi[2]-Ci[2],fn=T.handoverTarget;fn[0]=(Gn*Z+xt*X+Ot*q)/_i,fn[1]=(Gn*be+xt*ge+Ot*Re)/_i,fn[2]=(Gn*vi+xt*qt+Ot*xi)/_i}let nt=T.handoverUp;nt[0]=Pi*Z+b*X+O*q,nt[1]=Pi*be+b*ge+O*Re,nt[2]=Pi*vi+b*qt+O*xi;let Qe=qi[0]-si[0],Te=qi[1]-si[1],lt=qi[2]-si[2],kt=Math.hypot(Qe,Te,lt)||1;Qe/=kt,Te/=kt,lt/=kt;let St=Te*O-lt*b,vt=lt*Pi-Qe*O,Gt=Qe*b-Te*Pi,we=Math.hypot(St,vt,Gt)||1;St/=we,vt/=we,Gt/=we;let ri=G/K,ut=Math.tan(H*Math.PI/360);le.eye[0]=si[0],le.eye[1]=si[1],le.eye[2]=si[2],le.forward[0]=Qe,le.forward[1]=Te,le.forward[2]=lt,le.right[0]=St,le.right[1]=vt,le.right[2]=Gt,le.up[0]=vt*lt-Gt*Te,le.up[1]=Gt*Qe-St*lt,le.up[2]=St*Te-vt*Qe,le.kx=.5/(ut*ri),le.ky=.5/ut,le.ox=tn(ni?.[0]??.5,0,1),le.oy=tn(ni?.[1]??.62,0,1),le.aspect=ri,le.invDiag=1/Math.hypot(ri,1);let Ii=!!(gt&&Nt&&gt.length>=Xt&&Nt.length>=Xt);w.exact=Ii&&Xt>0;let sn=Ri();w.centreMs=sn-dn,o.loadHandover(Oe,at,Xt,Xt>0?le:null,1/_i,Ii?gt:null,Ii?Nt:null);let En=Xi===void 0?yd:eS(Xi)||[];w.light=Xi===void 0?"default":En.length?"handover":"none",l.setLight(En,1/_i),w.handoverMs=Ri()-sn,w.beginMs=Ri()-He}function it(se){if(Y)return;let He=tn(Number.isFinite(se)?se:0,0,.1),Oe=1-Math.exp(-He*2.5);x.x+=((U?0:x.tx)-x.x)*Oe,x.y+=((U?0:x.ty)-x.y)*Oe,!(!F||I)&&(Ae||!p||!P(D+He)||(D+=He,D>=Bn&&(C=!0)))}function z(){if(Ve&&F)throw Ve;if(Y||!F||!p||Ie)return;V||ne();let se=ve();if(!P(se))return;f.allocated||Ue(),g0(y,se,U);for(let ni in Le)typeof y[ni]=="number"&&(y[ni]*=Le[ni]);let He=E.width/E.height,Oe=tn((600-K)/80,0,1)*tn((He-1.1)/.3,0,1);T.shortScreen=Oe,S0(T,se,y,He,H,x,U),v.position.set(T.position[0],T.position[1],T.position[2]),v.up.set(T.up[0],T.up[1],T.up[2]),v.lookAt(T.look[0],T.look[1],T.look[2]),v.fov=T.fov,v.aspect=He,v.near=T.near,v.far=T.far,v.updateProjectionMatrix(),v.updateMatrixWorld(!0);let at=Math.tan(T.fov*Math.PI/360);E.projScale=E.height*.5/at,E.cameraDistance=T.distance,E.focus=T.distance,E.aperture=.0016*oe(ze,4.2,se)*(1-oe(12.5,15,se)),E.nearFade=se<ze?T.distance*.04:Math.max(Math.min(.14,T.distance*.2),T.distance*1.1*oe(18.8,20.4,se)*(1-oe(23,24.5,se))),E.size=se<ze?.0016:hi(.0019,.0023,oe(8,12,se)),E.gain=J,E.galaxyGain=1,o.mesh.visible=Ce.matter&&(y.webFade>.001||y.heroFade>.001),o.update(y,E),l.update(y,E,T.position),c.update(y,E,U,T,He);let gt=Math.abs((T.position[0]-Kt[0])*Gi[0]+(T.position[1]-Kt[1])*Gi[1]+(T.position[2]-Kt[2])*Gi[2]);u.update(y,E,gt),h.update(y,E,v);let Nt=d.update(y,T,He,Ao(Math.max(0,se-y.shutter*.6)));if(re.set(0,0,0).project(v),R.centerX=re.x*.5+.5,R.centerY=re.y*.5+.5,R.lensR=.022*y.lens,R.liftRadius=He<.8?.42:.55,R.glare=0,y.sun>.001&&se>25&&(re.set(ti[0],ti[1],ti[2]).applyMatrix4(v.matrixWorldInverse),re.z<0)){re.applyMatrix4(v.projectionMatrix);let ni=Math.max(Math.abs(re.x),Math.abs(re.y));R.glareX=tn(re.x*.5+.5,-.35,1.35),R.glareY=tn(re.y*.5+.5,-.35,1.35),R.glare=y.sun*.07*oe(.9,1.3,ni)*(1-.75*oe(1.5,12,ni))}R.shockRadius=y.shockRadius,R.shockAmp=y.shockAmp,R.exposure=y.exposure,R.bloom=y.bloom,R.bloomAdd=y.bloomAdd,R.flash=y.flash,R.grain=y.grain,R.vignette=y.vignette,R.aberration=y.aberration,R.curveMix=y.curveMix,R.hueCurve=y.hueCurve;let At=Oe*oe(10.6,12.2,se)*(1-oe(20.4,22.4,se));R.scrim=y.scrim+.3*At,R.scrimLow=.27*At,R.scrimHeight=.42+.2*At,R.time=U?Math.floor(se):se,R.softBlur=.8+.4*oe(8.4,9.4,se),R.threadZoom=U?0:y.threadZoom,f.render(g,v,Nt.soft&&Ce.soft?d.material:null,Nt.threads&&Ce.soft?d.threads:null,R)}function pe(se,He,Oe){se>0&&(G=se),He>0&&(K=He),Oe>0&&(N=Oe),f?.allocated&&Ue()}function ie(){let se=p0(D);return{time:D,duration:Bn,started:F,paused:I,finished:C,phase:se,phaseKey:hr[se].key,phases:hr,impact:ze}}function me(se){I=se===void 0?!I:!!se}function Se(se){D=tn(Number(se)||0,0,Bn),F=!0,C=D>=Bn}function ae(){D=Bn,F=!0,C=!0,I=!1}function ke(){D=0,F=!0,C=!1,I=!1}function De(se,He){x.tx=tn(Number(se)||0,-1,1),x.ty=tn(Number(He)||0,-1,1)}function Et(se){U=!!se}function mt(){Ae&&(Ae=null,_&&clearTimeout(_),_=0,Ct()),de(),f?.release(),F=!1,I=!1}function nn(){Y||(mt(),Y=!0,Ae=null,m&&typeof cancelIdleCallback=="function"&&cancelIdleCallback(m),_&&clearTimeout(_),ue?.removeEventListener?.("webglcontextlost",$),ue?.removeEventListener?.("webglcontextrestored",j),o?.dispose(),l?.dispose(),c?.dispose(),d?.dispose(),u?.dispose(),h?.dispose(),f?.dispose())}return{begin:Ne,update:it,render:z,resize:pe,state:ie,pause:me,seek:Se,skipToEnd:ae,replay:ke,setPointer:De,setReducedMotion:Et,end:mt,dispose:nn,handover:Object.freeze({energies:!0,focus:!0,focusLight:!0}),ready:S,info:()=>({tier:n,particles:r,bloom:a,buffer:[E.width,E.height],built:p,build:{...w}}),layers:Ce,tuning:Le}}var Ri=()=>typeof performance<"u"?performance.now():Date.now();function eS(i){let e=i&&Array.isArray(i.glows)?i.glows:null;if(!e||!e.length)return null;let t=Number.isFinite(Number(i.dim))&&Number(i.dim)>=0?Number(i.dim):1,n=[];for(let s of e)!s||!(Number(s.scale)>0)||!(Number(s.intensity)>=0)||n.push({scale:Number(s.scale),intensity:Number(s.intensity)*t,core:s.core,halo:s.halo,rays:Number(s.rays)||0});return n.length?n:null}function tS(i,e){if(!i||typeof i.length!="number"||i.length<3)return null;let t=Number(i[0]),n=Number(i[1]),s=Number(i[2]);return!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(s)||Math.hypot(t-e[0],n-e[1],s-e[2])<1e-6?null:[t,n,s]}function fr(i){let e=i&&i._listeners;e&&e.dispose&&(e.dispose.length=0),i&&i.isRenderTarget&&fr(i.texture)}var wd=[{start:0,key:"collapse"},{start:3.6,key:"birth"},{start:9,key:"structure"},{start:19,key:"world"}],nS=.6,yh=class{constructor(e){this.engine=e,this.film=null,this.failed=!1,this.active=!1,this.stopping=null,this.navigated=!1,this.leaving=!1,this.fade=0,this.phaseIndex=-1,this.finishedSent=!1,this.overlay=null,this.tick=0}prewarm(){if(!(this.film||this.failed))try{let e=G0;if(typeof e!="function")throw new Error("ending-film: createEndingFilm missing");if(this.film=e({renderer:this.engine.renderer,quality:this.engine.filmQuality()}),!this.film||typeof this.film.render!="function")throw new Error("ending-film: invalid film")}catch(e){console.warn("Universe: ending film unavailable \u2014",e.message),this.film=null,this.failed=!0}}async start({origin:e}={}){let t=this.engine;if(!t.ok||t.contextLost)return!1;if(this.active&&!this.stopping)return!0;if(this.stopping&&await this.stopping,this.prewarm(),!this.film)return!1;try{let n=t.snapshotForFilm(),s=Array.isArray(e)&&e.length>=2?[W0(e[0]),W0(e[1])]:[.5,.62];this.film.setReducedMotion?.(t.reducedMotion()),this.film.resize?.(t.width,t.height,t.pixelRatio);let r=t.filmSizes;r===!0||r==="auto"&&(this.film.handover&&this.film.handover.energies)||(n.sizes=null),this.film.begin({...n,origin:s,width:t.width,height:t.height,pixelRatio:t.pixelRatio})}catch(n){return console.error("Universe: ending film failed to begin",n),this.safeEnd(),!1}return this.active=!0,this.fade=0,this.phaseIndex=-1,this.finishedSent=!1,t.onFilmActive(!0),await new Promise(n=>{this.firstFrame=n,t.request(),setTimeout(n,600)}),this.active}frame(e){let t=this.film;if(t){try{t.update(e),t.render(),this.fade>0&&this.drawFade(this.fade)}catch(n){console.error("Universe: ending film error",n),this.abort();return}if(this.firstFrame){let n=this.firstFrame;this.firstFrame=null,n()}this.emitEvents()}}emitEvents(){if((this.tick=(this.tick+1)%3)!==0&&this.phaseIndex>=0)return;let e=this.rawState();if(!e)return;let t=Sd(e);if(t!==this.phaseIndex){this.phaseIndex=t;let n=e.phases||wd;X0("universe:ending-phase",{index:t,key:n[t]?.key??String(t),time:e.time||0})}e.finished&&!this.finishedSent&&(this.finishedSent=!0,X0("universe:ending-finished",{time:e.time||0}))}drawFade(e){let t=this.engine.renderer;if(!this.overlay){let s=new Ln({color:0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),r=new $e(new ki(2,2),s);r.frustumCulled=!1;let a=new mi;a.add(r),this.overlay={scene:a,mat:s,camera:new Dn(-1,1,1,-1,0,1)}}this.overlay.mat.opacity=Math.min(1,e);let n=t.autoClear;t.autoClear=!1,t.setRenderTarget(null),t.render(this.overlay.scene,this.overlay.camera),t.autoClear=n}pause(e){this.active&&this.film?.pause?.(e===void 0?void 0:!!e),this.engine.request()}seek(e){this.active&&this.film?.seek?.(Number(e)||0),this.finishedSent=this.rawState()?.finished?this.finishedSent:!1,this.engine.request()}skipToEnd(){this.active&&this.film?.skipToEnd?.(),this.engine.request()}replay(){this.active&&(this.film?.replay?.(),this.finishedSent=!1,this.phaseIndex=-1),this.engine.request()}setPointer(e,t){this.active&&this.film?.setPointer?.(e,t)}setReducedMotion(e){this.film?.setReducedMotion?.(!!e)}resize(e,t,n){if(this.film)try{this.film.resize?.(e,t,n)}catch(s){console.error(s)}}stop(e){return this.active?(e&&e.restore===!1&&(this.leaving=!0),this.stopping?this.stopping:(this.navigated=!1,this.stopping=new Promise(t=>{let n=performance.now(),s=()=>{if(!this.active)return t();let r=(performance.now()-n)/1e3/nS;if(this.fade=Math.min(1,r*r*(3-2*r)),this.engine.request(),r>=1){this.finishStop(),t();return}setTimeout(s,16)};s()}).then(()=>{this.stopping=null}),this.stopping)):Promise.resolve()}noteNavigation(){this.stopping&&(this.navigated=!0)}finishStop(){this.fade=1,this.safeEnd(),this.active=!1,this.fade=0,this.engine.onFilmActive(!1,!0,this.returnMode())}abort(){this.safeEnd(),this.active=!1,this.fade=0,this.engine.onFilmActive(!1,!0,this.returnMode())}returnMode(){let e=this.navigated?"navigated":this.leaving?"leaving":"restore";return this.navigated=!1,this.leaving=!1,e}safeEnd(){try{this.film?.end?.()}catch(e){console.error(e)}}rawState(){if(!this.film)return null;try{return this.film.state?.()||null}catch{return null}}state(){let e=this.active?this.rawState():null,t=e&&e.phases||this.rawState()?.phases||wd;return e?{active:!0,time:e.time||0,duration:e.duration||31,started:!!e.started,paused:!!e.paused,finished:!!e.finished,phase:Sd(e),phaseKey:e.phaseKey||t[Sd(e)]?.key,phases:t,impact:e.impact??3.6}:{active:!1,time:0,duration:31,started:!1,paused:!1,finished:!1,phase:0,phases:t,impact:3.6}}dispose(){this.active&&this.safeEnd();try{this.film?.dispose?.()}catch{}this.film=null,this.overlay&&(this.overlay.mat.dispose(),this.overlay.scene.children[0].geometry.dispose())}};function Sd(i){if(typeof i.phase=="number")return i.phase;let e=i.phases||wd;if(typeof i.phase=="string"){let n=e.findIndex(s=>s.key===i.phase);if(n>=0)return n}let t=0;for(let n=1;n<e.length;n++)(i.time||0)>=e[n].start&&(t=n);return t}var W0=i=>Math.max(0,Math.min(1,Number(i)||0));function X0(i,e){try{document.dispatchEvent(new CustomEvent(i,{detail:e}))}catch{}}var sS=["cover","preview","chapter","ending-ready"],q0=["hero","explore","contents","chapter","reading"],rS=!0,Y0=.25,aS=i=>new Promise(e=>setTimeout(e,i)),oS=()=>new Promise(i=>typeof requestIdleCallback=="function"?requestIdleCallback(()=>i(),{timeout:60}):setTimeout(i,0)),Mh=class{constructor(e,t={}){yi(this,"onContextLost",e=>{e.preventDefault(),this.contextLost=!0,this.stopLoop(),K0("universe:contextlost",{})});yi(this,"onContextRestored",()=>{try{this.post=new So(this.renderer,this.scene,this.camera),this.attachOverlay(),this.field.markDirty(),this.gpuTimer.restore(),this.contextLost=!1,this.lastSize="",this.resize(),this.applyBackground(!0),this.noSample=Math.max(this.noSample,10),K0("universe:contextrestored",{}),this.schedulePrewarm(300),this.request()}catch(e){console.error("Universe: context restore failed",e)}});yi(this,"frame",e=>{if(this.raf=0,!this.canRender()){this.lastDraw=0;return}let t=!this.lastDraw,n=t?0:e-this.lastDraw;if((window.devicePixelRatio||1)!==this.seenRatio&&(this.seenRatio=window.devicePixelRatio||1,this.lastSize="",this.holding?this.pendingResize=!0:this.resize()),this.film.active){let p=t?.016666666666666666:Math.min(.1,n/1e3);this.lastDraw=e,this.film.frame(p),this.countFrame(e),this.noSample=10,this.request();return}let s=this.holdFrame;this.holdFrame=!1;let r=this.ambient()&&!this.field.morphing&&!this.rig.moving&&!this.input.dragging&&!this.fading&&!this.scatterMoving&&!this.armMoving,a=this.holding&&!this.input.dragging?1e3/30:0,o=Math.max(a,r&&(this.coarseMQ.matches||this.rig.veil.value>.6||this.adaptive.level>=3||this.scatter.value>=1)?1e3/30:0);if(!s&&o&&!t&&n<o-3){this.raf=requestAnimationFrame(this.frame);return}let l=t?1/60:Math.min(.05,n/1e3);t&&(this.noSample=Math.max(this.noSample,10)),this.lastDraw=e;let c=this.renderer.info,d=c.programs?c.programs.length:0,u=this.noSample>0||s,h=performance.now(),f=this.step(l);this.gpuTimer.begin(),this.render(l);let g=(c.programs?c.programs.length:0)!==d;this.gpuTimer.end(u||g),this.adaptive.sample(n,performance.now()-h,o>0,u||g),this.noSample>0&&this.noSample--,this.gpuTimer.poll(this.onGpuTime);let v=this.adaptive.decide(e,this.gpuTimer.available);if(v!==0&&(this.resize(),this.noSample=Math.max(this.noSample,10)),this.countFrame(e),this.nodes.flush(),s&&this.holding&&!this.scatterActive()){this.lastHoldFrame=performance.now(),this.lastDraw=0;return}f||v!==0?this.request():this.lastDraw=0});yi(this,"onGpuTime",e=>this.adaptive.gpuSample(e));this.canvas=e,this.options=t,this.ok=!1,this.contextLost=!1,this.visible=!0,this.paused=!1,this.interactive=!1,this.selected=0,this.sceneName="cover",this.sceneKey="",this.chapter=0,this.layout="hero",this.formationId="origin",this.pending=null,this.readingRaw=0,this.reading=Zt(0),this.time=0,this.clock=0,this.frames=0,this.fps=0,this.fpsFrames=0,this.fpsT0=0,this.raf=0,this.lastDraw=0,this.holding=!1,this.holdFrame=!1,this.holdFrameTimer=0,this.lastHoldFrame=0,this.pendingResize=!1,this.compiling=!1,this.noSample=0,this.width=1,this.height=1,this.pixelRatio=1,this.seenRatio=typeof window<"u"&&window.devicePixelRatio||1,this.lightFade={value:0,target:1,rate:.7},this.black={value:1,target:1,rate:1.4},this.frozen=!1,this.filmDof=!0,this.filmSizes="auto",this.projScratch=[0,0,0,0],this.blackHold=!1,this.awaitPage=!1,this.awaitTimer=0,this.revealUntil=0,this.focusScratch=[0,0,0],this.scatterTarget=0,this.scatter=Zt(0),this.scatterMoving=!1,this.armTarget=0,this.arm=Zt(0),this.armMoving=!1,this.dimEff=1,this.ctx={presence:0,time:0,gpuTime:0,dtLiving:0,clock:0,reading:0,focus:10,spread:0,expand:1,evolve:1,pixelScale:1e3,pixelRatio:1,selected:0,morph:1,solid:1,arm:0},this.reducedMQ=typeof matchMedia=="function"?matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1,addEventListener(){}},this.coarseMQ=typeof matchMedia=="function"?matchMedia("(pointer: coarse)"):{matches:!1}}init(){let e=this.canvas;this.worker=zc.create(this.options.script),this.renderer=new Ac({canvas:e,context:this.options.context||void 0,antialias:!1,alpha:!1,depth:!0,stencil:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:"high-performance"});let t=this.renderer;t.debug.checkShaderErrors=!rS,t.setClearColor(0,1),t.toneMapping=ai,t.toneMappingExposure=ji.exposure,t.outputColorSpace=jt,t.autoClear=!0;let n=t.getContext();try{n.clearColor(4/255,7/255,11/255,1),n.clear(n.COLOR_BUFFER_BIT),n.clearColor(0,0,0,0)}catch{}try{let r=n.getParameter(n.ALIASED_POINT_SIZE_RANGE);this.maxPointSize=r&&r[1]?r[1]:64}catch{this.maxPointSize=64}let s=nd(this.options.quality);this.autoQuality=!s,this.tierName=s||id(n),this.gpuTimer=new lh(n),this.adaptive=new ch(this.options.adaptive!==!1),this.adaptive.isNoop=(r,a)=>this.sameStep(Nn[r],Nn[a]),this.adaptive.pixelRatioOf=r=>this.pixelRatioFor(r,this.width,this.height),this.adaptive.cutsFill=(r,a)=>{let o=Nn[r],l=Nn[a];return o.draw!==l.draw||this.pixelRatioFor(o,this.width,this.height)!==this.pixelRatioFor(l,this.width,this.height)},this.scene=new mi,this.camera=new pi(lo,1,.05,500),this.rig=new sh(this.camera),this.nodes=new rh,this.film=new yh(this),this.post=new So(t,this.scene,this.camera),this.buildWorld(),this.spec=ar.origin,this.rig.setFormation(this.spec),this.input=new ah(this),this.listen(),this.resize(),this.rig.snap(),this.applyBackground(!0),this.ok=!0,this.compileThenRun(),this.schedulePrewarm(2600)}buildWorld(){let e=hs[this.tierName];this.cache=new kc(e.particles,this.worker),this.field=new Uc(e.particles,{renderer:this.renderer,gpuState:bp(this.renderer)}),this.stars=new Hc(e.stars),this.accents||(this.accents=new jc(this.scene),this.accents.createAll()),this.scene.add(this.stars.points,this.field.points,this.field.ghost),this.field.uniforms.uSizeScale.value=e.size,this.field.uniforms.uGain.value=e.gain,this.attachOverlay()}attachOverlay(){let e=this.post&&this.post.overlay;if(!e)return;let t=this.accents.get("ch7");t&&t.overlay.parent!==e&&e.add(t.overlay),this.field.overlay.parent!==e&&e.add(this.field.overlay)}disposeWorld(){this.scene.remove(this.stars.points,this.field.points,this.field.ghost),this.field.dispose(),this.stars.dispose(),this.cache.clear()}compileThenRun(){this.compiling=!0;let e=()=>{this.compiling=!1,this.lastDraw=0,this.request()},t=()=>this.warmPrograms().then(e,e);this.precompile().then(t,n=>{console.warn("Universe: shader precompile failed",n),e()})}warmPrograms(){let e=(this.renderer.info&&this.renderer.info.programs||[]).slice(),t=performance.now()+1500;return new Promise(n=>{let s=()=>{let r=performance.now();for(;e.length&&performance.now()-r<4;){let a=e.pop();try{a.getUniforms(),a.getAttributes()}catch{}}!e.length||performance.now()>t||!this.ok?n():typeof requestIdleCallback=="function"?requestIdleCallback(s,{timeout:50}):setTimeout(s,0)};s()})}async precompile(){let e=this.renderer;if(typeof e.compileAsync!="function")return;let t=this.post,n=this.scene,s=t.composer.readBuffer,r=this.field,a=[[r.points,this.camera,s,n],[this.stars.points,this.camera,s,n],[t.passScene(),this.camera,s],[t.finishScene(),this.camera,null],[this.accents.root,this.camera,s,n],[t.overlay,this.camera,s],r.bakeScene?[r.bakeScene,r.bakeCamera,r.states[0]]:null],o=[];for(let l of a){if(!l||!this.ok)continue;let[c,d,u,h]=l,f=e.getRenderTarget();try{e.setRenderTarget(u),o.push(e.compileAsync(c,d,h||null))}finally{e.setRenderTarget(f)}await oS()}await Promise.race([Promise.all(o),aS(6e3)])}listen(){let e=(this.abort=new AbortController).signal;this.resizeObserver=new ResizeObserver(()=>this.onResize()),this.resizeObserver.observe(this.canvas);let t=()=>{if(!(typeof matchMedia!="function"||e.aborted))try{matchMedia(`(resolution: ${window.devicePixelRatio||1}dppx)`).addEventListener("change",()=>{this.lastSize="",this.onResize(),t()},{once:!0,signal:e})}catch{}};t(),document.addEventListener("visibilitychange",()=>document.hidden?this.stopLoop():this.request(),{signal:e}),this.canvas.addEventListener("webglcontextlost",this.onContextLost,{signal:e}),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,{signal:e});let n=()=>{this.film.setReducedMotion(this.reducedMotion()),this.request()};this.reducedMQ.addEventListener&&this.reducedMQ.addEventListener("change",n,{signal:e})}onResize(){this.holding?this.pendingResize=!0:this.resize()}basePixelRatio(e,t){let n=hs[this.tierName],s=this.coarseMQ.matches,r=Math.min(window.devicePixelRatio||1,s?Math.min(1.5,n.dprCap):n.dprCap);return Math.min(r,Math.sqrt(n.pixelBudget/Math.max(1,e*t)))}pixelRatioFor(e,t,n){let s=this.basePixelRatio(t,n),r=Math.max(.5,Math.min(s,e.floor||0),s*e.dpr);return Math.round(r*100)/100}sameStep(e,t){let n=hs[this.tierName],s=n.bloom?e.bloom:0,r=n.bloom?t.bloom:0;return e.draw===t.draw&&s===r&&this.pixelRatioFor(e,this.width,this.height)===this.pixelRatioFor(t,this.width,this.height)}resize(){let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;if(!e||!t)return;let n=hs[this.tierName],s=this.adaptive.step,r=this.pixelRatioFor(s,e,t),a=`${e}x${t}@${r}|${s.bloom}|${s.draw}|${this.tierName}`;if(this.field.setDrawCount(this.field.count*s.draw),this.field.uniforms.uGain.value=n.gain/Math.sqrt(s.draw),this.post.setBloom(n.bloom&&s.bloom>0,n.bloomScale*s.bloom),this.post.uniforms.uGrain.value=n.grain?ji.grain:ji.grain*.5,a===this.lastSize)return;this.lastSize=a,(e!==this.width||t!==this.height||!this.frameHeight)&&(this.frameHeight=Math.min(t,Math.max(1,window.innerHeight||t))),this.width=e,this.height=t,this.pixelRatio=r,this.renderer.setPixelRatio(r),this.renderer.setSize(e,t,!1),this.post.setSize(e,t,r),this.rig.setViewport(e,t,this.frameHeight);let o=this.field.uniforms;o.uPixelScale.value=t*r/(2*Math.tan(so.degToRad(lo)/2)),o.uMinPx.value=Math.max(1.5,1.45*r),o.uMaxPx.value=Math.min(this.maxPointSize,46*r),this.stars.uniforms.uPixelRatio.value=r,this.ctx.pixelScale=o.uPixelScale.value,this.ctx.pixelRatio=r,this.updateScatterLook(),this.film.resize(e,t,r),this.noSample=Math.max(this.noSample,10),this.request()}updateScatterLook(){let e=this.field.uniforms,t=Ze(ot.density*this.width*this.height/1e6,ot.minStars,ot.maxStars);e.uScatterKeep.value=Math.min(1,t/Math.max(1,this.field.drawCount));let n=e.uScatterLook.value;n.y=ot.gain,n.z=ot.px*this.pixelRatio,n.w=ot.pxBright*this.pixelRatio,e.uScatterMotion.value.w=co(this.width,this.frameHeight||this.height)?1:ot.calm}setQuality(e){let t=nd(e);this.autoQuality=!t;let n=t||id(this.renderer.getContext());if(this.adaptive.reset(),n!==this.tierName){this.tierName=n,this.disposeWorld(),this.buildWorld(),this.prewarmJob=null;let s=this.pending;this.pending=null,this.formationId!=="origin"&&(this.field.setImmediate(this.cache.get(this.formationId)),this.updateToUniforms(!0)),s&&this.queueMorph(s.fid,s.kind,s.instant),this.compileThenRun(),this.schedulePrewarm(1500)}this.lastSize="",this.resize(),this.request()}qualityInfo(){let e=hs[this.tierName];return{tier:this.tierName,particles:this.field.count,pixelRatio:this.pixelRatio,bloom:e.bloom&&this.post.bloom.enabled}}filmQuality(){let e=this.qualityInfo();return{tier:e.tier,particles:e.particles,pixelRatio:e.pixelRatio,bloom:hs[e.tier].bloom}}reducedMotion(){return!!this.reducedMQ.matches}ambient(){return!this.paused&&!this.reducedMotion()&&!this.frozen}setScene(e,t={}){if(!sS.includes(e))return;let n=t&&typeof t=="object"?t:{},s=e==="preview"||e==="chapter"?Ze(Math.round(Number(n.chapter)||1),1,8):0,r=q0.includes(n.layout)?n.layout:this.defaultLayout(e),a=`${e}|${s}|${r}`;if(a===this.sceneKey)return;this.sceneKey=a;let o=this.sceneName;e==="chapter"&&(o!=="chapter"||s!==this.chapter)&&(this.readingRaw=0),this.sceneName=e,this.chapter=s;let l=qp(e,s),c=this.pending?this.pending.fid:this.formationId;if(l!==c){let d=this.formationId==="origin"?"intro":e==="ending-ready"?"seed":e==="cover"?"cover":e==="preview"?"preview":"chapter";this.queueMorph(l,d,n.instant===!0)}else o!==e&&this.updateToUniforms(!1);this.layout=r,this.rig.setLayout(r),e==="ending-ready"&&this.scheduleFilmPrewarm(),this.applyBackground(!1),this.requestHoldFrame(),this.schedulePrewarm(900),this.request()}defaultLayout(e){return e==="cover"?this.layout==="explore"&&this.sceneName==="cover"?"explore":"hero":e==="preview"?"contents":e==="chapter"?"chapter":this.layout==="reading"||this.layout==="chapter"?this.layout:"chapter"}queueMorph(e,t,n){if(e===this.formationId){this.pending=null,this.releaseBlack();return}let s=this.formationId==="origin",r=this.cache.peek(e);if(r){this.pending=null,this.morphTo(r,s?"intro":t,n);return}let a={fid:e,kind:s?"intro":t,instant:n};this.pending=a,this.cache.request(e,{origin:s}).then(o=>{this.pending!==a||!this.ok||(this.pending=null,this.morphTo(o,a.kind,a.instant),this.request())},o=>{console.error(`Universe: formation '${e}' failed`,o),this.pending===a&&this.releaseBlack()})}releaseBlack(){this.blackHold&&(this.blackHold=!1,this.black.target=1,this.request())}morphTo(e,t,n){if(!e||!e.spec)return;this.blackHold&&(n=!0,this.releaseBlack());let s=e.spec,r=e.id,a=this.reducedMotion(),o=Lc[t]||Lc.chapter,l=this.formationId==="origin";if(this.formationId=r,this.spec=s,this.rig.setFormation(s),this.noSample=Math.max(this.noSample,2),n){e.origin=null,this.field.setImmediate(e),this.updateToUniforms(!0),this.accents.setActive(r,0,!0),this.rig.snap(),this.applyBackground(!1);return}let c=a?Lc.dissolve.duration:o.duration,d={...o,duration:c,radius:s.radius*1.15};if(l){let u=e.origin||na(e,this.field.count);e.origin=null,this.field.setPair(u,e,d,a)}else this.field.morphTo(e,this.time,d,a);this.updateToUniforms(!0),this.accents.setActive(r,c,!1),this.morphKind=t,this.applyBackground(!1)}readingValue(){let e=this.spec;return e?this.sceneName==="chapter"?this.readingRaw:e.reading.preview:0}updateToUniforms(e){let t=this.readingValue();e&&(this.reading.value=t,this.reading.velocity=0),this.applyReading()}applyReading(){let e=this.spec;if(!e)return;let t=this.reading.value,n=e.reading,s=this.field.uniforms;s.uEvolve.value=Zr(n.evolve[0],n.evolve[1],t),s.uEvolveMode.value=n.mode,s.uToExpand.value=Zr(n.expand[0],n.expand[1],t),s.uToSpread.value=Zr(n.spread[0],n.spread[1],t),s.uToDim.value=Zr(n.dim[0],n.dim[1],t),this.ctx.reading=t,this.ctx.evolve=s.uEvolve.value,this.ctx.expand=s.uToExpand.value,this.ctx.spread=s.uToSpread.value}applyBackground(e){let t=Pc(this.spec?.tint||It.deep);if(this.bgTint=this.bgTint||[0,0,0],this.bgTarget=[t[0]*.018+.004,t[1]*.018+.012,t[2]*.018+.022],e)for(let n=0;n<3;n++)this.bgTint[n]=this.bgTarget[n]}setLayout(e){!q0.includes(e)||e===this.layout||(this.layout=e,this.rig.setLayout(e),this.requestHoldFrame(),this.request())}setReading(e){this.readingRaw=Ze(Number(e)||0,0,1),this.sceneName==="chapter"&&this.chapter===8&&this.readingRaw>.8&&this.scheduleFilmPrewarm(),this.request()}setVeil(e){this.rig.setVeil(Number(e)||0),this.requestHoldFrame(),this.request()}setVisible(e){let t=!!e;t!==this.visible&&(this.visible=t,t?this.request():this.stopLoop())}setInteractive(e){let t=!!e;this.interactive=t,this.input.setInteractive(t),t||this.rig.reset(),this.request()}pointerMoved(e,t){if(this.film.active){this.film.setPointer(e,t);return}this.rig.setPointer(e,t),this.parallaxEnabled()&&this.request()}parallaxEnabled(){return!this.paused&&!this.reducedMotion()&&!this.interactive}setPaused(e){this.paused=!!e,this.request()}setScatter(e){let t=Ze(Number(e)||0,0,1);t!==this.scatterTarget&&(this.scatterTarget=t,this.request())}scatterActive(){return this.scatter.value!==this.scatterTarget}setArmed(e){let t=e?1:0;t!==this.armTarget&&(this.armTarget=t,this.request())}select(e){this.selected=Ze(Math.round(Number(e)||0),0,8),this.request()}get endingActive(){return this.film.active}scheduleFilmPrewarm(){if(this.film.film||this.film.failed||this.filmPrewarmQueued)return;this.filmPrewarmQueued=!0;let e=s=>setTimeout(()=>t(n),s),t=s=>typeof requestIdleCallback=="function"?requestIdleCallback(s,{timeout:3e3}):setTimeout(s,200),n=s=>{if(!this.ok||this.film.film||this.film.failed){this.filmPrewarmQueued=!1;return}if(this.film.active){this.filmPrewarmQueued=!1;return}if(!(performance.now()-this.input.lastScroll>600&&!this.field.morphing&&!this.holding&&!this.input.dragging&&!document.hidden)||s&&!s.didTimeout&&s.timeRemaining()<6){e(300);return}this.filmPrewarmQueued=!1,this.film.prewarm(),this.noSample=Math.max(this.noSample,2)};e(400)}prewarmOrder(){let e=this.chapter||0,t=[],n=s=>{t.includes(s)||t.push(s)};(this.sceneName==="ending-ready"||e===8)&&n("seed"),e&&(n(`ch${e}`),e<8&&n(`ch${e+1}`),e>1&&n(`ch${e-1}`)),n("cover");for(let s=1;s<=8;s++)n(`ch${s}`);return n("seed"),t}schedulePrewarm(e=400){if(this.prewarmTimer)return;let t=s=>{if(this.prewarmTimer=0,!this.ok)return;if(this.input.dragging||this.holding||this.film.active||document.hidden||!this.cache.async&&this.field.morphing){this.schedulePrewarm(600);return}let a=this.cache,o=this.prewarmJob;if(o&&a.has(o.id)&&(o=null),!o){if(a.size>=a.limit-1)return;let u=this.prewarmOrder().find(h=>!a.has(h));if(!u)return;if(a.async){this.prewarmTimer=-1;let h=this.field;a.request(u).then(()=>{this.prewarmTimer=0,this.field===h&&this.schedulePrewarm(60)},()=>{this.prewarmTimer=0});return}o=a.job(u)}this.prewarmJob=o;let l=s&&!s.didTimeout?Math.max(1,Math.min(4,s.timeRemaining()-1)):3,c=performance.now(),d=o.step(l);performance.now()-c>6&&(this.noSample=Math.max(this.noSample,1)),d&&(this.prewarmJob=null),this.schedulePrewarm(d?80:0)},n=()=>{typeof requestIdleCallback=="function"?requestIdleCallback(t,{timeout:1e3}):setTimeout(t,16,null)};this.prewarmTimer=-1,e>0?setTimeout(n,e):n()}snapshotForFilm(){let e=this.field.drawCount,t=e+this.stars.count,n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t),a=new Float32Array(t);this.field.snapshot(this.time,n,s,e,r),this.stars.snapshot(n,s,e);let o=this.camera;o.updateMatrixWorld();let l=o.projectionMatrix.elements,c=l[8]/l[0],d=l[9]/l[5],u=o.matrixWorldInverse.elements,h=o.matrixWorld.elements,f=this.field.uniforms,g=Math.max(.001,f.uFocus.value),v=f.uDof.value,p=1/(rt.SIZE_MAX*f.uSizeScale.value),m=this.pixelRatio/Math.max(1e-6,f.uPixelScale.value),_=this.stars.look;for(let R=0;R<t;R++){let D=n[R*3],F=n[R*3+1],I=n[R*3+2],C=u[0]*D+u[4]*F+u[8]*I+u[12],U=u[1]*D+u[5]*F+u[9]*I+u[13],H=u[2]*D+u[6]*F+u[10]*I+u[14],G=Math.max(.05,-H);if(R<e){let K=this.filmDof?1+v*Math.abs(G-g)/g:1;a[R]=Math.min(4,r[R]*p/.02+.25)*K*K,r[R]*=K}else{let K=_[(R-e)*4+3]/255;r[R]=(1.35+3.4*K*K)*m*G,a[R]=1}C+=c*H,U+=d*H,n[R*3]=h[0]*C+h[4]*U+h[8]*H+h[12],n[R*3+1]=h[1]*C+h[5]*U+h[9]*H+h[13],n[R*3+2]=h[2]*C+h[6]*U+h[10]*H+h[14]}let A=this.dimEff*this.lightFade.value;for(let R=0;R<t*3;R++)s[R]*=A;let S=this.rig.target,w=this.rig.focusPoint(this.focusScratch),y=u[0]*w[0]+u[4]*w[1]+u[8]*w[2]+u[12],T=u[1]*w[0]+u[5]*w[1]+u[9]*w[2]+u[13],x=u[2]*w[0]+u[6]*w[1]+u[10]*w[2]+u[14];y+=c*x,T+=d*x;let E=[h[0]*y+h[4]*T+h[8]*x+h[12],h[1]*y+h[5]*T+h[9]*x+h[13],h[2]*y+h[6]*T+h[10]*x+h[14]];return{positions:n,colors:s,sizes:r,energies:a,count:t,camera:{position:[o.position.x,o.position.y,o.position.z],target:[S.x,S.y,S.z],fov:o.fov},focus:E,focusLight:this.focusLight(w,A)}}focusLight(e,t){let n=this.formationId==="seed"?"seed":this.formationId==="ch8"?"ch8":null,s=n?this.accents.visible(n):null;if(!s||typeof s.light!="function")return null;let r=this.rig.project(e[0],e[1],e[2],this.projScratch);return{glows:s.light(),anchor:[r[0],r[1]],pxPerUnit:this.rig.pxPerUnit(r[2]),dim:t,exposure:ji.exposure}}onFilmActive(e,t=!1,n="restore"){e?(this.input.setInteractive(!1),this.revealUntil=0,this.cancelAwaitPage()):t&&(this.renderer.setRenderTarget(null),this.renderer.toneMapping=ai,this.renderer.toneMappingExposure=ji.exposure,this.renderer.autoClear=!0,this.renderer.setClearColor(0,1),this.black.value=0,this.black.target=1,this.black.rate=1/.9,this.black.delay=0,n==="navigated"?this.settleBehindBlack():n==="leaving"?(this.black.target=0,this.awaitPage=!0,this.awaitTimer=setTimeout(()=>this.endAwaitPage(),2500)):(this.sceneKey="",this.setScene("ending-ready",{instant:!0,layout:this.layout==="reading"?"reading":"chapter"}),this.black.delay=Y0,this.revealUntil=performance.now()+(Y0+1.3)*1e3),this.interactive&&this.input.setInteractive(!0)),this.lastDraw=0,this.request()}pageScene(e,t){this.film.noteNavigation();let n=this.pending?this.pending.fid:this.formationId;this.setScene(e,t);let s=this.pending?this.pending.fid:this.formationId;this.afterPageCall(s!==n)}pageLayout(e){this.film.noteNavigation(),this.setLayout(e),this.afterPageCall(!1)}afterPageCall(e){if(this.awaitPage){this.endAwaitPage();return}e&&this.revealUntil&&performance.now()<this.revealUntil&&(this.revealUntil=0,this.black.value=0,this.black.target=1,this.black.delay=0,this.settleBehindBlack(),this.request())}endAwaitPage(){this.awaitPage&&(this.cancelAwaitPage(),this.black.target=1,this.settleBehindBlack(),this.request())}cancelAwaitPage(){this.awaitPage=!1,clearTimeout(this.awaitTimer),this.awaitTimer=0}settleBehindBlack(){this.pending?(this.blackHold=!0,this.black.target=0):(this.field.settle(),this.morphHold=!1),this.accents.settle(),this.reading.value=this.readingValue(),this.reading.velocity=0,this.applyReading();for(let e=0;e<3;e++)this.bgTint[e]=this.bgTarget[e];this.rig.snap()}canRender(){return this.ok&&this.visible&&!this.contextLost&&!this.compiling&&!document.hidden}request(){this.raf||!this.canRender()||(this.raf=requestAnimationFrame(this.frame))}stopLoop(){this.raf&&cancelAnimationFrame(this.raf),this.raf=0,this.lastDraw=0}onHold(e){this.holding=e,e?this.request():(clearTimeout(this.holdFrameTimer),this.holdFrameTimer=0,this.pendingResize&&(this.pendingResize=!1,this.resize()),this.request())}requestHoldFrame(){this.request()}countFrame(e){this.frames++,this.fpsFrames++,this.fpsT0||(this.fpsT0=e),e-this.fpsT0>=1e3&&(this.fps=Math.round(this.fpsFrames*1e3/(e-this.fpsT0)),this.fpsFrames=0,this.fpsT0=e)}step(e){let t=this.ambient(),n=t?e:0;this.time+=n,this.clock+=e;let s=this.reducedMotion(),r=ir(this.time),a=this.field.update(this.morphHold?0:e)||this.morphHold,o=$0(this.scatter,this.scatterTarget,s?mn.scatterReduced:mn.scatter,e);this.scatterMoving=this.scatter.value!==this.scatterTarget,$0(this.arm,this.armTarget,mn.arm,e),this.armMoving=this.arm.value!==this.armTarget,this.rig.calm=o;let l=this.rig.update(e,this.time,s,this.parallaxEnabled()),c=this.readingValue();ei(this.reading,c,s?.05:mn.reading,e);let d=Math.abs(this.reading.value-c)>1e-4;this.applyReading();let u=Z0(this.lightFade,e)|Z0(this.black,e);for(let y=0;y<3;y++){let T=this.bgTarget[y]-this.bgTint[y];Math.abs(T)>2e-4&&(this.bgTint[y]+=T*(1-Math.exp(-e*2.2)),u=1)}let h=this.ctx;h.time=this.time,h.gpuTime=r,h.dtLiving=n,h.clock=this.clock,h.focus=this.rig.distance,h.selected=this.selected,h.morph=this.field.uniforms.uMorph.value,h.solid=s?1-Ou(0,.6,o):1-Ou(.12,.7,o),h.arm=this.arm.value;let f=this.accents.update(e,h);this.fading=!!u||f;let g=this.field.uniforms;g.uTime.value=r,g.uFocus.value=this.rig.distance,g.uTwinkle.value=t?1:0,g.uScatter.value=o,g.uScatterTravel.value=s?0:1,g.uScatterFrame.value.copy(this.rig.refMatrix);let v=this.camera.projectionMatrix.elements;g.uScatterRay.value.set(v[0],v[5],v[8],v[9]),g.uScatterCenter.value.set(this.rig.tx.value,this.rig.ty.value,this.rig.tz.value,this.spec?this.spec.radius:3),g.uScatterLook.value.x=this.rig.refDistance,this.stars.uniforms.uTime.value=r,this.stars.uniforms.uTwinkle.value=t?1:0;let p=this.post.uniforms;p.uTime.value=r,this.dimEff=Zr(this.rig.dim.value,1,o),p.uDim.value=this.dimEff,p.uFade.value=this.lightFade.value,p.uBlack.value=this.black.value;let m=1-.85*o;p.uBgLift.value.set(this.bgTint[0]*m,this.bgTint[1]*m,this.bgTint[2]*m),this.post.bloom.strength=ji.bloomStrength*(1-(1-ot.bloom)*o),p.uGlowCenter.value.set(this.rig.cx.value,1-this.rig.cy.value*this.frameHeight/this.height);let _=co(this.width,this.frameHeight);p.uGlowRadius.value=_?.42:.55;let A=this.accents.visible("ch7");if(this.post.overlayPass.enabled=!!A&&A.horizon.visible,A){let y=this.rig.project(0,0,0,this.projScratch),T=this.pixelRatio,x=nr;x.uHole.value.set(y[0]*T,(this.height-y[1])*T,A.radius*this.rig.pxPerUnit(y[2])*T,.45*T+.3);let E=this.camera.matrixWorldInverse.elements;x.uHoleView.value.set(E[12],E[13],E[14],A.radius),x.uViewport.value.set(this.width*T,this.height*T),x.uHoleReach.value=A.reach;let R=xn.normal,D=E[0]*R[0]+E[4]*R[1]+E[8]*R[2],F=E[1]*R[0]+E[5]*R[1]+E[9]*R[2],I=E[2]*R[0]+E[6]*R[1]+E[10]*R[2];x.uHoleDisc.value.set(D,F,I,A.thickness);let C=this.camera.projectionMatrix.elements;x.uHoleRay.value.set(C[0],C[5],C[8],C[9]),x.uHoleBand.value.set(A.bandInner,A.bandOuter,1,0)}let S=this.accents.get("cover"),w=this.rig.focusPoint(this.focusScratch);return this.nodes.update(this.rig,S?S.positions:null,S?this.accents.presence("cover"):0,this.sceneName,this.selected,w,this.formationId!=="origin"),t||a||l||d||this.fading||this.input.dragging||this.scatterMoving||this.armMoving}render(e){this.post.render(e)}getState(){return{renderer:"webgl",scene:this.sceneName,chapter:this.chapter,layout:this.layout,quality:this.tierName,particles:this.field.drawCount,fps:this.fps,frames:this.frames,contextLost:this.contextLost,paused:this.paused,visible:this.visible,interactive:this.interactive,ending:this.film.state(),formation:this.formationId,pendingFormation:this.pending?this.pending.fid:null,morphing:this.field.morphing,morph:Math.round(this.field.uniforms.uMorph.value*1e3)/1e3,reducedMotion:this.reducedMotion(),selected:this.selected,pixelRatio:this.pixelRatio,adaptiveLevel:this.adaptive.level,adaptive:this.adaptive.info(),gpuTimer:this.gpuTimer.available,particlesTotal:this.field.count,bloom:this.post.bloom.enabled,veil:Math.round(this.rig.veil.value*1e3)/1e3,reading:Math.round(this.reading.value*1e3)/1e3,zoom:Math.round(this.rig.zoom.value*1e3)/1e3,scatter:Math.round(this.scatter.value*1e3)/1e3,scatterTarget:this.scatterTarget,scatterStars:Math.round(this.field.uniforms.uScatterKeep.value*this.field.drawCount),armed:this.armTarget===1,holding:this.holding,compiling:this.compiling,worker:this.cache.async,gpuBake:this.field.gpu,cached:[...this.cache.map.keys()],lastBuildMs:Math.round(this.cache.lastBuildMs),lastBakeMs:Math.round(this.field.lastBakeMs*10)/10,size:[this.width,this.height]}}settle(){if(this.pending){let e=this.pending;this.pending=null,this.morphTo(this.cache.get(e.fid),e.kind,e.instant)}this.morphHold=!1,this.field.settle(),this.accents.settle(),this.lightFade.value=this.lightFade.target,this.black.value=this.black.target,this.reading.value=this.readingValue(),this.applyReading();for(let e=0;e<3;e++)this.bgTint[e]=this.bgTarget[e];this.scatter.value=this.scatterTarget,this.scatter.velocity=0,this.arm.value=this.armTarget,this.arm.velocity=0,this.rig.snap(),this.request()}setMorphProgress(e,t=!0){this.field.uniforms.uMorph.value=Ze(e,0,1),this.field.morphing=e<1,this.morphHold=!!t&&e<1,this.request()}dispose(){this.stopLoop(),this.ok=!1,clearTimeout(this.holdFrameTimer),clearTimeout(this.awaitTimer),this.abort?.abort(),this.resizeObserver?.disconnect(),this.input?.dispose(),this.film?.dispose(),this.accents?.dispose(),this.field&&this.disposeWorld(),this.post?.dispose(),this.renderer?.dispose(),this.worker?.dispose()}};function $0(i,e,t,n){return i.value===e&&i.velocity===0?e:(ei(i,e,t,n),Math.abs(i.value-e)<2e-4&&Math.abs(i.velocity)<.005&&(i.value=e,i.velocity=0),i.value)}function Z0(i,e){if(i.value===i.target)return 0;if(i.delay>0)return i.delay-=e,1;let t=i.rate*e;return i.value=i.target>i.value?Math.min(i.target,i.value+t):Math.max(i.target,i.value-t),1}function K0(i,e){try{document.dispatchEvent(new CustomEvent(i,{detail:e}))}catch{}}var lS=typeof document<"u"&&document.currentScript?document.currentScript:null,cS="9.1.0",hS=["cover","preview","chapter","ending-ready"],uS=[{start:0,key:"collapse"},{start:3.6,key:"birth"},{start:9,key:"structure"},{start:19,key:"world"}],Tn=null,j0=!1,pr=null,bd=new Set,Dt={scene:null,layout:null,reading:0,veil:0,scatter:0,armed:!1,visible:!0,interactive:!1,paused:!1,pointer:null,selected:0,quality:null},Ed=()=>document.documentElement,Q0=()=>!!(Tn&&Tn.ok),J0=new Set;function Tt(i,e){if(!Q0())return e;try{return i(Tn)}catch(t){let n=String(t&&t.message);return J0.has(n)||(J0.add(n),console.error("Universe:",t)),e}}function dS(i,e){try{document.dispatchEvent(new CustomEvent(i,{detail:e}))}catch{}}function em(){return{active:!1,time:0,duration:31,started:!1,paused:!1,finished:!1,phase:0,phases:uS,impact:3.6}}function fS(){let i=Dt.scene;return{renderer:"none",scene:i?i.name:null,chapter:i&&i.opts&&i.opts.chapter&&Number(i.opts.chapter)||0,layout:Dt.layout||null,quality:Dt.quality||"auto",particles:0,fps:0,frames:0,contextLost:!1,paused:Dt.paused,visible:Dt.visible,interactive:Dt.interactive,scatter:0,ending:em()}}function pS(i){if(typeof WebGL2RenderingContext>"u")return null;try{return i.getContext("webgl2",{alpha:!1,depth:!0,stencil:!1,antialias:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1})}catch{return null}}function Td(i,e){j0=!0,e&&console.warn("Universe: unavailable \u2014",i,e);try{Tn?.dispose()}catch{}Tn=null;try{Ed().dataset.universe="none"}catch{}return!1}function mS(i){let e=Dt;e.quality&&i.setQuality(e.quality),i.setPaused(e.paused),i.setReading(e.reading),i.setVeil(e.veil),i.setScatter(e.scatter),i.setArmed(e.armed),i.select(e.selected),e.pointer&&i.pointerMoved(e.pointer[0],e.pointer[1]),e.scene&&i.setScene(e.scene.name,e.scene.opts),e.layout&&i.setLayout(e.layout),e.interactive&&i.setInteractive(!0),e.visible||i.setVisible(!1)}var tm={version:cS,get ready(){return Q0()},mount(i,e={}){if(Tn)return Tn.ok;if(j0)return!1;try{if(!i||typeof i.getContext!="function")return Td("no canvas");let t=pS(i);if(!t)return Td("WebGL2 unavailable");let n=e&&typeof e=="object"?e:{};return Tn=new Mh(i,{quality:Dt.quality||n.quality,adaptive:n.adaptive,chapters:n.chapters,context:t,script:n.worker===!1?null:lS}),Tn.init(),Tn.nodes.subs=bd,mS(Tn),Ed().dataset.universe="webgl",queueMicrotask(()=>dS("universe:ready",{renderer:"webgl"})),!0}catch(t){return Td("init failed",t)}},setScene(i,e){hS.includes(i)&&(Dt.scene={name:i,opts:e&&typeof e=="object"?{...e}:{}},Dt.layout=null,Tt(t=>t.pageScene(i,Dt.scene.opts)))},setLayout(i){Dt.layout=i,Tt(e=>e.pageLayout(i))},setReading(i){Dt.reading=Number(i)||0,Tt(e=>e.setReading(i))},setVeil(i){Dt.veil=Number(i)||0,Tt(e=>e.setVeil(i))},setScatter(i){let e=Number(i);Dt.scatter=Number.isFinite(e)?Math.min(1,Math.max(0,e)):0,Tt(t=>t.setScatter(Dt.scatter))},setVisible(i){Dt.visible=!!i,Tt(e=>e.setVisible(i))},setInteractive(i){Dt.interactive=!!i,Tt(e=>e.setInteractive(i))},setPointer(i,e){Dt.pointer=[Number(i)||0,Number(e)||0],Tt(t=>t.pointerMoved(Dt.pointer[0],Dt.pointer[1]))},setPaused(i){Dt.paused=!!i,Tt(e=>e.setPaused(i))},setQuality(i){Dt.quality=i==="auto"?null:i,Tt(e=>e.setQuality(i))},select(i){Dt.selected=Number(i)||0,Tt(e=>e.select(i))},reset(){Tt(i=>{i.rig.reset(),i.request()})},zoom(i){let e=Number(i);e>0&&Number.isFinite(e)&&Tt(t=>{t.rig.zoomBy(e),t.request()})},subscribe(i){return typeof i!="function"?()=>{}:(bd.add(i),Tt(e=>{e.nodes.dirty=!0,e.request()}),()=>{bd.delete(i)})},pick(i,e){return Tt(t=>t.nodes.pick(Number(i)||0,Number(e)||0),0)},getState(){return Tt(i=>i.getState(),null)||fS()},ending:{arm(i){Dt.armed=!!i,Tt(e=>e.setArmed(Dt.armed))},start(i={}){let e=Tt(t=>t.film.start(i&&typeof i=="object"?i:{}),null);return e?e.catch(()=>!1):Promise.resolve(!1)},pause(i){Tt(e=>e.film.pause(i))},seek(i){Tt(e=>e.film.seek(i))},skipToEnd(){Tt(i=>i.film.skipToEnd())},replay(){Tt(i=>i.film.replay())},stop(i){let e=Tt(t=>t.film.stop(i&&typeof i=="object"?i:void 0),null);return e?e.catch(()=>{}):Promise.resolve()},state(){return Tt(i=>i.film.state(),null)||em()}},_debug:{settle(){Tt(i=>i.settle())},setMorph(i,e=!0){Tt(t=>t.setMorphProgress(Number(i),e))},freeze(i=!0){Tt(e=>{e.frozen=!!i,e.request()})},setTime(i){Tt(e=>{e.time=Number(i)||0,e.request()})},loseContext(){return pr=Tt(i=>i.renderer.getContext().getExtension("WEBGL_lose_context"),null),pr&&pr.loseContext(),!!pr},restoreContext(){return pr&&pr.restoreContext(),!!pr},get engine(){return Tn}}};try{Zp()?$p(self):typeof window<"u"&&(window.Universe=tm,typeof WebGL2RenderingContext>"u"&&(Ed().dataset.universe="none"))}catch{}var tR=tm;})();
