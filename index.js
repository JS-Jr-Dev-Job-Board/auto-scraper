const puppeteer = require('puppeteer')
const fs = require('fs')

const run = async () => {
  const browser = await puppeteer.launch({
    headless: true,
  })

  const page = await browser.newPage()
}

run()
