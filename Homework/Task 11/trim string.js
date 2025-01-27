function trimString(str, maxLength) {
    if (str.length > maxLength) {
        str = str.slice(0, maxLength + 1)
        str = str.slice(0, str.lastIndexOf(" "))
        if (",.!?:;".includes(str.at(-1))) {
            str = str.slice(0, str.length - 1)
        }
        str += "…"
    }
    return str
}