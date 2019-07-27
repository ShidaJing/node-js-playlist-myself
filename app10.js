
// tutorial 10, directories

var fs = require('fs');

// in order to delete files, do This
fs.unlink('writeme.txt', (err) => {});


// creating a directory
// fs.mkdir('stuff', (err) => {
//   fs.readFile('readme.txt', 'utf8', (err, data) => {
//     fs.writeFile('./stuff/writeme.txt', data, (err)=>{});
//   });
// });

// // can't remove a directory if it's not empty
// fs.rmdir('stuff',
// (err)=>{if (err) throw err;});

// do this instead
fs.unlink('./stuff/writeme.txt', ()=>{
  fs.rmdir('stuff', (err)=>{if (err) throw err;});
});
