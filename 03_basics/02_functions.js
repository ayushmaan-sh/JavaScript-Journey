//rest operator (...) -> wrap the values an return it

function calculateCartPrice(...num1){
    return num1
}

let result = calculateCartPrice(200, 300, 400); //-> return the values in an array
console.log(result);


//use object in JS

const course = {
    courseName: "Solana with harkirat",
    prices: 2999
}

function solanaCourse(anyObject){
    console.log(`Course name: ${anyObject.courseName} | Price: Rs.${anyObject.prices}`);
}

solanaCourse(course)
// we can also use direct object
solanaCourse({
    courseName: "Solana with Ayush",
    prices: 3999
})

//using array in the function
const myArray = [300, 200, 400, 700]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArray));
