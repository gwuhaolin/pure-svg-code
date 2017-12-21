const fs = require('fs');
const path = require('path');
const assert = require('assert');
const qrcode = require('./index');

it('qrcode', () => {
  const svg = qrcode('123');
  assert.equal(svg, fs.readFileSync(path.resolve(__dirname, 'qrcode.svg'), {
    encoding: 'utf8'
  }))
});
