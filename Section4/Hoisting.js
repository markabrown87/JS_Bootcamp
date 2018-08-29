// Variable hoisting
// Variables declared with var are hoisted to the top and will returned an undefined when referenced.
console.log(x);
var x = 3; // without this line, a reference error will be thrown

// the above example can be thought of as:
/* 
var x;
console.log(x);
x = 3
*/

// Variables defined with let are NOT hoisted

// console.log(y); // throws reference error if uncommented
let y = 4;

// Function hoisting
// Functions NOT defined as functional expressions are hoisted to the top

squared(5) // prints 25

function squared(num) {
    console.log(num * num);
}

// Functions defined as functional expressions are NOT hoisted to the top

// cubed(5); If uncommented, you will get a type error! This is because cubed is a variable and is assigned as undefined
// When you try to execute it as a function, compiler will tell you you are trying to execute something that isnt a function as one

var cubed = function(num) {
    console.log(num * num * num);
}