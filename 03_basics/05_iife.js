// IIFE - Immediately Invoked Function Expression
// Global scope ke pollution se problem hoti hai kayi baar, to us global scope ke jo declaration ya jo bhi variables hai, uske pollution ko htane ke liye hamne IIFE ka use kiya.


//normal function
// function connect_db(){
//     console.log(`DB CONNECTED`);
// }
// connect_db()

//named IIFE
(function connect_db(){
    console.log(`DB CONNECTED`);
})(); //-> we have to use ; to stop the execution of IIFE function otherwise it'll give an error.


//arrow function
(()=>{
    console.log(`CONNECTION ESTABLISHED`);
})();


//input parameters
((name)=>{
    console.log(`Hi, my name is ${name}!`); 
})('Ayushmaan')
