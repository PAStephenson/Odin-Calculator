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

let firstNumber = "";
let secondNumber = "";
let operation = "";

btn0.addEventListener("click", () => {updateNumbers(0)});
btn1.addEventListener("click", () => {updateNumbers(1)});
btn2.addEventListener("click", () => {updateNumbers(2)});
btn3.addEventListener("click", () => {updateNumbers(3)});
btn4.addEventListener("click", () => {updateNumbers(4)});
btn5.addEventListener("click", () => {updateNumbers(5)});
btn6.addEventListener("click", () => {updateNumbers(6)});
btn7.addEventListener("click", () => {updateNumbers(7)});
btn8.addEventListener("click", () => {updateNumbers(8)});
btn9.addEventListener("click", () => {updateNumbers(9)});
btnDecimal.addEventListener("click", () => {updateNumbers(".")});

btnPlus.addEventListener("click", () => {updateOperation("+")});
btnMinus.addEventListener("click", () => {updateOperation("-")});
btnTimes.addEventListener("click", () => {updateOperation("*")});
btnDivide.addEventListener("click", () => {updateOperation("/")});
btnEquals.addEventListener("click", () => {performCalc()});
btnClear.addEventListener("click", () => {allClear()});

function updateNumbers(input) {
	if (operation != "") {
		if (input == "." && secondNumber == "") {
			input = "0.";
		} else if (input == "." && secondNumber.includes(".")) {
			input = "";
		}
		
		if (secondNumber.length < 10) {
			secondNumber = secondNumber.concat(input);
		}
	} else {
		if (input == "." && firstNumber == "") {
			input = "0.";
		} else if (input == "." && firstNumber.includes(".")) {
			input = "";
		}

		if (firstNumber.length < 10) {
			firstNumber = firstNumber.concat(input);
		}
	}

	updateDisplay();
}

function updateOperation(input) {
	if (operation != "") {
		performCalc();
	}	
	operation = input;
}

function updateDisplay() {
	if (operation != "") {
		display.textContent = secondNumber;
	} else {
		display.textContent = firstNumber;
	}
}

function displayResult() {
	if (numberLength(firstNumber) > 10) {
		if (firstNumber % 1 != 0) {
			decimalPlaces = 10 - numberLength(Math.trunc(firstNumber));
			result = firstNumber.toFixed(decimalPlaces);
			display.textContent = parseFloat(result);
		} else {
			display.textContent = firstNumber.toPrecision(10);
		}
	} else {
		display.textContent = firstNumber;
	}
}

function allClear() {
	firstNumber = "";
	secondNumber = "";
	operation = "";
	display.textContent = "0";
}

function performCalc() {
	if (firstNumber == "" || secondNumber == "") {
		return;
	}

	switch (operation) {
		case "+":
			performAddition();
			break;
		case "-":
			performSubtraction();
			break;
		case "*":
			performMultiplication();
			break;
		case "/":
			performDivision();
			break;
	}
}

function numberLength(number) {
	return number.toString().length;
}

function performAddition() {
	firstNumber = parseFloat(firstNumber) + parseFloat(secondNumber);
	operation = ""
	secondNumber = "";
	displayResult();
}

function performSubtraction() {
	firstNumber -= secondNumber;
	operation = ""
	secondNumber = "";
	displayResult();
}

function performMultiplication() {
	firstNumber *= secondNumber;
	operation = ""
	secondNumber = "";
	displayResult();
}

function performDivision() {
	if (secondNumber == "0") {
		display.textContent = "lol";
		firstNumber = "";
		secondNumber = "";
		operation = "";
	} else {
		firstNumber /= secondNumber;
		operation = ""
		secondNumber = "";
		displayResult();
	}
}
