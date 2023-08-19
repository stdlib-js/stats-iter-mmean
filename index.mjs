// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mmean@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function d(m,l){var p,f,j;if(!t(m))throw new TypeError(o("1Kx3v,IA",m));if(!r(l))throw new TypeError(o("1Kx45,IB",l));return j=i(l),e(p={},"next",(function(){var e;if(f)return{done:!0};if((e=m.next()).done)return f=!0,{done:!0};e="number"==typeof e.value?j(e.value):j(NaN);return{value:e,done:!1}})),e(p,"return",(function(e){if(f=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),s&&n(m[s])&&e(p,s,(function(){return d(m[s](),l)})),p}export{d as default};
//# sourceMappingURL=index.mjs.map
