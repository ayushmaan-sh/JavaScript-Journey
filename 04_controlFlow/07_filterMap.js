// const lang = ["Rust", "JavaScript", "Python", "Java"]

// const values = lang.forEach((item)=>{
//     return item;
// })

// console.log(values);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let result = numbers.filter((n) => n > 4)
console.log(result);


//how to do above operation without filter?
const pushedValues = []

numbers.forEach((num) => {
    if (num > 4) {
        pushedValues.push(num)
    }
})

console.log(pushedValues);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const genreBooks = books.filter((bk) => {
    return bk.genre === 'Non-Fiction'
})

const publishedBooks = books.filter((bk) => {
    return bk.publish >= 2000;
})

const history1995 = books.filter((bk) => {
    return bk.genre === 'Histroy' && bk.publish >= 1995
})

console.log(history1995);


//map
const newNum = numbers.map((n)=>{
    return n+10
})
console.log(newNum);


//chaining in map
const anotherNum = numbers.map((n)=> n*10)
                          .map((n)=> n+1)
                          .filter((n)=> n >= 50)
console.log(anotherNum);  



//reduce

const threeValue = [1,2,3,4]

const myTotal = threeValue.reduce((acc, currentValue)=>{
    console.log(`Accumulator: ${acc} | CurrentValue: ${currentValue}`);
    
    return acc + currentValue
},0)

console.log(myTotal);
