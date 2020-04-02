# cms_project

> cms

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

+ assets和static文件的区别:
    + 区别一: assets文件是src下的, 所以最后运行时需要进行打包, 而static文件不需要打包就直接放在最终的文件中
    + 区别二: assets中的文件在vue中的template或style下用../这种相对路径的形式引入, 在script下必须用import的方式引入, 而static下的文件在.vue中的任何地方都只要使用../这种相对路径的方式引入
