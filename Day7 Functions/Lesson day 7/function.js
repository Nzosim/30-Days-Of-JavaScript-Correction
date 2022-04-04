function test(){
    console.log(arguments) // arguments is an array with all the arguments passed to the function, unlimited number of arguments
}
test(1,2,3,'zqd') // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 'zqd' }

const test2 = (...args) => {
    console.log(args) // same
}
test2(1,2,3,'zqd') // [1, 2, 3, 'zqd']

const test3 = (surname, year = 20) => {
    console.log(surname, year) 
}
test3('hey') // hey 20
test3('hey', 5) // hey 20 5