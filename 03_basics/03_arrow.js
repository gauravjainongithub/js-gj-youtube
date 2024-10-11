const user = {
    username: "gaurav",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();

user.username = "Tata";
user.welcomeMessage();  
console.log(this);

function chai(){
    console.log(this);//a very long output,plz chek by running it
}
chai(); 

/*function chai(){
    let username = "Mbappe";
    console.log(this); //a very long output,plz chek by running it
    console.log(this.username);//undefined since this doesn't work in functions.
}
chai();
*/

/*const tea = function chai(){
    let username = "Mbappe";
    console.log(this);//a very long output,plz chek by running it
    console.log(this.username);//undefined since this doesn't work in functions.
}
tea();
*/

const milk = () => {
    const username = "gaurav";
    console.log(this.username); //undefined
    console.log(this); //{}
}
milk();

const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(3,4));

//const addTwo2 = (num1, num2) => num1 + num2; //output 9
//const addTwo2 = (num1, num2) => (num1 + num2); //these parantheses are used when we have to return an object, without these parantheses u cant return object(without using curly braces method). see below example
const addTwo2 = (num1, num2) => ({username: "gj"}); 
console.log(addTwo2(3,6));

//if we use curly braces in arrow function then we hve to write return keyword.

// const myArray = [2,5,7,9];
// myArray.forEach(() => {});
// myArray.forEach(() => ()); //these are the ways we use arrow function on arrays function. just an example

