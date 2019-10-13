const url = require('url');
const addr = 'http://localhost:3000/default.htm?year=2019&month=10';

let q = url.parse(addr,true);

console.log(q);
console.log(q.query);
console.log(q.query.year);