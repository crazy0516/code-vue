let MongoClient = require('mongodb').MongoClient;

let url = 'mongodb://localhost:27017/';

MongoClient.connect(url, {useNewUrlParser: true}, (err, db) => {
    if(err) throw err;
    let dbo = db.db('runoob');
    let myobj = [
        { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
        { name: 'Google', url: 'https://www.google.com', type: 'en'},
        { name: 'Facebook', url: 'https://www.google.com', type: 'en'}
    ];

    // 插入多条数据到 site 表中
    dbo.collection('site').insertMany(myobj, (err, res) => {
        if(err) throw err;
        console.log('插入的文档数量为:' + res.insertedCount);// 插入的文档数量为:3
        db.close();
    })
})