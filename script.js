    
    
function operate() {

if (opId == 'plus')  {
    add (a, b)
    
} else if (opId == 'minus') {
    subtract(a, b)
}

function add(a, b) {
    final = a + b;
    display.innerText = final; 
    }

    function subtract(a, b) {
    final = a - b;
    display.innerText = final; 
    }

    function multiply(a, b) {
        return (a * b)
    }

    function divide(a, b) {
        return (a / b)
    }
}
   



// button inputs
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


document.getElementById('9').addEventListener("click", function() {
    currentNum = '9'

    // sets a value for previous number under the hood if first number inputted
    if (typeof(prevNum) === "undefined") {
        return prevNum = 0
    }   
    displayDigits = prevNum + currentNum
    display.innerText = displayDigits
    prevNum = displayDigits //saves the current display as a variable
    return prevNum
});


document.getElementById('4').addEventListener("click", function() {
    currentNum = '4'

    // sets a value for previous number under the hood if first number inputted
    if (typeof(prevNum) === "undefined") {
        return prevNum = 0
    }   
    displayDigits = prevNum + currentNum
    display.innerText = displayDigits
    prevNum = displayDigits //saves the current display as a variable
    return prevNum
});


document.getElementById('5').addEventListener("click", function() {
    currentNum = '5'

    // sets a value for previous number under the hood if first number inputted
    if (typeof(prevNum) === "undefined") {
        return prevNum = 0
    }   
    displayDigits = prevNum + currentNum
    display.innerText = displayDigits
    prevNum = displayDigits //saves the current display as a variable
    return prevNum
});


document.getElementById('6').addEventListener("click", function() {
    currentNum = '6'

    // sets a value for previous number under the hood if first number inputted
    if (typeof(prevNum) === "undefined") {
        return prevNum = 0
    }   
    displayDigits = prevNum + currentNum
    display.innerText = displayDigits
    prevNum = displayDigits //saves the current display as a variable
    return prevNum
});


document.getElementById('1').addEventListener("click", function() {
    currentNum = '1'

    // sets a value for previous number under the hood if first number inputted
    if (typeof(prevNum) === "undefined") {
        return prevNum = 0
    }   
    displayDigits = prevNum + currentNum
    display.innerText = displayDigits
    prevNum = displayDigits //saves the current display as a variable
    return prevNum
});


document.getElementById('2').addEventListener("click", function() {
    currentNum = '2'

    // sets a value for previous number under the hood if first number inputted
    if (typeof(prevNum) === "undefined") {
        return prevNum = 0
    }   
    displayDigits = prevNum + currentNum
    display.innerText = displayDigits
    prevNum = displayDigits //saves the current display as a variable
    return prevNum
});


document.getElementById('3').addEventListener("click", function() {
    currentNum = '3'

    // sets a value for previous number under the hood if first number inputted
    if (typeof(prevNum) === "undefined") {
        return prevNum = 0
    }   
    displayDigits = prevNum + currentNum
    display.innerText = displayDigits
    prevNum = displayDigits //saves the current display as a variable
    return prevNum
});


document.getElementById('0').addEventListener("click", function() {
    currentNum = '0'

    // sets a value for previous number under the hood if first number inputted
    if (typeof(prevNum) === "undefined") {
        return prevNum = 0
    }   
    displayDigits = prevNum + currentNum
    display.innerText = displayDigits
    prevNum = displayDigits //saves the current display as a variable
    return prevNum
});


//sum button
document.getElementById('plus').addEventListener('click', function () {
    a = prevNum //saves current display to variable 'a'
    prevNum = 0;
    displayDigits = 0;
    currentNum = 0;
    display.innerText = 0;

    a = Number(a)

    opId = "plus"
    
});

// EQUALS
document.getElementById('result').addEventListener('click', function() {
    b = prevNum;
    b = Number(b)
    
    operate()

});




// CLEAR BUTTON
 document.getElementById('AC').addEventListener("click", function() {
    display.innerText = 0;
    prevNum = 0;
    displayDigits = 0;
    currentNum = 0;
 });



