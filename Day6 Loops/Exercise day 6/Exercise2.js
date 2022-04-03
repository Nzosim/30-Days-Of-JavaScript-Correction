//1
let id = '', letter = 'abcdefghijklmnopqrstuvwxyz', number = '0123456789'
while(id.length < Math.floor(Math.random() * 100)){
    if(Math.floor(Math.random() * 2) == 0){
        id+= letter[Math.floor(Math.random() * letter.length)]
    }else{
        id+= number[Math.floor(Math.random() * number.length)]
    }
}
console.log(id)

//2
let hexa = '#', letter2 = 'abcdef', number2 = '0123456789'
while(hexa.length <= 6){
    if(Math.floor(Math.random() * 2) == 0){
        hexa+= letter2[Math.floor(Math.random() * letter2.length)]
    }else{
        hexa+= number2[Math.floor(Math.random() * number2.length)]
    }
}
console.log(hexa)

//3
let rgb = 'rgb('
rgb += Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')'
console.log(rgb)

//4
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
for(let i = 0 ; i < countries.length ; i++){
    countries[i] = countries[i].toUpperCase()
}
console.log(countries) // ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

//5
let length = []
for(let i = 0 ; i < countries.length ; i++){
    length[i] = countries[i].length
}
console.log(length) // [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

//6
let arr = []
for(let i = 0 ; i < countries.length ; i++){
    arr[i] = [countries[i], countries[i].toUpperCase().slice(0,3), countries[i].length]
}
console.log(arr)
// [
//     [ 'ALBANIA', 'ALB', 7 ],
//     [ 'BOLIVIA', 'BOL', 7 ],
//     [ 'CANADA', 'CAN', 6 ],
//     [ 'DENMARK', 'DEN', 7 ],
//     [ 'ETHIOPIA', 'ETH', 8 ],
//     [ 'FINLAND', 'FIN', 7 ],
//     [ 'GERMANY', 'GER', 7 ],
//     [ 'HUNGARY', 'HUN', 7 ],
//     [ 'IRELAND', 'IRE', 7 ],
//     [ 'JAPAN', 'JAP', 5 ],
//     [ 'KENYA', 'KEN', 5 ]
//   ]

//7
let res = []
for(let i = 0 ; i < countries.length ; i++){
    if(countries[i].toLowerCase().includes('land')) res.push(countries[i].toLowerCase())
    console.log(countries[i].toLowerCase())
}
if(res.length == 0){
    console.log('All these countries are without land')
}else{
    console.log(res)
} // [ 'finland', 'ireland' ]

//8
let res2 = []
for(let i = 0 ; i < countries.length ; i++){
    if(countries[i].toLowerCase().includes('ia')) res2.push(countries[i].toLowerCase())
    console.log(countries[i].toLowerCase())
}
if(res2.length == 0){
    console.log('All these countries are without ia')
}else{
    console.log(res2)
} // [ 'albania', 'bolivia', 'ethiopia' ]

//9
let max = 0, place 
for(let i = 0 ; i < countries.length ; i++){
    if(countries[i].length > max){
        max = countries[i].length
        place = i
    } 
}
console.log(countries[place]) // ETHIOPIA

//10
let res3 = []
for(let i = 0 ; i < countries.length ; i++){
    if(countries[i].length == 5){
        res3.push(countries[i])
    } 
}
console.log(res3) // [ 'JAPAN', 'KENYA' ]

//11
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
let max2 = 0, place2 
for(let i = 0 ; i < webTechs.length ; i++){
    if(webTechs[i].length > max2){
        max2 = webTechs[i].length
        place2 = i
    } 
}
console.log(webTechs[place2]) // JavaScript

//12
let res4 = []
for(let i = 0 ; i < webTechs.length ; i++){
    res4[i] = [webTechs[i], webTechs[i].length]
}
console.log(res4)
// [
//     [ 'HTML', 4 ],
//     [ 'CSS', 3 ],
//     [ 'JavaScript', 10 ],
//     [ 'React', 5 ],
//     [ 'Redux', 5 ],
//     [ 'Node', 4 ],
//     [ 'MongoDB', 7 ]
//   ]

//13
let mernStackApp = ['MongoDB', 'Express', 'React', 'Node']
let MERN = []
for(let i = 0 ; i < mernStackApp.length ; i++){
    MERN[i] = mernStackApp[i]
}
console.log(MERN) // [ 'MongoDB', 'Express', 'React', 'Node' ]

//14
let tab =  ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for(arg in tab) console.log(tab[arg]) // HTML CSS JS React Redux Node Express MongoDB

//15
let tab2 = ['banana', 'orange', 'mango', 'lemon']
let reverse = [], place3 = tab2.length - 1, i = 0
while(place3 > -1){
    reverse[i] = tab2[place3]
    place3--
    i++
}
console.log(reverse) // [ 'lemon', 'mango', 'orange', 'banana' ]

//16
const fullStack = [ ['HTML', 'CSS', 'JS', 'React'], ['Node', 'Express', 'MongoDB'] ]
for(i in fullStack){
    for(j in fullStack[i]){
        console.log(fullStack[i][j])
    }
}