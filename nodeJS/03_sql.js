let mysql = require('mysql');
let connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    // password : '123456',
    database : 'test'
})

connection.connect();

// 查询
var  sql = 'SELECT * FROM websites';
// 新增
var  addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
var  addSqlParams = ['菜鸟工具', 'https://c.runoob.com','23453', 'CN'];
// 修改
var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',8];
// 删除
var delSql = 'DELETE FROM websites where id=5';

// connection.query(sql, (error, results) => {
// connection.query(addSql, addSqlParams, (error, results) => {
// connection.query(modSql, modSqlParams, (error, results) => {
connection.query(delSql, (error, results) => {
    if (error) {
        console.log(error.message);
        return;
    };
    // console.log('The solution is:', results[0].solution);
    console.log(results);
})

connection.end();
