const puppeteer = require('puppeteer');
 (async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.amazon.com')
    await page.screenshot({path: 'amazon.png'})
    await browser.close()
 })()
