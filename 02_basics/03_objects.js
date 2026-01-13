// declaring object -> literals

const user = {
    name: "ayushmaan",
    age: 22,
    isMale: true,
    locations: "Kanpur",
    email: "ayush@solana.com",
    lastVisitedCity: ["Unnao", "Vrindavan", "Barsana"]
}

//Ways to access onbject elements
console.log(user.email)
console.log(user["email"])

// use symbol as a key in object and print it

const mySymbol = Symbol("key1")
const s = {
    //mySymbol: "mykey1" //can be accessible, but still it's not in use as a symbol.
    [mySymbol]: "mykey1" //the correct way to access symbol
}

console.log(s[mySymbol]); 


// change value of a key
user.email = "ayush@eth.com"

// lock the value -> cannot be changed
// Object.freeze(user)
user.email = "ayush@google.com"
console.log(user);

user.greeting = function(){
    console.log("Hello JS User");
}

console.log(user.greeting());
