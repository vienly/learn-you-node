'use strict';

const list = require('./_ls');

let dir = process.argv[2];
let ext = process.argv[3];

list(dir, ext, (err, fileArr) => {
  fileArr.forEach((file) => {
    console.log(file);
  });
})
