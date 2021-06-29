    
    
function operate() {
    // if //click plus sign

    // if //click minus sign

   // if click x sign

   // if click % sign
}
    function add(a, b) {
        return (a + b)
    }

    function subtract(a, b) {
    return (a - b)
    }

    function multiply(a, b) {
        return (a * b)
    }

    function divide(a, b) {
        return (a / b)
    }

let prevNum
let displayValue
let currentNum

const display = document.querySelector('.display')
display.innerText = 0 //sets default to zero

document.getElementById('7').addEventListener("click", function() {
    currentNum = '7'

    // sets a value for previous number under the hood if first number inputted
    if (typeof(prevNum) === "undefined") {
        return prevNum = 0
    }   
    displayDigits = prevNum + currentNum
    display.innerText = displayDigits
    prevNum = displayDigits //saves the current display as a variable
    return prevNum
});

document.getElementById('8').addEventListener("click", function() {
    currentNum = '8'

    // sets a value for previous number under the hood if first number inputted
    if (typeof(prevNum) === "undefined") {
        return prevNum = 0
    }   
    displayDigits = prevNum + currentNum
    display.innerText = displayDigits
    prevNum = displayDigits //saves the current display as a variable
    return prevNum
});


 document.getElementById('AC').addEventListener("click", function() {
    display.innerText = 0;
    prevNum = 0;
    displayDigits = 0;
    currentNum = 0;
 });

// number inputs for display

