# mr-sohel.github.io

Personal portfolio website for [Md. Sohel Rana](https://mr-sohel.github.io), a final-year CSE student targeting a first .NET / backend role.

Built with **Astro** (static site) and **SCSS**, styled as an ICPC scoreboard.

## Structure

```
.
├── src/
│   ├── components/       # Astro components per section (Nav, Hero, About, Projects, etc.)
│   ├── data/             # profile.ts (every fact shown on the site)
│   ├── layouts/          # Layout.astro (global HTML shell)
│   ├── pages/            # index.astro (single-page portfolio)
│   └── styles/           # global.scss (design tokens, typography, utilities)
├── public/               # Static assets (images, fonts, favicon, resume PDF)
├── dist/                 # Build output (auto-deployed)
├── .github/workflows/    # GitHub Actions deploy workflow
├── astro.config.mjs      # Astro configuration
├── package.json          # Dependencies
├── CLAUDE.md             # Claude Code guidance
├── AGENTS.md             # AI agent guidance
└── plan.md               # Original 2025 plan (out of date on content)
```

## Commands

```bash
npm install
npm run dev      # Local dev at http://localhost:4321
npm run build    # Production build to dist/
npm run preview  # Preview production build
npm test         # Run Vitest
```

## Deployment

Push to `main` triggers GitHub Actions, building the Astro site and deploying to GitHub Pages.

## Key Decisions

- Single-page layout built for a recruiter's 30-second scan
- `src/data/profile.ts` holds every fact, and the structured data reads from it too
- The newest resume PDF is the content source; SellWise details follow the code
