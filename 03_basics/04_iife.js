//Immediate Invoked Function

function chai() {
    console.log(`DB Connected`);
}
chai(); //we can invoke function in this way also but sometimes we dont want any pollution in our function from global scope and thats why we define iife.

//IIFE below
(function chai() {
    console.log(`DB Connected`);
})();

(() => {
    console.log(`DB connected two`);
})();

((name) => {
    console.log(`DB connected for ${name}`);
})('Gaurav Jain');