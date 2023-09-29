(()=>{"use strict";var e={474:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),s=n.n(i)()(o());s.push([e.id,"#map{height:100%}",""]);const a=s},581:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),s=n.n(i)()(o());s.push([e.id,".details-header .location,.details-header .date-time,.details-header .tsunami,.details-header .more-info,.details-header .magnitude{padding:10px 0}.details-header .date-time{padding-bottom:20px;border-bottom:1px solid rgba(0,0,0,.2)}",""]);const a=s},807:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),s=n.n(i)()(o());s.push([e.id,"html,body{height:100%;margin:0;padding:0;font-family:sans-serif}*{margin:0;padding:0;box-sizing:border-box}a{text-decoration:none}.main-container{width:100%;height:100vh;display:flex;flex-direction:row}.main-container .map-container,.main-container .details-container{width:50vw;height:100%;padding:10px}.main-container .details-container{padding:20px 10px}@media screen and (max-width: 768px){.main-container{flex-direction:column}.main-container .map-container,.main-container .details-container{width:100%;height:50%}}",""]);const a=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&s[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],a=0;a<e.length;a++){var c=e[a],l=r.base?c[0]+r.base:c[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var f=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var h=o(p,r);r.byIndex=a,t.splice(a,0,{identifier:d,updater:h,references:1})}s.push(d)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);t[a].references--}for(var c=r(e,o),l=0;l<i.length;l++){var u=n(i[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),s=n.n(i),a=n(565),c=n.n(a),l=n(216),u=n.n(l),d=n(589),f=n.n(d),p=n(474),h={};function m(e,t){return function(){return e.apply(t,arguments)}}h.styleTagTransform=f(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const{toString:g}=Object.prototype,{getPrototypeOf:y}=Object,b=(w=Object.create(null),e=>{const t=g.call(e);return w[t]||(w[t]=t.slice(8,-1).toLowerCase())});var w;const E=e=>(e=e.toLowerCase(),t=>b(t)===e),v=e=>t=>typeof t===e,{isArray:O}=Array,S=v("undefined"),R=E("ArrayBuffer"),A=v("string"),T=v("function"),x=v("number"),C=e=>null!==e&&"object"==typeof e,j=e=>{if("object"!==b(e))return!1;const t=y(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},N=E("Date"),P=E("File"),_=E("Blob"),L=E("FileList"),U=E("URLSearchParams");function F(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),O(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(r=0;r<i;r++)s=o[r],t.call(null,e[s],s,e)}}function D(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const B="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,k=e=>!S(e)&&e!==B,I=(M="undefined"!=typeof Uint8Array&&y(Uint8Array),e=>M&&e instanceof M);var M;const q=E("HTMLFormElement"),z=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),H=E("RegExp"),$=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};F(n,((n,o)=>{let i;!1!==(i=t(n,o,e))&&(r[o]=i||n)})),Object.defineProperties(e,r)},J="abcdefghijklmnopqrstuvwxyz",W="0123456789",Z={DIGIT:W,ALPHA:J,ALPHA_DIGIT:J+J.toUpperCase()+W},K=E("AsyncFunction"),V={isArray:O,isArrayBuffer:R,isBuffer:function(e){return null!==e&&!S(e)&&null!==e.constructor&&!S(e.constructor)&&T(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||T(e.append)&&("formdata"===(t=b(e))||"object"===t&&T(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&R(e.buffer),t},isString:A,isNumber:x,isBoolean:e=>!0===e||!1===e,isObject:C,isPlainObject:j,isUndefined:S,isDate:N,isFile:P,isBlob:_,isRegExp:H,isFunction:T,isStream:e=>C(e)&&T(e.pipe),isURLSearchParams:U,isTypedArray:I,isFileList:L,forEach:F,merge:function e(){const{caseless:t}=k(this)&&this||{},n={},r=(r,o)=>{const i=t&&D(n,o)||o;j(n[i])&&j(r)?n[i]=e(n[i],r):j(r)?n[i]=e({},r):O(r)?n[i]=r.slice():n[i]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&F(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(F(t,((t,r)=>{n&&T(t)?e[r]=m(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,i,s;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],r&&!r(s,e,t)||a[s]||(t[s]=e[s],a[s]=!0);e=!1!==n&&y(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:b,kindOfTest:E,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(O(e))return e;let t=e.length;if(!x(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:q,hasOwnProperty:z,hasOwnProp:z,reduceDescriptors:$,freezeMethods:e=>{$(e,((t,n)=>{if(T(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];T(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return O(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:D,global:B,isContextDefined:k,ALPHABET:Z,generateString:(e=16,t=Z.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&T(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(C(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=O(e)?[]:{};return F(e,((e,t)=>{const i=n(e,r+1);!S(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:K,isThenable:e=>e&&(C(e)||T(e))&&T(e.then)&&T(e.catch)};function G(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}V.inherits(G,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:V.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const X=G.prototype,Q={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Q[e]={value:e}})),Object.defineProperties(G,Q),Object.defineProperty(X,"isAxiosError",{value:!0}),G.from=(e,t,n,r,o,i)=>{const s=Object.create(X);return V.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),G.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const Y=G;function ee(e){return V.isPlainObject(e)||V.isArray(e)}function te(e){return V.endsWith(e,"[]")?e.slice(0,-2):e}function ne(e,t,n){return e?e.concat(t).map((function(e,t){return e=te(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const re=V.toFlatObject(V,{},null,(function(e){return/^is[A-Z]/.test(e)})),oe=function(e,t,n){if(!V.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=V.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!V.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,i=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&V.isSpecCompliantForm(t);if(!V.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(V.isDate(e))return e.toISOString();if(!a&&V.isBlob(e))throw new Y("Blob is not supported. Use a Buffer instead.");return V.isArrayBuffer(e)||V.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(V.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(V.isArray(e)&&function(e){return V.isArray(e)&&!e.some(ee)}(e)||(V.isFileList(e)||V.endsWith(n,"[]"))&&(a=V.toArray(e)))return n=te(n),a.forEach((function(e,r){!V.isUndefined(e)&&null!==e&&t.append(!0===s?ne([n],r,i):null===s?n:n+"[]",c(e))})),!1;return!!ee(e)||(t.append(ne(o,n,i),c(e)),!1)}const u=[],d=Object.assign(re,{defaultVisitor:l,convertValue:c,isVisitable:ee});if(!V.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!V.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),V.forEach(n,(function(n,i){!0===(!(V.isUndefined(n)||null===n)&&o.call(t,n,V.isString(i)?i.trim():i,r,d))&&e(n,r?r.concat(i):[i])})),u.pop()}}(e),t};function ie(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function se(e,t){this._pairs=[],e&&oe(e,this,t)}const ae=se.prototype;ae.append=function(e,t){this._pairs.push([e,t])},ae.toString=function(e){const t=e?function(t){return e.call(this,t,ie)}:ie;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const ce=se;function le(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ue(e,t,n){if(!t)return e;const r=n&&n.encode||le,o=n&&n.serialize;let i;if(i=o?o(t,n):V.isURLSearchParams(t)?t.toString():new ce(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}const de=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){V.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},fe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},pe={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:ce,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]},he=function(e){function t(e,n,r,o){let i=e[o++];const s=Number.isFinite(+i),a=o>=e.length;return i=!i&&V.isArray(r)?r.length:i,a?(V.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!s):(r[i]&&V.isObject(r[i])||(r[i]=[]),t(e,n,r[i],o)&&V.isArray(r[i])&&(r[i]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}(r[i])),!s)}if(V.isFormData(e)&&V.isFunction(e.entries)){const n={};return V.forEachEntry(e,((e,r)=>{t(function(e){return V.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null},me={transitional:fe,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=V.isObject(e);if(o&&V.isHTMLForm(e)&&(e=new FormData(e)),V.isFormData(e))return r&&r?JSON.stringify(he(e)):e;if(V.isArrayBuffer(e)||V.isBuffer(e)||V.isStream(e)||V.isFile(e)||V.isBlob(e))return e;if(V.isArrayBufferView(e))return e.buffer;if(V.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return oe(e,new pe.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return pe.isNode&&V.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=V.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return oe(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(V.isString(e))try{return(0,JSON.parse)(e),V.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||me.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&V.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw Y.from(e,Y.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:pe.classes.FormData,Blob:pe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};V.forEach(["delete","get","head","post","put","patch"],(e=>{me.headers[e]={}}));const ge=me,ye=V.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),be=Symbol("internals");function we(e){return e&&String(e).trim().toLowerCase()}function Ee(e){return!1===e||null==e?e:V.isArray(e)?e.map(Ee):String(e)}function ve(e,t,n,r,o){return V.isFunction(r)?r.call(this,t,n):(o&&(t=n),V.isString(t)?V.isString(r)?-1!==t.indexOf(r):V.isRegExp(r)?r.test(t):void 0:void 0)}class Oe{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=we(t);if(!o)throw new Error("header name must be a non-empty string");const i=V.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=Ee(e))}const i=(e,t)=>V.forEach(e,((e,n)=>o(e,n,t)));return V.isPlainObject(e)||e instanceof this.constructor?i(e,t):V.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?i((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&ye[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=we(e)){const n=V.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(V.isFunction(t))return t.call(this,e,n);if(V.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=we(e)){const n=V.findKey(this,e);return!(!n||void 0===this[n]||t&&!ve(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=we(e)){const o=V.findKey(n,e);!o||t&&!ve(0,n[o],o,t)||(delete n[o],r=!0)}}return V.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!ve(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return V.forEach(this,((r,o)=>{const i=V.findKey(n,o);if(i)return t[i]=Ee(r),void delete t[o];const s=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();s!==o&&delete t[o],t[s]=Ee(r),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return V.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&V.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[be]=this[be]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=we(e);t[r]||(function(e,t){const n=V.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return V.isArray(e)?e.forEach(r):r(e),this}}Oe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),V.reduceDescriptors(Oe.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),V.freezeMethods(Oe);const Se=Oe;function Re(e,t){const n=this||ge,r=t||n,o=Se.from(r.headers);let i=r.data;return V.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function Ae(e){return!(!e||!e.__CANCEL__)}function Te(e,t,n){Y.call(this,null==e?"canceled":e,Y.ERR_CANCELED,t,n),this.name="CanceledError"}V.inherits(Te,Y,{__CANCEL__:!0});const xe=Te,Ce=pe.isStandardBrowserEnv?{write:function(e,t,n,r,o,i){const s=[];s.push(e+"="+encodeURIComponent(t)),V.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),V.isString(r)&&s.push("path="+r),V.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function je(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Ne=pe.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=V.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Pe(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[s];o||(o=c),n[i]=a,r[i]=c;let u=s,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const f=l&&c-l;return f?Math.round(1e3*d/f):void 0}}(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-n,c=r(a);n=i;const l={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&i<=s?(s-i)/c:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}const _e={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=Se.from(e.headers).normalize(),i=e.responseType;let s,a;function c(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}V.isFormData(r)&&(pe.isStandardBrowserEnv||pe.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?V.isString(a=o.getContentType())&&o.setContentType(a.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const u=je(e.baseURL,e.url);function d(){if(!l)return;const r=Se.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new Y("Request failed with status code "+n.status,[Y.ERR_BAD_REQUEST,Y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),c()}),(function(e){n(e),c()}),{data:i&&"text"!==i&&"json"!==i?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:r,config:e,request:l}),l=null}if(l.open(e.method.toUpperCase(),ue(u,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=d:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(d)},l.onabort=function(){l&&(n(new Y("Request aborted",Y.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new Y("Network Error",Y.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||fe;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new Y(t,r.clarifyTimeoutError?Y.ETIMEDOUT:Y.ECONNABORTED,e,l)),l=null},pe.isStandardBrowserEnv){const t=(e.withCredentials||Ne(u))&&e.xsrfCookieName&&Ce.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in l&&V.forEach(o.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),V.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&"json"!==i&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",Pe(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",Pe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{l&&(n(!t||t.type?new xe(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const f=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(u);f&&-1===pe.protocols.indexOf(f)?n(new Y("Unsupported protocol "+f+":",Y.ERR_BAD_REQUEST,e)):l.send(r||null)}))}};V.forEach(_e,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const Le=e=>`- ${e}`,Ue=e=>V.isFunction(e)||null===e||!1===e,Fe=e=>{e=V.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){let t;if(n=e[i],r=n,!Ue(n)&&(r=_e[(t=String(n)).toLowerCase()],void 0===r))throw new Y(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+i]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(Le).join("\n"):" "+Le(e[0]):"as no adapter specified";throw new Y("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function De(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new xe(null,e)}function Be(e){return De(e),e.headers=Se.from(e.headers),e.data=Re.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Fe(e.adapter||ge.adapter)(e).then((function(t){return De(e),t.data=Re.call(e,e.transformResponse,t),t.headers=Se.from(t.headers),t}),(function(t){return Ae(t)||(De(e),t&&t.response&&(t.response.data=Re.call(e,e.transformResponse,t.response),t.response.headers=Se.from(t.response.headers))),Promise.reject(t)}))}const ke=e=>e instanceof Se?e.toJSON():e;function Ie(e,t){t=t||{};const n={};function r(e,t,n){return V.isPlainObject(e)&&V.isPlainObject(t)?V.merge.call({caseless:n},e,t):V.isPlainObject(t)?V.merge({},t):V.isArray(t)?t.slice():t}function o(e,t,n){return V.isUndefined(t)?V.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!V.isUndefined(t))return r(void 0,t)}function s(e,t){return V.isUndefined(t)?V.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(ke(e),ke(t),!0)};return V.forEach(Object.keys(Object.assign({},e,t)),(function(r){const i=c[r]||o,s=i(e[r],t[r],r);V.isUndefined(s)&&i!==a||(n[r]=s)})),n}const Me={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Me[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const qe={};Me.transitional=function(e,t,n){function r(e,t){return"[Axios v1.5.1] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new Y(r(o," has been removed"+(t?" in "+t:"")),Y.ERR_DEPRECATED);return t&&!qe[o]&&(qe[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};const ze={assertOptions:function(e,t,n){if("object"!=typeof e)throw new Y("options must be an object",Y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const t=e[i],n=void 0===t||s(t,i,e);if(!0!==n)throw new Y("option "+i+" must be "+n,Y.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Y("Unknown option "+i,Y.ERR_BAD_OPTION)}},validators:Me},He=ze.validators;class $e{constructor(e){this.defaults=e,this.interceptors={request:new de,response:new de}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Ie(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&ze.assertOptions(n,{silentJSONParsing:He.transitional(He.boolean),forcedJSONParsing:He.transitional(He.boolean),clarifyTimeoutError:He.transitional(He.boolean)},!1),null!=r&&(V.isFunction(r)?t.paramsSerializer={serialize:r}:ze.assertOptions(r,{encode:He.function,serialize:He.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&V.merge(o.common,o[t.method]);o&&V.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Se.concat(i,o);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,d=0;if(!a){const e=[Be.bind(this),void 0];for(e.unshift.apply(e,s),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);d<u;)l=l.then(e[d++],e[d++]);return l}u=s.length;let f=t;for(d=0;d<u;){const e=s[d++],t=s[d++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=Be.call(this,f)}catch(e){return Promise.reject(e)}for(d=0,u=c.length;d<u;)l=l.then(c[d++],c[d++]);return l}getUri(e){return ue(je((e=Ie(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}V.forEach(["delete","get","head","options"],(function(e){$e.prototype[e]=function(t,n){return this.request(Ie(n||{},{method:e,url:t,data:(n||{}).data}))}})),V.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Ie(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}$e.prototype[e]=t(),$e.prototype[e+"Form"]=t(!0)}));const Je=$e;class We{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new xe(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new We((function(t){e=t})),cancel:e}}}const Ze=We,Ke={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ke).forEach((([e,t])=>{Ke[t]=e}));const Ve=Ke,Ge=function e(t){const n=new Je(t),r=m(Je.prototype.request,n);return V.extend(r,Je.prototype,n,{allOwnKeys:!0}),V.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Ie(t,n))},r}(ge);Ge.Axios=Je,Ge.CanceledError=xe,Ge.CancelToken=Ze,Ge.isCancel=Ae,Ge.VERSION="1.5.1",Ge.toFormData=oe,Ge.AxiosError=Y,Ge.Cancel=Ge.CanceledError,Ge.all=function(e){return Promise.all(e)},Ge.spread=function(e){return function(t){return e.apply(null,t)}},Ge.isAxiosError=function(e){return V.isObject(e)&&!0===e.isAxiosError},Ge.mergeConfig=Ie,Ge.AxiosHeaders=Se,Ge.formToJSON=e=>he(V.isHTMLForm(e)?new FormData(e):e),Ge.getAdapter=Fe,Ge.HttpStatusCode=Ve,Ge.default=Ge;const Xe=Ge,Qe=e=>{const t=new Date(e),n=t.getFullYear();return`${String(t.getMonth()+1).padStart(2,"0")}/${String(t.getDate()).padStart(2,"0")}/${n} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`};var Ye=n(581),et={};et.styleTagTransform=f(),et.setAttributes=c(),et.insert=s().bind(null,"head"),et.domAPI=o(),et.insertStyleElement=u(),t()(Ye.Z,et),Ye.Z&&Ye.Z.locals&&Ye.Z.locals;const tt=({title:e,dateTime:t,location:n})=>`\n      <div class="details-header">\n          <div class="title">\n              <h1>${e}</h1>\n          </div>\n          <div class="location">\n              ${n}\n          </div>\n          <div class="date-time">\n              ${t}\n          </div>\n      </div>\n    `,nt=({magnitude:e,tsunami:t,moreInfo:n})=>`\n      <div class="details-header">\n          <div class="magnitude">\n              Magnitude: ${e}\n          </div>\n          <div class="tsunami">\n          Tsunami: ${t}\n          </div>\n          <div class="more-info">\n              <a target="__blank" href="${n}">More info</a>\n          </div>\n      </div>\n    `;var rt,ot,it,st,at,ct,lt,ut,dt,ft,pt,ht,mt;let gt;rt={key:"AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",v:"weekly"},at="The Google Maps JavaScript API",ct="google",lt="importLibrary",ut="__ib__",dt=document,ft=window,pt=(ft=ft[ct]||(ft[ct]={})).maps||(ft.maps={}),ht=new Set,mt=new URLSearchParams,pt[lt]?console.warn(at+" only loads once. Ignoring:",rt):pt[lt]=(e,...t)=>ht.add(e)&&(ot||(ot=new Promise((async(e,t)=>{for(st in await(it=dt.createElement("script")),mt.set("libraries",[...ht]+""),rt)mt.set(st.replace(/[A-Z]/g,(e=>"_"+e[0].toLowerCase())),rt[st]);mt.set("callback",ct+".maps."+ut),it.src=`https://maps.${ct}apis.com/maps/api/js?`+mt,pt[ut]=e,it.onerror=()=>ot=t(Error(at+" could not load.")),it.nonce=dt.querySelector("script[nonce]")?.nonce||"",dt.head.append(it)})))).then((()=>pt[lt](e,...t)));const yt=e=>{e.map(((e,t)=>{const n=new google.maps.Marker({position:{lat:e.geometry.coordinates[1],lng:e.geometry.coordinates[0]},map:gt}),r=new google.maps.InfoWindow;let o=document.createElement("div");o.id=t,o.innerHTML=`${e.properties.place}<br/>${Qe(e.properties.time)}`,n.addListener("click",(e=>()=>{r.setContent(o),r.open(gt,e)})(n)),google.maps.event.addDomListener(o,"click",(()=>(e=>{let t=document.getElementById("details-content");(({url:e="",success:t=(()=>null),error:n=(()=>null),completed:r=(()=>null)})=>{Xe.get(e).then(t).catch(n).finally(r)})({url:e,success:e=>{let n=e.data,r=n.properties.title,o=n.properties.place,i=Qe(n.properties.time),s=n.properties.tsunami,a=n.properties.mag,c=n.properties.url;t.innerHTML=`<div class="details-content">${tt({title:r,dateTime:i,location:o})}${nt({tsunami:s,magnitude:a,moreInfo:c})}</div>`},error:e=>{},completed:()=>{}})})(e.properties.detail)))}))};let bt=[];(({success:e=(()=>null),error:t=(()=>null),completed:n=(()=>null)})=>{Xe.get("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson").then(e).catch(t).finally(n)})({success:e=>{bt=e.data.features,async function(e){const{Map:t}=await google.maps.importLibrary("maps"),n=e.length>0?{lat:e[0].geometry.coordinates[1],lng:e[0].geometry.coordinates[0]}:{};gt=new t(document.getElementById("map"),{center:n,zoom:8}),yt(e)}(bt)},error:e=>{},completed:()=>{}});var wt=n(807),Et={};Et.styleTagTransform=f(),Et.setAttributes=c(),Et.insert=s().bind(null,"head"),Et.domAPI=o(),Et.insertStyleElement=u(),t()(wt.Z,Et),wt.Z&&wt.Z.locals&&wt.Z.locals})()})();