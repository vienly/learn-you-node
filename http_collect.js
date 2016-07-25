'use strict';

const http = require('http');

let url = process.argv[2];

http.get(url, (res) => {
  let result = '';
  res.setEncoding('utf8');
  res.on('data', (data) => {
    result += data;
  });
  res.on('end', () => {
    console.log(result.length);
    console.log(result);
  });
  res.on('error', console.error);
}).on('error', console.error);
