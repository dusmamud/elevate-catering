// Audit: axe (serious/critical) + mobile-360/desktop overflow + H1 count for every route.
// Usage: node scripts/audit.mjs [baseUrl] [route ...]
// Default base: http://localhost:4176 (run `npm run build && npx astro preview --port 4176` first).
import { chromium } from 'playwright-core';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs';

const exe = process.env.HOME + '/.cache/ms-playwright/chromium_headless_shell-1255/chrome-headless-shell-linux64/chrome-headless-shell';
const base = (process.argv[2] || 'http://localhost:4176').replace(/\/$/, '');
let routes = process.argv.slice(3);
if (!routes.length) {
  // discover routes from dist sitemap
  const xml = fs.readFileSync('dist/sitemap-0.xml', 'utf8');
  routes = [...xml.matchAll(/<loc>https:\/\/elevate-catering\.pages\.dev(\/[^<]*)<\/loc>/g)].map((m) => m[1]);
  routes.push('/404.html');
}
const browser = await chromium.launch({ executablePath: exe });
let fail = 0;
for (const route of routes) {
  const context = await browser.newContext({ viewport: { width: 360, height: 740 } });
  const page = await context.newPage();
  try {
    await page.goto(base + route, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(400);
    const overflowMobile = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    const h1 = await page.evaluate(() => document.querySelectorAll('h1').length);
    const results = await new AxeBuilder({ page }).analyze();
    const bad = results.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(200);
    const overflowDesktop = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    const summary = bad.map((v) => `${v.id}×${v.nodes.length}`).join(', ') || 'clean';
    const flag = bad.length || overflowMobile > 0 || overflowDesktop > 0 ? 'FAIL' : 'OK  ';
    if (flag === 'FAIL') fail++;
    console.log(`${flag} ${route} axe:[${summary}] overflow360=${overflowMobile} overflowDesk=${overflowDesktop} h1=${h1}`);
    for (const v of bad) for (const n of v.nodes.slice(0, 8)) console.log(`     ${v.id}: ${n.target.join(' ')} :: ${(n.failureSummary || '').split('\n')[1] || ''} :: ${(n.html || '').slice(0, 110)}`);
  } catch (e) {
    fail++; console.log(`ERR  ${route} ${e.message.split('\n')[0]}`);
  }
  await context.close();
}
await browser.close();
console.log(fail ? `\nAUDIT: ${fail} route(s) with issues` : '\nAUDIT: all routes clean');
process.exit(fail ? 1 : 0);
