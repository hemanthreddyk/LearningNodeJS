const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];

const {
    Transform
} = require('stream');

const progress = new Transform({
    transform(chunk, encoding, callback) {
        process.stdout.write('.');
        callback(null, chunk);
    }
})

const testFile = fs.createWriteStream('./testfile');

for (let i = 0; i < 1e4; i++) {
    testFile.write('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
}
testFile.end();
testFile.on('finish', () => {
    fs.createReadStream(file)
        .pipe(zlib.createGzip())
        //.on('data', () => process.stdout.write('.'))
        .pipe(progress)
        .pipe(fs.createWriteStream(`${file}.zz`))
        .on('finish', () => console.log('Done'));
})



// node zip.js testfile.txt