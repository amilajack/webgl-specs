const path = require('path');
const childProcess = require('child_process');
// const server = require('http-server');

const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('WebglSpecs', () => {
  let page;
  let logs = [];

  beforeAll(async () => {
    page = await global.__BROWSER__.newPage();
    page.on('console', (item) => {
      logs.push(item);
    });
    childProcess.exec(path.join(__dirname, '..', 'node_modules', '.bin', 'http-server'));
    await timeout(2000);
    await page.goto(`http://localhost:8080/test')}`);
  });

  it('should load without error', async () => {
    console.log(logs);
  });
});
