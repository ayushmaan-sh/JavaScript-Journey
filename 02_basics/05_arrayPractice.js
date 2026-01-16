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


//5. Declare an array named `citiesVisited` containing "Mumbai" and "Sydney".
// Add Berlin to the array

let citiesVisited = ["Mumbai", "Sydney"]
citiesVisited.push("Berlin")
console.log(citiesVisited);
