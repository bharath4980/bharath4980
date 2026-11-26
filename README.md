# Bharath Chand Morampudi — Software Engineering Portfolio

A recruiter-focused personal website featuring professional Java/Spring Boot experience, production engineering decisions and attributable projects.

## What is in the site

- Hero with name, role, a one-line summary and Resume / GitHub / LinkedIn buttons, plus an "at a glance" card.
- Projects: Multi-Tenant Approval Workflow API (code only, not deployed), DevTrack (code and live demo) and MindMetrics-STREL (team project, with Bharath's logistic-regression work called out).
- Experience timeline for ValueLabs and Darwinbox, grouped skills, education and contact.
- Light and dark themes: follows the visitor's system setting, with a toggle that is remembered.
- Responsive from phone to desktop, keyboard accessible (skip link, focus styles, labelled controls), and respects reduced-motion settings.
- A one-page **public-safe résumé PDF** at `assets/Bharath_Morampudi_Public_Resume.pdf` (phone intentionally omitted; education dates intentionally omitted).

No images of the projects are used, so nothing on the page is a mock-up presented as a screenshot.

## Run locally

```bash
python3 -m http.server 8000
```

Visit http://localhost:8000 from this folder. No build tool, web fonts, third-party JavaScript, API keys, tracking, form backend or database are required; the page makes no external requests.

## Deployment

**Live URL:** https://bharath-morampudi-portfolio.onrender.com/


This site is deployed from the isolated `portfolio-site` branch of `bharath4980/bharath4980` to a free Render Static Site. It does not modify the profile README on `main`.

- Publish directory: repository root (`./`)
- Build command: `echo 'Static portfolio ready'`
- Automatic deployment: enabled for updates to `portfolio-site`
- The site contains no backend, database, analytics tracking, or stored credentials.
- Contact and public résumé information is intentionally published.

The dedicated GitHub Pages repository `bharath4980.github.io` has not been created. The site can be moved there later without changing the design.

## Fact and privacy checks before publishing

- Professional dates: ValueLabs (Aug 2023–Jul 2024), Darwinbox (Jun 2021–May 2023). Quantitative examples match the selected approved résumé, not independent employer verification.
- MindMetrics is a team capstone, with the Logistic Regression implementation attributed to Bharath.
- Project links go to accessible public repositories; DevTrack is hosted at `https://devtrack-3upd.onrender.com` and can require a cold start.
- Site publicly displays `bharathmorampudi159@gmail.com` and Houston, Texas. No home address, credentials, phone number, or other sensitive details are included.
- Social previews currently provide a title and description; an image preview can be added later.
- The downloadable résumé is a concise public portfolio copy, **not a claim to replace your full master résumé** used for individual applications.

## Source files

- `index.html` — content and SEO metadata
- `styles.css` — light/dark theme tokens, layout and responsive design
- `script.js` — theme toggle, mobile menu, active-section highlighting and copy-email button
- `assets/Bharath_Morampudi_Public_Resume.pdf` — public résumé
- `assets/favicon.svg` — favicon