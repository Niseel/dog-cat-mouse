function Cat(name, old, color) {
    this.name = name;
    this.old = old;
    this.color = color;
}

Cat.prototype.run = function() {
    console.log(this.name , 'is running');
};

var tom = new Cat('Tom', 5, 'Blue');

console.log(tom);
tom.run();