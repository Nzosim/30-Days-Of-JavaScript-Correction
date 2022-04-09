// //1
// const userIdGeneratedByUser = () => {
//     let lengthID = parseInt(prompt('Enter the length of the ID', 'number goes here'))
//     let nbrID = parseInt(prompt('Enter the number of IDs', 'number goes here'))
//     let id = "", letter = 'abcdefghijklmnopqrstuvwxyz', number = '0123456789'
//     for(let i = 0; i < nbrID; i++){
//         for(let i = 0; i < lengthID; i++){
//             if(Math.floor(Math.random() * 2) == 0){
//                 id+=letter[Math.floor(Math.random() * letter.length)]
//             }else{
//                 id+=number[Math.floor(Math.random() * number.length)]
//             } 
//         }
//         id +="\n"
//     }
//     return id
// }
// console.log(userIdGeneratedByUser())

//2
const rgbColorGenerator = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}
console.log(rgbColorGenerator()) // rgb(41, 34, 240)

//3
const arrayOfHexaColors = () => {
    let hexa = [], letter2 = 'abcdef', number2 = '0123456789'
    for(let j = 0 ; j < 5 ; j++){
        let id ='#'
        for(let i = 0 ; i < 5 ; i++){
            if(Math.floor(Math.random() * 2) == 0){
                id += letter2[Math.floor(Math.random() * letter2.length)]
            }else{
                id += number2[Math.floor(Math.random() * number2.length)]
            }
        }
        hexa.push(id)
    }   
    return hexa 
}
console.log(arrayOfHexaColors()) // [ '#d591d', '#c7acc', '#1f21d', '#cb9c5', '#ffd1e' ]

//4
const arrayOfRgbColors = () => {
    let rgb = []
    for(let j = 0 ; j < 5 ; j++){
        rgb.push(`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`)
    }   
    return rgb 
}
console.log(arrayOfRgbColors()) // [ 'rgb(41, 34, 240)', 'rgb(41, 34, 240)', 'rgb(41, 34, 240)', 'rgb(41, 34, 240)', 'rgb(41, 34, 240)' ]

//5
const hexaToRgb = (hexa) => {
    const array = hexa.split('')
    array.shift()
    return `rgb(${parseInt(array[0] + array[1], 16)}, ${parseInt(array[2] + array[3], 16)}, ${parseInt(array[4] + array[5], 16)})`
}
console.log(hexaToRgb("#FF00EC")) // rgb(255, 0, 236)

//6
const rgbToHexa = (rgb) => {
    const array = rgb.split('')
    for(let i = 0 ; i < 4 ; i++) array.shift()
    array.pop()
    let rgbColor = ['', '', ''], j = 0
    for(let i = 0 ; i < 3 ; i++){
        while(array[j] != ',' && array[j] != undefined){
            rgbColor[i] += array[j]
            j++
        }
        j++
    }
    let red = parseInt(rgbColor[0]).toString(16)
    let green = parseInt(rgbColor[1]).toString(16)
    let blue = parseInt(rgbColor[2]).toString(16)
    return (`#${red.length == 1 ? '0' + red : red}${green.length == 1 ? '0' + green : green}${blue.length == 1 ? '0' + blue : blue}`).toUpperCase()
}
console.log(rgbToHexa("rgb(255, 0, 236)")) // #FF00EC

//7
const generateColors = (type,number) => {
    let colors = []
    for(let i = 0 ; i < number ; i++){
        if(type == 'rgb'){
            colors.push(`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`)
        }else if(type == 'hexa'){
            colors.push(`#${Math.floor(Math.random() * 16777215).toString(16).toUpperCase()}`)
        }
    }
    return colors
}
console.log(generateColors('rgb', 5)) // [ 'rgb(41, 34, 240)', 'rgb(41, 34, 240)', 'rgb(41, 34, 240)', 'rgb(41, 34, 240)', 'rgb(41, 34, 240)' ]
console.log(generateColors('hexa', 5)) // [ '#D591D', '#C7ACD', '#1F21D', '#CB9C5', '#FFD1E' ]

