const fs = require('fs');

// piping stream from readable to writable
const readStream = fs.createReadStream('./Streams/streams.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./Streams/piping.txt', {encoding: 'utf-8'});

// piping
readStream.pipe(writeStream);