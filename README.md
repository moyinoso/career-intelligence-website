# Career Intelligence — Website

A modern, minimal marketing and explainer website for **Career Intelligence:
An AI-Powered Career Intelligence and Employability Assessment System for
Graduates in Ado-Ekiti, Nigeria**.

This website explains the project and links to the existing Streamlit
application. It does **not** replace, modify, or overwrite the Streamlit app.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) icons
- Deployed on [Vercel](https://vercel.com/)

## Project Structure

```
career-intelligence-site/
├── app/
│   ├── globals.css          # Tailwind directives + base styles
│   ├── layout.tsx           # Root layout, fonts, metadata
│   └── page.tsx             # Home page assembling all sections
├── components/
│   ├── About.tsx            # Project purpose, research focus, technologies
│   ├── CareerAreas.tsx      # The eight career areas
│   ├── CTA.tsx              # Call to action with app link
│   ├── DashboardPreview.tsx # Sample dashboard preview (sample data only)
│   ├── Footer.tsx           # Footer with disclaimers
│   ├── Hero.tsx             # Headline, problem statement, CTAs, preview
│   ├── HowItWorks.tsx       # The four-stage workflow
│   ├── LabourMarket.tsx     # Nigerian job-data research findings
│   ├── Navbar.tsx           # Sticky responsive navigation
│   ├── Reveal.tsx           # Subtle scroll-reveal animation
│   └── SectionHeading.tsx   # Reusable section heading
├── lib/
│   └── config.ts            # Central config (incl. Streamlit app URL)
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Getting Started

Prerequisites: **Node.js 18.18 or later** and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Deploying to Vercel

**Option A — GitHub (recommended):**

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and **Import** the
   repository. Vercel auto-detects Next.js — no build settings are needed.
3. Click **Deploy**.

**Option B — Vercel CLI:**

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

## Connecting the Streamlit App

The website links to the existing Streamlit application from the navbar, the
call-to-action section, and the footer. Until deployment, this link is a
placeholder.

1. Deploy your Streamlit app (e.g. [Streamlit Community Cloud](https://share.streamlit.io/)).
2. Open `lib/config.ts` and replace:

```ts
export const STREAMLIT_APP_URL =
  "https://YOUR-STREAMLIT-APP-URL.streamlit.app/";
```

3. Commit and push — Vercel will redeploy automatically.

## Accuracy Notes

This website is written to reflect the system's actual capabilities:

- The prototype uses **transparent keyword detection and rule-based
  matching**, not a trained AI model.
- Skill-overlap scores are **not** described as employability probabilities.
- The system **does not** claim to predict hiring outcomes.
- Detected skills **require user confirmation**.
- Dashboard previews use **clearly labelled sample interface data**, distinct
  from the reported research findings (9,870 unique job records, 5,080
  classified records with descriptions, 517 career-role profiles).
