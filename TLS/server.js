// $ openssl genrsa -out server-key.pem 4096
// $ openssl req -new -key server-key.pem -out server-csr.pem
// $ openssl x509 -req -in server-csr.pem -signkey server-key.pem -out server-cert.pem

const tls = require('tls');
const fs = require('fs');

const options = {
    key: fs.readFileSync('./certs/server-key.pem'),
    cert: fs.readFileSync('./certs/server-cert.pem'),
    rejectUnauthorized: false,
};

const server = tls.createServer(options, (socket) => {
    console.log('server connected', socket.authorized ? 'authorized' : 'unauthorized');
    socket.write(`welcome\n`);
    socket.setEncoding('utf8');
    socket.pipe(socket);
});

server.listen(8000, () => {
    console.log('server bound');
});

server.on('error',(err)=>{
    console.log(err);
})