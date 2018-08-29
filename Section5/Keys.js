let obj = {
    key: 'a key', // this is valid but key is interpreted as a string
    'key': 'another key' // the above means that this assignment overwrites the assignment of 'a key' to the 'key' property
}

console.log(obj.key); // prints 'another key'
console.log(obj['key']); // prints 'another key'