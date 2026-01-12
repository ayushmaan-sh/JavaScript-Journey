const name = "ayush"
const repoCount = 10

console.log(name + "-" + repoCount); 

// String interpolations

console.log(`Hello, My name is ${name} and my repo count is ${repoCount}`)

// How to declare strings in another way:
const newGame = new String("Call of Duty-GHOSTS")
console.log(newGame[0]);
console.log(newGame.__proto__);

console.log(newGame.length)
console.log(newGame.toUpperCase())
console.log(newGame.charAt(3))
console.log(newGame.indexOf('t'))

const newString = newGame.substring(0, 5)
console.log(newString);

const slicedString = newGame.slice(-8, 5)
console.log(slicedString);
