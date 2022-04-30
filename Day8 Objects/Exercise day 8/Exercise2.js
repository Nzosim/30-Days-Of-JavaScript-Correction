const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
const countries = [
    {
        name: 'Afghanistan',
        capital: 'Kabul',
        languages: ['Pashto', 'Uzbek', 'Turkmen'],
        population: 27657145,
        flag: 'https://restcountries.eu/data/afg.svg',
        currency: 'Afghan afghani'
    },
    {
        name: 'Åland Islands',
        capital: 'Mariehamn',
        languages: ['Swedish'],
        population: 28875,
        flag: 'https://restcountries.eu/data/ala.svg',
        currency: 'Euro'
    }
]


//1
let maxSkills = 0, user
for(let i in users){
    if(users[i].skills.length > maxSkills){
        maxSkills = users[i].skills.length
        user = i
    }
}
console.log(user)

//2
let connect = 0, greaterThanEqualsTo50 = 0
for(let i in users){
    if(users[i].isLoggedIn){
        connect++
    }
    if(users[i].points >= 50){
        greaterThanEqualsTo50++
    }
}
console.log(`${connect} users are connected, ${greaterThanEqualsTo50} users have more than 50 points`)

//3
// MERN = MongoDB,Express,React,Node.
let usersMern = []
for(let i in users){
    if(users[i].skills.includes('MongoDB') && users[i].skills.includes('Express') && users[i].skills.includes('React') && users[i].skills.includes('Node')){
        usersMern.push(i)
    }
}
console.log(usersMern)

//4
users['Nzo'] = {
        email: 'nzo@gmail.com',
        skills: ['ALLLLLLLLLLLLLLLL'],
        age: 20,
        isLoggedIn: false,
        points: 4000
    }
console.log(users)

//5
let keys = Object.keys(users)
console.log(keys)

//6
let values = Object.values(users)
console.log(values)

//7
console.log(countries[0].name, countries[0].capital, countries[0].languages, countries[0].population, countries[0].flag, countries[0].currency)