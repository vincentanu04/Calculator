function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 * num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let firstNumber;
let operator;
let secondNumber;

function operate(num1, operator, num2) {
    if (operator === "+") return add(num1, num2);
    else if (operator === "-") return subtract(num1, num2);
    else if (operator ==="*") return multiply(num1, num2);
    else return divide(num1, num2);
}

console.log(operate(1, "/", 2));