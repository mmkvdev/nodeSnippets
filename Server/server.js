const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    // console.log('Request Made');
    // console.log(req);
    // console.log(req.url, req.method);


    //set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';

    // console.log(req.url);

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            // console.log(path);
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            //  console.log(path);
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            //  console.log(path);
            break;
    }

    // send an HTML file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log('file not found');
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    });
    // res.write('hello, coders');
    // res.write('<h1>Hello</h1>');
    // res.end();
}); // future -> web sockets

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on the port number 3000');
})