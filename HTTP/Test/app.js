const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let pathname = q.pathname;
    console.log(q);
    fs.readFile(`./${pathname}`, (err, data) => {
        
        if (err) {
            res.writeHead(400, {
                'Content-Type': 'text/html'
            });
            return res.end('404 Not Found');
        }
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        return res.end();
    });
}).listen(3000);

console.log(`Listening on port 3000...`);