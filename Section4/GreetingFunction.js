let greeting = function(name) {
    console.log("Hello " + name + "!");
}

let squared = function(num) {
    console.log(num * num);
}

greeting("Mark"); // consoles Hello Mark!
squared(13); // consoles 169
squared('2'); // consoles 4
squared("Me"); // consoles NaN

//Video "Challenge"
let roomTempInC = convertToCelsius(72);
let freezingTempInF = convertToFarenheit(0);
let roomTempInK = convertToKelvin(72);

console.log(roomTempInC);
console.log(freezingTempInF);
console.log(roomTempInK);

function convertToKelvin(temp) {
    return convertToCelsius(temp) + 273.15;
}

function convertToCelsius(temp) {
    return ((temp - 32) * 5/9);
}

function convertToFarenheit(temp) {
    return ((temp * 9/5) + 32);
}