//8
const shuffleArray = (array) => {
    let shuffle = []
    while(shuffle.length < array.length){
        let val = array[Math.floor(Math.random() * array.length)]
        if(shuffle.indexOf(val) == -1) shuffle.push(val)
    }
    return shuffle
}
console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // [ 9, 10, 8, 7, 6, 5, 4, 3, 2, 1 ]

//9
const factorial = (n) => {
    if(n == 0) return 1
    return n * factorial(n - 1)
}
console.log(factorial(5)) // 120

//10

const isEmpty = (obj) => {
    return obj.length == 0
}
console.log(isEmpty([])) // true
console.log(isEmpty([1, 2, 3])) // false

//11
const sum = (...args) => {
    let sum = 0
    for(let i = 0 ; i < args.length ; i++){
        sum += args[i]
    }
    return sum
}
console.log(sum(1, 2, 3, 4, 5)) // 15

//12
const sumOfArrayItems = (array) => {
    let sum = 0
    for(let i = 0 ; i < array.length ; i++){
        if(typeof array[i] == 'number'){
            sum += array[i]
        }else{
            return "NaN"
        }
    }
    return sum
}
console.log(sumOfArrayItems([1, 2, 3, 4, 5])) // 15
console.log(sumOfArrayItems([1, 2, 3, 4, '5'])) // NaN

//13
const average = (array) => {
    let sum = 0
    for(let i = 0 ; i < array.length ; i++){
        if(typeof array[i] == 'number'){
            sum += array[i]
        }else{
            return "NaN"
        }
    }
    return sum / array.length
}
console.log(average([1, 2, 3, 4, 5])) // 3
console.log(average([1, 2, 3, 4, '5'])) // NaN

//14
const modifyArray = (array) => {
    if(array[5] != undefined){
        array[5] = array[5].toUpperCase()
    }else{
        return 'not found'
    }
    return array
}
console.log(modifyArray(['a', 'b', 'c', 'd', 'e', 'f'])) // [ 'a', 'b', 'c', 'd', 'e', 'F' ]
console.log(modifyArray(['a', 'b', 'c', 'd', 'e'])) // not found

//15
const isPrime = (n) => {
    if(n == 1) return false
    for(let i = 2 ; i < n ; i++){
        if(n % i == 0) return false
    }
    return true
}
console.log(isPrime(1)) // false
console.log(isPrime(2)) // true

//16
const uniqueItemArray = (array) => {
    for(let i = 0 ; i < array.length ; i++){
        for(let j = i+1 ; j < array.length ; j++){
            if(array[i] == array[j]) return false 
        }
    }
    return true
}
console.log(uniqueItemArray([1, 2, 3, 4, 5])) // true
console.log(uniqueItemArray([1, 2, 3, 4, 3])) // false

//17
const sameDataType = (array) => {
    for(let i = 0 ; i < array.length ; i++){
        if(typeof array[i] != typeof array[0]) return false
    }
    return true
}
console.log(sameDataType([1, 2, 3, 4, 5])) // true
console.log(sameDataType([1, 2, 3, 4, '5'])) // false

//18
let isValidVariable = (variable) => {
    let invalide = "./\\[]{}()*+=!@#%^&|<>?~`"
    for(let i = 0 ; i < invalide.length ; i++){
        if(variable.indexOf(invalide[i]) != -1) return false
    }
    return true
}
console.log(isValidVariable('a')) // true
console.log(isValidVariable('a1')) // true
console.log(isValidVariable('a/b')) // false

//19
const sevenRandomNumbers = () => {
    let array = []
    while(array.length < 7){
        let nbr = Math.floor(Math.random() * 10)
        if(array.includes(nbr) == false) array.push(nbr)
    }
    return array
}
console.log(sevenRandomNumbers()) // [ 2, 0, 3, 1, 4, 6, 5 ]

//20
const reverseCountries = (array) => {
    let country = array
    return country.reverse()
}
console.log(reverseCountries(['France', 'Germany', 'Spain', 'Italy'])) // [ 'Italy', 'Spain', 'Germany', 'France' ]