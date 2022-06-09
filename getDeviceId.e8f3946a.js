var y,M=new Uint8Array(16);function S(){if(!y&&(y=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!y))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(M)}var T=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function D(f){return typeof f=="string"&&T.test(f)}var a=[];for(var A=0;A<256;++A)a.push((A+256).toString(16).substr(1));function E(f){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=(a[f[e+0]]+a[f[e+1]]+a[f[e+2]]+a[f[e+3]]+"-"+a[f[e+4]]+a[f[e+5]]+"-"+a[f[e+6]]+a[f[e+7]]+"-"+a[f[e+8]]+a[f[e+9]]+"-"+a[f[e+10]]+a[f[e+11]]+a[f[e+12]]+a[f[e+13]]+a[f[e+14]]+a[f[e+15]]).toLowerCase();if(!D(r))throw TypeError("Stringified UUID is invalid");return r}function L(f){if(!D(f))throw TypeError("Invalid UUID");var e,r=new Uint8Array(16);return r[0]=(e=parseInt(f.slice(0,8),16))>>>24,r[1]=e>>>16&255,r[2]=e>>>8&255,r[3]=e&255,r[4]=(e=parseInt(f.slice(9,13),16))>>>8,r[5]=e&255,r[6]=(e=parseInt(f.slice(14,18),16))>>>8,r[7]=e&255,r[8]=(e=parseInt(f.slice(19,23),16))>>>8,r[9]=e&255,r[10]=(e=parseInt(f.slice(24,36),16))/1099511627776&255,r[11]=e/4294967296&255,r[12]=e>>>24&255,r[13]=e>>>16&255,r[14]=e>>>8&255,r[15]=e&255,r}function N(f){f=unescape(encodeURIComponent(f));for(var e=[],r=0;r<f.length;++r)e.push(f.charCodeAt(r));return e}var B="6ba7b810-9dad-11d1-80b4-00c04fd430c8",G="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function O(f,e,r){function n(o,x,c,v){if(typeof o=="string"&&(o=N(o)),typeof x=="string"&&(x=L(x)),x.length!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var t=new Uint8Array(16+o.length);if(t.set(x),t.set(o,x.length),t=r(t),t[6]=t[6]&15|e,t[8]=t[8]&63|128,c){v=v||0;for(var s=0;s<16;++s)c[v+s]=t[s];return c}return E(t)}try{n.name=f}catch{}return n.DNS=B,n.URL=G,n}function b(f,e,r){f=f||{};var n=f.random||(f.rng||S)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){r=r||0;for(var o=0;o<16;++o)e[r+o]=n[o];return e}return E(n)}function H(f,e,r,n){switch(f){case 0:return e&r^~e&n;case 1:return e^r^n;case 2:return e&r^e&n^r&n;case 3:return e^r^n}}function R(f,e){return f<<e|f>>>32-e}function k(f){var e=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof f=="string"){var n=unescape(encodeURIComponent(f));f=[];for(var o=0;o<n.length;++o)f.push(n.charCodeAt(o))}else Array.isArray(f)||(f=Array.prototype.slice.call(f));f.push(128);for(var x=f.length/4+2,c=Math.ceil(x/16),v=new Array(c),t=0;t<c;++t){for(var s=new Uint32Array(16),d=0;d<16;++d)s[d]=f[t*64+d*4]<<24|f[t*64+d*4+1]<<16|f[t*64+d*4+2]<<8|f[t*64+d*4+3];v[t]=s}v[c-1][14]=(f.length-1)*8/Math.pow(2,32),v[c-1][14]=Math.floor(v[c-1][14]),v[c-1][15]=(f.length-1)*8&4294967295;for(var m=0;m<c;++m){for(var u=new Uint32Array(80),g=0;g<16;++g)u[g]=v[m][g];for(var i=16;i<80;++i)u[i]=R(u[i-3]^u[i-8]^u[i-14]^u[i-16],1);for(var l=r[0],p=r[1],h=r[2],I=r[3],U=r[4],w=0;w<80;++w){var C=Math.floor(w/20),V=R(l,5)+H(C,p,h,I)+U+e[C]+u[w]>>>0;U=I,I=h,h=R(p,30)>>>0,p=l,l=V}r[0]=r[0]+l>>>0,r[1]=r[1]+p>>>0,r[2]=r[2]+h>>>0,r[3]=r[3]+I>>>0,r[4]=r[4]+U>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,r[0]&255,r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,r[1]&255,r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,r[2]&255,r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,r[3]&255,r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,r[4]&255]}var K=O("v5",80,k),X=K;const $=()=>{const f=window.localStorage.getItem("MAGICBROAD_DEVICE_ID");if(f)return f;{const e=b();return window.localStorage.setItem("MAGICBROAD_DEVICE_ID",e),e}},q=f=>X($(),f),F="00000000-0000-0000-0000-000000000000";export{q as a,F as b,$ as g,D as v};
//# sourceMappingURL=getDeviceId.e8f3946a.js.map
