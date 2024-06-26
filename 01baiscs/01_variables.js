// hoistedVariable = 3;
// console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
// var hoistedVariable

const acID = 1234;
let acName = "Hiro panti"
var acCountry = "Bharat"
acEmail = "Hiro@jojo.com"
let acState;


// acID = 19;  /* Error !!!!! */

console.log(acID);

console.table([acID, acName, acEmail, acCountry]);
console.log(acState);


/* 
    Prefer NOT to use 'var'
      -> bcz of issue in block scope and funfctional scope
*/