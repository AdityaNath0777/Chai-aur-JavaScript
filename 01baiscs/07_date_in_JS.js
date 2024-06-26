// Dates

let myDate = new Date()
// console.log(myDate);                  // 2024-06-10T09:46:53.056Z
// console.log(myDate.toString());       // Mon Jun 10 2024 15:14:57 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());   // Day Mon Date Year
// console.log(myDate.toLocaleString()); // MM/DD/YYY, hr:min:sec AM/PM
// console.log(typeof myDate);           // object

    // Date (Y, M index, D, hr, min, sec, ms)
// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")  // "YYY-MM-DD"
// let myCreatedDate = new Date("01-14-2023")  // "MM-DD-YYY"
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // no. of ms passed since Jan 1, 1970 UTC
// UTC -> universal Coordinated Time

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// // month index -> [0, 11]
// // but in real life -> [1, 12]
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// example to use in real life application
// `${newDate.getDay()} and the time `


// further customizations
console.log(newDate.toLocaleString('default', {
    weekday: "long",
    
})
); // Monday
