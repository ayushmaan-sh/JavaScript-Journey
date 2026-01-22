// Prototype - Extra properties and functionalities in any given data type

// old way -> __proto__
let computer = {cpu: 12}
let lenovo = {
    screen: "HD",
    __proto__: computer
}
let tomHardware = {}

console.log(`lenovo`, lenovo.__proto__);

//new way -> setPrototypeOf, getPrototypeOf. But only works on Objects

let Car = {tyre: 4}

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, Car)

console.log(`Tesla Tyre `, Object.getPrototypeOf(tesla));
