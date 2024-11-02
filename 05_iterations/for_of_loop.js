const arr = [1,2,3,4,5];
for( const num of arr) {
    console.log(num);
}

const greetings = "Hello world!";
for(const greet of greetings) {
    console.log(`Each char is: ${greet}`);
}

const map = new Map();//MAP is an object and contains unique values only as compart to objects.
map.set("IN", "India");
map.set("NP", "Nepal");
map.set("BTN", "Bhutan");
map.set("IN", "India"); 
//console.log(map); ////Map(3) { 'IN' => 'India', 'NP' => 'Nepal', 'BTN' => 'Bhutan' }

for(const key of map) {
    console.log(key); /*[ 'IN', 'India' ]
                        [ 'NP', 'Nepal' ]
                        [ 'BTN', 'Bhutan' ] */
}

for(const [key, value] of map){
    console.log(key + ":-" + value);
}

const myobj = {
    'game1' : 'NFS',
    'game2' : 'Sitoliya'
}
/*for(const key of myobj) {
    console.log(key); // this for-of loop doesnt work on object.
}*/