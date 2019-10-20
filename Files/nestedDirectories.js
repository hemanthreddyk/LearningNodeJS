const fs = require('fs');

let dirPath = '/Users/hemantke/Desktop/integrations/NestedFolders';

console.log(process.cwd())


// for(let i=1;i<=5;i++){
//     for (let j = 0; j < 200; j++) {
//         dirPath += '/'+i;
//         fs.mkdirSync(dirPath);
//     }
// }


for (let j = 0; j < 200; j++) {
    dirPath += '/'+j;
    fs.mkdirSync(dirPath);
}

for (let j = 200; j < 400; j++) {
    dirPath += '/'+j;
    fs.mkdirSync(dirPath);
}