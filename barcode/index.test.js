const barcode = require('./index');

it('barcode', () => {
  const svg = barcode('123', 'codabar');
  console.log(svg);
});
