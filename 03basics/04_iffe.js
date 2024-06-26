// Immediately Invoked Function Expression (IFFE)

 //   // global scope ke pollution se bachane ke liye

// (function chai(){
//     console.log(`DB Connected`);
// })()

// // // let's try with Arrow function
// // (() => {
// //     console.log(`DB Connected Two`);
// // })()

// // is it really Arrow functions fault ?
// (function aurCode(){
//     console.log(`DB Connected Three`);
// })()
// // Damn!!, again Error!!!



// just use ";" semicolon my dost
    // it didn't know, when to stop, so we used ";"

(function chai(){
    // named IIFE
    console.log(`DB Connected`);
})();

// let's try Again
((name) => {
    // unnamed IIFE
    console.log(`DB Connected Two ${name}`);
})("Hiro");
(function aurCode(){
    console.log(`DB Connected Three`);
})();
// Now it worked!!!!!! \(^ * ^)/


