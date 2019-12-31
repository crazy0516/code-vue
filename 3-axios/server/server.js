const path = require('path');
// 构建服务器架构, 配置好 art-templata, 路由
const koa = require('koa');
const fs = require('fs');

// 处理请求数据
let app = new koa();

const Router = require('koa-router');
const router = new Router();
// 处理文字和文件的请求体数据
const formidable = require('koa-formidable');

router.post('/upload', async(ctx, next) => {
    console.log('上传成功');
    ctx.body = 'ok';
})
.get('/', async ctx => {
    ctx.body = {
        token : 'abc',
        msg : 'get ok'
    };
})
.post('/add', async ctx => {
    ctx.req.on('data', data => {
        console.log(data);
        console.log(data.toString());
    });
    ctx.body = 'post ok';
})

// 对文件操作
app.use(async(ctx, next) => {
    var formidable = require('formidable');
    var form = new formidable.IncomingForm();
    form.uploadDir = path.resolve('./');
    form.keepExtensions = true;
    form.parse(ctx.req, function(err, fields, files){
        console.log(files);
    })

    form.onPart = function(part){
        part.addListener('data', function(data){
            require('fs').appendFileSync('./a.txt', data);
        })
    }

    await next();
})

app.use(async(ctx, next) => {
    console.log(ctx.request.header.origin);
    ctx.response.set('Access-Control-Allow-Origin', '*');

    ctx.response.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    // ctx.response.set('Access-Control-Allow-Headers', 'token');

    await next();
})

app.use(router.routes());
app.use(router.allowedMethods());

// 开启服务器
app.listen(8888, () => {
    console.log('服务器启动在8888端口');
})