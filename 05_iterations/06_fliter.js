// const coding = ["js", "cpp", "py", "rb", "swift"];

// const values = coding.forEach((item, index, arr) => {
//     // console.log(item);
//     return item; // does not return anything
//     // thus will return undefined
// })

// console.log(values); // undefined



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => num > 4) // returns element satisfying the condition

// // empty array
// const newNums01 = myNums.filter( (num) => { // opening scope
//     // inside arrow fn, when we start a scope
//     // we need to return explicitly
//     return num > 4;
// })

// console.log(newNums);
// console.log(newNums01);

const newNums = []

// filtering using "forEach"
myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})


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


let userBooks = books.filter( (bk) => bk.genre === 'History')
                              // 
userBooks = books.filter( (bk) => bk.publish < 2009) 

userBooks = books.filter( (bk) => bk.genre === 'History' && bk.publish >= 1995) 

console.log((userBooks));


userBooks = books.filter((item, index, arr) => item.edition > 2000 && item.genre === 'Science')
console.log(userBooks);