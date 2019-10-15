const fs = require('fs');
const server = require('http').createServer();

server.on('request',(req,res)=>{
    //Following code tries to buffer the whole file in memory
    // fs.readFile('./big.file',(err,data)=>{
    //     if(err) throw err;
    //     res.end(data);
    // });

    const src = fs.createReadStream('./big.file');
    src.pipe(res)
    .on('finish',()=>{console.log('done')});
    
});

server.listen(3000);