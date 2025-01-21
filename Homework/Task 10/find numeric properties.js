function findNumericProperties(obj) {
    let properties = []
    for (let prop in obj) {
        if (typeof(obj[prop]) == 'number') {  properties.push([prop, obj[prop]])  }
    }
    properties.sort((a, b) => {
        if (a[1] > b[1]) return -1;
        if (a[1] == b[1]) return 0;
        if (a[1] < b[1]) return 1;
    })
    return properties.map(el => el = el[0])
}