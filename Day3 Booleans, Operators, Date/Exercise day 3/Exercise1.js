//1
const firstName = 'John', lastName = 'Doe', country = 'France', age = 25, isMarried = false, year = 2022;
console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof year); // number

//2
console.log(typeof '10' == typeof 10) // false

//3
console.log(parseInt('9.8') == 10) // false

//4
console.log('Hey' === 'Hey') // true
console.log('Hey' === 'hey') // false

//5
console.log(4 > 3) // true
console.log(4 >= 3) // true
console.log(4 < 3) // false
console.log(4 <= 3) // false
console.log(4 == 4) // true
console.log(4 === 4) // true
console.log(4 != 4) // false
console.log(4 !== 4) // false
console.log(4 != '4') // true
console.log(4 == '4') // true
console.log(4 === '4') // false
console.log("python".length === "jargon".length) // true

//6
console.log(4 > 3 && 10 < 12) // true
console.log(4 > 3 && 10 > 12) // false
console.log(4 > 3 || 10 < 12) // true
console.log(4 > 3 || 10 > 12) // true
console.log(!(4 > 3)) // false
console.log(!(4 < 3)) // true
console.log(!(false)) // true
console.log(!(4 > 3 && 10 < 12)) // false
console.log(!(4 > 3 && 10 > 12)) // true
console.log(!(4 === '4')) // true
console.log(!"dragon".includes("on") && !"dragon".includes("on")) // false

//7
const date = new Date()
console.log(date.getFullYear()) // 2022
console.log(date.getMonth()) // 3 = avril
console.log(date.getDate()) // 1
console.log(date.getDay()) // 5 = friday
console.log(date.getHours()) // 22
console.log(date.getMinutes()) // 31
console.log(Date.now()) // 1648846105648