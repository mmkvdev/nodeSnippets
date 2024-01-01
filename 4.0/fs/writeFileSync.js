const fs = require('fs');

// writeFileSync is a method made available by the fs module that we've imported. it essentially write some contents to a file to our hard-drive.
// the first argument is the path to the file (including the filename ) that we want to write to. the second argument is the contents that we want to write to the file.
fs.writeFileSync('hello.txt', "Hello from my re-re-re-revision of nodejs learning world!, this time it's gonna be crazy and fun :)")