// Generate responsive AVIF + WebP + JPG variants (480/800/1200/1600) for every
// master in public/images, plus PWA icons from the favicon. Masters are kept.
// Run: node scripts/convert-images.mjs
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const dir = 'public/images';
const widths = [480, 800, 1200, 1600];
const masters = fs.readdirSync(dir).filter((f) => /\.jpe?g$/i.test(f) && !/-\d+\.jpe?g$/i.test(f) && f !== 'og-home.jpg');
let totalIn = 0, totalOut = 0;
for (const file of masters) {
  const stem = file.replace(/\.jpe?g$/i, '');
  const input = path.join(dir, file);
  totalIn += fs.statSync(input).size;
  for (const w of widths) {
    const outs = [
      [`${stem}-${w}.avif`, () => sharp(input).rotate().resize({ width: w }).avif({ quality: 55, effort: 2 })],
      [`${stem}-${w}.webp`, () => sharp(input).rotate().resize({ width: w }).webp({ quality: 72 })],
      [`${stem}-${w}.jpg`, () => sharp(input).rotate().resize({ width: w }).jpeg({ quality: 78, mozjpeg: true })],
    ];
    for (const [name, make] of outs) {
      const out = path.join(dir, name);
      const missing = !fs.existsSync(out) || fs.statSync(out).size === 0;
      if (missing) {
        let done = false;
        for (let attempt = 1; attempt <= 3 && !done; attempt++) {
          try { const buf = await make().toBuffer(); fs.writeFileSync(out, buf); done = fs.statSync(out).size > 0; }
          catch (e) { console.log(`retry ${attempt} ${name}: ${e.message.split('\n')[0]}`); await new Promise((r) => setTimeout(r, 800)); }
        }
        if (!done) { try { fs.unlinkSync(out); } catch {} console.error('FAILED', name); process.exitCode = 1; continue; }
      }
      totalOut += fs.statSync(out).size;
    }
  }
  console.log('done', file);
}
// PWA icons: gold cloche (favicon.svg) centred on a forest square.
fs.mkdirSync('public/icons', { recursive: true });
const svg = fs.readFileSync('public/favicon.svg');
for (const size of [192, 512]) {
  const inner = Math.round(size * 0.68);
  const overlay = await sharp(svg, { density: 300 }).resize(inner, inner, { fit: 'inside' }).png().toBuffer();
  const out = `public/icons/icon-${size}.png`;
  if (!fs.existsSync(out) || fs.statSync(out).size === 0) {
    try {
      const buf = await sharp({ create: { width: size, height: size, channels: 4, background: '#1e3d2f' } })
        .composite([{ input: overlay, gravity: 'centre' }]).png().toBuffer();
      fs.writeFileSync(out, buf);
    } catch (e) { console.error('FAILED icon', out, e.message.split('\n')[0]); process.exitCode = 1; continue; }
  }
  console.log('icon', out, fs.statSync(out).size);
}
console.log(`masters: ${masters.length} (${(totalIn / 1024).toFixed(0)} KB) · variants total: ${(totalOut / 1024).toFixed(0)} KB`);
