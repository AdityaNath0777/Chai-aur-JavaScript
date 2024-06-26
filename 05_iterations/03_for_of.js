// Array specific for loops

const arr = [1, 2, 3, 4, 5, "jojo"];

// for (const iterator of object) {
    
// }

// for (const num of arr) {
//     console.log(num); // returns element
// }


// on String

// const greetings = "Namaste Sabhi"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }


// Maps
// similar to array

const map = new Map()
/*
    holds -> key, value pair

    NOT allow Duplicates
*/
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");

console.log(map);
/*

    Map(3) {
    'IN' => 'India',
    'USA' => 'United States of America',
    'FR' => 'France'
    }

*/



// for (const key of map) {
//     console.log(key);
// }

/* returns elements as Array

    [ 'IN', 'India' ]
    [ 'USA', 'United States of America' ]
    [ 'FR', 'France' ]

*/



// for key, value pair
for (const [key, value] of map) {
    console.log(`${key} - ${value}`);
}


const myObject = {
    'game1' : 'NFS',
    game2 : "koko"
}

// forof -> thorws Error

// there's another way to implement it