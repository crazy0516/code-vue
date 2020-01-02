// exMoudule 的模块导入
import Vue from '../src/js/vue';

// import App from './App';
// 导出对象
// import {num1,num2, add} from './App';

import * as obj from './App'

console.log(obj.num1);

// console.log(num1);
// console.log(num2);
// console.log(add(3, 5));

new Vue({
    el : "#app",
    data(){
        return {}
    },
    components : {
        App : obj.default
    },
    template : `
        <App />
    `
})