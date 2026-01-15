let demo = 300 //global scope

if (true) {
    let a = 10
    const b = 20
    //a and b can only be used inside this if block.

    console.log(demo); //global scope can be used inside any block of code
    
}

// console.log(a);
// console.log(b);
// a and b will give the error because we are using them out of the scope


// nested scopes

function one(){
    const username = "ayushmaan"

    function two(){
        const website = "youtube"
        console.log(username); //two can access the variables of one.
    }
    //console.log(website); //but, one cannot access the variables of two. Hence, it will give an error.
    
    two()
}

one()

if(true) {
    const username = "ayushmaan"
    if(username === "ayushmaan"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website); -> not accessible
}

// console.log(username); -> not accessible


// **************************************************************

const result = addOne(5) //no error
console.log(result);

function addOne(number) {
    return number+1
}

//addTwo(5) -> error
const addTwo = function(number2){
    return number2 + 2
}
