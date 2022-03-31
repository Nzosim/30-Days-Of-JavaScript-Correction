//1
let challenge = '30 Days Of JavaScript'

//2
console.log(challenge) // 30 Days Of JavaScript

//3
console.log(challenge.length) // 21

//4
console.log(challenge.toUpperCase()) // 30 DAYS OF JAVASCRIPT

//5
console.log(challenge.toLowerCase()) // 30 days of javascript

//6
console.log(challenge.substring(0,2)) // 30

//7
console.log(challenge.substring(3)) // Days Of JavaScript

//8
console.log(challenge.includes('Script')) // true

//9
console.log(challenge.split()) // [ '30 Days Of JavaScript' ]

//10
console.log(challenge.split(' ')) // [ '30', 'Days', 'Of', 'JavaScript' ]

//11
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(',')) // ['Facebook',' Google',' Microsoft',' Apple',' IBM',' Oracle',' Amazon']

//12
console.log(challenge.replace('JavaScript', 'Python')) // 30 Days Of Python

//13
console.log(challenge.charAt(15)) // S

//14
console.log(challenge.charCodeAt('J')) // 51

//15
console.log(challenge.indexOf('a')) // 4

//16
console.log(challenge.lastIndexOf('a')) // 14

//17
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because')) // 31

//18
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because')) // 47

//19
console.log('You cannot end a sentence with because because because is a conjunction'.search('because')) // 31

//20
console.log('   30 Days Of JavaScript   '.trim()) // 30 Days Of JavaScript

//21
console.log(challenge.startsWith('30')) // true

//22
console.log(challenge.endsWith('JavaScript')) // true

//23
console.log(challenge.match(/a/gi)) // [ 'a', 'a', 'a' ]

//24
console.log('30 Days Of'.concat(' JavaScript')) // 30 Days Of JavaScript

//25
console.log(challenge.repeat(2)) // 30 Days Of JavaScript30 Days Of JavaScript