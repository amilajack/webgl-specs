const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      '--headless',
      '--hide-scrollbars',
      '--mute-audio'
    ]
  });
  const page = await browser.newPage();
  await page.goto('https://example.com');

  await page.addScriptTag({
    path: path.join(__dirname, '..', 'index.js')
  })

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return WebglHardware()
    // return {
    //   width: WebglHardware(),
    //   // height: document.documentElement.clientHeight,
    //   // deviceScaleFactor: window.devicePixelRatio
    // };
  });

  console.log('Dimensions:', dimensions);

  await browser.close();
})();
