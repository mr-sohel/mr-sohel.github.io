# Portfolio Redesign Plan: Md. Sohel Rana

This document outlines the detailed architectural, design, and implementation plan for the redesign of the personal portfolio website of Md. Sohel Rana — with the primary goal of **landing a first Software Engineering position**.

---

## 1. Architectural Plan & Tech Stack

We will migrate the current vanilla HTML/JS portfolio to a modern component-driven static site.

*   **Framework**: **Astro (Static Site Generator)**
    *   **Performance & SEO**: Astro generates zero client-side JavaScript by default. This ensures a perfect Google Lighthouse score, fast load times, and excellent search engine indexing.
    *   **Component Architecture**: Allows modular development (e.g., separating layout, buttons, cards, and sections) rather than maintaining one massive, unreadable `index.html`.
*   **Styling**: **Sass (SCSS)**
    *   We will natively integrate Sass into Astro to structure our style files.
    *   We will migrate the existing `assets/scss/` partials, keeping them fully modular.
*   **Asset Pipeline**:
    *   Astro's built-in optimized image pipeline (`<Image />` component) will automatically compress and serve images in next-gen formats (WebP/AVIF).
    *   Fonts (specifically Inter) will be imported and loaded locally or via high-performance CDN links.
*   **Deployment**: **GitHub Pages**
    *   Astro compiles the site into static assets inside a `dist/` directory.
    *   A GitHub Actions workflow will automate building and deploying to GitHub Pages on every push to `main`.

---

## 2. Design System & Art Direction (Stripi-Inspired, Portfolio-Adapted)

The design draws from the **Stripi** guidelines in `DESIGN.md`, but **relaxed where portfolio UX requires it**. The Stripi system was designed for a fintech marketing site — a job-landing portfolio has different conversion goals.

### Kept from Stripi
*   **Colors**: Indigo `#533afd` primary, Ink Navy `#0d253d` text, Canvas Soft `#f6f9fc` / Canvas White `#ffffff` / Canvas Cream `#f5e9d4` surfaces.
*   **Typography**: Inter at weight 300 with negative letter-spacing on display sizes. `ss01` stylistic set enabled globally.
*   **Elements**: Pill buttons (`9999px` border-radius), card layouts (`12px` border-radius) with Level 1 shadows.
*   **Backdrop**: Gradient mesh (indigo, ruby pink, orange, lavender) in the hero area.

### Relaxed for Portfolio UX
*   **Multiple CTAs per section are allowed.** Project cards need "View Demo", "View Code", and "Read More" actions — the strict "one filled CTA per band" rule is too limiting.
*   **Tabular figures (`tnum`) only where needed.** Apply to the CP dashboard metrics section (ratings, solve counts). Don't force it globally.
*   **Gradient mesh implementation**: Use a pre-rendered WebP with CSS fallback for mobile performance, rather than a complex SVG that's heavy and hard to make responsive.
*   **Inter weight 300 at small sizes**: On screens below 1080p, weight 300 can look anemic. Allow weight 400 for body text at ≤ 15px to maintain readability.

---

## 3. Content Structure & Sections

> **Design goal**: A recruiter spends ~30 seconds on a portfolio. Every section must answer a hiring question within that window.

### 3.1 Navigation Bar
*   Floating nav over the gradient mesh.
*   Links: About · Projects · Experience · Skills · Contact.
*   Right side: Theme toggle + "Download CV" pill button (always visible).

### 3.2 Hero Section
*   **Backdrop**: Atmospheric gradient mesh.
*   **Headline**: **Md. Sohel Rana** (Display XXL, weight 300, negative tracking).
*   **Subheadline**: *Software Engineer · Backend Developer · Competitive Programmer*
*   **CTAs**: Primary filled pill ("Download CV") + secondary outline pill ("Contact Me" → scrolls to Contact section).
*   **Social links**: GitHub, LinkedIn, Codeforces, LeetCode — icon row beneath CTAs.

### 3.3 About Section *(NEW — P0)*
> Answers: "Who is this person and should I keep reading?"

