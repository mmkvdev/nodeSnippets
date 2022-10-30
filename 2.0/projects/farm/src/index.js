const fs = require('fs');
const http = require('http');

const data = fs.readFileSync('../../../utils/data/meta_data.json', 'utf-8');
const productData = JSON.parse(data);

const tempOverView = fs.readFileSync('../templates/overview.html', 'utf-8');
const tempProduct = fs.readFileSync('../templates/product.html', 'utf-8');
const tempCard = fs.readFileSync('../templates/card.html', 'utf-8');

const replaceHtml = (product, template) => {
    let output = template.replace(/{%PRODUCT_NAME%}/g, product.productName);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);
    if (!product.organic) {
        output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    }
    return output;
    
}

// creating a web server
const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });

        const modifiedHtml = productData.map((_data) => replaceHtml(_data, tempCard)).join('');
        const output = tempOverView.replace('{%PRODUCT_CARDS%}', modifiedHtml);
        
        res.end(output);
    } else if (pathName === '/api') {
        res.writeHead(200, {
            'Content-type': 'application/json'
        });
        res.end(data);
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html'
        });
        res.end('<h1>there is an error</h1>')
    }
});

// listening to the requests
server.listen(8000, () => console.log('listening to requests at port 8000'));