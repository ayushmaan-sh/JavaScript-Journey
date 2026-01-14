// functions -> Jo bhi apka code hai, for example 10-20 line ka, wo utha ke ek packet me band kar do fir usse kahi bhi use kar lo.

//Function definition
function logName(){
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}

//function execution
logName()
//-> if we miss to write (), it'll not give an error, it'll just get the reference for the function, not execute it.

//function for adding two numbers
function addNumber(number1, number2){
    return number1 + number2;
}

let result = addNumber(3, null)
console.log("Result:", result);


function logInUserMessage(username){
    if(username === undefined){        //another way -> if(!username){}
        console.log("Please enter a username");
        return
    } else {
        return `${username} just logged in!`
    }
}

let message = logInUserMessage()
console.log(message);
