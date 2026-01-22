function Person(name, age){
    this.name = name //-> refering to the newly created object
    this.age = age
}

function Car(make, model){
    this.make = make
    this.model = model
}

let myCar = new Car("Toyota", "Camry")
console.log(myCar);

let myNewCar = new Car("Tata", "Safari")
console.log(myNewCar);



function Tea(type){
    this.type = type
    this.describe = function (){
        return `this is a cup of ${this.type} tea`
    }
}

let lemonTea = new Tea("lemon")
console.log(lemonTea.describe());


function Animal(species){
    if(!new.target){
        throw new Error("There's some error, please check!");
        
    }
    this.species = species
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}

let dog = new Animal("Dog")
console.log(dog.sound());
