const fs = require('fs');
const filePath = './Tests';

let file = fs.readdirSync(filePath);

console.log(`\nThis is the initial content in the file: \n${file}`);

fs.watch(filePath,(event,filename)=>{
    console.log(`There was a ${event} at ${filename}`);
    file = fs.readdirSync(filePath);
    console.log(`\nThe file now contains: \n${file}`);
})