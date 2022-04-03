//1
// Exercise2.html

//2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'.replace(/[,.]/g, '').split(' ')
console.log(text.length) // 13

//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if(!shoppingCart.includes('Meat')) shoppingCart.unshift('Meat')
console.log(shoppingCart) // [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey' ]

if(!shoppingCart.includes('Sugar')) shoppingCart.push('Sugar')
console.log(shoppingCart) // [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]

let honey = shoppingCart.indexOf('Honey')
shoppingCart.splice(honey, 1)
console.log(shoppingCart)

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log(shoppingCart) // [ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar' ]

//4
// Exercise2.html

//5
// Exercise2.html

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack) // [ 'HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'Express', 'MongoDB' ]