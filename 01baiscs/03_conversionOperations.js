// let score = "33abc";
// let score = undefined;
let score = true;

// here no guarantee the score is a Number
// const {score} = req.body;

// console.log(typeof(score)); // string

let valInNumber = Number(score);
 
// console.log(typeof valInNumber); // number
// console.log(valInNumber); // 33
    // if score = "33abc"
       // NaN  (not a number)
       // although it will still say the type is a number
    //    but value will still be NaN
    
// "33" => 33
// "33abc" => NaN
// true/false => 0/1



let isLoggedIn = "No"; // .log() => -0

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
// console.log(isLoggedIn)

// "No", "yes" => true
// "" => false
// null, undefined, NaN, 0, -0 => false
// -0.1, 0.1, 1 => true


let someNum = 33;

let strNum = String(someNum);
// console.log(strNum);  // 33
// console.log(typeof strNum);  // string

// Mathematical Operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**4); // => 2^4 = 16 
// console.log(2%4); // => remainder of (2/4) = 2 



let str1 = "Haalo"
let str2 = " YoYo"

let str3 = str1 + str2; // string concatenation
console.log(str3);

// console.log("1" + 2);       // 12
// console.log(1 + "2");       // 12
// console.log("1" + 2 + 2);   // 122
// console.log(1 + 2 + "2");   // 32

// console.log( (3 + 4) * 5 % 3);  // 2

console.log(+true); // 1
// console.log(true+); // Error
console.log(+"");   // 0
// console.log(""+);   // 0



// go read increment operator

let num1, num2, num3
// this way is also correct but not recommended
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion