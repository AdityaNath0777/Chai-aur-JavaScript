// console.log(Object.getOwnPropertyDescriptor(Math)); // undefined 
// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));
/**
 *
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
 */

// this value is so hard encoded in JS Engine and C++ Backend of JS that it is very very difficult to do it

// const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(descriptor);




const chai = {
    name: 'adrak Chai',
    price: 251,
    isAvailable: true
}

// const descriptor = Object.getOwnPropertyDescriptor(chai, 'name');

// console.log(descriptor);
/**
 * {
value: 'adrak Chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/


// but we can change property descriptor of values of our own Object

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
/**
 * {
  value: 'adrak Chai',
  writable: false,
  enumerable: false,
  configurable: true
}
 */

for (let [key, val] of Object.entries(chai)){
    // optimization so we don't log function definitions
    if(typeof value !== 'function'){
        console.log(`${key}, ${val}`);
    }
}
/** --> name is not enumerable, thus it couldn't get logged
 * price, 251
   isAvailable, true
 */

   chai.name = 'tulsi chai'
console.log(chai.name); // adrak chai -> as 'name' has been set as writable: false