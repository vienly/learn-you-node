'use strict';

const http = require('http');
const url = require('url');
const fs = require('fs');
const port = process.argv[2] || 8000;

const routes = {
  '/api/parsetime': function(parsedUrl) {
    let time = new Date(parsedUrl.query.iso);
    return {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    };
  },

  '/api/unixtime': function(parsedUrl) {
    return { unixtime: (new Date(parsedUrl.query.iso)).getTime() };
  }
}

http.createServer((req, res) => {
  req.url = url.parse(req.url, true);
  if(routes[req.url.pathname]) {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(routes[req.url.pathname](req.url)));
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(port);
