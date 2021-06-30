function roundToTwo(final) {    
    final = +(Math.round(final + "e+2")  + "e-2");
    return final
}

function checkLength(num) {
    stringFinal = num.toString();
    length = stringFinal.length

    if (length > 8) {
        final = "Error"
        return final

    } else if (length <= 8) {
        return final
    }
    
}
    
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
    final = roundToTwo(final);
    checkLength(final);

    display.innerText = final; 
    }

    function subtract(a, b) {
    final = a - b;
    final = roundToTwo(final);
    checkLength(final);

    display.innerText = final; 
    }

    function multiply(a, b) {
        final = a * b
        final = roundToTwo(final);
        checkLength(final);

        display.innerText = final;
    }

    function divide(a, b) {
        if (b == 0) {
        final = 'Nope!'
        display.innerText = final;

        } else {
        final = a / b
        final = roundToTwo(final);
        checkLength(final);

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

// check to see if a is set

// if a is set
    if (typeof(a) === 'number') {
        b = prevNum; // if a already exists set the previous number as b
        prevNum = ''; // reset prevNum
        displayDigits = 0; // reset display to 0??
        currentNum = 0; // reset currentNum to 0
        display.innerText = 0;

        b = Number(b) // ensures b is a number  

// if a is NOT set
    } else if (typeof(a) === "undefined") {
        a = prevNum //saves current display to variable 'a'
        prevNum = '';
        displayDigits = 0;
        currentNum = 0;
        display.innerText = 0;

        a = Number(a) // ensures a is a number
        opId = "plus" // assigns an operation id
        decCheck = 'off'
        
    }

    // if b is set
    if (typeof(b) === 'number') {
        operate() // operates with prior set operation ID
        opId = 'plus' // sets current operation ID
        a = Number(final); // re-sets a as the final result after operation
        decCheck = 'off'
    }
    
});

//minus button
document.getElementById('subtract').addEventListener('click', function () {
// check to see if a is set

// if a is set
if (typeof(a) === 'number') {
    b = prevNum; // if a already exists set the previous number as b
    prevNum = ''; // reset prevNum
    displayDigits = 0; // reset display to 0??
    currentNum = 0; // reset currentNum to 0
    display.innerText = 0;

    b = Number(b) // ensures b is a number 
    // opId = "plus" // assigns an operation id

    // operate()

    

// if a is NOT set
} else if (typeof(a) === "undefined") {
    a = prevNum //saves current display to variable 'a'
    prevNum = '';
    displayDigits = 0;
    currentNum = 0;
    display.innerText = 0;

    a = Number(a) // ensures a is a number
    opId = "minus" // assigns an operation id
    
}

// if b is set
if (typeof(b) === 'number') {
    operate() // operates with prior set operation ID
    opId = 'minus' // sets current operation ID
    a = Number(final); // re-sets a as the final result after operation
}

});

// multiply button
document.getElementById('times').addEventListener('click', function () {
// check to see if a is set

// if a is set
if (typeof(a) === 'number') {
    b = prevNum; // if a already exists set the previous number as b
    prevNum = ''; // reset prevNum
    displayDigits = 0; // reset display to 0??
    currentNum = 0; // reset currentNum to 0
    display.innerText = 0;

    b = Number(b) // ensures b is a number 
    // opId = "plus" // assigns an operation id

    // operate()

    

// if a is NOT set
} else if (typeof(a) === "undefined") {
    a = prevNum //saves current display to variable 'a'
    prevNum = '';
    displayDigits = 0;
    currentNum = 0;
    display.innerText = 0;

    a = Number(a) // ensures a is a number
    opId = "multiply" // assigns an operation id
    
}

// if b is set
if (typeof(b) === 'number') {
    operate() // operates with prior set operation ID
    opId = 'multiply' // sets current operation ID
    a = Number(final); // re-sets a as the final result after operation
}

});

// divide button
document.getElementById('divide').addEventListener('click', function () {
// check to see if a is set

// if a is set
if (typeof(a) === 'number') {
    b = prevNum; // if a already exists set the previous number as b
    prevNum = ''; // reset prevNum
    displayDigits = 0; // reset display to 0??
    currentNum = 0; // reset currentNum to 0
    display.innerText = 0;

    b = Number(b) // ensures b is a number 
    
    

// if a is NOT set
} else if (typeof(a) === "undefined") {
    a = prevNum //saves current display to variable 'a'
    prevNum = '';
    displayDigits = 0;
    currentNum = 0;
    display.innerText = 0;

    a = Number(a) // ensures a is a number
    opId = "divide" // assigns an operation id
    
}

// if b is set
if (typeof(b) === 'number') {
    operate() // operates with prior set operation ID
    opId = 'divide' // sets current operation ID
    a = Number(final); // re-sets a as the final result after operation
}

});


// EQUALS
document.getElementById('result').addEventListener('click', function() {


    b = prevNum;
    b = Number(b)
    
    operate()    
    decCheck = 'off'



// final = prevNum

});

let decCheck

// DECIMAL BUTTON
document.getElementById('decimal').addEventListener('click', function() {
    
    // check if decimal has already been used on current input
    if (decCheck == 'on') {
        document.getElementById('decimal').removeEventListener // disables decimal button if decimal already present
        return
    } else {
        currentNum = '.';
        decCheck = 'on';
    }

    // sets a value for previous number under the hood if first number inputted
    if (typeof(prevNum) === "undefined") {
        return prevNum = ''
    }   
    
    displayDigits = prevNum + currentNum
    display.innerText = displayDigits
    prevNum = displayDigits //saves the current display as a variable
    return prevNum

    
});

// CLEAR BUTTON
 document.getElementById('AC').addEventListener("click", function() {
    display.innerText = 0;
    prevNum = '';

    displayDigits = 0;
    currentNum = 0;
    // opId = '';
    final = 0;

    a = undefined;
    b = undefined;

    decCheck = 'off'
 });


//  REMAINING


//  EXTRA CREDIT: Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. 
// Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. 
// It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)

//  EXTRA CREDIT: Make it look nice! This can be a good portfolio project… but not if it’s UGLY. 
// At least make the operations a different color from the keypad buttons.

//  EXTRA CREDIT: Add a “backspace” button, so the user can undo if they click the wrong number.

//  EXTRA CREDIT: Add keyboard support! (SEE WES BOS DRUMKIT TUTORIAL AGAIN)
