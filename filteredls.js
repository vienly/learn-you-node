'use strict';

const fs = require('fs');
const path = require('path');

let dirname = process.argv[2];
let ext = '.' + process.argv[3];

fs.readdir(dirname, function(err, files) {
  files.forEach((file) => {
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
});
