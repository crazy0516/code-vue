var App = {
    template : `
        <div>我是一个入口组件</div>
    `
}

// 声明并导出
export var num1 = 2; // 作为整个对象 key 导出

// 声明再导出
var num2 = 3;
export {num2};

// 导出函数
export function add(x, y){
    return console.log(x+y);
}

export default App;