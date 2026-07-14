# Vinit Srivastava — Full-Stack Developer Portfolio

A premium, from-scratch portfolio built with **React 19 + Vite + Tailwind CSS v4 + Framer Motion**, inspired by the layout/motion language of the Workfolio template while using 100% original code and a custom blue & white design system. Content is sourced directly from the resume: 2.5+ years as a MERN stack / full-stack developer at Codedemeter.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Design system

- **Colors**: deep navy `#0B2545` (ink), electric azure `#2F6FED` (accent), pale sky tint `#EAF2FF` (section backgrounds), white.
- **Type**: Space Grotesk (display), Inter (body), JetBrains Mono (eyebrows / labels / data).
- **Signature element**: the left-hand "route rail" — a scroll-progress line with per-section stop markers, a nod to the geolocation/route-mapping project in the Projects section.

## Structure

```
src/
├── assets/          static assets
├── components/      reusable UI (Navbar, Footer, Button, ProjectCard, TiltCard, ScrollRail, ...)
├── sections/         page sections (Hero, About, Skills, Experience, Projects, Certifications, Platforms, Contact)
├── hooks/            useActiveSection, useScrollProgress
├── data/             all editable content (profile, skills, education, experience, projects, certifications)
└── App.jsx
```

## Editing content

Everything you'd want to change — bio, skills, education, work history, projects, certifications, resume link, social links — lives in plain JS objects under `src/data/`. No need to touch component code to update copy.

- `src/data/education.js` — Dr. A.P.J. Abdul Kalam Technical University (B.Tech, IT) + school records.
- `src/data/experience.js` — your Software Development Engineer role at Codedemeter (May 2023 — May 2026), from the resume.
- `src/data/projects.js` — PowerMakerAI, AI Excel Automation Agent and TechHub (from the resume) **plus** your original personal projects (GetNews, Laptop Price Prediction, Natours, Doctero, Musicify) — nothing removed.
- `src/data/certifications.js` — all 9 of your original certifications (with real certificate images) **plus** the newer credentials from the resume (MERN Stack, Docker, Google Cloud Ready Facilitator, 270+ LeetCode) shown as icon badges.
- `src/data/skills.js` — categorized as in the resume's Technical Skills section (Frontend, Backend, Databases, Cloud & Tools), plus a Core Concepts tag row for DSA/System Design.

## Notes

- `PowerMakerAI` and `AI Excel Automation Agent` are marked as private/internal in `projects.js` (`github: null`) since no public repo was listed for them — the card shows "Internal / private repo" instead of a broken link. Add a URL there if you'd like to link a case study or demo video instead.
- Some project/certificate thumbnails still point at placeholder images from your old Netlify portfolio (`portfolio-8dd15b.netlify.app/drawables/...`). Swap in real screenshots by dropping images into `src/assets/images` and updating the relevant `image` field.
- The contact form opens the visitor's email client via a `mailto:` link (no backend). Swap in a form service (Formspree, EmailJS, etc.) in `src/sections/Contact.jsx` if you want submissions delivered without opening mail apps.
