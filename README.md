webgl-specs
==============

Detect the specs of a device

## Install
```bash
# Yarn
yarn add webgl-specs
# NPM
npm install webgl-specs
```

## Usage
If you have a module loader (webpack or rollup)
```js
import WebGLSpecs from 'webgl-specs';

const report = WebGLSpecs();
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

    const report = WebGLSpecs();
    report.unMaskedRenderer // "Intel Iris OpenGL Engine"
    report.unMaskedVendor // "Intel Inc."
    report.glVersion // "WebGL 1.0 (OpenGL ES 2.0 Chromium)"
  </script>
</body>
</html>
```

## Prior Art
* [webglreport](https://github.com/AnalyticalGraphicsInc/webglreport)
