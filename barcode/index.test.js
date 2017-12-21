const fs = require('fs');
const path = require('path');
const assert = require('assert');
const barcode = require('./index');

it('equal', () => {
  const svg = barcode('123', 'codabar', {
    showHRI: true
  });
  assert.equal(svg, fs.readFileSync(path.resolve(__dirname, 'barcode.svg'), {
    encoding: 'utf8'
  }))
});

it('out file', () => {
  const svg = barcode('123', 'codabar', {
    showHRI: true
  });
  fs.writeFileSync(path.resolve(__dirname, 'barcode.svg'), svg);
});
