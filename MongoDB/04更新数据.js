var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err, db) => {
    if(err) throw err;
    var dbo = db.db('runoob');

    var whereStr = {'name' : '菜鸟教程'};// 查询条件
    var updataStr = {$set: {'url' : 'https://www.baidu.com', 'type' : 'en'}};
    // dbo.collection('site').updateOne(whereStr, updataStr, (err, res) => {// 更新一条数据
    dbo.collection('site').updateMany(whereStr, updataStr, (err, res) => {// 更新多条数据
        if(err) throw err;
        console.log('文档更新成功');
        db.close();
    })
})