class User {
    // remember -> class is just a wrapper
    // under the hood it calls prototypes
    constructor(email, password){
        // conetxt ke property = arg from the function
        this.email = email;
        this.password = password;
    }


    // get hai to set bhi hoga
    // -> jis property ki val get, set karni hai usi ka name use karna hai
    get password(){
        // infinite call
        // race b/w contructor and get, set to set the value of password
        // return `${this.password}abc`;

        // so we'll make new prop
        // _prop -> will make it smiliar to private variable
        return `${this._password}abc`;
    }


    // setter -> does not return, they are assigning/setting the value
    set password(value){
        // infinite call
        // race b/w contructor and get, set to set the value of password
        // this.password = value


        // so we'll make new prop
        // _prop -> will make it smiliar to private variable
        this._password = value
    }


    get email(){
        return `${this._email.toUpperCase()}`;
    }
    set email(value){
        this._email = value;
    }
}

const Aditya = new User("hi@adi.aum", "123")
// console.log(Aditya.password); // 123 -> before getter, setter

console.log(Aditya.password); // 123abc
console.log(Aditya.email); // HI@ADI.COM