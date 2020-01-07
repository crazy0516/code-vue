const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello nodejs');
})

const server = app.listen(8081, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log("应用实例，访问地址为 http://localhost", host, port);
})