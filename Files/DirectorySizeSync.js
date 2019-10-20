const fs = require('fs');

const directoryPath = '/Users/hemantke/Desktop/hemanth';

// /Users/hemantke/Desktop/integrations/test

function getDirectorySize(directoryPath) {
    let folderSize = 0;
    try {
        let files = fs.readdirSync(directoryPath);
        let remainingFiles = files.length;
        if (!remainingFiles) return folderSize;

        files.forEach((file) => {
            let filepath = `${directoryPath}/${file}`;
            // console.log('filepath -->', filepath)

            let stats = fs.lstatSync(filepath);

            if (stats.isFile()) {
                folderSize += stats.size;
            } else if (stats.isDirectory()) {
                folderSize += stats.size;
                folderSize += getDirectorySize(filepath);
            }
        })
        return folderSize;
    } catch (err) {
        console.log(err);
    }
}

console.log(getDirectorySize(directoryPath));