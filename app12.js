

// creating a server. Tutorial 12

var http = require('http');

var handleRequest = function(req, res) {
  console.log('request made: ' + req.url);
  // set up response header
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hey this is a server by Shida.');
};

var server = http.createServer(handleRequest);

// the inputs are port numbers and IP address.
// '127.0.0.1' indicates local host.
// type in localhost:3000 to connect to server.
server.listen(3000, '127.0.0.1');
console.log('Now listening to port 3000');
