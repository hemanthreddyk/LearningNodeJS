const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;
const util = require("util");
//const formidable = require("formidable");

const server = http.createServer((req, res) => {
    // console.log(http.METHODS);
    // console.log(http.STATUS_CODES);
    // console.log(req.headers);
    // console.log(req.url);

    let path = url.parse(req.url, true);
    //console.log(path);

    let decoder = new StringDecoder('utf-8');
    let buffer = '';
    req.on('data', (chunk) => {
       // console.log(chunk)
        buffer += decoder.write(chunk);
    });
    req.on('end', () => {
        buffer += decoder.end();
        res.writeHead(200, "OK", {
            "Content-Type": "text/plain"
        });
        res.write("The response\n\n");
        res.write(util.inspect(path.query) + "\n\n")
        res.write(buffer+"\n\n")
        res.end("End of Message to Browser");
    })

});

server.listen(3000, () => {
    console.log("Listening on port 3000...");
})