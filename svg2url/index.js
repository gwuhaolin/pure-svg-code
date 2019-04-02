module.exports = function svg2Url(svgString) {
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svgString);
};
