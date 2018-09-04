let element = document.querySelector("div");
console.log([element]);
console.log(Object.keys(element).length);

let elements = document.querySelectorAll("div");
elements.forEach(el => {
    console.log(el.textContent);
    el.textContent = "Here is a random number: " + Math.random()*100;
})