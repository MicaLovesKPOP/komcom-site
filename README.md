# KomCom Website Starter (Next.js + Tailwind)

## What this is
A clean, multi-page starter aligned with KomCom decisions:
- Prebuilts are a curated product lineup (1080 / 1440 / 4K)
- Custom builds are a form-based service (no part dropdown chaos)
- Dark modern UI with green accent used mainly for buttons
- Footer includes Warranty/Support/Contact

## Quick start
1) Install Node.js (LTS).
2) In this folder:
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Add your logo
Put your logo file at:
`public/logo.png`
Then update `components/site-header.tsx` to replace the KC placeholder.

## Next steps
1) Replace sample catalog in `lib/catalog.ts` with your real 6–9 builds and pricing.
2) Replace stub CTAs with real forms (Tally/Typeform) or your own API routes.
3) Connect Stripe Checkout for prebuilt purchases (builds + add-on options).
