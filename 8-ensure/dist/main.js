webpackJsonp([3],{

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);


console.log(__WEBPACK_IMPORTED_MODULE_0_vue__["default"]);

let aBtn = document.getElementById('aBtn');
let bBtn = document.getElementById('bBtn');

aBtn.onclick = function(){
    // 异步加载A.js
    __webpack_require__.e/* require.ensure */(1).then((() => {
        let A = __webpack_require__(7)
        alert(A.data);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe)
}

bBtn.onclick = function(){
    // 异步加载B.js
    __webpack_require__.e/* require.ensure */(0).then((() => {
        let B = __webpack_require__(8)
        alert(B.data);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe)
}

/***/ })

},[3]);