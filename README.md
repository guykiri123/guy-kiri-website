# Guy Kiri — Personal Website

Personal portfolio built with **React + Vite**. Dark, elegant theme with full
**RTL/LTR** support (Hebrew / English) and client-side routing.

## Stack

- React 18 + Vite 5
- React Router (HashRouter — works on GitHub Pages with no 404 redirect hack)
- i18n via a small React context (`src/i18n/`)
- Plain CSS with design tokens + logical properties (auto-mirrors in RTL)

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

## Deploy to GitHub Pages

1. **Set the base path.** In [`vite.config.js`](vite.config.js), set `repoName`
   to your repository name. For a project site the site lives at
   `https://<user>.github.io/<repo>/`, so `base` must be `/<repo>/`.
   For a user site (`<user>.github.io`), set `repoName` so that `base` is `/`.

2. **Automatic deploy (recommended).** A workflow is included at
   [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Push to
   `main`, then in the repo go to **Settings → Pages → Build and deployment →
   Source: GitHub Actions**. Every push to `main` builds and deploys.

3. **Manual deploy (alternative).**

   ```bash
   npm run build
   npx gh-pages -d dist     # or push dist/ to a gh-pages branch
   ```

## Filling in content

All text is placeholder only. Edit:

- **Text strings** → [`src/i18n/translations.js`](src/i18n/translations.js)
  (keep the same keys for both `en` and `he`).
- **About data** (education, skills, experience) → arrays at the top of
  [`src/pages/About.jsx`](src/pages/About.jsx).
- **Projects** → array at the top of
  [`src/pages/Projects.jsx`](src/pages/Projects.jsx).
- **Contact details / social links** →
  [`src/pages/Contact.jsx`](src/pages/Contact.jsx) and
  [`src/components/Footer.jsx`](src/components/Footer.jsx).

Search the codebase for `TODO` to find every spot that needs real content.

## Structure

```
src/
  components/   Navbar, Footer, ProjectCard, Icons
  pages/        Home, About, Projects, Contact
  i18n/         translations.js, LanguageContext.jsx
  styles/       index.css (tokens/reset), App.css
```
