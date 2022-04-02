//1
let month = prompt('Enter month', 'month goes here')
switch(month){
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        console.log(`${month} has 31 days`)
        break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        console.log(`${month} has 30 days`)
        break;
    case 'February':
        console.log(`${month} has 28 days`)
        break;
}

//2
let month2 = prompt('Enter month', 'month goes here')
switch(month2){
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        console.log(`${month2} has 31 days`)
        break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        console.log(`${month2} has 30 days`)
        break;
    case 'February':
        let year = new Date().getFullYear()
        if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
            console.log(`${month2} has 29 days`)
        }else{
            console.log(`${month2} has 28 days`)
        }
        break;
}