const numberButtons = document.querySelectorAll('.num-btn');
const operationButtons = document.querySelectorAll('.op-btn');
const equalsSymbol = document.querySelector('.equals-btn');
const calDisplay = document.querySelector('.cal-display')
let firstNumber = [];
let secondNumber = [];
let operation = null;

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

numberButtons.forEach(numButton => {
    numButton.addEventListener('click', () => {
        if (operation) {
        secondNumber.push(numButton.textContent)
        calDisplay.textContent =  `${firstNumber.join('')} ${operation} ${secondNumber.join('')}`;
        } else {
        firstNumber.push(numButton.textContent);
        calDisplay.textContent = firstNumber.join('');
        };
    });
});

operationButtons.forEach(opButton => {
    opButton.addEventListener('click', () => {
        if (firstNumber.length === 0 || operation) return;

        operation = opButton.dataset.key;
        calDisplay.textContent = `${firstNumber.join('')} ${operation}`;
    });
});


equalsSymbol.addEventListener('click', () => {
    if (!operation) {
        calDisplay.textContent = 'Error';
        setTimeout(() => {
            calDisplay.textContent = '';
        }, 2000);
    } else {
        handleMathOp(operation);
    };
});