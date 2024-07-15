const colorSchemes = [
    {
        '--background-color': 'black',
        '--text-color': 'gold',
        '--display-background-color': 'purple',
        '--button-background-color': 'black',
        '--button-hover-color': 'purple'
    },
    {
        '--background-color': 'black',
        '--text-color': 'lightgrey',
        '--display-background-color': 'red',
        '--button-background-color': 'black',
        '--button-hover-color': 'red'
    },
    {
        '--background-color': 'red',
        '--text-color': 'blue',
        '--display-background-color': 'green',
        '--button-background-color': 'red',
        '--button-hover-color': 'green'
    },
    {
        '--background-color': 'lightblue',
        '--text-color': 'yellow',
        '--display-background-color': 'tan',
        '--button-background-color': 'lightblue',
        '--button-hover-color': 'tan'
    },
    {
        '--background-color': 'pink',
        '--text-color': 'magenta',
        '--display-background-color': 'lightblue',
        '--button-background-color': 'pink',
        '--button-hover-color': 'lightblue'
    }
];

let currentSchemeIndex = 0;

function changeColorScheme() {
    currentSchemeIndex = (currentSchemeIndex + 1) % colorSchemes.length;
    const scheme = colorSchemes[currentSchemeIndex];
    for (const property in scheme) {
        document.documentElement.style.setProperty(property, scheme[property]);
    }
}

let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function setOperation(operation) {
    if (currentOperation !== null) {
        calculate();
    }
    firstOperand = displayValue;
    displayValue = '';
    currentOperation = operation;
}

function calculate() {
    if (currentOperation === null) return;

    secondOperand = displayValue;
    let result;
    switch (currentOperation) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }
    displayValue = result.toString();
    currentOperation = null;
    firstOperand = null;
    secondOperand = null;
    updateDisplay();
}
