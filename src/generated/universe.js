/* Universe — three.js r186 (MIT). The MIT License */
(()=>{var Fm=Object.defineProperty;var Dm=(i,e,t)=>e in i?Fm(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var bi=(i,e,t)=>Dm(i,typeof e!="symbol"?e+"":e,t);var Rf=0,Su=1,Cf=2;var to=1,Pf=2,Qr=3,Bs=0,Vi=1,wi=2,Ti=0,ea=1,Xt=2,bu=3,wu=4,Kn=5;var Gi=100,If=101,Lf=102,Ff=103,Df=104,jl=200,Un=201,Uf=202,Nf=203,Tu=204,io=205,Of=206,Bf=207,kf=208,zf=209,Hf=210,Vf=211,Gf=212,Wf=213,qf=214,_l=0,yl=1,Ml=2,Wr=3,Sl=4,bl=5,wl=6,Tl=7,Eu=0,Xf=1,Yf=2,li=0,no=1,so=2,ro=3,ao=4,oo=5,lo=6,co=7;var Au=300,ks=301,rr=302,Ql=303,ec=304,ho=306,qr=1e3,zi=1001,El=1002,jt=1003,$f=1004;var uo=1005;var qt=1006,tc=1007;var zs=1008;var hn=1009,Ru=1010,Cu=1011,ta=1012,ic=1013,Nn=1014,ji=1015,zt=1016,nc=1017,sc=1018,ia=1020,Pu=35902,Iu=35899,Lu=1021,Fu=1022,ci=1023,Yn=1026,Hs=1027,Du=1028,rc=1029,Vs=1030,ac=1031;var oc=1033,fo=33776,po=33777,mo=33778,go=33779,lc=35840,cc=35841,hc=35842,uc=35843,dc=36196,fc=37492,pc=37496,mc=37488,gc=37489,vo=37490,vc=37491,xc=37808,_c=37809,yc=37810,Mc=37811,Sc=37812,bc=37813,wc=37814,Tc=37815,Ec=37816,Ac=37817,Rc=37818,Cc=37819,Pc=37820,Ic=37821,Lc=36492,Fc=36494,Dc=36495,Uc=36283,Nc=36284,xo=36285,Oc=36286;var Na=2300,Al=2301,vl=2302,mu=2303,gu=2400,vu=2401,xu=2402;var Kf=3200;var Uu=0,Zf=1,us="",si="srgb",Oa="srgb-linear",Ba="linear",St="srgb";var xl=7680;var Jf=519,jf=512,Qf=513,ep=514,Bc=515,tp=516,ip=517,kc=518,np=519,sp=35044,_o=35048;var yo="300 es",Ln=2e3,ka=2001;function Um(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Nm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function za(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rp(){let i=za("canvas");return i.style.display="block",i}var tf={},Xr=null;function Nu(...i){let e="THREE."+i.shift();Xr?Xr("log",e,...i):console.log(e,...i)}function ap(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xe(...i){i=ap(i);let e="THREE."+i.shift();if(Xr)Xr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ke(...i){i=ap(i);let e="THREE."+i.shift();if(Xr)Xr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function nr(...i){let e=i.join(" ");e in tf||(tf[e]=!0,Xe(...i))}function op(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var lp={[_l]:yl,[Ml]:wl,[Sl]:Tl,[Wr]:bl,[yl]:_l,[wl]:Ml,[Tl]:Sl,[bl]:Wr},$n=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ii=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nf=1234567,Da=Math.PI/180,Yr=180/Math.PI;function na(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ii[i&255]+Ii[i>>8&255]+Ii[i>>16&255]+Ii[i>>24&255]+"-"+Ii[e&255]+Ii[e>>8&255]+"-"+Ii[e>>16&15|64]+Ii[e>>24&255]+"-"+Ii[t&63|128]+Ii[t>>8&255]+"-"+Ii[t>>16&255]+Ii[t>>24&255]+Ii[n&255]+Ii[n>>8&255]+Ii[n>>16&255]+Ii[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function Ou(i,e){return(i%e+e)%e}function Om(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Bm(i,e,t){return i!==e?(t-i)/(e-i):0}function Ua(i,e,t){return(1-t)*i+t*e}function km(i,e,t,n){return Ua(i,e,1-Math.exp(-t*n))}function zm(i,e=1){return e-Math.abs(Ou(i,e*2)-e)}function Hm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Vm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Gm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Wm(i,e){return i+Math.random()*(e-i)}function qm(i){return i*(.5-Math.random())}function Xm(i){i!==void 0&&(nf=i);let e=nf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ym(i){return i*Da}function $m(i){return i*Yr}function Km(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Zm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jm(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:Xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ki(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Mo={DEG2RAD:Da,RAD2DEG:Yr,generateUUID:na,clamp:ut,euclideanModulo:Ou,mapLinear:Om,inverseLerp:Bm,lerp:Ua,damp:km,pingpong:zm,smoothstep:Hm,smootherstep:Vm,randInt:Gm,randFloat:Wm,randFloatSpread:qm,seededRandom:Xm,degToRad:Ym,radToDeg:$m,isPowerOfTwo:Km,ceilPowerOfTwo:Zm,floorPowerOfTwo:Jm,setQuaternionFromProperEuler:jm,normalize:ki,denormalize:Vr},Vu=class Vu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vu.prototype.isVector2=!0;var ye=Vu,ln=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(d!==v||l!==h||c!==f||u!==g){let p=l*h+c*f+u*g+d*v;p<0&&(h=-h,f=-f,g=-g,v=-v,p=-p);let m=1-o;if(p<.9995){let _=Math.acos(p),E=Math.sin(_);m=Math.sin(m*_)/E,o=Math.sin(o*_)/E,l=l*m+h*o,c=c*m+f*o,u=u*m+g*o,d=d*m+v*o}else{l=l*m+h*o,c=c*m+f*o,u=u*m+g*o,d=d*m+v*o;let _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Gu=class Gu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $h.copy(this).projectOnVector(e),this.sub($h)}reflect(e){return this.sub($h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gu.prototype.isVector3=!0;var D=Gu,$h=new D,sf=new ln,Wu=class Wu{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],v=s[0],p=s[3],m=s[6],_=s[1],E=s[4],y=s[7],S=s[2],M=s[5],w=s[8];return r[0]=a*v+o*_+l*S,r[3]=a*p+o*E+l*M,r[6]=a*m+o*y+l*w,r[1]=c*v+u*_+d*S,r[4]=c*p+u*E+d*M,r[7]=c*m+u*y+d*w,r[2]=h*v+f*_+g*S,r[5]=h*p+f*E+g*M,r[8]=h*m+f*y+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=t*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(s*c-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return nr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kh.makeScale(e,t)),this}rotate(e){return nr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kh.makeRotation(-e)),this}translate(e,t){return nr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Wu.prototype.isMatrix3=!0;var tt=Wu,Kh=new tt,rf=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),af=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qm(){let i={enabled:!0,workingColorSpace:Oa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===St&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(s.r=Gr(s.r),s.g=Gr(s.g),s.b=Gr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===us?Ba:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return nr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return nr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Oa]:{primaries:e,whitePoint:n,transfer:Ba,toXYZ:rf,fromXYZ:af,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:n,transfer:St,toXYZ:rf,fromXYZ:af,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),i}var ct=Qm();function ls(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Cr,Rl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cr===void 0&&(Cr=za("canvas")),Cr.width=e.width,Cr.height=e.height;let s=Cr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Cr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=za("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ls(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ls(t[n]/255)*255):t[n]=ls(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},eg=0,$r=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=na(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Zh(s[a].image)):r.push(Zh(s[a]))}else r=Zh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Zh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var tg=0,Jh=new D,Ki=class i extends $n{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=zi,s=zi,r=qt,a=zs,o=ci,l=hn,c=i.DEFAULT_ANISOTROPY,u=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=na(),this.name="",this.source=new $r(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jh).x}get height(){return this.source.getSize(Jh).y}get depth(){return this.source.getSize(Jh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qr:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case El:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qr:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case El:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ki.DEFAULT_IMAGE=null;Ki.DEFAULT_MAPPING=Au;Ki.DEFAULT_ANISOTROPY=1;var qu=class qu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,y=(f+1)/2,S=(m+1)/2,M=(u+h)/4,w=(d+v)/4,x=(g+p)/4;return E>y&&E>S?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=M/n,r=w/n):y>S?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=M/s,r=x/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=w/r,s=x/r),this.set(n,s,r,t),this}let _=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(d-v)/_,this.z=(h-u)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};qu.prototype.isVector4=!0;var We=qu,Cl=class extends $n{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Ki(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new $r(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ut=class extends Cl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ha=class extends Ki{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pl=class extends Ki{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Jl=class Jl{constructor(e,t,n,s,r,a,o,l,c,u,d,h,f,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,h,f,g,v,p)}set(e,t,n,s,r,a,o,l,c,u,d,h,f,g,v,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Pr.setFromMatrixColumn(e,0).length(),r=1/Pr.setFromMatrixColumn(e,1).length(),a=1/Pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,f=a*d,g=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,g=c*u,v=c*d;t[0]=h+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,g=c*u,v=c*d;t[0]=h-v*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,f=a*d,g=o*u,v=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-v*d}else if(e.order==="XZY"){let h=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ig,e,ng)}lookAt(e,t,n){let s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Ts.crossVectors(n,an),Ts.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Ts.crossVectors(n,an)),Ts.normalize(),$o.crossVectors(an,Ts),s[0]=Ts.x,s[4]=$o.x,s[8]=an.x,s[1]=Ts.y,s[5]=$o.y,s[9]=an.y,s[2]=Ts.z,s[6]=$o.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],_=n[3],E=n[7],y=n[11],S=n[15],M=s[0],w=s[4],x=s[8],A=s[12],R=s[1],I=s[5],L=s[9],U=s[13],C=s[2],F=s[6],B=s[10],V=s[14],Y=s[3],N=s[7],k=s[11],X=s[15];return r[0]=a*M+o*R+l*C+c*Y,r[4]=a*w+o*I+l*F+c*N,r[8]=a*x+o*L+l*B+c*k,r[12]=a*A+o*U+l*V+c*X,r[1]=u*M+d*R+h*C+f*Y,r[5]=u*w+d*I+h*F+f*N,r[9]=u*x+d*L+h*B+f*k,r[13]=u*A+d*U+h*V+f*X,r[2]=g*M+v*R+p*C+m*Y,r[6]=g*w+v*I+p*F+m*N,r[10]=g*x+v*L+p*B+m*k,r[14]=g*A+v*U+p*V+m*X,r[3]=_*M+E*R+y*C+S*Y,r[7]=_*w+E*I+y*F+S*N,r[11]=_*x+E*L+y*B+S*k,r[15]=_*A+E*U+y*V+S*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],v=e[7],p=e[11],m=e[15],_=l*f-c*h,E=o*f-c*d,y=o*h-l*d,S=a*f-c*u,M=a*h-l*u,w=a*d-o*u;return t*(v*_-p*E+m*y)-n*(g*_-p*S+m*M)+s*(g*E-v*S+m*w)-r*(g*y-v*M+p*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],v=e[13],p=e[14],m=e[15],_=t*o-n*a,E=t*l-s*a,y=t*c-r*a,S=n*l-s*o,M=n*c-r*o,w=s*c-r*l,x=u*v-d*g,A=u*p-h*g,R=u*m-f*g,I=d*p-h*v,L=d*m-f*v,U=h*m-f*p,C=_*U-E*L+y*I+S*R-M*A+w*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/C;return e[0]=(o*U-l*L+c*I)*F,e[1]=(s*L-n*U-r*I)*F,e[2]=(v*w-p*M+m*S)*F,e[3]=(h*M-d*w-f*S)*F,e[4]=(l*R-a*U-c*A)*F,e[5]=(t*U-s*R+r*A)*F,e[6]=(p*y-g*w-m*E)*F,e[7]=(u*w-h*y+f*E)*F,e[8]=(a*L-o*R+c*x)*F,e[9]=(n*R-t*L-r*x)*F,e[10]=(g*M-v*y+m*_)*F,e[11]=(d*y-u*M-f*_)*F,e[12]=(o*A-a*I-l*x)*F,e[13]=(t*I-n*A+s*x)*F,e[14]=(v*E-g*S-p*_)*F,e[15]=(u*S-d*E+h*_)*F,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,v=a*u,p=a*d,m=o*d,_=l*c,E=l*u,y=l*d,S=n.x,M=n.y,w=n.z;return s[0]=(1-(v+m))*S,s[1]=(f+y)*S,s[2]=(g-E)*S,s[3]=0,s[4]=(f-y)*M,s[5]=(1-(h+m))*M,s[6]=(p+_)*M,s[7]=0,s[8]=(g+E)*w,s[9]=(p-_)*w,s[10]=(1-(h+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Pr.set(s[0],s[1],s[2]).length(),o=Pr.set(s[4],s[5],s[6]).length(),l=Pr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Rn.copy(this);let c=1/a,u=1/o,d=1/l;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,t.setFromRotationMatrix(Rn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Ln,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Ln)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ka)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ln,l=!1){let c=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Ln)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===ka)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Jl.prototype.isMatrix4=!0;var Rt=Jl,Pr=new D,Rn=new Rt,ig=new D(0,0,0),ng=new D(1,1,1),Ts=new D,$o=new D,an=new D,of=new Rt,lf=new ln,Is=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(of,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lf.setFromEuler(this),this.setFromQuaternion(lf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Is.DEFAULT_ORDER="XYZ";var Va=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sg=0,cf=new D,Ir=new ln,is=new Rt,Ko=new D,Ca=new D,rg=new D,ag=new ln,hf=new D(1,0,0),uf=new D(0,1,0),df=new D(0,0,1),ff={type:"added"},og={type:"removed"},Lr={type:"childadded",child:null},jh={type:"childremoved",child:null},Zi=class i extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Is,n=new ln,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new tt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(hf,e)}rotateY(e){return this.rotateOnAxis(uf,e)}rotateZ(e){return this.rotateOnAxis(df,e)}translateOnAxis(e,t){return cf.copy(e).applyQuaternion(this.quaternion),this.position.add(cf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hf,e)}translateY(e){return this.translateOnAxis(uf,e)}translateZ(e){return this.translateOnAxis(df,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(is.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ko.copy(e):Ko.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?is.lookAt(Ca,Ko,this.up):is.lookAt(Ko,Ca,this.up),this.quaternion.setFromRotationMatrix(is),s&&(is.extractRotation(s.matrixWorld),Ir.setFromRotationMatrix(is),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ff),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(og),jh.child=e,this.dispatchEvent(jh),jh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),is.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),is.multiply(e.parent.matrixWorld)),e.applyMatrix4(is),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ff),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,rg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,ag,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Zi.DEFAULT_UP=new D(0,1,0);Zi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tt=class extends Zi{constructor(){super(),this.isGroup=!0,this.type="Group"}},lg={type:"move"},Kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Es={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function Qh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=Ou(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Qh(a,r,e+1/3),this.g=Qh(a,r,e),this.b=Qh(a,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=si){function n(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=si){let n=cp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return ct.workingToColorSpace(Li.copy(this),e),Math.round(ut(Li.r*255,0,255))*65536+Math.round(ut(Li.g*255,0,255))*256+Math.round(ut(Li.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Li.copy(this),t);let n=Li.r,s=Li.g,r=Li.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Li.copy(this),t),e.r=Li.r,e.g=Li.g,e.b=Li.b,e}getStyle(e=si){ct.workingToColorSpace(Li.copy(this),e);let t=Li.r,n=Li.g,s=Li.b;return e!==si?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Es),this.setHSL(Es.h+e,Es.s+t,Es.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Es),e.getHSL(Zo);let n=Ua(Es.h,Zo.h,t),s=Ua(Es.s,Zo.s,t),r=Ua(Es.l,Zo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Li=new je;je.NAMES=cp;var vi=class extends Zi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Is,this.environmentIntensity=1,this.environmentRotation=new Is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Cn=new D,ns=new D,eu=new D,ss=new D,Fr=new D,Dr=new D,pf=new D,tu=new D,iu=new D,nu=new D,su=new We,ru=new We,au=new We,Ps=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Cn.subVectors(e,t),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Cn.subVectors(s,t),ns.subVectors(n,t),eu.subVectors(e,t);let a=Cn.dot(Cn),o=Cn.dot(ns),l=Cn.dot(eu),c=ns.dot(ns),u=ns.dot(eu),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ss)===null?!1:ss.x>=0&&ss.y>=0&&ss.x+ss.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ss)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ss.x),l.addScaledVector(a,ss.y),l.addScaledVector(o,ss.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return su.setScalar(0),ru.setScalar(0),au.setScalar(0),su.fromBufferAttribute(e,t),ru.fromBufferAttribute(e,n),au.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(su,r.x),a.addScaledVector(ru,r.y),a.addScaledVector(au,r.z),a}static isFrontFacing(e,t,n,s){return Cn.subVectors(n,t),ns.subVectors(e,t),Cn.cross(ns).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ns.subVectors(this.a,this.b),Cn.cross(ns).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Fr.subVectors(s,n),Dr.subVectors(r,n),tu.subVectors(e,n);let l=Fr.dot(tu),c=Dr.dot(tu);if(l<=0&&c<=0)return t.copy(n);iu.subVectors(e,s);let u=Fr.dot(iu),d=Dr.dot(iu);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Fr,a);nu.subVectors(e,r);let f=Fr.dot(nu),g=Dr.dot(nu);if(g>=0&&f<=g)return t.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Dr,o);let p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return pf.subVectors(r,s),o=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(pf,o);let m=1/(p+v+h);return a=v*m,o=h*m,t.copy(n).addScaledVector(Fr,a).addScaledVector(Dr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ls=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jo.copy(n.boundingBox)),Jo.applyMatrix4(e.matrixWorld),this.union(Jo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pa),jo.subVectors(this.max,Pa),Ur.subVectors(e.a,Pa),Nr.subVectors(e.b,Pa),Or.subVectors(e.c,Pa),As.subVectors(Nr,Ur),Rs.subVectors(Or,Nr),Qs.subVectors(Ur,Or);let t=[0,-As.z,As.y,0,-Rs.z,Rs.y,0,-Qs.z,Qs.y,As.z,0,-As.x,Rs.z,0,-Rs.x,Qs.z,0,-Qs.x,-As.y,As.x,0,-Rs.y,Rs.x,0,-Qs.y,Qs.x,0];return!ou(t,Ur,Nr,Or,jo)||(t=[1,0,0,0,1,0,0,0,1],!ou(t,Ur,Nr,Or,jo))?!1:(Qo.crossVectors(As,Rs),t=[Qo.x,Qo.y,Qo.z],ou(t,Ur,Nr,Or,jo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},rs=[new D,new D,new D,new D,new D,new D,new D,new D],Pn=new D,Jo=new Ls,Ur=new D,Nr=new D,Or=new D,As=new D,Rs=new D,Qs=new D,Pa=new D,jo=new D,Qo=new D,er=new D;function ou(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){er.fromArray(i,r);let o=s.x*Math.abs(er.x)+s.y*Math.abs(er.y)+s.z*Math.abs(er.z),l=e.dot(er),c=t.dot(er),u=n.dot(er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var os=cg();function cg(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function hg(i){Math.abs(i)>65504&&Xe("DataUtils.toHalfFloat(): Value out of range."),i=ut(i,-65504,65504),os.floatView[0]=i;let e=os.uint32View[0],t=e>>23&511;return os.baseTable[t]+((e&8388607)>>os.shiftTable[t])}function ug(i){let e=i>>10;return os.uint32View[0]=os.mantissaTable[os.offsetTable[e]+(i&1023)]+os.exponentTable[e],os.floatView[0]}var Ga=class{static toHalfFloat(e){return hg(e)}static fromHalfFloat(e){return ug(e)}},ni=new D,el=new ye,dg=0,gt=class extends $n{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sp,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)el.fromBufferAttribute(this,t),el.applyMatrix3(e),this.setXY(t,el.x,el.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ni.fromBufferAttribute(this,t),ni.applyMatrix3(e),this.setXYZ(t,ni.x,ni.y,ni.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ni.fromBufferAttribute(this,t),ni.applyMatrix4(e),this.setXYZ(t,ni.x,ni.y,ni.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ni.fromBufferAttribute(this,t),ni.applyNormalMatrix(e),this.setXYZ(t,ni.x,ni.y,ni.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ni.fromBufferAttribute(this,t),ni.transformDirection(e),this.setXYZ(t,ni.x,ni.y,ni.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ki(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vr(t,this.array)),t}setX(e,t){return this.normalized&&(t=ki(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vr(t,this.array)),t}setY(e,t){return this.normalized&&(t=ki(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ki(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vr(t,this.array)),t}setW(e,t){return this.normalized&&(t=ki(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ki(t,this.array),n=ki(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ki(t,this.array),n=ki(n,this.array),s=ki(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ki(t,this.array),n=ki(n,this.array),s=ki(s,this.array),r=ki(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Wa=class extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var qa=class extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var bt=class extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},fg=new Ls,Ia=new D,lu=new D,Ji=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):fg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ia.subVectors(e,this.center);let t=Ia.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ia,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ia.copy(e.center).add(lu)),this.expandByPoint(Ia.copy(e.center).sub(lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},pg=0,gn=new Rt,cu=new Zi,Br=new D,on=new Ls,La=new Ls,mi=new D,vt=class i extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=na(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Um(e)?qa:Wa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return cu.lookAt(e),cu.updateMatrix(),this.applyMatrix4(cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ls);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(mi.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(mi),mi.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(mi)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];La.setFromBufferAttribute(o),this.morphTargetsRelative?(mi.addVectors(on.min,La.min),on.expandByPoint(mi),mi.addVectors(on.max,La.max),on.expandByPoint(mi)):(on.expandByPoint(La.min),on.expandByPoint(La.max))}on.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)mi.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(mi));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)mi.fromBufferAttribute(o,c),l&&(Br.fromBufferAttribute(e,c),mi.add(Br)),s=Math.max(s,n.distanceToSquared(mi))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new gt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new D,l[x]=new D;let c=new D,u=new D,d=new D,h=new ye,f=new ye,g=new ye,v=new D,p=new D;function m(x,A,R){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,R),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,R),u.sub(c),d.sub(c),f.sub(h),g.sub(h);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(I),o[x].add(v),o[A].add(v),o[R].add(v),l[x].add(p),l[A].add(p),l[R].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let x=0,A=_.length;x<A;++x){let R=_[x],I=R.start,L=R.count;for(let U=I,C=I+L;U<C;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let E=new D,y=new D,S=new D,M=new D;function w(x){S.fromBufferAttribute(s,x),M.copy(S);let A=o[x];E.copy(A),E.sub(S.multiplyScalar(S.dot(A))).normalize(),y.crossVectors(M,A);let I=y.dot(l[x])<0?-1:1;a.setXYZW(x,E.x,E.y,E.z,I)}for(let x=0,A=_.length;x<A;++x){let R=_[x],I=R.start,L=R.count;for(let U=I,C=I+L;U<C;U+=3)w(e.getX(U+0)),w(e.getX(U+1)),w(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,d=new D;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mi.fromBufferAttribute(e,t),mi.normalize(),e.setXYZ(t,mi.x,mi.y,mi.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new gt(h,u,d)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var hu=new D,mg=new D,gg=new tt,In=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=hu.subVectors(n,t).cross(mg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(hu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||gg.getNormalMatrix(e),s=this.coplanarPoint(hu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},vg=0,cs=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=na(),this.name="",this.type="Material",this.blending=ea,this.side=Bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tu,this.blendDst=io,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xl,this.stencilZFail=xl,this.stencilZPass=xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new In().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ye().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var as=new D,uu=new D,tl=new D,il=new D,Zr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,as)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=as.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(as.copy(this.origin).addScaledVector(this.direction,t),as.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){uu.copy(e).add(t).multiplyScalar(.5),tl.copy(t).sub(e).normalize(),il.copy(this.origin).sub(uu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(tl),o=il.dot(this.direction),l=-il.dot(tl),c=il.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let v=1/u;d*=v,h*=v,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(uu).addScaledVector(tl,h),f}intersectSphere(e,t){if(e.radius<0)return null;as.subVectors(e.center,this.origin);let n=as.dot(this.direction),s=as.dot(as)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,as)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,g=t.x-a.x,v=t.y-a.y,p=t.z-a.z,m=n.x-a.x,_=n.y-a.y,E=n.z-a.z,y=Math.abs(l),S=Math.abs(c),M=Math.abs(u),w,x,A,R,I,L,U,C,F,B,V,Y;if(y>=S&&y>=M?(A=l,L=d,F=g,Y=m,l>=0?(w=c,x=u,R=h,I=f,U=v,C=p,B=_,V=E):(w=u,x=c,R=f,I=h,U=p,C=v,B=E,V=_)):S>=M?(A=c,L=h,F=v,Y=_,c>=0?(w=u,x=l,R=f,I=d,U=p,C=g,B=E,V=m):(w=l,x=u,R=d,I=f,U=g,C=p,B=m,V=E)):(A=u,L=f,F=p,Y=E,u>=0?(w=l,x=c,R=d,I=h,U=g,C=v,B=m,V=_):(w=c,x=l,R=h,I=d,U=v,C=g,B=_,V=m)),A===0)return null;let N=w/A,k=x/A,X=1/A,j=R-N*L,J=I-k*L,Re=U-N*F,Ce=C-k*F,Fe=B-N*Y,Q=V-k*Y,ie=Fe*Ce-Q*Re,fe=j*Q-J*Fe,Pe=Re*J-Ce*j;if(s){if(ie<0||fe<0||Pe<0)return null}else if((ie<0||fe<0||Pe<0)&&(ie>0||fe>0||Pe>0))return null;let Me=ie+fe+Pe;if(Me===0)return null;let Ze=X*(ie*L+fe*F+Pe*Y);return(Me>0?Ze<0:Ze>0)?null:this.at(Ze/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fn=class extends cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Is,this.combine=Eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},mf=new Rt,tr=new Zr,nl=new Ji,gf=new D,sl=new D,rl=new D,al=new D,du=new D,ol=new D,vf=new D,ll=new D,Je=class extends Zi{constructor(e=new vt,t=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ol.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(du.fromBufferAttribute(d,e),a?ol.addScaledVector(du,u):ol.addScaledVector(du.sub(t),u))}t.add(ol)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nl.copy(n.boundingSphere),nl.applyMatrix4(r),tr.copy(e.ray).recast(e.near),!(nl.containsPoint(tr.origin)===!1&&(tr.intersectSphere(nl,gf)===null||tr.origin.distanceToSquared(gf)>(e.far-e.near)**2))&&(mf.copy(r).invert(),tr.copy(e.ray).applyMatrix4(mf),!(n.boundingBox!==null&&tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,tr)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let p=h[g],m=a[p.materialIndex],_=Math.max(p.start,f.start),E=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,S=E;y<S;y+=3){let M=o.getX(y),w=o.getX(y+1),x=o.getX(y+2);s=cl(this,m,e,n,c,u,d,M,w,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let _=o.getX(p),E=o.getX(p+1),y=o.getX(p+2);s=cl(this,a,e,n,c,u,d,_,E,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let p=h[g],m=a[p.materialIndex],_=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,S=E;y<S;y+=3){let M=y,w=y+1,x=y+2;s=cl(this,m,e,n,c,u,d,M,w,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let _=p,E=p+1,y=p+2;s=cl(this,a,e,n,c,u,d,_,E,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function xg(i,e,t,n,s,r,a,o){let l;if(e.side===Vi?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Bs,o),l===null)return null;ll.copy(o),ll.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ll);return c<t.near||c>t.far?null:{distance:c,point:ll.clone(),object:i}}function cl(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,sl),i.getVertexPosition(l,rl),i.getVertexPosition(c,al);let u=xg(i,e,t,n,sl,rl,al,vf);if(u){let d=new D;Ps.getBarycoord(vf,sl,rl,al,d),s&&(u.uv=Ps.getInterpolatedAttribute(s,o,l,c,d,new ye)),r&&(u.uv1=Ps.getInterpolatedAttribute(r,o,l,c,d,new ye)),a&&(u.normal=Ps.getInterpolatedAttribute(a,o,l,c,d,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new D,materialIndex:0};Ps.getNormal(sl,rl,al,h.normal),u.face=h,u.barycoord=d}return u}var Fs=class extends Ki{constructor(e=null,t=1,n=1,s,r,a,o,l,c=jt,u=jt,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xa=class extends gt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};var ir=new Ji,_g=new ye(.5,.5),hl=new D,Ya=class{constructor(e=new In,t=new In,n=new In,s=new In,r=new In,a=new In){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],v=r[9],p=r[10],m=r[11],_=r[12],E=r[13],y=r[14],S=r[15];if(s[0].setComponents(c-a,f-u,m-g,S-_).normalize(),s[1].setComponents(c+a,f+u,m+g,S+_).normalize(),s[2].setComponents(c+o,f+d,m+v,S+E).normalize(),s[3].setComponents(c-o,f-d,m-v,S-E).normalize(),n)s[4].setComponents(l,h,p,y).normalize(),s[5].setComponents(c-l,f-h,m-p,S-y).normalize();else if(s[4].setComponents(c-l,f-h,m-p,S-y).normalize(),t===Ln)s[5].setComponents(c+l,f+h,m+p,S+y).normalize();else if(t===ka)s[5].setComponents(l,h,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){ir.center.set(0,0,0);let t=_g.distanceTo(e.center);return ir.radius=.7071067811865476+t,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(hl.x=s.normal.x>0?e.max.x:e.min.x,hl.y=s.normal.y>0?e.max.y:e.min.y,hl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(hl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Il=class extends cs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ll=new D,Fl=new D,xf=new Rt,Fa=new Zr,ul=new Ji,fu=new D,_f=new D,Dl=class extends Zi{constructor(e=new vt,t=new Il){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ll.fromBufferAttribute(t,s-1),Fl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ll.distanceTo(Fl);e.setAttribute("lineDistance",new bt(n,1))}else Xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(s),ul.radius+=r,e.ray.intersectsSphere(ul)===!1)return;xf.copy(s).invert(),Fa.copy(e.ray).applyMatrix4(xf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,p=g-1;v<p;v+=c){let m=u.getX(v),_=u.getX(v+1),E=dl(this,e,Fa,l,m,_,v);E&&t.push(E)}if(this.isLineLoop){let v=u.getX(g-1),p=u.getX(f),m=dl(this,e,Fa,l,v,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,p=g-1;v<p;v+=c){let m=dl(this,e,Fa,l,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){let v=dl(this,e,Fa,l,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function dl(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Ll.fromBufferAttribute(o,s),Fl.fromBufferAttribute(o,r),t.distanceSqToSegment(Ll,Fl,fu,_f)>n)return;fu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(fu);if(!(c<e.near||c>e.far))return{distance:c,point:_f.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var yf=new D,Mf=new D,$a=class extends Dl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)yf.fromBufferAttribute(t,s),Mf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+yf.distanceTo(Mf);e.setAttribute("lineDistance",new bt(n,1))}else Xe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ul=class extends cs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sf=new Rt,_u=new Zr,fl=new Ji,pl=new D,Fi=class extends Zi{constructor(e=new vt,t=new Ul){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fl.copy(n.boundingSphere),fl.applyMatrix4(s),fl.radius+=r,e.ray.intersectsSphere(fl)===!1)return;Sf.copy(s).invert(),_u.copy(e.ray).applyMatrix4(Sf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,v=f;g<v;g++){let p=c.getX(g);pl.fromBufferAttribute(d,p),bf(pl,p,l,s,e,t,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,v=f;g<v;g++)pl.fromBufferAttribute(d,g),bf(pl,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function bf(i,e,t,n,s,r,a){let o=_u.distanceSqToPoint(i);if(o<t){let l=new D;_u.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ka=class extends Ki{constructor(e=[],t=ks,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Ds=class extends Ki{constructor(e,t,n=Nn,s,r,a,o=jt,l=jt,c,u=Yn,d=1){if(u!==Yn&&u!==Hs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $r(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Nl=class extends Ds{constructor(e,t=Nn,n=ks,s,r,a=jt,o=jt,l,c=Yn){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Za=class extends Ki{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Jr=class i extends vt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(d,2));function g(v,p,m,_,E,y,S,M,w,x,A){let R=y/w,I=S/x,L=y/2,U=S/2,C=M/2,F=w+1,B=x+1,V=0,Y=0,N=new D;for(let k=0;k<B;k++){let X=k*I-U;for(let j=0;j<F;j++){let J=j*R-L;N[v]=J*_,N[p]=X*E,N[m]=C,c.push(N.x,N.y,N.z),N[v]=0,N[p]=0,N[m]=M>0?1:-1,u.push(N.x,N.y,N.z),d.push(j/w),d.push(1-k/x),V+=1}}for(let k=0;k<x;k++)for(let X=0;X<w;X++){let j=h+X+F*k,J=h+X+F*(k+1),Re=h+(X+1)+F*(k+1),Ce=h+(X+1)+F*k;l.push(j,J,Ce),l.push(J,Re,Ce),Y+=6}o.addGroup(f,Y,A),f+=Y,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Hi=class i extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],v=[],p=[];for(let m=0;m<u;m++){let _=m*h-a;for(let E=0;E<c;E++){let y=E*d-r;g.push(y,-_,0),v.push(0,0,1),p.push(E/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let E=_+c*m,y=_+c*(m+1),S=_+1+c*(m+1),M=_+1+c*m;f.push(E,y,M),f.push(y,S,M)}this.setIndex(f),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(v,3)),this.setAttribute("uv",new bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ja=class i extends vt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],d=e,h=(t-e)/s,f=new D,g=new ye;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){let m=r+p/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let v=0;v<s;v++){let p=v*(n+1);for(let m=0;m<n;m++){let _=m+p,E=_,y=_+n+1,S=_+n+2,M=_+1;o.push(E,y,M),o.push(y,S,M)}}this.setIndex(o),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(c,3)),this.setAttribute("uv",new bt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var hs=class i extends vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new D,h=new D,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){let _=[],E=m/n,y=a+E*o,S=e*Math.cos(y),M=Math.sqrt(e*e-S*S),w=0;m===0&&a===0?w=.5/t:m===n&&l===Math.PI&&(w=-.5/t);for(let x=0;x<=t;x++){let A=x/t,R=s+A*r;d.x=-M*Math.cos(R),d.y=S,d.z=M*Math.sin(R),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),p.push(A+w,1-E),_.push(c++)}u.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let E=u[m][_+1],y=u[m][_],S=u[m+1][_],M=u[m+1][_+1];(m!==0||a>0)&&f.push(E,y,M),(m!==n-1||l<Math.PI)&&f.push(y,S,M)}this.setIndex(f),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(v,3)),this.setAttribute("uv",new bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function ar(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(wf(s))s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(wf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Di(i){let e={};for(let t=0;t<i.length;t++){let n=ar(i[t]);for(let s in n)e[s]=n[s]}return e}function wf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function yg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var ds={clone:ar,merge:Di},Mg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,De=class extends cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mg,this.fragmentShader=Sg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=yg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new je().setHex(s.value);break;case"v2":this.uniforms[n].value=new ye().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new We().fromArray(s.value);break;case"m3":this.uniforms[n].value=new tt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Rt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},jr=class extends De{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ol=class extends cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bl=class extends cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function kr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function pu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Us=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];i:{e:{let a;t:{n:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break n;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break i}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},kl=class extends Us{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gu,endingEnd:gu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case vu:r=e,o=2*t-n;break;case xu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vu:a=e,l=2*n-t;break;case xu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,p=v*g,m=-h*p+2*h*v-h*g,_=(1+h)*p+(-1.5-2*h)*v+(-.5+h)*g+1,E=(-1-f)*p+(1.5+f)*v+.5*g,y=f*p-f*v;for(let S=0;S!==o;++S)r[S]=m*a[u+S]+_*a[c+S]+E*a[l+S]+y*a[d+S];return r}},zl=class extends Us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},Hl=class extends Us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vl=class extends Us{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-t)/(s-t),v=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*v+a[l+p]*g;return r}let h=o*2,f=e-1;for(let g=0;g!==o;++g){let v=a[c+g],p=a[l+g],m=f*h+g*2,_=d[m],E=d[m+1],y=e*h+g*2,S=u[y],M=u[y+1],w=wg(n,t,_,S,s);r[g]=hp(w,v,E,M,p)}return r}};function hp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function bg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function wg(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=hp(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=bg(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var cn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kr(t,this.TimeBufferType),this.values=kr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:kr(e.times,Array),values:kr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),pu(e.settings)&&(n.settings={inTangents:kr(e.settings.inTangents,Array),outTangents:kr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Vl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Na:t=this.InterpolantFactoryMethodDiscrete;break;case Al:t=this.InterpolantFactoryMethodLinear;break;case vl:t=this.InterpolantFactoryMethodSmooth;break;case mu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Na;case this.InterpolantFactoryMethodLinear:return Al;case this.InterpolantFactoryMethodSmooth:return vl;case this.InterpolantFactoryMethodBezier:return mu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;pu(this.settings)&&(Tf(this.settings.inTangents,e),Tf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ke("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ke("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Nm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ke("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===vl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let v=t[d+g];if(v!==t[h+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,pu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Tf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}cn.prototype.ValueTypeName="";cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=Al;var Ns=class extends cn{constructor(e,t,n){super(e,t,n)}};Ns.prototype.ValueTypeName="bool";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=Na;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Gl=class extends cn{constructor(e,t,n,s){super(e,t,n,s)}};Gl.prototype.ValueTypeName="color";var Wl=class extends cn{constructor(e,t,n,s){super(e,t,n,s)}};Wl.prototype.ValueTypeName="number";var ql=class extends Us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)ln.slerpFlat(r,0,a,c-o,a,c,l);return r}},ja=class extends cn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ql(this.times,this.values,this.getValueSize(),e)}};ja.prototype.ValueTypeName="quaternion";ja.prototype.InterpolantFactoryMethodSmooth=void 0;var Os=class extends cn{constructor(e,t,n){super(e,t,n)}};Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=Na;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var Xl=class extends cn{constructor(e,t,n,s){super(e,t,n,s)}};Xl.prototype.ValueTypeName="vector";var Yl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},up=new Yl,$l=class{constructor(e){this.manager=e!==void 0?e:up,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};$l.DEFAULT_MATERIAL_NAME="__DEFAULT";var ml=new D,gl=new ln,Xn=new D,sr=class extends Zi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ml,gl,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ml,gl,Xn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ml,gl,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ml,gl,Xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Cs=new D,Ef=new ye,Af=new ye,gi=class extends sr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z),Cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z)}getViewSize(e,t){return this.getViewBounds(e,Ef,Af),t.subVectors(Af,Ef)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Da*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Dn=class extends sr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Qa=class extends vt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var zr=-90,Hr=1,Kl=class extends Zi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gi(zr,Hr,e,t);s.layers=this.layers,this.add(s);let r=new gi(zr,Hr,e,t);r.layers=this.layers,this.add(r);let a=new gi(zr,Hr,e,t);a.layers=this.layers,this.add(a);let o=new gi(zr,Hr,e,t);o.layers=this.layers,this.add(o);let l=new gi(zr,Hr,e,t);l.layers=this.layers,this.add(l);let c=new gi(zr,Hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Zl=class extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},eo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Tg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Tg(){this._document.hidden===!1&&this.reset()}var ku="\\[\\]\\.:\\/",Eg=new RegExp("["+ku+"]","g"),zu="[^"+ku+"]",Ag="[^"+ku.replace("\\.","")+"]",Rg=/((?:WC+[\/:])*)/.source.replace("WC",zu),Cg=/(WCOD+)?/.source.replace("WCOD",Ag),Pg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zu),Ig=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zu),Lg=new RegExp("^"+Rg+Cg+Pg+Ig+"$"),Fg=["material","materials","bones","map"],yu=class{constructor(e,t,n){let s=n||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},kt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Eg,"")}static parseTrackName(e){let t=Lg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Fg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};kt.Composite=yu;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tb=new Float32Array(1);var Xu=class Xu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Xu.prototype.isMatrix2=!0;var Mu=Xu;function Hu(i,e,t,n){let s=Dg(n);switch(t){case Lu:return i*e;case Du:return i*e/s.components*s.byteLength;case rc:return i*e/s.components*s.byteLength;case Vs:return i*e*2/s.components*s.byteLength;case ac:return i*e*2/s.components*s.byteLength;case Fu:return i*e*3/s.components*s.byteLength;case ci:return i*e*4/s.components*s.byteLength;case oc:return i*e*4/s.components*s.byteLength;case fo:case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mo:case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cc:case uc:return Math.max(i,16)*Math.max(e,8)/4;case lc:case hc:return Math.max(i,8)*Math.max(e,8)/2;case dc:case fc:case mc:case gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pc:case vo:case vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case yc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case bc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Pc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Lc:case Fc:case Dc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Uc:case Nc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xo:case Oc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dg(i){switch(i){case hn:case Ru:return{byteLength:1,components:1};case ta:case Cu:case zt:return{byteLength:2,components:1};case nc:case sc:return{byteLength:2,components:4};case Nn:case ic:case ji:return{byteLength:4,components:1};case Pu:case Iu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Fp(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ng(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bg=`#ifdef USE_ALPHAHASH
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
#endif`,kg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gg=`#ifdef USE_AOMAP
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
#endif`,Wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qg=`#ifdef USE_BATCHING
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
#endif`,Xg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zg=`#ifdef USE_IRIDESCENCE
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
#endif`,Jg=`#ifdef USE_BUMPMAP
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
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,av=`#define PI 3.141592653589793
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
} // validated`,ov=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lv=`vec3 transformedNormal = objectNormal;
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
#endif`,cv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fv="gl_FragColor = linearToOutputTexel( gl_FragColor );",pv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mv=`#ifdef USE_ENVMAP
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
#endif`,gv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vv=`#ifdef USE_ENVMAP
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
#endif`,xv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_v=`#ifdef USE_ENVMAP
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
#endif`,yv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wv=`#ifdef USE_GRADIENTMAP
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
}`,Tv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ev=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Cv=`#ifdef USE_ENVMAP
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
#endif`,Pv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dv=`PhysicalMaterial material;
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
#endif`,Uv=`uniform sampler2D dfgLUT;
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
}`,Nv=`
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
#endif`,Ov=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,zv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yv=`#if defined( USE_POINTS_UV )
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
#endif`,$v=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qv=`#ifdef USE_MORPHTARGETS
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
#endif`,ex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ix=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ax=`#ifdef USE_NORMALMAP
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
#endif`,ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ux=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,px=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_x=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sx=`float getShadowMask() {
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
}`,bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wx=`#ifdef USE_SKINNING
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
#endif`,Tx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ex=`#ifdef USE_SKINNING
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
#endif`,Ax=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Px=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ix=`#ifdef USE_TRANSMISSION
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
#endif`,Lx=`#ifdef USE_TRANSMISSION
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
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bx=`uniform sampler2D t2D;
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
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`#include <common>
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
}`,Wx=`#if DEPTH_PACKING == 3200
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
}`,qx=`#define DISTANCE
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
}`,Xx=`#define DISTANCE
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
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$x=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`uniform float scale;
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
}`,Zx=`uniform vec3 diffuse;
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
}`,Jx=`#include <common>
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
}`,jx=`uniform vec3 diffuse;
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
}`,Qx=`#define LAMBERT
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
}`,e_=`#define LAMBERT
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
}`,t_=`#define MATCAP
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
}`,i_=`#define MATCAP
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
}`,n_=`#define NORMAL
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
}`,s_=`#define NORMAL
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
}`,r_=`#define PHONG
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
}`,a_=`#define PHONG
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
}`,o_=`#define STANDARD
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
}`,l_=`#define STANDARD
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
}`,c_=`#define TOON
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
}`,h_=`#define TOON
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
}`,u_=`uniform float size;
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
}`,d_=`uniform vec3 diffuse;
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
}`,f_=`#include <common>
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
}`,p_=`uniform vec3 color;
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
}`,m_=`uniform float rotation;
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
}`,g_=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:Og,alphahash_pars_fragment:Bg,alphamap_fragment:kg,alphamap_pars_fragment:zg,alphatest_fragment:Hg,alphatest_pars_fragment:Vg,aomap_fragment:Gg,aomap_pars_fragment:Wg,batching_pars_vertex:qg,batching_vertex:Xg,begin_vertex:Yg,beginnormal_vertex:$g,bsdfs:Kg,iridescence_fragment:Zg,bumpmap_pars_fragment:Jg,clipping_planes_fragment:jg,clipping_planes_pars_fragment:Qg,clipping_planes_pars_vertex:ev,clipping_planes_vertex:tv,color_fragment:iv,color_pars_fragment:nv,color_pars_vertex:sv,color_vertex:rv,common:av,cube_uv_reflection_fragment:ov,defaultnormal_vertex:lv,displacementmap_pars_vertex:cv,displacementmap_vertex:hv,emissivemap_fragment:uv,emissivemap_pars_fragment:dv,colorspace_fragment:fv,colorspace_pars_fragment:pv,envmap_fragment:mv,envmap_common_pars_fragment:gv,envmap_pars_fragment:vv,envmap_pars_vertex:xv,envmap_physical_pars_fragment:Cv,envmap_vertex:_v,fog_vertex:yv,fog_pars_vertex:Mv,fog_fragment:Sv,fog_pars_fragment:bv,gradientmap_pars_fragment:wv,lightmap_pars_fragment:Tv,lights_lambert_fragment:Ev,lights_lambert_pars_fragment:Av,lights_pars_begin:Rv,lights_toon_fragment:Pv,lights_toon_pars_fragment:Iv,lights_phong_fragment:Lv,lights_phong_pars_fragment:Fv,lights_physical_fragment:Dv,lights_physical_pars_fragment:Uv,lights_fragment_begin:Nv,lights_fragment_maps:Ov,lights_fragment_end:Bv,lightprobes_pars_fragment:kv,logdepthbuf_fragment:zv,logdepthbuf_pars_fragment:Hv,logdepthbuf_pars_vertex:Vv,logdepthbuf_vertex:Gv,map_fragment:Wv,map_pars_fragment:qv,map_particle_fragment:Xv,map_particle_pars_fragment:Yv,metalnessmap_fragment:$v,metalnessmap_pars_fragment:Kv,morphinstance_vertex:Zv,morphcolor_vertex:Jv,morphnormal_vertex:jv,morphtarget_pars_vertex:Qv,morphtarget_vertex:ex,normal_fragment_begin:tx,normal_fragment_maps:ix,normal_pars_fragment:nx,normal_pars_vertex:sx,normal_vertex:rx,normalmap_pars_fragment:ax,clearcoat_normal_fragment_begin:ox,clearcoat_normal_fragment_maps:lx,clearcoat_pars_fragment:cx,iridescence_pars_fragment:hx,opaque_fragment:ux,packing:dx,premultiplied_alpha_fragment:fx,project_vertex:px,dithering_fragment:mx,dithering_pars_fragment:gx,roughnessmap_fragment:vx,roughnessmap_pars_fragment:xx,shadowmap_pars_fragment:_x,shadowmap_pars_vertex:yx,shadowmap_vertex:Mx,shadowmask_pars_fragment:Sx,skinbase_vertex:bx,skinning_pars_vertex:wx,skinning_vertex:Tx,skinnormal_vertex:Ex,specularmap_fragment:Ax,specularmap_pars_fragment:Rx,tonemapping_fragment:Cx,tonemapping_pars_fragment:Px,transmission_fragment:Ix,transmission_pars_fragment:Lx,uv_pars_fragment:Fx,uv_pars_vertex:Dx,uv_vertex:Ux,worldpos_vertex:Nx,background_vert:Ox,background_frag:Bx,backgroundCube_vert:kx,backgroundCube_frag:zx,cube_vert:Hx,cube_frag:Vx,depth_vert:Gx,depth_frag:Wx,distance_vert:qx,distance_frag:Xx,equirect_vert:Yx,equirect_frag:$x,linedashed_vert:Kx,linedashed_frag:Zx,meshbasic_vert:Jx,meshbasic_frag:jx,meshlambert_vert:Qx,meshlambert_frag:e_,meshmatcap_vert:t_,meshmatcap_frag:i_,meshnormal_vert:n_,meshnormal_frag:s_,meshphong_vert:r_,meshphong_frag:a_,meshphysical_vert:o_,meshphysical_frag:l_,meshtoon_vert:c_,meshtoon_frag:h_,points_vert:u_,points_frag:d_,shadow_vert:f_,shadow_frag:p_,sprite_vert:m_,sprite_frag:g_},xe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Jn={basic:{uniforms:Di([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Di([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Di([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Di([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Di([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new je(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Di([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Di([xe.points,xe.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Di([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Di([xe.common,xe.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Di([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Di([xe.sprite,xe.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:Di([xe.common,xe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:Di([xe.lights,xe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Jn.physical={uniforms:Di([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var zc={r:0,b:0,g:0},v_=new Rt,Dp=new tt;Dp.set(-1,0,0,0,1,0,0,0,1);function x_(i,e,t,n,s,r){let a=new je(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(_){let E=_.isScene===!0?_.background:null;if(E&&E.isTexture){let y=_.backgroundBlurriness>0;E=e.get(E,y)}return E}function g(_){let E=!1,y=f(_);y===null?p(a,o):y&&y.isColor&&(p(y,1),E=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(_,E){let y=f(E);y&&(y.isCubeTexture||y.mapping===ho)?(c===void 0&&(c=new Je(new Jr(1,1,1),new De({name:"BackgroundCubeMaterial",uniforms:ar(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(v_.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Dp),c.material.toneMapped=ct.getTransfer(y.colorSpace)!==St,(u!==y||d!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Je(new Hi(2,2),new De({name:"BackgroundMaterial",uniforms:ar(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ct.getTransfer(y.colorSpace)!==St,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,E){_.getRGB(zc,Bu(i)),t.buffers.color.setClear(zc.r,zc.g,zc.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,E=1){a.set(_),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,p(a,o)},render:g,addToRenderList:v,dispose:m}}function __(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(I,L,U,C,F){let B=!1,V=d(I,C,U,L);r!==V&&(r=V,c(r.object)),B=f(I,C,U,F),B&&g(I,C,U,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,y(I,L,U,C),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function d(I,L,U,C){let F=C.wireframe===!0,B=n[L.id];B===void 0&&(B={},n[L.id]=B);let V=I.isInstancedMesh===!0?I.id:0,Y=B[V];Y===void 0&&(Y={},B[V]=Y);let N=Y[U.id];N===void 0&&(N={},Y[U.id]=N);let k=N[F];return k===void 0&&(k=h(l()),N[F]=k),k}function h(I){let L=[],U=[],C=[];for(let F=0;F<t;F++)L[F]=0,U[F]=0,C[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:C,object:I,attributes:{},index:null}}function f(I,L,U,C){let F=r.attributes,B=L.attributes,V=0,Y=U.getAttributes();for(let N in Y)if(Y[N].location>=0){let X=F[N],j=B[N];if(j===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),X===void 0||X.attribute!==j||j&&X.data!==j.data)return!0;V++}return r.attributesNum!==V||r.index!==C}function g(I,L,U,C){let F={},B=L.attributes,V=0,Y=U.getAttributes();for(let N in Y)if(Y[N].location>=0){let X=B[N];X===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(X=I.instanceColor));let j={};j.attribute=X,X&&X.data&&(j.data=X.data),F[N]=j,V++}r.attributes=F,r.attributesNum=V,r.index=C}function v(){let I=r.newAttributes;for(let L=0,U=I.length;L<U;L++)I[L]=0}function p(I){m(I,0)}function m(I,L){let U=r.newAttributes,C=r.enabledAttributes,F=r.attributeDivisors;U[I]=1,C[I]===0&&(i.enableVertexAttribArray(I),C[I]=1),F[I]!==L&&(i.vertexAttribDivisor(I,L),F[I]=L)}function _(){let I=r.newAttributes,L=r.enabledAttributes;for(let U=0,C=L.length;U<C;U++)L[U]!==I[U]&&(i.disableVertexAttribArray(U),L[U]=0)}function E(I,L,U,C,F,B,V){V===!0?i.vertexAttribIPointer(I,L,U,F,B):i.vertexAttribPointer(I,L,U,C,F,B)}function y(I,L,U,C){v();let F=C.attributes,B=U.getAttributes(),V=L.defaultAttributeValues;for(let Y in B){let N=B[Y];if(N.location>=0){let k=F[Y];if(k===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(k=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(k=I.instanceColor)),k!==void 0){let X=k.normalized,j=k.itemSize,J=e.get(k);if(J===void 0)continue;let Re=J.buffer,Ce=J.type,Fe=J.bytesPerElement,Q=Ce===i.INT||Ce===i.UNSIGNED_INT||k.gpuType===ic;if(k.isInterleavedBufferAttribute){let ie=k.data,fe=ie.stride,Pe=k.offset;if(ie.isInstancedInterleavedBuffer){for(let Me=0;Me<N.locationSize;Me++)m(N.location+Me,ie.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Me=0;Me<N.locationSize;Me++)p(N.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let Me=0;Me<N.locationSize;Me++)E(N.location+Me,j/N.locationSize,Ce,X,fe*Fe,(Pe+j/N.locationSize*Me)*Fe,Q)}else{if(k.isInstancedBufferAttribute){for(let ie=0;ie<N.locationSize;ie++)m(N.location+ie,k.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ie=0;ie<N.locationSize;ie++)p(N.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let ie=0;ie<N.locationSize;ie++)E(N.location+ie,j/N.locationSize,Ce,X,j*Fe,j/N.locationSize*ie*Fe,Q)}}else if(V!==void 0){let X=V[Y];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(N.location,X);break;case 3:i.vertexAttrib3fv(N.location,X);break;case 4:i.vertexAttrib4fv(N.location,X);break;default:i.vertexAttrib1fv(N.location,X)}}}}_()}function S(){A();for(let I in n){let L=n[I];for(let U in L){let C=L[U];for(let F in C){let B=C[F];for(let V in B)u(B[V].object),delete B[V];delete C[F]}}delete n[I]}}function M(I){if(n[I.id]===void 0)return;let L=n[I.id];for(let U in L){let C=L[U];for(let F in C){let B=C[F];for(let V in B)u(B[V].object),delete B[V];delete C[F]}}delete n[I.id]}function w(I){for(let L in n){let U=n[L];for(let C in U){let F=U[C];if(F[I.id]===void 0)continue;let B=F[I.id];for(let V in B)u(B[V].object),delete B[V];delete F[I.id]}}}function x(I){for(let L in n){let U=n[L],C=I.isInstancedMesh===!0?I.id:0,F=U[C];if(F!==void 0){for(let B in F){let V=F[B];for(let Y in V)u(V[Y].object),delete V[Y];delete F[B]}delete U[C],Object.keys(U).length===0&&delete n[L]}}}function A(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function y_(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function M_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==ci&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let x=w===zt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==hn&&w!==ji&&!x&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Xe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:y,maxSamples:S,samples:M}}function S_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new In,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{let _=r?0:n,E=_*4,y=m.clippingState||null;l.value=y,y=u(g,h,E,f);for(let S=0;S!==E;++S)y[S]=t[S];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){let v=d!==null?d.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let m=f+v*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,y=f;E!==v;++E,y+=4)a.copy(d[E]).applyMatrix4(_,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}var ra=4,b_=6,w_=20,T_=256,So=new Dn,dp=new je,Yu=null,$u=0,Ku=0,Zu=!1,E_=new D,or=new D,Vc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=E_}=r;Yu=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yu,$u,Ku),this._renderer.xr.enabled=Zu,e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ks||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yu=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:zt,format:ci,colorSpace:Oa,depthBuffer:!1},s=fp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=A_(r)),this._blurMaterial=C_(r,e,t),this._ggxMaterial=R_(r,e,t)}return s}_compileMaterial(e){let t=new Je(new vt,e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,n,s,r){let l=new gi(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(dp),d.toneMapping=li,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Je(new Jr,new Fn({name:"PMREM.Background",side:Vi,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,p=v.material,m=!1,_=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,m=!0):(p.color.copy(dp),m=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));let S=this._cubeSize;sa(s,y*S,E>2?S:0,S,S),d.setRenderTarget(s),m&&d.render(v,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ks||e.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;sa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,So)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:g}=this,v=this._sizeLods[n],p=3*v*(n>g-ra?n-g+ra:0),m=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,sa(r,p,m,3*v,2*v),s.setRenderTarget(r),s.render(o,So),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,sa(e,p,m,3*v,2*v),s.setRenderTarget(e),s.render(o,So)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-ra?s-this._lodMax+ra:0),h=4*(this._cubeSize-u);sa(t,d,h,3*u,2*u),a.setRenderTarget(t),a.render(l,So)}};function A_(i){let e=[],t=[],n=i,s=i-ra+1+b_;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,g=new Float32Array(f*h*d),v=new Float32Array(f*h*d);for(let m=0;m<d;m++){let _=m%3*2/3-1,E=m>2?0:-1,y=[_,E,0,_+2/3,E,0,_+2/3,E+1,0,_,E,0,_+2/3,E+1,0,_,E+1,0];g.set(y,f*h*m);for(let S=0;S<h;S++){let M=u[S*2]*2-1,w=u[S*2+1]*2-1;m===0?or.set(1,w,M):m===1?or.set(-M,1,-w):m===2?or.set(-M,w,1):m===3?or.set(-1,w,-M):m===4?or.set(-M,-1,w):or.set(M,w,-1),or.toArray(v,(m*h+S)*f)}}let p=new vt;p.setAttribute("position",new gt(g,f)),p.setAttribute("outputDirection",new gt(v,f)),t.push(new Je(p,null)),n>ra&&n--}return{lodMeshes:t,sizeLods:e}}function fp(i,e,t){let n=new Ut(i,e,t);return n.texture.mapping=ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function R_(i,e,t){return new De({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:T_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function C_(i,e,t){return new De({name:"SphericalGaussianBlur",defines:{SAMPLES:w_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function pp(){return new De({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function mp(){return new De({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

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
			`},s=new Jr(5,5,5),r=new De({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vi,blending:Ti});r.uniforms.tEquirect.value=t;let a=new Je(s,r),o=t.minFilter;return t.minFilter===zs&&(t.minFilter=qt),new Kl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function P_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Ql||f===ec)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let v=new Gc(g.height);return v.fromEquirectangularTexture(i,h),e.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===Ql||f===ec,v=f===ks||f===rr;if(g||v){let p=t.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Vc(i)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{let _=h.image;return g&&_&&_.height>0||v&&_&&l(_)?(n===null&&(n=new Vc(i)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,f){return f===Ql?h.mapping=ks:f===ec&&(h.mapping=rr),h}function l(h){let f=0,g=6;for(let v=0;v<g;v++)h[v]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function I_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&nr("WebGLRenderer: "+n+" extension not supported."),s}}}function L_(i,e,t,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,g=d.attributes.position,v=0;if(g===void 0)return;if(f!==null){let _=f.array;v=f.version;for(let E=0,y=_.length;E<y;E+=3){let S=_[E+0],M=_[E+1],w=_[E+2];h.push(S,M,M,w,w,S)}}else{let _=g.array;v=g.version;for(let E=0,y=_.length/3-1;E<y;E+=3){let S=E+0,M=E+1,w=E+2;h.push(S,M,M,w,w,S)}}let p=new(g.count>=65535?qa:Wa)(h,1);p.version=v;let m=r.get(d);m&&e.remove(m),r.set(d,p)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function F_(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),t.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let v=0;for(let p=0;p<f;p++)v+=h[p];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function D_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function U_(i,e,t){let n=new WeakMap,s=new We;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let A=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let y=o.attributes.position.count*E,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let M=new Float32Array(y*S*4*d),w=new Ha(M,y,S,d);w.type=ji,w.needsUpdate=!0;let x=E*4;for(let R=0;R<d;R++){let I=p[R],L=m[R],U=_[R],C=y*S*4*R;for(let F=0;F<I.count;F++){let B=F*x;f===!0&&(s.fromBufferAttribute(I,F),M[C+B+0]=s.x,M[C+B+1]=s.y,M[C+B+2]=s.z,M[C+B+3]=0),g===!0&&(s.fromBufferAttribute(L,F),M[C+B+4]=s.x,M[C+B+5]=s.y,M[C+B+6]=s.z,M[C+B+7]=0),v===!0&&(s.fromBufferAttribute(U,F),M[C+B+8]=s.x,M[C+B+9]=s.y,M[C+B+10]=s.z,M[C+B+11]=U.itemSize===4?s.w:1)}}h={count:d,texture:w,size:new ye(y,S)},n.set(o,h),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function N_(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var O_={[no]:"LINEAR_TONE_MAPPING",[so]:"REINHARD_TONE_MAPPING",[ro]:"CINEON_TONE_MAPPING",[ao]:"ACES_FILMIC_TONE_MAPPING",[lo]:"AGX_TONE_MAPPING",[co]:"NEUTRAL_TONE_MAPPING",[oo]:"CUSTOM_TONE_MAPPING"};function B_(i,e,t,n,s,r){let a=new Ut(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new vt;c.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new bt([0,2,0,0,2,0],2));let u=new jr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Je(c,u),h=new Dn(-1,1,1,-1,0,1),f=null,g=null,v=!1,p,m=null,_=[],E=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),l!==null&&l.setSize(y,S);for(let M=0;M<_.length;M++){let w=_[M];w.setSize&&w.setSize(y,S)}},this.setEffects=function(y){_=y,E=_.length>0&&_[0].isRenderPass===!0;let S=a.width,M=a.height;_.length>0&&o===null&&(o=new Ut(S,M,{type:zt,depthBuffer:!1,stencilBuffer:!1}),l=new Ut(S,M,{type:zt,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<_.length;w++){let x=_[w];x.setSize&&x.setSize(S,M)}},this.begin=function(y,S){if(v||y.toneMapping===li&&_.length===0)return!1;if(m=S,S!==null){let M=S.width,w=S.height;(a.width!==M||a.height!==w)&&this.setSize(M,w)}return E===!1&&y.setRenderTarget(a),p=y.toneMapping,y.toneMapping=li,!0},this.hasRenderPass=function(){return E},this.end=function(y,S){y.toneMapping=p,v=!0;let M=a,w=o;for(let x=0;x<_.length;x++){let A=_[x];A.enabled!==!1&&(A.render(y,w,M,S),A.needsSwap!==!1&&(M=w,w=w===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,u.defines={},ct.getTransfer(f)===St&&(u.defines.SRGB_TRANSFER="");let x=O_[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(m),y.render(d,h),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Up=new Ki,Qu=new Ds(1,1),Np=new Ha,Op=new Pl,Bp=new Ka,gp=[],vp=[],xp=new Float32Array(16),_p=new Float32Array(9),yp=new Float32Array(4);function oa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=gp[s];if(r===void 0&&(r=new Float32Array(s),gp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function hi(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ui(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xc(i,e){let t=vp[e];t===void 0&&(t=new Int32Array(e),vp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function k_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hi(t,e))return;i.uniform2fv(this.addr,e),ui(t,e)}}function H_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hi(t,e))return;i.uniform3fv(this.addr,e),ui(t,e)}}function V_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hi(t,e))return;i.uniform4fv(this.addr,e),ui(t,e)}}function G_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hi(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ui(t,e)}else{if(hi(t,n))return;yp.set(n),i.uniformMatrix2fv(this.addr,!1,yp),ui(t,n)}}function W_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hi(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ui(t,e)}else{if(hi(t,n))return;_p.set(n),i.uniformMatrix3fv(this.addr,!1,_p),ui(t,n)}}function q_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hi(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ui(t,e)}else{if(hi(t,n))return;xp.set(n),i.uniformMatrix4fv(this.addr,!1,xp),ui(t,n)}}function X_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hi(t,e))return;i.uniform2iv(this.addr,e),ui(t,e)}}function $_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hi(t,e))return;i.uniform3iv(this.addr,e),ui(t,e)}}function K_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hi(t,e))return;i.uniform4iv(this.addr,e),ui(t,e)}}function Z_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function J_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hi(t,e))return;i.uniform2uiv(this.addr,e),ui(t,e)}}function j_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hi(t,e))return;i.uniform3uiv(this.addr,e),ui(t,e)}}function Q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hi(t,e))return;i.uniform4uiv(this.addr,e),ui(t,e)}}function ey(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qu.compareFunction=t.isReversedDepthBuffer()?kc:Bc,r=Qu):r=Up,t.setTexture2D(e||r,s)}function ty(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Op,s)}function iy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Bp,s)}function ny(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Np,s)}function sy(i){switch(i){case 5126:return k_;case 35664:return z_;case 35665:return H_;case 35666:return V_;case 35674:return G_;case 35675:return W_;case 35676:return q_;case 5124:case 35670:return X_;case 35667:case 35671:return Y_;case 35668:case 35672:return $_;case 35669:case 35673:return K_;case 5125:return Z_;case 36294:return J_;case 36295:return j_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return ey;case 35679:case 36299:case 36307:return ty;case 35680:case 36300:case 36308:case 36293:return iy;case 36289:case 36303:case 36311:case 36292:return ny}}function ry(i,e){i.uniform1fv(this.addr,e)}function ay(i,e){let t=oa(e,this.size,2);i.uniform2fv(this.addr,t)}function oy(i,e){let t=oa(e,this.size,3);i.uniform3fv(this.addr,t)}function ly(i,e){let t=oa(e,this.size,4);i.uniform4fv(this.addr,t)}function cy(i,e){let t=oa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hy(i,e){let t=oa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function uy(i,e){let t=oa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function dy(i,e){i.uniform1iv(this.addr,e)}function fy(i,e){i.uniform2iv(this.addr,e)}function py(i,e){i.uniform3iv(this.addr,e)}function my(i,e){i.uniform4iv(this.addr,e)}function gy(i,e){i.uniform1uiv(this.addr,e)}function vy(i,e){i.uniform2uiv(this.addr,e)}function xy(i,e){i.uniform3uiv(this.addr,e)}function _y(i,e){i.uniform4uiv(this.addr,e)}function yy(i,e,t){let n=this.cache,s=e.length,r=Xc(t,s);hi(n,r)||(i.uniform1iv(this.addr,r),ui(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Qu:a=Up;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function My(i,e,t){let n=this.cache,s=e.length,r=Xc(t,s);hi(n,r)||(i.uniform1iv(this.addr,r),ui(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Op,r[a])}function Sy(i,e,t){let n=this.cache,s=e.length,r=Xc(t,s);hi(n,r)||(i.uniform1iv(this.addr,r),ui(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Bp,r[a])}function by(i,e,t){let n=this.cache,s=e.length,r=Xc(t,s);hi(n,r)||(i.uniform1iv(this.addr,r),ui(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Np,r[a])}function wy(i){switch(i){case 5126:return ry;case 35664:return ay;case 35665:return oy;case 35666:return ly;case 35674:return cy;case 35675:return hy;case 35676:return uy;case 5124:case 35670:return dy;case 35667:case 35671:return fy;case 35668:case 35672:return py;case 35669:case 35673:return my;case 5125:return gy;case 36294:return vy;case 36295:return xy;case 36296:return _y;case 35678:case 36198:case 36298:case 36306:case 35682:return yy;case 35679:case 36299:case 36307:return My;case 35680:case 36300:case 36308:case 36293:return Sy;case 36289:case 36303:case 36311:case 36292:return by}}var ed=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sy(t.type)}},td=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wy(t.type)}},id=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ju=/(\w+)(\])?(\[|\.)?/g;function Mp(i,e){i.seq.push(e),i.map[e.id]=e}function Ty(i,e,t){let n=i.name,s=n.length;for(Ju.lastIndex=0;;){let r=Ju.exec(n),a=Ju.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Mp(t,c===void 0?new ed(o,i,e):new td(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new id(o),Mp(t,d)),t=d}}}var aa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Ty(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Sp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ey=37297,Ay=0;function Ry(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var bp=new tt;function Cy(i){ct._getMatrix(bp,ct.workingColorSpace,i);let e=`mat3( ${bp.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case Ba:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function wp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ry(i.getShaderSource(e),o)}else return r}function Py(i,e){let t=Cy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Iy={[no]:"Linear",[so]:"Reinhard",[ro]:"Cineon",[ao]:"ACESFilmic",[lo]:"AgX",[co]:"Neutral",[oo]:"Custom"};function Ly(i,e){let t=Iy[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Hc=new D;function Fy(){ct.getLuminanceCoefficients(Hc);let i=Hc.x.toFixed(4),e=Hc.y.toFixed(4),t=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function Uy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ny(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function wo(i){return i!==""}function Tp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ep(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function nd(i){return i.replace(Oy,ky)}var By=new Map;function ky(i,e){let t=rt[e];if(t===void 0){let n=By.get(e);if(n!==void 0)t=rt[n],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return nd(t)}var zy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ap(i){return i.replace(zy,Hy)}function Hy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Vy={[to]:"SHADOWMAP_TYPE_PCF",[Qr]:"SHADOWMAP_TYPE_VSM"};function Gy(i){return Vy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wy={[ks]:"ENVMAP_TYPE_CUBE",[rr]:"ENVMAP_TYPE_CUBE",[ho]:"ENVMAP_TYPE_CUBE_UV"};function qy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Wy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Xy={[rr]:"ENVMAP_MODE_REFRACTION"};function Yy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Xy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $y={[Eu]:"ENVMAP_BLENDING_MULTIPLY",[Xf]:"ENVMAP_BLENDING_MIX",[Yf]:"ENVMAP_BLENDING_ADD"};function Ky(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":$y[i.combine]||"ENVMAP_BLENDING_NONE"}function Zy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Jy(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Gy(t),c=qy(t),u=Yy(t),d=Ky(t),h=Zy(t),f=Dy(t),g=Uy(r),v=s.createProgram(),p,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wo).join(`
`),m.length>0&&(m+=`
`)):(p=[Rp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),m=[Rp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?rt.tonemapping_pars_fragment:"",t.toneMapping!==li?Ly("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Py("linearToOutputTexel",t.outputColorSpace),Fy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wo).join(`
`)),a=nd(a),a=Tp(a,t),a=Ep(a,t),o=nd(o),o=Tp(o,t),o=Ep(o,t),a=Ap(a),o=Ap(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=_+p+a,y=_+m+o,S=Sp(s,s.VERTEX_SHADER,E),M=Sp(s,s.FRAGMENT_SHADER,y);s.attachShader(v,S),s.attachShader(v,M),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(I){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(v)||"",U=s.getShaderInfoLog(S)||"",C=s.getShaderInfoLog(M)||"",F=L.trim(),B=U.trim(),V=C.trim(),Y=!0,N=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,M);else{let k=wp(s,S,"vertex"),X=wp(s,M,"fragment");Ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+k+`
`+X)}else F!==""?Xe("WebGLProgram: Program Info Log:",F):(B===""||V==="")&&(N=!1);N&&(I.diagnostics={runnable:Y,programLog:F,vertexShader:{log:B,prefix:p},fragmentShader:{log:V,prefix:m}})}s.deleteShader(S),s.deleteShader(M),x=new aa(s,v),A=Ny(s,v)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(v,Ey)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ay++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=M,this}var jy=0,sd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rd(e),t.set(e,n)),n}},rd=class{constructor(e){this.id=jy++,this.code=e,this.usedTimes=0}};function Qy(i){return i===Vs||i===vo||i===xo}function e1(i,e,t,n,s,r){let a=new Va,o=new sd,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,A,R,I,L,U){let C=I.fog,F=L.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=e.get(x.envMap||B,V),N=Y&&Y.mapping===ho?Y.image.height:null,k=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Xe("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let X=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,j=X!==void 0?X.length:0,J=0;F.morphAttributes.position!==void 0&&(J=1),F.morphAttributes.normal!==void 0&&(J=2),F.morphAttributes.color!==void 0&&(J=3);let Re,Ce,Fe,Q;if(k){let Lt=Jn[k];Re=Lt.vertexShader,Ce=Lt.fragmentShader}else{Re=x.vertexShader,Ce=x.fragmentShader;let Lt=o.getVertexShaderStage(x),Mt=o.getFragmentShaderStage(x);o.update(x,Lt,Mt),Fe=Lt.id,Q=Mt.id}let ie=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Pe=L.isInstancedMesh===!0,Me=L.isBatchedMesh===!0,Ze=!!x.map,Qe=!!x.matcap,we=!!Y,Ge=!!x.aoMap,Ue=!!x.lightMap,Ne=!!x.bumpMap&&x.wireframe===!1,dt=!!x.normalMap,Gt=!!x.displacementMap,oi=!!x.emissiveMap,Dt=!!x.metalnessMap,$t=!!x.roughnessMap,z=x.anisotropy>0,It=x.clearcoat>0,yt=x.dispersion>0,P=x.retroreflectivity>0,b=x.iridescence>0,G=x.sheen>0,Z=x.transmission>0,ee=z&&!!x.anisotropyMap,le=It&&!!x.clearcoatMap,he=It&&!!x.clearcoatNormalMap,te=It&&!!x.clearcoatRoughnessMap,se=b&&!!x.iridescenceMap,ue=b&&!!x.iridescenceThicknessMap,Be=G&&!!x.sheenColorMap,pe=G&&!!x.sheenRoughnessMap,de=!!x.specularMap,ke=!!x.specularColorMap,qe=!!x.specularIntensityMap,et=Z&&!!x.transmissionMap,H=Z&&!!x.thicknessMap,me=!!x.gradientMap,ne=!!x.alphaMap,ge=x.alphaTest>0,Se=!!x.alphaHash,ae=!!x.extensions,Ve=li;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ve=i.toneMapping);let Ie={shaderID:k,shaderType:x.type,shaderName:x.name,vertexShader:Re,fragmentShader:Ce,defines:x.defines,customVertexShaderID:Fe,customFragmentShaderID:Q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Me,batchingColor:Me&&L._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&L.instanceColor!==null,instancingMorph:Pe&&L.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ze,matcap:Qe,envMap:we,envMapMode:we&&Y.mapping,envMapCubeUVHeight:N,aoMap:Ge,lightMap:Ue,bumpMap:Ne,normalMap:dt,displacementMap:Gt,emissiveMap:oi,normalMapObjectSpace:dt&&x.normalMapType===Zf,normalMapTangentSpace:dt&&x.normalMapType===Uu,packedNormalMap:dt&&x.normalMapType===Uu&&Qy(x.normalMap.format),metalnessMap:Dt,roughnessMap:$t,anisotropy:z,anisotropyMap:ee,clearcoat:It,clearcoatMap:le,clearcoatNormalMap:he,clearcoatRoughnessMap:te,dispersion:yt,retroreflection:P,iridescence:b,iridescenceMap:se,iridescenceThicknessMap:ue,sheen:G,sheenColorMap:Be,sheenRoughnessMap:pe,specularMap:de,specularColorMap:ke,specularIntensityMap:qe,transmission:Z,transmissionMap:et,thicknessMap:H,gradientMap:me,opaque:x.transparent===!1&&x.blending===ea&&x.alphaToCoverage===!1,alphaMap:ne,alphaTest:ge,alphaHash:Se,combine:x.combine,mapUv:Ze&&g(x.map.channel),aoMapUv:Ge&&g(x.aoMap.channel),lightMapUv:Ue&&g(x.lightMap.channel),bumpMapUv:Ne&&g(x.bumpMap.channel),normalMapUv:dt&&g(x.normalMap.channel),displacementMapUv:Gt&&g(x.displacementMap.channel),emissiveMapUv:oi&&g(x.emissiveMap.channel),metalnessMapUv:Dt&&g(x.metalnessMap.channel),roughnessMapUv:$t&&g(x.roughnessMap.channel),anisotropyMapUv:ee&&g(x.anisotropyMap.channel),clearcoatMapUv:le&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:pe&&g(x.sheenRoughnessMap.channel),specularMapUv:de&&g(x.specularMap.channel),specularColorMapUv:ke&&g(x.specularColorMap.channel),specularIntensityMapUv:qe&&g(x.specularIntensityMap.channel),transmissionMapUv:et&&g(x.transmissionMap.channel),thicknessMapUv:H&&g(x.thicknessMap.channel),alphaMapUv:ne&&g(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(dt||z),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(Ze||ne),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&dt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:fe,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:J,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Ze&&x.map.isVideoTexture===!0&&ct.getTransfer(x.map.colorSpace)===St,decodeVideoTextureEmissive:oi&&x.emissiveMap.isVideoTexture===!0&&ct.getTransfer(x.emissiveMap.colorSpace)===St,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wi,flipSided:x.side===Vi,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&x.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function p(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)A.push(R),A.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(A,x),_(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function m(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function _(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function E(x){let A=f[x.type],R;if(A){let I=Jn[A];R=ds.clone(I.uniforms)}else R=x.uniforms;return R}function y(x,A){let R=u.get(A);return R!==void 0?++R.usedTimes:(R=new Jy(i,A,x,s),c.push(R),u.set(A,R)),R}function S(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function M(x){o.remove(x)}function w(){o.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:E,acquireProgram:y,releaseProgram:S,releaseShaderCache:M,programs:c,dispose:w}}function t1(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function i1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Cp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Pp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,v,p,m){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:p,group:m},i[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=g,_.materialVariant=a(h),_.groupOrder=v,_.renderOrder=h.renderOrder,_.z=p,_.group=m),e++,_}function l(h,f,g,v,p,m,_){_.reversedDepth===!0&&(p=-p);let E=o(h,f,g,v,p,m);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):t.push(E)}function c(h,f,g,v,p,m){let _=o(h,f,g,v,p,m);g.transmission>0?n.unshift(_):g.transparent===!0?s.unshift(_):t.unshift(_)}function u(h,f){t.length>1&&t.sort(h||i1),n.length>1&&n.sort(f||Cp),s.length>1&&s.sort(f||Cp)}function d(){for(let h=e,f=i.length;h<f;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function n1(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Pp,i.set(n,[a])):s>=r.length?(a=new Pp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function s1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new je};break;case"SpotLight":t={position:new D,direction:new D,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function r1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var a1=0;function o1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function l1(i){let e=new s1,t=r1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new Rt,a=new Rt;function o(c){let u=0,d=0,h=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,_=0,E=0,y=0,S=0,M=0,w=0,x=0,A=0,R=0;c.sort(o1);for(let L=0,U=c.length;L<U;L++){let C=c[L],F=C.color,B=C.intensity,V=C.distance,Y=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Vs?Y=C.shadow.map.texture:Y=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=F.r*B,d+=F.g*B,h+=F.b*B;else if(C.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(C.sh.coefficients[N],B);R++}else if(C.isSunLight){let N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let k=C.shadow,X=t.get(C);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[g]=X,n.sunShadowMap[g]=Y;let j=k.getViewportCount();for(let J=0;J<j;J++)n.sunShadowMatrix[v+J]=k.getMatrix(J),n.sunShadowCascade[v+J]=k._cascadeData[J];v+=j,g++}n.sun[f]=N,f++}else if(C.isDirectionalLight){let N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let k=C.shadow,X=t.get(C);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize=k.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=C.shadow.matrix,S++}n.directional[p]=N,p++}else if(C.isSpotLight){let N=e.get(C);N.position.setFromMatrixPosition(C.matrixWorld),N.color.copy(F).multiplyScalar(B),N.distance=V,N.coneCos=Math.cos(C.angle),N.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),N.decay=C.decay,n.spot[_]=N;let k=C.shadow;if(C.map&&(n.spotLightMap[x]=C.map,x++,k.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[_]=k.matrix,C.castShadow){let X=t.get(C);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize=k.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=Y,w++}_++}else if(C.isRectAreaLight){let N=e.get(C);N.color.copy(F).multiplyScalar(B),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),n.rectArea[E]=N,E++}else if(C.isPointLight){let N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),N.distance=C.distance,N.decay=C.decay,C.castShadow){let k=C.shadow,X=t.get(C);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize=k.mapSize,X.shadowCameraNear=k.camera.near,X.shadowCameraFar=k.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=Y,n.pointShadowMatrix[m]=C.shadow.matrix,M++}n.point[m]=N,m++}else if(C.isHemisphereLight){let N=e.get(C);N.skyColor.copy(C.color).multiplyScalar(B),N.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[y]=N,y++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let I=n.hash;(I.sunLength!==f||I.directionalLength!==p||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==E||I.hemiLength!==y||I.numSunShadows!==g||I.numDirectionalShadows!==S||I.numPointShadows!==M||I.numSpotShadows!==w||I.numSpotMaps!==x||I.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=_,n.rectArea.length=E,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+x-A,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,I.sunLength=f,I.directionalLength=p,I.pointLength=m,I.spotLength=_,I.rectAreaLength=E,I.hemiLength=y,I.numSunShadows=g,I.numDirectionalShadows=S,I.numPointShadows=M,I.numSpotShadows=w,I.numSpotMaps=x,I.numLightProbes=R,n.version=a1++)}function l(c,u){let d=0,h=0,f=0,g=0,v=0,p=0,m=u.matrixWorldInverse;for(let _=0,E=c.length;_<E;_++){let y=c[_];if(y.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(y.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function Ip(i){let e=new l1(i),t=[],n=[],s=[];function r(h){d.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function c1(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Ip(i),e.set(s,[o])):r>=a.length?(o=new Ip(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var h1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u1=`uniform sampler2D shadow_pass;
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
}`,d1=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],f1=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Lp=new Rt,bo=new D,ju=new D;function p1(i,e,t){let n=new Ya,s=new ye,r=new ye,a=new We,o=new Ol,l=new Bl,c={},u=t.maxTextureSize,d={[Bs]:Vi,[Vi]:Bs,[wi]:wi},h=new De({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:h1,fragmentShader:u1}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new vt;g.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Je(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=to;let m=this.type;this.render=function(M,w,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;this.type===Pf&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=to);let A=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Ti),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let U=m!==this.type;U&&w.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(F=>F.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,F=M.length;C<F;C++){let B=M[C],V=B.shadow;if(V===void 0){Xe("WebGLShadowMap:",B,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let Y=V.getFrameExtents();s.multiply(Y),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,V.mapSize.y=r.y));let N=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=N,V.map===null||U===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Qr){if(B.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ut(s.x,s.y,{format:Vs,type:zt,minFilter:qt,magFilter:qt,generateMipmaps:!1}),V.map.texture.name=B.name+".shadowMap",V.map.depthTexture=new Ds(s.x,s.y,ji),V.map.depthTexture.name=B.name+".shadowMapDepth",V.map.depthTexture.format=Yn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=jt,V.map.depthTexture.magFilter=jt}else B.isPointLight?(V.map=new Gc(s.x),V.map.depthTexture=new Nl(s.x,Nn)):(V.map=new Ut(s.x,s.y),V.map.depthTexture=new Ds(s.x,s.y,Nn)),V.map.depthTexture.name=B.name+".shadowMap",V.map.depthTexture.format=Yn,this.type===to?(V.map.depthTexture.compareFunction=N?kc:Bc,V.map.depthTexture.minFilter=qt,V.map.depthTexture.magFilter=qt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=jt,V.map.depthTexture.magFilter=jt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let k=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();B.isPointLight!==!0&&V.updateMatrices(B,x);for(let X=0;X<k;X++){let j=V.getCamera(X);if(B.isPointLight){let J=V.camera,Re=V.matrix,Ce=B.distance||J.far;Ce!==J.far&&(J.far=Ce,J.updateProjectionMatrix()),bo.setFromMatrixPosition(B.matrixWorld),J.position.copy(bo),ju.copy(J.position),ju.add(d1[X]),J.up.copy(f1[X]),J.lookAt(ju),J.updateMatrixWorld(),Re.makeTranslation(-bo.x,-bo.y,-bo.z),Lp.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Lp,J.coordinateSystem,J.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,X),i.clear();else{X===0&&(i.setRenderTarget(V.map),i.clear());let J=V.getViewport(X);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),L.viewport(a)}n=V.getFrustum(X),y(w,x,j,B,this.type)}V.isPointLightShadow!==!0&&this.type===Qr&&_(V,x),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(A,R,I)};function _(M,w){let x=e.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new Ut(s.x,s.y,{format:Vs,type:zt}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,x,h,v,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,x,f,v,null)}function E(M,w,x,A){let R=null,I=x.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)R=I;else if(R=x.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let L=R.uuid,U=w.uuid,C=c[L];C===void 0&&(C={},c[L]=C);let F=C[U];F===void 0&&(F=R.clone(),C[U]=F,w.addEventListener("dispose",S)),R=F}if(R.visible=w.visible,R.wireframe=w.wireframe,A===Qr?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:d[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=i.properties.get(R);L.light=x}return R}function y(M,w,x,A,R){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===Qr)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,M.matrixWorld);let U=e.update(M),C=M.material;if(Array.isArray(C)){let F=U.groups;for(let B=0,V=F.length;B<V;B++){let Y=F[B],N=C[Y.materialIndex];if(N&&N.visible){let k=E(M,N,A,R);M.onBeforeShadow(i,M,w,x,U,k,Y),i.renderBufferDirect(x,null,U,k,M,Y),M.onAfterShadow(i,M,w,x,U,k,Y)}}}else if(C.visible){let F=E(M,C,A,R);M.onBeforeShadow(i,M,w,x,U,F,null),i.renderBufferDirect(x,null,U,F,M,null),M.onAfterShadow(i,M,w,x,U,F,null)}}let L=M.children;for(let U=0,C=L.length;U<C;U++)y(L[U],w,x,A,R)}function S(M){M.target.removeEventListener("dispose",S);for(let x in c){let A=c[x],R=M.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function m1(i,e){function t(){let H=!1,me=new We,ne=null,ge=new We(0,0,0,0);return{setMask:function(Se){ne!==Se&&!H&&(i.colorMask(Se,Se,Se,Se),ne=Se)},setLocked:function(Se){H=Se},setClear:function(Se,ae,Ve,Ie,Lt){Lt===!0&&(Se*=Ie,ae*=Ie,Ve*=Ie),me.set(Se,ae,Ve,Ie),ge.equals(me)===!1&&(i.clearColor(Se,ae,Ve,Ie),ge.copy(me))},reset:function(){H=!1,ne=null,ge.set(-1,0,0,0)}}}function n(){let H=!1,me=!1,ne=null,ge=null,Se=null;return{setReversed:function(ae){if(me!==ae){let Ve=e.get("EXT_clip_control");ae?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),me=ae;let Ie=Se;Se=null,this.setClear(Ie)}},getReversed:function(){return me},setTest:function(ae){ae?ie(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(ae){ne!==ae&&!H&&(i.depthMask(ae),ne=ae)},setFunc:function(ae){if(me&&(ae=lp[ae]),ge!==ae){switch(ae){case _l:i.depthFunc(i.NEVER);break;case yl:i.depthFunc(i.ALWAYS);break;case Ml:i.depthFunc(i.LESS);break;case Wr:i.depthFunc(i.LEQUAL);break;case Sl:i.depthFunc(i.EQUAL);break;case bl:i.depthFunc(i.GEQUAL);break;case wl:i.depthFunc(i.GREATER);break;case Tl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=ae}},setLocked:function(ae){H=ae},setClear:function(ae){Se!==ae&&(Se=ae,me&&(ae=1-ae),i.clearDepth(ae))},reset:function(){H=!1,ne=null,ge=null,Se=null,me=!1}}}function s(){let H=!1,me=null,ne=null,ge=null,Se=null,ae=null,Ve=null,Ie=null,Lt=null;return{setTest:function(Mt){H||(Mt?ie(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(Mt){me!==Mt&&!H&&(i.stencilMask(Mt),me=Mt)},setFunc:function(Mt,nn,sn){(ne!==Mt||ge!==nn||Se!==sn)&&(i.stencilFunc(Mt,nn,sn),ne=Mt,ge=nn,Se=sn)},setOp:function(Mt,nn,sn){(ae!==Mt||Ve!==nn||Ie!==sn)&&(i.stencilOp(Mt,nn,sn),ae=Mt,Ve=nn,Ie=sn)},setLocked:function(Mt){H=Mt},setClear:function(Mt){Lt!==Mt&&(i.clearStencil(Mt),Lt=Mt)},reset:function(){H=!1,me=null,ne=null,ge=null,Se=null,ae=null,Ve=null,Ie=null,Lt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],v=null,p=!1,m=null,_=null,E=null,y=null,S=null,M=null,w=null,x=new je(0,0,0),A=0,R=!1,I=null,L=null,U=null,C=null,F=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Y=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(N)[1]),V=Y>=1):N.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),V=Y>=2);let k=null,X={},j=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),Re=new We().fromArray(j),Ce=new We().fromArray(J);function Fe(H,me,ne,ge){let Se=new Uint8Array(4),ae=i.createTexture();i.bindTexture(H,ae),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<ne;Ve++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(me+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return ae}let Q={};Q[i.TEXTURE_2D]=Fe(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),a.setFunc(Wr),Ne(!1),dt(Su),ie(i.CULL_FACE),Ge(Ti);function ie(H){u[H]!==!0&&(i.enable(H),u[H]=!0)}function fe(H){u[H]!==!1&&(i.disable(H),u[H]=!1)}function Pe(H,me){return h[H]!==me?(i.bindFramebuffer(H,me),h[H]=me,H===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=me),H===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=me),!0):!1}function Me(H,me){let ne=g,ge=!1;if(H){ne=f.get(me),ne===void 0&&(ne=[],f.set(me,ne));let Se=H.textures;if(ne.length!==Se.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Ve=Se.length;ae<Ve;ae++)ne[ae]=i.COLOR_ATTACHMENT0+ae;ne.length=Se.length,ge=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,ge=!0);ge&&i.drawBuffers(ne)}function Ze(H){return v!==H?(i.useProgram(H),v=H,!0):!1}let Qe={[Gi]:i.FUNC_ADD,[If]:i.FUNC_SUBTRACT,[Lf]:i.FUNC_REVERSE_SUBTRACT};Qe[Ff]=i.MIN,Qe[Df]=i.MAX;let we={[jl]:i.ZERO,[Un]:i.ONE,[Uf]:i.SRC_COLOR,[Tu]:i.SRC_ALPHA,[Hf]:i.SRC_ALPHA_SATURATE,[kf]:i.DST_COLOR,[Of]:i.DST_ALPHA,[Nf]:i.ONE_MINUS_SRC_COLOR,[io]:i.ONE_MINUS_SRC_ALPHA,[zf]:i.ONE_MINUS_DST_COLOR,[Bf]:i.ONE_MINUS_DST_ALPHA,[Vf]:i.CONSTANT_COLOR,[Gf]:i.ONE_MINUS_CONSTANT_COLOR,[Wf]:i.CONSTANT_ALPHA,[qf]:i.ONE_MINUS_CONSTANT_ALPHA};function Ge(H,me,ne,ge,Se,ae,Ve,Ie,Lt,Mt){if(H===Ti){p===!0&&(fe(i.BLEND),p=!1);return}if(p===!1&&(ie(i.BLEND),p=!0),H!==Kn){if(H!==m||Mt!==R){if((_!==Gi||S!==Gi)&&(i.blendEquation(i.FUNC_ADD),_=Gi,S=Gi),Mt)switch(H){case ea:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xt:i.blendFunc(i.ONE,i.ONE);break;case bu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ke("WebGLState: Invalid blending: ",H);break}else switch(H){case ea:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case bu:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wu:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",H);break}E=null,y=null,M=null,w=null,x.set(0,0,0),A=0,m=H,R=Mt}return}Se=Se||me,ae=ae||ne,Ve=Ve||ge,(me!==_||Se!==S)&&(i.blendEquationSeparate(Qe[me],Qe[Se]),_=me,S=Se),(ne!==E||ge!==y||ae!==M||Ve!==w)&&(i.blendFuncSeparate(we[ne],we[ge],we[ae],we[Ve]),E=ne,y=ge,M=ae,w=Ve),(Ie.equals(x)===!1||Lt!==A)&&(i.blendColor(Ie.r,Ie.g,Ie.b,Lt),x.copy(Ie),A=Lt),m=H,R=!1}function Ue(H,me){H.side===wi?fe(i.CULL_FACE):ie(i.CULL_FACE);let ne=H.side===Vi;me&&(ne=!ne),Ne(ne),H.blending===ea&&H.transparent===!1?Ge(Ti):Ge(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);let ge=H.stencilWrite;o.setTest(ge),ge&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),oi(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(H){I!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),I=H)}function dt(H){H!==Rf?(ie(i.CULL_FACE),H!==L&&(H===Su?i.cullFace(i.BACK):H===Cf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),L=H}function Gt(H){H!==U&&(V&&i.lineWidth(H),U=H)}function oi(H,me,ne){H?(ie(i.POLYGON_OFFSET_FILL),(C!==me||F!==ne)&&(C=me,F=ne,a.getReversed()&&(me=-me),i.polygonOffset(me,ne))):fe(i.POLYGON_OFFSET_FILL)}function Dt(H){H?ie(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function $t(H){H===void 0&&(H=i.TEXTURE0+B-1),k!==H&&(i.activeTexture(H),k=H)}function z(H,me,ne){ne===void 0&&(k===null?ne=i.TEXTURE0+B-1:ne=k);let ge=X[ne];ge===void 0&&(ge={type:void 0,texture:void 0},X[ne]=ge),(ge.type!==H||ge.texture!==me)&&(k!==ne&&(i.activeTexture(ne),k=ne),i.bindTexture(H,me||Q[H]),ge.type=H,ge.texture=me)}function It(){let H=X[k];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function yt(){try{i.compressedTexImage2D(...arguments)}catch(H){Ke("WebGLState:",H)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(H){Ke("WebGLState:",H)}}function b(){try{i.texSubImage2D(...arguments)}catch(H){Ke("WebGLState:",H)}}function G(){try{i.texSubImage3D(...arguments)}catch(H){Ke("WebGLState:",H)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(H){Ke("WebGLState:",H)}}function ee(){try{i.compressedTexSubImage3D(...arguments)}catch(H){Ke("WebGLState:",H)}}function le(){try{i.texStorage2D(...arguments)}catch(H){Ke("WebGLState:",H)}}function he(){try{i.texStorage3D(...arguments)}catch(H){Ke("WebGLState:",H)}}function te(){try{i.texImage2D(...arguments)}catch(H){Ke("WebGLState:",H)}}function se(){try{i.texImage3D(...arguments)}catch(H){Ke("WebGLState:",H)}}function ue(H){return d[H]!==void 0?d[H]:i.getParameter(H)}function Be(H,me){d[H]!==me&&(i.pixelStorei(H,me),d[H]=me)}function pe(H){Re.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Re.copy(H))}function de(H){Ce.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Ce.copy(H))}function ke(H,me){let ne=c.get(me);ne===void 0&&(ne=new WeakMap,c.set(me,ne));let ge=ne.get(H);ge===void 0&&(ge=i.getUniformBlockIndex(me,H.name),ne.set(H,ge))}function qe(H,me){let ge=c.get(me).get(H);l.get(me)!==ge&&(i.uniformBlockBinding(me,ge,H.__bindingPointIndex),l.set(me,ge))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},k=null,X={},h={},f=new WeakMap,g=[],v=null,p=!1,m=null,_=null,E=null,y=null,S=null,M=null,w=null,x=new je(0,0,0),A=0,R=!1,I=null,L=null,U=null,C=null,F=null,Re.set(0,0,i.canvas.width,i.canvas.height),Ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:fe,bindFramebuffer:Pe,drawBuffers:Me,useProgram:Ze,setBlending:Ge,setMaterial:Ue,setFlipSided:Ne,setCullFace:dt,setLineWidth:Gt,setPolygonOffset:oi,setScissorTest:Dt,activeTexture:$t,bindTexture:z,unbindTexture:It,compressedTexImage2D:yt,compressedTexImage3D:P,texImage2D:te,texImage3D:se,pixelStorei:Be,getParameter:ue,updateUBOMapping:ke,uniformBlockBinding:qe,texStorage2D:le,texStorage3D:he,texSubImage2D:b,texSubImage3D:G,compressedTexSubImage2D:Z,compressedTexSubImage3D:ee,scissor:pe,viewport:de,reset:et}}function g1(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,b){return g?new OffscreenCanvas(P,b):za("canvas")}function p(P,b,G){let Z=1,ee=yt(P);if((ee.width>G||ee.height>G)&&(Z=G/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let le=Math.floor(Z*ee.width),he=Math.floor(Z*ee.height);h===void 0&&(h=v(le,he));let te=b?v(le,he):h;return te.width=le,te.height=he,te.getContext("2d").drawImage(P,0,0,le,he),Xe("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+le+"x"+he+")."),te}else return"data"in P&&Xe("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),P;return P}function m(P){return P.generateMipmaps}function _(P){i.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,b,G,Z,ee,le=!1){if(P!==null){if(i[P]!==void 0)return i[P];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let he;Z&&(he=e.get("EXT_texture_norm16"),he||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=b;if(b===i.RED&&(G===i.FLOAT&&(te=i.R32F),G===i.HALF_FLOAT&&(te=i.R16F),G===i.UNSIGNED_BYTE&&(te=i.R8),G===i.UNSIGNED_SHORT&&he&&(te=he.R16_EXT),G===i.SHORT&&he&&(te=he.R16_SNORM_EXT)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(te=i.R8UI),G===i.UNSIGNED_SHORT&&(te=i.R16UI),G===i.UNSIGNED_INT&&(te=i.R32UI),G===i.BYTE&&(te=i.R8I),G===i.SHORT&&(te=i.R16I),G===i.INT&&(te=i.R32I)),b===i.RG&&(G===i.FLOAT&&(te=i.RG32F),G===i.HALF_FLOAT&&(te=i.RG16F),G===i.UNSIGNED_BYTE&&(te=i.RG8),G===i.UNSIGNED_SHORT&&he&&(te=he.RG16_EXT),G===i.SHORT&&he&&(te=he.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(te=i.RG8UI),G===i.UNSIGNED_SHORT&&(te=i.RG16UI),G===i.UNSIGNED_INT&&(te=i.RG32UI),G===i.BYTE&&(te=i.RG8I),G===i.SHORT&&(te=i.RG16I),G===i.INT&&(te=i.RG32I)),b===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(te=i.RGB8UI),G===i.UNSIGNED_SHORT&&(te=i.RGB16UI),G===i.UNSIGNED_INT&&(te=i.RGB32UI),G===i.BYTE&&(te=i.RGB8I),G===i.SHORT&&(te=i.RGB16I),G===i.INT&&(te=i.RGB32I)),b===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),G===i.UNSIGNED_INT&&(te=i.RGBA32UI),G===i.BYTE&&(te=i.RGBA8I),G===i.SHORT&&(te=i.RGBA16I),G===i.INT&&(te=i.RGBA32I)),b===i.RGB&&(G===i.UNSIGNED_SHORT&&he&&(te=he.RGB16_EXT),G===i.SHORT&&he&&(te=he.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),b===i.RGBA){let se=le?Ba:ct.getTransfer(ee);G===i.FLOAT&&(te=i.RGBA32F),G===i.HALF_FLOAT&&(te=i.RGBA16F),G===i.UNSIGNED_BYTE&&(te=se===St?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&he&&(te=he.RGBA16_EXT),G===i.SHORT&&he&&(te=he.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function S(P,b){let G;return P?b===null||b===Nn||b===ia?G=i.DEPTH24_STENCIL8:b===ji?G=i.DEPTH32F_STENCIL8:b===ta&&(G=i.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Nn||b===ia?G=i.DEPTH_COMPONENT24:b===ji?G=i.DEPTH_COMPONENT32F:b===ta&&(G=i.DEPTH_COMPONENT16),G}function M(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==jt&&P.minFilter!==qt?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function w(P){let b=P.target;b.removeEventListener("dispose",w),A(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&d.delete(b)}function x(P){let b=P.target;b.removeEventListener("dispose",x),I(b)}function A(P){let b=n.get(P);if(b.__webglInit===void 0)return;let G=P.source,Z=f.get(G);if(Z){let ee=Z[b.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(P),Object.keys(Z).length===0&&f.delete(G)}n.remove(P)}function R(P){let b=n.get(P);i.deleteTexture(b.__webglTexture);let G=P.source,Z=f.get(G);delete Z[b.__cacheKey],a.memory.textures--}function I(P){let b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let ee=0;ee<b.__webglFramebuffer[Z].length;ee++)i.deleteFramebuffer(b.__webglFramebuffer[Z][ee]);else i.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)i.deleteFramebuffer(b.__webglFramebuffer[Z]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let G=P.textures;for(let Z=0,ee=G.length;Z<ee;Z++){let le=n.get(G[Z]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),a.memory.textures--),n.remove(G[Z])}n.remove(P)}let L=0;function U(){L=0}function C(){return L}function F(P){L=P}function B(){let P=L;return P>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,P}function V(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function Y(P,b){let G=n.get(P);if(P.isVideoTexture&&z(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){let Z=P.image;if(Z===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(G,P,b);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function N(P,b){let G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){fe(G,P,b);return}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function k(P,b){let G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){fe(G,P,b);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function X(P,b){let G=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&G.__version!==P.version){Pe(G,P,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}let j={[qr]:i.REPEAT,[zi]:i.CLAMP_TO_EDGE,[El]:i.MIRRORED_REPEAT},J={[jt]:i.NEAREST,[$f]:i.NEAREST_MIPMAP_NEAREST,[uo]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[tc]:i.LINEAR_MIPMAP_NEAREST,[zs]:i.LINEAR_MIPMAP_LINEAR},Re={[jf]:i.NEVER,[np]:i.ALWAYS,[Qf]:i.LESS,[Bc]:i.LEQUAL,[ep]:i.EQUAL,[kc]:i.GEQUAL,[tp]:i.GREATER,[ip]:i.NOTEQUAL};function Ce(P,b){if(b.type===ji&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===qt||b.magFilter===tc||b.magFilter===uo||b.magFilter===zs||b.minFilter===qt||b.minFilter===tc||b.minFilter===uo||b.minFilter===zs)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,j[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,j[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,j[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,J[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,J[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Re[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===jt||b.minFilter!==uo&&b.minFilter!==zs||b.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Fe(P,b){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",w));let Z=b.source,ee=f.get(Z);ee===void 0&&(ee={},f.set(Z,ee));let le=V(b);if(le!==P.__cacheKey){ee[le]===void 0&&(ee[le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ee[le].usedTimes++;let he=ee[P.__cacheKey];he!==void 0&&(ee[P.__cacheKey].usedTimes--,he.usedTimes===0&&R(b)),P.__cacheKey=le,P.__webglTexture=ee[le].texture}return G}function Q(P,b,G){return Math.floor(Math.floor(P/G)/b)}function ie(P,b,G,Z){let le=P.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,G,Z,b.data);else{le.sort((Be,pe)=>Be.start-pe.start);let he=0;for(let Be=1;Be<le.length;Be++){let pe=le[he],de=le[Be],ke=pe.start+pe.count,qe=Q(de.start,b.width,4),et=Q(pe.start,b.width,4);de.start<=ke+1&&qe===et&&Q(de.start+de.count-1,b.width,4)===qe?pe.count=Math.max(pe.count,de.start+de.count-pe.start):(++he,le[he]=de)}le.length=he+1;let te=t.getParameter(i.UNPACK_ROW_LENGTH),se=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let Be=0,pe=le.length;Be<pe;Be++){let de=le[Be],ke=Math.floor(de.start/4),qe=Math.ceil(de.count/4),et=ke%b.width,H=Math.floor(ke/b.width),me=qe,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,et),t.pixelStorei(i.UNPACK_SKIP_ROWS,H),t.texSubImage2D(i.TEXTURE_2D,0,et,H,me,ne,G,Z,b.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,te),t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function fe(P,b,G){let Z=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=i.TEXTURE_3D);let ee=Fe(P,b),le=b.source;t.bindTexture(Z,P.__webglTexture,i.TEXTURE0+G);let he=n.get(le);if(le.version!==he.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ne=ct.getPrimaries(ct.workingColorSpace),ge=b.colorSpace===us?null:ct.getPrimaries(b.colorSpace),Se=b.colorSpace===us||ne===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let se=p(b.image,!1,s.maxTextureSize);se=It(b,se);let ue=r.convert(b.format,b.colorSpace),Be=r.convert(b.type),pe=y(b.internalFormat,ue,Be,b.normalized,b.colorSpace,b.isVideoTexture);Ce(Z,b);let de,ke=b.mipmaps,qe=b.isVideoTexture!==!0,et=he.__version===void 0||ee===!0,H=le.dataReady,me=M(b,se);if(b.isDepthTexture)pe=S(b.format===Hs,b.type),et&&(qe?t.texStorage2D(i.TEXTURE_2D,1,pe,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,pe,se.width,se.height,0,ue,Be,null));else if(b.isDataTexture)if(ke.length>0){qe&&et&&t.texStorage2D(i.TEXTURE_2D,me,pe,ke[0].width,ke[0].height);for(let ne=0,ge=ke.length;ne<ge;ne++)de=ke[ne],qe?H&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,de.width,de.height,ue,Be,de.data):t.texImage2D(i.TEXTURE_2D,ne,pe,de.width,de.height,0,ue,Be,de.data);b.generateMipmaps=!1}else qe?(et&&t.texStorage2D(i.TEXTURE_2D,me,pe,se.width,se.height),H&&ie(b,se,ue,Be)):t.texImage2D(i.TEXTURE_2D,0,pe,se.width,se.height,0,ue,Be,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){qe&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,pe,ke[0].width,ke[0].height,se.depth);for(let ne=0,ge=ke.length;ne<ge;ne++)if(de=ke[ne],b.format!==ci)if(ue!==null)if(qe){if(H)if(b.layerUpdates.size>0){let Se=Hu(de.width,de.height,b.format,b.type);for(let ae of b.layerUpdates){let Ve=de.data.subarray(ae*Se/de.data.BYTES_PER_ELEMENT,(ae+1)*Se/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,ae,de.width,de.height,1,ue,Ve)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,se.depth,ue,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,pe,de.width,de.height,se.depth,0,de.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?H&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,se.depth,ue,Be,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,pe,de.width,de.height,se.depth,0,ue,Be,de.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{qe&&et&&t.texStorage2D(i.TEXTURE_2D,me,pe,ke[0].width,ke[0].height);for(let ne=0,ge=ke.length;ne<ge;ne++)de=ke[ne],b.format!==ci?ue!==null?qe?H&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,de.width,de.height,ue,de.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,pe,de.width,de.height,0,de.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?H&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,de.width,de.height,ue,Be,de.data):t.texImage2D(i.TEXTURE_2D,ne,pe,de.width,de.height,0,ue,Be,de.data)}else if(b.isDataArrayTexture)if(qe){if(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,pe,se.width,se.height,se.depth),H)if(b.layerUpdates.size>0){let ne=Hu(se.width,se.height,b.format,b.type);for(let ge of b.layerUpdates){let Se=se.data.subarray(ge*ne/se.data.BYTES_PER_ELEMENT,(ge+1)*ne/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,se.width,se.height,1,ue,Be,Se)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ue,Be,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,se.width,se.height,se.depth,0,ue,Be,se.data);else if(b.isData3DTexture)qe?(et&&t.texStorage3D(i.TEXTURE_3D,me,pe,se.width,se.height,se.depth),H&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ue,Be,se.data)):t.texImage3D(i.TEXTURE_3D,0,pe,se.width,se.height,se.depth,0,ue,Be,se.data);else if(b.isFramebufferTexture){if(et)if(qe)t.texStorage2D(i.TEXTURE_2D,me,pe,se.width,se.height);else{let ne=se.width,ge=se.height;for(let Se=0;Se<me;Se++)t.texImage2D(i.TEXTURE_2D,Se,pe,ne,ge,0,ue,Be,null),ne>>=1,ge>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),se.parentNode!==ne){ne.appendChild(se),d.add(b),ne.onpaint=ge=>{let Se=ge.changedElements;for(let ae of d)Se.includes(ae.image)&&(ae.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,se);else{let Se=i.RGBA,ae=i.RGBA,Ve=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Se,ae,Ve,se)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ke.length>0){if(qe&&et){let ne=yt(ke[0]);t.texStorage2D(i.TEXTURE_2D,me,pe,ne.width,ne.height)}for(let ne=0,ge=ke.length;ne<ge;ne++)de=ke[ne],qe?H&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ue,Be,de):t.texImage2D(i.TEXTURE_2D,ne,pe,ue,Be,de);b.generateMipmaps=!1}else if(qe){if(et){let ne=yt(se);t.texStorage2D(i.TEXTURE_2D,me,pe,ne.width,ne.height)}H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Be,se)}else t.texImage2D(i.TEXTURE_2D,0,pe,ue,Be,se);m(b)&&_(Z),he.__version=le.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Pe(P,b,G){if(b.image.length!==6)return;let Z=Fe(P,b),ee=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+G);let le=n.get(ee);if(ee.version!==le.__version||Z===!0){t.activeTexture(i.TEXTURE0+G);let he=ct.getPrimaries(ct.workingColorSpace),te=b.colorSpace===us?null:ct.getPrimaries(b.colorSpace),se=b.colorSpace===us||he===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let ue=b.isCompressedTexture||b.image[0].isCompressedTexture,Be=b.image[0]&&b.image[0].isDataTexture,pe=[];for(let ae=0;ae<6;ae++)!ue&&!Be?pe[ae]=p(b.image[ae],!0,s.maxCubemapSize):pe[ae]=Be?b.image[ae].image:b.image[ae],pe[ae]=It(b,pe[ae]);let de=pe[0],ke=r.convert(b.format,b.colorSpace),qe=r.convert(b.type),et=y(b.internalFormat,ke,qe,b.normalized,b.colorSpace),H=b.isVideoTexture!==!0,me=le.__version===void 0||Z===!0,ne=ee.dataReady,ge=M(b,de);Ce(i.TEXTURE_CUBE_MAP,b);let Se;if(ue){H&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,et,de.width,de.height);for(let ae=0;ae<6;ae++){Se=pe[ae].mipmaps;for(let Ve=0;Ve<Se.length;Ve++){let Ie=Se[Ve];b.format!==ci?ke!==null?H?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,0,0,Ie.width,Ie.height,ke,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,et,Ie.width,Ie.height,0,Ie.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,0,0,Ie.width,Ie.height,ke,qe,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,et,Ie.width,Ie.height,0,ke,qe,Ie.data)}}}else{if(Se=b.mipmaps,H&&me){Se.length>0&&ge++;let ae=yt(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,et,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Be){H?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,pe[ae].width,pe[ae].height,ke,qe,pe[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,et,pe[ae].width,pe[ae].height,0,ke,qe,pe[ae].data);for(let Ve=0;Ve<Se.length;Ve++){let Lt=Se[Ve].image[ae].image;H?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,0,0,Lt.width,Lt.height,ke,qe,Lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,et,Lt.width,Lt.height,0,ke,qe,Lt.data)}}else{H?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ke,qe,pe[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,et,ke,qe,pe[ae]);for(let Ve=0;Ve<Se.length;Ve++){let Ie=Se[Ve];H?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,0,0,ke,qe,Ie.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,et,ke,qe,Ie.image[ae])}}}m(b)&&_(i.TEXTURE_CUBE_MAP),le.__version=ee.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Me(P,b,G,Z,ee,le){let he=r.convert(G.format,G.colorSpace),te=r.convert(G.type),se=y(G.internalFormat,he,te,G.normalized,G.colorSpace),ue=n.get(b),Be=n.get(G);if(Be.__renderTarget=b,!ue.__hasExternalTextures){let pe=Math.max(1,b.width>>le),de=Math.max(1,b.height>>le);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,le,se,pe,de,b.depth,0,he,te,null):t.texImage2D(ee,le,se,pe,de,0,he,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),$t(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ee,Be.__webglTexture,0,Dt(b)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ee,Be.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(P,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){let Z=b.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,le=S(b.stencilBuffer,ee),he=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;$t(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt(b),le,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt(b),le,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,le,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,P)}else{let Z=b.textures;for(let ee=0;ee<Z.length;ee++){let le=Z[ee],he=r.convert(le.format,le.colorSpace),te=r.convert(le.type),se=y(le.internalFormat,he,te,le.normalized,le.colorSpace);$t(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt(b),se,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt(b),se,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,se,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qe(P,b,G){let Z=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=n.get(b.depthTexture);if(ee.__renderTarget=b,(!ee.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,b.depthTexture.addEventListener("dispose",w)),ee.__webglTexture===void 0){ee.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,b.depthTexture);let ue=r.convert(b.depthTexture.format),Be=r.convert(b.depthTexture.type),pe;b.depthTexture.format===Yn?pe=i.DEPTH_COMPONENT24:b.depthTexture.format===Hs&&(pe=i.DEPTH24_STENCIL8);for(let de=0;de<6;de++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,pe,b.width,b.height,0,ue,Be,null)}}else Y(b.depthTexture,0);let le=ee.__webglTexture,he=Dt(b),te=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,se=b.depthTexture.format===Hs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Yn)$t(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,te,le,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,se,te,le,0);else if(b.depthTexture.format===Hs)$t(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,te,le,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,se,te,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function we(P){let b=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let Z=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){let ee=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),b.__depthDisposeCallback=ee}b.__boundDepthTexture=Z}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(G)for(let Z=0;Z<6;Z++)Qe(b.__webglFramebuffer[Z],P,Z);else{let Z=P.texture.mipmaps;Z&&Z.length>0?Qe(b.__webglFramebuffer[0],P,0):Qe(b.__webglFramebuffer,P,0)}else if(G){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=i.createRenderbuffer(),Ze(b.__webglDepthbuffer[Z],P,!1);else{let ee=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,le)}}else{let Z=P.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Ze(b.__webglDepthbuffer,P,!1);else{let ee=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(P,b,G){let Z=n.get(P);b!==void 0&&Me(Z.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&we(P)}function Ue(P){let b=P.texture,G=n.get(P),Z=n.get(b);P.addEventListener("dispose",x);let ee=P.textures,le=P.isWebGLCubeRenderTarget===!0,he=ee.length>1;if(he||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=b.version,a.memory.textures++),le){G.__webglFramebuffer=[];for(let te=0;te<6;te++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[te]=[];for(let se=0;se<b.mipmaps.length;se++)G.__webglFramebuffer[te][se]=i.createFramebuffer()}else G.__webglFramebuffer[te]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let te=0;te<b.mipmaps.length;te++)G.__webglFramebuffer[te]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(he)for(let te=0,se=ee.length;te<se;te++){let ue=n.get(ee[te]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&$t(P)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let te=0;te<ee.length;te++){let se=ee[te];G.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[te]);let ue=r.convert(se.format,se.colorSpace),Be=r.convert(se.type),pe=y(se.internalFormat,ue,Be,se.normalized,se.colorSpace,P.isXRRenderTarget===!0),de=Dt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,pe,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,G.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Ze(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,b);for(let te=0;te<6;te++)if(b.mipmaps&&b.mipmaps.length>0)for(let se=0;se<b.mipmaps.length;se++)Me(G.__webglFramebuffer[te][se],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,se);else Me(G.__webglFramebuffer[te],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);m(b)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let te=0,se=ee.length;te<se;te++){let ue=ee[te],Be=n.get(ue),pe=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,Be.__webglTexture),Ce(pe,ue),Me(G.__webglFramebuffer,P,ue,i.COLOR_ATTACHMENT0+te,pe,0),m(ue)&&_(pe)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(te=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,Z.__webglTexture),Ce(te,b),b.mipmaps&&b.mipmaps.length>0)for(let se=0;se<b.mipmaps.length;se++)Me(G.__webglFramebuffer[se],P,b,i.COLOR_ATTACHMENT0,te,se);else Me(G.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,te,0);m(b)&&_(te),t.unbindTexture()}P.depthBuffer&&we(P)}function Ne(P){let b=P.textures;for(let G=0,Z=b.length;G<Z;G++){let ee=b[G];if(m(ee)){let le=E(P),he=n.get(ee).__webglTexture;t.bindTexture(le,he),_(le),t.unbindTexture()}}}let dt=[],Gt=[];function oi(P){if(P.samples>0){if($t(P)===!1){let b=P.textures,G=P.width,Z=P.height,ee=i.COLOR_BUFFER_BIT,le=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(P),te=b.length>1;if(te)for(let ue=0;ue<b.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let se=P.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ue=0;ue<b.length;ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[ue]);let Be=n.get(b[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Be,0)}i.blitFramebuffer(0,0,G,Z,0,0,G,Z,ee,i.NEAREST),l===!0&&(dt.length=0,Gt.length=0,dt.push(i.COLOR_ATTACHMENT0+ue),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(dt.push(le),Gt.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let ue=0;ue<b.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,he.__webglColorRenderbuffer[ue]);let Be=n.get(b[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Dt(P){return Math.min(s.maxSamples,P.samples)}function $t(P){let b=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function z(P){let b=a.render.frame;u.get(P)!==b&&(u.set(P,b),P.update())}function It(P,b){let G=P.colorSpace,Z=P.format,ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Oa&&G!==us&&(ct.getTransfer(G)===St?(Z!==ci||ee!==hn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",G)),b}function yt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=U,this.getTextureUnits=C,this.setTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=N,this.setTexture3D=k,this.setTextureCube=X,this.rebindTextures=Ge,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=oi,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function v1(i,e){function t(n,s=us){let r,a=ct.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===nc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Iu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ru)return i.BYTE;if(n===Cu)return i.SHORT;if(n===ta)return i.UNSIGNED_SHORT;if(n===ic)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===ji)return i.FLOAT;if(n===zt)return i.HALF_FLOAT;if(n===Lu)return i.ALPHA;if(n===Fu)return i.RGB;if(n===ci)return i.RGBA;if(n===Yn)return i.DEPTH_COMPONENT;if(n===Hs)return i.DEPTH_STENCIL;if(n===Du)return i.RED;if(n===rc)return i.RED_INTEGER;if(n===Vs)return i.RG;if(n===ac)return i.RG_INTEGER;if(n===oc)return i.RGBA_INTEGER;if(n===fo||n===po||n===mo||n===go)if(a===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lc||n===cc||n===hc||n===uc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===lc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dc||n===fc||n===pc||n===mc||n===gc||n===vo||n===vc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dc||n===fc)return a===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===mc)return r.COMPRESSED_R11_EAC;if(n===gc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===vo)return r.COMPRESSED_RG11_EAC;if(n===vc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xc||n===_c||n===yc||n===Mc||n===Sc||n===bc||n===wc||n===Tc||n===Ec||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_c)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ec)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ac)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ic)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lc||n===Fc||n===Dc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Lc)return a===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uc||n===Nc||n===xo||n===Oc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Uc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ia?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var x1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_1=`
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

}`,ad=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Za(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new De({vertexShader:x1,fragmentShader:_1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new Hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},od=class extends $n{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,v=typeof XRWebGLBinding<"u",p=new ad,m={},_=t.getContextAttributes(),E=null,y=null,S=[],M=[],w=new ye,x=null,A=null,R=new gi;R.viewport=new We;let I=new gi;I.viewport=new We;let L=[R,I],U=new Zl,C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ie=S[Q];return ie===void 0&&(ie=new Kr,S[Q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Q){let ie=S[Q];return ie===void 0&&(ie=new Kr,S[Q]=ie),ie.getGripSpace()},this.getHand=function(Q){let ie=S[Q];return ie===void 0&&(ie=new Kr,S[Q]=ie),ie.getHandSpace()};function B(Q){let ie=M.indexOf(Q.inputSource);if(ie===-1)return;let fe=S[ie];fe!==void 0&&(fe.update(Q.inputSource,Q.frame,c||a),fe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function V(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Y);for(let Q=0;Q<S.length;Q++){let ie=M[Q];ie!==null&&(M[Q]=null,S[Q].disconnect(ie))}C=null,F=null,p.reset();for(let Q in m)delete m[Q];if(e.setRenderTarget(E),f=null,h=null,d=null,s=null,y=null,Fe.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),A!==null){let Q=A.camera;Q.fov=A.fov,Q.zoom=A.zoom,Q.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Y),_.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Pe=null,Me=null;_.depth&&(Me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=_.stencil?Hs:Yn,Pe=_.stencil?ia:Nn);let Ze={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ze),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Ut(h.textureWidth,h.textureHeight,{format:ci,type:hn,depthTexture:new Ds(h.textureWidth,h.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let fe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ut(f.framebufferWidth,f.framebufferHeight,{format:ci,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Fe.setContext(s),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Y(Q){for(let ie=0;ie<Q.removed.length;ie++){let fe=Q.removed[ie],Pe=M.indexOf(fe);Pe>=0&&(M[Pe]=null,S[Pe].disconnect(fe))}for(let ie=0;ie<Q.added.length;ie++){let fe=Q.added[ie],Pe=M.indexOf(fe);if(Pe===-1){for(let Ze=0;Ze<S.length;Ze++)if(Ze>=M.length){M.push(fe),Pe=Ze;break}else if(M[Ze]===null){M[Ze]=fe,Pe=Ze;break}if(Pe===-1)break}let Me=S[Pe];Me&&Me.connect(fe)}}let N=new D,k=new D;function X(Q,ie,fe){N.setFromMatrixPosition(ie.matrixWorld),k.setFromMatrixPosition(fe.matrixWorld);let Pe=N.distanceTo(k),Me=ie.projectionMatrix.elements,Ze=fe.projectionMatrix.elements,Qe=Me[14]/(Me[10]-1),we=Me[14]/(Me[10]+1),Ge=(Me[9]+1)/Me[5],Ue=(Me[9]-1)/Me[5],Ne=(Me[8]-1)/Me[0],dt=(Ze[8]+1)/Ze[0],Gt=Qe*Ne,oi=Qe*dt,Dt=Pe/(-Ne+dt),$t=Dt*-Ne;if(ie.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX($t),Q.translateZ(Dt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Me[10]===-1)Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let z=Qe+Dt,It=we+Dt,yt=Gt-$t,P=oi+(Pe-$t),b=Ge*we/It*z,G=Ue*we/It*z;Q.projectionMatrix.makePerspective(yt,P,b,G,z,It),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function j(Q,ie){ie===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ie.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ie=Q.near,fe=Q.far;p.texture!==null&&(p.depthNear>0&&(ie=p.depthNear),p.depthFar>0&&(fe=p.depthFar)),U.near=I.near=R.near=ie,U.far=I.far=R.far=fe,(C!==U.near||F!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),C=U.near,F=U.far),U.layers.mask=Q.layers.mask|6,R.layers.mask=U.layers.mask&-5,I.layers.mask=U.layers.mask&-3;let Pe=Q.parent,Me=U.cameras;j(U,Pe);for(let Ze=0;Ze<Me.length;Ze++)j(Me[Ze],Pe);Me.length===2?X(U,R,I):U.projectionMatrix.copy(R.projectionMatrix),A===null&&Q.isPerspectiveCamera&&(A={camera:Q,fov:Q.fov,zoom:Q.zoom}),J(Q,U,Pe)};function J(Q,ie,fe){fe===null?Q.matrix.copy(ie.matrixWorld):(Q.matrix.copy(fe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ie.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Yr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(U)},this.getCameraTexture=function(Q){return m[Q]};let Re=null;function Ce(Q,ie){if(u=ie.getViewerPose(c||a),g=ie,u!==null){let fe=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Pe=!1;fe.length!==U.cameras.length&&(U.cameras.length=0,Pe=!0);for(let we=0;we<fe.length;we++){let Ge=fe[we],Ue=null;if(f!==null)Ue=f.getViewport(Ge);else{let dt=d.getViewSubImage(h,Ge);Ue=dt.viewport,we===0&&(e.setRenderTargetTextures(y,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(y))}let Ne=L[we];Ne===void 0&&(Ne=new gi,Ne.layers.enable(we),Ne.viewport=new We,L[we]=Ne),Ne.matrix.fromArray(Ge.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Ge.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),we===0&&(U.matrix.copy(Ne.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Pe===!0&&U.cameras.push(Ne)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let we=d.getDepthInformation(fe[0]);we&&we.isValid&&we.texture&&p.init(we,s.renderState)}if(Me&&Me.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let we=0;we<fe.length;we++){let Ge=fe[we].camera;if(Ge){let Ue=m[Ge];Ue||(Ue=new Za,m[Ge]=Ue);let Ne=d.getCameraImage(Ge);Ue.sourceTexture=Ne}}}}for(let fe=0;fe<S.length;fe++){let Pe=M[fe],Me=S[fe];Pe!==null&&Me!==void 0&&Me.update(Pe,ie,c||a)}Re&&Re(Q,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}let Fe=new Fp;Fe.setAnimationLoop(Ce),this.setAnimationLoop=function(Q){Re=Q},this.dispose=function(){}}},y1=new Rt,kp=new tt;kp.set(-1,0,0,0,1,0,0,0,1);function M1(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Bu(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,_,E,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,_,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Vi&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Vi&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=e.get(m),E=_.envMap,y=_.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(y1.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(kp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=E*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Vi&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let _=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function S1(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let M=S.program;n.uniformBlockBinding(y,M)}function c(y,S){let M=s[y.id];M===void 0&&(p(y),M=u(y),s[y.id]=M,y.addEventListener("dispose",_));let w=S.program;n.updateUBOMapping(y,w);let x=e.render.frame;r[y.id]!==x&&(h(y),r[y.id]=x)}function u(y){let S=d();y.__bindingPointIndex=S;let M=i.createBuffer(),w=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let S=s[y.id],M=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let x=0,A=M.length;x<A;x++){let R=M[x];if(Array.isArray(R))for(let I=0,L=R.length;I<L;I++)f(R[I],x,I,w);else f(R,x,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,S,M,w){if(v(y,S,M,w)===!0){let x=y.__offset,A=y.value;if(Array.isArray(A)){let R=0;for(let I=0;I<A.length;I++){let L=A[I],U=m(L);g(L,y.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function g(y,S,M){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,M)}function v(y,S,M,w){let x=y.value,A=S+"_"+M;if(w[A]===void 0)return typeof x=="number"||typeof x=="boolean"?w[A]=x:ArrayBuffer.isView(x)?w[A]=x.slice():w[A]=x.clone(),!0;{let R=w[A];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return w[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function p(y){let S=y.uniforms,M=0,w=16;for(let A=0,R=S.length;A<R;A++){let I=Array.isArray(S[A])?S[A]:[S[A]];for(let L=0,U=I.length;L<U;L++){let C=I[L],F=Array.isArray(C.value)?C.value:[C.value];for(let B=0,V=F.length;B<V;B++){let Y=F[B],N=m(Y),k=M%w,X=k%N.boundary,j=k+X;M+=X,j!==0&&w-j<N.storage&&(M+=w-j),C.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=M,M+=N.storage}}}let x=M%w;return x>0&&(M+=w-x),y.__size=M,y.__cache={},this}function m(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",y),S}function _(y){let S=y.target;S.removeEventListener("dispose",_);let M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function E(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}var b1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zn=null;function w1(){return Zn===null&&(Zn=new Fs(b1,16,16,Vs,zt),Zn.name="DFG_LUT",Zn.minFilter=qt,Zn.magFilter=qt,Zn.wrapS=zi,Zn.wrapT=zi,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}var Wc=class{constructor(e={}){let{canvas:t=rp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=hn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=f,p=new Set([oc,ac,rc]),m=new Set([hn,Nn,ta,ia,nc,sc]),_=new Uint32Array(4),E=new Int32Array(4),y=new D,S=null,M=null,w=[],x=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,L=null,U=null,C=null,F=null;this._outputColorSpace=si;let B=0,V=0,Y=null,N=-1,k=null,X=new We,j=new We,J=null,Re=new je(0),Ce=0,Fe=t.width,Q=t.height,ie=1,fe=null,Pe=null,Me=new We(0,0,Fe,Q),Ze=new We(0,0,Fe,Q),Qe=!1,we=new Ya,Ge=!1,Ue=!1,Ne=new Rt,dt=new D,Gt=new We,oi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Dt=!1;function $t(){return Y===null?ie:1}let z=n;function It(T,O){return t.getContext(T,O)}let yt,P,b,G,Z,ee,le,he,te,se,ue,Be,pe,de,ke,qe,et,H,me,ne,ge,Se,ae;try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Lt,!1),t.addEventListener("webglcontextrestored",Mt,!1),t.addEventListener("webglcontextcreationerror",nn,!1),z===null){let O="webgl2";if(z=It(O,T),z===null)throw It(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(T){throw t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",nn,!1),Ke("WebGLRenderer: "+T.message),T}function Ve(){yt=new I_(z),yt.init(),ge=new v1(z,yt),P=new M_(z,yt,e,ge),b=new m1(z,yt),P.reversedDepthBuffer&&h&&b.buffers.depth.setReversed(!0),U=z.createFramebuffer(),C=z.createFramebuffer(),F=z.createFramebuffer(),G=new D_(z),Z=new t1,ee=new g1(z,yt,b,Z,P,ge,G),le=new P_(R),he=new Ng(z),Se=new __(z,he),te=new L_(z,he,G,Se),se=new N_(z,te,he,Se,G),H=new U_(z,P,ee),ke=new S_(Z),ue=new e1(R,le,yt,P,Se,ke),Be=new M1(R,Z),pe=new n1,de=new c1(yt),et=new x_(R,le,b,se,g,l),qe=new p1(R,se,P),ae=new S1(z,G,P,b),me=new y_(z,yt,G),ne=new F_(z,yt,G),G.programs=ue.programs,R.capabilities=P,R.extensions=yt,R.properties=Z,R.renderLists=pe,R.shadowMap=qe,R.state=b,R.info=G}v!==hn&&(A=new B_(v,t.width,t.height,o,s,r));let Ie=new od(R,z);this.xr=Ie,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let T=yt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=yt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(T){T!==void 0&&(ie=T,this.setSize(Fe,Q,!1))},this.getSize=function(T){return T.set(Fe,Q)},this.setSize=function(T,O,$=!0){if(Ie.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}Fe=T,Q=O,t.width=Math.floor(T*ie),t.height=Math.floor(O*ie),$===!0&&(t.style.width=T+"px",t.style.height=O+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(Fe*ie,Q*ie).floor()},this.setDrawingBufferSize=function(T,O,$){Fe=T,Q=O,ie=$,t.width=Math.floor(T*$),t.height=Math.floor(O*$),this.setViewport(0,0,T,O)},this.setEffects=function(T){if(v===hn){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let O=0;O<T.length;O++)if(T[O].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(X)},this.getViewport=function(T){return T.copy(Me)},this.setViewport=function(T,O,$,W){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,O,$,W),b.viewport(X.copy(Me).multiplyScalar(ie).round())},this.getScissor=function(T){return T.copy(Ze)},this.setScissor=function(T,O,$,W){T.isVector4?Ze.set(T.x,T.y,T.z,T.w):Ze.set(T,O,$,W),b.scissor(j.copy(Ze).multiplyScalar(ie).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(T){b.setScissorTest(Qe=T)},this.setOpaqueSort=function(T){fe=T},this.setTransparentSort=function(T){Pe=T},this.getClearColor=function(T){return T.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,$=!0){let W=0;if(T){let q=!1;if(Y!==null){let ce=Y.texture.format;q=p.has(ce)}if(q){let ce=Y.texture.type,_e=m.has(ce),ve=et.getClearColor(),Ee=et.getClearAlpha(),Le=ve.r,it=ve.g,Te=ve.b;_e?(_[0]=Le,_[1]=it,_[2]=Te,_[3]=Ee,z.clearBufferuiv(z.COLOR,0,_)):(E[0]=Le,E[1]=it,E[2]=Te,E[3]=Ee,z.clearBufferiv(z.COLOR,0,E))}else W|=z.COLOR_BUFFER_BIT}O&&(W|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),L=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",nn,!1),et.dispose(),pe.dispose(),de.dispose(),Z.dispose(),le.dispose(),se.dispose(),Se.dispose(),ae.dispose(),ue.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",ft),Ie.removeEventListener("sessionend",Et),pt.stop()};function Lt(T){T.preventDefault(),Nu("WebGLRenderer: Context Lost."),I=!0}function Mt(){Nu("WebGLRenderer: Context Restored."),I=!1;let T=G.autoReset,O=qe.enabled,$=qe.autoUpdate,W=qe.needsUpdate,q=qe.type;Ve(),G.autoReset=T,qe.enabled=O,qe.autoUpdate=$,qe.needsUpdate=W,qe.type=q}function nn(T){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function sn(T){let O=T.target;O.removeEventListener("dispose",sn),Yh(O)}function Yh(T){re(T),Z.remove(T)}function re(T){let O=Z.get(T).programs;O!==void 0&&(O.forEach(function($){ue.releaseProgram($)}),T.isShaderMaterial&&ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,$,W,q,ce){O===null&&(O=oi);let _e=q.isMesh&&q.matrixWorld.determinantAffine()<0,ve=Bi(T,O,$,W,q);b.setMaterial(W,_e);let Ee=$.index,Le=1;if(W.wireframe===!0){if(Ee=te.getWireframeAttribute($),Ee===void 0)return;Le=2}let it=$.drawRange,Te=$.attributes.position,Ae=it.start*Le,lt=(it.start+it.count)*Le;ce!==null&&(Ae=Math.max(Ae,ce.start*Le),lt=Math.min(lt,(ce.start+ce.count)*Le)),Ee!==null?(Ae=Math.max(Ae,0),lt=Math.min(lt,Ee.count)):Te!=null&&(Ae=Math.max(Ae,0),lt=Math.min(lt,Te.count));let Ft=lt-Ae;if(Ft<0||Ft===1/0)return;Se.setup(q,W,ve,$,Ee);let xt,wt=me;if(Ee!==null&&(xt=he.get(Ee),wt=ne,wt.setIndex(xt)),q.isMesh)W.wireframe===!0?(b.setLineWidth(W.wireframeLinewidth*$t()),wt.setMode(z.LINES)):wt.setMode(z.TRIANGLES);else if(q.isLine){let Kt=W.linewidth;Kt===void 0&&(Kt=1),b.setLineWidth(Kt*$t()),q.isLineSegments?wt.setMode(z.LINES):q.isLineLoop?wt.setMode(z.LINE_LOOP):wt.setMode(z.LINE_STRIP)}else q.isPoints?wt.setMode(z.POINTS):q.isSprite&&wt.setMode(z.TRIANGLES);if(q.isBatchedMesh)if(yt.get("WEBGL_multi_draw"))wt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Kt=q._multiDrawStarts,be=q._multiDrawCounts,Jt=q._multiDrawCount,ht=Ee?he.get(Ee).bytesPerElement:1,Pi=Z.get(W).currentProgram.getUniforms();for(let rn=0;rn<Jt;rn++)Pi.setValue(z,"_gl_DrawID",rn),wt.render(Kt[rn]/ht,be[rn])}else if(q.isInstancedMesh)wt.renderInstances(Ae,Ft,q.count);else if($.isInstancedBufferGeometry){let Kt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,be=Math.min($.instanceCount,Kt);wt.renderInstances(Ae,Ft,be)}else wt.render(Ae,Ft)};function ze(T,O,$,W){L!==null&&T.isNodeMaterial&&L.setObject(W,T),Ge===!0&&ke.setState(T,$,!1),T.transparent===!0&&T.side===wi&&T.forceSinglePass===!1?(T.side=Vi,T.needsUpdate=!0,ii(T,O,W),T.side=Bs,T.needsUpdate=!0,ii(T,O,W),T.side=wi):ii(T,O,W)}this.compile=function(T,O,$=null){$===null&&($=T),L!==null&&L.renderStart(T,O,$),M=de.get($),M.init(O),x.push(M),$.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),T!==$&&T.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),M.setupLights(),L!==null&&L.updateLights(M.state.lightsArray),Ue=this.localClippingEnabled,Ge=ke.init(this.clippingPlanes,Ue),Ge===!0&&ke.setGlobalState(this.clippingPlanes,O),L!==null&&qe.render(M.state.shadowsArray,$,O);let W=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let ce=q.material;if(ce)if(Array.isArray(ce))for(let _e=0;_e<ce.length;_e++){let ve=ce[_e];ze(ve,$,O,q),W.add(ve)}else ze(ce,$,O,q),W.add(ce)}),M=x.pop(),L!==null&&L.renderEnd(),W},this.compileAsync=function(T,O,$=null){let W=this.compile(T,O,$);return new Promise(q=>{function ce(){if(W.forEach(function(_e){let Ee=Z.get(_e).currentProgram;(Ee===void 0||Ee.isReady())&&W.delete(_e)}),W.size===0){q(T);return}setTimeout(ce,10)}yt.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Oe=null;function mt(T){Oe&&Oe(T)}function ft(){pt.stop()}function Et(){pt.start()}let pt=new Fp;pt.setAnimationLoop(mt),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(T){Oe=T,Ie.setAnimationLoop(T),T===null?pt.stop():pt.start()},Ie.addEventListener("sessionstart",ft),Ie.addEventListener("sessionend",Et),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(T,O);let $=Ie.enabled===!0&&Ie.isPresenting===!0,W=A!==null&&(Y===null||$)&&A.begin(R,Y);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(O),O=Ie.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,O,Y),M=de.get(T,x.length),M.init(O),M.state.textureUnits=ee.getTextureUnits(),x.push(M),Ne.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),we.setFromProjectionMatrix(Ne,Ln,O.reversedDepth),Ue=this.localClippingEnabled,Ge=ke.init(this.clippingPlanes,Ue),S=pe.get(T,w.length),S.init(),w.push(S),Ie.enabled===!0&&Ie.isPresenting===!0){let _e=R.xr.getDepthSensingMesh();_e!==null&&Ot(_e,O,-1/0,R.sortObjects)}Ot(T,O,0,R.sortObjects),S.finish(),L!==null&&L.updateLights(M.state.lightsArray),R.sortObjects===!0&&S.sort(fe,Pe),Dt=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,Dt&&et.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ge===!0&&ke.beginShadows();let q=M.state.shadowsArray;if(qe.render(q,T,O),Ge===!0&&ke.endShadows(),(W&&A.hasRenderPass())===!1){let _e=S.opaque,ve=S.transmissive;if(M.setupLights(),O.isArrayCamera){let Ee=O.cameras;if(ve.length>0)for(let Le=0,it=Ee.length;Le<it;Le++){let Te=Ee[Le];$i(_e,ve,T,Te)}Dt&&et.render(T);for(let Le=0,it=Ee.length;Le<it;Le++){let Te=Ee[Le];es(S,T,Te,Te.viewport)}}else ve.length>0&&$i(_e,ve,T,O),Dt&&et.render(T),es(S,T,O)}Y!==null&&V===0&&(ee.updateMultisampleRenderTarget(Y),ee.updateRenderTargetMipmap(Y)),W&&A.end(R),T.isScene===!0&&T.onAfterRender(R,T,O),Se.resetDefaultState(),N=-1,k=null,x.pop(),x.length>0?(M=x[x.length-1],ee.setTextureUnits(M.state.textureUnits),Ge===!0&&ke.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,L!==null&&L.renderEnd()};function Ot(T,O,$,W){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLightProbeGrid)M.pushLightProbeGrid(T);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(we)){W&&Gt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ne);let _e=se.update(T),ve=T.material;ve.visible&&S.push(T,_e,ve,$,Gt.z,null,O)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(we))){let _e=se.update(T),ve=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Gt.copy(T.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Gt.copy(_e.boundingSphere.center)),Gt.applyMatrix4(T.matrixWorld).applyMatrix4(Ne)),Array.isArray(ve)){let Ee=_e.groups;for(let Le=0,it=Ee.length;Le<it;Le++){let Te=Ee[Le],Ae=ve[Te.materialIndex];Ae&&Ae.visible&&S.push(T,_e,Ae,$,Gt.z,Te,O)}}else ve.visible&&S.push(T,_e,ve,$,Gt.z,null,O)}}let ce=T.children;for(let _e=0,ve=ce.length;_e<ve;_e++)Ot(ce[_e],O,$,W)}function es(T,O,$,W){let{opaque:q,transmissive:ce,transparent:_e}=T;M.setupLightsView($),Ge===!0&&ke.setGlobalState(R.clippingPlanes,$),W&&b.viewport(X.copy(W)),q.length>0&&Wt(q,O,$),ce.length>0&&Wt(ce,O,$),_e.length>0&&Wt(_e,O,$),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function $i(T,O,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[W.id]===void 0){let Ae=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[W.id]=new Ut(1,1,{generateMipmaps:!0,type:Ae?zt:hn,minFilter:zs,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let ce=M.state.transmissionRenderTarget[W.id],_e=W.viewport||X;ce.setSize(_e.z*R.transmissionResolutionScale,_e.w*R.transmissionResolutionScale);let ve=R.getRenderTarget(),Ee=R.getActiveCubeFace(),Le=R.getActiveMipmapLevel();R.setRenderTarget(ce),R.getClearColor(Re),Ce=R.getClearAlpha(),Ce<1&&R.setClearColor(16777215,.5),R.clear(),Dt&&et.render($);let it=R.toneMapping;R.toneMapping=li;let Te=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),M.setupLightsView(W),Ge===!0&&ke.setGlobalState(R.clippingPlanes,W),Wt(T,$,W),ee.updateMultisampleRenderTarget(ce),ee.updateRenderTargetMipmap(ce),yt.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let lt=0,Ft=O.length;lt<Ft;lt++){let xt=O[lt],{object:wt,geometry:Kt,material:be,group:Jt}=xt;if(be.side===wi&&wt.layers.test(W.layers)){let ht=be.side;be.side=Vi,be.needsUpdate=!0,Oi(wt,$,W,Kt,be,Jt),be.side=ht,be.needsUpdate=!0,Ae=!0}}Ae===!0&&(ee.updateMultisampleRenderTarget(ce),ee.updateRenderTargetMipmap(ce))}R.setRenderTarget(ve,Ee,Le),R.setClearColor(Re,Ce),Te!==void 0&&(W.viewport=Te),R.toneMapping=it}function Wt(T,O,$){let W=O.isScene===!0?O.overrideMaterial:null;for(let q=0,ce=T.length;q<ce;q++){let _e=T[q],{object:ve,geometry:Ee,group:Le}=_e,it=_e.material;it.allowOverride===!0&&W!==null&&(it=W),ve.layers.test($.layers)&&Oi(ve,O,$,Ee,it,Le)}}function Oi(T,O,$,W,q,ce){L!==null&&q.isNodeMaterial&&L.setObject(T,q),T.onBeforeRender(R,O,$,W,q,ce),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(R,O,$,W,T,ce),q.transparent===!0&&q.side===wi&&q.forceSinglePass===!1?(q.side=Vi,q.needsUpdate=!0,R.renderBufferDirect($,O,W,q,T,ce),q.side=Bs,q.needsUpdate=!0,R.renderBufferDirect($,O,W,q,T,ce),q.side=wi):R.renderBufferDirect($,O,W,q,T,ce),T.onAfterRender(R,O,$,W,q,ce)}function ii(T,O,$){O.isScene!==!0&&(O=oi);let W=Z.get(T),q=M.state.lights,ce=M.state.shadowsArray,_e=q.state.version,ve=ue.getParameters(T,q.state,ce,O,$,M.state.lightProbeGridArray),Ee=ue.getProgramCacheKey(ve),Le=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,W.fog=O.fog;let it=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=le.get(T.envMap||W.environment,it),W.envMapRotation=W.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Le===void 0&&(T.addEventListener("dispose",sn),Le=new Map,W.programs=Le);let Te=Le.get(Ee);if(Te!==void 0){if(W.currentProgram===Te&&W.lightsStateVersion===_e)return An(T,ve),Te}else ve.uniforms=ue.getUniforms(T),L!==null&&T.isNodeMaterial&&L.build(T,$,ve),T.onBeforeCompile(ve,R),Te=ue.acquireProgram(ve,Ee),Le.set(Ee,Te),W.uniforms=ve.uniforms;let Ae=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ae.clippingPlanes=ke.uniform),An(T,ve),W.needsLights=Zt(T),W.lightsStateVersion=_e,W.needsLights&&(Ae.ambientLightColor.value=q.state.ambient,Ae.lightProbe.value=q.state.probe,Ae.sunLights.value=q.state.sun,Ae.sunLightShadows.value=q.state.sunShadow,Ae.directionalLights.value=q.state.directional,Ae.directionalLightShadows.value=q.state.directionalShadow,Ae.spotLights.value=q.state.spot,Ae.spotLightShadows.value=q.state.spotShadow,Ae.rectAreaLights.value=q.state.rectArea,Ae.ltc_1.value=q.state.rectAreaLTC1,Ae.ltc_2.value=q.state.rectAreaLTC2,Ae.pointLights.value=q.state.point,Ae.pointLightShadows.value=q.state.pointShadow,Ae.hemisphereLights.value=q.state.hemi,Ae.sunShadowMatrix.value=q.state.sunShadowMatrix,Ae.sunShadowCascade.value=q.state.sunShadowCascade,Ae.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ae.spotLightMatrix.value=q.state.spotLightMatrix,Ae.spotLightMap.value=q.state.spotLightMap,Ae.pointShadowMatrix.value=q.state.pointShadowMatrix),W.lightProbeGrid=M.state.lightProbeGridArray.length>0,W.currentProgram=Te,W.uniformsList=null,Te}function Ct(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=aa.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function An(T,O){let $=Z.get(T);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function Mi(T,O){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;y.setFromMatrixPosition(O.matrixWorld);for(let $=0,W=T.length;$<W;$++){let q=T[$];if(q.texture!==null&&q.boundingBox.containsPoint(y))return q}return null}function Bi(T,O,$,W,q){O.isScene!==!0&&(O=oi),ee.resetTextureUnits();let ce=O.fog,_e=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?O.environment:null,ve=Y===null?R.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ct.workingColorSpace,Ee=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Le=le.get(W.envMap||_e,Ee),it=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Te=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ae=!!$.morphAttributes.position,lt=!!$.morphAttributes.normal,Ft=!!$.morphAttributes.color,xt=li;W.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(xt=R.toneMapping);let wt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Kt=wt!==void 0?wt.length:0,be=Z.get(W),Jt=M.state.lights;if(Ge===!0&&(Ue===!0||T!==k)){let At=T===k&&W.id===N;ke.setState(W,T,At)}let ht=!1;W.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Jt.state.version||be.outputColorSpace!==ve||q.isBatchedMesh&&be.batching===!1||!q.isBatchedMesh&&be.batching===!0||q.isBatchedMesh&&be.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&be.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&be.instancing===!1||!q.isInstancedMesh&&be.instancing===!0||q.isSkinnedMesh&&be.skinning===!1||!q.isSkinnedMesh&&be.skinning===!0||q.isInstancedMesh&&be.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&be.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&be.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&be.instancingMorph===!1&&q.morphTexture!==null||be.envMap!==Le||W.fog===!0&&be.fog!==ce||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ke.numPlanes||be.numIntersection!==ke.numIntersection)||be.vertexAlphas!==it||be.vertexTangents!==Te||be.morphTargets!==Ae||be.morphNormals!==lt||be.morphColors!==Ft||be.toneMapping!==xt||be.morphTargetsCount!==Kt||!!be.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,be.__version=W.version);let Pi=be.currentProgram;ht===!0&&(Pi=ii(W,O,q),L&&W.isNodeMaterial&&L.onUpdateProgram(W,Pi,be));let rn=!1,fn=!1,ts=!1,_t=Pi.getUniforms(),Bt=be.uniforms;if(b.useProgram(Pi.program)&&(rn=!0,fn=!0,ts=!0),W.id!==N&&(N=W.id,fn=!0),be.needsLights){let At=Mi(M.state.lightProbeGridArray,q);be.lightProbeGrid!==At&&(be.lightProbeGrid=At,fn=!0)}if(rn||k!==T){b.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),_t.setValue(z,"projectionMatrix",T.projectionMatrix),_t.setValue(z,"viewMatrix",T.matrixWorldInverse);let mn=_t.map.cameraPosition;mn!==void 0&&mn.setValue(z,dt.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&_t.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&_t.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),k!==T&&(k=T,fn=!0,ts=!0)}if(be.needsLights&&(Jt.state.sunShadowMap.length>0&&_t.setValue(z,"sunShadowMap",Jt.state.sunShadowMap,ee),Jt.state.directionalShadowMap.length>0&&_t.setValue(z,"directionalShadowMap",Jt.state.directionalShadowMap,ee),Jt.state.spotShadowMap.length>0&&_t.setValue(z,"spotShadowMap",Jt.state.spotShadowMap,ee),Jt.state.pointShadowMap.length>0&&_t.setValue(z,"pointShadowMap",Jt.state.pointShadowMap,ee)),q.isSkinnedMesh){_t.setOptional(z,q,"bindMatrix"),_t.setOptional(z,q,"bindMatrixInverse");let At=q.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),_t.setValue(z,"boneTexture",At.boneTexture,ee))}q.isBatchedMesh&&(_t.setOptional(z,q,"batchingTexture"),_t.setValue(z,"batchingTexture",q._matricesTexture,ee),_t.setOptional(z,q,"batchingIdTexture"),_t.setValue(z,"batchingIdTexture",q._indirectTexture,ee),_t.setOptional(z,q,"batchingColorTexture"),q._colorsTexture!==null&&_t.setValue(z,"batchingColorTexture",q._colorsTexture,ee));let pn=$.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&H.update(q,$,Pi),(fn||be.receiveShadow!==q.receiveShadow)&&(be.receiveShadow=q.receiveShadow,_t.setValue(z,"receiveShadow",q.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&O.environment!==null&&(Bt.envMapIntensity.value=O.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=w1()),fn){if(_t.setValue(z,"toneMappingExposure",R.toneMappingExposure),be.needsLights&&Si(Bt,ts),ce&&W.fog===!0&&Be.refreshFogUniforms(Bt,ce),Be.refreshMaterialUniforms(Bt,W,ie,Q,M.state.transmissionRenderTarget[T.id]),be.needsLights&&be.lightProbeGrid){let At=be.lightProbeGrid;Bt.probesSH.value=At.texture,Bt.probesMin.value.copy(At.boundingBox.min),Bt.probesMax.value.copy(At.boundingBox.max),Bt.probesResolution.value.copy(At.resolution)}aa.upload(z,Ct(be),Bt,ee)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(aa.upload(z,Ct(be),Bt,ee),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&_t.setValue(z,"center",q.center),_t.setValue(z,"modelViewMatrix",q.modelViewMatrix),_t.setValue(z,"normalMatrix",q.normalMatrix),_t.setValue(z,"modelMatrix",q.matrixWorld),W.uniformsGroups!==void 0){let At=W.uniformsGroups;for(let mn=0,Rr=At.length;mn<Rr;mn++){let ef=At[mn];ae.update(ef,Pi),ae.bind(ef,Pi)}}return Pi}function Si(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.sunLights.needsUpdate=O,T.sunLightShadows.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Zt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(T,O,$){let W=Z.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Z.get(T.texture).__webglTexture=O,Z.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){let $=Z.get(T);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,$=0){Y=T,B=O,V=$;let W=null,q=!1,ce=!1;if(T){let ve=Z.get(T);if(ve.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(z.FRAMEBUFFER,ve.__webglFramebuffer),X.copy(T.viewport),j.copy(T.scissor),J=T.scissorTest,b.viewport(X),b.scissor(j),b.setScissorTest(J),N=-1;return}else if(ve.__webglFramebuffer===void 0)ee.setupRenderTarget(T);else if(ve.__hasExternalTextures)ee.rebindTextures(T,Z.get(T.texture).__webglTexture,Z.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let it=T.depthTexture;if(ve.__boundDepthTexture!==it){if(it!==null&&Z.has(it)&&(T.width!==it.image.width||T.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(T)}}let Ee=T.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ce=!0);let Le=Z.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Le[O])?W=Le[O][$]:W=Le[O],q=!0):T.samples>0&&ee.useMultisampledRTT(T)===!1?W=Z.get(T).__webglMultisampledFramebuffer:Array.isArray(Le)?W=Le[$]:W=Le,X.copy(T.viewport),j.copy(T.scissor),J=T.scissorTest}else X.copy(Me).multiplyScalar(ie).floor(),j.copy(Ze).multiplyScalar(ie).floor(),J=Qe;if($!==0&&(W=U),b.bindFramebuffer(z.FRAMEBUFFER,W)&&b.drawBuffers(T,W),b.viewport(X),b.scissor(j),b.setScissorTest(J),q){let ve=Z.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,ve.__webglTexture,$)}else if(ce){let ve=O;for(let Ee=0;Ee<T.textures.length;Ee++){let Le=Z.get(T.textures[Ee]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ee,Le.__webglTexture,$,ve)}}else if(T!==null&&$!==0){let ve=Z.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ve.__webglTexture,$)}N=-1};function pi(T){let O=Z.get(T);return(O.__readFormat!==T.format||O.__readType!==T.type)&&(O.__readFormat=T.format,O.__readType=T.type,O.__formatReadable=P.textureFormatReadable(T.format),O.__typeReadable=P.textureTypeReadable(T.type)),O}this.readRenderTargetPixels=function(T,O,$,W,q,ce,_e,ve=0){if(!(T&&T.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Ee=Ee[_e]),Ee){b.bindFramebuffer(z.FRAMEBUFFER,Ee);try{let Le=T.textures[ve],it=Le.format,Te=Le.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ve);let Ae=pi(Le);if(Ae.__formatReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-W&&$>=0&&$<=T.height-q&&z.readPixels(O,$,W,q,ge.convert(it),ge.convert(Te),ce)}finally{let Le=Y!==null?Z.get(Y).__webglFramebuffer:null;b.bindFramebuffer(z.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(T,O,$,W,q,ce,_e,ve=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Ee=Ee[_e]),Ee)if(O>=0&&O<=T.width-W&&$>=0&&$<=T.height-q){b.bindFramebuffer(z.FRAMEBUFFER,Ee);let Le=T.textures[ve],it=Le.format,Te=Le.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ve);let Ae=pi(Le);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let lt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,lt),z.bufferData(z.PIXEL_PACK_BUFFER,ce.byteLength,z.STREAM_READ),z.readPixels(O,$,W,q,ge.convert(it),ge.convert(Te),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Ft=Y!==null?Z.get(Y).__webglFramebuffer:null;b.bindFramebuffer(z.FRAMEBUFFER,Ft);let xt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await op(z,xt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,lt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ce),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(lt),z.deleteSync(xt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,$=0){let W=Math.pow(2,-$),q=Math.floor(T.image.width*W),ce=Math.floor(T.image.height*W),_e=O!==null?O.x:0,ve=O!==null?O.y:0;ee.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,_e,ve,q,ce),b.unbindTexture()},this.copyTextureToTexture=function(T,O,$=null,W=null,q=0,ce=0){let _e,ve,Ee,Le,it,Te,Ae,lt,Ft,xt=T.isCompressedTexture?T.mipmaps[ce]:T.image;if($!==null)_e=$.max.x-$.min.x,ve=$.max.y-$.min.y,Ee=$.isBox3?$.max.z-$.min.z:1,Le=$.min.x,it=$.min.y,Te=$.isBox3?$.min.z:0;else{let Bt=Math.pow(2,-q);_e=Math.floor(xt.width*Bt),ve=Math.floor(xt.height*Bt),T.isDataArrayTexture?Ee=xt.depth:T.isData3DTexture?Ee=Math.floor(xt.depth*Bt):Ee=1,Le=0,it=0,Te=0}W!==null?(Ae=W.x,lt=W.y,Ft=W.z):(Ae=0,lt=0,Ft=0);let wt=ge.convert(O.format),Kt=ge.convert(O.type),be;O.isData3DTexture?(ee.setTexture3D(O,0),be=z.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ee.setTexture2DArray(O,0),be=z.TEXTURE_2D_ARRAY):(ee.setTexture2D(O,0),be=z.TEXTURE_2D),b.activeTexture(z.TEXTURE0),b.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,O.flipY),b.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),b.pixelStorei(z.UNPACK_ALIGNMENT,O.unpackAlignment);let Jt=b.getParameter(z.UNPACK_ROW_LENGTH),ht=b.getParameter(z.UNPACK_IMAGE_HEIGHT),Pi=b.getParameter(z.UNPACK_SKIP_PIXELS),rn=b.getParameter(z.UNPACK_SKIP_ROWS),fn=b.getParameter(z.UNPACK_SKIP_IMAGES);b.pixelStorei(z.UNPACK_ROW_LENGTH,xt.width),b.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xt.height),b.pixelStorei(z.UNPACK_SKIP_PIXELS,Le),b.pixelStorei(z.UNPACK_SKIP_ROWS,it),b.pixelStorei(z.UNPACK_SKIP_IMAGES,Te);let ts=T.isDataArrayTexture||T.isData3DTexture,_t=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){let Bt=Z.get(T),pn=Z.get(O),At=Z.get(Bt.__renderTarget),mn=Z.get(pn.__renderTarget);b.bindFramebuffer(z.READ_FRAMEBUFFER,At.__webglFramebuffer),b.bindFramebuffer(z.DRAW_FRAMEBUFFER,mn.__webglFramebuffer);for(let Rr=0;Rr<Ee;Rr++)ts&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Z.get(T).__webglTexture,q,Te+Rr),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Z.get(O).__webglTexture,ce,Ft+Rr)),z.blitFramebuffer(Le,it,_e,ve,Ae,lt,_e,ve,z.DEPTH_BUFFER_BIT,z.NEAREST);b.bindFramebuffer(z.READ_FRAMEBUFFER,null),b.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||Z.has(T)){let Bt=Z.get(T),pn=Z.get(O);b.bindFramebuffer(z.READ_FRAMEBUFFER,C),b.bindFramebuffer(z.DRAW_FRAMEBUFFER,F);for(let At=0;At<Ee;At++)ts?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Bt.__webglTexture,q,Te+At):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Bt.__webglTexture,q),_t?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,pn.__webglTexture,ce,Ft+At):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,pn.__webglTexture,ce),q!==0?z.blitFramebuffer(Le,it,_e,ve,Ae,lt,_e,ve,z.COLOR_BUFFER_BIT,z.NEAREST):_t?z.copyTexSubImage3D(be,ce,Ae,lt,Ft+At,Le,it,_e,ve):z.copyTexSubImage2D(be,ce,Ae,lt,Le,it,_e,ve);b.bindFramebuffer(z.READ_FRAMEBUFFER,null),b.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else _t?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(be,ce,Ae,lt,Ft,_e,ve,Ee,wt,Kt,xt.data):O.isCompressedArrayTexture?z.compressedTexSubImage3D(be,ce,Ae,lt,Ft,_e,ve,Ee,wt,xt.data):z.texSubImage3D(be,ce,Ae,lt,Ft,_e,ve,Ee,wt,Kt,xt):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ce,Ae,lt,_e,ve,wt,Kt,xt.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ce,Ae,lt,xt.width,xt.height,wt,xt.data):z.texSubImage2D(z.TEXTURE_2D,ce,Ae,lt,_e,ve,wt,Kt,xt);b.pixelStorei(z.UNPACK_ROW_LENGTH,Jt),b.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ht),b.pixelStorei(z.UNPACK_SKIP_PIXELS,Pi),b.pixelStorei(z.UNPACK_SKIP_ROWS,rn),b.pixelStorei(z.UNPACK_SKIP_IMAGES,fn),ce===0&&O.generateMipmaps&&z.generateMipmap(be),b.unbindTexture()},this.initRenderTarget=function(T){Z.get(T).__webglFramebuffer===void 0&&ee.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ee.setTextureCube(T,0):T.isData3DTexture?ee.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ee.setTexture2DArray(T,0):ee.setTexture2D(T,0),b.unbindTexture()},this.resetState=function(){B=0,V=0,Y=null,b.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var $e=Math.PI*2,Ye=(i,e,t)=>i<e?e:i>t?t:i,la=(i,e,t)=>i+(e-i)*t,cr=(i,e,t)=>{let n=Ye((t-i)/(e-i),0,1);return n*n*(3-2*n)};function fs(i){let e=i>>>0;return function(){e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}var hr=i=>i-Math.floor(i),ld=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4),T1=i=>i<=.0031308?i*12.92:1.055*Math.pow(i,1/2.4)-.055;function Hp(i){let e=parseInt(i.slice(1),16);return[ld((e>>16&255)/255),ld((e>>8&255)/255),ld((e&255)/255)]}function Yc(i){let e=parseInt(i.slice(1),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}function ri(i,e,t,n){let r=2/Math.max(1e-4,t),a=r*n,o=1/(1+a+.48*a*a+.235*a*a*a),l=i.value-e,c=(i.velocity+r*l)*n;i.velocity=(i.velocity-r*c)*o;let u=e+(l+c)*o;return e-i.value>0==u>e&&(u=e,i.velocity=(u-e)/Math.max(n,1e-5)),i.value=u,u}var ei=(i=0)=>({value:i,velocity:0});function cd(i,e,t,n,s,r,a,o,l){let c=Math.cos(l),u=Math.sin(l),d=(r*t+a*n+o*s)*(1-c);i[e]=t*c+(a*s-o*n)*u+r*d,i[e+1]=n*c+(o*t-r*s)*u+a*d,i[e+2]=s*c+(r*n-a*t)*u+o*d}function Ui(i,e,t,n){let s=0,r=1,a=0;Math.abs(t)>.9&&(s=1,r=0);let o=r*n-a*t,l=a*e-s*n,c=s*t-r*e,u=Math.hypot(o,l,c)||1;return o/=u,l/=u,c/=u,i[0]=o,i[1]=l,i[2]=c,i[3]=t*c-n*l,i[4]=n*o-e*c,i[5]=e*l-t*o,i}function ps(i,e,t){let n=Math.cos(i),s=Math.sin(i),r=Math.cos(e),a=Math.sin(e),o=Math.cos(t),l=Math.sin(t);return new Float64Array([o*r,o*a*s-l*n,o*a*n+l*s,l*r,l*a*s+o*n,l*a*n-o*s,-a,r*s,r*n])}var lr=(i,e,t,n)=>{let s=(i-e)/(i<e?t:n);return Math.exp(-.5*s*s)},zp=new Map;function E1(i){let e=Math.round(i),t=zp.get(e);if(t)return t;let n=0,s=0,r=0;for(let c=380;c<=780;c+=5){let u=c*1e-9,d=1/(u*u*u*u*u*(Math.exp(.014387769/(u*e))-1));n+=d*(1.056*lr(c,599.8,37.9,31)+.362*lr(c,442,16,26.7)-.065*lr(c,501.1,20.4,26.2)),s+=d*(.821*lr(c,568.8,46.9,40.5)+.286*lr(c,530.9,16.3,31.1)),r+=d*(1.217*lr(c,437,11.8,36)+.681*lr(c,459,26,13.8))}let a=Math.max(0,3.2406*n-1.5372*s-.4986*r),o=Math.max(0,-.9689*n+1.8758*s+.0415*r),l=Math.max(0,.0557*n-.204*s+1.057*r);return t=[a/s,o/s,l/s,1],zp.set(e,t),t}function at(i,e=1,t=[0,0,0]){let n=E1(Ye(i,800,6e4)),s=n[0],r=n[1],a=n[2];if(e!==1){let l=.2126*s+.7152*r+.0722*a;s=l+(s-l)*e,r=l+(r-l)*e,a=l+(a-l)*e}let o=Math.max(s,r,a)||1;return t[0]=s/o,t[1]=r/o,t[2]=a/o,t}function $c(i,e=1,t=[0,0,0]){at(i,e,t);let n=.2126*t[0]+.7152*t[1]+.0722*t[2]||1;return t[0]/=n,t[1]/=n,t[2]/=n,t}function Vp(i){let e=t=>Math.round(Ye(T1(Ye(t,0,1)),0,1)*255).toString(16).padStart(2,"0");return`#${e(i[0])}${e(i[1])}${e(i[2])}`}function To(){let e=Math.log(1e3),t=Math.log(4e4),n=[];for(let s=0;s<32;s++){let r=at(Math.exp(e+(t-e)*s/31));n.push(`vec3(${r.map(a=>a.toFixed(4)).join(", ")})`)}return`
const vec3 BB_TABLE[32] = vec3[32](${n.join(", ")});
vec3 blackbody(float kelvin) {
  float x = clamp((log(max(kelvin, 1.0)) - ${e.toFixed(6)}) / ${(t-e).toFixed(6)}, 0.0, 1.0) * ${31 .toFixed(1)};
  int i = int(min(floor(x), ${30 .toFixed(1)}));
  return mix(BB_TABLE[i], BB_TABLE[i + 1], x - float(i));
}
`}var Yt={space:"#04070b",white:"#eaf2f8",ink:"#dde6ed",ice:"#a9e7f2",iceHi:"#e6fbff",deep:"#4f8fb0",deepest:"#1b3a52",halpha:"#ec7f9c",reflection:"#86a9de",dust:"#5e5047",web:"#7d8fb4"},Eo={ember:1800,cinder:2700,orange:3900,yellow:4800,sun:5800,hot:5900,whiteStar:7200,blueStar:12e3},K=Object.fromEntries(Object.entries(Yt).map(([i,e])=>[i,Hp(e)])),hd=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t];K.steel=hd(K.deep,K.white,.15);K.mist=hd(K.deepest,K.deep,.5);for(let[i,e]of Object.entries(Eo))K[i]=at(e);K.core=hd(K.hot,[1,1,1],.45);var Kc=i=>Vp(at(i)),ms={high:{particles:163840,stars:5200,dprCap:1.75,pixelBudget:42e5,bloom:!0,bloomScale:.5,grain:!0,size:1,gain:1},medium:{particles:65536,stars:3e3,dprCap:1.5,pixelBudget:24e5,bloom:!0,bloomScale:.42,grain:!0,size:1.32,gain:1.85},low:{particles:24576,stars:1600,dprCap:1.5,pixelBudget:13e5,bloom:!1,bloomScale:.35,grain:!1,size:1.75,gain:3.4}},On=[{dpr:1,floor:0,draw:1,bloom:1},{dpr:1,floor:0,draw:1,bloom:.72},{dpr:.82,floor:1,draw:1,bloom:.6},{dpr:.66,floor:1,draw:1,bloom:.5},{dpr:.5,floor:1,draw:.78,bloom:.5},{dpr:.5,floor:.75,draw:.62,bloom:0}],Ao=32,Zc={hero:{wide:{cx:.675,cy:.47,r:(i,e)=>Math.min(i*.255,e*.4),push:1,dim:1},tall:{cx:.5,cy:.66,r:(i,e)=>Math.min(i*.44,e*.24),push:1,dim:1}},explore:{wide:{cx:.5,cy:.49,r:(i,e)=>Math.min(i*.33,e*.41),push:1,dim:1},tall:{cx:.5,cy:.46,r:(i,e)=>Math.min(i*.47,e*.3),push:1,dim:1}},contents:{wide:{cx:.245,cy:.52,r:(i,e)=>Math.min(i*.19,e*.37),push:1,dim:.92},tall:{cx:.5,cy:.2,r:(i,e)=>Math.min(i*.4,e*.17),push:1,dim:.9}},chapter:{wide:{cx:.655,cy:.5,r:(i,e)=>Math.min(i*.27,e*.42),push:1,dim:1},tall:{cx:.5,cy:.34,r:(i,e)=>Math.min(i*.45,e*.24),push:1,dim:1}},reading:{wide:{cx:.5,cy:.5,r:(i,e)=>Math.min(i*.5,e*.8),push:1,dim:.5},tall:{cx:.5,cy:.46,r:(i,e)=>Math.min(i*.5,e*.3),push:1.45,dim:.5}}},Ro=(i,e)=>i<640||i/e<=.8,Jc={intro:{duration:3.4,stagger:.45,flow:.9,swirl:1.1,sweep:.55,invert:0},cover:{duration:2.3,stagger:.4,flow:.62,swirl:.85,sweep:.8,invert:0},preview:{duration:1.7,stagger:.36,flow:.5,swirl:.7,sweep:.85,invert:0},chapter:{duration:2.2,stagger:.4,flow:.6,swirl:.85,sweep:.85,invert:0},seed:{duration:2.4,stagger:.42,flow:.45,swirl:1.3,sweep:.7,invert:1},dissolve:{duration:.24}},vn={camera:.62,cameraReduced:.06,parallax:.9,veil:.35,reading:.45,presence:.5,scatter:.42,scatterReduced:.2,arm:.32},Qi={bloomStrength:.55,bloomRadius:.08,bloomThreshold:.48,bloomKnee:.32,exposure:1.12,vignette:.42,grain:.022},nt={stagger:.56,flow:.9,outward:.55,near:.62,far:2.5,margin:1.12,density:1150,minStars:420,maxStars:2600,px:4,pxBright:6.2,gain:.72,steep:5,drift:3,twinkle:.2,parallax:.35,sway:.15,bloom:.45,calm:.62,column:.42,temps:[3400,5400,7400,15e3],tones:[.12,.66],saturation:.8};var ot={SPIN_MAX:3,PIVOT_MAX:12,STREAM_MAX:8,RATE_MAX:2,SIZE_MAX:.16},Gs=1200,ud=Gs/(2*Math.PI),ca=i=>Math.floor(i*ud+.5)/ud,Gp=i=>Math.max(Math.floor(i*Gs+.5),1)/Gs,dr=i=>i-Math.floor(i/Gs)*Gs,A1=i=>Number(i.toFixed(6)),dd=[.3,.6,.5,.8,.4,.7,.9,.5,.7,.4,.6,.8].map(i=>A1(ca(i))),xn=dd.map(i=>i.toFixed(6)),fr={uHole:{value:new We(0,0,0,1)},uHoleView:{value:new We(0,0,-1,0)},uViewport:{value:new ye(1,1)},uHoleReach:{value:2},uHoleDisc:{value:new We(0,1,0,.3)},uHoleRay:{value:new We(1,1,0,0)},uHoleBand:{value:new We(0,0,0,0)}},Co=`
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
#define TIME_QW ${ud.toFixed(6)}
float qRate(float w) { return floor(w * TIME_QW + 0.5) / TIME_QW; }
float qCycles(float r) { return max(floor(r * TIME_PERIOD + 0.5), 1.0) / TIME_PERIOD; }
`,R1=`
#define SPIN_MAX ${ot.SPIN_MAX.toFixed(4)}
#define PIVOT_MAX ${ot.PIVOT_MAX.toFixed(4)}
#define STREAM_MAX ${ot.STREAM_MAX.toFixed(4)}
#define RATE_MAX ${ot.RATE_MAX.toFixed(4)}
#define SIZE_MAX ${ot.SIZE_MAX.toFixed(4)}
`,gs=i=>Number(i).toFixed(4),C1=`
#define SC_STAGGER ${gs(nt.stagger)}
#define SC_NEAR ${gs(nt.near)}
#define SC_FAR ${gs(nt.far)}
#define SC_MARGIN ${gs(nt.margin)}
#define SC_STEEP ${gs(nt.steep)}
#define SC_DRIFT ${gs(nt.drift)}
#define SC_TONE0 ${gs(nt.tones[0])}
#define SC_TONE1 ${gs(nt.tones[1])}
#define SC_COLUMN ${gs(nt.column)}
`,fd=625341585,ur=1024,Po=`
${R1}
${C1}
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
    2.7 * cos(2.7 * p.y + ${xn[0]} * t) - 1.7 * cos(1.7 * p.z + ${xn[1]} * t + 2.0),
    2.1 * cos(2.1 * p.z - ${xn[2]} * t) - 1.9 * cos(1.9 * p.x - ${xn[3]} * t + 3.0),
    2.3 * cos(2.3 * p.x + ${xn[4]} * t) - 1.3 * cos(1.3 * p.y + ${xn[5]} * t + 1.0));
  vec3 q = vec3(p.y + p.z, p.z - p.x, p.x + p.y) * 1.9 + 4.0;
  v += 0.5 * vec3(
    3.1 * cos(3.1 * q.y - ${xn[6]} * t) - 2.6 * cos(2.6 * q.z + ${xn[7]} * t),
    2.9 * cos(2.9 * q.z + ${xn[8]} * t) - 3.3 * cos(3.3 * q.x - ${xn[9]} * t),
    2.4 * cos(2.4 * q.x - ${xn[10]} * t) - 2.8 * cos(2.8 * q.y + ${xn[11]} * t));
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
  uint h = uint(gl_VertexID) ^ ${fd}u;
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
`,Wp=`
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
`,qp=`
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
`,Xp=`
varying vec3 vColor;
varying float vSharp;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(q, q);
  if (r2 > 1.0) discard;
  float a = exp(-r2 * vSharp) * (1.0 - r2);
  gl_FragColor = vec4(vColor * a, 1.0);
}
`;var Qc=nt.temps.map(i=>$c(i,nt.saturation)),P1=1/32767,ha=1/255,Jp=[["look",4,Uint8Array],["spin",4,Int16Array],["pivot",3,Int16Array],["stream",4,Int16Array],["aux",4,Uint8Array]];function Yp(i){let e={pos:new Float32Array(i*3)};for(let[t,n,s]of Jp)e[t]=new s(i*n);return e}var Ht=i=>Math.max(i*P1,-1),pd=["position","aFromLook","aFromSpin","aFromPivot","aFromStream","aFromAux"],eh=["aTo","aToLook","aToSpin","aToPivot","aToStream","aToAux"],_n=(i,e,t)=>{let n=Ye((t-i)/(e-i),0,1);return n*n*(3-2*n)};function $p(i,e,t){return t>.5?_n(i-.06,i,e):t<-.5&&i>0?1-_n(1-i,1.06-i,e):1}function Kp(i){let e=4*i*(1-i);return e*e*(3-2*e)}var Vt=[0,0,0],Ei=[0,0,0],Wi=[0,0,0];function jp(i){try{return!!(i&&i.capabilities.isWebGL2!==!1&&i.extensions.has("EXT_color_buffer_float"))}catch{return!1}}var th=class{constructor(e,{renderer:t=null,gpuState:n=!1}={}){this.count=e,this.renderer=t,this.gpu=!!(n&&t),this.from=Yp(e),this.to=Yp(e),this.meta=new Float32Array(e*2);let s=fs(12648430);for(let c=0;c<e;c++)this.meta[c*2]=s();let r=new vt,a=(c,u,d)=>new gt(c,u,d).setUsage(_o);r.setAttribute("position",a(this.from.pos,3,!1)),r.setAttribute("aTo",a(this.to.pos,3,!1));for(let[c,u]of Jp){let d=c[0].toUpperCase()+c.slice(1);r.setAttribute(`aFrom${d}`,a(this.from[c],u,!0)),r.setAttribute(`aTo${d}`,a(this.to[c],u,!0))}r.setAttribute("aMeta",a(this.meta,2,!1)),this.geometry=r,this.uniforms={uTime:{value:0},uFlowTime:{value:0},uMorph:{value:1},uStagger:{value:.4},uSweep:{value:new D(.5,0,3)},uFlowAmp:{value:.6},uSwirl:{value:.8},uCarry:{value:new ye(0,0)},uDissolve:{value:0},uSide:{value:0},uToExpand:{value:1},uToSpread:{value:0},uToDim:{value:1},uEvolve:{value:1},uEvolveMode:{value:0},uFromExpand:{value:1},uFromSpread:{value:0},uFromDim:{value:1},uFromEvolve:{value:1},uFromEvolveMode:{value:0},uPixelScale:{value:1e3},uSizeScale:{value:1},uGain:{value:1},uFocus:{value:10},uDof:{value:1.6},uMinPx:{value:1.8},uMaxPx:{value:48},uTwinkle:{value:1},uFromTex:{value:0},uState0:{value:null},uState1:{value:null},uState2:{value:null},uState3:{value:null},uScatter:{value:0},uScatterKeep:{value:.01},uScatterTravel:{value:1},uScatterFrame:{value:new Rt},uScatterRay:{value:new We(1,1,0,0)},uScatterCenter:{value:new We(0,0,0,3)},uScatterLook:{value:new We(10,nt.gain,nt.px,nt.pxBright)},uScatterMotion:{value:new We(nt.flow,nt.outward,nt.twinkle,1)},uScatterTone0:{value:new D(...Qc[0])},uScatterTone1:{value:new D(...Qc[1])},uScatterTone2:{value:new D(...Qc[2])},uScatterTone3:{value:new D(...Qc[3])}};let o={transparent:!0,depthWrite:!1,depthTest:!0,blending:Kn,blendEquation:Gi,blendSrc:Un,blendDst:Un},l=this.gpu?{GPU_STATE:""}:{};this.material=new De({name:"UniverseParticles",defines:{...l},uniforms:this.uniforms,vertexShader:Po,fragmentShader:jc,...o}),this.ghostMaterial=new De({name:"UniverseParticlesGhost",defines:{...l},uniforms:{...this.uniforms,uSide:{value:1}},vertexShader:Po,fragmentShader:jc,...o}),this.overlayMaterial=new De({name:"UniverseParticlesFront",defines:{OVERLAY:"",...l},uniforms:{...this.uniforms,...fr},vertexShader:Po,fragmentShader:jc,...o,depthTest:!1}),this.points=new Fi(r,this.material),this.ghost=new Fi(r,this.ghostMaterial),this.overlay=new Fi(r,this.overlayMaterial);for(let c of[this.points,this.ghost,this.overlay])c.frustumCulled=!1,c.renderOrder=10;this.ghost.visible=!1,this.gpu&&this._initGpuState(),this.morphing=!1,this.duration=1,this.formation=null,this.drawCount=e,this.flowTime=0,this.lastBakeMs=0,this.envDirty=!1}_initGpuState(){let e=ur,t=Math.ceil(this.count/e),n=()=>{let a=new Ut(e,t,{count:4,type:ji,format:ci,minFilter:jt,magFilter:jt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});for(let o of a.textures)o.generateMipmaps=!1;return a};this.states=[n(),n()],this.stateIndex=0,this.bakeUniforms={...this.uniforms,uSnapshot:{value:0},uStateSize:{value:new ye(e,t)}},this.bakeMaterial=new De({name:"UniverseParticlesBake",glslVersion:yo,defines:{GPU_STATE:"",BAKE:""},uniforms:this.bakeUniforms,vertexShader:Po,fragmentShader:Wp,blending:Ti,depthTest:!1,depthWrite:!1});let s=new Fi(this.geometry,this.bakeMaterial);s.frustumCulled=!1,this.bakeScene=new vi,this.bakeScene.add(s),this.bakeCamera=new sr,this.readBuffer=null;let r=this.renderer.capabilities;this.gpuRead=!!(r.textureTypeReadable&&r.textureTypeReadable(ji)&&r.textureFormatReadable(ci))}get spareState(){return this.states?this.states[1-this.stateIndex]:null}setImmediate(e){this._copy(this.from,e),this._copy(this.to,e);for(let t=0;t<this.count;t++)this.meta[t*2+1]=0;this.envDirty=!1,this.formation=e,this._resetFrom(),this.uniforms.uMorph.value=1,this.uniforms.uDissolve.value=0,this.ghost.visible=!1,this.morphing=!1,this._upload()}setPair(e,t,n,s){this._copy(this.from,e),this._copy(this.to,t);for(let r=0;r<this.count;r++)this.meta[r*2+1]=0;this.envDirty=!1,this._resetFrom(),this.formation=t,this._start(n,s),this._upload()}_resetFrom(){let e=this.uniforms;e.uFromExpand.value=1,e.uFromSpread.value=0,e.uFromDim.value=1,e.uFromEvolve.value=1,e.uFromEvolveMode.value=0,e.uFromTex.value=0,e.uCarry.value.set(0,0)}_start(e,t){let n=this.uniforms;n.uMorph.value=0,n.uStagger.value=t?0:e.stagger,n.uSweep.value.set(e.sweep,e.invert,Math.max(.5,e.radius||3)),n.uFlowAmp.value=e.flow,n.uSwirl.value=e.swirl,n.uDissolve.value=t?1:0,this.ghost.visible=!!t,this.duration=Math.max(.05,e.duration),this.morphing=!0}morphTo(e,t,n,s){let r=performance.now(),a=this.uniforms,o=!1;if(!this.morphing&&a.uMorph.value>=1){if(this._swapSides(),a.uFromExpand.value=a.uToExpand.value,a.uFromSpread.value=a.uToSpread.value,a.uFromDim.value=a.uToDim.value,a.uFromEvolve.value=a.uEvolve.value,a.uFromEvolveMode.value=a.uEvolveMode.value,a.uFromTex.value=0,a.uCarry.value.set(0,0),this.envDirty){for(let l=0;l<this.count;l++)this.meta[l*2+1]=0;this.geometry.attributes.aMeta.needsUpdate=!0,this.envDirty=!1}this._copy(this.to,e),this._upload(eh)}else a.uTime.value=dr(t),this.gpu?(this._bakeGpu(),this._upload(eh)):(this.bake(t),this._upload()),a.uCarry.value.set(a.uFlowAmp.value,a.uSwirl.value),a.uFromExpand.value=1,a.uFromSpread.value=0,a.uFromDim.value=1,a.uFromEvolve.value=1,a.uFromEvolveMode.value=0,this._copy(this.to,e),o=!0;return this.formation=e,this._start(n,s),this.lastBakeMs=performance.now()-r,o}_bakeGpu(){let e=this.renderer,t=this.spareState,n=this.geometry.drawRange,s=n.start,r=n.count;this.geometry.setDrawRange(0,this.count),this.bakeUniforms.uSnapshot.value=0;let a=e.getRenderTarget(),o=e.autoClear;e.autoClear=!0,e.setRenderTarget(t),e.render(this.bakeScene,this.bakeCamera),e.setRenderTarget(a),e.autoClear=o,this.geometry.setDrawRange(s,r),this.stateIndex=1-this.stateIndex;let l=this.uniforms;l.uState0.value=t.textures[0],l.uState1.value=t.textures[1],l.uState2.value=t.textures[2],l.uState3.value=t.textures[3],l.uFromTex.value=1}update(e){let t=this.uniforms;return this.flowTime=dr(this.flowTime+e),t.uFlowTime.value=this.flowTime,this.morphing?(t.uMorph.value=Math.min(1,t.uMorph.value+e/this.duration),t.uMorph.value>=1&&(this.morphing=!1,t.uDissolve.value=0,this.ghost.visible=!1),this.morphing):!1}settle(){this.uniforms.uMorph.value=1,this.update(0),this.morphing=!1,this.uniforms.uDissolve.value=0,this.ghost.visible=!1}setDrawCount(e){this.drawCount=Math.max(1,Math.min(this.count,Math.round(e))),this.geometry.setDrawRange(0,this.drawCount)}_living(e,t,n,s,r){let a=e.pos,o=e.stream,l=e.spin,c=e.pivot,u=a[t*3],d=a[t*3+1],h=a[t*3+2],f=1,g=Ht(o[t*4+3])*ot.RATE_MAX;if(g>0){let p=hr(n*Gp(g)+s*7.31),m=ot.STREAM_MAX*p;u+=Ht(o[t*4])*m,d+=Ht(o[t*4+1])*m,h+=Ht(o[t*4+2])*m,f=_n(0,.16,p)*(1-_n(.74,1,p))}let v=ca(Ht(l[t*4+3])*ot.SPIN_MAX);if(v!==0){let p=Ht(l[t*4]),m=Ht(l[t*4+1]),_=Ht(l[t*4+2]),E=Math.sqrt(p*p+m*m+_*_)||1;p/=E,m/=E,_/=E;let y=Ht(c[t*3])*ot.PIVOT_MAX,S=Ht(c[t*3+1])*ot.PIVOT_MAX,M=Ht(c[t*3+2])*ot.PIVOT_MAX;cd(r,0,u-y,d-S,h-M,p,m,_,n*v),r[0]+=y,r[1]+=S,r[2]+=M}else r[0]=u,r[1]=d,r[2]=h;return f}_progress(e){let t=this.uniforms;if(t.uDissolve.value>.5)return this._e=t.uMorph.value>=.5?1:0,1;let n=this.meta[e*2],s=hr(n*91.3458),r=this.to.pos,a=r[e*3],o=r[e*3+1],l=r[e*3+2],c=Ye(Math.sqrt(a*a+o*o+l*l)/t.uSweep.value.z,0,1);t.uSweep.value.y>.5&&(c=1-c);let u=t.uStagger.value,d=u*(s+(c-s)*t.uSweep.value.x),h=Ye((t.uMorph.value-d)/(1-u),0,1);return this._e=h*h*h*(h*(h*6-15)+10),h}_evaluate(e,t){let n=this.uniforms,s=this.meta[e*2],r=this._progress(e),a=this._e,o=0,l=0;if(a<1){o=this._living(this.from,e,t,s,Vt);let p=this.from.pivot,m=n.uFromSpread.value*ot.PIVOT_MAX,_=n.uFromExpand.value;(m!==0||_!==1)&&(Vt[0]=(Vt[0]+Ht(p[e*3])*m)*_,Vt[1]=(Vt[1]+Ht(p[e*3+1])*m)*_,Vt[2]=(Vt[2]+Ht(p[e*3+2])*m)*_),o*=$p(this.from.aux[e*4]*ha,n.uFromEvolve.value,n.uFromEvolveMode.value)*n.uFromDim.value}if(a>0){l=this._living(this.to,e,t,s,Ei);let p=this.to.pivot,m=n.uToSpread.value*ot.PIVOT_MAX,_=n.uToExpand.value;Ei[0]=(Ei[0]+Ht(p[e*3])*m)*_,Ei[1]=(Ei[1]+Ht(p[e*3+1])*m)*_,Ei[2]=(Ei[2]+Ht(p[e*3+2])*m)*_}let c=$p(this.to.aux[e*4]*ha,n.uEvolve.value,n.uEvolveMode.value),u=this.from.look,d=this.to.look,h=l*c*n.uToDim.value,f=this._c;for(let p=0;p<3;p++){let m=u[e*4+p]*ha,_=d[e*4+p]*ha,E=m*m*o,y=_*_*h;f[p]=a<=0?E:a>=1?y:E+(y-E)*a}let g=u[e*4+3]*ha,v=d[e*4+3]*ha;return f[3]=g*g+(v*v-g*g)*a,a<=0?(Wi[0]=Vt[0],Wi[1]=Vt[1],Wi[2]=Vt[2]):a>=1?(Wi[0]=Ei[0],Wi[1]=Ei[1],Wi[2]=Ei[2]):(Wi[0]=Vt[0]+(Ei[0]-Vt[0])*a,Wi[1]=Vt[1]+(Ei[1]-Vt[1])*a,Wi[2]=Vt[2]+(Ei[2]-Vt[2])*a),r}bake(e){this._c||(this._c=new Float32Array(4));let t=dr(e),n=this.count,s=this.from,r=this.to,a=this.meta,o=this.uniforms,l=o.uDissolve.value>.5,c=o.uFlowAmp.value>1e-4?o.uCarry.value.x/o.uFlowAmp.value:0,u=!1;for(let d=0;d<n;d++){let h=this._evaluate(d,t),f=this._e,g=l?0:Kp(h)+c*a[d*2+1]*(1-h)*(1-h),v=f>=.5?r:s,p=v.spin[d*4],m=v.spin[d*4+1],_=v.spin[d*4+2],E=v.spin[d*4+3],y=v.pivot[d*3],S=v.pivot[d*3+1],M=v.pivot[d*3+2],w=v.aux[d*4+1],x=v.aux[d*4+2],A=ca(Ht(E)*ot.SPIN_MAX),R=Wi[0],I=Wi[1],L=Wi[2];if(A!==0){let C=Ht(p),F=Ht(m),B=Ht(_),V=Math.sqrt(C*C+F*F+B*B)||1;C/=V,F/=V,B/=V;let Y=Ht(y)*ot.PIVOT_MAX,N=Ht(S)*ot.PIVOT_MAX,k=Ht(M)*ot.PIVOT_MAX;cd(Vt,0,R-Y,I-N,L-k,C,F,B,-t*A),R=Vt[0]+Y,I=Vt[1]+N,L=Vt[2]+k}let U=this._c;s.pos[d*3]=R,s.pos[d*3+1]=I,s.pos[d*3+2]=L,s.spin[d*4]=p,s.spin[d*4+1]=m,s.spin[d*4+2]=_,s.spin[d*4+3]=E,s.pivot[d*3]=y,s.pivot[d*3+1]=S,s.pivot[d*3+2]=M,s.stream[d*4]=0,s.stream[d*4+1]=0,s.stream[d*4+2]=0,s.stream[d*4+3]=0,s.aux[d*4]=0,s.aux[d*4+1]=w,s.aux[d*4+2]=x,s.aux[d*4+3]=0,s.look[d*4]=Math.round(Math.sqrt(Ye(U[0],0,1))*255),s.look[d*4+1]=Math.round(Math.sqrt(Ye(U[1],0,1))*255),s.look[d*4+2]=Math.round(Math.sqrt(Ye(U[2],0,1))*255),s.look[d*4+3]=Math.round(Math.sqrt(Ye(U[3],0,1))*255),a[d*2+1]=g,g>0&&(u=!0)}this.envDirty=u}snapshot(e,t,n,s,r){if(this.gpu&&this.gpuRead&&this._snapshotGpu(t,n,s,r))return;this._c||(this._c=new Float32Array(4));let a=dr(e),o=this.uniforms,l=this._c,c=o.uFlowTime.value,u=o.uGain.value;o.uFromTex.value>.5&&this.settle();let d=o.uScatter.value,h=o.uScatterTravel.value>.5,f=o.uScatterCenter.value;for(let g=0;g<s;g++){let v=this._evaluate(g,a),p=Wi[0],m=Wi[1],_=Wi[2],E=this.meta[g*2];if(o.uDissolve.value<.5){let A=Kp(v),R=this.meta[g*2+1]*(1-v)*(1-v);if(A+R>.001){let I=hr(E*91.3458),L=hr(E*47.853);Zp(p*.55,m*.55,_*.55,c,Vt);let U=(o.uFlowAmp.value*A+o.uCarry.value.x*R)*(.85+.3*L);p+=Vt[0]*U,m+=Vt[1]*U,_+=Vt[2]*U;let C=(o.uSwirl.value*A+o.uCarry.value.y*R)*(.8+.4*I),F=Math.cos(C),B=Math.sin(C),V=F*p-B*_,Y=B*p+F*_;p=V,_=Y;let N=1+.15*Math.min(1,A+R);l[0]*=N,l[1]*=N,l[2]*=N}}let y=u*Math.min(4,l[3]/.02+.25),S=l[0]*y,M=l[1]*y,w=l[2]*y,x=l[3]*ot.SIZE_MAX*o.uSizeScale.value;if(d>0){let A=this._star(g,a,I1),R=1,I=0,L=0;if(h){let U=p-f.x,C=m-f.y,F=_-f.z,B=Math.sqrt(U*U+C*C+F*F),V=.45*(1-Ye(B/f.w,0,1))+.33*F1(p,m,_)+.22*hr(E*91.3458),Y=Ye((d-nt.stagger*V)/(1-nt.stagger),0,1);Zp(p*.42+2.3,m*.42+2.3,_*.42+2.3,c,Ei);let N=B>1e-4?U/B:0,k=B>1e-4?C/B:1,X=B>1e-4?F/B:0,j=o.uScatterMotion.value,J=(N*j.y+Ei[0]*j.x)*f.w,Re=(k*j.y+Ei[1]*j.x)*f.w,Ce=(X*j.y+Ei[2]*j.x)*f.w,Fe=_n(0,.62,Y),Q=_n(.42,1,Y);p+=J*Fe+(A.x-p-J)*Q,m+=Re*Fe+(A.y-m-Re)*Q,_+=Ce*Fe+(A.z-_-Ce)*Q;let ie=A.kept*_n(.5,.92,Y);R=A.kept>.5?1-ie:1-_n(.45,.95,Y),I=ie,L=ie}else A.kept>.5&&d>=.5?(p=A.x,m=A.y,_=A.z,R=0,I=_n(.4,1,d),L=1):R=1-_n(0,.6,d);S=S*R+A.r*I,M=M*R+A.g*I,w=w*R+A.b*I,x+=(A.px*A.depth/o.uPixelScale.value-x)*L}t[g*3]=p,t[g*3+1]=m,t[g*3+2]=_,n[g*3]=S,n[g*3+1]=M,n[g*3+2]=w,r&&(r[g]=x)}}_snapshotGpu(e,t,n,s){try{let r=this.renderer,a=this.spareState,o=ur,l=Math.ceil(n/o),c=this.geometry.drawRange,u=c.start,d=c.count;this.geometry.setDrawRange(0,this.count),this.bakeUniforms.uSnapshot.value=1;let h=r.getRenderTarget();r.setRenderTarget(a),r.render(this.bakeScene,this.bakeCamera),r.setRenderTarget(h),this.bakeUniforms.uSnapshot.value=0,this.geometry.setDrawRange(u,d);let f=this.readBuffer&&this.readBuffer.length>=o*l*4?this.readBuffer:this.readBuffer=new Float32Array(o*l*4);r.readRenderTargetPixels(a,0,0,o,l,f,void 0,0);for(let g=0;g<n;g++)e[g*3]=f[g*4],e[g*3+1]=f[g*4+1],e[g*3+2]=f[g*4+2];r.readRenderTargetPixels(a,0,0,o,l,f,void 0,1);for(let g=0;g<n;g++)t[g*3]=f[g*4],t[g*3+1]=f[g*4+1],t[g*3+2]=f[g*4+2];if(s){r.readRenderTargetPixels(a,0,0,o,l,f,void 0,2);for(let g=0;g<n;g++)s[g]=f[g*4]}return!0}catch(r){return console.warn("Universe: GPU snapshot failed, using the CPU mirror",r),!1}}_star(e,t,n){let s=this.uniforms,r=(e^fd)>>>0,a=()=>(r=L1(r))>>>8;n.kept=a()/16777216<s.uScatterKeep.value?1:0;let o=a()/16777216,l=a()/16777216,c=a()/16777216,u=Math.pow(a()/16777216,nt.steep),d=a()/16777216;a();let h=1-c,f=1+Math.floor(h*(nt.drift-.001)),g=(hr(o-t*(f/Gs))*2-1)*nt.margin,v=(l*2-1)*nt.margin,p=s.uScatterLook.value,m=s.uScatterRay.value,_=p.x*(nt.near+(nt.far-nt.near)*c),E=_*(g+m.z)/m.x,y=_*(v+m.w)/m.y,S=-_,M=s.uScatterFrame.value.elements;n.x=M[0]*E+M[4]*y+M[8]*S+M[12],n.y=M[1]*E+M[5]*y+M[9]*S+M[13],n.z=M[2]*E+M[6]*y+M[10]*S+M[14];let[w,x]=nt.tones,A=d<w?s.uScatterTone0.value:d<x?s.uScatterTone1.value:s.uScatterTone2.value,R=d<w?s.uScatterTone1.value:d<x?s.uScatterTone2.value:s.uScatterTone3.value,I=d<w?d/w:d<x?(d-w)/(x-w):(d-x)/(1-x),L=1-_n(1,nt.margin,Math.abs(g)),U=s.uScatterMotion.value.w+(1-s.uScatterMotion.value.w)*_n(nt.column,nt.column+.25,Math.abs(g)),C=p.y*(.08+.92*u)*(.6+.4*h)*L*U;return n.r=(A.x+(R.x-A.x)*I)*C,n.g=(A.y+(R.y-A.y)*I)*C,n.b=(A.z+(R.z-A.z)*I)*C,n.px=p.z+(p.w-p.z)*u,n.depth=_,n}_copy(e,t){e.pos.set(t.pos),e.look.set(t.look),e.spin.set(t.spin),e.pivot.set(t.pivot),e.stream.set(t.stream),e.aux.set(t.aux)}_upload(e){let t=this.geometry.attributes;if(e)for(let n of e)t[n].needsUpdate=!0;else for(let n in t)t[n].needsUpdate=!0}_swapSides(){let e=this.from;this.from=this.to,this.to=e;let t=this.geometry;for(let n=0;n<pd.length;n++){let s=t.attributes[pd[n]];t.setAttribute(pd[n],t.attributes[eh[n]]),t.setAttribute(eh[n],s)}}markDirty(){this.uniforms.uFromTex.value>.5&&(this.uniforms.uFromTex.value=0,this.settle()),this._upload()}dispose(){if(this.overlay.removeFromParent(),this.geometry.dispose(),this.material.dispose(),this.ghostMaterial.dispose(),this.overlayMaterial.dispose(),this.states){for(let e of this.states)e.dispose();this.bakeMaterial.dispose()}}},I1={x:0,y:0,z:0,r:0,g:0,b:0,px:0,depth:1,kept:0};function L1(i){let e=Math.imul(i,747796405)+2891336453>>>0,t=Math.imul((e>>>(e>>>28)+4^e)>>>0,277803737)>>>0;return(t>>>22^t)>>>0}function F1(i,e,t){return .5+.25*(Math.sin(1.9*i+1*e-1.4*t+1.6*Math.sin(-.9*i+1.5*e+.8*t+1))+Math.sin(.7*i-1.6*e+1.7*t+1.4*Math.sin(1.3*i+.6*e+1.4*t+2)))}function Zp(i,e,t,n,s){let r=dd,a=2.7*Math.cos(2.7*e+r[0]*n)-1.7*Math.cos(1.7*t+r[1]*n+2),o=2.1*Math.cos(2.1*t-r[2]*n)-1.9*Math.cos(1.9*i-r[3]*n+3),l=2.3*Math.cos(2.3*i+r[4]*n)-1.3*Math.cos(1.3*e+r[5]*n+1),c=(e+t)*1.9+4,u=(t-i)*1.9+4,d=(i+e)*1.9+4;return a+=.5*(3.1*Math.cos(3.1*u-r[6]*n)-2.6*Math.cos(2.6*d+r[7]*n)),o+=.5*(2.9*Math.cos(2.9*d+r[8]*n)-3.3*Math.cos(3.3*c-r[9]*n)),l+=.5*(2.4*Math.cos(2.4*c-r[10]*n)-2.8*Math.cos(2.8*u+r[11]*n)),s[0]=a*.16,s[1]=o*.16,s[2]=l*.16,s}var e0=[0,0,0],pr=new Float64Array(6);function Ai(i,e=e0){let t=i.rng()*2-1,n=i.rng()*$e,s=Math.sqrt(1-t*t);return e[0]=s*Math.cos(n),e[1]=t,e[2]=s*Math.sin(n),e}var qi=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t],D1=Array.from({length:8},()=>[0,0,0]),Qp=0;function st(i,e,t){let n=D1[Qp=Qp+1&7];return n[0]=i[0]+(e[0]-i[0])*t,n[1]=i[1]+(e[1]-i[1])*t,n[2]=i[2]+(e[2]-i[2])*t,n}function di(i,e,t,n,s=e0){return s[0]=i[0]*e+i[1]*t+i[2]*n,s[1]=i[3]*e+i[4]*t+i[5]*n,s[2]=i[6]*e+i[7]*t+i[8]*n,s}function mr(i,e,t,n,s,r,a,o,l){Ui(pr,s,r,a);let c=Math.cos(l)*o,u=Math.sin(l)*o;return i[0]=e+pr[0]*c+pr[3]*u,i[1]=t+pr[1]*c+pr[4]*u,i[2]=n+pr[2]*c+pr[5]*u,i}function*t0(i,{rMin:e=4.2,rMax:t=9.5,color:n=K.deep,brightness:s=.008,size:r=.016,flatten:a=.75,spin:o=.012}={}){let l=[0,0,0];for(;i.remaining>0;){i.tick()&&(yield),Ai(i,l);let c=e+(t-e)*Math.pow(i.rng(),.7),u=i.point(l[0]*c,l[1]*c*a,l[2]*c,n,s*(.4+i.rng()*1.2),r*(.7+i.rng()*.8));i.orbit(u,0,1,0,o),i.twinkle(u,.4)}}function en(i,e,t,n,s,r,a,o,l,c={}){for(let u=0;u<e;u++){let d=Math.abs(i.gauss()),h=i.point(t+i.gauss()*r,n+i.gauss()*r,s+i.gauss()*r,a,o*(c.falloff?Math.exp(-d*c.falloff)+.25:1)*(.6+i.rng()*.8),l*(.75+i.rng()*.6));c.spin&&i.orbit(h,i.rng()-.5,i.rng()-.5,i.rng()-.5,c.spin*(.5+i.rng()),t,n,s),c.twinkle&&i.twinkle(h,c.twinkle),c.evolve!==void 0&&i.evolve(h,c.evolve),c.anchor&&i.anchor(h,c.anchor[0],c.anchor[1],c.anchor[2])}}function i0(i,e,t,n,s,r,a,o,l,c,u,d,h=.01){let f=r-t,g=a-n,v=o-s;for(let p=0;p<e;p++){let m=i.point(t+i.gauss()*h,n+i.gauss()*h,s+i.gauss()*h,l,c*(.6+i.rng()*.8),u*(.8+i.rng()*.5));i.flow(m,f,g,v,d*(.85+i.rng()*.3))}}var U1=(i,e,t)=>{let n=Math.hypot(i,e,t);return[i/n,e/n,t/n]},Ni={radius:.3,normal:U1(.06,1,.16),disc:[.5,1.75],tIn:7e3},n0={id:"ch7",seed:2707,radius:2.9,center:[0,0,0],view:{yaw:0,pitch:.13},tint:Yt.deepest,morph:"chapter",reading:{preview:.12,evolve:[0,1],mode:-1,dim:[1,.5],expand:[1,1.2]},*build(i){let e=new Float64Array(6),t=Ni.normal;Ui(e,t[0],t[1],t[2]);let n=[0,0,0],s=i.quota(.16),[r,a]=Ni.disc,o=[0,0,0];for(let f=0;f<s;f++){i.tick()&&(yield);let g=Math.pow(i.rng(),1.7),v=r+(a-r)*g,p=i.rng()*$e,m=i.gauss()*.012*(1+3*g),_=Math.cos(p)*v,E=Math.sin(p)*v,y=e[0]*_+e[3]*E+t[0]*m,S=e[1]*_+e[4]*E+t[1]*m,M=e[2]*_+e[5]*E+t[2]*m,w=Ni.tIn*Math.pow(v/r,-.75),x=i.point(y,S,M,at(w,1,o),(.3-.17*g)*(.55+.45*w/Ni.tIn)*(.6+.6*i.rng()),.011+.008*i.rng());i.orbit(x,t[0],t[1],t[2],.62/Math.pow(v,1.5)),i.evolve(x,.08+.9*(.35+.65*g)*i.rng())}let l=Math.min(i.remaining,70);for(let f=0;f<l;f++){i.tick()&&(yield),Ai(i,n);let g=1.9+Math.pow(i.rng(),.8)*3.6,v=i.point(n[0]*g,n[1]*g*.55,n[2]*g,at(2400+900*i.rng(),.85,o),.36+.2*i.rng(),.022+.012*i.rng());i.twinkle(v,.7),i.flow(v,n[0]*.25,n[1]*.15,n[2]*.25,.025)}let c=i.quota(.42),u=[];for(let f=0;f<26;f++){i.tick()&&(yield),Ai(i,n);let g=2+i.rng()*4.4;u.push([n[0]*g,n[1]*g*.55,n[2]*g])}for(let f=0;f<c;f++){i.tick()&&(yield);let g=u[f%u.length],v=u[(f*7+3)%u.length],p=i.rng(),m=g[0]+(v[0]-g[0])*p+i.gauss()*.12,_=g[1]+(v[1]-g[1])*p+i.gauss()*.12,E=g[2]+(v[2]-g[2])*p+i.gauss()*.12,y=Math.sqrt(m*m+_*_+E*E)||1,S=i.point(m,_,E,st(K.mist,K.web,i.rng()*.7),.016+.024*i.rng(),.014+.008*i.rng());i.flow(S,m/y*.6,_/y*.6,E/y*.6,.03+.02*i.rng())}let d=i.quota(.08),h=at(3600,.55);for(let f=0;f<d;f++){i.tick()&&(yield);let g=f%9,v=g*2.39996,p=3.6+g%3*.9,m=Math.cos(v)*p*.55,_=Math.sin(g*1.7)*.9,E=-1.6-Math.abs(Math.sin(v))*p*.8,y=i.point(m+i.gauss()*.13,_+i.gauss()*.05,E+i.gauss()*.13,h,.018+.02*i.rng(),.016);i.flow(y,m*.08,_*.08,E*.08,.02)}}};var tn=32767,ih=class{constructor(e,t){this.count=e,this.n=0,this.rng=fs(t),this.pos=new Float32Array(e*3),this.look=new Uint8Array(e*4),this.spin=new Int16Array(e*4),this.pivot=new Int16Array(e*3),this.stream=new Int16Array(e*4),this.aux=new Uint8Array(e*4),this.keys=null,this._spare=null,this._ticks=0}tick(){return(++this._ticks&1023)===0}*run(e,t,n){return yield*e.build(this),this.n<this.count&&(yield*(e.fill||n)(this)),yield*this.finalize(t)}get remaining(){return this.count-this.n}quota(e){return Math.max(0,Math.min(this.remaining,Math.round(this.count*e)))}gauss(){if(this._spare!==null){let s=this._spare;return this._spare=null,s}let e=0;for(;e===0;)e=this.rng();let t=this.rng(),n=Math.sqrt(-2*Math.log(e));return this._spare=n*Math.sin($e*t),n*Math.cos($e*t)}range(e,t){return e+(t-e)*this.rng()}point(e,t,n,s,r=1,a=.02){if(this.n>=this.count)return-1;let o=this.n++;this.pos[o*3]=e,this.pos[o*3+1]=t,this.pos[o*3+2]=n;let l=o*4;return this.look[l]=Math.round(Math.sqrt(Ye(s[0]*r,0,1))*255),this.look[l+1]=Math.round(Math.sqrt(Ye(s[1]*r,0,1))*255),this.look[l+2]=Math.round(Math.sqrt(Ye(s[2]*r,0,1))*255),this.look[l+3]=Math.round(Math.sqrt(Ye(a/ot.SIZE_MAX,0,1))*255),o}orbit(e,t,n,s,r,a=0,o=0,l=0){if(e<0||r===0)return;let c=Math.sqrt(t*t+n*n+s*s)||1,u=e*4;this.spin[u]=Math.round(t/c*tn),this.spin[u+1]=Math.round(n/c*tn),this.spin[u+2]=Math.round(s/c*tn),this.spin[u+3]=Math.round(Ye(r/ot.SPIN_MAX,-1,1)*tn);let d=e*3;this.pivot[d]=Math.round(Ye(a/ot.PIVOT_MAX,-1,1)*tn),this.pivot[d+1]=Math.round(Ye(o/ot.PIVOT_MAX,-1,1)*tn),this.pivot[d+2]=Math.round(Ye(l/ot.PIVOT_MAX,-1,1)*tn)}anchor(e,t,n,s){if(e<0)return;let r=e*3;this.pivot[r]=Math.round(Ye(t/ot.PIVOT_MAX,-1,1)*tn),this.pivot[r+1]=Math.round(Ye(n/ot.PIVOT_MAX,-1,1)*tn),this.pivot[r+2]=Math.round(Ye(s/ot.PIVOT_MAX,-1,1)*tn)}flow(e,t,n,s,r){if(e<0||r<=0)return;let a=e*4;this.stream[a]=Math.round(Ye(t/ot.STREAM_MAX,-1,1)*tn),this.stream[a+1]=Math.round(Ye(n/ot.STREAM_MAX,-1,1)*tn),this.stream[a+2]=Math.round(Ye(s/ot.STREAM_MAX,-1,1)*tn),this.stream[a+3]=Math.max(1,Math.round(Ye(r/ot.RATE_MAX,0,1)*tn))}evolve(e,t){e>=0&&(this.aux[e*4]=Math.round(Ye(t,0,1)*255))}twinkle(e,t){e>=0&&(this.aux[e*4+1]=Math.round(Ye(t,0,1)*255))}glint(e,t){e>=0&&(this.aux[e*4+2]=Math.round(Ye(t,0,1)*255))}key(e,t){e<0||(this.keys||(this.keys=new Float32Array(this.count).fill(-1)),this.keys[e]=t)}*finalize(e){for(;this.n<this.count;)this.point(0,0,0,B1,0,0);let t=this.count,n=65536,s=new Uint32Array(t),r=new Uint32Array(n+1),a=this.pos,o=this.keys;for(let d=0;d<t;d+=Ws){let h=Math.min(t,d+Ws);for(let f=d;f<h;f++){let g=o&&o[f]>=0?o[f]:Math.atan2(a[f*3],a[f*3+2])/$e+.5;g=Ye(g+(this.rng()-.5)*.004,0,.99999);let v=g*n|0;s[f]=v,r[v+1]++}yield}for(let d=1;d<=n;d++)r[d]+=r[d-1];let l=new Uint32Array(t);for(let d=0;d<t;d+=Ws){let h=Math.min(t,d+Ws);for(let f=d;f<h;f++)l[r[s[f]]++]=f;yield}let c={count:t,pos:new Float32Array(t*3),look:new Uint8Array(t*4),spin:new Int16Array(t*4),pivot:new Int16Array(t*3),stream:new Int16Array(t*4),aux:new Uint8Array(t*4)},u=new Uint32Array(t);for(let d=0;d<t;d+=Ws){let h=Math.min(t,d+Ws);for(let f=d;f<h;f++)u[f]=l[e[f]];yield}for(let d=0;d<t;d+=Ws){let h=Math.min(t,d+Ws);N1(c.pos,a,u,d,h),r0(c.look,this.look,u,d,h,t),s0(c.spin,this.spin,u,d,h),O1(c.pivot,this.pivot,u,d,h),s0(c.stream,this.stream,u,d,h),r0(c.aux,this.aux,u,d,h,t),yield}return c}},Ws=8192;function N1(i,e,t,n,s){for(let r=n,a=n*3;r<s;r++,a+=3){let o=t[r]*3;i[a]=e[o],i[a+1]=e[o+1],i[a+2]=e[o+2]}}function O1(i,e,t,n,s){for(let r=n,a=n*3;r<s;r++,a+=3){let o=t[r]*3;i[a]=e[o],i[a+1]=e[o+1],i[a+2]=e[o+2]}}function s0(i,e,t,n,s){for(let r=n,a=n*4;r<s;r++,a+=4){let o=t[r]*4;i[a]=e[o],i[a+1]=e[o+1],i[a+2]=e[o+2],i[a+3]=e[o+3]}}function r0(i,e,t,n,s,r){let a=new Uint32Array(i.buffer,i.byteOffset,r),o=new Uint32Array(e.buffer,e.byteOffset,r);for(let l=n;l<s;l++)a[l]=o[t[l]]}var B1=[0,0,0],a0=new Map;function o0(i){let e=a0.get(i);if(e)return e;e=new Uint32Array(i);for(let n=0;n<i;n++)e[n]=n;let t=fs(24301+i);for(let n=i-1;n>0;n--){let s=Math.floor(t()*(n+1)),r=e[n];e[n]=e[s],e[s]=r}return a0.set(i,e),e}var Mn={radius:2,matrix:ps(.1,0,-.27),spin:.05,nodeOrbit:{radius:2.95,matrix:ps(.36,0,-.12),speed:.012,phase:.42}},yn=[0,0,0],nh=[0,0,0],l0={id:"cover",seed:1101,radius:3.15,center:[0,0,0],view:{yaw:0,pitch:.4},tint:Yt.deep,morph:"cover",reading:{preview:1},*build(i){let e=Mn.matrix;di(e,0,1,0,nh);let t=[nh[0],nh[1],nh[2]],n=(f,g,v,p,m,_)=>(di(e,f,g,v,yn),i.point(yn[0],yn[1],yn[2],p,m,_)),s=26,r=i.quota(.64),a=.34,o=[];for(let f=0;f<s;f++)o.push([i.rng()*$e,2+Math.floor(i.rng()*4),.55+.85*i.rng()]);for(let f=0;f<r;f++){i.tick()&&(yield);let g=f%s,[v,p,m]=o[g],_=-1+2*(g+.5)/s+i.gauss()*.0035,E=i.rng()*$e,y=.35+1.5*E,S=Mn.radius+.085*Math.cos(2*E+.5),M=.15*Math.sin(E+.7)+.045*Math.sin(3*E),w=a*(.86+.2*Math.sin(2*E+1.1)),x=_*w*Math.cos(y),A=_*w*Math.sin(y)*.8,R=i.gauss()*.0035,I=(S+x+R)*Math.cos(E),L=(S+x+R)*Math.sin(E),U=M+A+R,C=.35+.65*Math.pow(.5+.5*Math.cos(E-2.2),1.5),F=g===0||g===s-1?1.9:1,B=(.4+.6*Math.pow(Math.abs(_),4))*F,V=.45+.55*Math.pow(.5+.5*Math.sin(E*p+v),2),Y=x<0?Math.min(1,-x/a):0,N=st(st(K.white,K.ice,.2+.4*(1-Math.abs(_))),K.iceHi,.4*Y*C),k=i.rng()<1/140,X=n(I,U,L,N,(k?.9:.36)*C*B*V*m,k?.034:.0085+i.rng()*.006);if(i.orbit(X,t[0],t[1],t[2],Mn.spin),i.rng()<.3){let j=.22+i.rng()*.25;di(e,-Math.sin(E)*j,0,Math.cos(E)*j,yn),i.flow(X,yn[0],yn[1],yn[2],.1+i.rng()*.12)}k&&i.twinkle(X,.8)}let l=i.quota(.03);for(let f=0;f<l;f++){i.tick()&&(yield);let g=f%7,v=i.rng()*$e,p=.42+.1*Math.sin(v*2+g)+g*.03,m=Mn.radius+p*Math.cos(v*1.5+g),_=.15*Math.sin(v+.7)+p*.6*Math.sin(v*1.5+g*2),E=n(m*Math.cos(v),_,m*Math.sin(v),st(K.ice,K.steel,.4),.06*(.5+.5*Math.sin(v*3+g)),.009);i.orbit(E,t[0],t[1],t[2],Mn.spin*.9)}let c=i.quota(.06);for(let f=0;f<c;f++){i.tick()&&(yield);let g=i.rng()*$e,v=Mn.radius+i.gauss()*.16,p=n(v*Math.cos(g),.15*Math.sin(g+.7)+i.gauss()*.09,v*Math.sin(g),K.steel,.05+i.rng()*.05,.016+i.rng()*.012);i.orbit(p,t[0],t[1],t[2],Mn.spin*.8)}let u=i.quota(.075),d=[0,0,0];for(let f=0;f<u;f++){i.tick()&&(yield);let g=.1+1.45*Math.pow(i.rng(),.8),v=i.rng()*$e,p=Math.pow(1-g/1.6,2.2);at(1700+5200*Math.pow(p,.6),1,d);let m=st(K.deep,d,cr(.015,.16,p)),_=n(g*Math.cos(v),i.gauss()*.02*g,g*Math.sin(v),m,.04+.16*p,.011+.01*i.rng());i.orbit(_,t[0],t[1],t[2],Math.min(1.6,.16/Math.pow(g,1.25))),di(e,-Math.cos(v)*g*.35,0,-Math.sin(v)*g*.35,yn),i.flow(_,yn[0],yn[1],yn[2],.05+i.rng()*.05)}en(i,i.quota(.012),0,0,0,.035,K.sun,.5,.018,{spin:.6,falloff:1.2}),en(i,i.quota(.004),0,0,0,.012,K.core,.9,.016,{spin:.9});let h=i.quota(.09);for(let f=0;f<h;f++){i.tick()&&(yield);let g=2.45+Math.pow(i.rng(),1.4)*2.4,v=i.rng()*$e,p=n(g*Math.cos(v),i.gauss()*.07,g*Math.sin(v),st(K.deep,K.reflection,i.rng()*.6),.007+.018*i.rng()*(3.2/g),.012+.008*i.rng());i.orbit(p,t[0],t[1],t[2],.028)}}};var Io=(i,e,t)=>{let n=Math.hypot(i,e,t);return[i/n,e/n,t/n]};function md(){let i=[],e=[{p:[0,0,0],level:0}],t=[],n={c:[0,0,0],n:Io(.18,1,.32),r:2.05,level:1,w:.09},s={c:[0,0,0],n:Io(-.62,.55,.58),r:1.18,level:1,w:-.16};i.push(n,s);let r=[0,0,0],a=new Float64Array(6);for(let o=0;o<5;o++){let l=o/5*$e+.3;mr(r,0,0,0,n.n[0],n.n[1],n.n[2],n.r,l);let c=[r[0],r[1],r[2]],u=e.push({p:c,level:1})-1;t.push([0,u]),Ui(a,n.n[0],n.n[1],n.n[2]);let d=-Math.sin(l)*a[0]+Math.cos(l)*a[3],h=-Math.sin(l)*a[1]+Math.cos(l)*a[4],f=-Math.sin(l)*a[2]+Math.cos(l)*a[5],g=Io(d+.25*n.n[0],h+.25*n.n[1],f+.25*n.n[2]),v=.58,p=Io(c[0],c[1],c[2]),m=[c[0]+p[0]*v*.92,c[1]+p[1]*v*.92,c[2]+p[2]*v*.92];i.push({c:m,n:g,r:v,level:2,w:.42*(o%2?1:-1)});for(let _=0;_<3;_++){let E=_/3*$e+o;mr(r,m[0],m[1],m[2],g[0],g[1],g[2],v,E);let y=[r[0],r[1],r[2]],S=e.push({p:y,level:2})-1;t.push([u,S]);let M=Io(Math.sin(o*3+_),Math.cos(o+_*2),Math.sin(_*5+1));i.push({c:y,n:M,r:.17,level:3,w:1.15*(_%2?1:-1)})}}for(let o=0;o<3;o++){mr(r,0,0,0,s.n[0],s.n[1],s.n[2],s.r,o/3*$e+.9);let l=e.push({p:[r[0],r[1],r[2]],level:1})-1;t.push([0,l]),t.push([l,1+o*2%5*4])}for(let o=0;o<5;o++)t.push([1+o*4,1+(o+2)%5*4]);return{loops:i,nodes:e,links:t}}var c0={id:"ch1",seed:2101,radius:3.2,center:[0,0,0],view:{yaw:0,pitch:.26},tint:Yt.ice,morph:"chapter",reading:{preview:.7},compose:{contents:{wide:{scale:.93}}},*build(i){let{loops:e,nodes:t,links:n}=md(),s=[0,0,0],r=[K.white,K.ice,qi(K.ice,K.white,.5),qi(K.iceHi,K.white,.35)],a=e.reduce((h,f)=>h+f.r*(f.level===1?1.5:1),0),o=i.quota(.56);for(let h of e){let f=Math.round(o*h.r*(h.level===1?1.5:1)/a),g=h.level===1?23:h.level===2?9:4,v=h.level===1?.022:h.level===2?.015:.009;for(let p=0;p<f;p++){i.tick()&&(yield);let m=0;for(let E=0;E<6&&(m=i.rng()*$e,!(i.rng()<.22+.78*Math.pow(.5+.5*Math.sin(m*g),3)));E++);mr(s,h.c[0],h.c[1],h.c[2],h.n[0],h.n[1],h.n[2],h.r+i.gauss()*v,m);let _=i.point(s[0]+i.gauss()*v*.4,s[1]+i.gauss()*v*.4,s[2]+i.gauss()*v*.4,r[h.level],(h.level===3?.3:.2)*(.5+i.rng()*.9),.01+i.rng()*.009);i.orbit(_,h.n[0],h.n[1],h.n[2],h.w,h.c[0],h.c[1],h.c[2])}}en(i,i.quota(.025),0,0,0,.06,K.sun,.34,.016,{falloff:1.6,spin:.5}),en(i,i.quota(.006),0,0,0,.03,K.core,.9,.02,{spin:.8});let l=qi(K.white,K.hot,.6),c=i.quota(.075)/(t.length-1);for(let h=1;h<t.length;h++){yield;let f=t[h];en(i,Math.round(c*(f.level===1?1.7:.75)),f.p[0],f.p[1],f.p[2],f.level===1?.036:.022,f.level===1?l:K.white,.3,.014,{falloff:1.4,twinkle:.3})}let u=i.quota(.17)/n.length;for(let[h,f]of n){yield;let g=t[h].p,v=t[f].p,p=t[f].level,m=p===2?.55:.3;i0(i,Math.round(u*(p===2?.7:1.3)),g[0],g[1],g[2],v[0],v[1],v[2],st(K.yellow,K.sun,.35),.3,.016,m,.012)}let d=i.quota(.1);for(let h=0;h<d;h++){i.tick()&&(yield);let f=.5+Math.pow(i.rng(),.6)*2.8,g=i.rng()*2-1,v=i.rng()*$e,p=Math.sqrt(1-g*g),m=i.point(f*p*Math.cos(v),f*g*.7,f*p*Math.sin(v),st(K.deep,K.ice,i.rng()*.6),.006+.014*i.rng(),.01+i.rng()*.008);i.orbit(m,.18,1,.32,.04),i.twinkle(m,.9)}}};var Lo={matrix:ps(0,.62,0),layers:[-.92,0,.92],half:1.5,rackCols:[-.72,.72],rackRows:[-1.1,-.55,0,.55,1.1],rack:{w:.9,h:.46,d:.3}},Sn=[0,0,0],h0={id:"ch2",seed:2202,radius:2.55,center:[0,.05,0],view:{yaw:0,pitch:.5},tint:Yt.ice,morph:"chapter",reading:{preview:.6},*build(i){let e=Lo.matrix,t=(C,F,B,V,Y,N)=>(di(e,C,F,B,Sn),i.point(Sn[0],Sn[1],Sn[2],V,Y,N)),n=(C,F,B,V,Y)=>{di(e,F,B,V,Sn),i.flow(C,Sn[0],Sn[1],Sn[2],Y)},{layers:s,rackCols:r,rackRows:a,rack:o,half:l}=Lo,c=[];for(let C of s)for(let F of r)for(let B of a)F>0&&B===0&&C===0||c.push([F,C,B]);let u=i.quota(.3),d=Math.floor(u/c.length),{w:h,h:f,d:g}=o,v=[];for(let C of[-1,1])for(let F of[-1,1])v.push([[C*h/2,0,F*g/2],[C*h/2,f,F*g/2]]);for(let C of[0,f])for(let F of[-1,1])v.push([[-h/2,C,F*g/2],[h/2,C,F*g/2]]);for(let C of[0,f])for(let F of[-1,1])v.push([[F*h/2,C,-g/2],[F*h/2,C,g/2]]);let p=v.map(([C,F])=>Math.hypot(F[0]-C[0],F[1]-C[1],F[2]-C[2])),m=p.reduce((C,F)=>C+F,0);for(let[C,F,B]of c)for(let V=0;V<d;V++){i.tick()&&(yield);let Y=i.rng()*m,N=0;for(;Y>p[N]&&N<v.length-1;)Y-=p[N++];let[k,X]=v[N],j=i.rng(),J=t(C+k[0]+(X[0]-k[0])*j,F+k[1]+(X[1]-k[1])*j,B+k[2]+(X[2]-k[2])*j,st(K.white,K.ice,.5),.14+.08*i.rng(),.011+.006*i.rng());i.twinkle(J,.05)}let _=i.quota(.17),E=.042;for(let C=0;C<_;C++){i.tick()&&(yield);let[F,B,V]=c[Math.floor(i.rng()*c.length)],Y=i.rng(),N,k,X,j=(J,Re)=>Math.round(J/E)*E-Re%E/2;Y<.5?(N=F-Math.sign(F)*h/2,k=Math.min(f,Math.max(0,j(i.rng()*f,f))),X=Math.max(-g/2,Math.min(g/2,j((i.rng()-.5)*g,g)))):Y<.8?(N=Math.max(-h/2,Math.min(h/2,j((i.rng()-.5)*h,h)))+F,k=f,X=Math.max(-g/2,Math.min(g/2,j((i.rng()-.5)*g,g)))):(N=Math.max(-h/2,Math.min(h/2,j((i.rng()-.5)*h,h)))+F,k=Math.min(f,Math.max(0,j(i.rng()*f,f))),X=(i.rng()<.5?-1:1)*g/2),t(N,B+k,V+X,K.steel,.05+.05*i.rng(),.011)}let y=i.quota(.05);for(let C=0;C<y;C++){i.tick()&&(yield);let[F,B,V]=c[Math.floor(i.rng()*c.length)],Y=i.rng()<.08,N=Math.round(i.rng()*9)/9*f*.9+f*.05,k=Math.round((i.rng()-.5)*6)/6*g*.85,X=t(F-Math.sign(F)*(h/2+.006),B+N,V+k,Y?K.yellow:K.ice,Y?.6:.45,.014);i.twinkle(X,1)}let S=i.quota(.07),M=.15,w=Math.round(2*l/M);for(let C=0;C<S;C++){i.tick()&&(yield);let F=s[Math.floor(i.rng()*s.length)]-.02,B=-l+Math.floor(i.rng()*(w+1))*M,V=-l+Math.floor(i.rng()*(w+1))*M;t(B,F,V,K.deep,.05+.03*i.rng(),.012)}let x=i.quota(.025);for(let C=0;C<x;C++){i.tick()&&(yield);let F=(C&1?1:-1)*l,B=(C&2?1:-1)*l;t(F,-.94+i.rng()*1.9,B,K.steel,.1,.012)}let A=i.quota(.03);for(let C=0;C<A;C++){i.tick()&&(yield);let F=s[C%3],B=i.rng()*$e,V=.13+i.gauss()*.006,Y=t(V*Math.cos(B),F+.02+i.gauss()*.006,V*Math.sin(B),K.core,.6,.014);di(e,0,1,0,Sn),i.orbit(Y,Sn[0],Sn[1],Sn[2],.6)}let R=i.quota(.08),I=[0,0,0];for(let C=0;C<R;C++){i.tick()&&(yield);let F=s[C%3]+.03,B=i.rng()<.5?-1:1,V=.15+Math.pow(i.rng(),1.6)*.6,Y=1-V/.75;at(1900+4700*Math.pow(Y,1.4),1,I);let N=t(i.gauss()*.035,F+Math.abs(i.gauss())*.02,B*V,st(K.iceHi,I,cr(0,.3,Y)),.16+.36*Y*Y,.013);n(N,0,0,-B*.07,.05+.04*i.rng())}let L=i.quota(.1);for(let C=0;C<L;C++){i.tick()&&(yield);let F=s[C%3]+.03,B=i.rng()<.5?-1:1,V;if(i.rng()<.6)V=t(i.gauss()*.012,F,B*l,K.iceHi,.24,.013),n(V,0,0,-B*(l-.72),.22+.08*i.rng());else{let Y=(a[Math.floor(i.rng()*4)]+.275)*1,N=i.rng()<.5?-1:1;V=t(N*l,F,Y,st(K.ice,K.white,.35),.2,.012),n(V,-N*l,0,0,.16+.06*i.rng())}}let U=i.quota(.05);for(let C=0;C<U;C++){i.tick()&&(yield);let F=t(i.gauss()*.02,-.95,i.gauss()*.02,st(K.hot,K.white,i.rng()*.5),.26,.012);n(F,0,2.4,0,.12+.04*i.rng())}}};var gd=.62,u0=ps(.42,-.18,.28),k1=[0,0,0];function xs(i,e=k1){let t=i*$e,n=2+Math.cos(3*t);return di(u0,n*Math.cos(2*t)*gd,n*Math.sin(2*t)*gd,Math.sin(3*t)*gd,e)}function vd(i,e){let n=xs(i-1e-4,[0,0,0]),s=xs(i+1e-4,[0,0,0]),r=s[0]-n[0],a=s[1]-n[1],o=s[2]-n[2],l=Math.sqrt(r*r+a*a+o*o);r/=l,a/=l,o/=l;let c=di(u0,0,0,1,[0,0,0]),u=a*c[2]-o*c[1],d=o*c[0]-r*c[2],h=r*c[1]-a*c[0],f=Math.sqrt(u*u+d*d+h*h)||1;return u/=f,d/=f,h/=f,e[0]=r,e[1]=a,e[2]=o,e[3]=u,e[4]=d,e[5]=h,e[6]=a*h-o*d,e[7]=o*u-r*h,e[8]=r*d-a*u,e[9]=l/(2*1e-4),e}var da=[.04,.2,.37,.53,.7,.87],ua=.8,d0={id:"ch3",seed:2303,radius:2.55,center:[0,0,0],view:{yaw:0,pitch:.22},tint:Yt.deep,morph:"chapter",reading:{preview:1,evolve:[.42,1],mode:1},*build(i){let e=new Float64Array(10),t=[0,0,0],n=5,s=.12,r=i.quota(.52);for(let f=0;f<r;f++){i.tick()&&(yield);let g=f%n,v=i.rng();vd(v,e),xs(v,t);let p=g/n*$e+v*$e*2,m=s*(.92+i.rng()*.16),_=(e[3]*Math.cos(p)+e[6]*Math.sin(p))*m,E=(e[4]*Math.cos(p)+e[7]*Math.sin(p))*m,y=(e[5]*Math.cos(p)+e[8]*Math.sin(p))*m,S=i.rng()<.012,M=i.point(t[0]+_,t[1]+E,t[2]+y,S?K.yellow:st(K.white,K.ice,.3+.4*(g/n)),S?.8:.19+.12*i.rng(),S?.042:.012+.008*i.rng()),w=.16;i.flow(M,e[0]*w,e[1]*w,e[2]*w,.32+.06*(g%2)),v>ua&&i.evolve(M,.42+(v-ua)/(1-ua)*.56),i.key(M,v)}let a=i.quota(.08);for(let f=0;f<a;f++){i.tick()&&(yield);let g=i.rng();xs(g,t),vd(g,e);let v=i.point(t[0]+i.gauss()*.03,t[1]+i.gauss()*.03,t[2]+i.gauss()*.03,K.steel,.07,.016);i.flow(v,e[0]*.1,e[1]*.1,e[2]*.1,.2),g>ua&&i.evolve(v,.42+(g-ua)/(1-ua)*.56),i.key(v,g)}let o=i.quota(.07),l=i.quota(.2),c=[];da.forEach((f,g)=>{xs(f,t),vd(f,e);let v=[t[0],t[1],t[2]];en(i,Math.round(o/da.length),v[0],v[1],v[2],.06,st(K.orange,K.sun,.45),.32,.018,{falloff:1.1,twinkle:.4});let p=g%2?1:-1,m=.3+.06*(g%3),_=[v[0]+e[3]*p*(m+.1),v[1]+e[4]*p*(m+.1),v[2]+e[5]*p*(m+.1)],E=[e[6],e[7],e[8]];if(c.push({c:_,n:E,r:m,w:.55*p}),g%2===0){let y=[_[0]+e[3]*p*(m+.18),_[1]+e[4]*p*(m+.18),_[2]+e[5]*p*(m+.18)];c.push({c:y,n:[e[0],e[1],e[2]],r:.15,w:-1.1*p})}});let u=c.reduce((f,g)=>f+g.r,0);for(let f of c){let g=Math.round(l*f.r/u);for(let v=0;v<g;v++){i.tick()&&(yield),mr(t,f.c[0],f.c[1],f.c[2],f.n[0],f.n[1],f.n[2],f.r+i.gauss()*.012,i.rng()*$e);let p=i.point(t[0],t[1],t[2],st(K.deep,K.ice,.35),.22+.12*i.rng(),.012+.006*i.rng());i.orbit(p,f.n[0],f.n[1],f.n[2],f.w,f.c[0],f.c[1],f.c[2])}}let d=i.quota(.04),h=[0,0,0];for(let f=0;f<d;f++){i.tick()&&(yield),xs(da[f%da.length],t);let g=i.point(t[0]+i.gauss()*.22,t[1]+i.gauss()*.22,t[2]+i.gauss()*.22,at(2300+1300*i.rng(),1,h),.13,.012);i.twinkle(g,1),i.glint(g,.25)}}};var qs={a:.19,matrix:ps(.55,.62,.18),spin:.045,axis:[0,1,0]};function xd(){let i=new Map,e=(s,r,a)=>i.set(`${s},${r},${a}`,[s,r,a]);for(let s=-4;s<=4;s++)for(let r=-4;r<=4;r++)for(let a=-4;a<=4;a++)Math.abs(s)+Math.abs(r)+Math.abs(a)<=3&&e(s,r,a);let t=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];for(let s of t){let r=t.filter(a=>a[0]*s[0]+a[1]*s[1]+a[2]*s[2]===0);for(let a=1;a<=11;a++){let o=a<5?1:0;for(let l=-o;l<=o;l++)for(let c=-o;c<=o;c++){if(Math.abs(l)+Math.abs(c)>o)continue;let u=r[0],d=r[2];e(s[0]*a+u[0]*l+d[0]*c,s[1]*a+u[1]*l+d[1]*c,s[2]*a+u[2]*l+d[2]*c)}if(a===4||a===7||a===9){let l=a===4?5:a===7?3:2;for(let c of r)for(let u=1;u<=l;u++)e(s[0]*a+c[0]*u,s[1]*a+c[1]*u,s[2]*a+c[2]*u)}}}let n=[...i.values()];return n.sort((s,r)=>Math.hypot(...s)-Math.hypot(...r)),n}function Fo(i,e){let t=qs.a;return di(qs.matrix,i[0]*t,i[1]*t,i[2]*t,e)}var f0={id:"ch4",seed:2404,radius:2.45,center:[0,0,0],view:{yaw:0,pitch:.28},tint:Yt.deep,morph:"chapter",reading:{preview:.92,evolve:[.74,1],mode:1},*build(i){let e=xd(),t=Math.hypot(11,1,0),n=[0,0,0],s=[0,0,0],r=qs.axis,a=i.quota(.6),o=Math.max(3,Math.floor(a/e.length));for(let d of e){Fo(d,n);let h=Math.hypot(d[0],d[1],d[2])/t,f=Math.min(.97,.04+h*.92),g=h<.45?qi(K.deep,K.ice,Math.pow(h/.45,1.5)):qi(K.ice,K.white,Math.pow((h-.45)/.55,1.3)),v=(1+.5*Math.max(0,(h-.6)/.4))*(.75+.25*Math.min(1,h/.3));for(let p=0;p<o;p++){i.tick()&&(yield);let m=p<o*.4,_=m?.008:.026,E=i.point(n[0]+i.gauss()*_,n[1]+i.gauss()*_,n[2]+i.gauss()*_,g,(m?.42:.035)*v,m?.012:.01);i.orbit(E,r[0],r[1],r[2],qs.spin),i.evolve(E,f)}}let l=i.quota(.14),c=e.slice(Math.floor(e.length*.45));for(let d=0;d<l;d++){i.tick()&&(yield);let h=c[Math.floor(i.rng()*c.length)];Fo(h,n),Ai(i,s);let f=.25+i.rng()*.35,g=i.point(n[0]+s[0]*f,n[1]+s[1]*f,n[2]+s[2]*f,st(K.ice,K.white,i.rng()),.12,.01);i.flow(g,-s[0]*f,-s[1]*f,-s[2]*f,.22+.15*i.rng()),i.orbit(g,r[0],r[1],r[2],qs.spin)}en(i,i.quota(.012),0,0,0,.04,K.sun,.4,.02,{falloff:1.2});let u=i.quota(.18);for(let d=0;d<u;d++){i.tick()&&(yield),Ai(i,s);let h=1+Math.pow(i.rng(),.7)*2.6,f=i.point(s[0]*h,s[1]*h*.85,s[2]*h,st(K.mist,K.web,i.rng()),.014+.02*i.rng(),.011+.006*i.rng());i.orbit(f,i.rng()-.5,1,i.rng()-.5,.05+.08*i.rng()),i.twinkle(f,.5)}}};var fa=.5,p0={id:"ch5",seed:2505,radius:2.7,center:[0,0,0],view:{yaw:0,pitch:.3},tint:Kc(Eo.yellow),morph:"chapter",reading:{preview:.9,evolve:[.7,1],mode:1},*build(i){let e=new Float64Array(6),t=[0,0,0],n=[[.06,1,.12],[.92,.5,.18],[-.62,.55,.62],[.25,.32,-.95],[-.88,.25,-.35],[.5,-.32,.82],[0,.2,1]],s=[];for(let h=0;h<84;h++){i.tick()&&(yield);let f=n[h%n.length],g=f[0]+i.gauss()*.07,v=f[1]+i.gauss()*.07,p=f[2]+i.gauss()*.07,m=Math.hypot(g,v,p),_=.82+Math.pow(i.rng(),.9)*1.45;s.push({n:[g/m,v/m,p/m],r:_,dir:i.rng()<.8?1:-1,trains:1+Math.floor(i.rng()*4),phase:i.rng()*$e,weight:.6+i.rng()*.8})}let r=i.quota(.5),a=[0,0,0];for(let h=0;h<3;h++)a[h]=K.white[h]*.45+K.sun[h]*.55;let o=s.reduce((h,f)=>h+f.weight*f.r,0);for(let h of s){let f=Math.round(r*h.weight*h.r/o);Ui(e,h.n[0],h.n[1],h.n[2]);for(let g=0;g<f;g++){i.tick()&&(yield);let v=0;for(let R=0;R<5&&(v=i.rng()*$e,!(i.rng()<.25+.75*Math.pow(.5+.5*Math.cos(v*h.trains+h.phase),2)));R++);let p=h.r+i.gauss()*.006,m=Math.cos(v)*p,_=Math.sin(v)*p,E=i.gauss()*.006,y=e[0]*m+e[3]*_+h.n[0]*E,S=e[1]*m+e[4]*_+h.n[1]*E,M=e[2]*m+e[5]*_+h.n[2]*E,w=Math.pow(.9/h.r,2),x=i.rng()<.05,A=i.point(y,S,M,x?K.sun:st(st(K.ice,K.deep,.25),a,Math.min(1,w)*.75),x?.5:(.12+.14*i.rng())*(.7+.5*w),x?.016:.0075+.005*i.rng());i.orbit(A,h.n[0],h.n[1],h.n[2],h.dir*.3/Math.pow(h.r,1.5)),i.evolve(A,.2+i.rng()*.78),x&&i.glint(A,1)}}let l=i.quota(.2);for(let h=0;h<l;h++){i.tick()&&(yield),Ai(i,t);let f=t[0],g=t[1],v=t[2];Ui(e,f,g,v);let p=.8+Math.pow(i.rng(),.7)*1.6,m=i.rng()*$e,_=Math.cos(m)*p,E=Math.sin(m)*p,y=i.point(e[0]*_+e[3]*E,e[1]*_+e[4]*E,e[2]*_+e[5]*E,st(K.white,K.ice,.5),.07+.08*i.rng(),.007+.004*i.rng());i.orbit(y,f,g,v,.3/Math.pow(p,1.5)),i.evolve(y,.2+i.rng()*.78),i.twinkle(y,.3)}let c=i.quota(.05);for(let h=0;h<c;h++){i.tick()&&(yield),Ai(i,t);let f=fa*(1.02+Math.abs(i.gauss())*.08),g=i.point(t[0]*f,t[1]*f,t[2]*f,st(K.core,K.sun,i.rng()*.7),.18,.016);i.orbit(g,0,1,0,.12),i.twinkle(g,.6)}let u=i.quota(.06);for(let h=0;h<u;h++){i.tick()&&(yield),Ai(i,t);let f=fa*1.15,g=.8+i.rng()*1.6,v=i.point(t[0]*f,t[1]*f,t[2]*f,K.sun,.02+.03*i.rng(),.012);i.flow(v,t[0]*g,t[1]*g,t[2]*g,.06+.06*i.rng())}let d=i.quota(.08);for(let h=0;h<d;h++){i.tick()&&(yield);let f=2.7+Math.pow(i.rng(),1.3)*2.2,g=i.rng()*$e,v=i.point(f*Math.cos(g),i.gauss()*.12,f*Math.sin(g),K.deep,.012+.014*i.rng(),.012);i.orbit(v,.05,1,.1,.34/Math.pow(f,1.5))}}};var _d=(i,e,t)=>{let n=Math.hypot(i,e,t);return[i/n,e/n,t/n]},Xs=[{c:[-2.05,.32,-.35],n:_d(.32,1,.5),r:1.3,w:.07,kind:"bright",share:.4,arms:2,pitch:.27,bulge:.2,spread:.13,beads:0},{c:[2.1,-.28,.32],n:_d(-.55,.62,.72),r:1.15,w:-.08,kind:"deep",share:.36,arms:3,pitch:.42,bulge:.07,spread:.24,beads:1},{c:[.35,1.45,-1.7],n:_d(.1,.6,1),r:.42,w:.12,kind:"faint",share:.05,arms:2,pitch:.32,bulge:.14,spread:.18,beads:0}],yd={bright:{core:at(4300,.85),arm:at(5300,.8),outer:at(6400,.7),disc:qi(K.dust,at(4600),.25),knot:at(9e3,.8),halo:at(4500,.8),br:1,glow:.52},deep:{core:at(5e3,.8),arm:at(15e3,.95),outer:at(22e3,.95),disc:qi(K.dust,K.reflection,.45),knot:K.halpha,young:at(25e3),halo:qi(at(5600,.6),K.reflection,.4),br:1.15,glow:.42},faint:{core:at(5200,.6),arm:at(5800,.5),outer:at(6200,.4),disc:qi(K.dust,K.mist,.5),knot:at(6e3,.5),halo:at(5600,.5),br:.8,glow:.3}},sh=[[0,1],[1,0],[0,2],[2,1]],m0={id:"ch6",seed:2606,radius:3.05,center:[0,.1,0],view:{yaw:0,pitch:.24},tint:Yt.deep,morph:"chapter",reading:{preview:.35,spread:[0,.3]},compose:{chapter:{wide:{cx:.7,scale:.8}},contents:{wide:{scale:.86}}},*build(i){let e=new Float64Array(6),t=i.count;for(let r of Xs){Ui(e,r.n[0],r.n[1],r.n[2]);let a=Math.round(t*r.share),o=yd[r.kind],l=Math.tan(r.pitch),c=r.kind==="bright";for(let u=0;u<a;u++){i.tick()&&(yield);let d=i.rng(),h,f,g,v,p,m;if(d<r.bulge)h=Math.abs(i.gauss())*r.r*(c?.16:.11),f=i.rng()*$e,g=i.gauss()*r.r*(c?.09:.06),v=o.core,p=(.3+.3*i.rng())*o.br,m=.014;else if(d<r.bulge+.64){let x=0,A=0;for(let I=0;I<5&&(x=Math.pow(i.rng(),.75),!(!r.beads||(A=Math.pow(.5+.5*Math.sin(x*29+u%r.arms*2.1),6),i.rng()<.3+.7*A)));I++);if(h=r.r*(.12+.88*x),f=u%r.arms/r.arms*$e+Math.log(h/(r.r*.12))/l+i.gauss()*r.spread*(.6+x),g=i.gauss()*.03,v=st(o.core,st(o.arm,o.outer,x*x),Math.min(1,x*(c?1.3:2.4))),p=(.12+.2*i.rng())*(1.15-x*.55)*o.br,m=.011+.008*i.rng(),r.beads&&A>.6){let I=i.rng()<.45;v=st(v,I?o.knot:o.young,I?.8:.7),p*=I?2:1.7}i.rng()<.03&&(p=.6*o.br,m=.024)}else h=r.r*Math.pow(i.rng(),.6),f=i.rng()*$e,g=i.gauss()*.05,v=o.disc,p=(.04+.05*i.rng())*o.br,m=.013;let _=Math.cos(f)*h,E=Math.sin(f)*h,y=r.c[0]+e[0]*_+e[3]*E+r.n[0]*g,S=r.c[1]+e[1]*_+e[4]*E+r.n[1]*g,M=r.c[2]+e[2]*_+e[5]*E+r.n[2]*g,w=i.point(y,S,M,v,p,m);i.orbit(w,r.n[0],r.n[1],r.n[2],r.w,r.c[0],r.c[1],r.c[2]),i.twinkle(w,.12)}}let n=i.quota(.06);for(let r=0;r<n;r++){i.tick()&&(yield);let[a,o]=sh[r%sh.length],l=Xs[a].c,c=Xs[o].c,u=c[0]-l[0],d=c[1]-l[1],h=c[2]-l[2],f=.012,g=i.point(l[0]+i.gauss()*f,l[1]+i.gauss()*f,l[2]+i.gauss()*f,qi(K.ice,K.iceHi,.3),.13+.16*i.rng(),.011);i.flow(g,u,d,h,.045+.01*i.rng()),i.anchor(g,(l[0]+c[0])/2,(l[1]+c[1])/2,(l[2]+c[2])/2)}let s=i.quota(.08);for(let r=0;r<s;r++){i.tick()&&(yield);let a=i.rng(),o=-2.6+5.2*a+i.gauss()*.6,l=i.point(o,i.gauss()*.7,i.gauss()*.8,st(K.mist,K.web,a),.012+.015*i.rng(),.016);i.anchor(l,o*.5,0,0),i.twinkle(l,.5)}}};var z1=(i,e,t)=>{let n=Math.hypot(i,e,t);return[i/n,e/n,t/n]},Do={normal:z1(.12,1,.28),arms:7,rMax:2.78},g0={id:"ch8",seed:2808,radius:2.85,center:[0,0,0],view:{yaw:0,pitch:.5},tint:Yt.deep,morph:"chapter",reading:{preview:.3,expand:[1,.82]},compose:{chapter:{wide:{cx:.75,scale:.8}}},*build(i){let e=new Float64Array(6),t=Do.normal;Ui(e,t[0],t[1],t[2]);let n=[0,0,0],s=.27,r=i.quota(.62),a=at(4600,.5);for(let c=0;c<r;c++){i.tick()&&(yield);let u=c%Do.arms,d=(c>>3)%5,h=Math.pow(i.rng(),.7),f=.06+Do.rMax*h,g=Math.log(f/.06)/Math.tan(s)*.42,v=u/Do.arms*$e+g+(d-2)*.016*(.5+h)+i.gauss()*.0035*(.4+h),p=i.gauss()*.006*(.4+h)+Math.sin(v*2+u)*.07*h,m=Math.cos(v),_=Math.sin(v),E=(e[0]*m+e[3]*_)*f+t[0]*p,y=(e[1]*m+e[4]*_)*f+t[1]*p,S=(e[2]*m+e[5]*_)*f+t[2]*p,M=Math.pow(1-h,2.4),w=u%2?st(a,K.white,.25*(1-h)):st(K.white,K.ice,.35+.4*h),x=st(st(w,K.white,M*.85),K.core,M*M*M),A=u%2?1.1:1,R=i.point(E,y,S,x,(.16+.14*i.rng())*(.45+1.1*M)*(1.15-.7*h)*A,.0075+.005*i.rng()),I=.42/Math.tan(s),L=.08+f*.07,U=-m+I*_,C=-_-I*m,F=Math.sqrt(U*U+C*C);i.flow(R,(e[0]*U+e[3]*C)/F*L,(e[1]*U+e[4]*C)/F*L,(e[2]*U+e[5]*C)/F*L,.16+.1*i.rng()),i.orbit(R,t[0],t[1],t[2],.07)}let o=i.quota(.1);for(let c=0;c<o;c++){i.tick()&&(yield);let u=.2+Math.pow(i.rng(),.8)*Do.rMax,d=i.rng()*$e,h=Math.cos(d),f=Math.sin(d),g=i.point((e[0]*h+e[3]*f)*u,(e[1]*h+e[4]*f)*u+i.gauss()*.05,(e[2]*h+e[5]*f)*u,st(K.deep,K.ice,.3),.02+.02*i.rng(),.01);i.flow(g,-(e[0]*h+e[3]*f)*u*.3,-(e[1]*h+e[4]*f)*u*.3,-(e[2]*h+e[5]*f)*u*.3,.06),i.orbit(g,t[0],t[1],t[2],.08)}let l=i.quota(.12);for(let c=0;c<l;c++){i.tick()&&(yield),Ai(i,n);let u=2.6+i.rng()*2.4,d=i.point(n[0]*u,n[1]*u*.8,n[2]*u,st(K.deep,K.ice,i.rng()*.4),.012+.02*i.rng(),.011);i.flow(d,-n[0]*u*.4,-n[1]*u*.32,-n[2]*u*.4,.04+.03*i.rng())}en(i,i.quota(.014),0,0,0,.04,K.sun,.3,.012,{falloff:1.5,spin:1.2,twinkle:.8}),en(i,i.quota(.004),0,0,0,.012,K.core,.7,.012,{spin:1.6,twinkle:.5})}};var ma={yaw:0,pitch:.2},pa=[Math.sin(ma.yaw)*Math.cos(ma.pitch),Math.sin(ma.pitch),Math.cos(ma.yaw)*Math.cos(ma.pitch)],H1=.87,v0={id:"seed",seed:2909,radius:1.9,center:[0,0,0],view:ma,tint:Kc(Eo.yellow),morph:"seed",reading:{preview:1},compose:{reading:{wide:{scale:.37}}},*build(i){let e=[0,0,0],t=i.quota(.46);for(let d=0;d<t;d++){i.tick()&&(yield),Ai(i,e);let h=Math.abs(i.gauss())*.09*(.6+.4*i.rng()),f=Math.exp(-h*18),g=i.point(e[0]*h,e[1]*h,e[2]*h,st(K.sun,K.core,.25+.75*f),.008+.022*f,.01);i.orbit(g,i.rng()-.5,i.rng()-.5,i.rng()-.5,.4+1.2*i.rng())}let n=i.quota(.18);for(let d=0;d<n;d++){i.tick()&&(yield),Ai(i,e);let h=.1+Math.abs(i.gauss())*.22,f=i.point(e[0]*h,e[1]*h,e[2]*h,K.yellow,(.01+.012*i.rng())*(1-.35*i.rng()),.011);i.orbit(f,e[2],1,-e[0],.3+.5*i.rng()),i.twinkle(f,.5)}let s=i.quota(.1),r=[],a=new Float64Array(6);Ui(a,pa[0],pa[1],pa[2]);let o=Math.cos(H1);for(let d=0;d<56;d++){i.tick()&&(yield);let h=o+(1-o)*i.rng(),f=i.rng()*$e,g=Math.sqrt(1-h*h),v=pa[0]*h+(a[0]*Math.cos(f)+a[3]*Math.sin(f))*g,p=pa[1]*h+(a[1]*Math.cos(f)+a[4]*Math.sin(f))*g,m=pa[2]*h+(a[2]*Math.cos(f)+a[5]*Math.sin(f))*g,_=.3+Math.pow(i.rng(),1.4)*1;r.push([v,p,m,_,i.rng()<.75?1:-1,i.rng()*$e,.5+i.rng()*1.4])}let l=new Float64Array(6),c=qi(K.white,K.hot,.3);for(let d=0;d<s;d++){i.tick()&&(yield);let[h,f,g,v,p,m,_]=r[d%r.length];Ui(l,h,f,g);let E=i.rng(),y=m-p*E*_,S=Math.cos(y)*v,M=Math.sin(y)*v,w=Math.pow(1-E,1.4),x=Math.min(1,Math.max(0,(v-.35)/.45)),A=.25+.75*x*x*(3-2*x),R=i.point(l[0]*S+l[3]*M,l[1]*S+l[4]*M,l[2]*S+l[5]*M,c,(.012+.05*w)*(1.2-v*.4)*(.78-.3*(v-.3))*A,.008+.003*w);i.orbit(R,h,f,g,p*.32/Math.pow(v,1.5)),i.twinkle(R,.3)}let u=i.quota(.08);for(let d=0;d<u;d++){i.tick()&&(yield);let h=d%5,f=i.rng(),g=.35+f*2.4,v=h*1.2566+Math.log(g/.35)*2.2+i.gauss()*.02,p=Math.cos(v)*g,m=Math.sin(v)*g,_=Math.sin(v*.5+h)*.18*f,E=i.point(p,_,m,st(K.deep,K.ice,.5*(1-f)),(.03+.04*i.rng())*(1-.6*f),.009),y=.25+g*.15;i.flow(E,(-Math.cos(v)-Math.sin(v)*.45)*y,0,(-Math.sin(v)+Math.cos(v)*.45)*y,.08),i.orbit(E,0,1,0,.1)}}},x0={id:"origin",seed:3001,radius:3.2,center:[0,0,0],view:{yaw:0,pitch:.35},tint:Yt.deep,morph:"intro",reading:{preview:1},*build(i){let e=[0,0,0];for(;i.remaining>0;){i.tick()&&(yield),Ai(i,e);let t=5.5+Math.pow(i.rng(),.5)*9,n=i.point(e[0]*t,e[1]*t*.7,e[2]*t,st(K.steel,K.ice,i.rng()*.3),.008+.012*i.rng(),.02);i.orbit(n,0,1,0,.02+.02*i.rng())}}};var gr={origin:x0,cover:l0,ch1:c0,ch2:h0,ch3:d0,ch4:f0,ch5:p0,ch6:m0,ch7:n0,ch8:g0,seed:v0},V1={preview:1,evolve:[1,1],mode:0,expand:[1,1],spread:[0,0],dim:[1,1]};for(let i of Object.values(gr))i.reading={...V1,...i.reading};function _0(i,e){return i==="cover"?"cover":i==="ending-ready"?"seed":i==="origin"?"origin":`ch${Math.max(1,Math.min(8,e|0||1))}`}function*y0(i,e){let t=gr[i]||gr.cover;return yield*new ih(e,t.seed).run(t,o0(e),t0)}function Md(i,e){let t=y0(i,e),n;do n=t.next();while(!n.done);return n.value}function ga(i,e){let t=fs(3001),n={count:e,pos:new Float32Array(e*3),look:new Uint8Array(e*4),spin:new Int16Array(e*4),pivot:new Int16Array(e*3),stream:new Int16Array(e*4),aux:new Uint8Array(e*4)},s=i.pos,r=K.steel,a=K.ice,o=Math.round(Math.sqrt(.02/ot.SIZE_MAX)*255);for(let l=0;l<e;l++){let c=s[l*3],u=s[l*3+1],d=s[l*3+2],h=Math.sqrt(c*c+u*u+d*d);if(h<.001){let p=t()*2-1,m=t()*Math.PI*2,_=Math.sqrt(1-p*p);c=_*Math.cos(m),u=p,d=_*Math.sin(m),h=1}let f=(5.5+Math.sqrt(t())*9)/h;n.pos[l*3]=c*f,n.pos[l*3+1]=u*f*.7,n.pos[l*3+2]=d*f;let g=t()*.3,v=.008+.012*t();n.look[l*4]=Math.round(Math.sqrt(Math.min(1,(r[0]+(a[0]-r[0])*g)*v))*255),n.look[l*4+1]=Math.round(Math.sqrt(Math.min(1,(r[1]+(a[1]-r[1])*g)*v))*255),n.look[l*4+2]=Math.round(Math.sqrt(Math.min(1,(r[2]+(a[2]-r[2])*g)*v))*255),n.look[l*4+3]=o,n.spin[l*4+1]=32767,n.spin[l*4+3]=Math.round((.02+.02*t())/ot.SPIN_MAX*32767)}return n}var rh=class{constructor(e,t=null){this.count=e,this.limit=e>1e5?9:12,this.map=new Map,this.pending=new Map,this.worker=t,this.lastBuildMs=0}peek(e){let t=this.map.get(e);return t?(this.map.delete(e),this.map.set(e,t),t):null}get(e){let t=this.peek(e);if(t)return t;let n=performance.now(),s=Md(e,this.count);return this.lastBuildMs=performance.now()-n,this._store(e,s)}get async(){return!!(this.worker&&this.worker.alive)}request(e,{origin:t=!1}={}){let n=this.peek(e);if(n&&(!t||n.origin))return Promise.resolve(n);let s=this.pending.get(e);if(s&&(!t||s.origin))return s.promise;if(!this.async){let o=this.get(e);return t&&!o.origin&&(o.origin=ga(o,this.count)),Promise.resolve(o)}let r=performance.now(),a=this.worker.build(e,this.count,t).then(o=>{this.pending.delete(e),this.lastBuildMs=performance.now()-r;let l=this.map.get(e);return l?(o.origin&&!l.origin&&(l.origin=o.origin),l):this._store(e,o)},o=>{this.pending.delete(e),console.warn("Universe: formation worker failed, building on the main thread \u2014",o&&o.message);let l=this.get(e);return t&&!l.origin&&(l.origin=ga(l,this.count)),l});return this.pending.set(e,{promise:a,origin:t}),a}_store(e,t){let n=gr[e]||gr.cover;for(t.id=n.id,t.spec=n,this.map.set(e,t);this.map.size>this.limit;)this.map.delete(this.map.keys().next().value);return t}job(e){let t=y0(e,this.count),n=this,s=0,r=.5;return{id:e,result:null,step(a){if(this.result)return!0;let o=performance.now(),l=o+a,c,u=o;do{let d=u;c=t.next(),u=performance.now(),r=r*.8+(u-d)*.2}while(!c.done&&u+r<l);return s+=u-o,c.done?(n.lastBuildMs=s,this.result=n.map.get(e)||n._store(e,c.value),!0):!1}}}has(e){return this.map.has(e)}delete(e){this.map.delete(e)}get size(){return this.map.size}clear(){this.map.clear()}};var G1=4e3;function M0(i){i.onmessage=e=>{let t=e.data||{};if(t.type==="build")try{let n=Md(t.id,t.count),s=[n.pos.buffer,n.look.buffer,n.spin.buffer,n.pivot.buffer,n.stream.buffer,n.aux.buffer],r=null;t.origin&&(r=ga(n,t.count),s.push(r.pos.buffer,r.look.buffer,r.spin.buffer,r.pivot.buffer,r.stream.buffer,r.aux.buffer)),i.postMessage({type:"built",req:t.req,data:n,origin:r},s)}catch(n){i.postMessage({type:"error",req:t.req,message:String(n&&n.message||n)})}},i.postMessage({type:"ready"})}function S0(){return typeof window>"u"&&typeof self<"u"&&typeof self.postMessage=="function"&&typeof importScripts=="function"}var ah=class i{static create(e){if(typeof Worker>"u"||!e)return null;let t=null,n=!1;try{if(e.src)t=e.src;else{let s=e.text||e.textContent||"";if(s.length<1e3||typeof Blob>"u"||typeof URL>"u"||!URL.createObjectURL)return null;t=URL.createObjectURL(new Blob([s],{type:"text/javascript"})),n=!0}return new i(new Worker(t),n?t:null)}catch{return n&&t&&URL.revokeObjectURL(t),null}}constructor(e,t){this.worker=e,this.blobUrl=t,this.alive=!0,this.ready=!1,this.seq=0,this.jobs=new Map,this.timer=setTimeout(()=>{this.ready||this.fail(new Error("formation worker did not start"))},G1),e.onmessage=n=>this.onMessage(n.data||{}),e.onerror=n=>{n.preventDefault?.(),this.fail(new Error(n&&n.message||"formation worker error"))}}onMessage(e){if(e.type==="ready"){this.ready=!0,clearTimeout(this.timer),this.blobUrl&&(URL.revokeObjectURL(this.blobUrl),this.blobUrl=null);return}let t=this.jobs.get(e.req);if(t)if(this.jobs.delete(e.req),e.type==="built"){let n=e.data;e.origin&&(n.origin=e.origin),t.resolve(n)}else t.reject(new Error(e.message||"build failed"))}build(e,t,n){return this.alive?new Promise((s,r)=>{let a=++this.seq;this.jobs.set(a,{resolve:s,reject:r});try{this.worker.postMessage({type:"build",req:a,id:e,count:t,origin:!!n})}catch(o){this.jobs.delete(a),r(o)}}):Promise.reject(new Error("formation worker unavailable"))}fail(e){if(this.alive){this.alive=!1,clearTimeout(this.timer);try{this.worker.terminate()}catch{}this.blobUrl&&URL.revokeObjectURL(this.blobUrl);for(let t of this.jobs.values())t.reject(e);this.jobs.clear()}}dispose(){this.fail(new Error("disposed"))}};var W1=[[.09,1e4,26e3],[.26,7500,1e4],[.54,6e3,7500],[.82,5200,6e3],[.96,3800,5200],[1,2900,3800]];function q1(i,e){for(let[t,n,s]of W1)if(i<t)return n*Math.pow(s/n,e);return 6e3}var oh=class{constructor(e){let t=fs(7741),n=new Float32Array(e*3),s=new Uint8Array(e*4),r=new Float32Array(e),a=[0,0,0];for(let l=0;l<e;l++){let c=t()*2-1,u=t()*$e,d=Math.sqrt(1-c*c),h=t()<.35?.28:1,f=60+t()*30;n[l*3]=d*Math.cos(u)*f,n[l*3+1]=c*h*f,n[l*3+2]=d*Math.sin(u)*f;let g=Math.pow(t(),5.5),v=q1(t(),t());$c(v,.78,a);let p=.22+.78*Math.pow(t(),2.2)*(.4+g),m=p*p*.82/Math.max(1,a[0]*p*p*.82,a[2]*p*p*.82);s[l*4]=Math.round(Math.sqrt(Math.min(1,a[0]*m))*255),s[l*4+1]=Math.round(Math.sqrt(Math.min(1,a[1]*m))*255),s[l*4+2]=Math.round(Math.sqrt(Math.min(1,a[2]*m))*255),s[l*4+3]=Math.round(g*255),r[l]=t()}let o=new vt;o.setAttribute("position",new gt(n,3)),o.setAttribute("aLook",new gt(s,4,!0)),o.setAttribute("aSeed",new gt(r,1)),this.positions=n,this.look=s,this.count=e,this.uniforms={uTime:{value:0},uPixelRatio:{value:1},uTwinkle:{value:1},uGain:{value:.55}},this.material=new De({name:"UniverseStars",uniforms:this.uniforms,vertexShader:qp,fragmentShader:Xp,transparent:!0,depthWrite:!1,depthTest:!0,blending:Kn,blendEquation:Gi,blendSrc:Un,blendDst:Un}),this.points=new Fi(o,this.material),this.points.frustumCulled=!1,this.points.renderOrder=1,this.geometry=o}snapshot(e,t,n){let s=this.uniforms.uGain.value;for(let r=0;r<this.count;r++){let a=(n+r)*3;e[a]=this.positions[r*3],e[a+1]=this.positions[r*3+1],e[a+2]=this.positions[r*3+2];let o=this.look[r*4+3]/255,l=(.05+.95*o*o)*s;for(let c=0;c<3;c++){let u=this.look[r*4+c]/255;t[a+c]=u*u*l}}}dispose(){this.geometry.dispose(),this.material.dispose()}};var Bn={transparent:!0,depthWrite:!1,depthTest:!0,blending:Kn,blendEquation:Gi,blendSrc:Un,blendDst:Un},b0=new Hi(2,2),w0=`
uniform float uScale;
varying vec2 vUv;
void main() {
  vUv = position.xy;
  vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  mv.xy += position.xy * uScale;
  gl_Position = projectionMatrix * mv;
}
`,X1=`
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
`;function un({core:i,halo:e,scale:t=.5,intensity:n=1,flicker:s=0,breath:r=0,rays:a=0}){let o={uScale:{value:t},uCore:{value:new D(...i)},uHalo:{value:new D(...e)},uIntensity:{value:n},uOpacity:{value:0},uTime:{value:0},uFlicker:{value:s},uBreath:{value:r},uRays:{value:a}},l=new Je(b0,new De({name:"AccentGlow",uniforms:o,vertexShader:w0,fragmentShader:X1,...Bn}));return l.frustumCulled=!1,l.renderOrder=20,l}var vr={vertex:w0,quad:b0},Y1=`
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
`,$1=`
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
`;function _s(i,e={}){let t=i.length,n=new Float32Array(t*6),s=new Float32Array(t*2),r=new Float32Array(t*2),a=new Float32Array(t*2);i.forEach((u,d)=>{n.set(u.a,d*6),n.set(u.b,d*6+3),s[d*2]=u.t0??0,s[d*2+1]=u.t1??1,r[d*2]=r[d*2+1]=u.seed??0,a[d*2]=u.r0??0,a[d*2+1]=u.r1??0});let o=new vt;o.setAttribute("position",new gt(n,3)),o.setAttribute("aT",new gt(s,1)),o.setAttribute("aSeed",new gt(r,1)),o.setAttribute("aR",new gt(a,1));let l={uPhase:{value:0},uOpacity:{value:0},uBase:{value:e.base??.05},uPulse:{value:e.pulse??.6},uDensity:{value:e.density??1},uWidth:{value:e.width??.06},uStep:{value:e.step?1:0},uReveal:{value:e.reveal??10},uFocus:{value:10},uColor:{value:new D(...e.color||[.6,.8,.9])},uPulseColor:{value:new D(...e.pulseColor||e.color||[1,1,1])}},c=new $a(o,new De({name:"AccentLines",uniforms:l,vertexShader:Y1,fragmentShader:$1,...Bn}));return c.frustumCulled=!1,c.renderOrder=5,c}function xr(i,{closed:e=!1,seed:t=0,tScale:n=1,reveal:s=null}={}){let r=[],a=0,o=i.length,l=e?o:o-1;for(let c=0;c<l;c++){let u=i[c],d=i[(c+1)%o],h=Math.hypot(d[0]-u[0],d[1]-u[1],d[2]-u[2]);r.push({a:u,b:d,t0:a*n,t1:(a+h)*n,seed:t,r0:s?s(u):0,r1:s?s(d):0}),a+=h}return r}var jn=8,Sd=.042;function K1(i,e,t){let n=Mn.nodeOrbit,s=i/jn*$e+n.phase+e*n.speed;return di(n.matrix,Math.cos(s)*n.radius,0,-Math.sin(s)*n.radius,t)}var Z1=`
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
`,J1=`
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
`,j1=[0,0,0],lh=class{constructor(){this.group=new Tt;let e=[],t=[0,0,0],n=Mn.nodeOrbit;for(let a=0;a<240;a++){let o=a/240*$e;di(n.matrix,Math.cos(o)*n.radius,0,-Math.sin(o)*n.radius,t),e.push([t[0],t[1],t[2]])}this.orbit=_s(xr(e,{closed:!0,tScale:1/($e*n.radius)}),{base:.085,pulse:.22,density:3,width:.08,color:K.steel,pulseColor:K.ice}),this.group.add(this.orbit),this.positions=new Float32Array(jn*3);let s=new Float32Array(jn);for(let a=0;a<jn;a++)s[a]=a+1;let r=new vt;this.nodeAttr=new gt(this.positions,3).setUsage(_o),r.setAttribute("position",this.nodeAttr),r.setAttribute("aIndex",new gt(s,1)),this.nodeUniforms={uPixelScale:{value:1e3},uRadius:{value:Sd},uSelected:{value:0},uMinPx:{value:2.5},uFocus:{value:10},uOpacity:{value:0},uTime:{value:0},uCold:{value:new D(...K.white).multiplyScalar(.9)},uAccent:{value:new D(...K.ice).multiplyScalar(1.15)}},this.nodes=new Fi(r,new De({name:"CoverNodes",uniforms:this.nodeUniforms,vertexShader:Z1,fragmentShader:J1,...Bn})),this.nodes.frustumCulled=!1,this.nodes.renderOrder=30,this.group.add(this.nodes),this.glow=un({core:K.core,halo:K.sun,scale:.3,intensity:.6,flicker:.06,breath:.06}),this.group.add(this.glow),this.time=-1}update(e){if(e.time!==this.time){this.time=e.time;let s=j1;for(let r=0;r<jn;r++)K1(r,e.time,s),this.positions[r*3]=s[0],this.positions[r*3+1]=s[1],this.positions[r*3+2]=s[2];this.nodeAttr.needsUpdate=!0}let t=e.presence;this.orbit.material.uniforms.uOpacity.value=t,this.orbit.material.uniforms.uPhase.value=e.time*.035%1,this.orbit.material.uniforms.uFocus.value=e.focus;let n=this.nodeUniforms;n.uOpacity.value=t,n.uTime.value=e.gpuTime,n.uSelected.value=e.selected,n.uPixelScale.value=e.pixelScale,n.uMinPx.value=Math.max(2.4,2.2*e.pixelRatio),n.uFocus.value=e.focus,this.glow.material.uniforms.uOpacity.value=t,this.glow.material.uniforms.uTime.value=e.gpuTime}};var Q1=ca(Math.round(qs.spin/ot.SPIN_MAX*32767)/32767*ot.SPIN_MAX);function mh(i,e){for(let t=0;t<i.length;t++){let n=i[t].material.uniforms;n.uOpacity.value=e.presence,n.uTime.value=e.gpuTime}}var va=(i,e,t)=>{let n=i.material.uniforms;n.uOpacity.value=e.presence,n.uFocus.value=e.focus,t!==void 0&&(n.uPhase.value=t%1)},hh=class{constructor(){let{nodes:e,links:t}=md(),n=t.map(([s,r],a)=>({a:e[s].p,b:e[r].p,t0:0,t1:1,seed:a*.618%1}));this.lines=_s(n,{base:.05,pulse:.8,density:1,width:.05,color:K.ice,pulseColor:K.yellow}),this.core=un({core:K.core,halo:K.sun,scale:.42,intensity:.7,flicker:.04}),this.group=new Tt,this.group.add(this.lines,this.core),this.phase=0}update(e){let t=e.time/12%1,n=.18+.9*t*t+.5*e.reading;this.phase=(this.phase+e.dtLiving*n)%1,va(this.lines,e,this.phase),this.core.material.uniforms.uOpacity.value=e.presence,this.core.material.uniforms.uTime.value=e.gpuTime}},uh=class{constructor(){let e=Lo.matrix,t=(v,p,m)=>di(e,v,p,m,[0,0,0]),{layers:n,rackCols:s,rackRows:r,rack:a,half:o}=Lo,l=[],{w:c,h:u,d}=a,h=[];for(let v of[-1,1])for(let p of[-1,1])h.push([[v*c/2,0,p*d/2],[v*c/2,u,p*d/2]]);for(let v of[0,u])for(let p of[-1,1])h.push([[-c/2,v,p*d/2],[c/2,v,p*d/2]]);for(let v of[0,u])for(let p of[-1,1])h.push([[p*c/2,v,-d/2],[p*c/2,v,d/2]]);for(let v of n){for(let m of s)for(let _ of r)if(!(m>0&&_===0&&v===0))for(let[E,y]of h)l.push({a:t(m+E[0],v+E[1],_+E[2]),b:t(m+y[0],v+y[1],_+y[2])});let p=[[-o,-o],[o,-o],[o,o],[-o,o]];for(let m=0;m<4;m++)l.push({a:t(p[m][0],v-.02,p[m][1]),b:t(p[(m+1)%4][0],v-.02,p[(m+1)%4][1])})}for(let[v,p]of[[-o,-o],[o,-o],[o,o],[-o,o]])l.push({a:t(v,n[0]-.02,p),b:t(v,n[2]-.02,p)});this.structure=_s(l,{base:.045,pulse:0,color:K.steel});let f=[];n.forEach((v,p)=>{for(let m of[-1,1]){let _=[];for(let E=0;E<=12;E++)_.push(t(0,v+.03,m*o*(1-E/12)));f.push(...xr(_,{seed:p*.37+(m>0?.5:0),tScale:1/o}))}});let g=[];for(let v=0;v<=16;v++)g.push(t(0,-.95+v/16*2.4,0));f.push(...xr(g,{seed:.2,tScale:1/2.4})),this.aisles=_s(f,{base:.03,pulse:.75,density:3,width:.05,step:!0,color:K.ice,pulseColor:K.iceHi}),this.gates=n.map(v=>{let p=un({core:K.core,halo:K.yellow,scale:.36,intensity:.55,flicker:.08}),m=t(0,v+.02,0);return p.position.set(m[0],m[1],m[2]),p}),this.group=new Tt,this.group.add(this.structure,this.aisles,...this.gates)}update(e){va(this.structure,e),va(this.aisles,e,e.time*.45),mh(this.gates,e)}},dh=class{constructor(){let e=[];for(let n=0;n<360;n++){let s=xs(n/360,[0,0,0]);e.push([s[0],s[1],s[2]])}let t=xr(e,{closed:!0,tScale:1});t.forEach((n,s)=>{let r=s/360,a=(s+1)/360,o=l=>l>.8?.42+(l-.8)/.2*.56:0;n.r0=o(r),n.r1=o(Math.min(a,.9999))}),this.spine=_s(t,{base:.05,pulse:.5,density:.9,width:.04,color:K.steel,pulseColor:K.white}),this.factories=da.map(n=>{let s=un({core:K.sun,halo:K.orange,scale:.34,intensity:.45,flicker:.12}),r=xs(n,[0,0,0]);return s.position.set(r[0],r[1],r[2]),s}),this.group=new Tt,this.group.add(this.spine,...this.factories)}update(e){va(this.spine,e,e.time*.32),this.spine.material.uniforms.uReveal.value=e.evolve,mh(this.factories,e)}},fh=class{constructor(){let e=xd(),t=o=>o.join(","),n=new Map(e.map(o=>[t(o),o])),s=Math.hypot(11,1,0),r=o=>Math.min(.97,.04+Math.hypot(...o)/s*.92),a=[];for(let o of e)for(let l of[[1,0,0],[0,1,0],[0,0,1]]){let c=n.get(t([o[0]+l[0],o[1]+l[1],o[2]+l[2]]));c&&a.push({a:Fo(o,[0,0,0]),b:Fo(c,[0,0,0]),t0:0,t1:1,seed:a.length*.618034%1,r0:r(o),r1:r(c)})}this.bonds=_s(a,{base:.16,pulse:.22,density:1,width:.2,color:K.ice,pulseColor:K.white}),this.seed=un({core:K.hot,halo:K.yellow,scale:.5,intensity:.34,flicker:.05,breath:.05}),this.spinner=new Tt,this.spinner.add(this.bonds),this.group=new Tt,this.group.add(this.spinner,this.seed),this.axis=new D(...qs.axis).normalize()}update(e){va(this.bonds,e,e.time*.2),this.bonds.material.uniforms.uReveal.value=e.evolve,this.spinner.quaternion.setFromAxisAngle(this.axis,e.gpuTime*Q1),this.seed.material.uniforms.uOpacity.value=e.presence,this.seed.material.uniforms.uTime.value=e.gpuTime}},ph=class{constructor(){this.group=new Tt,this.threads=sh.map(([e,t],n)=>{let s=Xs[e].c,r=Xs[t].c,a=[];for(let o=0;o<=24;o++){let l=o/24;a.push([s[0]+(r[0]-s[0])*l,s[1]+(r[1]-s[1])*l,s[2]+(r[2]-s[2])*l])}return _s(xr(a,{seed:n*.31,tScale:1/Math.hypot(r[0]-s[0],r[1]-s[1],r[2]-s[2])}),{base:.018,pulse:.42,density:2,width:.03,color:K.steel,pulseColor:K.ice})}),this.scaler=new Tt,this.scaler.add(...this.threads),this.cores=Xs.map(e=>{let t=yd[e.kind];return un({core:t.core,halo:t.halo,scale:e.r*.42,intensity:t.glow,breath:.03})}),this.group.add(this.scaler,...this.cores)}update(e){let t=1+e.spread;this.scaler.scale.setScalar(t);for(let n=0;n<this.threads.length;n++)va(this.threads[n],e,e.time*.04);for(let n=0;n<this.cores.length;n++){let s=Xs[n].c;this.cores[n].position.set(s[0]*t,s[1]*t,s[2]*t)}mh(this.cores,e)}},bd={core:K.core,halo:at(5400),scale:.72,intensity:.85,breath:.16,rays:.3,flicker:.02},T0={core:[0,0,0],halo:K.yellow,scale:2.2,intensity:.085,breath:.1},ch={intensity:.4,breath:.1,scale:.1,halo:.6},Uo=class{constructor(e){this.strong=e,this.glow=e?un(bd):un({core:K.core,halo:K.sun,scale:.5,intensity:.8,flicker:.22}),this.halo=e?un(T0):null,this.glows=this.halo?[this.glow,this.halo]:[this.glow],this.group=new Tt,this.group.add(...this.glows),this.presence=0,this.arm=0}update(e){mh(this.glows,e),this.presence=e.presence;let t=e.expand;if(this.strong){let n=this.arm=e.arm||0,s=this.glow.material.uniforms;s.uIntensity.value=bd.intensity*(1+ch.intensity*n),s.uBreath.value=bd.breath+ch.breath*n,this.halo.material.uniforms.uIntensity.value=T0.intensity*(1+ch.halo*n),t=1+ch.scale*n}this.group.scale.setScalar(t)}light(){let e=[];for(let t of this.glows){let n=t.material.uniforms;e.push({scale:n.uScale.value*this.group.scale.x,intensity:n.uIntensity.value*n.uOpacity.value,core:[n.uCore.value.x,n.uCore.value.y,n.uCore.value.z],halo:[n.uHalo.value.x,n.uHalo.value.y,n.uHalo.value.z],breath:n.uBreath.value,rays:n.uRays.value})}return e}};var E0=`
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
`,eM=`
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
`,tM=`
uniform float uTime;
uniform float uOpacity;
uniform float uTemp;
uniform float uGain;
uniform vec3 uChromo;
varying vec3 vObj;
varying vec3 vN;
varying vec3 vV;
${E0}
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
`,iM=`
uniform float uTime;
uniform float uOpacity;
uniform float uExtent;
uniform vec3 uInner;
uniform vec3 uOuter;
varying vec2 vUv;
${E0}
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
`,gh=5e3,nM=(i,e)=>{let t=i%(2*e);return t<e?t:2*e-t},vh=class{constructor(){this.group=new Tt,this.sphereUniforms={uTime:{value:0},uOpacity:{value:0},uTemp:{value:gh},uGain:{value:.95},uChromo:{value:new D(...K.halpha).multiplyScalar(.3)}},this.sphere=new Je(new hs(fa,96,64),new De({name:"Star",uniforms:this.sphereUniforms,vertexShader:eM,fragmentShader:tM,...Bn,depthWrite:!0})),this.sphere.renderOrder=4;let e=3.4;this.coronaUniforms={uScale:{value:fa*e},uTime:{value:0},uOpacity:{value:0},uExtent:{value:e},uInner:{value:new D(...at(gh,.7)).multiplyScalar(.75)},uOuter:{value:new D(...at(gh,.5)).multiplyScalar(.3)}},this.corona=new Je(vr.quad,new De({name:"Corona",uniforms:this.coronaUniforms,vertexShader:vr.vertex,fragmentShader:iM,...Bn})),this.corona.frustumCulled=!1,this.corona.renderOrder=6,this.halo=un({core:[0,0,0],halo:at(gh,.8),scale:fa*5.5,intensity:.05}),this.group.add(this.sphere,this.corona,this.halo)}update(e){let t=e.presence;this.sphereUniforms.uOpacity.value=t;let n=nM(e.time,600);this.sphereUniforms.uTime.value=n,this.coronaUniforms.uOpacity.value=t,this.coronaUniforms.uTime.value=n,this.halo.material.uniforms.uOpacity.value=t;let s=t>.92;this.sphere.material.depthWrite!==s&&(this.sphere.material.depthWrite=s)}};var sM=.97,A0=`
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
`,R0=`
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
`,rM=`
uniform vec4 uHole;
uniform vec2 uViewport;
void main() {
  vec2 c = uHole.xy / uViewport * 2.0 - 1.0;
  vec2 ext = (uHole.z + uHole.w + 2.0) / uViewport * 2.0;
  gl_Position = vec4(c + position.xy * ext, 0.0, 1.0);
}
`,aM=`
${Co}
void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, holeCover(gl_FragCoord.xy));
}
`,oM=`
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
`,xh=class{constructor(){this.group=new Tt,this.horizon=new Je(new hs(1,48,32),new Fn({color:0})),this.horizon.renderOrder=3;let[e,t]=Ni.disc,n=new Ja(e*.92,t*1.05,180,8);this.discUniforms={...fr,uTime:{value:0},uOpacity:{value:0},uRange:{value:new ye(e*.92,t*1.05)},uThermal:{value:new We(Ni.tIn,e,.45,1.25)}},this.disc=new Je(n,new De({name:"AccretionDisc",uniforms:this.discUniforms,vertexShader:A0,fragmentShader:R0,...Bn,side:wi})),this.disc.renderOrder=6,this.disc.quaternion.setFromUnitVectors(new D(0,0,1),new D(...Ni.normal));let s=2.4;this.lensUniforms={uScale:{value:Ni.radius*s},uOpacity:{value:0},uBand:{value:1},uExtent:{value:s},uTime:{value:0},uThermal:{value:new We(Ni.tIn,.72,.3,1)}},this.lens=new Je(vr.quad,new De({name:"LensedRing",uniforms:this.lensUniforms,vertexShader:vr.vertex,fragmentShader:oM,...Bn})),this.lens.frustumCulled=!1,this.lens.renderOrder=7,this.group.add(this.horizon,this.disc,this.lens),this.overlay=new Tt,this.horizonOverlay=new Je(vr.quad,new De({name:"HorizonShadow",uniforms:fr,vertexShader:rM,fragmentShader:aM,transparent:!0,depthTest:!1,depthWrite:!1,blending:Kn,blendEquation:Gi,blendSrc:jl,blendDst:io})),this.horizonOverlay.frustumCulled=!1,this.discOverlay=new Je(n,new De({name:"AccretionDiscFront",defines:{OVERLAY:""},uniforms:this.discUniforms,vertexShader:A0,fragmentShader:R0,...Bn,depthTest:!1,side:wi})),this.discOverlay.quaternion.copy(this.disc.quaternion),this.horizonOverlay.renderOrder=1,this.discOverlay.renderOrder=2,this.overlay.add(this.horizonOverlay,this.discOverlay),this.radius=0}update(e){let t=e.presence,n=t*(1-.86*e.reading),s=1-.42*e.reading,r=Ni.radius*s*Math.min(1,t*1.15);this.horizon.visible=r>.004,this.horizon.scale.setScalar(Math.max(r*sM,.001)),this.horizonOverlay.visible=this.horizon.visible,this.radius=r,this.reach=Ni.disc[1]*1.12*e.expand,this.thickness=.2*e.expand,this.bandInner=Ni.disc[0]*.98,this.bandOuter=Ni.disc[1]*1.05*Math.max(1,e.expand),this.discUniforms.uOpacity.value=n,this.discUniforms.uTime.value=e.gpuTime,this.lensUniforms.uOpacity.value=n,this.lensUniforms.uBand.value=Math.max(0,1-1.15*e.reading),this.lensUniforms.uTime.value=e.gpuTime,this.lensUniforms.uScale.value=Math.max(r,.001)*this.lensUniforms.uExtent.value}};var wd={cover:()=>new lh,ch1:()=>new hh,ch2:()=>new uh,ch3:()=>new dh,ch4:()=>new fh,ch5:()=>new vh,ch6:()=>new ph,ch7:()=>new xh,ch8:()=>new Uo(!1),seed:()=>new Uo(!0)},Td=i=>i*i*(3-2*i),lM=(i,e,t)=>Td(Math.min(1,Math.max(0,(t-i)/(e-i)))),C0=[.62,.95],_h=class{constructor(e){this.root=new Tt,this.root.name="accents",e.add(this.root),this.items=new Map,this.list=[],this.activeId=null,this.solid=1}_item(e){let t=this.items.get(e);if(t||!wd[e])return t||null;let n=wd[e]();return n.group.visible=!1,this.root.add(n.group),t={accent:n,presence:0,target:0,rate:1,reading:0,evolve:1,spread:0,expand:1},this.items.set(e,t),this.list.push(t),t}createAll(){for(let e of Object.keys(wd))this._item(e)}get(e){let t=this.items.get(e);return t?t.accent:null}visible(e){let t=this.items.get(e);return t&&t.presence>.001&&this.solid>.001?t.accent:null}presence(e){let t=this.items.get(e);return t?Td(t.presence)*this.solid:0}setActive(e,t,n=!1){this.activeId=e;for(let[r,a]of this.items)r!==e&&(a.target=0,a.rate=1/Math.max(.12,t*.3),n&&(a.presence=0));let s=this._item(e);s&&(s.target=1,n&&(s.presence=1))}update(e,t){let n=!1,s=t.reading,r=t.evolve,a=t.spread,o=t.expand,l=this.solid=t.solid===void 0?1:t.solid,c=lM(C0[0],C0[1],t.morph);for(let u=0;u<this.list.length;u++){let d=this.list[u];d.target===1?(d.reading=s,d.evolve=r,d.spread=a,d.expand=o,c>d.presence&&(d.presence=c)):d.presence>0&&(d.presence=Math.max(0,d.presence-d.rate*e),n=!0);let h=d.presence>.001&&l>.001;d.accent.group.visible=h,h&&(t.presence=Td(d.presence)*l,t.reading=d.reading,t.evolve=d.evolve,t.spread=d.spread,t.expand=d.expand,d.accent.update(t))}return t.reading=s,t.evolve=r,t.spread=a,t.expand=o,n}settle(){for(let e of this.items.values())e.presence=e.target}dispose(){this.root.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.root.removeFromParent(),this.items.clear(),this.list.length=0}};var xa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},cM=new Dn(-1,1,1,-1,0,1),Ed=class extends vt{constructor(){super(),this.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new bt([0,2,0,0,2,0],2))}},hM=new Ed,Ys=class{constructor(e){this._mesh=new Je(hM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,cM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var yh=class extends dn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof De?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ds.clone(e.uniforms),this.material=new De({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ys(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var No=class extends dn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Mh=class extends dn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Sh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ye);this._width=n.width,this._height=n.height,t=new Ut(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:zt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new yh(xa),this.copyPass.material.blending=Ti,this.timer=new eo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}No!==void 0&&(a instanceof No?n=!0:a instanceof Mh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Oo=class extends dn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new je}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var P0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new je(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var _a=class i extends dn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ye(e.x,e.y):new ye(256,256),this.clearColor=new je(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ut(r,a,{type:zt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Ut(r,a,{type:zt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let h=new Ut(r,a,{type:zt,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}let o=P0;this.highPassUniforms=ds.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new De({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ye(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ds.clone(xa.uniforms),this.blendMaterial=new De({uniforms:this.copyUniforms,vertexShader:xa.vertexShader,fragmentShader:xa.fragmentShader,premultipliedAlpha:!0,blending:Xt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new je,this._oldClearAlpha=1,this._basic=new Fn,this._fsQuad=new Ys(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ye(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new De({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ye(.5,.5)},direction:{value:new ye(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

		}`};var bh=class extends dn{constructor(){super(),this.isOutputPass=!0,this.uniforms=ds.clone(Bo.uniforms),this.material=new jr({name:Bo.name,uniforms:this.uniforms,vertexShader:Bo.vertexShader,fragmentShader:Bo.fragmentShader}),this._fsQuad=new Ys(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ct.getTransfer(this._outputColorSpace)===St&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===no?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===so?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ro?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ao?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===lo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===co?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===oo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var uM=`
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
`,Ad=class extends bh{constructor(){super(),Object.assign(this.uniforms,{uResolution:{value:new ye(1,1)},uTime:{value:0},uGrain:{value:Qi.grain},uVignette:{value:Qi.vignette},uDim:{value:1},uFade:{value:1},uBlack:{value:1},uBg:{value:new D(...Yc(Yt.space))},uBgLift:{value:new D(0,0,0)},uGlowCenter:{value:new ye(.5,.5)},uGlowRadius:{value:.5}}),this.material.fragmentShader=uM,this._outputColorSpace=si,this._toneMapping=li,this.material.defines={SRGB_TRANSFER:""},this.material.needsUpdate=!0}},wh=new vt;wh.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3));wh.setAttribute("uv",new bt([0,2,0,0,2,0],2));var ko=class{constructor(e,t,n){this.renderer=e,this.composer=new Sh(e),this.composer.renderToScreen=!0,this.renderPass=new Oo(t,n),this.renderPass.clearColor=new je(0,0,0),this.renderPass.clearAlpha=1,this.bloom=new _a(new ye(256,256),Qi.bloomStrength,Qi.bloomRadius,Qi.bloomThreshold),this.bloom.highPassUniforms.smoothWidth.value=Qi.bloomKnee,this.finish=new Ad,this.overlay=new vi,this.overlayPass=new Oo(this.overlay,n),this.overlayPass.clear=!1,this.overlayPass.enabled=!1,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloom),this.composer.addPass(this.overlayPass),this.composer.addPass(this.finish),this.bloomScale=.5,this.width=1,this.height=1,this.pixelRatio=1}get uniforms(){return this.finish.uniforms}setSize(e,t,n){this.width=e,this.height=t,this.pixelRatio=n,this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.finish.uniforms.uResolution.value.set(e*n,t*n),this._sizeBloom()}setBloom(e,t){this.bloom.enabled=e&&t>0,t>0&&t!==this.bloomScale&&(this.bloomScale=t,this._sizeBloom())}_sizeBloom(){let e=Math.max(32,Math.round(this.width*this.pixelRatio*this.bloomScale*2)),t=Math.max(32,Math.round(this.height*this.pixelRatio*this.bloomScale*2));this.bloom.setSize(e,t)}render(e){this.composer.render(e)}passScene(){let e=new vi,t=this.bloom,n=[t.materialHighPassFilter,...t.separableBlurMaterials||[],t.compositeMaterial,t.blendMaterial].filter(Boolean);for(let s of n){let r=new Je(wh,s);r.frustumCulled=!1,e.add(r)}return e}finishScene(){let e=new vi,t=new Je(wh,this.finish.material);return t.frustumCulled=!1,e.add(t),e}dispose(){this.bloom.dispose(),this.finish.dispose(),this.composer.dispose()}};var I0=.62,L0=2.4,$s=1.32,ya=(i,e)=>i.focus?i.focus[e]-i.center[e]:0,Th=class{constructor(e){this.camera=e,this.W=1,this.H=1,this.Hf=1,this.tanHalf=Math.tan(Mo.degToRad(Ao)/2),this.layout="hero",this.spec=null,this.cx=ei(.5),this.cy=ei(.5),this.dist=ei(14),this.tx=ei(0),this.ty=ei(0),this.tz=ei(0),this.fx=ei(0),this.fy=ei(0),this.fz=ei(0),this.vYaw=ei(0),this.vPitch=ei(.35),this.dim=ei(1),this.veil=ei(0),this.veilTarget=0,this.pointer=[0,0],this.px=ei(0),this.py=ei(0),this.exYaw=0,this.exPitch=0,this.velYaw=0,this.velPitch=0,this.zoom=ei(1),this.zoomTarget=1,this.returning=!1,this.dragging=!1,this.moving=!0,this._v=new D,this.target=new D,this.calm=0,this.refMatrix=new Rt,this.refDistance=14,this._ref=new D}setViewport(e,t,n=t){this.W=e,this.H=t,this.Hf=Math.min(t,n||t),this.camera.aspect=e/t,this._targets(),this.cx.value=this._t.cx,this.cy.value=this._t.cy,this.dist.value=this._t.dist}setFormation(e){this.spec=e}setLayout(e){Zc[e]&&(this.layout=e)}setVeil(e){this.veilTarget=Ye(e,0,1)}setPointer(e,t){this.pointer[0]=Ye(e,-1,1),this.pointer[1]=Ye(t,-1,1)}beginDrag(){this.dragging=!0,this.returning=!1,this.velYaw=0,this.velPitch=0}dragBy(e,t,n){let s=-e*.0044,r=t*.0036;if(this.exYaw+=s,this.exPitch=Ye(this.exPitch+r,-$s-.4,$s-.4),n>0){let a=Math.min(1,n*18);this.velYaw+=(s/n-this.velYaw)*a,this.velPitch+=(r/n-this.velPitch)*a}}endDrag(){this.dragging=!1}zoomBy(e){this.returning=!1,this.zoomTarget=Ye(this.zoomTarget*e,I0,L0)}get zoomLimits(){return[I0,L0]}reset(){this.returning=!0,this.velYaw=0,this.velPitch=0,this.zoomTarget=1}_targets(){let e=Zc[this.layout]||Zc.hero,t=Ro(this.W,this.Hf),n=t?e.tall:e.wide,s=this.spec,r=s?s.radius:3,a=s&&s.compose&&s.compose[this.layout]?s.compose[this.layout][t?"tall":"wide"]:null,o=Math.max(40,n.r(this.W,this.Hf)*(a&&a.scale?a.scale:1)),l=this.veil.value,c=r*(this.H/2)/(o*this.tanHalf)*n.push*(1+.42*l);return this._t=this._t||{},this._t.cx=a&&a.cx!==void 0?a.cx:n.cx,this._t.cy=a&&a.cy!==void 0?a.cy:n.cy,this._t.dist=c,this._t.dim=n.dim*(1-.86*l),this._t}snapComposition(e,t){let n=this._targets();if(Math.abs(this.veilTarget-this.veil.value)<=e&&Math.abs(n.cx-this.cx.value)<=t&&Math.abs(n.cy-this.cy.value)<=t)return!1;this.veil.value=this.veilTarget,this.veil.velocity=0;let s=this._targets();return this.cx.value=s.cx,this.cy.value=s.cy,this.dim.value=s.dim,this.cx.velocity=0,this.cy.velocity=0,this.dim.velocity=0,!0}snap(){this.veil.value=this.veilTarget;let e=this._targets();this.cx.value=e.cx,this.cy.value=e.cy,this.dist.value=e.dist,this.dim.value=e.dim;let t=this.spec;t&&(this.tx.value=t.center[0],this.ty.value=t.center[1],this.tz.value=t.center[2],this.fx.value=ya(t,0),this.fy.value=ya(t,1),this.fz.value=ya(t,2),this.vYaw.value=t.view.yaw,this.vPitch.value=t.view.pitch);for(let n of[this.cx,this.cy,this.dist,this.dim,this.tx,this.ty,this.tz,this.fx,this.fy,this.fz,this.vYaw,this.vPitch,this.veil])n.velocity=0}update(e,t,n,s){let r=n?vn.cameraReduced:vn.camera;ri(this.veil,this.veilTarget,n?.05:vn.veil,e);let a=this._targets();ri(this.cx,a.cx,r,e),ri(this.cy,a.cy,r,e),ri(this.dist,a.dist,r,e),ri(this.dim,a.dim,n?.05:vn.veil,e);let o=this.spec;o&&(ri(this.tx,o.center[0],r,e),ri(this.ty,o.center[1],r,e),ri(this.tz,o.center[2],r,e),ri(this.fx,ya(o,0),r,e),ri(this.fy,ya(o,1),r,e),ri(this.fz,ya(o,2),r,e),ri(this.vYaw,o.view.yaw,r,e),ri(this.vPitch,o.view.pitch,r,e)),ri(this.px,s?this.pointer[0]:0,vn.parallax,e),ri(this.py,s?this.pointer[1]:0,vn.parallax,e),ri(this.zoom,this.zoomTarget,n?.05:.18,e);let l=!1;if(!this.dragging){if(this.returning)this.exYaw+=(0-this.exYaw)*(1-Math.exp(-e*4)),this.exPitch+=(0-this.exPitch)*(1-Math.exp(-e*4)),Math.abs(this.exYaw)<1e-4&&Math.abs(this.exPitch)<1e-4&&(this.exYaw=0,this.exPitch=0,this.returning=!1),l=this.returning;else if(Math.abs(this.velYaw)+Math.abs(this.velPitch)>.001){this.exYaw+=this.velYaw*e,this.exPitch=Ye(this.exPitch+this.velPitch*e,-$s-.4,$s-.4);let M=Math.exp(-e*4.2);this.velYaw*=M,this.velPitch*=M,l=!0}}let c=1e-4;this.moving=l||this.dragging||Math.abs(this.cx.velocity)>c||Math.abs(this.cy.velocity)>c||Math.abs(this.dist.velocity)>c*10||Math.abs(this.vYaw.velocity)>c||Math.abs(this.vPitch.velocity)>c||Math.abs(this.tx.velocity)+Math.abs(this.ty.velocity)+Math.abs(this.tz.velocity)+Math.abs(this.fx.velocity)+Math.abs(this.fy.velocity)+Math.abs(this.fz.velocity)>c||Math.abs(this.px.velocity)+Math.abs(this.py.velocity)>c||Math.abs(this.zoom.velocity)>c||Math.abs(this.veil.velocity)>c||Math.abs(this.dim.velocity)>c;let u=1-(1-nt.sway)*this.calm,d=1-(1-nt.parallax)*this.calm,h=(.075*Math.sin(t*.041)+.022*Math.sin(t*.107+1))*u,f=.028*Math.sin(t*.059+2)*u,g=this.vYaw.value+this.exYaw+this.px.value*.07*d+h,v=Ye(this.vPitch.value+this.exPitch-this.py.value*.045*d+f,-$s,$s),p=this.dist.value/this.zoom.value,m=this.camera;this.target.set(this.tx.value,this.ty.value,this.tz.value),m.position.set(this.target.x+p*Math.sin(g)*Math.cos(v),this.target.y+p*Math.sin(v),this.target.z+p*Math.cos(g)*Math.cos(v)),m.lookAt(this.target),m.setViewOffset(this.W,this.H,(.5-this.cx.value)*this.W,.5*this.H-this.cy.value*this.Hf,this.W,this.H),m.updateMatrixWorld(),this.distance=p;let _=this.vYaw.value,E=Ye(this.vPitch.value,-$s,$s),y=this.dist.value,S=this.target;return this._ref.set(S.x+y*Math.sin(_)*Math.cos(E),S.y+y*Math.sin(E),S.z+y*Math.cos(_)*Math.cos(E)),this.refMatrix.lookAt(this._ref,S,m.up),this.refMatrix.setPosition(this._ref),this.refDistance=y,this.moving}focusPoint(e){return e[0]=this.tx.value+this.fx.value,e[1]=this.ty.value+this.fy.value,e[2]=this.tz.value+this.fz.value,e}pxPerUnit(e){return this.H/2/(e*this.tanHalf)}project(e,t,n,s){let r=this._v.set(e,t,n),a=r.distanceTo(this.camera.position);return r.project(this.camera),s[0]=(r.x*.5+.5)*this.W,s[1]=(.5-r.y*.5)*this.H,s[2]=a,s[3]=r.z,s}};var dM=.5,zo=i=>Math.round(i*10)/10,Eh=class{constructor(){this.subs=new Set,this.frame={scene:"cover",nodes:[],selected:0,anchor:{x:0,y:0,visible:!1}};for(let e=1;e<=jn;e++)this.frame.nodes.push({n:e,x:0,y:0,radius:0,depth:0,visible:!1});this.prev=new Float32Array(jn*4).fill(-1),this.prevScene="",this.prevSelected=-1,this.scratch=[0,0,0,0],this.center=[0,0,0,0],this.dirty=!0,this.allHidden=!1,this.pending=!1,this.notifyOne=e=>{try{e(this.frame)}catch(t){console.error(t)}}}subscribe(e){return typeof e!="function"?()=>{}:(this.subs.add(e),this.dirty=!0,()=>this.subs.delete(e))}update(e,t,n,s,r,a,o){let l=this.frame,c=e.W,u=e.H,d=this.dirty||s!==this.prevScene||r!==this.prevSelected,h=e.project(a[0],a[1],a[2],this.scratch),f=zo(h[0]),g=zo(h[1]),v=!!o&&h[3]<1&&h[0]>=0&&h[0]<=c&&h[1]>=0&&h[1]<=u,p=l.anchor;if((p.x!==f||p.y!==g||p.visible!==v)&&(p.x=f,p.y=g,p.visible=v,d=!0),t&&!(n<=.001&&this.allHidden&&!this.dirty)){let m=e.project(0,0,0,this.center),_=m[2],E=dM*e.pxPerUnit(_),y=Mn.nodeOrbit.radius;for(let M=0;M<jn;M++){let w=l.nodes[M],x=e.project(t[M*3],t[M*3+1],t[M*3+2],this.scratch),A=Sd*e.pxPerUnit(x[2]),R=x[2]>_&&Math.hypot(x[0]-m[0],x[1]-m[1])<E,I=x[3]<1&&x[0]>-A&&x[0]<c+A&&x[1]>-A&&x[1]<u+A,L=n>.5&&I&&!R;w.x=zo(x[0]),w.y=zo(x[1]),w.radius=zo(A),w.depth=Math.round(Math.min(1,Math.max(0,(x[2]-(_-y))/(2*y)))*1e3)/1e3,w.visible=L;let U=M*4;(this.prev[U]!==w.x||this.prev[U+1]!==w.y||this.prev[U+2]!==w.radius||this.prev[U+3]!==(L?1:0))&&(d=!0,this.prev[U]=w.x,this.prev[U+1]=w.y,this.prev[U+2]=w.radius,this.prev[U+3]=L?1:0)}let S=!0;for(let M=0;M<jn;M++)l.nodes[M].visible&&(S=!1);this.allHidden=S}return!d||!this.subs.size?!1:(this.dirty=!1,this.prevScene=s,this.prevSelected=r,l.scene=s,l.selected=r,this.pending=!0,!0)}flush(){this.pending&&(this.pending=!1,this.subs.forEach(this.notifyOne))}pick(e,t){let n=0,s=1/0;for(let r of this.frame.nodes){if(!r.visible)continue;let a=Math.hypot(e-r.x,t-r.y),o=Math.max(22,r.radius+12);a<o&&a<s&&(s=a,n=r.n)}return n}};var Ah=class{constructor(e){bi(this,"onWindowPointer",e=>{if(e.pointerType==="touch")return;let t=window.innerWidth||1,n=window.innerHeight||1;this.engine.pointerMoved(e.clientX/t*2-1,e.clientY/n*2-1)});bi(this,"onScroll",()=>{this.lastScroll=performance.now(),!(!this.coarse.matches||this.engine.endingActive||this.dragging)&&this.hold(150)});bi(this,"onScrollEnd",()=>{this.holding&&(this.holdUntil=performance.now()+40,this.schedule(60))});bi(this,"onTouch",e=>{this.touches=e.touches.length});bi(this,"onTouchEnd",e=>{this.touches=e.touches.length,!this.touches&&this.holding&&(this.holdUntil=performance.now()+150,this.schedule(170))});bi(this,"release",()=>{if(this.touches){this.schedule(120);return}let e=this.holdUntil-performance.now();if(e>0){this.schedule(e+15);return}this.holdTimer=0,this.holding=!1,this.engine.onHold(!1)});bi(this,"onDown",e=>{if(!(e.pointerType==="mouse"&&e.button!==0)){this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,t:e.timeStamp});try{this.canvas.setPointerCapture(e.pointerId)}catch{}this.pointers.size===1&&this.engine.rig.beginDrag(),this.pointers.size===2&&(this.pinch=this.pinchDistance()),this.engine.request()}});bi(this,"onMove",e=>{let t=this.pointers.get(e.pointerId);if(!t)return;let n=e.clientX-t.x,s=e.clientY-t.y,r=Math.max(.001,(e.timeStamp-t.t)/1e3);if(t.x=e.clientX,t.y=e.clientY,t.t=e.timeStamp,this.pointers.size===1)this.engine.rig.dragBy(n,s,r);else if(this.pointers.size===2){let a=this.pinchDistance();this.pinch>0&&a>0&&this.engine.rig.zoomBy(a/this.pinch),this.pinch=a}this.engine.request()});bi(this,"onUp",e=>{this.pointers.delete(e.pointerId)&&(this.pointers.size===0?this.engine.rig.endDrag():this.pointers.size===1&&this.engine.rig.beginDrag(),this.pinch=0,this.engine.request())});bi(this,"onWheel",e=>{if(e.ctrlKey&&!this.interactive)return;e.preventDefault();let t=e.deltaMode===1?.05:e.deltaMode===2?1:.0012;this.engine.rig.zoomBy(Math.exp(-e.deltaY*t)),this.engine.request()});bi(this,"onKey",e=>{let t=this.engine.rig,n=!0;switch(e.key){case"ArrowLeft":t.dragBy(-28,0,0);break;case"ArrowRight":t.dragBy(28,0,0);break;case"ArrowUp":t.dragBy(0,-24,0);break;case"ArrowDown":t.dragBy(0,24,0);break;case"+":case"=":t.zoomBy(1.12);break;case"-":case"_":t.zoomBy(1/1.12);break;case"r":case"R":t.reset();break;default:n=!1}n&&(e.preventDefault(),this.engine.request())});this.engine=e,this.canvas=e.canvas,this.coarse=typeof matchMedia=="function"?matchMedia("(pointer: coarse)"):{matches:!1},this.interactive=!1,this.holding=!1,this.touches=0,this.holdUntil=0,this.holdTimer=0,this.pointers=new Map,this.pinch=0,this.lastScroll=-1e9,this.abort=new AbortController,this.exploreAbort=null;let t={passive:!0,signal:this.abort.signal};window.addEventListener("pointermove",this.onWindowPointer,t),window.addEventListener("scroll",this.onScroll,t),window.addEventListener("scrollend",this.onScrollEnd,t),document.addEventListener("touchstart",this.onTouch,t),document.addEventListener("touchend",this.onTouchEnd,t),document.addEventListener("touchcancel",this.onTouchEnd,t)}get dragging(){return this.pointers.size>0}hold(e){this.holding||(this.holding=!0,this.engine.onHold(!0)),this.holdUntil=performance.now()+e,this.schedule(e+20)}schedule(e){clearTimeout(this.holdTimer),this.holdTimer=setTimeout(this.release,e)}setInteractive(e){if(e=!!e,e!==this.interactive)if(this.interactive=e,e){this.exploreAbort=new AbortController;let t=this.canvas,n={passive:!0,signal:this.exploreAbort.signal};t.addEventListener("pointerdown",this.onDown,n),t.addEventListener("pointermove",this.onMove,n),t.addEventListener("pointerup",this.onUp,n),t.addEventListener("pointercancel",this.onUp,n),t.addEventListener("lostpointercapture",this.onUp,n),t.addEventListener("wheel",this.onWheel,{passive:!1,signal:this.exploreAbort.signal}),t.addEventListener("keydown",this.onKey,{signal:this.exploreAbort.signal})}else this.exploreAbort?.abort(),this.exploreAbort=null,this.pointers.clear(),this.engine.rig.endDrag()}pinchDistance(){let e=this.pointers.values(),t=e.next().value,n=e.next().value;return t&&n?Math.hypot(t.x-n.x,t.y-n.y):0}dispose(){clearTimeout(this.holdTimer),this.abort.abort(),this.exploreAbort?.abort()}};function Cd(i){let e="";try{let r=i.getExtension("WEBGL_debug_renderer_info");e=String(i.getParameter(r?r.UNMASKED_RENDERER_WEBGL:i.RENDERER)||"")}catch{e=""}let t=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,n=navigator.deviceMemory||4,s=navigator.hardwareConcurrency||4;return/swiftshader|llvmpipe|software|basic render/i.test(e)?"low":t?n<=3||s<=4?"low":"medium":n<=2||s<=2?"medium":"high"}var Pd=i=>ms[i]?i:null,Ch=class{constructor(e){this.gl=e,this.ext=null,this.ring=[],this.head=0,this.active=null,this.restore()}get available(){return!!this.ext}restore(){this.ring=[],this.active=null,this.head=0;try{this.ext=this.gl.isContextLost()?null:this.gl.getExtension("EXT_disjoint_timer_query_webgl2")}catch{this.ext=null}if(this.ext)try{for(let e=0;e<4;e++)this.ring.push({q:this.gl.createQuery(),pending:!1,skip:!1})}catch{this.ext=null}}begin(){if(!this.ext||this.active)return;let e=this.ring[this.head];if(!(!e||e.pending))try{this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT,e.q),this.active=e}catch{this.active=null}}end(e){let t=this.active;if(t){this.active=null;try{this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),t.pending=!0,t.skip=!!e,this.head=(this.head+1)%this.ring.length}catch{}}}poll(e){if(!this.ext)return;let t=this.gl,n=!1;try{n=!!t.getParameter(this.ext.GPU_DISJOINT_EXT)}catch{return}for(let s=0;s<this.ring.length;s++){let r=this.ring[s];if(!r.pending)continue;let a=!1;try{a=t.getQueryParameter(r.q,t.QUERY_RESULT_AVAILABLE)}catch{a=!0,n=!0}if(!a||(r.pending=!1,n||r.skip))continue;let o=t.getQueryParameter(r.q,t.QUERY_RESULT);e(o/1e6)}}},F0=2e3,Rd=16.667,Rh=Rd*.75,fM=.85,D0=6e4,U0=1e4,pM=3e5;function Ho(i,e,t){return e?i.slice(0,e).sort((s,r)=>s-r)[Math.min(e-1,Math.floor(t*(e-1)+.5))]:0}var Ph=class{constructor(e=!0){this.enabled=e,this.maxLevel=On.length-1,this.cpu=new Float32Array(512),this.gpu=new Float32Array(512),this.intervals=new Float32Array(512),this.drops=0,this.history=new Float32Array(90),this.reset()}get step(){return On[this.level]}reset(){this.level=0,this.nCpu=0,this.nGpu=0,this.nInt=0,this.drops=0,this.hHead=0,this.hCount=0,this.windowStart=0,this.overWindows=0,this.underMs=0,this.verify=null,this.probe=null,this.blocked=new Float64Array(On.length),this.upgradeAt=0,this.backoff=U0,this.lastMetric=0,this.mode="none",this.cadence=0}sample(e,t,n,s){!this.enabled||s||(this.nCpu<512&&(this.cpu[this.nCpu++]=t),!(!(e>0)||e>400)&&(n||(this.history[this.hHead]=e,this.hHead=(this.hHead+1)%this.history.length,this.hCount<this.history.length&&this.hCount++),this.nInt<512&&(this.intervals[this.nInt++]=n?-e:e)))}gpuSample(e){this.enabled&&this.nGpu<512&&(this.gpu[this.nGpu++]=e)}_cadence(){let e=this.hCount;return e<12?0:Ho(this.history,e,.5)}decide(e,t){if(!this.enabled||(this.windowStart||(this.windowStart=e),e-this.windowStart<F0))return 0;let n=e-this.windowStart;this.windowStart=e;let s=this._evaluate(e,n,t);return this.nCpu=0,this.nGpu=0,this.nInt=0,s}_evaluate(e,t,n){let s=Ho(this.cpu,this.nCpu,.75),r=0,a=!1,o=!1,l=!1,c=this._cadence();if(this.cadence=c,n&&this.nGpu>=8){this.mode="timer";let u=Ho(this.gpu,this.nGpu,.75);r=u,l=!0,a=u>Rh,o=u*this._upRatio()<Rh*.5&&s<Rh}else if(this.nInt>=12){this.mode="cadence";let u=0,d=0;for(let g=0;g<this.nInt;g++){let v=this.intervals[g],p=v<0?Math.max(33.3,c):Math.max(Rd,c||Rd);Math.abs(v)>p*1.5&&u++,v>0&&d++}let h=u/this.nInt;r=h+1e-4,l=!0;let f=!1;if(d>=12&&c>20){let g=Ho(this.history,this.hCount,.25),p=(Ho(this.history,this.hCount,.75)-g)/c<.1,m=_=>{let E=Math.round(c/_);return E>=1&&Math.abs(c-E*_)/c<.08};f=p&&!m(16.667)&&!m(8.333),f&&(r=Math.max(r,c/100))}a=h>.2||f,o=h<.03&&!f&&s<Rh*.5}if(this.lastMetric=r,!l)return 0;if(this.probe){if(a){let u=this.probe.from;return this.probe=null,this.backoff=Math.min(pM,this.backoff*2),this.upgradeAt=e+this.backoff,this.overWindows=0,this.underMs=0,u!==this.level?(this.level=u,1):0}e-this.probe.at>F0*2.5&&(this.probe=null,this.backoff=U0)}if(this.verify){let u=this.verify;if(this.verify=null,r>u.metric*fM){let d=this.level;if(this.cutsFill?this.cutsFill(d,u.level):!0)for(let f=u.level+1;f<=this.maxLevel;f++)this.blocked[f]=e+D0;else this.blocked[d]=e+D0;return this.level=u.level,this.overWindows=0,this.underMs=0,-1}}if(a){if(this.underMs=0,this.overWindows++,this.overWindows>=2){let u=this._nextDown(e);if(u>this.level)return this.verify={level:this.level,metric:r},this.level=u,this.overWindows=0,1}return 0}if(this.overWindows=0,o&&this.level>0){if(this.underMs+=t,this.underMs>=5e3&&e>=this.upgradeAt)return this.probe={from:this.level,at:e},this.level=this._nextUp(),this.underMs=0,-1}else this.underMs=0;return 0}_nextDown(e){for(let t=this.level+1;t<=this.maxLevel;t++)if(!(this.blocked[t]>e)&&(!this.isNoop||!this.isNoop(t,this.level)))return t;return this.level}_nextUp(){for(let e=this.level-1;e>0;e--)if(!this.isNoop||!this.isNoop(e,this.level))return e;return 0}_upRatio(){if(this.level===0)return 1;let e=On[this.level],t=On[this._nextUp()],n=this.pixelRatioOf?(this.pixelRatioOf(t)/Math.max(.01,this.pixelRatioOf(e)))**2:1;return Math.max(n,t.draw/e.draw,1)}info(){return{level:this.level,mode:this.mode,metric:Math.round(this.lastMetric*100)/100,cadence:Math.round(this.cadence*10)/10,backoff:this.backoff}}};var mM=Math.PI*2,Xi=(i,e,t)=>i<e?e:i>t?t:i,Mr=i=>i<0?0:i>1?1:i,fi=(i,e,t)=>i+(e-i)*t;function oe(i,e,t){let n=Mr((t-i)/(e-i));return n*n*(3-2*n)}function ys(i,e,t){let n=Mr((t-i)/(e-i));return n*n*n*(n*(n*6-15)+10)}function N0(i,e,t){let n=Mr((t-i)/(e-i));return n<=0?0:n>=1?1:n<.5?Math.pow(2,20*n-10)/2:(2-Math.pow(2,-20*n+10))/2}function Vo(i,e,t,n){return i<e-t?0:i<e?oe(e-t,e,i):Math.exp(-(i-e)/n)}function Ms(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function xi(i){let e=i();return e<1e-9&&(e=1e-9),Math.sqrt(-2*Math.log(e))*Math.cos(mM*i())}function Ri(i,e=!0,t=!0){let n=i.length,s=new Float64Array(n),r=new Float64Array(n),a=new Float64Array(n);for(let l=0;l<n;l++)s[l]=i[l][0],r[l]=i[l][1];let o=new Float64Array(Math.max(1,n-1));for(let l=0;l<n-1;l++)o[l]=(r[l+1]-r[l])/(s[l+1]-s[l]);for(let l=0;l<n;l++)l===0?a[l]=n>1?o[0]:0:l===n-1?a[l]=o[n-2]:a[l]=o[l-1]*o[l]<=0?0:(o[l-1]+o[l])/2;e&&(a[0]=0),t&&(a[n-1]=0);for(let l=0;l<n-1;l++){if(o[l]===0){a[l]=0,a[l+1]=0;continue}let c=a[l]/o[l],u=a[l+1]/o[l],d=c*c+u*u;if(d>9){let h=3/Math.sqrt(d);a[l]=h*c*o[l],a[l+1]=h*u*o[l]}}return{ts:s,vs:r,ms:a,n}}function Ci(i,e){let{ts:t,vs:n,ms:s,n:r}=i;if(e<=t[0])return n[0];if(e>=t[r-1])return n[r-1];let a=0;for(;a<r-2&&e>t[a+1];)a++;let o=t[a+1]-t[a],l=(e-t[a])/o,c=l*l,u=c*l;return(2*u-3*c+1)*n[a]+(u-2*c+l)*o*s[a]+(-2*u+3*c)*n[a+1]+(u-c)*o*s[a+1]}var _r=(i,e,t,n)=>{let s=(i-e)*(i<e?t:n);return Math.exp(-.5*s*s)};function Sr(i){let e=0,t=0,n=0;for(let l=380;l<=780;l+=2){let c=l*1e-9,u=1/(c**5*(Math.exp(.014388/(c*i))-1));e+=u*(1.056*_r(l,599.8,.0264,.0323)+.362*_r(l,442,.0624,.0374)-.065*_r(l,501.1,.049,.0382)),t+=u*(.821*_r(l,568.8,.0213,.0247)+.286*_r(l,530.9,.0613,.0322)),n+=u*(1.217*_r(l,437,.0845,.0278)+.681*_r(l,459,.0385,.0725))}let s=Math.max(0,3.2406*e-1.5372*t-.4986*n),r=Math.max(0,-.9689*e+1.8758*t+.0415*n),a=Math.max(0,.0557*e-.204*t+1.057*n),o=Math.max(s,r,a)||1;return[s/o,r/o,a/o]}var yr=800,Lh=4e4,kn=32,Ih=Object.freeze(Array.from({length:kn},(i,e)=>Object.freeze(Sr(yr*Math.pow(Lh/yr,e/(kn-1))))));function Go(i,e=[0,0,0]){let t=Xi(Math.log(Math.max(i,1)/yr)/Math.log(Lh/yr)*(kn-1),0,kn-1),n=Math.min(kn-2,Math.floor(t)),s=t-n,r=Ih[n],a=Ih[n+1];return e[0]=r[0]+(a[0]-r[0])*s,e[1]=r[1]+(a[1]-r[1])*s,e[2]=r[2]+(a[2]-r[2])*s,e}var bn=new Int8Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function O0(i){let e=Ms(i),t=new Uint8Array(256);for(let o=0;o<256;o++)t[o]=o;for(let o=255;o>0;o--){let l=Math.floor(e()*(o+1)),c=t[o];t[o]=t[l],t[l]=c}let n=new Uint8Array(512),s=new Uint8Array(512);for(let o=0;o<512;o++)n[o]=t[o&255],s[o]=n[o]%12*3;let r=1/3,a=1/6;return function(l,c,u){let d=(l+c+u)*r,h=Math.floor(l+d),f=Math.floor(c+d),g=Math.floor(u+d),v=(h+f+g)*a,p=l-(h-v),m=c-(f-v),_=u-(g-v),E,y,S,M,w,x;p>=m?m>=_?(E=1,y=0,S=0,M=1,w=1,x=0):p>=_?(E=1,y=0,S=0,M=1,w=0,x=1):(E=0,y=0,S=1,M=1,w=0,x=1):m<_?(E=0,y=0,S=1,M=0,w=1,x=1):p<_?(E=0,y=1,S=0,M=0,w=1,x=1):(E=0,y=1,S=0,M=1,w=1,x=0);let A=p-E+a,R=m-y+a,I=_-S+a,L=p-M+2*a,U=m-w+2*a,C=_-x+2*a,F=p-1+.5,B=m-1+.5,V=_-1+.5,Y=h&255,N=f&255,k=g&255,X=0,j,J;return j=.6-p*p-m*m-_*_,j>0&&(J=s[Y+n[N+n[k]]],j*=j,X+=j*j*(bn[J]*p+bn[J+1]*m+bn[J+2]*_)),j=.6-A*A-R*R-I*I,j>0&&(J=s[Y+E+n[N+y+n[k+S]]],j*=j,X+=j*j*(bn[J]*A+bn[J+1]*R+bn[J+2]*I)),j=.6-L*L-U*U-C*C,j>0&&(J=s[Y+M+n[N+w+n[k+x]]],j*=j,X+=j*j*(bn[J]*L+bn[J+1]*U+bn[J+2]*C)),j=.6-F*F-B*B-V*V,j>0&&(J=s[Y+1+n[N+1+n[k+1]]],j*=j,X+=j*j*(bn[J]*F+bn[J+1]*B+bn[J+2]*V)),32*X}}var He=3.6,zn=31,B0=.14,gM=.42,vM=1.12,xM=1.3,br=Object.freeze([Object.freeze({start:0,key:"collapse"}),Object.freeze({start:He,key:"birth"}),Object.freeze({start:9.2,key:"structure"}),Object.freeze({start:19.4,key:"world"})]),H0=Object.freeze([2.7,4.95,15.8,zn]);function V0(i){let e=0;for(let t=1;t<br.length;t++)i>=br[t].start&&(e=t);return e}function qo(i){if(i<=He)return 0;let e=i-He,t=.26*(1-Math.exp(-e*2.4))*(1-Math.exp(-e*6)),n=.74*N0(5.2,6.8,i);return t+n}function Id(i){return ys(9.6,15.2,i)}var Fh=14.6,Dh=19.6;function Ld(i){return oe(Fh,Dh,i)}function Fd(i){if(i<=Fh)return 0;let e=Dh-Fh;if(i>=Dh)return e*.5+(i-Dh);let t=(i-Fh)/e;return e*(t*t*t-.5*t*t*t*t)}function Dd(i){return .13*(1-Math.pow(Mr((i-2.6)/(He-2.6)),2.2))+.003}function Ud(i){return .9/Math.max(.035,He+.12-i)-.9/(He+.12)}function _M(i){let t=He+.12-i;return t>.035?.9/(t*t):0}var yM=Ri([[He,1],[4.3,.97],[5.4,.93],[5.75,.86],[6.05,.72],[6.6,.64],[7.6,.52],[8.6,.36],[9.8,.14],[11.5,.04]]),MM=Ri([[He,0],[3.68,30],[5.7,30],[6.1,14],[6.6,11],[7.6,10],[8.4,6.5],[9,2.4],[9.6,0]]),SM=Ri([[He,16],[4.4,12],[5.4,10],[5.85,5],[6.2,2.4],[7,1.8],[8.6,.9],[9.4,.6]]),bM=Ri([[He,.22],[5.4,.22],[5.75,.08],[5.95,0]]),Wo=5.84,k0=5.98,wM=Ri([[Wo,-.85],[6.4,-.6],[7,-.28],[8,-.08],[9.2,.1]]),TM=Ri([[Wo,1],[6.5,.85],[7.4,.4],[8.4,.1]]),EM=Ri([[Wo,2],[6.3,1.7],[7,1.25],[8,1.1],[8.8,1]]);function G0(){return{t:0,a:0,g:0,spin:0,spinPhase:0,shutter:.02,matterGain:1,webFade:1,heroFade:1,filFade:1,press:0,seedGlow:1,seedScale:1,seedWidth:1,seedBloom:0,core:0,coreSize:.02,coreTint:1,disk:0,diskRadius:.1,diskSpin:0,diskSpinRate:0,plasma:0,plasmaEmit:0,plasmaKappa:0,plasmaFill:.3,temp:0,supercool:0,bubble:0,bubbleDone:0,bubbleWall:0,diff:0,threads:0,threadOpen:0,threadDense:0,threadBead:0,threadCool:0,threadZoom:0,gas:0,condense:0,gasLit:0,band:0,parentSky:0,skyPull:0,newSky:0,galaxy:0,galaxyGlow:0,galaxyStars:1,sun:0,sunBeacon:0,planet:0,cool:0,steam:0,ocean:0,clouds:0,life:0,atmo:0,shake:0,exposure:1,bloom:.08,bloomAdd:0,flash:0,shockRadius:0,shockAmp:0,lens:0,aberration:0,curveMix:1,hueCurve:0,scrim:0,grain:.05,vignette:.32,bg:[0,0,0],lift:[0,0,0]}}var AM=[4/255,7/255,11/255],z0=[1/255,1.8/255,2.6/255],RM=[3/255,6/255,9/255],Ma=[0,0,0];function Nd(i){let e=i&&i.length>=3&&i.every(Number.isFinite)?i:[1,.925,.874];Ma[0]=e[0]*.018+.004,Ma[1]=e[1]*.018+.012,Ma[2]=e[2]*.018+.022}Nd(null);function W0(i,e,t){i.t=e;let n=e-He;i.a=qo(e),i.g=Id(e),i.spin=Ld(e),i.spinPhase=Fd(e),i.shutter=.022*(1-.7*oe(9,10,e))+.03*oe(He,3.75,e)*(1-oe(6.9,8.2,e))+.02*oe(1.8,3.4,e)*(1-oe(3.6,3.8,e)),i.webFade=1-oe(20.6,23,e),i.filFade=1-oe(19.5,21.3,e),i.heroFade=1-oe(19,21.4,e),i.matterGain=1;let s=oe(.2,He,e),r=oe(3.32,3.56,e)*(1-oe(3.56,He,e)),a=oe(0,B0,e)*Math.exp(-Math.max(0,e-B0)/gM);i.press=a,i.seedGlow=e<1.6?vM*(1+.7*a)*(1-oe(.3,1.5,e)):0,i.seedScale=1+.12*a,i.seedWidth=(1+.25*a)*(1-.4*oe(.25,1.3,e)),i.seedBloom=xM*(1-oe(.15,2.2,e));let o=(.9*oe(.04,.9,e)+2.2*s*s*s+2.2*Vo(e,He,.04,.16))*(1+.85*a);o*=1-.55*r,e>He&&(o=(1.2+7*Math.exp(-n/.05))*Math.exp(-n/.5)),i.core=o,i.coreSize=e<=He?fi(.008,.0045,s)*(1-.35*r)*(1+.28*a):.006+.006*(1-Math.exp(-n*5)),i.coreTint=e<=He?1-.65*oe(2.6,He,e):0,i.disk=oe(1.1,2.4,e)*(1-oe(3.5,He,e)),i.diskRadius=Dd(e),i.diskSpin=Ud(e),i.diskSpinRate=_M(e),i.temp=e<=He?1:Ci(yM,e),i.plasmaEmit=e<=He?0:Ci(MM,e),i.plasma=e<=He?0:1-oe(Wo,k0,e),i.plasmaKappa=Ci(SM,e),i.plasmaFill=Ci(bM,e),i.supercool=.3*oe(4.25,4.8,e),i.bubble=oe(4.3,5.6,e),i.bubbleWall=2.2*oe(4.4,4.52,e)*(1-oe(5.35,5.85,e)),i.bubbleDone=oe(5.35,5.85,e),i.diff=oe(6.4,8,e),i.threads=oe(Wo,k0,e)*(1-oe(8.8,9.6,e))*Ci(EM,e),i.threadOpen=Ci(wM,e),i.threadDense=Ci(TM,e),i.threadBead=oe(7.8,9,e),i.threadCool=oe(6.2,9,e),i.threadZoom=.035*oe(5.94,6.02,e)*(1-oe(6.2,6.8,e)),i.gas=oe(9.2,10.4,e)*(1-.75*oe(13.2,15.6,e))*(1-oe(19.2,21,e)),i.condense=ys(9.4,12.4,e),i.gasLit=oe(12,13.6,e),i.parentSky=oe(0,.7,e)*(1-oe(3.25,3.55,e)),i.skyPull=oe(.9,3.45,e),i.newSky=oe(22.6,26.5,e),i.band=oe(23.5,25.7,e),i.galaxy=oe(18.9,21.2,e),i.galaxyGlow=oe(19.2,21.6,e),i.galaxyStars=1-.85*oe(24,26.4,e),i.sun=oe(21.6,23.6,e),i.sunBeacon=oe(21.8,23.2,e)*(1-oe(24.6,26.2,e)),i.planet=oe(24.6,25.6,e),i.cool=oe(26,27.6,e),i.steam=oe(27.2,28,e)*(1-oe(28.4,29.4,e)),i.ocean=oe(27.5,29.2,e),i.clouds=oe(28,29.8,e),i.life=oe(29.2,30.8,e),i.atmo=oe(26.9,29,e),i.shake=t?0:Vo(e,He,.02,.32)*(e>=He?1:0);let l=e>=He?Math.exp(-n/.085):0,c=t?.2:1;i.flash=l*c,i.exposure=(1-.3*r-.18*oe(9,10.4,e)*(1-oe(12,14,e)))*(1+.35*l*c),i.bloom=.075+.08*(1-oe(.1,2,e))+.05*s*(e<=He?1:0)+.08*c*Vo(e,He,.04,.16)+.04*oe(12.5,15,e),i.bloomAdd=.55*(1-oe(.1,2,e)),i.shockRadius=e>=He?.04+1.9*(1-Math.exp(-n*2.6)):0,i.shockAmp=t?0:e>=He?Math.exp(-n/.45)*oe(He,3.62,e):0,i.lens=oe(1,2.9,e)*(1-oe(3.36,3.56,e)),i.aberration=.25+(t?0:2.5*Vo(e,He,.04,.3)),i.grain=fi(.022,.042,oe(.2,2,e)),i.curveMix=oe(.15,2.2,e),i.hueCurve=.45*oe(3.56,3.72,e)*(1-oe(10.4,12.2,e)),i.scrim=oe(.3,1.6,e)*(.2+.32*oe(3.56,3.7,e)*(1-oe(8.8,9.8,e))+.1*oe(11,13,e)*(1-oe(22,24,e))),i.vignette=.3+.12*s*(e<=He?1:0);let u=1-oe(.2,1.8,e);i.lift[0]=Ma[0]*u,i.lift[1]=Ma[1]*u,i.lift[2]=Ma[2]*u;let d=oe(.6,3.3,e),h=oe(21,27,e);for(let f=0;f<3;f++){let g=fi(AM[f],z0[f],d);i.bg[f]=e<He?g:fi(z0[f],RM[f],h)}return i}var Uh=(i,e,t)=>[i,e,t],CM=i=>Math.hypot(i[0],i[1],i[2]),wn=i=>{let e=CM(i)||1;return[i[0]/e,i[1]/e,i[2]/e]},ba=(i,e)=>[i[0]+e[0],i[1]+e[1],i[2]+e[2]],Nh=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],Hn=(i,e)=>[i[0]*e,i[1]*e,i[2]*e],Sa=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],Od=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]];function q0(i,e,t){let n=Math.cos(t),s=Math.sin(t),r=Sa(e,i),a=Od(e,i);return[i[0]*n+a[0]*s+e[0]*r*(1-n),i[1]*n+a[1]*s+e[1]*r*(1-n),i[2]*n+a[2]*s+e[2]*r*(1-n)]}var Xo=2.5,Bd=2.6,Oh=wn(Uh(.16,.95,.27)),ti=Uh(.46,.1,-1),Yi=wn(Uh(-.3,1,.42)),Gn=.15,wr=wn(Uh(-.25,.42,1)),Ss=Yi,PM=Nh(wr,Hn(Ss,Sa(wr,Ss))),Tn=wn(PM),Bh=wn(Od(Ss,Tn));function IM(i,e){let t=Math.cos(e);return wn(ba(ba(Hn(Tn,Math.cos(i)*t),Hn(Bh,Math.sin(i)*t)),Hn(Ss,Math.sin(e))))}var Yo=.62,ai=ba(ti,Hn(IM(Yo,0),Gn*.72)),Ks=2e-5,X0=Ks*4.2,LM=Ks*36,FM=wn(Nh(ti,ai)),DM=q0(FM,Ss,-.66),Vn=wn(ba(DM,Hn(Ss,-.07))),UM=-.36,NM=wn(Nh(Ss,Hn(Vn,Sa(Ss,Vn)))),Zs=wn(q0(NM,Vn,UM)),OM=wn(Od(Vn,Zs)),BM=wn(ba(ba(Hn(Vn,-.34),Hn(OM,-.86)),Hn(Zs,.38))),wa=Nh(ai,Hn(BM,LM)),Y0=Ks*9.6;function kd(i){let e=Math.asin(Math.max(-1,Math.min(1,Sa(i,Ss))));return[Math.atan2(Sa(i,Bh),Sa(i,Tn)),e]}var bs=19.4,Hd=12.3,kM=[0,1,2].map(i=>Ri([[He,0],[9.4,[0,0,0][i]],[Hd,[.16,.04,-.55][i]],[16.2,[.26,.06,-.76][i]],[bs,ti[i]]])),zM=[[0,[0,0,1]],[He,[0,0,1]],[9.4,[.04,.03,1]],[Hd,[0,.1,1]],[14.6,[-.14,.3,1]],[16.2,[-.2,.36,1]],[bs,wr]],HM=[0,1,2].map(i=>Ri(zM.map(([e,t])=>[e,t[i]]))),[kh,VM]=kd(wr),[Ea,GM]=kd([-Vn[0],-Vn[1],-Vn[2]]);for(;Ea-kh>Math.PI;)Ea-=Math.PI*2;for(;Ea-kh<-Math.PI;)Ea+=Math.PI*2;var WM=Ri([[bs,kh],[21.6,kh+.32],[23,Yo*.85],[24.6,Yo],[26.2,fi(Yo,Ea,.65)],[28.8,Ea]]),qM=Ri([[bs,VM],[21.2,.8],[22.4,.7],[23.4,.5],[24.6,.2],[26.2,.1],[28.8,GM]]),XM=Ri([[0,0],[1.4,Math.log(.985)],[2.7,Math.log(.86)],[He,Math.log(.6)]],!0,!1),YM=Ri([[He,Math.log(.6)],[3.85,Math.log(.8)],[4.05,Math.log(1.25)],[4.35,Math.log(1.7)],[4.7,Math.log(1.95)],[5.1,Math.log(2.05)],[5.5,Math.log(2.1)],[5.9,Math.log(1.95)],[7,Math.log(.95)],[9.4,Math.log(.66)],[Hd,Math.log(.62)],[14.6,Math.log(1.3)],[17,Math.log(.84)],[bs,Math.log(.56)],[21.2,Math.log(.36)],[22.4,Math.log(.21)],[23.4,Math.log(.075)],[24.3,Math.log(.022)],[25.4,Math.log(.0034)],[26.6,Math.log(85e-5)],[28.2,Math.log(29e-5)],[30.4,Math.log(Y0)]]),$M=Ri([[He,52],[9.4,50],[bs,44],[25,40],[zn,38]]),KM=Ri([[He,46],[bs,46],[23,44],[26.6,42],[28.4,31],[29.5,30]]),ZM=27,JM=.12,jM=.2;function K0(i,e,t){let n=2*Math.atan(Math.tan(t*Math.PI/360)/e)*180/Math.PI;return Math.max(i,n)}function $0(i,e,t){return fi(t,K0(t,e,ZM),oe(.2,2,i))}function Z0(i,e,t,n,s,r,a){let o=i.target,l=i.dir,c=i.up,u;if(e<=He){let m=ys(.15,3.1,e),_=i.handoverTarget,E=i.handoverUp;for(let S=0;S<3;S++)o[S]=_[S]*(1-m);let y=Math.exp(Ci(XM,e));l[0]=-o[0],l[1]=-o[1],l[2]=y-o[2],u=Math.hypot(l[0],l[1],l[2]),c[0]=fi(E[0],0,m),c[1]=fi(E[1],1,m),c[2]=fi(E[2],0,m)}else{if(e<=bs)for(let _=0;_<3;_++)o[_]=Ci(kM[_],e);else{let _=ys(21,24.4,e),E=Xi((.8-n)/.35,0,1),y=ys(fi(24.8,24.5,E),fi(27.9,27.1,E),e);for(let S=0;S<3;S++)o[S]=ti[S]+(ai[S]-ti[S])*_+(wa[S]-ai[S])*y}if(e<=bs)for(let _=0;_<3;_++)l[_]=Ci(HM[_],e);else{let _=Ci(WM,e),E=Ci(qM,e),y=Math.cos(_)*Math.cos(E),S=Math.sin(_)*Math.cos(E),M=Math.sin(E);for(let w=0;w<3;w++)l[w]=Tn[w]*y+Bh[w]*S+Yi[w]*M}u=Math.exp(Ci(YM,e));let m=ys(21,28.8,e);c[0]=fi(0,Zs[0],m),c[1]=fi(1,Zs[1],m),c[2]=fi(0,Zs[2],m)}Ta(l);let d=i.right;zd(d,c,l),Ta(d),zd(c,l,d),Ta(c);let h=0,f=0;if(t.shake>0&&(h+=t.shake*.014*(Math.sin(e*71)+.6*Math.sin(e*133+1.7)),f+=t.shake*.012*(Math.sin(e*89+.4)+.5*Math.sin(e*151+2.9))),h-=r.x*.032,f+=r.y*.022,!a&&e>zn-1.5){let m=e-(zn-1.5),_=oe(0,6,m);h+=_*.022*Math.sin(m*.061),f+=_*.012*Math.sin(m*.043+1.1)}for(let m=0;m<3;m++)l[m]+=d[m]*h+c[m]*f;Ta(l),i.distance=u;let g=i.position;for(let m=0;m<3;m++)g[m]=o[m]+l[m]*u;if(e<=He)i.fov=$0(e,n,s);else{let m=K0(Ci($M,e),n,Ci(KM,e));i.fov=fi($0(He,n,s),m,ys(He,4.1,e))}i.fov=Xi(i.fov,10,100);let v=JM*Math.min(1,n)*oe(He,3.95,e)*(1-oe(5.6,6.3,e))+jM*i.shortScreen*oe(9.6,11.2,e)*(1-oe(19.4,20.8,e)),p=i.look;if(v>0){let m=v*Math.tan(i.fov*Math.PI/360);for(let _=0;_<3;_++)l[_]+=c[_]*m;Ta(l),zd(c,l,d),Ta(c)}for(let m=0;m<3;m++)p[m]=g[m]-l[m]*u;return i.near=Math.max(u*.02,1e-7),i.far=40,i}function J0(){return{position:[0,0,1],target:[0,0,0],look:[0,0,0],dir:[0,0,1],up:[0,1,0],right:[1,0,0],fov:45,near:.02,far:40,distance:1,handoverTarget:[0,0,0],handoverUp:[0,1,0],shortScreen:0}}function Ta(i){let e=Math.hypot(i[0],i[1],i[2])||1;i[0]/=e,i[1]/=e,i[2]/=e}function zd(i,e,t){let n=e[1]*t[2]-e[2]*t[1],s=e[2]*t[0]-e[0]*t[2],r=e[0]*t[1]-e[1]*t[0];i[0]=n,i[1]=s,i[2]=r}var ws=`
float hash11(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float hash13(vec3 p3) { p3 = fract(p3 * 0.1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
vec3 hash33(vec3 p3) {
  p3 = fract(p3 * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yxz + 33.33);
  return fract((p3.xxy + p3.yxx) * p3.zyx);
}
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
`,Wn=`
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
`,Aa=i=>`vec3(${i.map(e=>e.toFixed(4)).join(", ")})`,QM=Ih.map(Aa).join(`,
  `),_i=`
const vec3 BB[${kn}] = vec3[${kn}](
  ${QM}
);
vec3 blackbody(float T) {
  float x = clamp(log(max(T, 1.0) / ${yr.toFixed(1)}) * ${((kn-1)/Math.log(Lh/yr)).toFixed(6)}, 0.0, ${(kn-1).toFixed(1)});
  float i = min(floor(x), ${(kn-2).toFixed(1)});
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
`,j0=`
float kelvin(float k) { return 800.0 * pow(8.75, k); }
vec3 thermal(float k) {
  k = clamp(k, 0.0, 1.15);
  return blackbody(kelvin(k)) * (0.12 + 0.88 * min(k, 1.0));
}
`,Vd=`
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
`;var Q0=.34,zh=.1,em=.4,eS=`
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
`,tS=`
varying vec3 vColor;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float d2 = dot(p, p);
  if (d2 > 1.0) discard;
  gl_FragColor = vec4(vColor * exp(-d2 * 4.0) * (1.0 - d2), 1.0);
}
`,iS=`
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
`,nS=`
uniform float uOpacity, uTime;
varying vec2 vP;
varying vec3 vView;
varying vec3 vNormalV;
${Wn}
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
  float spiral = th - log(max(r, ${zh.toFixed(3)}) / ${zh.toFixed(3)}) / ${Q0.toFixed(3)};
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
  float disk = exp(-r / ${(em*.82).toFixed(3)}) * smoothstep(1.3, 0.85, r);
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
  float resolve = smoothstep(${(Gn*.06).toFixed(4)}, ${(Gn*.3).toFixed(4)}, dist);
  gl_FragColor = vec4(col * uOpacity * graze * resolve, 1.0);
}
`;function Gd(i,e){if(i()<.13)return e.r=Math.abs(xi(i))*.075+.005,e.ang=i()*Math.PI*2,e.h=xi(i)*.035*Math.max(.2,1-e.r*3),e.kind=0,e;e.r=-Math.log(1-i()*.985)*em+.03,e.r>1.15&&(e.r=.45+(e.r-1.15)%.7);let n=i()<.64,s=Math.log(Math.max(e.r,zh)/zh)/Q0,r=i()<.5?0:Math.PI,a=1+3.5*Math.max(0,1-(e.r-.08)/.2),o=n?xi(i)*(.12+.08*i())*a:i()*Math.PI*2;return e.ang=s+r+o,e.h=xi(i)*(.008+.012*e.r),e.kind=n?1:2,e}function tm(i,e,t,n,s){let r={r:0,ang:0,h:0,kind:0},a=[0,0,0];for(let o=n;o<s;o++){Gd(i,r);let l,c,u,d;if(r.kind===0)l=(.3+i()*.45)*.85,Go(3800+i()*1400,a),c=a[0],u=a[1],d=a[2];else{let h=r.kind===1&&i()<.45;l=h?.32+Math.pow(i(),4)*2.4:.1+i()*.22,Go(h?9e3+Math.pow(i(),2)*16e3:4500+i()*3e3,a),c=a[0],u=a[1],d=a[2],h&&i()<.06&&(c=1,u=.36,d=.5,l*=1.3)}e[o*4]=r.r,e[o*4+1]=r.ang,e[o*4+2]=r.h,e[o*4+3]=l,t[o*3]=c,t[o*3+1]=u,t[o*3+2]=d}}function im({count:i,orbit:e,color:t}){let n=new Tt,s=new D(...Tn),r=new D(...Yi),a=new D().crossVectors(s,r);n.matrixAutoUpdate=!1,n.matrix.makeBasis(s,r,a).setPosition(ti[0],ti[1],ti[2]),n.matrixWorldNeedsUpdate=!0;let o=new vt;o.setAttribute("position",new gt(new Float32Array(i*3),3)),o.setAttribute("aOrbit",new gt(e,4)),o.setAttribute("aColor",new gt(t,3)),o.boundingSphere=new Ji(new D,1e6);let l={uTime:{value:0},uOpacity:{value:0},uScale:{value:Gn},uPixelRatio:{value:1},uNearFade:{value:.002},uRefDepth:{value:.4}},c=new Fi(o,new De({vertexShader:eS,fragmentShader:tS,uniforms:l,transparent:!0,depthTest:!1,depthWrite:!1,blending:Xt,toneMapped:!1}));c.frustumCulled=!1,c.renderOrder=2;let u={uOpacity:{value:0},uTime:{value:0}},d=new Hi(2,2),h=new Je(d,new De({vertexShader:iS,fragmentShader:nS,uniforms:u,transparent:!0,depthTest:!1,depthWrite:!1,blending:Xt,toneMapped:!1,side:wi}));h.rotation.x=-Math.PI/2,h.scale.setScalar(Gn*1.3),h.frustumCulled=!1,h.renderOrder=1,n.add(h,c);function f(v,p,m){if(n.visible=v.galaxy>.001,!n.visible)return;l.uTime.value=v.t,l.uOpacity.value=v.galaxy*v.galaxyStars*p.galaxyGain,l.uPixelRatio.value=p.pixelRatio,l.uNearFade.value=Math.max(1e-6,p.cameraDistance*.3),l.uRefDepth.value=Math.max(.05,Math.min(.45,p.cameraDistance)),u.uTime.value=v.t;let _=Math.min(1,Math.max(0,(m-.003)/.006));u.uOpacity.value=v.galaxyGlow*.5*_,h.visible=u.uOpacity.value>.001}function g(){o.dispose(),c.material.dispose(),d.dispose(),h.material.dispose()}return{group:n,update:f,dispose:g}}var qd=56;function sS(i,e){let t=[{p:ti.slice(),mass:2.6,r:Gn*.9,axis:Yi.slice(),spin:-.35}],n=[0,0,.6],s=ti.map((c,u)=>c+wr[u]*.56),r=c=>aS(c,n,s);for(let c of[[-.42,-.3,-.85],[.1,.42,-1.75],[-.85,.2,-1.45],[.95,-.35,-1.6],[-.2,-.75,-1.9],[.62,.62,-.55]])r(c)<.3||t.push({p:c,mass:.7+i()*.6,r:.035+.045*1,axis:Wd(i),spin:i()<.5?1:-1});let a=0;for(;t.length<e&&a++<2e4;){let c=Xo*.92*Math.cbrt(i()),u=Wd(i),d=[u[0]*c,u[1]*c,u[2]*c];if(r(d)<.3||t.some(f=>nm(f.p,d)<.38))continue;let h=.25+Math.pow(i(),2.6)*1.6;t.push({p:d,mass:h,r:.035+.045*h,axis:Wd(i),spin:i()<.5?1:-1})}let o=[],l=new Set;return t.forEach((c,u)=>{let d=t.map((f,g)=>[g,nm(c.p,f.p)]).filter(([f])=>f!==u).sort((f,g)=>f[1]-g[1]),h=u===0?5:4;for(let f=0;f<h&&f<d.length;f++){let g=d[f][0];if(d[f][1]>1.2)break;let v=u<g?`${u}-${g}`:`${g}-${u}`;l.has(v)||(l.add(v),o.push({a:u,b:g,len:d[f][1],w:d[f][1]*(t[u].mass+t[g].mass)}))}}),{nodes:t,edges:o}}function Wd(i){return Xd(i,[0,0,0])}function Xd(i,e){let t=i()*2-1,n=i()*Math.PI*2,s=Math.sqrt(1-t*t);return e[0]=s*Math.cos(n),e[1]=t,e[2]=s*Math.sin(n),e}function rS(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}function nm(i,e){return Math.hypot(i[0]-e[0],i[1]-e[1],i[2]-e[2])}function aS(i,e,t){let n=[t[0]-e[0],t[1]-e[1],t[2]-e[2]],s=[i[0]-e[0],i[1]-e[1],i[2]-e[2]],r=Mr((s[0]*n[0]+s[1]*n[1]+s[2]*n[2])/(n[0]**2+n[1]**2+n[2]**2));return Math.hypot(s[0]-n[0]*r,s[1]-n[1]*r,s[2]-n[2]*r)}function sm(i,e){let t=0,n=i.length-1;for(;t<n;){let s=t+n>>1;i[s]<e?t=s+1:n=s}return t}function*oS(i,e,t,n){let s=Ms(90417),{nodes:r,edges:a}=sS(s,e),o=[],l=0;r.forEach(y=>{l+=y.mass,o.push(l)});let c=[],u=0;a.forEach(y=>{u+=y.w,c.push(u)}),yield;let{q:d,web:h,star:f,rnd:g}=t,v={r:0,ang:0,h:0,kind:0},p=rS(Tn,Yi),m=new Int16Array(i).fill(-1),_=new Float32Array(r.length).fill(99),E=[0,0,0];for(let y=0;y<i;y++){y>0&&y%n===0&&(yield);let S=s(),M,w,x,A=.2,R=-1;if(S<.3){R=sm(o,s()*l);let N=r[R];if(R===0){Gd(s,v);let k=v.r*Gn,X=v.ang,j=v.h*Gn+xi(s)*Gn*.12,J=Math.cos(X)*k,Re=Math.sin(X)*k;M=N.p[0]+Tn[0]*J+p[0]*Re+N.axis[0]*j,w=N.p[1]+Tn[1]*J+p[1]*Re+N.axis[1]*j,x=N.p[2]+Tn[2]*J+p[2]*Re+N.axis[2]*j}else{let k=N.r*(s()<.7?.45:1.1);M=N.p[0]+xi(s)*k,w=N.p[1]+xi(s)*k,x=N.p[2]+xi(s)*k}A=.24}else if(S<.84){let N=a[sm(c,s()*u)],k=r[N.a].p,X=r[N.b].p,j=s(),J=.014+.03*(1-Math.sin(Math.PI*j))+.012*Math.max(0,Math.sin(j*23+N.len*7));M=k[0]+(X[0]-k[0])*j+xi(s)*J,w=k[1]+(X[1]-k[1])*j+xi(s)*J,x=k[2]+(X[2]-k[2])*j+xi(s)*J,A=.2}else{Xd(s,E);let N=Xo*Math.cbrt(s());M=E[0]*N,w=E[1]*N,x=E[2]*N,A=.06}let I=M+xi(s)*A,L=w+xi(s)*A,U=x+xi(s)*A,C=Math.sqrt(I*I+L*L+U*U);if(C>Xo*1.04){let N=Xo*1.04/C;I*=N,L*=N,U*=N}d[y*3]=I,d[y*3+1]=L,d[y*3+2]=U,h[y*4]=M,h[y*4+1]=w,h[y*4+2]=x,h[y*4+3]=S>=.84?-1:R+1,m[y]=R,g[y*4]=s(),g[y*4+1]=s(),g[y*4+2]=s(),g[y*4+3]=s();let F=99,B=99,V=0,Y=R===0?.03:R>0?.05:S<.84?.012:0;if(s()<Y){let N=R>=0?r[R].mass:.3;F=11.95+Math.pow(s(),1.5)*2.4+(1-Math.min(1,N/1.8))*.9,V=.45+Math.pow(s(),3)*2.4,F<12.8&&(V*=2),s()<.34&&(B=F+1+s()*2.2,B>17.6?B=99:R>=0&&(_[R]=Math.min(_[R],B)))}f[y*4]=F,f[y*4+1]=B,f[y*4+3]=V}yield;for(let y=0;y<i;y++){y>0&&y%(n*4)===0&&(yield);let S=m[y],M=S>=0?_[S]:99;f[y*4+2]=M<99?M+g[y*4+2]*1.6:99,f[y*4+3]===0&&M<99&&s()<.045&&(f[y*4]=M+.5+s()*2.2,f[y*4+1]=99,f[y*4+3]=-(.4+Math.pow(s(),3)*1.4))}return{nodes:r,edges:a}}function*rm(i,e,t=6e3){let n={start:new Float32Array(i*3),color:new Float32Array(i*3),size:new Float32Array(i),energy:new Float32Array(i),q:new Float32Array(i*3),web:new Float32Array(i*4),star:new Float32Array(i*4),rnd:new Float32Array(i*4)},{nodes:s,edges:r}=yield*oS(i,Math.min(e,qd),n,t);return{count:i,arrays:n,nodes:s,edges:r}}var lS=`
#define IMPACT ${He.toFixed(3)}
#define MAX_NODES ${qd}
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
${j0}

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
`,cS=`
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
`;function am(i){let{count:e,arrays:t,nodes:n,edges:s}=i,r=new Qa;r.setAttribute("position",new bt([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),r.setIndex([0,1,2,0,2,3]),r.instanceCount=e;let a=(S,M,w)=>{let x=new Xa(M,w);return r.setAttribute(S,x),x},o=a("aStart",t.start,3),l=a("aColor",t.color,3),c=a("aSize",t.size,1),u=a("aEnergy",t.energy,1);a("aQ",t.q,3),a("aWeb",t.web,4),a("aStar",t.star,4),a("aRnd",t.rnd,4),r.boundingSphere=new Ji(new D,1e6);let d=[],h=[];for(let S=0;S<qd;S++){let M=n[S];d.push(M?new We(M.p[0],M.p[1],M.p[2],M.r):new We(0,0,0,1)),h.push(M?new We(M.axis[0],M.axis[1],M.axis[2],M.spin):new We(0,1,0,1))}let f={uS:{value:[new We,new We]},uC:{value:[new We,new We]},uAxis:{value:new D(...Oh)},uNodes:{value:d},uNodeAxes:{value:h},uTemp:{value:1},uDiff:{value:0},uWebFade:{value:1},uHeroFade:{value:1},uFilFade:{value:1},uGain:{value:1},uEngineMaxPx:{value:23},uHalfView:{value:new ye(720,450)},uProjScale:{value:1e3},uSize:{value:.0016},uMinPx:{value:.8},uMaxPx:{value:26},uMaxStreak:{value:260},uFocus:{value:1},uAperture:{value:0},uNearFade:{value:.02},uHandover:{value:new Rt},uEngineView:{value:new Rt},uHandA:{value:new We(.5,.5,.5,.5)},uHandB:{value:new We(1,1,1,1)}},g=new De({vertexShader:lS,fragmentShader:cS,uniforms:f,transparent:!0,depthTest:!1,depthWrite:!1,blending:Xt,toneMapped:!1}),v=new Je(r,g);v.frustumCulled=!1;function p(S,M,w,x,A=1,R=null,I=null){let{start:L,color:U,size:C,energy:F}=t;(!R||!I)&&(R=null,I=null);let B=f;if(!(w>0&&S&&x)){Ze();return}let V=w<e,Y=w/e;if(!V&&M){for(let Qe=0,we=0;Qe<e;Qe++,we+=3){let Ge=(Qe*Y|0)*3;L[we]=S[Ge],L[we+1]=S[Ge+1],L[we+2]=S[Ge+2],U[we]=M[Ge],U[we+1]=M[Ge+1],U[we+2]=M[Ge+2]}if(R)for(let Qe=0;Qe<e;Qe++){let we=Qe*Y|0;C[Qe]=R[we],F[Qe]=I[we]}else C.fill(-1),F.fill(-1)}else{let Qe=Ms(5521),we=.012/x.scale;for(let Ge=0;Ge<e;Ge++){let Ue=V?Ge%w:Ge*Y|0,Ne=Ge*3,dt=Ue*3;L[Ne]=S[dt],L[Ne+1]=S[dt+1],L[Ne+2]=S[dt+2],V&&Ge>=w&&(L[Ne]+=(Qe()-.5)*we,L[Ne+1]+=(Qe()-.5)*we,L[Ne+2]+=(Qe()-.5)*we),M?(U[Ne]=M[dt],U[Ne+1]=M[dt+1],U[Ne+2]=M[dt+2]):(U[Ne]=.7,U[Ne+1]=.85,U[Ne+2]=1),C[Ge]=R?R[Ue]:-1,F[Ge]=I?I[Ue]:-1}}let N=B.uHandover.value,k=x.x,X=x.y,j=x.z,J=x.p0,Re=x.scale;N.set(k[0]*Re,k[1]*Re,k[2]*Re,-(k[0]*J[0]+k[1]*J[1]+k[2]*J[2])*Re,X[0]*Re,X[1]*Re,X[2]*Re,-(X[0]*J[0]+X[1]*J[1]+X[2]*J[2])*Re,j[0]*Re,j[1]*Re,j[2]*Re,-(j[0]*J[0]+j[1]*J[1]+j[2]*J[2])*Re,0,0,0,1);let Ce=B.uEngineView.value,Fe=x.right,Q=x.up,ie=x.forward,fe=x.eye;Ce.set(Fe[0],Fe[1],Fe[2],-(Fe[0]*fe[0]+Fe[1]*fe[1]+Fe[2]*fe[2]),Q[0],Q[1],Q[2],-(Q[0]*fe[0]+Q[1]*fe[1]+Q[2]*fe[2]),ie[0],ie[1],ie[2],-(ie[0]*fe[0]+ie[1]*fe[1]+ie[2]*fe[2]),0,0,0,1),B.uHandA.value.set(x.kx,x.ky,x.ox,x.oy);let Pe=N.elements,Me=m(Qe=>{let we=L[Qe*3],Ge=L[Qe*3+1],Ue=L[Qe*3+2],Ne=Pe[0]*we+Pe[4]*Ge+Pe[8]*Ue+Pe[12],dt=Pe[1]*we+Pe[5]*Ge+Pe[9]*Ue+Pe[13],Gt=Pe[2]*we+Pe[6]*Ge+Pe[10]*Ue+Pe[14];return Math.sqrt(Ne*Ne+dt*dt+Gt*Gt)});B.uHandB.value.set(x.aspect,x.invDiag,Me,A),o.needsUpdate=!0,l.needsUpdate=!0,c.needsUpdate=!0,u.needsUpdate=!0;function Ze(){let Qe=Ms(5521),we=[0,0,0];for(let Ue=0;Ue<e;Ue++){Xd(Qe,we);let Ne=.15+.6*Math.cbrt(Qe());L[Ue*3]=we[0]*Ne,L[Ue*3+1]=we[1]*Ne*.4,L[Ue*3+2]=we[2]*Ne,U[Ue*3]=.7,U[Ue*3+1]=.88,U[Ue*3+2]=1,C[Ue]=.003,F[Ue]=-1}B.uHandover.value.identity(),B.uEngineView.value.set(1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1),B.uHandA.value.set(.5,.5,.5,.5);let Ge=m(Ue=>Math.hypot(L[Ue*3],L[Ue*3+1],L[Ue*3+2]));B.uHandB.value.set(1,1,Ge,1),o.needsUpdate=!0,l.needsUpdate=!0,c.needsUpdate=!0,u.needsUpdate=!0}}function m(S){let M=Math.max(1,Math.floor(e/4e3)),w=new Float32Array(Math.ceil(e/M)),x=0;for(let A=0;A<e;A+=M)w[x++]=S(A);return w.sort(),Math.max(1e-4,w[Math.floor(x*.97)]||1)}function _(S,M){let w=S.t,x=Math.max(0,w-S.shutter);E(f.uS.value[0],f.uC.value[0],w),E(f.uS.value[1],f.uC.value[1],x),f.uTemp.value=S.temp,f.uDiff.value=S.diff,f.uWebFade.value=S.webFade,f.uHeroFade.value=S.heroFade,f.uFilFade.value=S.filFade,f.uGain.value=S.matterGain*M.gain,f.uHalfView.value.set(M.width*.5,M.height*.5),f.uProjScale.value=M.projScale,f.uMinPx.value=.75*M.pixelRatio,f.uMaxPx.value=4*M.pixelRatio,f.uEngineMaxPx.value=23*M.pixelRatio,f.uMaxStreak.value=.22*M.height,f.uFocus.value=M.focus,f.uAperture.value=M.aperture,f.uNearFade.value=M.nearFade,f.uSize.value=M.size}function E(S,M,w){S.set(w,qo(w),Id(w),Fd(w)),M.set(Dd(w),Ud(w),Ld(w),0)}function y(){r.dispose(),g.dispose()}return{mesh:v,loadHandover:p,update:_,dispose:y,nodes:n,edges:s,count:e}}var Hh=14,hS=`
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
  mv.xy += position.xy * size * ${Hh.toFixed(1)};
  vP = position.xy * ${Hh.toFixed(1)};
  gl_Position = projectionMatrix * mv;
}
`,uS=`
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
  col *= smoothstep(${Hh.toFixed(1)}, ${(Hh*.6).toFixed(1)}, r);
  gl_FragColor = vec4(col * uIntensity * vEnergy, 1.0);
}
`,dS=`
uniform float uScale;
varying vec2 vUv;
void main() {
  vUv = position.xy;
  vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  mv.xy += position.xy * uScale;
  gl_Position = projectionMatrix * mv;
}
`,fS=`
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
`,Vh=Object.freeze([Object.freeze({scale:.79,intensity:.6,core:[1,.941,.919],halo:[1,.843,.731],rays:.3}),Object.freeze({scale:2.42,intensity:.08,core:[0,0,0],halo:[1,.773,.58],rays:0})]),om=(i,e)=>{let t=i?Math.max(Number(i[0])||0,Number(i[1])||0,Number(i[2])||0):0;return t>1e-4?[i[0]/t,i[1]/t,i[2]/t]:e},lm=2,pS=`
varying vec2 vP;
void main() {
  vP = position.xy;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,mS=`
uniform float uOpacity;
uniform float uSpin;      // integrated Keplerian angle at r = 1 (rad)
uniform float uSpinRate;  // its rate (rad/s), for the rotational motion blur
uniform vec2 uBeam;       // camera direction projected into the disk plane
varying vec2 vP;
${Wn}
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
`;function cm(){let i=new Tt,e=new Hi(2,2),t={uSize:{value:.016},uMinPx:{value:3},uProjScale:{value:1e3},uIntensity:{value:1},uTint:{value:1},uTime:{value:0},uSeedCore:{value:new D(1,.941,.919)},uSeedHalo:{value:new D(1,.843,.731)}},n=new De({vertexShader:hS,fragmentShader:uS,uniforms:t,transparent:!0,depthTest:!1,depthWrite:!1,blending:Xt,toneMapped:!1}),s=new Je(e,n);s.frustumCulled=!1,s.renderOrder=5;let r={uOpacity:{value:0},uSpin:{value:0},uSpinRate:{value:0},uBeam:{value:new ye}},a=new De({vertexShader:pS,fragmentShader:mS,uniforms:r,transparent:!0,depthTest:!1,depthWrite:!1,blending:Xt,toneMapped:!1,side:wi}),o=new Je(e,a);o.frustumCulled=!1,o.renderOrder=4;let l=new D(...Oh);o.quaternion.setFromUnitVectors(new D(0,0,1),l);let c=new D(1,0,0).applyQuaternion(o.quaternion),u=new D(0,1,0).applyQuaternion(o.quaternion),d=[];for(let p=0;p<lm;p++){let m=new De({vertexShader:dS,fragmentShader:fS,uniforms:{uScale:{value:.1},uCore:{value:new D},uHalo:{value:new D},uIntensity:{value:0},uRays:{value:0},uWidth:{value:1},uBloom:{value:0}},transparent:!0,depthTest:!1,depthWrite:!1,blending:Xt,toneMapped:!1}),_=new Je(e,m);_.frustumCulled=!1,_.renderOrder=3,_.visible=!1,d.push({mesh:_,material:m,scale:0,intensity:0})}i.add(o,...d.map(p=>p.mesh),s);let h=new D;function f(p,m){let _=Array.isArray(p)?p:Vh;for(let S=0;S<lm;S++){let M=d[S],w=_[S],x=w&&Number(w.scale)>0&&Number(w.intensity)>0;M.scale=x?Number(w.scale)*m:0,M.intensity=x?Number(w.intensity):0;let A=M.material.uniforms;A.uCore.value.fromArray(x&&w.core?w.core:[0,0,0]),A.uHalo.value.fromArray(x&&w.halo?w.halo:[0,0,0]),A.uRays.value=x&&Number(w.rays)||0}let E=_.find(S=>S&&Number(S.intensity)>0&&Number(S.scale)>0)||Vh[0],y=om(E.halo,[1,.843,.731]);t.uSeedHalo.value.fromArray(y),t.uSeedCore.value.fromArray(om(E.core,y))}f(null,.09);function g(p,m,_){let E=p.core>.001;s.visible=E,t.uIntensity.value=p.core,t.uSize.value=p.coreSize,t.uTint.value=p.coreTint,t.uTime.value=p.t;for(let y of d){if(y.mesh.visible=p.seedGlow>.001&&y.intensity>0,!y.mesh.visible)continue;let S=y.material.uniforms;S.uScale.value=y.scale*p.seedScale,S.uIntensity.value=y.intensity*p.seedGlow,S.uWidth.value=p.seedWidth,S.uBloom.value=p.seedBloom}t.uProjScale.value=m.projScale,t.uMinPx.value=2.5*m.pixelRatio,o.visible=p.disk>.001,o.visible&&(o.scale.setScalar(p.diskRadius*1.25),r.uOpacity.value=p.disk*(.9+1.6*Math.max(0,Math.min(1,(p.t-2.6)/.9))),r.uSpin.value=p.diskSpin,r.uSpinRate.value=p.diskSpinRate,h.set(_[0],_[1],_[2]).normalize(),r.uBeam.value.set(h.dot(c),h.dot(u)))}function v(){e.dispose(),n.dispose(),a.dispose();for(let p of d)p.material.dispose()}return{group:i,update:g,setLight:f,dispose:v}}var gS=`
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
`,vS=`
varying vec3 vColor;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float d2 = dot(p, p);
  if (d2 > 1.0) discard;
  gl_FragColor = vec4(vColor * exp(-d2 * 3.5), 1.0);
}
`,Gh=[0,0,0];function xS(i,e){let t=i<.58?4600+e*2400:i<.84?7e3+e*e*8e3:3300+e*1200;Go(t,Gh);for(let n=0;n<3;n++)Gh[n]=Gh[n]*.6+.4;return Gh}function*hm(i,e,t,n=3e3){let s=Ms(e),r=new Float32Array(i*3),a=new Float32Array(i*4),o=t||[0,1,0],l=Math.abs(o[0])<.9?[0,-o[2],o[1]]:[-o[2],0,o[0]],c=Math.hypot(l[0],l[1],l[2]),u=[l[0]/c,l[1]/c,l[2]/c],d=[o[1]*u[2]-o[2]*u[1],o[2]*u[0]-o[0]*u[2],o[0]*u[1]-o[1]*u[0]];for(let f=0;f<i;f++){f>0&&f%n===0&&(yield);let g,v,p;if(t&&s()<.68){let E=s()*Math.PI*2,y=xi(s)*.085,S=Math.cos(y),M=Math.sin(y),w=Math.cos(E),x=Math.sin(E);g=(u[0]*w+d[0]*x)*S+o[0]*M,v=(u[1]*w+d[1]*x)*S+o[1]*M,p=(u[2]*w+d[2]*x)*S+o[2]*M}else{p=s()*2-1;let E=s()*Math.PI*2,y=Math.sqrt(1-p*p);g=y*Math.cos(E),v=y*Math.sin(E)}r[f*3]=g,r[f*3+1]=v,r[f*3+2]=p;let m=s(),_=xS(m,s());a[f*4]=_[0],a[f*4+1]=_[1],a[f*4+2]=_[2],a[f*4+3]=1-Math.pow(s(),5)}let h=new vt;return h.setAttribute("position",new gt(r,3)),h.setAttribute("aStar",new gt(a,4)),h.boundingSphere=new Ji(new D,1e6),h}function*um(i){let e=yield*hm(i,7001,null);yield;let t=yield*hm(i*3,3307,Yi);return{parent:e,fresh:t}}var _S=`
uniform vec3 uCamRight, uCamUp, uCamFwd;
uniform vec2 uTan;
uniform vec3 uGalN, uGalIn;
uniform float uIntensity, uGrainScale;
varying vec2 vUv;
${ws}
${Wn}
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
`;function dm(i){let e=d=>{let h=new De({vertexShader:gS,fragmentShader:vS,uniforms:{uIntensity:{value:0},uTime:{value:0},uPixelRatio:{value:1},uTwinkle:{value:1},uPull:{value:0},uPullDir:{value:new D(0,0,-1)}},transparent:!0,depthTest:!1,depthWrite:!1,blending:Xt,toneMapped:!1}),f=new Fi(d,h);return f.frustumCulled=!1,f.renderOrder=-10,f},t=e(i.parent),n=new vt;n.setAttribute("position",new bt([-1,-1,0,3,-1,0,-1,3,0],3));let s=new D(ti[0]-ai[0],ti[1]-ai[1],ti[2]-ai[2]).normalize(),r={uCamRight:{value:new D},uCamUp:{value:new D},uCamFwd:{value:new D},uTan:{value:new ye(1,1)},uGalN:{value:new D(...Yi)},uGalIn:{value:s},uIntensity:{value:0},uGrainScale:{value:900}},a=new Je(n,new De({vertexShader:Tr,fragmentShader:_S,uniforms:r,transparent:!0,depthTest:!1,depthWrite:!1,blending:Xt,toneMapped:!1}));a.frustumCulled=!1,a.renderOrder=-20;let o=e(i.fresh);function l(d,h,f,g,v){d.visible=h>.002;let p=d.material.uniforms;p.uIntensity.value=h,p.uTime.value=f.t,p.uPixelRatio.value=g.pixelRatio,p.uTwinkle.value=v?0:1}function c(d,h,f,g,v){l(t,d.parentSky*.55,d,h,f);let p=t.material.uniforms;if(p.uPull.value=d.skyPull,p.uPullDir.value.set(-g.position[0],-g.position[1],-g.position[2]).normalize(),l(o,d.newSky*.7,d,h,f),a.visible=d.band>.001,a.visible){r.uCamRight.value.set(g.right[0],g.right[1],g.right[2]),r.uCamUp.value.set(g.up[0],g.up[1],g.up[2]),r.uCamFwd.value.set(-g.dir[0],-g.dir[1],-g.dir[2]);let m=Math.tan(g.fov*Math.PI/360);r.uTan.value.set(m*v,m),r.uIntensity.value=d.band,r.uGrainScale.value=h.height/m*.42}}function u(){for(let d of[t,o,a])d.geometry.dispose(),d.material.dispose()}return{parent:t,fresh:o,band:a,update:c,dispose:u}}var Yd=[[.75,.5,1.95,4.42,2.25],[-1.25,-.55,1.75,4.58,1.85],[.35,-1.45,1.6,4.7,2],[-.55,1.45,1.75,4.86,1.55],[1.65,-.55,1.35,5,1.6],[-1.75,.95,.95,5.12,1.35]],yS=.3,MS=(i,e,t)=>`
#define STEPS ${i}
#define OCTAVES ${e}
#define BUBBLES ${Yd.length}
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
${Wn}
${_i}
${Vd}

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
  float rho = uA * ${Bd.toFixed(2)};
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
    float sig = mix(${yS.toFixed(3)}, ka.w, x);
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
`,SS=i=>`
#define SHELLS ${i}
uniform vec3 uCamPos, uCamRight, uCamUp, uCamFwd;
uniform vec2 uTan;
uniform float uTime, uA, uTemp, uDiff, uGain, uOpen, uBead, uDense, uRho, uCool;
uniform float uNear, uRatio;
varying vec2 vUv;
${Wn}
${_i}
${Vd}

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
`;function fm({steps:i,octaves:e,shells:t,nodes:n}){let s=Math.max(1,n.length),r=[],a=[],o=0;for(let g of n)o=Math.max(o,g.mass);for(let g=0;g<s;g++){let v=n[g];if(!v){r.push(new We(0,0,0,1)),a.push(new We(0,1,0,0));continue}let p=v.mass/o;r.push(new We(v.p[0],v.p[1],v.p[2],Math.max(.035,v.r*(g===0?.5:.75)))),a.push(new We(.0011*(.35+v.mass),.42*(1-Math.sqrt(p)),Math.sqrt(p),0))}let l={uCamPos:{value:new D},uCamRight:{value:new D},uCamUp:{value:new D},uCamFwd:{value:new D},uTan:{value:new ye(1,1)},uTime:{value:0},uA:{value:0},uAPrev:{value:0},uTemp:{value:1},uEmit:{value:0},uKappa:{value:1},uBubble:{value:0},uBubbleDone:{value:0},uFill:{value:.2},uPlasma:{value:0},uSupercool:{value:0},uWall:{value:0},uGas:{value:0},uCondense:{value:0},uGasLit:{value:0},uBub:{value:Yd.map(g=>new We(g[0],g[1],g[2],g[3]))},uBubV:{value:Yd.map(g=>g[4])},uKnot:{value:r},uKnotB:{value:a}},c=new De({vertexShader:Tr,fragmentShader:MS(i,e,s),uniforms:l,depthTest:!1,depthWrite:!1,toneMapped:!1}),u={uCamPos:l.uCamPos,uCamRight:l.uCamRight,uCamUp:l.uCamUp,uCamFwd:l.uCamFwd,uTan:l.uTan,uTime:l.uTime,uA:l.uA,uTemp:l.uTemp,uDiff:{value:0},uGain:{value:0},uOpen:{value:0},uBead:{value:0},uDense:{value:0},uRho:{value:1},uCool:{value:0},uNear:{value:.13},uRatio:{value:Math.pow(1.45/.13,1/Math.max(1,t-1))}},d=new De({vertexShader:Tr,fragmentShader:SS(t),uniforms:u,depthTest:!1,depthWrite:!1,toneMapped:!1}),h={soft:!1,threads:!1};function f(g,v,p,m){l.uCamPos.value.set(v.position[0],v.position[1],v.position[2]),l.uCamRight.value.set(v.right[0],v.right[1],v.right[2]),l.uCamUp.value.set(v.up[0],v.up[1],v.up[2]),l.uCamFwd.value.set(-v.dir[0],-v.dir[1],-v.dir[2]);let _=Math.tan(v.fov*Math.PI/360);return l.uTan.value.set(_*p,_),l.uTime.value=g.t,l.uA.value=Math.max(g.a,1e-4),l.uAPrev.value=Math.max(m,1e-4),l.uTemp.value=g.temp,l.uEmit.value=g.plasmaEmit,l.uKappa.value=g.plasmaKappa,l.uBubble.value=g.bubble,l.uBubbleDone.value=g.bubbleDone,l.uFill.value=g.plasmaFill,l.uSupercool.value=g.supercool,l.uWall.value=g.bubbleWall,l.uPlasma.value=g.plasma*(g.plasmaEmit>.001?1:0),l.uGas.value=g.gas,l.uCondense.value=g.condense,l.uGasLit.value=g.gasLit,h.soft=l.uPlasma.value>.001||g.gas>.001,u.uGain.value=g.threads,h.threads=g.threads>.001,h.threads&&(u.uDiff.value=g.diff,u.uOpen.value=g.threadOpen,u.uBead.value=g.threadBead,u.uDense.value=g.threadDense,u.uCool.value=g.threadCool,u.uRho.value=Math.max(.001,g.a*Bd*1.1)),h}return{material:c,threads:d,update:f,dispose:()=>{c.dispose(),d.dispose()}}}var Wh=34,bS=`
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
  mv.xy += position.xy * size * ${Wh.toFixed(1)};
  vP = position.xy * ${Wh.toFixed(1)};
  gl_Position = projectionMatrix * mv;
}
`,wS=`
uniform float uIntensity, uBeacon, uTime;
varying vec2 vP;
varying float vEnergy;
varying float vPx;
${Wn}
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
  col *= smoothstep(${Wh.toFixed(1)}, ${(Wh*.55).toFixed(1)}, r);
  // While it is still a distant point, the star is lit up for the eye to find.
  float point = exp(-r * r * 0.6) * uBeacon * 20.0;
  gl_FragColor = vec4((col * vEnergy + K_SUN * point) * uIntensity, 1.0);
}
`,TS=`
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
`,ES=`
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
`,AS=`
varying vec3 vView;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vView = mv.xyz;
  gl_Position = projectionMatrix * mv;
}
`,RS=`
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
`,qn=512,Er=256,Qn=384,Js=192;function pm(i,e,t,n){let s=[],r=[];for(let d=0;d<t;d+=2){let h=Math.cos(((d+.5)/t-.5)*Math.PI);for(let f=d&2?1:0;f<e;f+=3)s.push(i[d*e+f]),r.push(h)}let a=s.map((d,h)=>h).sort((d,h)=>s[d]-s[h]),o=0;for(let d of r)o+=d;let l=[],c=0,u=0;for(let d of a)for(c+=r[d];u<n.length&&c>=n[u]*o;)l.push(s[d]),u++;for(;l.length<n.length;)l.push(s[a[a.length-1]]);return l}function $d(i,e,t){let n=new Fs(i,e,t,ci,zt);return n.wrapS=qr,n.wrapT=zi,n.magFilter=qt,n.minFilter=qt,n.generateMipmaps=!1,n.needsUpdate=!0,n}function*mm(){let i=Ga.toHalfFloat,e=O0(9127),t=(v,p,m,_)=>{let E=0,y=.5;for(let S=0;S<_;S++)E+=y*e(v,p,m),v=v*2.05+1.3,p=p*2.05+1.3,m=m*2.05+1.3,y*=.5;return E},n=v=>{let p=1-Math.abs(v);return p*p*p*p*p*p},s=(v,p,m,_,E)=>{let y=-_[2],S=_[0],M=Math.hypot(y,S)||1;y/=M,S/=M;let w=_[1]*S,x=_[2]*y-_[0]*S,A=-_[1]*y,R=v*_[0]+p*_[1]+m*_[2],I=v-_[0]*R,L=p-_[1]*R,U=m-_[2]*R,C=I*y+U*S,F=I*w+L*x+U*A,B=Math.hypot(C,F)/E;if(B>1.6)return 0;let V=Math.atan2(F,C)*Math.sign(_[1]),Y=.5+.5*Math.cos(2*(V+2.6*Math.log(B+.04)));return Math.pow(Y,1.6)*Math.exp(-B*B*1.6)*oe(.03,.09,B)*1.3},r=v=>{let p=Math.hypot(v[0],v[1],v[2]);return[v[0]/p,v[1]/p,v[2]/p]},a=r([.55,.62,.56]),o=r([-.62,-.58,.52]),l=new Uint16Array(qn*Er*4),c=new Float32Array(qn*Er);for(let v=0;v<Er;v++){v%3===0&&(yield);let p=((v+.5)/Er-.5)*Math.PI,m=Math.sin(p),_=Math.cos(p);for(let E=0;E<qn;E++){let y=((E+.5)/qn-.5)*Math.PI*2,S=_*Math.cos(y),M=_*Math.sin(y),w=S+.12*e(S*2+4,m*2+4,M*2+4),x=m+.12*e(S*2+9,m*2+9,M*2+9),A=M+.12*e(S*2-3,m*2-3,M*2-3),R=e(w*1.2,x*1.2,A*1.2)*.6+e(w*2.4+7,x*2.4+7,A*2.4+7)*.26,I=t(S*7+2,m*7+2,M*7+2,3)*.17,L=n(e(S*5.2+2,m*5.2+2,M*5.2+2)),U=oe(.08,.2,R)*(1-oe(.3,.55,R)),C=(v*qn+E)*4;c[v*qn+E]=R+I+.22*L*U,l[C+1]=i(L),l[C+2]=i(e(S*18,m*18,M*18)*.5+.5),l[C+3]=i(e(S*2.6+7,m*2.6+7,M*2.6+7)*.5+.5)}}yield;let u=pm(c,qn,Er,[.06,.63,.985]);for(let v=0;v<Er;v++)for(let p=0;p<qn;p++){let m=c[v*qn+p],_=m>=u[1]?(m-u[1])/(u[2]-u[1])*.42:(m-u[1])/(u[1]-u[0])*.3;l[(v*qn+p)*4]=i(_)}let d=new Uint16Array(Qn*Js*4),h=new Float32Array(Qn*Js),f=new Uint16Array(Qn*Js*4);for(let v=0;v<Js;v++){v%3===0&&(yield);let p=((v+.5)/Js-.5)*Math.PI,m=Math.sin(p),_=Math.cos(p),E=Math.abs(m),y=Math.exp(-((m/.06)**2))*.34,S=oe(.56,.66,E)*(1-oe(.78,.88,E))*.42,M=oe(.22,.32,E)*(1-oe(.42,.52,E)),w=.14+y+S-.24*M;for(let x=0;x<Qn;x++){let A=((x+.5)/Qn-.5)*Math.PI*2,R=_*Math.cos(A),I=_*Math.sin(A),L=(v*Qn+x)*4;d[L]=i(.035*e(R*8,m*8,I*8)+.02*e(R*23,m*23,I*23)),d[L+1]=i(e(R*7,m*7,I*7)*.5+.5+.25*e(R*19,m*19,I*19)),d[L+2]=i(1-Math.abs(e(R*3.1,m*3.1,I*3.1)));let U=1-Math.abs(e(R*6.3+3,m*6.3+3,I*6.3+3));d[L+3]=i(Math.pow(U,12));let C=R+.08*e(R*3+1,m*3+1,I*3+1),F=m+.08*e(R*3+6,m*3+6,I*3+6),B=I+.08*e(R*3+11,m*3+11,I*3+11),V=t(C*2.2,F*7.5,B*2.2,3),Y=t(C*11+3,F*11+3,B*11+3,2),N=w*(.55+.9*oe(-.3,.4,V))+V*.5+Y*.22;N=Math.max(N,s(R,m,I,a,.2)*.62,s(R,m,I,o,.17)*.6),h[v*Qn+x]=N,f[L+1]=i(V),f[L+2]=i(t(R*5,m*5,I*5,2)),f[L+3]=i(1)}}yield;let g=pm(h,Qn,Js,[.5,.76,.97]);for(let v=0;v<h.length;v++){let p=h[v];f[v*4]=i(p<g[1]?.38+(p-g[0])/(g[1]-g[0])*.21:.59+(p-g[1])/(g[2]-g[1])*.21)}return{surf:$d(l,qn,Er),detail:$d(d,Qn,Js),air:$d(f,Qn,Js)}}function gm({segments:i,surface:e}){let t=new Tt,n=new Hi(2,2),s={uSize:{value:X0},uProjScale:{value:1e3},uMinPx:{value:3},uIntensity:{value:0},uBeacon:{value:0},uTime:{value:0}},r=new Je(n,new De({vertexShader:bS,fragmentShader:wS,uniforms:s,transparent:!0,depthTest:!1,depthWrite:!1,blending:Xt,toneMapped:!1}));r.position.set(ai[0],ai[1],ai[2]),r.frustumCulled=!1,r.renderOrder=20;let a=new hs(1,i,Math.round(i/2)),o={uSunV:{value:new D},tSurf:{value:e.surf},tDetail:{value:e.detail},tAir:{value:e.air},uCool:{value:0},uSteam:{value:0},uOcean:{value:0},uClouds:{value:0},uLife:{value:0},uTime:{value:0},uOpacity:{value:0},uCloudSpin:{value:0}},l=new Je(a,new De({vertexShader:TS,fragmentShader:ES,uniforms:o,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}));l.position.set(wa[0],wa[1],wa[2]),l.scale.setScalar(Ks),l.frustumCulled=!1,l.renderOrder=30;let c={uCenterV:{value:new D},uSunV:{value:new D},uRadius:{value:Ks},uOuter:{value:Ks*1.07},uStrength:{value:0}},u=new Je(a,new De({vertexShader:AS,fragmentShader:RS,uniforms:c,transparent:!0,depthTest:!1,depthWrite:!1,blending:Xt,toneMapped:!1}));u.position.copy(l.position),u.scale.setScalar(Ks*1.07),u.frustumCulled=!1,u.renderOrder=31,t.add(r,l,u);let d=new D(...Zs).multiplyScalar(.92).addScaledVector(new D(...Vn),-.4).normalize(),h=new ln().setFromUnitVectors(new D(0,1,0),d),f=new ln,g=new D(0,1,0),v=new D(ai[0],ai[1],ai[2]),p=new D;function m(y,S,M){r.visible=y.sun>.001,s.uIntensity.value=y.sun,s.uBeacon.value=y.sunBeacon,s.uProjScale.value=S.projScale,s.uMinPx.value=2.2*S.pixelRatio,s.uTime.value=y.t;let w=y.planet>.001;l.visible=w,u.visible=w&&y.atmo>.001,w&&(f.setFromAxisAngle(g,5.3+y.t*.018),l.quaternion.copy(h).multiply(f),p.copy(v).sub(l.position).normalize(),p.transformDirection(M.matrixWorldInverse),o.uSunV.value.copy(p),c.uSunV.value.copy(p),c.uCenterV.value.copy(l.position).applyMatrix4(M.matrixWorldInverse),o.uCool.value=y.cool,o.uSteam.value=y.steam,o.uOcean.value=y.ocean,o.uClouds.value=y.clouds,o.uLife.value=y.life,o.uTime.value=y.t,o.uOpacity.value=y.planet,o.uCloudSpin.value=y.t*.006,c.uStrength.value=y.atmo*y.planet*3)}function _(){n.dispose(),a.dispose(),r.material.dispose(),l.material.dispose(),u.material.dispose(),e.surf.dispose(),e.detail.dispose(),e.air.dispose()}function E(y){y(e.surf),y(e.detail),y(e.air)}return{group:t,update:m,dispose:_,forget:E}}var CS=`
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
`,PS=`
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
`,IS=`
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
`,LS=`
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
`,FS=`
uniform sampler2D tSrc;
varying vec2 vUv;
void main() { gl_FragColor = vec4(texture2D(tSrc, vUv).rgb, 1.0); }
`,DS=`
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
`;function Ra(i,e){return new Ut(Math.max(1,i),Math.max(1,e),{type:zt,format:ci,depthBuffer:!1,stencilBuffer:!1,minFilter:qt,magFilter:qt,generateMipmaps:!1,wrapS:zi,wrapT:zi})}function vm(i,{bloomLevels:e,softScale:t,threadScale:n=.8,bloom:s}){let r=new vt;r.setAttribute("position",new bt([-1,-1,0,3,-1,0,-1,3,0],3));let a=new Dn(-1,1,1,-1,0,1),o=new vi,l=new Je(r);l.frustumCulled=!1,o.add(l);let c=(N,k,X=Ti)=>new De({vertexShader:Tr,fragmentShader:N,uniforms:k,blending:X,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:X!==Ti}),u=c(CS,{tSrc:{value:null},uTexel:{value:new ye},uKaris:{value:0}}),d=c(PS,{tSrc:{value:null},uTexel:{value:new ye},uRadius:{value:1}},Xt),h=c(FS,{tSrc:{value:null}},Xt),f=c(IS,{tSrc:{value:null},uStep:{value:new ye}}),g=c(LS,{tSrc:{value:null},uCenter:{value:new ye(.5,.5)},uAmount:{value:0},uFade:{value:0}}),v=new Fs(new Uint8Array([0,0,0,255]),1,1);v.needsUpdate=!0;let p={tScene:{value:null},tBloom:{value:v},uBloom:{value:0},uBloomAdd:{value:0},uBloomNorm:{value:1},uExposure:{value:1},uFlash:{value:0},uHue:{value:0},uScrim:{value:0},uScrimBand:{value:new ye(0,.42)},uGrain:{value:.04},uVignette:{value:.3},uAberration:{value:0},uTime:{value:0},uAspect:{value:1},uCurveMix:{value:1},uCenter:{value:new ye(.5,.5)},uLensR:{value:0},uShockR:{value:0},uShockAmp:{value:0},uBg:{value:new D},uResolution:{value:new ye(1,1)},uGlare:{value:new D},uLift:{value:new D},uLiftRadius:{value:.55}},m=c(DS,p),_=null,E=null,y=null,S=null,M=null,w=[],x=1,A=1;function R(N,k){I(),x=N,A=k,_=Ra(N,k);let X=Math.max(t,Math.min(.75,300/Math.max(1,Math.min(N,k))));E=Ra(Math.round(N*X),Math.round(k*X)),y=Ra(Math.round(N*X),Math.round(k*X));let j=Math.max(n,Math.min(1,480/Math.max(1,Math.min(N,k))));if(S=Ra(Math.round(N*j),Math.round(k*j)),M=Ra(Math.round(N*j),Math.round(k*j)),s){let J=N,Re=k;for(let Ce=0;Ce<e&&(J=Math.max(1,Math.round(J/2)),Re=Math.max(1,Math.round(Re/2)),w.push(Ra(J,Re)),!(J<=4||Re<=4));Ce++);}}function I(){for(_?.dispose(),_=null,E?.dispose(),E=null,y?.dispose(),y=null,S?.dispose(),S=null,M?.dispose(),M=null;w.length;)w.pop().dispose()}function L(N,k){l.material=N,i.setRenderTarget(k),i.render(o,a)}function U(N,k,X,j,J){if(!_)return;if(i.setClearColor(0,0),X){L(X,E),f.uniforms.tSrc.value=E.texture;let Ce=J.softBlur||.8;f.uniforms.uStep.value.set(Ce/E.width,0),L(f,y),f.uniforms.tSrc.value=y.texture,f.uniforms.uStep.value.set(0,Ce/E.height),L(f,E)}let Re=null;if(j&&(L(j,S),Re=S,J.threadZoom>.001)){let Ce=g.uniforms;Ce.uCenter.value.set(J.centerX,J.centerY),Ce.tSrc.value=S.texture,Ce.uAmount.value=J.threadZoom/8,Ce.uFade.value=0,L(g,M),Ce.tSrc.value=M.texture,Ce.uAmount.value=J.threadZoom,Ce.uFade.value=.7,L(g,S)}if(i.setRenderTarget(_),i.clear(!0,!1,!1),X&&(h.uniforms.tSrc.value=E.texture,L(h,_)),Re&&(h.uniforms.tSrc.value=Re.texture,L(h,_)),i.setRenderTarget(_),i.render(N,k),w.length){let Ce=_;for(let Fe=0;Fe<w.length;Fe++)u.uniforms.tSrc.value=Ce.texture,u.uniforms.uTexel.value.set(1/Ce.width,1/Ce.height),u.uniforms.uKaris.value=Fe===0?1:0,L(u,w[Fe]),Ce=w[Fe];for(let Fe=w.length-1;Fe>0;Fe--)d.uniforms.tSrc.value=w[Fe].texture,d.uniforms.uTexel.value.set(1/w[Fe].width,1/w[Fe].height),d.uniforms.uRadius.value=1,L(d,w[Fe-1]);p.tBloom.value=w[0].texture,p.uBloomNorm.value=1/w.length,p.uBloom.value=J.bloom,p.uBloomAdd.value=J.bloomAdd}else p.tBloom.value=v,p.uBloom.value=0,p.uBloomAdd.value=0;p.tScene.value=_.texture,p.uExposure.value=J.exposure,p.uFlash.value=J.flash,p.uCurveMix.value=J.curveMix,p.uHue.value=J.hueCurve,p.uScrim.value=J.scrim,p.uScrimBand.value.set(J.scrimLow||0,J.scrimHeight||.42),p.uGrain.value=J.grain,p.uVignette.value=J.vignette,p.uAberration.value=J.aberration,p.uTime.value=J.time,p.uAspect.value=x/A,p.uCenter.value.set(J.centerX,J.centerY),p.uLensR.value=J.lensR,p.uShockR.value=J.shockRadius,p.uShockAmp.value=J.shockAmp,p.uBg.value.set(J.bg[0],J.bg[1],J.bg[2]),p.uResolution.value.set(x,A),p.uGlare.value.set(J.glareX,J.glareY,J.glare),p.uLift.value.set(J.lift[0],J.lift[1],J.lift[2]),p.uLiftRadius.value=J.liftRadius,L(m,null)}let C=null,F=new vi;function B(N,k=3.6,X=5.8){if(!C){let j=(J,Re,Ce=!1)=>{let Fe=new Je(r,J);return Fe.frustumCulled=!1,{object:Fe,camera:a,scene:F,screen:Ce,at:Re}};C=[j(u,0),j(d,0),j(m,0,!0),j(h,k),j(f,k),j(g,X)];for(let[J,Re]of N)C.push(j(J,Re))}return C}function V(){I(),r.dispose(),u.dispose(),d.dispose(),h.dispose(),f.dispose(),g.dispose(),m.dispose(),v.dispose()}function Y(N){for(let k of[_,E,y,S,M,...w])k&&N(k);for(let k of[r,u,d,h,f,g,m,v])N(k)}return{allocate:R,release:I,render:U,compileUnits:B,forget:Y,dispose:V,get allocated(){return!!_}}}var xm=Object.freeze({high:{matter:16e4,nodes:56,galaxy:9e4,sky:4200,bloomLevels:6,softScale:.5,plasmaSteps:7,plasmaOctaves:4,shells:6,threadScale:.85,planetSegments:128,maxPixels:34e5},medium:{matter:9e4,nodes:48,galaxy:52e3,sky:3e3,bloomLevels:5,softScale:.42,plasmaSteps:6,plasmaOctaves:4,shells:5,threadScale:.72,planetSegments:96,maxPixels:21e5},low:{matter:38e3,nodes:36,galaxy:24e3,sky:2e3,bloomLevels:4,softScale:.34,plasmaSteps:4,plasmaOctaves:3,shells:4,threadScale:.6,planetSegments:64,maxPixels:11e5}}),_m=6,US=16,NS=2500;function ym({renderer:i,quality:e={}}={}){let t=yi(),n=xm[e.tier]?e.tier:"high",s=xm[n],r=Math.round(Math.max(4e3,Math.min(s.matter,e.particles>0?Math.max(e.particles,s.matter*.5):s.matter))),a=e.bloom!==!1,o=null,l=null,c=null,u=null,d=null,h=null,f=null,g=new vi;g.matrixWorldAutoUpdate=!0;let v=new gi(45,1,.02,40),p=!1,m=0,_=0,E=null,y=new Promise(re=>{E=re}),S={createMs:0,steps:0,longestMs:0,buildMs:0,beganBeforeBuild:!1,compileMs:0,beginMs:0,beginCompileMs:0,beginPending:0,centreMs:0,handoverMs:0,heldMs:0,firstFrameMs:-1,focus:!1,exact:!1,light:"default"},M=G0(),w=J0(),x={x:0,y:0,tx:0,ty:0},A={width:1,height:1,pixelRatio:1,projScale:1e3,focus:1,aperture:0,nearFade:.02,size:.0016,gain:1,galaxyGain:1,cameraDistance:1},R={exposure:1,bloom:.08,bloomAdd:0,flash:0,grain:.04,vignette:.3,aberration:0,time:0,curveMix:1,hueCurve:0,scrim:0,scrimLow:0,scrimHeight:.42,centerX:.5,centerY:.5,lensR:0,shockRadius:0,shockAmp:0,bg:M.bg,glareX:0,glareY:0,glare:0,lift:M.lift,liftRadius:.55,softBlur:.8,threadZoom:0},I=0,L=!1,U=!1,C=!1,F=!1,B=45,V=1,Y=1,N=1,k=null,X=!1,j=new D,J={p0:[0,0,0],scale:1,x:[1,0,0],y:[0,1,0],z:[0,0,1],eye:[0,0,1],forward:[0,0,-1],right:[1,0,0],up:[0,1,0],kx:.5,ky:.5,ox:.5,oy:.62,aspect:1,invDiag:1},Re=new ye,Ce={matter:!0,soft:!0},Fe={},Q=se(r),ie=dt(),fe=i.domElement,Pe=!1,Me=0,Ze=!1,Qe=!1,we=0,Ge=0,Ue=null,Ne=null;fe?.addEventListener?.("webglcontextlost",ee),fe?.addEventListener?.("webglcontextrestored",le),oi(),S.createMs=yi()-t;function*dt(){let re=yield*rm(r,s.nodes,4e3);o=am(re),yield,l=cm();let ze=Ms(24680),Oe=new Float32Array(s.galaxy*4),mt=new Float32Array(s.galaxy*3);for(let Et=0;Et<s.galaxy;Et+=8e3)yield,tm(ze,Oe,mt,Et,Math.min(s.galaxy,Et+8e3));d=im({count:s.galaxy,orbit:Oe,color:mt}),yield,c=dm(yield*um(s.sky)),yield,u=fm({steps:s.plasmaSteps,octaves:s.plasmaOctaves,shells:s.shells,nodes:o.nodes}),yield;let ft=yield*mm();yield,h=gm({segments:s.planetSegments,surface:ft}),yield,f=vm(i,{bloomLevels:s.bloomLevels,softScale:s.softScale,threadScale:s.threadScale,bloom:a}),g.add(c.band,c.parent,c.fresh,d.group,o.mesh,l.group,h.group),p=!0}function Gt(){let re=yi();ie.next();let ze=yi()-re;S.steps++,S.longestMs=Math.max(S.longestMs,ze),p&&(S.buildMs=yi()-t,E(!0))}function oi(){p||X||m||_||(Ue?_=setTimeout(Dt,0):typeof requestIdleCallback=="function"?m=requestIdleCallback(Dt,{timeout:1e3}):_=setTimeout(Dt,16))}function Dt(re){if(m=0,_=0,p||X)return;let ze=yi(),Oe=Ue?US:re&&typeof re.timeRemaining=="function"&&!re.didTimeout?Math.min(12,Math.max(_m*.5,re.timeRemaining()-1)):_m;try{do Gt();while(!p&&yi()-ze<Oe*.5)}catch(mt){console.error("Universe: ending film build failed",mt),Ne=mt,Ue=null,E(!1);return}if(!p){oi();return}if(Ue){let mt=Ue;Ue=null,et(mt)}z()}function $t(){p||(m&&typeof cancelIdleCallback=="function"&&cancelIdleCallback(m),m=0,_||oi())}function z(re=!1){if(Ze||X||Pe||!p)return;let ze=yt();if(ze.every(Wt=>Wt.done))return;Ze=!0;let Oe=yi(),mt=Me,ft=new Ut(1,1,{type:zt,depthBuffer:!1}),Et=typeof i.compileAsync=="function",pt=0,Ot=()=>X||Pe||mt!==Me,es=()=>{if(mt!==Me){js(ft);return}Ze=!1,ft.dispose(),ze.every(Wt=>Wt.done)&&(S.compileMs=yi()-Oe)},$i=()=>{for(;pt<ze.length&&ze[pt].done;)pt++;if(Ot()||pt>=ze.length){es();return}let Wt=de(),Oi=L?ze.filter(Ct=>!Ct.done&&!Ct.issued&&Ct.at<=Wt&&Ct.until>=Wt):[];if(Oi.length>1&&!we&&(Oi=Oi.slice(0,1)),!Oi.length){let Ct=ze[pt++];if(Ct.issued){$i();return}Oi=[Ct]}let ii=Oi.map(Ct=>{Ct.issued=!0;try{return G(Ct,ft,Et)}catch{return null}});Promise.all(ii.map(Ct=>Promise.resolve(Ct).catch(()=>{}))).then(()=>(we?setTimeout:Z)(()=>{if(!Ot())for(let Ct of Oi)P(Ct);$i()}))};re?$i():Z($i)}let It=null;function yt(){if(It)return It;let re=[],ze=new Set,Oe=(ft,Et,pt=1/0)=>ft.traverse(Ot=>{!Ot.material||ze.has(Ot)||(ze.add(Ot),re.push({object:Ot,camera:v,scene:g,screen:!1,at:Et,until:pt,done:!1}))});Oe(o.mesh,0,24.5),Oe(l.group,0,7.6),Oe(c.parent,0,He);let mt=new Map([[u.material,21],[u.threads,9.7]]);for(let ft of f.compileUnits([[u.material,He],[u.threads,5.8]],He,5.8))re.push({...ft,until:mt.get(ft.object.material)??(ft.at>He?9.7:ft.at>0?21:1/0),done:!1});return Oe(d.group,18.9),Oe(h.group,21.6),Oe(c.fresh,22.6),Oe(c.band,23.5),Oe(g,0),It=re.sort((ft,Et)=>ft.at-Et.at),It}function P(re){let ze=re.object.material,Oe=ze&&i.properties?.get(ze)?.currentProgram;try{Oe&&Oe.getUniforms&&(Oe.getUniforms(),Oe.getAttributes())}catch{}re.done=!0,It.every(mt=>mt.done)&&(Qe=!0)}function b(re){if(Qe||!It)return!0;let ze=!0;for(let mt=0;mt<It.length&&It[mt].at<=re;mt++){let ft=It[mt];if(ft.done||ft.until<re)continue;let Et=ft.object.material,pt=Et?i.properties.get(Et).currentProgram:null;if(!pt||typeof pt.isReady=="function"&&!pt.isReady()){ze=!1;break}}if(ze)return we=0,!0;Ze||z(!0);let Oe=yi();return we||(we=Oe),Oe-we<NS?(S.heldMs=Math.max(S.heldMs,Oe-we),!1):!0}function G(re,ze,Oe){let mt=i.getRenderTarget(),ft=i.outputColorSpace,Et=i.toneMapping;i.outputColorSpace=si,i.toneMapping=li;let pt;try{i.setRenderTarget(re.screen?null:ze),pt=Oe?i.compileAsync(re.object,re.camera,re.scene):i.compile(re.object,re.camera,re.scene)}finally{i.setRenderTarget(mt),i.outputColorSpace=ft,i.toneMapping=Et}return pt}function Z(re){typeof requestIdleCallback=="function"?requestIdleCallback(re,{timeout:L?120:1e3}):setTimeout(re,16)}function ee(){if(Pe=!0,Me++,Ze=!1,Qe=!1,we=0,It)for(let re of It)re.done=!1,re.issued=!1;he()}function le(){Pe=!1,p&&!X&&z()}function he(){g.traverse(re=>{js(re.geometry),js(re.material)}),u&&(js(u.material),js(u.threads)),f?.forget(js),h?.forget(js)}function te(){if(!p)return;let re=null,ze=0;for(let Oe of yt()){if(Oe.done)continue;ze++;let mt=Oe.object.material;if(!(Oe.at>=He||mt&&i.properties.get(mt).currentProgram)){re=re||new Ut(1,1,{type:zt,depthBuffer:!1});try{G(Oe,re,!1)}catch{}}}re?.dispose(),S.beginPending=ze,we=0,ze&&z(!0)}function se(re){return Math.min(2.2,Math.sqrt(16e4/re))}function ue(){k={toneMapping:i.toneMapping,toneMappingExposure:i.toneMappingExposure,clearColor:i.getClearColor(new je),clearAlpha:i.getClearAlpha(),autoClear:i.autoClear,outputColorSpace:i.outputColorSpace,renderTarget:i.getRenderTarget()},i.toneMapping=li,i.toneMappingExposure=1,i.autoClear=!1,i.outputColorSpace=si}function Be(){k&&(i.toneMapping=k.toneMapping,i.toneMappingExposure=k.toneMappingExposure,i.setClearColor(k.clearColor,k.clearAlpha),i.autoClear=k.autoClear,i.outputColorSpace=k.outputColorSpace,i.setRenderTarget(k.renderTarget),k=null)}function pe(){let re=Math.max(1,Math.round(V*N)),ze=Math.max(1,Math.round(Y*N)),Oe=Math.min(1,Math.sqrt(s.maxPixels/(re*ze)));f.allocate(Math.max(1,Math.round(re*Oe)),Math.max(1,Math.round(ze*Oe))),A.width=Math.max(1,Math.round(re*Oe)),A.height=Math.max(1,Math.round(ze*Oe)),A.pixelRatio=N*Oe}function de(){if(F&&U){for(let re=0;re<br.length;re++)if(Math.abs(I-br[re].start)<.001)return H0[re]}return I}function ke(re,ze,Oe,mt){let ft=0,Et=0,pt=0,Ot=Math.max(1,Math.floor(Oe/16e3)),es=new Float32Array(Math.ceil(Oe/(Ot*4))),$i=1/0;for(let Wt=0;Wt<3;Wt++){let Oi=0,ii=0,Ct=0,An=0;for(let Mi=0;Mi<Oe;Mi+=Ot){let Bi=re[Mi*3],Si=re[Mi*3+1],Zt=re[Mi*3+2],pi=Bi-ft,T=Si-Et,O=Zt-pt;if(pi*pi+T*T+O*O>$i)continue;let $=ze?.05+ze[Mi*3]*.3+ze[Mi*3+1]*.55+ze[Mi*3+2]*.15:1;Oi+=Bi*$,ii+=Si*$,Ct+=Zt*$,An+=$}if(!(An>0))return mt.slice();if(ft=Oi/An,Et=ii/An,pt=Ct/An,Wt<2){let Mi=0;for(let Zt=0;Zt<Oe;Zt+=Ot*4){let pi=re[Zt*3]-ft,T=re[Zt*3+1]-Et,O=re[Zt*3+2]-pt;es[Mi++]=Math.sqrt(pi*pi+T*T+O*O)}let Si=(es.subarray(0,Mi).sort()[Mi>>1]||1)*2.5;$i=Si*Si}}return[ft,Et,pt]}function qe(re={}){if(!(X||Ne)){if(I=0,L=!0,U=!1,C=!1,p){et(re);return}S.beganBeforeBuild=!0,Ue=re,$t()}}function et(re){let ze=yi();Ge=ze,S.firstFrameMs=-1;let{positions:Oe=null,colors:mt=null,sizes:ft=null,energies:Et=null,camera:pt=null,origin:Ot=[.5,.62],focus:es=null,focusLight:$i}=re,Wt=Oe?Math.min(re.count||Oe.length/3,Math.floor(Oe.length/3)):0;i.getSize(Re),V=re.width>0?re.width:Re.x||V,Y=re.height>0?re.height:Re.y||Y,N=re.pixelRatio>0?re.pixelRatio:e.pixelRatio>0?e.pixelRatio:i.getPixelRatio()||1,k||ue(),pe();let Oi=yi();te(),S.beginCompileMs=yi()-Oi;let ii=pt?.position||[0,.6,6],Ct=pt?.target||[0,0,0];B=pt?.fov||45;let An=yi(),Mi=kS(es,ii);S.focus=!!Mi;let Bi=Mi||(Wt>0?ke(Oe,mt,Wt,Ct):Ct.slice()),Si=ii[0]-Bi[0],Zt=ii[1]-Bi[1],pi=ii[2]-Bi[2],T=Math.hypot(Si,Zt,pi)||1;Si/=T,Zt/=T,pi/=T;let O=0,$=1,W=0;Math.abs(Zt)>.995&&($=0,W=-1);let q=$*pi-W*Zt,ce=W*Si-O*pi,_e=O*Zt-$*Si,ve=Math.hypot(q,ce,_e)||1;q/=ve,ce/=ve,_e/=ve;let Ee=Zt*_e-pi*ce,Le=pi*q-Si*_e,it=Si*ce-Zt*q,Te=J;Te.p0[0]=Bi[0],Te.p0[1]=Bi[1],Te.p0[2]=Bi[2],Te.scale=1/T,Te.x[0]=q,Te.x[1]=ce,Te.x[2]=_e,Te.y[0]=Ee,Te.y[1]=Le,Te.y[2]=it,Te.z[0]=Si,Te.z[1]=Zt,Te.z[2]=pi;{let Bt=Ct[0]-Bi[0],pn=Ct[1]-Bi[1],At=Ct[2]-Bi[2],mn=w.handoverTarget;mn[0]=(Bt*q+pn*ce+At*_e)/T,mn[1]=(Bt*Ee+pn*Le+At*it)/T,mn[2]=(Bt*Si+pn*Zt+At*pi)/T}let Ae=w.handoverUp;Ae[0]=O*q+$*ce+W*_e,Ae[1]=O*Ee+$*Le+W*it,Ae[2]=O*Si+$*Zt+W*pi;let lt=Ct[0]-ii[0],Ft=Ct[1]-ii[1],xt=Ct[2]-ii[2],wt=Math.hypot(lt,Ft,xt)||1;lt/=wt,Ft/=wt,xt/=wt;let Kt=Ft*W-xt*$,be=xt*O-lt*W,Jt=lt*$-Ft*O,ht=Math.hypot(Kt,be,Jt)||1;Kt/=ht,be/=ht,Jt/=ht;let Pi=V/Y,rn=Math.tan(B*Math.PI/360);Te.eye[0]=ii[0],Te.eye[1]=ii[1],Te.eye[2]=ii[2],Te.forward[0]=lt,Te.forward[1]=Ft,Te.forward[2]=xt,Te.right[0]=Kt,Te.right[1]=be,Te.right[2]=Jt,Te.up[0]=be*xt-Jt*Ft,Te.up[1]=Jt*lt-Kt*xt,Te.up[2]=Kt*Ft-be*lt,Te.kx=.5/(rn*Pi),Te.ky=.5/rn,Te.ox=Xi(Ot?.[0]??.5,0,1),Te.oy=Xi(Ot?.[1]??.62,0,1),Te.aspect=Pi,Te.invDiag=1/Math.hypot(Pi,1);let fn=!!(ft&&Et&&ft.length>=Wt&&Et.length>=Wt);S.exact=fn&&Wt>0;let ts=yi();S.centreMs=ts-An,o.loadHandover(Oe,mt,Wt,Wt>0?Te:null,1/T,fn?ft:null,fn?Et:null);let _t=$i===void 0?Vh:OS($i)||[];S.light=$i===void 0?"default":_t.length?"handover":"none",l.setLight(_t,1/T),Nd(_t.length?BS(_t[0].halo):null),S.handoverMs=yi()-ts,S.beginMs=yi()-ze}function H(re){if(X)return;let ze=Xi(Number.isFinite(re)?re:0,0,.1),Oe=1-Math.exp(-ze*2.5);x.x+=((F?0:x.tx)-x.x)*Oe,x.y+=((F?0:x.ty)-x.y)*Oe,!(!L||U)&&(Ue||!p||!b(I+ze)||(I+=ze,I>=zn&&(C=!0)))}function me(){if(Ne&&L)throw Ne;if(X||!L||!p||Pe)return;k||ue();let re=de();if(!b(re))return;S.firstFrameMs<0&&(S.firstFrameMs=yi()-Ge),f.allocated||pe(),W0(M,re,F);for(let Ot in Fe)typeof M[Ot]=="number"&&(M[Ot]*=Fe[Ot]);let ze=A.width/A.height,Oe=Xi((600-Y)/80,0,1)*Xi((ze-1.1)/.3,0,1);w.shortScreen=Oe,Z0(w,re,M,ze,B,x,F),v.position.set(w.position[0],w.position[1],w.position[2]),v.up.set(w.up[0],w.up[1],w.up[2]),v.lookAt(w.look[0],w.look[1],w.look[2]),v.fov=w.fov,v.aspect=ze,v.near=w.near,v.far=w.far,v.updateProjectionMatrix(),v.updateMatrixWorld(!0);let mt=Math.tan(w.fov*Math.PI/360);A.projScale=A.height*.5/mt,A.cameraDistance=w.distance,A.focus=w.distance,A.aperture=.0016*oe(He,4.2,re)*(1-oe(12.5,15,re)),A.nearFade=re<He?w.distance*.04:Math.max(Math.min(.14,w.distance*.2),w.distance*1.1*oe(18.8,20.4,re)*(1-oe(23,24.5,re))),A.size=re<He?.0016:fi(.0019,.0023,oe(8,12,re)),A.gain=Q,A.galaxyGain=1,o.mesh.visible=Ce.matter&&(M.webFade>.001||M.heroFade>.001),o.update(M,A),l.update(M,A,w.position),c.update(M,A,F,w,ze);let ft=Math.abs((w.position[0]-ti[0])*Yi[0]+(w.position[1]-ti[1])*Yi[1]+(w.position[2]-ti[2])*Yi[2]);d.update(M,A,ft),h.update(M,A,v);let Et=u.update(M,w,ze,qo(Math.max(0,re-M.shutter*.6)));if(j.set(0,0,0).project(v),R.centerX=j.x*.5+.5,R.centerY=j.y*.5+.5,R.lensR=.022*M.lens,R.liftRadius=ze<.8?.42:.55,R.glare=0,M.sun>.001&&re>25&&(j.set(ai[0],ai[1],ai[2]).applyMatrix4(v.matrixWorldInverse),j.z<0)){j.applyMatrix4(v.projectionMatrix);let Ot=Math.max(Math.abs(j.x),Math.abs(j.y));R.glareX=Xi(j.x*.5+.5,-.35,1.35),R.glareY=Xi(j.y*.5+.5,-.35,1.35),R.glare=M.sun*.07*oe(.9,1.3,Ot)*(1-.75*oe(1.5,12,Ot))}R.shockRadius=M.shockRadius,R.shockAmp=M.shockAmp,R.exposure=M.exposure,R.bloom=M.bloom,R.bloomAdd=M.bloomAdd,R.flash=M.flash,R.grain=M.grain,R.vignette=M.vignette,R.aberration=M.aberration,R.curveMix=M.curveMix,R.hueCurve=M.hueCurve;let pt=Oe*oe(10.6,12.2,re)*(1-oe(20.4,22.4,re));R.scrim=M.scrim+.3*pt,R.scrimLow=.27*pt,R.scrimHeight=.42+.2*pt,R.time=F?Math.floor(re):re,R.softBlur=.8+.4*oe(8.4,9.4,re),R.threadZoom=F?0:M.threadZoom,f.render(g,v,Et.soft&&Ce.soft?u.material:null,Et.threads&&Ce.soft?u.threads:null,R)}function ne(re,ze,Oe){re>0&&(V=re),ze>0&&(Y=ze),Oe>0&&(N=Oe),f?.allocated&&pe()}function ge(){let re=V0(I);return{time:I,duration:zn,started:L,paused:U,finished:C,phase:re,phaseKey:br[re].key,phases:br,impact:He}}function Se(re){U=re===void 0?!U:!!re}function ae(re){I=Xi(Number(re)||0,0,zn),L=!0,C=I>=zn,Ie()}function Ve(){I=zn,L=!0,C=!0,U=!1,Ie()}function Ie(){Qe||!p||Pe||X||!k||Ze||z(!0)}function Lt(){I=0,L=!0,C=!1,U=!1}function Mt(re,ze){x.tx=Xi(Number(re)||0,-1,1),x.ty=Xi(Number(ze)||0,-1,1)}function nn(re){F=!!re}function sn(){Ue&&(Ue=null,_&&clearTimeout(_),_=0,oi()),Be(),f?.release(),L=!1,U=!1}function Yh(){X||(sn(),X=!0,Ue=null,m&&typeof cancelIdleCallback=="function"&&cancelIdleCallback(m),_&&clearTimeout(_),fe?.removeEventListener?.("webglcontextlost",ee),fe?.removeEventListener?.("webglcontextrestored",le),o?.dispose(),l?.dispose(),c?.dispose(),u?.dispose(),d?.dispose(),h?.dispose(),f?.dispose())}return{begin:qe,update:H,render:me,resize:ne,state:ge,pause:Se,seek:ae,skipToEnd:Ve,replay:Lt,setPointer:Mt,setReducedMotion:nn,end:sn,dispose:Yh,handover:Object.freeze({energies:!0,focus:!0,focusLight:!0}),ready:y,info:()=>({tier:n,particles:r,bloom:a,buffer:[A.width,A.height],built:p,build:{...S}}),layers:Ce,tuning:Fe}}var yi=()=>typeof performance<"u"?performance.now():Date.now();function OS(i){let e=i&&Array.isArray(i.glows)?i.glows:null;if(!e||!e.length)return null;let t=Number.isFinite(Number(i.dim))&&Number(i.dim)>=0?Number(i.dim):1,n=[];for(let s of e)!s||!(Number(s.scale)>0)||!(Number(s.intensity)>=0)||n.push({scale:Number(s.scale),intensity:Number(s.intensity)*t,core:s.core,halo:s.halo,rays:Number(s.rays)||0});return n.length?n:null}function BS(i){if(!i||i.length<3)return null;let e=[];for(let t=0;t<3;t++){let n=Math.max(0,Math.min(1,Number(i[t])));if(!Number.isFinite(n))return null;e.push(n<=.0031308?n*12.92:1.055*Math.pow(n,1/2.4)-.055)}return Math.max(e[0],e[1],e[2])>.02?e:null}function kS(i,e){if(!i||typeof i.length!="number"||i.length<3)return null;let t=Number(i[0]),n=Number(i[1]),s=Number(i[2]);return!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(s)||Math.hypot(t-e[0],n-e[1],s-e[2])<1e-6?null:[t,n,s]}function js(i){let e=i&&i._listeners;e&&e.dispose&&(e.dispose.length=0),i&&i.isRenderTarget&&js(i.texture)}var Zd=[{start:0,key:"collapse"},{start:3.6,key:"birth"},{start:9,key:"structure"},{start:19,key:"world"}],HS=.6,qh=class{constructor(e){this.engine=e,this.film=null,this.failed=!1,this.active=!1,this.stopping=null,this.navigated=!1,this.leaving=!1,this.fade=0,this.phaseIndex=-1,this.finishedSent=!1,this.overlay=null,this.tick=0}prewarm(){if(!(this.film||this.failed))try{let e=ym;if(typeof e!="function")throw new Error("ending-film: createEndingFilm missing");if(this.film=e({renderer:this.engine.renderer,quality:this.engine.filmQuality()}),!this.film||typeof this.film.render!="function")throw new Error("ending-film: invalid film")}catch(e){console.warn("Universe: ending film unavailable \u2014",e.message),this.film=null,this.failed=!0}}async start({origin:e}={}){let t=this.engine;if(!t.ok||t.contextLost)return!1;if(this.active&&!this.stopping)return!0;if(this.stopping&&await this.stopping,this.prewarm(),!this.film)return!1;try{let n=t.snapshotForFilm(),s=Array.isArray(e)&&e.length>=2?[Mm(e[0]),Mm(e[1])]:[.5,.62];this.film.setReducedMotion?.(t.reducedMotion()),this.film.resize?.(t.width,t.height,t.pixelRatio);let r=t.filmSizes;r===!0||r==="auto"&&(this.film.handover&&this.film.handover.energies)||(n.sizes=null),this.film.begin({...n,origin:s,width:t.width,height:t.height,pixelRatio:t.pixelRatio})}catch(n){return console.error("Universe: ending film failed to begin",n),this.safeEnd(),!1}return this.active=!0,this.fade=0,this.phaseIndex=-1,this.finishedSent=!1,t.onFilmActive(!0),await new Promise(n=>{this.firstFrame=n,t.request(),setTimeout(n,600)}),this.active}frame(e){let t=this.film;if(t){try{t.update(e),t.render(),this.fade>0&&this.drawFade(this.fade)}catch(n){console.error("Universe: ending film error",n),this.abort();return}if(this.firstFrame){let n=this.firstFrame;this.firstFrame=null,n()}this.emitEvents()}}emitEvents(){if((this.tick=(this.tick+1)%3)!==0&&this.phaseIndex>=0)return;let e=this.rawState();if(!e)return;let t=Kd(e);if(t!==this.phaseIndex){this.phaseIndex=t;let n=e.phases||Zd;Sm("universe:ending-phase",{index:t,key:n[t]?.key??String(t),time:e.time||0})}e.finished&&!this.finishedSent&&(this.finishedSent=!0,Sm("universe:ending-finished",{time:e.time||0}))}drawFade(e){let t=this.engine.renderer;if(!this.overlay){let s=new Fn({color:0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),r=new Je(new Hi(2,2),s);r.frustumCulled=!1;let a=new vi;a.add(r),this.overlay={scene:a,mat:s,camera:new Dn(-1,1,1,-1,0,1)}}this.overlay.mat.opacity=Math.min(1,e);let n=t.autoClear;t.autoClear=!1,t.setRenderTarget(null),t.render(this.overlay.scene,this.overlay.camera),t.autoClear=n}pause(e){this.active&&this.film?.pause?.(e===void 0?void 0:!!e),this.engine.request()}seek(e){this.active&&this.film?.seek?.(Number(e)||0),this.finishedSent=this.rawState()?.finished?this.finishedSent:!1,this.engine.request()}skipToEnd(){this.active&&this.film?.skipToEnd?.(),this.engine.request()}replay(){this.active&&(this.film?.replay?.(),this.finishedSent=!1,this.phaseIndex=-1),this.engine.request()}setPointer(e,t){this.active&&this.film?.setPointer?.(e,t)}setReducedMotion(e){this.film?.setReducedMotion?.(!!e)}resize(e,t,n){if(this.film)try{this.film.resize?.(e,t,n)}catch(s){console.error(s)}}stop(e){return this.active?(e&&e.restore===!1&&(this.leaving=!0),this.stopping?this.stopping:(this.navigated=!1,this.stopping=new Promise(t=>{let n=performance.now(),s=()=>{if(!this.active)return t();let r=(performance.now()-n)/1e3/HS;if(this.fade=Math.min(1,r*r*(3-2*r)),this.engine.request(),r>=1){this.finishStop(),t();return}setTimeout(s,16)};s()}).then(()=>{this.stopping=null}),this.stopping)):Promise.resolve()}noteNavigation(){this.stopping&&(this.navigated=!0)}finishStop(){this.fade=1,this.safeEnd(),this.active=!1,this.fade=0,this.engine.onFilmActive(!1,!0,this.returnMode())}abort(){this.safeEnd(),this.active=!1,this.fade=0,this.engine.onFilmActive(!1,!0,this.returnMode())}returnMode(){let e=this.navigated?"navigated":this.leaving?"leaving":"restore";return this.navigated=!1,this.leaving=!1,e}safeEnd(){try{this.film?.end?.()}catch(e){console.error(e)}}rawState(){if(!this.film)return null;try{return this.film.state?.()||null}catch{return null}}state(){let e=this.active?this.rawState():null,t=e&&e.phases||this.rawState()?.phases||Zd;return e?{active:!0,time:e.time||0,duration:e.duration||31,started:!!e.started,paused:!!e.paused,finished:!!e.finished,phase:Kd(e),phaseKey:e.phaseKey||t[Kd(e)]?.key,phases:t,impact:e.impact??3.6}:{active:!1,time:0,duration:31,started:!1,paused:!1,finished:!1,phase:0,phases:t,impact:3.6}}dispose(){this.active&&this.safeEnd();try{this.film?.dispose?.()}catch{}this.film=null,this.overlay&&(this.overlay.mat.dispose(),this.overlay.scene.children[0].geometry.dispose())}};function Kd(i){if(typeof i.phase=="number")return i.phase;let e=i.phases||Zd;if(typeof i.phase=="string"){let n=e.findIndex(s=>s.key===i.phase);if(n>=0)return n}let t=0;for(let n=1;n<e.length;n++)(i.time||0)>=e[n].start&&(t=n);return t}var Mm=i=>Math.max(0,Math.min(1,Number(i)||0));function Sm(i,e){try{document.dispatchEvent(new CustomEvent(i,{detail:e}))}catch{}}var VS=["cover","preview","chapter","ending-ready"],bm=["hero","explore","contents","chapter","reading"],GS=!0,wm=.25,WS=i=>new Promise(e=>setTimeout(e,i)),qS=()=>new Promise(i=>typeof requestIdleCallback=="function"?requestIdleCallback(()=>i(),{timeout:60}):setTimeout(i,0)),Xh=class{constructor(e,t={}){bi(this,"onContextLost",e=>{e.preventDefault(),this.contextLost=!0,this.stopLoop(),Am("universe:contextlost",{})});bi(this,"onContextRestored",()=>{try{this.post=new ko(this.renderer,this.scene,this.camera),this.attachOverlay(),this.field.markDirty(),this.gpuTimer.restore(),this.contextLost=!1,this.lastSize="",this.resize(),this.applyBackground(!0),this.noSample=Math.max(this.noSample,10),Am("universe:contextrestored",{}),this.schedulePrewarm(300),this.request()}catch(e){console.error("Universe: context restore failed",e)}});bi(this,"frame",e=>{if(this.raf=0,!this.canRender()){this.lastDraw=0;return}let t=!this.lastDraw,n=t?0:e-this.lastDraw;if((window.devicePixelRatio||1)!==this.seenRatio&&(this.seenRatio=window.devicePixelRatio||1,this.lastSize="",this.holding?this.pendingResize=!0:this.resize()),this.film.active){let p=t?.016666666666666666:Math.min(.1,n/1e3);this.lastDraw=e,this.film.frame(p),this.countFrame(e),this.noSample=10,this.request();return}let s=this.holdFrame;this.holdFrame=!1;let r=this.ambient()&&!this.field.morphing&&!this.rig.moving&&!this.input.dragging&&!this.fading&&!this.scatterMoving&&!this.armMoving,a=this.holding&&!this.input.dragging?1e3/30:0,o=Math.max(a,r&&(this.coarseMQ.matches||this.rig.veil.value>.6||this.adaptive.level>=3||this.scatter.value>=1)?1e3/30:0);if(!s&&o&&!t&&n<o-3){this.raf=requestAnimationFrame(this.frame);return}let l=t?1/60:Math.min(.05,n/1e3);t&&(this.noSample=Math.max(this.noSample,10)),this.lastDraw=e;let c=this.renderer.info,u=c.programs?c.programs.length:0,d=this.noSample>0||s,h=performance.now(),f=this.step(l);this.gpuTimer.begin(),this.render(l);let g=(c.programs?c.programs.length:0)!==u;this.gpuTimer.end(d||g),this.adaptive.sample(n,performance.now()-h,o>0,d||g),this.noSample>0&&this.noSample--,this.gpuTimer.poll(this.onGpuTime);let v=this.adaptive.decide(e,this.gpuTimer.available);if(v!==0&&(this.resize(),this.noSample=Math.max(this.noSample,10)),this.countFrame(e),this.nodes.flush(),s&&this.holding&&!this.scatterActive()){this.lastHoldFrame=performance.now(),this.lastDraw=0;return}f||v!==0?this.request():this.lastDraw=0});bi(this,"onGpuTime",e=>this.adaptive.gpuSample(e));this.canvas=e,this.options=t,this.ok=!1,this.contextLost=!1,this.visible=!0,this.paused=!1,this.interactive=!1,this.selected=0,this.sceneName="cover",this.sceneKey="",this.chapter=0,this.layout="hero",this.formationId="origin",this.pending=null,this.readingRaw=0,this.reading=ei(0),this.time=0,this.clock=0,this.frames=0,this.fps=0,this.fpsFrames=0,this.fpsT0=0,this.raf=0,this.lastDraw=0,this.holding=!1,this.holdFrame=!1,this.holdFrameTimer=0,this.lastHoldFrame=0,this.pendingResize=!1,this.compiling=!1,this.noSample=0,this.width=1,this.height=1,this.pixelRatio=1,this.seenRatio=typeof window<"u"&&window.devicePixelRatio||1,this.lightFade={value:0,target:1,rate:.7},this.black={value:1,target:1,rate:1.4},this.frozen=!1,this.filmDof=!0,this.filmSizes="auto",this.projScratch=[0,0,0,0],this.blackHold=!1,this.awaitPage=!1,this.awaitTimer=0,this.revealUntil=0,this.focusScratch=[0,0,0],this.scatterTarget=0,this.scatter=ei(0),this.scatterMoving=!1,this.armTarget=0,this.arm=ei(0),this.armMoving=!1,this.dimEff=1,this.ctx={presence:0,time:0,gpuTime:0,dtLiving:0,clock:0,reading:0,focus:10,spread:0,expand:1,evolve:1,pixelScale:1e3,pixelRatio:1,selected:0,morph:1,solid:1,arm:0},this.reducedMQ=typeof matchMedia=="function"?matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1,addEventListener(){}},this.coarseMQ=typeof matchMedia=="function"?matchMedia("(pointer: coarse)"):{matches:!1}}init(){let e=this.canvas;this.worker=ah.create(this.options.script),this.renderer=new Wc({canvas:e,context:this.options.context||void 0,antialias:!1,alpha:!1,depth:!0,stencil:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:"high-performance"});let t=this.renderer;t.debug.checkShaderErrors=!GS,t.setClearColor(0,1),t.toneMapping=li,t.toneMappingExposure=Qi.exposure,t.outputColorSpace=si,t.autoClear=!0;let n=t.getContext();try{n.clearColor(4/255,7/255,11/255,1),n.clear(n.COLOR_BUFFER_BIT),n.clearColor(0,0,0,0)}catch{}try{let r=n.getParameter(n.ALIASED_POINT_SIZE_RANGE);this.maxPointSize=r&&r[1]?r[1]:64}catch{this.maxPointSize=64}let s=Pd(this.options.quality);this.autoQuality=!s,this.tierName=s||Cd(n),this.gpuTimer=new Ch(n),this.adaptive=new Ph(this.options.adaptive!==!1),this.adaptive.isNoop=(r,a)=>this.sameStep(On[r],On[a]),this.adaptive.pixelRatioOf=r=>this.pixelRatioFor(r,this.width,this.height),this.adaptive.cutsFill=(r,a)=>{let o=On[r],l=On[a];return o.draw!==l.draw||this.pixelRatioFor(o,this.width,this.height)!==this.pixelRatioFor(l,this.width,this.height)},this.scene=new vi,this.camera=new gi(Ao,1,.05,500),this.rig=new Th(this.camera),this.nodes=new Eh,this.film=new qh(this),this.post=new ko(t,this.scene,this.camera),this.buildWorld(),this.spec=gr.origin,this.rig.setFormation(this.spec),this.input=new Ah(this),this.listen(),this.resize(),this.rig.snap(),this.applyBackground(!0),this.ok=!0,this.compileThenRun(),this.schedulePrewarm(2600)}buildWorld(){let e=ms[this.tierName];this.cache=new rh(e.particles,this.worker),this.field=new th(e.particles,{renderer:this.renderer,gpuState:jp(this.renderer)}),this.stars=new oh(e.stars),this.accents||(this.accents=new _h(this.scene),this.accents.createAll()),this.scene.add(this.stars.points,this.field.points,this.field.ghost),this.field.uniforms.uSizeScale.value=e.size,this.field.uniforms.uGain.value=e.gain,this.attachOverlay()}attachOverlay(){let e=this.post&&this.post.overlay;if(!e)return;let t=this.accents.get("ch7");t&&t.overlay.parent!==e&&e.add(t.overlay),this.field.overlay.parent!==e&&e.add(this.field.overlay)}disposeWorld(){this.scene.remove(this.stars.points,this.field.points,this.field.ghost),this.field.dispose(),this.stars.dispose(),this.cache.clear()}compileThenRun(){this.compiling=!0;let e=()=>{this.compiling=!1,this.lastDraw=0,this.request()},t=()=>this.warmPrograms().then(e,e);this.precompile().then(t,n=>{console.warn("Universe: shader precompile failed",n),e()})}warmPrograms(){let e=(this.renderer.info&&this.renderer.info.programs||[]).slice(),t=performance.now()+1500;return new Promise(n=>{let s=()=>{let r=performance.now();for(;e.length&&performance.now()-r<4;){let a=e.pop();try{a.getUniforms(),a.getAttributes()}catch{}}!e.length||performance.now()>t||!this.ok?n():typeof requestIdleCallback=="function"?requestIdleCallback(s,{timeout:50}):setTimeout(s,0)};s()})}async precompile(){let e=this.renderer;if(typeof e.compileAsync!="function")return;let t=this.post,n=this.scene,s=t.composer.readBuffer,r=this.field,a=[[r.points,this.camera,s,n],[this.stars.points,this.camera,s,n],[t.passScene(),this.camera,s],[t.finishScene(),this.camera,null],[this.accents.root,this.camera,s,n],[t.overlay,this.camera,s],r.bakeScene?[r.bakeScene,r.bakeCamera,r.states[0]]:null],o=[];for(let l of a){if(!l||!this.ok)continue;let[c,u,d,h]=l,f=e.getRenderTarget();try{e.setRenderTarget(d),o.push(e.compileAsync(c,u,h||null))}finally{e.setRenderTarget(f)}await qS()}await Promise.race([Promise.all(o),WS(6e3)])}listen(){let e=(this.abort=new AbortController).signal;this.resizeObserver=new ResizeObserver(()=>this.onResize()),this.resizeObserver.observe(this.canvas);let t=()=>{if(!(typeof matchMedia!="function"||e.aborted))try{matchMedia(`(resolution: ${window.devicePixelRatio||1}dppx)`).addEventListener("change",()=>{this.lastSize="",this.onResize(),t()},{once:!0,signal:e})}catch{}};t(),document.addEventListener("visibilitychange",()=>document.hidden?this.stopLoop():this.request(),{signal:e}),this.canvas.addEventListener("webglcontextlost",this.onContextLost,{signal:e}),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,{signal:e});let n=()=>{this.film.setReducedMotion(this.reducedMotion()),this.request()};this.reducedMQ.addEventListener&&this.reducedMQ.addEventListener("change",n,{signal:e})}onResize(){this.holding?this.pendingResize=!0:this.resize()}basePixelRatio(e,t){let n=ms[this.tierName],s=this.coarseMQ.matches,r=Math.min(window.devicePixelRatio||1,s?Math.min(1.5,n.dprCap):n.dprCap);return Math.min(r,Math.sqrt(n.pixelBudget/Math.max(1,e*t)))}pixelRatioFor(e,t,n){let s=this.basePixelRatio(t,n),r=Math.max(.5,Math.min(s,e.floor||0),s*e.dpr);return Math.round(r*100)/100}sameStep(e,t){let n=ms[this.tierName],s=n.bloom?e.bloom:0,r=n.bloom?t.bloom:0;return e.draw===t.draw&&s===r&&this.pixelRatioFor(e,this.width,this.height)===this.pixelRatioFor(t,this.width,this.height)}resize(){let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;if(!e||!t)return;let n=ms[this.tierName],s=this.adaptive.step,r=this.pixelRatioFor(s,e,t),a=`${e}x${t}@${r}|${s.bloom}|${s.draw}|${this.tierName}`;if(this.field.setDrawCount(this.field.count*s.draw),this.field.uniforms.uGain.value=n.gain/Math.sqrt(s.draw),this.post.setBloom(n.bloom&&s.bloom>0,n.bloomScale*s.bloom),this.post.uniforms.uGrain.value=n.grain?Qi.grain:Qi.grain*.5,a===this.lastSize)return;this.lastSize=a,(e!==this.width||t!==this.height||!this.frameHeight)&&(this.frameHeight=Math.min(t,Math.max(1,window.innerHeight||t))),this.width=e,this.height=t,this.pixelRatio=r,this.renderer.setPixelRatio(r),this.renderer.setSize(e,t,!1),this.post.setSize(e,t,r),this.rig.setViewport(e,t,this.frameHeight);let o=this.field.uniforms;o.uPixelScale.value=t*r/(2*Math.tan(Mo.degToRad(Ao)/2)),o.uMinPx.value=Math.max(1.5,1.45*r),o.uMaxPx.value=Math.min(this.maxPointSize,46*r),this.stars.uniforms.uPixelRatio.value=r,this.ctx.pixelScale=o.uPixelScale.value,this.ctx.pixelRatio=r,this.updateScatterLook(),this.film.resize(e,t,r),this.noSample=Math.max(this.noSample,10),this.request()}updateScatterLook(){let e=this.field.uniforms,t=Ye(nt.density*this.width*this.height/1e6,nt.minStars,nt.maxStars);e.uScatterKeep.value=Math.min(1,t/Math.max(1,this.field.drawCount));let n=e.uScatterLook.value;n.y=nt.gain,n.z=nt.px*this.pixelRatio,n.w=nt.pxBright*this.pixelRatio,e.uScatterMotion.value.w=Ro(this.width,this.frameHeight||this.height)?1:nt.calm}setQuality(e){let t=Pd(e);this.autoQuality=!t;let n=t||Cd(this.renderer.getContext());if(this.adaptive.reset(),n!==this.tierName){this.tierName=n,this.disposeWorld(),this.buildWorld(),this.prewarmJob=null;let s=this.pending;this.pending=null,this.formationId!=="origin"&&(this.field.setImmediate(this.cache.get(this.formationId)),this.updateToUniforms(!0)),s&&this.queueMorph(s.fid,s.kind,s.instant),this.compileThenRun(),this.schedulePrewarm(1500)}this.lastSize="",this.resize(),this.request()}qualityInfo(){let e=ms[this.tierName];return{tier:this.tierName,particles:this.field.count,pixelRatio:this.pixelRatio,bloom:e.bloom&&this.post.bloom.enabled}}filmQuality(){let e=this.qualityInfo();return{tier:e.tier,particles:e.particles,pixelRatio:e.pixelRatio,bloom:ms[e.tier].bloom}}reducedMotion(){return!!this.reducedMQ.matches}ambient(){return!this.paused&&!this.reducedMotion()&&!this.frozen}setScene(e,t={}){if(!VS.includes(e))return;let n=t&&typeof t=="object"?t:{},s=e==="preview"||e==="chapter"?Ye(Math.round(Number(n.chapter)||1),1,8):0,r=bm.includes(n.layout)?n.layout:this.defaultLayout(e),a=`${e}|${s}|${r}`;if(a===this.sceneKey)return;this.sceneKey=a;let o=this.sceneName;e==="chapter"&&(o!=="chapter"||s!==this.chapter)&&(this.readingRaw=0),this.sceneName=e,this.chapter=s;let l=_0(e,s),c=this.pending?this.pending.fid:this.formationId;if(l!==c){let u=this.formationId==="origin"?"intro":e==="ending-ready"?"seed":e==="cover"?"cover":e==="preview"?"preview":"chapter";this.queueMorph(l,u,n.instant===!0)}else o!==e&&this.updateToUniforms(!1);this.layout=r,this.rig.setLayout(r),e==="ending-ready"&&this.scheduleFilmPrewarm(),this.applyBackground(!1),this.requestHoldFrame(),this.schedulePrewarm(900),this.request()}defaultLayout(e){return e==="cover"?this.layout==="explore"&&this.sceneName==="cover"?"explore":"hero":e==="preview"?"contents":e==="chapter"?"chapter":this.layout==="reading"||this.layout==="chapter"?this.layout:"chapter"}queueMorph(e,t,n){if(e===this.formationId){this.pending=null,this.releaseBlack();return}let s=this.formationId==="origin",r=this.cache.peek(e);if(r){this.pending=null,this.morphTo(r,s?"intro":t,n);return}let a={fid:e,kind:s?"intro":t,instant:n};this.pending=a,this.cache.request(e,{origin:s}).then(o=>{this.pending!==a||!this.ok||(this.pending=null,this.morphTo(o,a.kind,a.instant),this.request())},o=>{console.error(`Universe: formation '${e}' failed`,o),this.pending===a&&this.releaseBlack()})}releaseBlack(){this.blackHold&&(this.blackHold=!1,this.black.target=1,this.request())}morphTo(e,t,n){if(!e||!e.spec)return;this.blackHold&&(n=!0,this.releaseBlack());let s=e.spec,r=e.id,a=this.reducedMotion(),o=Jc[t]||Jc.chapter,l=this.formationId==="origin";if(this.formationId=r,this.spec=s,this.rig.setFormation(s),this.noSample=Math.max(this.noSample,2),n){e.origin=null,this.field.setImmediate(e),this.updateToUniforms(!0),this.accents.setActive(r,0,!0),this.rig.snap(),this.applyBackground(!1);return}let c=a?Jc.dissolve.duration:o.duration,u={...o,duration:c,radius:s.radius*1.15};if(l){let d=e.origin||ga(e,this.field.count);e.origin=null,this.field.setPair(d,e,u,a)}else this.field.morphTo(e,this.time,u,a);this.updateToUniforms(!0),this.accents.setActive(r,c,!1),this.morphKind=t,this.applyBackground(!1)}readingValue(){let e=this.spec;return e?this.sceneName==="chapter"?this.readingRaw:e.reading.preview:0}updateToUniforms(e){let t=this.readingValue();e&&(this.reading.value=t,this.reading.velocity=0),this.applyReading()}applyReading(){let e=this.spec;if(!e)return;let t=this.reading.value,n=e.reading,s=this.field.uniforms;s.uEvolve.value=la(n.evolve[0],n.evolve[1],t),s.uEvolveMode.value=n.mode,s.uToExpand.value=la(n.expand[0],n.expand[1],t),s.uToSpread.value=la(n.spread[0],n.spread[1],t),s.uToDim.value=la(n.dim[0],n.dim[1],t),this.ctx.reading=t,this.ctx.evolve=s.uEvolve.value,this.ctx.expand=s.uToExpand.value,this.ctx.spread=s.uToSpread.value}applyBackground(e){let t=Yc(this.spec?.tint||Yt.deep);if(this.bgTint=this.bgTint||[0,0,0],this.bgTarget=[t[0]*.018+.004,t[1]*.018+.012,t[2]*.018+.022],e)for(let n=0;n<3;n++)this.bgTint[n]=this.bgTarget[n]}setLayout(e){!bm.includes(e)||e===this.layout||(this.layout=e,this.rig.setLayout(e),this.requestHoldFrame(),this.request())}setReading(e){this.readingRaw=Ye(Number(e)||0,0,1),this.sceneName==="chapter"&&this.chapter===8&&this.readingRaw>.8&&this.scheduleFilmPrewarm(),this.request()}setVeil(e){this.rig.setVeil(Number(e)||0),this.requestHoldFrame(),this.request()}setVisible(e){let t=!!e;t!==this.visible&&(this.visible=t,t?this.request():this.stopLoop())}setInteractive(e){let t=!!e;this.interactive=t,this.input.setInteractive(t),t||this.rig.reset(),this.request()}pointerMoved(e,t){if(this.film.active){this.film.setPointer(e,t);return}this.rig.setPointer(e,t),this.parallaxEnabled()&&this.request()}parallaxEnabled(){return!this.paused&&!this.reducedMotion()&&!this.interactive}setPaused(e){this.paused=!!e,this.request()}setScatter(e){let t=Ye(Number(e)||0,0,1);t!==this.scatterTarget&&(this.scatterTarget=t,this.request())}scatterActive(){return this.scatter.value!==this.scatterTarget}setArmed(e){let t=e?1:0;t!==this.armTarget&&(this.armTarget=t,this.request())}select(e){this.selected=Ye(Math.round(Number(e)||0),0,8),this.request()}get endingActive(){return this.film.active}scheduleFilmPrewarm(){if(this.film.film||this.film.failed||this.filmPrewarmQueued)return;this.filmPrewarmQueued=!0;let e=s=>setTimeout(()=>t(n),s),t=s=>typeof requestIdleCallback=="function"?requestIdleCallback(s,{timeout:3e3}):setTimeout(s,200),n=s=>{if(!this.ok||this.film.film||this.film.failed){this.filmPrewarmQueued=!1;return}if(this.film.active){this.filmPrewarmQueued=!1;return}if(!(performance.now()-this.input.lastScroll>600&&!this.field.morphing&&!this.holding&&!this.input.dragging&&!document.hidden)||s&&!s.didTimeout&&s.timeRemaining()<6){e(300);return}this.filmPrewarmQueued=!1,this.film.prewarm(),this.noSample=Math.max(this.noSample,2)};e(400)}prewarmOrder(){let e=this.chapter||0,t=[],n=s=>{t.includes(s)||t.push(s)};(this.sceneName==="ending-ready"||e===8)&&n("seed"),e&&(n(`ch${e}`),e<8&&n(`ch${e+1}`),e>1&&n(`ch${e-1}`)),n("cover");for(let s=1;s<=8;s++)n(`ch${s}`);return n("seed"),t}schedulePrewarm(e=400){if(this.prewarmTimer)return;let t=s=>{if(this.prewarmTimer=0,!this.ok)return;if(this.input.dragging||this.holding||this.film.active||document.hidden||!this.cache.async&&this.field.morphing){this.schedulePrewarm(600);return}let a=this.cache,o=this.prewarmJob;if(o&&a.has(o.id)&&(o=null),!o){if(a.size>=a.limit-1)return;let d=this.prewarmOrder().find(h=>!a.has(h));if(!d)return;if(a.async){this.prewarmTimer=-1;let h=this.field;a.request(d).then(()=>{this.prewarmTimer=0,this.field===h&&this.schedulePrewarm(60)},()=>{this.prewarmTimer=0});return}o=a.job(d)}this.prewarmJob=o;let l=s&&!s.didTimeout?Math.max(1,Math.min(4,s.timeRemaining()-1)):3,c=performance.now(),u=o.step(l);performance.now()-c>6&&(this.noSample=Math.max(this.noSample,1)),u&&(this.prewarmJob=null),this.schedulePrewarm(u?80:0)},n=()=>{typeof requestIdleCallback=="function"?requestIdleCallback(t,{timeout:1e3}):setTimeout(t,16,null)};this.prewarmTimer=-1,e>0?setTimeout(n,e):n()}snapshotForFilm(){let e=this.field.drawCount,t=e+this.stars.count,n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t),a=new Float32Array(t);this.field.snapshot(this.time,n,s,e,r),this.stars.snapshot(n,s,e);let o=this.camera;o.updateMatrixWorld();let l=o.projectionMatrix.elements,c=l[8]/l[0],u=l[9]/l[5],d=o.matrixWorldInverse.elements,h=o.matrixWorld.elements,f=this.field.uniforms,g=Math.max(.001,f.uFocus.value),v=f.uDof.value,p=1/(ot.SIZE_MAX*f.uSizeScale.value),m=this.pixelRatio/Math.max(1e-6,f.uPixelScale.value),_=this.stars.look;for(let R=0;R<t;R++){let I=n[R*3],L=n[R*3+1],U=n[R*3+2],C=d[0]*I+d[4]*L+d[8]*U+d[12],F=d[1]*I+d[5]*L+d[9]*U+d[13],B=d[2]*I+d[6]*L+d[10]*U+d[14],V=Math.max(.05,-B);if(R<e){let Y=this.filmDof?1+v*Math.abs(V-g)/g:1;a[R]=Math.min(4,r[R]*p/.02+.25)*Y*Y,r[R]*=Y}else{let Y=_[(R-e)*4+3]/255;r[R]=(1.35+3.4*Y*Y)*m*V,a[R]=1}C+=c*B,F+=u*B,n[R*3]=h[0]*C+h[4]*F+h[8]*B+h[12],n[R*3+1]=h[1]*C+h[5]*F+h[9]*B+h[13],n[R*3+2]=h[2]*C+h[6]*F+h[10]*B+h[14]}let E=this.dimEff*this.lightFade.value;for(let R=0;R<t*3;R++)s[R]*=E;let y=this.rig.target,S=this.rig.focusPoint(this.focusScratch),M=d[0]*S[0]+d[4]*S[1]+d[8]*S[2]+d[12],w=d[1]*S[0]+d[5]*S[1]+d[9]*S[2]+d[13],x=d[2]*S[0]+d[6]*S[1]+d[10]*S[2]+d[14];M+=c*x,w+=u*x;let A=[h[0]*M+h[4]*w+h[8]*x+h[12],h[1]*M+h[5]*w+h[9]*x+h[13],h[2]*M+h[6]*w+h[10]*x+h[14]];return{positions:n,colors:s,sizes:r,energies:a,count:t,camera:{position:[o.position.x,o.position.y,o.position.z],target:[y.x,y.y,y.z],fov:o.fov},focus:A,focusLight:this.focusLight(S,E)}}focusLight(e,t){let n=this.formationId==="seed"?"seed":this.formationId==="ch8"?"ch8":null,s=n?this.accents.visible(n):null;if(!s||typeof s.light!="function")return null;let r=this.rig.project(e[0],e[1],e[2],this.projScratch);return{glows:s.light(),anchor:[r[0],r[1]],pxPerUnit:this.rig.pxPerUnit(r[2]),dim:t,exposure:Qi.exposure}}onFilmActive(e,t=!1,n="restore"){e?(this.input.setInteractive(!1),this.revealUntil=0,this.cancelAwaitPage()):t&&(this.renderer.setRenderTarget(null),this.renderer.toneMapping=li,this.renderer.toneMappingExposure=Qi.exposure,this.renderer.autoClear=!0,this.renderer.setClearColor(0,1),this.black.value=0,this.black.target=1,this.black.rate=1/.9,this.black.delay=0,n==="navigated"?this.settleBehindBlack():n==="leaving"?(this.black.target=0,this.awaitPage=!0,this.awaitTimer=setTimeout(()=>this.endAwaitPage(),2500)):(this.sceneKey="",this.setScene("ending-ready",{instant:!0,layout:this.layout==="reading"?"reading":"chapter"}),this.black.delay=wm,this.revealUntil=performance.now()+(wm+1.3)*1e3),this.interactive&&this.input.setInteractive(!0)),this.lastDraw=0,this.request()}pageScene(e,t){this.film.noteNavigation();let n=this.pending?this.pending.fid:this.formationId;this.setScene(e,t);let s=this.pending?this.pending.fid:this.formationId;this.afterPageCall(s!==n)}pageLayout(e){this.film.noteNavigation(),this.setLayout(e),this.afterPageCall(!1)}afterPageCall(e){if(this.awaitPage){this.endAwaitPage();return}e&&this.revealUntil&&performance.now()<this.revealUntil&&(this.revealUntil=0,this.black.value=0,this.black.target=1,this.black.delay=0,this.settleBehindBlack(),this.request())}endAwaitPage(){this.awaitPage&&(this.cancelAwaitPage(),this.black.target=1,this.settleBehindBlack(),this.request())}cancelAwaitPage(){this.awaitPage=!1,clearTimeout(this.awaitTimer),this.awaitTimer=0}settleBehindBlack(){this.pending?(this.blackHold=!0,this.black.target=0):(this.field.settle(),this.morphHold=!1),this.accents.settle(),this.reading.value=this.readingValue(),this.reading.velocity=0,this.applyReading();for(let e=0;e<3;e++)this.bgTint[e]=this.bgTarget[e];this.rig.snap()}canRender(){return this.ok&&this.visible&&!this.contextLost&&!this.compiling&&!document.hidden}request(){this.raf||!this.canRender()||(this.raf=requestAnimationFrame(this.frame))}stopLoop(){this.raf&&cancelAnimationFrame(this.raf),this.raf=0,this.lastDraw=0}onHold(e){this.holding=e,e?this.request():(clearTimeout(this.holdFrameTimer),this.holdFrameTimer=0,this.pendingResize&&(this.pendingResize=!1,this.resize()),this.request())}requestHoldFrame(){this.request()}countFrame(e){this.frames++,this.fpsFrames++,this.fpsT0||(this.fpsT0=e),e-this.fpsT0>=1e3&&(this.fps=Math.round(this.fpsFrames*1e3/(e-this.fpsT0)),this.fpsFrames=0,this.fpsT0=e)}step(e){let t=this.ambient(),n=t?e:0;this.time+=n,this.clock+=e;let s=this.reducedMotion(),r=dr(this.time),a=this.field.update(this.morphHold?0:e)||this.morphHold,o=Tm(this.scatter,this.scatterTarget,s?vn.scatterReduced:vn.scatter,e);this.scatterMoving=this.scatter.value!==this.scatterTarget,Tm(this.arm,this.armTarget,vn.arm,e),this.armMoving=this.arm.value!==this.armTarget,this.rig.calm=o;let l=this.rig.update(e,this.time,s,this.parallaxEnabled()),c=this.readingValue();ri(this.reading,c,s?.05:vn.reading,e);let u=Math.abs(this.reading.value-c)>1e-4;this.applyReading();let d=Em(this.lightFade,e)|Em(this.black,e);for(let M=0;M<3;M++){let w=this.bgTarget[M]-this.bgTint[M];Math.abs(w)>2e-4&&(this.bgTint[M]+=w*(1-Math.exp(-e*2.2)),d=1)}let h=this.ctx;h.time=this.time,h.gpuTime=r,h.dtLiving=n,h.clock=this.clock,h.focus=this.rig.distance,h.selected=this.selected,h.morph=this.field.uniforms.uMorph.value,h.solid=s?1-cr(0,.6,o):1-cr(.12,.7,o),h.arm=this.arm.value;let f=this.accents.update(e,h);this.fading=!!d||f;let g=this.field.uniforms;g.uTime.value=r,g.uFocus.value=this.rig.distance,g.uTwinkle.value=t?1:0,g.uScatter.value=o,g.uScatterTravel.value=s?0:1,g.uScatterFrame.value.copy(this.rig.refMatrix);let v=this.camera.projectionMatrix.elements;g.uScatterRay.value.set(v[0],v[5],v[8],v[9]),g.uScatterCenter.value.set(this.rig.tx.value,this.rig.ty.value,this.rig.tz.value,this.spec?this.spec.radius:3),g.uScatterLook.value.x=this.rig.refDistance,this.stars.uniforms.uTime.value=r,this.stars.uniforms.uTwinkle.value=t?1:0;let p=this.post.uniforms;p.uTime.value=r,this.dimEff=la(this.rig.dim.value,1,o),p.uDim.value=this.dimEff,p.uFade.value=this.lightFade.value,p.uBlack.value=this.black.value;let m=1-.85*o;p.uBgLift.value.set(this.bgTint[0]*m,this.bgTint[1]*m,this.bgTint[2]*m),this.post.bloom.strength=Qi.bloomStrength*(1-(1-nt.bloom)*o),p.uGlowCenter.value.set(this.rig.cx.value,1-this.rig.cy.value*this.frameHeight/this.height);let _=Ro(this.width,this.frameHeight);p.uGlowRadius.value=_?.42:.55;let E=this.accents.visible("ch7");if(this.post.overlayPass.enabled=!!E&&E.horizon.visible,E){let M=this.rig.project(0,0,0,this.projScratch),w=this.pixelRatio,x=fr;x.uHole.value.set(M[0]*w,(this.height-M[1])*w,E.radius*this.rig.pxPerUnit(M[2])*w,.45*w+.3);let A=this.camera.matrixWorldInverse.elements;x.uHoleView.value.set(A[12],A[13],A[14],E.radius),x.uViewport.value.set(this.width*w,this.height*w),x.uHoleReach.value=E.reach;let R=Ni.normal,I=A[0]*R[0]+A[4]*R[1]+A[8]*R[2],L=A[1]*R[0]+A[5]*R[1]+A[9]*R[2],U=A[2]*R[0]+A[6]*R[1]+A[10]*R[2];x.uHoleDisc.value.set(I,L,U,E.thickness);let C=this.camera.projectionMatrix.elements;x.uHoleRay.value.set(C[0],C[5],C[8],C[9]),x.uHoleBand.value.set(E.bandInner,E.bandOuter,1,0)}let y=this.accents.get("cover"),S=this.rig.focusPoint(this.focusScratch);return this.nodes.update(this.rig,y?y.positions:null,y?this.accents.presence("cover"):0,this.sceneName,this.selected,S,this.formationId!=="origin"),t||a||l||u||this.fading||this.input.dragging||this.scatterMoving||this.armMoving}render(e){this.post.render(e)}getState(){return{renderer:"webgl",scene:this.sceneName,chapter:this.chapter,layout:this.layout,quality:this.tierName,particles:this.field.drawCount,fps:this.fps,frames:this.frames,contextLost:this.contextLost,paused:this.paused,visible:this.visible,interactive:this.interactive,ending:this.film.state(),formation:this.formationId,pendingFormation:this.pending?this.pending.fid:null,morphing:this.field.morphing,morph:Math.round(this.field.uniforms.uMorph.value*1e3)/1e3,reducedMotion:this.reducedMotion(),selected:this.selected,pixelRatio:this.pixelRatio,adaptiveLevel:this.adaptive.level,adaptive:this.adaptive.info(),gpuTimer:this.gpuTimer.available,particlesTotal:this.field.count,bloom:this.post.bloom.enabled,veil:Math.round(this.rig.veil.value*1e3)/1e3,reading:Math.round(this.reading.value*1e3)/1e3,zoom:Math.round(this.rig.zoom.value*1e3)/1e3,scatter:Math.round(this.scatter.value*1e3)/1e3,scatterTarget:this.scatterTarget,scatterStars:Math.round(this.field.uniforms.uScatterKeep.value*this.field.drawCount),armed:this.armTarget===1,holding:this.holding,compiling:this.compiling,worker:this.cache.async,gpuBake:this.field.gpu,cached:[...this.cache.map.keys()],lastBuildMs:Math.round(this.cache.lastBuildMs),lastBakeMs:Math.round(this.field.lastBakeMs*10)/10,size:[this.width,this.height]}}settle(){if(this.pending){let e=this.pending;this.pending=null,this.morphTo(this.cache.get(e.fid),e.kind,e.instant)}this.morphHold=!1,this.field.settle(),this.accents.settle(),this.lightFade.value=this.lightFade.target,this.black.value=this.black.target,this.reading.value=this.readingValue(),this.applyReading();for(let e=0;e<3;e++)this.bgTint[e]=this.bgTarget[e];this.scatter.value=this.scatterTarget,this.scatter.velocity=0,this.arm.value=this.armTarget,this.arm.velocity=0,this.rig.snap(),this.request()}setMorphProgress(e,t=!0){this.field.uniforms.uMorph.value=Ye(e,0,1),this.field.morphing=e<1,this.morphHold=!!t&&e<1,this.request()}dispose(){this.stopLoop(),this.ok=!1,clearTimeout(this.holdFrameTimer),clearTimeout(this.awaitTimer),this.abort?.abort(),this.resizeObserver?.disconnect(),this.input?.dispose(),this.film?.dispose(),this.accents?.dispose(),this.field&&this.disposeWorld(),this.post?.dispose(),this.renderer?.dispose(),this.worker?.dispose()}};function Tm(i,e,t,n){return i.value===e&&i.velocity===0?e:(ri(i,e,t,n),Math.abs(i.value-e)<2e-4&&Math.abs(i.velocity)<.005&&(i.value=e,i.velocity=0),i.value)}function Em(i,e){if(i.value===i.target)return 0;if(i.delay>0)return i.delay-=e,1;let t=i.rate*e;return i.value=i.target>i.value?Math.min(i.target,i.value+t):Math.max(i.target,i.value-t),1}function Am(i,e){try{document.dispatchEvent(new CustomEvent(i,{detail:e}))}catch{}}var XS=typeof document<"u"&&document.currentScript?document.currentScript:null,YS="9.1.0",$S=["cover","preview","chapter","ending-ready"],KS=[{start:0,key:"collapse"},{start:3.6,key:"birth"},{start:9,key:"structure"},{start:19,key:"world"}],En=null,Cm=!1,Ar=null,Jd=new Set,Nt={scene:null,layout:null,reading:0,veil:0,scatter:0,armed:!1,visible:!0,interactive:!1,paused:!1,pointer:null,selected:0,quality:null},Qd=()=>document.documentElement,Pm=()=>!!(En&&En.ok),Rm=new Set;function Pt(i,e){if(!Pm())return e;try{return i(En)}catch(t){let n=String(t&&t.message);return Rm.has(n)||(Rm.add(n),console.error("Universe:",t)),e}}function ZS(i,e){try{document.dispatchEvent(new CustomEvent(i,{detail:e}))}catch{}}function Im(){return{active:!1,time:0,duration:31,started:!1,paused:!1,finished:!1,phase:0,phases:KS,impact:3.6}}function JS(){let i=Nt.scene;return{renderer:"none",scene:i?i.name:null,chapter:i&&i.opts&&i.opts.chapter&&Number(i.opts.chapter)||0,layout:Nt.layout||null,quality:Nt.quality||"auto",particles:0,fps:0,frames:0,contextLost:!1,paused:Nt.paused,visible:Nt.visible,interactive:Nt.interactive,scatter:0,ending:Im()}}function jS(i){if(typeof WebGL2RenderingContext>"u")return null;try{return i.getContext("webgl2",{alpha:!1,depth:!0,stencil:!1,antialias:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1})}catch{return null}}function jd(i,e){Cm=!0,e&&console.warn("Universe: unavailable \u2014",i,e);try{En?.dispose()}catch{}En=null;try{Qd().dataset.universe="none"}catch{}return!1}function QS(i){let e=Nt;e.quality&&i.setQuality(e.quality),i.setPaused(e.paused),i.setReading(e.reading),i.setVeil(e.veil),i.setScatter(e.scatter),i.setArmed(e.armed),i.select(e.selected),e.pointer&&i.pointerMoved(e.pointer[0],e.pointer[1]),e.scene&&i.setScene(e.scene.name,e.scene.opts),e.layout&&i.setLayout(e.layout),e.interactive&&i.setInteractive(!0),e.visible||i.setVisible(!1)}var Lm={version:YS,get ready(){return Pm()},mount(i,e={}){if(En)return En.ok;if(Cm)return!1;try{if(!i||typeof i.getContext!="function")return jd("no canvas");let t=jS(i);if(!t)return jd("WebGL2 unavailable");let n=e&&typeof e=="object"?e:{};return En=new Xh(i,{quality:Nt.quality||n.quality,adaptive:n.adaptive,chapters:n.chapters,context:t,script:n.worker===!1?null:XS}),En.init(),En.nodes.subs=Jd,QS(En),Qd().dataset.universe="webgl",queueMicrotask(()=>ZS("universe:ready",{renderer:"webgl"})),!0}catch(t){return jd("init failed",t)}},setScene(i,e){$S.includes(i)&&(Nt.scene={name:i,opts:e&&typeof e=="object"?{...e}:{}},Nt.layout=null,Pt(t=>t.pageScene(i,Nt.scene.opts)))},setLayout(i){Nt.layout=i,Pt(e=>e.pageLayout(i))},setReading(i){Nt.reading=Number(i)||0,Pt(e=>e.setReading(i))},setVeil(i){Nt.veil=Number(i)||0,Pt(e=>e.setVeil(i))},setScatter(i){let e=Number(i);Nt.scatter=Number.isFinite(e)?Math.min(1,Math.max(0,e)):0,Pt(t=>t.setScatter(Nt.scatter))},setVisible(i){Nt.visible=!!i,Pt(e=>e.setVisible(i))},setInteractive(i){Nt.interactive=!!i,Pt(e=>e.setInteractive(i))},setPointer(i,e){Nt.pointer=[Number(i)||0,Number(e)||0],Pt(t=>t.pointerMoved(Nt.pointer[0],Nt.pointer[1]))},setPaused(i){Nt.paused=!!i,Pt(e=>e.setPaused(i))},setQuality(i){Nt.quality=i==="auto"?null:i,Pt(e=>e.setQuality(i))},select(i){Nt.selected=Number(i)||0,Pt(e=>e.select(i))},reset(){Pt(i=>{i.rig.reset(),i.request()})},zoom(i){let e=Number(i);e>0&&Number.isFinite(e)&&Pt(t=>{t.rig.zoomBy(e),t.request()})},subscribe(i){return typeof i!="function"?()=>{}:(Jd.add(i),Pt(e=>{e.nodes.dirty=!0,e.request()}),()=>{Jd.delete(i)})},pick(i,e){return Pt(t=>t.nodes.pick(Number(i)||0,Number(e)||0),0)},getState(){return Pt(i=>i.getState(),null)||JS()},ending:{arm(i){Nt.armed=!!i,Pt(e=>e.setArmed(Nt.armed))},start(i={}){let e=Pt(t=>t.film.start(i&&typeof i=="object"?i:{}),null);return e?e.catch(()=>!1):Promise.resolve(!1)},pause(i){Pt(e=>e.film.pause(i))},seek(i){Pt(e=>e.film.seek(i))},skipToEnd(){Pt(i=>i.film.skipToEnd())},replay(){Pt(i=>i.film.replay())},stop(i){let e=Pt(t=>t.film.stop(i&&typeof i=="object"?i:void 0),null);return e?e.catch(()=>{}):Promise.resolve()},state(){return Pt(i=>i.film.state(),null)||Im()}},_debug:{settle(){Pt(i=>i.settle())},setMorph(i,e=!0){Pt(t=>t.setMorphProgress(Number(i),e))},freeze(i=!0){Pt(e=>{e.frozen=!!i,e.request()})},setTime(i){Pt(e=>{e.time=Number(i)||0,e.request()})},loseContext(){return Ar=Pt(i=>i.renderer.getContext().getExtension("WEBGL_lose_context"),null),Ar&&Ar.loseContext(),!!Ar},restoreContext(){return Ar&&Ar.restoreContext(),!!Ar},get engine(){return En}}};try{S0()?M0(self):typeof window<"u"&&(window.Universe=Lm,typeof WebGL2RenderingContext>"u"&&(Qd().dataset.universe="none"))}catch{}var zR=Lm;})();
