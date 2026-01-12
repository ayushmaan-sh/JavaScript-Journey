// Date
// Date is an object

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())

let myCreateDate = new Date(2023, 0, 23)
console.log(myCreateDate);
console.log(myCreateDate.toDateString());

let dateFormats = new Date("02-24-2003")
console.log(dateFormats);

let myTimeStamps = Date.now()
console.log(myTimeStamps);
