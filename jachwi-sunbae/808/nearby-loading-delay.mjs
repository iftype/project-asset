import { createRequire } from 'node:module';
const require = createRequire('/home/iftype/orca/workspaces/2026-jachwi-sunbae/wentletrap/qa/package.json');
const { chromium } = require('@playwright/test');
const TEXT = '주변을 살펴보는 중이에요';
const browser = await chromium.launch();
const out = [];
const cache = new Map();
for (const extra of ['instant', 0, 1500]) {
  for (const [name, port] of [['before', 4301], ['after', 4302]]) {
    for (let run = extra === 'instant' ? 0 : 1; run <= 3; run++) {
      const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
      const page = await context.newPage();
      const mapUrls = [];
      await page.route(/\/api\/maps\//, async (route) => {
        mapUrls.push(new URL(route.request().url()).pathname);
        const key = route.request().url().replace(/:\d+\//, '/');
        if (extra === 'instant' && cache.has(key)) return route.fulfill(cache.get(key));
        if (extra === 'instant') {
          const response = await route.fetch();
          const value = { status: response.status(), headers: response.headers(), body: await response.body() };
          cache.set(key, value);
          return route.fulfill(value);
        }
        if (extra) await new Promise((r) => setTimeout(r, extra));
        await route.continue();
      });
      await page.addInitScript((text) => {
        window.__seen = null;
        const start = performance.now();
        new MutationObserver(() => {
          if (window.__seen === null && document.body?.innerText.includes(text)) window.__seen = performance.now() - start;
        }).observe(document, { subtree: true, childList: true, characterData: true });
      }, TEXT);
      await page.goto(`http://localhost:${port}/properties/11`);
      await page.locator('ul[aria-label="500m 안 시설 수"]').waitFor({ timeout: 20000 });
      const seen = await page.evaluate(() => window.__seen);
      const stillShown = await page.getByText(TEXT).count();
      if (run > 0) out.push({ extraMs: extra, build: name, run, loadingSeenAtMs: seen === null ? null : Math.round(seen), stillShown, mapUrls: [...new Set(mapUrls)].join(' ') });
      await context.close();
    }
  }
}
await browser.close();
console.log(JSON.stringify(out, null, 1));
