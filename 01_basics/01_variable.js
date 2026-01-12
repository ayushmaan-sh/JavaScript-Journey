const accountId = 144553
let accountEmail = "ayushmaanshukla@gmail.com"
var accountPassword = "Ayush@24"
accountCity = "Kanpur" // It's possible but a bad practice
let accountState;

// const accountId = 1234  -> Not Allowed

accountEmail = "ayushmaan@gmail.com"
accountPassword = "Ayush@4567"
accountCity = "Mathura" 


/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
