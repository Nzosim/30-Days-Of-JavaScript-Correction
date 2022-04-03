const array = []
console.log(array) // []

const array2 = [1, 2, 3, 4, 5]
console.log(array2) // [1, 2, 3, 4, 5]

const array3 = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', {name: 'John', age: 25}]
console.log(array3) // [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e']

const array4 = Array()
console.log(array4) // []
const array5 = Array(8)
console.log(array5) // [ <8 empty items> ]

const array6 = Array(8).fill('a')
console.log(array6) // [ 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a' ]

const array7 = array2.concat(array3)
console.log(array7) // [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', {name: 'John', age: 25}]

const array8 = Array(5)
console.log(array8.length) // 5

const array9 = Array(5).fill('a')
console.log(array9.indexOf('a')) // 0
console.log(array9.indexOf('b')) // -1

const array10 = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(array10.lastIndexOf(2)) // 7
console.log(array10.lastIndexOf(0)) // -1

const array11 = Array(5).fill('a')
console.log(array9.includes('a')) // true
console.log(array9.includes('b')) // false

const array12 = [1, 2, 3, 4, 5, 3, 1, 2]
const variable = 2
console.log(Array.isArray(array12)) // true
console.log(Array.isArray(variable)) // false

const array13 = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(array13.toString()) // 1,2,3,4,5,3,1,2
console.log(array13.join()) // 1,2,3,4,5,3,1,2
console.log(array13.join('-')) // 1-2-3-4-5-3-1-2

const array14 = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(array14.slice()) // [1, 2, 3, 4, 5, 3, 1, 2]
console.log(array14.slice(0, 3)) // [1, 2, 3]
console.log(array14.slice(3)) // [4, 5, 3, 1, 2]
console.log(array14.slice(-3)) // [3, 1, 2]

const array15 = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(array15.splice()) // []
console.log(array15.splice(0, 3)) // [1, 2, 3]
console.log(array15.splice(3)) // [1, 2]

const array16 = [1, 2, 3]
array16.push(4)
console.log(array16) // [1, 2, 3, 4]
array16.pop()
console.log(array16) // [1, 2, 3]
array16.shift()
console.log(array16) // [2, 3]
array16.unshift(1)
console.log(array16) // [1, 2, 3]
array16.reverse()
console.log(array16) // [3, 2, 1]

const array17 = ['Z', 'A', 'U']
array17.sort()
console.log(array17) // ['A', 'U', 'Z']