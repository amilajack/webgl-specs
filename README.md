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
```js
import WebGLHardware from 'webgl-hardware';

const report = WebGLHardware();
report.unMaskedRenderer // "Intel Iris OpenGL Engine"
report.unMaskedVendor // "Intel Inc."
report.glVersion // "WebGL 1.0 (OpenGL ES 2.0 Chromium)"
```

## Prior Art
* [webglreport](https://github.com/AnalyticalGraphicsInc/webglreport)
