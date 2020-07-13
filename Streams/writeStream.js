const fs = require('fs');

// write  stream

const readStream = fs.createReadStream('./Streams/streams.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./Streams/writeStreams.txt', {encoding: 'utf-8'});

readStream.on('data', (chunk) => {
    console.log('---------------NEW CHUNK-------------');
    console.log(chunk);
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
});

/*writeStream.on('data', (chunk) => {
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
})*/