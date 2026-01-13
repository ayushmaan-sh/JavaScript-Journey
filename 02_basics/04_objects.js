// declaring object through singleton / constructor

// const facebookUser = new Object() // singleton object
const facebookUser = {} // non singleton object

console.log(facebookUser); //empty object

facebookUser.id = "01"
facebookUser.userName = "Ayushmaan"
facebookUser.isLoggedIn = false

console.log(facebookUser);

// objects inside object

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        username: {
            firstName: "Ayushmaan",
            lastName: "Shukla"
        }
    }
}
console.log(regularUser.fullName);

//Use of "?". ? Checks if the key exists or not. Gives a sort of protection!
console.log(regularUser.fullName?.username?.firstName);

// merge objects

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "x", 5: "y", 6: "z"}
// const obj3 = {obj1, obj2} -> will return object inside object (just like array)
// const obj3 = Object.assign({}, obj1, obj2) -> rarely used
const obj3 = {...obj1, ...obj2}
console.log(obj3);

// syntax of data comes form database. -> An array, which has many objects inside.
const users = [
    {
      id: 1,
      email: "a@gmail.com"  
    },
    {
      id: 2,
      email: "b@gmail.com"  
    },
    {
      id: 3,
      email: "c@gmail.com"  
    },
]
console.log(users[1].email);

//IMPORTANT -> mainly used while building projects and working with database.
console.log(Object.keys(facebookUser)); // -> return datatype: array. Which means, we can apply loop on it and do many other operations
console.log(Object.values(facebookUser));
console.log(Object.entries(facebookUser)) // -> makes arrays of key-value pairs inside an array.
