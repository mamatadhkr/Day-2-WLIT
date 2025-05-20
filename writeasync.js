const fs = require('fs');
const path = require('path');
const { convertNrsToEuro } = require('./currencyConverter');

const filePath = path.join(__dirname, 'asyncOutput.txt');
const nrs = 4200;
const euro = convertNrsToEuro(nrs);
const content = `Asynchronous Write:\nNRS ${nrs} = €${euro}`;

fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error('Async write error:', err);
  } else {
    console.log('Written asynchronously to asyncOutput.txt');
  }
});
