const number = Math.ceil(Math.random() * 100);

console.log(`Компьютер 1: загадал число ${number}\n`);

let range1 = 50, range2 = 50

for (let i = 1; i < 8; i++) {

    console.log(`Попытка ${i}`)
    console.log(`Компьютер 2: пробую число ${range1}`)

    range2 = Math.abs(Math.ceil(range2 / 2))

    if(number > range1){
        console.log("Больше\n")
    }
    else if(number < range1){
        console.log("Меньше\n")
        range2 *= -1
    }
    else {
        console.log("Число угадано")
        break
    }
    range1 = range1 + range2
}