# mr-sohel.github.io

Personal portfolio website for [Md. Sohel Rana](https://mr-sohel.github.io) — a CS graduate targeting first SWE / .NET Developer roles.

Built with **Astro** (static site) and **SCSS** with a Stripi-inspired design system.

## Structure

```
.
├── src/
│   ├── components/       # Astro components per section (Nav, Hero, About, Projects, etc.)
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
├── DESIGN.md             # Stripi design tokens (reference)
└── plan.md               # Content plan & implementation phases
```

## Commands

```bash
npm install
npm run dev      # Local dev at http://localhost:4321
npm run build    # Production build to dist/
npm run preview  # Preview production build
```

## Deployment

Push to `main` triggers GitHub Actions, building the Astro site and deploying to GitHub Pages.

## Key Decisions

- Single-page layout optimized for recruiter conversion (~30s scan)
- Projects ordered by SWE relevance: Online Judge System → Fruit Quality → FER Autism
- "Download Resume" button in Nav (not CV)
- WhatsApp placeholder `8801700000000` — must update before launch
- Live Demo URLs are placeholders (`*-demo.vercel.app`)
