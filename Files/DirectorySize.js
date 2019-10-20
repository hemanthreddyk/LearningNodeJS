const fs = require('fs');
//console.log(BigInt(0)+BigInt(1));
const directoryPath = '/Users/hemantke/Desktop/hemanth';
// /Users/hemantke/Desktop/integrations/test
let dirCount = 0;

function getDirectorySize(directoryPath, callback) {
    let Folder = {
        size: 0//BigInt(0)
    };

    fs.readdir(directoryPath, (err, files) => {
        //console.log('directoryPath -->', directoryPath)
        if (err) callback(err, null);
        let remainingFiles = files.length;
       // console.log(remainingFiles);
        if (!remainingFiles){
            callback(null, Folder);
        }  else{
            files.forEach((file) => {
            
                let filepath = `${directoryPath}/${file}`;
               // console.log(filepath + "dirCount : "+dirCount);
                fs.lstat(filepath, (err, stats) => {
                    if(err) callback(err, null);
                    if (stats.isFile()) {
                        // console.log(stats.size)
                        Folder.size += stats.size;
                        if (!--remainingFiles) callback(null, Folder);
    
                    } else if (stats.isDirectory()) {
                      //  Folder.size += stats.size;
                      getDirectorySize(filepath, (err, res) => {
                        if(err) callback(err, null);
                        Folder.size += res.size;
                        if (!--remainingFiles) callback(null, Folder);
                    });
                    }
                });
            });
        }
        
    });
}


getDirectorySize(directoryPath, (err, res) => {
    if (err) console.log(err);
    else {
        console.log(res.size)
    }
});