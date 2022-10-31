const fs = require('fs');
const http = require('http');
const url = require('url');

const replaceHtml = require('../../../utils/node.utils');

const data = fs.readFileSync('../../../utils/data/meta_data.json', 'utf-8');
const productData = JSON.parse(data);

const tempOverView = fs.readFileSync('../templates/overview.html', 'utf-8');
const tempProduct = fs.readFileSync('../templates/product.html', 'utf-8');
const tempCard = fs.readFileSync('../templates/card.html', 'utf-8');

// creating a web server
const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);
   
    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });

        const cardsHtml = productData.map((_data) => replaceHtml(_data, tempCard)).join('');
        const output = tempOverView.replace('{%PRODUCT_CARDS%}', cardsHtml);

        res.end(output);
    } else if (pathname === '/api') {
        res.writeHead(200, {
            'Content-type': 'application/json'
        });
        res.end(data);
    } else if (pathname === '/product') {
        console.log(query);
        res.writeHead(200, {
            'Content-type': 'text/html'
        });

        const product = productData[query.id]; 
        const output = replaceHtml(product, tempProduct);
        res.end(output);
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html'
        });
        res.end('<h1>there is an error</h1>')
    }
});

// listening to the requests
server.listen(8000, () => console.log('listening to requests at port 8000'));