    
    
function operate() {

if (opId == 'plus')  {
    add(a, b)
    
} else if (opId == 'minus') {
    subtract(a, b)

} else if (opId == 'multiply') {
    multiply(a, b)

} else if (opId == 'divide') {
    divide(a, b)
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
        final = a * b
        display.innerText = final;
    }

    function divide(a, b) {
        if (b == 0) {
        final = 'Nope!'
        display.innerText = final;
        } else {
        final = a / b
        display.innerText = final;    
        }
        
    }
}
   


// 
// BUTTON INPUTS
// 

let prevNum
let displayValue
let currentNum

const display = document.querySelector('.display')
display.innerText = 0 //sets the initial display value to zero

document.getElementById('7').addEventListener("click", function() {
    currentNum = '7'

    // sets a value for previous number under the hood if first number inputted
    if (typeof(prevNum) === "undefined") {
        return prevNum = ''
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
        return prevNum = ''
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
        return prevNum = ''
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
        return prevNum = ''
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
        return prevNum = ''
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
        return prevNum = ''
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
        return prevNum = ''
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
        return prevNum = ''
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
        return prevNum = ''
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
        return prevNum = ''
    }   
    displayDigits = prevNum + currentNum
    display.innerText = displayDigits
    prevNum = displayDigits //saves the current display as a variable
    return prevNum
});

// 
// OPERATORS
// 

//sum button
document.getElementById('plus').addEventListener('click', function () {
if (typeof(b) === 'number') {
    operate()
}

    if (typeof(a) === 'number') {
        b = prevNum;
        prevNum = '';
        displayDigits = 0;
        currentNum = 0;
        display.innerText = 0;

        b = Number(b)
        opId = "plus"

        operate()

        a = Number(final);

    } else if (typeof(a) === "undefined") {
        a = prevNum //saves current display to variable 'a'
        prevNum = '';
        displayDigits = 0;
        currentNum = 0;
        display.innerText = 0;

        a = Number(a)
        opId = "plus"
        
    }
    
    
});

//minus button
document.getElementById('subtract').addEventListener('click', function () {
if (typeof(b) === 'number') {
    operate()
}    
    if (typeof(a) === 'number') {
        b = prevNum;
        prevNum = '';
        displayDigits = 0;
        currentNum = 0;
        display.innerText = 0;

        b = Number(b)
        opId = "minus"
        
        operate()

        a = Number(final);

    } else if (typeof(a) === 'undefined'){
        a = prevNum //saves current display to variable 'a'
        prevNum = '';
        displayDigits = 0;
        currentNum = 0;
        display.innerText = 0;

        a = Number(a)
        opId = "minus"
    }
    
    
});

// multiply button
document.getElementById('times').addEventListener('click', function () {
    a = prevNum //saves current display to variable 'a'
    prevNum = '';
    displayDigits = 0;
    currentNum = 0;
    display.innerText = 0;

    a = Number(a)

    opId = "multiply"
    
});

// divide button
document.getElementById('divide').addEventListener('click', function () {
    a = prevNum //saves current display to variable 'a'
    prevNum = '';
    displayDigits = 0;
    currentNum = 0;
    display.innerText = 0;

    a = Number(a)

    opId = "divide"
    
});


// EQUALS
document.getElementById('result').addEventListener('click', function() {
   
    
        b = prevNum;
        b = Number(b)
        
        operate()    
    
    
    

    // final = prevNum

});



// CLEAR BUTTON
 document.getElementById('AC').addEventListener("click", function() {
    display.innerText = 0;
    prevNum = '';
    displayDigits = 0;
    currentNum = 0;
    opId = '';
    final = 0;
    a = 0;
    b= 0;
 });


//  REMAINING


//  Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time.
//   For example, 12 + 7 - 5 * 3 = should yield 42. An example of the behavior we’re looking for would be this student solution. 
//   Your calculator should not evaluate more than a single pair of numbers at a time. 
//   If you enter a number then an operator and another number that calculation should be displayed if your next input is an operator. 
//   The result of the calculation should be used as the first number in your new calculation.

//  You should round answers with long decimals so that they don’t overflow the screen.

//  EXTRA CREDIT: Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. 
// Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. 
// It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)

//  EXTRA CREDIT: Make it look nice! This can be a good portfolio project… but not if it’s UGLY. 
// At least make the operations a different color from the keypad buttons.

//  EXTRA CREDIT: Add a “backspace” button, so the user can undo if they click the wrong number.

//  EXTRA CREDIT: Add keyboard support! (SEE WES BOS DRUMKIT TUTORIAL AGAIN)
