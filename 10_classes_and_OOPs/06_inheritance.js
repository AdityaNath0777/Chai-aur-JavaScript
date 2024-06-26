class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`UserName is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        // w/o using 'call'
        // super goes to class which we are extending
        super(username); // this automatically sends this to parent class 'User'
        this.email = email;
        this.password = password;

    }


    addCourse(){
        console.log(`A new course was added by '${this.username}'`);
    }
}


const chai = new Teacher("chai", "chai@mail.com", "123");

// chai.addCourse()
chai.logMe()

const masalaChai = new User("masala Chai");
masalaChai.logMe() //

console.log(chai instanceof Teacher); // true
console.log(chai instanceof User); // true
console.log(masalaChai instanceof User); // true
console.log(masalaChai instanceof Teacher); // false

