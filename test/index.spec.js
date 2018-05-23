const path = require('path');

describe('WebglHardware', () => {
  let page;
  let logs = [];

  beforeAll(async () => {
    page = await global.__BROWSER__.newPage();
    page.on('console', (item) => {
      logs.push(item);
    });
    await page.goto(`file:${path.join(__dirname, 'index.html')}`);
  });

  it('should load without error', async () => {
    console.log(logs);
  });
});
