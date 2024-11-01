let display = 0;
let operator = "=";
let pair = [];
let onOff = 0;

const nums = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const screen = document.querySelector("#screen");
const equals = document.querySelector("#equals");

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
    pair = [];
    onOff = 0;
    screen.innerText = display;
})

function clickNums(button) {
    button.addEventListener("click", () => {
        if (String(display).length < 9) {
            if (button.id == 0 && display == 0) {
                pair[onOff] = display;
                return;
            }
            if (display == 0) {
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
            screen.innerText = ans;
            operator = button.id;
            pair = [ans];
        }
        else {
            operator = button.id;
        }
        onOff = 1;
        display = 0;
        
    })
    
};

nums.forEach(num => clickNums(num));

operators.forEach(op => editOp(op));

equals.addEventListener("click", () => {
    if (pair.length == 2) {
        let ans = operate(Number(pair[0]), Number(pair[1]), operator);
        ans = roundAns(ans);
        // ans = rounded(ans, 7);
        // if (ans > 999999999) {
        //     ans = Number(ans).toExponential();
        //     if (String(ans)[8] == ".") {
        //         ans = String(ans).slice(0, 8);
        //     }
        //     else {
        //         ans = String(ans).slice(0, 9);
        //     }
        // }
        // else {
        //     if (String(ans)[8] == ".") {
        //         ans = String(ans).slice(0, 8);
        //     }
        //     else {
        //         ans = String(ans).slice(0, 9);
        //     }
        // }
        
        
        display = ans;
        screen.innerText = display;
        pair = [ans];
    }
    else {
        let ans = operate(Number(pair[0]), Number(pair[0]), operator);
        ans = roundAns(ans);
        // ans = rounded(ans, 7);
        // if (ans > 999999999) {
        //     ans = Number(ans).toExponential();
        //     if (String(ans)[8] == ".") {
        //         ans = String(ans).slice(0, 8);
        //     }
        //     else {
        //         ans = String(ans).slice(0, 9);
        //     }
        // }
        // else {
        //     if (String(ans)[8] == ".") {
        //         ans = String(ans).slice(0, 8);
        //     }
        //     else {
        //         ans = String(ans).slice(0, 9);
        //     }
        // }
        display = ans;
        screen.innerText = display;
        pair = [ans];
    }
    operator = "=";
    onOff = 0;
})