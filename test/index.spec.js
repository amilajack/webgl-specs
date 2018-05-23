const path = require('path');
const childProcess = require('child_process');

const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('WebglSpecs', () => {
  let page;
  let logs = [];

  beforeAll(async () => {
    page = await global.__BROWSER__.newPage();
    page.on('console', (item) => {
      logs.push(JSON.parse(item._text));
    });
    childProcess.exec(path.join(__dirname, '..', 'node_modules', '.bin', 'http-server'), {
      cwd: path.join(__dirname, '..')
    });
    await timeout(3000);
    await page.goto('http://127.0.0.1:8080/test');
  });

  it('should load without error', async () => {
    console.log(logs);
  });
});
