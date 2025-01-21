function findSumOfNumericProperties(obj) {
    let sum = 0
    for (let prop in obj) {
        if (typeof(obj[prop]) == 'number') {  sum++  }
    }
    return sum
}