A concise 3–4 sentence professional summary:

> *I'm a final-year Computer Science & Engineering student at BUBT with a deep focus on backend systems, competitive programming, and applied machine learning. I've participated in 3 ICPC Dhaka Regionals, solved 1500+ algorithmic problems, and built full-stack products ranging from a containerized Online Judge to real-time computer vision systems. I'm actively seeking Software Engineer / .NET Developer roles where I can apply my problem-solving foundation to production systems.*

*   Placed immediately after the hero — this is the first thing a recruiter reads after your name.
*   No jargon-heavy paragraphs. Direct, confident, outcome-oriented.

### 3.4 Education Section *(NEW — P0)*
> Answers: "Does this person have the academic foundation?"

*   **Degree**: B.Sc. in Computer Science & Engineering
*   **University**: Bangladesh University of Business & Technology (BUBT)
*   **Expected Graduation**: December 2026
*   **CGPA**: 3.52 / 4.00
*   **Relevant Coursework**: Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Operating Systems, Computer Networks, Software Engineering, Machine Learning.

Layout: A clean horizontal card on Canvas Cream background to visually separate it from adjacent sections.

### 3.5 Competitive Programming Dashboard (Metrics Section)
> Answers: "Can this person actually solve hard problems?"

Showcase CP achievements inside a **Dashboard Mockup Component** with tabular typography:

*   **Platform Ratings** (displayed as metric cards):
    *   **Codeforces**: Specialist — Max Rating: `1422` (Top 15%)
    *   **LeetCode**: Knight — Max Rating: `1653` (Top 17.43%)
    *   **CodeChef**: 3-Star — Max Rating: `1623` (Top 7%)
*   **Total Problems Solved**: `1500+` (with platform breakdown: VJudge 469 · CSES 84 · LightOJ 83 · HackerRank 71 · UVa 63 · Kattis 39.1)
*   **Notable Contests**:
    *   ICPC Dhaka Regional 2024 — Ranked 157th (Team: BUBT_Mudbloods)
    *   ICPC Dhaka Regional 2023 — Honorable Mention
    *   Meta Hacker Cup 2025 — Round 2 Qualifier (Top 13k globally)
    *   BUBT Intra University Contests — 2-Time Champion (2022, 2024)
    *   UAP Inter University Contest — 2nd Runner-up
*   **Profile links**: Each platform name links to the actual profile (Codeforces, LeetCode, CodeChef, Codolio).

### 3.6 Projects Section (Card Grid) *(REVISED — P0)*
> Answers: "What has this person actually built, and does it work?"

Each project card must include: **problem statement → tech stack → impact metrics → action buttons**.

#### Project 1: Online Judge System
*   **Problem**: Built a competitive programming judge platform to automate code evaluation for university contests.
*   **Stack**: C#, ASP.NET Core, Docker, RabbitMQ, PostgreSQL.
*   **Impact**:
    *   Supports concurrent code submissions with isolated Docker-based sandboxed execution.
    *   Async job processing via RabbitMQ for scalable verdict delivery.
    *   *(Currently in active development)*
*   **Actions**: `[Dummy Demo Link for now]` `[GitHub]`

#### Project 2: Real-Time Fruit Quality Detection
*   **Problem**: Built an end-to-end IoT + ML system that detects whether fruits are fresh or rotten using a $5 ESP32-CAM and a cloud-hosted AI model.
*   **Stack**: Python, C++, FastAPI, YOLOv8 Nano, ONNX Runtime, ESP32-CAM, Telegram API.
*   **Impact**:
    *   Achieved 98.97% mAP@50 across 8 fruit classes using YOLOv8 Nano.
    *   Improved inference latency by 80% (reducing response time from 15s to 3s) via ONNX conversion for edge deployment.
    *   Real-time alerts delivered to Telegram for quality monitoring.
*   **Actions**: `[GitHub]` `[Demo Video]`

