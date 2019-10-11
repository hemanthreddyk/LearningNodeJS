const fs = require('fs');

// let content = fs.readFileSync("./files.js",{encoding:"utf8"});

// console.dir( content);

fs.readFile('./testfile.js', "utf8", (err, data) => {
    if (err) console.log(err);
    else {
        console.log(data);
        console.log("finished reading")
    }
});

console.log('after reading');

fs.writeFile("./testfile.js", "console.log('hello');", (err) => {
    if (err) {
        console.log(err);
    }else{
        console.log('Finished writing');
    }
});

console.log('after writing');

fs.appendFile("./testfile.js", "console.log('hi');", (err) => {
    if (err) {
        console.log(err);
    }else{
        console.log('Finished appending');
    }
});

console.log('after appending');



//test file data
// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";

// sayHi();