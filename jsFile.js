let firstNum = 0;
let secondNum = 0;
let display = 0;
let operator = "=";

const nums = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const screen = document.querySelector("#screen");
const equals = document.querySelector("#equals");

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
            return screen.innerText;
    }
}

clear.addEventListener("click", () => {
    display = 0;
    firstNum = 0;
    secondNum = 0;
    screen.innerText = display;
})

function editNum1(button) {
    button.addEventListener("click", () => {
        if (String(display).length < 9) {
            if (button.id == 0 && display == 0) {
                return;
            }
            if (display == 0) {
                display = button.id;
                screen.innerText = display;
            }
            else {
                display = display + '' + button.id;
                screen.innerText = display;
            }
        }
    })
};

function editOp(button) {
    button.addEventListener("click", () => {
        operator = button.id;
        firstNum = display;
        display = 0;
        // screen.innerText = display;
    })
    
};

nums.forEach(num => editNum1(num));

operators.forEach(op => editOp(op));

equals.addEventListener("click", () => {
    secondNum = display;
    console.log("firstNum: " + firstNum + " secondNum: " + secondNum + " operator: " + operator);
    let ans = operate(Number(firstNum), Number(secondNum), operator);
    display = ans;
    screen.innerText = display;
    operator = "=";
    // secondNum = 0;
})