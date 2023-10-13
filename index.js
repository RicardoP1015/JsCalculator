const numberButtons = document.querySelectorAll('.num-btn');
const divideSymbol = document.getElementById('/');
const multiplySymbol = document.getElementById('*');
const subtractionSymbol = document.getElementById('-');
const additionSymbol = document.getElementById('+');

const calDisplay = document.querySelector('.cal-display')
let firstNumber = null;
let secondNumber = null;

const add = (num1, num2) =>  num1 + num2;
const sub =(num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const handleMathOp = (op) => {
    switch (op) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return sub(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
    };
};

