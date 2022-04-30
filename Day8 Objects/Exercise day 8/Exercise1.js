//1
const dog = {}

//2
console.log(dog)

//3
dog.name = 'Bark'
dog.legs = 4
dog.color = 'brown'
dog.age = 2
dog.bark = function () {
    return 'woof woof'
}

//4
console.log(dog.name) // Bark
console.log(dog.legs) // 4 
console.log(dog.color) // brown
console.log(dog.age) // 2
console.log(dog.bark()) // woof woof

//5
dog.breed = 'Labrador'
dog.getDogInfo = function () {
    return this.name + ' ' + this.age + ' ' + this.breed + ' ' + this.color
}
console.log(dog.getDogInfo()) // Bark 2 Labrador brown
