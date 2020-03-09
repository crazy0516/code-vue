+ webpack 安装
    + npm init --yes    (初始化 package.json 文件)
    + npm install webpack@3.12.0 -g    (指定版本全局安装)

+ 打包多个 js 文件
    + webpack ./main.js build.js    (前者是入口文件, 后者是打包生成的文件)

+ 关于 setimmediate 介绍链接:
    + http://www.ruanyifeng.com/blog/2014/10/event-loop.html

+ webpack打包模块的源码 --> 执行顺序(build.js)
    + 1.把所有模块的代码放入到函数中, 用一个数组保存起来
    + 2.根据 require 时传入的数组索引, 能知道需要哪一段代码
    + 3.从数组中, 根据索引取出包含我们代码的函数
    + 4.执行该函数, 传入一个对象 module.exports
    + 5.我们的代码, 按照约定, 正好是用 module.exports = 'xxx' 进行赋值
    + 6.调用函数结束后, module.exports 从原来的空对象, 就有值了
    + 7.最终 return module.exports; 作为 require 函数的返回值

+ 分离webpack打包的文件