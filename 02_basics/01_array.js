// array

const myArr = [0,1,2,3,4,5]
const names = ["ayushmaan", "raj", "deepak"]

const myArr2 = new Array(2,4,6,8)


// accessing elements
console.log(myArr[3]);

// add element at last
myArr.push(6)
myArr.push(7)
console.log(myArr);

// remove one element from last
myArr.pop()
console.log(myArr);

// insert one element to starting index
myArr.unshift(9)
console.log(myArr); //but it's not a good idea to do this, because if there was large numbers, then this operation can give load on computer.
myArr.shift() //remove element from starting
console.log(myArr)

// tell if a specific value is present in an array
console.log(myArr.includes(9));

// tell the index number
console.log(myArr.indexOf(4)); //if the value given is not present in the array, it'll return -1.
