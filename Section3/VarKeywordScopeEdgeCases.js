// Scoping in block without strict mode

var x = 2;
var a = 3;
var x = 5;
if (true) {
    var x = 3;
    a = 4;
}
console.log(x);
console.log(a);

let y = 2;
let b = 3;
// let y = 5; will cause error if uncommented because y is already declared

if (true) {
    let y = 3;
    b = 4;
}
console.log(y);
console.log(b);

/* 
Before ES6 and the introduction of let and const, there was no such thing as
a 'block scope'. This means that declared variables scoped within only brackets are actually
in the global scope. Thus x evaluates to 3 and a to 4. With ES6 and let, 
we can now scope to block statements like we do in most other languages. Thus y evaluates to 2 and b to 4.
*/

var i = 10;
for (var i = 0; i < 5; i++) {
    console.log(i);
}

var j = 5;
var func = function() {
    var j = 0;
    console.log(j);
}
func();

/* 
Although variables declared with var are not block scoped they are still scoped to functions and other iterable scopes.
Thus, in the above, i iterates from 0 to 4, and j evaluates to 0.
*/