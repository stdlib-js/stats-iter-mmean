// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).itermmean=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var l=function(r,e,t){var n,l,s,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),s="get"in t,v="set"in t,l&&(s||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&a&&a.call(r,e,t.get),v&&u&&u.call(r,e,t.set),r},s=n,v=l,p=t()?s:v;var g=function(r,e,t){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=g,m=/./;var h=function(r){return"boolean"==typeof r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var y=function(){return b&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,E=w;var j=function(r){return E.call(r)},P=Object.prototype.hasOwnProperty;var _=function(r,e){return null!=r&&P.call(r,e)},T="function"==typeof Symbol?Symbol.toStringTag:"",O=_,x=T,S=w;var V=j,A=function(r){var e,t,n;if(null==r)return S.call(r);t=r[x],e=O(r,x);try{r[x]=void 0}catch(e){return S.call(r)}return n=S.call(r),e?r[x]=t:delete r[x],n},k=y()?A:V,F=Boolean.prototype.toString;var I=k,N=function(r){try{return F.call(r),!0}catch(r){return!1}},R=y();var $=function(r){return"object"==typeof r&&(r instanceof Boolean||(R?N(r):"[object Boolean]"===I(r)))},M=h,C=$;var B=d,G=function(r){return M(r)||C(r)},L=$;B(G,"isPrimitive",h),B(G,"isObject",L);var Z=G;var W=function(){return new Function("return this;")()},X="object"==typeof self?self:null,z="object"==typeof window?window:null,U="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Y="object"==typeof U?U:null;module.exports=Y;var D=Z.isPrimitive,q=W,H=X,J=z,K=r(Object.freeze({__proto__:null}));var Q=function(r){if(arguments.length){if(!D(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return q()}if(H)return H;if(J)return J;if(K)return K;throw new Error("unexpected error. Unable to resolve global object.")},rr=Q(),er=rr.document&&rr.document.childNodes,tr=Int8Array,nr=m,ir=er,or=tr;var ar=function(){return"function"==typeof nr||"object"==typeof or||"function"==typeof ir};var ur=function(){return/^\s*function\s*([^(]*)/i},cr=ur;d(cr,"REGEXP",ur());var fr=cr,lr=k;var sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)};var vr=function(r){return null!==r&&"object"==typeof r};d(vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!sr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(vr));var pr=vr;var gr=k,dr=fr.REGEXP,mr=function(r){return pr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var hr=function(r){var e,t,n;if(("Object"===(t=gr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=dr.exec(n.toString()))return e[1]}return mr(r)?"Buffer":t},br=hr;var yr=hr;var wr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?br(r).toLowerCase():e},Er=function(r){return yr(r).toLowerCase()},jr=ar()?Er:wr;var Pr=function(r){return"function"===jr(r)},_r=Pr;var Tr=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&_r(r.next)};var Or=function(r){return"number"==typeof r},xr=Number,Sr=xr.prototype.toString;var Vr=k,Ar=xr,kr=function(r){try{return Sr.call(r),!0}catch(r){return!1}},Fr=y();var Ir=function(r){return"object"==typeof r&&(r instanceof Ar||(Fr?kr(r):"[object Number]"===Vr(r)))},Nr=Or,Rr=Ir;var $r=d,Mr=function(r){return Nr(r)||Rr(r)},Cr=Ir;$r(Mr,"isPrimitive",Or),$r(Mr,"isObject",Cr);var Br=Mr,Gr=Number.POSITIVE_INFINITY,Lr=xr.NEGATIVE_INFINITY,Zr=Math.floor;var Wr=function(r){return Zr(r)===r},Xr=Gr,zr=Lr,Ur=Wr;var Yr=function(r){return r<Xr&&r>zr&&Ur(r)},Dr=Br.isPrimitive,qr=Yr;var Hr=function(r){return Dr(r)&&qr(r)},Jr=Br.isObject,Kr=Yr;var Qr=function(r){return Jr(r)&&Kr(r.valueOf())},re=Hr,ee=Qr;var te=d,ne=function(r){return re(r)||ee(r)},ie=Qr;te(ne,"isPrimitive",Hr),te(ne,"isObject",ie);var oe=ne,ae=oe.isPrimitive;var ue=function(r){return ae(r)&&r>0},ce=oe.isObject;var fe=function(r){return ce(r)&&r.valueOf()>0},le=ue,se=fe;var ve=d,pe=function(r){return le(r)||se(r)},ge=fe;ve(pe,"isPrimitive",ue),ve(pe,"isObject",ge);var de=pe,me=_;var he=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&me(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null;var be=function(r){return r!=r},ye=k,we="function"==typeof Float64Array;var Ee="function"==typeof Float64Array?Float64Array:null,je=function(r){return we&&r instanceof Float64Array||"[object Float64Array]"===ye(r)},Pe=Ee;var _e,Te="function"==typeof Float64Array?Float64Array:void 0,Oe=function(){throw new Error("not implemented")};_e=function(){var r,e;if("function"!=typeof Pe)return!1;try{e=new Pe([1,3.14,-3.14,NaN]),r=je(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Te:Oe;var xe=de.isPrimitive,Se=be,Ve=_e;var Ae=function(r){var e,t,n,i,o;if(!xe(r))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+r+"`.");return t=new Ve(r),n=0,o=-1,i=0,function(a){var u;if(0===arguments.length)return 0===i?null:n;if(o=(o+1)%r,Se(a))i=r,n=NaN;else if(i<r)n+=(e=a-n)/(i+=1);else if(Se(t[o])){for(i=1,n=a,u=0;u<r;u++)if(u!==o){if(Se(t[u])){i=r,n=NaN;break}i+=1,e=t[u]-n,n+=e/i}}else!1===Se(n)&&(e=a-t[o],n+=e/r);return t[o]=a,n}},ke=Ae;var Fe=function(r){return"string"==typeof r},Ie=String.prototype.valueOf;var Ne=k,Re=function(r){try{return Ie.call(r),!0}catch(r){return!1}},$e=y();var Me=function(r){return"object"==typeof r&&(r instanceof String||($e?Re(r):"[object String]"===Ne(r)))},Ce=Fe,Be=Me;var Ge=d,Le=function(r){return Ce(r)||Be(r)},Ze=Me;Ge(Le,"isPrimitive",Fe),Ge(Le,"isObject",Ze);var We=Le,Xe=Wr;var ze=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Xe(r.length)&&r.length>=0&&r.length<=9007199254740991},Ue=Br.isPrimitive,Ye=be;var De=function(r){return Ue(r)&&Ye(r)},qe=Br.isObject,He=be;var Je=function(r){return qe(r)&&He(r.valueOf())},Ke=De,Qe=Je;var rt=d,et=function(r){return Ke(r)||Qe(r)},tt=Je;rt(et,"isPrimitive",De),rt(et,"isObject",tt);var nt=ze,it=oe.isPrimitive,ot=We.isPrimitive,at=et.isPrimitive;var ut=function(r,e,t){var n,i,o;if(!nt(r)&&!ot(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!it(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(ot(r)){if(!ot(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,at(e)){for(o=i;o<n;o++)if(at(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},ct=ut,ft=We.isPrimitive;var lt=function(r){if(!ft(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},st=We.isPrimitive;var vt=function(r){if(!st(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},pt=lt,gt=vt,dt=We.isPrimitive;var mt=function(r){return dt(r)&&r===gt(r)&&r!==pt(r)},ht=Gr,bt=Lr;var yt=function(r){return r==r&&r>bt&&r<ht},wt=oe.isPrimitive;var Et=function(r){return wt(r)&&r>=0},jt=oe.isObject;var Pt=function(r){return jt(r)&&r.valueOf()>=0},_t=Et,Tt=Pt;var Ot=d,xt=function(r){return _t(r)||Tt(r)},St=Pt;Ot(xt,"isPrimitive",Et),Ot(xt,"isObject",St);var Vt=xt.isPrimitive,At=We.isPrimitive;var kt=function(r,e){var t,n;if(!At(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Vt(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},Ft=oe.isPrimitive,It=We.isPrimitive;var Nt=function(r,e,t){var n,i;if(!It(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!It(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!Ft(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},Rt=kt,$t=Nt;var Mt=function(r,e,t){var n=!1,i=e-r.length;return i<0||($t(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+Rt("0",i):Rt("0",i)+r,n&&(r="-"+r)),r},Ct=mt,Bt=vt,Gt=lt,Lt=yt,Zt=Br.isPrimitive,Wt=Mt;var Xt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Lt(n)){if(!Zt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Wt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Wt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=Ct(r.specifier)?Bt(t):Gt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},zt=We.isPrimitive,Ut=/[-\/\\^$*+?.()|[\]{}]/g;var Yt=function(r){var e,t;if(!zt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Ut,"\\$&"):(e=(e=r.substring(1,t)).replace(Ut,"\\$&"),r=r[0]+e+r.substring(t))},Dt=RegExp.prototype.exec;var qt=k,Ht=function(r){try{return Dt.call(r),!0}catch(r){return!1}},Jt=y();var Kt=Yt,Qt=Pr,rn=We.isPrimitive,en=function(r){return"object"==typeof r&&(r instanceof RegExp||(Jt?Ht(r):"[object RegExp]"===qt(r)))};var tn=mt,nn=vt,on=lt,an=function(r,e,t){if(!rn(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(rn(e))e=Kt(e),e=new RegExp(e,"g");else if(!en(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!rn(t)&&!Qt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},un=yt,cn=Br.isPrimitive,fn=function(r){return Math.abs(r)},ln=/e\+(\d)$/,sn=/e-(\d)$/,vn=/^(\d+)$/,pn=/^(\d+)e/,gn=/\.0$/,dn=/\.0*e/,mn=/(\..*[^0])0*e/;var hn=function(r){var e,t,n=parseFloat(r.arg);if(!un(n)){if(!cn(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":fn(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=an(t,mn,"$1e"),t=an(t,dn,"e"),t=an(t,gn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=an(t,ln,"e+0$1"),t=an(t,sn,"e-0$1"),r.alternate&&(t=an(t,vn,"$1."),t=an(t,pn,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=tn(r.specifier)?nn(t):on(t)},bn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var yn=kt;var wn=We.isPrimitive,En=ct,jn=be,Pn=Xt,_n=hn,Tn=function(r){var e,t,n,i,o;for(e=0,n=[],o=bn.exec(r);o;)(t=r.slice(e,bn.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=bn.lastIndex,o=bn.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},On=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+yn(" ",n):yn(" ",n)+r},xn=Mt,Sn=String.fromCharCode;var Vn=function(r){var e,t,n,i,o,a,u,c,f;if(!wn(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Tn(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],wn(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!En(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,jn(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,jn(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Pn(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!jn(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=jn(o)?String(n.arg):Sn(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=_n(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=xn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=On(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},An=d,kn=Tr,Fn=de.isPrimitive,In=Pr,Nn=_,Rn=he,$n=ke,Mn=Vn;var Cn=function r(e,t){var n,i,o;if(!kn(e))throw new TypeError(Mn("invalid argument. First argument must be an iterator. Value: `%s`.",e));if(!Fn(t))throw new TypeError(Mn("invalid argument. Second argument must be a positive integer. Value: `%s`.",t));return o=$n(t),An(n={},"next",(function(){var r,t;if(i)return{done:!0};r={},"number"==typeof(t=e.next()).value?r.value=o(t.value):Nn(t,"value")&&(r.value=o(NaN));t.done?(i=!0,r.done=!0):r.done=!1;return r})),An(n,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Rn&&In(e[Rn])&&An(n,Rn,(function(){return r(e[Rn](),t)})),n};return Cn}));
//# sourceMappingURL=bundle.js.map
