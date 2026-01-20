const lang = ["Rust", "JavaScript", "Python", "Java"]

//with normal function
lang.forEach(function (coding_languages) {
    console.log(coding_languages);
})

// arrow function
lang.forEach((coding_languages) => {
    console.log(coding_languages);
})

// defining function outside the loop the give reference to the forEach loop

function printMe(coding_languages) {
    console.log(coding_languages);
}

lang.forEach(printMe)

console.log('********************************************');

// the for each loop also include the other parameters -> the index number and the full arraylist.

lang.forEach((coding_languages, index, arr) => {
    console.log(coding_languages, index, arr);
})


const users = [
    {
        firstName: "Ayushmaan",
        lastnameName: 'Shukla'
    },
    {
        firstName: "Raj",
        lastnameName: 'Pandey'
    },
    {
        firstName: "Deepak",
        lastnameName: 'Mishra'
    }
]

users.forEach( (name) => {
    console.table(name);
})
