var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

// DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
// DeprecationWarning:当前的服务器发现和监控引擎是不支持的，将在未来的版本中删除。要使用新的服务器发现和监视引擎，请将选项{useUnifiedTopology: true}传递给MongoClient构造函数。
MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err, db) => {
    if(err) throw err;
    var dbo = db.db('runoob');

    var whereStr = {'name' : '菜鸟教程'};// 查询条件

    dbo.collection('site').find(whereStr).toArray((err, result) => {
    // dbo.collection('site').find({}).toArray((err, result) => {// 返回集合中所有数据
        if(err) throw err;
        console.log(result);
        db.close();
    })
})