webgl-hardware
==============

Detect the specs of a device

## Install
```bash
# Yarn
yarn add webgl-hardware
# NPM
npm install webgl-hardware
```

## Usage
If you have a module loader (webpack or rollup)
```js
import WebGLHardware from 'webgl-hardware';

const report = WebGLHardware();
report.unMaskedRenderer // "Intel Iris OpenGL Engine"
report.unMaskedVendor // "Intel Inc."
report.glVersion // "WebGL 1.0 (OpenGL ES 2.0 Chromium)"
```

If you're not:
```html
<html>
<body>
  <script type="module">
    import WebglHardware from 'https://unpkg.com/webgl-hardware@latest/index.js';

    const report = WebGLHardware();
    report.unMaskedRenderer // "Intel Iris OpenGL Engine"
    report.unMaskedVendor // "Intel Inc."
    report.glVersion // "WebGL 1.0 (OpenGL ES 2.0 Chromium)"
  </script>
</body>
</html>
```

## Prior Art
* [webglreport](https://github.com/AnalyticalGraphicsInc/webglreport)
