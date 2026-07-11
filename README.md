# Lumetrics Biostatistics — Marketing Website

A premium marketing site for a biomedical statistics CRO, built with React,
Tailwind CSS v4, React Router, Framer Motion, and Lucide React.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/   Reusable UI: Navbar, Footer, cards, section heading, reveal wrapper, hero scatter graphic
  pages/        Route-level pages (Home, About, Solutions, Resources, Contact, Services)
  layouts/      MainLayout (navbar + outlet + footer)
  data/         Content: nav links, service detail copy, homepage copy
  utils/        Small helpers (classnames)
```

## Design notes

- Color system, type scale, and spacing live in `src/index.css` under `@theme`
  (Tailwind v4's CSS-based config) — edit tokens there to retheme the whole site.
- Fonts: Fraunces (display), Inter (body), IBM Plex Mono (data/labels) — loaded
  via Google Fonts in `index.html`.
- The hero's scatter/regression-line graphic (`ScatterField.jsx`) is the
  site's signature visual motif, echoed on the contact CTA and service pages.
- Every service page is data-driven from `src/data/serviceDetails.js` — add a
  new service by adding an entry there and to `src/data/nav.js`.
- Respects `prefers-reduced-motion`.
