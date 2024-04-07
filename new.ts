const number1 = document.getElementById("num1") as HTMLInputElement
const number2 = document.getElementById("num2") as HTMLInputElement


const add = document.getElementById("Add") as HTMLButtonElement
const sub = document.getElementById("Sub") as HTMLButtonElement
const mul = document.getElementById("Multi") as HTMLButtonElement
const divi = document.getElementById("Division") as HTMLButtonElement

const printresult = document.getElementById("result") as HTMLOutputElement
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
    printresult.textContent = result.toString()
}
sub.addEventListener("click", subtractnumber)
function multinumber() {
    let a = parseFloat(number1.value)
    let b = parseFloat(number2.value);
    let result = a * b
    printresult.textContent = result.toString()
}
mul.addEventListener("click", multinumber)
function divinumber() {
    let a = parseFloat(number1.value)
    let b = parseFloat(number2.value)
    let result = a / b;
    printresult.textContent = result.toString()
}
divi.addEventListener("click", divinumber)


