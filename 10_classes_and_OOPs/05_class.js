// ES6

// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}dbz`
//     }

//     changeUsername(){
//         return`${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@email.com", "123")

// console.log(chai.encryptPassword()); // 123dbz
// // console.log(chai); // User { username: 'chai', email: 'chai@email.com', password: '123' }      
// // console.log(typeof chai); // obj

// console.log(chai.changeUsername());  // CHAI




// Behind The Scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;

}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const tea = new User("tea", "tea@mail.com", "456");

console.log(tea.encryptPassword());  // 456abc
console.log(tea.changeUsername())    // TEA



