let allElements = document.querySelectorAll("div");
allElements.forEach(el => {
    if (el.textContent.includes("the")) el.remove();
});