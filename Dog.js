var chalk = require('chalk');

function Dog(name, old) {
    this.name = name;    
    this.old = old;    
}

Dog.prototype.bark = function(){
    console.log('Gau Gau....', 'My name is', chalk.red(this.name), 'i \'m', chalk.green(this.old), 'years old.');
}

module.exports = Dog;
