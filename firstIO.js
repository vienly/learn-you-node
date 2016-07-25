'use strict';

const fs = require('fs');

let file = fs.readFileSync(process.argv[2]);

let content = file.toString();

console.log(content.split('\n').length - 1);
