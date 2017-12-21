const fs = require('fs');
const path = require('path');
const assert = require('assert');
const barcode = require('./index');

it('barcode', () => {
  const svg = barcode('123', 'codabar');
  assert.equal(svg, fs.readFileSync(path.resolve(__dirname, 'barcode.svg')))
});
