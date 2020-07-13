const fs = require('fs');

// writing files
fs.writeFile('./addFiles/files.txt', 'Naveena Mudundi', () => {
    console.log('Success');
});

// what if the relative path of the file doesn't exist. node creates the file and appends the content
fs.writeFile('./addFiles/love.txt', 'MMK Varma', () => {
    console.log('Love');
})