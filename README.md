webgl-specs
===========
Detect the graphics specs of a device using web APIs

## Install
```bash
# Yarn
yarn add webgl-specs
# NPM
npm install webgl-specs
```

## Why?
This is useful when you want to render lower quality graphics for low powered devices

## Usage
If you have a module loader (webpack or rollup)
```js
import WebglSpecs from 'webgl-specs';

const report = WebglSpecs();
report.unMaskedRenderer // "Intel Iris OpenGL Engine"
report.unMaskedVendor // "Intel Inc."
report.glVersion // "WebGL 1.0 (OpenGL ES 2.0 Chromium)"
```

If you're not:
```html
<html>
<body>
  <script type="module">
    import WebglSpecs from 'https://unpkg.com/webgl-specs@latest/index.js';

    const report = WebglSpecs();
    report.unMaskedRenderer // "Intel Iris OpenGL Engine"
    report.unMaskedVendor // "Intel Inc."
    report.glVersion // "WebGL 1.0 (OpenGL ES 2.0 Chromium)"
  </script>
</body>
</html>
```

## Testing
```bash
yarn start
```

## Prior Art
* [webglreport](https://github.com/AnalyticalGraphicsInc/webglreport)
