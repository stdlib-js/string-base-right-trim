// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=void 0!==String.prototype.trimRight;var t=/[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/;var u=String.prototype.trimRight;var n=r?function(r){return u.call(r)}:function(r){return function(r,t,u){return r.replace(t,u)}(r,t,"")};export{n as default};
//# sourceMappingURL=mod.js.map
