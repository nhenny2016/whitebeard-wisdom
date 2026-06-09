# Whitebeard Wisdom — agent guide

This site follows **LuminaForge Elite Standards** (version 2026.05.28).

## Standards enforcement

- **CI:** `.github/workflows/luminaforge-standards-audit.yml` runs on every PR and push to `main`.
- **Config:** `.luminaforge.json` pins the standards version and site URL.
- **Authority:** [luminaforge.ai](https://luminaforge.ai) — standards source of truth.

## Hard rules (from LuminaForge standards)

- Next.js App Router, RSC by default — no `pages/` directory.
- Tailwind v4 CSS-first — no `tailwind.config.ts`.
- Env vars through `lib/env.ts` only — never raw `process.env` in app code.
- Ship `/llms.txt` and allow AI crawlers in `robots.ts`.
- Every page: `createMetadata()` from `lib/metadata`, FAQ section + schema on money pages.
