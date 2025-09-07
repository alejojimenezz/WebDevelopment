// Create variables
var x;
let y;
// var is outdated, use only for older browsers
// Better use const and let
// const: not changeable
// let: changeable

// Use variables
x = 5;
y = 6;

// Operators (+-*/)
let z = x + y;
z = x * (y + 1);

console.log(z);

let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;

console.log(text3);

const PI = 3.141592653589793;
// PI = 3.14 -> Outputs error

console.log(PI);

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");