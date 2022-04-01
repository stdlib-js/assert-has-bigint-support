// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).hasBigIntSupport=t()}(this,(function(){"use strict";function e(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return t({},"x",{}),!0}catch(e){return!1}},n=Object.defineProperty,o=Object.prototype,i=o.toString,l=o.__defineGetter__,u=o.__defineSetter__,a=o.__lookupGetter__,f=o.__lookupSetter__;var c=function(e,t,r){var n,c,p,y;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(a.call(e,t)||f.call(e,t)?(n=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),p="get"in r,y="set"in r,c&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&l&&l.call(e,t,r.get),y&&u&&u.call(e,t,r.set),e},p=n,y=c,b=r()?p:y;var d=function(e,t,r){b(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})},s=d;var v=function(e){return"boolean"==typeof e};var _=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var g=function(){return _&&"symbol"==typeof Symbol.toStringTag},j=Object.prototype.toString,m=j;var w=function(e){return m.call(e)},h=Object.prototype.hasOwnProperty;var O=function(e,t){return null!=e&&h.call(e,t)},S="function"==typeof Symbol?Symbol.toStringTag:"",P=O,B=S,T=j;var E=w,x=function(e){var t,r,n;if(null==e)return T.call(e);r=e[B],t=P(e,B);try{e[B]=void 0}catch(t){return T.call(e)}return n=T.call(e),t?e[B]=r:delete e[B],n},I=g()?x:E,k=Boolean.prototype.toString;var M=I,V=function(e){try{return k.call(e),!0}catch(e){return!1}},A=g();var F=function(e){return"object"==typeof e&&(e instanceof Boolean||(A?V(e):"[object Boolean]"===M(e)))},G=v,z=F;var C=s,D=function(e){return G(e)||z(e)},U=F;C(D,"isPrimitive",v),C(D,"isObject",U);var q=D;var H=function(){return new Function("return this;")()},J="object"==typeof self?self:null,K="object"==typeof window?window:null,L="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof L?L:null;module.exports=N;var Q=q.isPrimitive,R=H,W=J,X=K,Y=e(Object.freeze({__proto__:null}));var Z=function(e){if(arguments.length){if(!Q(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return R()}if(W)return W;if(X)return X;if(Y)return Y;throw new Error("unexpected error. Unable to resolve global object.")},$=Z();return function(){return"function"==typeof $.BigInt&&"function"==typeof BigInt&&"bigint"==typeof $.BigInt("1")&&"bigint"==typeof BigInt("1")}}));
//# sourceMappingURL=bundle.js.map