#### Project 3: Facial Emotion Recognition for Autism
*   **Problem**: Developed a deep learning system to recognize facial expressions in individuals with autism, aiding therapeutic assessment.
*   **Stack**: Python, PyTorch, Swin Transformers (ESSwin-6), Explainable AI (Grad-CAM).
*   **Impact**:
    *   Achieved 89% validation accuracy, outperforming 14 standard baselines using a novel Enhanced SE-Swin Transformer (ESSwin-6) architecture.
    *   Applied Explainable AI (Grad-CAM) to visualize model attention regions for clinical interpretability and transparent predictions.
*   **Actions**: `[GitHub]` `[Research Paper]` *(if applicable)*

> **Note**: Each card should include a screenshot or GIF at the top. Portfolios without visuals are résumés with extra steps.

### 3.7 Experience & Leadership *(REVISED — expanded)*
> Answers: "Has this person worked with others and delivered results?"

#### Competitive Programming Instructor — BUBT CP Community
*   Duration: [Start Date] – Present
*   Mentored 50+ students in C++, data structures, and algorithms, focusing on optimization techniques for ICPC-style problem solving.
*   Organized coding contests for junior members on virtual judge platforms to improve university-wide contest participation and ranking.

#### Open Source / Freelance / Other *(add any that apply)*
*   Any contributions to open-source projects (even small PRs count).
*   Any freelance development work.
*   University lab assistant, TA, or research assistant roles.

> **If this section feels thin**: Prioritize deploying the Online Judge as a usable product and making 2–3 meaningful open-source contributions before active job applications. A working deployed product is worth more than any portfolio redesign.

### 3.8 Skills Grid
*   **Languages**: C/C++, C#, Python, JavaScript, SQL.
*   **Backend**: ASP.NET Core, REST APIs, FastAPI, Entity Framework.
*   **Frontend**: Angular, React.js, HTML/CSS.
*   **ML/AI**: PyTorch, YOLOv8, Vision Transformers, ONNX Runtime.
*   **Core CS**: Data Structures, Algorithms, OOP, SOLID Principles, Design Patterns.
*   **DevOps & Tools**: Git, Docker, Linux, AWS, RabbitMQ, PostgreSQL.

Layout: Grouped pill-tag chips on a Canvas Soft background. Each category is a labeled row.

### 3.9 Contact Section *(NEW — P0)*
> Answers: "I'm interested — how do I reach this person?"

*   **Heading**: "Let's Connect" or "Open to Opportunities"
*   **Email**: mrsohelcse@gmail.com
*   **LinkedIn**: https://www.linkedin.com/in/mrsohel/
*   **GitHub**: https://github.com/mr-sohel
*   **Optional**: A simple contact form using Formspree or Getform (free tier, no backend needed).
*   **Availability badge**: A small green-dot pill tag: "✅ Open to full-time SWE roles"

### 3.10 Footer
*   © 2025 Md. Sohel Rana · Built with Astro.
*   Social icon links (GitHub, LinkedIn, Twitter/X).
*   "Made with ☕ in Dhaka" *(optional personal touch)*.

---

## 4. Resume Strategy

Two resume PDFs exist in the repo: `Sohel_51.pdf` and `resume_faangpath.pdf`.
*   **Selected Resume**: We will use `resume_faangpath.pdf` as it uses a clean, FAANG-style format ideal for SWE applications.
*   **Action**: Rename it to `Md_Sohel_Rana_Resume.pdf` for the final site, and remove `Sohel_51.pdf` from the public repo.
*   Ensure the resume content matches what the portfolio says — inconsistencies between resume and portfolio are a red flag for recruiters.

---

## 5. Pre-Launch Cleanup Checklist

### GitHub Profile
- [ ] **Change bio** from "A dull-minded programmer" to something like: *"Final-year CSE student | Competitive Programmer (ICPC Regionalist) | Building backend systems with C#, .NET, Docker"*
- [ ] **Pin 6 best repos**: Online Judge, Autism FER, Fruit Detection, Chess-Masters, Competitive-Programming, portfolio.
- [ ] **Add proper READMEs** with screenshots/GIFs to each pinned project repo.
- [ ] **Update profile README** to link to the new portfolio.

