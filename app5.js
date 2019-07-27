
// Tutorial 5
// normal function statement
function sayHi() {
  console.log("Hi!");
}

sayHi();


// Function expression is a little different
var sayBye = function(){
  console.log("Bye!");
};

// sayBye();
setTimeout(sayBye, 3000);
// sayBye is a function expression

// This will appear a lot in nodeJS.
// Functions can also be passed.
// For example

function callFunction(fun) {
  fun();
}

callFunction(sayHi);
callFunction(sayBye);

// This will happen a lot in nodeJS
