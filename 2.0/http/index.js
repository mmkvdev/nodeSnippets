const http = require('http');

// creating a web server
const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.end('Hello from the server');
});

// listen to the incoming requests from the client
server.listen(8000, '127.0.0.1', () => {
    console.log('listening to requests on port 8000');
});