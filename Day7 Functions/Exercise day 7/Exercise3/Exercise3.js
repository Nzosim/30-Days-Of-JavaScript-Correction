// //1
// const userIdGeneratedByUser = () => {
//     let lengthID = parseInt(prompt('Enter the length of the ID', 'number goes here'))
//     let nbrID = parseInt(prompt('Enter the number of IDs', 'number goes here'))
//     let id = "", letter = 'abcdefghijklmnopqrstuvwxyz', number = '0123456789'
//     for(let i = 0; i < nbrID; i++){
//         for(let i = 0; i < lengthID; i++){
//             if(Math.floor(Math.random() * 2) == 0){
//                 id+=letter[Math.floor(Math.random() * letter.length)]
//             }else{
//                 id+=number[Math.floor(Math.random() * number.length)]
//             } 
//         }
//         id +="\n"
//     }
//     return id
// }
// console.log(userIdGeneratedByUser())

//2
const rgbColorGenerator = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}
console.log(rgbColorGenerator()) // rgb(41, 34, 240)

//3
const arrayOfHexaColors = () => {
    let hexa = [], letter2 = 'abcdef', number2 = '0123456789'
    for(let j = 0 ; j < 5 ; j++){
        let id ='#'
        for(let i = 0 ; i < 5 ; i++){
            if(Math.floor(Math.random() * 2) == 0){
                id += letter2[Math.floor(Math.random() * letter2.length)]
            }else{
                id += number2[Math.floor(Math.random() * number2.length)]
            }
        }
        hexa.push(id)
    }   
    return hexa 
}
console.log(arrayOfHexaColors()) // [ '#d591d', '#c7acc', '#1f21d', '#cb9c5', '#ffd1e' ]

//4
const arrayOfRgbColors = () => {
    let rgb = []
    for(let j = 0 ; j < 5 ; j++){
        rgb.push(`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`)
    }   
    return rgb 
}
console.log(arrayOfRgbColors()) // [ 'rgb(41, 34, 240)', 'rgb(41, 34, 240)', 'rgb(41, 34, 240)', 'rgb(41, 34, 240)', 'rgb(41, 34, 240)' ]

//5
