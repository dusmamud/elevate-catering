import { chromium } from 'playwright-core';
import fs from 'node:fs';
const exe = process.env.HOME + '/.cache/ms-playwright/chromium_headless_shell-1255/chrome-headless-shell-linux64/chrome-headless-shell';
const browser = await chromium.launch({ executablePath: exe });
const base = process.env.BASE || 'http://localhost:4175';
async function revealAll(page) {
  for (let i = 0; i < 40; i++) { await page.mouse.wheel(0, 700); await page.waitForTimeout(110); }
  await page.waitForTimeout(900);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);
}
async function shot(name, route, w, h, full) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  await page.goto(base + route, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(1000);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  if (full) await revealAll(page);
  await page.screenshot({ path: `screenshots/${name}.png`, fullPage: full });
  console.log(name, 'overflow=', overflow);
  await page.close();
}
fs.mkdirSync('screenshots', { recursive: true });
await shot('desktop-top', '/', 1440, 900, false);
await shot('desktop-full', '/', 1440, 900, true);
await shot('mobile-top', '/', 360, 740, false);
await shot('mobile-full', '/', 360, 740, true);
await shot('tastings', '/tastings/', 1440, 900, true);
await shot('events', '/events/', 1440, 900, true);
await shot('event-detail', '/events/seaside-wedding-mumbai/', 1440, 900, true);
await shot('clients', '/clients/', 1440, 900, true);
await shot('areas', '/areas/', 1440, 900, true);
await shot('gallery', '/gallery/', 1440, 900, true);
await shot('tastings-mobile', '/tastings/', 360, 740, true);
await browser.close();
