const http = require('http');
const url = require('url');
const fs = require('fs');

const productData = fs.readFileSync('../utils/data/meta_data.json', 'utf-8');
const dataObj = JSON.parse(productData)

// fs.readFile('../utils/data/meta_data.json', 'utf-8', (err, data) => {
//     const productData = JSON.parse(data);
// })
// creating a web server
const server = http.createServer((req, res) => {
    const pathName = req.url;
    
    if (pathName === '/' || pathName === '/overview') {
        res.end('Hello from OVERVIEW routing web server !!!');
    } else if (pathName === '/product') {
        res.end('Hello from PRODUCT routing web server !!!');
    } else if (pathName === '/api') {
        res.writeHead(200, {
            'Content-type': 'application/json'
        });
        res.end(productData);
        console.log(productData); 
        // res.writeHead(200, {
        //     // 'Content-type': 'text/html'
        //     'Content-type': 'application/json'
        // });
        // res.end('<div style="background: white;">API</div>');
        // res.end(data);
        console.log(__dirname);
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