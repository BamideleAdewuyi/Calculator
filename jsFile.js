let firstNum = "0";
let secondNum = "0";
let operator;

const nums = document.querySelectorAll(".number");
const clear = document.querySelector("#clear");
const screen = document.querySelector("#screen");

screen.innerText = firstNum;

clear.addEventListener("click", () => {
    screen.innerText = "0";
})

nums.forEach(el => el.addEventListener ("click", () =>{
    firstNum = firstNum.concat('', String(el.id));
    screen.innerText = firstNum;
}));