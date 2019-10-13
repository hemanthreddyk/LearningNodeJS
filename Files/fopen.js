const fs = require("fs");
const filePath = "./testfile.js";

fs.open(filePath, 'r', (err, fd) => {
    if (err)
        return console.error(err);
    console.log(`File Opened...`);
    let buffr = Buffer.alloc(1024);
   
    fs.read(fd, buffr, 0, buffr.length, 0, (err, bytes) => {
        if (err)
            return console.error(err);

        if (bytes > 0) {
            console.log(buffr.toString());
        }
    });

    fs.close(fd, (err) => {
        if (err)
            return console.error(err);
        console.log(`File Closed...`);
    })
});