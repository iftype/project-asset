import { createServer } from 'node:http';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const [dir, key, port, playwrightDir, out] = process.argv.slice(2);
const { createRequire } = await import('node:module'); const { chromium } = createRequire(join(playwrightDir, 'package.json'))('@playwright/test');
const server = createServer((req, res) => {
  const p = req.url.split('?')[0] === '/' ? 'index.html' : req.url.split('?')[0].slice(1);
  try { const b = readFileSync(join(dir, p)); res.writeHead(200, { 'content-type': p.endsWith('.js') ? 'text/javascript' : 'text/html' }); res.end(b); } catch { res.writeHead(404); res.end(); }
}).listen(Number(port));
const med = (a) => { const s = [...a].sort((x, y) => x - y); return s[Math.floor(s.length / 2)]; };
const pct = (a, q) => { const s = [...a].sort((x, y) => x - y); return s[Math.min(s.length - 1, Math.floor(s.length * q))]; };
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const rows = [];
const order = ['old', 'new', 'new', 'old', 'old', 'new', 'new', 'old', 'old', 'new'];
for (const [run, impl] of order.entries()) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  const cdp = await ctx.newCDPSession(page);
  await page.goto(`http://localhost:${port}/?impl=${impl}&key=${encodeURIComponent(key)}`);
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  const create = {};
  for (const n of [100, 300, 600]) create[n] = med(await page.evaluate(([n]) => window.benchCreate(n, 7), [n]));
  await page.evaluate(() => window.setupMap());
  const sync300 = await page.evaluate(() => window.syncMarkers(300, 'a'));
  const sync600 = await page.evaluate(() => window.syncMarkers(600, 'b'));
  await page.waitForTimeout(1500);
  await page.evaluate(() => window.recordFrames());
  await page.mouse.move(720, 450);
  await page.mouse.down();
  for (let i = 1; i <= 60; i++) { await page.mouse.move(720 - i * 8, 450 - i * 4); await page.waitForTimeout(25); }
  await page.mouse.up();
  const deltas = (await page.evaluate(() => window.stopFrames())).slice(1);
  const row = { run, impl, create, sync300, sync600, frames: deltas.length, frameP50: med(deltas), frameP95: pct(deltas, 0.95), longFrames: deltas.filter((d) => d > 50).length, errors };
  console.log(JSON.stringify(row));
  rows.push(row);
  await ctx.close();
}
writeFileSync(out, rows.map((r) => JSON.stringify(r)).join('\n'));
await browser.close();
server.close();
