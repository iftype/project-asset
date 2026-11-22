import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
const [qaDir, S] = process.argv.slice(2);
const { chromium } = createRequire(qaDir + '/package.json')('@playwright/test');
const sizes = { before: JSON.parse(readFileSync(`${S}/sizes-before.json`)), after: JSON.parse(readFileSync(`${S}/sizes-after.json`)) };
const browser = await chromium.launch();
const screens = [['/', 'desktop'], ['/', 'mobile'], ['/properties/11', 'desktop'], ['/explore', 'desktop'], ['/neighborhoods', 'desktop'], ['/cheap-meals', 'desktop']];
const res = [];
for (const [path, vp] of screens) for (const [name, port] of [['before', 4301], ['after', 4302]]) {
  const ctx = await browser.newContext({ viewport: vp === 'mobile' ? { width: 390, height: 844 } : { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const files = new Set();
  page.on('request', (r) => { const u = new URL(r.url()); if (u.port === String(port) && u.pathname.endsWith('.js')) files.add(u.pathname.slice(1)); });
  await page.goto(`http://localhost:${port}${path}`, { waitUntil: 'load' });
  await page.waitForTimeout(6000);
  const tot = [0, 0, 0]; const server = [];
  for (const f of files) { const s = sizes[name][f]; s.forEach((v, i) => (tot[i] += v)); if (readFileSync(`${S}/tmp/verify-jachwi-variants/${name}/frontend/dist/${f}`, 'utf8').includes('renderToStaticMarkup')) server.push(f); }
  res.push({ path, vp, name, n: files.size, raw: tot[0], gz: tot[1], br: tot[2], server });
  await ctx.close();
}
for (const r of res) console.log(JSON.stringify(r));
await browser.close();
