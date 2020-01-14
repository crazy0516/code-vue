var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

MongoClient.connect(url, {useNewParser: true, useUnifiedTopology: true}, (err, db) => {
    if(err) throw err;
    var dbo = db.db('runoob');
    // var whereStr = {'name' : '菜鸟教程'};// 查询条件
    var whereStr = {'type' : 'en'};// 查询条件
    // dbo.collection('site').deleteOne(whereStr, (err, result) => {
        dbo.collection('site').deleteMany(whereStr, (err, result) => {
        if(err) throw err;
        console.log('删除数据成功' + result);// 删除数据成功{"result":{"n":0,"ok":1},"connection":{"id":0,"host":"localhost","port":27017},"deletedCount":0,"n":0,"ok":1}
        db.close();
    })
})