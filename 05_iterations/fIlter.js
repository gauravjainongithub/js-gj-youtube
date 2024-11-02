const coding = ["js", "java", "goLang", "python", "react"];

const values = coding.forEach((item) => {console.log(item)});
console.log(values); //undefined, since forEach loop doesn't return any value.

//****************Filter method **************************************
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNums = myNums.filter( (num) => num >4);
console.log(newNums);//[ 5, 6, 7, 8, 9, 10 ]

//****************Filter method 2 **************************************
newNums = myNums.filter( (num) => {
    return num >4;
} );
console.log(newNums);//[ 5, 6, 7, 8, 9, 10 ]

//****************method 3(writing filter with forEach loop)*********************************
let nums = [];
myNums.forEach( (num) => {
    if(num > 4){
        nums.push(num);
    }
} );
console.log(nums); //[ 5, 6, 7, 8, 9, 10 ]

const books = [
    {title: 'Book 1', genre: 'Fiction', published: 1999, edition: 2004},
    {title: 'Book 2', genre: 'Non-Fiction', published: 2001, edition: 1996},
    {title: 'Book 3', genre: 'economics', published: 1993, edition: 2022},
    {title: 'Book 4', genre: 'science', published: 1996, edition: 2024},
    {title: 'Book 5', genre: 'jainism', published: 2024, edition: 1988},
    {title: 'Book 6', genre: 'science', published: 2020, edition: 1999},
    {title: 'Book 7', genre: 'Non-Fiction', published: 2020, edition: 2002},
    {title: 'Book 8', genre: 'Fiction', published: 2002, edition: 2002},
    {title: 'Book 9', genre: 'Non-Fiction', published: 2002, edition: 2020},
    {title: 'Book 10', genre: 'Fiction', published: 1988, edition: 2020},
    {title: 'Book 11', genre: 'jainism', published: 2022, edition: 2000},
];

let userBooks = books.filter( (book) => book.genre === "jainism" );
console.log(userBooks);

userBooks = books.filter( (book) => {return book.published >= 2020} );
userBooks = books.filter( (book) => {
    return book.published >=2000 && book.genre === 'jainism'
} );
console.log(userBooks);

