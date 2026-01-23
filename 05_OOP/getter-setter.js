class Empolyee{
    #salary
    constructor(name, salary){
        if(salary < 0){
            throw new Error("Salary cannot be negative")
        }
        this.name = name
        this.#salary = salary
    }

    get salary(){
        return `Can't access the salary`;
    }

    set salary(value){
        if(value < 0){
            console.error("Invalid Data");
        } else {
            this._salary = value
        }
    }
}

let emp = new Empolyee("Ayushmaan", 20000)
console.log(emp._salary);
emp.salary = 30000
