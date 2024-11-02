const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums = myNumbers.map( (num) => num + 10 ); //[11, 12, 13, 14, 15,16, 17, 18, 19, 20]
newNums = myNumbers.map( (num) =>{
    return num + 10 
} );
console.log(newNums);

let numArr = [];
myNumbers.forEach( (num) => {
    num += 20;
    numArr.push(num);
} )
console.log(numArr);

console.log('********************************New example***********************************');
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myArr = arr
                .map( (num)=> num*10 )
                .map((num,index,arr) => num + 1);
console.log(myArr);
myArr = arr
        .map( (num)=> num*10 )
        .map((num,index,arr) => num + 1)
        .filter((num) => num > 40);
console.log(myArr);        