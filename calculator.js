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
