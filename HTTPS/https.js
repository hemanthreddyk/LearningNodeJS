const fs = require('fs');

const server = require('https').createServer({
    key: fs.readFileSync('../certs/key.pem'),
    cert: fs.readFileSync('../certs/cert.pem'),
});

server.on('request', (req, res) => {
    res.writeHead(200, {
        'content-type': 'text/plain'
    });
    res.end('Hello World\n');
});

server.listen(443);

// openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes