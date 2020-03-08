// 开发环境
module.exports = {
    // 入口
    entry: {
        // 可以有多个入口, 也可以有一个, 如果有一个就默认从这一个入口开始解析
        "main": "./main.js"
    },
    output: {
        filename: "./build.js"
    },
    // 声明模块 (包含各个loader)
    module: {
        // rules: [
        //     {
        //         test: /\.css$/,
        //         use: [
        //             { loader: 'style-loader' },
        //             {
        //                 loader: 'css-loader',
        //                 options: {
        //                     modules: true
        //                 }
        //             }
        //         ]
        //     }
        // ]
        loaders:[
                // style-loader css-loader
                // 遇到后缀名.css的文件, webpack先用css-loader加载器去解析这个文件
                // 最后计算完的css, 将会使用style-loader生成一个内容为最终解析完的css代码的style标签, 放到head标签里面
                // webpack在打包过程中, 遇到后缀为css的文件, 就会使用style-loader和css-loader去加载这个文件。
            {
                test: /\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                // 对于图片的大小小于limit设置的大小的图片, 使用base64编码
                // 可以减少一次图片的网络请求, 那么对于比较大的图片, 使用base64就不合适
                // 编码会和html混在一起, 一方面可读性差, 另一方面加大了html页面的大小
                // 反而加大了下载页面的大小, 得不偿失, 所以设置一个合理的limit是有必要的
                test:/\.(jpg|png|gif|svg)$/,
                loader:'url-loader?limit=60000'// 大于字节数图片会以base64显示
                // loader:'url-loader'
            }

        ]
    },
    watch: true,// 文件监视改动 自动产出build.js
}