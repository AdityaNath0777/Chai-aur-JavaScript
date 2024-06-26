// reduce

const myNums = [1, 2, 3, 4];

// // const myTotal = myNums.reduce((acculmulator, currentVal) => experssion, initial_value_for_accumulator )
// const myTotal = myNums.reduce(function (acc, currentVal) {
//     console.log(`acc: ${acc} and current value: ${currentVal}`);
//     return acc + currentVal;
// }, 0 );

// e.g. used in shopping cart

const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 1999
    },
    {
        itemName: "Data Science course",
        price: 3999
    },
    {
        itemName: "Game Dev course",
        price: 4999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

let myLength = shoppingCart.reduce((acc) => acc += 1, 0)
console.log(myLength);

let multiply = shoppingCart.reduce((acc, curr) => acc *= curr.price, 1)
console.log(multiply);
