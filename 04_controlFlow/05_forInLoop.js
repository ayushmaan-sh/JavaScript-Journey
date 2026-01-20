const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(key); -> print only keys
    // console.log(myObject[key]); -> print values
    console.log(`File extension name for ${myObject[key]} is ${key}`);
}

//for in loop can be used in arrays also?

const lang = ['rust', 'java', 'python', 'javascript']

for (const key in lang){
    // console.log(key); -> print the keys, means the index position number of the elements
    console.log(lang[key]);
}
