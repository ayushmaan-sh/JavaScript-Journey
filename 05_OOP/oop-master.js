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
