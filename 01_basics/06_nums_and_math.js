const score = 400;
console.log(score);

const balance = new Number(500);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));

const otherNumber = 17123.8965;
console.log(otherNumber.toPrecision(8));

const hundreads = 1000000000;
console.log(hundreads.toLocaleString('en-IN'));

//Number.MAX_VALUE

//++++++++++++++++++++++++Math+++++++++++++++++++++++++++++++++++++
console.log("************************Math*************************************");

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(9.1));
console.log(Math.floor(19.9));
console.log(Math.min(9,18,27,36));
console.log(Math.max(9,18,27,36));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

let min = 10;
let max = 20;

console.log(Math.floor(Math.random()*(max - min) + 1) + min);


