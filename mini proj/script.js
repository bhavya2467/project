// Select the display
const display = document.getElementById("display");

// Initialize variables
let currentInput = "";
let previousInput = "";
let operator = "";

// Add event listeners to buttons
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "AC") {
            clearAll();
        } else if (value === "=") {
            calculateResult();
        } else if (["+", "-", "*", "/", "%"].includes(value)) {
            setOperator(value);
        } else if (value === "^2") {
            squareNumber();
        } else {
            appendNumber(value);
        }
    });
});

// Functions
function clearAll() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay("0");
}

function appendNumber(number) {
    if (number === "." && currentInput.includes(".")) return; // Prevent multiple decimals
    currentInput += number;
    updateDisplay(currentInput);
}

function setOperator(op) {
    if (currentInput === "") return; // Prevent operator without number
    if (previousInput !== "") calculateResult(); // Calculate result if operator already exists
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculateResult() {
    if (currentInput === "" || previousInput === "") return;

    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    let result;
    switch (operator) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num1 / num2; break;
        case "%": result = num1 % num2; break;
        default: return;
    }

    updateDisplay(result);
    currentInput = result.toString();
    previousInput = "";
    operator = "";
}

function squareNumber() {
    if (currentInput === "") return;
    const num = parseFloat(currentInput);
    updateDisplay(num ** 2);
    currentInput = (num ** 2).toString();
}

function updateDisplay(value) {
    display.innerText = value;
}