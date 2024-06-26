// let myName = "MahaNayak                ";

// console.log(myName.trueLength);    // undefined
// console.log(myName.trim().length); // 9


let myHeros = ["thor", "Superman"]

let heroPower = {
    thor: "thunder",
    Superman: "Kryptonian",

    getSuperManPower: function(){
        console.log(`Superman's power is ${this.Superman}`);
    }
}

Object.prototype.Kailash = function(){
    console.log(`Apun har object me vaas karta hai`);
}

Array.prototype.heyKailash = function(){
    console.log(`Kailash sirf Array me vaas karega`);
}


// heroPower.Kailash()
// myHeros.Kailash()
// myHeros.heyKailash()  
// // heroPower.heyKailash()  // error, cuz heyKailash is not part of any Object



// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__ : TeachingSupport // protoype of Teaching Support
}

Teacher.__proto__ = User  // teacher is now prototype of User

// console.log(Teacher.name) // chai
// console.log(Teacher.makeAssignment); // undefined, cuz makeAssign is prop of TeachingSupport
// // and TASupport -> as it is a prototype of TeachingSupport


// Modern Syntax
                    // ( obj to change proto , proto)
Object.setPrototypeOf(TeachingSupport, Teacher);


let User2 = "Jai Siya Raam                     ";

String.prototype.trueLength = function(){
    console.log(`${this}`); // in fn, jisne call kiya uska ref hoga this me
    console.log(`true Length is: ${this.trim().length}`);
}

User2.trueLength() // 13
"Jaamun".trueLength() // 6
"Dilli Billi".trueLength() // 11


let obj2 = {
    key1: "jojo",
    key2: "koko",
    myfunc: function(){
        return this;
    },
    // myThis: this,
    myThis: null,
}

console.log(obj2.myfunc());
// { key1: 'jojo', key2: 'koko', myfunc: [Function: myfunc], myThis: {} }

console.log(obj2.myThis); // {} // when {myThis: this}


obj2.myThis = obj2.myfunc()
console.log(obj2.myThis.myThis.myThis); // {}

{/* <ref *1> {
  key1: 'jojo',
  key2: 'koko',
  myfunc: [Function: myfunc],
  myThis: [Circular *1]   // <---------- Circular Reference ( ≖‿ ≖ ) 
} */}