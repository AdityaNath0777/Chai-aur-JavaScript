// array

const myArr = [0, 1, 2, 3, 4, 5, "jojo"];

const myArr2 = Array(0, 1, 2, 3, 4, 57, 8, 8)
const myArr3 = Array([0, 1, 2, 3, 4, 57, 8, 8]) //another valid approach

const arr2D = [0, 1, 2][2, 4, 5];
// console.log(myArr);
// console.log(myArr[0]);
// console.log(myArr2);
// console.log(arr2D); // undefined

const arr2Dim = [
    [0, 1, 2],
    [3, 4, 5]
];
const arr3Dim = [
    [[0, 1, 2],
    [3, 4, 5]
    ],
    [[0, 1, 2],
    [3, 4, 5]
    ],
    [[0, 1, 2],
    [3, 4, 5]
    ]
];

// console.log(arr2Dim); 
// // [ [ 0, 1, 2 ], [ 3, 4, 5 ] ]

// console.log(arr3Dim); 
// // [
// //   [ [ 0, 1, 2 ], [ 3, 4, 5 ] ],
// //   [ [ 0, 1, 2 ], [ 3, 4, 5 ] ],
// //   [ [ 0, 1, 2 ], [ 3, 4, 5 ] ]
// // ]


// console.log(myArr2);


// ++++++  Array methods  ++++++

// myArr2.push(9); // inserts ele at the last
// myArr2.pop(); // rmv ele from the last

// myArr2.unshift(10); // inserts ele at the start
// myArr2.shift(); // rmv ele from the start


//   // some questionaire type methods
//   console.log(myArr2.includes(9));  // true/false
//   console.log(myArr2.indexOf(57));  // 5

  // joins array elem into a "string"
const newArr = myArr2.join(); 
// // 0,1,2,3,4,57,8,8

// console.log(newArr);
// console.log(typeof newArr); // string
// console.log(myArr2);


    // slice & splice 
console.log("A ", myArr2);

const myna = myArr2.slice(1, 3);
console.log(myna); 
// last range exlcusive
   // No change in OG array

console.log("B ", myArr2);

const mynb = myArr2.splice(1, 3);
// splice is inclusive
  // most impt: it modifies the OG array
  // removes those elems from the OG array
console.log(mynb);

console.log("C ", myArr2);
// console.log();