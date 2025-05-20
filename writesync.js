const fs = require('fs');
const path = require('path');
const { convertNrsToEuro } = require('./currencyConverter');

const filePath = path.join(__dirname, 'syncOutput.txt');
const nrs = 2800;
const euro = convertNrsToEuro(nrs);
const content = `Synchronous Write:\nNRS ${nrs} = €${euro}`;

try {
  fs.writeFileSync(filePath, content);
  console.log('Written synchronously to syncOutput.txt');
} catch (err) {
  console.error('Sync write error:', err);
}
