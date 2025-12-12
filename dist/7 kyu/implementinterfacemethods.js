"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = exports.Square = void 0;
class Square {
    constructor(value) {
        this.value = value;
    }
    area() { return (this.value * this.value); }
    ;
    perimeter() { return (this.value + this.value) * 2; }
}
exports.Square = Square;
class Circle {
    constructor(value) {
        this.value = value;
    }
    area() { return (this.value * this.value) * Math.PI; }
    ;
    perimeter() { return this.value * 2 * Math.PI; }
}
exports.Circle = Circle;
