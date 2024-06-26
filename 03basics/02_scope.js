// var c = 30  // global scope

// // Block Scope
// let a = 10
// const b = 20

var c = 27354;
if(true){
    var c = 30  // global scope
    
    // Block Scope
    let a = 10
    const b = 20
    
}

// console.table([a, b, c]) // error, why?

// let's check
// console.log(a); // error
// console.log(b); // error
// console.log(c); // 30, ohhh bete... ye to kaam kar gya

one()
function one(){
    const username = "chowmein";
    
    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website); // error as it's out of scope

    two();
}

// two()  // error, not defined as it's out of scope
// one(); // chowmein