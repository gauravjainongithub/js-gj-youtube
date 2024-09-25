const tinderUser1 = new Object();

const tinderUser = {};
console.log(tinderUser1);
console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "Vivian";
tinderUser.isLoggedIn = false;

const regularUser = {
    email: "some@test.com",
    fullname: {
        userfullname: {
            fname: "gaurav",
            lname: "jain"
        }
    }
}

console.log(regularUser.fullname.userfullname.lname);

//console.log(regularUser.fullname?.userfullname.lname);  in later videos

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "e", 6: "f"};

const obj3 = {obj1, obj2}; //this is not the right way to combine two objects.actually 2 objects would be inside of an object only

console.log(obj3); //output : { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj = Object.assign({}, obj1, obj2, obj4);
console.log(obj); //output: {1: 'a', 2: 'b', 3: 'a', 4: 'b', 5: 'e', 6: 'f'}

//if we do Object.assign(obj1, obj2, obj4) then it will alter obj1 object since it would be treated as target object and rest source objects

//this below is the most common syntax to use object merging
const obj5 = {...obj1, ...obj2, ...obj4}; 
console.log(obj5);

const dbObj = [
    {
        id: 1,
        name: "gj"
        
    },
    {},
    {}
];

console.log(dbObj[0].name);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//OBJECT DESTRUCTURE AND JSON API INTRO

const course = {
    courseName: "JS in Hindi",
    price: 999,
    courseInstructor: "Gaurav Jain"
}

//course.courseInstructor------------this is traditional way to access

const {courseInstructor} = course;

console.log(courseInstructor);

const {courseInstructor : instructor} = course;
console.log(instructor);

//below is json example
{
    "name" : "GJ",
    "coursename": "JS in hindi",
    "price": "free"
}

