const fs = require('fs');
console.log(BigInt(0)+BigInt(1));
const directoryPath = '/Users/hemantke/Desktop/integrations/test';
// /Users/hemantke/Desktop/integrations/test


function getDirectorySize(directoryPath){
    return new Promise((resolve,reject)=>{
        let Folder = {
            size: 0//BigInt(0)
        };
        fs.readdir(directoryPath,(err,files)=>{
            if(err) reject();
            let remainingFiles = files.length;
            if(!remainingFiles) resolve();

            files.forEach((file)=>{
                let filepath = `${directoryPath}/${file}`;
                fs.lstat(filepath, (err, stats) => {
                    if(err) throw err;
                    if (stats.isFile()) {
                        // console.log(stats.size)
                        Folder.size += stats.size;
                        if (!--remainingFiles) callback(null, Folder);
    
                    } else if (stats.isDirectory()) {
                      //  Folder.size += stats.size;
                        getDirectorySize(filepath, (err, res) => {
                            if(err) throw err;
                            Folder.size += res.size;
                            if (!--remainingFiles) callback(null, Folder);
                        });
                    }
                });
            })
        })
    })
}



function getDirectorySize1(directoryPath, callback) {
    let Folder = {
        size: 0//BigInt(0)
    };

    fs.readdir(directoryPath, (err, files) => {
        if (err) throw err;
        let remainingFiles = files.length;
        if (!remainingFiles) return callback(null, Folder);

        files.forEach((file) => {
            let filepath = `${directoryPath}/${file}`;
            fs.lstat(filepath, (err, stats) => {
                if(err) throw err;
                if (stats.isFile()) {
                    // console.log(stats.size)
                    Folder.size += stats.size;
                    if (!--remainingFiles) callback(null, Folder);

                } else if (stats.isDirectory()) {
                  //  Folder.size += stats.size;
                    getDirectorySize(filepath, (err, res) => {
                        if(err) throw err;
                        Folder.size += res.size;
                        if (!--remainingFiles) callback(null, Folder);
                    });
                }
            });
        });
    });
}


getDirectorySize(directoryPath, (err, res) => {
    if (err) throw err;
    console.log(res.size)
});