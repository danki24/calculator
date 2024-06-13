function add(a, b) {
  return Math.round((a + b) * 100) / 100;
}
function subtract(a, b) {
  return Math.round((a - b) * 100) / 100;
}
function multiply(a, b) {
  return Math.round(a * b * 100) / 100;
}
function divide(a, b) {
  if (b == 0) return alert(`Error: ${a}/0`);
  return Math.round((a / b) * 100) / 100;
}
function operate(a, b, c) {
  if (c == "+") {
    return add(a, b);
  }
  if (c == "-") {
    return subtract(a, b);
  }
  if (c == "*") {
    return multiply(a, b);
  }
  if (c == "/") {
    return divide(a, b);
  }
}

let firstOperand = "";
let secondOperand = "";
let operator = "";
let displayValue = "";
let decimal = "";

const display = document.querySelector("#display");
const numberBtns = document.querySelectorAll("#numberBtn");
const operatorBtns = document.querySelectorAll("#operatorBtn");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const decimalBtn = document.querySelector("#decimal");
const backspaceBtn = document.querySelector("#backspaceBtn");

backspaceBtn.addEventListener("click", () => {
  displayValue = "";
  display.textContent = "";
});
decimalBtn.addEventListener("click", (e) => {
  if (!firstOperand) {
    if (!decimal) {
      displayValue += String(e.target.textContent);
      display.textContent = displayValue;
      decimal = "enabled";
    }
  }
  if (firstOperand && operator) {
    if (decimal == "enabled") {
      displayValue += String(e.target.textContent);
      display.textContent = displayValue;
      decimal = "enabled2";
    }
    if (!decimal) {
      displayValue += String(e.target.textContent);
      display.textContent = displayValue;
      decimal = "enabled1";
    }
  }
});

numberBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    displayValue += String(e.target.textContent);
    display.textContent = displayValue;
    console.log(displayValue);
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (!operator) {
      firstOperand = Number(displayValue);
      displayValue = "";
      display.textContent = e.target.textContent;
      operator = e.target.textContent;
    }
    if (operator && !displayValue) {
      display.textContent = e.target.textContent;
      operator = e.target.textContent;
    }
    if (operator && displayValue) {
      secondOperand = Number(displayValue);
      displayValue = "";
      firstOperand = operate(firstOperand, secondOperand, operator);
      display.textContent = e.target.textContent;
      operator = e.target.textContent;
    }
  });
});

equal.addEventListener("click", () => {
  if (operator) {
    secondOperand = Number(displayValue);
    displayValue = "";
    display.textContent = operate(firstOperand, secondOperand, operator);
    secondOperand = "";
    firstOperand = "";
    operator = "";
  }
});

clear.addEventListener("click", () => {
  display.textContent = "";
  displayValue = "";
  firstOperand = "";
  secondOperand = "";
  operator = "";
});
