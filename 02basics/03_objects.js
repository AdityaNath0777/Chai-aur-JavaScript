// singleton

/**
 * made from constructor
 *  apne trh ka ek hi object hai
 * 
 */

// object literals
const mySym = Symbol("key1");

const jsUser = {
    // keys and value pair
    name: "kailash",
    "full name": "Kailash Nath",

    // correct way to use Symbol as key
    [mySym]: "mykey1",
    // mySym: "mykey1", // incorrect way

    age: 27,
    location: "uttrakhand",
    email: "kailashhumain@uk.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],

}

// ways to access elements in JS objects
// console.log(jsUser.name);   // preferred metho
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]); // only possible way for this type of key
// // console.log(jsUser."full name");  // Error!!

// ways to access symbol in object
// console.log(jsUser[mySym]); // correct way for Symbol
// console.log(jsUser.mySym);

// Object.create -> constructor method // singleston is made from it


jsUser.email = "heropanti@mail.com";
// Object.freeze(jsUser); // changes will not propagate
// ALthough change attempt will not throw any Error!!


// console.log(jsUser);
// jsUser.name = "hero"
// console.log(jsUser); // no effect of name change


jsUser.greeting = function(){
    console.log(`Namaskar, ${jsUser.name}!`);
}
console.log(jsUser);

console.log(jsUser.greeting); // returns fn reference
console.log(jsUser.greeting()); // an extra undefined