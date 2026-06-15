<div align="center">

# Guy Kiri — Personal Portfolio

A dark, elegant, fully **bilingual (Hebrew / English)** portfolio with complete
**RTL ⇄ LTR** support — built with React + Vite and deployed on GitHub Pages.

[**🌐 View the live site →**](https://guykiri123.github.io/guy-kiri-website/)

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white)
![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed-GitHub_Pages-222222?logo=github&logoColor=white)

</div>

---

## ✨ Highlights

- **Bilingual (HE / EN)** with full **RTL ⇄ LTR** mirroring — the whole layout
  flips automatically using CSS logical properties; the chosen language is saved
  to `localStorage` and auto-detected from the browser.
- **Five pages** — Home, *Who Am I?* (the personal story), Projects, Technical
  Details, and Contact — each kept thin and data-driven.
- **Downloadable résumé & army reference letter** — one-click PDF downloads,
  surfaced as reusable buttons across the site.
- **Working contact form** — submissions are emailed directly with no backend
  (via [Web3Forms](https://web3forms.com), client-side), plus one-tap links to
  Email, WhatsApp, LinkedIn and GitHub.
- **Dark, minimal theme** with a warm gold accent, driven entirely by design
  tokens (CSS custom properties).
- **Lightweight by design** — inline SVG icons and a hand-rolled i18n layer, no
  UI framework or icon libraries.
- **Zero-config deploys** — a static SPA published to GitHub Pages on every push
  to `main`.

## 🧱 Tech Stack

| Area       | Choice                                            |
| ---------- | ------------------------------------------------- |
| Framework  | React 18                                          |
| Build tool | Vite 5                                            |
| Routing    | React Router 6 (`HashRouter`)                     |
| i18n       | Custom React Context — [`src/i18n/`](src/i18n/)   |
| Styling    | Plain CSS — design tokens + logical properties    |
| Forms      | Web3Forms (client-side email, no server)          |
| Hosting    | GitHub Pages via GitHub Actions                   |

## 🚀 Getting Started

```bash
npm install
npm run dev      # dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

> No test runner or linter is configured.

## 🌍 Deployment

The site auto-deploys to **GitHub Pages** on every push to `main` via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
One-time setup in the repo: **Settings → Pages → Source: GitHub Actions**.

> [!IMPORTANT]
> **Base path coupling.** [`vite.config.js`](vite.config.js) sets
> `base: '/<repoName>/'`, and `repoName` **must match the GitHub repo name** —
> otherwise every asset 404s on the live site. If you rename or fork the repo
> (or move it to a `<user>.github.io` user site, where `base` is `/`), update
> `repoName` to match.

Routing uses **`HashRouter`** on purpose, so deep links (e.g. `/#/about`)
survive a refresh on GitHub Pages without needing a `404.html` redirect hack.

## ✏️ Editing Content

Pages are data-driven: each declares plain arrays at the top and maps over them,
and all visible text goes through the `t()` translator. **To change content,
edit data — not JSX.**

| What                                                                | Where                                                                                                     |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| All text strings                                                    | [`src/i18n/translations.js`](src/i18n/translations.js) — keep the **same keys** under both `en` and `he`  |
| *Who Am I?* bio                                                     | `whoami.*` keys in [`translations.js`](src/i18n/translations.js)                                           |
| Technical Details (skills, education, military, experience, hobbies) | arrays at the top of [`src/pages/About.jsx`](src/pages/About.jsx)                                          |
| Projects                                                            | array at the top of [`src/pages/Projects.jsx`](src/pages/Projects.jsx)                                    |
| Résumé / reference PDFs                                              | [`src/assets/`](src/assets/) — wired via `ResumeButton` / `RecommendationButton`                          |
| Contact links & social icons                                        | [`src/pages/Contact.jsx`](src/pages/Contact.jsx), [`src/components/Footer.jsx`](src/components/Footer.jsx) |

> Most of the site now holds real content. The **Home hero** headline/tagline
> still uses placeholders — search the codebase for `TODO` to find every spot
> that needs real content.

## 📁 Project Structure

```
src/
  components/   Navbar, Footer, ProjectCard, Icons, ResumeButton, RecommendationButton
  pages/        Home, WhoAmI, About, Projects, Contact
  i18n/         translations.js, LanguageContext.jsx
  assets/       images + downloadable PDFs (imported so Vite handles the base path)
  styles/       index.css (design tokens + reset)
```

---

<div align="center">
<sub>Built with React + Vite · Deployed on GitHub Pages</sub>
</div>
