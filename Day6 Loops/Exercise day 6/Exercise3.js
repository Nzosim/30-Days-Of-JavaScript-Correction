//1
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
let array = countries
console.log(array) // ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"]

//2
let sortedCountries = array.sort() // [ 'Albania', 'Bolivia', 'Canada','Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland',  'Japan', 'Kenya' ]

//3
let MERN = ['MongoDB', 'Express', 'React', 'Node']
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
console.log(webTechs.sort()) // [ 'CSS', 'HTML', 'JavaScript', 'MongoDB', 'Node', 'React', 'Redux' ]
console.log(MERN.sort()) // [ 'Express', 'MongoDB', 'Node', 'React' ]

//4
let res = []
for(let i = 0 ; i < countries.length ; i++){
    if(countries[i].toLowerCase().includes('land')) res.push(countries[i].toLowerCase())
}
console.log(res) // [ 'finland', 'ireland' ]

//5
let max = 0, place 
for(let i = 0 ; i < countries.length ; i++){
    if(countries[i].length > max){
        max = countries[i].length
        place = i
    } 
}
console.log(countries[place]) // Ethiopia

//6 = question 4

//7
let res3 = []
for(let i = 0 ; i < countries.length ; i++){
    if(countries[i].length == 4){
        res3.push(countries[i])
    } 
} 
console.log(res3) // []

//8
let res2 = []
for(let i = 0 ; i < countries.length ; i++){
    if(countries[i].includes(' ')) res2.push(countries[i].toLowerCase())
}
console.log(res2) // []

//9
let reverse = countries.reverse()
for(let i = 0 ; i < countries.length ; i++){
    reverse[i] = reverse[i].toUpperCase()
}
console.log(reverse) 