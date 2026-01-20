//conditions (if-else) -> check -> true/false
// if true -> output a -> further checks and outputs
// if flase -> output b -> further checks and outputs


//1. Check if a number is greater than another number:

let num1 = 11
let num2 = 8

if (num1 > num2){
    console.log(`number 1 is greater then number 2`);
} else {
    console.log(`numner 1 is not greater`);
}
// if the number 1 is smaller, the console.log will be skipped but the code will be execute.


//2. Check if a string is equal to another string

let username_one = 'ayush'
let username_two = 'Ayush'

if (username_one === username_two){
    console.log("Username already exist, choose different username");
} else {
    console.log("This username is available!");
}

//3. Check is a variable is a number or not:

let score = 44
if (typeof score === 'number') {
    console.log(`This is a number`);
} else {
    console.log(`This is not a number!`);
}

//4. Check if a boolean value is true or false

let value = false

if(value){
    console.log(`It's a true`);
} else {
    console.log(`False`);
}

//5. Check if a array is empty or not

let arr = []

if (arr.length === 0) {
    console.log("Array is empty");
} else {
    console.log(`Array is not empty`);
}
