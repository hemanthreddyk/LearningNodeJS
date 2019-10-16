const http = require('http');
const pid = process.pid;

http.createServer((req,res)=>{
    for(let i = 0;i < 1e7 ;i++);
    res.end(`Handled by process ${pid}\n`);
}).listen(3000,()=>{
    console.log(`Started process ${pid}`);
});

//Terminal-1 : node cluster.js
//Terminal-2 : curl localhost:3000