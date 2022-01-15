// let number one
// let number two
// let operation
//
// when number is pressed store it in a array
//
// when operation button is pressed convert the numbers in the array
// into one long number (think there is a method for this) and set it 
// to be number one or number two
// 	if one is NaN set to 1
// 	if one is a number set to two
//
// when operation button is pressed, check if number two is a number
// if yes, perform the operation on 1 and 2
// 	then reset the numbers, set 1 equal to the answer to continue
// 	with calculation
//
// if no, do what a real calculator does

// Calculator display
const display = document.querySelector("#display");

// Number buttons
const btn0 = document.querySelector("#btn0");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
// Operation buttons
const btnPlus = document.querySelector("#btnPlus");
const btnMinus = document.querySelector("#btnMinus");
const btnTimes = document.querySelector("#btnTimes");
const btnDivide = document.querySelector("#btnDivide");
const btnEquals = document.querySelector("#btnEquals");

let numberInput = [];
let firstNumber;
let secondNumber;
let operation;

btn0.addEventListener("click", () => {updateInput(0)});
btn1.addEventListener("click", () => {updateInput(1)});
btn2.addEventListener("click", () => {updateInput(2)});
btn3.addEventListener("click", () => {updateInput(3)});
btn4.addEventListener("click", () => {updateInput(4)});
btn5.addEventListener("click", () => {updateInput(5)});
btn6.addEventListener("click", () => {updateInput(6)});
btn7.addEventListener("click", () => {updateInput(7)});
btn8.addEventListener("click", () => {updateInput(8)});
btn9.addEventListener("click", () => {updateInput(9)});

btnPlus.addEventListener("click", () => {updateInput(" + ")});
btnMinus.addEventListener("click", () => {updateInput(" - ")});
btnTimes.addEventListener("click", () => {updateInput(" * ")});
btnDivide.addEventListener("click", () => {updateInput(" / ")});
btnEquals.addEventListener("click", () => {performCalc()});

function updateInput(input) {
	if (isNaN(input)) {
		assignOperation(input);
		updateDisplay(input);
	} else {
		numberInput.push(input);
		updateDisplay(input);
	}
}

function updateDisplay(input) {
	display.append(input);
}

function displayResult() {
	display.textContent = firstNumber;
}

function assignOperation(op) {
	assignNumber();
	operation = op;
}

function assignNumber() {
	if (isNaN(firstNumber)) {
		firstNumber = parseInt(numberInput.join(""));
		numberInput = [];
		return;
	} else if (isNaN(secondNumber)) {
		secondNumber = parseInt(numberInput.join(""));
		numberInput = [];
		return;
	}
}

function performCalc() {
	assignNumber();

	switch (operation) {
		case " + ":
			performAddition();
			break;
		case " - ":
			performSubtraction();
			break;
		case " * ":
			performMultiplication();
			break;
		case " / ":
			performDivision();
			break;
	}
}

function performAddition() {
	firstNumber += secondNumber;
	secondNumber = null;
	displayResult();
}

function performSubtraction() {
	firstNumber -= secondNumber;
	secondNumber = null;
	displayResult();
}

function performMultiplication() {
	firstNumber *= secondNumber;
	secondNumber = null;
	displayResult();
}

function performDivision() {
	firstNumber /= secondNumber;
	secondNumber = null;
	displayResult();
}
