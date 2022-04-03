//1.1
ages.sort()
console.log(ages[0], ages[ages.length-1]) // 19 26

//1.2
console.log(ages[ages.length/2]) // 24

//1.3
let avg = 0
ages.forEach(age => {
    avg += age
})
avg /= ages.length
console.log(avg) // 22.8

//1.4
console.log(ages[ages.length-1] - ages[0]) // 7

//1.5
console.log(Math.abs(ages[0]-avg), Math.abs(ages[ages.length-1]-avg)) // 3.8000000000000007    3.1999999999999993

//1.6
//Exercise3.html

//2 
//Exercise3.html

//3
//Exercise3.html