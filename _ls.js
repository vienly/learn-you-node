'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function(dirname, ext, callback) {
  let extension = "." + ext;
  fs.readdir(dirname, function(err, files) {
    if (err) {
      callback(err, null);
    }
    else {
      let result = [];
      files.forEach(function(file) {
        if (path.extname(file) == extension) {
          result.push(file);
        }
      });
      callback(null, result);
    }
  });
};
