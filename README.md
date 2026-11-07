# Haziq Ali — Portfolio

Personal portfolio of **Haziq Ali**, Full-Stack Engineer (React, Next.js, Node.js, AI-powered development) based in Lahore, Pakistan.

A fast, fully responsive single-page site with dark/light mode, scroll animations, a filterable projects grid and a working contact form.

![Screenshot of the portfolio](./docs/screenshot.png)
<!-- TODO: take a screenshot of the live site and save it as docs/screenshot.png -->

## Tech stack

- [React](https://react.dev) + [Vite](https://vite.dev) (JavaScript)
- [Tailwind CSS v4](https://tailwindcss.com) via the official Vite plugin
- [Framer Motion](https://motion.dev) for subtle animations
- [React Icons](https://react-icons.github.io/react-icons/) (Feather set)
- [Formspree](https://formspree.io) for the contact form (no backend)
- Deployed on [Vercel](https://vercel.com)

## Editing content

All text, skills, experience, projects and links live in **`src/data/portfolio.js`**.
Search that file for `TODO` to find what still needs real information.

| Asset | Location |
| --- | --- |
| Profile photo | `public/profile.webp` |
| Resume | `public/resume.pdf` |
| Project screenshots | `public/projects/*.png` (16:9 works best) |
| Favicon | `public/favicon.svg` |

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open http://localhost:5173.

Build and preview the production version:

```bash
npm run build
npm run preview
```

## Contact form setup

1. Create a free account at https://formspree.io and add a new form.
2. Copy the form ID (the part after `/f/` in the endpoint URL).
3. Paste it into `formspreeId` in `src/data/portfolio.js`.

Until an ID is set, the form opens the visitor's email app with the message filled in.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to https://vercel.com/new and import the `haziq-portfolio` repository.
3. Vercel detects Vite automatically (build command `npm run build`, output `dist`). Click **Deploy**.
4. Every push to `main` redeploys the site automatically.

## Project structure

```
portfolio/
├── public/            favicon, profile photo, resume, project images
├── src/
│   ├── components/    one component per section
│   ├── data/          portfolio.js — all site content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css      Tailwind setup + theme colors
├── index.html         title, meta description, Open Graph tags
└── vite.config.js
```

## License

© Haziq Ali. All rights reserved.
