


function isString(input){
    return typeof input === "string"
}

function numberToString(number) {
    return number.toString()
}

function arrayToNumber(initialArray) {
    const stringArray = initialArray.map(numberToString)
    console.log(stringArray)
    const finalNumber = stringArray.reduce( (total,current) => {
        return total+current
    },"")
    console.log(finalNumber)
    return Number(finalNumber)
}



const arrayToTest = [1,0,1,2,5,4]

console.log(arrayToNumber(arrayToTest))




