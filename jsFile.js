let firstNum = "0";
let secondNum = "0";
let display = 0;
let operator;

const nums = document.querySelectorAll(".number");
const clear = document.querySelector("#clear");
const screen = document.querySelector("#screen");

screen.innerText = display;

clear.addEventListener("click", () => {
    display = 0;
    screen.innerText = display;
})

nums.forEach(el => el.addEventListener ("click", () =>{
    if (el.id == 0 && display == 0) {
        return;
    }
    if (display == 0) {
        display = el.id;
        screen.innerText = display;
    }
    else {
        display = display + '' + el.id;
        screen.innerText = display;
    }
}));