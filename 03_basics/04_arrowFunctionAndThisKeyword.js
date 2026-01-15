//THIS KEYWORD
// "this" keyword means the current context of the object.


const user = {
    username: "ayushmaan",
    age: 22,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        
    }
}

user.welcomeMessage()
user.username = "raj"
user.welcomeMessage()

function one(){
    let username = "hitesh"
    console.log(this.username); //-> undefined
}
one()

//****************************************************************************
//basic syntax -> () => {}

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4))

// implicit return
const addTwo2 = (num1, num2) => num1 + num2
console.log(addTwo2(3, 4))

//how to return object
const addTwo3 = (num1, num2) => ({username: "ams"}) //we must use ()
console.log(addTwo3())
