const http = require('http');
const net = require('net');
const url = require('url');

const proxy = http.createServer((req, res) => {
    res.writeHead(200, {
        'COntent-Type': 'text/plain'
    });
    res.end('okay');
});

proxy.on('connect', (req, clientSocket, head) => {
    const srvUrl = url.parse(`http://${req.url}`);
    const srvSocket = net.connect(srvUrl.port, srvUrl.hostname, () => {
        clientSocket.write('HTTP/1.1 200 Connection Established\r\n' +
            'Proxy-agent: Node.js-Proxy\r\n' +
            '\r\n');
        srvSocket.write(head);
        srvSocket.pipe(clientSocket);
        clientSocket.pipe(srvSocket);
    });
});

proxy.listen(3000, '127.0.0.1', () => {
    const options = {
        port: 3000,
        host: '127.0.0.1',
        method: 'CONNECT',
        path: 'www.google.com:80'
    };

    const req = http.request(options);
    req.end();

    req.on('connect', (res, socket, head) => {
        console.log('got connected');

        socket.write('GET / HTTP/1.1\r\n' +
            'Host: www.google.com:80\r\n' +
            'Connection: close\r\n' +
            '\r\n');
        socket.on('data', (chunk) => {
            console.log(chunk.toString());
        });

        socket.on('end', () => {
            proxy.close();
        });
    });
});