### LinkedIn
- [ ] Ensure LinkedIn headline matches portfolio positioning: "Software Engineer | Competitive Programmer | .NET & Backend Developer"

### Repository Cleanup
- [ ] Move `resources and links.txt` to `.notes/` or delete — the prompt text is useful for planning but shouldn't be in the public repo root.
- [ ] Verify Google Drive resume link in resources file is publicly accessible.
- [ ] Add Codeforces, LeetCode, and Codolio profile links to the resources file for reference.

---

## 6. Step-by-Step Implementation Plan

### Phase 1: Setup Astro & Clean Directory
- Move old portfolio files to `_legacy/` to preserve backups.
- Scaffold a new Astro project in the repository root.
- Install Sass: `npm install -D sass`.

### Phase 2: Design Tokens & Layout Shell
- Migrate variables from `assets/scss/config/_variables.scss` and `DESIGN.md` into global CSS variables.
- Install or link Inter font with stylistic variants enabled (`ss01`, weight 300 for display / 400 for body).
- Create base Astro components:
  - `Layout.astro` (including a theme-switching system using localStorage).
  - `Button.astro` (Primary, Secondary, On-Dark button styles).
  - `Card.astro` (light card, dark featured card, project card with action buttons, and dashboard mockup styles).
  - `GradientMesh.astro` (pre-rendered WebP with CSS gradient fallback).

### Phase 3: Content Assembly
- Build the `Nav` bar with scroll-aware behavior.
- Build the `Hero` section with social links.
- Build the `About` section (professional summary).
- Build the `Education` card.
- Build the `CPDashboard` section (metric cards with tabular typography).
- Build `Projects` card grid with impact descriptions, screenshots, and action buttons.
- Build `Experience` timeline section.
- Build `Skills` chip grid.
- Build `Contact` section with form and availability badge.
- Build `Footer`.
- Implement theme toggle button interactions.

### Phase 4: Content Polish
- Capture or create screenshots/GIFs for each project card.
- Fill in all `[XX]` placeholder metrics with real numbers (accuracy, dataset size, etc.).
- Select and rename the final resume PDF.
- Write alt text for all images.

### Phase 5: SEO, Optimization & Deployment
- Set up SEO meta-tags (title, description, OpenGraph tags, preview images).
- Add structured data (JSON-LD) for Person schema — helps Google Knowledge Panel.
- Verify accessibility tags (alt tags, aria-labels, keyboard navigation for theme switch).
- Set up a GitHub Actions workflow `.github/workflows/deploy.yml` to automatically build and deploy to GitHub Pages.

### Phase 6: Pre-Launch Checklist
- Execute all items in Section 5 (GitHub bio, LinkedIn, repo cleanup).
- Cross-check resume ↔ portfolio content consistency.
- Test on mobile (< 768px), tablet, and desktop.

---

## 7. Verification Plan

1.  **Build Verification**: Run `npm run build` locally to verify successful compiling.
2.  **Visual Inspection**: Open local server `npm run dev` to verify:
    *   Correct loading of Inter at weight 300 (display) / 400 (body) with negative tracking.
    *   Proper alignment and tabular figure rendering (`tnum`) in the CP dashboard.
    *   Correct appearance of the gradient mesh in dark/light modes.
    *   Fully functional theme-toggle state persistence.
    *   All project cards have visible screenshots and working action links.
    *   Contact form submits successfully (if using Formspree/Getform).
    *   "Download CV" button downloads the correct, renamed PDF.
3.  **SEO & Accessibility Audit**: Run a Lighthouse check to ensure 95+ score on Performance, Accessibility, and SEO.
4.  **Content Audit**: Verify no `[XX]` placeholders remain. All metrics are real numbers.
5.  **Cross-Browser**: Test on Chrome, Firefox, and Safari. Test on Android and iOS.
6.  **Link Audit**: Verify all external links (GitHub repos, LinkedIn, Codeforces profiles, live demos) resolve correctly.
