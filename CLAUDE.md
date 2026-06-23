# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Md. Sohel Rana — a final-year CSE student targeting first SWE / .NET Developer roles. The site is an **Astro-based static site** with a Stripi-inspired design system.

## Common Commands

- **Install dependencies:** `npm install`
- **Development Server:** `npm run dev` (Starts local server at http://localhost:4321)
- **Production Build:** `npm run build` (Outputs generated static site to `dist/`)
- **Preview Build:** `npm run preview`
*(Note: Automated test or linting scripts are not currently configured for this repository.)*

## Code Architecture & Structure

This is a single-page Astro application. Everything runs from the repository root:

- `src/pages/index.astro`: Main entry point containing the full portfolio page.
- `src/layouts/Layout.astro`: The global HTML shell, injecting global fonts, meta tags, and the `<slot />` for content.
- `src/components/`: Modular Astro components representing each portfolio section (e.g., `Hero.astro`, `About.astro`, `Projects.astro`, `CPDashboard.astro`) as well as reusable UI pieces (`Button.astro`, `Card.astro`, `GradientMesh.astro`).
- `src/styles/global.scss`: Global SASS styling, design tokens, typography, and utility classes.
- `public/`: Static assets such as images (`avatar.jpg`, `og-preview.jpg`), fonts, favicons, and the resume PDF (`Md_Sohel_Rana_Resume.pdf`).
- `.github/workflows/deploy.yml`: Automates build and deployment to GitHub Pages upon pushing to the `main` branch.

## Design System

The visual design is **Stripi-inspired but adapted for portfolio UX** (see `DESIGN.md` for full token reference):

- **Colors**: Indigo `#533afd` primary, Ink Navy `#0d253d` text, Canvas Soft/White/Cream surfaces.
- **Typography**: Inter font, weight 300 for display headings, 400 for body text. `font-feature-settings: "ss01"` enabled globally. `"tnum"` for numeric data in the CP dashboard only.
- **Components**: Pill buttons (`9999px` radius), cards (`12px` radius, Level 1 shadows), gradient mesh hero backdrop.
- **Portfolio-specific relaxations**: Multiple CTAs per section allowed. Body text at weight 400 for readability. Gradient mesh served as WebP with CSS fallback.

## Content Sections (defined in plan.md)

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

## Key References

- `plan.md` — **Primary source of truth** for all content, sections, implementation phases, and pre-launch checklist.
- `DESIGN.md` — Stripi design tokens (colors, typography scale, spacing, components). Adapted for portfolio use — not followed strictly where it conflicts with portfolio UX.

## Important Guidelines

- The **goal is landing a first SWE job**, not building a pixel-perfect Stripe clone. Every design decision should optimize for recruiter conversion.
- Projects must include **impact metrics** (accuracy %, latency, scale), not just tech stack lists.
- All `[XX]` placeholders in `plan.md` need real data before launch.
- Fix any remaining inconsistencies (e.g., GitHub bio, LinkedIn URL) before the site goes live.