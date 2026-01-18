//1. Declare an array named `teaFlavors` that contains the strings "green tea", "black tea" and "oolong tea"
//Access the first element of the array and store it in a variable named `firstTea`

let teaFlavors = ["green tea", "black tea", "oolong tea"]
let firstTea = teaFlavors[0]
console.log(`First tea: ${firstTea}`);


//2. Declare an array named `cities` containing "London", "Tokyo", "Paris" and "New York".
// Access the third element in the array and store it in a varibale named `favoriteCity`.

let cities = ["London", "Tokyo", "Paris", "New York"]
const favoriteCity = cities[2]
console.log(favoriteCity);


//3. You have an array named `teaTypes` containing "herbal tea", "white tea" and "masala chai".
// Change the second element of the array to "jasmine tea".

let teaTypes = ["herbal tea", "white tea", "masala chai"]
teaTypes[1] = "jasmine tea"
console.log(teaTypes);


//5. You have an array named "teaOrders" with "chai", "iced tea", "matcha", and "earl grey"
// Remove the last element of the array using the `pop` method and store it in a vriable named `lastOrder`.

let teaOrders = ["chai", "iced tea", "matcha","earl grey"]

let lastOrder = teaOrders[3]
teaOrders.pop()
let lastOrder = teaOrders.pop()
console.log("Last Order: ",lastOrder);

console.log(teaOrders);

//6. You have an array named "pupularTeas", containing "green tea", "oolong tea" and "chai".
// create a soft copy of this array and name it "softCopyTeas"

let popularTeas = ["green tea", "oolong tea", "chai"]
let softCopyTeas = popularTeas

popularTeas.pop()//softCopyTea and popularTea is having the reference of same array in the memory. (softCopy tea is not refering to popularTea). So whatever change or activities we do, it's happen with both variables.

console.log(softCopyTeas);
console.log(popularTeas);

//7. You have an array named topCities containing "Berlin", "Singapore" and "New York".
// Create a hard copy of this array named "hardCopyCities"

let topCities = ["Berling", "Singapore", "New York"]
let hardCopyCities = [...topCities] //creates a separate copy of the array

// let hardCopyCities = topCities.slice() -> another way

//8. You have two arrays: "europeanCities" containing "Paris" and "Rome", and "asianCities" containing "tokyo" and "bangkok",
//merge these arrays into a new array named "worldCities"
let europeanCities = ["Paris", "Rome"]
let asianCities = ["Tokyo", "Bangkok"]

let worldCities = [...europeanCities, ...asianCities]
