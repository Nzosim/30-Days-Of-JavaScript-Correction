//1
// i don't like maths

//2
// same

//3
const printArray = (array) => {
    for(let i = 0 ; i < array.length ; i++){
        console.log(array[i])
    }
}
printArray([1, 2, 3, 4, 5]) // 1 2 3 4 5

//4
const showDateTime = () => {
    const date = new Date()
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
}
console.log(showDateTime()) // 4/3/2022 20:46

//5
const swapValues = (a, b) => {
    return [b, a]
}
console.log(swapValues(1,2)) // [ 2, 1 ]

//6
const reverseArray = (array) => {
    let newArray = []
    for(let i = array.length - 1 ; i >= 0 ; i--){
        newArray.push(array[i])
    }
    return newArray
}
console.log(reverseArray([1, 2, 3, 4, 5])) // [ 5, 4, 3, 2, 1 ]

//7
const capitalizeArray = (array) => {
    let newArray = []
    for(let i = 0 ; i < array.length ; i++){
        newArray.push(array[i].toUpperCase())
    }
    return newArray
}
console.log(capitalizeArray(['a', 'b', 'c'])) // [ 'A', 'B', 'C' ]

//8
const addItem = (array, item) => {
    array.push(item)
    return array
}
console.log(addItem([1, 2, 3], 4)) // [ 1, 2, 3, 4 ]

//9
const removeItem = (array, index) => {
    array.splice(index, 1)
    return array
}
console.log(removeItem([1, 2, 3, 4, 5], 2)) // [ 1, 2, 4, 5 ]

//10
const sumOfNumbers = (array) => {
    let sum = 0
    for(let i = 0 ; i < array.length ; i++){
        sum += array[i]
    }
    return sum
}
console.log(sumOfNumbers([1, 2, 3, 4, 5])) // 15

//11
const sumOfOdds = (array) => {
    let sum = 0
    for(let i = 0 ; i < array.length ; i++){
        if(array[i] % 2 !== 0){
            sum += array[i]
        }
    }
    return sum
}
console.log(sumOfOdds([1, 2, 3, 4, 5])) // 9

//12
const sumOfEvens = (array) => {
    let sum = 0
    for(let i = 0 ; i < array.length ; i++){
        if(array[i] % 2 === 0){
            sum += array[i]
        }
    }
    return sum
}
console.log(sumOfEvens([1, 2, 3, 4, 5])) // 6

//13
const evensAndOdds = number => {
    let evens = 0, odds = 0
    for(let i = 0 ; i < number ; i++){
        if(i % 2 === 0){
            evens++
        }else{
            odds++
        }
    }
    return `The number of odds are ${odds}\nThe number of evens are ${evens}`
}
console.log(evensAndOdds(80)) 
// The number of odds are 40
// The number of evens are 40

//14
const sum = (...numbers) => {
    let sum = 0
    for(let i = 0 ; i < numbers.length ; i++){
        sum += numbers[i]
    }
    return sum
}
console.log(sum(1, 2, 3, 4, 5)) // 15

//15
const randomUserIp = () => {
    const ip = []
    for(let i = 0 ; i < 4 ; i++){
        ip.push(Math.floor(Math.random() * 256))
    }
    return ip.join('.')
}
console.log(randomUserIp()) //214.168.198.104

//16
const randomMacAddress = () => {
    const mac = []
    for(let i = 0 ; i < 6 ; i++){
        mac.push(Math.floor(Math.random() * 256))
    }
    return mac.join(':')
}
console.log(randomMacAddress()) // 198:110:202:96:109:110

//17
const randomHexaNumberGenerator = () => {
    const hexa = ['#']
    for(let i = 0 ; i < 6 ; i++){
        hexa.push(Math.floor(Math.random() * 16).toString(16))
    }
    return hexa.join('')
}
console.log(randomHexaNumberGenerator()) // #970b20

//18
const userIdGenerator = () => { 
    let id = [], letter = 'abcdefghijklmnopqrstuvwxyz', number = '0123456789'
    while(id.length < 7){
        if(Math.floor(Math.random() * 2) == 0){
            id.push(letter[Math.floor(Math.random() * letter.length)])
        }else{
            id.push(number[Math.floor(Math.random() * number.length)])
        }    
    }
    return id.join('')
}
console.log(userIdGenerator()) // 40uwv2y