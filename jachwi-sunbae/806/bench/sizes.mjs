import { readFileSync, readdirSync } from 'node:fs';
import { gzipSync, brotliCompressSync, constants } from 'node:zlib';
const [dir] = process.argv.slice(2);
const files = readdirSync(dir).filter((f) => f.endsWith('.js'));
const size = (f) => { const b = readFileSync(`${dir}/${f}`); return [b.length, gzipSync(b, { level: 9 }).length, brotliCompressSync(b, { params: { [constants.BROTLI_PARAM_QUALITY]: 11 } }).length]; };
const out = {}; let tot = [0,0,0];
for (const f of files) { const s = size(f); out[f] = s; tot = tot.map((t, i) => t + s[i]); }
out.TOTAL = tot;
console.log(JSON.stringify(out));
