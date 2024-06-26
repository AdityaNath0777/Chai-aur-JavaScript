/**
 * A Promise is in one of these states:

    * pending   :  initial state, neither fulfilled nor rejected.
    * fulfilled :  meaning that the operation was completed successfully.
    * rejected  :  meaning that the operation failed.

 */
// we consume a promise
// promise is an Object
// it takes a callBack fn
const promiseOne = new Promise(function (resolve, reject) {
    // do an async task
    // e.g. DB calls, cryptography, N/W
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)
});


// then has direct connection with resolve
// promiseOne.then(function(){
//     console.log("promise consumed");
// }) // no o/p -> cuz no connection established b/w 'then' & 'resolve'

// after resolve() has been called
promiseOne.then(function () {
    console.log("promise consumed");
}) // now it gives o/p



new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2');
        resolve();
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");
})



const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // can also pass values from 'resolve' to 'then'
        resolve({ username: "Chai", email: "chai@example.com", myArr: [1, 2, 3, 4, 5] });
        // resolve({ username: "Chai", email: "chai@example.com"}, [1, 2, 3, 4, 5] ); // invalid
        // resolve only takes one value
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
    console.log("My Array: ", user.myArr);

})



const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "MoMo", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// now let's consume promise
// & to avoid CallBack Hell
// const username = promiseFour.then((user) => {
promiseFour
    .then((user) => {
        console.log(user);
        return user.username; // where is it going?
    }).then((username) => {
        console.log("2nd catch", username);
    }).catch(function (error) {
        console.log("error after 2nd catch", error);
    }).finally(() => console.log("The promise is either resolved or rejected"))

// console.log("koko", username); // ye to sabse phle print ho gya








// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username: "javaScript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// })

// // async & await
// async function consumePromiseFive(){
//     // ERROR!! -> catch block is req
//     // const response = await promiseFive
//     // console.log(response );


//     try{
//         const response = await promiseFive
//         console.log(response );

//     } catch (error){
//         console.log(error);
//     }

// }

// consumePromiseFive()


// async function getAllUsers() {
// Error
// const response = await fetch('https://jsonplaceholder.typicode.com/users')
// const data = response.json()
// console.log(data);

// *****   try-catch format ******
// try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     // console.log(response);
//     // const data = response.json()
//     const data = await response.json(); // this also takes time
//     console.log(data);
// } catch(error){
//     console.log("E: ", error);
// }  
// }

// getAllUsers();



fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))