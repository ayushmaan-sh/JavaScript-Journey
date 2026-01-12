const score = 400

const balance = new Number(200)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'));


// ***************************** MATHS *************************************

console.log(Math);
console.log(Math.abs(-4)); // -> Minus value to positive
console.log(Math.round(4.6)); // -> Round of number (If digit after decimal is greater than or equal to 5, then it'll round of to bigger value. (4.6 to 5))

console.log(Math.ceil(4.2)) // -> Round of number to bigger number only. (4.2 to 5)

console.log(Math.floor(4.9)) // -> Round number to smaller number only. (4.9 to 4)

console.log(Math.min(4,5,2,8,5));
console.log(Math.max(4,5,2,8,5));


console.log(Math.random()); // 0 to 1 only
console.log((Math.random()*10) + 1); // start from 1
console.log(Math.floor(Math.random()*10) + 1); // for one digit value only.

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
