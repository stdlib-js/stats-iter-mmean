"use strict";var g=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var f=g(function(h,m){
var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=require('@stdlib/assert-is-iterator-like/dist'),p=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,y=require('@stdlib/assert-is-function/dist'),u=require('@stdlib/symbol-iterator/dist'),x=require('@stdlib/stats-incr-mmean/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function s(n,e){var t,i,a;if(!q(n))throw new TypeError(v('1Kx3v',n));if(!p(e))throw new TypeError(v('1Kx45',e));return a=x(e),t={},o(t,"next",l),o(t,"return",c),u&&y(n[u])&&o(t,u,d),t;function l(){var r;return i?{done:!0}:(r=n.next(),r.done?(i=!0,{done:!0}):(typeof r.value=="number"?r=a(r.value):r=a(NaN),{value:r,done:!1}))}function c(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function d(){return s(n[u](),e)}}m.exports=s
});var b=f();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
