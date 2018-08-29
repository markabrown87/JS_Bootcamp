function tipCalculator(bill, perc = 0.2) {
    console.log('Your tip percent is: ' + perc);
    return bill * perc;
}

let tipOne = tipCalculator(100);
let tipTwo = tipCalculator(500, 0.05);

console.log(tipOne); // should print 0.2 as tip percent and return 20
console.log(tipTwo); // should print 0.05 as tip percent and return 25