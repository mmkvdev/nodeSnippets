const fs = require('fs');

// deleting files

// 1. checking whether the file exists or not
if(fs.existsSync('./addFiles/delete.txt')) {
    fs.unlink('./addFiles/delete.txt', (err) => {
        if(err) console.log(err);
        console.log('file deleted');
    });
}