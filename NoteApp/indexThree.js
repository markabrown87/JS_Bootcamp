const div = document.createElement("div");
div.textContent = "IM A REAL DIV";
document.body.appendChild(div);

const secondDiv = document.querySelectorAll("div")[1];
const divTwo = document.createElement("div");
div.textContent = "IM A DIV BETWEEN DIVS ONE AND TWO";
document.insertBefore(secondDiv, divTwo);