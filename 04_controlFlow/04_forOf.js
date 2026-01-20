//for of loop -> an array specific loop

const arr = [1,2,3,4,5,6,7,8,9,10]

for (const element of arr) {
    console.log(element);
}

//Maps

const map = new Map()
map.set('IN', "India")
map.set('RSA', "Russia")
map.set('USA', "United States of America")
console.log(map);

for (const [key, value] of map) {
    console.log(key,'=>',value);
}

// Note -> Objects are not iterable by for-of loop.
