import Vue from 'vue';

console.log(Vue);

let aBtn = document.getElementById('aBtn');
let bBtn = document.getElementById('bBtn');

aBtn.onclick = function(){
    // 异步加载A.js
    require.ensure([], () => {
        let A = require('./A.js')
        alert(A.data);
    })
}

bBtn.onclick = function(){
    // 异步加载B.js
    require.ensure([], () => {
        let B = require('./B.js')
        alert(B.data);
    })
}