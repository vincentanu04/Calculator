

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, operater, num2) {
    if (operater === "+") return add(num1, num2);
    else if (operater === "-") return subtract(num1, num2);
    else if (operater ==="*") return multiply(num1, num2);
    else return divide(num1, num2);
}

function clearPressed(e) {
    tempNumber = undefined;
    firstNumber = undefined;
    operator = undefined;
    secondNumber = undefined;
    display.textContent = "";
}

function equalPressed(e) {
    if (operator === "/" && secondNumber === 0) {
        display.textContent = "Clear the display, or else..";
        return;
    }
    display.textContent = Math.round(operate(firstNumber, operator, secondNumber) * 100) / 100;
    tempNumber = Number(display.textContent);
    secondNumber = undefined;
}

function operatorPressed(e) {
    firstNumber = tempNumber;
    display.textContent = this.dataset.key;
    operator = display.textContent;
}

function numberPressed(e) {
    if (display.textContent === operator) display.textContent = "";

    display.textContent += this.dataset.key;
    tempNumber = Number(display.textContent);

    if (operator) secondNumber = tempNumber;
}

let tempNumber;
let firstNumber;
let operator;
let secondNumber;

const display = document.querySelector(".display");

const numbers = document.querySelectorAll(".num");
numbers.forEach(button => button.addEventListener("click", numberPressed));

const operators = document.querySelectorAll(".operator");
operators.forEach(button => button.addEventListener("click", operatorPressed));

const equal = document.querySelector(".equals");
equal.addEventListener("click", equalPressed);

const clear = document.querySelector(".clear");
clear.addEventListener("click", clearPressed);