# Bharath Chand Morampudi — Software Engineering Portfolio

A recruiter-focused personal website featuring professional Java/Spring Boot experience, production engineering decisions and attributable projects.

## What is in the site

- Professional opening statement emphasizing Java/Spring Boot and enterprise full-stack delivery.
- Featured DevTrack application, with dedicated engineering case study, production links, documented architecture and CI evidence.
- MindMetrics team capstone with Bharath's individual Logistic Regression contribution explicitly distinguished from team work.
- Quantified highlights from the professional resume at ValueLabs and Darwinbox.
- A one-page **public-safe résumé PDF** at `assets/Bharath_Morampudi_Public_Resume.pdf` (phone intentionally omitted; education dates intentionally omitted).
- Accessible navigation, mobile layouts, social preview artwork, and email / LinkedIn / GitHub contact actions.

**Visual accuracy:** The website's DevTrack pipeline drawing is an editorial illustration, **not a real application screenshot**. The MindMetrics graph is conceptual, **not measured results**. For the actual implementation, follow the provided live app, repository, CI and methodology links. No private production records were captured.

## Run locally

```bash
python3 -m http.server 8000
```

Visit http://localhost:8000 from this folder. No build tool, third-party JavaScript, API keys, account tracking, form backend or database are required. The optional Google Fonts stylesheet uses external requests; system font fallbacks work without internet.

## Deployment

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
- `assets/social-preview.png` is available for social previews **after** the public origin is set correctly.
- The downloadable résumé is a concise public portfolio copy, **not a claim to replace your full master résumé** used for individual applications.

## Source files

- `index.html` — content and SEO metadata
- `styles.css` — layout, motion reduction and responsive design
- `script.js` — accessible mobile navigation and scroll behavior
- `assets/Bharath_Morampudi_Public_Resume.pdf` — public résumé
- `assets/social-preview.png` — social card
- `assets/favicon.svg` — favicon