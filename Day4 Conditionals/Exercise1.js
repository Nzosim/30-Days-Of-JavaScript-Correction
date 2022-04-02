//1
let year = parseInt(prompt('Enter your age', 'number goes here'))
console.log(`You are ${new Date().getFullYear() - year}.`, new Date().getFullYear() - year > 18 ? "You are old enough to drive" : `You will be allowed to drife after ${18 - (new Date().getFullYear() - year)} years.`)

//2
let myAge = 10
let yourAge = 25
console.log(`You are ${yourAge - myAge} years older than me`)

//3
let a = 4, b = 3
if(a > b) {
    console.log(`a is greater than b`)
}else{
    console.log(`b is greater than a`)
}
console.log(a > b ? `a is greater than b` : `b is greater than a`)

//4
let number = parseInt(prompt('Enter a number', 'number goes here'))
console.log(number % 2 === 0 ? `${number} is an even number` : `${number} is an odd number`)