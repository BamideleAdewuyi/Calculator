let firstNum = 0;
let secondNum = 0;
let display = 0;
let operator;

const nums = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const screen = document.querySelector("#screen");

screen.innerText = display;

function operate(num1, num2, op) {
    switch(op) {
        case "/":
            return num1 / num2;
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "=":
            return num1;
    }
    return num1opnum2;
}

clear.addEventListener("click", () => {
    display = 0;
    screen.innerText = display;
})

function editNum1(button) {
    button.addEventListener("click", () => {
        if (button.id == 0 && display == 0) {
            return;
        }
        if (display == 0) {
            display = button.id;
            firstNum = display;
            screen.innerText = display;
        }
        else {
            display = display + '' + button.id;
            firstNum = display;
            screen.innerText = display;
        }
    })
};

nums.forEach(num => editNum1(num));