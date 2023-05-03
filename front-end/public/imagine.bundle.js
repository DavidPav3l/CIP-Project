/*! For license information please see imagine.bundle.js.LICENSE.txt */
(()=>{"use strict";function e(e,t){return function(){return e.apply(t,arguments)}}const{toString:t}=Object.prototype,{getPrototypeOf:n}=Object,r=(o=Object.create(null),e=>{const n=t.call(e);return o[n]||(o[n]=n.slice(8,-1).toLowerCase())});var o;const i=e=>(e=e.toLowerCase(),t=>r(t)===e),s=e=>t=>typeof t===e,{isArray:a}=Array,c=s("undefined"),u=i("ArrayBuffer"),l=s("string"),f=s("function"),d=s("number"),h=e=>null!==e&&"object"==typeof e,p=e=>{if("object"!==r(e))return!1;const t=n(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},m=i("Date"),y=i("File"),g=i("Blob"),w=i("FileList"),b=i("URLSearchParams");function v(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),a(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(r=0;r<i;r++)s=o[r],t.call(null,e[s],s,e)}}function E(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const O="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,S=e=>!c(e)&&e!==O,R=(x="undefined"!=typeof Uint8Array&&n(Uint8Array),e=>x&&e instanceof x);var x;const A=i("HTMLFormElement"),L=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),T=i("RegExp"),j=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};v(n,((n,o)=>{!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)},N="abcdefghijklmnopqrstuvwxyz",P="0123456789",_={DIGIT:P,ALPHA:N,ALPHA_DIGIT:N+N.toUpperCase()+P},C={isArray:a,isArrayBuffer:u,isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&f(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const n="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||t.call(e)===n||f(e.toString)&&e.toString()===n)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&u(e.buffer),t},isString:l,isNumber:d,isBoolean:e=>!0===e||!1===e,isObject:h,isPlainObject:p,isUndefined:c,isDate:m,isFile:y,isBlob:g,isRegExp:T,isFunction:f,isStream:e=>h(e)&&f(e.pipe),isURLSearchParams:b,isTypedArray:R,isFileList:w,forEach:v,merge:function e(){const{caseless:t}=S(this)&&this||{},n={},r=(r,o)=>{const i=t&&E(n,o)||o;p(n[i])&&p(r)?n[i]=e(n[i],r):p(r)?n[i]=e({},r):a(r)?n[i]=r.slice():n[i]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&v(arguments[e],r);return n},extend:(t,n,r,{allOwnKeys:o}={})=>(v(n,((n,o)=>{r&&f(n)?t[o]=e(n,r):t[o]=n}),{allOwnKeys:o}),t),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,r,o)=>{let i,s,a;const c={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)a=i[s],o&&!o(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==r&&n(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:r,kindOfTest:i,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(a(e))return e;let t=e.length;if(!d(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:A,hasOwnProperty:L,hasOwnProp:L,reduceDescriptors:j,freezeMethods:e=>{j(e,((t,n)=>{if(f(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];f(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return a(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:E,global:O,isContextDefined:S,ALPHABET:_,generateString:(e=16,t=_.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&f(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(h(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=a(e)?[]:{};return v(e,((e,t)=>{const i=n(e,r+1);!c(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)}};function F(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}C.inherits(F,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:C.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const U=F.prototype,D={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{D[e]={value:e}})),Object.defineProperties(F,D),Object.defineProperty(U,"isAxiosError",{value:!0}),F.from=(e,t,n,r,o,i)=>{const s=Object.create(U);return C.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),F.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const B=F;function k(e){return C.isPlainObject(e)||C.isArray(e)}function q(e){return C.endsWith(e,"[]")?e.slice(0,-2):e}function I(e,t,n){return e?e.concat(t).map((function(e,t){return e=q(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const z=C.toFlatObject(C,{},null,(function(e){return/^is[A-Z]/.test(e)})),M=function(e,t,n){if(!C.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=C.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!C.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,i=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&C.isSpecCompliantForm(t);if(!C.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(C.isDate(e))return e.toISOString();if(!a&&C.isBlob(e))throw new B("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(e)||C.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(C.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(C.isArray(e)&&function(e){return C.isArray(e)&&!e.some(k)}(e)||(C.isFileList(e)||C.endsWith(n,"[]"))&&(a=C.toArray(e)))return n=q(n),a.forEach((function(e,r){!C.isUndefined(e)&&null!==e&&t.append(!0===s?I([n],r,i):null===s?n:n+"[]",c(e))})),!1;return!!k(e)||(t.append(I(o,n,i),c(e)),!1)}const l=[],f=Object.assign(z,{defaultVisitor:u,convertValue:c,isVisitable:k});if(!C.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!C.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),C.forEach(n,(function(n,i){!0===(!(C.isUndefined(n)||null===n)&&o.call(t,n,C.isString(i)?i.trim():i,r,f))&&e(n,r?r.concat(i):[i])})),l.pop()}}(e),t};function H(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function J(e,t){this._pairs=[],e&&M(e,this,t)}const G=J.prototype;G.append=function(e,t){this._pairs.push([e,t])},G.toString=function(e){const t=e?function(t){return e.call(this,t,H)}:H;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const V=J;function W(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function K(e,t,n){if(!t)return e;const r=n&&n.encode||W,o=n&&n.serialize;let i;if(i=o?o(t,n):C.isURLSearchParams(t)?t.toString():new V(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}const $=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){C.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},X={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Q={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:V,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]},Y=function(e){function t(e,n,r,o){let i=e[o++];const s=Number.isFinite(+i),a=o>=e.length;return i=!i&&C.isArray(r)?r.length:i,a?(C.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!s):(r[i]&&C.isObject(r[i])||(r[i]=[]),t(e,n,r[i],o)&&C.isArray(r[i])&&(r[i]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}(r[i])),!s)}if(C.isFormData(e)&&C.isFunction(e.entries)){const n={};return C.forEachEntry(e,((e,r)=>{t(function(e){return C.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null},Z={"Content-Type":void 0},ee={transitional:X,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=C.isObject(e);if(o&&C.isHTMLForm(e)&&(e=new FormData(e)),C.isFormData(e))return r&&r?JSON.stringify(Y(e)):e;if(C.isArrayBuffer(e)||C.isBuffer(e)||C.isStream(e)||C.isFile(e)||C.isBlob(e))return e;if(C.isArrayBufferView(e))return e.buffer;if(C.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return M(e,new Q.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Q.isNode&&C.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=C.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return M(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(C.isString(e))try{return(0,JSON.parse)(e),C.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ee.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&C.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw B.from(e,B.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Q.classes.FormData,Blob:Q.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};C.forEach(["delete","get","head"],(function(e){ee.headers[e]={}})),C.forEach(["post","put","patch"],(function(e){ee.headers[e]=C.merge(Z)}));const te=ee,ne=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),re=Symbol("internals");function oe(e){return e&&String(e).trim().toLowerCase()}function ie(e){return!1===e||null==e?e:C.isArray(e)?e.map(ie):String(e)}function se(e,t,n,r,o){return C.isFunction(r)?r.call(this,t,n):(o&&(t=n),C.isString(t)?C.isString(r)?-1!==t.indexOf(r):C.isRegExp(r)?r.test(t):void 0:void 0)}class ae{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=oe(t);if(!o)throw new Error("header name must be a non-empty string");const i=C.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=ie(e))}const i=(e,t)=>C.forEach(e,((e,n)=>o(e,n,t)));return C.isPlainObject(e)||e instanceof this.constructor?i(e,t):C.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?i((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&ne[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=oe(e)){const n=C.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(C.isFunction(t))return t.call(this,e,n);if(C.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=oe(e)){const n=C.findKey(this,e);return!(!n||void 0===this[n]||t&&!se(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=oe(e)){const o=C.findKey(n,e);!o||t&&!se(0,n[o],o,t)||(delete n[o],r=!0)}}return C.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!se(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return C.forEach(this,((r,o)=>{const i=C.findKey(n,o);if(i)return t[i]=ie(r),void delete t[o];const s=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();s!==o&&delete t[o],t[s]=ie(r),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return C.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&C.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[re]=this[re]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=oe(e);t[r]||(function(e,t){const n=C.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return C.isArray(e)?e.forEach(r):r(e),this}}ae.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),C.freezeMethods(ae.prototype),C.freezeMethods(ae);const ce=ae;function ue(e,t){const n=this||te,r=t||n,o=ce.from(r.headers);let i=r.data;return C.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function le(e){return!(!e||!e.__CANCEL__)}function fe(e,t,n){B.call(this,null==e?"canceled":e,B.ERR_CANCELED,t,n),this.name="CanceledError"}C.inherits(fe,B,{__CANCEL__:!0});const de=fe,he=Q.isStandardBrowserEnv?{write:function(e,t,n,r,o,i){const s=[];s.push(e+"="+encodeURIComponent(t)),C.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),C.isString(r)&&s.push("path="+r),C.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function pe(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const me=Q.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=C.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function ye(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[s];o||(o=c),n[i]=a,r[i]=c;let l=s,f=0;for(;l!==i;)f+=n[l++],l%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-n,c=r(a);n=i;const u={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&i<=s?(s-i)/c:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const ge={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=ce.from(e.headers).normalize(),i=e.responseType;let s;function a(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}C.isFormData(r)&&(Q.isStandardBrowserEnv||Q.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const u=pe(e.baseURL,e.url);function l(){if(!c)return;const r=ce.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new B("Request failed with status code "+n.status,[B.ERR_BAD_REQUEST,B.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:i&&"text"!==i&&"json"!==i?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),K(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new B("Request aborted",B.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new B("Network Error",B.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||X;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new B(t,r.clarifyTimeoutError?B.ETIMEDOUT:B.ECONNABORTED,e,c)),c=null},Q.isStandardBrowserEnv){const t=(e.withCredentials||me(u))&&e.xsrfCookieName&&he.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&C.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),C.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&"json"!==i&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",ye(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",ye(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{c&&(n(!t||t.type?new de(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const f=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(u);f&&-1===Q.protocols.indexOf(f)?n(new B("Unsupported protocol "+f+":",B.ERR_BAD_REQUEST,e)):c.send(r||null)}))}};C.forEach(ge,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));function we(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new de(null,e)}function be(e){return we(e),e.headers=ce.from(e.headers),e.data=ue.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),(e=>{e=C.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=C.isString(n)?ge[n.toLowerCase()]:n));o++);if(!r){if(!1===r)throw new B(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(C.hasOwnProp(ge,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!C.isFunction(r))throw new TypeError("adapter is not a function");return r})(e.adapter||te.adapter)(e).then((function(t){return we(e),t.data=ue.call(e,e.transformResponse,t),t.headers=ce.from(t.headers),t}),(function(t){return le(t)||(we(e),t&&t.response&&(t.response.data=ue.call(e,e.transformResponse,t.response),t.response.headers=ce.from(t.response.headers))),Promise.reject(t)}))}const ve=e=>e instanceof ce?e.toJSON():e;function Ee(e,t){t=t||{};const n={};function r(e,t,n){return C.isPlainObject(e)&&C.isPlainObject(t)?C.merge.call({caseless:n},e,t):C.isPlainObject(t)?C.merge({},t):C.isArray(t)?t.slice():t}function o(e,t,n){return C.isUndefined(t)?C.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!C.isUndefined(t))return r(void 0,t)}function s(e,t){return C.isUndefined(t)?C.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(ve(e),ve(t),!0)};return C.forEach(Object.keys(e).concat(Object.keys(t)),(function(r){const i=c[r]||o,s=i(e[r],t[r],r);C.isUndefined(s)&&i!==a||(n[r]=s)})),n}const Oe={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Oe[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Se={};Oe.transitional=function(e,t,n){function r(e,t){return"[Axios v1.3.5] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new B(r(o," has been removed"+(t?" in "+t:"")),B.ERR_DEPRECATED);return t&&!Se[o]&&(Se[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};const Re={assertOptions:function(e,t,n){if("object"!=typeof e)throw new B("options must be an object",B.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const t=e[i],n=void 0===t||s(t,i,e);if(!0!==n)throw new B("option "+i+" must be "+n,B.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new B("Unknown option "+i,B.ERR_BAD_OPTION)}},validators:Oe},xe=Re.validators;class Ae{constructor(e){this.defaults=e,this.interceptors={request:new $,response:new $}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Ee(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;let i;void 0!==n&&Re.assertOptions(n,{silentJSONParsing:xe.transitional(xe.boolean),forcedJSONParsing:xe.transitional(xe.boolean),clarifyTimeoutError:xe.transitional(xe.boolean)},!1),null!=r&&(C.isFunction(r)?t.paramsSerializer={serialize:r}:Re.assertOptions(r,{encode:xe.function,serialize:xe.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),i=o&&C.merge(o.common,o[t.method]),i&&C.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=ce.concat(i,o);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[be.bind(this),void 0];for(e.unshift.apply(e,s),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=s.length;let d=t;for(f=0;f<l;){const e=s[f++],t=s[f++];try{d=e(d)}catch(e){t.call(this,e);break}}try{u=be.call(this,d)}catch(e){return Promise.reject(e)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return K(pe((e=Ee(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}C.forEach(["delete","get","head","options"],(function(e){Ae.prototype[e]=function(t,n){return this.request(Ee(n||{},{method:e,url:t,data:(n||{}).data}))}})),C.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Ee(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Ae.prototype[e]=t(),Ae.prototype[e+"Form"]=t(!0)}));const Le=Ae;class Te{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new de(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Te((function(t){e=t})),cancel:e}}}const je=Te,Ne={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ne).forEach((([e,t])=>{Ne[t]=e}));const Pe=Ne,_e=function t(n){const r=new Le(n),o=e(Le.prototype.request,r);return C.extend(o,Le.prototype,r,{allOwnKeys:!0}),C.extend(o,r,null,{allOwnKeys:!0}),o.create=function(e){return t(Ee(n,e))},o}(te);_e.Axios=Le,_e.CanceledError=de,_e.CancelToken=je,_e.isCancel=le,_e.VERSION="1.3.5",_e.toFormData=M,_e.AxiosError=B,_e.Cancel=_e.CanceledError,_e.all=function(e){return Promise.all(e)},_e.spread=function(e){return function(t){return e.apply(null,t)}},_e.isAxiosError=function(e){return C.isObject(e)&&!0===e.isAxiosError},_e.mergeConfig=Ee,_e.AxiosHeaders=ce,_e.formToJSON=e=>Y(C.isHTMLForm(e)?new FormData(e):e),_e.HttpStatusCode=Pe,_e.default=_e;const Ce=_e;function Fe(e){return Fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fe(e)}function Ue(){Ue=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,o){var i=t&&t.prototype instanceof d?t:d,s=Object.create(i.prototype),a=new x(o||[]);return r(s,"_invoke",{value:E(e,n,a)}),s}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f={};function d(){}function h(){}function p(){}var m={};c(m,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(A([])));g&&g!==t&&n.call(g,i)&&(m=g);var w=p.prototype=d.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function v(e,t){function o(r,i,s,a){var c=l(e[r],e,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==Fe(f)&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){o("next",e,s,a)}),(function(e){o("throw",e,s,a)})):t.resolve(f).then((function(e){u.value=e,s(u)}),(function(e){return o("throw",e,s,a)}))}a(c.arg)}var i;r(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){o(e,n,t,r)}))}return i=i?i.then(r,r):r()}})}function E(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var s=n.delegate;if(s){var a=O(s,n);if(a){if(a===f)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function O(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var o=l(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,f;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function R(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function A(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=p,r(w,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:h,configurable:!0}),h.displayName=c(p,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,a,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},b(v.prototype),c(v.prototype,s,(function(){return this})),e.AsyncIterator=v,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var s=new v(u(t,n,r,o),i);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},b(w),c(w,a,"Generator"),c(w,i,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=A,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(R),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return s.type="throw",s.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),R(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:A(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}function De(e,t,n,r,o,i,s){try{var a=e[i](s),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,o)}function Be(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function s(e){De(i,r,o,s,a,"next",e)}function a(e){De(i,r,o,s,a,"throw",e)}s(void 0)}))}}var ke=document.querySelector("#form_fisier"),qe=document.querySelector("#img_gen_1"),Ie=document.querySelector("#img_gen_2"),ze=document.querySelector("#img_gen_3"),Me=document.querySelector("#img_user"),He=document.querySelector("#output_section"),Je=document.querySelector(".loading_user"),Ge=document.querySelectorAll(".loading"),Ve=document.querySelectorAll(".download_img"),We=document.querySelector("#descriere"),Ke=function(e){Me.classList.add("hidden"),qe.classList.add("hidden"),Ie.classList.add("hidden"),ze.classList.add("hidden"),We.classList.add("hidden"),Je.classList.contains("hidden")&&(Je.classList.remove("hidden"),Ge.forEach((function(e){e.classList.remove("hidden")}))),He.classList.contains("hidden"),He.classList.remove("hidden"),He.classList.add("grid"),document.querySelector("#scroll").scrollIntoView(),Ve.forEach((function(e){e.classList.add("hidden")}));var t=new FileReader;t.onload=function(){Me.src=t.result,Me.classList.remove("hidden"),Je.classList.add("hidden")},t.readAsDataURL(e)},$e=function(){var e=Be(Ue().mark((function e(t,n){var r,o,i;return Ue().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Promise((function(e,n){try{var r=new Image;r.onload=function(){qe.src=this.src,e()},r.src="".concat(t.value.data.data[0].url)}catch(e){n(e)}})),o=new Promise((function(e,n){try{var r=new Image;r.onload=function(){Ie.src=this.src,e()},r.src="".concat(t.value.data.data[1].url)}catch(e){n(e)}})),i=new Promise((function(e,n){try{var r=new Image;r.onload=function(){ze.src=this.src,e()},r.src="".concat(t.value.data.data[2].url)}catch(e){n(e)}})),e.next=5,Promise.all([r,o,i]);case 5:qe.classList.remove("hidden"),Ie.classList.remove("hidden"),ze.classList.remove("hidden"),We.classList.remove("hidden"),We.textContent='"'.concat(n.value.data.content,'"'),Ge.forEach((function(e){e.classList.add("hidden")}));case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Xe=function(e){He.classList.add("hidden"),He.classList.remove("grid");var t=document.createElement("div");t.classList.add("absolute","right-5","left-5","mx-auto","max-w-max","bottom-5","bg-red-600","bg-opacity-70","text-center","px-3","py-6","font-Play","transition-all","duration-1000","rounded-lg","pointer-events-none"),t.textContent=e,document.querySelector("body").appendChild(t),setTimeout((function(){t.classList.add("opacity-0")}),2500)};ke.addEventListener("submit",function(){var e=Be(Ue().mark((function e(t){var n,r;return Ue().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),"image/png"===(n=t.target.file.files[0]).type||"image/jpeg"===n.type){e.next=5;break}return Xe("Acest tip de fisier nu este suportat."),e.abrupt("return");case 5:Ke(n),(r=new FileReader).onload=Be(Ue().mark((function e(){var t,n,o,i,s;return Ue().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.result.split(",")[1],(n=new FormData).append("img",t),e.prev=3,o=Ce.post("/imagine",n,{headers:{"Content-Type":"multipart/form-data"}}).catch((function(e){429!==JSON.parse(e.response.request.response).status?Xe("A aparut o eroare neasteptata."):Xe("A fost depasita limita de cereri, va rugam sa incercati intr-un minut.")})),i=Ce.post("/imagine/descp",n,{headers:{"Content-Type":"multipart/form-data"}}),e.next=8,Promise.allSettled([o,i]);case 8:return s=e.sent,e.next=11,$e(s[0],s[1]);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])}))),r.readAsDataURL(n),ke.reset();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),window.onload=function(){ke.reset()}})();