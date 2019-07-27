// Here are some example global functions I can use

var time = 0;

console.log("Hey. This is my first NodeJS app.");
console.log(__dirname);
console.log(__filename);


// setTimeout(function(){
//   console.log("Hey again, but 3 seconds have passed.");
// }, 3000);

// setInterval(function() {
//   time += 2;
//   console.log(time + ' seconds have passed.');
// }, 2000);

var timerFunc = setInterval(function() {
  time += 1;
  console.log(time + ' seconds have passed.');
  if (time >= 10) {
    clearInterval(timerFunc);
  }
}, 1000);
