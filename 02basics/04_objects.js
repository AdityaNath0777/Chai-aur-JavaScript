// const tyndallUser = new Object();
const tyndallUser = {};

// console.log(tyndallUser);  // {}, empty object

tyndallUser.id = "123abc"
tyndallUser.name = "jitaindra"
tyndallUser.isLoggedIn = false;

// console.log(tyndallUser);

const regularUser = {
    email: "regular@mail.com",
    fullName: {
        userFullName: {
            firstName: "GoGo",
            lastName: "MoMo"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3: "c",
    4: "d"    
}

// const obj3 = {obj1, obj2} // object of object
            //    .assign(target, src1, src2, ...)
const obj3 = Object.assign({}, obj1, obj2)

// const obj3 = {...obj1, ...obj2}

// console.log(obj3);


const User = [
    {
        id: 1,
        email: "mymail.com"
    },
    {
        id: 1,
        email: "mymail.com"
    },
    {
        id: 1,
        email: "mymail.com"
    },
]


// console.log(tyndallUser);

// console.log(Object.keys(tyndallUser));   // returns an array
// console.log(Object.values(tyndallUser)); // returns an array
// console.log(Object.entries(tyndallUser)); // returns key, value pair as an array

// console.log(tyndallUser.hasOwnProperty('isLoggedIn'));


// +++++   Object Destructuirng   +++++

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "JoJo"
}

const {courseInstructor: instructor} = course;

// console.log(courseInstructor);
console.log(instructor);

// JSON basics

// {
//     "name": "raja",
//     "email": "koko@mail",
//     "age": "999"
// }

// also JSON
// [
//     {},
//     {},
//     {}
// ]