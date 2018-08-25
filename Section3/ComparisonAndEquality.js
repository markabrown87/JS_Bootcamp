let stringOne = 'blue';
let stringTwo = 'green';

// console.log(stringOne < stringTwo);

function printPricing(age) {
    if (age <= 7) console.log('Child');
    else if (age >= 65) console.log('Senior');
    else console.log('Normal');
}

printPricing(27);
printPricing(100);
printPricing(4);