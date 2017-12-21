const qrcode = require('./index');

it('qrcode', () => {
  const svg = qrcode('123');
  console.log(svg);
});
