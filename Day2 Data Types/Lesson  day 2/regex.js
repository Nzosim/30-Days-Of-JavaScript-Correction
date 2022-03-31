let mot = "Hello";
let mot2 = /Hello/;
let mot3 = /Hello/gi; // g = search in the whole text, i = case insensitive ("a" = "A")

let txt = "In 2022, I will be 20 years old.";
console.log(txt.match(/\d+/)); // \d = any digit (0-9), + = one or more numbers
console.log(txt.match(/\d+/g)); // [ '2022', '20' ]