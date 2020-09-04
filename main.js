const puppeteer = require('puppeteer');

const chromePath = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";

const main = async () => {
  const browser = await puppeteer.launch( { headless: false, executablePath: chromePath } );
  const page = await browser.newPage();
  await page.goto('https://example.com');
  page.waitFor(2000)

  await browser.close();
}

main()