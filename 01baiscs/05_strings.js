const name = "Aditya"
const repoCount = 51

// console.log(name + repoCount + " Value");

// template literals
    // it use Back-ticks -> `` and ${}
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// ${} is called "placeholder"
    // used to evaluate and embed expressions dynamically in template literals.

const gameName = new String('AdityaNath')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(-8, -4)
// console.log(newString);
//     // if -ve value given
//     // start, end will have the value '0'

// const anotherString = gameName.slice(-3, 4)
// console.log(anotherString); 
// -5, 4 -> empty string
// 8, 4 -> it
// -6, 4 -> empty string

// trim works with -> white spaces and line terminators
const newStringOne = "   mera    Naam         ";
console.log(newStringOne);
// let's concatenate to check the end spaces
console.log(newStringOne.trim() + "koko");


// const url = "https://google.com/sunday market";
const url = "https://google.com/sunday%20market";

console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));
console.log(url.includes('sunday'));

// split -> (separator, limit)
const joke = 'Jojo-koko-momo'
console.log(joke.split("-")); 