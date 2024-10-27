let firstNum = 0;
let secondNum = 0;
let operator;

const nums = document.querySelectorAll(".number");
const clear = document.querySelector("#clear");
const screen = document.querySelector("#screen");
clear.addEventListener("click", () => {
    screen.innerText = 0;
})