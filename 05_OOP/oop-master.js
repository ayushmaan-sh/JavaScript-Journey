let EliteACDB = {
    mcb: "havells",
    spd: "sibass",
    box: "Idis-IP-67",
    description: function(){
        return `MCB: ${this.mcb}, SPD: ${this.spd}`
    }
}

// console.log(EliteACDB.description());



function TaxInvoice(firmName, itemName, billAmount, paymentStatus){
    this.firmName = firmName
    this.itemName = itemName
    this.billAmount = billAmount
    this.paymentStatus = paymentStatus
}

let rudraEnteprises = new TaxInvoice("Rudra Enterprises", "Prime-Combo", 250000, "Paid")
console.log(rudraEnteprises);
console.log(rudraEnteprises.billAmount);

// Prototyple Chain


function Combo(type, mcb, spd, fuseHolder){
    this.type = type
    this.mcb = mcb
    this.spd = spd
    this.fuseHolder = fuseHolder
}

Combo.prototype.eliteCombo = function(){
    return `Item: ${this.type}, Description : MCB-${this.mcb}, SPD-${this.spd}, Fuse Holder-${this.fuseHolder}`
}

const elite = new Combo("Elite Combo ACDB-DCDB", "Havells", "Sibass", "Sibass")
let result = elite.eliteCombo()
console.log(result);


// classes -> under the hood, they are prototype

class Vehicle{
    constructor(make, model){
        this.make = make
        this.model = model
    }

    start(){
        return `${this.model} is a car model from ${this.make}`
    }
}

//inheritance
class Car extends Vehicle{
    drive(){          //We are not using constructor here because it already inerited from Vehicle class.
        return `${this.make} : This is an inheritance example`
    }
}

let myCar = new Car("Tata", "Nexon")
console.log(myCar.start());
console.log(myCar.drive());

let vehicleOne = new Vehicle("Tesla", "Model X")
console.log(vehicleOne);


//Encapsulation -> restrict the direct access to the object data.

class BankAccount {
    #balance = 856 //by putting an # before variable name, it'll not be avaible to use to anyone.

    deposit(amount){
        this.#balance += amount
        return this.#balance
    }

    getBalance(){
        return `Rs.${this.#balance}`
    }
}

let account = new BankAccount()
console.log(account.getBalance());


// Abstraction -> hides the complex implementation details. Whatever you're doing behind the scence, keep doing it.

class CoffeMachine{

    start(){
        //call DB
        //filter value
        return `Starting the machine`
    }

    brewCoffee(){
        //complex calculations
        return `Brewing The Coffee`
    }

    pressStartButton(){
        let startTheMachine = this.start()
        let brewTheCoffee = this.brewCoffee()
        return `${startTheMachine}....${brewTheCoffee}`
    }
}

let makeCoffee = new CoffeMachine()
// console.log(CoffeMachine.start());
// console.log(CoffeMachine.brewCoffee());
console.log(makeCoffee.pressStartButton());


// Polymorphism -> more then one form.

class Bird{
    fly(){
        return `Flying...`
    }
}

class Penguin extends Bird{
    fly(){
        return `Oops, penguins can't fly!`
    }
}

let bird = new Bird()
let penguin = new Penguin()

console.log(bird.fly());
console.log(penguin.fly());
