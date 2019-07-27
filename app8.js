
// Tutorial 8, event module
// require built-in module
var events = require('events');

// // custome event emitter
// var myEmitter = new events.EventEmitter();
//
// // listen for 'someEvent' and
// // react with mssg
// myEmitter.on('someEvent', function(mssg){
//   console.log(mssg);
// });
//
// // trigger 'someEvent'.
// myEmitter.emit('someEvent', 'The event was emitted.');

var util = require('util');

var Person = function(name){
  this.name = name;
};

// Now anything created with Person constructor can
// use EventEmitter
util.inherits(Person, events.EventEmitter);

// Try
var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

var people = [james, mary, ryu];

people.forEach(function(person){
  person.on('speak', function(mssg){
    console.log(person.name + ' said: ' + mssg);
  });
});

james.emit('speak', 'hey I\'m james');
