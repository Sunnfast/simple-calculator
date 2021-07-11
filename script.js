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
    
    if (typeof(a) === "undefined") {
        twoNumCheck = "no";
    } else {
        twoNumCheck = "yes";
    }
    return prevNum, twoNumCheck;
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
    
    if (typeof(a) === "undefined") {
        twoNumCheck = "no";
    } else {
        twoNumCheck = "yes";
    }
    return prevNum, twoNumCheck;
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
    
    if (typeof(a) === "undefined") {
        twoNumCheck = "no";
    } else {
        twoNumCheck = "yes";
    }
    return prevNum, twoNumCheck;
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
    
    if (typeof(a) === "undefined") {
        twoNumCheck = "no";
    } else {
        twoNumCheck = "yes";
    }
    return prevNum, twoNumCheck;
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
    
    if (typeof(a) === "undefined") {
        twoNumCheck = "no";
    } else {
        twoNumCheck = "yes";
    }
    return prevNum, twoNumCheck;
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
    
    if (typeof(a) === "undefined") {
        twoNumCheck = "no";
    } else {
        twoNumCheck = "yes";
    }
    return prevNum, twoNumCheck;
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
    
    if (typeof(a) === "undefined") {
        twoNumCheck = "no";
    } else {
        twoNumCheck = "yes";
    }
    return prevNum, twoNumCheck;
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
    
    if (typeof(a) === "undefined") {
        twoNumCheck = "no";
    } else {
        twoNumCheck = "yes";
    }
    return prevNum, twoNumCheck;
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

    if (typeof(a) === "undefined") {
        twoNumCheck = "no";
    } else {
        twoNumCheck = "yes";
    }
    return prevNum, twoNumCheck;
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

    if (typeof(a) === "undefined") {
        twoNumCheck = "no";
    } else {
        twoNumCheck = "yes";
    }
    return prevNum, twoNumCheck;
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

// if a is NOT set
} else if (typeof(a) === "undefined") {
    a = prevNum //saves current display to variable 'a'
    prevNum = '';
    displayDigits = 0;
    currentNum = 0;
    display.innerText = 0;

    a = Number(a) // ensures a is a number
    opId = "minus" // assigns an operation id
    decCheck = 'off'
    
}

// if b is set
if (typeof(b) === 'number') {
    operate() // operates with prior set operation ID
    opId = 'minus' // sets current operation ID
    a = Number(final); // re-sets a as the final result after operation
    decCheck = 'off'
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

// if a is NOT set
} else if (typeof(a) === "undefined") {
    a = prevNum //saves current display to variable 'a'
    prevNum = '';
    displayDigits = 0;
    currentNum = 0;
    display.innerText = 0;

    a = Number(a) // ensures a is a number
    opId = "multiply" // assigns an operation id
    decCheck = 'off'
}

// if b is set
if (typeof(b) === 'number') {
    operate() // operates with prior set operation ID
    opId = 'multiply' // sets current operation ID
    a = Number(final); // re-sets a as the final result after operation
    decCheck = 'off'
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
    decCheck = 'off'
}

// if b is set
if (typeof(b) === 'number') {
    operate() // operates with prior set operation ID
    opId = 'divide' // sets current operation ID
    a = Number(final); // re-sets a as the final result after operation
    decCheck = 'off'
}

});

// have the equals sign not work until two numbers are inputted

// EQUALS
document.getElementById('result').addEventListener('click', function() {
   if (twoNumCheck === "no") {
       return
   } else {
    b = prevNum;
    b = Number(b);    
    operate();    
    decCheck = 'off';
   }
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


// NEGATIVE BUTTON
document.getElementById('negative').addEventListener("click", function() {
   
    displayDigits = -(displayDigits)
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
    final = 0;

    a = undefined;
    b = undefined;

    decCheck = 'off'
 });





 //test script for keydown


//  document.addEventListener('keydown', function(e) {
//      if (e.key === 1) {
//         currentNum = '1'

//         // sets a value for previous number under the hood if first number inputted
//         if (typeof(prevNum) === "undefined") {
//             return prevNum = ''
//         }   
//         displayDigits = prevNum + currentNum
//         display.innerText = displayDigits
//         prevNum = displayDigits //saves the current display as a variable
//         return prevNum
//      }
//  });

//  window.addEventListener('keydown', function(e) {
//     console.log(e.keyCode)
//  });

