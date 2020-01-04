// console.log('hello nodejs!');
const http = require('http');
http.createServer((request, response) => {
    response.writeHead(200, {'Content-type' : 'text/plain'});

    response.end('hello nodejs');
}).listen(8888);

console.log('Server running at http://localhost:8888/');
