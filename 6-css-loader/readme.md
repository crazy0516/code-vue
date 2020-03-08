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

+ 对css文件的处理(style-loader css-loader)
    + 遇到后缀名.css的文件, webpack先用css-loader加载器去解析这个文件
    + 最后计算完的css, 将会使用style-loader生成一个内容为最终解析完的css代码的style标签, 放到head标签里面
    + webpack在打包过程中, 遇到后缀为css的文件, 就会使用style-loader和css-loader去加载这个文件。

+ 对图片文件的处理(url-loader file-loader)
    + npm i url-loader file-loader -D(安装到开发环境)
    + peerDependencies WARNING file-loader@* requires a peer of webpack@^4.0.0 || ^5.0.0 but webpack@3.12.0 was installed
    + peerDependencies警告文件加载程序@*需要webpack@^4.0.0 | | ^5.0.0的对等方，但webpack@3.12.0已安装