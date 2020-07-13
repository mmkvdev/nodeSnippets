const fs = require('fs');

//reading Stream
const readStream = fs.createReadStream('./Streams/streams.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
    console.log('---------------NEW CHUNK-------------');
    console.log(chunk);
})