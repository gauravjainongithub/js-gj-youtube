const name = "gaurav jain";
const repoCount = 50;

console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("gauravgjain");
console.log(typeof gameName);

console.log(gameName.__proto__);
console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName);

console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4);
const newString2 = gameName.substring(6,4);
console.log(newString);
console.log(newString2);

//const anotherString = gameName.slice(1,5);
const anotherString2 = gameName.slice(-7,5); //gameName = "gauravgjain";

//console.log(anotherString);
console.log(anotherString2);


const stringOne = "    gaurav          ";
console.log(stringOne);
console.log(stringOne.trim());
console.log(stringOne.trimStart());
console.log(stringOne.trimEnd());

const url = "https://gauravjain.com/gaurav%20jain";

console.log(url.replace('%20', '-'));

console.log(url.includes("gaur"));
console.log(url.includes("gaurav"));
console.log(url.includes("billu"));

const oneMoreString = "Gaurav-Jain-Great";
console.log(oneMoreString.split('-'));






