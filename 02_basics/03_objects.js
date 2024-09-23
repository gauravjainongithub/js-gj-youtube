const objTest = {};
//Object.create()-----it is constructor method and it creates singleton object only.

//below method is literal method and multiple instance of the object can be created by this way.
const mysym = Symbol("mykey1");

const obj = {
    name: "Gaurav",
    "full name": "Gaurav Jain",
    email: "gjain@visa.com",
    location: "Jaipur",
    [mysym]: "ProjectKey",
    isLoggedin: false,
    lastLoggedinDays: ["Sunday", "Friday"]
};     
//system process name key as "name".
console.log(obj.email);
console.log(obj["email"]);
console.log(obj["full name"]);
console.log(obj[mysym]);    //Imp
console.log(typeof mysym);
console.log(typeof obj[mysym]);
console.log(mysym);

obj.name = "Jain";
console.log(obj.name);

//Object.freeze(obj);
obj.email = "test@google.com";
console.log(obj.email);
console.log(obj);

obj.greeting1 = function() {
    console.log(`Hello JS user`);
}
obj.greeting2 = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(obj.greeting1);
console.log(obj.greeting1());
console.log(obj.greeting2());
