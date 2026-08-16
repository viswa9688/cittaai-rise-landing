# CittaAI RISE — Landing Page

Marketing site for **CittaAI RISE** (Rapid Idea-to-Agent Sprint Experience) — Idea2Agent Edition.

**Live site:** https://viswa9688.github.io/cittaai-rise-landing/

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

Deploys automatically on every push to `main` via `.github/workflows/deploy-pages.yml`.

1. Repo → **Settings** → **Pages**
2. **Source:** GitHub Actions
3. Push to `main` (or run the workflow manually under **Actions**)
4. Open https://viswa9688.github.io/cittaai-rise-landing/

## Config

Set the registration portal URL in `src/content.ts`:

```ts
export const REGISTER_URL = '#register'
```
