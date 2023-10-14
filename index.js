const numberButtons = document.querySelectorAll('.num-btn');
const operationButtons = document.querySelectorAll('.op-btn');
const equalsSymbol = document.querySelector('.equals-btn');
const calDisplay = document.querySelector('.cal-display');
const clearButton = document.getElementById('clear');
let firstNumber = [];
let secondNumber = [];
let operation = null;
let sum = '';

const add = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const stringToNumber = (str) => parseFloat(str.join(''));

const handleMathOp = (op) => {
    switch (op) {
        case '+':
            return add(stringToNumber(firstNumber), stringToNumber(secondNumber));
        case '-':
            return sub(stringToNumber(firstNumber), stringToNumber(secondNumber));
        case '*':
            return multiply(stringToNumber(firstNumber), stringToNumber(secondNumber));
        case '/':
            return divide(stringToNumber(firstNumber), stringToNumber(secondNumber));
    };
};

const clear = () => {
    firstNumber = [];
    secondNumber = [];
    operation = null;
    calDisplay.textContent = '';
}

const handleNumbers = (event) => {
    if (operation) {
        secondNumber.push(event.target.textContent)
        calDisplay.textContent = `${firstNumber.join('')} ${operation} ${secondNumber.join('')}`;
    } else {
        firstNumber.push(event.target.textContent);
        calDisplay.textContent = firstNumber.join('');
    };
};

const handleOperation = (event) => {
    if (firstNumber.length === 0 || operation) return;

    operation = event.target.dataset.key;
    calDisplay.textContent = `${firstNumber.join('')} ${operation}`;
};

const handleCalculations = () => {
    sum = handleMathOp(operation);
    calDisplay.textContent = sum;
    firstNumber = [sum];
    operation = null;
    secondNumber = [];
} 

const handleEqualsButton = () => {
    if (!operation || firstNumber.length === 0 || secondNumber.length === 0) {
        calDisplay.textContent = 'Error';
        setTimeout(() => {
            calDisplay.textContent = `${firstNumber.join('')} ${operation ? operation : ''}`;
        }, 1000);
    } else {
        handleCalculations();
    };
}


numberButtons.forEach(numButton => {
    numButton.addEventListener('click', handleNumbers);
});

operationButtons.forEach(opButton => {
    opButton.addEventListener('click', handleOperation);
});

clearButton.addEventListener('click', clear);

equalsSymbol.addEventListener('click', handleEqualsButton);