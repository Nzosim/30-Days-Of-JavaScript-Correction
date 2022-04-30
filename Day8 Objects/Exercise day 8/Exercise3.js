const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];
const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]


//1
let personAccount = {
    firstName: "John",
    lastName: "Doe",
    incomes: 0,
    expenses: 0,
    totalIncome: function () {
        return this.incomes;
    },
    totalExpenses: function () {
        return this.expenses;
    },
    accountInfo: function () {
        return `${this.firstName} ${this.lastName} has ${this.incomes} incomes and ${this.expenses} expenses`;
    },
    addIncome: function (income) {
        this.incomes += income;
    },
    addExpense: function (expense) {
        this.expenses += expense;
    },
    accountBalance: function () {
        return this.incomes - this.expenses;
    }
}

//2
//a
function signUp(username, email, password) {
    if(users.find(user => user.username == username)) return
    let letter = "abcdefghijklmnopqrstuvwxyz",id = ""
    for(let i = 0; i < 6; i++){
        id += letter[Math.floor(Math.random() * 26)]
    }
    let user = {
        _id: id,
        username: username,
        email: email,
        password: password,
        createdAt: new Date().toLocaleString(),
        isLoggedIn: false
    }
    users.push(user)
}
signUp('Nzo', 'Nzosim', '123456')
console.log(users)
signUp('Asab', 'Nzosim', '123456')
console.log(users)
//b
function signIn(username) {
    if(!users.find(user => user.username === username)) return
    users.find(user => user.username === username).isLoggedIn = true
}
signIn('Nzo')
console.log(users)

//3
//a
function rateProduct (userId, rate, id){
    if(!products.find(prod => prod._id === id)) return
    products.find(prod => prod._id === id).ratings.push({userId: userId, rate: rate})
}
rateProduct('fg12cy', 5, 'hedfcg')
console.log(products)
//b
function averageRating (id){
    if(!products.find(prod => prod._id === id)) return
    let ratings = products.find(prod => prod._id === id).ratings
    let sum = 0
    ratings.forEach(rating => sum += rating.rate)
    return sum / ratings.length
}
console.log(averageRating('hedfcg'))

//4
function likeProduct(userId, numProduct){
    let index = products[numProduct-1].likes.indexOf(userId)
    if(index === -1) {
        products[numProduct-1].likes.push(userId)
    }else {
        products[numProduct-1].likes.splice(index, 1)
    }
}
likeProduct('fg12cy', 1)
console.log(products)
likeProduct('f1', 1)
console.log(products)
