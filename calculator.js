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

btn0.addEventListener("click", () => {numberInput.push(0)});
btn1.addEventListener("click", () => {numberInput.push(1)});
btn2.addEventListener("click", () => {numberInput.push(2)});
btn3.addEventListener("click", () => {numberInput.push(3)});
btn4.addEventListener("click", () => {numberInput.push(4)});
btn5.addEventListener("click", () => {numberInput.push(5)});
btn6.addEventListener("click", () => {numberInput.push(6)});
btn7.addEventListener("click", () => {numberInput.push(7)});
btn8.addEventListener("click", () => {numberInput.push(8)});
btn9.addEventListener("click", () => {numberInput.push(9)});

btnPlus.addEventListener("click", () => {assignOperation("+")});
btnMinus.addEventListener("click", () => {assignOperation("-")});
btnTimes.addEventListener("click", () => {assignOperation("*")});
btnDivide.addEventListener("click", () => {assignOperation("/")});
btnEquals.addEventListener("click", () => {performCalc()});

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
	}
}

function performAddition() {
	firstNumber += secondNumber;
	secondNumber = null;
	console.log(firstNumber);
}

function performSubtraction() {
	firstNumber -= secondNumber;
	secondNumber = null;
	console.log(firstNumber);
}

function performMultiplication() {
	firstNumber *= secondNumber;
	secondNumber = null;
	console.log(firstNumber);
}

function performDivision() {
	firstNumber /= secondNumber;
	secondNumber = null;
	console.log(firstNumber);
}
