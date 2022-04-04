//1
function fullName(){
    return 'John Doe'
}
console.log(fullName()) // John Doe

//2
function fullName2(firstName, lastName){
    return `${firstName} ${lastName}`
}
console.log(fullName2('John', 'Doe')) // John Doe

//3
function addNumber(nb1, nb2){
    return nb1 + nb2
}
console.log(addNumber(1, 2)) // 3

//4
function areaOfRectangle(length, width){
    return length  * width
}
console.log(areaOfRectangle(10, 5)) // 50

//5
function perimeterOfRectangle(length, width){
    return 2 * (length + width)
}
console.log(perimeterOfRectangle(10, 5)) // 30

//6
function volumeOfRectPrism(length, width, height){
    return length * width * height
}
console.log(volumeOfRectPrism(10, 5, 2)) // 100

//7
function areaOfCircle(radius){
    return Math.PI * radius * radius
}
console.log(areaOfCircle(5)) // 78.53981633974483

//8
function circumOfCircle(radius){
    return 2 * Math.PI * radius
}
console.log(circumOfCircle(5)) // 31.41592653589793

//9
function density(mass, volume){
    return mass / volume
}
console.log(density(100, 10)) // 10

//10
function speed(distance, time){
    return distance / time
}
console.log(speed(100, 10)) // 10

//11
const weight = (mass, gravity) => {
    return mass * gravity
}
console.log(weight(100, 10)) // 1000

//12
const convertCelsiusToFahrenheit = (celsius) => {
    return celsius * 9 / 5 + 32
}
console.log(convertCelsiusToFahrenheit(10)) // 50

//13
const bmi = (mass, height) => {
    return mass / (height * height)
}
console.log(bmi(70, 2)) // 17.5

//14
const checkSeason = (month) => {
    if(month >= 3 && month <= 5){
        return 'Spring'
    } else if(month >= 6 && month <= 8){
        return 'Summer'
    } else if(month >= 9 && month <= 11){
        return 'Autumn'
    } else {
        return 'Winter'
    }
}
console.log(checkSeason(10)) // Autumn

//15
const max = (a,b,c) => {
    if(a > b && a > c){
        return a
    } else if(b > a && b > c){
        return b
    } else {
        return c
    }
}
console.log(max(1,2,3)) // 3