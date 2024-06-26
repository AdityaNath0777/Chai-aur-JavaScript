// for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


// Nested for loop

// for (let i = 0; i <= 10; i++) {
//     console.log("Outer loop: ", i);
//     for (let j = 0; j <= 10; j++) {
//         const element = i*j;

//         console.log(`${i} * ${j} = ${element}`);
        
//     }
//     // empty line
//     console.log();
    
// }

let myArray = ["Superman", "shinchan", "Goku", "Doraemon", "Spiderman"];
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // if(element === "Doraemon")
    //     break;

    if(element === "shinchan")
    continue;

    console.log(element);

    
}

// out of scope in Array
// myArray[myArray.length] => undefined