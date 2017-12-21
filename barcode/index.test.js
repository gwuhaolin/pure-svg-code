const fs = require('fs');
const path = require('path');
const assert = require('assert');
const barcode = require('./index');

it('equal', () => {
  const svg = barcode('123', 'codabar');
  assert.equal(svg, fs.readFileSync(path.resolve(__dirname, 'barcode.svg'), {
    encoding: 'utf8'
  }))
});

it('out file', () => {
  const svg = barcode('123', 'codabar', {
    showHRI: true
  });
  fs.writeFileSync('bar.svg', svg);
});
