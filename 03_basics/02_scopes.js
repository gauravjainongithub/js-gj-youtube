let a = 10;
const b = 20;
var c = 30;
console.log(a);
console.log(b);
console.log(c);

//var f = 900;
let d = 100;
if(true) {
    let d = 10;
    const e = 20;
    //var f = 300;
    //f = 199;
    console.log("Inner:", d);
}
console.log(d);
//console.log(e);
//console.log(f);

//SCOPE part 2

function one() {
    const username = "gaurav";
    
    function two() {
        const website = "youtube";
        console.log(username);
    }
    //console.log(website); since it is defined only in func two scope so it throws error here and once error is thrown all next steps 
    two();
}
one();

// example 2 below
if(true) {
    const username = "jain";
    if(username === "jain") {
        const website = " youtube";
        console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);

//++++++++++++++++++interesting++++++++++++++++++

addOne(5);
function addOne(num) {
    return num + 1;
}
//addOne(5);


addTwo(5);
const addTwo = function(num) {
    return num + 2;
}
//addTwo(5);