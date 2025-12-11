"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.var15NeverFunction = exports.var14Undefined = exports.var13Null = exports.var12VoidFunction = exports.var11ArrayOfAny = exports.var10Enum = exports.Color = exports.var9Tuple = exports.var8NumericArray = exports.var7Array = exports.var6String = exports.var5Octal = exports.var4Binary = exports.var3Hex = exports.var2Decimal = exports.var1Boolean = void 0;
/**Learning TypeScript. Basic Types
Overview
In this kata you'll get familiar with TypeScript's basic types.
If you have problems solving this kata please refer to this article: https://www.typescriptlang.org/docs/handbook/basic-types.html
Task
*Boolean
1.Export var1Boolean variable of boolean type with value true.
*Number
2.Export var2Decimal variable of numeric type with decimal value 13.
3.Export var3Hex variable of numeric type with hex value f00d.
4.Export var4Binary variable of numeric type with binary value 111111.
5.Export var5Octal variable of numeric type with octal value 744.
*String
6.Export var6String variable of string type with value Hello, world!.
*Array
7.Export var7Array variable of array type with value [1, 'test', {a: 3}, 4, 5].
8.Export var8NumericArray variable of numeric generic array type with value [1, 2, 3, 4, 5].
*Tuple
Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same.
9.Export var9Tuple variable of tuple type with value ['key', 12345] - i.e. it should represent a value as a pair of a string and a number.
*Enums
10.Export var10Enum variable with value Color.Blue from enum export enum Color {Red = 1, Green = 2, Blue = 4}.
*Any
We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content, e.g. from the user or a 3rd party library. In these cases, we want to opt-out of type-checking and let the values pass through compile-time checks. To do so, we label these with the any type.
11.Export var11ArrayOfAny variable of Array<any> type with value [1, 'test', {a: 3}, 4, 5].
*Void
12.Export var12VoidFunction function that returns void.
*Null and Undefined
13.Export var13Null variable with type and value null.
14.Export var14Undefined variable with type and value undefined.
*Never
15.Export var15NeverFunction function that returns never value.
 */
exports.var1Boolean = true;
exports.var2Decimal = 13;
exports.var3Hex = 0xf00d;
exports.var4Binary = 0b111111;
exports.var5Octal = 0o744;
exports.var6String = 'Hello, world!';
exports.var7Array = [1, 'test', { a: 3 }, 4, 5];
exports.var8NumericArray = [1, 2, 3, 4, 5];
exports.var9Tuple = ['key', 12345];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (exports.Color = Color = {}));
exports.var10Enum = Color.Blue;
exports.var11ArrayOfAny = [1, 'test', { a: 3 }, 4, 5];
var var12VoidFunction = () => { };
exports.var12VoidFunction = var12VoidFunction;
exports.var13Null = null;
exports.var14Undefined = undefined;
var var15NeverFunction = () => { throw new Error('this function never happens'); };
exports.var15NeverFunction = var15NeverFunction;
console.log(exports.var1Boolean, exports.var2Decimal, exports.var10Enum);
