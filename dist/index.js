"use strict";var e=function(r,t){return function(){try{return t||r((t={exports:{}}).exports,t),t.exports}catch(c){throw (t=0, c)}};};var s=e(function(I,u){
var l=typeof String.prototype.trimRight!="undefined";u.exports=l
});var a=e(function(A,o){
var m=require('@stdlib/string-base-replace/dist'),q=/[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/;function x(r){return m(r,q,"")}o.exports=x
});var f=e(function(B,n){
var g=String.prototype.trimRight;n.exports=g
});var v=e(function(E,p){
var y=f();function R(r){return y.call(r)}p.exports=R
});var S=s(),b=a(),d=v(),i;S?i=d:i=b;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
