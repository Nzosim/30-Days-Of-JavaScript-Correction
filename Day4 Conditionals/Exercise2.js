//1
let note = parseInt(prompt('Eleve note', 'number goes here')), res
if(note >= 0 && note < 50){
    res = 'F'
}else if(note >= 50 && note < 60){
    res = 'D'
}else if(note >= 60 && note < 70){
    res = 'C'
}else if(note >= 70 && note < 90){
    res = 'B'
}else if(note >= 90 && note <= 100){
    res = 'A'
}
console.log(res)

//2
let month = prompt('Enter month', 'month goes here'), res2
switch(month){
    case 'September':
    case 'October':
    case 'November':
        res2 = 'Autumn'
        break;
    case 'December':
    case 'January':
    case 'February':
        res2 = 'Winter'
        break;
    case 'March':
    case 'April':
    case 'May':
        res2 = 'Spring'
        break;
    case 'June':
    case 'July':
    case 'August':
        res2 = 'Summer'
        break;
}
console.log(res2)

//3
let day = prompt('Enter day', 'day goes here')
if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
    console.log(day,"is a working day")
}else if(day === "Saturday" || day === "Sunday"){
    console.log(day,"is a weekend")
}