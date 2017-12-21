var barcode = require('./barcode');
var qrcode = require('./qrcode');

function svg2Url(svgString) {
  return 'data:image/svg+xml;utf8,' + svgString;
}

module.exports = {
  barcode,
  qrcode,
  svg2Url,
};
