const fs = require('fs');

fs.readFile('../../txt/input_1.txt', 'utf-8', (err, data1) => {
    fs.readFile(`../../txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile('../../txt/append.txt', 'utf-8', (err, data3) => {
            console.log(data3);
        })
    });
});

console.log('asynchronous way of handling file system (read operation): ');