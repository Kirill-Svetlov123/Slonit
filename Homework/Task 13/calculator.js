function simpleCalculate(num1, num2, calculateFunction) {
    return calculateFunction(num1, num2)
}

const additionNumbers = function (num1, num2) {
    return num1 + num2
}

const substractionNumbers = function (num1, num2) {
    return num1 - num2
}

const multiplyNumbers = function (num1, num2) {
    return num1 * num2
}

const divisionNumbers = function (num1, num2) {
    return num1 / num2
}

const operations = {
    addition: additionNumbers,
    substraction: substractionNumbers,
    multiply: multiplyNumbers,
    division: divisionNumbers,
}