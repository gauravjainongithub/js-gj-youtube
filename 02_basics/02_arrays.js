const iCapitals = ["Moskow", "Washington DC", "New Delhi"]; //international capitals
const nCapitals = ["Jaipur", "Bangalore", "Mumbai"];  //national capitals

//iCapitals.push(nCapitals);
 //console.log(iCapitals);
// console.log(iCapitals[3][1]);

const allCapitals = iCapitals.concat(nCapitals);
console.log(allCapitals);

const all_capitals = [...iCapitals, ...nCapitals]; //spread operator, only work inside array 
console.log(all_capitals);


const another_array = [1,2,3,[4,5],6,7,[8,[9,10,11]]];
const real_another_array = another_array.flat(Infinity);//another_array.flat(2)
console.log(real_another_array);

console.log(Array.isArray("Gaurav")); //false
console.log(Array.from("gaurav")); //[ 'g', 'a', 'u', 'r', 'a', 'v' ]

console.log(Array.from({name: "gaurav"})); //[]  its very interesting case for interview purpose. we have to tell it whether array has to be created from keys or values of object.

let score1 = 100;
let score2 = 200;
let score3 = "gaurav";
let score4 = {name: "gaurav"};

console.log(Array.of(score1, score2, score3, score4)); // [ 100, 200, 'gaurav', { name: 'gaurav' } ]





