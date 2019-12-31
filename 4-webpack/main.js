// exMoudule 的模块导入
import Vue from '../src/js/vue';

import App from './App';

import {num1,num2, add} from './App';
console.log(num1, num2);
console.log(add(3, 5));

new Vue({
    el : "#app",
    data(){
        return {}
    },
    components : {
        App
    },
    template : `
        <App />
    `
})