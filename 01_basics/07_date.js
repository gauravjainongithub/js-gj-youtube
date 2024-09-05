let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof (myDate.toJSON()));

console.log(typeof myDate);

let myCreateDate = new Date(2024, 7, 30, 5, 19);
console.log(myCreateDate);
console.log(myCreateDate.toLocaleString());

let date1 = new Date("2024-08-30");
console.log(date1.toLocaleString());

let myTimeStamp = Date.now(); //typeof myTimeStamp is number so date functions wont work here, date functions work wih date Object.
console.log(myTimeStamp);
console.log(date1.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long"
})); //need to explore more




