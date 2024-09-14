
// functions needed to add, subtract, divide and multiple 

// Next steps
// add event listeners to all the buttons 

// could add pictures to the buttons to make them look nicer 



// all operation functions 

function add(a,b) {
    return a+b
}

function subtract(a,b) {
    return a-b
}

function multiply(a,b) {
    return a*b
}

function divide(a,b) {
    return a/b
}

function exponential(a,b) {
    return a**b
}

// operate function which takes two variables and a operator

function operate(numb1,numb2,symbol) {
    if (symbol === "+") {
        return add(numb1,numb2)
    }
    else if (symbol === "-") {
        return subtract(numb1,numb2)
    }
    else if (symbol === "x") {
        return multiply(numb1,numb2)
    }
    else if (symbol === "/") {
        return divide(numb1,numb2)
    }
    else if (symbol === "^") {
        return exponential(numb1,numb2)  
    }
    }




// pass all user inputs into an array which is displayed on the screen 
const displayText = [];

function displayUpdate() {
    const calculatorDisplay = document.querySelector("#display")
    calculatorDisplay.textContent = displayText.join("")
}

// event listeners for numbers and some operators can be done based on the text content of the buttons

// take number button content 
// convert to integer/number data type 
// push this into the previous number variable 
const numberButtons = document.querySelectorAll(".number-button")

numberButtons.forEach(
    (button) => {
        button.addEventListener("click", () => {
            displayText.push(Number(button.textContent))
            displayUpdate()
        }
    )
    }
)

// create a final parser which reads the data in the displayText array 
// need to add decimal support




