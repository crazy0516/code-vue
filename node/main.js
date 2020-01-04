const fs = require('fs');

// 阻塞代码实例
// const data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log('程序执行结束');

// 非阻塞代码实例
fs.readFile('input1.txt', (err, data) => {
    if(err) return console.log(err);
    console.log(data.toString());
})
console.log('程序执行结束');
