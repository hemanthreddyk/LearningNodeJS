const {
    spawn
} = require('child_process');


const child = spawn('node', ['timer.js'], {
    detached: true,
    stdio: 'ignore',
});

child.unref();

//node detach.js
//ps -ef | grep timer