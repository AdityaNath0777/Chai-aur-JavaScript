// we don't always need to execute everything in the code

// thus we use if-else statments

// if

const isUserLoggedIn = true;
const temp = 41;

// if(isUserLoggedIn) {
//     console.log("Apka Swagat hai");
// }


// if(temp == "41") {
// if(temp === "41") {
// if(temp === 41) {
if(temp == 40) {
    console.log("Apka Swagat hai");
}

// Relational Operators
/*
    <, >, <=, >=, ==, !=, ===, !==

    // loose equality / ineq.
        ==, !=

    // strict equality / ineq (Does TypeChecking)
        ===, !==
*/


const balance = 400;

// not recommended
if (balance > 300) console.log("test 01"), console.log("test 02");


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true;
const loggedInFromEmail = true;

// AND operator
if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy Chhole Bhature");
}

// OR operator
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}


