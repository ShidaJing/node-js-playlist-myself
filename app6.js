
// Tutorial 6
// We are going to use a function defined
// in count.js
// ./ indicates current directory
var func = require('./count.js');

console.log(func.counter([1,2,3,4,5,6]));
func.hello();
