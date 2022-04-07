const fs = require('fs');

// Using fsreadfile function to read the file.txt

// fs.readFile('file.txt','utf8', (err,data)=>{
//     console.log(err,data);
// })

// const a = fs.readFileSync('file.txt')
//     console.log(a.toString());

// console.log("Bye Bye see ya");

// Here we see that Bye Bye got print before file.txt because it follows non blocking io model due to 
// callback function previous command was taking a little extra time i.e it get prints first then read file
// comes into picture


 fs.writeFile("file.txt","Data is here",()=>{
    console.log("Written in the file");
});

console.log("Finished reding file..");

