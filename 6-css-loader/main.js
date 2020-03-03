import "./main.css";

// exMoudule 的模块导入
import Vue from '../src/js/vue';

import App from './App'

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