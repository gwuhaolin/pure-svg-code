var barcode = require('./barcode');
var qrcode = require('./qrcode');

function svg2Url(svg) {
  return 'data:image/svg+xml;utf8,' + svg;
}

module.exports = {
  barcode,
  qrcode,
  svg2Url,
};
