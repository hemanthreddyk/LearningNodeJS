const http = require('http');

const longComputation = () => {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += i;
    };
    return sum;
};

const server = http.createServer();

server.on('request', (req, res) => {
    if (req.url === `/compute`) {
        const sum = longComputation();
        return res.end(`Sum is ${sum}`);
    } else {
        res.end(`Ok`);
    }
}).listen(3000);

// //In this approach longComputation will 
// be executed in the main process and the
// server will be busy computing the sum. 
// Server cannot serve other requests untill the longComputation is complete.