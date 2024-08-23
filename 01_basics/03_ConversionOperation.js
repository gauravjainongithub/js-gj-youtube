let score = "33abc";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);

console.log(valueInNumber);

console.log(typeof valueInNumber);
console.log("************************************************");
let marks = "99abc";
let total = Number(marks);
console.log(typeof total); //it would print number since ype of NaN is number.
console.log(total);
console.log("************************************************");

let a = null;

let b = Number(null);
console.log(typeof b); 
console.log(typeof a);

//"33" => number
//"33abc" => NaN
//true => 1, false =>0

console.log("************************************************");

let isLoggedIn = "";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log("************************************************");

let someValue = "false";

let stringValue = String(someValue);
console.log(stringValue);
  console.log(typeof stringValue);
     