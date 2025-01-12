function mySlice(arr, start = 0, end = arr.length) {
    console.log(arr.slice(start))
    resultArr = []

    if (start < 0) {
        if (start < arr.length * -1) start = arr.length * -1
        start = arr.length + start
    }

    if (end < 0) end = arr.length + end
    else if (end >= arr.length) end = arr.length
    
    for (let i = start; i < end; i++) {
        resultArr.push(arr.at(i))
    }
    
    return resultArr
}