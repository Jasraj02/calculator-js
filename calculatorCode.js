
// could add pictures to the buttons to make them look nicer 

// number of decimal places to round to
var dp = 3

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
    else if (symbol === "÷") {
        return divide(numb1,numb2)
    }
    else if (symbol === "^") {
        return exponential(numb1,numb2)  
    }
    }

// pass all user inputs into an array which is displayed on the screen 
var displayText = [];

function displayUpdate() {
    const calculatorDisplay = document.querySelector("#display")
    calculatorDisplay.textContent = displayText.join("")
}

// interactivity for the number buttons
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

// interactivity for operator buttons
const operatorButtons = document.querySelectorAll(".operator-button")

// toggle following to true when an operator has been inputted
var selectedOperator = false;

operatorButtons.forEach(
    (button) => {
        button.addEventListener("click", () => {
            if (!selectedOperator){
                displayText.push(button.textContent)
                displayUpdate()
                selectedOperator = true
            }
        }         
    )
    }
)

// interactivity to make clear button clear the display
const clearButton = document.querySelector("#clear") 
clearButton.addEventListener("click", () => {
    displayText = []
    displayUpdate()
    selectedOperator = false
})

// interactivity to make backspace button remove the single last character 
const backspaceButton = document.querySelector("#backspace") 
backspaceButton.addEventListener("click", () => {
    const removed = displayText.pop()
    const operatorArray = ["+","-","x","÷","^"]
    displayUpdate()
    if (operatorArray.includes(removed)) {
        selectedOperator = false
    }
})


function isString(input){
    // edge case for when the string is a decimal which should be parsed as a number
    if (input === ".") {
        return false
    }
    return typeof input === "string"
}

// function takes the displayText array and converts it to a numeric result
function finalParser(array) {
    var firstNumberArray = [];
    var secondNumberArray = [];

    const operatorPresent = array.filter(isString)
    const operatorPosition = array.indexOf(operatorPresent[0])

    var i=0;
    while (i < operatorPosition) {
        firstNumberArray.push(array[i])
        i++
    }
    i++
    while (i < array.length){
        secondNumberArray.push(array[i])
        i++
    }

    if (decimalCheck(firstNumberArray) > 1 || decimalCheck(secondNumberArray) > 1 ) {
        alert("Invalid Decimal Input")
        displayText = []
        displayUpdate()
        selectedOperator = false
        return 0
    }
    else {
        const firstNumber = arrayToNumber(firstNumberArray)
        const secondNumber = arrayToNumber(secondNumberArray)
        return Number(operate(firstNumber,secondNumber,operatorPresent[0]).toFixed(dp))
    }

    
}

function numberToString(number) {
    return number.toString()
}

// takes an array of numbers and combines them into a single number
function arrayToNumber(initialArray) {

        const stringArray = initialArray.map(numberToString)
        const finalNumber = stringArray.reduce( (total,current) => {return total+current},"")

        return Number(finalNumber)
    
}

function decimalCheck (array) {
    return array.filter( arrayItem => arrayItem == ".").length 
}

// takes a number and splits each digit into an array
function numberToArray(number) {
    const numberAsString = number.toString()
    return numberAsString.split("").map(stringToNumber)
}

// convert string to numbers, with exception handling for decimal points
function stringToNumber(string) {
    if (string === ".") {
        return "."
    }
    else {
        return Number(string)
    }
}

// interactivity for equals button 
const equalsButton = document.querySelector("#equals") 
equalsButton.addEventListener("click", () => {
    const answer = finalParser(displayText)
    displayText = numberToArray(answer)
    displayUpdate()
    selectedOperator = false
})


// interactivity for the decimal places dropdown menu
const decimalDropdown = document.querySelector("#decimal-places")

decimalDropdown.addEventListener("mouseleave", () => {
    var decimalPlace = decimalDropdown.value
    dp = decimalPlace
})


// make decimal button interactive 
const decimalButton = document.querySelector("#decimal")
decimalButton.addEventListener("click", () => {
        displayText.push(".")
        displayUpdate()
})


// TO DO:
// update styling 