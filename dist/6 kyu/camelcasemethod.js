"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelCase = camelCase;
/**Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

 */
function camelCase(str) {
    return str.split(' ').map(word => word.split('').map((a, i) => i == 0 ? a = a.toUpperCase() : a.toLowerCase()).join('')).join('');
}
