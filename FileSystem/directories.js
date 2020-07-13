const fs = require('fs');

// directories
if (!fs.existsSync('./addFiles/directories')) {
    // for the next time, it'll return an error because it already exists. Hence, we use existsSync.
    fs.mkdir('./addFiles/directories', (err) => {
        if (err) console.log(err);
        console.log('folder created');
    });
} else {
    // console.log('You Exist Only Once');
    fs.rmdir('./addFiles/directories', (err) => {
        if(err) console.log(err);
        console.log('Folder Deleted');
    })
}