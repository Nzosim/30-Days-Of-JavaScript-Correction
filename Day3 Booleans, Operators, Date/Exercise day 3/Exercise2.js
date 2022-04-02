//1
let base = prompt('Enter base', 'number goes here')
let height = prompt('Enter height', 'number goes here')
let area = base * height / 2
console.log(area)

//2
let sideA = parseInt(prompt('Enter side A', 'number goes here'))
let sideB = parseInt(prompt('Enter side B', 'number goes here'))
let sideC = parseInt(prompt('Enter side C', 'number goes here'))
let perimeter = sideA + sideB + sideC
console.log(perimeter)

//3
let length = parseInt(prompt('Enter length', 'number goes here'))
let width = parseInt(prompt('Enter width', 'number goes here'))
let area2 = length * width
let perimeter2 = 2 * (length + width)
console.log(area2, perimeter2)

//4
let radius = parseInt(prompt('Enter radius', 'number goes here'))
let area3 = Math.PI * radius * radius
let circumference = 2 * Math.PI * radius
console.log(area3, circumference)

//5
// i don't like maths

//6
// the same thing

//7
// the same thing

//8
// the same thing

//9
let hours = parseInt(prompt('Enter hours', 'number goes here'))
let ratePerHour = parseInt(prompt('Enter rate per hour', 'number goes here'))
console.log(`Enter hours: ${hours}\nEnter rate per hour: ${ratePerHour}\nYour weekly earning is ${hours * ratePerHour}`)

//10
let name = "John"
console.log(name.length > 7 ? "your name is long" : "your name is short")

//11
let firstName = "John"
let lastName = "Smith"
console.log(firstName.length > lastName.length ? `Your first name, ${firstName}, is longer than your family name, ${lastName}` : `Your family name, ${lastName}, is longer than your first name, ${firstName}`)

//12
let myAge = 25
let yourAge = 10
console.log(`I am ${myAge - yourAge} years older than you`)

13
let year = parseInt(prompt('Enter birth year', 'number goes here'))
console.log(`You are ${new Date().getFullYear() - year}.`, new Date().getFullYear() - year > 18 ? "You are old enough to drive" : `You will be allowed to drife after ${18 - (new Date().getFullYear() - year)} years.`)

//14
let numberOfYear = parseInt(prompt('Enter number of year', 'number goes here'))
console.log(`You lived ${numberOfYear * 365.25 * 24 * 3600} seconds`)

//15
const time = new Date()
console.log(`${time.getFullYear()}-${time.getMonth()}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}`)
console.log(`${time.getDate()}-${time.getMonth()}-${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`)
console.log(`${time.getDate()}/${time.getMonth()}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`)