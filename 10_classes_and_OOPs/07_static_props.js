class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`UserName: ${this.username}`)

    }

    
    // when we don't want some props to not be instancied to other classes
    // prevents access of this from other classes
    // static createID(){
    //     return `${Number(Date.now()).toPrecision(3)}123`;
    // }
    
    // createID(){
    //     return `${Math.floor(Math.random()*100 + 1)}123`;
    // }

}

const jaadu = new User("Jaadu")
// console.log(jaadu.createID());  // error after static


class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email
    }
}


const myPhone = new Teacher("My Phone", "my@phone.com")
console.log(myPhone.createID()); // error

