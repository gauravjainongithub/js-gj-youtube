//primitive

//Number, boolean, string, null, undefined,bigInt,symbol

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = true;
const outSideTemp = null;

let userEmail = undefined;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigIntNum = 34534264563457375677n;
console.log(bigIntNum);



//call by reference(non-primitive)
//Array, objecr, function

const arr = [2, "gaurav", true];
let obj = {
    name: "gaurav",
    rollNo: 1
};
const fn = function() {
    console.log("Hello world");
    
}

console.log(typeof bigIntNum);
console.log(typeof arr);
console.log(typeof obj);
console.log(typeof fn);

//https://262.ecma-international.org/