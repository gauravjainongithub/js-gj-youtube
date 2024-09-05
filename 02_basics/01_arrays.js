const myArray = [0, 1, 2, 3, 4, 5];
const myHeroes = ["shaktiman", "naagraj"];

const myArray2 = new Array(1, 2, 3, 4);
console.log(myArray[0]);

//Array methods
myArray.push(6);
myArray.push(7);
myArray.pop();
console.log(myArray);

myArray.unshift(9);
myArray.shift();
console.log(myArray.includes(9));
console.log(myArray.indexOf(33));

const newArray = myArray.join();

console.log(myArray);
console.log(newArray);
console.log(typeof newArray); //string......it has converted array into string.

console.log("A", myArray);
const myn1 = myArray.slice(1,3);
console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1,3);
console.log(myn2);
console.log(typeof myn2);

console.log("c", myArray);








