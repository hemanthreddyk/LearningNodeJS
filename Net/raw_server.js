const Net = require('net');

const port = 3000;
const server = Net.createServer();

server.on('connection', handleConnection);

server.listen(port, () => console.log('server listening to %j', server.address()));


function handleConnection(conn) {
    let remoteAddress = conn.remoteAddress + ':' + conn.remotePort;
    console.log(`new client Connection from ${remoteAddress}`);

    conn.on('data', onConnData);
    conn.on('close', onConnClose);
    conn.on('error', onConnError);

    function onConnData(d) {
        console.log('connection data from %s: %j', remoteAddress, d);
        conn.write(d);
    }

    function onConnClose() {
        console.log(`connection from ${remoteAddress} closed`);
    }

    function onConnError(err) {
        console.log(`connection ${remoteAddress} error: ${err.message}`);
    }


}