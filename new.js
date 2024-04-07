"use strict";
const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
const add = document.getElementById("Add");
const sub = document.getElementById("Sub");
const mul = document.getElementById("Multi");
const divi = document.getElementById("Division");
const printresult = document.getElementById("result");
function addnumber() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a + b;
    printresult.textContent = result.toString();
}
add.addEventListener("click", addnumber);
function subtractnumber() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a - b;
    printresult.textContent = result.toString();
}
sub.addEventListener("click", subtractnumber);
function multinumber() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a * b;
    printresult.textContent = result.toString();
}
mul.addEventListener("click", multinumber);
function divinumber() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a / b;
    printresult.textContent = result.toString();
}
divi.addEventListener("click", divinumber);
