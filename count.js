
// code for tutorial 6

var exports = module.exports = {};

exports.counter = function(arr) {
  return 'There are '
  + arr.length
  + ' elements in this array.';
};

exports.hello = function() {
  console.log("Hello from count.js.");
}

// The following line allows
// other files to use counter function
