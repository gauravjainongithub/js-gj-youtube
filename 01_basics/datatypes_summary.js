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


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//stack(primitive), Heap(non-primitive)
//stack is used for primitive datatypes and heap is used for non-primitive data types.
//in stack, copy of the variable provided while in heap reference of the original value is provided.

let value1 = "gj";
let value2 = value1;
value2 = "jain";
console.log(value1);
console.log(value2);

let obj1 = {
    email: "gj@visa.com",
    upi: "gj@yml"
}

let obj2 = obj1;
obj2.email = "gj@gmail.com";

console.log(obj1.email);
console.log(obj2.email);

//stack is used by primitive data type and heap is used by non-primitive data type.when variable is cretaed on stack then only a copy of the variable is used at time of modification. 

//Those are created on heap(non-primitive) they are accessed by their reference means any change u do will happen in actual place.