"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = exports.Cat = exports.Shark = exports.Animal = void 0;
class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
exports.Animal = Animal;
class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, 'shark', status);
    }
}
exports.Shark = Shark;
class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, 'cat', status);
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
}
exports.Cat = Cat;
class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, 'dog', status);
        this.master = master;
    }
    greetMaster() {
        return `Hello ${this.master}`;
    }
}
exports.Dog = Dog;
