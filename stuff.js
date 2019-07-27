// code for tutorial 7

var exports = module.exports = {};


exports.counter = function(arr) {
  return 'There are '
  + arr.length
  + ' elements in this array.';
};

exports.adder = function(a, b) {
  return `The sum of the two is ${a+b}.`;
};

exports.pi = 3.142;
