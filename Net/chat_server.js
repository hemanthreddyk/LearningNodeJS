// Chat Server
const Net = require('net');

const port = 3000;
const server = Net.createServer();

let counter = 0;
let sockets = {};

server.on('connection', handleConnection);

server.listen(port, () => console.log('server listening to %j', server.address()));

function timestamp() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
}


function handleConnection(socket) {
    socket.id = counter++;

    let remoteAddress = socket.remoteAddress + ':' + socket.remotePort;
    console.log(`new client Connection from ${remoteAddress}`);
    socket.write('Please type your name: ');

    socket.on('data', onConnData);
    socket.on('close', onConnClose);
    socket.on('error', onConnError);
    socket.on('end', onConnEnd);

    socket.setEncoding('utf8')

    function onConnData(d) {

        const timeStamp = timestamp();

        if (!sockets[socket.id]) {
            socket.name = d.toString().trim();
            socket.write(`*** Welcome ${socket.name}! ***\n`);
            sockets[socket.id] = socket;
            return;
        }
        //console.log('connection data from %s: %j', remoteAddress, d);
        Object.entries(sockets).forEach(([key, clientsocket]) => {
            if (key == socket.id) return;
            clientsocket.write(`${socket.name} ${timeStamp}: ${d}`);
//            clientsocket.write(d);
        });
        console.log(`${socket.name} ${timeStamp}: ${d}`);
    }

    function onConnClose() {
        console.log(`connection from ${remoteAddress} closed`);
    }

    function onConnError(err) {
        console.log(`connection ${remoteAddress} error: ${err.message}`);
    }

    function onConnEnd() {
        delete sockets[socket.id];
        console.log(`connection from ${remoteAddress} disconnected`);
    }


}