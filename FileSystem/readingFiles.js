const fs = require('fs');

// reading files
fs.readFile('./addFiles/files.txt', (err, data) => {
    if (err) console.log(err);
    console.log(data.toString()); // Buffer is a package of data returned when the file is read.
});  // takes two arguments, 1. relative path 2. A Callback function that fires after readFile action is complete (asynchronous)

// console.log('COOL'); 