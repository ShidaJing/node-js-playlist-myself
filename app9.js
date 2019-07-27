
// Tutorial 9
// reading and writing files

var fs = require('fs');

// sync indicates that the files will be
// read completely before codes below it will
// be ran. syncronous operation

// // file name and character encode.
// var readme = fs.readFileSync('readme.txt', 'utf8');
//
// // console.log(readme);
// fs.writeFileSync('writeme.txt', readme);

// // This is not blocking the codes below.
// // The third input is a callback function.
// // err is the error, and data is the content
// // of the file read
// fs.readFile('readme.txt', 'utf8', function(err, data){
//   console.log(data);
// });
//
// console.log('test');

fs.readFile('readme.txt', 'utf8', function(err, data){
  fs.writeFile('writeme.txt', data, function(err){
    if (err) {
      throw err;
    }
  });
});
