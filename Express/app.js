const express = require('express');

// setting up an express app
const app = express();


// listen for requests
app.listen(3000); // returns the server instance that can be reused later

app.get('/', (req, res) => {
    // res.send('<p>home page</p>'); // automatically sends the content type depending on the kind of content we're sending back to the browser and automatically sets the status code.
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');
    res.sendFile('./views/about.html', { root: __dirname }); ///home/madhumudunur/Desktop/Area51/nodeSnippets/Express
});
// console.log(__dirname);

// redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});