var Cat = require('./Cat');
var Mouse = require('./Mouse');
var Dog = require('./Dog');
var tom = new Cat('Tom', 5, 'Blue');

console.log(tom);
tom.run();

console.log('New Friend');
var dog = new Dog('Bub', 2);
dog.bark();

