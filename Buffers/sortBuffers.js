let buf1 = Buffer.from('b');
let buf2 = Buffer.from('c');
let buf3 = Buffer.from('a');

let arr = [buf1,buf2,buf3];

console.log(arr);

arr.sort(Buffer.compare);

console.log(arr);