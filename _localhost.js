const http = require('http');
const _port = 3456;
const _host = 'localhost'; // 127.0.0.1

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Connected');
  })
  .listen(_port, _host);

console.log(`Server running on port ${_port}`);
