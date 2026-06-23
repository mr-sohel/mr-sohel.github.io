# mr-sohel.github.io

Personal portfolio website for [Md. Sohel Rana](https://mr-sohel.github.io).

## Structure

```
.
├── src/
│   ├── components/     # Reusable Astro components (Nav, Hero, Projects, etc.)
│   ├── layouts/        # Page layout wrappers (Layout.astro)
│   ├── pages/          # Route pages (index.astro)
│   └── styles/         # Global SCSS styles & design tokens
├── public/             # Static assets (images, resume PDF, favicon)
├── dist/               # Generated build output (auto-deployed by CI)
├── .github/workflows/  # GitHub Actions — builds & deploys on push to main
├── astro.config.mjs    # Astro configuration
├── package.json        # Node dependencies
├── CLAUDE.md           # AI assistant guidance for this repo
├── DESIGN.md           # Stripi design system spec (reference)
└── plan.md             # Portfolio redesign plan & content decisions
```

## Development

```bash
npm install
npm run dev      # Start local dev server at http://localhost:4321
npm run build    # Build for production
```

## Deployment

Pushing to `main` automatically triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the Astro site and deploys it to GitHub Pages.
