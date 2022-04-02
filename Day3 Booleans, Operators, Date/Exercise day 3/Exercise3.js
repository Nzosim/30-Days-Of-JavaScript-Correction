let date = new Date()

let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDate()

let hour = date.getHours().length < 2 ? `0${date.getHours()}` : date.getHours()
let minute = date.getMinutes().length < 2 ? `0${date.getMinutes()}` : date.getMinutes()

console.log(`${year}-${month}-${day} ${hour}:${minute}`)