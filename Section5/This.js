// Highlighting important aspects of the this keyword

// Remember that in JS, objects can be constructed via constructor functions,
// BUT this can only be done using the special new keyword

function Person(name) {
    this.name = name;
}

function PersonTwo(name) {
    this.name = name;
    return this;
}

let p = new Person('Alex'); // Because we are using the new keyword, the Person function creates an object, binds this to it, and returns it
let a = Person('Andrew'); // sets the name property of the GLOBAL object to Alex because we are not using strict mode;
let b = PersonTwo('Mack') // as above but returns this;

console.log(p); // prints that it is an object
console.log(a); // prints undefined because there is no return statement
console.log(b); // returns global object with name as property