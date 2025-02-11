function myFilter(array, callback) {
    let newArray = []
    for (let el of array) {
        if(callback(el)) {
            newArray.push(el)
        }
    }
    return newArray
}