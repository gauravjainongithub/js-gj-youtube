
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("dsa is best");
    }
    console.log(element);
}
//console.log(element); error, out of scope

for(let i = 1; i <= 10; i++) {
    console.log(`outer value: ${i}`);
    for(let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
        //console.log(i + '*' + j + ' = ' + i*j);
    }
}

let myArray = ["batman", "spiderman", "superman"];

for(let i = 0 ; i < myArray.length; i++){
    console.log(myArray[i]);
}

for(let i =1; i < 20; i++){
    if(i == 5){
        console.log(`${i} detected`);
        break;
    }
    console.log(i);
}

for(let i =1; i <= 20; i++){
    if(i == 5){
        console.log(`detected ${i} `);
        continue;
    }
    console.log(i);
}