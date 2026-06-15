# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio site for Guy Kiri — React 18 + Vite 5, no backend. Dark theme, bilingual (Hebrew/English) with full RTL/LTR support.

## Commands

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build to dist/
npm run preview  # serve the production build locally
```

There is no test runner and no lint script configured.

## Deployment (read before changing config or routing)

- **Auto-deploy:** every push to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages. Live at https://guykiri123.github.io/guy-kiri-website/ (repo `guykiri123/guy-kiri-website`).
- **Base-path coupling:** `vite.config.js` sets `base: '/<repoName>/'` and `repoName` **must equal the GitHub repo name**, or all asset/script URLs 404 on the deployed site. If the repo is renamed, or moved to a user site (`<user>.github.io`, base `/`), update `repoName` accordingly.
- **HashRouter, not BrowserRouter** (`src/main.jsx`): routes live under `/#/about`, `/#/contact`, etc. This is intentional so deep links survive a refresh on GitHub Pages without a `404.html` redirect. Don't switch to BrowserRouter without adding that workaround.

## Architecture

**Content vs. code.** Pages are thin: each declares a plain data array at the top of the file and maps over it. All user-facing text goes through `t()`. To change content, edit the data array or translations — not JSX structure:
- Text strings → `src/i18n/translations.js`. Project card titles/descriptions live there too (keys under `projects.items.*`); the `Projects.jsx` array holds only `titleKey`/`descKey` plus non-translatable data (image, tags, links), resolved to `title`/`description` via `t()` in the `.map()`.
- Projects → array at top of `src/pages/Projects.jsx`
- Who-Am-I bio + the whole About page (grouped skills, education, military service, experience, volunteering, hobbies) → data arrays at the top of `src/pages/WhoAmI.jsx` / `src/pages/About.jsx`, with `*Key`/`period` fields resolved via `t()`
- Contact links → `contacts` array in `src/pages/Contact.jsx` and `socials` in `src/components/Footer.jsx`

**Images / assets** — `import` them from `src/assets/` (e.g. project card thumbnails) so Vite rewrites the URL with the deployed `base` path. Don't put them in `public/` or reference an absolute `/repoName/...` URL — both break when the base path changes. `ProjectCard` renders the imported `image` if present and otherwise falls back to a letter-mark thumbnail, so `image` is optional per card. **PDFs are assets too** — the résumé and IDF recommendation letter live in `src/assets`, are `import`ed, and surfaced as `<a download>` links by the reusable `ResumeButton` / `RecommendationButton` components (Vite treats `.pdf` as an asset and rewrites the base path, so downloads work on the deployed site).

**Adding a page** — a route lives in three places that must stay in sync: the `<Route>` in `src/App.jsx`, the entry in the `links` array in `src/components/Navbar.jsx` (array order = menu order), and a `nav.<key>` label plus the page's own section in `translations.js` under **both** `en` and `he`. Each page is a `<section className="page section">` with its own CSS file, headed by a single `<h1 className="section-title">{t('…')}</h1>`.

**i18n (custom, no library)** — `src/i18n/LanguageContext.jsx`:
- `useLanguage()` gives `{ lang, dir, t, toggleLang, setLang, languages }`; `useT()` returns just `t`.
- `t('section.key')` does a dotted-path lookup into `translations[lang]`. A missing key falls back to returning the key string itself, so untranslated text is visible in the UI. The lookup returns **whatever sits at the path** — usually a string, but also arrays/objects, which pages `.map()` for list content (Who-Am-I bio paragraphs, About skill groups, matriculation subjects; guard with `Array.isArray`). **Every key must exist under both `en` and `he`.**
- Language is persisted to `localStorage` (`gk-lang`), auto-detects a Hebrew browser, and keeps `<html lang>`/`<html dir>` in sync via an effect.

**RTL/LTR** — the layout mirrors automatically when `dir="rtl"` because CSS uses **logical properties** (`margin-inline`, `inset-inline`, `padding-block`, …). Write new styles the same way; avoid hardcoded `left`/`right`/`margin-left`. Direction-specific tweaks use `[dir='rtl'] .selector { … }`.

**Styling** — plain CSS, one `.css` file per component/page (imported by the component). Global reset + design tokens (colors, fonts, spacing, motion) are CSS custom properties in `src/styles/index.css`; use the `var(--…)` tokens rather than literal values.

**Icons** — `src/components/Icons.jsx` holds inline stroke-based SVGs (no icon library). They share a `base` props object and use `currentColor`; add new icons there following the same pattern.

**Contact form** — client-side only, posts JSON to `https://api.web3forms.com/submit` with an access key constant in `src/pages/Contact.jsx`. Note: Web3Forms' free tier **rejects server-side submissions** (HTTP 403) — only browser/client-side requests work, so the form can't be verified with a plain `curl` from a server. A hidden `botcheck` honeypot field guards against spam.

Contact links, Projects, the Who-Am-I bio, and the whole About page now hold real content. The **Home hero** is the main remaining placeholder — `home.role` / `home.tagline` (and the eyebrow) in `translations.js`. `grep -rn TODO src/` finds every spot that still needs real content.
