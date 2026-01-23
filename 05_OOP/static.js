class Calculator{
    //static methods can only be called by the class itself, nobody else can call or use it.
    static add(a, b){
        return a+b
    }
}

// let miniCalc = new Calculator()
// console.log(miniCalc.add()); -> error
console.log(Calculator.add(2, 4))
