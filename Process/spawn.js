const {
    spawn
} = require('child_process');

const child = spawn('pwd');
//const child = spawn('find',['.','-type','f']);
//const child = spawn('find',['asd','-type','f']);

child.stdout.on('data',(data)=>{
    console.log(`child stdout:\n${data}`);
});

child.stderr.on('data',(data)=>{
    console.error(`child stderr:\n${data}`);
});

child.on('error', (code,signal) => {
    console.log(`child process errored out with code ${code}, signal ${signal}`)
});

child.on('exit', (code, signal) => {
    console.log(`child process exited with code ${code}, signal ${signal}`)
});

child.stdout.pipe(process.stdout);
//events: disconnect, error, message, close
//stdio objects : child.stdin, child.stdout, child.stderr