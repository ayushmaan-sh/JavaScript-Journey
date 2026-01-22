let EliteACDB = {
    mcb: "havells",
    spd: "sibass",
    box: "Idis-IP-67",
    description: function(){
        return `MCB: ${this.mcb}, SPD: ${this.spd}`
    }
}

console.log(EliteACDB.description());



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
