const {
    spawn
} = require('child_process');

// //shell mode
// const child = spawn('find . -type f', {
//     stdio: 'inherit',
//     shell: true,
//     cwd: '/Desktop'
// });

// change current working directory
// const child = spawn('find . -type f |wc -l', {
//     stdio: 'inherit',
//     shell: true,
//     cwd: '/Users/hemantke/Desktop'
// });


const child = spawn('echo $HOME', {
    stdio: 'inherit',
    shell: true,
    //  env:{}
});