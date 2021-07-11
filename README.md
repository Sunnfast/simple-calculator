# Virtual Calculator


## Table of contents

- [Overview](#overview)
  - [Functionality](#functionality)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview
This is a virtual calculator that functions using JavaScript. The challenge was that the calculator must use number buttons (i.e. no typing to input the numbers) and needed to be coded without using the Calc() or Eval() functions. This project has helped me improve:  DOM manipulation skills, handling multiple variables, and using Event Listeners.

The basic design for this calculator was originally inspired by the calculator I used in primary school, TI-30XIIS. Due to the nature of how real physical calculators and number pads, I elected to use CSS Grid for all of the buttons. 

However, I found that the colors were a bit too dull for my tastes and based my palatte off of the color teal instead. The 'branding' of the design was based on Tolkien's The Lord of the Rings universe.


### Functionality

Users should be able to:

- Add, subtract, divide, and multiply pairs of numbers
- Receive an error message if they attempt to divide by zero
- Use negative numbers and decimals
- Utilize left to right calculation like a physical calculator would allow (i.e. 12 + 7 - 5 * 3 = 42)

### Screenshot

As of June 30, 2021.

![Screenshot of Virtual Calculator](/images/calculator-preview.png)




## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid


### What I learned

I found that my light background in video game programming had some strong influence in my ability to juggle multiple variables. This juggling act had proven to be invaluable while I was developing the main features of this project (namely: left to right calculation). When I re-framed the project as using variables like setting ['(event) flags'](https://askagamedev.tumblr.com/post/646646193546526720/what-are-flags-in-games), a few things came together more easily. 

For example, when designing the decimal button I needed to be able to disable the decimal button until the user began inputting a second number. In order to achieve this I set a specific variable just to track whether a decimal point was already on the screen or not `decCheck`. I utilized this strategy again to fix a bug (where the equals button evaluated the expression before the second number was inputted) that had been plaguing the equals button.

```
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
```
I also utilized a similar use of variables for my different operator functions.

```
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
```

### Continued development

In the future, I would like to add keyboard functionality (regular keys and number pad) to make computation easier and faster.


### Useful resources

- [The Odin Project Assignment Prompt](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/calculator), provided a general overview of what I should prioritize first in my development and common bugs to be wary of. It also provided extra features that I could add to challenge myself (decimal, backspace, etc).


## Author

- Website - [Simone Christen](https://sunnfast.github.io/)
- Github - [@Sunnfast](https://www.github.com/Sunnfast)
- [LinkedIn](https://www.linkedin.com/in/simonechristen/)



## Acknowledgments

Thank you to The Odin Project discord group and [Erica](https://github.com/eching11) for helping me troubleshoot at various stages of the project.





