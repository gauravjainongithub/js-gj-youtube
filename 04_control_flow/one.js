const temperature = 41;

if( temperature > 40 ){
    console.log("temperature gretaer than 40")
} else {
    console.log("temperature less than 40")
}
console.log("Execute");
//>, <, >=, <=, ==, ===. !==

const score = 200;

if( score > 100 ) {
    const power = "fly";
    console.log(`user power: ${power}`);
}
//console.log(`user power: ${power}`); //Error, because power has scope in if-else block only.

const balance = 1000;
//if(balance > 500) console.log("test"); //implicit scope(works in single line but with comma we can write multiple lines also). it works but code unreadable
//if(balance > 500) console.log("test") console.log("test1") //error because no semicolone after test
//if(balance > 500) console.log("test"), console.log("test1"), console.log("test2") //will work

if(balance < 500) {
    console.log("balance less than 1000")
} else if(balance < 750) {
    console.log("balance less than 1000")
} else if(balance < 900){
    console.log("balance less than 1000")
} else {
    console.log("balance is greater than 1200")
}


const userLoggedIn = true;
const debitcard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitcard && 2==3) {
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail ) {
    console.log("user allowed to log in");
}