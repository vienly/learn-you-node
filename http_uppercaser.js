'use strict';

const http = require('http');
const fs = require('fs');
const port = process.argv[2] || 8000;
const map = require('through2-map');

http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(map(function(chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res);
  } else {
    res.end('only support POST');
  }
}).listen(port);
