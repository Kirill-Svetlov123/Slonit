function myIndexOf(arr, item, from = 0) {
    if (from < 0) {
        if (from < arr.length * -1) from = arr.length * -1
        from = arr.length + from
    }

    for (let i = from; i < arr.length; i++) {
        if (arr.at(i) === item) {
            return i
        }
    }
    return -1
}