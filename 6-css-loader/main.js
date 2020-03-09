import "./main.css";

// exMoudule 的模块导入
import Vue from './../src/js/vue';

import App from './App'

new Vue({
    el : "#app",
    components : {
        App
    },
    template : `
        <App />
    `
    // render:c=>c(App)
})
// console.log("自动更新1");
// console.log("自动更新2");

/* const Pi = "3.14";
let name = "米斯特王";
console.log(Pi);
console.log(name);

let obj = () => {

}; */
// new Promise();
