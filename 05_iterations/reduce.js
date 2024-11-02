const myNum = [1, 2, 3];
let total = myNum.reduce(function(acc, currVal) {
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal;
}, 0)
console.log(total);

//******************with arrow function */

//total = myNum.reduce(() => (), 0);

total = myNum.reduce( (acc, curr) => acc + curr, 5);
console.log(total);

const shoppingCart = [
    {
        course: "JS course",
        price: 2999
    },
    {
        course: "py course",
        price: 999
    },
    {
        course: "mobile dev course",
        price: 5999
    },
    {
        course: "Data science course",
        price: 12999
    }
];

let priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0);
console.log(priceToPay);