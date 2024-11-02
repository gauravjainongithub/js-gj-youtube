const coding = ["JS", "typescript", "GoLang", "grails", "webpack"];
coding.forEach( function(item) {
    console.log(item);
} );

coding.forEach((item) => {
    console.log(item);
});

function printMe(item) {
    console.log(item);
}
coding.forEach(printMe);

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})


const myCOding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCOding.forEach((item) => {
    console.log(item.languageFileName);
})