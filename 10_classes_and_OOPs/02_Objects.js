function multipleBy5(num){
    return num*5;
}

multipleBy5.power = 2;

console.log(multipleBy5(5));        // 25
console.log(multipleBy5.power);     // 2
console.log(multipleBy5.prototype); // {}, empty Obj

// this means, Funtion is also an Object

// Now, .prototype also gives some property


// let num = 2;
// num.koko = "jojo"
// console.log(num.koko); // undefined


// let Num2 = Number(2)
// Num2.koko = "MoMo"
// console.log(Num2.koko); // undefined



function createUser(username, score){
    this.username = username;
    this.score = score;
}

let obj1 = {
    username: "JoJo",
    score: 60
}
console.log(obj1);

createUser(obj1)

console.log(obj1);


createUser.prototype.increment = function(){
    // score++;
    this.score++; // this matlab -> jis, // jisne ne bhi bulaya hai uska
}
createUser.prototype.printMe = function(){
    // console.log(`Namaste user, ${this.username}`);
    console.log(`Score is: ${this.score}`);
}

// // printMe() -> not defined
// const chai = createUser("chai", 25)
// const tea = createUser("tea", 250)

// 'new' bcz it (variables) didn't know about New properties in prototypes
const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe(); // 25


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/