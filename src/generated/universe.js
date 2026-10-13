/* Universe — three.js r186 (MIT). The MIT License */
(()=>{var Um=Object.defineProperty;var Om=(i,e,t)=>e in i?Um(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var bi=(i,e,t)=>Om(i,typeof e!="symbol"?e+"":e,t);var If=0,bu=1,Lf=2;var to=1,Ff=2,Qr=3,Bs=0,Gi=1,wi=2,Ti=0,ea=1,Xt=2,wu=3,Tu=4,Zn=5;var Wi=100,Df=101,Nf=102,Uf=103,Of=104,jl=200,Un=201,Bf=202,kf=203,Eu=204,io=205,zf=206,Hf=207,Vf=208,Gf=209,Wf=210,qf=211,Xf=212,Yf=213,$f=214,_l=0,yl=1,Ml=2,Wr=3,Sl=4,bl=5,wl=6,Tl=7,Au=0,Kf=1,Zf=2,li=0,no=1,so=2,ro=3,ao=4,oo=5,lo=6,co=7;var Ru=300,ks=301,rr=302,Ql=303,ec=304,ho=306,qr=1e3,Hi=1001,El=1002,ei=1003,Jf=1004;var uo=1005;var qt=1006,tc=1007;var zs=1008;var dn=1009,Cu=1010,Pu=1011,ta=1012,ic=1013,On=1014,Qi=1015,zt=1016,nc=1017,sc=1018,ia=1020,Iu=35902,Lu=35899,Fu=1021,Du=1022,ci=1023,$n=1026,Hs=1027,Nu=1028,rc=1029,Vs=1030,ac=1031;var oc=1033,fo=33776,po=33777,mo=33778,go=33779,lc=35840,cc=35841,hc=35842,uc=35843,dc=36196,fc=37492,pc=37496,mc=37488,gc=37489,vo=37490,vc=37491,xc=37808,_c=37809,yc=37810,Mc=37811,Sc=37812,bc=37813,wc=37814,Tc=37815,Ec=37816,Ac=37817,Rc=37818,Cc=37819,Pc=37820,Ic=37821,Lc=36492,Fc=36494,Dc=36495,Nc=36283,Uc=36284,xo=36285,Oc=36286;var Ua=2300,Al=2301,vl=2302,gu=2303,vu=2400,xu=2401,_u=2402;var jf=3200;var Uu=0,Qf=1,us="",ri="srgb",Oa="srgb-linear",Ba="linear",bt="srgb";var xl=7680;var ep=519,tp=512,ip=513,np=514,Bc=515,sp=516,rp=517,kc=518,ap=519,op=35044,_o=35048;var yo="300 es",Fn=2e3,ka=2001;function Bm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function km(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function za(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lp(){let i=za("canvas");return i.style.display="block",i}var rf={},Xr=null;function Ou(...i){let e="THREE."+i.shift();Xr?Xr("log",e,...i):console.log(e,...i)}function cp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xe(...i){i=cp(i);let e="THREE."+i.shift();if(Xr)Xr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ke(...i){i=cp(i);let e="THREE."+i.shift();if(Xr)Xr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function nr(...i){let e=i.join(" ");e in rf||(rf[e]=!0,Xe(...i))}function hp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var up={[_l]:yl,[Ml]:wl,[Sl]:Tl,[Wr]:bl,[yl]:_l,[wl]:Ml,[Tl]:Sl,[bl]:Wr},Kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Li=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],af=1234567,Da=Math.PI/180,Yr=180/Math.PI;function na(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Li[i&255]+Li[i>>8&255]+Li[i>>16&255]+Li[i>>24&255]+"-"+Li[e&255]+Li[e>>8&255]+"-"+Li[e>>16&15|64]+Li[e>>24&255]+"-"+Li[t&63|128]+Li[t>>8&255]+"-"+Li[t>>16&255]+Li[t>>24&255]+Li[n&255]+Li[n>>8&255]+Li[n>>16&255]+Li[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function Bu(i,e){return(i%e+e)%e}function zm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Hm(i,e,t){return i!==e?(t-i)/(e-i):0}function Na(i,e,t){return(1-t)*i+t*e}function Vm(i,e,t,n){return Na(i,e,1-Math.exp(-t*n))}function Gm(i,e=1){return e-Math.abs(Bu(i,e*2)-e)}function Wm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function qm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Xm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ym(i,e){return i+Math.random()*(e-i)}function $m(i){return i*(.5-Math.random())}function Km(i){i!==void 0&&(af=i);let e=af+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zm(i){return i*Da}function Jm(i){return i*Yr}function jm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Qm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function eg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function tg(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),h=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*f,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*u,o*c);break;default:Xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function zi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Mo={DEG2RAD:Da,RAD2DEG:Yr,generateUUID:na,clamp:ut,euclideanModulo:Bu,mapLinear:zm,inverseLerp:Hm,lerp:Na,damp:Vm,pingpong:Gm,smoothstep:Wm,smootherstep:qm,randInt:Xm,randFloat:Ym,randFloatSpread:$m,seededRandom:Km,degToRad:Zm,radToDeg:Jm,isPowerOfTwo:jm,ceilPowerOfTwo:Qm,floorPowerOfTwo:eg,setQuaternionFromProperEuler:tg,normalize:zi,denormalize:Vr},Gu=class Gu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gu.prototype.isVector2=!0;var ye=Gu,hn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(f!==v||l!==h||c!==d||u!==g){let p=l*h+c*d+u*g+f*v;p<0&&(h=-h,d=-d,g=-g,v=-v,p=-p);let m=1-o;if(p<.9995){let _=Math.acos(p),E=Math.sin(_);m=Math.sin(m*_)/E,o=Math.sin(o*_)/E,l=l*m+h*o,c=c*m+d*o,u=u*m+g*o,f=f*m+v*o}else{l=l*m+h*o,c=c*m+d*o,u=u*m+g*o,f=f*m+v*o;let _=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=_,c*=_,u*=_,f*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Wu=class Wu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(of.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(of.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kh.copy(this).projectOnVector(e),this.sub(Kh)}reflect(e){return this.sub(Kh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wu.prototype.isVector3=!0;var D=Wu,Kh=new D,of=new hn,qu=class qu{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],v=s[0],p=s[3],m=s[6],_=s[1],E=s[4],y=s[7],S=s[2],M=s[5],w=s[8];return r[0]=a*v+o*_+l*S,r[3]=a*p+o*E+l*M,r[6]=a*m+o*y+l*w,r[1]=c*v+u*_+f*S,r[4]=c*p+u*E+f*M,r[7]=c*m+u*y+f*w,r[2]=h*v+d*_+g*S,r[5]=h*p+d*E+g*M,r[8]=h*m+d*y+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,g=t*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=f*v,e[1]=(s*c-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return nr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zh.makeScale(e,t)),this}rotate(e){return nr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zh.makeRotation(-e)),this}translate(e,t){return nr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};qu.prototype.isMatrix3=!0;var tt=qu,Zh=new tt,lf=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cf=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ig(){let i={enabled:!0,workingColorSpace:Oa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===bt&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(s.r=Gr(s.r),s.g=Gr(s.g),s.b=Gr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===us?Ba:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return nr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return nr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Oa]:{primaries:e,whitePoint:n,transfer:Ba,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),i}var ct=ig();function ls(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Cr,Rl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cr===void 0&&(Cr=za("canvas")),Cr.width=e.width,Cr.height=e.height;let s=Cr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Cr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=za("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ls(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ls(t[n]/255)*255):t[n]=ls(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ng=0,$r=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=na(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Jh(s[a].image)):r.push(Jh(s[a]))}else r=Jh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Jh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var sg=0,jh=new D,Zi=class i extends Kn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Hi,s=Hi,r=qt,a=zs,o=ci,l=dn,c=i.DEFAULT_ANISOTROPY,u=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=na(),this.name="",this.source=new $r(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jh).x}get height(){return this.source.getSize(jh).y}get depth(){return this.source.getSize(jh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ru)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qr:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case El:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qr:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case El:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zi.DEFAULT_IMAGE=null;Zi.DEFAULT_MAPPING=Ru;Zi.DEFAULT_ANISOTROPY=1;var Xu=class Xu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,y=(d+1)/2,S=(m+1)/2,M=(u+h)/4,w=(f+v)/4,x=(g+p)/4;return E>y&&E>S?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=M/n,r=w/n):y>S?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=M/s,r=x/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=w/r,s=x/r),this.set(n,s,r,t),this}let _=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(f-v)/_,this.z=(h-u)/_,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xu.prototype.isVector4=!0;var We=Xu,Cl=class extends Kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Zi(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new $r(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ut=class extends Cl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ha=class extends Zi{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ei,this.minFilter=ei,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pl=class extends Zi{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ei,this.minFilter=ei,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Jl=class Jl{constructor(e,t,n,s,r,a,o,l,c,u,f,h,d,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,h,d,g,v,p)}set(e,t,n,s,r,a,o,l,c,u,f,h,d,g,v,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Pr.setFromMatrixColumn(e,0).length(),r=1/Pr.setFromMatrixColumn(e,1).length(),a=1/Pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=a*u,d=a*f,g=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h-v*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,d=a*f,g=o*u,v=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-v*f}else if(e.order==="XZY"){let h=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rg,e,ag)}lookAt(e,t,n){let s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Ts.crossVectors(n,ln),Ts.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Ts.crossVectors(n,ln)),Ts.normalize(),$o.crossVectors(ln,Ts),s[0]=Ts.x,s[4]=$o.x,s[8]=ln.x,s[1]=Ts.y,s[5]=$o.y,s[9]=ln.y,s[2]=Ts.z,s[6]=$o.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],v=n[6],p=n[10],m=n[14],_=n[3],E=n[7],y=n[11],S=n[15],M=s[0],w=s[4],x=s[8],A=s[12],R=s[1],P=s[5],F=s[9],N=s[13],C=s[2],L=s[6],B=s[10],V=s[14],X=s[3],U=s[7],k=s[11],W=s[15];return r[0]=a*M+o*R+l*C+c*X,r[4]=a*w+o*P+l*L+c*U,r[8]=a*x+o*F+l*B+c*k,r[12]=a*A+o*N+l*V+c*W,r[1]=u*M+f*R+h*C+d*X,r[5]=u*w+f*P+h*L+d*U,r[9]=u*x+f*F+h*B+d*k,r[13]=u*A+f*N+h*V+d*W,r[2]=g*M+v*R+p*C+m*X,r[6]=g*w+v*P+p*L+m*U,r[10]=g*x+v*F+p*B+m*k,r[14]=g*A+v*N+p*V+m*W,r[3]=_*M+E*R+y*C+S*X,r[7]=_*w+E*P+y*L+S*U,r[11]=_*x+E*F+y*B+S*k,r[15]=_*A+E*N+y*V+S*W,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],v=e[7],p=e[11],m=e[15],_=l*d-c*h,E=o*d-c*f,y=o*h-l*f,S=a*d-c*u,M=a*h-l*u,w=a*f-o*u;return t*(v*_-p*E+m*y)-n*(g*_-p*S+m*M)+s*(g*E-v*S+m*w)-r*(g*y-v*M+p*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],v=e[13],p=e[14],m=e[15],_=t*o-n*a,E=t*l-s*a,y=t*c-r*a,S=n*l-s*o,M=n*c-r*o,w=s*c-r*l,x=u*v-f*g,A=u*p-h*g,R=u*m-d*g,P=f*p-h*v,F=f*m-d*v,N=h*m-d*p,C=_*N-E*F+y*P+S*R-M*A+w*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/C;return e[0]=(o*N-l*F+c*P)*L,e[1]=(s*F-n*N-r*P)*L,e[2]=(v*w-p*M+m*S)*L,e[3]=(h*M-f*w-d*S)*L,e[4]=(l*R-a*N-c*A)*L,e[5]=(t*N-s*R+r*A)*L,e[6]=(p*y-g*w-m*E)*L,e[7]=(u*w-h*y+d*E)*L,e[8]=(a*F-o*R+c*x)*L,e[9]=(n*R-t*F-r*x)*L,e[10]=(g*M-v*y+m*_)*L,e[11]=(f*y-u*M-d*_)*L,e[12]=(o*A-a*P-l*x)*L,e[13]=(t*P-n*A+s*x)*L,e[14]=(v*E-g*S-p*_)*L,e[15]=(u*S-f*E+h*_)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,g=r*f,v=a*u,p=a*f,m=o*f,_=l*c,E=l*u,y=l*f,S=n.x,M=n.y,w=n.z;return s[0]=(1-(v+m))*S,s[1]=(d+y)*S,s[2]=(g-E)*S,s[3]=0,s[4]=(d-y)*M,s[5]=(1-(h+m))*M,s[6]=(p+_)*M,s[7]=0,s[8]=(g+E)*w,s[9]=(p-_)*w,s[10]=(1-(h+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Pr.set(s[0],s[1],s[2]).length(),o=Pr.set(s[4],s[5],s[6]).length(),l=Pr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Cn.copy(this);let c=1/a,u=1/o,f=1/l;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=f,Cn.elements[9]*=f,Cn.elements[10]*=f,t.setFromRotationMatrix(Cn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Fn,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Fn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ka)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Fn,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),d=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Fn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===ka)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Jl.prototype.isMatrix4=!0;var Ct=Jl,Pr=new D,Cn=new Ct,rg=new D(0,0,0),ag=new D(1,1,1),Ts=new D,$o=new D,ln=new D,hf=new Ct,uf=new hn,Is=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uf.setFromEuler(this),this.setFromQuaternion(uf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Is.DEFAULT_ORDER="XYZ";var Va=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},og=0,df=new D,Ir=new hn,is=new Ct,Ko=new D,Ca=new D,lg=new D,cg=new hn,ff=new D(1,0,0),pf=new D(0,1,0),mf=new D(0,0,1),gf={type:"added"},hg={type:"removed"},Lr={type:"childadded",child:null},Qh={type:"childremoved",child:null},Ji=class i extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Is,n=new hn,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new tt}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(ff,e)}rotateY(e){return this.rotateOnAxis(pf,e)}rotateZ(e){return this.rotateOnAxis(mf,e)}translateOnAxis(e,t){return df.copy(e).applyQuaternion(this.quaternion),this.position.add(df.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ff,e)}translateY(e){return this.translateOnAxis(pf,e)}translateZ(e){return this.translateOnAxis(mf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(is.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ko.copy(e):Ko.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?is.lookAt(Ca,Ko,this.up):is.lookAt(Ko,Ca,this.up),this.quaternion.setFromRotationMatrix(is),s&&(is.extractRotation(s.matrixWorld),Ir.setFromRotationMatrix(is),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gf),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hg),Qh.child=e,this.dispatchEvent(Qh),Qh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),is.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),is.multiply(e.parent.matrixWorld)),e.applyMatrix4(is),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gf),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,lg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,cg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ji.DEFAULT_UP=new D(0,1,0);Ji.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ji.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Et=class extends Ji{constructor(){super(),this.isGroup=!0,this.type="Group"}},ug={type:"move"},Kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ug)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Es={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function eu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=Bu(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=eu(a,r,e+1/3),this.g=eu(a,r,e),this.b=eu(a,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=ri){function n(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ri){let n=dp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return ct.workingToColorSpace(Fi.copy(this),e),Math.round(ut(Fi.r*255,0,255))*65536+Math.round(ut(Fi.g*255,0,255))*256+Math.round(ut(Fi.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Fi.copy(this),t);let n=Fi.r,s=Fi.g,r=Fi.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Fi.copy(this),t),e.r=Fi.r,e.g=Fi.g,e.b=Fi.b,e}getStyle(e=ri){ct.workingToColorSpace(Fi.copy(this),e);let t=Fi.r,n=Fi.g,s=Fi.b;return e!==ri?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Es),this.setHSL(Es.h+e,Es.s+t,Es.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Es),e.getHSL(Zo);let n=Na(Es.h,Zo.h,t),s=Na(Es.s,Zo.s,t),r=Na(Es.l,Zo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fi=new je;je.NAMES=dp;var vi=class extends Ji{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Is,this.environmentIntensity=1,this.environmentRotation=new Is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pn=new D,ns=new D,tu=new D,ss=new D,Fr=new D,Dr=new D,vf=new D,iu=new D,nu=new D,su=new D,ru=new We,au=new We,ou=new We,Ps=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Pn.subVectors(e,t),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Pn.subVectors(s,t),ns.subVectors(n,t),tu.subVectors(e,t);let a=Pn.dot(Pn),o=Pn.dot(ns),l=Pn.dot(tu),c=ns.dot(ns),u=ns.dot(tu),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ss)===null?!1:ss.x>=0&&ss.y>=0&&ss.x+ss.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ss)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ss.x),l.addScaledVector(a,ss.y),l.addScaledVector(o,ss.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ru.setScalar(0),au.setScalar(0),ou.setScalar(0),ru.fromBufferAttribute(e,t),au.fromBufferAttribute(e,n),ou.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ru,r.x),a.addScaledVector(au,r.y),a.addScaledVector(ou,r.z),a}static isFrontFacing(e,t,n,s){return Pn.subVectors(n,t),ns.subVectors(e,t),Pn.cross(ns).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ns.subVectors(this.a,this.b),Pn.cross(ns).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Fr.subVectors(s,n),Dr.subVectors(r,n),iu.subVectors(e,n);let l=Fr.dot(iu),c=Dr.dot(iu);if(l<=0&&c<=0)return t.copy(n);nu.subVectors(e,s);let u=Fr.dot(nu),f=Dr.dot(nu);if(u>=0&&f<=u)return t.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Fr,a);su.subVectors(e,r);let d=Fr.dot(su),g=Dr.dot(su);if(g>=0&&d<=g)return t.copy(r);let v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Dr,o);let p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return vf.subVectors(r,s),o=(f-u)/(f-u+(d-g)),t.copy(s).addScaledVector(vf,o);let m=1/(p+v+h);return a=v*m,o=h*m,t.copy(n).addScaledVector(Fr,a).addScaledVector(Dr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ls=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jo.copy(n.boundingBox)),Jo.applyMatrix4(e.matrixWorld),this.union(Jo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pa),jo.subVectors(this.max,Pa),Nr.subVectors(e.a,Pa),Ur.subVectors(e.b,Pa),Or.subVectors(e.c,Pa),As.subVectors(Ur,Nr),Rs.subVectors(Or,Ur),Qs.subVectors(Nr,Or);let t=[0,-As.z,As.y,0,-Rs.z,Rs.y,0,-Qs.z,Qs.y,As.z,0,-As.x,Rs.z,0,-Rs.x,Qs.z,0,-Qs.x,-As.y,As.x,0,-Rs.y,Rs.x,0,-Qs.y,Qs.x,0];return!lu(t,Nr,Ur,Or,jo)||(t=[1,0,0,0,1,0,0,0,1],!lu(t,Nr,Ur,Or,jo))?!1:(Qo.crossVectors(As,Rs),t=[Qo.x,Qo.y,Qo.z],lu(t,Nr,Ur,Or,jo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},rs=[new D,new D,new D,new D,new D,new D,new D,new D],In=new D,Jo=new Ls,Nr=new D,Ur=new D,Or=new D,As=new D,Rs=new D,Qs=new D,Pa=new D,jo=new D,Qo=new D,er=new D;function lu(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){er.fromArray(i,r);let o=s.x*Math.abs(er.x)+s.y*Math.abs(er.y)+s.z*Math.abs(er.z),l=e.dot(er),c=t.dot(er),u=n.dot(er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var os=dg();function dg(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function fg(i){Math.abs(i)>65504&&Xe("DataUtils.toHalfFloat(): Value out of range."),i=ut(i,-65504,65504),os.floatView[0]=i;let e=os.uint32View[0],t=e>>23&511;return os.baseTable[t]+((e&8388607)>>os.shiftTable[t])}function pg(i){let e=i>>10;return os.uint32View[0]=os.mantissaTable[os.offsetTable[e]+(i&1023)]+os.exponentTable[e],os.floatView[0]}var Ga=class{static toHalfFloat(e){return fg(e)}static fromHalfFloat(e){return pg(e)}},si=new D,el=new ye,mg=0,vt=class extends Kn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=op,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)el.fromBufferAttribute(this,t),el.applyMatrix3(e),this.setXY(t,el.x,el.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)si.fromBufferAttribute(this,t),si.applyMatrix3(e),this.setXYZ(t,si.x,si.y,si.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)si.fromBufferAttribute(this,t),si.applyMatrix4(e),this.setXYZ(t,si.x,si.y,si.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)si.fromBufferAttribute(this,t),si.applyNormalMatrix(e),this.setXYZ(t,si.x,si.y,si.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)si.fromBufferAttribute(this,t),si.transformDirection(e),this.setXYZ(t,si.x,si.y,si.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vr(t,this.array)),t}setX(e,t){return this.normalized&&(t=zi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vr(t,this.array)),t}setY(e,t){return this.normalized&&(t=zi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vr(t,this.array)),t}setW(e,t){return this.normalized&&(t=zi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zi(t,this.array),n=zi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=zi(t,this.array),n=zi(n,this.array),s=zi(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=zi(t,this.array),n=zi(n,this.array),s=zi(s,this.array),r=zi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Wa=class extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var qa=class extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var wt=class extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}},gg=new Ls,Ia=new D,cu=new D,ji=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):gg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ia.subVectors(e,this.center);let t=Ia.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ia,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ia.copy(e.center).add(cu)),this.expandByPoint(Ia.copy(e.center).sub(cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},vg=0,_n=new Ct,hu=new Ji,Br=new D,cn=new Ls,La=new Ls,mi=new D,xt=class i extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=na(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bm(e)?qa:Wa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return hu.lookAt(e),hu.updateMatrix(),this.applyMatrix4(hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new wt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ls);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(mi.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(mi),mi.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(mi)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];La.setFromBufferAttribute(o),this.morphTargetsRelative?(mi.addVectors(cn.min,La.min),cn.expandByPoint(mi),mi.addVectors(cn.max,La.max),cn.expandByPoint(mi)):(cn.expandByPoint(La.min),cn.expandByPoint(La.max))}cn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)mi.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(mi));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)mi.fromBufferAttribute(o,c),l&&(Br.fromBufferAttribute(e,c),mi.add(Br)),s=Math.max(s,n.distanceToSquared(mi))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new vt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new D,l[x]=new D;let c=new D,u=new D,f=new D,h=new ye,d=new ye,g=new ye,v=new D,p=new D;function m(x,A,R){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,R),h.fromBufferAttribute(r,x),d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,R),u.sub(c),f.sub(c),d.sub(h),g.sub(h);let P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(P),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(P),o[x].add(v),o[A].add(v),o[R].add(v),l[x].add(p),l[A].add(p),l[R].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let x=0,A=_.length;x<A;++x){let R=_[x],P=R.start,F=R.count;for(let N=P,C=P+F;N<C;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let E=new D,y=new D,S=new D,M=new D;function w(x){S.fromBufferAttribute(s,x),M.copy(S);let A=o[x];E.copy(A),E.sub(S.multiplyScalar(S.dot(A))).normalize(),y.crossVectors(M,A);let P=y.dot(l[x])<0?-1:1;a.setXYZW(x,E.x,E.y,E.z,P)}for(let x=0,A=_.length;x<A;++x){let R=_[x],P=R.start,F=R.count;for(let N=P,C=P+F;N<C;N+=3)w(e.getX(N+0)),w(e.getX(N+1)),w(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,f=new D;if(e)for(let h=0,d=e.count;h<d;h+=3){let g=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mi.fromBufferAttribute(e,t),mi.normalize(),e.setXYZ(t,mi.x,mi.y,mi.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),d=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let m=0;m<u;m++)h[g++]=c[d++]}return new vt(h,u,f)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var uu=new D,xg=new D,_g=new tt,Ln=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=uu.subVectors(n,t).cross(xg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(uu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||_g.getNormalMatrix(e),s=this.coplanarPoint(uu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},yg=0,cs=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=na(),this.name="",this.type="Material",this.blending=ea,this.side=Bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eu,this.blendDst=io,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ep,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xl,this.stencilZFail=xl,this.stencilZPass=xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ln().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ye().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var as=new D,du=new D,tl=new D,il=new D,Zr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,as)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=as.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(as.copy(this.origin).addScaledVector(this.direction,t),as.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){du.copy(e).add(t).multiplyScalar(.5),tl.copy(t).sub(e).normalize(),il.copy(this.origin).sub(du);let r=e.distanceTo(t)*.5,a=-this.direction.dot(tl),o=il.dot(this.direction),l=-il.dot(tl),c=il.lengthSq(),u=Math.abs(1-a*a),f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=r*u,f>=0)if(h>=-g)if(h<=g){let v=1/u;f*=v,h*=v,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(du).addScaledVector(tl,h),d}intersectSphere(e,t){if(e.radius<0)return null;as.subVectors(e.center,this.origin);let n=as.dot(this.direction),s=as.dot(as)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,as)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,d=e.z-a.z,g=t.x-a.x,v=t.y-a.y,p=t.z-a.z,m=n.x-a.x,_=n.y-a.y,E=n.z-a.z,y=Math.abs(l),S=Math.abs(c),M=Math.abs(u),w,x,A,R,P,F,N,C,L,B,V,X;if(y>=S&&y>=M?(A=l,F=f,L=g,X=m,l>=0?(w=c,x=u,R=h,P=d,N=v,C=p,B=_,V=E):(w=u,x=c,R=d,P=h,N=p,C=v,B=E,V=_)):S>=M?(A=c,F=h,L=v,X=_,c>=0?(w=u,x=l,R=d,P=f,N=p,C=g,B=E,V=m):(w=l,x=u,R=f,P=d,N=g,C=p,B=m,V=E)):(A=u,F=d,L=p,X=E,u>=0?(w=l,x=c,R=f,P=h,N=g,C=v,B=m,V=_):(w=c,x=l,R=h,P=f,N=v,C=g,B=_,V=m)),A===0)return null;let U=w/A,k=x/A,W=1/A,J=R-U*F,j=P-k*F,Ae=N-U*L,Re=C-k*L,Ie=B-U*X,Q=V-k*X,ie=Ie*Re-Q*Ae,ce=J*Q-j*Ie,Ee=Ae*j-Re*J;if(s){if(ie<0||ce<0||Ee<0)return null}else if((ie<0||ce<0||Ee<0)&&(ie>0||ce>0||Ee>0))return null;let Me=ie+ce+Ee;if(Me===0)return null;let Ze=W*(ie*F+ce*L+Ee*X);return(Me>0?Ze<0:Ze>0)?null:this.at(Ze/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Dn=class extends cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Is,this.combine=Au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},xf=new Ct,tr=new Zr,nl=new ji,_f=new D,sl=new D,rl=new D,al=new D,fu=new D,ol=new D,yf=new D,ll=new D,Je=class extends Ji{constructor(e=new xt,t=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ol.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(fu.fromBufferAttribute(f,e),a?ol.addScaledVector(fu,u):ol.addScaledVector(fu.sub(t),u))}t.add(ol)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nl.copy(n.boundingSphere),nl.applyMatrix4(r),tr.copy(e.ray).recast(e.near),!(nl.containsPoint(tr.origin)===!1&&(tr.intersectSphere(nl,_f)===null||tr.origin.distanceToSquared(_f)>(e.far-e.near)**2))&&(xf.copy(r).invert(),tr.copy(e.ray).applyMatrix4(xf),!(n.boundingBox!==null&&tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,tr)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let p=h[g],m=a[p.materialIndex],_=Math.max(p.start,d.start),E=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=_,S=E;y<S;y+=3){let M=o.getX(y),w=o.getX(y+1),x=o.getX(y+2);s=cl(this,m,e,n,c,u,f,M,w,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){let _=o.getX(p),E=o.getX(p+1),y=o.getX(p+2);s=cl(this,a,e,n,c,u,f,_,E,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let p=h[g],m=a[p.materialIndex],_=Math.max(p.start,d.start),E=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=_,S=E;y<S;y+=3){let M=y,w=y+1,x=y+2;s=cl(this,m,e,n,c,u,f,M,w,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){let _=p,E=p+1,y=p+2;s=cl(this,a,e,n,c,u,f,_,E,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Mg(i,e,t,n,s,r,a,o){let l;if(e.side===Gi?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Bs,o),l===null)return null;ll.copy(o),ll.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ll);return c<t.near||c>t.far?null:{distance:c,point:ll.clone(),object:i}}function cl(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,sl),i.getVertexPosition(l,rl),i.getVertexPosition(c,al);let u=Mg(i,e,t,n,sl,rl,al,yf);if(u){let f=new D;Ps.getBarycoord(yf,sl,rl,al,f),s&&(u.uv=Ps.getInterpolatedAttribute(s,o,l,c,f,new ye)),r&&(u.uv1=Ps.getInterpolatedAttribute(r,o,l,c,f,new ye)),a&&(u.normal=Ps.getInterpolatedAttribute(a,o,l,c,f,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new D,materialIndex:0};Ps.getNormal(sl,rl,al,h.normal),u.face=h,u.barycoord=f}return u}var Fs=class extends Zi{constructor(e=null,t=1,n=1,s,r,a,o,l,c=ei,u=ei,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xa=class extends vt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};var ir=new ji,Sg=new ye(.5,.5),hl=new D,Ya=class{constructor(e=new Ln,t=new Ln,n=new Ln,s=new Ln,r=new Ln,a=new Ln){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],v=r[9],p=r[10],m=r[11],_=r[12],E=r[13],y=r[14],S=r[15];if(s[0].setComponents(c-a,d-u,m-g,S-_).normalize(),s[1].setComponents(c+a,d+u,m+g,S+_).normalize(),s[2].setComponents(c+o,d+f,m+v,S+E).normalize(),s[3].setComponents(c-o,d-f,m-v,S-E).normalize(),n)s[4].setComponents(l,h,p,y).normalize(),s[5].setComponents(c-l,d-h,m-p,S-y).normalize();else if(s[4].setComponents(c-l,d-h,m-p,S-y).normalize(),t===Fn)s[5].setComponents(c+l,d+h,m+p,S+y).normalize();else if(t===ka)s[5].setComponents(l,h,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){ir.center.set(0,0,0);let t=Sg.distanceTo(e.center);return ir.radius=.7071067811865476+t,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(hl.x=s.normal.x>0?e.max.x:e.min.x,hl.y=s.normal.y>0?e.max.y:e.min.y,hl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(hl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Il=class extends cs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ll=new D,Fl=new D,Mf=new Ct,Fa=new Zr,ul=new ji,pu=new D,Sf=new D,Dl=class extends Ji{constructor(e=new xt,t=new Il){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ll.fromBufferAttribute(t,s-1),Fl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ll.distanceTo(Fl);e.setAttribute("lineDistance",new wt(n,1))}else Xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(s),ul.radius+=r,e.ray.intersectsSphere(ul)===!1)return;Mf.copy(s).invert(),Fa.copy(e.ray).applyMatrix4(Mf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=d,p=g-1;v<p;v+=c){let m=u.getX(v),_=u.getX(v+1),E=dl(this,e,Fa,l,m,_,v);E&&t.push(E)}if(this.isLineLoop){let v=u.getX(g-1),p=u.getX(d),m=dl(this,e,Fa,l,v,p,g-1);m&&t.push(m)}}else{let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=d,p=g-1;v<p;v+=c){let m=dl(this,e,Fa,l,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){let v=dl(this,e,Fa,l,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function dl(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Ll.fromBufferAttribute(o,s),Fl.fromBufferAttribute(o,r),t.distanceSqToSegment(Ll,Fl,pu,Sf)>n)return;pu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(pu);if(!(c<e.near||c>e.far))return{distance:c,point:Sf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var bf=new D,wf=new D,$a=class extends Dl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)bf.fromBufferAttribute(t,s),wf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bf.distanceTo(wf);e.setAttribute("lineDistance",new wt(n,1))}else Xe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Nl=class extends cs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Tf=new Ct,yu=new Zr,fl=new ji,pl=new D,Di=class extends Ji{constructor(e=new xt,t=new Nl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fl.copy(n.boundingSphere),fl.applyMatrix4(s),fl.radius+=r,e.ray.intersectsSphere(fl)===!1)return;Tf.copy(s).invert(),yu.copy(e.ray).applyMatrix4(Tf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=h,v=d;g<v;g++){let p=c.getX(g);pl.fromBufferAttribute(f,p),Ef(pl,p,l,s,e,t,this)}}else{let h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=h,v=d;g<v;g++)pl.fromBufferAttribute(f,g),Ef(pl,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ef(i,e,t,n,s,r,a){let o=yu.distanceSqToPoint(i);if(o<t){let l=new D;yu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ka=class extends Zi{constructor(e=[],t=ks,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Ds=class extends Zi{constructor(e,t,n=On,s,r,a,o=ei,l=ei,c,u=$n,f=1){if(u!==$n&&u!==Hs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $r(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ul=class extends Ds{constructor(e,t=On,n=ks,s,r,a=ei,o=ei,l,c=$n){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Za=class extends Zi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Jr=class i extends xt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(u,3)),this.setAttribute("uv",new wt(f,2));function g(v,p,m,_,E,y,S,M,w,x,A){let R=y/w,P=S/x,F=y/2,N=S/2,C=M/2,L=w+1,B=x+1,V=0,X=0,U=new D;for(let k=0;k<B;k++){let W=k*P-N;for(let J=0;J<L;J++){let j=J*R-F;U[v]=j*_,U[p]=W*E,U[m]=C,c.push(U.x,U.y,U.z),U[v]=0,U[p]=0,U[m]=M>0?1:-1,u.push(U.x,U.y,U.z),f.push(J/w),f.push(1-k/x),V+=1}}for(let k=0;k<x;k++)for(let W=0;W<w;W++){let J=h+W+L*k,j=h+W+L*(k+1),Ae=h+(W+1)+L*(k+1),Re=h+(W+1)+L*k;l.push(J,j,Re),l.push(j,Ae,Re),X+=6}o.addGroup(d,X,A),d+=X,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Vi=class i extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],v=[],p=[];for(let m=0;m<u;m++){let _=m*h-a;for(let E=0;E<c;E++){let y=E*f-r;g.push(y,-_,0),v.push(0,0,1),p.push(E/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let E=_+c*m,y=_+c*(m+1),S=_+1+c*(m+1),M=_+1+c*m;d.push(E,y,M),d.push(y,S,M)}this.setIndex(d),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(v,3)),this.setAttribute("uv",new wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ja=class i extends xt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],f=e,h=(t-e)/s,d=new D,g=new ye;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){let m=r+p/n*a;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}f+=h}for(let v=0;v<s;v++){let p=v*(n+1);for(let m=0;m<n;m++){let _=m+p,E=_,y=_+n+1,S=_+n+2,M=_+1;o.push(E,y,M),o.push(y,S,M)}}this.setIndex(o),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(c,3)),this.setAttribute("uv",new wt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var hs=class i extends xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new D,h=new D,d=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){let _=[],E=m/n,y=a+E*o,S=e*Math.cos(y),M=Math.sqrt(e*e-S*S),w=0;m===0&&a===0?w=.5/t:m===n&&l===Math.PI&&(w=-.5/t);for(let x=0;x<=t;x++){let A=x/t,R=s+A*r;f.x=-M*Math.cos(R),f.y=S,f.z=M*Math.sin(R),g.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),p.push(A+w,1-E),_.push(c++)}u.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let E=u[m][_+1],y=u[m][_],S=u[m+1][_],M=u[m+1][_+1];(m!==0||a>0)&&d.push(E,y,M),(m!==n-1||l<Math.PI)&&d.push(y,S,M)}this.setIndex(d),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(v,3)),this.setAttribute("uv",new wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function ar(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Af(s))s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Af(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ni(i){let e={};for(let t=0;t<i.length;t++){let n=ar(i[t]);for(let s in n)e[s]=n[s]}return e}function Af(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function bg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ku(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var ds={clone:ar,merge:Ni},wg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,De=class extends cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wg,this.fragmentShader=Tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=bg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new je().setHex(s.value);break;case"v2":this.uniforms[n].value=new ye().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new We().fromArray(s.value);break;case"m3":this.uniforms[n].value=new tt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ct().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},jr=class extends De{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ol=class extends cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bl=class extends cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function kr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function mu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ns=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];i:{e:{let a;t:{n:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break n;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break i}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},kl=class extends Ns{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vu,endingEnd:vu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case xu:r=e,o=2*t-n;break;case _u:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xu:a=e,l=2*n-t;break;case _u:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),v=g*g,p=v*g,m=-h*p+2*h*v-h*g,_=(1+h)*p+(-1.5-2*h)*v+(-.5+h)*g+1,E=(-1-d)*p+(1.5+d)*v+.5*g,y=d*p-d*v;for(let S=0;S!==o;++S)r[S]=m*a[u+S]+_*a[c+S]+E*a[l+S]+y*a[f+S];return r}},zl=class extends Ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},Hl=class extends Ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vl=class extends Ns{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(n-t)/(s-t),v=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*v+a[l+p]*g;return r}let h=o*2,d=e-1;for(let g=0;g!==o;++g){let v=a[c+g],p=a[l+g],m=d*h+g*2,_=f[m],E=f[m+1],y=e*h+g*2,S=u[y],M=u[y+1],w=Ag(n,t,_,S,s);r[g]=fp(w,v,E,M,p)}return r}};function fp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Eg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Ag(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=fp(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Eg(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var un=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kr(t,this.TimeBufferType),this.values=kr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:kr(e.times,Array),values:kr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),mu(e.settings)&&(n.settings={inTangents:kr(e.settings.inTangents,Array),outTangents:kr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Vl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ua:t=this.InterpolantFactoryMethodDiscrete;break;case Al:t=this.InterpolantFactoryMethodLinear;break;case vl:t=this.InterpolantFactoryMethodSmooth;break;case gu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ua;case this.InterpolantFactoryMethodLinear:return Al;case this.InterpolantFactoryMethodSmooth:return vl;case this.InterpolantFactoryMethodBezier:return gu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;mu(this.settings)&&(Rf(this.settings.inTangents,e),Rf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ke("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ke("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&km(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ke("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===vl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){let v=t[f+g];if(v!==t[h+g]||v!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,h=a*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,mu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Rf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}un.prototype.ValueTypeName="";un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Al;var Us=class extends un{constructor(e,t,n){super(e,t,n)}};Us.prototype.ValueTypeName="bool";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=Ua;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;var Gl=class extends un{constructor(e,t,n,s){super(e,t,n,s)}};Gl.prototype.ValueTypeName="color";var Wl=class extends un{constructor(e,t,n,s){super(e,t,n,s)}};Wl.prototype.ValueTypeName="number";var ql=class extends Ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)hn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ja=class extends un{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ql(this.times,this.values,this.getValueSize(),e)}};ja.prototype.ValueTypeName="quaternion";ja.prototype.InterpolantFactoryMethodSmooth=void 0;var Os=class extends un{constructor(e,t,n){super(e,t,n)}};Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=Ua;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var Xl=class extends un{constructor(e,t,n,s){super(e,t,n,s)}};Xl.prototype.ValueTypeName="vector";var Yl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pp=new Yl,$l=class{constructor(e){this.manager=e!==void 0?e:pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};$l.DEFAULT_MATERIAL_NAME="__DEFAULT";var ml=new D,gl=new hn,Yn=new D,sr=class extends Ji{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ml,gl,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ml,gl,Yn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ml,gl,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ml,gl,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Cs=new D,Cf=new ye,Pf=new ye,gi=class extends sr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z),Cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z)}getViewSize(e,t){return this.getViewBounds(e,Cf,Pf),t.subVectors(Pf,Cf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Da*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Nn=class extends sr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Qa=class extends xt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var zr=-90,Hr=1,Kl=class extends Ji{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gi(zr,Hr,e,t);s.layers=this.layers,this.add(s);let r=new gi(zr,Hr,e,t);r.layers=this.layers,this.add(r);let a=new gi(zr,Hr,e,t);a.layers=this.layers,this.add(a);let o=new gi(zr,Hr,e,t);o.layers=this.layers,this.add(o);let l=new gi(zr,Hr,e,t);l.layers=this.layers,this.add(l);let c=new gi(zr,Hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Zl=class extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},eo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Rg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Rg(){this._document.hidden===!1&&this.reset()}var zu="\\[\\]\\.:\\/",Cg=new RegExp("["+zu+"]","g"),Hu="[^"+zu+"]",Pg="[^"+zu.replace("\\.","")+"]",Ig=/((?:WC+[\/:])*)/.source.replace("WC",Hu),Lg=/(WCOD+)?/.source.replace("WCOD",Pg),Fg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hu),Dg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hu),Ng=new RegExp("^"+Ig+Lg+Fg+Dg+"$"),Ug=["material","materials","bones","map"],Mu=class{constructor(e,t,n){let s=n||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},kt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cg,"")}static parseTrackName(e){let t=Ng.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ug.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};kt.Composite=Mu;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cb=new Float32Array(1);var Yu=class Yu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Yu.prototype.isMatrix2=!0;var Su=Yu;function Vu(i,e,t,n){let s=Og(n);switch(t){case Fu:return i*e;case Nu:return i*e/s.components*s.byteLength;case rc:return i*e/s.components*s.byteLength;case Vs:return i*e*2/s.components*s.byteLength;case ac:return i*e*2/s.components*s.byteLength;case Du:return i*e*3/s.components*s.byteLength;case ci:return i*e*4/s.components*s.byteLength;case oc:return i*e*4/s.components*s.byteLength;case fo:case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mo:case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cc:case uc:return Math.max(i,16)*Math.max(e,8)/4;case lc:case hc:return Math.max(i,8)*Math.max(e,8)/2;case dc:case fc:case mc:case gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pc:case vo:case vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case yc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case bc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Pc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Lc:case Fc:case Dc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Nc:case Uc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xo:case Oc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Og(i){switch(i){case dn:case Cu:return{byteLength:1,components:1};case ta:case Pu:case zt:return{byteLength:2,components:1};case nc:case sc:return{byteLength:2,components:4};case On:case ic:case Qi:return{byteLength:4,components:1};case Iu:case Lu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Up(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function kg(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){let g=f[h],v=f[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){let v=f[d];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var zg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hg=`#ifdef USE_ALPHAHASH
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
#endif`,Vg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xg=`#ifdef USE_AOMAP
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
#endif`,Yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$g=`#ifdef USE_BATCHING
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
#endif`,Kg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qg=`#ifdef USE_IRIDESCENCE
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
#endif`,ev=`#ifdef USE_BUMPMAP
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
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ov=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cv=`#define PI 3.141592653589793
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
} // validated`,hv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uv=`vec3 transformedNormal = objectNormal;
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
#endif`,dv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gv="gl_FragColor = linearToOutputTexel( gl_FragColor );",vv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xv=`#ifdef USE_ENVMAP
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
#endif`,_v=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yv=`#ifdef USE_ENVMAP
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
#endif`,Mv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sv=`#ifdef USE_ENVMAP
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
#endif`,bv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ev=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Av=`#ifdef USE_GRADIENTMAP
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
}`,Rv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Lv=`#ifdef USE_ENVMAP
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
#endif`,Fv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ov=`PhysicalMaterial material;
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
#endif`,Bv=`uniform sampler2D dfgLUT;
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
}`,kv=`
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
#endif`,zv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Gv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$v=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zv=`#if defined( USE_POINTS_UV )
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
#endif`,Jv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`#ifdef USE_MORPHTARGETS
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
#endif`,nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cx=`#ifdef USE_NORMALMAP
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
#endif`,hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,px=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_x=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tx=`float getShadowMask() {
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
}`,Ex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ax=`#ifdef USE_SKINNING
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
#endif`,Rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cx=`#ifdef USE_SKINNING
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
#endif`,Px=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dx=`#ifdef USE_TRANSMISSION
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
#endif`,Nx=`#ifdef USE_TRANSMISSION
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
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hx=`uniform sampler2D t2D;
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
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`#include <common>
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
}`,Yx=`#if DEPTH_PACKING == 3200
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
}`,$x=`#define DISTANCE
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
}`,Kx=`#define DISTANCE
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
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`uniform float scale;
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
}`,Qx=`uniform vec3 diffuse;
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
}`,e_=`#include <common>
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
}`,t_=`uniform vec3 diffuse;
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
}`,i_=`#define LAMBERT
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
}`,n_=`#define LAMBERT
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
}`,s_=`#define MATCAP
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
}`,r_=`#define MATCAP
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
}`,a_=`#define NORMAL
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
}`,o_=`#define NORMAL
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
}`,l_=`#define PHONG
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
}`,c_=`#define PHONG
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
}`,h_=`#define STANDARD
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
}`,u_=`#define STANDARD
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
}`,d_=`#define TOON
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
}`,f_=`#define TOON
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
}`,p_=`uniform float size;
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
}`,m_=`uniform vec3 diffuse;
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
}`,g_=`#include <common>
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
}`,v_=`uniform vec3 color;
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
}`,x_=`uniform float rotation;
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
}`,__=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:zg,alphahash_pars_fragment:Hg,alphamap_fragment:Vg,alphamap_pars_fragment:Gg,alphatest_fragment:Wg,alphatest_pars_fragment:qg,aomap_fragment:Xg,aomap_pars_fragment:Yg,batching_pars_vertex:$g,batching_vertex:Kg,begin_vertex:Zg,beginnormal_vertex:Jg,bsdfs:jg,iridescence_fragment:Qg,bumpmap_pars_fragment:ev,clipping_planes_fragment:tv,clipping_planes_pars_fragment:iv,clipping_planes_pars_vertex:nv,clipping_planes_vertex:sv,color_fragment:rv,color_pars_fragment:av,color_pars_vertex:ov,color_vertex:lv,common:cv,cube_uv_reflection_fragment:hv,defaultnormal_vertex:uv,displacementmap_pars_vertex:dv,displacementmap_vertex:fv,emissivemap_fragment:pv,emissivemap_pars_fragment:mv,colorspace_fragment:gv,colorspace_pars_fragment:vv,envmap_fragment:xv,envmap_common_pars_fragment:_v,envmap_pars_fragment:yv,envmap_pars_vertex:Mv,envmap_physical_pars_fragment:Lv,envmap_vertex:Sv,fog_vertex:bv,fog_pars_vertex:wv,fog_fragment:Tv,fog_pars_fragment:Ev,gradientmap_pars_fragment:Av,lightmap_pars_fragment:Rv,lights_lambert_fragment:Cv,lights_lambert_pars_fragment:Pv,lights_pars_begin:Iv,lights_toon_fragment:Fv,lights_toon_pars_fragment:Dv,lights_phong_fragment:Nv,lights_phong_pars_fragment:Uv,lights_physical_fragment:Ov,lights_physical_pars_fragment:Bv,lights_fragment_begin:kv,lights_fragment_maps:zv,lights_fragment_end:Hv,lightprobes_pars_fragment:Vv,logdepthbuf_fragment:Gv,logdepthbuf_pars_fragment:Wv,logdepthbuf_pars_vertex:qv,logdepthbuf_vertex:Xv,map_fragment:Yv,map_pars_fragment:$v,map_particle_fragment:Kv,map_particle_pars_fragment:Zv,metalnessmap_fragment:Jv,metalnessmap_pars_fragment:jv,morphinstance_vertex:Qv,morphcolor_vertex:ex,morphnormal_vertex:tx,morphtarget_pars_vertex:ix,morphtarget_vertex:nx,normal_fragment_begin:sx,normal_fragment_maps:rx,normal_pars_fragment:ax,normal_pars_vertex:ox,normal_vertex:lx,normalmap_pars_fragment:cx,clearcoat_normal_fragment_begin:hx,clearcoat_normal_fragment_maps:ux,clearcoat_pars_fragment:dx,iridescence_pars_fragment:fx,opaque_fragment:px,packing:mx,premultiplied_alpha_fragment:gx,project_vertex:vx,dithering_fragment:xx,dithering_pars_fragment:_x,roughnessmap_fragment:yx,roughnessmap_pars_fragment:Mx,shadowmap_pars_fragment:Sx,shadowmap_pars_vertex:bx,shadowmap_vertex:wx,shadowmask_pars_fragment:Tx,skinbase_vertex:Ex,skinning_pars_vertex:Ax,skinning_vertex:Rx,skinnormal_vertex:Cx,specularmap_fragment:Px,specularmap_pars_fragment:Ix,tonemapping_fragment:Lx,tonemapping_pars_fragment:Fx,transmission_fragment:Dx,transmission_pars_fragment:Nx,uv_pars_fragment:Ux,uv_pars_vertex:Ox,uv_vertex:Bx,worldpos_vertex:kx,background_vert:zx,background_frag:Hx,backgroundCube_vert:Vx,backgroundCube_frag:Gx,cube_vert:Wx,cube_frag:qx,depth_vert:Xx,depth_frag:Yx,distance_vert:$x,distance_frag:Kx,equirect_vert:Zx,equirect_frag:Jx,linedashed_vert:jx,linedashed_frag:Qx,meshbasic_vert:e_,meshbasic_frag:t_,meshlambert_vert:i_,meshlambert_frag:n_,meshmatcap_vert:s_,meshmatcap_frag:r_,meshnormal_vert:a_,meshnormal_frag:o_,meshphong_vert:l_,meshphong_frag:c_,meshphysical_vert:h_,meshphysical_frag:u_,meshtoon_vert:d_,meshtoon_frag:f_,points_vert:p_,points_frag:m_,shadow_vert:g_,shadow_frag:v_,sprite_vert:x_,sprite_frag:__},xe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},jn={basic:{uniforms:Ni([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Ni([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Ni([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Ni([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Ni([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new je(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Ni([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Ni([xe.points,xe.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Ni([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Ni([xe.common,xe.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Ni([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Ni([xe.sprite,xe.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:Ni([xe.common,xe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:Ni([xe.lights,xe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};jn.physical={uniforms:Ni([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var zc={r:0,b:0,g:0},y_=new Ct,Op=new tt;Op.set(-1,0,0,0,1,0,0,0,1);function M_(i,e,t,n,s,r){let a=new je(0),o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(_){let E=_.isScene===!0?_.background:null;if(E&&E.isTexture){let y=_.backgroundBlurriness>0;E=e.get(E,y)}return E}function g(_){let E=!1,y=d(_);y===null?p(a,o):y&&y.isColor&&(p(y,1),E=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(_,E){let y=d(E);y&&(y.isCubeTexture||y.mapping===ho)?(c===void 0&&(c=new Je(new Jr(1,1,1),new De({name:"BackgroundCubeMaterial",uniforms:ar(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(y_.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Op),c.material.toneMapped=ct.getTransfer(y.colorSpace)!==bt,(u!==y||f!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Je(new Vi(2,2),new De({name:"BackgroundMaterial",uniforms:ar(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ct.getTransfer(y.colorSpace)!==bt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,E){_.getRGB(zc,ku(i)),t.buffers.color.setClear(zc.r,zc.g,zc.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,E=1){a.set(_),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,p(a,o)},render:g,addToRenderList:v,dispose:m}}function S_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(P,F,N,C,L){let B=!1,V=f(P,C,N,F);r!==V&&(r=V,c(r.object)),B=d(P,C,N,L),B&&g(P,C,N,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,y(P,F,N,C),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function f(P,F,N,C){let L=C.wireframe===!0,B=n[F.id];B===void 0&&(B={},n[F.id]=B);let V=P.isInstancedMesh===!0?P.id:0,X=B[V];X===void 0&&(X={},B[V]=X);let U=X[N.id];U===void 0&&(U={},X[N.id]=U);let k=U[L];return k===void 0&&(k=h(l()),U[L]=k),k}function h(P){let F=[],N=[],C=[];for(let L=0;L<t;L++)F[L]=0,N[L]=0,C[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:N,attributeDivisors:C,object:P,attributes:{},index:null}}function d(P,F,N,C){let L=r.attributes,B=F.attributes,V=0,X=N.getAttributes();for(let U in X)if(X[U].location>=0){let W=L[U],J=B[U];if(J===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),W===void 0||W.attribute!==J||J&&W.data!==J.data)return!0;V++}return r.attributesNum!==V||r.index!==C}function g(P,F,N,C){let L={},B=F.attributes,V=0,X=N.getAttributes();for(let U in X)if(X[U].location>=0){let W=B[U];W===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(W=P.instanceColor));let J={};J.attribute=W,W&&W.data&&(J.data=W.data),L[U]=J,V++}r.attributes=L,r.attributesNum=V,r.index=C}function v(){let P=r.newAttributes;for(let F=0,N=P.length;F<N;F++)P[F]=0}function p(P){m(P,0)}function m(P,F){let N=r.newAttributes,C=r.enabledAttributes,L=r.attributeDivisors;N[P]=1,C[P]===0&&(i.enableVertexAttribArray(P),C[P]=1),L[P]!==F&&(i.vertexAttribDivisor(P,F),L[P]=F)}function _(){let P=r.newAttributes,F=r.enabledAttributes;for(let N=0,C=F.length;N<C;N++)F[N]!==P[N]&&(i.disableVertexAttribArray(N),F[N]=0)}function E(P,F,N,C,L,B,V){V===!0?i.vertexAttribIPointer(P,F,N,L,B):i.vertexAttribPointer(P,F,N,C,L,B)}function y(P,F,N,C){v();let L=C.attributes,B=N.getAttributes(),V=F.defaultAttributeValues;for(let X in B){let U=B[X];if(U.location>=0){let k=L[X];if(k===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),k!==void 0){let W=k.normalized,J=k.itemSize,j=e.get(k);if(j===void 0)continue;let Ae=j.buffer,Re=j.type,Ie=j.bytesPerElement,Q=Re===i.INT||Re===i.UNSIGNED_INT||k.gpuType===ic;if(k.isInterleavedBufferAttribute){let ie=k.data,ce=ie.stride,Ee=k.offset;if(ie.isInstancedInterleavedBuffer){for(let Me=0;Me<U.locationSize;Me++)m(U.location+Me,ie.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Me=0;Me<U.locationSize;Me++)p(U.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let Me=0;Me<U.locationSize;Me++)E(U.location+Me,J/U.locationSize,Re,W,ce*Ie,(Ee+J/U.locationSize*Me)*Ie,Q)}else{if(k.isInstancedBufferAttribute){for(let ie=0;ie<U.locationSize;ie++)m(U.location+ie,k.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ie=0;ie<U.locationSize;ie++)p(U.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let ie=0;ie<U.locationSize;ie++)E(U.location+ie,J/U.locationSize,Re,W,J*Ie,J/U.locationSize*ie*Ie,Q)}}else if(V!==void 0){let W=V[X];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(U.location,W);break;case 3:i.vertexAttrib3fv(U.location,W);break;case 4:i.vertexAttrib4fv(U.location,W);break;default:i.vertexAttrib1fv(U.location,W)}}}}_()}function S(){A();for(let P in n){let F=n[P];for(let N in F){let C=F[N];for(let L in C){let B=C[L];for(let V in B)u(B[V].object),delete B[V];delete C[L]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let F=n[P.id];for(let N in F){let C=F[N];for(let L in C){let B=C[L];for(let V in B)u(B[V].object),delete B[V];delete C[L]}}delete n[P.id]}function w(P){for(let F in n){let N=n[F];for(let C in N){let L=N[C];if(L[P.id]===void 0)continue;let B=L[P.id];for(let V in B)u(B[V].object),delete B[V];delete L[P.id]}}}function x(P){for(let F in n){let N=n[F],C=P.isInstancedMesh===!0?P.id:0,L=N[C];if(L!==void 0){for(let B in L){let V=L[B];for(let X in V)u(V[X].object),delete V[X];delete L[B]}delete N[C],Object.keys(N).length===0&&delete n[F]}}}function A(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function b_(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function w_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==ci&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let x=w===zt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==dn&&w!==Qi&&!x&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Xe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:y,maxSamples:S,samples:M}}function T_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Ln,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{let _=r?0:n,E=_*4,y=m.clippingState||null;l.value=y,y=u(g,h,E,d);for(let S=0;S!==E;++S)y[S]=t[S];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){let v=f!==null?f.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let m=d+v*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,y=d;E!==v;++E,y+=4)a.copy(f[E]).applyMatrix4(_,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}var ra=4,E_=6,A_=20,R_=256,So=new Nn,mp=new je,$u=null,Ku=0,Zu=0,Ju=!1,C_=new D,or=new D,Vc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=C_}=r;$u=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($u,Ku,Zu),this._renderer.xr.enabled=Ju,e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ks||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$u=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:zt,format:ci,colorSpace:Oa,depthBuffer:!1},s=gp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=P_(r)),this._blurMaterial=L_(r,e,t),this._ggxMaterial=I_(r,e,t)}return s}_compileMaterial(e){let t=new Je(new xt,e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,n,s,r){let l=new gi(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(mp),f.toneMapping=li,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Je(new Jr,new Dn({name:"PMREM.Background",side:Gi,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,p=v.material,m=!1,_=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,m=!0):(p.color.copy(mp),m=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));let S=this._cubeSize;sa(s,y*S,E>2?S:0,S,S),f.setRenderTarget(s),m&&f.render(v,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ks||e.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;sa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,So)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:g}=this,v=this._sizeLods[n],p=3*v*(n>g-ra?n-g+ra:0),m=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,sa(r,p,m,3*v,2*v),s.setRenderTarget(r),s.render(o,So),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,sa(e,p,m,3*v,2*v),s.setRenderTarget(e),s.render(o,So)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-ra?s-this._lodMax+ra:0),h=4*(this._cubeSize-u);sa(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(l,So)}};function P_(i){let e=[],t=[],n=i,s=i-ra+1+E_;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,g=new Float32Array(d*h*f),v=new Float32Array(d*h*f);for(let m=0;m<f;m++){let _=m%3*2/3-1,E=m>2?0:-1,y=[_,E,0,_+2/3,E,0,_+2/3,E+1,0,_,E,0,_+2/3,E+1,0,_,E+1,0];g.set(y,d*h*m);for(let S=0;S<h;S++){let M=u[S*2]*2-1,w=u[S*2+1]*2-1;m===0?or.set(1,w,M):m===1?or.set(-M,1,-w):m===2?or.set(-M,w,1):m===3?or.set(-1,w,-M):m===4?or.set(-M,-1,w):or.set(M,w,-1),or.toArray(v,(m*h+S)*d)}}let p=new xt;p.setAttribute("position",new vt(g,d)),p.setAttribute("outputDirection",new vt(v,d)),t.push(new Je(p,null)),n>ra&&n--}return{lodMeshes:t,sizeLods:e}}function gp(i,e,t){let n=new Ut(i,e,t);return n.texture.mapping=ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function I_(i,e,t){return new De({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:R_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function L_(i,e,t){return new De({name:"SphericalGaussianBlur",defines:{SAMPLES:A_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function vp(){return new De({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function xp(){return new De({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function qc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Gc=class extends Ut{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ka(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jr(5,5,5),r=new De({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gi,blending:Ti});r.uniforms.tEquirect.value=t;let a=new Je(s,r),o=t.minFilter;return t.minFilter===zs&&(t.minFilter=qt),new Kl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function F_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Ql||d===ec)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let v=new Gc(g.height);return v.fromEquirectangularTexture(i,h),e.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let d=h.mapping,g=d===Ql||d===ec,v=d===ks||d===rr;if(g||v){let p=t.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Vc(i)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{let _=h.image;return g&&_&&_.height>0||v&&_&&l(_)?(n===null&&(n=new Vc(i)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,d){return d===Ql?h.mapping=ks:d===ec&&(h.mapping=rr),h}function l(h){let d=0,g=6;for(let v=0;v<g;v++)h[v]!==void 0&&d++;return d===g}function c(h){let d=h.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function D_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&nr("WebGLRenderer: "+n+" extension not supported."),s}}}function N_(i,e,t,n){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let d in h)e.update(h[d],i.ARRAY_BUFFER)}function c(f){let h=[],d=f.index,g=f.attributes.position,v=0;if(g===void 0)return;if(d!==null){let _=d.array;v=d.version;for(let E=0,y=_.length;E<y;E+=3){let S=_[E+0],M=_[E+1],w=_[E+2];h.push(S,M,M,w,w,S)}}else{let _=g.array;v=g.version;for(let E=0,y=_.length/3-1;E<y;E+=3){let S=E+0,M=E+1,w=E+2;h.push(S,M,M,w,w,S)}}let p=new(g.count>=65535?qa:Wa)(h,1);p.version=v;let m=r.get(f);m&&e.remove(m),r.set(f,p)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function U_(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),t.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*a,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let v=0;for(let p=0;p<d;p++)v+=h[p];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function O_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function B_(i,e,t){let n=new WeakMap,s=new We;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let A=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],E=0;d===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let y=o.attributes.position.count*E,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let M=new Float32Array(y*S*4*f),w=new Ha(M,y,S,f);w.type=Qi,w.needsUpdate=!0;let x=E*4;for(let R=0;R<f;R++){let P=p[R],F=m[R],N=_[R],C=y*S*4*R;for(let L=0;L<P.count;L++){let B=L*x;d===!0&&(s.fromBufferAttribute(P,L),M[C+B+0]=s.x,M[C+B+1]=s.y,M[C+B+2]=s.z,M[C+B+3]=0),g===!0&&(s.fromBufferAttribute(F,L),M[C+B+4]=s.x,M[C+B+5]=s.y,M[C+B+6]=s.z,M[C+B+7]=0),v===!0&&(s.fromBufferAttribute(N,L),M[C+B+8]=s.x,M[C+B+9]=s.y,M[C+B+10]=s.z,M[C+B+11]=N.itemSize===4?s.w:1)}}h={count:f,texture:w,size:new ye(y,S)},n.set(o,h),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function k_(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var z_={[no]:"LINEAR_TONE_MAPPING",[so]:"REINHARD_TONE_MAPPING",[ro]:"CINEON_TONE_MAPPING",[ao]:"ACES_FILMIC_TONE_MAPPING",[lo]:"AGX_TONE_MAPPING",[co]:"NEUTRAL_TONE_MAPPING",[oo]:"CUSTOM_TONE_MAPPING"};function H_(i,e,t,n,s,r){let a=new Ut(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new xt;c.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new wt([0,2,0,0,2,0],2));let u=new jr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Je(c,u),h=new Nn(-1,1,1,-1,0,1),d=null,g=null,v=!1,p,m=null,_=[],E=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),l!==null&&l.setSize(y,S);for(let M=0;M<_.length;M++){let w=_[M];w.setSize&&w.setSize(y,S)}},this.setEffects=function(y){_=y,E=_.length>0&&_[0].isRenderPass===!0;let S=a.width,M=a.height;_.length>0&&o===null&&(o=new Ut(S,M,{type:zt,depthBuffer:!1,stencilBuffer:!1}),l=new Ut(S,M,{type:zt,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<_.length;w++){let x=_[w];x.setSize&&x.setSize(S,M)}},this.begin=function(y,S){if(v||y.toneMapping===li&&_.length===0)return!1;if(m=S,S!==null){let M=S.width,w=S.height;(a.width!==M||a.height!==w)&&this.setSize(M,w)}return E===!1&&y.setRenderTarget(a),p=y.toneMapping,y.toneMapping=li,!0},this.hasRenderPass=function(){return E},this.end=function(y,S){y.toneMapping=p,v=!0;let M=a,w=o;for(let x=0;x<_.length;x++){let A=_[x];A.enabled!==!1&&(A.render(y,w,M,S),A.needsSwap!==!1&&(M=w,w=w===o?l:o))}if(d!==y.outputColorSpace||g!==y.toneMapping){d=y.outputColorSpace,g=y.toneMapping,u.defines={},ct.getTransfer(d)===bt&&(u.defines.SRGB_TRANSFER="");let x=z_[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(m),y.render(f,h),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Bp=new Zi,ed=new Ds(1,1),kp=new Ha,zp=new Pl,Hp=new Ka,_p=[],yp=[],Mp=new Float32Array(16),Sp=new Float32Array(9),bp=new Float32Array(4);function oa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=_p[s];if(r===void 0&&(r=new Float32Array(s),_p[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function hi(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ui(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xc(i,e){let t=yp[e];t===void 0&&(t=new Int32Array(e),yp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function V_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function G_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hi(t,e))return;i.uniform2fv(this.addr,e),ui(t,e)}}function W_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hi(t,e))return;i.uniform3fv(this.addr,e),ui(t,e)}}function q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hi(t,e))return;i.uniform4fv(this.addr,e),ui(t,e)}}function X_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hi(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ui(t,e)}else{if(hi(t,n))return;bp.set(n),i.uniformMatrix2fv(this.addr,!1,bp),ui(t,n)}}function Y_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hi(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ui(t,e)}else{if(hi(t,n))return;Sp.set(n),i.uniformMatrix3fv(this.addr,!1,Sp),ui(t,n)}}function $_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hi(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ui(t,e)}else{if(hi(t,n))return;Mp.set(n),i.uniformMatrix4fv(this.addr,!1,Mp),ui(t,n)}}function K_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hi(t,e))return;i.uniform2iv(this.addr,e),ui(t,e)}}function J_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hi(t,e))return;i.uniform3iv(this.addr,e),ui(t,e)}}function j_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hi(t,e))return;i.uniform4iv(this.addr,e),ui(t,e)}}function Q_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ey(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hi(t,e))return;i.uniform2uiv(this.addr,e),ui(t,e)}}function ty(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hi(t,e))return;i.uniform3uiv(this.addr,e),ui(t,e)}}function iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hi(t,e))return;i.uniform4uiv(this.addr,e),ui(t,e)}}function ny(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ed.compareFunction=t.isReversedDepthBuffer()?kc:Bc,r=ed):r=Bp,t.setTexture2D(e||r,s)}function sy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||zp,s)}function ry(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Hp,s)}function ay(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||kp,s)}function oy(i){switch(i){case 5126:return V_;case 35664:return G_;case 35665:return W_;case 35666:return q_;case 35674:return X_;case 35675:return Y_;case 35676:return $_;case 5124:case 35670:return K_;case 35667:case 35671:return Z_;case 35668:case 35672:return J_;case 35669:case 35673:return j_;case 5125:return Q_;case 36294:return ey;case 36295:return ty;case 36296:return iy;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return ry;case 36289:case 36303:case 36311:case 36292:return ay}}function ly(i,e){i.uniform1fv(this.addr,e)}function cy(i,e){let t=oa(e,this.size,2);i.uniform2fv(this.addr,t)}function hy(i,e){let t=oa(e,this.size,3);i.uniform3fv(this.addr,t)}function uy(i,e){let t=oa(e,this.size,4);i.uniform4fv(this.addr,t)}function dy(i,e){let t=oa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fy(i,e){let t=oa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function py(i,e){let t=oa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function my(i,e){i.uniform1iv(this.addr,e)}function gy(i,e){i.uniform2iv(this.addr,e)}function vy(i,e){i.uniform3iv(this.addr,e)}function xy(i,e){i.uniform4iv(this.addr,e)}function _y(i,e){i.uniform1uiv(this.addr,e)}function yy(i,e){i.uniform2uiv(this.addr,e)}function My(i,e){i.uniform3uiv(this.addr,e)}function Sy(i,e){i.uniform4uiv(this.addr,e)}function by(i,e,t){let n=this.cache,s=e.length,r=Xc(t,s);hi(n,r)||(i.uniform1iv(this.addr,r),ui(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ed:a=Bp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function wy(i,e,t){let n=this.cache,s=e.length,r=Xc(t,s);hi(n,r)||(i.uniform1iv(this.addr,r),ui(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||zp,r[a])}function Ty(i,e,t){let n=this.cache,s=e.length,r=Xc(t,s);hi(n,r)||(i.uniform1iv(this.addr,r),ui(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Hp,r[a])}function Ey(i,e,t){let n=this.cache,s=e.length,r=Xc(t,s);hi(n,r)||(i.uniform1iv(this.addr,r),ui(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||kp,r[a])}function Ay(i){switch(i){case 5126:return ly;case 35664:return cy;case 35665:return hy;case 35666:return uy;case 35674:return dy;case 35675:return fy;case 35676:return py;case 5124:case 35670:return my;case 35667:case 35671:return gy;case 35668:case 35672:return vy;case 35669:case 35673:return xy;case 5125:return _y;case 36294:return yy;case 36295:return My;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return wy;case 35680:case 36300:case 36308:case 36293:return Ty;case 36289:case 36303:case 36311:case 36292:return Ey}}var td=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=oy(t.type)}},id=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ay(t.type)}},nd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},ju=/(\w+)(\])?(\[|\.)?/g;function wp(i,e){i.seq.push(e),i.map[e.id]=e}function Ry(i,e,t){let n=i.name,s=n.length;for(ju.lastIndex=0;;){let r=ju.exec(n),a=ju.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){wp(t,c===void 0?new td(o,i,e):new id(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new nd(o),wp(t,f)),t=f}}}var aa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Ry(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Tp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Cy=37297,Py=0;function Iy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Ep=new tt;function Ly(i){ct._getMatrix(Ep,ct.workingColorSpace,i);let e=`mat3( ${Ep.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case Ba:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ap(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Iy(i.getShaderSource(e),o)}else return r}function Fy(i,e){let t=Ly(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Dy={[no]:"Linear",[so]:"Reinhard",[ro]:"Cineon",[ao]:"ACESFilmic",[lo]:"AgX",[co]:"Neutral",[oo]:"Custom"};function Ny(i,e){let t=Dy[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Hc=new D;function Uy(){ct.getLuminanceCoefficients(Hc);let i=Hc.x.toFixed(4),e=Hc.y.toFixed(4),t=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Oy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function By(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ky(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function wo(i){return i!==""}function Rp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var zy=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(i){return i.replace(zy,Vy)}var Hy=new Map;function Vy(i,e){let t=rt[e];if(t===void 0){let n=Hy.get(e);if(n!==void 0)t=rt[n],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return sd(t)}var Gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pp(i){return i.replace(Gy,Wy)}function Wy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ip(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var qy={[to]:"SHADOWMAP_TYPE_PCF",[Qr]:"SHADOWMAP_TYPE_VSM"};function Xy(i){return qy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Yy={[ks]:"ENVMAP_TYPE_CUBE",[rr]:"ENVMAP_TYPE_CUBE",[ho]:"ENVMAP_TYPE_CUBE_UV"};function $y(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Yy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ky={[rr]:"ENVMAP_MODE_REFRACTION"};function Zy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ky[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Jy={[Au]:"ENVMAP_BLENDING_MULTIPLY",[Kf]:"ENVMAP_BLENDING_MIX",[Zf]:"ENVMAP_BLENDING_ADD"};function jy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Jy[i.combine]||"ENVMAP_BLENDING_NONE"}function Qy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function e1(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Xy(t),c=$y(t),u=Zy(t),f=jy(t),h=Qy(t),d=Oy(t),g=By(r),v=s.createProgram(),p,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wo).join(`
`),m.length>0&&(m+=`
`)):(p=[Ip(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),m=[Ip(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?rt.tonemapping_pars_fragment:"",t.toneMapping!==li?Ny("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Fy("linearToOutputTexel",t.outputColorSpace),Uy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wo).join(`
`)),a=sd(a),a=Rp(a,t),a=Cp(a,t),o=sd(o),o=Rp(o,t),o=Cp(o,t),a=Pp(a),o=Pp(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=_+p+a,y=_+m+o,S=Tp(s,s.VERTEX_SHADER,E),M=Tp(s,s.FRAGMENT_SHADER,y);s.attachShader(v,S),s.attachShader(v,M),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(P){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(v)||"",N=s.getShaderInfoLog(S)||"",C=s.getShaderInfoLog(M)||"",L=F.trim(),B=N.trim(),V=C.trim(),X=!0,U=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,M);else{let k=Ap(s,S,"vertex"),W=Ap(s,M,"fragment");Ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+k+`
`+W)}else L!==""?Xe("WebGLProgram: Program Info Log:",L):(B===""||V==="")&&(U=!1);U&&(P.diagnostics={runnable:X,programLog:L,vertexShader:{log:B,prefix:p},fragmentShader:{log:V,prefix:m}})}s.deleteShader(S),s.deleteShader(M),x=new aa(s,v),A=ky(s,v)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(v,Cy)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Py++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=M,this}var t1=0,rd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ad(e),t.set(e,n)),n}},ad=class{constructor(e){this.id=t1++,this.code=e,this.usedTimes=0}};function i1(i){return i===Vs||i===vo||i===xo}function n1(i,e,t,n,s,r){let a=new Va,o=new rd,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,A,R,P,F,N){let C=P.fog,L=F.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=e.get(x.envMap||B,V),U=X&&X.mapping===ho?X.image.height:null,k=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Xe("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let W=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,J=W!==void 0?W.length:0,j=0;L.morphAttributes.position!==void 0&&(j=1),L.morphAttributes.normal!==void 0&&(j=2),L.morphAttributes.color!==void 0&&(j=3);let Ae,Re,Ie,Q;if(k){let Ft=jn[k];Ae=Ft.vertexShader,Re=Ft.fragmentShader}else{Ae=x.vertexShader,Re=x.fragmentShader;let Ft=o.getVertexShaderStage(x),St=o.getFragmentShaderStage(x);o.update(x,Ft,St),Ie=Ft.id,Q=St.id}let ie=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),Ee=F.isInstancedMesh===!0,Me=F.isBatchedMesh===!0,Ze=!!x.map,Qe=!!x.matcap,we=!!X,Ge=!!x.aoMap,Ne=!!x.lightMap,Ue=!!x.bumpMap&&x.wireframe===!1,ft=!!x.normalMap,Gt=!!x.displacementMap,oi=!!x.emissiveMap,Nt=!!x.metalnessMap,Kt=!!x.roughnessMap,z=x.anisotropy>0,Lt=x.clearcoat>0,Mt=x.dispersion>0,I=x.retroreflectivity>0,b=x.iridescence>0,G=x.sheen>0,Z=x.transmission>0,ee=z&&!!x.anisotropyMap,le=Lt&&!!x.clearcoatMap,ue=Lt&&!!x.clearcoatNormalMap,te=Lt&&!!x.clearcoatRoughnessMap,se=b&&!!x.iridescenceMap,de=b&&!!x.iridescenceThicknessMap,Be=G&&!!x.sheenColorMap,pe=G&&!!x.sheenRoughnessMap,fe=!!x.specularMap,ke=!!x.specularColorMap,qe=!!x.specularIntensityMap,et=Z&&!!x.transmissionMap,H=Z&&!!x.thicknessMap,me=!!x.gradientMap,ne=!!x.alphaMap,ge=x.alphaTest>0,Se=!!x.alphaHash,ae=!!x.extensions,Ve=li;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ve=i.toneMapping);let Le={shaderID:k,shaderType:x.type,shaderName:x.name,vertexShader:Ae,fragmentShader:Re,defines:x.defines,customVertexShaderID:Ie,customFragmentShaderID:Q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Me,batchingColor:Me&&F._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&F.instanceColor!==null,instancingMorph:Ee&&F.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ze,matcap:Qe,envMap:we,envMapMode:we&&X.mapping,envMapCubeUVHeight:U,aoMap:Ge,lightMap:Ne,bumpMap:Ue,normalMap:ft,displacementMap:Gt,emissiveMap:oi,normalMapObjectSpace:ft&&x.normalMapType===Qf,normalMapTangentSpace:ft&&x.normalMapType===Uu,packedNormalMap:ft&&x.normalMapType===Uu&&i1(x.normalMap.format),metalnessMap:Nt,roughnessMap:Kt,anisotropy:z,anisotropyMap:ee,clearcoat:Lt,clearcoatMap:le,clearcoatNormalMap:ue,clearcoatRoughnessMap:te,dispersion:Mt,retroreflection:I,iridescence:b,iridescenceMap:se,iridescenceThicknessMap:de,sheen:G,sheenColorMap:Be,sheenRoughnessMap:pe,specularMap:fe,specularColorMap:ke,specularIntensityMap:qe,transmission:Z,transmissionMap:et,thicknessMap:H,gradientMap:me,opaque:x.transparent===!1&&x.blending===ea&&x.alphaToCoverage===!1,alphaMap:ne,alphaTest:ge,alphaHash:Se,combine:x.combine,mapUv:Ze&&g(x.map.channel),aoMapUv:Ge&&g(x.aoMap.channel),lightMapUv:Ne&&g(x.lightMap.channel),bumpMapUv:Ue&&g(x.bumpMap.channel),normalMapUv:ft&&g(x.normalMap.channel),displacementMapUv:Gt&&g(x.displacementMap.channel),emissiveMapUv:oi&&g(x.emissiveMap.channel),metalnessMapUv:Nt&&g(x.metalnessMap.channel),roughnessMapUv:Kt&&g(x.roughnessMap.channel),anisotropyMapUv:ee&&g(x.anisotropyMap.channel),clearcoatMapUv:le&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:de&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:pe&&g(x.sheenRoughnessMap.channel),specularMapUv:fe&&g(x.specularMap.channel),specularColorMapUv:ke&&g(x.specularColorMap.channel),specularIntensityMapUv:qe&&g(x.specularIntensityMap.channel),transmissionMapUv:et&&g(x.transmissionMap.channel),thicknessMapUv:H&&g(x.thicknessMap.channel),alphaMapUv:ne&&g(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ft||z),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!L.attributes.uv&&(Ze||ne),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&ft===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ce,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:j,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Ze&&x.map.isVideoTexture===!0&&ct.getTransfer(x.map.colorSpace)===bt,decodeVideoTextureEmissive:oi&&x.emissiveMap.isVideoTexture===!0&&ct.getTransfer(x.emissiveMap.colorSpace)===bt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wi,flipSided:x.side===Gi,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&x.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function p(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)A.push(R),A.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(A,x),_(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function m(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function _(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function E(x){let A=d[x.type],R;if(A){let P=jn[A];R=ds.clone(P.uniforms)}else R=x.uniforms;return R}function y(x,A){let R=u.get(A);return R!==void 0?++R.usedTimes:(R=new e1(i,A,x,s),c.push(R),u.set(A,R)),R}function S(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function M(x){o.remove(x)}function w(){o.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:E,acquireProgram:y,releaseProgram:S,releaseShaderCache:M,programs:c,dispose:w}}function s1(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function r1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Lp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,v,p,m){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:p,group:m},i[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=g,_.materialVariant=a(h),_.groupOrder=v,_.renderOrder=h.renderOrder,_.z=p,_.group=m),e++,_}function l(h,d,g,v,p,m,_){_.reversedDepth===!0&&(p=-p);let E=o(h,d,g,v,p,m);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):t.push(E)}function c(h,d,g,v,p,m){let _=o(h,d,g,v,p,m);g.transmission>0?n.unshift(_):g.transparent===!0?s.unshift(_):t.unshift(_)}function u(h,d){t.length>1&&t.sort(h||r1),n.length>1&&n.sort(d||Lp),s.length>1&&s.sort(d||Lp)}function f(){for(let h=e,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function a1(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Fp,i.set(n,[a])):s>=r.length?(a=new Fp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function o1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new je};break;case"SpotLight":t={position:new D,direction:new D,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function l1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var c1=0;function h1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function u1(i){let e=new o1,t=l1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new Ct,a=new Ct;function o(c){let u=0,f=0,h=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,g=0,v=0,p=0,m=0,_=0,E=0,y=0,S=0,M=0,w=0,x=0,A=0,R=0;c.sort(h1);for(let F=0,N=c.length;F<N;F++){let C=c[F],L=C.color,B=C.intensity,V=C.distance,X=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Vs?X=C.shadow.map.texture:X=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=L.r*B,f+=L.g*B,h+=L.b*B;else if(C.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(C.sh.coefficients[U],B);R++}else if(C.isSunLight){let U=e.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let k=C.shadow,W=t.get(C);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[g]=W,n.sunShadowMap[g]=X;let J=k.getViewportCount();for(let j=0;j<J;j++)n.sunShadowMatrix[v+j]=k.getMatrix(j),n.sunShadowCascade[v+j]=k._cascadeData[j];v+=J,g++}n.sun[d]=U,d++}else if(C.isDirectionalLight){let U=e.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let k=C.shadow,W=t.get(C);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=C.shadow.matrix,S++}n.directional[p]=U,p++}else if(C.isSpotLight){let U=e.get(C);U.position.setFromMatrixPosition(C.matrixWorld),U.color.copy(L).multiplyScalar(B),U.distance=V,U.coneCos=Math.cos(C.angle),U.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),U.decay=C.decay,n.spot[_]=U;let k=C.shadow;if(C.map&&(n.spotLightMap[x]=C.map,x++,k.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[_]=k.matrix,C.castShadow){let W=t.get(C);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=X,w++}_++}else if(C.isRectAreaLight){let U=e.get(C);U.color.copy(L).multiplyScalar(B),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),n.rectArea[E]=U,E++}else if(C.isPointLight){let U=e.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),U.distance=C.distance,U.decay=C.decay,C.castShadow){let k=C.shadow,W=t.get(C);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,W.shadowCameraNear=k.camera.near,W.shadowCameraFar=k.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=C.shadow.matrix,M++}n.point[m]=U,m++}else if(C.isHemisphereLight){let U=e.get(C);U.skyColor.copy(C.color).multiplyScalar(B),U.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[y]=U,y++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let P=n.hash;(P.sunLength!==d||P.directionalLength!==p||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==E||P.hemiLength!==y||P.numSunShadows!==g||P.numDirectionalShadows!==S||P.numPointShadows!==M||P.numSpotShadows!==w||P.numSpotMaps!==x||P.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=p,n.spot.length=_,n.rectArea.length=E,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+x-A,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,P.sunLength=d,P.directionalLength=p,P.pointLength=m,P.spotLength=_,P.rectAreaLength=E,P.hemiLength=y,P.numSunShadows=g,P.numDirectionalShadows=S,P.numPointShadows=M,P.numSpotShadows=w,P.numSpotMaps=x,P.numLightProbes=R,n.version=c1++)}function l(c,u){let f=0,h=0,d=0,g=0,v=0,p=0,m=u.matrixWorldInverse;for(let _=0,E=c.length;_<E;_++){let y=c[_];if(y.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),f++}else if(y.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(y.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function Dp(i){let e=new u1(i),t=[],n=[],s=[];function r(h){f.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function d1(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Dp(i),e.set(s,[o])):r>=a.length?(o=new Dp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var f1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p1=`uniform sampler2D shadow_pass;
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
}`,m1=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],g1=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Np=new Ct,bo=new D,Qu=new D;function v1(i,e,t){let n=new Ya,s=new ye,r=new ye,a=new We,o=new Ol,l=new Bl,c={},u=t.maxTextureSize,f={[Bs]:Gi,[Gi]:Bs,[wi]:wi},h=new De({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:f1,fragmentShader:p1}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new xt;g.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Je(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=to;let m=this.type;this.render=function(M,w,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;this.type===Ff&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=to);let A=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ti),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let N=m!==this.type;N&&w.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(L=>L.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,L=M.length;C<L;C++){let B=M[C],V=B.shadow;if(V===void 0){Xe("WebGLShadowMap:",B,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let X=V.getFrameExtents();s.multiply(X),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/X.x),s.x=r.x*X.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/X.y),s.y=r.y*X.y,V.mapSize.y=r.y));let U=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=U,V.map===null||N===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Qr){if(B.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ut(s.x,s.y,{format:Vs,type:zt,minFilter:qt,magFilter:qt,generateMipmaps:!1}),V.map.texture.name=B.name+".shadowMap",V.map.depthTexture=new Ds(s.x,s.y,Qi),V.map.depthTexture.name=B.name+".shadowMapDepth",V.map.depthTexture.format=$n,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ei,V.map.depthTexture.magFilter=ei}else B.isPointLight?(V.map=new Gc(s.x),V.map.depthTexture=new Ul(s.x,On)):(V.map=new Ut(s.x,s.y),V.map.depthTexture=new Ds(s.x,s.y,On)),V.map.depthTexture.name=B.name+".shadowMap",V.map.depthTexture.format=$n,this.type===to?(V.map.depthTexture.compareFunction=U?kc:Bc,V.map.depthTexture.minFilter=qt,V.map.depthTexture.magFilter=qt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ei,V.map.depthTexture.magFilter=ei);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let k=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();B.isPointLight!==!0&&V.updateMatrices(B,x);for(let W=0;W<k;W++){let J=V.getCamera(W);if(B.isPointLight){let j=V.camera,Ae=V.matrix,Re=B.distance||j.far;Re!==j.far&&(j.far=Re,j.updateProjectionMatrix()),bo.setFromMatrixPosition(B.matrixWorld),j.position.copy(bo),Qu.copy(j.position),Qu.add(m1[W]),j.up.copy(g1[W]),j.lookAt(Qu),j.updateMatrixWorld(),Ae.makeTranslation(-bo.x,-bo.y,-bo.z),Np.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Np,j.coordinateSystem,j.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,W),i.clear();else{W===0&&(i.setRenderTarget(V.map),i.clear());let j=V.getViewport(W);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),F.viewport(a)}n=V.getFrustum(W),y(w,x,J,B,this.type)}V.isPointLightShadow!==!0&&this.type===Qr&&_(V,x),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(A,R,P)};function _(M,w){let x=e.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new Ut(s.x,s.y,{format:Vs,type:zt}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,x,h,v,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,x,d,v,null)}function E(M,w,x,A){let R=null,P=x.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)R=P;else if(R=x.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let F=R.uuid,N=w.uuid,C=c[F];C===void 0&&(C={},c[F]=C);let L=C[N];L===void 0&&(L=R.clone(),C[N]=L,w.addEventListener("dispose",S)),R=L}if(R.visible=w.visible,R.wireframe=w.wireframe,A===Qr?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:f[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=i.properties.get(R);F.light=x}return R}function y(M,w,x,A,R){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===Qr)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,M.matrixWorld);let N=e.update(M),C=M.material;if(Array.isArray(C)){let L=N.groups;for(let B=0,V=L.length;B<V;B++){let X=L[B],U=C[X.materialIndex];if(U&&U.visible){let k=E(M,U,A,R);M.onBeforeShadow(i,M,w,x,N,k,X),i.renderBufferDirect(x,null,N,k,M,X),M.onAfterShadow(i,M,w,x,N,k,X)}}}else if(C.visible){let L=E(M,C,A,R);M.onBeforeShadow(i,M,w,x,N,L,null),i.renderBufferDirect(x,null,N,L,M,null),M.onAfterShadow(i,M,w,x,N,L,null)}}let F=M.children;for(let N=0,C=F.length;N<C;N++)y(F[N],w,x,A,R)}function S(M){M.target.removeEventListener("dispose",S);for(let x in c){let A=c[x],R=M.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function x1(i,e){function t(){let H=!1,me=new We,ne=null,ge=new We(0,0,0,0);return{setMask:function(Se){ne!==Se&&!H&&(i.colorMask(Se,Se,Se,Se),ne=Se)},setLocked:function(Se){H=Se},setClear:function(Se,ae,Ve,Le,Ft){Ft===!0&&(Se*=Le,ae*=Le,Ve*=Le),me.set(Se,ae,Ve,Le),ge.equals(me)===!1&&(i.clearColor(Se,ae,Ve,Le),ge.copy(me))},reset:function(){H=!1,ne=null,ge.set(-1,0,0,0)}}}function n(){let H=!1,me=!1,ne=null,ge=null,Se=null;return{setReversed:function(ae){if(me!==ae){let Ve=e.get("EXT_clip_control");ae?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),me=ae;let Le=Se;Se=null,this.setClear(Le)}},getReversed:function(){return me},setTest:function(ae){ae?ie(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(ae){ne!==ae&&!H&&(i.depthMask(ae),ne=ae)},setFunc:function(ae){if(me&&(ae=up[ae]),ge!==ae){switch(ae){case _l:i.depthFunc(i.NEVER);break;case yl:i.depthFunc(i.ALWAYS);break;case Ml:i.depthFunc(i.LESS);break;case Wr:i.depthFunc(i.LEQUAL);break;case Sl:i.depthFunc(i.EQUAL);break;case bl:i.depthFunc(i.GEQUAL);break;case wl:i.depthFunc(i.GREATER);break;case Tl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=ae}},setLocked:function(ae){H=ae},setClear:function(ae){Se!==ae&&(Se=ae,me&&(ae=1-ae),i.clearDepth(ae))},reset:function(){H=!1,ne=null,ge=null,Se=null,me=!1}}}function s(){let H=!1,me=null,ne=null,ge=null,Se=null,ae=null,Ve=null,Le=null,Ft=null;return{setTest:function(St){H||(St?ie(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(St){me!==St&&!H&&(i.stencilMask(St),me=St)},setFunc:function(St,rn,an){(ne!==St||ge!==rn||Se!==an)&&(i.stencilFunc(St,rn,an),ne=St,ge=rn,Se=an)},setOp:function(St,rn,an){(ae!==St||Ve!==rn||Le!==an)&&(i.stencilOp(St,rn,an),ae=St,Ve=rn,Le=an)},setLocked:function(St){H=St},setClear:function(St){Ft!==St&&(i.clearStencil(St),Ft=St)},reset:function(){H=!1,me=null,ne=null,ge=null,Se=null,ae=null,Ve=null,Le=null,Ft=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},d=new WeakMap,g=[],v=null,p=!1,m=null,_=null,E=null,y=null,S=null,M=null,w=null,x=new je(0,0,0),A=0,R=!1,P=null,F=null,N=null,C=null,L=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,X=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(U)[1]),V=X>=1):U.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),V=X>=2);let k=null,W={},J=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),Ae=new We().fromArray(J),Re=new We().fromArray(j);function Ie(H,me,ne,ge){let Se=new Uint8Array(4),ae=i.createTexture();i.bindTexture(H,ae),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<ne;Ve++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(me+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return ae}let Q={};Q[i.TEXTURE_2D]=Ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),a.setFunc(Wr),Ue(!1),ft(bu),ie(i.CULL_FACE),Ge(Ti);function ie(H){u[H]!==!0&&(i.enable(H),u[H]=!0)}function ce(H){u[H]!==!1&&(i.disable(H),u[H]=!1)}function Ee(H,me){return h[H]!==me?(i.bindFramebuffer(H,me),h[H]=me,H===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=me),H===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=me),!0):!1}function Me(H,me){let ne=g,ge=!1;if(H){ne=d.get(me),ne===void 0&&(ne=[],d.set(me,ne));let Se=H.textures;if(ne.length!==Se.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Ve=Se.length;ae<Ve;ae++)ne[ae]=i.COLOR_ATTACHMENT0+ae;ne.length=Se.length,ge=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,ge=!0);ge&&i.drawBuffers(ne)}function Ze(H){return v!==H?(i.useProgram(H),v=H,!0):!1}let Qe={[Wi]:i.FUNC_ADD,[Df]:i.FUNC_SUBTRACT,[Nf]:i.FUNC_REVERSE_SUBTRACT};Qe[Uf]=i.MIN,Qe[Of]=i.MAX;let we={[jl]:i.ZERO,[Un]:i.ONE,[Bf]:i.SRC_COLOR,[Eu]:i.SRC_ALPHA,[Wf]:i.SRC_ALPHA_SATURATE,[Vf]:i.DST_COLOR,[zf]:i.DST_ALPHA,[kf]:i.ONE_MINUS_SRC_COLOR,[io]:i.ONE_MINUS_SRC_ALPHA,[Gf]:i.ONE_MINUS_DST_COLOR,[Hf]:i.ONE_MINUS_DST_ALPHA,[qf]:i.CONSTANT_COLOR,[Xf]:i.ONE_MINUS_CONSTANT_COLOR,[Yf]:i.CONSTANT_ALPHA,[$f]:i.ONE_MINUS_CONSTANT_ALPHA};function Ge(H,me,ne,ge,Se,ae,Ve,Le,Ft,St){if(H===Ti){p===!0&&(ce(i.BLEND),p=!1);return}if(p===!1&&(ie(i.BLEND),p=!0),H!==Zn){if(H!==m||St!==R){if((_!==Wi||S!==Wi)&&(i.blendEquation(i.FUNC_ADD),_=Wi,S=Wi),St)switch(H){case ea:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xt:i.blendFunc(i.ONE,i.ONE);break;case wu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ke("WebGLState: Invalid blending: ",H);break}else switch(H){case ea:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wu:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tu:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",H);break}E=null,y=null,M=null,w=null,x.set(0,0,0),A=0,m=H,R=St}return}Se=Se||me,ae=ae||ne,Ve=Ve||ge,(me!==_||Se!==S)&&(i.blendEquationSeparate(Qe[me],Qe[Se]),_=me,S=Se),(ne!==E||ge!==y||ae!==M||Ve!==w)&&(i.blendFuncSeparate(we[ne],we[ge],we[ae],we[Ve]),E=ne,y=ge,M=ae,w=Ve),(Le.equals(x)===!1||Ft!==A)&&(i.blendColor(Le.r,Le.g,Le.b,Ft),x.copy(Le),A=Ft),m=H,R=!1}function Ne(H,me){H.side===wi?ce(i.CULL_FACE):ie(i.CULL_FACE);let ne=H.side===Gi;me&&(ne=!ne),Ue(ne),H.blending===ea&&H.transparent===!1?Ge(Ti):Ge(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);let ge=H.stencilWrite;o.setTest(ge),ge&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),oi(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(H){P!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),P=H)}function ft(H){H!==If?(ie(i.CULL_FACE),H!==F&&(H===bu?i.cullFace(i.BACK):H===Lf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),F=H}function Gt(H){H!==N&&(V&&i.lineWidth(H),N=H)}function oi(H,me,ne){H?(ie(i.POLYGON_OFFSET_FILL),(C!==me||L!==ne)&&(C=me,L=ne,a.getReversed()&&(me=-me),i.polygonOffset(me,ne))):ce(i.POLYGON_OFFSET_FILL)}function Nt(H){H?ie(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function Kt(H){H===void 0&&(H=i.TEXTURE0+B-1),k!==H&&(i.activeTexture(H),k=H)}function z(H,me,ne){ne===void 0&&(k===null?ne=i.TEXTURE0+B-1:ne=k);let ge=W[ne];ge===void 0&&(ge={type:void 0,texture:void 0},W[ne]=ge),(ge.type!==H||ge.texture!==me)&&(k!==ne&&(i.activeTexture(ne),k=ne),i.bindTexture(H,me||Q[H]),ge.type=H,ge.texture=me)}function Lt(){let H=W[k];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Mt(){try{i.compressedTexImage2D(...arguments)}catch(H){Ke("WebGLState:",H)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(H){Ke("WebGLState:",H)}}function b(){try{i.texSubImage2D(...arguments)}catch(H){Ke("WebGLState:",H)}}function G(){try{i.texSubImage3D(...arguments)}catch(H){Ke("WebGLState:",H)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(H){Ke("WebGLState:",H)}}function ee(){try{i.compressedTexSubImage3D(...arguments)}catch(H){Ke("WebGLState:",H)}}function le(){try{i.texStorage2D(...arguments)}catch(H){Ke("WebGLState:",H)}}function ue(){try{i.texStorage3D(...arguments)}catch(H){Ke("WebGLState:",H)}}function te(){try{i.texImage2D(...arguments)}catch(H){Ke("WebGLState:",H)}}function se(){try{i.texImage3D(...arguments)}catch(H){Ke("WebGLState:",H)}}function de(H){return f[H]!==void 0?f[H]:i.getParameter(H)}function Be(H,me){f[H]!==me&&(i.pixelStorei(H,me),f[H]=me)}function pe(H){Ae.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Ae.copy(H))}function fe(H){Re.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Re.copy(H))}function ke(H,me){let ne=c.get(me);ne===void 0&&(ne=new WeakMap,c.set(me,ne));let ge=ne.get(H);ge===void 0&&(ge=i.getUniformBlockIndex(me,H.name),ne.set(H,ge))}function qe(H,me){let ge=c.get(me).get(H);l.get(me)!==ge&&(i.uniformBlockBinding(me,ge,H.__bindingPointIndex),l.set(me,ge))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},k=null,W={},h={},d=new WeakMap,g=[],v=null,p=!1,m=null,_=null,E=null,y=null,S=null,M=null,w=null,x=new je(0,0,0),A=0,R=!1,P=null,F=null,N=null,C=null,L=null,Ae.set(0,0,i.canvas.width,i.canvas.height),Re.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:ce,bindFramebuffer:Ee,drawBuffers:Me,useProgram:Ze,setBlending:Ge,setMaterial:Ne,setFlipSided:Ue,setCullFace:ft,setLineWidth:Gt,setPolygonOffset:oi,setScissorTest:Nt,activeTexture:Kt,bindTexture:z,unbindTexture:Lt,compressedTexImage2D:Mt,compressedTexImage3D:I,texImage2D:te,texImage3D:se,pixelStorei:Be,getParameter:de,updateUBOMapping:ke,uniformBlockBinding:qe,texStorage2D:le,texStorage3D:ue,texSubImage2D:b,texSubImage3D:G,compressedTexSubImage2D:Z,compressedTexSubImage3D:ee,scissor:pe,viewport:fe,reset:et}}function _1(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,u=new WeakMap,f=new Set,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,b){return g?new OffscreenCanvas(I,b):za("canvas")}function p(I,b,G){let Z=1,ee=Mt(I);if((ee.width>G||ee.height>G)&&(Z=G/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let le=Math.floor(Z*ee.width),ue=Math.floor(Z*ee.height);h===void 0&&(h=v(le,ue));let te=b?v(le,ue):h;return te.width=le,te.height=ue,te.getContext("2d").drawImage(I,0,0,le,ue),Xe("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+le+"x"+ue+")."),te}else return"data"in I&&Xe("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),I;return I}function m(I){return I.generateMipmaps}function _(I){i.generateMipmap(I)}function E(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(I,b,G,Z,ee,le=!1){if(I!==null){if(i[I]!==void 0)return i[I];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ue;Z&&(ue=e.get("EXT_texture_norm16"),ue||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=b;if(b===i.RED&&(G===i.FLOAT&&(te=i.R32F),G===i.HALF_FLOAT&&(te=i.R16F),G===i.UNSIGNED_BYTE&&(te=i.R8),G===i.UNSIGNED_SHORT&&ue&&(te=ue.R16_EXT),G===i.SHORT&&ue&&(te=ue.R16_SNORM_EXT)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(te=i.R8UI),G===i.UNSIGNED_SHORT&&(te=i.R16UI),G===i.UNSIGNED_INT&&(te=i.R32UI),G===i.BYTE&&(te=i.R8I),G===i.SHORT&&(te=i.R16I),G===i.INT&&(te=i.R32I)),b===i.RG&&(G===i.FLOAT&&(te=i.RG32F),G===i.HALF_FLOAT&&(te=i.RG16F),G===i.UNSIGNED_BYTE&&(te=i.RG8),G===i.UNSIGNED_SHORT&&ue&&(te=ue.RG16_EXT),G===i.SHORT&&ue&&(te=ue.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(te=i.RG8UI),G===i.UNSIGNED_SHORT&&(te=i.RG16UI),G===i.UNSIGNED_INT&&(te=i.RG32UI),G===i.BYTE&&(te=i.RG8I),G===i.SHORT&&(te=i.RG16I),G===i.INT&&(te=i.RG32I)),b===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(te=i.RGB8UI),G===i.UNSIGNED_SHORT&&(te=i.RGB16UI),G===i.UNSIGNED_INT&&(te=i.RGB32UI),G===i.BYTE&&(te=i.RGB8I),G===i.SHORT&&(te=i.RGB16I),G===i.INT&&(te=i.RGB32I)),b===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),G===i.UNSIGNED_INT&&(te=i.RGBA32UI),G===i.BYTE&&(te=i.RGBA8I),G===i.SHORT&&(te=i.RGBA16I),G===i.INT&&(te=i.RGBA32I)),b===i.RGB&&(G===i.UNSIGNED_SHORT&&ue&&(te=ue.RGB16_EXT),G===i.SHORT&&ue&&(te=ue.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),b===i.RGBA){let se=le?Ba:ct.getTransfer(ee);G===i.FLOAT&&(te=i.RGBA32F),G===i.HALF_FLOAT&&(te=i.RGBA16F),G===i.UNSIGNED_BYTE&&(te=se===bt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&ue&&(te=ue.RGBA16_EXT),G===i.SHORT&&ue&&(te=ue.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function S(I,b){let G;return I?b===null||b===On||b===ia?G=i.DEPTH24_STENCIL8:b===Qi?G=i.DEPTH32F_STENCIL8:b===ta&&(G=i.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===On||b===ia?G=i.DEPTH_COMPONENT24:b===Qi?G=i.DEPTH_COMPONENT32F:b===ta&&(G=i.DEPTH_COMPONENT16),G}function M(I,b){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==ei&&I.minFilter!==qt?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function w(I){let b=I.target;b.removeEventListener("dispose",w),A(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&f.delete(b)}function x(I){let b=I.target;b.removeEventListener("dispose",x),P(b)}function A(I){let b=n.get(I);if(b.__webglInit===void 0)return;let G=I.source,Z=d.get(G);if(Z){let ee=Z[b.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(I),Object.keys(Z).length===0&&d.delete(G)}n.remove(I)}function R(I){let b=n.get(I);i.deleteTexture(b.__webglTexture);let G=I.source,Z=d.get(G);delete Z[b.__cacheKey],a.memory.textures--}function P(I){let b=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let ee=0;ee<b.__webglFramebuffer[Z].length;ee++)i.deleteFramebuffer(b.__webglFramebuffer[Z][ee]);else i.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)i.deleteFramebuffer(b.__webglFramebuffer[Z]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let G=I.textures;for(let Z=0,ee=G.length;Z<ee;Z++){let le=n.get(G[Z]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),a.memory.textures--),n.remove(G[Z])}n.remove(I)}let F=0;function N(){F=0}function C(){return F}function L(I){F=I}function B(){let I=F;return I>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,I}function V(I){let b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function X(I,b){let G=n.get(I);if(I.isVideoTexture&&z(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&G.__version!==I.version){let Z=I.image;if(Z===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(G,I,b);return}}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function U(I,b){let G=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){ce(G,I,b);return}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function k(I,b){let G=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){ce(G,I,b);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function W(I,b){let G=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&G.__version!==I.version){Ee(G,I,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}let J={[qr]:i.REPEAT,[Hi]:i.CLAMP_TO_EDGE,[El]:i.MIRRORED_REPEAT},j={[ei]:i.NEAREST,[Jf]:i.NEAREST_MIPMAP_NEAREST,[uo]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[tc]:i.LINEAR_MIPMAP_NEAREST,[zs]:i.LINEAR_MIPMAP_LINEAR},Ae={[tp]:i.NEVER,[ap]:i.ALWAYS,[ip]:i.LESS,[Bc]:i.LEQUAL,[np]:i.EQUAL,[kc]:i.GEQUAL,[sp]:i.GREATER,[rp]:i.NOTEQUAL};function Re(I,b){if(b.type===Qi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===qt||b.magFilter===tc||b.magFilter===uo||b.magFilter===zs||b.minFilter===qt||b.minFilter===tc||b.minFilter===uo||b.minFilter===zs)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,J[b.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,J[b.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,J[b.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,j[b.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,j[b.minFilter]),b.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Ae[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ei||b.minFilter!==uo&&b.minFilter!==zs||b.type===Qi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ie(I,b){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",w));let Z=b.source,ee=d.get(Z);ee===void 0&&(ee={},d.set(Z,ee));let le=V(b);if(le!==I.__cacheKey){ee[le]===void 0&&(ee[le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ee[le].usedTimes++;let ue=ee[I.__cacheKey];ue!==void 0&&(ee[I.__cacheKey].usedTimes--,ue.usedTimes===0&&R(b)),I.__cacheKey=le,I.__webglTexture=ee[le].texture}return G}function Q(I,b,G){return Math.floor(Math.floor(I/G)/b)}function ie(I,b,G,Z){let le=I.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,G,Z,b.data);else{le.sort((Be,pe)=>Be.start-pe.start);let ue=0;for(let Be=1;Be<le.length;Be++){let pe=le[ue],fe=le[Be],ke=pe.start+pe.count,qe=Q(fe.start,b.width,4),et=Q(pe.start,b.width,4);fe.start<=ke+1&&qe===et&&Q(fe.start+fe.count-1,b.width,4)===qe?pe.count=Math.max(pe.count,fe.start+fe.count-pe.start):(++ue,le[ue]=fe)}le.length=ue+1;let te=t.getParameter(i.UNPACK_ROW_LENGTH),se=t.getParameter(i.UNPACK_SKIP_PIXELS),de=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let Be=0,pe=le.length;Be<pe;Be++){let fe=le[Be],ke=Math.floor(fe.start/4),qe=Math.ceil(fe.count/4),et=ke%b.width,H=Math.floor(ke/b.width),me=qe,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,et),t.pixelStorei(i.UNPACK_SKIP_ROWS,H),t.texSubImage2D(i.TEXTURE_2D,0,et,H,me,ne,G,Z,b.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,te),t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,de)}}function ce(I,b,G){let Z=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=i.TEXTURE_3D);let ee=Ie(I,b),le=b.source;t.bindTexture(Z,I.__webglTexture,i.TEXTURE0+G);let ue=n.get(le);if(le.version!==ue.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ne=ct.getPrimaries(ct.workingColorSpace),ge=b.colorSpace===us?null:ct.getPrimaries(b.colorSpace),Se=b.colorSpace===us||ne===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let se=p(b.image,!1,s.maxTextureSize);se=Lt(b,se);let de=r.convert(b.format,b.colorSpace),Be=r.convert(b.type),pe=y(b.internalFormat,de,Be,b.normalized,b.colorSpace,b.isVideoTexture);Re(Z,b);let fe,ke=b.mipmaps,qe=b.isVideoTexture!==!0,et=ue.__version===void 0||ee===!0,H=le.dataReady,me=M(b,se);if(b.isDepthTexture)pe=S(b.format===Hs,b.type),et&&(qe?t.texStorage2D(i.TEXTURE_2D,1,pe,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,pe,se.width,se.height,0,de,Be,null));else if(b.isDataTexture)if(ke.length>0){qe&&et&&t.texStorage2D(i.TEXTURE_2D,me,pe,ke[0].width,ke[0].height);for(let ne=0,ge=ke.length;ne<ge;ne++)fe=ke[ne],qe?H&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,fe.width,fe.height,de,Be,fe.data):t.texImage2D(i.TEXTURE_2D,ne,pe,fe.width,fe.height,0,de,Be,fe.data);b.generateMipmaps=!1}else qe?(et&&t.texStorage2D(i.TEXTURE_2D,me,pe,se.width,se.height),H&&ie(b,se,de,Be)):t.texImage2D(i.TEXTURE_2D,0,pe,se.width,se.height,0,de,Be,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){qe&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,pe,ke[0].width,ke[0].height,se.depth);for(let ne=0,ge=ke.length;ne<ge;ne++)if(fe=ke[ne],b.format!==ci)if(de!==null)if(qe){if(H)if(b.layerUpdates.size>0){let Se=Vu(fe.width,fe.height,b.format,b.type);for(let ae of b.layerUpdates){let Ve=fe.data.subarray(ae*Se/fe.data.BYTES_PER_ELEMENT,(ae+1)*Se/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,ae,fe.width,fe.height,1,de,Ve)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,se.depth,de,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,pe,fe.width,fe.height,se.depth,0,fe.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?H&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,se.depth,de,Be,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,pe,fe.width,fe.height,se.depth,0,de,Be,fe.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{qe&&et&&t.texStorage2D(i.TEXTURE_2D,me,pe,ke[0].width,ke[0].height);for(let ne=0,ge=ke.length;ne<ge;ne++)fe=ke[ne],b.format!==ci?de!==null?qe?H&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,pe,fe.width,fe.height,0,fe.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?H&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,fe.width,fe.height,de,Be,fe.data):t.texImage2D(i.TEXTURE_2D,ne,pe,fe.width,fe.height,0,de,Be,fe.data)}else if(b.isDataArrayTexture)if(qe){if(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,pe,se.width,se.height,se.depth),H)if(b.layerUpdates.size>0){let ne=Vu(se.width,se.height,b.format,b.type);for(let ge of b.layerUpdates){let Se=se.data.subarray(ge*ne/se.data.BYTES_PER_ELEMENT,(ge+1)*ne/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,se.width,se.height,1,de,Be,Se)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,de,Be,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,se.width,se.height,se.depth,0,de,Be,se.data);else if(b.isData3DTexture)qe?(et&&t.texStorage3D(i.TEXTURE_3D,me,pe,se.width,se.height,se.depth),H&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,de,Be,se.data)):t.texImage3D(i.TEXTURE_3D,0,pe,se.width,se.height,se.depth,0,de,Be,se.data);else if(b.isFramebufferTexture){if(et)if(qe)t.texStorage2D(i.TEXTURE_2D,me,pe,se.width,se.height);else{let ne=se.width,ge=se.height;for(let Se=0;Se<me;Se++)t.texImage2D(i.TEXTURE_2D,Se,pe,ne,ge,0,de,Be,null),ne>>=1,ge>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),se.parentNode!==ne){ne.appendChild(se),f.add(b),ne.onpaint=ge=>{let Se=ge.changedElements;for(let ae of f)Se.includes(ae.image)&&(ae.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,se);else{let Se=i.RGBA,ae=i.RGBA,Ve=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Se,ae,Ve,se)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ke.length>0){if(qe&&et){let ne=Mt(ke[0]);t.texStorage2D(i.TEXTURE_2D,me,pe,ne.width,ne.height)}for(let ne=0,ge=ke.length;ne<ge;ne++)fe=ke[ne],qe?H&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,de,Be,fe):t.texImage2D(i.TEXTURE_2D,ne,pe,de,Be,fe);b.generateMipmaps=!1}else if(qe){if(et){let ne=Mt(se);t.texStorage2D(i.TEXTURE_2D,me,pe,ne.width,ne.height)}H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Be,se)}else t.texImage2D(i.TEXTURE_2D,0,pe,de,Be,se);m(b)&&_(Z),ue.__version=le.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Ee(I,b,G){if(b.image.length!==6)return;let Z=Ie(I,b),ee=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+G);let le=n.get(ee);if(ee.version!==le.__version||Z===!0){t.activeTexture(i.TEXTURE0+G);let ue=ct.getPrimaries(ct.workingColorSpace),te=b.colorSpace===us?null:ct.getPrimaries(b.colorSpace),se=b.colorSpace===us||ue===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let de=b.isCompressedTexture||b.image[0].isCompressedTexture,Be=b.image[0]&&b.image[0].isDataTexture,pe=[];for(let ae=0;ae<6;ae++)!de&&!Be?pe[ae]=p(b.image[ae],!0,s.maxCubemapSize):pe[ae]=Be?b.image[ae].image:b.image[ae],pe[ae]=Lt(b,pe[ae]);let fe=pe[0],ke=r.convert(b.format,b.colorSpace),qe=r.convert(b.type),et=y(b.internalFormat,ke,qe,b.normalized,b.colorSpace),H=b.isVideoTexture!==!0,me=le.__version===void 0||Z===!0,ne=ee.dataReady,ge=M(b,fe);Re(i.TEXTURE_CUBE_MAP,b);let Se;if(de){H&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,et,fe.width,fe.height);for(let ae=0;ae<6;ae++){Se=pe[ae].mipmaps;for(let Ve=0;Ve<Se.length;Ve++){let Le=Se[Ve];b.format!==ci?ke!==null?H?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,0,0,Le.width,Le.height,ke,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,et,Le.width,Le.height,0,Le.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,0,0,Le.width,Le.height,ke,qe,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,et,Le.width,Le.height,0,ke,qe,Le.data)}}}else{if(Se=b.mipmaps,H&&me){Se.length>0&&ge++;let ae=Mt(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,et,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Be){H?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,pe[ae].width,pe[ae].height,ke,qe,pe[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,et,pe[ae].width,pe[ae].height,0,ke,qe,pe[ae].data);for(let Ve=0;Ve<Se.length;Ve++){let Ft=Se[Ve].image[ae].image;H?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,0,0,Ft.width,Ft.height,ke,qe,Ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,et,Ft.width,Ft.height,0,ke,qe,Ft.data)}}else{H?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ke,qe,pe[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,et,ke,qe,pe[ae]);for(let Ve=0;Ve<Se.length;Ve++){let Le=Se[Ve];H?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,0,0,ke,qe,Le.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,et,ke,qe,Le.image[ae])}}}m(b)&&_(i.TEXTURE_CUBE_MAP),le.__version=ee.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Me(I,b,G,Z,ee,le){let ue=r.convert(G.format,G.colorSpace),te=r.convert(G.type),se=y(G.internalFormat,ue,te,G.normalized,G.colorSpace),de=n.get(b),Be=n.get(G);if(Be.__renderTarget=b,!de.__hasExternalTextures){let pe=Math.max(1,b.width>>le),fe=Math.max(1,b.height>>le);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,le,se,pe,fe,b.depth,0,ue,te,null):t.texImage2D(ee,le,se,pe,fe,0,ue,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Kt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ee,Be.__webglTexture,0,Nt(b)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ee,Be.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(I,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,I),b.depthBuffer){let Z=b.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,le=S(b.stencilBuffer,ee),ue=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Kt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt(b),le,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt(b),le,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,le,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,I)}else{let Z=b.textures;for(let ee=0;ee<Z.length;ee++){let le=Z[ee],ue=r.convert(le.format,le.colorSpace),te=r.convert(le.type),se=y(le.internalFormat,ue,te,le.normalized,le.colorSpace);Kt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt(b),se,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt(b),se,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,se,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qe(I,b,G){let Z=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=n.get(b.depthTexture);if(ee.__renderTarget=b,(!ee.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,b.depthTexture.addEventListener("dispose",w)),ee.__webglTexture===void 0){ee.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Re(i.TEXTURE_CUBE_MAP,b.depthTexture);let de=r.convert(b.depthTexture.format),Be=r.convert(b.depthTexture.type),pe;b.depthTexture.format===$n?pe=i.DEPTH_COMPONENT24:b.depthTexture.format===Hs&&(pe=i.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,pe,b.width,b.height,0,de,Be,null)}}else X(b.depthTexture,0);let le=ee.__webglTexture,ue=Nt(b),te=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,se=b.depthTexture.format===Hs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===$n)Kt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,te,le,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,se,te,le,0);else if(b.depthTexture.format===Hs)Kt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,te,le,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,se,te,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function we(I){let b=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){let Z=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){let ee=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),b.__depthDisposeCallback=ee}b.__boundDepthTexture=Z}if(I.depthTexture&&!b.__autoAllocateDepthBuffer)if(G)for(let Z=0;Z<6;Z++)Qe(b.__webglFramebuffer[Z],I,Z);else{let Z=I.texture.mipmaps;Z&&Z.length>0?Qe(b.__webglFramebuffer[0],I,0):Qe(b.__webglFramebuffer,I,0)}else if(G){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=i.createRenderbuffer(),Ze(b.__webglDepthbuffer[Z],I,!1);else{let ee=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,le)}}else{let Z=I.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Ze(b.__webglDepthbuffer,I,!1);else{let ee=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(I,b,G){let Z=n.get(I);b!==void 0&&Me(Z.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&we(I)}function Ne(I){let b=I.texture,G=n.get(I),Z=n.get(b);I.addEventListener("dispose",x);let ee=I.textures,le=I.isWebGLCubeRenderTarget===!0,ue=ee.length>1;if(ue||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=b.version,a.memory.textures++),le){G.__webglFramebuffer=[];for(let te=0;te<6;te++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[te]=[];for(let se=0;se<b.mipmaps.length;se++)G.__webglFramebuffer[te][se]=i.createFramebuffer()}else G.__webglFramebuffer[te]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let te=0;te<b.mipmaps.length;te++)G.__webglFramebuffer[te]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ue)for(let te=0,se=ee.length;te<se;te++){let de=n.get(ee[te]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&Kt(I)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let te=0;te<ee.length;te++){let se=ee[te];G.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[te]);let de=r.convert(se.format,se.colorSpace),Be=r.convert(se.type),pe=y(se.internalFormat,de,Be,se.normalized,se.colorSpace,I.isXRRenderTarget===!0),fe=Nt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,pe,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,G.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Ze(G.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Re(i.TEXTURE_CUBE_MAP,b);for(let te=0;te<6;te++)if(b.mipmaps&&b.mipmaps.length>0)for(let se=0;se<b.mipmaps.length;se++)Me(G.__webglFramebuffer[te][se],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,se);else Me(G.__webglFramebuffer[te],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);m(b)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let te=0,se=ee.length;te<se;te++){let de=ee[te],Be=n.get(de),pe=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pe=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,Be.__webglTexture),Re(pe,de),Me(G.__webglFramebuffer,I,de,i.COLOR_ATTACHMENT0+te,pe,0),m(de)&&_(pe)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(te=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,Z.__webglTexture),Re(te,b),b.mipmaps&&b.mipmaps.length>0)for(let se=0;se<b.mipmaps.length;se++)Me(G.__webglFramebuffer[se],I,b,i.COLOR_ATTACHMENT0,te,se);else Me(G.__webglFramebuffer,I,b,i.COLOR_ATTACHMENT0,te,0);m(b)&&_(te),t.unbindTexture()}I.depthBuffer&&we(I)}function Ue(I){let b=I.textures;for(let G=0,Z=b.length;G<Z;G++){let ee=b[G];if(m(ee)){let le=E(I),ue=n.get(ee).__webglTexture;t.bindTexture(le,ue),_(le),t.unbindTexture()}}}let ft=[],Gt=[];function oi(I){if(I.samples>0){if(Kt(I)===!1){let b=I.textures,G=I.width,Z=I.height,ee=i.COLOR_BUFFER_BIT,le=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(I),te=b.length>1;if(te)for(let de=0;de<b.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);let se=I.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let de=0;de<b.length;de++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);let Be=n.get(b[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Be,0)}i.blitFramebuffer(0,0,G,Z,0,0,G,Z,ee,i.NEAREST),l===!0&&(ft.length=0,Gt.length=0,ft.push(i.COLOR_ATTACHMENT0+de),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(ft.push(le),Gt.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let de=0;de<b.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);let Be=n.get(b[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let b=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Nt(I){return Math.min(s.maxSamples,I.samples)}function Kt(I){let b=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function z(I){let b=a.render.frame;u.get(I)!==b&&(u.set(I,b),I.update())}function Lt(I,b){let G=I.colorSpace,Z=I.format,ee=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==Oa&&G!==us&&(ct.getTransfer(G)===bt?(Z!==ci||ee!==dn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",G)),b}function Mt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.getTextureUnits=C,this.setTextureUnits=L,this.setTexture2D=X,this.setTexture2DArray=U,this.setTexture3D=k,this.setTextureCube=W,this.rebindTextures=Ge,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=oi,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function y1(i,e){function t(n,s=us){let r,a=ct.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===nc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Iu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cu)return i.BYTE;if(n===Pu)return i.SHORT;if(n===ta)return i.UNSIGNED_SHORT;if(n===ic)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===Qi)return i.FLOAT;if(n===zt)return i.HALF_FLOAT;if(n===Fu)return i.ALPHA;if(n===Du)return i.RGB;if(n===ci)return i.RGBA;if(n===$n)return i.DEPTH_COMPONENT;if(n===Hs)return i.DEPTH_STENCIL;if(n===Nu)return i.RED;if(n===rc)return i.RED_INTEGER;if(n===Vs)return i.RG;if(n===ac)return i.RG_INTEGER;if(n===oc)return i.RGBA_INTEGER;if(n===fo||n===po||n===mo||n===go)if(a===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lc||n===cc||n===hc||n===uc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===lc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dc||n===fc||n===pc||n===mc||n===gc||n===vo||n===vc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dc||n===fc)return a===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===mc)return r.COMPRESSED_R11_EAC;if(n===gc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===vo)return r.COMPRESSED_RG11_EAC;if(n===vc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xc||n===_c||n===yc||n===Mc||n===Sc||n===bc||n===wc||n===Tc||n===Ec||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_c)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ec)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ac)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ic)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lc||n===Fc||n===Dc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Lc)return a===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nc||n===Uc||n===xo||n===Oc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ia?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var M1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S1=`
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

}`,od=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Za(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new De({vertexShader:M1,fragmentShader:S1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new Vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ld=class extends Kn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null,v=typeof XRWebGLBinding<"u",p=new od,m={},_=t.getContextAttributes(),E=null,y=null,S=[],M=[],w=new ye,x=null,A=null,R=new gi;R.viewport=new We;let P=new gi;P.viewport=new We;let F=[R,P],N=new Zl,C=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ie=S[Q];return ie===void 0&&(ie=new Kr,S[Q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Q){let ie=S[Q];return ie===void 0&&(ie=new Kr,S[Q]=ie),ie.getGripSpace()},this.getHand=function(Q){let ie=S[Q];return ie===void 0&&(ie=new Kr,S[Q]=ie),ie.getHandSpace()};function B(Q){let ie=M.indexOf(Q.inputSource);if(ie===-1)return;let ce=S[ie];ce!==void 0&&(ce.update(Q.inputSource,Q.frame,c||a),ce.dispatchEvent({type:Q.type,data:Q.inputSource}))}function V(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",X);for(let Q=0;Q<S.length;Q++){let ie=M[Q];ie!==null&&(M[Q]=null,S[Q].disconnect(ie))}C=null,L=null,p.reset();for(let Q in m)delete m[Q];if(e.setRenderTarget(E),d=null,h=null,f=null,s=null,y=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),A!==null){let Q=A.camera;Q.fov=A.fov,Q.zoom=A.zoom,Q.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",V),s.addEventListener("inputsourceschange",X),_.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Ee=null,Me=null;_.depth&&(Me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=_.stencil?Hs:$n,Ee=_.stencil?ia:On);let Ze={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ze),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Ut(h.textureWidth,h.textureHeight,{format:ci,type:dn,depthTexture:new Ds(h.textureWidth,h.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ce={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Ut(d.framebufferWidth,d.framebufferHeight,{format:ci,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ie.setContext(s),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function X(Q){for(let ie=0;ie<Q.removed.length;ie++){let ce=Q.removed[ie],Ee=M.indexOf(ce);Ee>=0&&(M[Ee]=null,S[Ee].disconnect(ce))}for(let ie=0;ie<Q.added.length;ie++){let ce=Q.added[ie],Ee=M.indexOf(ce);if(Ee===-1){for(let Ze=0;Ze<S.length;Ze++)if(Ze>=M.length){M.push(ce),Ee=Ze;break}else if(M[Ze]===null){M[Ze]=ce,Ee=Ze;break}if(Ee===-1)break}let Me=S[Ee];Me&&Me.connect(ce)}}let U=new D,k=new D;function W(Q,ie,ce){U.setFromMatrixPosition(ie.matrixWorld),k.setFromMatrixPosition(ce.matrixWorld);let Ee=U.distanceTo(k),Me=ie.projectionMatrix.elements,Ze=ce.projectionMatrix.elements,Qe=Me[14]/(Me[10]-1),we=Me[14]/(Me[10]+1),Ge=(Me[9]+1)/Me[5],Ne=(Me[9]-1)/Me[5],Ue=(Me[8]-1)/Me[0],ft=(Ze[8]+1)/Ze[0],Gt=Qe*Ue,oi=Qe*ft,Nt=Ee/(-Ue+ft),Kt=Nt*-Ue;if(ie.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Kt),Q.translateZ(Nt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Me[10]===-1)Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let z=Qe+Nt,Lt=we+Nt,Mt=Gt-Kt,I=oi+(Ee-Kt),b=Ge*we/Lt*z,G=Ne*we/Lt*z;Q.projectionMatrix.makePerspective(Mt,I,b,G,z,Lt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function J(Q,ie){ie===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ie.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ie=Q.near,ce=Q.far;p.texture!==null&&(p.depthNear>0&&(ie=p.depthNear),p.depthFar>0&&(ce=p.depthFar)),N.near=P.near=R.near=ie,N.far=P.far=R.far=ce,(C!==N.near||L!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),C=N.near,L=N.far),N.layers.mask=Q.layers.mask|6,R.layers.mask=N.layers.mask&-5,P.layers.mask=N.layers.mask&-3;let Ee=Q.parent,Me=N.cameras;J(N,Ee);for(let Ze=0;Ze<Me.length;Ze++)J(Me[Ze],Ee);Me.length===2?W(N,R,P):N.projectionMatrix.copy(R.projectionMatrix),A===null&&Q.isPerspectiveCamera&&(A={camera:Q,fov:Q.fov,zoom:Q.zoom}),j(Q,N,Ee)};function j(Q,ie,ce){ce===null?Q.matrix.copy(ie.matrixWorld):(Q.matrix.copy(ce.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ie.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Yr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(Q){return m[Q]};let Ae=null;function Re(Q,ie){if(u=ie.getViewerPose(c||a),g=ie,u!==null){let ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Ee=!1;ce.length!==N.cameras.length&&(N.cameras.length=0,Ee=!0);for(let we=0;we<ce.length;we++){let Ge=ce[we],Ne=null;if(d!==null)Ne=d.getViewport(Ge);else{let ft=f.getViewSubImage(h,Ge);Ne=ft.viewport,we===0&&(e.setRenderTargetTextures(y,ft.colorTexture,ft.depthStencilTexture),e.setRenderTarget(y))}let Ue=F[we];Ue===void 0&&(Ue=new gi,Ue.layers.enable(we),Ue.viewport=new We,F[we]=Ue),Ue.matrix.fromArray(Ge.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Ge.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),we===0&&(N.matrix.copy(Ue.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ee===!0&&N.cameras.push(Ue)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let we=f.getDepthInformation(ce[0]);we&&we.isValid&&we.texture&&p.init(we,s.renderState)}if(Me&&Me.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let we=0;we<ce.length;we++){let Ge=ce[we].camera;if(Ge){let Ne=m[Ge];Ne||(Ne=new Za,m[Ge]=Ne);let Ue=f.getCameraImage(Ge);Ne.sourceTexture=Ue}}}}for(let ce=0;ce<S.length;ce++){let Ee=M[ce],Me=S[ce];Ee!==null&&Me!==void 0&&Me.update(Ee,ie,c||a)}Ae&&Ae(Q,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}let Ie=new Up;Ie.setAnimationLoop(Re),this.setAnimationLoop=function(Q){Ae=Q},this.dispose=function(){}}},b1=new Ct,Vp=new tt;Vp.set(-1,0,0,0,1,0,0,0,1);function w1(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ku(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,_,E,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,_,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Gi&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Gi&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=e.get(m),E=_.envMap,y=_.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(b1.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Vp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=E*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Gi&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let _=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function T1(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let M=S.program;n.uniformBlockBinding(y,M)}function c(y,S){let M=s[y.id];M===void 0&&(p(y),M=u(y),s[y.id]=M,y.addEventListener("dispose",_));let w=S.program;n.updateUBOMapping(y,w);let x=e.render.frame;r[y.id]!==x&&(h(y),r[y.id]=x)}function u(y){let S=f();y.__bindingPointIndex=S;let M=i.createBuffer(),w=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let S=s[y.id],M=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let x=0,A=M.length;x<A;x++){let R=M[x];if(Array.isArray(R))for(let P=0,F=R.length;P<F;P++)d(R[P],x,P,w);else d(R,x,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,S,M,w){if(v(y,S,M,w)===!0){let x=y.__offset,A=y.value;if(Array.isArray(A)){let R=0;for(let P=0;P<A.length;P++){let F=A[P],N=m(F);g(F,y.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function g(y,S,M){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,M)}function v(y,S,M,w){let x=y.value,A=S+"_"+M;if(w[A]===void 0)return typeof x=="number"||typeof x=="boolean"?w[A]=x:ArrayBuffer.isView(x)?w[A]=x.slice():w[A]=x.clone(),!0;{let R=w[A];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return w[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function p(y){let S=y.uniforms,M=0,w=16;for(let A=0,R=S.length;A<R;A++){let P=Array.isArray(S[A])?S[A]:[S[A]];for(let F=0,N=P.length;F<N;F++){let C=P[F],L=Array.isArray(C.value)?C.value:[C.value];for(let B=0,V=L.length;B<V;B++){let X=L[B],U=m(X),k=M%w,W=k%U.boundary,J=k+W;M+=W,J!==0&&w-J<U.storage&&(M+=w-J),C.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=M,M+=U.storage}}}let x=M%w;return x>0&&(M+=w-x),y.__size=M,y.__cache={},this}function m(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",y),S}function _(y){let S=y.target;S.removeEventListener("dispose",_);let M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function E(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}var E1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Jn=null;function A1(){return Jn===null&&(Jn=new Fs(E1,16,16,Vs,zt),Jn.name="DFG_LUT",Jn.minFilter=qt,Jn.magFilter=qt,Jn.wrapS=Hi,Jn.wrapT=Hi,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}var Wc=class{constructor(e={}){let{canvas:t=lp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=dn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=d,p=new Set([oc,ac,rc]),m=new Set([dn,On,ta,ia,nc,sc]),_=new Uint32Array(4),E=new Int32Array(4),y=new D,S=null,M=null,w=[],x=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,F=null,N=null,C=null,L=null;this._outputColorSpace=ri;let B=0,V=0,X=null,U=-1,k=null,W=new We,J=new We,j=null,Ae=new je(0),Re=0,Ie=t.width,Q=t.height,ie=1,ce=null,Ee=null,Me=new We(0,0,Ie,Q),Ze=new We(0,0,Ie,Q),Qe=!1,we=new Ya,Ge=!1,Ne=!1,Ue=new Ct,ft=new D,Gt=new We,oi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Nt=!1;function Kt(){return X===null?ie:1}let z=n;function Lt(T,O){return t.getContext(T,O)}let Mt,I,b,G,Z,ee,le,ue,te,se,de,Be,pe,fe,ke,qe,et,H,me,ne,ge,Se,ae;try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ft,!1),t.addEventListener("webglcontextrestored",St,!1),t.addEventListener("webglcontextcreationerror",rn,!1),z===null){let O="webgl2";if(z=Lt(O,T),z===null)throw Lt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(T){throw t.removeEventListener("webglcontextlost",Ft,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),Ke("WebGLRenderer: "+T.message),T}function Ve(){Mt=new D_(z),Mt.init(),ge=new y1(z,Mt),I=new w_(z,Mt,e,ge),b=new x1(z,Mt),I.reversedDepthBuffer&&h&&b.buffers.depth.setReversed(!0),N=z.createFramebuffer(),C=z.createFramebuffer(),L=z.createFramebuffer(),G=new O_(z),Z=new s1,ee=new _1(z,Mt,b,Z,I,ge,G),le=new F_(R),ue=new kg(z),Se=new S_(z,ue),te=new N_(z,ue,G,Se),se=new k_(z,te,ue,Se,G),H=new B_(z,I,ee),ke=new T_(Z),de=new n1(R,le,Mt,I,Se,ke),Be=new w1(R,Z),pe=new a1,fe=new d1(Mt),et=new M_(R,le,b,se,g,l),qe=new v1(R,se,I),ae=new T1(z,G,I,b),me=new b_(z,Mt,G),ne=new U_(z,Mt,G),G.programs=de.programs,R.capabilities=I,R.extensions=Mt,R.properties=Z,R.renderLists=pe,R.shadowMap=qe,R.state=b,R.info=G}v!==dn&&(A=new H_(v,t.width,t.height,o,s,r));let Le=new ld(R,z);this.xr=Le,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let T=Mt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Mt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(T){T!==void 0&&(ie=T,this.setSize(Ie,Q,!1))},this.getSize=function(T){return T.set(Ie,Q)},this.setSize=function(T,O,$=!0){if(Le.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=T,Q=O,t.width=Math.floor(T*ie),t.height=Math.floor(O*ie),$===!0&&(t.style.width=T+"px",t.style.height=O+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(Ie*ie,Q*ie).floor()},this.setDrawingBufferSize=function(T,O,$){Ie=T,Q=O,ie=$,t.width=Math.floor(T*$),t.height=Math.floor(O*$),this.setViewport(0,0,T,O)},this.setEffects=function(T){if(v===dn){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let O=0;O<T.length;O++)if(T[O].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(W)},this.getViewport=function(T){return T.copy(Me)},this.setViewport=function(T,O,$,q){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,O,$,q),b.viewport(W.copy(Me).multiplyScalar(ie).round())},this.getScissor=function(T){return T.copy(Ze)},this.setScissor=function(T,O,$,q){T.isVector4?Ze.set(T.x,T.y,T.z,T.w):Ze.set(T,O,$,q),b.scissor(J.copy(Ze).multiplyScalar(ie).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(T){b.setScissorTest(Qe=T)},this.setOpaqueSort=function(T){ce=T},this.setTransparentSort=function(T){Ee=T},this.getClearColor=function(T){return T.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,$=!0){let q=0;if(T){let Y=!1;if(X!==null){let he=X.texture.format;Y=p.has(he)}if(Y){let he=X.texture.type,_e=m.has(he),ve=et.getClearColor(),Ce=et.getClearAlpha(),Fe=ve.r,it=ve.g,Te=ve.b;_e?(_[0]=Fe,_[1]=it,_[2]=Te,_[3]=Ce,z.clearBufferuiv(z.COLOR,0,_)):(E[0]=Fe,E[1]=it,E[2]=Te,E[3]=Ce,z.clearBufferiv(z.COLOR,0,E))}else q|=z.COLOR_BUFFER_BIT}O&&(q|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),F=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ft,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),et.dispose(),pe.dispose(),fe.dispose(),Z.dispose(),le.dispose(),se.dispose(),Se.dispose(),ae.dispose(),de.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",pt),Le.removeEventListener("sessionend",At),mt.stop()};function Ft(T){T.preventDefault(),Ou("WebGLRenderer: Context Lost."),P=!0}function St(){Ou("WebGLRenderer: Context Restored."),P=!1;let T=G.autoReset,O=qe.enabled,$=qe.autoUpdate,q=qe.needsUpdate,Y=qe.type;Ve(),G.autoReset=T,qe.enabled=O,qe.autoUpdate=$,qe.needsUpdate=q,qe.type=Y}function rn(T){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function an(T){let O=T.target;O.removeEventListener("dispose",an),$h(O)}function $h(T){re(T),Z.remove(T)}function re(T){let O=Z.get(T).programs;O!==void 0&&(O.forEach(function($){de.releaseProgram($)}),T.isShaderMaterial&&de.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,$,q,Y,he){O===null&&(O=oi);let _e=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,ve=ki(T,O,$,q,Y);b.setMaterial(q,_e);let Ce=$.index,Fe=1;if(q.wireframe===!0){if(Ce=te.getWireframeAttribute($),Ce===void 0)return;Fe=2}let it=$.drawRange,Te=$.attributes.position,Pe=it.start*Fe,lt=(it.start+it.count)*Fe;he!==null&&(Pe=Math.max(Pe,he.start*Fe),lt=Math.min(lt,(he.start+he.count)*Fe)),Ce!==null?(Pe=Math.max(Pe,0),lt=Math.min(lt,Ce.count)):Te!=null&&(Pe=Math.max(Pe,0),lt=Math.min(lt,Te.count));let Dt=lt-Pe;if(Dt<0||Dt===1/0)return;Se.setup(Y,q,ve,$,Ce);let _t,Tt=me;if(Ce!==null&&(_t=ue.get(Ce),Tt=ne,Tt.setIndex(_t)),Y.isMesh)q.wireframe===!0?(b.setLineWidth(q.wireframeLinewidth*Kt()),Tt.setMode(z.LINES)):Tt.setMode(z.TRIANGLES);else if(Y.isLine){let Zt=q.linewidth;Zt===void 0&&(Zt=1),b.setLineWidth(Zt*Kt()),Y.isLineSegments?Tt.setMode(z.LINES):Y.isLineLoop?Tt.setMode(z.LINE_LOOP):Tt.setMode(z.LINE_STRIP)}else Y.isPoints?Tt.setMode(z.POINTS):Y.isSprite&&Tt.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(Mt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Zt=Y._multiDrawStarts,be=Y._multiDrawCounts,Qt=Y._multiDrawCount,ht=Ce?ue.get(Ce).bytesPerElement:1,Ii=Z.get(q).currentProgram.getUniforms();for(let on=0;on<Qt;on++)Ii.setValue(z,"_gl_DrawID",on),Tt.render(Zt[on]/ht,be[on])}else if(Y.isInstancedMesh)Tt.renderInstances(Pe,Dt,Y.count);else if($.isInstancedBufferGeometry){let Zt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,be=Math.min($.instanceCount,Zt);Tt.renderInstances(Pe,Dt,be)}else Tt.render(Pe,Dt)};function ze(T,O,$,q){F!==null&&T.isNodeMaterial&&F.setObject(q,T),Ge===!0&&ke.setState(T,$,!1),T.transparent===!0&&T.side===wi&&T.forceSinglePass===!1?(T.side=Gi,T.needsUpdate=!0,ni(T,O,q),T.side=Bs,T.needsUpdate=!0,ni(T,O,q),T.side=wi):ni(T,O,q)}this.compile=function(T,O,$=null){$===null&&($=T),F!==null&&F.renderStart(T,O,$),M=fe.get($),M.init(O),x.push(M),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(O.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),T!==$&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(O.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),M.setupLights(),F!==null&&F.updateLights(M.state.lightsArray),Ne=this.localClippingEnabled,Ge=ke.init(this.clippingPlanes,Ne),Ge===!0&&ke.setGlobalState(this.clippingPlanes,O),F!==null&&qe.render(M.state.shadowsArray,$,O);let q=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let he=Y.material;if(he)if(Array.isArray(he))for(let _e=0;_e<he.length;_e++){let ve=he[_e];ze(ve,$,O,Y),q.add(ve)}else ze(he,$,O,Y),q.add(he)}),M=x.pop(),F!==null&&F.renderEnd(),q},this.compileAsync=function(T,O,$=null){let q=this.compile(T,O,$);return new Promise(Y=>{function he(){if(q.forEach(function(_e){let Ce=Z.get(_e).currentProgram;(Ce===void 0||Ce.isReady())&&q.delete(_e)}),q.size===0){Y(T);return}setTimeout(he,10)}Mt.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Oe=null;function gt(T){Oe&&Oe(T)}function pt(){mt.stop()}function At(){mt.start()}let mt=new Up;mt.setAnimationLoop(gt),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(T){Oe=T,Le.setAnimationLoop(T),T===null?mt.stop():mt.start()},Le.addEventListener("sessionstart",pt),Le.addEventListener("sessionend",At),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(T,O);let $=Le.enabled===!0&&Le.isPresenting===!0,q=A!==null&&(X===null||$)&&A.begin(R,X);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(O),O=Le.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,O,X),M=fe.get(T,x.length),M.init(O),M.state.textureUnits=ee.getTextureUnits(),x.push(M),Ue.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),we.setFromProjectionMatrix(Ue,Fn,O.reversedDepth),Ne=this.localClippingEnabled,Ge=ke.init(this.clippingPlanes,Ne),S=pe.get(T,w.length),S.init(),w.push(S),Le.enabled===!0&&Le.isPresenting===!0){let _e=R.xr.getDepthSensingMesh();_e!==null&&Ot(_e,O,-1/0,R.sortObjects)}Ot(T,O,0,R.sortObjects),S.finish(),F!==null&&F.updateLights(M.state.lightsArray),R.sortObjects===!0&&S.sort(ce,Ee),Nt=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,Nt&&et.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ge===!0&&ke.beginShadows();let Y=M.state.shadowsArray;if(qe.render(Y,T,O),Ge===!0&&ke.endShadows(),(q&&A.hasRenderPass())===!1){let _e=S.opaque,ve=S.transmissive;if(M.setupLights(),O.isArrayCamera){let Ce=O.cameras;if(ve.length>0)for(let Fe=0,it=Ce.length;Fe<it;Fe++){let Te=Ce[Fe];Ki(_e,ve,T,Te)}Nt&&et.render(T);for(let Fe=0,it=Ce.length;Fe<it;Fe++){let Te=Ce[Fe];es(S,T,Te,Te.viewport)}}else ve.length>0&&Ki(_e,ve,T,O),Nt&&et.render(T),es(S,T,O)}X!==null&&V===0&&(ee.updateMultisampleRenderTarget(X),ee.updateRenderTargetMipmap(X)),q&&A.end(R),T.isScene===!0&&T.onAfterRender(R,T,O),Se.resetDefaultState(),U=-1,k=null,x.pop(),x.length>0?(M=x[x.length-1],ee.setTextureUnits(M.state.textureUnits),Ge===!0&&ke.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,F!==null&&F.renderEnd()};function Ot(T,O,$,q){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLightProbeGrid)M.pushLightProbeGrid(T);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(we)){q&&Gt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ue);let _e=se.update(T),ve=T.material;ve.visible&&S.push(T,_e,ve,$,Gt.z,null,O)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(we))){let _e=se.update(T),ve=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Gt.copy(T.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Gt.copy(_e.boundingSphere.center)),Gt.applyMatrix4(T.matrixWorld).applyMatrix4(Ue)),Array.isArray(ve)){let Ce=_e.groups;for(let Fe=0,it=Ce.length;Fe<it;Fe++){let Te=Ce[Fe],Pe=ve[Te.materialIndex];Pe&&Pe.visible&&S.push(T,_e,Pe,$,Gt.z,Te,O)}}else ve.visible&&S.push(T,_e,ve,$,Gt.z,null,O)}}let he=T.children;for(let _e=0,ve=he.length;_e<ve;_e++)Ot(he[_e],O,$,q)}function es(T,O,$,q){let{opaque:Y,transmissive:he,transparent:_e}=T;M.setupLightsView($),Ge===!0&&ke.setGlobalState(R.clippingPlanes,$),q&&b.viewport(W.copy(q)),Y.length>0&&Wt(Y,O,$),he.length>0&&Wt(he,O,$),_e.length>0&&Wt(_e,O,$),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Ki(T,O,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[q.id]===void 0){let Pe=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[q.id]=new Ut(1,1,{generateMipmaps:!0,type:Pe?zt:dn,minFilter:zs,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let he=M.state.transmissionRenderTarget[q.id],_e=q.viewport||W;he.setSize(_e.z*R.transmissionResolutionScale,_e.w*R.transmissionResolutionScale);let ve=R.getRenderTarget(),Ce=R.getActiveCubeFace(),Fe=R.getActiveMipmapLevel();R.setRenderTarget(he),R.getClearColor(Ae),Re=R.getClearAlpha(),Re<1&&R.setClearColor(16777215,.5),R.clear(),Nt&&et.render($);let it=R.toneMapping;R.toneMapping=li;let Te=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),M.setupLightsView(q),Ge===!0&&ke.setGlobalState(R.clippingPlanes,q),Wt(T,$,q),ee.updateMultisampleRenderTarget(he),ee.updateRenderTargetMipmap(he),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let lt=0,Dt=O.length;lt<Dt;lt++){let _t=O[lt],{object:Tt,geometry:Zt,material:be,group:Qt}=_t;if(be.side===wi&&Tt.layers.test(q.layers)){let ht=be.side;be.side=Gi,be.needsUpdate=!0,Bi(Tt,$,q,Zt,be,Qt),be.side=ht,be.needsUpdate=!0,Pe=!0}}Pe===!0&&(ee.updateMultisampleRenderTarget(he),ee.updateRenderTargetMipmap(he))}R.setRenderTarget(ve,Ce,Fe),R.setClearColor(Ae,Re),Te!==void 0&&(q.viewport=Te),R.toneMapping=it}function Wt(T,O,$){let q=O.isScene===!0?O.overrideMaterial:null;for(let Y=0,he=T.length;Y<he;Y++){let _e=T[Y],{object:ve,geometry:Ce,group:Fe}=_e,it=_e.material;it.allowOverride===!0&&q!==null&&(it=q),ve.layers.test($.layers)&&Bi(ve,O,$,Ce,it,Fe)}}function Bi(T,O,$,q,Y,he){F!==null&&Y.isNodeMaterial&&F.setObject(T,Y),T.onBeforeRender(R,O,$,q,Y,he),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(R,O,$,q,T,he),Y.transparent===!0&&Y.side===wi&&Y.forceSinglePass===!1?(Y.side=Gi,Y.needsUpdate=!0,R.renderBufferDirect($,O,q,Y,T,he),Y.side=Bs,Y.needsUpdate=!0,R.renderBufferDirect($,O,q,Y,T,he),Y.side=wi):R.renderBufferDirect($,O,q,Y,T,he),T.onAfterRender(R,O,$,q,Y,he)}function ni(T,O,$){O.isScene!==!0&&(O=oi);let q=Z.get(T),Y=M.state.lights,he=M.state.shadowsArray,_e=Y.state.version,ve=de.getParameters(T,Y.state,he,O,$,M.state.lightProbeGridArray),Ce=de.getProgramCacheKey(ve),Fe=q.programs;q.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,q.fog=O.fog;let it=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;q.envMap=le.get(T.envMap||q.environment,it),q.envMapRotation=q.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Fe===void 0&&(T.addEventListener("dispose",an),Fe=new Map,q.programs=Fe);let Te=Fe.get(Ce);if(Te!==void 0){if(q.currentProgram===Te&&q.lightsStateVersion===_e)return Rn(T,ve),Te}else ve.uniforms=de.getUniforms(T),F!==null&&T.isNodeMaterial&&F.build(T,$,ve),T.onBeforeCompile(ve,R),Te=de.acquireProgram(ve,Ce),Fe.set(Ce,Te),q.uniforms=ve.uniforms;let Pe=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=ke.uniform),Rn(T,ve),q.needsLights=jt(T),q.lightsStateVersion=_e,q.needsLights&&(Pe.ambientLightColor.value=Y.state.ambient,Pe.lightProbe.value=Y.state.probe,Pe.sunLights.value=Y.state.sun,Pe.sunLightShadows.value=Y.state.sunShadow,Pe.directionalLights.value=Y.state.directional,Pe.directionalLightShadows.value=Y.state.directionalShadow,Pe.spotLights.value=Y.state.spot,Pe.spotLightShadows.value=Y.state.spotShadow,Pe.rectAreaLights.value=Y.state.rectArea,Pe.ltc_1.value=Y.state.rectAreaLTC1,Pe.ltc_2.value=Y.state.rectAreaLTC2,Pe.pointLights.value=Y.state.point,Pe.pointLightShadows.value=Y.state.pointShadow,Pe.hemisphereLights.value=Y.state.hemi,Pe.sunShadowMatrix.value=Y.state.sunShadowMatrix,Pe.sunShadowCascade.value=Y.state.sunShadowCascade,Pe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Pe.spotLightMatrix.value=Y.state.spotLightMatrix,Pe.spotLightMap.value=Y.state.spotLightMap,Pe.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=M.state.lightProbeGridArray.length>0,q.currentProgram=Te,q.uniformsList=null,Te}function It(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=aa.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Rn(T,O){let $=Z.get(T);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function Mi(T,O){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;y.setFromMatrixPosition(O.matrixWorld);for(let $=0,q=T.length;$<q;$++){let Y=T[$];if(Y.texture!==null&&Y.boundingBox.containsPoint(y))return Y}return null}function ki(T,O,$,q,Y){O.isScene!==!0&&(O=oi),ee.resetTextureUnits();let he=O.fog,_e=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?O.environment:null,ve=X===null?R.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ct.workingColorSpace,Ce=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Fe=le.get(q.envMap||_e,Ce),it=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Te=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Pe=!!$.morphAttributes.position,lt=!!$.morphAttributes.normal,Dt=!!$.morphAttributes.color,_t=li;q.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(_t=R.toneMapping);let Tt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Zt=Tt!==void 0?Tt.length:0,be=Z.get(q),Qt=M.state.lights;if(Ge===!0&&(Ne===!0||T!==k)){let Rt=T===k&&q.id===U;ke.setState(q,T,Rt)}let ht=!1;q.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Qt.state.version||be.outputColorSpace!==ve||Y.isBatchedMesh&&be.batching===!1||!Y.isBatchedMesh&&be.batching===!0||Y.isBatchedMesh&&be.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&be.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&be.instancing===!1||!Y.isInstancedMesh&&be.instancing===!0||Y.isSkinnedMesh&&be.skinning===!1||!Y.isSkinnedMesh&&be.skinning===!0||Y.isInstancedMesh&&be.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&be.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&be.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&be.instancingMorph===!1&&Y.morphTexture!==null||be.envMap!==Fe||q.fog===!0&&be.fog!==he||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ke.numPlanes||be.numIntersection!==ke.numIntersection)||be.vertexAlphas!==it||be.vertexTangents!==Te||be.morphTargets!==Pe||be.morphNormals!==lt||be.morphColors!==Dt||be.toneMapping!==_t||be.morphTargetsCount!==Zt||!!be.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,be.__version=q.version);let Ii=be.currentProgram;ht===!0&&(Ii=ni(q,O,Y),F&&q.isNodeMaterial&&F.onUpdateProgram(q,Ii,be));let on=!1,gn=!1,ts=!1,yt=Ii.getUniforms(),Bt=be.uniforms;if(b.useProgram(Ii.program)&&(on=!0,gn=!0,ts=!0),q.id!==U&&(U=q.id,gn=!0),be.needsLights){let Rt=Mi(M.state.lightProbeGridArray,Y);be.lightProbeGrid!==Rt&&(be.lightProbeGrid=Rt,gn=!0)}if(on||k!==T){b.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),yt.setValue(z,"projectionMatrix",T.projectionMatrix),yt.setValue(z,"viewMatrix",T.matrixWorldInverse);let xn=yt.map.cameraPosition;xn!==void 0&&xn.setValue(z,ft.setFromMatrixPosition(T.matrixWorld)),I.logarithmicDepthBuffer&&yt.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&yt.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),k!==T&&(k=T,gn=!0,ts=!0)}if(be.needsLights&&(Qt.state.sunShadowMap.length>0&&yt.setValue(z,"sunShadowMap",Qt.state.sunShadowMap,ee),Qt.state.directionalShadowMap.length>0&&yt.setValue(z,"directionalShadowMap",Qt.state.directionalShadowMap,ee),Qt.state.spotShadowMap.length>0&&yt.setValue(z,"spotShadowMap",Qt.state.spotShadowMap,ee),Qt.state.pointShadowMap.length>0&&yt.setValue(z,"pointShadowMap",Qt.state.pointShadowMap,ee)),Y.isSkinnedMesh){yt.setOptional(z,Y,"bindMatrix"),yt.setOptional(z,Y,"bindMatrixInverse");let Rt=Y.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),yt.setValue(z,"boneTexture",Rt.boneTexture,ee))}Y.isBatchedMesh&&(yt.setOptional(z,Y,"batchingTexture"),yt.setValue(z,"batchingTexture",Y._matricesTexture,ee),yt.setOptional(z,Y,"batchingIdTexture"),yt.setValue(z,"batchingIdTexture",Y._indirectTexture,ee),yt.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&yt.setValue(z,"batchingColorTexture",Y._colorsTexture,ee));let vn=$.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&H.update(Y,$,Ii),(gn||be.receiveShadow!==Y.receiveShadow)&&(be.receiveShadow=Y.receiveShadow,yt.setValue(z,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&O.environment!==null&&(Bt.envMapIntensity.value=O.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=A1()),gn){if(yt.setValue(z,"toneMappingExposure",R.toneMappingExposure),be.needsLights&&Si(Bt,ts),he&&q.fog===!0&&Be.refreshFogUniforms(Bt,he),Be.refreshMaterialUniforms(Bt,q,ie,Q,M.state.transmissionRenderTarget[T.id]),be.needsLights&&be.lightProbeGrid){let Rt=be.lightProbeGrid;Bt.probesSH.value=Rt.texture,Bt.probesMin.value.copy(Rt.boundingBox.min),Bt.probesMax.value.copy(Rt.boundingBox.max),Bt.probesResolution.value.copy(Rt.resolution)}aa.upload(z,It(be),Bt,ee)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(aa.upload(z,It(be),Bt,ee),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&yt.setValue(z,"center",Y.center),yt.setValue(z,"modelViewMatrix",Y.modelViewMatrix),yt.setValue(z,"normalMatrix",Y.normalMatrix),yt.setValue(z,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let Rt=q.uniformsGroups;for(let xn=0,Rr=Rt.length;xn<Rr;xn++){let sf=Rt[xn];ae.update(sf,Ii),ae.bind(sf,Ii)}}return Ii}function Si(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.sunLights.needsUpdate=O,T.sunLightShadows.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function jt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(T,O,$){let q=Z.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Z.get(T.texture).__webglTexture=O,Z.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){let $=Z.get(T);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,$=0){X=T,B=O,V=$;let q=null,Y=!1,he=!1;if(T){let ve=Z.get(T);if(ve.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(z.FRAMEBUFFER,ve.__webglFramebuffer),W.copy(T.viewport),J.copy(T.scissor),j=T.scissorTest,b.viewport(W),b.scissor(J),b.setScissorTest(j),U=-1;return}else if(ve.__webglFramebuffer===void 0)ee.setupRenderTarget(T);else if(ve.__hasExternalTextures)ee.rebindTextures(T,Z.get(T.texture).__webglTexture,Z.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let it=T.depthTexture;if(ve.__boundDepthTexture!==it){if(it!==null&&Z.has(it)&&(T.width!==it.image.width||T.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(T)}}let Ce=T.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(he=!0);let Fe=Z.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[O])?q=Fe[O][$]:q=Fe[O],Y=!0):T.samples>0&&ee.useMultisampledRTT(T)===!1?q=Z.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?q=Fe[$]:q=Fe,W.copy(T.viewport),J.copy(T.scissor),j=T.scissorTest}else W.copy(Me).multiplyScalar(ie).floor(),J.copy(Ze).multiplyScalar(ie).floor(),j=Qe;if($!==0&&(q=N),b.bindFramebuffer(z.FRAMEBUFFER,q)&&b.drawBuffers(T,q),b.viewport(W),b.scissor(J),b.setScissorTest(j),Y){let ve=Z.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,ve.__webglTexture,$)}else if(he){let ve=O;for(let Ce=0;Ce<T.textures.length;Ce++){let Fe=Z.get(T.textures[Ce]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ce,Fe.__webglTexture,$,ve)}}else if(T!==null&&$!==0){let ve=Z.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ve.__webglTexture,$)}U=-1};function pi(T){let O=Z.get(T);return(O.__readFormat!==T.format||O.__readType!==T.type)&&(O.__readFormat=T.format,O.__readType=T.type,O.__formatReadable=I.textureFormatReadable(T.format),O.__typeReadable=I.textureTypeReadable(T.type)),O}this.readRenderTargetPixels=function(T,O,$,q,Y,he,_e,ve=0){if(!(T&&T.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Ce=Ce[_e]),Ce){b.bindFramebuffer(z.FRAMEBUFFER,Ce);try{let Fe=T.textures[ve],it=Fe.format,Te=Fe.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ve);let Pe=pi(Fe);if(Pe.__formatReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-q&&$>=0&&$<=T.height-Y&&z.readPixels(O,$,q,Y,ge.convert(it),ge.convert(Te),he)}finally{let Fe=X!==null?Z.get(X).__webglFramebuffer:null;b.bindFramebuffer(z.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(T,O,$,q,Y,he,_e,ve=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Ce=Ce[_e]),Ce)if(O>=0&&O<=T.width-q&&$>=0&&$<=T.height-Y){b.bindFramebuffer(z.FRAMEBUFFER,Ce);let Fe=T.textures[ve],it=Fe.format,Te=Fe.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ve);let Pe=pi(Fe);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let lt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,lt),z.bufferData(z.PIXEL_PACK_BUFFER,he.byteLength,z.STREAM_READ),z.readPixels(O,$,q,Y,ge.convert(it),ge.convert(Te),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Dt=X!==null?Z.get(X).__webglFramebuffer:null;b.bindFramebuffer(z.FRAMEBUFFER,Dt);let _t=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await hp(z,_t,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,lt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,he),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(lt),z.deleteSync(_t),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,$=0){let q=Math.pow(2,-$),Y=Math.floor(T.image.width*q),he=Math.floor(T.image.height*q),_e=O!==null?O.x:0,ve=O!==null?O.y:0;ee.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,_e,ve,Y,he),b.unbindTexture()},this.copyTextureToTexture=function(T,O,$=null,q=null,Y=0,he=0){let _e,ve,Ce,Fe,it,Te,Pe,lt,Dt,_t=T.isCompressedTexture?T.mipmaps[he]:T.image;if($!==null)_e=$.max.x-$.min.x,ve=$.max.y-$.min.y,Ce=$.isBox3?$.max.z-$.min.z:1,Fe=$.min.x,it=$.min.y,Te=$.isBox3?$.min.z:0;else{let Bt=Math.pow(2,-Y);_e=Math.floor(_t.width*Bt),ve=Math.floor(_t.height*Bt),T.isDataArrayTexture?Ce=_t.depth:T.isData3DTexture?Ce=Math.floor(_t.depth*Bt):Ce=1,Fe=0,it=0,Te=0}q!==null?(Pe=q.x,lt=q.y,Dt=q.z):(Pe=0,lt=0,Dt=0);let Tt=ge.convert(O.format),Zt=ge.convert(O.type),be;O.isData3DTexture?(ee.setTexture3D(O,0),be=z.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ee.setTexture2DArray(O,0),be=z.TEXTURE_2D_ARRAY):(ee.setTexture2D(O,0),be=z.TEXTURE_2D),b.activeTexture(z.TEXTURE0),b.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,O.flipY),b.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),b.pixelStorei(z.UNPACK_ALIGNMENT,O.unpackAlignment);let Qt=b.getParameter(z.UNPACK_ROW_LENGTH),ht=b.getParameter(z.UNPACK_IMAGE_HEIGHT),Ii=b.getParameter(z.UNPACK_SKIP_PIXELS),on=b.getParameter(z.UNPACK_SKIP_ROWS),gn=b.getParameter(z.UNPACK_SKIP_IMAGES);b.pixelStorei(z.UNPACK_ROW_LENGTH,_t.width),b.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_t.height),b.pixelStorei(z.UNPACK_SKIP_PIXELS,Fe),b.pixelStorei(z.UNPACK_SKIP_ROWS,it),b.pixelStorei(z.UNPACK_SKIP_IMAGES,Te);let ts=T.isDataArrayTexture||T.isData3DTexture,yt=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){let Bt=Z.get(T),vn=Z.get(O),Rt=Z.get(Bt.__renderTarget),xn=Z.get(vn.__renderTarget);b.bindFramebuffer(z.READ_FRAMEBUFFER,Rt.__webglFramebuffer),b.bindFramebuffer(z.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let Rr=0;Rr<Ce;Rr++)ts&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Z.get(T).__webglTexture,Y,Te+Rr),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Z.get(O).__webglTexture,he,Dt+Rr)),z.blitFramebuffer(Fe,it,_e,ve,Pe,lt,_e,ve,z.DEPTH_BUFFER_BIT,z.NEAREST);b.bindFramebuffer(z.READ_FRAMEBUFFER,null),b.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||Z.has(T)){let Bt=Z.get(T),vn=Z.get(O);b.bindFramebuffer(z.READ_FRAMEBUFFER,C),b.bindFramebuffer(z.DRAW_FRAMEBUFFER,L);for(let Rt=0;Rt<Ce;Rt++)ts?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Bt.__webglTexture,Y,Te+Rt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Bt.__webglTexture,Y),yt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,vn.__webglTexture,he,Dt+Rt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,vn.__webglTexture,he),Y!==0?z.blitFramebuffer(Fe,it,_e,ve,Pe,lt,_e,ve,z.COLOR_BUFFER_BIT,z.NEAREST):yt?z.copyTexSubImage3D(be,he,Pe,lt,Dt+Rt,Fe,it,_e,ve):z.copyTexSubImage2D(be,he,Pe,lt,Fe,it,_e,ve);b.bindFramebuffer(z.READ_FRAMEBUFFER,null),b.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else yt?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(be,he,Pe,lt,Dt,_e,ve,Ce,Tt,Zt,_t.data):O.isCompressedArrayTexture?z.compressedTexSubImage3D(be,he,Pe,lt,Dt,_e,ve,Ce,Tt,_t.data):z.texSubImage3D(be,he,Pe,lt,Dt,_e,ve,Ce,Tt,Zt,_t):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,he,Pe,lt,_e,ve,Tt,Zt,_t.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,he,Pe,lt,_t.width,_t.height,Tt,_t.data):z.texSubImage2D(z.TEXTURE_2D,he,Pe,lt,_e,ve,Tt,Zt,_t);b.pixelStorei(z.UNPACK_ROW_LENGTH,Qt),b.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ht),b.pixelStorei(z.UNPACK_SKIP_PIXELS,Ii),b.pixelStorei(z.UNPACK_SKIP_ROWS,on),b.pixelStorei(z.UNPACK_SKIP_IMAGES,gn),he===0&&O.generateMipmaps&&z.generateMipmap(be),b.unbindTexture()},this.initRenderTarget=function(T){Z.get(T).__webglFramebuffer===void 0&&ee.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ee.setTextureCube(T,0):T.isData3DTexture?ee.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ee.setTexture2DArray(T,0):ee.setTexture2D(T,0),b.unbindTexture()},this.resetState=function(){B=0,V=0,X=null,b.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var Ye=Math.PI*2,$e=(i,e,t)=>i<e?e:i>t?t:i,la=(i,e,t)=>i+(e-i)*t,cr=(i,e,t)=>{let n=$e((t-i)/(e-i),0,1);return n*n*(3-2*n)};function fs(i){let e=i>>>0;return function(){e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}var hr=i=>i-Math.floor(i),cd=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4),R1=i=>i<=.0031308?i*12.92:1.055*Math.pow(i,1/2.4)-.055;function Wp(i){let e=parseInt(i.slice(1),16);return[cd((e>>16&255)/255),cd((e>>8&255)/255),cd((e&255)/255)]}function Yc(i){let e=parseInt(i.slice(1),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}function Jt(i,e,t,n){let r=2/Math.max(1e-4,t),a=r*n,o=1/(1+a+.48*a*a+.235*a*a*a),l=i.value-e,c=(i.velocity+r*l)*n;i.velocity=(i.velocity-r*c)*o;let u=e+(l+c)*o;return e-i.value>0==u>e&&(u=e,i.velocity=(u-e)/Math.max(n,1e-5)),i.value=u,u}var Yt=(i=0)=>({value:i,velocity:0});function hd(i,e,t,n,s,r,a,o,l){let c=Math.cos(l),u=Math.sin(l),f=(r*t+a*n+o*s)*(1-c);i[e]=t*c+(a*s-o*n)*u+r*f,i[e+1]=n*c+(o*t-r*s)*u+a*f,i[e+2]=s*c+(r*n-a*t)*u+o*f}function Ui(i,e,t,n){let s=0,r=1,a=0;Math.abs(t)>.9&&(s=1,r=0);let o=r*n-a*t,l=a*e-s*n,c=s*t-r*e,u=Math.hypot(o,l,c)||1;return o/=u,l/=u,c/=u,i[0]=o,i[1]=l,i[2]=c,i[3]=t*c-n*l,i[4]=n*o-e*c,i[5]=e*l-t*o,i}function ps(i,e,t){let n=Math.cos(i),s=Math.sin(i),r=Math.cos(e),a=Math.sin(e),o=Math.cos(t),l=Math.sin(t);return new Float64Array([o*r,o*a*s-l*n,o*a*n+l*s,l*r,l*a*s+o*n,l*a*n-o*s,-a,r*s,r*n])}var lr=(i,e,t,n)=>{let s=(i-e)/(i<e?t:n);return Math.exp(-.5*s*s)},Gp=new Map;function C1(i){let e=Math.round(i),t=Gp.get(e);if(t)return t;let n=0,s=0,r=0;for(let c=380;c<=780;c+=5){let u=c*1e-9,f=1/(u*u*u*u*u*(Math.exp(.014387769/(u*e))-1));n+=f*(1.056*lr(c,599.8,37.9,31)+.362*lr(c,442,16,26.7)-.065*lr(c,501.1,20.4,26.2)),s+=f*(.821*lr(c,568.8,46.9,40.5)+.286*lr(c,530.9,16.3,31.1)),r+=f*(1.217*lr(c,437,11.8,36)+.681*lr(c,459,26,13.8))}let a=Math.max(0,3.2406*n-1.5372*s-.4986*r),o=Math.max(0,-.9689*n+1.8758*s+.0415*r),l=Math.max(0,.0557*n-.204*s+1.057*r);return t=[a/s,o/s,l/s,1],Gp.set(e,t),t}function at(i,e=1,t=[0,0,0]){let n=C1($e(i,800,6e4)),s=n[0],r=n[1],a=n[2];if(e!==1){let l=.2126*s+.7152*r+.0722*a;s=l+(s-l)*e,r=l+(r-l)*e,a=l+(a-l)*e}let o=Math.max(s,r,a)||1;return t[0]=s/o,t[1]=r/o,t[2]=a/o,t}function $c(i,e=1,t=[0,0,0]){at(i,e,t);let n=.2126*t[0]+.7152*t[1]+.0722*t[2]||1;return t[0]/=n,t[1]/=n,t[2]/=n,t}function qp(i){let e=t=>Math.round($e(R1($e(t,0,1)),0,1)*255).toString(16).padStart(2,"0");return`#${e(i[0])}${e(i[1])}${e(i[2])}`}function To(){let e=Math.log(1e3),t=Math.log(4e4),n=[];for(let s=0;s<32;s++){let r=at(Math.exp(e+(t-e)*s/31));n.push(`vec3(${r.map(a=>a.toFixed(4)).join(", ")})`)}return`
const vec3 BB_TABLE[32] = vec3[32](${n.join(", ")});
vec3 blackbody(float kelvin) {
  float x = clamp((log(max(kelvin, 1.0)) - ${e.toFixed(6)}) / ${(t-e).toFixed(6)}, 0.0, 1.0) * ${31 .toFixed(1)};
  int i = int(min(floor(x), ${30 .toFixed(1)}));
  return mix(BB_TABLE[i], BB_TABLE[i + 1], x - float(i));
}
`}var $t={space:"#04070b",white:"#eaf2f8",ink:"#dde6ed",ice:"#a9e7f2",iceHi:"#e6fbff",deep:"#4f8fb0",deepest:"#1b3a52",halpha:"#ec7f9c",reflection:"#86a9de",dust:"#5e5047",web:"#7d8fb4"},Eo={ember:1800,cinder:2700,orange:3900,yellow:4800,sun:5800,hot:5900,whiteStar:7200,blueStar:12e3},K=Object.fromEntries(Object.entries($t).map(([i,e])=>[i,Wp(e)])),ud=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t];K.steel=ud(K.deep,K.white,.15);K.mist=ud(K.deepest,K.deep,.5);for(let[i,e]of Object.entries(Eo))K[i]=at(e);K.core=ud(K.hot,[1,1,1],.45);var Kc=i=>qp(at(i)),ms={high:{particles:163840,stars:5200,dprCap:1.75,pixelBudget:42e5,bloom:!0,bloomScale:.5,grain:!0,size:1,gain:1},medium:{particles:65536,stars:3e3,dprCap:1.5,pixelBudget:24e5,bloom:!0,bloomScale:.42,grain:!0,size:1.32,gain:1.85},low:{particles:24576,stars:1600,dprCap:1.5,pixelBudget:13e5,bloom:!1,bloomScale:.35,grain:!1,size:1.75,gain:3.4}},Bn=[{dpr:1,floor:0,draw:1,bloom:1},{dpr:1,floor:0,draw:1,bloom:.72},{dpr:.82,floor:1,draw:1,bloom:.6},{dpr:.66,floor:1,draw:1,bloom:.5},{dpr:.5,floor:1,draw:.78,bloom:.5},{dpr:.5,floor:.75,draw:.62,bloom:0}],Ao=32,Zc={hero:{wide:{cx:.675,cy:.47,r:(i,e)=>Math.min(i*.255,e*.4),push:1,dim:1},tall:{cx:.5,cy:.66,r:(i,e)=>Math.min(i*.44,e*.24),push:1,dim:1}},explore:{wide:{cx:.5,cy:.49,r:(i,e)=>Math.min(i*.33,e*.41),push:1,dim:1},tall:{cx:.5,cy:.46,r:(i,e)=>Math.min(i*.47,e*.3),push:1,dim:1}},contents:{wide:{cx:.245,cy:.52,r:(i,e)=>Math.min(i*.19,e*.37),push:1,dim:.92},tall:{cx:.5,cy:.2,r:(i,e)=>Math.min(i*.4,e*.17),push:1,dim:.9}},chapter:{wide:{cx:.655,cy:.5,r:(i,e)=>Math.min(i*.27,e*.42),push:1,dim:1},tall:{cx:.5,cy:.34,r:(i,e)=>Math.min(i*.45,e*.24),push:1,dim:1}},reading:{wide:{cx:.5,cy:.5,r:(i,e)=>Math.min(i*.5,e*.8),push:1,dim:.5},tall:{cx:.5,cy:.46,r:(i,e)=>Math.min(i*.5,e*.3),push:1.45,dim:.5}}},Ro=(i,e)=>i<640||i/e<=.8,Jc={intro:{duration:3.4,stagger:.45,flow:.9,swirl:1.1,sweep:.55,invert:0},cover:{duration:2.3,stagger:.4,flow:.62,swirl:.85,sweep:.8,invert:0},preview:{duration:1.7,stagger:.36,flow:.5,swirl:.7,sweep:.85,invert:0},chapter:{duration:2.2,stagger:.4,flow:.6,swirl:.85,sweep:.85,invert:0},seed:{duration:2.4,stagger:.42,flow:.45,swirl:1.3,sweep:.7,invert:1},dissolve:{duration:.24}},en={camera:.62,cameraReduced:.06,parallax:.9,veil:.35,reading:.45,presence:.5,scatter:.42,scatterReduced:.2,arm:.32,focus:.27},tn={bloomStrength:.55,bloomRadius:.08,bloomThreshold:.48,bloomKnee:.32,exposure:1.12,vignette:.42,grain:.022},nt={stagger:.56,flow:.9,outward:.55,near:.62,far:2.5,margin:1.12,density:1150,minStars:420,maxStars:2600,px:4,pxBright:6.2,gain:.72,steep:5,drift:3,twinkle:.2,parallax:.35,sway:.15,bloom:.45,calm:.62,column:.42,temps:[3400,5400,7400,15e3],tones:[.12,.66],saturation:.8};var ot={SPIN_MAX:3,PIVOT_MAX:12,STREAM_MAX:8,RATE_MAX:2,SIZE_MAX:.16},Gs=1200,dd=Gs/(2*Math.PI),ca=i=>Math.floor(i*dd+.5)/dd,Xp=i=>Math.max(Math.floor(i*Gs+.5),1)/Gs,dr=i=>i-Math.floor(i/Gs)*Gs,P1=i=>Number(i.toFixed(6)),fd=[.3,.6,.5,.8,.4,.7,.9,.5,.7,.4,.6,.8].map(i=>P1(ca(i))),yn=fd.map(i=>i.toFixed(6)),fr={uHole:{value:new We(0,0,0,1)},uHoleView:{value:new We(0,0,-1,0)},uViewport:{value:new ye(1,1)},uHoleReach:{value:2},uHoleDisc:{value:new We(0,1,0,.3)},uHoleRay:{value:new We(1,1,0,0)},uHoleBand:{value:new We(0,0,0,0)}},Co=`
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
`,vs=`
#define TIME_PERIOD ${Gs.toFixed(1)}
#define TIME_QW ${dd.toFixed(6)}
float qRate(float w) { return floor(w * TIME_QW + 0.5) / TIME_QW; }
float qCycles(float r) { return max(floor(r * TIME_PERIOD + 0.5), 1.0) / TIME_PERIOD; }
`,I1=`
#define SPIN_MAX ${ot.SPIN_MAX.toFixed(4)}
#define PIVOT_MAX ${ot.PIVOT_MAX.toFixed(4)}
#define STREAM_MAX ${ot.STREAM_MAX.toFixed(4)}
#define RATE_MAX ${ot.RATE_MAX.toFixed(4)}
#define SIZE_MAX ${ot.SIZE_MAX.toFixed(4)}
`,gs=i=>Number(i).toFixed(4),L1=`
#define SC_STAGGER ${gs(nt.stagger)}
#define SC_NEAR ${gs(nt.near)}
#define SC_FAR ${gs(nt.far)}
#define SC_MARGIN ${gs(nt.margin)}
#define SC_STEEP ${gs(nt.steep)}
#define SC_DRIFT ${gs(nt.drift)}
#define SC_TONE0 ${gs(nt.tones[0])}
#define SC_TONE1 ${gs(nt.tones[1])}
#define SC_COLUMN ${gs(nt.column)}
`,pd=625341585,ur=1024,Po=`
${I1}
${L1}
${vs}
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
uniform vec3 uScatterTone0;   // star colours (linear, equal luminance): blackbody orange, yellow-white, white, blue-white
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
${Co}
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
    2.7 * cos(2.7 * p.y + ${yn[0]} * t) - 1.7 * cos(1.7 * p.z + ${yn[1]} * t + 2.0),
    2.1 * cos(2.1 * p.z - ${yn[2]} * t) - 1.9 * cos(1.9 * p.x - ${yn[3]} * t + 3.0),
    2.3 * cos(2.3 * p.x + ${yn[4]} * t) - 1.3 * cos(1.3 * p.y + ${yn[5]} * t + 1.0));
  vec3 q = vec3(p.y + p.z, p.z - p.x, p.x + p.y) * 1.9 + 4.0;
  v += 0.5 * vec3(
    3.1 * cos(3.1 * q.y - ${yn[6]} * t) - 2.6 * cos(2.6 * q.z + ${yn[7]} * t),
    2.9 * cos(2.9 * q.z + ${yn[8]} * t) - 3.3 * cos(3.3 * q.x - ${yn[9]} * t),
    2.4 * cos(2.4 * q.x - ${yn[10]} * t) - 2.8 * cos(2.8 * q.y + ${yn[11]} * t));
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
  uint h = uint(gl_VertexID) ^ ${pd}u;
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
  // A realistic spread of stellar temperatures along the blackbody locus: a few orange (K/M), many
  // yellow-white and white (G/F/A), some blue-white (B) \u2014 piecewise between four blackbody tones.
  vec3 c = tone < SC_TONE0 ? mix(uScatterTone0, uScatterTone1, tone / SC_TONE0)
         : tone < SC_TONE1 ? mix(uScatterTone1, uScatterTone2, (tone - SC_TONE0) / (SC_TONE1 - SC_TONE0))
         : mix(uScatterTone2, uScatterTone3, (tone - SC_TONE1) / (1.0 - SC_TONE1));
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
    ivec2 st = ivec2(gl_VertexID % ${ur}, gl_VertexID / ${ur});
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
  vec2 texel = vec2(float(gl_VertexID % ${ur}), float(gl_VertexID / ${ur}));
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
`,jc=`
varying vec3 vColor;
varying float vSoft;
#ifdef OVERLAY
${Co}
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
`,Yp=`
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
`,$p=`
${vs}
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
`,Kp=`
varying vec3 vColor;
varying float vSharp;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(q, q);
  if (r2 > 1.0) discard;
  float a = exp(-r2 * vSharp) * (1.0 - r2);
  gl_FragColor = vec4(vColor * a, 1.0);
}
`;var Qc=nt.temps.map(i=>$c(i,nt.saturation)),F1=1/32767,ha=1/255,e0=[["look",4,Uint8Array],["spin",4,Int16Array],["pivot",3,Int16Array],["stream",4,Int16Array],["aux",4,Uint8Array]];function Zp(i){let e={pos:new Float32Array(i*3)};for(let[t,n,s]of e0)e[t]=new s(i*n);return e}var Ht=i=>Math.max(i*F1,-1),md=["position","aFromLook","aFromSpin","aFromPivot","aFromStream","aFromAux"],eh=["aTo","aToLook","aToSpin","aToPivot","aToStream","aToAux"],Mn=(i,e,t)=>{let n=$e((t-i)/(e-i),0,1);return n*n*(3-2*n)};function Jp(i,e,t){return t>.5?Mn(i-.06,i,e):t<-.5&&i>0?1-Mn(1-i,1.06-i,e):1}function jp(i){let e=4*i*(1-i);return e*e*(3-2*e)}var Vt=[0,0,0],Ei=[0,0,0],qi=[0,0,0];function t0(i){try{return!!(i&&i.capabilities.isWebGL2!==!1&&i.extensions.has("EXT_color_buffer_float"))}catch{return!1}}var th=class{constructor(e,{renderer:t=null,gpuState:n=!1}={}){this.count=e,this.renderer=t,this.gpu=!!(n&&t),this.from=Zp(e),this.to=Zp(e),this.meta=new Float32Array(e*2);let s=fs(12648430);for(let c=0;c<e;c++)this.meta[c*2]=s();let r=new xt,a=(c,u,f)=>new vt(c,u,f).setUsage(_o);r.setAttribute("position",a(this.from.pos,3,!1)),r.setAttribute("aTo",a(this.to.pos,3,!1));for(let[c,u]of e0){let f=c[0].toUpperCase()+c.slice(1);r.setAttribute(`aFrom${f}`,a(this.from[c],u,!0)),r.setAttribute(`aTo${f}`,a(this.to[c],u,!0))}r.setAttribute("aMeta",a(this.meta,2,!1)),this.geometry=r,this.uniforms={uTime:{value:0},uFlowTime:{value:0},uMorph:{value:1},uStagger:{value:.4},uSweep:{value:new D(.5,0,3)},uFlowAmp:{value:.6},uSwirl:{value:.8},uCarry:{value:new ye(0,0)},uDissolve:{value:0},uSide:{value:0},uToExpand:{value:1},uToSpread:{value:0},uToDim:{value:1},uEvolve:{value:1},uEvolveMode:{value:0},uFromExpand:{value:1},uFromSpread:{value:0},uFromDim:{value:1},uFromEvolve:{value:1},uFromEvolveMode:{value:0},uPixelScale:{value:1e3},uSizeScale:{value:1},uGain:{value:1},uFocus:{value:10},uDof:{value:1.6},uMinPx:{value:1.8},uMaxPx:{value:48},uTwinkle:{value:1},uFromTex:{value:0},uState0:{value:null},uState1:{value:null},uState2:{value:null},uState3:{value:null},uScatter:{value:0},uScatterKeep:{value:.01},uScatterTravel:{value:1},uScatterFrame:{value:new Ct},uScatterRay:{value:new We(1,1,0,0)},uScatterCenter:{value:new We(0,0,0,3)},uScatterLook:{value:new We(10,nt.gain,nt.px,nt.pxBright)},uScatterMotion:{value:new We(nt.flow,nt.outward,nt.twinkle,1)},uScatterTone0:{value:new D(...Qc[0])},uScatterTone1:{value:new D(...Qc[1])},uScatterTone2:{value:new D(...Qc[2])},uScatterTone3:{value:new D(...Qc[3])}};let o={transparent:!0,depthWrite:!1,depthTest:!0,blending:Zn,blendEquation:Wi,blendSrc:Un,blendDst:Un},l=this.gpu?{GPU_STATE:""}:{};this.material=new De({name:"UniverseParticles",defines:{...l},uniforms:this.uniforms,vertexShader:Po,fragmentShader:jc,...o}),this.ghostMaterial=new De({name:"UniverseParticlesGhost",defines:{...l},uniforms:{...this.uniforms,uSide:{value:1}},vertexShader:Po,fragmentShader:jc,...o}),this.overlayMaterial=new De({name:"UniverseParticlesFront",defines:{OVERLAY:"",...l},uniforms:{...this.uniforms,...fr},vertexShader:Po,fragmentShader:jc,...o,depthTest:!1}),this.points=new Di(r,this.material),this.ghost=new Di(r,this.ghostMaterial),this.overlay=new Di(r,this.overlayMaterial);for(let c of[this.points,this.ghost,this.overlay])c.frustumCulled=!1,c.renderOrder=10;this.ghost.visible=!1,this.gpu&&this._initGpuState(),this.morphing=!1,this.duration=1,this.formation=null,this.drawCount=e,this.flowTime=0,this.lastBakeMs=0,this.envDirty=!1}_initGpuState(){let e=ur,t=Math.ceil(this.count/e),n=()=>{let a=new Ut(e,t,{count:4,type:Qi,format:ci,minFilter:ei,magFilter:ei,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});for(let o of a.textures)o.generateMipmaps=!1;return a};this.states=[n(),n()],this.stateIndex=0,this.bakeUniforms={...this.uniforms,uSnapshot:{value:0},uStateSize:{value:new ye(e,t)}},this.bakeMaterial=new De({name:"UniverseParticlesBake",glslVersion:yo,defines:{GPU_STATE:"",BAKE:""},uniforms:this.bakeUniforms,vertexShader:Po,fragmentShader:Yp,blending:Ti,depthTest:!1,depthWrite:!1});let s=new Di(this.geometry,this.bakeMaterial);s.frustumCulled=!1,this.bakeScene=new vi,this.bakeScene.add(s),this.bakeCamera=new sr,this.readBuffer=null;let r=this.renderer.capabilities;this.gpuRead=!!(r.textureTypeReadable&&r.textureTypeReadable(Qi)&&r.textureFormatReadable(ci))}get spareState(){return this.states?this.states[1-this.stateIndex]:null}setImmediate(e){this._copy(this.from,e),this._copy(this.to,e);for(let t=0;t<this.count;t++)this.meta[t*2+1]=0;this.envDirty=!1,this.formation=e,this._resetFrom(),this.uniforms.uMorph.value=1,this.uniforms.uDissolve.value=0,this.ghost.visible=!1,this.morphing=!1,this._upload()}setPair(e,t,n,s){this._copy(this.from,e),this._copy(this.to,t);for(let r=0;r<this.count;r++)this.meta[r*2+1]=0;this.envDirty=!1,this._resetFrom(),this.formation=t,this._start(n,s),this._upload()}_resetFrom(){let e=this.uniforms;e.uFromExpand.value=1,e.uFromSpread.value=0,e.uFromDim.value=1,e.uFromEvolve.value=1,e.uFromEvolveMode.value=0,e.uFromTex.value=0,e.uCarry.value.set(0,0)}_start(e,t){let n=this.uniforms;n.uMorph.value=0,n.uStagger.value=t?0:e.stagger,n.uSweep.value.set(e.sweep,e.invert,Math.max(.5,e.radius||3)),n.uFlowAmp.value=e.flow,n.uSwirl.value=e.swirl,n.uDissolve.value=t?1:0,this.ghost.visible=!!t,this.duration=Math.max(.05,e.duration),this.morphing=!0}morphTo(e,t,n,s){let r=performance.now(),a=this.uniforms,o=!1;if(!this.morphing&&a.uMorph.value>=1){if(this._swapSides(),a.uFromExpand.value=a.uToExpand.value,a.uFromSpread.value=a.uToSpread.value,a.uFromDim.value=a.uToDim.value,a.uFromEvolve.value=a.uEvolve.value,a.uFromEvolveMode.value=a.uEvolveMode.value,a.uFromTex.value=0,a.uCarry.value.set(0,0),this.envDirty){for(let l=0;l<this.count;l++)this.meta[l*2+1]=0;this.geometry.attributes.aMeta.needsUpdate=!0,this.envDirty=!1}this._copy(this.to,e),this._upload(eh)}else a.uTime.value=dr(t),this.gpu?(this._bakeGpu(),this._upload(eh)):(this.bake(t),this._upload()),a.uCarry.value.set(a.uFlowAmp.value,a.uSwirl.value),a.uFromExpand.value=1,a.uFromSpread.value=0,a.uFromDim.value=1,a.uFromEvolve.value=1,a.uFromEvolveMode.value=0,this._copy(this.to,e),o=!0;return this.formation=e,this._start(n,s),this.lastBakeMs=performance.now()-r,o}_bakeGpu(){let e=this.renderer,t=this.spareState,n=this.geometry.drawRange,s=n.start,r=n.count;this.geometry.setDrawRange(0,this.count),this.bakeUniforms.uSnapshot.value=0;let a=e.getRenderTarget(),o=e.autoClear;e.autoClear=!0,e.setRenderTarget(t),e.render(this.bakeScene,this.bakeCamera),e.setRenderTarget(a),e.autoClear=o,this.geometry.setDrawRange(s,r),this.stateIndex=1-this.stateIndex;let l=this.uniforms;l.uState0.value=t.textures[0],l.uState1.value=t.textures[1],l.uState2.value=t.textures[2],l.uState3.value=t.textures[3],l.uFromTex.value=1}update(e){let t=this.uniforms;return this.flowTime=dr(this.flowTime+e),t.uFlowTime.value=this.flowTime,this.morphing?(t.uMorph.value=Math.min(1,t.uMorph.value+e/this.duration),t.uMorph.value>=1&&(this.morphing=!1,t.uDissolve.value=0,this.ghost.visible=!1),this.morphing):!1}settle(){this.uniforms.uMorph.value=1,this.update(0),this.morphing=!1,this.uniforms.uDissolve.value=0,this.ghost.visible=!1}setDrawCount(e){this.drawCount=Math.max(1,Math.min(this.count,Math.round(e))),this.geometry.setDrawRange(0,this.drawCount)}_living(e,t,n,s,r){let a=e.pos,o=e.stream,l=e.spin,c=e.pivot,u=a[t*3],f=a[t*3+1],h=a[t*3+2],d=1,g=Ht(o[t*4+3])*ot.RATE_MAX;if(g>0){let p=hr(n*Xp(g)+s*7.31),m=ot.STREAM_MAX*p;u+=Ht(o[t*4])*m,f+=Ht(o[t*4+1])*m,h+=Ht(o[t*4+2])*m,d=Mn(0,.16,p)*(1-Mn(.74,1,p))}let v=ca(Ht(l[t*4+3])*ot.SPIN_MAX);if(v!==0){let p=Ht(l[t*4]),m=Ht(l[t*4+1]),_=Ht(l[t*4+2]),E=Math.sqrt(p*p+m*m+_*_)||1;p/=E,m/=E,_/=E;let y=Ht(c[t*3])*ot.PIVOT_MAX,S=Ht(c[t*3+1])*ot.PIVOT_MAX,M=Ht(c[t*3+2])*ot.PIVOT_MAX;hd(r,0,u-y,f-S,h-M,p,m,_,n*v),r[0]+=y,r[1]+=S,r[2]+=M}else r[0]=u,r[1]=f,r[2]=h;return d}_progress(e){let t=this.uniforms;if(t.uDissolve.value>.5)return this._e=t.uMorph.value>=.5?1:0,1;let n=this.meta[e*2],s=hr(n*91.3458),r=this.to.pos,a=r[e*3],o=r[e*3+1],l=r[e*3+2],c=$e(Math.sqrt(a*a+o*o+l*l)/t.uSweep.value.z,0,1);t.uSweep.value.y>.5&&(c=1-c);let u=t.uStagger.value,f=u*(s+(c-s)*t.uSweep.value.x),h=$e((t.uMorph.value-f)/(1-u),0,1);return this._e=h*h*h*(h*(h*6-15)+10),h}_evaluate(e,t){let n=this.uniforms,s=this.meta[e*2],r=this._progress(e),a=this._e,o=0,l=0;if(a<1){o=this._living(this.from,e,t,s,Vt);let p=this.from.pivot,m=n.uFromSpread.value*ot.PIVOT_MAX,_=n.uFromExpand.value;(m!==0||_!==1)&&(Vt[0]=(Vt[0]+Ht(p[e*3])*m)*_,Vt[1]=(Vt[1]+Ht(p[e*3+1])*m)*_,Vt[2]=(Vt[2]+Ht(p[e*3+2])*m)*_),o*=Jp(this.from.aux[e*4]*ha,n.uFromEvolve.value,n.uFromEvolveMode.value)*n.uFromDim.value}if(a>0){l=this._living(this.to,e,t,s,Ei);let p=this.to.pivot,m=n.uToSpread.value*ot.PIVOT_MAX,_=n.uToExpand.value;Ei[0]=(Ei[0]+Ht(p[e*3])*m)*_,Ei[1]=(Ei[1]+Ht(p[e*3+1])*m)*_,Ei[2]=(Ei[2]+Ht(p[e*3+2])*m)*_}let c=Jp(this.to.aux[e*4]*ha,n.uEvolve.value,n.uEvolveMode.value),u=this.from.look,f=this.to.look,h=l*c*n.uToDim.value,d=this._c;for(let p=0;p<3;p++){let m=u[e*4+p]*ha,_=f[e*4+p]*ha,E=m*m*o,y=_*_*h;d[p]=a<=0?E:a>=1?y:E+(y-E)*a}let g=u[e*4+3]*ha,v=f[e*4+3]*ha;return d[3]=g*g+(v*v-g*g)*a,a<=0?(qi[0]=Vt[0],qi[1]=Vt[1],qi[2]=Vt[2]):a>=1?(qi[0]=Ei[0],qi[1]=Ei[1],qi[2]=Ei[2]):(qi[0]=Vt[0]+(Ei[0]-Vt[0])*a,qi[1]=Vt[1]+(Ei[1]-Vt[1])*a,qi[2]=Vt[2]+(Ei[2]-Vt[2])*a),r}bake(e){this._c||(this._c=new Float32Array(4));let t=dr(e),n=this.count,s=this.from,r=this.to,a=this.meta,o=this.uniforms,l=o.uDissolve.value>.5,c=o.uFlowAmp.value>1e-4?o.uCarry.value.x/o.uFlowAmp.value:0,u=!1;for(let f=0;f<n;f++){let h=this._evaluate(f,t),d=this._e,g=l?0:jp(h)+c*a[f*2+1]*(1-h)*(1-h),v=d>=.5?r:s,p=v.spin[f*4],m=v.spin[f*4+1],_=v.spin[f*4+2],E=v.spin[f*4+3],y=v.pivot[f*3],S=v.pivot[f*3+1],M=v.pivot[f*3+2],w=v.aux[f*4+1],x=v.aux[f*4+2],A=ca(Ht(E)*ot.SPIN_MAX),R=qi[0],P=qi[1],F=qi[2];if(A!==0){let C=Ht(p),L=Ht(m),B=Ht(_),V=Math.sqrt(C*C+L*L+B*B)||1;C/=V,L/=V,B/=V;let X=Ht(y)*ot.PIVOT_MAX,U=Ht(S)*ot.PIVOT_MAX,k=Ht(M)*ot.PIVOT_MAX;hd(Vt,0,R-X,P-U,F-k,C,L,B,-t*A),R=Vt[0]+X,P=Vt[1]+U,F=Vt[2]+k}let N=this._c;s.pos[f*3]=R,s.pos[f*3+1]=P,s.pos[f*3+2]=F,s.spin[f*4]=p,s.spin[f*4+1]=m,s.spin[f*4+2]=_,s.spin[f*4+3]=E,s.pivot[f*3]=y,s.pivot[f*3+1]=S,s.pivot[f*3+2]=M,s.stream[f*4]=0,s.stream[f*4+1]=0,s.stream[f*4+2]=0,s.stream[f*4+3]=0,s.aux[f*4]=0,s.aux[f*4+1]=w,s.aux[f*4+2]=x,s.aux[f*4+3]=0,s.look[f*4]=Math.round(Math.sqrt($e(N[0],0,1))*255),s.look[f*4+1]=Math.round(Math.sqrt($e(N[1],0,1))*255),s.look[f*4+2]=Math.round(Math.sqrt($e(N[2],0,1))*255),s.look[f*4+3]=Math.round(Math.sqrt($e(N[3],0,1))*255),a[f*2+1]=g,g>0&&(u=!0)}this.envDirty=u}snapshot(e,t,n,s,r){if(this.gpu&&this.gpuRead&&this._snapshotGpu(t,n,s,r))return;this._c||(this._c=new Float32Array(4));let a=dr(e),o=this.uniforms,l=this._c,c=o.uFlowTime.value,u=o.uGain.value;o.uFromTex.value>.5&&this.settle();let f=o.uScatter.value,h=o.uScatterTravel.value>.5,d=o.uScatterCenter.value;for(let g=0;g<s;g++){let v=this._evaluate(g,a),p=qi[0],m=qi[1],_=qi[2],E=this.meta[g*2];if(o.uDissolve.value<.5){let A=jp(v),R=this.meta[g*2+1]*(1-v)*(1-v);if(A+R>.001){let P=hr(E*91.3458),F=hr(E*47.853);Qp(p*.55,m*.55,_*.55,c,Vt);let N=(o.uFlowAmp.value*A+o.uCarry.value.x*R)*(.85+.3*F);p+=Vt[0]*N,m+=Vt[1]*N,_+=Vt[2]*N;let C=(o.uSwirl.value*A+o.uCarry.value.y*R)*(.8+.4*P),L=Math.cos(C),B=Math.sin(C),V=L*p-B*_,X=B*p+L*_;p=V,_=X;let U=1+.15*Math.min(1,A+R);l[0]*=U,l[1]*=U,l[2]*=U}}let y=u*Math.min(4,l[3]/.02+.25),S=l[0]*y,M=l[1]*y,w=l[2]*y,x=l[3]*ot.SIZE_MAX*o.uSizeScale.value;if(f>0){let A=this._star(g,a,D1),R=1,P=0,F=0;if(h){let N=p-d.x,C=m-d.y,L=_-d.z,B=Math.sqrt(N*N+C*C+L*L),V=.45*(1-$e(B/d.w,0,1))+.33*U1(p,m,_)+.22*hr(E*91.3458),X=$e((f-nt.stagger*V)/(1-nt.stagger),0,1);Qp(p*.42+2.3,m*.42+2.3,_*.42+2.3,c,Ei);let U=B>1e-4?N/B:0,k=B>1e-4?C/B:1,W=B>1e-4?L/B:0,J=o.uScatterMotion.value,j=(U*J.y+Ei[0]*J.x)*d.w,Ae=(k*J.y+Ei[1]*J.x)*d.w,Re=(W*J.y+Ei[2]*J.x)*d.w,Ie=Mn(0,.62,X),Q=Mn(.42,1,X);p+=j*Ie+(A.x-p-j)*Q,m+=Ae*Ie+(A.y-m-Ae)*Q,_+=Re*Ie+(A.z-_-Re)*Q;let ie=A.kept*Mn(.5,.92,X);R=A.kept>.5?1-ie:1-Mn(.45,.95,X),P=ie,F=ie}else A.kept>.5&&f>=.5?(p=A.x,m=A.y,_=A.z,R=0,P=Mn(.4,1,f),F=1):R=1-Mn(0,.6,f);S=S*R+A.r*P,M=M*R+A.g*P,w=w*R+A.b*P,x+=(A.px*A.depth/o.uPixelScale.value-x)*F}t[g*3]=p,t[g*3+1]=m,t[g*3+2]=_,n[g*3]=S,n[g*3+1]=M,n[g*3+2]=w,r&&(r[g]=x)}}_snapshotGpu(e,t,n,s){try{let r=this.renderer,a=this.spareState,o=ur,l=Math.ceil(n/o),c=this.geometry.drawRange,u=c.start,f=c.count;this.geometry.setDrawRange(0,this.count),this.bakeUniforms.uSnapshot.value=1;let h=r.getRenderTarget();r.setRenderTarget(a),r.render(this.bakeScene,this.bakeCamera),r.setRenderTarget(h),this.bakeUniforms.uSnapshot.value=0,this.geometry.setDrawRange(u,f);let d=this.readBuffer&&this.readBuffer.length>=o*l*4?this.readBuffer:this.readBuffer=new Float32Array(o*l*4);r.readRenderTargetPixels(a,0,0,o,l,d,void 0,0);for(let g=0;g<n;g++)e[g*3]=d[g*4],e[g*3+1]=d[g*4+1],e[g*3+2]=d[g*4+2];r.readRenderTargetPixels(a,0,0,o,l,d,void 0,1);for(let g=0;g<n;g++)t[g*3]=d[g*4],t[g*3+1]=d[g*4+1],t[g*3+2]=d[g*4+2];if(s){r.readRenderTargetPixels(a,0,0,o,l,d,void 0,2);for(let g=0;g<n;g++)s[g]=d[g*4]}return!0}catch(r){return console.warn("Universe: GPU snapshot failed, using the CPU mirror",r),!1}}_star(e,t,n){let s=this.uniforms,r=(e^pd)>>>0,a=()=>(r=N1(r))>>>8;n.kept=a()/16777216<s.uScatterKeep.value?1:0;let o=a()/16777216,l=a()/16777216,c=a()/16777216,u=Math.pow(a()/16777216,nt.steep),f=a()/16777216;a();let h=1-c,d=1+Math.floor(h*(nt.drift-.001)),g=(hr(o-t*(d/Gs))*2-1)*nt.margin,v=(l*2-1)*nt.margin,p=s.uScatterLook.value,m=s.uScatterRay.value,_=p.x*(nt.near+(nt.far-nt.near)*c),E=_*(g+m.z)/m.x,y=_*(v+m.w)/m.y,S=-_,M=s.uScatterFrame.value.elements;n.x=M[0]*E+M[4]*y+M[8]*S+M[12],n.y=M[1]*E+M[5]*y+M[9]*S+M[13],n.z=M[2]*E+M[6]*y+M[10]*S+M[14];let[w,x]=nt.tones,A=f<w?s.uScatterTone0.value:f<x?s.uScatterTone1.value:s.uScatterTone2.value,R=f<w?s.uScatterTone1.value:f<x?s.uScatterTone2.value:s.uScatterTone3.value,P=f<w?f/w:f<x?(f-w)/(x-w):(f-x)/(1-x),F=1-Mn(1,nt.margin,Math.abs(g)),N=s.uScatterMotion.value.w+(1-s.uScatterMotion.value.w)*Mn(nt.column,nt.column+.25,Math.abs(g)),C=p.y*(.08+.92*u)*(.6+.4*h)*F*N;return n.r=(A.x+(R.x-A.x)*P)*C,n.g=(A.y+(R.y-A.y)*P)*C,n.b=(A.z+(R.z-A.z)*P)*C,n.px=p.z+(p.w-p.z)*u,n.depth=_,n}_copy(e,t){e.pos.set(t.pos),e.look.set(t.look),e.spin.set(t.spin),e.pivot.set(t.pivot),e.stream.set(t.stream),e.aux.set(t.aux)}_upload(e){let t=this.geometry.attributes;if(e)for(let n of e)t[n].needsUpdate=!0;else for(let n in t)t[n].needsUpdate=!0}_swapSides(){let e=this.from;this.from=this.to,this.to=e;let t=this.geometry;for(let n=0;n<md.length;n++){let s=t.attributes[md[n]];t.setAttribute(md[n],t.attributes[eh[n]]),t.setAttribute(eh[n],s)}}markDirty(){this.uniforms.uFromTex.value>.5&&(this.uniforms.uFromTex.value=0,this.settle()),this._upload()}dispose(){if(this.overlay.removeFromParent(),this.geometry.dispose(),this.material.dispose(),this.ghostMaterial.dispose(),this.overlayMaterial.dispose(),this.states){for(let e of this.states)e.dispose();this.bakeMaterial.dispose()}}},D1={x:0,y:0,z:0,r:0,g:0,b:0,px:0,depth:1,kept:0};function N1(i){let e=Math.imul(i,747796405)+2891336453>>>0,t=Math.imul((e>>>(e>>>28)+4^e)>>>0,277803737)>>>0;return(t>>>22^t)>>>0}function U1(i,e,t){return .5+.25*(Math.sin(1.9*i+1*e-1.4*t+1.6*Math.sin(-.9*i+1.5*e+.8*t+1))+Math.sin(.7*i-1.6*e+1.7*t+1.4*Math.sin(1.3*i+.6*e+1.4*t+2)))}function Qp(i,e,t,n,s){let r=fd,a=2.7*Math.cos(2.7*e+r[0]*n)-1.7*Math.cos(1.7*t+r[1]*n+2),o=2.1*Math.cos(2.1*t-r[2]*n)-1.9*Math.cos(1.9*i-r[3]*n+3),l=2.3*Math.cos(2.3*i+r[4]*n)-1.3*Math.cos(1.3*e+r[5]*n+1),c=(e+t)*1.9+4,u=(t-i)*1.9+4,f=(i+e)*1.9+4;return a+=.5*(3.1*Math.cos(3.1*u-r[6]*n)-2.6*Math.cos(2.6*f+r[7]*n)),o+=.5*(2.9*Math.cos(2.9*f+r[8]*n)-3.3*Math.cos(3.3*c-r[9]*n)),l+=.5*(2.4*Math.cos(2.4*c-r[10]*n)-2.8*Math.cos(2.8*u+r[11]*n)),s[0]=a*.16,s[1]=o*.16,s[2]=l*.16,s}var n0=[0,0,0],pr=new Float64Array(6);function Ai(i,e=n0){let t=i.rng()*2-1,n=i.rng()*Ye,s=Math.sqrt(1-t*t);return e[0]=s*Math.cos(n),e[1]=t,e[2]=s*Math.sin(n),e}var Xi=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t],O1=Array.from({length:8},()=>[0,0,0]),i0=0;function st(i,e,t){let n=O1[i0=i0+1&7];return n[0]=i[0]+(e[0]-i[0])*t,n[1]=i[1]+(e[1]-i[1])*t,n[2]=i[2]+(e[2]-i[2])*t,n}function di(i,e,t,n,s=n0){return s[0]=i[0]*e+i[1]*t+i[2]*n,s[1]=i[3]*e+i[4]*t+i[5]*n,s[2]=i[6]*e+i[7]*t+i[8]*n,s}function mr(i,e,t,n,s,r,a,o,l){Ui(pr,s,r,a);let c=Math.cos(l)*o,u=Math.sin(l)*o;return i[0]=e+pr[0]*c+pr[3]*u,i[1]=t+pr[1]*c+pr[4]*u,i[2]=n+pr[2]*c+pr[5]*u,i}function*s0(i,{rMin:e=4.2,rMax:t=9.5,color:n=K.deep,brightness:s=.008,size:r=.016,flatten:a=.75,spin:o=.012}={}){let l=[0,0,0];for(;i.remaining>0;){i.tick()&&(yield),Ai(i,l);let c=e+(t-e)*Math.pow(i.rng(),.7),u=i.point(l[0]*c,l[1]*c*a,l[2]*c,n,s*(.4+i.rng()*1.2),r*(.7+i.rng()*.8));i.orbit(u,0,1,0,o),i.twinkle(u,.4)}}function nn(i,e,t,n,s,r,a,o,l,c={}){for(let u=0;u<e;u++){let f=Math.abs(i.gauss()),h=i.point(t+i.gauss()*r,n+i.gauss()*r,s+i.gauss()*r,a,o*(c.falloff?Math.exp(-f*c.falloff)+.25:1)*(.6+i.rng()*.8),l*(.75+i.rng()*.6));c.spin&&i.orbit(h,i.rng()-.5,i.rng()-.5,i.rng()-.5,c.spin*(.5+i.rng()),t,n,s),c.twinkle&&i.twinkle(h,c.twinkle),c.evolve!==void 0&&i.evolve(h,c.evolve),c.anchor&&i.anchor(h,c.anchor[0],c.anchor[1],c.anchor[2])}}function r0(i,e,t,n,s,r,a,o,l,c,u,f,h=.01){let d=r-t,g=a-n,v=o-s;for(let p=0;p<e;p++){let m=i.point(t+i.gauss()*h,n+i.gauss()*h,s+i.gauss()*h,l,c*(.6+i.rng()*.8),u*(.8+i.rng()*.5));i.flow(m,d,g,v,f*(.85+i.rng()*.3))}}var B1=(i,e,t)=>{let n=Math.hypot(i,e,t);return[i/n,e/n,t/n]},Oi={radius:.3,normal:B1(.06,1,.16),disc:[.5,1.75],tIn:7e3},a0={id:"ch7",seed:2707,radius:2.9,center:[0,0,0],view:{yaw:0,pitch:.13},tint:$t.deepest,morph:"chapter",reading:{preview:.12,evolve:[0,1],mode:-1,dim:[1,.5],expand:[1,1.2]},*build(i){let e=new Float64Array(6),t=Oi.normal;Ui(e,t[0],t[1],t[2]);let n=[0,0,0],s=i.quota(.16),[r,a]=Oi.disc,o=[0,0,0];for(let d=0;d<s;d++){i.tick()&&(yield);let g=Math.pow(i.rng(),1.7),v=r+(a-r)*g,p=i.rng()*Ye,m=i.gauss()*.012*(1+3*g),_=Math.cos(p)*v,E=Math.sin(p)*v,y=e[0]*_+e[3]*E+t[0]*m,S=e[1]*_+e[4]*E+t[1]*m,M=e[2]*_+e[5]*E+t[2]*m,w=Oi.tIn*Math.pow(v/r,-.75),x=i.point(y,S,M,at(w,1,o),(.3-.17*g)*(.55+.45*w/Oi.tIn)*(.6+.6*i.rng()),.011+.008*i.rng());i.orbit(x,t[0],t[1],t[2],.62/Math.pow(v,1.5)),i.evolve(x,.08+.9*(.35+.65*g)*i.rng())}let l=Math.min(i.remaining,70);for(let d=0;d<l;d++){i.tick()&&(yield),Ai(i,n);let g=1.9+Math.pow(i.rng(),.8)*3.6,v=i.point(n[0]*g,n[1]*g*.55,n[2]*g,at(2400+900*i.rng(),.85,o),.36+.2*i.rng(),.022+.012*i.rng());i.twinkle(v,.7),i.flow(v,n[0]*.25,n[1]*.15,n[2]*.25,.025)}let c=i.quota(.42),u=[];for(let d=0;d<26;d++){i.tick()&&(yield),Ai(i,n);let g=2+i.rng()*4.4;u.push([n[0]*g,n[1]*g*.55,n[2]*g])}for(let d=0;d<c;d++){i.tick()&&(yield);let g=u[d%u.length],v=u[(d*7+3)%u.length],p=i.rng(),m=g[0]+(v[0]-g[0])*p+i.gauss()*.12,_=g[1]+(v[1]-g[1])*p+i.gauss()*.12,E=g[2]+(v[2]-g[2])*p+i.gauss()*.12,y=Math.sqrt(m*m+_*_+E*E)||1,S=i.point(m,_,E,st(K.mist,K.web,i.rng()*.7),.016+.024*i.rng(),.014+.008*i.rng());i.flow(S,m/y*.6,_/y*.6,E/y*.6,.03+.02*i.rng())}let f=i.quota(.08),h=at(3600,.55);for(let d=0;d<f;d++){i.tick()&&(yield);let g=d%9,v=g*2.39996,p=3.6+g%3*.9,m=Math.cos(v)*p*.55,_=Math.sin(g*1.7)*.9,E=-1.6-Math.abs(Math.sin(v))*p*.8,y=i.point(m+i.gauss()*.13,_+i.gauss()*.05,E+i.gauss()*.13,h,.018+.02*i.rng(),.016);i.flow(y,m*.08,_*.08,E*.08,.02)}}};var sn=32767,ih=class{constructor(e,t){this.count=e,this.n=0,this.rng=fs(t),this.pos=new Float32Array(e*3),this.look=new Uint8Array(e*4),this.spin=new Int16Array(e*4),this.pivot=new Int16Array(e*3),this.stream=new Int16Array(e*4),this.aux=new Uint8Array(e*4),this.keys=null,this._spare=null,this._ticks=0}tick(){return(++this._ticks&1023)===0}*run(e,t,n){return yield*e.build(this),this.n<this.count&&(yield*(e.fill||n)(this)),yield*this.finalize(t)}get remaining(){return this.count-this.n}quota(e){return Math.max(0,Math.min(this.remaining,Math.round(this.count*e)))}gauss(){if(this._spare!==null){let s=this._spare;return this._spare=null,s}let e=0;for(;e===0;)e=this.rng();let t=this.rng(),n=Math.sqrt(-2*Math.log(e));return this._spare=n*Math.sin(Ye*t),n*Math.cos(Ye*t)}range(e,t){return e+(t-e)*this.rng()}point(e,t,n,s,r=1,a=.02){if(this.n>=this.count)return-1;let o=this.n++;this.pos[o*3]=e,this.pos[o*3+1]=t,this.pos[o*3+2]=n;let l=o*4;return this.look[l]=Math.round(Math.sqrt($e(s[0]*r,0,1))*255),this.look[l+1]=Math.round(Math.sqrt($e(s[1]*r,0,1))*255),this.look[l+2]=Math.round(Math.sqrt($e(s[2]*r,0,1))*255),this.look[l+3]=Math.round(Math.sqrt($e(a/ot.SIZE_MAX,0,1))*255),o}orbit(e,t,n,s,r,a=0,o=0,l=0){if(e<0||r===0)return;let c=Math.sqrt(t*t+n*n+s*s)||1,u=e*4;this.spin[u]=Math.round(t/c*sn),this.spin[u+1]=Math.round(n/c*sn),this.spin[u+2]=Math.round(s/c*sn),this.spin[u+3]=Math.round($e(r/ot.SPIN_MAX,-1,1)*sn);let f=e*3;this.pivot[f]=Math.round($e(a/ot.PIVOT_MAX,-1,1)*sn),this.pivot[f+1]=Math.round($e(o/ot.PIVOT_MAX,-1,1)*sn),this.pivot[f+2]=Math.round($e(l/ot.PIVOT_MAX,-1,1)*sn)}anchor(e,t,n,s){if(e<0)return;let r=e*3;this.pivot[r]=Math.round($e(t/ot.PIVOT_MAX,-1,1)*sn),this.pivot[r+1]=Math.round($e(n/ot.PIVOT_MAX,-1,1)*sn),this.pivot[r+2]=Math.round($e(s/ot.PIVOT_MAX,-1,1)*sn)}flow(e,t,n,s,r){if(e<0||r<=0)return;let a=e*4;this.stream[a]=Math.round($e(t/ot.STREAM_MAX,-1,1)*sn),this.stream[a+1]=Math.round($e(n/ot.STREAM_MAX,-1,1)*sn),this.stream[a+2]=Math.round($e(s/ot.STREAM_MAX,-1,1)*sn),this.stream[a+3]=Math.max(1,Math.round($e(r/ot.RATE_MAX,0,1)*sn))}evolve(e,t){e>=0&&(this.aux[e*4]=Math.round($e(t,0,1)*255))}twinkle(e,t){e>=0&&(this.aux[e*4+1]=Math.round($e(t,0,1)*255))}glint(e,t){e>=0&&(this.aux[e*4+2]=Math.round($e(t,0,1)*255))}key(e,t){e<0||(this.keys||(this.keys=new Float32Array(this.count).fill(-1)),this.keys[e]=t)}*finalize(e){for(;this.n<this.count;)this.point(0,0,0,H1,0,0);let t=this.count,n=65536,s=new Uint32Array(t),r=new Uint32Array(n+1),a=this.pos,o=this.keys;for(let f=0;f<t;f+=Ws){let h=Math.min(t,f+Ws);for(let d=f;d<h;d++){let g=o&&o[d]>=0?o[d]:Math.atan2(a[d*3],a[d*3+2])/Ye+.5;g=$e(g+(this.rng()-.5)*.004,0,.99999);let v=g*n|0;s[d]=v,r[v+1]++}yield}for(let f=1;f<=n;f++)r[f]+=r[f-1];let l=new Uint32Array(t);for(let f=0;f<t;f+=Ws){let h=Math.min(t,f+Ws);for(let d=f;d<h;d++)l[r[s[d]]++]=d;yield}let c={count:t,pos:new Float32Array(t*3),look:new Uint8Array(t*4),spin:new Int16Array(t*4),pivot:new Int16Array(t*3),stream:new Int16Array(t*4),aux:new Uint8Array(t*4)},u=new Uint32Array(t);for(let f=0;f<t;f+=Ws){let h=Math.min(t,f+Ws);for(let d=f;d<h;d++)u[d]=l[e[d]];yield}for(let f=0;f<t;f+=Ws){let h=Math.min(t,f+Ws);k1(c.pos,a,u,f,h),l0(c.look,this.look,u,f,h,t),o0(c.spin,this.spin,u,f,h),z1(c.pivot,this.pivot,u,f,h),o0(c.stream,this.stream,u,f,h),l0(c.aux,this.aux,u,f,h,t),yield}return c}},Ws=8192;function k1(i,e,t,n,s){for(let r=n,a=n*3;r<s;r++,a+=3){let o=t[r]*3;i[a]=e[o],i[a+1]=e[o+1],i[a+2]=e[o+2]}}function z1(i,e,t,n,s){for(let r=n,a=n*3;r<s;r++,a+=3){let o=t[r]*3;i[a]=e[o],i[a+1]=e[o+1],i[a+2]=e[o+2]}}function o0(i,e,t,n,s){for(let r=n,a=n*4;r<s;r++,a+=4){let o=t[r]*4;i[a]=e[o],i[a+1]=e[o+1],i[a+2]=e[o+2],i[a+3]=e[o+3]}}function l0(i,e,t,n,s,r){let a=new Uint32Array(i.buffer,i.byteOffset,r),o=new Uint32Array(e.buffer,e.byteOffset,r);for(let l=n;l<s;l++)a[l]=o[t[l]]}var H1=[0,0,0],c0=new Map;function h0(i){let e=c0.get(i);if(e)return e;e=new Uint32Array(i);for(let n=0;n<i;n++)e[n]=n;let t=fs(24301+i);for(let n=i-1;n>0;n--){let s=Math.floor(t()*(n+1)),r=e[n];e[n]=e[s],e[s]=r}return c0.set(i,e),e}var Ri={radius:2,matrix:ps(.1,0,-.27),spin:.05,nodeOrbit:{radius:2.95,matrix:ps(.36,0,-.12),speed:.012,phase:.42}},Sn=[0,0,0],nh=[0,0,0],u0={id:"cover",seed:1101,radius:3.15,center:[0,0,0],view:{yaw:0,pitch:.4},tint:$t.deep,morph:"cover",reading:{preview:1},*build(i){let e=Ri.matrix;di(e,0,1,0,nh);let t=[nh[0],nh[1],nh[2]],n=(d,g,v,p,m,_)=>(di(e,d,g,v,Sn),i.point(Sn[0],Sn[1],Sn[2],p,m,_)),s=26,r=i.quota(.64),a=.34,o=[];for(let d=0;d<s;d++)o.push([i.rng()*Ye,2+Math.floor(i.rng()*4),.55+.85*i.rng()]);for(let d=0;d<r;d++){i.tick()&&(yield);let g=d%s,[v,p,m]=o[g],_=-1+2*(g+.5)/s+i.gauss()*.0035,E=i.rng()*Ye,y=.35+1.5*E,S=Ri.radius+.085*Math.cos(2*E+.5),M=.15*Math.sin(E+.7)+.045*Math.sin(3*E),w=a*(.86+.2*Math.sin(2*E+1.1)),x=_*w*Math.cos(y),A=_*w*Math.sin(y)*.8,R=i.gauss()*.0035,P=(S+x+R)*Math.cos(E),F=(S+x+R)*Math.sin(E),N=M+A+R,C=.35+.65*Math.pow(.5+.5*Math.cos(E-2.2),1.5),L=g===0||g===s-1?1.9:1,B=(.4+.6*Math.pow(Math.abs(_),4))*L,V=.45+.55*Math.pow(.5+.5*Math.sin(E*p+v),2),X=x<0?Math.min(1,-x/a):0,U=st(st(K.white,K.ice,.2+.4*(1-Math.abs(_))),K.iceHi,.4*X*C),k=i.rng()<1/140,W=n(P,N,F,U,(k?.9:.36)*C*B*V*m,k?.034:.0085+i.rng()*.006);if(i.orbit(W,t[0],t[1],t[2],Ri.spin),i.rng()<.3){let J=.22+i.rng()*.25;di(e,-Math.sin(E)*J,0,Math.cos(E)*J,Sn),i.flow(W,Sn[0],Sn[1],Sn[2],.1+i.rng()*.12)}k&&i.twinkle(W,.8)}let l=i.quota(.03);for(let d=0;d<l;d++){i.tick()&&(yield);let g=d%7,v=i.rng()*Ye,p=.42+.1*Math.sin(v*2+g)+g*.03,m=Ri.radius+p*Math.cos(v*1.5+g),_=.15*Math.sin(v+.7)+p*.6*Math.sin(v*1.5+g*2),E=n(m*Math.cos(v),_,m*Math.sin(v),st(K.ice,K.steel,.4),.06*(.5+.5*Math.sin(v*3+g)),.009);i.orbit(E,t[0],t[1],t[2],Ri.spin*.9)}let c=i.quota(.06);for(let d=0;d<c;d++){i.tick()&&(yield);let g=i.rng()*Ye,v=Ri.radius+i.gauss()*.16,p=n(v*Math.cos(g),.15*Math.sin(g+.7)+i.gauss()*.09,v*Math.sin(g),K.steel,.05+i.rng()*.05,.016+i.rng()*.012);i.orbit(p,t[0],t[1],t[2],Ri.spin*.8)}let u=i.quota(.075),f=[0,0,0];for(let d=0;d<u;d++){i.tick()&&(yield);let g=.1+1.45*Math.pow(i.rng(),.8),v=i.rng()*Ye,p=Math.pow(1-g/1.6,2.2);at(1700+5200*Math.pow(p,.6),1,f);let m=st(K.deep,f,cr(.015,.16,p)),_=n(g*Math.cos(v),i.gauss()*.02*g,g*Math.sin(v),m,.04+.16*p,.011+.01*i.rng());i.orbit(_,t[0],t[1],t[2],Math.min(1.6,.16/Math.pow(g,1.25))),di(e,-Math.cos(v)*g*.35,0,-Math.sin(v)*g*.35,Sn),i.flow(_,Sn[0],Sn[1],Sn[2],.05+i.rng()*.05)}nn(i,i.quota(.012),0,0,0,.035,K.sun,.5,.018,{spin:.6,falloff:1.2}),nn(i,i.quota(.004),0,0,0,.012,K.core,.9,.016,{spin:.9});let h=i.quota(.09);for(let d=0;d<h;d++){i.tick()&&(yield);let g=2.45+Math.pow(i.rng(),1.4)*2.4,v=i.rng()*Ye,p=n(g*Math.cos(v),i.gauss()*.07,g*Math.sin(v),st(K.deep,K.reflection,i.rng()*.6),.007+.018*i.rng()*(3.2/g),.012+.008*i.rng());i.orbit(p,t[0],t[1],t[2],.028)}}};var Io=(i,e,t)=>{let n=Math.hypot(i,e,t);return[i/n,e/n,t/n]};function gd(){let i=[],e=[{p:[0,0,0],level:0}],t=[],n={c:[0,0,0],n:Io(.18,1,.32),r:2.05,level:1,w:.09},s={c:[0,0,0],n:Io(-.62,.55,.58),r:1.18,level:1,w:-.16};i.push(n,s);let r=[0,0,0],a=new Float64Array(6);for(let o=0;o<5;o++){let l=o/5*Ye+.3;mr(r,0,0,0,n.n[0],n.n[1],n.n[2],n.r,l);let c=[r[0],r[1],r[2]],u=e.push({p:c,level:1})-1;t.push([0,u]),Ui(a,n.n[0],n.n[1],n.n[2]);let f=-Math.sin(l)*a[0]+Math.cos(l)*a[3],h=-Math.sin(l)*a[1]+Math.cos(l)*a[4],d=-Math.sin(l)*a[2]+Math.cos(l)*a[5],g=Io(f+.25*n.n[0],h+.25*n.n[1],d+.25*n.n[2]),v=.58,p=Io(c[0],c[1],c[2]),m=[c[0]+p[0]*v*.92,c[1]+p[1]*v*.92,c[2]+p[2]*v*.92];i.push({c:m,n:g,r:v,level:2,w:.42*(o%2?1:-1)});for(let _=0;_<3;_++){let E=_/3*Ye+o;mr(r,m[0],m[1],m[2],g[0],g[1],g[2],v,E);let y=[r[0],r[1],r[2]],S=e.push({p:y,level:2})-1;t.push([u,S]);let M=Io(Math.sin(o*3+_),Math.cos(o+_*2),Math.sin(_*5+1));i.push({c:y,n:M,r:.17,level:3,w:1.15*(_%2?1:-1)})}}for(let o=0;o<3;o++){mr(r,0,0,0,s.n[0],s.n[1],s.n[2],s.r,o/3*Ye+.9);let l=e.push({p:[r[0],r[1],r[2]],level:1})-1;t.push([0,l]),t.push([l,1+o*2%5*4])}for(let o=0;o<5;o++)t.push([1+o*4,1+(o+2)%5*4]);return{loops:i,nodes:e,links:t}}var d0={id:"ch1",seed:2101,radius:3.2,center:[0,0,0],view:{yaw:0,pitch:.26},tint:$t.ice,morph:"chapter",reading:{preview:.7},compose:{contents:{wide:{scale:.93}}},*build(i){let{loops:e,nodes:t,links:n}=gd(),s=[0,0,0],r=[K.white,K.ice,Xi(K.ice,K.white,.5),Xi(K.iceHi,K.white,.35)],a=e.reduce((h,d)=>h+d.r*(d.level===1?1.5:1),0),o=i.quota(.56);for(let h of e){let d=Math.round(o*h.r*(h.level===1?1.5:1)/a),g=h.level===1?23:h.level===2?9:4,v=h.level===1?.022:h.level===2?.015:.009;for(let p=0;p<d;p++){i.tick()&&(yield);let m=0;for(let E=0;E<6&&(m=i.rng()*Ye,!(i.rng()<.22+.78*Math.pow(.5+.5*Math.sin(m*g),3)));E++);mr(s,h.c[0],h.c[1],h.c[2],h.n[0],h.n[1],h.n[2],h.r+i.gauss()*v,m);let _=i.point(s[0]+i.gauss()*v*.4,s[1]+i.gauss()*v*.4,s[2]+i.gauss()*v*.4,r[h.level],(h.level===3?.3:.2)*(.5+i.rng()*.9),.01+i.rng()*.009);i.orbit(_,h.n[0],h.n[1],h.n[2],h.w,h.c[0],h.c[1],h.c[2])}}nn(i,i.quota(.025),0,0,0,.06,K.sun,.34,.016,{falloff:1.6,spin:.5}),nn(i,i.quota(.006),0,0,0,.03,K.core,.9,.02,{spin:.8});let l=Xi(K.white,K.hot,.6),c=i.quota(.075)/(t.length-1);for(let h=1;h<t.length;h++){yield;let d=t[h];nn(i,Math.round(c*(d.level===1?1.7:.75)),d.p[0],d.p[1],d.p[2],d.level===1?.036:.022,d.level===1?l:K.white,.3,.014,{falloff:1.4,twinkle:.3})}let u=i.quota(.17)/n.length;for(let[h,d]of n){yield;let g=t[h].p,v=t[d].p,p=t[d].level,m=p===2?.55:.3;r0(i,Math.round(u*(p===2?.7:1.3)),g[0],g[1],g[2],v[0],v[1],v[2],st(K.yellow,K.sun,.35),.3,.016,m,.012)}let f=i.quota(.1);for(let h=0;h<f;h++){i.tick()&&(yield);let d=.5+Math.pow(i.rng(),.6)*2.8,g=i.rng()*2-1,v=i.rng()*Ye,p=Math.sqrt(1-g*g),m=i.point(d*p*Math.cos(v),d*g*.7,d*p*Math.sin(v),st(K.deep,K.ice,i.rng()*.6),.006+.014*i.rng(),.01+i.rng()*.008);i.orbit(m,.18,1,.32,.04),i.twinkle(m,.9)}}};var Lo={matrix:ps(0,.62,0),layers:[-.92,0,.92],half:1.5,rackCols:[-.72,.72],rackRows:[-1.1,-.55,0,.55,1.1],rack:{w:.9,h:.46,d:.3}},bn=[0,0,0],f0={id:"ch2",seed:2202,radius:2.55,center:[0,.05,0],view:{yaw:0,pitch:.5},tint:$t.ice,morph:"chapter",reading:{preview:.6},*build(i){let e=Lo.matrix,t=(C,L,B,V,X,U)=>(di(e,C,L,B,bn),i.point(bn[0],bn[1],bn[2],V,X,U)),n=(C,L,B,V,X)=>{di(e,L,B,V,bn),i.flow(C,bn[0],bn[1],bn[2],X)},{layers:s,rackCols:r,rackRows:a,rack:o,half:l}=Lo,c=[];for(let C of s)for(let L of r)for(let B of a)L>0&&B===0&&C===0||c.push([L,C,B]);let u=i.quota(.3),f=Math.floor(u/c.length),{w:h,h:d,d:g}=o,v=[];for(let C of[-1,1])for(let L of[-1,1])v.push([[C*h/2,0,L*g/2],[C*h/2,d,L*g/2]]);for(let C of[0,d])for(let L of[-1,1])v.push([[-h/2,C,L*g/2],[h/2,C,L*g/2]]);for(let C of[0,d])for(let L of[-1,1])v.push([[L*h/2,C,-g/2],[L*h/2,C,g/2]]);let p=v.map(([C,L])=>Math.hypot(L[0]-C[0],L[1]-C[1],L[2]-C[2])),m=p.reduce((C,L)=>C+L,0);for(let[C,L,B]of c)for(let V=0;V<f;V++){i.tick()&&(yield);let X=i.rng()*m,U=0;for(;X>p[U]&&U<v.length-1;)X-=p[U++];let[k,W]=v[U],J=i.rng(),j=t(C+k[0]+(W[0]-k[0])*J,L+k[1]+(W[1]-k[1])*J,B+k[2]+(W[2]-k[2])*J,st(K.white,K.ice,.5),.14+.08*i.rng(),.011+.006*i.rng());i.twinkle(j,.05)}let _=i.quota(.17),E=.042;for(let C=0;C<_;C++){i.tick()&&(yield);let[L,B,V]=c[Math.floor(i.rng()*c.length)],X=i.rng(),U,k,W,J=(j,Ae)=>Math.round(j/E)*E-Ae%E/2;X<.5?(U=L-Math.sign(L)*h/2,k=Math.min(d,Math.max(0,J(i.rng()*d,d))),W=Math.max(-g/2,Math.min(g/2,J((i.rng()-.5)*g,g)))):X<.8?(U=Math.max(-h/2,Math.min(h/2,J((i.rng()-.5)*h,h)))+L,k=d,W=Math.max(-g/2,Math.min(g/2,J((i.rng()-.5)*g,g)))):(U=Math.max(-h/2,Math.min(h/2,J((i.rng()-.5)*h,h)))+L,k=Math.min(d,Math.max(0,J(i.rng()*d,d))),W=(i.rng()<.5?-1:1)*g/2),t(U,B+k,V+W,K.steel,.05+.05*i.rng(),.011)}let y=i.quota(.05);for(let C=0;C<y;C++){i.tick()&&(yield);let[L,B,V]=c[Math.floor(i.rng()*c.length)],X=i.rng()<.08,U=Math.round(i.rng()*9)/9*d*.9+d*.05,k=Math.round((i.rng()-.5)*6)/6*g*.85,W=t(L-Math.sign(L)*(h/2+.006),B+U,V+k,X?K.yellow:K.ice,X?.6:.45,.014);i.twinkle(W,1)}let S=i.quota(.07),M=.15,w=Math.round(2*l/M);for(let C=0;C<S;C++){i.tick()&&(yield);let L=s[Math.floor(i.rng()*s.length)]-.02,B=-l+Math.floor(i.rng()*(w+1))*M,V=-l+Math.floor(i.rng()*(w+1))*M;t(B,L,V,K.deep,.05+.03*i.rng(),.012)}let x=i.quota(.025);for(let C=0;C<x;C++){i.tick()&&(yield);let L=(C&1?1:-1)*l,B=(C&2?1:-1)*l;t(L,-.94+i.rng()*1.9,B,K.steel,.1,.012)}let A=i.quota(.03);for(let C=0;C<A;C++){i.tick()&&(yield);let L=s[C%3],B=i.rng()*Ye,V=.13+i.gauss()*.006,X=t(V*Math.cos(B),L+.02+i.gauss()*.006,V*Math.sin(B),K.core,.6,.014);di(e,0,1,0,bn),i.orbit(X,bn[0],bn[1],bn[2],.6)}let R=i.quota(.08),P=[0,0,0];for(let C=0;C<R;C++){i.tick()&&(yield);let L=s[C%3]+.03,B=i.rng()<.5?-1:1,V=.15+Math.pow(i.rng(),1.6)*.6,X=1-V/.75;at(1900+4700*Math.pow(X,1.4),1,P);let U=t(i.gauss()*.035,L+Math.abs(i.gauss())*.02,B*V,st(K.iceHi,P,cr(0,.3,X)),.16+.36*X*X,.013);n(U,0,0,-B*.07,.05+.04*i.rng())}let F=i.quota(.1);for(let C=0;C<F;C++){i.tick()&&(yield);let L=s[C%3]+.03,B=i.rng()<.5?-1:1,V;if(i.rng()<.6)V=t(i.gauss()*.012,L,B*l,K.iceHi,.24,.013),n(V,0,0,-B*(l-.72),.22+.08*i.rng());else{let X=(a[Math.floor(i.rng()*4)]+.275)*1,U=i.rng()<.5?-1:1;V=t(U*l,L,X,st(K.ice,K.white,.35),.2,.012),n(V,-U*l,0,0,.16+.06*i.rng())}}let N=i.quota(.05);for(let C=0;C<N;C++){i.tick()&&(yield);let L=t(i.gauss()*.02,-.95,i.gauss()*.02,st(K.hot,K.white,i.rng()*.5),.26,.012);n(L,0,2.4,0,.12+.04*i.rng())}}};var vd=.62,p0=ps(.42,-.18,.28),V1=[0,0,0];function xs(i,e=V1){let t=i*Ye,n=2+Math.cos(3*t);return di(p0,n*Math.cos(2*t)*vd,n*Math.sin(2*t)*vd,Math.sin(3*t)*vd,e)}function xd(i,e){let n=xs(i-1e-4,[0,0,0]),s=xs(i+1e-4,[0,0,0]),r=s[0]-n[0],a=s[1]-n[1],o=s[2]-n[2],l=Math.sqrt(r*r+a*a+o*o);r/=l,a/=l,o/=l;let c=di(p0,0,0,1,[0,0,0]),u=a*c[2]-o*c[1],f=o*c[0]-r*c[2],h=r*c[1]-a*c[0],d=Math.sqrt(u*u+f*f+h*h)||1;return u/=d,f/=d,h/=d,e[0]=r,e[1]=a,e[2]=o,e[3]=u,e[4]=f,e[5]=h,e[6]=a*h-o*f,e[7]=o*u-r*h,e[8]=r*f-a*u,e[9]=l/(2*1e-4),e}var da=[.04,.2,.37,.53,.7,.87],ua=.8,m0={id:"ch3",seed:2303,radius:2.55,center:[0,0,0],view:{yaw:0,pitch:.22},tint:$t.deep,morph:"chapter",reading:{preview:1,evolve:[.42,1],mode:1},*build(i){let e=new Float64Array(10),t=[0,0,0],n=5,s=.12,r=i.quota(.52);for(let d=0;d<r;d++){i.tick()&&(yield);let g=d%n,v=i.rng();xd(v,e),xs(v,t);let p=g/n*Ye+v*Ye*2,m=s*(.92+i.rng()*.16),_=(e[3]*Math.cos(p)+e[6]*Math.sin(p))*m,E=(e[4]*Math.cos(p)+e[7]*Math.sin(p))*m,y=(e[5]*Math.cos(p)+e[8]*Math.sin(p))*m,S=i.rng()<.012,M=i.point(t[0]+_,t[1]+E,t[2]+y,S?K.yellow:st(K.white,K.ice,.3+.4*(g/n)),S?.8:.19+.12*i.rng(),S?.042:.012+.008*i.rng()),w=.16;i.flow(M,e[0]*w,e[1]*w,e[2]*w,.32+.06*(g%2)),v>ua&&i.evolve(M,.42+(v-ua)/(1-ua)*.56),i.key(M,v)}let a=i.quota(.08);for(let d=0;d<a;d++){i.tick()&&(yield);let g=i.rng();xs(g,t),xd(g,e);let v=i.point(t[0]+i.gauss()*.03,t[1]+i.gauss()*.03,t[2]+i.gauss()*.03,K.steel,.07,.016);i.flow(v,e[0]*.1,e[1]*.1,e[2]*.1,.2),g>ua&&i.evolve(v,.42+(g-ua)/(1-ua)*.56),i.key(v,g)}let o=i.quota(.07),l=i.quota(.2),c=[];da.forEach((d,g)=>{xs(d,t),xd(d,e);let v=[t[0],t[1],t[2]];nn(i,Math.round(o/da.length),v[0],v[1],v[2],.06,st(K.orange,K.sun,.45),.32,.018,{falloff:1.1,twinkle:.4});let p=g%2?1:-1,m=.3+.06*(g%3),_=[v[0]+e[3]*p*(m+.1),v[1]+e[4]*p*(m+.1),v[2]+e[5]*p*(m+.1)],E=[e[6],e[7],e[8]];if(c.push({c:_,n:E,r:m,w:.55*p}),g%2===0){let y=[_[0]+e[3]*p*(m+.18),_[1]+e[4]*p*(m+.18),_[2]+e[5]*p*(m+.18)];c.push({c:y,n:[e[0],e[1],e[2]],r:.15,w:-1.1*p})}});let u=c.reduce((d,g)=>d+g.r,0);for(let d of c){let g=Math.round(l*d.r/u);for(let v=0;v<g;v++){i.tick()&&(yield),mr(t,d.c[0],d.c[1],d.c[2],d.n[0],d.n[1],d.n[2],d.r+i.gauss()*.012,i.rng()*Ye);let p=i.point(t[0],t[1],t[2],st(K.deep,K.ice,.35),.22+.12*i.rng(),.012+.006*i.rng());i.orbit(p,d.n[0],d.n[1],d.n[2],d.w,d.c[0],d.c[1],d.c[2])}}let f=i.quota(.04),h=[0,0,0];for(let d=0;d<f;d++){i.tick()&&(yield),xs(da[d%da.length],t);let g=i.point(t[0]+i.gauss()*.22,t[1]+i.gauss()*.22,t[2]+i.gauss()*.22,at(2300+1300*i.rng(),1,h),.13,.012);i.twinkle(g,1),i.glint(g,.25)}}};var qs={a:.19,matrix:ps(.55,.62,.18),spin:.045,axis:[0,1,0]};function _d(){let i=new Map,e=(s,r,a)=>i.set(`${s},${r},${a}`,[s,r,a]);for(let s=-4;s<=4;s++)for(let r=-4;r<=4;r++)for(let a=-4;a<=4;a++)Math.abs(s)+Math.abs(r)+Math.abs(a)<=3&&e(s,r,a);let t=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];for(let s of t){let r=t.filter(a=>a[0]*s[0]+a[1]*s[1]+a[2]*s[2]===0);for(let a=1;a<=11;a++){let o=a<5?1:0;for(let l=-o;l<=o;l++)for(let c=-o;c<=o;c++){if(Math.abs(l)+Math.abs(c)>o)continue;let u=r[0],f=r[2];e(s[0]*a+u[0]*l+f[0]*c,s[1]*a+u[1]*l+f[1]*c,s[2]*a+u[2]*l+f[2]*c)}if(a===4||a===7||a===9){let l=a===4?5:a===7?3:2;for(let c of r)for(let u=1;u<=l;u++)e(s[0]*a+c[0]*u,s[1]*a+c[1]*u,s[2]*a+c[2]*u)}}}let n=[...i.values()];return n.sort((s,r)=>Math.hypot(...s)-Math.hypot(...r)),n}function Fo(i,e){let t=qs.a;return di(qs.matrix,i[0]*t,i[1]*t,i[2]*t,e)}var g0={id:"ch4",seed:2404,radius:2.45,center:[0,0,0],view:{yaw:0,pitch:.28},tint:$t.deep,morph:"chapter",reading:{preview:.92,evolve:[.74,1],mode:1},*build(i){let e=_d(),t=Math.hypot(11,1,0),n=[0,0,0],s=[0,0,0],r=qs.axis,a=i.quota(.6),o=Math.max(3,Math.floor(a/e.length));for(let f of e){Fo(f,n);let h=Math.hypot(f[0],f[1],f[2])/t,d=Math.min(.97,.04+h*.92),g=h<.45?Xi(K.deep,K.ice,Math.pow(h/.45,1.5)):Xi(K.ice,K.white,Math.pow((h-.45)/.55,1.3)),v=(1+.5*Math.max(0,(h-.6)/.4))*(.75+.25*Math.min(1,h/.3));for(let p=0;p<o;p++){i.tick()&&(yield);let m=p<o*.4,_=m?.008:.026,E=i.point(n[0]+i.gauss()*_,n[1]+i.gauss()*_,n[2]+i.gauss()*_,g,(m?.42:.035)*v,m?.012:.01);i.orbit(E,r[0],r[1],r[2],qs.spin),i.evolve(E,d)}}let l=i.quota(.14),c=e.slice(Math.floor(e.length*.45));for(let f=0;f<l;f++){i.tick()&&(yield);let h=c[Math.floor(i.rng()*c.length)];Fo(h,n),Ai(i,s);let d=.25+i.rng()*.35,g=i.point(n[0]+s[0]*d,n[1]+s[1]*d,n[2]+s[2]*d,st(K.ice,K.white,i.rng()),.12,.01);i.flow(g,-s[0]*d,-s[1]*d,-s[2]*d,.22+.15*i.rng()),i.orbit(g,r[0],r[1],r[2],qs.spin)}nn(i,i.quota(.012),0,0,0,.04,K.sun,.4,.02,{falloff:1.2});let u=i.quota(.18);for(let f=0;f<u;f++){i.tick()&&(yield),Ai(i,s);let h=1+Math.pow(i.rng(),.7)*2.6,d=i.point(s[0]*h,s[1]*h*.85,s[2]*h,st(K.mist,K.web,i.rng()),.014+.02*i.rng(),.011+.006*i.rng());i.orbit(d,i.rng()-.5,1,i.rng()-.5,.05+.08*i.rng()),i.twinkle(d,.5)}}};var fa=.5,v0={id:"ch5",seed:2505,radius:2.7,center:[0,0,0],view:{yaw:0,pitch:.3},tint:Kc(Eo.yellow),morph:"chapter",reading:{preview:.9,evolve:[.7,1],mode:1},*build(i){let e=new Float64Array(6),t=[0,0,0],n=[[.06,1,.12],[.92,.5,.18],[-.62,.55,.62],[.25,.32,-.95],[-.88,.25,-.35],[.5,-.32,.82],[0,.2,1]],s=[];for(let h=0;h<84;h++){i.tick()&&(yield);let d=n[h%n.length],g=d[0]+i.gauss()*.07,v=d[1]+i.gauss()*.07,p=d[2]+i.gauss()*.07,m=Math.hypot(g,v,p),_=.82+Math.pow(i.rng(),.9)*1.45;s.push({n:[g/m,v/m,p/m],r:_,dir:i.rng()<.8?1:-1,trains:1+Math.floor(i.rng()*4),phase:i.rng()*Ye,weight:.6+i.rng()*.8})}let r=i.quota(.5),a=[0,0,0];for(let h=0;h<3;h++)a[h]=K.white[h]*.45+K.sun[h]*.55;let o=s.reduce((h,d)=>h+d.weight*d.r,0);for(let h of s){let d=Math.round(r*h.weight*h.r/o);Ui(e,h.n[0],h.n[1],h.n[2]);for(let g=0;g<d;g++){i.tick()&&(yield);let v=0;for(let R=0;R<5&&(v=i.rng()*Ye,!(i.rng()<.25+.75*Math.pow(.5+.5*Math.cos(v*h.trains+h.phase),2)));R++);let p=h.r+i.gauss()*.006,m=Math.cos(v)*p,_=Math.sin(v)*p,E=i.gauss()*.006,y=e[0]*m+e[3]*_+h.n[0]*E,S=e[1]*m+e[4]*_+h.n[1]*E,M=e[2]*m+e[5]*_+h.n[2]*E,w=Math.pow(.9/h.r,2),x=i.rng()<.05,A=i.point(y,S,M,x?K.sun:st(st(K.ice,K.deep,.25),a,Math.min(1,w)*.75),x?.5:(.12+.14*i.rng())*(.7+.5*w),x?.016:.0075+.005*i.rng());i.orbit(A,h.n[0],h.n[1],h.n[2],h.dir*.3/Math.pow(h.r,1.5)),i.evolve(A,.2+i.rng()*.78),x&&i.glint(A,1)}}let l=i.quota(.2);for(let h=0;h<l;h++){i.tick()&&(yield),Ai(i,t);let d=t[0],g=t[1],v=t[2];Ui(e,d,g,v);let p=.8+Math.pow(i.rng(),.7)*1.6,m=i.rng()*Ye,_=Math.cos(m)*p,E=Math.sin(m)*p,y=i.point(e[0]*_+e[3]*E,e[1]*_+e[4]*E,e[2]*_+e[5]*E,st(K.white,K.ice,.5),.07+.08*i.rng(),.007+.004*i.rng());i.orbit(y,d,g,v,.3/Math.pow(p,1.5)),i.evolve(y,.2+i.rng()*.78),i.twinkle(y,.3)}let c=i.quota(.05);for(let h=0;h<c;h++){i.tick()&&(yield),Ai(i,t);let d=fa*(1.02+Math.abs(i.gauss())*.08),g=i.point(t[0]*d,t[1]*d,t[2]*d,st(K.core,K.sun,i.rng()*.7),.18,.016);i.orbit(g,0,1,0,.12),i.twinkle(g,.6)}let u=i.quota(.06);for(let h=0;h<u;h++){i.tick()&&(yield),Ai(i,t);let d=fa*1.15,g=.8+i.rng()*1.6,v=i.point(t[0]*d,t[1]*d,t[2]*d,K.sun,.02+.03*i.rng(),.012);i.flow(v,t[0]*g,t[1]*g,t[2]*g,.06+.06*i.rng())}let f=i.quota(.08);for(let h=0;h<f;h++){i.tick()&&(yield);let d=2.7+Math.pow(i.rng(),1.3)*2.2,g=i.rng()*Ye,v=i.point(d*Math.cos(g),i.gauss()*.12,d*Math.sin(g),K.deep,.012+.014*i.rng(),.012);i.orbit(v,.05,1,.1,.34/Math.pow(d,1.5))}}};var yd=(i,e,t)=>{let n=Math.hypot(i,e,t);return[i/n,e/n,t/n]},Xs=[{c:[-2.05,.32,-.35],n:yd(.32,1,.5),r:1.3,w:.07,kind:"bright",share:.4,arms:2,pitch:.27,bulge:.2,spread:.13,beads:0},{c:[2.1,-.28,.32],n:yd(-.55,.62,.72),r:1.15,w:-.08,kind:"deep",share:.36,arms:3,pitch:.42,bulge:.07,spread:.24,beads:1},{c:[.35,1.45,-1.7],n:yd(.1,.6,1),r:.42,w:.12,kind:"faint",share:.05,arms:2,pitch:.32,bulge:.14,spread:.18,beads:0}],Md={bright:{core:at(4300,.85),arm:at(5300,.8),outer:at(6400,.7),disc:Xi(K.dust,at(4600),.25),knot:at(9e3,.8),halo:at(4500,.8),br:1,glow:.52},deep:{core:at(5e3,.8),arm:at(15e3,.95),outer:at(22e3,.95),disc:Xi(K.dust,K.reflection,.45),knot:K.halpha,young:at(25e3),halo:Xi(at(5600,.6),K.reflection,.4),br:1.15,glow:.42},faint:{core:at(5200,.6),arm:at(5800,.5),outer:at(6200,.4),disc:Xi(K.dust,K.mist,.5),knot:at(6e3,.5),halo:at(5600,.5),br:.8,glow:.3}},sh=[[0,1],[1,0],[0,2],[2,1]],x0={id:"ch6",seed:2606,radius:3.05,center:[0,.1,0],view:{yaw:0,pitch:.24},tint:$t.deep,morph:"chapter",reading:{preview:.35,spread:[0,.3]},compose:{chapter:{wide:{cx:.7,scale:.8}},contents:{wide:{scale:.86}}},*build(i){let e=new Float64Array(6),t=i.count;for(let r of Xs){Ui(e,r.n[0],r.n[1],r.n[2]);let a=Math.round(t*r.share),o=Md[r.kind],l=Math.tan(r.pitch),c=r.kind==="bright";for(let u=0;u<a;u++){i.tick()&&(yield);let f=i.rng(),h,d,g,v,p,m;if(f<r.bulge)h=Math.abs(i.gauss())*r.r*(c?.16:.11),d=i.rng()*Ye,g=i.gauss()*r.r*(c?.09:.06),v=o.core,p=(.3+.3*i.rng())*o.br,m=.014;else if(f<r.bulge+.64){let x=0,A=0;for(let P=0;P<5&&(x=Math.pow(i.rng(),.75),!(!r.beads||(A=Math.pow(.5+.5*Math.sin(x*29+u%r.arms*2.1),6),i.rng()<.3+.7*A)));P++);if(h=r.r*(.12+.88*x),d=u%r.arms/r.arms*Ye+Math.log(h/(r.r*.12))/l+i.gauss()*r.spread*(.6+x),g=i.gauss()*.03,v=st(o.core,st(o.arm,o.outer,x*x),Math.min(1,x*(c?1.3:2.4))),p=(.12+.2*i.rng())*(1.15-x*.55)*o.br,m=.011+.008*i.rng(),r.beads&&A>.6){let P=i.rng()<.45;v=st(v,P?o.knot:o.young,P?.8:.7),p*=P?2:1.7}i.rng()<.03&&(p=.6*o.br,m=.024)}else h=r.r*Math.pow(i.rng(),.6),d=i.rng()*Ye,g=i.gauss()*.05,v=o.disc,p=(.04+.05*i.rng())*o.br,m=.013;let _=Math.cos(d)*h,E=Math.sin(d)*h,y=r.c[0]+e[0]*_+e[3]*E+r.n[0]*g,S=r.c[1]+e[1]*_+e[4]*E+r.n[1]*g,M=r.c[2]+e[2]*_+e[5]*E+r.n[2]*g,w=i.point(y,S,M,v,p,m);i.orbit(w,r.n[0],r.n[1],r.n[2],r.w,r.c[0],r.c[1],r.c[2]),i.twinkle(w,.12)}}let n=i.quota(.06);for(let r=0;r<n;r++){i.tick()&&(yield);let[a,o]=sh[r%sh.length],l=Xs[a].c,c=Xs[o].c,u=c[0]-l[0],f=c[1]-l[1],h=c[2]-l[2],d=.012,g=i.point(l[0]+i.gauss()*d,l[1]+i.gauss()*d,l[2]+i.gauss()*d,Xi(K.ice,K.iceHi,.3),.13+.16*i.rng(),.011);i.flow(g,u,f,h,.045+.01*i.rng()),i.anchor(g,(l[0]+c[0])/2,(l[1]+c[1])/2,(l[2]+c[2])/2)}let s=i.quota(.08);for(let r=0;r<s;r++){i.tick()&&(yield);let a=i.rng(),o=-2.6+5.2*a+i.gauss()*.6,l=i.point(o,i.gauss()*.7,i.gauss()*.8,st(K.mist,K.web,a),.012+.015*i.rng(),.016);i.anchor(l,o*.5,0,0),i.twinkle(l,.5)}}};var G1=(i,e,t)=>{let n=Math.hypot(i,e,t);return[i/n,e/n,t/n]},Do={normal:G1(.12,1,.28),arms:7,rMax:2.78},_0={id:"ch8",seed:2808,radius:2.85,center:[0,0,0],view:{yaw:0,pitch:.5},tint:$t.deep,morph:"chapter",reading:{preview:.3,expand:[1,.82]},compose:{chapter:{wide:{cx:.75,scale:.8}}},*build(i){let e=new Float64Array(6),t=Do.normal;Ui(e,t[0],t[1],t[2]);let n=[0,0,0],s=.27,r=i.quota(.62),a=at(4600,.5);for(let c=0;c<r;c++){i.tick()&&(yield);let u=c%Do.arms,f=(c>>3)%5,h=Math.pow(i.rng(),.7),d=.06+Do.rMax*h,g=Math.log(d/.06)/Math.tan(s)*.42,v=u/Do.arms*Ye+g+(f-2)*.016*(.5+h)+i.gauss()*.0035*(.4+h),p=i.gauss()*.006*(.4+h)+Math.sin(v*2+u)*.07*h,m=Math.cos(v),_=Math.sin(v),E=(e[0]*m+e[3]*_)*d+t[0]*p,y=(e[1]*m+e[4]*_)*d+t[1]*p,S=(e[2]*m+e[5]*_)*d+t[2]*p,M=Math.pow(1-h,2.4),w=u%2?st(a,K.white,.25*(1-h)):st(K.white,K.ice,.35+.4*h),x=st(st(w,K.white,M*.85),K.core,M*M*M),A=u%2?1.1:1,R=i.point(E,y,S,x,(.16+.14*i.rng())*(.45+1.1*M)*(1.15-.7*h)*A,.0075+.005*i.rng()),P=.42/Math.tan(s),F=.08+d*.07,N=-m+P*_,C=-_-P*m,L=Math.sqrt(N*N+C*C);i.flow(R,(e[0]*N+e[3]*C)/L*F,(e[1]*N+e[4]*C)/L*F,(e[2]*N+e[5]*C)/L*F,.16+.1*i.rng()),i.orbit(R,t[0],t[1],t[2],.07)}let o=i.quota(.1);for(let c=0;c<o;c++){i.tick()&&(yield);let u=.2+Math.pow(i.rng(),.8)*Do.rMax,f=i.rng()*Ye,h=Math.cos(f),d=Math.sin(f),g=i.point((e[0]*h+e[3]*d)*u,(e[1]*h+e[4]*d)*u+i.gauss()*.05,(e[2]*h+e[5]*d)*u,st(K.deep,K.ice,.3),.02+.02*i.rng(),.01);i.flow(g,-(e[0]*h+e[3]*d)*u*.3,-(e[1]*h+e[4]*d)*u*.3,-(e[2]*h+e[5]*d)*u*.3,.06),i.orbit(g,t[0],t[1],t[2],.08)}let l=i.quota(.12);for(let c=0;c<l;c++){i.tick()&&(yield),Ai(i,n);let u=2.6+i.rng()*2.4,f=i.point(n[0]*u,n[1]*u*.8,n[2]*u,st(K.deep,K.ice,i.rng()*.4),.012+.02*i.rng(),.011);i.flow(f,-n[0]*u*.4,-n[1]*u*.32,-n[2]*u*.4,.04+.03*i.rng())}nn(i,i.quota(.014),0,0,0,.04,K.sun,.3,.012,{falloff:1.5,spin:1.2,twinkle:.8}),nn(i,i.quota(.004),0,0,0,.012,K.core,.7,.012,{spin:1.6,twinkle:.5})}};var ma={yaw:0,pitch:.2},pa=[Math.sin(ma.yaw)*Math.cos(ma.pitch),Math.sin(ma.pitch),Math.cos(ma.yaw)*Math.cos(ma.pitch)],W1=.87,y0={id:"seed",seed:2909,radius:1.9,center:[0,0,0],view:ma,tint:Kc(Eo.yellow),morph:"seed",reading:{preview:1},compose:{reading:{wide:{scale:.37}}},*build(i){let e=[0,0,0],t=i.quota(.46);for(let f=0;f<t;f++){i.tick()&&(yield),Ai(i,e);let h=Math.abs(i.gauss())*.09*(.6+.4*i.rng()),d=Math.exp(-h*18),g=i.point(e[0]*h,e[1]*h,e[2]*h,st(K.sun,K.core,.25+.75*d),.008+.022*d,.01);i.orbit(g,i.rng()-.5,i.rng()-.5,i.rng()-.5,.4+1.2*i.rng())}let n=i.quota(.18);for(let f=0;f<n;f++){i.tick()&&(yield),Ai(i,e);let h=.1+Math.abs(i.gauss())*.22,d=i.point(e[0]*h,e[1]*h,e[2]*h,K.yellow,(.01+.012*i.rng())*(1-.35*i.rng()),.011);i.orbit(d,e[2],1,-e[0],.3+.5*i.rng()),i.twinkle(d,.5)}let s=i.quota(.1),r=[],a=new Float64Array(6);Ui(a,pa[0],pa[1],pa[2]);let o=Math.cos(W1);for(let f=0;f<56;f++){i.tick()&&(yield);let h=o+(1-o)*i.rng(),d=i.rng()*Ye,g=Math.sqrt(1-h*h),v=pa[0]*h+(a[0]*Math.cos(d)+a[3]*Math.sin(d))*g,p=pa[1]*h+(a[1]*Math.cos(d)+a[4]*Math.sin(d))*g,m=pa[2]*h+(a[2]*Math.cos(d)+a[5]*Math.sin(d))*g,_=.3+Math.pow(i.rng(),1.4)*1;r.push([v,p,m,_,i.rng()<.75?1:-1,i.rng()*Ye,.5+i.rng()*1.4])}let l=new Float64Array(6),c=Xi(K.white,K.hot,.3);for(let f=0;f<s;f++){i.tick()&&(yield);let[h,d,g,v,p,m,_]=r[f%r.length];Ui(l,h,d,g);let E=i.rng(),y=m-p*E*_,S=Math.cos(y)*v,M=Math.sin(y)*v,w=Math.pow(1-E,1.4),x=Math.min(1,Math.max(0,(v-.35)/.45)),A=.25+.75*x*x*(3-2*x),R=i.point(l[0]*S+l[3]*M,l[1]*S+l[4]*M,l[2]*S+l[5]*M,c,(.012+.05*w)*(1.2-v*.4)*(.78-.3*(v-.3))*A,.008+.003*w);i.orbit(R,h,d,g,p*.32/Math.pow(v,1.5)),i.twinkle(R,.3)}let u=i.quota(.08);for(let f=0;f<u;f++){i.tick()&&(yield);let h=f%5,d=i.rng(),g=.35+d*2.4,v=h*1.2566+Math.log(g/.35)*2.2+i.gauss()*.02,p=Math.cos(v)*g,m=Math.sin(v)*g,_=Math.sin(v*.5+h)*.18*d,E=i.point(p,_,m,st(K.deep,K.ice,.5*(1-d)),(.03+.04*i.rng())*(1-.6*d),.009),y=.25+g*.15;i.flow(E,(-Math.cos(v)-Math.sin(v)*.45)*y,0,(-Math.sin(v)+Math.cos(v)*.45)*y,.08),i.orbit(E,0,1,0,.1)}}},M0={id:"origin",seed:3001,radius:3.2,center:[0,0,0],view:{yaw:0,pitch:.35},tint:$t.deep,morph:"intro",reading:{preview:1},*build(i){let e=[0,0,0];for(;i.remaining>0;){i.tick()&&(yield),Ai(i,e);let t=5.5+Math.pow(i.rng(),.5)*9,n=i.point(e[0]*t,e[1]*t*.7,e[2]*t,st(K.steel,K.ice,i.rng()*.3),.008+.012*i.rng(),.02);i.orbit(n,0,1,0,.02+.02*i.rng())}}};var gr={origin:M0,cover:u0,ch1:d0,ch2:f0,ch3:m0,ch4:g0,ch5:v0,ch6:x0,ch7:a0,ch8:_0,seed:y0},q1={preview:1,evolve:[1,1],mode:0,expand:[1,1],spread:[0,0],dim:[1,1]};for(let i of Object.values(gr))i.reading={...q1,...i.reading};function S0(i,e){return i==="cover"?"cover":i==="ending-ready"?"seed":i==="origin"?"origin":`ch${Math.max(1,Math.min(8,e|0||1))}`}function*b0(i,e){let t=gr[i]||gr.cover;return yield*new ih(e,t.seed).run(t,h0(e),s0)}function Sd(i,e){let t=b0(i,e),n;do n=t.next();while(!n.done);return n.value}function ga(i,e){let t=fs(3001),n={count:e,pos:new Float32Array(e*3),look:new Uint8Array(e*4),spin:new Int16Array(e*4),pivot:new Int16Array(e*3),stream:new Int16Array(e*4),aux:new Uint8Array(e*4)},s=i.pos,r=K.steel,a=K.ice,o=Math.round(Math.sqrt(.02/ot.SIZE_MAX)*255);for(let l=0;l<e;l++){let c=s[l*3],u=s[l*3+1],f=s[l*3+2],h=Math.sqrt(c*c+u*u+f*f);if(h<.001){let p=t()*2-1,m=t()*Math.PI*2,_=Math.sqrt(1-p*p);c=_*Math.cos(m),u=p,f=_*Math.sin(m),h=1}let d=(5.5+Math.sqrt(t())*9)/h;n.pos[l*3]=c*d,n.pos[l*3+1]=u*d*.7,n.pos[l*3+2]=f*d;let g=t()*.3,v=.008+.012*t();n.look[l*4]=Math.round(Math.sqrt(Math.min(1,(r[0]+(a[0]-r[0])*g)*v))*255),n.look[l*4+1]=Math.round(Math.sqrt(Math.min(1,(r[1]+(a[1]-r[1])*g)*v))*255),n.look[l*4+2]=Math.round(Math.sqrt(Math.min(1,(r[2]+(a[2]-r[2])*g)*v))*255),n.look[l*4+3]=o,n.spin[l*4+1]=32767,n.spin[l*4+3]=Math.round((.02+.02*t())/ot.SPIN_MAX*32767)}return n}var rh=class{constructor(e,t=null){this.count=e,this.limit=e>1e5?9:12,this.map=new Map,this.pending=new Map,this.worker=t,this.lastBuildMs=0}peek(e){let t=this.map.get(e);return t?(this.map.delete(e),this.map.set(e,t),t):null}get(e){let t=this.peek(e);if(t)return t;let n=performance.now(),s=Sd(e,this.count);return this.lastBuildMs=performance.now()-n,this._store(e,s)}get async(){return!!(this.worker&&this.worker.alive)}request(e,{origin:t=!1}={}){let n=this.peek(e);if(n&&(!t||n.origin))return Promise.resolve(n);let s=this.pending.get(e);if(s&&(!t||s.origin))return s.promise;if(!this.async){let o=this.get(e);return t&&!o.origin&&(o.origin=ga(o,this.count)),Promise.resolve(o)}let r=performance.now(),a=this.worker.build(e,this.count,t).then(o=>{this.pending.delete(e),this.lastBuildMs=performance.now()-r;let l=this.map.get(e);return l?(o.origin&&!l.origin&&(l.origin=o.origin),l):this._store(e,o)},o=>{this.pending.delete(e),console.warn("Universe: formation worker failed, building on the main thread \u2014",o&&o.message);let l=this.get(e);return t&&!l.origin&&(l.origin=ga(l,this.count)),l});return this.pending.set(e,{promise:a,origin:t}),a}_store(e,t){let n=gr[e]||gr.cover;for(t.id=n.id,t.spec=n,this.map.set(e,t);this.map.size>this.limit;)this.map.delete(this.map.keys().next().value);return t}job(e){let t=b0(e,this.count),n=this,s=0,r=.5;return{id:e,result:null,step(a){if(this.result)return!0;let o=performance.now(),l=o+a,c,u=o;do{let f=u;c=t.next(),u=performance.now(),r=r*.8+(u-f)*.2}while(!c.done&&u+r<l);return s+=u-o,c.done?(n.lastBuildMs=s,this.result=n.map.get(e)||n._store(e,c.value),!0):!1}}}has(e){return this.map.has(e)}delete(e){this.map.delete(e)}get size(){return this.map.size}clear(){this.map.clear()}};var X1=4e3;function w0(i){i.onmessage=e=>{let t=e.data||{};if(t.type==="build")try{let n=Sd(t.id,t.count),s=[n.pos.buffer,n.look.buffer,n.spin.buffer,n.pivot.buffer,n.stream.buffer,n.aux.buffer],r=null;t.origin&&(r=ga(n,t.count),s.push(r.pos.buffer,r.look.buffer,r.spin.buffer,r.pivot.buffer,r.stream.buffer,r.aux.buffer)),i.postMessage({type:"built",req:t.req,data:n,origin:r},s)}catch(n){i.postMessage({type:"error",req:t.req,message:String(n&&n.message||n)})}},i.postMessage({type:"ready"})}function T0(){return typeof window>"u"&&typeof self<"u"&&typeof self.postMessage=="function"&&typeof importScripts=="function"}var ah=class i{static create(e){if(typeof Worker>"u"||!e)return null;let t=null,n=!1;try{if(e.src)t=e.src;else{let s=e.text||e.textContent||"";if(s.length<1e3||typeof Blob>"u"||typeof URL>"u"||!URL.createObjectURL)return null;t=URL.createObjectURL(new Blob([s],{type:"text/javascript"})),n=!0}return new i(new Worker(t),n?t:null)}catch{return n&&t&&URL.revokeObjectURL(t),null}}constructor(e,t){this.worker=e,this.blobUrl=t,this.alive=!0,this.ready=!1,this.seq=0,this.jobs=new Map,this.timer=setTimeout(()=>{this.ready||this.fail(new Error("formation worker did not start"))},X1),e.onmessage=n=>this.onMessage(n.data||{}),e.onerror=n=>{n.preventDefault?.(),this.fail(new Error(n&&n.message||"formation worker error"))}}onMessage(e){if(e.type==="ready"){this.ready=!0,clearTimeout(this.timer),this.blobUrl&&(URL.revokeObjectURL(this.blobUrl),this.blobUrl=null);return}let t=this.jobs.get(e.req);if(t)if(this.jobs.delete(e.req),e.type==="built"){let n=e.data;e.origin&&(n.origin=e.origin),t.resolve(n)}else t.reject(new Error(e.message||"build failed"))}build(e,t,n){return this.alive?new Promise((s,r)=>{let a=++this.seq;this.jobs.set(a,{resolve:s,reject:r});try{this.worker.postMessage({type:"build",req:a,id:e,count:t,origin:!!n})}catch(o){this.jobs.delete(a),r(o)}}):Promise.reject(new Error("formation worker unavailable"))}fail(e){if(this.alive){this.alive=!1,clearTimeout(this.timer);try{this.worker.terminate()}catch{}this.blobUrl&&URL.revokeObjectURL(this.blobUrl);for(let t of this.jobs.values())t.reject(e);this.jobs.clear()}}dispose(){this.fail(new Error("disposed"))}};var Y1=[[.09,1e4,26e3],[.26,7500,1e4],[.54,6e3,7500],[.82,5200,6e3],[.96,3800,5200],[1,2900,3800]];function $1(i,e){for(let[t,n,s]of Y1)if(i<t)return n*Math.pow(s/n,e);return 6e3}var oh=class{constructor(e){let t=fs(7741),n=new Float32Array(e*3),s=new Uint8Array(e*4),r=new Float32Array(e),a=[0,0,0];for(let l=0;l<e;l++){let c=t()*2-1,u=t()*Ye,f=Math.sqrt(1-c*c),h=t()<.35?.28:1,d=60+t()*30;n[l*3]=f*Math.cos(u)*d,n[l*3+1]=c*h*d,n[l*3+2]=f*Math.sin(u)*d;let g=Math.pow(t(),5.5),v=$1(t(),t());$c(v,.78,a);let p=.22+.78*Math.pow(t(),2.2)*(.4+g),m=p*p*.82/Math.max(1,a[0]*p*p*.82,a[2]*p*p*.82);s[l*4]=Math.round(Math.sqrt(Math.min(1,a[0]*m))*255),s[l*4+1]=Math.round(Math.sqrt(Math.min(1,a[1]*m))*255),s[l*4+2]=Math.round(Math.sqrt(Math.min(1,a[2]*m))*255),s[l*4+3]=Math.round(g*255),r[l]=t()}let o=new xt;o.setAttribute("position",new vt(n,3)),o.setAttribute("aLook",new vt(s,4,!0)),o.setAttribute("aSeed",new vt(r,1)),this.positions=n,this.look=s,this.count=e,this.uniforms={uTime:{value:0},uPixelRatio:{value:1},uTwinkle:{value:1},uGain:{value:.55}},this.material=new De({name:"UniverseStars",uniforms:this.uniforms,vertexShader:$p,fragmentShader:Kp,transparent:!0,depthWrite:!1,depthTest:!0,blending:Zn,blendEquation:Wi,blendSrc:Un,blendDst:Un}),this.points=new Di(o,this.material),this.points.frustumCulled=!1,this.points.renderOrder=1,this.geometry=o}snapshot(e,t,n){let s=this.uniforms.uGain.value;for(let r=0;r<this.count;r++){let a=(n+r)*3;e[a]=this.positions[r*3],e[a+1]=this.positions[r*3+1],e[a+2]=this.positions[r*3+2];let o=this.look[r*4+3]/255,l=(.05+.95*o*o)*s;for(let c=0;c<3;c++){let u=this.look[r*4+c]/255;t[a+c]=u*u*l}}}dispose(){this.geometry.dispose(),this.material.dispose()}};var kn={transparent:!0,depthWrite:!1,depthTest:!0,blending:Zn,blendEquation:Wi,blendSrc:Un,blendDst:Un},E0=new Vi(2,2),A0=`
uniform float uScale;
varying vec2 vUv;
void main() {
  vUv = position.xy;
  vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  mv.xy += position.xy * uScale;
  gl_Position = projectionMatrix * mv;
}
`,K1=`
${vs}
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
`;function fn({core:i,halo:e,scale:t=.5,intensity:n=1,flicker:s=0,breath:r=0,rays:a=0}){let o={uScale:{value:t},uCore:{value:new D(...i)},uHalo:{value:new D(...e)},uIntensity:{value:n},uOpacity:{value:0},uTime:{value:0},uFlicker:{value:s},uBreath:{value:r},uRays:{value:a}},l=new Je(E0,new De({name:"AccentGlow",uniforms:o,vertexShader:A0,fragmentShader:K1,...kn}));return l.frustumCulled=!1,l.renderOrder=20,l}var vr={vertex:A0,quad:E0},Z1=`
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
`,J1=`
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
`;function _s(i,e={}){let t=i.length,n=new Float32Array(t*6),s=new Float32Array(t*2),r=new Float32Array(t*2),a=new Float32Array(t*2);i.forEach((u,f)=>{n.set(u.a,f*6),n.set(u.b,f*6+3),s[f*2]=u.t0??0,s[f*2+1]=u.t1??1,r[f*2]=r[f*2+1]=u.seed??0,a[f*2]=u.r0??0,a[f*2+1]=u.r1??0});let o=new xt;o.setAttribute("position",new vt(n,3)),o.setAttribute("aT",new vt(s,1)),o.setAttribute("aSeed",new vt(r,1)),o.setAttribute("aR",new vt(a,1));let l={uPhase:{value:0},uOpacity:{value:0},uBase:{value:e.base??.05},uPulse:{value:e.pulse??.6},uDensity:{value:e.density??1},uWidth:{value:e.width??.06},uStep:{value:e.step?1:0},uReveal:{value:e.reveal??10},uFocus:{value:10},uColor:{value:new D(...e.color||[.6,.8,.9])},uPulseColor:{value:new D(...e.pulseColor||e.color||[1,1,1])}},c=new $a(o,new De({name:"AccentLines",uniforms:l,vertexShader:Z1,fragmentShader:J1,...kn}));return c.frustumCulled=!1,c.renderOrder=5,c}function xr(i,{closed:e=!1,seed:t=0,tScale:n=1,reveal:s=null}={}){let r=[],a=0,o=i.length,l=e?o:o-1;for(let c=0;c<l;c++){let u=i[c],f=i[(c+1)%o],h=Math.hypot(f[0]-u[0],f[1]-u[1],f[2]-u[2]);r.push({a:u,b:f,t0:a*n,t1:(a+h)*n,seed:t,r0:s?s(u):0,r1:s?s(f):0}),a+=h}return r}var pn=8,bd=.042;function j1(i,e,t){let n=Ri.nodeOrbit,s=i/pn*Ye+n.phase+e;return di(n.matrix,Math.cos(s)*n.radius,0,-Math.sin(s)*n.radius,t)}var Q1=`
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
`,eM=`
${vs}
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
`,tM=[0,0,0],lh=class{constructor(){this.group=new Et;let e=[],t=[0,0,0],n=Ri.nodeOrbit;for(let a=0;a<240;a++){let o=a/240*Ye;di(n.matrix,Math.cos(o)*n.radius,0,-Math.sin(o)*n.radius,t),e.push([t[0],t[1],t[2]])}this.orbit=_s(xr(e,{closed:!0,tScale:1/(Ye*n.radius)}),{base:.085,pulse:.22,density:3,width:.08,color:K.steel,pulseColor:K.ice}),this.group.add(this.orbit),this.positions=new Float32Array(pn*3);let s=new Float32Array(pn);for(let a=0;a<pn;a++)s[a]=a+1;let r=new xt;this.nodeAttr=new vt(this.positions,3).setUsage(_o),r.setAttribute("position",this.nodeAttr),r.setAttribute("aIndex",new vt(s,1)),this.nodeUniforms={uPixelScale:{value:1e3},uRadius:{value:bd},uSelected:{value:0},uMinPx:{value:2.5},uFocus:{value:10},uOpacity:{value:0},uTime:{value:0},uCold:{value:new D(...K.white).multiplyScalar(.9)},uAccent:{value:new D(...K.ice).multiplyScalar(1.15)}},this.nodes=new Di(r,new De({name:"CoverNodes",uniforms:this.nodeUniforms,vertexShader:Q1,fragmentShader:eM,...kn})),this.nodes.frustumCulled=!1,this.nodes.renderOrder=30,this.group.add(this.nodes),this.glow=fn({core:K.core,halo:K.sun,scale:.3,intensity:.6,flicker:.06,breath:.06}),this.group.add(this.glow),this.spin=NaN}update(e){if(e.nodeSpin!==this.spin){this.spin=e.nodeSpin;let s=tM;for(let r=0;r<pn;r++)j1(r,e.nodeSpin,s),this.positions[r*3]=s[0],this.positions[r*3+1]=s[1],this.positions[r*3+2]=s[2];this.nodeAttr.needsUpdate=!0}let t=e.presence;this.orbit.material.uniforms.uOpacity.value=t,this.orbit.material.uniforms.uPhase.value=e.time*.035%1,this.orbit.material.uniforms.uFocus.value=e.focus;let n=this.nodeUniforms;n.uOpacity.value=t,n.uTime.value=e.gpuTime,n.uSelected.value=e.selected,n.uPixelScale.value=e.pixelScale,n.uMinPx.value=Math.max(2.4,2.2*e.pixelRatio),n.uFocus.value=e.focus,this.glow.material.uniforms.uOpacity.value=t,this.glow.material.uniforms.uTime.value=e.gpuTime}};var iM=ca(Math.round(qs.spin/ot.SPIN_MAX*32767)/32767*ot.SPIN_MAX);function mh(i,e){for(let t=0;t<i.length;t++){let n=i[t].material.uniforms;n.uOpacity.value=e.presence,n.uTime.value=e.gpuTime}}var va=(i,e,t)=>{let n=i.material.uniforms;n.uOpacity.value=e.presence,n.uFocus.value=e.focus,t!==void 0&&(n.uPhase.value=t%1)},hh=class{constructor(){let{nodes:e,links:t}=gd(),n=t.map(([s,r],a)=>({a:e[s].p,b:e[r].p,t0:0,t1:1,seed:a*.618%1}));this.lines=_s(n,{base:.05,pulse:.8,density:1,width:.05,color:K.ice,pulseColor:K.yellow}),this.core=fn({core:K.core,halo:K.sun,scale:.42,intensity:.7,flicker:.04}),this.group=new Et,this.group.add(this.lines,this.core),this.phase=0}update(e){let t=e.time/12%1,n=.18+.9*t*t+.5*e.reading;this.phase=(this.phase+e.dtLiving*n)%1,va(this.lines,e,this.phase),this.core.material.uniforms.uOpacity.value=e.presence,this.core.material.uniforms.uTime.value=e.gpuTime}},uh=class{constructor(){let e=Lo.matrix,t=(v,p,m)=>di(e,v,p,m,[0,0,0]),{layers:n,rackCols:s,rackRows:r,rack:a,half:o}=Lo,l=[],{w:c,h:u,d:f}=a,h=[];for(let v of[-1,1])for(let p of[-1,1])h.push([[v*c/2,0,p*f/2],[v*c/2,u,p*f/2]]);for(let v of[0,u])for(let p of[-1,1])h.push([[-c/2,v,p*f/2],[c/2,v,p*f/2]]);for(let v of[0,u])for(let p of[-1,1])h.push([[p*c/2,v,-f/2],[p*c/2,v,f/2]]);for(let v of n){for(let m of s)for(let _ of r)if(!(m>0&&_===0&&v===0))for(let[E,y]of h)l.push({a:t(m+E[0],v+E[1],_+E[2]),b:t(m+y[0],v+y[1],_+y[2])});let p=[[-o,-o],[o,-o],[o,o],[-o,o]];for(let m=0;m<4;m++)l.push({a:t(p[m][0],v-.02,p[m][1]),b:t(p[(m+1)%4][0],v-.02,p[(m+1)%4][1])})}for(let[v,p]of[[-o,-o],[o,-o],[o,o],[-o,o]])l.push({a:t(v,n[0]-.02,p),b:t(v,n[2]-.02,p)});this.structure=_s(l,{base:.045,pulse:0,color:K.steel});let d=[];n.forEach((v,p)=>{for(let m of[-1,1]){let _=[];for(let E=0;E<=12;E++)_.push(t(0,v+.03,m*o*(1-E/12)));d.push(...xr(_,{seed:p*.37+(m>0?.5:0),tScale:1/o}))}});let g=[];for(let v=0;v<=16;v++)g.push(t(0,-.95+v/16*2.4,0));d.push(...xr(g,{seed:.2,tScale:1/2.4})),this.aisles=_s(d,{base:.03,pulse:.75,density:3,width:.05,step:!0,color:K.ice,pulseColor:K.iceHi}),this.gates=n.map(v=>{let p=fn({core:K.core,halo:K.yellow,scale:.36,intensity:.55,flicker:.08}),m=t(0,v+.02,0);return p.position.set(m[0],m[1],m[2]),p}),this.group=new Et,this.group.add(this.structure,this.aisles,...this.gates)}update(e){va(this.structure,e),va(this.aisles,e,e.time*.45),mh(this.gates,e)}},dh=class{constructor(){let e=[];for(let n=0;n<360;n++){let s=xs(n/360,[0,0,0]);e.push([s[0],s[1],s[2]])}let t=xr(e,{closed:!0,tScale:1});t.forEach((n,s)=>{let r=s/360,a=(s+1)/360,o=l=>l>.8?.42+(l-.8)/.2*.56:0;n.r0=o(r),n.r1=o(Math.min(a,.9999))}),this.spine=_s(t,{base:.05,pulse:.5,density:.9,width:.04,color:K.steel,pulseColor:K.white}),this.factories=da.map(n=>{let s=fn({core:K.sun,halo:K.orange,scale:.34,intensity:.45,flicker:.12}),r=xs(n,[0,0,0]);return s.position.set(r[0],r[1],r[2]),s}),this.group=new Et,this.group.add(this.spine,...this.factories)}update(e){va(this.spine,e,e.time*.32),this.spine.material.uniforms.uReveal.value=e.evolve,mh(this.factories,e)}},fh=class{constructor(){let e=_d(),t=o=>o.join(","),n=new Map(e.map(o=>[t(o),o])),s=Math.hypot(11,1,0),r=o=>Math.min(.97,.04+Math.hypot(...o)/s*.92),a=[];for(let o of e)for(let l of[[1,0,0],[0,1,0],[0,0,1]]){let c=n.get(t([o[0]+l[0],o[1]+l[1],o[2]+l[2]]));c&&a.push({a:Fo(o,[0,0,0]),b:Fo(c,[0,0,0]),t0:0,t1:1,seed:a.length*.618034%1,r0:r(o),r1:r(c)})}this.bonds=_s(a,{base:.16,pulse:.22,density:1,width:.2,color:K.ice,pulseColor:K.white}),this.seed=fn({core:K.hot,halo:K.yellow,scale:.5,intensity:.34,flicker:.05,breath:.05}),this.spinner=new Et,this.spinner.add(this.bonds),this.group=new Et,this.group.add(this.spinner,this.seed),this.axis=new D(...qs.axis).normalize()}update(e){va(this.bonds,e,e.time*.2),this.bonds.material.uniforms.uReveal.value=e.evolve,this.spinner.quaternion.setFromAxisAngle(this.axis,e.gpuTime*iM),this.seed.material.uniforms.uOpacity.value=e.presence,this.seed.material.uniforms.uTime.value=e.gpuTime}},ph=class{constructor(){this.group=new Et,this.threads=sh.map(([e,t],n)=>{let s=Xs[e].c,r=Xs[t].c,a=[];for(let o=0;o<=24;o++){let l=o/24;a.push([s[0]+(r[0]-s[0])*l,s[1]+(r[1]-s[1])*l,s[2]+(r[2]-s[2])*l])}return _s(xr(a,{seed:n*.31,tScale:1/Math.hypot(r[0]-s[0],r[1]-s[1],r[2]-s[2])}),{base:.018,pulse:.42,density:2,width:.03,color:K.steel,pulseColor:K.ice})}),this.scaler=new Et,this.scaler.add(...this.threads),this.cores=Xs.map(e=>{let t=Md[e.kind];return fn({core:t.core,halo:t.halo,scale:e.r*.42,intensity:t.glow,breath:.03})}),this.group.add(this.scaler,...this.cores)}update(e){let t=1+e.spread;this.scaler.scale.setScalar(t);for(let n=0;n<this.threads.length;n++)va(this.threads[n],e,e.time*.04);for(let n=0;n<this.cores.length;n++){let s=Xs[n].c;this.cores[n].position.set(s[0]*t,s[1]*t,s[2]*t)}mh(this.cores,e)}},wd={core:K.core,halo:at(5400),scale:.72,intensity:.85,breath:.16,rays:.3,flicker:.02},R0={core:[0,0,0],halo:K.yellow,scale:2.2,intensity:.085,breath:.1},ch={intensity:.4,breath:.1,scale:.1,halo:.6},No=class{constructor(e){this.strong=e,this.glow=e?fn(wd):fn({core:K.core,halo:K.sun,scale:.5,intensity:.8,flicker:.22}),this.halo=e?fn(R0):null,this.glows=this.halo?[this.glow,this.halo]:[this.glow],this.group=new Et,this.group.add(...this.glows),this.presence=0,this.arm=0}update(e){mh(this.glows,e),this.presence=e.presence;let t=e.expand;if(this.strong){let n=this.arm=e.arm||0,s=this.glow.material.uniforms;s.uIntensity.value=wd.intensity*(1+ch.intensity*n),s.uBreath.value=wd.breath+ch.breath*n,this.halo.material.uniforms.uIntensity.value=R0.intensity*(1+ch.halo*n),t=1+ch.scale*n}this.group.scale.setScalar(t)}light(){let e=[];for(let t of this.glows){let n=t.material.uniforms;e.push({scale:n.uScale.value*this.group.scale.x,intensity:n.uIntensity.value*n.uOpacity.value,core:[n.uCore.value.x,n.uCore.value.y,n.uCore.value.z],halo:[n.uHalo.value.x,n.uHalo.value.y,n.uHalo.value.z],breath:n.uBreath.value,rays:n.uRays.value})}return e}};var C0=`
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
`,nM=`
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
`,sM=`
uniform float uTime;
uniform float uOpacity;
uniform float uTemp;
uniform float uGain;
uniform vec3 uChromo;
varying vec3 vObj;
varying vec3 vN;
varying vec3 vV;
${C0}
${To()}
void main() {
  float mu = clamp(dot(vN, vV), 0.0, 1.0);
  // Granulation: hot rising cells, cooler sinking lanes, slowly boiling; large-scale supergranulation.
  vec3 p = vObj * 17.0 + vec3(0.0, uTime * 0.05, 0.0);
  float cells = fbm3(p + (vnoise(p * 0.7 + uTime * 0.03) * 0.9375) * 1.6);
  float gran = smoothstep(0.3, 0.66, cells);
  float large = fbm2(vObj * 3.1 - uTime * 0.012);
  float hot = smoothstep(0.58, 0.85, cells + large * 0.2);
  float T = uTemp + mix(-260.0, 40.0, gran) + 150.0 * hot + 60.0 * (large - 0.5);
  // Limb: the intensity falls by the quadratic law, and the light comes from higher, cooler layers.
  float m1 = 1.0 - mu;
  float I = 1.0 - 0.47 * m1 - 0.23 * m1 * m1;
  float Tlimb = T * mix(0.7, 1.0, pow(mu, 0.35));
  float contrast = pow(T / uTemp, 4.0);
  vec3 col = blackbody(Tlimb) * (I * contrast * uGain);
  // The chromosphere: a thin H-alpha rim at the very limb.
  col += uChromo * pow(m1, 7.0);
  gl_FragColor = vec4(col * uOpacity, 1.0);
}
`,rM=`
uniform float uTime;
uniform float uOpacity;
uniform float uExtent;
uniform vec3 uInner;
uniform vec3 uOuter;
varying vec2 vUv;
${C0}
void main() {
  float r = length(vUv) * uExtent;   // in star radii
  if (r < 0.97 || r > uExtent) discard;
  float a = atan(vUv.y, vUv.x);
  float streamers = fbm3(vec3(cos(a) * 2.6, sin(a) * 2.6, r * 0.6 - uTime * 0.05));
  streamers = 0.45 + 0.9 * pow(streamers, 1.6);
  float h = r - 1.0;
  float corona = exp(-h * 3.4) * streamers + exp(-h * 16.0) * 0.3;
  float edge = 1.0 - smoothstep(uExtent * 0.7, uExtent, r);
  vec3 col = mix(uOuter, uInner, exp(-h * 2.4)) * corona * edge;
  gl_FragColor = vec4(col * uOpacity * 0.55, 1.0);
}
`,gh=5e3,aM=(i,e)=>{let t=i%(2*e);return t<e?t:2*e-t},vh=class{constructor(){this.group=new Et,this.sphereUniforms={uTime:{value:0},uOpacity:{value:0},uTemp:{value:gh},uGain:{value:.95},uChromo:{value:new D(...K.halpha).multiplyScalar(.3)}},this.sphere=new Je(new hs(fa,96,64),new De({name:"Star",uniforms:this.sphereUniforms,vertexShader:nM,fragmentShader:sM,...kn,depthWrite:!0})),this.sphere.renderOrder=4;let e=3.4;this.coronaUniforms={uScale:{value:fa*e},uTime:{value:0},uOpacity:{value:0},uExtent:{value:e},uInner:{value:new D(...at(gh,.7)).multiplyScalar(.75)},uOuter:{value:new D(...at(gh,.5)).multiplyScalar(.3)}},this.corona=new Je(vr.quad,new De({name:"Corona",uniforms:this.coronaUniforms,vertexShader:vr.vertex,fragmentShader:rM,...kn})),this.corona.frustumCulled=!1,this.corona.renderOrder=6,this.halo=fn({core:[0,0,0],halo:at(gh,.8),scale:fa*5.5,intensity:.05}),this.group.add(this.sphere,this.corona,this.halo)}update(e){let t=e.presence;this.sphereUniforms.uOpacity.value=t;let n=aM(e.time,600);this.sphereUniforms.uTime.value=n,this.coronaUniforms.uOpacity.value=t,this.coronaUniforms.uTime.value=n,this.halo.material.uniforms.uOpacity.value=t;let s=t>.92;this.sphere.material.depthWrite!==s&&(this.sphere.material.depthWrite=s)}};var oM=.97,P0=`
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
`,I0=`
${vs}
uniform float uTime;
uniform float uOpacity;
uniform vec2 uRange;
uniform vec4 uThermal;   // x: inner temperature (K) at radius y, z: orbital speed (v/c) there, w: gain
varying vec2 vPolar;
varying float vBeam;
varying vec3 vView;
#ifdef OVERLAY
${Co}
#endif
${To()}
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
  // Thin-disc temperature, then the relativistic Doppler factor \u03B4 = 1 / (\u03B3 (1 \u2212 \u03B2 cos \u03B8)) of the
  // Keplerian orbit (\u03B2 \u221D r^\u2212\xBD): the observed temperature is \u03B4 T and the light is boosted by \u03B4\xB3.
  float x = max(r, uThermal.y * 0.9) / uThermal.y;
  float T = uThermal.x * pow(x, -0.75);
  float beta = uThermal.z * inversesqrt(x);
  float delta = sqrt(1.0 - beta * beta) / (1.0 - beta * vBeam);
  vec3 col = blackbody(T * delta) * (0.35 + 0.65 * T / uThermal.x);
  float beam = delta * delta * delta;
  gl_FragColor = vec4(col * (profile * rings * streak * beam * uThermal.w * uOpacity * k), 1.0);
}
`,lM=`
uniform vec4 uHole;
uniform vec2 uViewport;
void main() {
  vec2 c = uHole.xy / uViewport * 2.0 - 1.0;
  vec2 ext = (uHole.z + uHole.w + 2.0) / uViewport * 2.0;
  gl_Position = vec4(c + position.xy * ext, 0.0, 1.0);
}
`,cM=`
${Co}
void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, holeCover(gl_FragCoord.xy));
}
`,hM=`
${vs}
uniform float uOpacity;
uniform float uBand;
uniform float uExtent;
uniform float uTime;
uniform vec4 uThermal;   // x: the disc's inner temperature (K), y: arc temperature (\xD7 x), z: Doppler \u03B2, w: gain
varying vec2 vUv;
${To()}
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
  // The approaching side (\u2212x, as the disc turns) is Doppler-boosted: bluer and brighter.
  float side = -q.x / max(r, 1e-3);
  float delta = sqrt(1.0 - uThermal.z * uThermal.z) / (1.0 - uThermal.z * side);
  float shimmer = 0.85 + 0.15 * sin(atan(q.y, q.x) * 9.0 - uTime * qRate(0.8));
  // The photon ring is the inner disc's light, white-hot; the arcs are the lensed far side, a little
  // cooler (they show the disc a little further out).
  vec3 ring = blackbody(uThermal.x * delta) * photon * (0.75 + 0.25 * delta * delta);
  vec3 arcs = blackbody(uThermal.x * uThermal.y * delta) * 0.42 * (arcTop + arcBottom) * delta * delta * delta * shimmer;
  float glow = exp(-(r - 1.0) * 2.6) * 0.05;
  vec3 col = ring * 0.75 + arcs + blackbody(uThermal.x * uThermal.y) * 0.22 * glow;
  col *= uThermal.w;
  gl_FragColor = vec4(col * uOpacity * (1.0 - smoothstep(uExtent * 0.75, uExtent, r)), 1.0);
}
`,xh=class{constructor(){this.group=new Et,this.horizon=new Je(new hs(1,48,32),new Dn({color:0})),this.horizon.renderOrder=3;let[e,t]=Oi.disc,n=new Ja(e*.92,t*1.05,180,8);this.discUniforms={...fr,uTime:{value:0},uOpacity:{value:0},uRange:{value:new ye(e*.92,t*1.05)},uThermal:{value:new We(Oi.tIn,e,.45,1.25)}},this.disc=new Je(n,new De({name:"AccretionDisc",uniforms:this.discUniforms,vertexShader:P0,fragmentShader:I0,...kn,side:wi})),this.disc.renderOrder=6,this.disc.quaternion.setFromUnitVectors(new D(0,0,1),new D(...Oi.normal));let s=2.4;this.lensUniforms={uScale:{value:Oi.radius*s},uOpacity:{value:0},uBand:{value:1},uExtent:{value:s},uTime:{value:0},uThermal:{value:new We(Oi.tIn,.72,.3,1)}},this.lens=new Je(vr.quad,new De({name:"LensedRing",uniforms:this.lensUniforms,vertexShader:vr.vertex,fragmentShader:hM,...kn})),this.lens.frustumCulled=!1,this.lens.renderOrder=7,this.group.add(this.horizon,this.disc,this.lens),this.overlay=new Et,this.horizonOverlay=new Je(vr.quad,new De({name:"HorizonShadow",uniforms:fr,vertexShader:lM,fragmentShader:cM,transparent:!0,depthTest:!1,depthWrite:!1,blending:Zn,blendEquation:Wi,blendSrc:jl,blendDst:io})),this.horizonOverlay.frustumCulled=!1,this.discOverlay=new Je(n,new De({name:"AccretionDiscFront",defines:{OVERLAY:""},uniforms:this.discUniforms,vertexShader:P0,fragmentShader:I0,...kn,depthTest:!1,side:wi})),this.discOverlay.quaternion.copy(this.disc.quaternion),this.horizonOverlay.renderOrder=1,this.discOverlay.renderOrder=2,this.overlay.add(this.horizonOverlay,this.discOverlay),this.radius=0}update(e){let t=e.presence,n=t*(1-.86*e.reading),s=1-.42*e.reading,r=Oi.radius*s*Math.min(1,t*1.15);this.horizon.visible=r>.004,this.horizon.scale.setScalar(Math.max(r*oM,.001)),this.horizonOverlay.visible=this.horizon.visible,this.radius=r,this.reach=Oi.disc[1]*1.12*e.expand,this.thickness=.2*e.expand,this.bandInner=Oi.disc[0]*.98,this.bandOuter=Oi.disc[1]*1.05*Math.max(1,e.expand),this.discUniforms.uOpacity.value=n,this.discUniforms.uTime.value=e.gpuTime,this.lensUniforms.uOpacity.value=n,this.lensUniforms.uBand.value=Math.max(0,1-1.15*e.reading),this.lensUniforms.uTime.value=e.gpuTime,this.lensUniforms.uScale.value=Math.max(r,.001)*this.lensUniforms.uExtent.value}};var Td={cover:()=>new lh,ch1:()=>new hh,ch2:()=>new uh,ch3:()=>new dh,ch4:()=>new fh,ch5:()=>new vh,ch6:()=>new ph,ch7:()=>new xh,ch8:()=>new No(!1),seed:()=>new No(!0)},Ed=i=>i*i*(3-2*i),uM=(i,e,t)=>Ed(Math.min(1,Math.max(0,(t-i)/(e-i)))),L0=[.62,.95],_h=class{constructor(e){this.root=new Et,this.root.name="accents",e.add(this.root),this.items=new Map,this.list=[],this.activeId=null,this.solid=1}_item(e){let t=this.items.get(e);if(t||!Td[e])return t||null;let n=Td[e]();return n.group.visible=!1,this.root.add(n.group),t={accent:n,presence:0,target:0,rate:1,reading:0,evolve:1,spread:0,expand:1},this.items.set(e,t),this.list.push(t),t}createAll(){for(let e of Object.keys(Td))this._item(e)}get(e){let t=this.items.get(e);return t?t.accent:null}visible(e){let t=this.items.get(e);return t&&t.presence>.001&&this.solid>.001?t.accent:null}presence(e){let t=this.items.get(e);return t?Ed(t.presence)*this.solid:0}setActive(e,t,n=!1){this.activeId=e;for(let[r,a]of this.items)r!==e&&(a.target=0,a.rate=1/Math.max(.12,t*.3),n&&(a.presence=0));let s=this._item(e);s&&(s.target=1,n&&(s.presence=1))}update(e,t){let n=!1,s=t.reading,r=t.evolve,a=t.spread,o=t.expand,l=this.solid=t.solid===void 0?1:t.solid,c=uM(L0[0],L0[1],t.morph);for(let u=0;u<this.list.length;u++){let f=this.list[u];f.target===1?(f.reading=s,f.evolve=r,f.spread=a,f.expand=o,c>f.presence&&(f.presence=c)):f.presence>0&&(f.presence=Math.max(0,f.presence-f.rate*e),n=!0);let h=f.presence>.001&&l>.001;f.accent.group.visible=h,h&&(t.presence=Ed(f.presence)*l,t.reading=f.reading,t.evolve=f.evolve,t.spread=f.spread,t.expand=f.expand,f.accent.update(t))}return t.reading=s,t.evolve=r,t.spread=a,t.expand=o,n}settle(){for(let e of this.items.values())e.presence=e.target}dispose(){this.root.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.root.removeFromParent(),this.items.clear(),this.list.length=0}};var xa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var mn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},dM=new Nn(-1,1,1,-1,0,1),Ad=class extends xt{constructor(){super(),this.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new wt([0,2,0,0,2,0],2))}},fM=new Ad,Ys=class{constructor(e){this._mesh=new Je(fM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,dM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var yh=class extends mn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof De?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ds.clone(e.uniforms),this.material=new De({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ys(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Uo=class extends mn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Mh=class extends mn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Sh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ye);this._width=n.width,this._height=n.height,t=new Ut(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:zt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new yh(xa),this.copyPass.material.blending=Ti,this.timer=new eo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Uo!==void 0&&(a instanceof Uo?n=!0:a instanceof Mh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Oo=class extends mn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new je}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var F0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new je(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var _a=class i extends mn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ye(e.x,e.y):new ye(256,256),this.clearColor=new je(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ut(r,a,{type:zt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Ut(r,a,{type:zt,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let h=new Ut(r,a,{type:zt,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}let o=F0;this.highPassUniforms=ds.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new De({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ye(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ds.clone(xa.uniforms),this.blendMaterial=new De({uniforms:this.copyUniforms,vertexShader:xa.vertexShader,fragmentShader:xa.fragmentShader,premultipliedAlpha:!0,blending:Xt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new je,this._oldClearAlpha=1,this._basic=new Dn,this._fsQuad=new Ys(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ye(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new De({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ye(.5,.5)},direction:{value:new ye(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new De({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};_a.BlurDirectionX=new ye(1,0);_a.BlurDirectionY=new ye(0,1);var Bo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var bh=class extends mn{constructor(){super(),this.isOutputPass=!0,this.uniforms=ds.clone(Bo.uniforms),this.material=new jr({name:Bo.name,uniforms:this.uniforms,vertexShader:Bo.vertexShader,fragmentShader:Bo.fragmentShader}),this._fsQuad=new Ys(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ct.getTransfer(this._outputColorSpace)===bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===no?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===so?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ro?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ao?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===lo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===co?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===oo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var pM=`
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
`,Rd=class extends bh{constructor(){super(),Object.assign(this.uniforms,{uResolution:{value:new ye(1,1)},uTime:{value:0},uGrain:{value:tn.grain},uVignette:{value:tn.vignette},uDim:{value:1},uFade:{value:1},uBlack:{value:1},uBg:{value:new D(...Yc($t.space))},uBgLift:{value:new D(0,0,0)},uGlowCenter:{value:new ye(.5,.5)},uGlowRadius:{value:.5}}),this.material.fragmentShader=pM,this._outputColorSpace=ri,this._toneMapping=li,this.material.defines={SRGB_TRANSFER:""},this.material.needsUpdate=!0}},wh=new xt;wh.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3));wh.setAttribute("uv",new wt([0,2,0,0,2,0],2));var ko=class{constructor(e,t,n){this.renderer=e,this.composer=new Sh(e),this.composer.renderToScreen=!0,this.renderPass=new Oo(t,n),this.renderPass.clearColor=new je(0,0,0),this.renderPass.clearAlpha=1,this.bloom=new _a(new ye(256,256),tn.bloomStrength,tn.bloomRadius,tn.bloomThreshold),this.bloom.highPassUniforms.smoothWidth.value=tn.bloomKnee,this.finish=new Rd,this.overlay=new vi,this.overlayPass=new Oo(this.overlay,n),this.overlayPass.clear=!1,this.overlayPass.enabled=!1,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloom),this.composer.addPass(this.overlayPass),this.composer.addPass(this.finish),this.bloomScale=.5,this.width=1,this.height=1,this.pixelRatio=1}get uniforms(){return this.finish.uniforms}setSize(e,t,n){this.width=e,this.height=t,this.pixelRatio=n,this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.finish.uniforms.uResolution.value.set(e*n,t*n),this._sizeBloom()}setBloom(e,t){this.bloom.enabled=e&&t>0,t>0&&t!==this.bloomScale&&(this.bloomScale=t,this._sizeBloom())}_sizeBloom(){let e=Math.max(32,Math.round(this.width*this.pixelRatio*this.bloomScale*2)),t=Math.max(32,Math.round(this.height*this.pixelRatio*this.bloomScale*2));this.bloom.setSize(e,t)}render(e){this.composer.render(e)}passScene(){let e=new vi,t=this.bloom,n=[t.materialHighPassFilter,...t.separableBlurMaterials||[],t.compositeMaterial,t.blendMaterial].filter(Boolean);for(let s of n){let r=new Je(wh,s);r.frustumCulled=!1,e.add(r)}return e}finishScene(){let e=new vi,t=new Je(wh,this.finish.material);return t.frustumCulled=!1,e.add(t),e}dispose(){this.bloom.dispose(),this.finish.dispose(),this.composer.dispose()}};var D0=.62,N0=2.4,$s=1.32,ya=(i,e)=>i.focus?i.focus[e]-i.center[e]:0,Th=class{constructor(e){this.camera=e,this.W=1,this.H=1,this.Hf=1,this.tanHalf=Math.tan(Mo.degToRad(Ao)/2),this.layout="hero",this.spec=null,this.cx=Yt(.5),this.cy=Yt(.5),this.dist=Yt(14),this.tx=Yt(0),this.ty=Yt(0),this.tz=Yt(0),this.fx=Yt(0),this.fy=Yt(0),this.fz=Yt(0),this.vYaw=Yt(0),this.vPitch=Yt(.35),this.dim=Yt(1),this.veil=Yt(0),this.veilTarget=0,this.pointer=[0,0],this.px=Yt(0),this.py=Yt(0),this.exYaw=0,this.exPitch=0,this.velYaw=0,this.velPitch=0,this.zoom=Yt(1),this.zoomTarget=1,this.returning=!1,this.dragging=!1,this.moving=!0,this._v=new D,this.target=new D,this.calm=0,this.refMatrix=new Ct,this.refDistance=14,this._ref=new D}setViewport(e,t,n=t){this.W=e,this.H=t,this.Hf=Math.min(t,n||t),this.camera.aspect=e/t,this._targets(),this.cx.value=this._t.cx,this.cy.value=this._t.cy,this.dist.value=this._t.dist}setFormation(e){this.spec=e}setLayout(e){Zc[e]&&(this.layout=e)}setVeil(e){this.veilTarget=$e(e,0,1)}setPointer(e,t){this.pointer[0]=$e(e,-1,1),this.pointer[1]=$e(t,-1,1)}beginDrag(){this.dragging=!0,this.returning=!1,this.velYaw=0,this.velPitch=0}dragBy(e,t,n){let s=-e*.0044,r=t*.0036;if(this.exYaw+=s,this.exPitch=$e(this.exPitch+r,-$s-.4,$s-.4),n>0){let a=Math.min(1,n*18);this.velYaw+=(s/n-this.velYaw)*a,this.velPitch+=(r/n-this.velPitch)*a}}endDrag(){this.dragging=!1}zoomBy(e){this.returning=!1,this.zoomTarget=$e(this.zoomTarget*e,D0,N0)}get zoomLimits(){return[D0,N0]}reset(){this.returning=!0,this.velYaw=0,this.velPitch=0,this.zoomTarget=1}_targets(){let e=Zc[this.layout]||Zc.hero,t=Ro(this.W,this.Hf),n=t?e.tall:e.wide,s=this.spec,r=s?s.radius:3,a=s&&s.compose&&s.compose[this.layout]?s.compose[this.layout][t?"tall":"wide"]:null,o=Math.max(40,n.r(this.W,this.Hf)*(a&&a.scale?a.scale:1)),l=this.veil.value,c=r*(this.H/2)/(o*this.tanHalf)*n.push*(1+.42*l);return this._t=this._t||{},this._t.cx=a&&a.cx!==void 0?a.cx:n.cx,this._t.cy=a&&a.cy!==void 0?a.cy:n.cy,this._t.dist=c,this._t.dim=n.dim*(1-.86*l),this._t}snapComposition(e,t){let n=this._targets();if(Math.abs(this.veilTarget-this.veil.value)<=e&&Math.abs(n.cx-this.cx.value)<=t&&Math.abs(n.cy-this.cy.value)<=t)return!1;this.veil.value=this.veilTarget,this.veil.velocity=0;let s=this._targets();return this.cx.value=s.cx,this.cy.value=s.cy,this.dim.value=s.dim,this.cx.velocity=0,this.cy.velocity=0,this.dim.velocity=0,!0}snap(){this.veil.value=this.veilTarget;let e=this._targets();this.cx.value=e.cx,this.cy.value=e.cy,this.dist.value=e.dist,this.dim.value=e.dim;let t=this.spec;t&&(this.tx.value=t.center[0],this.ty.value=t.center[1],this.tz.value=t.center[2],this.fx.value=ya(t,0),this.fy.value=ya(t,1),this.fz.value=ya(t,2),this.vYaw.value=t.view.yaw,this.vPitch.value=t.view.pitch);for(let n of[this.cx,this.cy,this.dist,this.dim,this.tx,this.ty,this.tz,this.fx,this.fy,this.fz,this.vYaw,this.vPitch,this.veil])n.velocity=0}update(e,t,n,s){let r=n?en.cameraReduced:en.camera;Jt(this.veil,this.veilTarget,n?.05:en.veil,e);let a=this._targets();Jt(this.cx,a.cx,r,e),Jt(this.cy,a.cy,r,e),Jt(this.dist,a.dist,r,e),Jt(this.dim,a.dim,n?.05:en.veil,e);let o=this.spec;o&&(Jt(this.tx,o.center[0],r,e),Jt(this.ty,o.center[1],r,e),Jt(this.tz,o.center[2],r,e),Jt(this.fx,ya(o,0),r,e),Jt(this.fy,ya(o,1),r,e),Jt(this.fz,ya(o,2),r,e),Jt(this.vYaw,o.view.yaw,r,e),Jt(this.vPitch,o.view.pitch,r,e)),Jt(this.px,s?this.pointer[0]:0,en.parallax,e),Jt(this.py,s?this.pointer[1]:0,en.parallax,e),Jt(this.zoom,this.zoomTarget,n?.05:.18,e);let l=!1;if(!this.dragging){if(this.returning)this.exYaw+=(0-this.exYaw)*(1-Math.exp(-e*4)),this.exPitch+=(0-this.exPitch)*(1-Math.exp(-e*4)),Math.abs(this.exYaw)<1e-4&&Math.abs(this.exPitch)<1e-4&&(this.exYaw=0,this.exPitch=0,this.returning=!1),l=this.returning;else if(Math.abs(this.velYaw)+Math.abs(this.velPitch)>.001){this.exYaw+=this.velYaw*e,this.exPitch=$e(this.exPitch+this.velPitch*e,-$s-.4,$s-.4);let M=Math.exp(-e*4.2);this.velYaw*=M,this.velPitch*=M,l=!0}}let c=1e-4;this.moving=l||this.dragging||Math.abs(this.cx.velocity)>c||Math.abs(this.cy.velocity)>c||Math.abs(this.dist.velocity)>c*10||Math.abs(this.vYaw.velocity)>c||Math.abs(this.vPitch.velocity)>c||Math.abs(this.tx.velocity)+Math.abs(this.ty.velocity)+Math.abs(this.tz.velocity)+Math.abs(this.fx.velocity)+Math.abs(this.fy.velocity)+Math.abs(this.fz.velocity)>c||Math.abs(this.px.velocity)+Math.abs(this.py.velocity)>c||Math.abs(this.zoom.velocity)>c||Math.abs(this.veil.velocity)>c||Math.abs(this.dim.velocity)>c;let u=1-(1-nt.sway)*this.calm,f=1-(1-nt.parallax)*this.calm,h=(.075*Math.sin(t*.041)+.022*Math.sin(t*.107+1))*u,d=.028*Math.sin(t*.059+2)*u,g=this.vYaw.value+this.exYaw+this.px.value*.07*f+h,v=$e(this.vPitch.value+this.exPitch-this.py.value*.045*f+d,-$s,$s),p=this.dist.value/this.zoom.value,m=this.camera;this.target.set(this.tx.value,this.ty.value,this.tz.value),m.position.set(this.target.x+p*Math.sin(g)*Math.cos(v),this.target.y+p*Math.sin(v),this.target.z+p*Math.cos(g)*Math.cos(v)),m.lookAt(this.target),m.setViewOffset(this.W,this.H,(.5-this.cx.value)*this.W,.5*this.H-this.cy.value*this.Hf,this.W,this.H),m.updateMatrixWorld(),this.distance=p;let _=this.vYaw.value,E=$e(this.vPitch.value,-$s,$s),y=this.dist.value,S=this.target;return this._ref.set(S.x+y*Math.sin(_)*Math.cos(E),S.y+y*Math.sin(E),S.z+y*Math.cos(_)*Math.cos(E)),this.refMatrix.lookAt(this._ref,S,m.up),this.refMatrix.setPosition(this._ref),this.refDistance=y,this.moving}focusPoint(e){return e[0]=this.tx.value+this.fx.value,e[1]=this.ty.value+this.fy.value,e[2]=this.tz.value+this.fz.value,e}pxPerUnit(e){return this.H/2/(e*this.tanHalf)}project(e,t,n,s){let r=this._v.set(e,t,n),a=r.distanceTo(this.camera.position);return r.project(this.camera),s[0]=(r.x*.5+.5)*this.W,s[1]=(.5-r.y*.5)*this.H,s[2]=a,s[3]=r.z,s}};var mM=.5,zo=i=>Math.round(i*10)/10,Eh=class{constructor(){this.subs=new Set,this.frame={scene:"cover",nodes:[],selected:0,anchor:{x:0,y:0,visible:!1}};for(let e=1;e<=pn;e++)this.frame.nodes.push({n:e,x:0,y:0,radius:0,depth:0,visible:!1});this.prev=new Float32Array(pn*4).fill(-1),this.prevScene="",this.prevSelected=-1,this.scratch=[0,0,0,0],this.center=[0,0,0,0],this.dirty=!0,this.allHidden=!1,this.pending=!1,this.notifyOne=e=>{try{e(this.frame)}catch(t){console.error(t)}}}subscribe(e){return typeof e!="function"?()=>{}:(this.subs.add(e),this.dirty=!0,()=>this.subs.delete(e))}update(e,t,n,s,r,a,o){let l=this.frame,c=e.W,u=e.H,f=this.dirty||s!==this.prevScene||r!==this.prevSelected,h=e.project(a[0],a[1],a[2],this.scratch),d=zo(h[0]),g=zo(h[1]),v=!!o&&h[3]<1&&h[0]>=0&&h[0]<=c&&h[1]>=0&&h[1]<=u,p=l.anchor;if((p.x!==d||p.y!==g||p.visible!==v)&&(p.x=d,p.y=g,p.visible=v,f=!0),t&&!(n<=.001&&this.allHidden&&!this.dirty)){let m=e.project(0,0,0,this.center),_=m[2],E=mM*e.pxPerUnit(_),y=Ri.nodeOrbit.radius;for(let M=0;M<pn;M++){let w=l.nodes[M],x=e.project(t[M*3],t[M*3+1],t[M*3+2],this.scratch),A=bd*e.pxPerUnit(x[2]),R=x[2]>_&&Math.hypot(x[0]-m[0],x[1]-m[1])<E,P=x[3]<1&&x[0]>-A&&x[0]<c+A&&x[1]>-A&&x[1]<u+A,F=n>.5&&P&&!R;w.x=zo(x[0]),w.y=zo(x[1]),w.radius=zo(A),w.depth=Math.round(Math.min(1,Math.max(0,(x[2]-(_-y))/(2*y)))*1e3)/1e3,w.visible=F;let N=M*4;(this.prev[N]!==w.x||this.prev[N+1]!==w.y||this.prev[N+2]!==w.radius||this.prev[N+3]!==(F?1:0))&&(f=!0,this.prev[N]=w.x,this.prev[N+1]=w.y,this.prev[N+2]=w.radius,this.prev[N+3]=F?1:0)}let S=!0;for(let M=0;M<pn;M++)l.nodes[M].visible&&(S=!1);this.allHidden=S}return!f||!this.subs.size?!1:(this.dirty=!1,this.prevScene=s,this.prevSelected=r,l.scene=s,l.selected=r,this.pending=!0,!0)}flush(){this.pending&&(this.pending=!1,this.subs.forEach(this.notifyOne))}pick(e,t){let n=0,s=1/0;for(let r of this.frame.nodes){if(!r.visible)continue;let a=Math.hypot(e-r.x,t-r.y),o=Math.max(22,r.radius+12);a<o&&a<s&&(s=a,n=r.n)}return n}};var O0=Math.PI,gM=i=>i-Ye*Math.floor((i+O0)/Ye),vM=.002,xM=.04,_M=.004,U0=.3,yM=i=>.016*Math.sin(i*.21+.6)+.006*Math.sin(i*.57+2.1),Ah=class{constructor(){this.node=0,this.offset=0,this.spin=0,this.turn=Yt(0),this.tracking=!1,this.moving=!1,this.drift=0,this.snapNext=!1,this.front=0,this._m=Ri.nodeOrbit.matrix}set(e,t,n){let s=Math.max(0,Math.min(pn,Math.round(Number(e)||0)));if(s===this.node){t&&s&&(this.snapNext=!0);return}let r=Ri.nodeOrbit;if(!s){this.drift=t?0:this.turn.velocity-r.speed,this.offset=this.spin-n*r.speed,this.node=0,this.tracking=!1,this.moving=this.drift!==0;return}this.node||(this.turn.value=this.spin,this.turn.velocity=r.speed+this.drift,this.drift=0),this.node=s,this.tracking=!1,this.moving=!0,this.snapNext=!!t}settle(){this.node?this.snapNext=!0:this.drift=0}update(e,t,n,s){let r=Ri.nodeOrbit;if(!this.node){if(this.drift!==0){let u=Math.exp(-e/U0);this.offset+=this.drift*U0*(1-u),this.drift*=u,Math.abs(this.drift)<1e-4&&(this.drift=0)}return this.moving=this.drift!==0,this.spin=t*r.speed+this.offset,this.spin}let o=(this.front=this.frontAngle(n))-(this.node-1)/pn*Ye-r.phase+(s?0:yM(t)),l=this.turn.value+gM(o-this.turn.value),c=l-this.turn.value;return s||this.snapNext?(this.snapNext=!1,this.turn.value=l,this.turn.velocity=0,this.tracking=!0):this.tracking&&Math.abs(c)<=_M?(this.turn.velocity=e>0?c/e:0,this.turn.value=l):(this.tracking=!1,e>0&&Jt(this.turn,l,en.focus,e),Math.abs(l-this.turn.value)<vM&&Math.abs(this.turn.velocity)<xM&&(this.turn.value=l,this.tracking=!0)),this.moving=!this.tracking,this.spin=this.turn.value,this.spin}frontAngle(e){let t=this._m,n=e.vYaw.value+e.exYaw,s=Math.max(-1.32,Math.min(1.32,e.vPitch.value+e.exPitch)),r=e.dist.value/Math.max(.05,e.zoom.value),a=Math.cos(s),o=e.tx.value+r*Math.sin(n)*a,l=e.ty.value+r*Math.sin(s),c=e.tz.value+r*Math.cos(n)*a,u=t[0],f=t[3],h=t[6],d=-t[2],g=-t[5],v=-t[8],p=t[1],m=t[4],_=t[7],E=Ri.nodeOrbit.radius,y=Math.atan2(o*d+l*g+c*v,o*u+l*f+c*h);if(o*p+l*m+c*_<=.05*r)return y;let S=Math.hypot(o-e.tx.value,l-e.ty.value,c-e.tz.value)||1,M=(e.tx.value-o)/S,w=(e.ty.value-l)/S,x=(e.tz.value-c)/S,A=-x,R=M,P=Math.hypot(A,R)||1;A/=P,R/=P;let F=-R*w,N=R*M-A*x,C=A*w,L=o*F+l*N+c*C,B=-E*(u*F+f*N+h*C),V=-E*(d*F+g*N+v*C),X=-(o*M+l*w+c*x),U=E*(u*M+f*w+h*x),k=E*(d*M+g*w+v*x),W=L*U-B*X,J=V*X-L*k,j=V*U-B*k,Ae=Math.hypot(W,J);if(Ae<1e-9)return y;let Re=Math.atan2(J,W),Ie=Math.asin(Math.max(-1,Math.min(1,-j/Ae))),Q=Ee=>(L+B*Math.cos(Ee)+V*Math.sin(Ee))/Math.max(1e-6,X+U*Math.cos(Ee)+k*Math.sin(Ee)),ie=Ie-Re,ce=O0-Ie-Re;return Q(ie)>=Q(ce)?ie:ce}};var Rh=class{constructor(e){bi(this,"onWindowPointer",e=>{if(e.pointerType==="touch")return;let t=window.innerWidth||1,n=window.innerHeight||1;this.engine.pointerMoved(e.clientX/t*2-1,e.clientY/n*2-1)});bi(this,"onScroll",()=>{this.lastScroll=performance.now(),!(!this.coarse.matches||this.engine.endingActive||this.dragging)&&this.hold(150)});bi(this,"onScrollEnd",()=>{this.holding&&(this.holdUntil=performance.now()+40,this.schedule(60))});bi(this,"onTouch",e=>{this.touches=e.touches.length});bi(this,"onTouchEnd",e=>{this.touches=e.touches.length,!this.touches&&this.holding&&(this.holdUntil=performance.now()+150,this.schedule(170))});bi(this,"release",()=>{if(this.touches){this.schedule(120);return}let e=this.holdUntil-performance.now();if(e>0){this.schedule(e+15);return}this.holdTimer=0,this.holding=!1,this.engine.onHold(!1)});bi(this,"onDown",e=>{if(!(e.pointerType==="mouse"&&e.button!==0)){this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,t:e.timeStamp});try{this.canvas.setPointerCapture(e.pointerId)}catch{}this.pointers.size===1&&this.engine.rig.beginDrag(),this.pointers.size===2&&(this.pinch=this.pinchDistance()),this.engine.request()}});bi(this,"onMove",e=>{let t=this.pointers.get(e.pointerId);if(!t)return;let n=e.clientX-t.x,s=e.clientY-t.y,r=Math.max(.001,(e.timeStamp-t.t)/1e3);if(t.x=e.clientX,t.y=e.clientY,t.t=e.timeStamp,this.pointers.size===1)this.engine.rig.dragBy(n,s,r);else if(this.pointers.size===2){let a=this.pinchDistance();this.pinch>0&&a>0&&this.engine.rig.zoomBy(a/this.pinch),this.pinch=a}this.engine.request()});bi(this,"onUp",e=>{this.pointers.delete(e.pointerId)&&(this.pointers.size===0?this.engine.rig.endDrag():this.pointers.size===1&&this.engine.rig.beginDrag(),this.pinch=0,this.engine.request())});bi(this,"onWheel",e=>{if(e.ctrlKey&&!this.interactive)return;e.preventDefault();let t=e.deltaMode===1?.05:e.deltaMode===2?1:.0012;this.engine.rig.zoomBy(Math.exp(-e.deltaY*t)),this.engine.request()});bi(this,"onKey",e=>{let t=this.engine.rig,n=!0;switch(e.key){case"ArrowLeft":t.dragBy(-28,0,0);break;case"ArrowRight":t.dragBy(28,0,0);break;case"ArrowUp":t.dragBy(0,-24,0);break;case"ArrowDown":t.dragBy(0,24,0);break;case"+":case"=":t.zoomBy(1.12);break;case"-":case"_":t.zoomBy(1/1.12);break;case"r":case"R":t.reset();break;default:n=!1}n&&(e.preventDefault(),this.engine.request())});this.engine=e,this.canvas=e.canvas,this.coarse=typeof matchMedia=="function"?matchMedia("(pointer: coarse)"):{matches:!1},this.interactive=!1,this.holding=!1,this.touches=0,this.holdUntil=0,this.holdTimer=0,this.pointers=new Map,this.pinch=0,this.lastScroll=-1e9,this.abort=new AbortController,this.exploreAbort=null;let t={passive:!0,signal:this.abort.signal};window.addEventListener("pointermove",this.onWindowPointer,t),window.addEventListener("scroll",this.onScroll,t),window.addEventListener("scrollend",this.onScrollEnd,t),document.addEventListener("touchstart",this.onTouch,t),document.addEventListener("touchend",this.onTouchEnd,t),document.addEventListener("touchcancel",this.onTouchEnd,t)}get dragging(){return this.pointers.size>0}hold(e){this.holding||(this.holding=!0,this.engine.onHold(!0)),this.holdUntil=performance.now()+e,this.schedule(e+20)}schedule(e){clearTimeout(this.holdTimer),this.holdTimer=setTimeout(this.release,e)}setInteractive(e){if(e=!!e,e!==this.interactive)if(this.interactive=e,e){this.exploreAbort=new AbortController;let t=this.canvas,n={passive:!0,signal:this.exploreAbort.signal};t.addEventListener("pointerdown",this.onDown,n),t.addEventListener("pointermove",this.onMove,n),t.addEventListener("pointerup",this.onUp,n),t.addEventListener("pointercancel",this.onUp,n),t.addEventListener("lostpointercapture",this.onUp,n),t.addEventListener("wheel",this.onWheel,{passive:!1,signal:this.exploreAbort.signal}),t.addEventListener("keydown",this.onKey,{signal:this.exploreAbort.signal})}else this.exploreAbort?.abort(),this.exploreAbort=null,this.pointers.clear(),this.engine.rig.endDrag()}pinchDistance(){let e=this.pointers.values(),t=e.next().value,n=e.next().value;return t&&n?Math.hypot(t.x-n.x,t.y-n.y):0}dispose(){clearTimeout(this.holdTimer),this.abort.abort(),this.exploreAbort?.abort()}};function Pd(i){let e="";try{let r=i.getExtension("WEBGL_debug_renderer_info");e=String(i.getParameter(r?r.UNMASKED_RENDERER_WEBGL:i.RENDERER)||"")}catch{e=""}let t=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,n=navigator.deviceMemory||4,s=navigator.hardwareConcurrency||4;return/swiftshader|llvmpipe|software|basic render/i.test(e)?"low":t?n<=3||s<=4?"low":"medium":n<=2||s<=2?"medium":"high"}var Id=i=>ms[i]?i:null,Ph=class{constructor(e){this.gl=e,this.ext=null,this.ring=[],this.head=0,this.active=null,this.restore()}get available(){return!!this.ext}restore(){this.ring=[],this.active=null,this.head=0;try{this.ext=this.gl.isContextLost()?null:this.gl.getExtension("EXT_disjoint_timer_query_webgl2")}catch{this.ext=null}if(this.ext)try{for(let e=0;e<4;e++)this.ring.push({q:this.gl.createQuery(),pending:!1,skip:!1})}catch{this.ext=null}}begin(){if(!this.ext||this.active)return;let e=this.ring[this.head];if(!(!e||e.pending))try{this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT,e.q),this.active=e}catch{this.active=null}}end(e){let t=this.active;if(t){this.active=null;try{this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),t.pending=!0,t.skip=!!e,this.head=(this.head+1)%this.ring.length}catch{}}}poll(e){if(!this.ext)return;let t=this.gl,n=!1;try{n=!!t.getParameter(this.ext.GPU_DISJOINT_EXT)}catch{return}for(let s=0;s<this.ring.length;s++){let r=this.ring[s];if(!r.pending)continue;let a=!1;try{a=t.getQueryParameter(r.q,t.QUERY_RESULT_AVAILABLE)}catch{a=!0,n=!0}if(!a||(r.pending=!1,n||r.skip))continue;let o=t.getQueryParameter(r.q,t.QUERY_RESULT);e(o/1e6)}}},B0=2e3,Cd=16.667,Ch=Cd*.75,MM=.85,k0=6e4,z0=1e4,SM=3e5;function Ho(i,e,t){return e?i.slice(0,e).sort((s,r)=>s-r)[Math.min(e-1,Math.floor(t*(e-1)+.5))]:0}var Ih=class{constructor(e=!0){this.enabled=e,this.maxLevel=Bn.length-1,this.cpu=new Float32Array(512),this.gpu=new Float32Array(512),this.intervals=new Float32Array(512),this.drops=0,this.history=new Float32Array(90),this.reset()}get step(){return Bn[this.level]}reset(){this.level=0,this.nCpu=0,this.nGpu=0,this.nInt=0,this.drops=0,this.hHead=0,this.hCount=0,this.windowStart=0,this.overWindows=0,this.underMs=0,this.verify=null,this.probe=null,this.blocked=new Float64Array(Bn.length),this.upgradeAt=0,this.backoff=z0,this.lastMetric=0,this.mode="none",this.cadence=0}sample(e,t,n,s){!this.enabled||s||(this.nCpu<512&&(this.cpu[this.nCpu++]=t),!(!(e>0)||e>400)&&(n||(this.history[this.hHead]=e,this.hHead=(this.hHead+1)%this.history.length,this.hCount<this.history.length&&this.hCount++),this.nInt<512&&(this.intervals[this.nInt++]=n?-e:e)))}gpuSample(e){this.enabled&&this.nGpu<512&&(this.gpu[this.nGpu++]=e)}_cadence(){let e=this.hCount;return e<12?0:Ho(this.history,e,.5)}decide(e,t){if(!this.enabled||(this.windowStart||(this.windowStart=e),e-this.windowStart<B0))return 0;let n=e-this.windowStart;this.windowStart=e;let s=this._evaluate(e,n,t);return this.nCpu=0,this.nGpu=0,this.nInt=0,s}_evaluate(e,t,n){let s=Ho(this.cpu,this.nCpu,.75),r=0,a=!1,o=!1,l=!1,c=this._cadence();if(this.cadence=c,n&&this.nGpu>=8){this.mode="timer";let u=Ho(this.gpu,this.nGpu,.75);r=u,l=!0,a=u>Ch,o=u*this._upRatio()<Ch*.5&&s<Ch}else if(this.nInt>=12){this.mode="cadence";let u=0,f=0;for(let g=0;g<this.nInt;g++){let v=this.intervals[g],p=v<0?Math.max(33.3,c):Math.max(Cd,c||Cd);Math.abs(v)>p*1.5&&u++,v>0&&f++}let h=u/this.nInt;r=h+1e-4,l=!0;let d=!1;if(f>=12&&c>20){let g=Ho(this.history,this.hCount,.25),p=(Ho(this.history,this.hCount,.75)-g)/c<.1,m=_=>{let E=Math.round(c/_);return E>=1&&Math.abs(c-E*_)/c<.08};d=p&&!m(16.667)&&!m(8.333),d&&(r=Math.max(r,c/100))}a=h>.2||d,o=h<.03&&!d&&s<Ch*.5}if(this.lastMetric=r,!l)return 0;if(this.probe){if(a){let u=this.probe.from;return this.probe=null,this.backoff=Math.min(SM,this.backoff*2),this.upgradeAt=e+this.backoff,this.overWindows=0,this.underMs=0,u!==this.level?(this.level=u,1):0}e-this.probe.at>B0*2.5&&(this.probe=null,this.backoff=z0)}if(this.verify){let u=this.verify;if(this.verify=null,r>u.metric*MM){let f=this.level;if(this.cutsFill?this.cutsFill(f,u.level):!0)for(let d=u.level+1;d<=this.maxLevel;d++)this.blocked[d]=e+k0;else this.blocked[f]=e+k0;return this.level=u.level,this.overWindows=0,this.underMs=0,-1}}if(a){if(this.underMs=0,this.overWindows++,this.overWindows>=2){let u=this._nextDown(e);if(u>this.level)return this.verify={level:this.level,metric:r},this.level=u,this.overWindows=0,1}return 0}if(this.overWindows=0,o&&this.level>0){if(this.underMs+=t,this.underMs>=5e3&&e>=this.upgradeAt)return this.probe={from:this.level,at:e},this.level=this._nextUp(),this.underMs=0,-1}else this.underMs=0;return 0}_nextDown(e){for(let t=this.level+1;t<=this.maxLevel;t++)if(!(this.blocked[t]>e)&&(!this.isNoop||!this.isNoop(t,this.level)))return t;return this.level}_nextUp(){for(let e=this.level-1;e>0;e--)if(!this.isNoop||!this.isNoop(e,this.level))return e;return 0}_upRatio(){if(this.level===0)return 1;let e=Bn[this.level],t=Bn[this._nextUp()],n=this.pixelRatioOf?(this.pixelRatioOf(t)/Math.max(.01,this.pixelRatioOf(e)))**2:1;return Math.max(n,t.draw/e.draw,1)}info(){return{level:this.level,mode:this.mode,metric:Math.round(this.lastMetric*100)/100,cadence:Math.round(this.cadence*10)/10,backoff:this.backoff}}};var bM=Math.PI*2,Yi=(i,e,t)=>i<e?e:i>t?t:i,Mr=i=>i<0?0:i>1?1:i,fi=(i,e,t)=>i+(e-i)*t;function oe(i,e,t){let n=Mr((t-i)/(e-i));return n*n*(3-2*n)}function ys(i,e,t){let n=Mr((t-i)/(e-i));return n*n*n*(n*(n*6-15)+10)}function H0(i,e,t){let n=Mr((t-i)/(e-i));return n<=0?0:n>=1?1:n<.5?Math.pow(2,20*n-10)/2:(2-Math.pow(2,-20*n+10))/2}function Vo(i,e,t,n){return i<e-t?0:i<e?oe(e-t,e,i):Math.exp(-(i-e)/n)}function Ms(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function xi(i){let e=i();return e<1e-9&&(e=1e-9),Math.sqrt(-2*Math.log(e))*Math.cos(bM*i())}function Ci(i,e=!0,t=!0){let n=i.length,s=new Float64Array(n),r=new Float64Array(n),a=new Float64Array(n);for(let l=0;l<n;l++)s[l]=i[l][0],r[l]=i[l][1];let o=new Float64Array(Math.max(1,n-1));for(let l=0;l<n-1;l++)o[l]=(r[l+1]-r[l])/(s[l+1]-s[l]);for(let l=0;l<n;l++)l===0?a[l]=n>1?o[0]:0:l===n-1?a[l]=o[n-2]:a[l]=o[l-1]*o[l]<=0?0:(o[l-1]+o[l])/2;e&&(a[0]=0),t&&(a[n-1]=0);for(let l=0;l<n-1;l++){if(o[l]===0){a[l]=0,a[l+1]=0;continue}let c=a[l]/o[l],u=a[l+1]/o[l],f=c*c+u*u;if(f>9){let h=3/Math.sqrt(f);a[l]=h*c*o[l],a[l+1]=h*u*o[l]}}return{ts:s,vs:r,ms:a,n}}function Pi(i,e){let{ts:t,vs:n,ms:s,n:r}=i;if(e<=t[0])return n[0];if(e>=t[r-1])return n[r-1];let a=0;for(;a<r-2&&e>t[a+1];)a++;let o=t[a+1]-t[a],l=(e-t[a])/o,c=l*l,u=c*l;return(2*u-3*c+1)*n[a]+(u-2*c+l)*o*s[a]+(-2*u+3*c)*n[a+1]+(u-c)*o*s[a+1]}var _r=(i,e,t,n)=>{let s=(i-e)*(i<e?t:n);return Math.exp(-.5*s*s)};function Sr(i){let e=0,t=0,n=0;for(let l=380;l<=780;l+=2){let c=l*1e-9,u=1/(c**5*(Math.exp(.014388/(c*i))-1));e+=u*(1.056*_r(l,599.8,.0264,.0323)+.362*_r(l,442,.0624,.0374)-.065*_r(l,501.1,.049,.0382)),t+=u*(.821*_r(l,568.8,.0213,.0247)+.286*_r(l,530.9,.0613,.0322)),n+=u*(1.217*_r(l,437,.0845,.0278)+.681*_r(l,459,.0385,.0725))}let s=Math.max(0,3.2406*e-1.5372*t-.4986*n),r=Math.max(0,-.9689*e+1.8758*t+.0415*n),a=Math.max(0,.0557*e-.204*t+1.057*n),o=Math.max(s,r,a)||1;return[s/o,r/o,a/o]}var yr=800,Fh=4e4,zn=32,Lh=Object.freeze(Array.from({length:zn},(i,e)=>Object.freeze(Sr(yr*Math.pow(Fh/yr,e/(zn-1))))));function Go(i,e=[0,0,0]){let t=Yi(Math.log(Math.max(i,1)/yr)/Math.log(Fh/yr)*(zn-1),0,zn-1),n=Math.min(zn-2,Math.floor(t)),s=t-n,r=Lh[n],a=Lh[n+1];return e[0]=r[0]+(a[0]-r[0])*s,e[1]=r[1]+(a[1]-r[1])*s,e[2]=r[2]+(a[2]-r[2])*s,e}var wn=new Int8Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function V0(i){let e=Ms(i),t=new Uint8Array(256);for(let o=0;o<256;o++)t[o]=o;for(let o=255;o>0;o--){let l=Math.floor(e()*(o+1)),c=t[o];t[o]=t[l],t[l]=c}let n=new Uint8Array(512),s=new Uint8Array(512);for(let o=0;o<512;o++)n[o]=t[o&255],s[o]=n[o]%12*3;let r=1/3,a=1/6;return function(l,c,u){let f=(l+c+u)*r,h=Math.floor(l+f),d=Math.floor(c+f),g=Math.floor(u+f),v=(h+d+g)*a,p=l-(h-v),m=c-(d-v),_=u-(g-v),E,y,S,M,w,x;p>=m?m>=_?(E=1,y=0,S=0,M=1,w=1,x=0):p>=_?(E=1,y=0,S=0,M=1,w=0,x=1):(E=0,y=0,S=1,M=1,w=0,x=1):m<_?(E=0,y=0,S=1,M=0,w=1,x=1):p<_?(E=0,y=1,S=0,M=0,w=1,x=1):(E=0,y=1,S=0,M=1,w=1,x=0);let A=p-E+a,R=m-y+a,P=_-S+a,F=p-M+2*a,N=m-w+2*a,C=_-x+2*a,L=p-1+.5,B=m-1+.5,V=_-1+.5,X=h&255,U=d&255,k=g&255,W=0,J,j;return J=.6-p*p-m*m-_*_,J>0&&(j=s[X+n[U+n[k]]],J*=J,W+=J*J*(wn[j]*p+wn[j+1]*m+wn[j+2]*_)),J=.6-A*A-R*R-P*P,J>0&&(j=s[X+E+n[U+y+n[k+S]]],J*=J,W+=J*J*(wn[j]*A+wn[j+1]*R+wn[j+2]*P)),J=.6-F*F-N*N-C*C,J>0&&(j=s[X+M+n[U+w+n[k+x]]],J*=J,W+=J*J*(wn[j]*F+wn[j+1]*N+wn[j+2]*C)),J=.6-L*L-B*B-V*V,J>0&&(j=s[X+1+n[U+1+n[k+1]]],J*=J,W+=J*J*(wn[j]*L+wn[j+1]*B+wn[j+2]*V)),32*W}}var He=3.6,Hn=31,G0=.14,wM=.42,TM=1.12,EM=1.3,br=Object.freeze([Object.freeze({start:0,key:"collapse"}),Object.freeze({start:He,key:"birth"}),Object.freeze({start:9.2,key:"structure"}),Object.freeze({start:19.4,key:"world"})]),X0=Object.freeze([2.7,4.95,15.8,Hn]);function Y0(i){let e=0;for(let t=1;t<br.length;t++)i>=br[t].start&&(e=t);return e}function qo(i){if(i<=He)return 0;let e=i-He,t=.26*(1-Math.exp(-e*2.4))*(1-Math.exp(-e*6)),n=.74*H0(5.2,6.8,i);return t+n}function Ld(i){return ys(9.6,15.2,i)}var Dh=14.6,Nh=19.6;function Fd(i){return oe(Dh,Nh,i)}function Dd(i){if(i<=Dh)return 0;let e=Nh-Dh;if(i>=Nh)return e*.5+(i-Nh);let t=(i-Dh)/e;return e*(t*t*t-.5*t*t*t*t)}function Nd(i){return .13*(1-Math.pow(Mr((i-2.6)/(He-2.6)),2.2))+.003}function Ud(i){return .9/Math.max(.035,He+.12-i)-.9/(He+.12)}function AM(i){let t=He+.12-i;return t>.035?.9/(t*t):0}var RM=Ci([[He,1],[4.3,.97],[5.4,.93],[5.75,.86],[6.05,.72],[6.6,.64],[7.6,.52],[8.6,.36],[9.8,.14],[11.5,.04]]),CM=Ci([[He,0],[3.68,30],[5.7,30],[6.1,14],[6.6,11],[7.6,10],[8.4,6.5],[9,2.4],[9.6,0]]),PM=Ci([[He,16],[4.4,12],[5.4,10],[5.85,5],[6.2,2.4],[7,1.8],[8.6,.9],[9.4,.6]]),IM=Ci([[He,.22],[5.4,.22],[5.75,.08],[5.95,0]]),Wo=5.84,W0=5.98,LM=Ci([[Wo,-.85],[6.4,-.6],[7,-.28],[8,-.08],[9.2,.1]]),FM=Ci([[Wo,1],[6.5,.85],[7.4,.4],[8.4,.1]]),DM=Ci([[Wo,2],[6.3,1.7],[7,1.25],[8,1.1],[8.8,1]]);function $0(){return{t:0,a:0,g:0,spin:0,spinPhase:0,shutter:.02,matterGain:1,webFade:1,heroFade:1,filFade:1,press:0,seedGlow:1,seedScale:1,seedWidth:1,seedBloom:0,core:0,coreSize:.02,coreTint:1,disk:0,diskRadius:.1,diskSpin:0,diskSpinRate:0,plasma:0,plasmaEmit:0,plasmaKappa:0,plasmaFill:.3,temp:0,supercool:0,bubble:0,bubbleDone:0,bubbleWall:0,diff:0,threads:0,threadOpen:0,threadDense:0,threadBead:0,threadCool:0,threadZoom:0,gas:0,condense:0,gasLit:0,band:0,parentSky:0,skyPull:0,newSky:0,galaxy:0,galaxyGlow:0,galaxyStars:1,sun:0,sunBeacon:0,planet:0,cool:0,steam:0,ocean:0,clouds:0,life:0,atmo:0,shake:0,exposure:1,bloom:.08,bloomAdd:0,flash:0,shockRadius:0,shockAmp:0,lens:0,aberration:0,curveMix:1,hueCurve:0,scrim:0,grain:.05,vignette:.32,bg:[0,0,0],lift:[0,0,0]}}var NM=[4/255,7/255,11/255],q0=[1/255,1.8/255,2.6/255],UM=[3/255,6/255,9/255],Ma=[0,0,0];function Od(i){let e=i&&i.length>=3&&i.every(Number.isFinite)?i:[1,.925,.874];Ma[0]=e[0]*.018+.004,Ma[1]=e[1]*.018+.012,Ma[2]=e[2]*.018+.022}Od(null);function K0(i,e,t){i.t=e;let n=e-He;i.a=qo(e),i.g=Ld(e),i.spin=Fd(e),i.spinPhase=Dd(e),i.shutter=.022*(1-.7*oe(9,10,e))+.03*oe(He,3.75,e)*(1-oe(6.9,8.2,e))+.02*oe(1.8,3.4,e)*(1-oe(3.6,3.8,e)),i.webFade=1-oe(20.6,23,e),i.filFade=1-oe(19.5,21.3,e),i.heroFade=1-oe(19,21.4,e),i.matterGain=1;let s=oe(.2,He,e),r=oe(3.32,3.56,e)*(1-oe(3.56,He,e)),a=oe(0,G0,e)*Math.exp(-Math.max(0,e-G0)/wM);i.press=a,i.seedGlow=e<1.6?TM*(1+.7*a)*(1-oe(.3,1.5,e)):0,i.seedScale=1+.12*a,i.seedWidth=(1+.25*a)*(1-.4*oe(.25,1.3,e)),i.seedBloom=EM*(1-oe(.15,2.2,e));let o=(.9*oe(.04,.9,e)+2.2*s*s*s+2.2*Vo(e,He,.04,.16))*(1+.85*a);o*=1-.55*r,e>He&&(o=(1.2+7*Math.exp(-n/.05))*Math.exp(-n/.5)),i.core=o,i.coreSize=e<=He?fi(.008,.0045,s)*(1-.35*r)*(1+.28*a):.006+.006*(1-Math.exp(-n*5)),i.coreTint=e<=He?1-.65*oe(2.6,He,e):0,i.disk=oe(1.1,2.4,e)*(1-oe(3.5,He,e)),i.diskRadius=Nd(e),i.diskSpin=Ud(e),i.diskSpinRate=AM(e),i.temp=e<=He?1:Pi(RM,e),i.plasmaEmit=e<=He?0:Pi(CM,e),i.plasma=e<=He?0:1-oe(Wo,W0,e),i.plasmaKappa=Pi(PM,e),i.plasmaFill=Pi(IM,e),i.supercool=.3*oe(4.25,4.8,e),i.bubble=oe(4.3,5.6,e),i.bubbleWall=2.2*oe(4.4,4.52,e)*(1-oe(5.35,5.85,e)),i.bubbleDone=oe(5.35,5.85,e),i.diff=oe(6.4,8,e),i.threads=oe(Wo,W0,e)*(1-oe(8.8,9.6,e))*Pi(DM,e),i.threadOpen=Pi(LM,e),i.threadDense=Pi(FM,e),i.threadBead=oe(7.8,9,e),i.threadCool=oe(6.2,9,e),i.threadZoom=.035*oe(5.94,6.02,e)*(1-oe(6.2,6.8,e)),i.gas=oe(9.2,10.4,e)*(1-.75*oe(13.2,15.6,e))*(1-oe(19.2,21,e)),i.condense=ys(9.4,12.4,e),i.gasLit=oe(12,13.6,e),i.parentSky=oe(0,.7,e)*(1-oe(3.25,3.55,e)),i.skyPull=oe(.9,3.45,e),i.newSky=oe(22.6,26.5,e),i.band=oe(23.5,25.7,e),i.galaxy=oe(18.9,21.2,e),i.galaxyGlow=oe(19.2,21.6,e),i.galaxyStars=1-.85*oe(24,26.4,e),i.sun=oe(21.6,23.6,e),i.sunBeacon=oe(21.8,23.2,e)*(1-oe(24.6,26.2,e)),i.planet=oe(24.6,25.6,e),i.cool=oe(26,27.6,e),i.steam=oe(27.2,28,e)*(1-oe(28.4,29.4,e)),i.ocean=oe(27.5,29.2,e),i.clouds=oe(28,29.8,e),i.life=oe(29.2,30.8,e),i.atmo=oe(26.9,29,e),i.shake=t?0:Vo(e,He,.02,.32)*(e>=He?1:0);let l=e>=He?Math.exp(-n/.085):0,c=t?.2:1;i.flash=l*c,i.exposure=(1-.3*r-.18*oe(9,10.4,e)*(1-oe(12,14,e)))*(1+.35*l*c),i.bloom=.075+.08*(1-oe(.1,2,e))+.05*s*(e<=He?1:0)+.08*c*Vo(e,He,.04,.16)+.04*oe(12.5,15,e),i.bloomAdd=.55*(1-oe(.1,2,e)),i.shockRadius=e>=He?.04+1.9*(1-Math.exp(-n*2.6)):0,i.shockAmp=t?0:e>=He?Math.exp(-n/.45)*oe(He,3.62,e):0,i.lens=oe(1,2.9,e)*(1-oe(3.36,3.56,e)),i.aberration=.25+(t?0:2.5*Vo(e,He,.04,.3)),i.grain=fi(.022,.042,oe(.2,2,e)),i.curveMix=oe(.15,2.2,e),i.hueCurve=.45*oe(3.56,3.72,e)*(1-oe(10.4,12.2,e)),i.scrim=oe(.3,1.6,e)*(.2+.32*oe(3.56,3.7,e)*(1-oe(8.8,9.8,e))+.1*oe(11,13,e)*(1-oe(22,24,e))),i.vignette=.3+.12*s*(e<=He?1:0);let u=1-oe(.2,1.8,e);i.lift[0]=Ma[0]*u,i.lift[1]=Ma[1]*u,i.lift[2]=Ma[2]*u;let f=oe(.6,3.3,e),h=oe(21,27,e);for(let d=0;d<3;d++){let g=fi(NM[d],q0[d],f);i.bg[d]=e<He?g:fi(q0[d],UM[d],h)}return i}var Uh=(i,e,t)=>[i,e,t],OM=i=>Math.hypot(i[0],i[1],i[2]),Tn=i=>{let e=OM(i)||1;return[i[0]/e,i[1]/e,i[2]/e]},ba=(i,e)=>[i[0]+e[0],i[1]+e[1],i[2]+e[2]],Oh=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],Vn=(i,e)=>[i[0]*e,i[1]*e,i[2]*e],Sa=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],Bd=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]];function Z0(i,e,t){let n=Math.cos(t),s=Math.sin(t),r=Sa(e,i),a=Bd(e,i);return[i[0]*n+a[0]*s+e[0]*r*(1-n),i[1]*n+a[1]*s+e[1]*r*(1-n),i[2]*n+a[2]*s+e[2]*r*(1-n)]}var Xo=2.5,kd=2.6,Bh=Tn(Uh(.16,.95,.27)),ii=Uh(.46,.1,-1),$i=Tn(Uh(-.3,1,.42)),Wn=.15,wr=Tn(Uh(-.25,.42,1)),Ss=$i,BM=Oh(wr,Vn(Ss,Sa(wr,Ss))),En=Tn(BM),kh=Tn(Bd(Ss,En));function kM(i,e){let t=Math.cos(e);return Tn(ba(ba(Vn(En,Math.cos(i)*t),Vn(kh,Math.sin(i)*t)),Vn(Ss,Math.sin(e))))}var Yo=.62,ai=ba(ii,Vn(kM(Yo,0),Wn*.72)),Ks=2e-5,J0=Ks*4.2,zM=Ks*36,HM=Tn(Oh(ii,ai)),VM=Z0(HM,Ss,-.66),Gn=Tn(ba(VM,Vn(Ss,-.07))),GM=-.36,WM=Tn(Oh(Ss,Vn(Gn,Sa(Ss,Gn)))),Zs=Tn(Z0(WM,Gn,GM)),qM=Tn(Bd(Gn,Zs)),XM=Tn(ba(ba(Vn(Gn,-.34),Vn(qM,-.86)),Vn(Zs,.38))),wa=Oh(ai,Vn(XM,zM)),j0=Ks*9.6;function zd(i){let e=Math.asin(Math.max(-1,Math.min(1,Sa(i,Ss))));return[Math.atan2(Sa(i,kh),Sa(i,En)),e]}var bs=19.4,Vd=12.3,YM=[0,1,2].map(i=>Ci([[He,0],[9.4,[0,0,0][i]],[Vd,[.16,.04,-.55][i]],[16.2,[.26,.06,-.76][i]],[bs,ii[i]]])),$M=[[0,[0,0,1]],[He,[0,0,1]],[9.4,[.04,.03,1]],[Vd,[0,.1,1]],[14.6,[-.14,.3,1]],[16.2,[-.2,.36,1]],[bs,wr]],KM=[0,1,2].map(i=>Ci($M.map(([e,t])=>[e,t[i]]))),[zh,ZM]=zd(wr),[Ea,JM]=zd([-Gn[0],-Gn[1],-Gn[2]]);for(;Ea-zh>Math.PI;)Ea-=Math.PI*2;for(;Ea-zh<-Math.PI;)Ea+=Math.PI*2;var jM=Ci([[bs,zh],[21.6,zh+.32],[23,Yo*.85],[24.6,Yo],[26.2,fi(Yo,Ea,.65)],[28.8,Ea]]),QM=Ci([[bs,ZM],[21.2,.8],[22.4,.7],[23.4,.5],[24.6,.2],[26.2,.1],[28.8,JM]]),eS=Ci([[0,0],[1.4,Math.log(.985)],[2.7,Math.log(.86)],[He,Math.log(.6)]],!0,!1),tS=Ci([[He,Math.log(.6)],[3.85,Math.log(.8)],[4.05,Math.log(1.25)],[4.35,Math.log(1.7)],[4.7,Math.log(1.95)],[5.1,Math.log(2.05)],[5.5,Math.log(2.1)],[5.9,Math.log(1.95)],[7,Math.log(.95)],[9.4,Math.log(.66)],[Vd,Math.log(.62)],[14.6,Math.log(1.3)],[17,Math.log(.84)],[bs,Math.log(.56)],[21.2,Math.log(.36)],[22.4,Math.log(.21)],[23.4,Math.log(.075)],[24.3,Math.log(.022)],[25.4,Math.log(.0034)],[26.6,Math.log(85e-5)],[28.2,Math.log(29e-5)],[30.4,Math.log(j0)]]),iS=Ci([[He,52],[9.4,50],[bs,44],[25,40],[Hn,38]]),nS=Ci([[He,46],[bs,46],[23,44],[26.6,42],[28.4,31],[29.5,30]]),sS=27,rS=.12,aS=.2;function em(i,e,t){let n=2*Math.atan(Math.tan(t*Math.PI/360)/e)*180/Math.PI;return Math.max(i,n)}function Q0(i,e,t){return fi(t,em(t,e,sS),oe(.2,2,i))}function tm(i,e,t,n,s,r,a){let o=i.target,l=i.dir,c=i.up,u;if(e<=He){let m=ys(.15,3.1,e),_=i.handoverTarget,E=i.handoverUp;for(let S=0;S<3;S++)o[S]=_[S]*(1-m);let y=Math.exp(Pi(eS,e));l[0]=-o[0],l[1]=-o[1],l[2]=y-o[2],u=Math.hypot(l[0],l[1],l[2]),c[0]=fi(E[0],0,m),c[1]=fi(E[1],1,m),c[2]=fi(E[2],0,m)}else{if(e<=bs)for(let _=0;_<3;_++)o[_]=Pi(YM[_],e);else{let _=ys(21,24.4,e),E=Yi((.8-n)/.35,0,1),y=ys(fi(24.8,24.5,E),fi(27.9,27.1,E),e);for(let S=0;S<3;S++)o[S]=ii[S]+(ai[S]-ii[S])*_+(wa[S]-ai[S])*y}if(e<=bs)for(let _=0;_<3;_++)l[_]=Pi(KM[_],e);else{let _=Pi(jM,e),E=Pi(QM,e),y=Math.cos(_)*Math.cos(E),S=Math.sin(_)*Math.cos(E),M=Math.sin(E);for(let w=0;w<3;w++)l[w]=En[w]*y+kh[w]*S+$i[w]*M}u=Math.exp(Pi(tS,e));let m=ys(21,28.8,e);c[0]=fi(0,Zs[0],m),c[1]=fi(1,Zs[1],m),c[2]=fi(0,Zs[2],m)}Ta(l);let f=i.right;Hd(f,c,l),Ta(f),Hd(c,l,f),Ta(c);let h=0,d=0;if(t.shake>0&&(h+=t.shake*.014*(Math.sin(e*71)+.6*Math.sin(e*133+1.7)),d+=t.shake*.012*(Math.sin(e*89+.4)+.5*Math.sin(e*151+2.9))),h-=r.x*.032,d+=r.y*.022,!a&&e>Hn-1.5){let m=e-(Hn-1.5),_=oe(0,6,m);h+=_*.022*Math.sin(m*.061),d+=_*.012*Math.sin(m*.043+1.1)}for(let m=0;m<3;m++)l[m]+=f[m]*h+c[m]*d;Ta(l),i.distance=u;let g=i.position;for(let m=0;m<3;m++)g[m]=o[m]+l[m]*u;if(e<=He)i.fov=Q0(e,n,s);else{let m=em(Pi(iS,e),n,Pi(nS,e));i.fov=fi(Q0(He,n,s),m,ys(He,4.1,e))}i.fov=Yi(i.fov,10,100);let v=rS*Math.min(1,n)*oe(He,3.95,e)*(1-oe(5.6,6.3,e))+aS*i.shortScreen*oe(9.6,11.2,e)*(1-oe(19.4,20.8,e)),p=i.look;if(v>0){let m=v*Math.tan(i.fov*Math.PI/360);for(let _=0;_<3;_++)l[_]+=c[_]*m;Ta(l),Hd(c,l,f),Ta(c)}for(let m=0;m<3;m++)p[m]=g[m]-l[m]*u;return i.near=Math.max(u*.02,1e-7),i.far=40,i}function im(){return{position:[0,0,1],target:[0,0,0],look:[0,0,0],dir:[0,0,1],up:[0,1,0],right:[1,0,0],fov:45,near:.02,far:40,distance:1,handoverTarget:[0,0,0],handoverUp:[0,1,0],shortScreen:0}}function Ta(i){let e=Math.hypot(i[0],i[1],i[2])||1;i[0]/=e,i[1]/=e,i[2]/=e}function Hd(i,e,t){let n=e[1]*t[2]-e[2]*t[1],s=e[2]*t[0]-e[0]*t[2],r=e[0]*t[1]-e[1]*t[0];i[0]=n,i[1]=s,i[2]=r}var ws=`
float hash11(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float hash13(vec3 p3) { p3 = fract(p3 * 0.1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
vec3 hash33(vec3 p3) {
  p3 = fract(p3 * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yxz + 33.33);
  return fract((p3.xxy + p3.yxx) * p3.zyx);
}
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
`,qn=`
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
`,Aa=i=>`vec3(${i.map(e=>e.toFixed(4)).join(", ")})`,oS=Lh.map(Aa).join(`,
  `),_i=`
const vec3 BB[${zn}] = vec3[${zn}](
  ${oS}
);
vec3 blackbody(float T) {
  float x = clamp(log(max(T, 1.0) / ${yr.toFixed(1)}) * ${((zn-1)/Math.log(Fh/yr)).toFixed(6)}, 0.0, ${(zn-1).toFixed(1)});
  float i = min(floor(x), ${(zn-2).toFixed(1)});
  int k = int(i);
  return mix(BB[k], BB[k + 1], x - i);
}
const vec3 LUMA = vec3(0.2126, 0.7152, 0.0722);
const vec3 H_ALPHA = vec3(1.0, 0.1, 0.14);
const vec3 O_III = vec3(0.06, 0.78, 0.72);
const vec3 REFLECTION = vec3(0.24, 0.44, 1.0);
const vec3 DUST_LANE = vec3(0.42, 0.33, 0.25);
const vec3 WEB = vec3(0.6, 0.7, 1.0);
const vec3 K_SUN = ${Aa(Sr(5800))};
const vec3 K_POP3 = ${Aa(Sr(4e4))};
const vec3 K_BULGE = ${Aa(Sr(4200))};
const vec3 K_YOUNG = ${Aa(Sr(11e3))};
const vec3 K_WHITE = ${Aa(Sr(6500))};
`,nm=`
float kelvin(float k) { return 800.0 * pow(8.75, k); }
vec3 thermal(float k) {
  k = clamp(k, 0.0, 1.15);
  return blackbody(kelvin(k)) * (0.12 + 0.88 * min(k, 1.0));
}
`,Gd=`
float kelvinB(float k) { return 800.0 * pow(8.75, k); }
float burnRadiance(float k) { return (0.06 + 2.94 * k * k) * (0.55 + 0.45 * smoothstep(0.0, 0.45, k)); }
vec3 burn(float k) {
  k = clamp(k, 0.0, 1.15);
  return blackbody(kelvinB(k)) * burnRadiance(k);
}
vec3 burnHot(float k) {
  k = clamp(k, 0.0, 1.15);
  return blackbody(kelvinB(k + 0.25)) * burnRadiance(k);
}
`,Tr=`
varying vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;var sm=.34,Hh=.1,rm=.4,lS=`
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
`,cS=`
varying vec3 vColor;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float d2 = dot(p, p);
  if (d2 > 1.0) discard;
  gl_FragColor = vec4(vColor * exp(-d2 * 4.0) * (1.0 - d2), 1.0);
}
`,hS=`
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
`,uS=`
uniform float uOpacity, uTime;
varying vec2 vP;
varying vec3 vView;
varying vec3 vNormalV;
${qn}
${_i}
void main() {
  vec2 p = vP * 1.3;              // quad spans \xB11.3 galaxy radii
  float r = length(p);
  if (r > 1.3) discard;
  // The plane is laid down with local z = \u2212vP.y; match the star particles' angle and rotation.
  float th = atan(-p.y, p.x) - uTime * 0.03 / (r + 0.14);
  vec2 pr = vec2(cos(th), sin(th)) * r;
  // Two grand-design arms broken into flocculent spurs and star-forming knots.
  float wob = snoise(vec3(pr * 3.0, 2.0)) * 0.8 + snoise(vec3(pr * 7.5, 5.0)) * 0.3;
  float spiral = th - log(max(r, ${Hh.toFixed(3)}) / ${Hh.toFixed(3)}) / ${sm.toFixed(3)};
  float phase = 2.0 * spiral + wob;
  // The arms grow out of the bulge (no bright clumps where they start) and fade at the rim.
  float armOn = smoothstep(0.07, 0.26, r) * smoothstep(1.2, 0.72, r);
  float arm = pow(0.5 + 0.5 * cos(phase), 3.0) * armOn;
  float n = snoise(vec3(pr * 9.0, 1.3)) * 0.5 + 0.5;
  float spur = pow(0.5 + 0.5 * cos(phase + 1.9 + n * 2.8), 6.0) * armOn * 0.35;
  // Dust lanes run along the inner (concave) edge of each arm, broken into patches.
  float lane = pow(0.5 + 0.5 * cos(phase + 0.6), 7.0) * smoothstep(0.1, 0.24, r) * smoothstep(1.0, 0.35, r)
             * smoothstep(0.25, 0.65, n);
  // Star clouds, and (the brightest of them) pink HII knots (star-forming regions: H-alpha).
  float fine = snoise(vec3(pr * 30.0, 4.1)) * 0.5 + 0.5;
  float clumps = smoothstep(0.55, 0.95, fine);
  float hii = smoothstep(0.86, 0.99, fine) * arm;
  float disk = exp(-r / ${(rm*.82).toFixed(3)}) * smoothstep(1.3, 0.85, r);
  float halo = exp(-r / 0.55) * 0.08;
  float bulge = exp(-pow(r / 0.07, 0.9)) + 0.2 * exp(-r / 0.14);
  // As galaxies photograph: a yellowish bulge of old stars (~4 200 K), blue arms of young stars
  // (~11 000 K) with blue reflection haze, pink HII knots (H-alpha with a little H-beta).
  vec3 core = mix(K_BULGE, vec3(1.0, 0.9, 0.78), 0.5) * 0.9;
  vec3 cool = mix(K_YOUNG, REFLECTION, 0.25);
  vec3 knot = mix(H_ALPHA, vec3(1.0, 0.4, 0.6), 0.35);
  vec3 col = core * bulge * 1.3;
  col += mix(core * 0.5, cool, smoothstep(0.08, 0.42, r)) * (disk * (0.12 + 1.3 * (arm + spur) * (0.55 + 0.6 * n)) + halo);
  col += cool * clumps * (arm + spur) * disk * 0.9;
  col += knot * hii * disk * 1.5;
  // Dust lanes absorb blue light first: brown-grey, reddening what shines through.
  col *= mix(vec3(1.0), DUST_LANE * 0.55, lane);
  // A thin disk seen at a grazing angle is brighter (a longer path through it): from near the
  // plane it gathers toward the band across the sky.
  float dist = length(vView);
  float cosv = abs(dot(vView / max(dist, 1e-9), vNormalV));
  float graze = clamp(0.42 / max(cosv, 0.1), 1.0, 2.4);
  // Close up, the diffuse light resolves into the stars themselves (the particles): fade it.
  float resolve = smoothstep(${(Wn*.06).toFixed(4)}, ${(Wn*.3).toFixed(4)}, dist);
  gl_FragColor = vec4(col * uOpacity * graze * resolve, 1.0);
}
`;function Wd(i,e){if(i()<.13)return e.r=Math.abs(xi(i))*.075+.005,e.ang=i()*Math.PI*2,e.h=xi(i)*.035*Math.max(.2,1-e.r*3),e.kind=0,e;e.r=-Math.log(1-i()*.985)*rm+.03,e.r>1.15&&(e.r=.45+(e.r-1.15)%.7);let n=i()<.64,s=Math.log(Math.max(e.r,Hh)/Hh)/sm,r=i()<.5?0:Math.PI,a=1+3.5*Math.max(0,1-(e.r-.08)/.2),o=n?xi(i)*(.12+.08*i())*a:i()*Math.PI*2;return e.ang=s+r+o,e.h=xi(i)*(.008+.012*e.r),e.kind=n?1:2,e}function am(i,e,t,n,s){let r={r:0,ang:0,h:0,kind:0},a=[0,0,0];for(let o=n;o<s;o++){Wd(i,r);let l,c,u,f;if(r.kind===0)l=(.3+i()*.45)*.85,Go(3800+i()*1400,a),c=a[0],u=a[1],f=a[2];else{let h=r.kind===1&&i()<.45;l=h?.32+Math.pow(i(),4)*2.4:.1+i()*.22,Go(h?9e3+Math.pow(i(),2)*16e3:4500+i()*3e3,a),c=a[0],u=a[1],f=a[2],h&&i()<.06&&(c=1,u=.36,f=.5,l*=1.3)}e[o*4]=r.r,e[o*4+1]=r.ang,e[o*4+2]=r.h,e[o*4+3]=l,t[o*3]=c,t[o*3+1]=u,t[o*3+2]=f}}function om({count:i,orbit:e,color:t}){let n=new Et,s=new D(...En),r=new D(...$i),a=new D().crossVectors(s,r);n.matrixAutoUpdate=!1,n.matrix.makeBasis(s,r,a).setPosition(ii[0],ii[1],ii[2]),n.matrixWorldNeedsUpdate=!0;let o=new xt;o.setAttribute("position",new vt(new Float32Array(i*3),3)),o.setAttribute("aOrbit",new vt(e,4)),o.setAttribute("aColor",new vt(t,3)),o.boundingSphere=new ji(new D,1e6);let l={uTime:{value:0},uOpacity:{value:0},uScale:{value:Wn},uPixelRatio:{value:1},uNearFade:{value:.002},uRefDepth:{value:.4}},c=new Di(o,new De({vertexShader:lS,fragmentShader:cS,uniforms:l,transparent:!0,depthTest:!1,depthWrite:!1,blending:Xt,toneMapped:!1}));c.frustumCulled=!1,c.renderOrder=2;let u={uOpacity:{value:0},uTime:{value:0}},f=new Vi(2,2),h=new Je(f,new De({vertexShader:hS,fragmentShader:uS,uniforms:u,transparent:!0,depthTest:!1,depthWrite:!1,blending:Xt,toneMapped:!1,side:wi}));h.rotation.x=-Math.PI/2,h.scale.setScalar(Wn*1.3),h.frustumCulled=!1,h.renderOrder=1,n.add(h,c);function d(v,p,m){if(n.visible=v.galaxy>.001,!n.visible)return;l.uTime.value=v.t,l.uOpacity.value=v.galaxy*v.galaxyStars*p.galaxyGain,l.uPixelRatio.value=p.pixelRatio,l.uNearFade.value=Math.max(1e-6,p.cameraDistance*.3),l.uRefDepth.value=Math.max(.05,Math.min(.45,p.cameraDistance)),u.uTime.value=v.t;let _=Math.min(1,Math.max(0,(m-.003)/.006));u.uOpacity.value=v.galaxyGlow*.5*_,h.visible=u.uOpacity.value>.001}function g(){o.dispose(),c.material.dispose(),f.dispose(),h.material.dispose()}return{group:n,update:d,dispose:g}}var Xd=56;function dS(i,e){let t=[{p:ii.slice(),mass:2.6,r:Wn*.9,axis:$i.slice(),spin:-.35}],n=[0,0,.6],s=ii.map((c,u)=>c+wr[u]*.56),r=c=>pS(c,n,s);for(let c of[[-.42,-.3,-.85],[.1,.42,-1.75],[-.85,.2,-1.45],[.95,-.35,-1.6],[-.2,-.75,-1.9],[.62,.62,-.55]])r(c)<.3||t.push({p:c,mass:.7+i()*.6,r:.035+.045*1,axis:qd(i),spin:i()<.5?1:-1});let a=0;for(;t.length<e&&a++<2e4;){let c=Xo*.92*Math.cbrt(i()),u=qd(i),f=[u[0]*c,u[1]*c,u[2]*c];if(r(f)<.3||t.some(d=>lm(d.p,f)<.38))continue;let h=.25+Math.pow(i(),2.6)*1.6;t.push({p:f,mass:h,r:.035+.045*h,axis:qd(i),spin:i()<.5?1:-1})}let o=[],l=new Set;return t.forEach((c,u)=>{let f=t.map((d,g)=>[g,lm(c.p,d.p)]).filter(([d])=>d!==u).sort((d,g)=>d[1]-g[1]),h=u===0?5:4;for(let d=0;d<h&&d<f.length;d++){let g=f[d][0];if(f[d][1]>1.2)break;let v=u<g?`${u}-${g}`:`${g}-${u}`;l.has(v)||(l.add(v),o.push({a:u,b:g,len:f[d][1],w:f[d][1]*(t[u].mass+t[g].mass)}))}}),{nodes:t,edges:o}}function qd(i){return Yd(i,[0,0,0])}function Yd(i,e){let t=i()*2-1,n=i()*Math.PI*2,s=Math.sqrt(1-t*t);return e[0]=s*Math.cos(n),e[1]=t,e[2]=s*Math.sin(n),e}function fS(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}function lm(i,e){return Math.hypot(i[0]-e[0],i[1]-e[1],i[2]-e[2])}function pS(i,e,t){let n=[t[0]-e[0],t[1]-e[1],t[2]-e[2]],s=[i[0]-e[0],i[1]-e[1],i[2]-e[2]],r=Mr((s[0]*n[0]+s[1]*n[1]+s[2]*n[2])/(n[0]**2+n[1]**2+n[2]**2));return Math.hypot(s[0]-n[0]*r,s[1]-n[1]*r,s[2]-n[2]*r)}function cm(i,e){let t=0,n=i.length-1;for(;t<n;){let s=t+n>>1;i[s]<e?t=s+1:n=s}return t}function*mS(i,e,t,n){let s=Ms(90417),{nodes:r,edges:a}=dS(s,e),o=[],l=0;r.forEach(y=>{l+=y.mass,o.push(l)});let c=[],u=0;a.forEach(y=>{u+=y.w,c.push(u)}),yield;let{q:f,web:h,star:d,rnd:g}=t,v={r:0,ang:0,h:0,kind:0},p=fS(En,$i),m=new Int16Array(i).fill(-1),_=new Float32Array(r.length).fill(99),E=[0,0,0];for(let y=0;y<i;y++){y>0&&y%n===0&&(yield);let S=s(),M,w,x,A=.2,R=-1;if(S<.3){R=cm(o,s()*l);let U=r[R];if(R===0){Wd(s,v);let k=v.r*Wn,W=v.ang,J=v.h*Wn+xi(s)*Wn*.12,j=Math.cos(W)*k,Ae=Math.sin(W)*k;M=U.p[0]+En[0]*j+p[0]*Ae+U.axis[0]*J,w=U.p[1]+En[1]*j+p[1]*Ae+U.axis[1]*J,x=U.p[2]+En[2]*j+p[2]*Ae+U.axis[2]*J}else{let k=U.r*(s()<.7?.45:1.1);M=U.p[0]+xi(s)*k,w=U.p[1]+xi(s)*k,x=U.p[2]+xi(s)*k}A=.24}else if(S<.84){let U=a[cm(c,s()*u)],k=r[U.a].p,W=r[U.b].p,J=s(),j=.014+.03*(1-Math.sin(Math.PI*J))+.012*Math.max(0,Math.sin(J*23+U.len*7));M=k[0]+(W[0]-k[0])*J+xi(s)*j,w=k[1]+(W[1]-k[1])*J+xi(s)*j,x=k[2]+(W[2]-k[2])*J+xi(s)*j,A=.2}else{Yd(s,E);let U=Xo*Math.cbrt(s());M=E[0]*U,w=E[1]*U,x=E[2]*U,A=.06}let P=M+xi(s)*A,F=w+xi(s)*A,N=x+xi(s)*A,C=Math.sqrt(P*P+F*F+N*N);if(C>Xo*1.04){let U=Xo*1.04/C;P*=U,F*=U,N*=U}f[y*3]=P,f[y*3+1]=F,f[y*3+2]=N,h[y*4]=M,h[y*4+1]=w,h[y*4+2]=x,h[y*4+3]=S>=.84?-1:R+1,m[y]=R,g[y*4]=s(),g[y*4+1]=s(),g[y*4+2]=s(),g[y*4+3]=s();let L=99,B=99,V=0,X=R===0?.03:R>0?.05:S<.84?.012:0;if(s()<X){let U=R>=0?r[R].mass:.3;L=11.95+Math.pow(s(),1.5)*2.4+(1-Math.min(1,U/1.8))*.9,V=.45+Math.pow(s(),3)*2.4,L<12.8&&(V*=2),s()<.34&&(B=L+1+s()*2.2,B>17.6?B=99:R>=0&&(_[R]=Math.min(_[R],B)))}d[y*4]=L,d[y*4+1]=B,d[y*4+3]=V}yield;for(let y=0;y<i;y++){y>0&&y%(n*4)===0&&(yield);let S=m[y],M=S>=0?_[S]:99;d[y*4+2]=M<99?M+g[y*4+2]*1.6:99,d[y*4+3]===0&&M<99&&s()<.045&&(d[y*4]=M+.5+s()*2.2,d[y*4+1]=99,d[y*4+3]=-(.4+Math.pow(s(),3)*1.4))}return{nodes:r,edges:a}}function*hm(i,e,t=6e3){let n={start:new Float32Array(i*3),color:new Float32Array(i*3),size:new Float32Array(i),energy:new Float32Array(i),q:new Float32Array(i*3),web:new Float32Array(i*4),star:new Float32Array(i*4),rnd:new Float32Array(i*4)},{nodes:s,edges:r}=yield*mS(i,Math.min(e,Xd),n,t);return{count:i,arrays:n,nodes:s,edges:r}}var gS=`
#define IMPACT ${He.toFixed(3)}
#define MAX_NODES ${Xd}
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

${ws}
${_i}
${nm}

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

// The new universe's matter, physically coloured (ending-glsl.js): thermal light by temperature
// (blackbody), the gas and its web in survey / astrophotography colours.
const vec3 ICE = vec3(0.41, 0.54, 1.0);   // the hottest field matter, ~20 000 K blue-white
const vec3 COLD = vec3(1.0, 0.95, 0.92);  // ~6 000 K white
const vec3 DEEP = vec3(0.6, 0.07, 0.0);   // cooled to a dull red glow (~1 100 K)
const vec3 GAS = vec3(0.45, 0.5, 0.66);   // cold neutral gas: a dim blue-grey
const vec3 NODE = vec3(1.0, 0.84, 0.64);  // dense nodes: old, yellowish starlight and hot gas

// Colour (intensity included) and size factor of this particle at time t.
// Before the impact: the reader's matter falling in.
vec3 collapseLook(float t, float rad, out float size) {
  float u = clamp((t - hMeta.x) / (hMeta.y - hMeta.x), 0.0, 1.0);
  float heat = u * u;
  // Falling matter accelerates and heats (blackbody): orange \u2192 yellow \u2192 white, brighter as it
  // plunges. The reader's far stars fall from furthest and are blueshifted as they fall.
  vec3 hot = hMeta.z < 0.0 ? blackbody(mix(6500.0, 16000.0, heat)) : blackbody(mix(2200.0, 7000.0, heat));
  // Settled matter glows by its orbit, like the disk (T \u221D r^-3/4): white-hot near the point,
  // yellow, orange, a dull orange-red further out.
  float ro = smoothstep(0.35, 1.0, abs(hMeta.z));
  vec3 orbitCol = blackbody(6500.0 * pow(1.0 + 5.0 * ro, -0.75));
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
  // Birth: sparks materialise out of the flash, white-hot, cooling through yellow and orange to a
  // dull red, then differentiating into fields (the hottest blue-white, white, a cooled red).
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
  // The dark ages are a dim neutral grey; as gravity gathers the gas the filaments light a neutral
  // blue (the cosmic web as surveys render it) and the nodes a yellowish white (voids stay dim).
  float isVoid = step(aWeb.w, -0.5);
  vec3 webTint = mix(mix(WEB, GAS, 0.25 + 0.4 * aRnd.z), mix(WEB, NODE, 0.7 + 0.3 * aRnd.z), isNode);
  vec3 gasTint = mix(GAS, mix(webTint, GAS, isVoid), smoothstep(0.15, 0.85, c));
  // Dim while spread out, brightening as gravity gathers it: dark voids, legible knots.
  vec3 gas = gasTint * (0.14 + 0.82 * c + 0.08 * c * isNode) * (0.5 + aRnd.y) * voidDim;
  col = mix(col, gas, smoothstep(8.4, 11.0, t));
  // Heavy elements from the first supernovae enrich the gas: it brightens and pales toward white,
  // a touch of O-III teal in it.
  float enr = smoothstep(aStar.z, aStar.z + 2.4, t);
  col = mix(col, vec3(0.78, 0.92, 0.95) * dot(col, vec3(0.45)), enr * 0.5);
  // Stars.
  if (aStar.w != 0.0 && t > aStar.x) {
    float age = t - aStar.x;
    float ign = smoothstep(0.0, 0.18, age);
    float b = abs(aStar.w);
    // The first generation (Population III: massive, metal-free, ~40 000 K) burns blue-white; the
    // second (enriched, lighter) sun-like, a yellow-white.
    vec3 sc = aStar.w > 0.0 ? mix(K_POP3, vec3(1.0), 0.25) : blackbody(5400.0);
    // Ignition: a short, bright flare (the first light of the first stars), then a steady glow.
    vec3 st = sc * b * (1.4 + 11.0 * exp(-age * 2.2)) * ign;
    float twinkle = 0.85 + 0.15 * sin(t * (2.0 + aRnd.z * 3.0) + aRnd.y * 6.28);
    st *= twinkle;
    if (t > aStar.y) {
      float sa = t - aStar.y;
      // A supernova: a blue-white flash (~15 000 K), then a slow afterglow \u2014 its remnant's H-alpha
      // filaments (pink-red) around a faint O-III (teal) interior.
      st = blackbody(15000.0) * b * 16.0 * exp(-sa * 2.6) + (H_ALPHA * 0.26 + O_III * 0.07) * b * exp(-sa * 0.5);
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
`,vS=`
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
`;function um(i){let{count:e,arrays:t,nodes:n,edges:s}=i,r=new Qa;r.setAttribute("position",new wt([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),r.setIndex([0,1,2,0,2,3]),r.instanceCount=e;let a=(S,M,w)=>{let x=new Xa(M,w);return r.setAttribute(S,x),x},o=a("aStart",t.start,3),l=a("aColor",t.color,3),c=a("aSize",t.size,1),u=a("aEnergy",t.energy,1);a("aQ",t.q,3),a("aWeb",t.web,4),a("aStar",t.star,4),a("aRnd",t.rnd,4),r.boundingSphere=new ji(new D,1e6);let f=[],h=[];for(let S=0;S<Xd;S++){let M=n[S];f.push(M?new We(M.p[0],M.p[1],M.p[2],M.r):new We(0,0,0,1)),h.push(M?new We(M.axis[0],M.axis[1],M.axis[2],M.spin):new We(0,1,0,1))}let d={uS:{value:[new We,new We]},uC:{value:[new We,new We]},uAxis:{value:new D(...Bh)},uNodes:{value:f},uNodeAxes:{value:h},uTemp:{value:1},uDiff:{value:0},uWebFade:{value:1},uHeroFade:{value:1},uFilFade:{value:1},uGain:{value:1},uEngineMaxPx:{value:23},uHalfView:{value:new ye(720,450)},uProjScale:{value:1e3},uSize:{value:.0016},uMinPx:{value:.8},uMaxPx:{value:26},uMaxStreak:{value:260},uFocus:{value:1},uAperture:{value:0},uNearFade:{value:.02},uHandover:{value:new Ct},uEngineView:{value:new Ct},uHandA:{value:new We(.5,.5,.5,.5)},uHandB:{value:new We(1,1,1,1)}},g=new De({vertexShader:gS,fragmentShader:vS,uniforms:d,transparent:!0,depthTest:!1,depthWrite:!1,blending:Xt,toneMapped:!1}),v=new Je(r,g);v.frustumCulled=!1;function p(S,M,w,x,A=1,R=null,P=null){let{start:F,color:N,size:C,energy:L}=t;(!R||!P)&&(R=null,P=null);let B=d;if(!(w>0&&S&&x)){Ze();return}let V=w<e,X=w/e;if(!V&&M){for(let Qe=0,we=0;Qe<e;Qe++,we+=3){let Ge=(Qe*X|0)*3;F[we]=S[Ge],F[we+1]=S[Ge+1],F[we+2]=S[Ge+2],N[we]=M[Ge],N[we+1]=M[Ge+1],N[we+2]=M[Ge+2]}if(R)for(let Qe=0;Qe<e;Qe++){let we=Qe*X|0;C[Qe]=R[we],L[Qe]=P[we]}else C.fill(-1),L.fill(-1)}else{let Qe=Ms(5521),we=.012/x.scale;for(let Ge=0;Ge<e;Ge++){let Ne=V?Ge%w:Ge*X|0,Ue=Ge*3,ft=Ne*3;F[Ue]=S[ft],F[Ue+1]=S[ft+1],F[Ue+2]=S[ft+2],V&&Ge>=w&&(F[Ue]+=(Qe()-.5)*we,F[Ue+1]+=(Qe()-.5)*we,F[Ue+2]+=(Qe()-.5)*we),M?(N[Ue]=M[ft],N[Ue+1]=M[ft+1],N[Ue+2]=M[ft+2]):(N[Ue]=.7,N[Ue+1]=.85,N[Ue+2]=1),C[Ge]=R?R[Ne]:-1,L[Ge]=P?P[Ne]:-1}}let U=B.uHandover.value,k=x.x,W=x.y,J=x.z,j=x.p0,Ae=x.scale;U.set(k[0]*Ae,k[1]*Ae,k[2]*Ae,-(k[0]*j[0]+k[1]*j[1]+k[2]*j[2])*Ae,W[0]*Ae,W[1]*Ae,W[2]*Ae,-(W[0]*j[0]+W[1]*j[1]+W[2]*j[2])*Ae,J[0]*Ae,J[1]*Ae,J[2]*Ae,-(J[0]*j[0]+J[1]*j[1]+J[2]*j[2])*Ae,0,0,0,1);let Re=B.uEngineView.value,Ie=x.right,Q=x.up,ie=x.forward,ce=x.eye;Re.set(Ie[0],Ie[1],Ie[2],-(Ie[0]*ce[0]+Ie[1]*ce[1]+Ie[2]*ce[2]),Q[0],Q[1],Q[2],-(Q[0]*ce[0]+Q[1]*ce[1]+Q[2]*ce[2]),ie[0],ie[1],ie[2],-(ie[0]*ce[0]+ie[1]*ce[1]+ie[2]*ce[2]),0,0,0,1),B.uHandA.value.set(x.kx,x.ky,x.ox,x.oy);let Ee=U.elements,Me=m(Qe=>{let we=F[Qe*3],Ge=F[Qe*3+1],Ne=F[Qe*3+2],Ue=Ee[0]*we+Ee[4]*Ge+Ee[8]*Ne+Ee[12],ft=Ee[1]*we+Ee[5]*Ge+Ee[9]*Ne+Ee[13],Gt=Ee[2]*we+Ee[6]*Ge+Ee[10]*Ne+Ee[14];return Math.sqrt(Ue*Ue+ft*ft+Gt*Gt)});B.uHandB.value.set(x.aspect,x.invDiag,Me,A),o.needsUpdate=!0,l.needsUpdate=!0,c.needsUpdate=!0,u.needsUpdate=!0;function Ze(){let Qe=Ms(5521),we=[0,0,0];for(let Ne=0;Ne<e;Ne++){Yd(Qe,we);let Ue=.15+.6*Math.cbrt(Qe());F[Ne*3]=we[0]*Ue,F[Ne*3+1]=we[1]*Ue*.4,F[Ne*3+2]=we[2]*Ue,N[Ne*3]=.7,N[Ne*3+1]=.88,N[Ne*3+2]=1,C[Ne]=.003,L[Ne]=-1}B.uHandover.value.identity(),B.uEngineView.value.set(1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1),B.uHandA.value.set(.5,.5,.5,.5);let Ge=m(Ne=>Math.hypot(F[Ne*3],F[Ne*3+1],F[Ne*3+2]));B.uHandB.value.set(1,1,Ge,1),o.needsUpdate=!0,l.needsUpdate=!0,c.needsUpdate=!0,u.needsUpdate=!0}}function m(S){let M=Math.max(1,Math.floor(e/4e3)),w=new Float32Array(Math.ceil(e/M)),x=0;for(let A=0;A<e;A+=M)w[x++]=S(A);return w.sort(),Math.max(1e-4,w[Math.floor(x*.97)]||1)}function _(S,M){let w=S.t,x=Math.max(0,w-S.shutter);E(d.uS.value[0],d.uC.value[0],w),E(d.uS.value[1],d.uC.value[1],x),d.uTemp.value=S.temp,d.uDiff.value=S.diff,d.uWebFade.value=S.webFade,d.uHeroFade.value=S.heroFade,d.uFilFade.value=S.filFade,d.uGain.value=S.matterGain*M.gain,d.uHalfView.value.set(M.width*.5,M.height*.5),d.uProjScale.value=M.projScale,d.uMinPx.value=.75*M.pixelRatio,d.uMaxPx.value=4*M.pixelRatio,d.uEngineMaxPx.value=23*M.pixelRatio,d.uMaxStreak.value=.22*M.height,d.uFocus.value=M.focus,d.uAperture.value=M.aperture,d.uNearFade.value=M.nearFade,d.uSize.value=M.size}function E(S,M,w){S.set(w,qo(w),Ld(w),Dd(w)),M.set(Nd(w),Ud(w),Fd(w),0)}function y(){r.dispose(),g.dispose()}return{mesh:v,loadHandover:p,update:_,dispose:y,nodes:n,edges:s,count:e}}var Vh=14,xS=`
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
  mv.xy += position.xy * size * ${Vh.toFixed(1)};
  vP = position.xy * ${Vh.toFixed(1)};
  gl_Position = projectionMatrix * mv;
}
`,_S=`
uniform float uIntensity;
uniform float uTint;
uniform float uTime;
uniform vec3 uSeedCore;   // the seed's own core / halo tints (largest channel 1), from its glow
uniform vec3 uSeedHalo;
varying vec2 vP;
varying float vEnergy;
${_i}
void main() {
  float r = length(vP);
  // A soft, gradient-lit core (white at the centre, the seed's tint outward) rather than a clipped disc:
  // a smooth power-law profile whose peak stays near the tone curve's shoulder.
  float core = 1.0 / ((1.0 + r * r * 1.4) * (1.0 + r * r * 1.4));
  float halo = 0.12 / (1.0 + r * r * 1.2);
  float wide = 0.03 * exp(-r * 0.4);
  // uTint: the seed's own tint as the engine drew it (1). Toward the impact (0) everything falls
  // in and the point heats past white: a white core in a faint blue-white (~12 000 K) glow.
  vec3 hot = blackbody(12000.0);
  vec3 coreCol = mix(mix(hot, vec3(1.0), core), mix(uSeedCore, vec3(1.0), core * 0.6), uTint);
  vec3 col = mix(coreCol, mix(coreCol, uSeedHalo, 0.45), uTint) * core * 2.2
           + mix(mix(hot, vec3(1.0), 0.5) * 0.7, uSeedHalo * 0.9, uTint) * halo
           + mix(hot * 0.5, uSeedHalo * 0.6, uTint) * wide;
  // A faint, slow shimmer: the seed is alive, never a static dot.
  col *= 1.0 + 0.05 * sin(uTime * 7.0 + r * 0.8);
  col *= smoothstep(${Vh.toFixed(1)}, ${(Vh*.6).toFixed(1)}, r);
  gl_FragColor = vec4(col * uIntensity * vEnergy, 1.0);
}
`,yS=`
uniform float uScale;
varying vec2 vUv;
void main() {
  vUv = position.xy;
  vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  mv.xy += position.xy * uScale;
  gl_Position = projectionMatrix * mv;
}
`,MS=`
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
`,Gh=Object.freeze([Object.freeze({scale:.79,intensity:.6,core:[1,.941,.919],halo:[1,.843,.731],rays:.3}),Object.freeze({scale:2.42,intensity:.08,core:[0,0,0],halo:[1,.773,.58],rays:0})]),dm=(i,e)=>{let t=i?Math.max(Number(i[0])||0,Number(i[1])||0,Number(i[2])||0):0;return t>1e-4?[i[0]/t,i[1]/t,i[2]/t]:e},fm=2,SS=`
varying vec2 vP;
void main() {
  vP = position.xy;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,bS=`
uniform float uOpacity;
uniform float uSpin;      // integrated Keplerian angle at r = 1 (rad)
uniform float uSpinRate;  // its rate (rad/s), for the rotational motion blur
uniform vec2 uBeam;       // camera direction projected into the disk plane
varying vec2 vP;
${qn}
${_i}
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
  // A thin accretion disk's temperature falls as r^-3/4 (Shakura\u2013Sunyaev): white-hot at the inner
  // edge (~7 500 K), yellow-white, orange, an ember-red rim (~1 650 K at r = 1). The brighter
  // lanes run a little hotter.
  float T = 7500.0 * pow(max(r, 0.13) / 0.13, -0.75) * (0.88 + 0.24 * streaks);
  // Relativistic Doppler: the side orbiting toward the camera is blueshifted (hotter-looking) and
  // beamed brighter (\u221D \u03B4\xB3), the receding side redder and dimmer. Orbital speed \u221D r^-1/2.
  vec2 tangent = vec2(-sin(th), cos(th));
  float beta = 0.42 * pow(max(r, 0.13) / 0.13, -0.5);
  float delta = clamp(1.0 / (1.0 - beta * dot(tangent, uBeam)), 0.55, 1.7);
  vec3 col = blackbody(T * delta);
  // Surface brightness (a gentler stand-in for T\u2074, so the outer disk still reads); the cooler
  // outer disk keeps enough light to glow like embers rather than dim to brown.
  col *= mix(1.8, 0.85, smoothstep(0.15, 0.45, r)) * mix(1.0, 0.45, smoothstep(0.45, 0.95, r));
  float beam = delta * delta * delta;
  float e = ring * (0.25 + 0.75 * streaks) * streaks * beam * (1.0 + 2.5 * exp(-r * 7.0));
  gl_FragColor = vec4(col * e * uOpacity, 1.0);
}
`;function pm(){let i=new Et,e=new Vi(2,2),t={uSize:{value:.016},uMinPx:{value:3},uProjScale:{value:1e3},uIntensity:{value:1},uTint:{value:1},uTime:{value:0},uSeedCore:{value:new D(1,.941,.919)},uSeedHalo:{value:new D(1,.843,.731)}},n=new De({vertexShader:xS,fragmentShader:_S,uniforms:t,transparent:!0,depthTest:!1,depthWrite:!1,blending:Xt,toneMapped:!1}),s=new Je(e,n);s.frustumCulled=!1,s.renderOrder=5;let r={uOpacity:{value:0},uSpin:{value:0},uSpinRate:{value:0},uBeam:{value:new ye}},a=new De({vertexShader:SS,fragmentShader:bS,uniforms:r,transparent:!0,depthTest:!1,depthWrite:!1,blending:Xt,toneMapped:!1,side:wi}),o=new Je(e,a);o.frustumCulled=!1,o.renderOrder=4;let l=new D(...Bh);o.quaternion.setFromUnitVectors(new D(0,0,1),l);let c=new D(1,0,0).applyQuaternion(o.quaternion),u=new D(0,1,0).applyQuaternion(o.quaternion),f=[];for(let p=0;p<fm;p++){let m=new De({vertexShader:yS,fragmentShader:MS,uniforms:{uScale:{value:.1},uCore:{value:new D},uHalo:{value:new D},uIntensity:{value:0},uRays:{value:0},uWidth:{value:1},uBloom:{value:0}},transparent:!0,depthTest:!1,depthWrite:!1,blending:Xt,toneMapped:!1}),_=new Je(e,m);_.frustumCulled=!1,_.renderOrder=3,_.visible=!1,f.push({mesh:_,material:m,scale:0,intensity:0})}i.add(o,...f.map(p=>p.mesh),s);let h=new D;function d(p,m){let _=Array.isArray(p)?p:Gh;for(let S=0;S<fm;S++){let M=f[S],w=_[S],x=w&&Number(w.scale)>0&&Number(w.intensity)>0;M.scale=x?Number(w.scale)*m:0,M.intensity=x?Number(w.intensity):0;let A=M.material.uniforms;A.uCore.value.fromArray(x&&w.core?w.core:[0,0,0]),A.uHalo.value.fromArray(x&&w.halo?w.halo:[0,0,0]),A.uRays.value=x&&Number(w.rays)||0}let E=_.find(S=>S&&Number(S.intensity)>0&&Number(S.scale)>0)||Gh[0],y=dm(E.halo,[1,.843,.731]);t.uSeedHalo.value.fromArray(y),t.uSeedCore.value.fromArray(dm(E.core,y))}d(null,.09);function g(p,m,_){let E=p.core>.001;s.visible=E,t.uIntensity.value=p.core,t.uSize.value=p.coreSize,t.uTint.value=p.coreTint,t.uTime.value=p.t;for(let y of f){if(y.mesh.visible=p.seedGlow>.001&&y.intensity>0,!y.mesh.visible)continue;let S=y.material.uniforms;S.uScale.value=y.scale*p.seedScale,S.uIntensity.value=y.intensity*p.seedGlow,S.uWidth.value=p.seedWidth,S.uBloom.value=p.seedBloom}t.uProjScale.value=m.projScale,t.uMinPx.value=2.5*m.pixelRatio,o.visible=p.disk>.001,o.visible&&(o.scale.setScalar(p.diskRadius*1.25),r.uOpacity.value=p.disk*(.9+1.6*Math.max(0,Math.min(1,(p.t-2.6)/.9))),r.uSpin.value=p.diskSpin,r.uSpinRate.value=p.diskSpinRate,h.set(_[0],_[1],_[2]).normalize(),r.uBeam.value.set(h.dot(c),h.dot(u)))}function v(){e.dispose(),n.dispose(),a.dispose();for(let p of f)p.material.dispose()}return{group:i,update:g,setLight:d,dispose:v}}var wS=`
attribute vec4 aStar; // rgb tint, magnitude (0 bright .. 1 faint)
uniform float uIntensity;
uniform float uTime;
uniform float uPixelRatio;
uniform float uTwinkle;
uniform float uPull;      // 0..1: the parent sky streaming into the singularity
uniform vec3 uPullDir;    // world direction from the camera to the singularity
varying vec3 vColor;
${ws}
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
  // (Falling toward the singularity their light is blueshifted.)
  vColor = mix(aStar.rgb, vec3(0.6, 0.72, 1.0), pull) * b * uIntensity;
}
`,TS=`
varying vec3 vColor;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float d2 = dot(p, p);
  if (d2 > 1.0) discard;
  gl_FragColor = vec4(vColor * exp(-d2 * 3.5), 1.0);
}
`,Wh=[0,0,0];function ES(i,e){let t=i<.58?4600+e*2400:i<.84?7e3+e*e*8e3:3300+e*1200;Go(t,Wh);for(let n=0;n<3;n++)Wh[n]=Wh[n]*.6+.4;return Wh}function*mm(i,e,t,n=3e3){let s=Ms(e),r=new Float32Array(i*3),a=new Float32Array(i*4),o=t||[0,1,0],l=Math.abs(o[0])<.9?[0,-o[2],o[1]]:[-o[2],0,o[0]],c=Math.hypot(l[0],l[1],l[2]),u=[l[0]/c,l[1]/c,l[2]/c],f=[o[1]*u[2]-o[2]*u[1],o[2]*u[0]-o[0]*u[2],o[0]*u[1]-o[1]*u[0]];for(let d=0;d<i;d++){d>0&&d%n===0&&(yield);let g,v,p;if(t&&s()<.68){let E=s()*Math.PI*2,y=xi(s)*.085,S=Math.cos(y),M=Math.sin(y),w=Math.cos(E),x=Math.sin(E);g=(u[0]*w+f[0]*x)*S+o[0]*M,v=(u[1]*w+f[1]*x)*S+o[1]*M,p=(u[2]*w+f[2]*x)*S+o[2]*M}else{p=s()*2-1;let E=s()*Math.PI*2,y=Math.sqrt(1-p*p);g=y*Math.cos(E),v=y*Math.sin(E)}r[d*3]=g,r[d*3+1]=v,r[d*3+2]=p;let m=s(),_=ES(m,s());a[d*4]=_[0],a[d*4+1]=_[1],a[d*4+2]=_[2],a[d*4+3]=1-Math.pow(s(),5)}let h=new xt;return h.setAttribute("position",new vt(r,3)),h.setAttribute("aStar",new vt(a,4)),h.boundingSphere=new ji(new D,1e6),h}function*gm(i){let e=yield*mm(i,7001,null);yield;let t=yield*mm(i*3,3307,$i);return{parent:e,fresh:t}}var AS=`
uniform vec3 uCamRight, uCamUp, uCamFwd;
uniform vec2 uTan;
uniform vec3 uGalN, uGalIn;
uniform float uIntensity, uGrainScale;
varying vec2 vUv;
${ws}
${qn}
${_i}
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
  // Dust rifts absorb blue first: the light through their edges is reddened, brown-grey.
  vec3 dust = mix(vec3(1.0), DUST_LANE * 0.3, lane * 0.95);
  // The band as a long exposure shows it: a neutral, faintly warm white out along the disk (the
  // integrated light of ordinary stars), yellower toward the galaxy's centre (its old bulge).
  vec3 cool = vec3(0.86, 0.88, 0.95);
  vec3 pale = mix(K_BULGE, vec3(1.0), 0.45) * 0.95;
  vec3 tint = mix(cool, pale, smoothstep(0.3, 1.0, toward) * 0.8);
  // A few faint pink HII knots along the star clouds.
  float knots = smoothstep(0.78, 0.95, snoise(rd * 38.0 + 5.0) * 0.5 + 0.5) * strip * clouds;
  float diffuse = strip * (0.18 + 0.82 * clouds) + wide * 0.1 + core * 0.9;
  float dustL = dot(dust, vec3(0.3333));
  float density = clamp((strip * (0.2 + 0.8 * clouds * clouds) + wide * 0.05) * dustL, 0.0, 1.0) * 0.4 + 0.0015;
  float stars = grain(rd, density) + grain(rd * 1.7 + 0.31, density * 0.6) * 0.5;
  vec3 col = tint * dust * diffuse * 0.055 + tint * stars * 0.42 + mix(H_ALPHA, vec3(1.0, 0.45, 0.6), 0.4) * knots * 0.012;
  gl_FragColor = vec4(col * uIntensity, 1.0);
}
`;function vm(i){let e=f=>{let h=new De({vertexShader:wS,fragmentShader:TS,uniforms:{uIntensity:{value:0},uTime:{value:0},uPixelRatio:{value:1},uTwinkle:{value:1},uPull:{value:0},uPullDir:{value:new D(0,0,-1)}},transparent:!0,depthTest:!1,depthWrite:!1,blending:Xt,toneMapped:!1}),d=new Di(f,h);return d.frustumCulled=!1,d.renderOrder=-10,d},t=e(i.parent),n=new xt;n.setAttribute("position",new wt([-1,-1,0,3,-1,0,-1,3,0],3));let s=new D(ii[0]-ai[0],ii[1]-ai[1],ii[2]-ai[2]).normalize(),r={uCamRight:{value:new D},uCamUp:{value:new D},uCamFwd:{value:new D},uTan:{value:new ye(1,1)},uGalN:{value:new D(...$i)},uGalIn:{value:s},uIntensity:{value:0},uGrainScale:{value:900}},a=new Je(n,new De({vertexShader:Tr,fragmentShader:AS,uniforms:r,transparent:!0,depthTest:!1,depthWrite:!1,blending:Xt,toneMapped:!1}));a.frustumCulled=!1,a.renderOrder=-20;let o=e(i.fresh);function l(f,h,d,g,v){f.visible=h>.002;let p=f.material.uniforms;p.uIntensity.value=h,p.uTime.value=d.t,p.uPixelRatio.value=g.pixelRatio,p.uTwinkle.value=v?0:1}function c(f,h,d,g,v){l(t,f.parentSky*.55,f,h,d);let p=t.material.uniforms;if(p.uPull.value=f.skyPull,p.uPullDir.value.set(-g.position[0],-g.position[1],-g.position[2]).normalize(),l(o,f.newSky*.7,f,h,d),a.visible=f.band>.001,a.visible){r.uCamRight.value.set(g.right[0],g.right[1],g.right[2]),r.uCamUp.value.set(g.up[0],g.up[1],g.up[2]),r.uCamFwd.value.set(-g.dir[0],-g.dir[1],-g.dir[2]);let m=Math.tan(g.fov*Math.PI/360);r.uTan.value.set(m*v,m),r.uIntensity.value=f.band,r.uGrainScale.value=h.height/m*.42}}function u(){for(let f of[t,o,a])f.geometry.dispose(),f.material.dispose()}return{parent:t,fresh:o,band:a,update:c,dispose:u}}var $d=[[.75,.5,1.95,4.42,2.25],[-1.25,-.55,1.75,4.58,1.85],[.35,-1.45,1.6,4.7,2],[-.55,1.45,1.75,4.86,1.55],[1.65,-.55,1.35,5,1.6],[-1.75,.95,.95,5.12,1.35]],RS=.3,CS=(i,e,t)=>`
#define STEPS ${i}
#define OCTAVES ${e}
#define BUBBLES ${$d.length}
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
${ws}
${qn}
${_i}
${Gd}

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
  float rho = uA * ${kd.toFixed(2)};
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
  // cooler outer layers: a white-hot core burning out through yellow and orange into a red limb.
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
    // The supercooled false vacuum sinks to a dimmer, redder glow; the reheated true vacuum inside
    // the bubbles burns hotter (paler, brighter).
    float k = uTemp + 0.24 * n - coreHeat - 0.22 * smoothstep(0.8, 1.08, rn) - uSupercool * (1.0 - phase) + 0.14 * min(fil * 3.0, 1.0);
    // As the fireball hands over to the threads it fades by cooling (orange, red) as it dims.
    k -= 0.4 * (1.0 - uPlasma);
    float fresh = bw.x * (1.0 - uBubbleDone);
    vec3 src = burn(k) * (1.0 + 0.9 * fresh);
    float kap = uKappa * mix(1.0, 0.3, fresh);
    float front = exp(-fi * 1.2);
    // The bubble walls: a thin front where the latent heat is released \u2014 hotter than anything
    // around it, white (~8 000 K; a bluer front over the orange would read violet).
    vec3 wall = mix(blackbody(8000.0), vec3(1.0), 0.4) * 0.8 * bw.y * uWall * edge;
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
    float sig = mix(${RS.toFixed(3)}, ka.w, x);
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
    // Cold neutral gas: barely there, a dim neutral blue-grey (it only scatters faint light).
    vec3 tint = mix(vec3(0.3, 0.32, 0.42), WEB * 0.9, kb.z);
    // The first stars ionise the densest knots once they ignite: HII regions glow H-alpha pink-red,
    // with a teal O-III core where the gas is hottest (the massive knots).
    vec3 hii = mix(H_ALPHA, mix(H_ALPHA, O_III, 0.55), smoothstep(0.55, 1.0, kb.z) * x) * 1.1;
    tint = mix(tint, hii, uGasLit * x * kb.z);
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
`,PS=i=>`
#define SHELLS ${i}
uniform vec3 uCamPos, uCamRight, uCamUp, uCamFwd;
uniform vec2 uTan;
uniform float uTime, uA, uTemp, uDiff, uGain, uOpen, uBead, uDense, uRho, uCool;
uniform float uNear, uRatio;
varying vec2 vUv;
${qn}
${_i}
${Gd}

// The second family of strands (differentiation): the hottest, blue-white (~20 000 K).
const vec3 ICE = vec3(0.41, 0.54, 1.0);

// A strand's cross-section: a thin core and a short skirt (fainter, so it burns a deeper blue).
float strand(float x, float wc, float hw) {
  return exp(-x * x / (wc * wc)) * 0.82 + exp(-x / hw) * 0.18;
}

void main() {
  vec2 ndc = vUv * 2.0 - 1.0;
  vec3 rd = normalize(uCamFwd + ndc.x * uTan.x * uCamRight + ndc.y * uTan.y * uCamUp);
  vec3 col = vec3(0.0);
  float d = uNear;
  // Incandescence (blackbody): a strand's temperature follows its brightness \u2014 white where it
  // blazes, yellow and orange, then a dull red toward its faint parts and edges. The whole web
  // cools with time.
  float kBase = mix(0.24, 0.04, uCool);
  float kSpan = mix(0.98, 0.7, uCool);
  // Strands run in braided bundles (iso-lines of one field at a few levels); as the plasma thins
  // the outer strands fade, and blue-white strands (the hottest) appear between the cooling red ones
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
    // Two populations burn side by side, region by region (the warp field, free here): most bundles
    // at one temperature scale (white cores, yellow-orange bodies, red skirts), about a third
    // hotter (blue-white cores, yellow-white bodies, orange skirts).
    float kk = kBase + kSpan * pow(min(lum, 1.15), 1.6) - 0.03 * fk;
    float fam = smoothstep(0.08, 0.34, w1);
    vec3 hot = mix(burn(kk), burnHot(kk), fam) * lum;
    float li = iceV * along;
    vec3 ice = (ICE + vec3(0.6) * li * li) * li * 1.25;
    col += (hot * (1.0 - 0.35 * uDiff) + ice * uDiff * smoothstep(-0.4, 0.4, 0.15 - n)) * att;
    d *= uRatio;
  }
  gl_FragColor = vec4(col * uGain, 1.0);
}
`;function xm({steps:i,octaves:e,shells:t,nodes:n}){let s=Math.max(1,n.length),r=[],a=[],o=0;for(let g of n)o=Math.max(o,g.mass);for(let g=0;g<s;g++){let v=n[g];if(!v){r.push(new We(0,0,0,1)),a.push(new We(0,1,0,0));continue}let p=v.mass/o;r.push(new We(v.p[0],v.p[1],v.p[2],Math.max(.035,v.r*(g===0?.5:.75)))),a.push(new We(.0011*(.35+v.mass),.42*(1-Math.sqrt(p)),Math.sqrt(p),0))}let l={uCamPos:{value:new D},uCamRight:{value:new D},uCamUp:{value:new D},uCamFwd:{value:new D},uTan:{value:new ye(1,1)},uTime:{value:0},uA:{value:0},uAPrev:{value:0},uTemp:{value:1},uEmit:{value:0},uKappa:{value:1},uBubble:{value:0},uBubbleDone:{value:0},uFill:{value:.2},uPlasma:{value:0},uSupercool:{value:0},uWall:{value:0},uGas:{value:0},uCondense:{value:0},uGasLit:{value:0},uBub:{value:$d.map(g=>new We(g[0],g[1],g[2],g[3]))},uBubV:{value:$d.map(g=>g[4])},uKnot:{value:r},uKnotB:{value:a}},c=new De({vertexShader:Tr,fragmentShader:CS(i,e,s),uniforms:l,depthTest:!1,depthWrite:!1,toneMapped:!1}),u={uCamPos:l.uCamPos,uCamRight:l.uCamRight,uCamUp:l.uCamUp,uCamFwd:l.uCamFwd,uTan:l.uTan,uTime:l.uTime,uA:l.uA,uTemp:l.uTemp,uDiff:{value:0},uGain:{value:0},uOpen:{value:0},uBead:{value:0},uDense:{value:0},uRho:{value:1},uCool:{value:0},uNear:{value:.13},uRatio:{value:Math.pow(1.45/.13,1/Math.max(1,t-1))}},f=new De({vertexShader:Tr,fragmentShader:PS(t),uniforms:u,depthTest:!1,depthWrite:!1,toneMapped:!1}),h={soft:!1,threads:!1};function d(g,v,p,m){l.uCamPos.value.set(v.position[0],v.position[1],v.position[2]),l.uCamRight.value.set(v.right[0],v.right[1],v.right[2]),l.uCamUp.value.set(v.up[0],v.up[1],v.up[2]),l.uCamFwd.value.set(-v.dir[0],-v.dir[1],-v.dir[2]);let _=Math.tan(v.fov*Math.PI/360);return l.uTan.value.set(_*p,_),l.uTime.value=g.t,l.uA.value=Math.max(g.a,1e-4),l.uAPrev.value=Math.max(m,1e-4),l.uTemp.value=g.temp,l.uEmit.value=g.plasmaEmit,l.uKappa.value=g.plasmaKappa,l.uBubble.value=g.bubble,l.uBubbleDone.value=g.bubbleDone,l.uFill.value=g.plasmaFill,l.uSupercool.value=g.supercool,l.uWall.value=g.bubbleWall,l.uPlasma.value=g.plasma*(g.plasmaEmit>.001?1:0),l.uGas.value=g.gas,l.uCondense.value=g.condense,l.uGasLit.value=g.gasLit,h.soft=l.uPlasma.value>.001||g.gas>.001,u.uGain.value=g.threads,h.threads=g.threads>.001,h.threads&&(u.uDiff.value=g.diff,u.uOpen.value=g.threadOpen,u.uBead.value=g.threadBead,u.uDense.value=g.threadDense,u.uCool.value=g.threadCool,u.uRho.value=Math.max(.001,g.a*kd*1.1)),h}return{material:c,threads:f,update:d,dispose:()=>{c.dispose(),f.dispose()}}}var qh=34,IS=`
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
  mv.xy += position.xy * size * ${qh.toFixed(1)};
  vP = position.xy * ${qh.toFixed(1)};
  gl_Position = projectionMatrix * mv;
}
`,LS=`
uniform float uIntensity, uBeacon, uTime;
varying vec2 vP;
varying float vEnergy;
varying float vPx;
${qn}
${_i}
void main() {
  float r = length(vP);
  vec3 col = vec3(0.0);
  // Photosphere of a sun-like star (5800 K), limb-darkened: toward the limb we see higher,
  // cooler layers (~4 500 K), so it dims and reddens; faintly granulated when resolved.
  if (r < 1.0) {
    float mu = sqrt(1.0 - r * r);
    float limb = 0.4 + 0.6 * mu;
    float gran = 1.0 + 0.06 * snoise(vec3(vP * 9.0, uTime * 0.3)) * smoothstep(8.0, 40.0, vPx);
    col += blackbody(mix(4500.0, 6100.0, mu)) * 6.4 * limb * gran;
  }
  float e = max(r - 1.0, 0.0);
  // Corona and a wide, soft scattering halo: the photosphere's light, a little warmer as it is
  // scattered (no flares, no rings).
  col += mix(K_SUN, blackbody(4800.0), 0.5) * (1.2 * exp(-e * 4.0) + 0.06 / (1.0 + e * e * 0.5)) * step(1.0, r);
  col *= smoothstep(${qh.toFixed(1)}, ${(qh*.55).toFixed(1)}, r);
  // While it is still a distant point, the star is lit up for the eye to find.
  float point = exp(-r * r * 0.6) * uBeacon * 20.0;
  gl_FragColor = vec4((col * vEnergy + K_SUN * point) * uIntensity, 1.0);
}
`,FS=`
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
`,DS=`
uniform vec3 uSunV;       // direction to the sun, view space
uniform float uCool, uSteam, uOcean, uClouds, uLife, uTime, uOpacity, uCloudSpin;
varying vec3 vObj;
varying vec3 vView;
varying vec3 vNormalV;
uniform sampler2D tSurf;    // baked (bakePlanetSurface): terrain height, ridges, rock grain, moisture
uniform sampler2D tDetail;  // baked: polar-cap edge noise, plankton field, convection cells, fine seams
uniform sampler2D tAir;     // baked: cloud pattern (cyclones included), its streaks, magma churn
${_i}
// Equirectangular lookup of a direction (the baked fields are functions of direction).
vec2 eq(vec3 d) { return vec2(atan(d.z, d.x) * 0.15915494 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * 0.31830989 + 0.5); }
vec3 spin(vec3 p, float a) {
  float c = cos(a), s = sin(a);
  return vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z);
}
// Cloud cover from the baked pattern: a thin equatorial band, clear subtropics, streaky storm
// belts stretched along the parallels, two cyclones, fine broken cells (see bakePlanetSurface).
float clouds(vec4 air) {
  return smoothstep(0.38, 0.8, air.x - 0.3 * (1.0 - uClouds)) * uClouds;
}
void main() {
  vec3 n = normalize(vObj);
  float lat = abs(n.y);
  // Terrain (baked): continents under a light warp, eroded coasts, ridged mountain belts along
  // the continental margins.
  vec4 surf = texture2D(tSurf, eq(n));
  vec4 detail = texture2D(tDetail, eq(n));
  float h = surf.x;
  float ridge = surf.y;
  float sea = mix(-0.42, 0.0, pow(uOcean, 0.8));
  float water = smoothstep(sea + 0.006, sea - 0.006, h);
  float depthW = clamp((sea - h) / 0.3, 0.0, 1.0);

  // Land (linear albedo, as Earth's): young dark basalt, weathering to grey-brown rock; tan dry
  // belts; grey ranges with snow on the highest peaks; once life has come, green moist lowlands.
  float relief = h - sea;
  float dry = smoothstep(0.2, 0.32, lat) * (1.0 - smoothstep(0.45, 0.58, lat));
  float grain = surf.z;
  vec3 basalt = vec3(0.022, 0.02, 0.018) * (0.75 + 0.5 * grain);
  vec3 rock = mix(vec3(0.11, 0.095, 0.08), vec3(0.17, 0.15, 0.13), grain);
  vec3 land = mix(basalt, rock, uOcean * smoothstep(-0.05, 0.25, relief));
  land = mix(land, vec3(0.26, 0.2, 0.13) * (0.85 + 0.3 * grain), dry * uOcean * 0.6 * (1.0 - smoothstep(0.2, 0.4, relief)));
  land = mix(land, vec3(0.2, 0.19, 0.18), smoothstep(0.22, 0.4, relief) * ridge);
  land = mix(land, vec3(0.78, 0.8, 0.83), smoothstep(0.4, 0.5, relief) * uOcean);
  float moist = surf.w;
  float life = uLife * smoothstep(0.3, 0.6, moist) * (1.0 - 0.7 * dry) * smoothstep(0.85, 0.35, lat) * (1.0 - smoothstep(0.15, 0.32, relief));
  vec3 green = mix(vec3(0.035, 0.06, 0.022), vec3(0.08, 0.1, 0.04), grain);
  land = mix(land, green, life * 0.85);
  // Open ocean is a deep blue; shelves along the coasts are a little lighter and greener.
  vec3 ocean = mix(vec3(0.006, 0.03, 0.05), vec3(0.003, 0.012, 0.04), smoothstep(0.0, 0.35, depthW));
  // Life in the sea: faint plankton blooms swirl over the shallow shelves (teal).
  float bloom = smoothstep(0.62, 0.92, detail.y);
  ocean += vec3(0.008, 0.04, 0.035) * bloom * uLife * (1.0 - smoothstep(0.05, 0.4, depthW));
  vec3 albedo = mix(land, ocean, water);
  // A small polar cap with a broken edge.
  float ice = smoothstep(0.93, 0.965, lat + detail.x) * uOcean;
  albedo = mix(albedo, vec3(0.75, 0.78, 0.82), ice);

  vec3 N = normalize(vNormalV);
  vec3 V = normalize(-vView);
  vec3 L = normalize(uSunV);
  float ndl = dot(N, L);
  float diff = max(ndl, 0.0);
  float soft = smoothstep(-0.08, 0.2, ndl);
  // Light of a sun-like star (5800 K), half white-balanced the way a camera would: yellow-white.
  vec3 sunlight = mix(K_SUN, vec3(1.0), 0.55) * 2.8;
  // Clouds drift faster than the ground and shade it. While the crust is young, steam gathers into
  // broken, streaky bands (uSteam) \u2014 never a uniform veil \u2014 until the seas take the water down.
  vec3 cp = spin(n, uCloudSpin);
  // The molten surface's convection cells (slowly turning over) and fine seams.
  vec4 molten = texture2D(tDetail, eq(spin(n, uTime * 0.012)));
  float cellsM = molten.z;
  float seam = pow(cellsM, 9.0) + 0.5 * molten.w;
  vec4 air = texture2D(tAir, eq(cp));
  float weather = clouds(air);
  float streak = air.y;
  float bands = smoothstep(-0.1, 0.4, streak);
  float veil = uSteam * 0.62 * bands;
  float cover = max(weather, veil);
  // (Cloud shadows fall within a pixel or two of their clouds at this size: the cover itself.)
  float shadow = cover;
  vec3 col = albedo * sunlight * diff * (1.0 - 0.55 * shadow);
  // Ocean glint (sun reflected in the sea), widened by waves near the terminator.
  vec3 H = normalize(L + V);
  float fres = 0.02 + 0.98 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
  float glint = pow(max(dot(N, H), 0.0), 220.0) * 1.4 + pow(max(dot(N, H), 0.0), 30.0) * 0.08;
  col += sunlight * glint * water * soft * (0.3 + fres) * (1.0 - ice) * (1.0 - cover);

  // Molten youth, by temperature (blackbody): a magma ocean (~2 000 K, orange-yellow) churning in
  // convection cells with hotter, brighter seams; then a dark basalt crust closes over it in
  // plates (uCool) and only the fissures between them glow \u2014 dimming and reddening as they cool
  // (~1 500 \u2192 950 K) \u2014 until the steam and the seas put them out.
  float churn = texture2D(tAir, eq(spin(n, -uTime * 0.008))).z;
  // Plates: the crust covers everything but the fissures as it thickens.
  float plate = smoothstep(0.0, 0.35, uCool * 1.35 - seam * 0.9 + churn * 0.25);
  float magmaT = 1650.0 + 420.0 * churn + 650.0 * seam;
  vec3 magma = blackbody(magmaT) * (1.1 + 1.6 * seam + 0.5 * churn);
  float fissT = mix(1500.0, 950.0, uCool) + 300.0 * seam;
  vec3 fissure = blackbody(fissT) * seam * 2.2 * (1.0 - 0.8 * smoothstep(0.55, 1.0, uCool)) * (1.0 - smoothstep(0.0, 0.45, uOcean));
  vec3 glow = mix(magma, fissure, plate);
  // The crust itself is lit by the sun; the magma outshines it.
  col *= plate;
  col += glow * (1.0 - 0.75 * cover);

  vec3 cloud = vec3(0.86, 0.87, 0.88) * sunlight * (diff * 0.85 + soft * 0.04);
  // Under the steam the fissures light its base: a dull red glow on the night side.
  cloud += fissure * 0.25 * veil * (1.0 - diff);
  col = mix(col, cloud, cover * 0.88);

  gl_FragColor = vec4(col, uOpacity);
}
`,NS=`
varying vec3 vView;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vView = mv.xyz;
  gl_Position = projectionMatrix * mv;
}
`,US=`
uniform vec3 uCenterV;   // planet centre, view space
uniform vec3 uSunV;
uniform float uRadius, uOuter, uStrength;
varying vec3 vView;
${_i}
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
  // Rayleigh scattering of sunlight (\u221D \u03BB\u207B\u2074): a deep sky blue, paling where the limb is seen
  // edge-on (the light has crossed more air and is scattered back toward white).
  vec3 day = vec3(0.16, 0.42, 1.0);
  float limb = smoothstep(0.92, 1.0, b);
  vec3 col = mix(day, vec3(0.5, 0.72, 1.0), limb * 0.35 * (1.0 - smoothstep(-0.05, 0.35, mu))) * lit;
  // At the terminator the light grazes through the whole atmosphere and loses its blue: a thin
  // band of sunset (a ~2 000 K-like orange) along the limb, fading into a faint blue twilight.
  float dusk = exp(-pow((mu - 0.02) / 0.09, 2.0)) * limb;
  col += vec3(1.0, 0.36, 0.1) * dusk * 0.22;
  col += vec3(0.12, 0.2, 0.6) * smoothstep(-0.75, -0.1, mu) * (1.0 - lit) * limb * 0.2;
  float fwd = pow(max(dot(rd, S), 0.0), 5.0);
  col += vec3(0.7, 0.85, 1.0) * fwd * lit * 0.6 * limb;
  float optical = path * dens;
  gl_FragColor = vec4(col * optical * uStrength, 1.0);
}
`,Xn=512,Er=256,Qn=384,Js=192;function _m(i,e,t,n){let s=[],r=[];for(let f=0;f<t;f+=2){let h=Math.cos(((f+.5)/t-.5)*Math.PI);for(let d=f&2?1:0;d<e;d+=3)s.push(i[f*e+d]),r.push(h)}let a=s.map((f,h)=>h).sort((f,h)=>s[f]-s[h]),o=0;for(let f of r)o+=f;let l=[],c=0,u=0;for(let f of a)for(c+=r[f];u<n.length&&c>=n[u]*o;)l.push(s[f]),u++;for(;l.length<n.length;)l.push(s[a[a.length-1]]);return l}function Kd(i,e,t){let n=new Fs(i,e,t,ci,zt);return n.wrapS=qr,n.wrapT=Hi,n.magFilter=qt,n.minFilter=qt,n.generateMipmaps=!1,n.needsUpdate=!0,n}function*ym(){let i=Ga.toHalfFloat,e=V0(9127),t=(v,p,m,_)=>{let E=0,y=.5;for(let S=0;S<_;S++)E+=y*e(v,p,m),v=v*2.05+1.3,p=p*2.05+1.3,m=m*2.05+1.3,y*=.5;return E},n=v=>{let p=1-Math.abs(v);return p*p*p*p*p*p},s=(v,p,m,_,E)=>{let y=-_[2],S=_[0],M=Math.hypot(y,S)||1;y/=M,S/=M;let w=_[1]*S,x=_[2]*y-_[0]*S,A=-_[1]*y,R=v*_[0]+p*_[1]+m*_[2],P=v-_[0]*R,F=p-_[1]*R,N=m-_[2]*R,C=P*y+N*S,L=P*w+F*x+N*A,B=Math.hypot(C,L)/E;if(B>1.6)return 0;let V=Math.atan2(L,C)*Math.sign(_[1]),X=.5+.5*Math.cos(2*(V+2.6*Math.log(B+.04)));return Math.pow(X,1.6)*Math.exp(-B*B*1.6)*oe(.03,.09,B)*1.3},r=v=>{let p=Math.hypot(v[0],v[1],v[2]);return[v[0]/p,v[1]/p,v[2]/p]},a=r([.55,.62,.56]),o=r([-.62,-.58,.52]),l=new Uint16Array(Xn*Er*4),c=new Float32Array(Xn*Er);for(let v=0;v<Er;v++){v%3===0&&(yield);let p=((v+.5)/Er-.5)*Math.PI,m=Math.sin(p),_=Math.cos(p);for(let E=0;E<Xn;E++){let y=((E+.5)/Xn-.5)*Math.PI*2,S=_*Math.cos(y),M=_*Math.sin(y),w=S+.12*e(S*2+4,m*2+4,M*2+4),x=m+.12*e(S*2+9,m*2+9,M*2+9),A=M+.12*e(S*2-3,m*2-3,M*2-3),R=e(w*1.2,x*1.2,A*1.2)*.6+e(w*2.4+7,x*2.4+7,A*2.4+7)*.26,P=t(S*7+2,m*7+2,M*7+2,3)*.17,F=n(e(S*5.2+2,m*5.2+2,M*5.2+2)),N=oe(.08,.2,R)*(1-oe(.3,.55,R)),C=(v*Xn+E)*4;c[v*Xn+E]=R+P+.22*F*N,l[C+1]=i(F),l[C+2]=i(e(S*18,m*18,M*18)*.5+.5),l[C+3]=i(e(S*2.6+7,m*2.6+7,M*2.6+7)*.5+.5)}}yield;let u=_m(c,Xn,Er,[.06,.63,.985]);for(let v=0;v<Er;v++)for(let p=0;p<Xn;p++){let m=c[v*Xn+p],_=m>=u[1]?(m-u[1])/(u[2]-u[1])*.42:(m-u[1])/(u[1]-u[0])*.3;l[(v*Xn+p)*4]=i(_)}let f=new Uint16Array(Qn*Js*4),h=new Float32Array(Qn*Js),d=new Uint16Array(Qn*Js*4);for(let v=0;v<Js;v++){v%3===0&&(yield);let p=((v+.5)/Js-.5)*Math.PI,m=Math.sin(p),_=Math.cos(p),E=Math.abs(m),y=Math.exp(-((m/.06)**2))*.34,S=oe(.56,.66,E)*(1-oe(.78,.88,E))*.42,M=oe(.22,.32,E)*(1-oe(.42,.52,E)),w=.14+y+S-.24*M;for(let x=0;x<Qn;x++){let A=((x+.5)/Qn-.5)*Math.PI*2,R=_*Math.cos(A),P=_*Math.sin(A),F=(v*Qn+x)*4;f[F]=i(.035*e(R*8,m*8,P*8)+.02*e(R*23,m*23,P*23)),f[F+1]=i(e(R*7,m*7,P*7)*.5+.5+.25*e(R*19,m*19,P*19)),f[F+2]=i(1-Math.abs(e(R*3.1,m*3.1,P*3.1)));let N=1-Math.abs(e(R*6.3+3,m*6.3+3,P*6.3+3));f[F+3]=i(Math.pow(N,12));let C=R+.08*e(R*3+1,m*3+1,P*3+1),L=m+.08*e(R*3+6,m*3+6,P*3+6),B=P+.08*e(R*3+11,m*3+11,P*3+11),V=t(C*2.2,L*7.5,B*2.2,3),X=t(C*11+3,L*11+3,B*11+3,2),U=w*(.55+.9*oe(-.3,.4,V))+V*.5+X*.22;U=Math.max(U,s(R,m,P,a,.2)*.62,s(R,m,P,o,.17)*.6),h[v*Qn+x]=U,d[F+1]=i(V),d[F+2]=i(t(R*5,m*5,P*5,2)),d[F+3]=i(1)}}yield;let g=_m(h,Qn,Js,[.5,.76,.97]);for(let v=0;v<h.length;v++){let p=h[v];d[v*4]=i(p<g[1]?.38+(p-g[0])/(g[1]-g[0])*.21:.59+(p-g[1])/(g[2]-g[1])*.21)}return{surf:Kd(l,Xn,Er),detail:Kd(f,Qn,Js),air:Kd(d,Qn,Js)}}function Mm({segments:i,surface:e}){let t=new Et,n=new Vi(2,2),s={uSize:{value:J0},uProjScale:{value:1e3},uMinPx:{value:3},uIntensity:{value:0},uBeacon:{value:0},uTime:{value:0}},r=new Je(n,new De({vertexShader:IS,fragmentShader:LS,uniforms:s,transparent:!0,depthTest:!1,depthWrite:!1,blending:Xt,toneMapped:!1}));r.position.set(ai[0],ai[1],ai[2]),r.frustumCulled=!1,r.renderOrder=20;let a=new hs(1,i,Math.round(i/2)),o={uSunV:{value:new D},tSurf:{value:e.surf},tDetail:{value:e.detail},tAir:{value:e.air},uCool:{value:0},uSteam:{value:0},uOcean:{value:0},uClouds:{value:0},uLife:{value:0},uTime:{value:0},uOpacity:{value:0},uCloudSpin:{value:0}},l=new Je(a,new De({vertexShader:FS,fragmentShader:DS,uniforms:o,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}));l.position.set(wa[0],wa[1],wa[2]),l.scale.setScalar(Ks),l.frustumCulled=!1,l.renderOrder=30;let c={uCenterV:{value:new D},uSunV:{value:new D},uRadius:{value:Ks},uOuter:{value:Ks*1.07},uStrength:{value:0}},u=new Je(a,new De({vertexShader:NS,fragmentShader:US,uniforms:c,transparent:!0,depthTest:!1,depthWrite:!1,blending:Xt,toneMapped:!1}));u.position.copy(l.position),u.scale.setScalar(Ks*1.07),u.frustumCulled=!1,u.renderOrder=31,t.add(r,l,u);let f=new D(...Zs).multiplyScalar(.92).addScaledVector(new D(...Gn),-.4).normalize(),h=new hn().setFromUnitVectors(new D(0,1,0),f),d=new hn,g=new D(0,1,0),v=new D(ai[0],ai[1],ai[2]),p=new D;function m(y,S,M){r.visible=y.sun>.001,s.uIntensity.value=y.sun,s.uBeacon.value=y.sunBeacon,s.uProjScale.value=S.projScale,s.uMinPx.value=2.2*S.pixelRatio,s.uTime.value=y.t;let w=y.planet>.001;l.visible=w,u.visible=w&&y.atmo>.001,w&&(d.setFromAxisAngle(g,5.3+y.t*.018),l.quaternion.copy(h).multiply(d),p.copy(v).sub(l.position).normalize(),p.transformDirection(M.matrixWorldInverse),o.uSunV.value.copy(p),c.uSunV.value.copy(p),c.uCenterV.value.copy(l.position).applyMatrix4(M.matrixWorldInverse),o.uCool.value=y.cool,o.uSteam.value=y.steam,o.uOcean.value=y.ocean,o.uClouds.value=y.clouds,o.uLife.value=y.life,o.uTime.value=y.t,o.uOpacity.value=y.planet,o.uCloudSpin.value=y.t*.006,c.uStrength.value=y.atmo*y.planet*3)}function _(){n.dispose(),a.dispose(),r.material.dispose(),l.material.dispose(),u.material.dispose(),e.surf.dispose(),e.detail.dispose(),e.air.dispose()}function E(y){y(e.surf),y(e.detail),y(e.air)}return{group:t,update:m,dispose:_,forget:E}}var OS=`
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
`,BS=`
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
`,kS=`
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
`,zS=`
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
`,HS=`
uniform sampler2D tSrc;
varying vec2 vUv;
void main() { gl_FragColor = vec4(texture2D(tSrc, vUv).rgb, 1.0); }
`,VS=`
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
${ws}
${_i}

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
// proportion, so the fire keeps its blackbody orange and red instead of washing out; only light
// far past the shoulder burns through to white.
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
  float shockSide = 0.0;
  if (uShockAmp > 0.0) {
    float x = (r - uShockR) / (0.045 + 0.05 * uShockR);
    float wave = x * exp(-x * x);
    shockEdge = exp(-x * x) * uShockAmp;
    shockSide = smoothstep(-0.8, 0.8, x);
    p += (p / max(r, 1e-5)) * wave * uShockAmp * 0.035;
  }
  vec2 suv = uCenter + p / asp;
  vec2 fromC = suv - 0.5;
  float ca = (uAberration * 0.0035 + shockEdge * 0.006) * (0.3 + dot(fromC, fromC) * 3.0);
  // The camera lens's chromatic aberration (gravitational lensing itself is achromatic): like a
  // real lens it bends blue more than red \u2014 light displaced from nearer the centre adds a faint
  // blue fringe, light from further out a faint red one (energy is only added, never split).
  vec3 col = texture2D(tScene, suv).rgb;
  if (ca > 0.0) {
    const vec3 Y = vec3(0.2126, 0.7152, 0.0722);
    float l0 = dot(col, Y);
    float lIn = dot(texture2D(tScene, suv - fromC * ca).rgb, Y);
    float lOut = dot(texture2D(tScene, suv + fromC * ca).rgb, Y);
    col += vec3(0.25, 0.45, 1.0) * max(lIn - l0, 0.0) * 0.4 + vec3(1.0, 0.3, 0.12) * max(lOut - l0, 0.0) * 0.25;
  }
  vec3 bloom = texture2D(tBloom, suv).rgb * uBloomNorm;
  // Energy-conserving bloom, plus (only at the handover) the engine's additive glow.
  col = mix(col, bloom, uBloom) + bloom * uBloomAdd;
  // Vignette on the light only; the background below stays exact.
  vec2 vq = (vUv - 0.5) * asp;
  float vig = 1.0 - uVignette * smoothstep(0.3, 1.25, length(vq));
  col *= vig;
  // The shock front itself: a faint, irregular shell of light, broken by a smooth noise
  // around the circle (48 cells, seamless; a hash of the direction grid drew rectangles where the
  // front is wide).
  if (shockEdge > 0.0) {
    float around = (atan(p.y, p.x) * 0.15915494 + 0.5) * 48.0;
    float cell = floor(around), fc = fract(around);
    float breakup = mix(hash11(mod(cell, 48.0)), hash11(mod(cell + 1.0, 48.0)), fc * fc * (3.0 - 2.0 * fc)) * 0.6 + 0.4;
    // Hot, blue-white on its inner edge; dispersed through a refracting front it reddens outward.
    col += mix(vec3(0.55, 0.68, 1.0), vec3(1.0, 0.55, 0.3), shockSide) * shockEdge * shockEdge * breakup * 0.05;
  }
  // Veiling glare from the sun-like star just outside the frame: a soft wash, no ghosts.
  if (uGlare.z > 0.0) {
    vec2 gd = (vUv - uGlare.xy) * asp;
    col += K_SUN * uGlare.z * (0.05 / (0.06 + dot(gd, gd)));
  }
  col *= uExposure;
  // The impact's light: hotter than anything after it \u2014 white with a breath of blue (~10 000 K) \u2014
  // concentrated at the singularity (the bloom spreads it); the blacks stay deep.
  col += uFlash * mix(vec3(1.0), vec3(0.61, 0.7, 1.0), 0.35) * 1.3 * exp(-r * r * 60.0);
  vec3 lin = col;
  col = mix(shoulder(lin * 1.12), aces(lin * 1.35), uCurveMix);
  if (uHue > 0.0) col = mix(col, incandescent(lin * 1.25), uHue);
  // Grade: cool the deepest shadows a breath (none through the birth's fire), keep highlights
  // clean.
  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col *= mix(mix(vec3(0.97, 0.985, 1.03), vec3(1.0), smoothstep(0.0, 0.4, l)), vec3(1.0), uHue);
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
`;function Ra(i,e){return new Ut(Math.max(1,i),Math.max(1,e),{type:zt,format:ci,depthBuffer:!1,stencilBuffer:!1,minFilter:qt,magFilter:qt,generateMipmaps:!1,wrapS:Hi,wrapT:Hi})}function Sm(i,{bloomLevels:e,softScale:t,threadScale:n=.8,bloom:s}){let r=new xt;r.setAttribute("position",new wt([-1,-1,0,3,-1,0,-1,3,0],3));let a=new Nn(-1,1,1,-1,0,1),o=new vi,l=new Je(r);l.frustumCulled=!1,o.add(l);let c=(U,k,W=Ti)=>new De({vertexShader:Tr,fragmentShader:U,uniforms:k,blending:W,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:W!==Ti}),u=c(OS,{tSrc:{value:null},uTexel:{value:new ye},uKaris:{value:0}}),f=c(BS,{tSrc:{value:null},uTexel:{value:new ye},uRadius:{value:1}},Xt),h=c(HS,{tSrc:{value:null}},Xt),d=c(kS,{tSrc:{value:null},uStep:{value:new ye}}),g=c(zS,{tSrc:{value:null},uCenter:{value:new ye(.5,.5)},uAmount:{value:0},uFade:{value:0}}),v=new Fs(new Uint8Array([0,0,0,255]),1,1);v.needsUpdate=!0;let p={tScene:{value:null},tBloom:{value:v},uBloom:{value:0},uBloomAdd:{value:0},uBloomNorm:{value:1},uExposure:{value:1},uFlash:{value:0},uHue:{value:0},uScrim:{value:0},uScrimBand:{value:new ye(0,.42)},uGrain:{value:.04},uVignette:{value:.3},uAberration:{value:0},uTime:{value:0},uAspect:{value:1},uCurveMix:{value:1},uCenter:{value:new ye(.5,.5)},uLensR:{value:0},uShockR:{value:0},uShockAmp:{value:0},uBg:{value:new D},uResolution:{value:new ye(1,1)},uGlare:{value:new D},uLift:{value:new D},uLiftRadius:{value:.55}},m=c(VS,p),_=null,E=null,y=null,S=null,M=null,w=[],x=1,A=1;function R(U,k){P(),x=U,A=k,_=Ra(U,k);let W=Math.max(t,Math.min(.75,300/Math.max(1,Math.min(U,k))));E=Ra(Math.round(U*W),Math.round(k*W)),y=Ra(Math.round(U*W),Math.round(k*W));let J=Math.max(n,Math.min(1,480/Math.max(1,Math.min(U,k))));if(S=Ra(Math.round(U*J),Math.round(k*J)),M=Ra(Math.round(U*J),Math.round(k*J)),s){let j=U,Ae=k;for(let Re=0;Re<e&&(j=Math.max(1,Math.round(j/2)),Ae=Math.max(1,Math.round(Ae/2)),w.push(Ra(j,Ae)),!(j<=4||Ae<=4));Re++);}}function P(){for(_?.dispose(),_=null,E?.dispose(),E=null,y?.dispose(),y=null,S?.dispose(),S=null,M?.dispose(),M=null;w.length;)w.pop().dispose()}function F(U,k){l.material=U,i.setRenderTarget(k),i.render(o,a)}function N(U,k,W,J,j){if(!_)return;if(i.setClearColor(0,0),W){F(W,E),d.uniforms.tSrc.value=E.texture;let Re=j.softBlur||.8;d.uniforms.uStep.value.set(Re/E.width,0),F(d,y),d.uniforms.tSrc.value=y.texture,d.uniforms.uStep.value.set(0,Re/E.height),F(d,E)}let Ae=null;if(J&&(F(J,S),Ae=S,j.threadZoom>.001)){let Re=g.uniforms;Re.uCenter.value.set(j.centerX,j.centerY),Re.tSrc.value=S.texture,Re.uAmount.value=j.threadZoom/8,Re.uFade.value=0,F(g,M),Re.tSrc.value=M.texture,Re.uAmount.value=j.threadZoom,Re.uFade.value=.7,F(g,S)}if(i.setRenderTarget(_),i.clear(!0,!1,!1),W&&(h.uniforms.tSrc.value=E.texture,F(h,_)),Ae&&(h.uniforms.tSrc.value=Ae.texture,F(h,_)),i.setRenderTarget(_),i.render(U,k),w.length){let Re=_;for(let Ie=0;Ie<w.length;Ie++)u.uniforms.tSrc.value=Re.texture,u.uniforms.uTexel.value.set(1/Re.width,1/Re.height),u.uniforms.uKaris.value=Ie===0?1:0,F(u,w[Ie]),Re=w[Ie];for(let Ie=w.length-1;Ie>0;Ie--)f.uniforms.tSrc.value=w[Ie].texture,f.uniforms.uTexel.value.set(1/w[Ie].width,1/w[Ie].height),f.uniforms.uRadius.value=1,F(f,w[Ie-1]);p.tBloom.value=w[0].texture,p.uBloomNorm.value=1/w.length,p.uBloom.value=j.bloom,p.uBloomAdd.value=j.bloomAdd}else p.tBloom.value=v,p.uBloom.value=0,p.uBloomAdd.value=0;p.tScene.value=_.texture,p.uExposure.value=j.exposure,p.uFlash.value=j.flash,p.uCurveMix.value=j.curveMix,p.uHue.value=j.hueCurve,p.uScrim.value=j.scrim,p.uScrimBand.value.set(j.scrimLow||0,j.scrimHeight||.42),p.uGrain.value=j.grain,p.uVignette.value=j.vignette,p.uAberration.value=j.aberration,p.uTime.value=j.time,p.uAspect.value=x/A,p.uCenter.value.set(j.centerX,j.centerY),p.uLensR.value=j.lensR,p.uShockR.value=j.shockRadius,p.uShockAmp.value=j.shockAmp,p.uBg.value.set(j.bg[0],j.bg[1],j.bg[2]),p.uResolution.value.set(x,A),p.uGlare.value.set(j.glareX,j.glareY,j.glare),p.uLift.value.set(j.lift[0],j.lift[1],j.lift[2]),p.uLiftRadius.value=j.liftRadius,F(m,null)}let C=null,L=new vi;function B(U,k=3.6,W=5.8){if(!C){let J=(j,Ae,Re=!1)=>{let Ie=new Je(r,j);return Ie.frustumCulled=!1,{object:Ie,camera:a,scene:L,screen:Re,at:Ae}};C=[J(u,0),J(f,0),J(m,0,!0),J(h,k),J(d,k),J(g,W)];for(let[j,Ae]of U)C.push(J(j,Ae))}return C}function V(){P(),r.dispose(),u.dispose(),f.dispose(),h.dispose(),d.dispose(),g.dispose(),m.dispose(),v.dispose()}function X(U){for(let k of[_,E,y,S,M,...w])k&&U(k);for(let k of[r,u,f,h,d,g,m,v])U(k)}return{allocate:R,release:P,render:N,compileUnits:B,forget:X,dispose:V,get allocated(){return!!_}}}var bm=Object.freeze({high:{matter:16e4,nodes:56,galaxy:9e4,sky:4200,bloomLevels:6,softScale:.5,plasmaSteps:7,plasmaOctaves:4,shells:6,threadScale:.85,planetSegments:128,maxPixels:34e5},medium:{matter:9e4,nodes:48,galaxy:52e3,sky:3e3,bloomLevels:5,softScale:.42,plasmaSteps:6,plasmaOctaves:4,shells:5,threadScale:.72,planetSegments:96,maxPixels:21e5},low:{matter:38e3,nodes:36,galaxy:24e3,sky:2e3,bloomLevels:4,softScale:.34,plasmaSteps:4,plasmaOctaves:3,shells:4,threadScale:.6,planetSegments:64,maxPixels:11e5}}),wm=6,GS=16,WS=2500;function Tm({renderer:i,quality:e={}}={}){let t=yi(),n=bm[e.tier]?e.tier:"high",s=bm[n],r=Math.round(Math.max(4e3,Math.min(s.matter,e.particles>0?Math.max(e.particles,s.matter*.5):s.matter))),a=e.bloom!==!1,o=null,l=null,c=null,u=null,f=null,h=null,d=null,g=new vi;g.matrixWorldAutoUpdate=!0;let v=new gi(45,1,.02,40),p=!1,m=0,_=0,E=null,y=new Promise(re=>{E=re}),S={createMs:0,steps:0,longestMs:0,buildMs:0,beganBeforeBuild:!1,compileMs:0,beginMs:0,beginCompileMs:0,beginPending:0,centreMs:0,handoverMs:0,heldMs:0,firstFrameMs:-1,focus:!1,exact:!1,light:"default"},M=$0(),w=im(),x={x:0,y:0,tx:0,ty:0},A={width:1,height:1,pixelRatio:1,projScale:1e3,focus:1,aperture:0,nearFade:.02,size:.0016,gain:1,galaxyGain:1,cameraDistance:1},R={exposure:1,bloom:.08,bloomAdd:0,flash:0,grain:.04,vignette:.3,aberration:0,time:0,curveMix:1,hueCurve:0,scrim:0,scrimLow:0,scrimHeight:.42,centerX:.5,centerY:.5,lensR:0,shockRadius:0,shockAmp:0,bg:M.bg,glareX:0,glareY:0,glare:0,lift:M.lift,liftRadius:.55,softBlur:.8,threadZoom:0},P=0,F=!1,N=!1,C=!1,L=!1,B=45,V=1,X=1,U=1,k=null,W=!1,J=new D,j={p0:[0,0,0],scale:1,x:[1,0,0],y:[0,1,0],z:[0,0,1],eye:[0,0,1],forward:[0,0,-1],right:[1,0,0],up:[0,1,0],kx:.5,ky:.5,ox:.5,oy:.62,aspect:1,invDiag:1},Ae=new ye,Re={matter:!0,soft:!0},Ie={},Q=se(r),ie=ft(),ce=i.domElement,Ee=!1,Me=0,Ze=!1,Qe=!1,we=0,Ge=0,Ne=null,Ue=null;ce?.addEventListener?.("webglcontextlost",ee),ce?.addEventListener?.("webglcontextrestored",le),oi(),S.createMs=yi()-t;function*ft(){let re=yield*hm(r,s.nodes,4e3);o=um(re),yield,l=pm();let ze=Ms(24680),Oe=new Float32Array(s.galaxy*4),gt=new Float32Array(s.galaxy*3);for(let At=0;At<s.galaxy;At+=8e3)yield,am(ze,Oe,gt,At,Math.min(s.galaxy,At+8e3));f=om({count:s.galaxy,orbit:Oe,color:gt}),yield,c=vm(yield*gm(s.sky)),yield,u=xm({steps:s.plasmaSteps,octaves:s.plasmaOctaves,shells:s.shells,nodes:o.nodes}),yield;let pt=yield*ym();yield,h=Mm({segments:s.planetSegments,surface:pt}),yield,d=Sm(i,{bloomLevels:s.bloomLevels,softScale:s.softScale,threadScale:s.threadScale,bloom:a}),g.add(c.band,c.parent,c.fresh,f.group,o.mesh,l.group,h.group),p=!0}function Gt(){let re=yi();ie.next();let ze=yi()-re;S.steps++,S.longestMs=Math.max(S.longestMs,ze),p&&(S.buildMs=yi()-t,E(!0))}function oi(){p||W||m||_||(Ne?_=setTimeout(Nt,0):typeof requestIdleCallback=="function"?m=requestIdleCallback(Nt,{timeout:1e3}):_=setTimeout(Nt,16))}function Nt(re){if(m=0,_=0,p||W)return;let ze=yi(),Oe=Ne?GS:re&&typeof re.timeRemaining=="function"&&!re.didTimeout?Math.min(12,Math.max(wm*.5,re.timeRemaining()-1)):wm;try{do Gt();while(!p&&yi()-ze<Oe*.5)}catch(gt){console.error("Universe: ending film build failed",gt),Ue=gt,Ne=null,E(!1);return}if(!p){oi();return}if(Ne){let gt=Ne;Ne=null,et(gt)}z()}function Kt(){p||(m&&typeof cancelIdleCallback=="function"&&cancelIdleCallback(m),m=0,_||oi())}function z(re=!1){if(Ze||W||Ee||!p)return;let ze=Mt();if(ze.every(Wt=>Wt.done))return;Ze=!0;let Oe=yi(),gt=Me,pt=new Ut(1,1,{type:zt,depthBuffer:!1}),At=typeof i.compileAsync=="function",mt=0,Ot=()=>W||Ee||gt!==Me,es=()=>{if(gt!==Me){js(pt);return}Ze=!1,pt.dispose(),ze.every(Wt=>Wt.done)&&(S.compileMs=yi()-Oe)},Ki=()=>{for(;mt<ze.length&&ze[mt].done;)mt++;if(Ot()||mt>=ze.length){es();return}let Wt=fe(),Bi=F?ze.filter(It=>!It.done&&!It.issued&&It.at<=Wt&&It.until>=Wt):[];if(Bi.length>1&&!we&&(Bi=Bi.slice(0,1)),!Bi.length){let It=ze[mt++];if(It.issued){Ki();return}Bi=[It]}let ni=Bi.map(It=>{It.issued=!0;try{return G(It,pt,At)}catch{return null}});Promise.all(ni.map(It=>Promise.resolve(It).catch(()=>{}))).then(()=>(we?setTimeout:Z)(()=>{if(!Ot())for(let It of Bi)I(It);Ki()}))};re?Ki():Z(Ki)}let Lt=null;function Mt(){if(Lt)return Lt;let re=[],ze=new Set,Oe=(pt,At,mt=1/0)=>pt.traverse(Ot=>{!Ot.material||ze.has(Ot)||(ze.add(Ot),re.push({object:Ot,camera:v,scene:g,screen:!1,at:At,until:mt,done:!1}))});Oe(o.mesh,0,24.5),Oe(l.group,0,7.6),Oe(c.parent,0,He);let gt=new Map([[u.material,21],[u.threads,9.7]]);for(let pt of d.compileUnits([[u.material,He],[u.threads,5.8]],He,5.8))re.push({...pt,until:gt.get(pt.object.material)??(pt.at>He?9.7:pt.at>0?21:1/0),done:!1});return Oe(f.group,18.9),Oe(h.group,21.6),Oe(c.fresh,22.6),Oe(c.band,23.5),Oe(g,0),Lt=re.sort((pt,At)=>pt.at-At.at),Lt}function I(re){let ze=re.object.material,Oe=ze&&i.properties?.get(ze)?.currentProgram;try{Oe&&Oe.getUniforms&&(Oe.getUniforms(),Oe.getAttributes())}catch{}re.done=!0,Lt.every(gt=>gt.done)&&(Qe=!0)}function b(re){if(Qe||!Lt)return!0;let ze=!0;for(let gt=0;gt<Lt.length&&Lt[gt].at<=re;gt++){let pt=Lt[gt];if(pt.done||pt.until<re)continue;let At=pt.object.material,mt=At?i.properties.get(At).currentProgram:null;if(!mt||typeof mt.isReady=="function"&&!mt.isReady()){ze=!1;break}}if(ze)return we=0,!0;Ze||z(!0);let Oe=yi();return we||(we=Oe),Oe-we<WS?(S.heldMs=Math.max(S.heldMs,Oe-we),!1):!0}function G(re,ze,Oe){let gt=i.getRenderTarget(),pt=i.outputColorSpace,At=i.toneMapping;i.outputColorSpace=ri,i.toneMapping=li;let mt;try{i.setRenderTarget(re.screen?null:ze),mt=Oe?i.compileAsync(re.object,re.camera,re.scene):i.compile(re.object,re.camera,re.scene)}finally{i.setRenderTarget(gt),i.outputColorSpace=pt,i.toneMapping=At}return mt}function Z(re){typeof requestIdleCallback=="function"?requestIdleCallback(re,{timeout:F?120:1e3}):setTimeout(re,16)}function ee(){if(Ee=!0,Me++,Ze=!1,Qe=!1,we=0,Lt)for(let re of Lt)re.done=!1,re.issued=!1;ue()}function le(){Ee=!1,p&&!W&&z()}function ue(){g.traverse(re=>{js(re.geometry),js(re.material)}),u&&(js(u.material),js(u.threads)),d?.forget(js),h?.forget(js)}function te(){if(!p)return;let re=null,ze=0;for(let Oe of Mt()){if(Oe.done)continue;ze++;let gt=Oe.object.material;if(!(Oe.at>=He||gt&&i.properties.get(gt).currentProgram)){re=re||new Ut(1,1,{type:zt,depthBuffer:!1});try{G(Oe,re,!1)}catch{}}}re?.dispose(),S.beginPending=ze,we=0,ze&&z(!0)}function se(re){return Math.min(2.2,Math.sqrt(16e4/re))}function de(){k={toneMapping:i.toneMapping,toneMappingExposure:i.toneMappingExposure,clearColor:i.getClearColor(new je),clearAlpha:i.getClearAlpha(),autoClear:i.autoClear,outputColorSpace:i.outputColorSpace,renderTarget:i.getRenderTarget()},i.toneMapping=li,i.toneMappingExposure=1,i.autoClear=!1,i.outputColorSpace=ri}function Be(){k&&(i.toneMapping=k.toneMapping,i.toneMappingExposure=k.toneMappingExposure,i.setClearColor(k.clearColor,k.clearAlpha),i.autoClear=k.autoClear,i.outputColorSpace=k.outputColorSpace,i.setRenderTarget(k.renderTarget),k=null)}function pe(){let re=Math.max(1,Math.round(V*U)),ze=Math.max(1,Math.round(X*U)),Oe=Math.min(1,Math.sqrt(s.maxPixels/(re*ze)));d.allocate(Math.max(1,Math.round(re*Oe)),Math.max(1,Math.round(ze*Oe))),A.width=Math.max(1,Math.round(re*Oe)),A.height=Math.max(1,Math.round(ze*Oe)),A.pixelRatio=U*Oe}function fe(){if(L&&N){for(let re=0;re<br.length;re++)if(Math.abs(P-br[re].start)<.001)return X0[re]}return P}function ke(re,ze,Oe,gt){let pt=0,At=0,mt=0,Ot=Math.max(1,Math.floor(Oe/16e3)),es=new Float32Array(Math.ceil(Oe/(Ot*4))),Ki=1/0;for(let Wt=0;Wt<3;Wt++){let Bi=0,ni=0,It=0,Rn=0;for(let Mi=0;Mi<Oe;Mi+=Ot){let ki=re[Mi*3],Si=re[Mi*3+1],jt=re[Mi*3+2],pi=ki-pt,T=Si-At,O=jt-mt;if(pi*pi+T*T+O*O>Ki)continue;let $=ze?.05+ze[Mi*3]*.3+ze[Mi*3+1]*.55+ze[Mi*3+2]*.15:1;Bi+=ki*$,ni+=Si*$,It+=jt*$,Rn+=$}if(!(Rn>0))return gt.slice();if(pt=Bi/Rn,At=ni/Rn,mt=It/Rn,Wt<2){let Mi=0;for(let jt=0;jt<Oe;jt+=Ot*4){let pi=re[jt*3]-pt,T=re[jt*3+1]-At,O=re[jt*3+2]-mt;es[Mi++]=Math.sqrt(pi*pi+T*T+O*O)}let Si=(es.subarray(0,Mi).sort()[Mi>>1]||1)*2.5;Ki=Si*Si}}return[pt,At,mt]}function qe(re={}){if(!(W||Ue)){if(P=0,F=!0,N=!1,C=!1,p){et(re);return}S.beganBeforeBuild=!0,Ne=re,Kt()}}function et(re){let ze=yi();Ge=ze,S.firstFrameMs=-1;let{positions:Oe=null,colors:gt=null,sizes:pt=null,energies:At=null,camera:mt=null,origin:Ot=[.5,.62],focus:es=null,focusLight:Ki}=re,Wt=Oe?Math.min(re.count||Oe.length/3,Math.floor(Oe.length/3)):0;i.getSize(Ae),V=re.width>0?re.width:Ae.x||V,X=re.height>0?re.height:Ae.y||X,U=re.pixelRatio>0?re.pixelRatio:e.pixelRatio>0?e.pixelRatio:i.getPixelRatio()||1,k||de(),pe();let Bi=yi();te(),S.beginCompileMs=yi()-Bi;let ni=mt?.position||[0,.6,6],It=mt?.target||[0,0,0];B=mt?.fov||45;let Rn=yi(),Mi=YS(es,ni);S.focus=!!Mi;let ki=Mi||(Wt>0?ke(Oe,gt,Wt,It):It.slice()),Si=ni[0]-ki[0],jt=ni[1]-ki[1],pi=ni[2]-ki[2],T=Math.hypot(Si,jt,pi)||1;Si/=T,jt/=T,pi/=T;let O=0,$=1,q=0;Math.abs(jt)>.995&&($=0,q=-1);let Y=$*pi-q*jt,he=q*Si-O*pi,_e=O*jt-$*Si,ve=Math.hypot(Y,he,_e)||1;Y/=ve,he/=ve,_e/=ve;let Ce=jt*_e-pi*he,Fe=pi*Y-Si*_e,it=Si*he-jt*Y,Te=j;Te.p0[0]=ki[0],Te.p0[1]=ki[1],Te.p0[2]=ki[2],Te.scale=1/T,Te.x[0]=Y,Te.x[1]=he,Te.x[2]=_e,Te.y[0]=Ce,Te.y[1]=Fe,Te.y[2]=it,Te.z[0]=Si,Te.z[1]=jt,Te.z[2]=pi;{let Bt=It[0]-ki[0],vn=It[1]-ki[1],Rt=It[2]-ki[2],xn=w.handoverTarget;xn[0]=(Bt*Y+vn*he+Rt*_e)/T,xn[1]=(Bt*Ce+vn*Fe+Rt*it)/T,xn[2]=(Bt*Si+vn*jt+Rt*pi)/T}let Pe=w.handoverUp;Pe[0]=O*Y+$*he+q*_e,Pe[1]=O*Ce+$*Fe+q*it,Pe[2]=O*Si+$*jt+q*pi;let lt=It[0]-ni[0],Dt=It[1]-ni[1],_t=It[2]-ni[2],Tt=Math.hypot(lt,Dt,_t)||1;lt/=Tt,Dt/=Tt,_t/=Tt;let Zt=Dt*q-_t*$,be=_t*O-lt*q,Qt=lt*$-Dt*O,ht=Math.hypot(Zt,be,Qt)||1;Zt/=ht,be/=ht,Qt/=ht;let Ii=V/X,on=Math.tan(B*Math.PI/360);Te.eye[0]=ni[0],Te.eye[1]=ni[1],Te.eye[2]=ni[2],Te.forward[0]=lt,Te.forward[1]=Dt,Te.forward[2]=_t,Te.right[0]=Zt,Te.right[1]=be,Te.right[2]=Qt,Te.up[0]=be*_t-Qt*Dt,Te.up[1]=Qt*lt-Zt*_t,Te.up[2]=Zt*Dt-be*lt,Te.kx=.5/(on*Ii),Te.ky=.5/on,Te.ox=Yi(Ot?.[0]??.5,0,1),Te.oy=Yi(Ot?.[1]??.62,0,1),Te.aspect=Ii,Te.invDiag=1/Math.hypot(Ii,1);let gn=!!(pt&&At&&pt.length>=Wt&&At.length>=Wt);S.exact=gn&&Wt>0;let ts=yi();S.centreMs=ts-Rn,o.loadHandover(Oe,gt,Wt,Wt>0?Te:null,1/T,gn?pt:null,gn?At:null);let yt=Ki===void 0?Gh:qS(Ki)||[];S.light=Ki===void 0?"default":yt.length?"handover":"none",l.setLight(yt,1/T),Od(yt.length?XS(yt[0].halo):null),S.handoverMs=yi()-ts,S.beginMs=yi()-ze}function H(re){if(W)return;let ze=Yi(Number.isFinite(re)?re:0,0,.1),Oe=1-Math.exp(-ze*2.5);x.x+=((L?0:x.tx)-x.x)*Oe,x.y+=((L?0:x.ty)-x.y)*Oe,!(!F||N)&&(Ne||!p||!b(P+ze)||(P+=ze,P>=Hn&&(C=!0)))}function me(){if(Ue&&F)throw Ue;if(W||!F||!p||Ee)return;k||de();let re=fe();if(!b(re))return;S.firstFrameMs<0&&(S.firstFrameMs=yi()-Ge),d.allocated||pe(),K0(M,re,L);for(let Ot in Ie)typeof M[Ot]=="number"&&(M[Ot]*=Ie[Ot]);let ze=A.width/A.height,Oe=Yi((600-X)/80,0,1)*Yi((ze-1.1)/.3,0,1);w.shortScreen=Oe,tm(w,re,M,ze,B,x,L),v.position.set(w.position[0],w.position[1],w.position[2]),v.up.set(w.up[0],w.up[1],w.up[2]),v.lookAt(w.look[0],w.look[1],w.look[2]),v.fov=w.fov,v.aspect=ze,v.near=w.near,v.far=w.far,v.updateProjectionMatrix(),v.updateMatrixWorld(!0);let gt=Math.tan(w.fov*Math.PI/360);A.projScale=A.height*.5/gt,A.cameraDistance=w.distance,A.focus=w.distance,A.aperture=.0016*oe(He,4.2,re)*(1-oe(12.5,15,re)),A.nearFade=re<He?w.distance*.04:Math.max(Math.min(.14,w.distance*.2),w.distance*1.1*oe(18.8,20.4,re)*(1-oe(23,24.5,re))),A.size=re<He?.0016:fi(.0019,.0023,oe(8,12,re)),A.gain=Q,A.galaxyGain=1,o.mesh.visible=Re.matter&&(M.webFade>.001||M.heroFade>.001),o.update(M,A),l.update(M,A,w.position),c.update(M,A,L,w,ze);let pt=Math.abs((w.position[0]-ii[0])*$i[0]+(w.position[1]-ii[1])*$i[1]+(w.position[2]-ii[2])*$i[2]);f.update(M,A,pt),h.update(M,A,v);let At=u.update(M,w,ze,qo(Math.max(0,re-M.shutter*.6)));if(J.set(0,0,0).project(v),R.centerX=J.x*.5+.5,R.centerY=J.y*.5+.5,R.lensR=.022*M.lens,R.liftRadius=ze<.8?.42:.55,R.glare=0,M.sun>.001&&re>25&&(J.set(ai[0],ai[1],ai[2]).applyMatrix4(v.matrixWorldInverse),J.z<0)){J.applyMatrix4(v.projectionMatrix);let Ot=Math.max(Math.abs(J.x),Math.abs(J.y));R.glareX=Yi(J.x*.5+.5,-.35,1.35),R.glareY=Yi(J.y*.5+.5,-.35,1.35),R.glare=M.sun*.07*oe(.9,1.3,Ot)*(1-.75*oe(1.5,12,Ot))}R.shockRadius=M.shockRadius,R.shockAmp=M.shockAmp,R.exposure=M.exposure,R.bloom=M.bloom,R.bloomAdd=M.bloomAdd,R.flash=M.flash,R.grain=M.grain,R.vignette=M.vignette,R.aberration=M.aberration,R.curveMix=M.curveMix,R.hueCurve=M.hueCurve;let mt=Oe*oe(10.6,12.2,re)*(1-oe(20.4,22.4,re));R.scrim=M.scrim+.3*mt,R.scrimLow=.27*mt,R.scrimHeight=.42+.2*mt,R.time=L?Math.floor(re):re,R.softBlur=.8+.4*oe(8.4,9.4,re),R.threadZoom=L?0:M.threadZoom,d.render(g,v,At.soft&&Re.soft?u.material:null,At.threads&&Re.soft?u.threads:null,R)}function ne(re,ze,Oe){re>0&&(V=re),ze>0&&(X=ze),Oe>0&&(U=Oe),d?.allocated&&pe()}function ge(){let re=Y0(P);return{time:P,duration:Hn,started:F,paused:N,finished:C,phase:re,phaseKey:br[re].key,phases:br,impact:He}}function Se(re){N=re===void 0?!N:!!re}function ae(re){P=Yi(Number(re)||0,0,Hn),F=!0,C=P>=Hn,Le()}function Ve(){P=Hn,F=!0,C=!0,N=!1,Le()}function Le(){Qe||!p||Ee||W||!k||Ze||z(!0)}function Ft(){P=0,F=!0,C=!1,N=!1}function St(re,ze){x.tx=Yi(Number(re)||0,-1,1),x.ty=Yi(Number(ze)||0,-1,1)}function rn(re){L=!!re}function an(){Ne&&(Ne=null,_&&clearTimeout(_),_=0,oi()),Be(),d?.release(),F=!1,N=!1}function $h(){W||(an(),W=!0,Ne=null,m&&typeof cancelIdleCallback=="function"&&cancelIdleCallback(m),_&&clearTimeout(_),ce?.removeEventListener?.("webglcontextlost",ee),ce?.removeEventListener?.("webglcontextrestored",le),o?.dispose(),l?.dispose(),c?.dispose(),u?.dispose(),f?.dispose(),h?.dispose(),d?.dispose())}return{begin:qe,update:H,render:me,resize:ne,state:ge,pause:Se,seek:ae,skipToEnd:Ve,replay:Ft,setPointer:St,setReducedMotion:rn,end:an,dispose:$h,handover:Object.freeze({energies:!0,focus:!0,focusLight:!0}),ready:y,info:()=>({tier:n,particles:r,bloom:a,buffer:[A.width,A.height],built:p,build:{...S}}),layers:Re,tuning:Ie}}var yi=()=>typeof performance<"u"?performance.now():Date.now();function qS(i){let e=i&&Array.isArray(i.glows)?i.glows:null;if(!e||!e.length)return null;let t=Number.isFinite(Number(i.dim))&&Number(i.dim)>=0?Number(i.dim):1,n=[];for(let s of e)!s||!(Number(s.scale)>0)||!(Number(s.intensity)>=0)||n.push({scale:Number(s.scale),intensity:Number(s.intensity)*t,core:s.core,halo:s.halo,rays:Number(s.rays)||0});return n.length?n:null}function XS(i){if(!i||i.length<3)return null;let e=[];for(let t=0;t<3;t++){let n=Math.max(0,Math.min(1,Number(i[t])));if(!Number.isFinite(n))return null;e.push(n<=.0031308?n*12.92:1.055*Math.pow(n,1/2.4)-.055)}return Math.max(e[0],e[1],e[2])>.02?e:null}function YS(i,e){if(!i||typeof i.length!="number"||i.length<3)return null;let t=Number(i[0]),n=Number(i[1]),s=Number(i[2]);return!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(s)||Math.hypot(t-e[0],n-e[1],s-e[2])<1e-6?null:[t,n,s]}function js(i){let e=i&&i._listeners;e&&e.dispose&&(e.dispose.length=0),i&&i.isRenderTarget&&js(i.texture)}var Jd=[{start:0,key:"collapse"},{start:3.6,key:"birth"},{start:9,key:"structure"},{start:19,key:"world"}],KS=.6,Xh=class{constructor(e){this.engine=e,this.film=null,this.failed=!1,this.active=!1,this.stopping=null,this.navigated=!1,this.leaving=!1,this.fade=0,this.phaseIndex=-1,this.finishedSent=!1,this.overlay=null,this.tick=0}prewarm(){if(!(this.film||this.failed))try{let e=Tm;if(typeof e!="function")throw new Error("ending-film: createEndingFilm missing");if(this.film=e({renderer:this.engine.renderer,quality:this.engine.filmQuality()}),!this.film||typeof this.film.render!="function")throw new Error("ending-film: invalid film")}catch(e){console.warn("Universe: ending film unavailable \u2014",e.message),this.film=null,this.failed=!0}}async start({origin:e}={}){let t=this.engine;if(!t.ok||t.contextLost)return!1;if(this.active&&!this.stopping)return!0;if(this.stopping&&await this.stopping,this.prewarm(),!this.film)return!1;try{let n=t.snapshotForFilm(),s=Array.isArray(e)&&e.length>=2?[Em(e[0]),Em(e[1])]:[.5,.62];this.film.setReducedMotion?.(t.reducedMotion()),this.film.resize?.(t.width,t.height,t.pixelRatio);let r=t.filmSizes;r===!0||r==="auto"&&(this.film.handover&&this.film.handover.energies)||(n.sizes=null),this.film.begin({...n,origin:s,width:t.width,height:t.height,pixelRatio:t.pixelRatio})}catch(n){return console.error("Universe: ending film failed to begin",n),this.safeEnd(),!1}return this.active=!0,this.fade=0,this.phaseIndex=-1,this.finishedSent=!1,t.onFilmActive(!0),await new Promise(n=>{this.firstFrame=n,t.request(),setTimeout(n,600)}),this.active}frame(e){let t=this.film;if(t){try{t.update(e),t.render(),this.fade>0&&this.drawFade(this.fade)}catch(n){console.error("Universe: ending film error",n),this.abort();return}if(this.firstFrame){let n=this.firstFrame;this.firstFrame=null,n()}this.emitEvents()}}emitEvents(){if((this.tick=(this.tick+1)%3)!==0&&this.phaseIndex>=0)return;let e=this.rawState();if(!e)return;let t=Zd(e);if(t!==this.phaseIndex){this.phaseIndex=t;let n=e.phases||Jd;Am("universe:ending-phase",{index:t,key:n[t]?.key??String(t),time:e.time||0})}e.finished&&!this.finishedSent&&(this.finishedSent=!0,Am("universe:ending-finished",{time:e.time||0}))}drawFade(e){let t=this.engine.renderer;if(!this.overlay){let s=new Dn({color:0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),r=new Je(new Vi(2,2),s);r.frustumCulled=!1;let a=new vi;a.add(r),this.overlay={scene:a,mat:s,camera:new Nn(-1,1,1,-1,0,1)}}this.overlay.mat.opacity=Math.min(1,e);let n=t.autoClear;t.autoClear=!1,t.setRenderTarget(null),t.render(this.overlay.scene,this.overlay.camera),t.autoClear=n}pause(e){this.active&&this.film?.pause?.(e===void 0?void 0:!!e),this.engine.request()}seek(e){this.active&&this.film?.seek?.(Number(e)||0),this.finishedSent=this.rawState()?.finished?this.finishedSent:!1,this.engine.request()}skipToEnd(){this.active&&this.film?.skipToEnd?.(),this.engine.request()}replay(){this.active&&(this.film?.replay?.(),this.finishedSent=!1,this.phaseIndex=-1),this.engine.request()}setPointer(e,t){this.active&&this.film?.setPointer?.(e,t)}setReducedMotion(e){this.film?.setReducedMotion?.(!!e)}resize(e,t,n){if(this.film)try{this.film.resize?.(e,t,n)}catch(s){console.error(s)}}stop(e){return this.active?(e&&e.restore===!1&&(this.leaving=!0),this.stopping?this.stopping:(this.navigated=!1,this.stopping=new Promise(t=>{let n=performance.now(),s=()=>{if(!this.active)return t();let r=(performance.now()-n)/1e3/KS;if(this.fade=Math.min(1,r*r*(3-2*r)),this.engine.request(),r>=1){this.finishStop(),t();return}setTimeout(s,16)};s()}).then(()=>{this.stopping=null}),this.stopping)):Promise.resolve()}noteNavigation(){this.stopping&&(this.navigated=!0)}finishStop(){this.fade=1,this.safeEnd(),this.active=!1,this.fade=0,this.engine.onFilmActive(!1,!0,this.returnMode())}abort(){this.safeEnd(),this.active=!1,this.fade=0,this.engine.onFilmActive(!1,!0,this.returnMode())}returnMode(){let e=this.navigated?"navigated":this.leaving?"leaving":"restore";return this.navigated=!1,this.leaving=!1,e}safeEnd(){try{this.film?.end?.()}catch(e){console.error(e)}}rawState(){if(!this.film)return null;try{return this.film.state?.()||null}catch{return null}}state(){let e=this.active?this.rawState():null,t=e&&e.phases||this.rawState()?.phases||Jd;return e?{active:!0,time:e.time||0,duration:e.duration||31,started:!!e.started,paused:!!e.paused,finished:!!e.finished,phase:Zd(e),phaseKey:e.phaseKey||t[Zd(e)]?.key,phases:t,impact:e.impact??3.6}:{active:!1,time:0,duration:31,started:!1,paused:!1,finished:!1,phase:0,phases:t,impact:3.6}}dispose(){this.active&&this.safeEnd();try{this.film?.dispose?.()}catch{}this.film=null,this.overlay&&(this.overlay.mat.dispose(),this.overlay.scene.children[0].geometry.dispose())}};function Zd(i){if(typeof i.phase=="number")return i.phase;let e=i.phases||Jd;if(typeof i.phase=="string"){let n=e.findIndex(s=>s.key===i.phase);if(n>=0)return n}let t=0;for(let n=1;n<e.length;n++)(i.time||0)>=e[n].start&&(t=n);return t}var Em=i=>Math.max(0,Math.min(1,Number(i)||0));function Am(i,e){try{document.dispatchEvent(new CustomEvent(i,{detail:e}))}catch{}}var ZS=["cover","preview","chapter","ending-ready"],Rm=["hero","explore","contents","chapter","reading"],JS=!0,Cm=.25,jS=i=>new Promise(e=>setTimeout(e,i)),QS=()=>new Promise(i=>typeof requestIdleCallback=="function"?requestIdleCallback(()=>i(),{timeout:60}):setTimeout(i,0)),Yh=class{constructor(e,t={}){bi(this,"onContextLost",e=>{e.preventDefault(),this.contextLost=!0,this.stopLoop(),Lm("universe:contextlost",{})});bi(this,"onContextRestored",()=>{try{this.post=new ko(this.renderer,this.scene,this.camera),this.attachOverlay(),this.field.markDirty(),this.gpuTimer.restore(),this.contextLost=!1,this.lastSize="",this.resize(),this.applyBackground(!0),this.noSample=Math.max(this.noSample,10),Lm("universe:contextrestored",{}),this.schedulePrewarm(300),this.request()}catch(e){console.error("Universe: context restore failed",e)}});bi(this,"frame",e=>{if(this.raf=0,!this.canRender()){this.lastDraw=0;return}let t=!this.lastDraw,n=t?0:e-this.lastDraw;if((window.devicePixelRatio||1)!==this.seenRatio&&(this.seenRatio=window.devicePixelRatio||1,this.lastSize="",this.holding?this.pendingResize=!0:this.resize()),this.film.active){let p=t?.016666666666666666:Math.min(.1,n/1e3);this.lastDraw=e,this.film.frame(p),this.countFrame(e),this.noSample=10,this.request();return}let s=this.holdFrame;this.holdFrame=!1;let r=this.ambient()&&!this.field.morphing&&!this.rig.moving&&!this.input.dragging&&!this.fading&&!this.scatterMoving&&!this.armMoving&&!this.nodeFocus.moving,a=this.holding&&!this.input.dragging?1e3/30:0,o=Math.max(a,r&&(this.coarseMQ.matches||this.rig.veil.value>.6||this.adaptive.level>=3||this.scatter.value>=1)?1e3/30:0);if(!s&&o&&!t&&n<o-3){this.raf=requestAnimationFrame(this.frame);return}let l=t?1/60:Math.min(.05,n/1e3);t&&(this.noSample=Math.max(this.noSample,10)),this.lastDraw=e;let c=this.renderer.info,u=c.programs?c.programs.length:0,f=this.noSample>0||s,h=performance.now(),d=this.step(l);this.gpuTimer.begin(),this.render(l);let g=(c.programs?c.programs.length:0)!==u;this.gpuTimer.end(f||g),this.adaptive.sample(n,performance.now()-h,o>0,f||g),this.noSample>0&&this.noSample--,this.gpuTimer.poll(this.onGpuTime);let v=this.adaptive.decide(e,this.gpuTimer.available);if(v!==0&&(this.resize(),this.noSample=Math.max(this.noSample,10)),this.countFrame(e),this.nodes.flush(),s&&this.holding&&!this.scatterActive()&&!this.nodeFocus.moving){this.lastHoldFrame=performance.now(),this.lastDraw=0;return}d||v!==0?this.request():this.lastDraw=0});bi(this,"onGpuTime",e=>this.adaptive.gpuSample(e));this.canvas=e,this.options=t,this.ok=!1,this.contextLost=!1,this.visible=!0,this.paused=!1,this.interactive=!1,this.selected=0,this.sceneName="cover",this.sceneKey="",this.chapter=0,this.layout="hero",this.formationId="origin",this.pending=null,this.readingRaw=0,this.reading=Yt(0),this.time=0,this.clock=0,this.frames=0,this.fps=0,this.fpsFrames=0,this.fpsT0=0,this.raf=0,this.lastDraw=0,this.holding=!1,this.holdFrame=!1,this.holdFrameTimer=0,this.lastHoldFrame=0,this.pendingResize=!1,this.compiling=!1,this.noSample=0,this.width=1,this.height=1,this.pixelRatio=1,this.seenRatio=typeof window<"u"&&window.devicePixelRatio||1,this.lightFade={value:0,target:1,rate:.7},this.black={value:1,target:1,rate:1.4},this.frozen=!1,this.filmDof=!0,this.filmSizes="auto",this.projScratch=[0,0,0,0],this.blackHold=!1,this.awaitPage=!1,this.awaitTimer=0,this.revealUntil=0,this.focusScratch=[0,0,0],this.scatterTarget=0,this.scatter=Yt(0),this.scatterMoving=!1,this.armTarget=0,this.arm=Yt(0),this.armMoving=!1,this.dimEff=1,this.nodeFocus=new Ah,this.ctx={presence:0,time:0,gpuTime:0,dtLiving:0,clock:0,reading:0,focus:10,spread:0,expand:1,evolve:1,pixelScale:1e3,pixelRatio:1,selected:0,morph:1,solid:1,arm:0,nodeSpin:0},this.reducedMQ=typeof matchMedia=="function"?matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1,addEventListener(){}},this.coarseMQ=typeof matchMedia=="function"?matchMedia("(pointer: coarse)"):{matches:!1}}init(){let e=this.canvas;this.worker=ah.create(this.options.script),this.renderer=new Wc({canvas:e,context:this.options.context||void 0,antialias:!1,alpha:!1,depth:!0,stencil:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:"high-performance"});let t=this.renderer;t.debug.checkShaderErrors=!JS,t.setClearColor(0,1),t.toneMapping=li,t.toneMappingExposure=tn.exposure,t.outputColorSpace=ri,t.autoClear=!0;let n=t.getContext();try{n.clearColor(4/255,7/255,11/255,1),n.clear(n.COLOR_BUFFER_BIT),n.clearColor(0,0,0,0)}catch{}try{let r=n.getParameter(n.ALIASED_POINT_SIZE_RANGE);this.maxPointSize=r&&r[1]?r[1]:64}catch{this.maxPointSize=64}let s=Id(this.options.quality);this.autoQuality=!s,this.tierName=s||Pd(n),this.gpuTimer=new Ph(n),this.adaptive=new Ih(this.options.adaptive!==!1),this.adaptive.isNoop=(r,a)=>this.sameStep(Bn[r],Bn[a]),this.adaptive.pixelRatioOf=r=>this.pixelRatioFor(r,this.width,this.height),this.adaptive.cutsFill=(r,a)=>{let o=Bn[r],l=Bn[a];return o.draw!==l.draw||this.pixelRatioFor(o,this.width,this.height)!==this.pixelRatioFor(l,this.width,this.height)},this.scene=new vi,this.camera=new gi(Ao,1,.05,500),this.rig=new Th(this.camera),this.nodes=new Eh,this.film=new Xh(this),this.post=new ko(t,this.scene,this.camera),this.buildWorld(),this.spec=gr.origin,this.rig.setFormation(this.spec),this.input=new Rh(this),this.listen(),this.resize(),this.rig.snap(),this.applyBackground(!0),this.ok=!0,this.compileThenRun(),this.schedulePrewarm(2600)}buildWorld(){let e=ms[this.tierName];this.cache=new rh(e.particles,this.worker),this.field=new th(e.particles,{renderer:this.renderer,gpuState:t0(this.renderer)}),this.stars=new oh(e.stars),this.accents||(this.accents=new _h(this.scene),this.accents.createAll()),this.scene.add(this.stars.points,this.field.points,this.field.ghost),this.field.uniforms.uSizeScale.value=e.size,this.field.uniforms.uGain.value=e.gain,this.attachOverlay()}attachOverlay(){let e=this.post&&this.post.overlay;if(!e)return;let t=this.accents.get("ch7");t&&t.overlay.parent!==e&&e.add(t.overlay),this.field.overlay.parent!==e&&e.add(this.field.overlay)}disposeWorld(){this.scene.remove(this.stars.points,this.field.points,this.field.ghost),this.field.dispose(),this.stars.dispose(),this.cache.clear()}compileThenRun(){this.compiling=!0;let e=()=>{this.compiling=!1,this.lastDraw=0,this.request()},t=()=>this.warmPrograms().then(e,e);this.precompile().then(t,n=>{console.warn("Universe: shader precompile failed",n),e()})}warmPrograms(){let e=(this.renderer.info&&this.renderer.info.programs||[]).slice(),t=performance.now()+1500;return new Promise(n=>{let s=()=>{let r=performance.now();for(;e.length&&performance.now()-r<4;){let a=e.pop();try{a.getUniforms(),a.getAttributes()}catch{}}!e.length||performance.now()>t||!this.ok?n():typeof requestIdleCallback=="function"?requestIdleCallback(s,{timeout:50}):setTimeout(s,0)};s()})}async precompile(){let e=this.renderer;if(typeof e.compileAsync!="function")return;let t=this.post,n=this.scene,s=t.composer.readBuffer,r=this.field,a=[[r.points,this.camera,s,n],[this.stars.points,this.camera,s,n],[t.passScene(),this.camera,s],[t.finishScene(),this.camera,null],[this.accents.root,this.camera,s,n],[t.overlay,this.camera,s],r.bakeScene?[r.bakeScene,r.bakeCamera,r.states[0]]:null],o=[];for(let l of a){if(!l||!this.ok)continue;let[c,u,f,h]=l,d=e.getRenderTarget();try{e.setRenderTarget(f),o.push(e.compileAsync(c,u,h||null))}finally{e.setRenderTarget(d)}await QS()}await Promise.race([Promise.all(o),jS(6e3)])}listen(){let e=(this.abort=new AbortController).signal;this.resizeObserver=new ResizeObserver(()=>this.onResize()),this.resizeObserver.observe(this.canvas);let t=()=>{if(!(typeof matchMedia!="function"||e.aborted))try{matchMedia(`(resolution: ${window.devicePixelRatio||1}dppx)`).addEventListener("change",()=>{this.lastSize="",this.onResize(),t()},{once:!0,signal:e})}catch{}};t(),document.addEventListener("visibilitychange",()=>document.hidden?this.stopLoop():this.request(),{signal:e}),this.canvas.addEventListener("webglcontextlost",this.onContextLost,{signal:e}),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,{signal:e});let n=()=>{this.film.setReducedMotion(this.reducedMotion()),this.request()};this.reducedMQ.addEventListener&&this.reducedMQ.addEventListener("change",n,{signal:e})}onResize(){this.holding?this.pendingResize=!0:this.resize()}basePixelRatio(e,t){let n=ms[this.tierName],s=this.coarseMQ.matches,r=Math.min(window.devicePixelRatio||1,s?Math.min(1.5,n.dprCap):n.dprCap);return Math.min(r,Math.sqrt(n.pixelBudget/Math.max(1,e*t)))}pixelRatioFor(e,t,n){let s=this.basePixelRatio(t,n),r=Math.max(.5,Math.min(s,e.floor||0),s*e.dpr);return Math.round(r*100)/100}sameStep(e,t){let n=ms[this.tierName],s=n.bloom?e.bloom:0,r=n.bloom?t.bloom:0;return e.draw===t.draw&&s===r&&this.pixelRatioFor(e,this.width,this.height)===this.pixelRatioFor(t,this.width,this.height)}resize(){let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;if(!e||!t)return;let n=ms[this.tierName],s=this.adaptive.step,r=this.pixelRatioFor(s,e,t),a=`${e}x${t}@${r}|${s.bloom}|${s.draw}|${this.tierName}`;if(this.field.setDrawCount(this.field.count*s.draw),this.field.uniforms.uGain.value=n.gain/Math.sqrt(s.draw),this.post.setBloom(n.bloom&&s.bloom>0,n.bloomScale*s.bloom),this.post.uniforms.uGrain.value=n.grain?tn.grain:tn.grain*.5,a===this.lastSize)return;this.lastSize=a,(e!==this.width||t!==this.height||!this.frameHeight)&&(this.frameHeight=Math.min(t,Math.max(1,window.innerHeight||t))),this.width=e,this.height=t,this.pixelRatio=r,this.renderer.setPixelRatio(r),this.renderer.setSize(e,t,!1),this.post.setSize(e,t,r),this.rig.setViewport(e,t,this.frameHeight);let o=this.field.uniforms;o.uPixelScale.value=t*r/(2*Math.tan(Mo.degToRad(Ao)/2)),o.uMinPx.value=Math.max(1.5,1.45*r),o.uMaxPx.value=Math.min(this.maxPointSize,46*r),this.stars.uniforms.uPixelRatio.value=r,this.ctx.pixelScale=o.uPixelScale.value,this.ctx.pixelRatio=r,this.updateScatterLook(),this.film.resize(e,t,r),this.noSample=Math.max(this.noSample,10),this.request()}updateScatterLook(){let e=this.field.uniforms,t=$e(nt.density*this.width*this.height/1e6,nt.minStars,nt.maxStars);e.uScatterKeep.value=Math.min(1,t/Math.max(1,this.field.drawCount));let n=e.uScatterLook.value;n.y=nt.gain,n.z=nt.px*this.pixelRatio,n.w=nt.pxBright*this.pixelRatio,e.uScatterMotion.value.w=Ro(this.width,this.frameHeight||this.height)?1:nt.calm}setQuality(e){let t=Id(e);this.autoQuality=!t;let n=t||Pd(this.renderer.getContext());if(this.adaptive.reset(),n!==this.tierName){this.tierName=n,this.disposeWorld(),this.buildWorld(),this.prewarmJob=null;let s=this.pending;this.pending=null,this.formationId!=="origin"&&(this.field.setImmediate(this.cache.get(this.formationId)),this.updateToUniforms(!0)),s&&this.queueMorph(s.fid,s.kind,s.instant),this.compileThenRun(),this.schedulePrewarm(1500)}this.lastSize="",this.resize(),this.request()}qualityInfo(){let e=ms[this.tierName];return{tier:this.tierName,particles:this.field.count,pixelRatio:this.pixelRatio,bloom:e.bloom&&this.post.bloom.enabled}}filmQuality(){let e=this.qualityInfo();return{tier:e.tier,particles:e.particles,pixelRatio:e.pixelRatio,bloom:ms[e.tier].bloom}}reducedMotion(){return!!this.reducedMQ.matches}ambient(){return!this.paused&&!this.reducedMotion()&&!this.frozen}setScene(e,t={}){if(!ZS.includes(e))return;let n=t&&typeof t=="object"?t:{},s=e==="preview"||e==="chapter"?$e(Math.round(Number(n.chapter)||1),1,8):0,r=Rm.includes(n.layout)?n.layout:this.defaultLayout(e),a=`${e}|${s}|${r}`;if(a===this.sceneKey)return;this.sceneKey=a;let o=this.sceneName;e==="chapter"&&(o!=="chapter"||s!==this.chapter)&&(this.readingRaw=0),this.sceneName=e,this.chapter=s,e!=="cover"&&this.nodeFocus.node&&this.focusNode(0);let l=S0(e,s),c=this.pending?this.pending.fid:this.formationId;if(l!==c){let u=this.formationId==="origin"?"intro":e==="ending-ready"?"seed":e==="cover"?"cover":e==="preview"?"preview":"chapter";this.queueMorph(l,u,n.instant===!0)}else o!==e&&this.updateToUniforms(!1);this.layout=r,this.rig.setLayout(r),e==="ending-ready"&&this.scheduleFilmPrewarm(),this.applyBackground(!1),this.requestHoldFrame(),this.schedulePrewarm(900),this.request()}defaultLayout(e){return e==="cover"?this.layout==="explore"&&this.sceneName==="cover"?"explore":"hero":e==="preview"?"contents":e==="chapter"?"chapter":this.layout==="reading"||this.layout==="chapter"?this.layout:"chapter"}queueMorph(e,t,n){if(e===this.formationId){this.pending=null,this.releaseBlack();return}let s=this.formationId==="origin",r=this.cache.peek(e);if(r){this.pending=null,this.morphTo(r,s?"intro":t,n);return}let a={fid:e,kind:s?"intro":t,instant:n};this.pending=a,this.cache.request(e,{origin:s}).then(o=>{this.pending!==a||!this.ok||(this.pending=null,this.morphTo(o,a.kind,a.instant),this.request())},o=>{console.error(`Universe: formation '${e}' failed`,o),this.pending===a&&this.releaseBlack()})}releaseBlack(){this.blackHold&&(this.blackHold=!1,this.black.target=1,this.request())}morphTo(e,t,n){if(!e||!e.spec)return;this.blackHold&&(n=!0,this.releaseBlack());let s=e.spec,r=e.id,a=this.reducedMotion(),o=Jc[t]||Jc.chapter,l=this.formationId==="origin";if(this.formationId=r,this.spec=s,this.rig.setFormation(s),this.noSample=Math.max(this.noSample,2),n){e.origin=null,this.field.setImmediate(e),this.updateToUniforms(!0),this.accents.setActive(r,0,!0),this.rig.snap(),this.applyBackground(!1);return}let c=a?Jc.dissolve.duration:o.duration,u={...o,duration:c,radius:s.radius*1.15};if(l){let f=e.origin||ga(e,this.field.count);e.origin=null,this.field.setPair(f,e,u,a)}else this.field.morphTo(e,this.time,u,a);this.updateToUniforms(!0),this.accents.setActive(r,c,!1),this.morphKind=t,this.applyBackground(!1)}readingValue(){let e=this.spec;return e?this.sceneName==="chapter"?this.readingRaw:e.reading.preview:0}updateToUniforms(e){let t=this.readingValue();e&&(this.reading.value=t,this.reading.velocity=0),this.applyReading()}applyReading(){let e=this.spec;if(!e)return;let t=this.reading.value,n=e.reading,s=this.field.uniforms;s.uEvolve.value=la(n.evolve[0],n.evolve[1],t),s.uEvolveMode.value=n.mode,s.uToExpand.value=la(n.expand[0],n.expand[1],t),s.uToSpread.value=la(n.spread[0],n.spread[1],t),s.uToDim.value=la(n.dim[0],n.dim[1],t),this.ctx.reading=t,this.ctx.evolve=s.uEvolve.value,this.ctx.expand=s.uToExpand.value,this.ctx.spread=s.uToSpread.value}applyBackground(e){let t=Yc(this.spec?.tint||$t.deep);if(this.bgTint=this.bgTint||[0,0,0],this.bgTarget=[t[0]*.018+.004,t[1]*.018+.012,t[2]*.018+.022],e)for(let n=0;n<3;n++)this.bgTint[n]=this.bgTarget[n]}setLayout(e){!Rm.includes(e)||e===this.layout||(this.layout=e,this.rig.setLayout(e),this.requestHoldFrame(),this.request())}setReading(e){this.readingRaw=$e(Number(e)||0,0,1),this.sceneName==="chapter"&&this.chapter===8&&this.readingRaw>.8&&this.scheduleFilmPrewarm(),this.request()}setVeil(e){this.rig.setVeil(Number(e)||0),this.requestHoldFrame(),this.request()}setVisible(e){let t=!!e;t!==this.visible&&(this.visible=t,t?this.request():this.stopLoop())}setInteractive(e){let t=!!e;this.interactive=t,this.input.setInteractive(t),t||this.rig.reset(),this.request()}pointerMoved(e,t){if(this.film.active){this.film.setPointer(e,t);return}this.rig.setPointer(e,t),this.parallaxEnabled()&&this.request()}parallaxEnabled(){return!this.paused&&!this.reducedMotion()&&!this.interactive}setPaused(e){this.paused=!!e,this.request()}setScatter(e){let t=$e(Number(e)||0,0,1);t!==this.scatterTarget&&(this.scatterTarget=t,this.request())}scatterActive(){return this.scatter.value!==this.scatterTarget}setArmed(e){let t=e?1:0;t!==this.armTarget&&(this.armTarget=t,this.request())}select(e){this.selected=$e(Math.round(Number(e)||0),0,8),this.request()}focusNode(e){let t=$e(Math.round(Number(e)||0),0,8);if(t&&this.sceneName!=="cover")return!1;let n=this.nodeFocus.node;if(!t&&!n)return this.sceneName==="cover";let s=this.reducedMotion()||this.accents.presence("cover")<.05;return this.nodeFocus.set(t,s,this.time),t?this.selected=t:this.selected===n&&(this.selected=0),this.request(),!0}get endingActive(){return this.film.active}scheduleFilmPrewarm(){if(this.film.film||this.film.failed||this.filmPrewarmQueued)return;this.filmPrewarmQueued=!0;let e=s=>setTimeout(()=>t(n),s),t=s=>typeof requestIdleCallback=="function"?requestIdleCallback(s,{timeout:3e3}):setTimeout(s,200),n=s=>{if(!this.ok||this.film.film||this.film.failed){this.filmPrewarmQueued=!1;return}if(this.film.active){this.filmPrewarmQueued=!1;return}if(!(performance.now()-this.input.lastScroll>600&&!this.field.morphing&&!this.holding&&!this.input.dragging&&!document.hidden)||s&&!s.didTimeout&&s.timeRemaining()<6){e(300);return}this.filmPrewarmQueued=!1,this.film.prewarm(),this.noSample=Math.max(this.noSample,2)};e(400)}prewarmOrder(){let e=this.chapter||0,t=[],n=s=>{t.includes(s)||t.push(s)};(this.sceneName==="ending-ready"||e===8)&&n("seed"),e&&(n(`ch${e}`),e<8&&n(`ch${e+1}`),e>1&&n(`ch${e-1}`)),n("cover");for(let s=1;s<=8;s++)n(`ch${s}`);return n("seed"),t}schedulePrewarm(e=400){if(this.prewarmTimer)return;let t=s=>{if(this.prewarmTimer=0,!this.ok)return;if(this.input.dragging||this.holding||this.film.active||document.hidden||!this.cache.async&&this.field.morphing){this.schedulePrewarm(600);return}let a=this.cache,o=this.prewarmJob;if(o&&a.has(o.id)&&(o=null),!o){if(a.size>=a.limit-1)return;let f=this.prewarmOrder().find(h=>!a.has(h));if(!f)return;if(a.async){this.prewarmTimer=-1;let h=this.field;a.request(f).then(()=>{this.prewarmTimer=0,this.field===h&&this.schedulePrewarm(60)},()=>{this.prewarmTimer=0});return}o=a.job(f)}this.prewarmJob=o;let l=s&&!s.didTimeout?Math.max(1,Math.min(4,s.timeRemaining()-1)):3,c=performance.now(),u=o.step(l);performance.now()-c>6&&(this.noSample=Math.max(this.noSample,1)),u&&(this.prewarmJob=null),this.schedulePrewarm(u?80:0)},n=()=>{typeof requestIdleCallback=="function"?requestIdleCallback(t,{timeout:1e3}):setTimeout(t,16,null)};this.prewarmTimer=-1,e>0?setTimeout(n,e):n()}snapshotForFilm(){let e=this.field.drawCount,t=e+this.stars.count,n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t),a=new Float32Array(t);this.field.snapshot(this.time,n,s,e,r),this.stars.snapshot(n,s,e);let o=this.camera;o.updateMatrixWorld();let l=o.projectionMatrix.elements,c=l[8]/l[0],u=l[9]/l[5],f=o.matrixWorldInverse.elements,h=o.matrixWorld.elements,d=this.field.uniforms,g=Math.max(.001,d.uFocus.value),v=d.uDof.value,p=1/(ot.SIZE_MAX*d.uSizeScale.value),m=this.pixelRatio/Math.max(1e-6,d.uPixelScale.value),_=this.stars.look;for(let R=0;R<t;R++){let P=n[R*3],F=n[R*3+1],N=n[R*3+2],C=f[0]*P+f[4]*F+f[8]*N+f[12],L=f[1]*P+f[5]*F+f[9]*N+f[13],B=f[2]*P+f[6]*F+f[10]*N+f[14],V=Math.max(.05,-B);if(R<e){let X=this.filmDof?1+v*Math.abs(V-g)/g:1;a[R]=Math.min(4,r[R]*p/.02+.25)*X*X,r[R]*=X}else{let X=_[(R-e)*4+3]/255;r[R]=(1.35+3.4*X*X)*m*V,a[R]=1}C+=c*B,L+=u*B,n[R*3]=h[0]*C+h[4]*L+h[8]*B+h[12],n[R*3+1]=h[1]*C+h[5]*L+h[9]*B+h[13],n[R*3+2]=h[2]*C+h[6]*L+h[10]*B+h[14]}let E=this.dimEff*this.lightFade.value;for(let R=0;R<t*3;R++)s[R]*=E;let y=this.rig.target,S=this.rig.focusPoint(this.focusScratch),M=f[0]*S[0]+f[4]*S[1]+f[8]*S[2]+f[12],w=f[1]*S[0]+f[5]*S[1]+f[9]*S[2]+f[13],x=f[2]*S[0]+f[6]*S[1]+f[10]*S[2]+f[14];M+=c*x,w+=u*x;let A=[h[0]*M+h[4]*w+h[8]*x+h[12],h[1]*M+h[5]*w+h[9]*x+h[13],h[2]*M+h[6]*w+h[10]*x+h[14]];return{positions:n,colors:s,sizes:r,energies:a,count:t,camera:{position:[o.position.x,o.position.y,o.position.z],target:[y.x,y.y,y.z],fov:o.fov},focus:A,focusLight:this.focusLight(S,E)}}focusLight(e,t){let n=this.formationId==="seed"?"seed":this.formationId==="ch8"?"ch8":null,s=n?this.accents.visible(n):null;if(!s||typeof s.light!="function")return null;let r=this.rig.project(e[0],e[1],e[2],this.projScratch);return{glows:s.light(),anchor:[r[0],r[1]],pxPerUnit:this.rig.pxPerUnit(r[2]),dim:t,exposure:tn.exposure}}onFilmActive(e,t=!1,n="restore"){e?(this.input.setInteractive(!1),this.revealUntil=0,this.cancelAwaitPage()):t&&(this.renderer.setRenderTarget(null),this.renderer.toneMapping=li,this.renderer.toneMappingExposure=tn.exposure,this.renderer.autoClear=!0,this.renderer.setClearColor(0,1),this.black.value=0,this.black.target=1,this.black.rate=1/.9,this.black.delay=0,n==="navigated"?this.settleBehindBlack():n==="leaving"?(this.black.target=0,this.awaitPage=!0,this.awaitTimer=setTimeout(()=>this.endAwaitPage(),2500)):(this.sceneKey="",this.setScene("ending-ready",{instant:!0,layout:this.layout==="reading"?"reading":"chapter"}),this.black.delay=Cm,this.revealUntil=performance.now()+(Cm+1.3)*1e3),this.interactive&&this.input.setInteractive(!0)),this.lastDraw=0,this.request()}pageScene(e,t){this.film.noteNavigation();let n=this.pending?this.pending.fid:this.formationId;this.setScene(e,t);let s=this.pending?this.pending.fid:this.formationId;this.afterPageCall(s!==n)}pageLayout(e){this.film.noteNavigation(),this.setLayout(e),this.afterPageCall(!1)}afterPageCall(e){if(this.awaitPage){this.endAwaitPage();return}e&&this.revealUntil&&performance.now()<this.revealUntil&&(this.revealUntil=0,this.black.value=0,this.black.target=1,this.black.delay=0,this.settleBehindBlack(),this.request())}endAwaitPage(){this.awaitPage&&(this.cancelAwaitPage(),this.black.target=1,this.settleBehindBlack(),this.request())}cancelAwaitPage(){this.awaitPage=!1,clearTimeout(this.awaitTimer),this.awaitTimer=0}settleBehindBlack(){this.pending?(this.blackHold=!0,this.black.target=0):(this.field.settle(),this.morphHold=!1),this.accents.settle(),this.reading.value=this.readingValue(),this.reading.velocity=0,this.applyReading();for(let e=0;e<3;e++)this.bgTint[e]=this.bgTarget[e];this.rig.snap()}canRender(){return this.ok&&this.visible&&!this.contextLost&&!this.compiling&&!document.hidden}request(){this.raf||!this.canRender()||(this.raf=requestAnimationFrame(this.frame))}stopLoop(){this.raf&&cancelAnimationFrame(this.raf),this.raf=0,this.lastDraw=0}onHold(e){this.holding=e,e?this.request():(clearTimeout(this.holdFrameTimer),this.holdFrameTimer=0,this.pendingResize&&(this.pendingResize=!1,this.resize()),this.request())}requestHoldFrame(){this.request()}countFrame(e){this.frames++,this.fpsFrames++,this.fpsT0||(this.fpsT0=e),e-this.fpsT0>=1e3&&(this.fps=Math.round(this.fpsFrames*1e3/(e-this.fpsT0)),this.fpsFrames=0,this.fpsT0=e)}step(e){let t=this.ambient(),n=t?e:0;this.time+=n,this.clock+=e;let s=this.reducedMotion(),r=dr(this.time),a=this.field.update(this.morphHold?0:e)||this.morphHold,o=Pm(this.scatter,this.scatterTarget,s?en.scatterReduced:en.scatter,e);this.scatterMoving=this.scatter.value!==this.scatterTarget,Pm(this.arm,this.armTarget,en.arm,e),this.armMoving=this.arm.value!==this.armTarget,this.rig.calm=o;let l=this.rig.update(e,this.time,s,this.parallaxEnabled()),c=this.nodeFocus.update(e,this.time,this.rig,s),u=this.readingValue();Jt(this.reading,u,s?.05:en.reading,e);let f=Math.abs(this.reading.value-u)>1e-4;this.applyReading();let h=Im(this.lightFade,e)|Im(this.black,e);for(let w=0;w<3;w++){let x=this.bgTarget[w]-this.bgTint[w];Math.abs(x)>2e-4&&(this.bgTint[w]+=x*(1-Math.exp(-e*2.2)),h=1)}let d=this.ctx;d.time=this.time,d.gpuTime=r,d.dtLiving=n,d.clock=this.clock,d.focus=this.rig.distance,d.selected=this.selected,d.nodeSpin=c,d.morph=this.field.uniforms.uMorph.value,d.solid=s?1-cr(0,.6,o):1-cr(.12,.7,o),d.arm=this.arm.value;let g=this.accents.update(e,d);this.fading=!!h||g;let v=this.field.uniforms;v.uTime.value=r,v.uFocus.value=this.rig.distance,v.uTwinkle.value=t?1:0,v.uScatter.value=o,v.uScatterTravel.value=s?0:1,v.uScatterFrame.value.copy(this.rig.refMatrix);let p=this.camera.projectionMatrix.elements;v.uScatterRay.value.set(p[0],p[5],p[8],p[9]),v.uScatterCenter.value.set(this.rig.tx.value,this.rig.ty.value,this.rig.tz.value,this.spec?this.spec.radius:3),v.uScatterLook.value.x=this.rig.refDistance,this.stars.uniforms.uTime.value=r,this.stars.uniforms.uTwinkle.value=t?1:0;let m=this.post.uniforms;m.uTime.value=r,this.dimEff=la(this.rig.dim.value,1,o),m.uDim.value=this.dimEff,m.uFade.value=this.lightFade.value,m.uBlack.value=this.black.value;let _=1-.85*o;m.uBgLift.value.set(this.bgTint[0]*_,this.bgTint[1]*_,this.bgTint[2]*_),this.post.bloom.strength=tn.bloomStrength*(1-(1-nt.bloom)*o),m.uGlowCenter.value.set(this.rig.cx.value,1-this.rig.cy.value*this.frameHeight/this.height);let E=Ro(this.width,this.frameHeight);m.uGlowRadius.value=E?.42:.55;let y=this.accents.visible("ch7");if(this.post.overlayPass.enabled=!!y&&y.horizon.visible,y){let w=this.rig.project(0,0,0,this.projScratch),x=this.pixelRatio,A=fr;A.uHole.value.set(w[0]*x,(this.height-w[1])*x,y.radius*this.rig.pxPerUnit(w[2])*x,.45*x+.3);let R=this.camera.matrixWorldInverse.elements;A.uHoleView.value.set(R[12],R[13],R[14],y.radius),A.uViewport.value.set(this.width*x,this.height*x),A.uHoleReach.value=y.reach;let P=Oi.normal,F=R[0]*P[0]+R[4]*P[1]+R[8]*P[2],N=R[1]*P[0]+R[5]*P[1]+R[9]*P[2],C=R[2]*P[0]+R[6]*P[1]+R[10]*P[2];A.uHoleDisc.value.set(F,N,C,y.thickness);let L=this.camera.projectionMatrix.elements;A.uHoleRay.value.set(L[0],L[5],L[8],L[9]),A.uHoleBand.value.set(y.bandInner,y.bandOuter,1,0)}let S=this.accents.get("cover"),M=this.rig.focusPoint(this.focusScratch);return this.nodes.update(this.rig,S?S.positions:null,S?this.accents.presence("cover"):0,this.sceneName,this.selected,M,this.formationId!=="origin"),t||a||l||f||this.fading||this.input.dragging||this.scatterMoving||this.armMoving||this.nodeFocus.moving}render(e){this.post.render(e)}getState(){return{renderer:"webgl",scene:this.sceneName,chapter:this.chapter,layout:this.layout,quality:this.tierName,particles:this.field.drawCount,fps:this.fps,frames:this.frames,contextLost:this.contextLost,paused:this.paused,visible:this.visible,interactive:this.interactive,ending:this.film.state(),formation:this.formationId,pendingFormation:this.pending?this.pending.fid:null,morphing:this.field.morphing,morph:Math.round(this.field.uniforms.uMorph.value*1e3)/1e3,reducedMotion:this.reducedMotion(),selected:this.selected,focusedNode:this.nodeFocus.node,focusMoving:this.nodeFocus.moving,pixelRatio:this.pixelRatio,adaptiveLevel:this.adaptive.level,adaptive:this.adaptive.info(),gpuTimer:this.gpuTimer.available,particlesTotal:this.field.count,bloom:this.post.bloom.enabled,veil:Math.round(this.rig.veil.value*1e3)/1e3,reading:Math.round(this.reading.value*1e3)/1e3,zoom:Math.round(this.rig.zoom.value*1e3)/1e3,scatter:Math.round(this.scatter.value*1e3)/1e3,scatterTarget:this.scatterTarget,scatterStars:Math.round(this.field.uniforms.uScatterKeep.value*this.field.drawCount),armed:this.armTarget===1,holding:this.holding,compiling:this.compiling,worker:this.cache.async,gpuBake:this.field.gpu,cached:[...this.cache.map.keys()],lastBuildMs:Math.round(this.cache.lastBuildMs),lastBakeMs:Math.round(this.field.lastBakeMs*10)/10,size:[this.width,this.height]}}settle(){if(this.pending){let e=this.pending;this.pending=null,this.morphTo(this.cache.get(e.fid),e.kind,e.instant)}this.morphHold=!1,this.field.settle(),this.accents.settle(),this.lightFade.value=this.lightFade.target,this.black.value=this.black.target,this.reading.value=this.readingValue(),this.applyReading();for(let e=0;e<3;e++)this.bgTint[e]=this.bgTarget[e];this.scatter.value=this.scatterTarget,this.scatter.velocity=0,this.arm.value=this.armTarget,this.arm.velocity=0,this.nodeFocus.settle(),this.rig.snap(),this.request()}setMorphProgress(e,t=!0){this.field.uniforms.uMorph.value=$e(e,0,1),this.field.morphing=e<1,this.morphHold=!!t&&e<1,this.request()}dispose(){this.stopLoop(),this.ok=!1,clearTimeout(this.holdFrameTimer),clearTimeout(this.awaitTimer),this.abort?.abort(),this.resizeObserver?.disconnect(),this.input?.dispose(),this.film?.dispose(),this.accents?.dispose(),this.field&&this.disposeWorld(),this.post?.dispose(),this.renderer?.dispose(),this.worker?.dispose()}};function Pm(i,e,t,n){return i.value===e&&i.velocity===0?e:(Jt(i,e,t,n),Math.abs(i.value-e)<2e-4&&Math.abs(i.velocity)<.005&&(i.value=e,i.velocity=0),i.value)}function Im(i,e){if(i.value===i.target)return 0;if(i.delay>0)return i.delay-=e,1;let t=i.rate*e;return i.value=i.target>i.value?Math.min(i.target,i.value+t):Math.max(i.target,i.value-t),1}function Lm(i,e){try{document.dispatchEvent(new CustomEvent(i,{detail:e}))}catch{}}var eb=typeof document<"u"&&document.currentScript?document.currentScript:null,tb="9.1.0",ib=["cover","preview","chapter","ending-ready"],nb=[{start:0,key:"collapse"},{start:3.6,key:"birth"},{start:9,key:"structure"},{start:19,key:"world"}],An=null,ef=!1,Ar=null,jd=new Set,dt={scene:null,layout:null,reading:0,veil:0,scatter:0,armed:!1,visible:!0,interactive:!1,paused:!1,pointer:null,selected:0,focused:0,quality:null},nf=()=>document.documentElement,tf=()=>!!(An&&An.ok),Fm=new Set;function Pt(i,e){if(!tf())return e;try{return i(An)}catch(t){let n=String(t&&t.message);return Fm.has(n)||(Fm.add(n),console.error("Universe:",t)),e}}function sb(i,e){try{document.dispatchEvent(new CustomEvent(i,{detail:e}))}catch{}}function Dm(){return{active:!1,time:0,duration:31,started:!1,paused:!1,finished:!1,phase:0,phases:nb,impact:3.6}}function rb(){let i=dt.scene;return{renderer:"none",scene:i?i.name:null,chapter:i&&i.opts&&i.opts.chapter&&Number(i.opts.chapter)||0,layout:dt.layout||null,quality:dt.quality||"auto",particles:0,fps:0,frames:0,contextLost:!1,paused:dt.paused,visible:dt.visible,interactive:dt.interactive,scatter:0,selected:dt.selected,focusedNode:0,ending:Dm()}}function ab(i){if(typeof WebGL2RenderingContext>"u")return null;try{return i.getContext("webgl2",{alpha:!1,depth:!0,stencil:!1,antialias:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1})}catch{return null}}function Qd(i,e){ef=!0,e&&console.warn("Universe: unavailable \u2014",i,e);try{An?.dispose()}catch{}An=null;try{nf().dataset.universe="none"}catch{}return!1}function ob(i){let e=dt;e.quality&&i.setQuality(e.quality),i.setPaused(e.paused),i.setReading(e.reading),i.setVeil(e.veil),i.setScatter(e.scatter),i.setArmed(e.armed),i.select(e.selected),e.pointer&&i.pointerMoved(e.pointer[0],e.pointer[1]),e.scene&&i.setScene(e.scene.name,e.scene.opts),e.layout&&i.setLayout(e.layout),e.focused&&i.focusNode(e.focused),e.interactive&&i.setInteractive(!0),e.visible||i.setVisible(!1)}var Nm={version:tb,get ready(){return tf()},mount(i,e={}){if(An)return An.ok;if(ef)return!1;try{if(!i||typeof i.getContext!="function")return Qd("no canvas");let t=ab(i);if(!t)return Qd("WebGL2 unavailable");let n=e&&typeof e=="object"?e:{};return An=new Yh(i,{quality:dt.quality||n.quality,adaptive:n.adaptive,chapters:n.chapters,context:t,script:n.worker===!1?null:eb}),An.init(),An.nodes.subs=jd,ob(An),nf().dataset.universe="webgl",queueMicrotask(()=>sb("universe:ready",{renderer:"webgl"})),!0}catch(t){return Qd("init failed",t)}},setScene(i,e){ib.includes(i)&&(dt.scene={name:i,opts:e&&typeof e=="object"?{...e}:{}},dt.layout=null,i!=="cover"&&(dt.focused=0),Pt(t=>t.pageScene(i,dt.scene.opts)))},setLayout(i){dt.layout=i,Pt(e=>e.pageLayout(i))},setReading(i){dt.reading=Number(i)||0,Pt(e=>e.setReading(i))},setVeil(i){dt.veil=Number(i)||0,Pt(e=>e.setVeil(i))},setScatter(i){let e=Number(i);dt.scatter=Number.isFinite(e)?Math.min(1,Math.max(0,e)):0,Pt(t=>t.setScatter(dt.scatter))},setVisible(i){dt.visible=!!i,Pt(e=>e.setVisible(i))},setInteractive(i){dt.interactive=!!i,Pt(e=>e.setInteractive(i))},setPointer(i,e){dt.pointer=[Number(i)||0,Number(e)||0],Pt(t=>t.pointerMoved(dt.pointer[0],dt.pointer[1]))},setPaused(i){dt.paused=!!i,Pt(e=>e.setPaused(i))},setQuality(i){dt.quality=i==="auto"?null:i,Pt(e=>e.setQuality(i))},select(i){dt.selected=Number(i)||0,Pt(e=>e.select(i))},focusNode(i){let e=Math.round(Number(i)),t=Number.isFinite(e)?Math.min(8,Math.max(0,e)):0,n=dt.scene;return tf()?Pt(s=>{let r=s.focusNode(t);return r&&(dt.focused=s.nodeFocus.node,dt.selected=s.selected),r},!1):(ef||t&&(!n||n.name!=="cover")||(t?dt.selected=t:dt.focused&&dt.selected===dt.focused&&(dt.selected=0),dt.focused=t),!1)},reset(){Pt(i=>{i.rig.reset(),i.request()})},zoom(i){let e=Number(i);e>0&&Number.isFinite(e)&&Pt(t=>{t.rig.zoomBy(e),t.request()})},subscribe(i){return typeof i!="function"?()=>{}:(jd.add(i),Pt(e=>{e.nodes.dirty=!0,e.request()}),()=>{jd.delete(i)})},pick(i,e){return Pt(t=>t.nodes.pick(Number(i)||0,Number(e)||0),0)},getState(){return Pt(i=>i.getState(),null)||rb()},ending:{arm(i){dt.armed=!!i,Pt(e=>e.setArmed(dt.armed))},start(i={}){let e=Pt(t=>t.film.start(i&&typeof i=="object"?i:{}),null);return e?e.catch(()=>!1):Promise.resolve(!1)},pause(i){Pt(e=>e.film.pause(i))},seek(i){Pt(e=>e.film.seek(i))},skipToEnd(){Pt(i=>i.film.skipToEnd())},replay(){Pt(i=>i.film.replay())},stop(i){let e=Pt(t=>t.film.stop(i&&typeof i=="object"?i:void 0),null);return e?e.catch(()=>{}):Promise.resolve()},state(){return Pt(i=>i.film.state(),null)||Dm()}},_debug:{settle(){Pt(i=>i.settle())},setMorph(i,e=!0){Pt(t=>t.setMorphProgress(Number(i),e))},freeze(i=!0){Pt(e=>{e.frozen=!!i,e.request()})},setTime(i){Pt(e=>{e.time=Number(i)||0,e.request()})},loseContext(){return Ar=Pt(i=>i.renderer.getContext().getExtension("WEBGL_lose_context"),null),Ar&&Ar.loseContext(),!!Ar},restoreContext(){return Ar&&Ar.restoreContext(),!!Ar},get engine(){return An}}};try{T0()?w0(self):typeof window<"u"&&(window.Universe=Nm,typeof WebGL2RenderingContext>"u"&&(nf().dataset.universe="none"))}catch{}var eC=Nm;})();
