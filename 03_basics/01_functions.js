function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

let result = addTwoNumbers();
console.log(result); //NaN

let result1 = addTwoNumbers(3, 4);
console.log(result1); //7

let result2 = addTwoNumbers(3, null);
console.log(result1); //3

function loggedInUser(username = "Gaurav Jain GJ") {
    //if(username === undefined){
    if(!username) {
        console.log("Please enter username");
        return;
    }
    return `${username} just logged in.`
}
console.log(loggedInUser("Gaurav Jain"));
console.log(loggedInUser(" "));
console.log(loggedInUser(""));
console.log(loggedInUser());

//Functions with objects and Arrays

function calculateCarePrice(...num) {
    return num; //[10, 20, 30, 40]
}

console.log(calculateCarePrice(10, 20, 30, 40));

function calculateCarePrice1(value1, value2, ...num) {
    return num; //[30, 40]
}
console.log(calculateCarePrice1(10, 20, 30, 40));

const user = {
    username: "gaurav",
    price: 199
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
handleObject({
    username: "Sam",
    price: 399
});

const mynewArray = [100, 200, 300 ,1000];
function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([100, 200, 300 ,1000]));