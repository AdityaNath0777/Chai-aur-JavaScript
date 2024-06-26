 const user = {
    username: "jojo",
    price: 999,

    welcomeMessage: function() {
        // 'this' refers to the current context
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
        // // Error!! : username not defined
        // console.log(`${username}, welcome to website`);
    }
 }

// user.welcomeMessage()
// user.username = "gojo"
// user.welcomeMessage()

// console.log(this); // empty object

// inside the browser, it returns Window object

// there, Window is the global object


// function chai(){
//     let username = "hitesh"
//     // console.log(this); // inside node env, it gives some result

//     // inside fn
//     console.log(this.username); // undefined
//     {
//         // again undefined
//         console.log(this.username); // undefined

//     }
// }

// chai()

/*
        <ref *1> Object [global] {
        global: [Circular *1],
        queueMicrotask: [Function: queueMicrotask],
        clearImmediate: [Function: clearImmediate],
        setImmediate: [Function: setImmediate] {
            [Symbol(nodejs.util.promisify.custom)]: [Getter]
        },
        structuredClone: [Getter/Setter],
        clearInterval: [Function: clearInterval],
        clearTimeout: [Function: clearTimeout],
        setInterval: [Function: setInterval],
        setTimeout: [Function: setTimeout] {
            [Symbol(nodejs.util.promisify.custom)]: [Getter]
        },
        atob: [Getter/Setter],
        btoa: [Getter/Setter],
        performance: [Getter/Setter],
        fetch: [AsyncFunction: fetch]
}

*/


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // undefined
// }

// chai()



// const chai = () => {
//         let username = "hitesh"
//         console.log(this); // {}, empty object
        
//         console.log(this.username); // undefined

// }
 
// chai()


// // explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// // implicit return
// const addTwo = (num1, num2) => ( num1 + num2 )


// // to return object implicitly
const addTwo = (num1, num2) => ({username: "lassi", age: num1, classSchool: num2} )
console.log(addTwo(3, 8)); 

const myArray = [2,5,6,7,8]

// myArray.forEach( function(){})
// myArray.forEach( () => {})


/**
 * An arrow function expression is a compact alternative 
         to a traditional function expression, with some semantic differences and deliberate limitations in usage:

    * Arrow functions don't have their own bindings to this, arguments, or super, 
         and should not be used as methods.
    * Arrow functions cannot be used as constructors. 
         Calling them with 'new' throws a TypeError. They also don't have access to the new.target keyword.
    * Arrow functions cannot use 'yield' within their body 
         and cannot be created as generator functions
 */