'use strict';

const net = require('net');

const port = process.argv[2] || 8000;

function fill(num) {
  return num < 10 ? '0' + num : num;
}

let server = net.createServer((socket) => {
  let d = new Date();
  let s = d.getFullYear() + "-"
   + fill(d.getMonth() + 1) + "-"
   + fill(d.getDate()) + " "
   + fill(d.getHours()) + ":"
   + fill(d.getMinutes()) + "\n";
  socket.end(s);
});

server.listen(port);
