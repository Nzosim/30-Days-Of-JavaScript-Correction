//1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

//2
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

//3
console.log(parseInt('10')) // 10

//4
console.log(Math.ceil(parseFloat('9.8'))) // 10

//5
console.log("Python".includes("on") && "jargon".includes("on")) // true

//6
console.log("I hope this course is not full of jargon.".includes("jargon")) // true

//7
console.log(Math.floor(Math.random() * 101)) // [0-100]

//8
console.log(Math.floor(Math.random() * 51) + 50) // [50-100]

//9
console.log(Math.floor(Math.random() * 256)) // [0-255]

//10
console.log("JavaScript"[Math.floor(Math.random() * "JavaScript".length)]) // [0-"JavaScript".length-1]

//11
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');     
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

//12
console.log('You cannot end a sentence with because because because is a conjunction'.substr(31,23)) // because because because