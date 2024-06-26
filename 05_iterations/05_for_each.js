const programming = ["js", "cpp", "py", "rb", "swift"];

// for each is a method in Array prototype
// programming.forEach( callBack fn() )
    // callback does not have any Name if we define it inside the forEach

// programming.forEach( function (val) {
//     // val got referenced to elements in array
//     if(val == "js")
//     val = "JavaScript"
//     console.log(val);
// })

// Arrow fn is also valid
// programming.forEach( (item) => {
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}

// // NOTE: -> only pass Fn REFERENCE
// programming.forEach(printMe);
// // do not execute it using () parathesis


// programming.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })


// Array of objects
const myCoding = [
    {
        langName: "JavaScript",
        langExtension: "js" 
    },
    {
        langName: "Java",
        langExtension: "java"
    },
    {
        langName: "C++",
        langExtension: "cpp"
    },
    {
        langName: "Python",
        langExtension: "py"
    }
]


myCoding.forEach((item, index, arr) => {
    console.log(item.langName);
    console.log(index);
    console.log(arr);
})

let forEachReturn = myCoding.forEach((item, index, arr) => {
   if (item.langExtension === 'js'){
    item.SuperiorForWebDev = true;
   }
   else {
    item.SuperiorForWebDev = false;
   }
})

console.log(myCoding)
console.log(forEachReturn); // undefined