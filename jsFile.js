let display = 0;
let operator = "=";
let pair = [0];
let onOff = 0;

const nums = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const screen = document.querySelector("#screen");
const equals = document.querySelector("#equals");
const decimal = document.querySelector("#decimal");
const backspace = document.querySelector("#backspace");

screen.innerText = display;

function rounded(num, precision) {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(num * multiplier) / multiplier;
}

function roundAns(num) {
    let cleanNum = rounded(num, 7);
    if (cleanNum > 999999999) {
        cleanNum = Number(cleanNum).toExponential();
    }
    if (String(cleanNum)[8] == ".") {
        cleanNum = String(cleanNum).slice(0, 8);
    }
    else {
        cleanNum = String(cleanNum).slice(0, 9);
    }
    
    return cleanNum;
}

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
    pair = [0];
    onOff = 0;
    screen.innerText = display;
    decimal.disabled = false;
})

function clickNums(button) {
    button.addEventListener("click", () => {
        if (String(display).length < 9) {
            if (button.id == 0 && display === 0) {
                pair[onOff] = display;
                return;
            }
            if (display === 0) {
                display = button.id;
                pair[onOff] = display;
                screen.innerText = display;
            }
            else {
                display = display + '' + button.id;
                pair[onOff] = display;
                screen.innerText = display;
            }
        }
    })
};

function editOp(button) {
    button.addEventListener("click", () => {
        if (pair.length == 2 && operator != "=") {
            let ans = operate(Number(pair[0]), Number(pair[1]), operator);
            ans = roundAns(ans);
            screen.innerText = ans;
            operator = button.id;
            pair = [ans];
        }
        else {
            operator = button.id;
        }
        decimal.disabled = false;
        onOff = 1;
        display = 0;
        
    })
    
};

equals.addEventListener("click", () => {
    if (pair.length == 2) {
        ans = operate(Number(pair[0]), Number(pair[1]), operator);
    }
    else {
        ans = operate(Number(pair[0]), Number(pair[0]), operator);
    }
    ans = roundAns(ans);
    display = ans;
    screen.innerText = display;
    pair = [ans];
    operator = "=";
    onOff = 0;
    decimal.disabled = false;
})

decimal.addEventListener("click", () => {
    if (Number.isInteger(Number(display))) {
        display = display + '.';
        pair[onOff] = display;
        screen.innerText = display;
        decimal.disabled = true;
    }
})

backspace.addEventListener("click", () => {
    if (display !== 0) {
        if (display.length > 1) {
            display = display.slice(0, display.length - 1);
            screen.innerText = display;
        }
        else {
            display = 0;
            screen.innerText = display;
        }
        pair[onOff] = display;
    }
})

document.body.addEventListener("keydown", (k) => {
    if (!isNaN(k.key)) {
        if (String(display).length < 9) {
            if (k.key == 0 && display === 0) {
                pair[onOff] = display;
                return;
            }
            if (display === 0) {
                display = k.key;
                pair[onOff] = display;
                screen.innerText = display;
            }
            else {
                display = display + '' + k.key;
                pair[onOff] = display;
                screen.innerText = display;
            }
        }
    }
    if (k.key == "Backspace") {
        if (display !== 0) {
            if (display.length > 1) {
                display = display.slice(0, display.length - 1);
                screen.innerText = display;
            }
            else {
                display = 0;
                screen.innerText = display;
            }
            pair[onOff] = display;
        }
    }
    if (k.key == ".") {
        if (Number.isInteger(Number(display))) {
            display = display + '.';
            pair[onOff] = display;
            screen.innerText = display;
            decimal.disabled = true;
        }
    }
})

nums.forEach(num => clickNums(num));

operators.forEach(op => editOp(op));
