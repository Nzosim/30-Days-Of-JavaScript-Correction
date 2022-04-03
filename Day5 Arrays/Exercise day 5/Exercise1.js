//1
const array = []

//2
const array2 = [1, 2, 3, 4, 5]

//3
console.log(array2.length) // 5

//4
console.log(array2[0], array2[(array2.length-1)/2], array2[array2.length-1]) // 1, 3, 5

//5
const mixedDataTypes = [1, 'a', true, [], {name: 'John', age: 25}, [1, 2, 3]]
console.log(mixedDataTypes.length) // 6

//6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//7
console.log(itCompanies) // ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//8
console.log(itCompanies.length) // 7

//9
console.log(itCompanies[0], itCompanies[(itCompanies.length-1)/2], itCompanies[itCompanies.length-1])

//10
console.log(itCompanies.join(' ')) // Facebook Google Microsoft Apple IBM Oracle Amazon

//11
itCompanies.forEach(cpn => {console.log(cpn.toUpperCase())}) // FACEBOOK GOOGLE MICROSOFT APPLE IBM ORACLE AMAZON

//12
console.log(itCompanies.splice(0,itCompanies.length-1).join(', '), `and ${itCompanies[0]} are big IT companies.`) 

//13
const itCompanies2 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
if(itCompanies2.includes('Google')) {
    console.log('Google')
}else{
    console.log('company is not found')
} // 'Google'

//14
itCompanies2.forEach(cpn => {
    if(cpn.indexOf('o') != cpn.lastIndexOf('o')){
        console.log(cpn) 
    }
}) // Google Facebook Google Microsoft

//15
console.log(itCompanies2.sort()) // [ 'Amazon', 'Apple', 'Facebook', 'Google', 'IBM', 'Microsoft', 'Oracle' ]

//16
console.log(itCompanies2.reverse()) // [ 'Oracle', 'Microsoft', 'IBM', 'Google', 'Facebook', 'Apple', 'Amazon' ]

//17
console.log(itCompanies2.slice(2)) // [ 'IBM', 'Google', 'Facebook', 'Apple', 'Amazon' ]

//18
console.log(itCompanies2.slice(0, itCompanies2.length-2)) // [ 'Oracle', 'Microsoft', 'IBM', 'Google', 'Facebook' ]

//19
console.log(itCompanies2);
console.log(itCompanies2.slice((itCompanies2.length)/2, (itCompanies2.length)/2+1)) // [ 'Google' ]

//20
itCompanies2.shift()
console.log(itCompanies2) // [ 'Microsoft', 'IBM', 'Google', 'Facebook', 'Apple', 'Amazon' ]

//21
const itCompanies3 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
let middle = itCompanies3.slice((itCompanies3.length)/2, (itCompanies3.length)/2+1)
let index = itCompanies3.indexOf(middle.toString())
itCompanies3.splice(index, 1)
console.log(itCompanies3)

//22
itCompanies3.pop()
console.log(itCompanies3)

//23
itCompanies3.splice(0)
console.log(itCompanies3)