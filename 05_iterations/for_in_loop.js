const myObject = {
    js: "Javascript",
    cpp: "C++",
    ror: "Ruby on Rails",
    swift: "swift by apple"
};

for(const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ["js", "ruby", "python", "cpp", "grails"];
for(const key in programming) {
    console.log(key); //it prints key or index of array like 0,1,2,3,4
    console.log(programming[key]);
}

const map = new Map();
map.set("IN", "India");
map.set("NP", "Nepal");
map.set("BTN", "Bhutan");
map.set("IN", "India"); 
console.log(map); ////Map(3) { 'IN' => 'India', 'NP' => 'Nepal', 'BTN' => 'Bhutan' }

for(const key in map) {//since map is not iterable so code will not run here.
    console.log("**************");
    console.log(map[key]); 
}