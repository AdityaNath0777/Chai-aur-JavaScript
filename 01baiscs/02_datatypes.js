"use strict"; // treat all JS code as newer version

// Error!! 
// alert( 3 + 3 ); // we are using node js, not browser

console.log(3+3);
console.log("Raam Raam");

// DataTypes

// number => 2 power 53
// bigInt => for numbers > number
// string => "" seq of chatacters in quotes   
// boolean => true/false
// null => standalone value
// undefined => uninitialised / not defined
// symbol => unique

// object
// array

// let arr = [1, 2, 3]
// console.log(typeof "hello"); // string
// console.log(typeof arr); // object
// console.log(typeof null); // object, it is kind of error in JS itself
// console.log(typeof undefined); // undefined




//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // false

// bigInt literal must be an integer
// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

// JS is a prototype-based language, so there are only primitive types and objects. 
// Implementation of all non-primitive values in JavaScript is object-based.
// Simply put, JavaScript has a single prototypical object 
    // from which all other objects get their initial properties.
    // We can get it by accessing __proto__.

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Giyan",
    age: 777,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof heros); // object
// console.log(typeof myObj); // object
// console.log(typeof anotherId); // symbol    


console.log(Array.prototype); // object[0] []
console.log(Object.getPrototypeOf(Array).__proto__); // object[0] []
/**
 * // The prototypical object of every object
{
  constructor: ƒ Object()
  hasOwnProperty: ƒ hasOwnProperty()
  isPrototypeOf: ƒ isPrototypeOf()
  propertyIsEnumerable: ƒ propertyIsEnumerable()
  toLocaleString: ƒ toLocaleString()
  toString: ƒ toString()
  valueOf: ƒ valueOf()
  __defineGetter__: ƒ __defineGetter__()
  __defineSetter__: ƒ __defineSetter__()
  __lookupGetter__: ƒ __lookupGetter__()
  __lookupSetter__: ƒ __lookupSetter__()
  __proto__: (...)
  get __proto__: ƒ __proto__()
  set __proto__: ƒ __proto__()
}
 */

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Primitive (from Stack) and Non-Primitive(from Heap)
//  * call by value          * call by reference
//  * makes a copy           * returns a pointer to the loc

let newName = "Phalgun Maas"
let newObj = {
    type: "month",
    name: "phalgun"
}

let cName = newName;
let cnewObj = newObj;

cName = "koko";
console.table([newName, cName]);

cnewObj.type = "maas"
console.table([newObj, cnewObj]);