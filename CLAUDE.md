# CLAUDE.md

This file provides guidance to AI coding assistants when working with code in this repository.

## Project overview

Personal portfolio website for Md. Sohel Rana — a final-year CSE student targeting first SWE / .NET Developer roles. The site is being **redesigned from a vanilla HTML/JS single-page site to an Astro-based static site** with a Stripi-inspired design system.

## Repository structure

```
├── absolute-ascension/     # NEW Astro project (the redesign)
│   ├── src/pages/
│   ├── public/
│   ├── astro.config.mjs
│   └── package.json
├── _legacy/                # Old vanilla HTML/JS portfolio (archived)
├── DESIGN.md               # Stripi-inspired design tokens & component specs
├── plan.md                 # Full implementation plan (source of truth for content & sections)
├── resources and links.txt # External profile URLs & planning notes (not deployed)
├── Sohel_51.pdf            # Resume variant
└── resume_faangpath.pdf    # Resume variant (pick one, rename for production)
```

## Development (Astro project)

All new work happens inside `absolute-ascension/`.

**Install dependencies:**
```
cd absolute-ascension
npm install
```

**Dev server:**
```
npm run dev
```

**Production build:**
```
npm run build
```
Output goes to `absolute-ascension/dist/`.

**Deployment** — GitHub Pages from the `main` branch at https://mr-sohel.github.io/. A GitHub Actions workflow (`.github/workflows/deploy.yml`) will automate build & deploy.

## Design system

The visual design is **Stripi-inspired but adapted for portfolio UX** (see `DESIGN.md` for full token reference):

- **Colors**: Indigo `#533afd` primary, Ink Navy `#0d253d` text, Canvas Soft/White/Cream surfaces.
- **Typography**: Inter font, weight 300 for display headings (with negative letter-spacing), weight 400 for body text. `font-feature-settings: "ss01"` enabled globally. `"tnum"` for numeric data in the CP dashboard only.
- **Components**: Pill buttons (`9999px` radius), cards (`12px` radius, Level 1 shadows), gradient mesh hero backdrop.
- **Portfolio-specific relaxations**: Multiple CTAs per section allowed. Body text at weight 400 for readability. Gradient mesh served as WebP with CSS fallback.

## Content sections (defined in plan.md)

1. Nav bar (scroll-aware, with persistent "Download CV" button)
2. Hero (name, tagline, CTAs, social links)
3. About (professional summary — who, what, why hire)
4. Education (degree, university, CGPA, graduation date)
5. CP Dashboard (platform ratings, solve counts, contest results)
6. Projects (problem → stack → impact metrics → demo/code links)
7. Experience & Leadership (CP Instructor role with metrics)
8. Skills grid (categorized pill-tag chips)
9. Contact (email, LinkedIn, GitHub, optional form, availability badge)
10. Footer

## Key references

- `plan.md` — **Primary source of truth** for all content, sections, implementation phases, and pre-launch checklist.
- `DESIGN.md` — Stripi design tokens (colors, typography scale, spacing, components, do's/don'ts). Adapted for portfolio use — not followed strictly where it conflicts with portfolio UX.
- `resources and links.txt` — External profile URLs (GitHub, LinkedIn, Codolio) and planning notes. Not part of the deployed site.

## Important guidelines

- The **goal is landing a first SWE job**, not building a pixel-perfect Stripe clone. Every design decision should optimize for recruiter conversion.
- Projects must include **impact metrics** (accuracy %, latency, scale), not just tech stack lists.
- All `[XX]` placeholders in `plan.md` need real data before launch.
- The GitHub bio ("A dull-minded programmer") and LinkedIn URL inconsistency (`/mrsohelcse` vs `/mrsohel`) must be fixed before the site goes live.
