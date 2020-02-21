const express = require('express');
const app = express();
const mysql = require('mysql');

// 建立连接
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    // password : 'root',
    database : 'nodemysql'
})
db.connect((err) => {
    if(err) throw err;
    console.log('连接成功');
})

// 创建数据库
app.get('/createdb', (req, res) => {
    // sql 语句
    let sql = 'CREATE DATABASE nodemysql';
    // 执行 sql 语句
    // 第一个参数为要执行的语句, 第二个参数是回调函数
    db.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }else{
            console.log(result);
            res.send('Database create success...');
        }
    })
})

// 创建表
// 类型是 int 数值 AUTO_INCREMENT 让id 自增, VARCHAR(255) 字符串 长度255,PRIMARY KEY(ID) 把id设为主键
app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT,title VARCHAR(255),body VARCHAR(255),PRIMARY KEY(ID))';
    db.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }else{
            console.log(result);
            res.send('posts表创建成功...');
        }
    })
})

// 往 posts 数据表里面插入内容
app.get('/addpost1', (req, res) => {
    let post = [
        {title : 'post two', body : 'weasth'},
        {title : 'post three', body : 'north'}
    ];
    // console.log(typeof post);
    let sql = 'INSERT INTO posts SET ?';//问号 防止sql注入 会在执行时把post传进sql语句 替换问号
    db.query(sql, post, (err, result) => {
        if(err){
            console.log(err);
        }else{
            console.log(result);
            res.send('post1 added...')
            // res.json(result);
        }
    })
})

// 查询 posts 表中所有数据
app.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    db.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }else{
            console.log(result);
            // res.send('查询成功。')
            res.json(result);// 把查询到的内容返回出去 使用res.json(result)
        }
    })
})

// 查询单条内容
app.get('/getposts/:id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }else{
            console.log(result);
            // res.send('查询成功。')
            res.json(result);// 把查询到的内容返回出去 使用res.json(result)
        }
    })
})

// 开启一个服务器
app.listen(3000, () => {
    console.log('服务器开启在3000端口...');
})