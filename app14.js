
// Tutorial 13 and 14: steams and buffers

var http = require('http');
var fs = require('fs');

// data read from the file
// will be stored in myReadStream
// omitting 'utf8' will result in
// raw buffer
var myReadStream = fs.createReadStream(__dirname
  + '/streamRead.txt', 'utf8');

var fireBack = function(chunk) {
  console.log('New chunk received:');
  console.log(chunk);
}

myReadStream.on('data', fireBack);
