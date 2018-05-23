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
    path: path.join(__dirname, '..', 'lib', 'index.js')
  });

  console.log(await page.evaluate(() => WebglHardware()));

  await browser.close();
})();
