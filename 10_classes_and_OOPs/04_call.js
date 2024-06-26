function setUserName(username) {
    // complex DB Calls
    console.log(this.username); // undefined
    this.username = username;
    console.log(username);      // chai Baba
    console.log(this.username); // chai Baba

    // if called w/o 'call' and passing 'this'
    // console.log(this);    // global EC
}

function createUser(username, email, password) {
    console.log("this hai ye: ", this) // this hai ye:  createUser {}
    // setUserName(username); // this username is different and in the createUser's param is Different

    // to hold the reference, we use 'call'
    setUserName.call(this, username); // now, 'this' passes on the current context

    // cuz wo hote he EC se gayab ho jaa rahe the

    this.email = email;
    this.password = password;

}

// using 'new' keyword to get access
const chai = new createUser("chai Baba", "chai@baba.com", "123");

// chai.username = "chai Raga"  // error -> Cannot set properties of undefined (setting 'username')

console.log(chai); // createUser { email: 'chai@baba.com', password: '123' }