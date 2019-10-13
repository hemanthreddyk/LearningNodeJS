const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write('Hello World');
        res.end();
    } else if (req.url === '/api/courses') {
        res.write('Welcome to courses');
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    } else {
        console.log("hello")
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        let q = url.parse(req.url, true).query;
        let txt = q.year + " " + q.month;
        res.end(txt);
    }

});

// server.on('connection', (socket)=>{
//     console.log('New Connection...')
// })

server.listen(3000);

console.log(`Listening on port 3000...`);