let obj = {
    propOne: 'propOne',
    propTwo: 'propTwo',
    propThree: 'propThree'
}

let arr = ['eleOne', 'eleTwo', 'eleThree'];

// Throws error because it isnt an iterable
// for (let prop of obj) {
//     console.log(prop);
// }

for (let prop in obj) {
    console.log(prop);
}

for (let el of arr) {
    console.log(el);
}

for (let el in arr) {
    console.log(el);
}

