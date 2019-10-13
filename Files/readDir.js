const fs = require('fs');

// const files = fs.readdirSync('./'); //sync
// console.log(files);

fs.readdir('./',{withFileTypes:true},function(err,files){
    if(err){
        console.log('Error ',err);
    }else{
        console.log('Result ',files);
       files.forEach((file)=>{console.log(file.isFile())});
    }

})