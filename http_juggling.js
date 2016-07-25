'use strict';

const http = require('http');

let urlArr = process.argv.slice(2);
let results = [];
let count = 0;

urlArr.forEach((url) => {

  http.get(url, (res) => {
    let result = '';
    res.setEncoding('utf8');
    res.on('data', (data) => {
      result += data;
    });

    res.on('end', () => {
      results[urlArr.indexOf(url)] = result;
      count++;
      if (count === urlArr.length) {
        results.forEach((item) => {
          console.log(item);
        });
      }
    });
    
    res.on('error', console.error);
  }).on('error', console.error);
});
