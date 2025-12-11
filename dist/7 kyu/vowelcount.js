"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */
class Kata {
    static getCount(str) {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        return [...str].filter(char => vowels.includes(char)).length;
    }
}
exports.Kata = Kata;
console.log(Kata.getCount('hello '));
