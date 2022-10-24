const fs = require('fs');

const textIn = fs.readFileSync('../txt/input.txt', 'utf-8');
console.log('input text: ', textIn);

// content to write to a file
const textOut = `Avocado information ${textIn} is been \ninjected on ${Date.now()}`;
fs.writeFileSync('../txt/output.txt', textOut);
console.log('File has been written!!');