console.log("Hello, World!".toUpperCase());
console.log("Hello, World!".toLowerCase());
console.log("Hello, World!".charAt(0));
console.log("Hello, World!".substring(0, 5));
console.log("Hello, World!".split()); // ["Hello, World!"]
console.log("Hello, World!".split('')); // ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!"]
console.log("Hello, World!".split(' ')); // ["Hello,", "World!"]
console.log("Hello, World!".split(',')); // ["Hello", " World!"]
console.log("   Hello, World!   ".trim()); // "Hello, World!"
console.log("Hello, World!".includes("Hello")); // true
console.log("Hello, World!".includes("Hi")); // true
console.log("Hello, World!".replace("Hello", "Hi")); // "Hi, World!"
console.log("Hello, World!".indexOf("World")); // 6
console.log("Hello, World!".lastIndexOf("World")); // 11
console.log("Hello, World!".concat("!", "?", "!")); // "Hello, World!?!?"
console.log("Hello, World!".startsWith("Hello")); // true
console.log("Hello, World!".endsWith("World")); // true
console.log("Hello, World!".search("World")); // 7
console.log("Hello, World! World".match("World")); // [ 'World', index: 7, input: 'Hello, World! World', groups: undefined ]
console.log("Hello, World! World".match(/World/)); // [ 'World', index: 7, input: 'Hello, World! World', groups: undefined ]
console.log("Hello, World! World".match(/World/gi)); // [ "World", "World" ]
console.log("Hello, World!".repeat(3)); // "Hello, World!Hello, World!Hello, World!"

//String to int
console.log(parseInt("42")); // 42
console.log(Number("42")); // 42
console.log(+"42"); // 42

//String to float
console.log(parseFloat("42.5")); // 42.5
console.log(Number("42.5")); // 42.5
console.log(+"42.5"); // 42.5

//Float to int
console.log(parseInt(42.5)); // 42