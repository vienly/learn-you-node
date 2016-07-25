'use strict';

let result = process.argv.slice(2).reduce((previousValue, currentValue) => {
  return parseInt(previousValue) + parseInt(currentValue);
});

console.log(result);
