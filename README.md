# Elevate Catering

Exquisite catering website — "Culinary excellence for corporate events, weddings & special occasions."

Built with **Astro 7** + **Tailwind CSS 4** + **GSAP** + **Lenis**, Playfair Display + Inter
fonts self-hosted as woff2 files in `public/fonts` (no Google Fonts CDN). Static output,
deploys to Cloudflare Pages. Forest green `#1e3d2f` + gold `#c0a062` + cream `#faf7f1`.

44 routes total (42 in the sitemap): home, about, services (+ 6 detail pages),
menus (+ 4 detail pages), gallery (with lightbox), pricing, process, team, venues,
reviews, blog (+ 6 articles), FAQ, contact, quote, privacy, terms, search (noindex),
plus tastings, featured events (+ 6 case studies), clients and service areas.
404 and /search/ are excluded from the sitemap.

Round 2: axe-clean contrast (deep bronze `#7d6234` for small gold text), responsive
images via `scripts/convert-images.mjs` (AVIF/WebP/JPG @ 480/800/1200/1600) rendered
by `src/components/Picture.astro` (falls back to the master JPG until variants are
generated), sticky mobile Call/WhatsApp/Quote bar, floating WhatsApp button,
PWA manifest, and a full audit script: `node scripts/audit.mjs` (axe + overflow + H1
for every route, against a local preview).

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview
```

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml` (build + `wrangler pages
deploy dist --project-name=elevate-catering`). It needs these two repository secrets:

- `CLOUDFLARE_API_TOKEN` — custom API token with **Account → Cloudflare Pages → Edit**
- `CLOUDFLARE_ACCOUNT_ID` — your Cloudflare account ID

Live URL (after the first successful deploy): https://elevate-catering.pages.dev

## Notes

All mock values (team names, email hello@elevatecatering.in, phone +91 98765 43210,
prices, testimonials, venues) live in `src/data/site.ts` — replace before
launch. Social badges are non-link placeholders until real profile URLs are
added to `socials` in `src/data/site.ts`. Forms have no backend (mailto fallback).
