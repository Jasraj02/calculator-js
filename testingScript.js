


function isString(input){
    return typeof input === "string"
}

function numberToString(number) {
    return number.toString()
}

function arrayToNumber(initialArray) {
    const stringArray = initialArray.map(numberToString)
    const finalNumber = stringArray.reduce( (total,current) => {
        return total+current
    },"")
    return Number(finalNumber)
}



const arrayToTest = [1,0,1,2,5,4]

console.log(arrayToNumber(arrayToTest))




