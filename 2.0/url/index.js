const http = require('http');
const url = require('url');


// creating a web server
const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName === '/' || pathName === '/overview') {
        res.end('Hello from OVERVIEW routing web server !!!');
    } else if (pathName === '/product') {
        res.end('Hello from PRODUCT routing web server !!!');
    }

    else {
        res.writeHead(404, 'fucking bad request', {
            'Content-type': 'text/html'
        });
        res.end('<div style="background: white;"><h1>this page could not be found!</h1></div>');
    }
});

// listening to requests - starting the server
server.listen(8000, () => {
    console.log('listening to the server at port: 8000');
});