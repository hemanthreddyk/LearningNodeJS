const tls = require('tls');
const fs = require('fs');

const options = {
    key: fs.readFileSync('./certs/server-key.pem'),
    cert: fs.readFileSync('./certs/server-cert.pem'),
    rejectUnauthorized: false,
};

let socket = tls.connect(8000, options, () => {
    console.log('client connected', socket.authorized ? 'authorized' : 'unauthorized');
    process.stdin.pipe(socket);
    process.stdin.resume();
});

socket.setEncoding('utf8');

socket.on('data', (data) => {
    console.log(data);
});

socket.on('end', () => {
    console.log('Ended');
});

socket.on('close', () => {
    console.log("Connection closed");
});

socket.on('error', function (error) {
    console.error(error);
    socket.destroy();
});