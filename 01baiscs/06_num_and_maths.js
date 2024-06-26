const score = 400;
// console.log(score); // 400

// const balance = new Number(100)
// console.log(balance); // [Number: 100]

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(typeof balance.toString())  // string

// console.log(balance.toFixed(2)); // 100.00

// const num1 = 123.562;
// const num2 = 123.362;
// const num3 = 1123.362;
// console.log(num1.toFixed(1));
// console.table([num1.toPrecision(5), num2.toPrecision(4), num3.toPrecision(10)]);
// console.log(num3.toPrecision(10));

const hundreds = 1000000000
// console.log(hundreds.toLocaleString()); // default -> US system 
console.log(hundreds.toLocaleString('en-IN')) // use indian system




// ********* MATHS ***************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6)); 
console.log(Math.ceil(4.6));  // ceil -> top -> max val
console.log(Math.floor(4.6));  // floor -> bottom -> min val
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));


console.log(Math.random());  // always returns randomm val
// b/w (0, 1)

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    let num =  Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    // although chance is very very less
    // but if random() = 1.0 then it might 
    // return value greater than the expected value
    if (num >= maxFloored)
      return maxFloored;
    else 
      return num;
  }
  
console.log(getRandomIntInclusive(0, 10));

let myNum = getRandomIntInclusive(0, 10)
while(true){
  if(myNum == 11){
    console.log("11 found brooooo");
    break;
  }
  console.log(myNum);
  myNum = getRandomIntInclusive(0, 10);
}