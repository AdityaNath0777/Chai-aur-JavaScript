const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// map
/*
    Calls a defined callback function on each element of an array, 
    and returns an array that contains the results.
*/
// let newNums = myNumbers.map( (num, index, arr) => num + 10)
// console.log(newNums);

// newNums = []
// myNumbers.forEach( (num) => {
//     newNums.push(num + 10);
// })

// console.log(newNums);

// chaining
// const newNums = myNumbers.map((num) => num * 10).map((num) => num + 1)
const newNums = myNumbers
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num >= 40)


console.log(newNums);

const sinArr = myNumbers.map((item, index, arr)=> Math.sin(item) )
console.log(sinArr);