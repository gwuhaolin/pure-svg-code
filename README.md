[![Npm Package](https://img.shields.io/npm/v/pure-svg-code.svg?style=flat-square)](https://www.npmjs.com/package/pure-svg-code)
[![Build Status](https://img.shields.io/travis/gwuhaolin/pure-svg-code.svg?style=flat-square)](https://travis-ci.org/gwuhaolin/pure-svg-code)
[![Npm Downloads](http://img.shields.io/npm/dm/pure-svg-code.svg?style=flat-square)](https://www.npmjs.com/package/pure-svg-code)


# pure-svg-code
Generate qrcode and barcode

## Feature
- SVG: can be used in any client support render svg like browser & 小程序 & Node.js;
- Small: write in pure javascript, no dependency;
- Typescript: support Typescript;  

## Install
Install from npm:
```bash
npm i pure-svg-code
```
Import it:
```js
// import both
const {barcode,qrcode,svg2url} = require('pure-svg-code');

// import as you need
const barcode = require('pure-svg-code/barcode');
const qrcode = require('pure-svg-code/qrcode');
const svg2url = require('pure-svg-code/svg2url');
```

#### File size:
- qrcode: minified 17Kb, Gzip 5.7Kb
- barcode: minified 19Kb, Gzip 6.2Kb

## qrcode
```js
const svgString = qrcode({
  content: "http://github.com/",
  padding: 4,
  width: 256,
  height: 256,
  color: "#000000",
  background: "#ffffff",
  ecl: "M"    
})
```

Output [svg content](qrcode/qrcode.svg):
```xml
<?xml version="1.0" standalone="yes"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="256" height="256">
<rect x="0" y="0" width="256" height="256" style="fill:#ffffff;shape-rendering:crispEdges;"/>
<rect x="35.310344827586206" y="35.310344827586206" width="8.827586206896552" height="8.827586206896552" style="fill:#000000;shape-rendering:crispEdges;"/>
<rect x="44.13793103448276" y="35.310344827586206" width="8.827586206896552" height="8.827586206896552" style="fill:#000000;shape-rendering:crispEdges;"/>
...
</svg>
```

#### List of options:
- `content` - QR Code content, required
- `padding` - white space padding, `4` modules by default, `0` for no border
- `width` - QR Code width in pixels
- `height` - QR Code height in pixels
- `color` - color of modules, color name or hex string, e.g. `#000000`
- `background` - color of background, color name or hex string, e.g. `white`
- `ecl` - error correction level: `L`, `M`, `H`, `Q`

## barcode
Set it up and specify your type and options. The following 3 are the only
required ones.

```javascript
var svgString = barcode("9234567890128", "ean13", {width:'50', barWidth:1, barHeight:50});
```

Output [svg content](barcode/barcode.svg):
```xml
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 50" >
  <rect width="2.0" height="50" x="0.0" y="0"/>
  <rect width="3.9" height="50" x="3.9" y="0"/>
  ...
</svg>
```
#### Support types:
- codabar
- code11 (code 11)
- code39 (code 39)
- code93 (code 93)
- code128 (code 128)
- ean8 (ean 8)
- ean13 (ean 13)
- std25 (standard 2 of 5 - industrial 2 of 5)
- int25 (interleaved 2 of 5)

#### Support options:
- `barHeight` (number) -height of svg (default: 30);
- `width` (number) -width of svg (default: 100);
- `bgColor` (string) -background color css like (default: 'transparent');
- `color` (string) -barcode color (default: '#000000');


## Use it with `<img/>` tag
```js
const {qrcode,svg2url} = require('pure-svg-code');
const svgString = qrcode('data');
const url = svg2url(svgString);

// set img element's src to url
imgEle.src = url;
```
This way can be used for browser & 小程序 or any client can render svg.

## Use it in Node.js server
```js
const {qrcode} = require('pure-svg-code');

app.get('/',function(req, res) {
    const svgString = qrcode('data');
    res.send(svgString)
})
```
