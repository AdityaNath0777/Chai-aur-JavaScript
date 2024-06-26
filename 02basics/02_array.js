const marvel_heros = ["iron man", "spider man", "captain america", "thor", "hulk"];
const dc_heros = ["superman", "batman", "wonder woman", "cyborg", "flash", "aquaman"];

// let's try to join these arrays into a single array

// marvel_heros.push(dc_heros); // returns new len of the array
// console.log(marvel_heros);
// [
//     'iron man',
//     'spider man',
//     'captain america',
//     'thor',
//     'hulk',
//     [
//       'superman',
//       'batman',
//       'wonder woman',
//       'cyborg',
//       'flash',
//       'aquaman'
//     ]
//   ]

// const newArray = marvel_heros.concat(dc_heros) // returns new array
// console.log(newArray);

// another approach
// using "spread operator"

// const new_sp_array = [...marvel_heros, ...dc_heros];
// console.log(new_sp_array);


const anotherArr = [1, 2, 3, [4, 5], [6, 7, [8, 9]]]
console.log(anotherArr[3]); // [4, 5]
console.log(anotherArr[3][0]); // 5

// multi dim Arr -> lesser dim
// infinity -> 1D array
// const realAnotherArray = anotherArr.flat(Infinity);
// console.log(realAnotherArray);

let isArr = Array.isArray("koko"); // false
let newArr = Array.from("koko")   // [ 'k', 'o', 'k', 'o' ]

console.log(newArr);

// interesting ques
console.log(Array.from({name: "jojo"}));  // []  -> blank array
// it doesn't now what to do with key, val pair

console.log(Array.of(10, 11, 23));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));

// console.log(newArr.reverse()) // [ 'o', 'k', 'o', 'k' ]

