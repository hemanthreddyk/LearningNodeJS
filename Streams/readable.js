const {
    Readable
} = require('stream');

// const inStream = new Readable({});

// inStream.push('asdfghjklqwertyui');
// inStream.push(null);

const inStream = new Readable({
    read(size) {
        setTimeout(() => {
            if (this.currentCharCOde > 90) {
                this.push(null);
                return;
            }
            this.push(String.fromCharCode(this.currentCharCOde++));
        }, 100);
    }
});

inStream.currentCharCOde = 65;
inStream.pipe(process.stdout);

//node readable.js | head -c3
process.on('exit', () => {
    console.error(`\n\ncurrentCharCode is ${inStream.currentCharCOde}`);
})

process.stdout.on('error', process.exit);