//asynchronus js? -> having ability to pause in a language. JavaScript don't have this behaviour, we have to inject it.

// having pause -> network calls (from server database, etc...)
//              -> write/read files
//              -> time functions
//              -> user input
//              -> many more...

console.log("Chai aur Code"); //-> execute first

function sayHello(){
    console.log("Hellooooo!")
}

setTimeout(()=>{
    sayHello()      //-> execute last
}, 4000)


//-> execute second
for (let index = 0; index < 10; index++) {
    console.log(index)
}
