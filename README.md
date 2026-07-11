# Lihle Websites

A portfolio site built with React + Vite + React Router.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The production files land in `dist/`.

## Project structure

```
src/
  assets/            logo, hero background, profile photo
  components/         shared UI: Nav, Footer, ProjectCard, CtaSection, Reveal
  components/home/    Hero, About, Services, RecentProjects — home page only
  data/               projects.js — project list, categories, form options
  pages/              Home, Portfolio, Contact, Book — one file per route
  App.jsx             route definitions
  main.jsx            app entry point
  index.css           all styling (design tokens + component styles)
```

## Routes

- `/` — Home (hero, about, services, recent projects, CTA)
- `/portfolio` — full project grid with category filters
- `/contact` — contact details + CTA card
- `/book-a-project` — project intake form (no e-commerce option, no budget field)

## Deploying

This is a client-side routed single-page app. If you deploy to a static host
(Netlify, Vercel, GitHub Pages, etc.), make sure unknown paths rewrite to
`index.html` so routes like `/portfolio` work on a hard refresh:

- **Vercel / Netlify**: works out of the box, or add a rewrite rule sending
  `/*` to `/index.html`.
- **GitHub Pages**: needs a `404.html` that redirects to `index.html`, or
  switch `BrowserRouter` to `HashRouter` in `src/main.jsx`.

## Editing content

- Swap real project screenshots in for the gradient placeholders by editing
  `src/data/projects.js` and `src/components/ProjectCard.jsx`.
- Update contact details in `src/components/Footer.jsx` and
  `src/pages/Contact.jsx`.
- Colors and fonts are defined as CSS variables at the top of
  `src/index.css`.
