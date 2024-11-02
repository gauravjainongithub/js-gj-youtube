let userEmail = "gj@gaurav.ai";
//userEmail = [] or "";
if(userEmail) {
    console.log("got user email");
} else {
    console.log("dont have user email");
}

//falsey value:
//false, 0, -0,  0n (BigInt), "", null, undefined, NaN

//truthy values:
//"false", "0", " ", [], {}, function() {}

/*if(0n){

} else{
    console.log("fff");
}*/

const users = [];
if(users.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

console.log(false == 0);//true
console.log(false == ''); //true
console.log(0 == '');  //true

// NUllish Coalescing operator(?)

let val1;
//val1 = null ?? 10;  //10
//val1 = undefined ?? 15; //15
val1 = null ?? 50 ?? 20; //50

console.log(val1);

//Ternary operator

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80");