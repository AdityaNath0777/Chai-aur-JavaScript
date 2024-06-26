// Truthy and falsy values

// const userEmail = "ji@jojo.ai"
// const userEmail = "0" // correponds to true
const userEmail = [] // true

if(userEmail){
// if({}){
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, 0n (BigInt), 
// empty str "", null, undefined, NaN


// truthy values
// "0", 'false', " ", [], {}, function (){} empty func


if(userEmail.length === 0){
    console.log("Array is Empty");
}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


// Nullisg Coalescing Operator (??): we look for null undefinec

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10; // 10
val1 = undefined ?? 10; // 10

// val1 = userEmail[0] ?? "KoKo" // KoKo

val1 = 0 ?? 10; // 0
val1 = false ?? 10; // false
val1 = null ?? 10 ?? 20; // 10

console.log(val1);


// Terinary Operator -> different Nullish Coalescing

// condition ? true : false
// similar to if else


const iceChaiPrice = 100

iceChaiPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");