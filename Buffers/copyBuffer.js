let buf1 = Buffer.from("abcdefghijk");
let buf2 = Buffer.from("HELLO");

buf2.copy(buf1,2,0,2);

console.log(buf1.toString());


var buf = Buffer.from('abc');
console.log(buf);
for (x of buf.entries()) {
  console.log(x);
}
