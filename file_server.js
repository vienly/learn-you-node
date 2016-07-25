'use strict';

const http = require('http');
const fs = require('fs');
const port = process.argv[2] || 8000;
const fileLocation = process.argv[3];

http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  fs.createReadStream(fileLocation).pipe(res);
}).listen(port);
