const object = {}
const person = {
    name: 'John',
    age: 30,
    isMarried: false
}
console.log(person)
console.log(person.name)
const person2 = {
    name: 'John',
    age: 30,
    nameAge: function () {
        return this.name + ' ' + this.age
    }
}
console.log(person2.nameAge())
person.hey = 'a'
console.log(person)

const copy = Object.assign({}, person)
console.log(copy)

const keys = Object.keys(person)
console.log(keys)

const values = Object.values(person)
console.log(values)

const entries = Object.entries(person)
console.log(entries)

console.log(person.hasOwnProperty('name')) // true
console.log(person.hasOwnProperty('boo')) // false