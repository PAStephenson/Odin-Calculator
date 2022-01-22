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
const btnDecimal = document.querySelector("#btnDecimal");
// Operation buttons
const btnPlus = document.querySelector("#btnPlus");
const btnMinus = document.querySelector("#btnMinus");
const btnTimes = document.querySelector("#btnTimes");
const btnDivide = document.querySelector("#btnDivide");
const btnEquals = document.querySelector("#btnEquals");
const btnClear = document.querySelector("#btnClear");

let numberInput = [];
let firstNumber = "";
let secondNumber = "";
let operation = "";

btn0.addEventListener("click", () => {update(0)});
btn1.addEventListener("click", () => {update(1)});
btn2.addEventListener("click", () => {update(2)});
btn3.addEventListener("click", () => {update(3)});
btn4.addEventListener("click", () => {update(4)});
btn5.addEventListener("click", () => {update(5)});
btn6.addEventListener("click", () => {update(6)});
btn7.addEventListener("click", () => {update(7)});
btn8.addEventListener("click", () => {update(8)});
btn9.addEventListener("click", () => {update(9)});
btnDecimal.addEventListener("click", () => {update(".")});

btnPlus.addEventListener("click", () => {update(" + ")});
btnMinus.addEventListener("click", () => {update(" - ")});
btnTimes.addEventListener("click", () => {update(" * ")});
btnDivide.addEventListener("click", () => {update(" / ")});
btnEquals.addEventListener("click", () => {performCalc()});
btnClear.addEventListener("click", () => {allClear()});

function update(input) {
	updateDisplay(input);

	if (!isNaN(input) || input == ".") {
		numberInput.push(input);
	} else {
		updateOperation(input);
	}
}

function updateDisplay(input) {
	if (display.textContent == "0" && input != ".") {
		display.textContent = input;
	} else {
		display.append(input);
	}
}

function displayResult() {
	display.textContent = firstNumber;
}

function updateNumbers() {
	if (firstNumber == "") {
		firstNumber = parseFloat(numberInput.join(""));
		numberInput = [];
		return;
	} else {
		secondNumber = parseFloat(numberInput.join(""));
		numberInput = [];
		return;	
	}
}

function updateOperation(operator) {
	updateNumbers();
	operation = operator;
}

function allClear() {
	numberInput = [];
	firstNumber = "";
	secondNumber = "";
	operation = "";
	display.textContent = "0";
}

function performCalc() {
	updateNumbers();

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
	secondNumber = "";
	displayResult();
}

function performSubtraction() {
	firstNumber -= secondNumber;
	secondNumber = "";
	displayResult();
}

function performMultiplication() {
	firstNumber *= secondNumber;
	secondNumber = "";
	displayResult();
}

function performDivision() {
	firstNumber /= secondNumber;
	secondNumber = "";
	displayResult();
}
