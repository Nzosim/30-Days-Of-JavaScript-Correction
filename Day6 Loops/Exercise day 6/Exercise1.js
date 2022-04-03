//1
for(let i = 0 ; i <= 10 ; i++){
    console.log(i)
} // 0 1 2 3 4 5 6 7 8 9 10

let i = 0
while(i <= 10){
    console.log(i)
    i++
} // 0 1 2 3 4 5 6 7 8 9 10

i = 0
do{
    console.log(i)
    i++
}while(i <= 10) // 0 1 2 3 4 5 6 7 8 9 10

//2
for(let i = 10 ; i >= 0 ; i--){
    console.log(i)
} // 10 9 8 7 6 5 4 3 2 1 0

i = 10
while(i >= 0){
    console.log(i)
    i--
} // 10 9 8 7 6 5 4 3 2 1 0

i = 10
do{
    console.log(i)
    i--
}while(i >= 0) // 10 9 8 7 6 5 4 3 2 1 0

//3
let n = 5
for(let i = 0 ; i <= n ; i++){
    console.log(i)
} // 0 1 2 3 4 5

//4
n = 1, line = '#'
while(n <= 7){
    console.log(line)
    line += '#'
    n++
}
// #
// ##
// ###
// ####
// #####
// ######
// #######

//5
n = 0
while(n < 11){
    console.log(`${n} x ${n} = ${n*n}`)
    n++
} 
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

//6
n = 0
console.log('i\ti^2\ti^3')
while(n < 11){
    console.log(`${n}\t${n*n}\t${n*n*n}`)
    n++
}
// i       i^2     i^3
// 0       0       0
// 1       1       1
// 2       4       8
// 3       9       27
// 4       16      64
// 5       25      125
// 6       36      216
// 7       49      343
// 8       64      512
// 9       81      729
// 10      100     1000

//7
for(let i = 0 ; i <= 100 ; i++){
    if(i % 2 == 0) console.log(i)
}

//8
for(let i = 0 ; i <= 100 ; i++){
    if(i % 2 != 0) console.log(i)
}

//9
for(let i = 0 ; i <= 100 ; i++){
    let first = true
    if(i <= 1) first = false
    for(let j = 2 ; j < i ; j++){
        if(i % j == 0) first = false
    }
    if(first) console.log(i)
}

//10
let sum = 0
for(let i = 0 ; i <= 100 ; i++){
    sum += i
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`) // The sum of all numbers from 0 to 100 is 5050.

//11
// somme des nombres impairs entre 0 et 100 et des nombres pairs entre 0 et 100
let even = 0
let odd = 0
for(let i = 0 ; i <= 100 ; i++){
    if(i % 2 == 0) even += i
    else odd += i
}
console.log(`The sum of all evens from 0 to 100 is ${even}. And the sum of all odds from 0 to 100 is ${odd}.`) // The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

//12
let even2 = 0
let odd2 = 0
for(let i = 0 ; i <= 100 ; i++){
    if(i % 2 == 0) even2 += i
    else odd2 += i
}
let res = [even2, odd2]
console.log(res) // [ 2550, 2500 ]

//13
let array = []
for(let i = 0 ; i <= 5 ; i++){
    array[i] = Math.floor(Math.random() * 10)
}
console.log(array)

//14
let array2 = []
for(let i = 0 ; i <= 5 ; i++){
    let num = -1
    while(num == -1 || array2.includes(num)){
        num = Math.floor(Math.random() * 10)
    }
    array2[i] = num
}
console.log(array2)

//15
let id = '', letter = 'abcdefghijklmnopqrstuvwxyz', number = '0123456789'
while(id.length < 6){
    if(Math.floor(Math.random() * 2) == 0){
        id+= letter[Math.floor(Math.random() * letter.length)]
    }else{
        id+= number[Math.floor(Math.random() * number.length)]
    }
}
console.log(id)