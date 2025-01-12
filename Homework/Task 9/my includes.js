function myIncludes(arr, item, from = 0) {
    console.log(arr.includes(item, from))

    if (from < 0) {
        if (from < arr.length * -1) from = arr.length * -1
        from = arr.length + from
    }

    for (let i = from; i < arr.length; i++) {
        if (arr.at(i) === item) {
            return true
        }
    }
    return false
}