var chalk = require('chalk');

function Dog(name) {
    this.name = name;    
}

Dog.prototype.bark = function(){
    console.log('Gau Gau....', 'My name is', chalk.red(this.name));
}

module.exports = Dog;
