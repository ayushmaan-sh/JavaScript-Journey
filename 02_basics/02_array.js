const names = ["ayushmaan", "raj", "deepak"];
const names2 = ["manish", "nishant", "vishal"];

names2.push(names) // array inside array
console.log(names2)

let newNames = names.concat(names2)
console.log(newNames)

// another way of joining arrays -> MOST PREFFERED
let joinNames = [...names, ...names2]
console.log(joinNames);

//rarely used
let anotherArray = [1,2,3, [4,5,6], 7, [6,7, [4,5]]]
let usableArray = anotherArray.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(usableArray);


console.log(Array.isArray("ayush"))
console.log(Array.from("ayush")) //[ 'a', 'y', 'u', 's', 'h' ]

//interesting case
console.log(Array.from({name: "ayush"})) //returns an empty array because we have to mention weather to make an array of the key (name) or value (ayush).

// convert variables into array
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))
