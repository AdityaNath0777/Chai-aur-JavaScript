const user = {
    username: "GoGo",
    loginCount: 7,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from DataBase");
        // console.log(`Username: ${username}`); // error
        // // username -> not defined
        // // it is not aware of username within this object
        
        // console.log(`Username: ${this.username}`);


        console.log(this); // returns object definition
    }

    // 'this' -> always used for 'current context'
}


// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this); // {} -> empty obj ->Global Object

// By default in Browser
// Global Obj -> Window Object


// another user
// again defining same from scratch 
// time consuming -> Not Scalable
const user2 = {
    username: "DoDo",
    loginCount: 7,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from DataBase");
        // console.log(`Username: ${username}`); // error
        // // username -> not defined
        // // it is not aware of username within this object
        
        // console.log(`Username: ${this.username}`);


        console.log(this); // returns object definition
    }

    // 'this' -> always used for 'current context'
}


// Constructor fn
// 'new' -> constructor fn
// to create new context
// const promiseOne = new Promise()
// const date = new Date()



function User(username, loginCount, isLoggedIn){
    // myUserName = username;
    // username = username;

    // LHS -> variable
    // RHS -> args
    // console.log(this);
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // console.log(`new this -> `, this);
    return this; // it is also implicitly returns

}

// const userOne = User("koko", 6, true)
// const userTwo = User("yoyo", 6, true)

// console.log(userOne); // data of user two. Why??
// console.log(userTwo); // bcz user two overwrites it completely


// constructor fn -> gives a new instance
// a new copy
// Not reference



const userOne = new User("koko", 6, true)
const userTwo = new User("yoyo", 6, true)
console.log(userOne); 
console.log(userTwo);



/*
    Steps
    in new -> 
    1) creates empty Obj -> called Instance
    2) Constrcutor fn called due to 'new' keyword
    3) Data injected into it using 'this'
    4) returns it
*/