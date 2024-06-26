function bolMeraNaam() {
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");
}

// bolMeraNaam()

                   // parameters
// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2)
// }

            // arguments
// const result = addTwoNumbers(3, "4");

// console.log("Result: ", result); // also returns undefined



// parameters
function addTwoNumbers(num1, num2){
    let result = num1 + num2;
    return result;
    // return num1 + num2;

    // unreachable code
    // console.log("abcd");
}

            // arguments
const result = addTwoNumbers(3, 5);

// console.log(`Result: ${result}`); // 8 


function loginUserMessage(username = "gol gappe"){
    // if no parameter passed
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return;
    // }

    // another approach
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("koko"))
// console.log(loginUserMessage())

              // +++  Rest operator(...)
function calculateCartPrice(val1, val2, ...num1){
    return num1; // REST returns Array

}

// console.log(calculateCartPrice(67)); // []

// console.log(calculateCartPrice(200, 450, 440, 122, 98, 199, 783));


const user = {
    username: "Spring Roll",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)

handleObject({
    username: "spring",
    price: 388,
})

const myNewArrray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log((returnSecondValue(myNewArrray)));
console.log((returnSecondValue([200, 400, 100, 600]))); 