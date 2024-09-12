
// functions needed to add, subtract, divide and multiple 

// Next steps
// make the operate function (which takes two numbers and a operator and returns appropriate result)
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
