const person = {
    name: "Ayushmaan",
    greet(){
        console.log(`He, I am ${this.name}`); //this.name is getting contect of "Ayushmaan"
    }
}

person.greet()

const greetFunction = person.greet //context is missing
greetFunction() //undefined

const boundGreet = person.greet.bind({name: "Raj"}) //injecting context
boundGreet()

// bind, call and apply
