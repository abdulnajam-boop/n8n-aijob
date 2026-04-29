# AI Job Application Agent Dashboard

Production-ready read-only dashboard built with Next.js 14, TypeScript, Tailwind CSS, and shadcn-style components.

## Features
- KPI cards for job pipeline and outreach
- Jobs, emails, follow-ups, and settings pages
- Google Sheets API integration as data source
- Robust environment validation and error messaging
- Reusable table and status components for future AI module integration

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy env template and configure values:
   ```bash
   cp .env.example .env.local
   ```
3. Share the Google Sheet with your service account email as Viewer.
4. Run locally:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000/dashboard`.

## Environment Variables
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_PRIVATE_KEY` (keep escaped `\n` newlines)
- `GOOGLE_SHEET_ID`

## Pages
- `/dashboard`
- `/jobs`
- `/emails`
- `/follow-ups`
- `/settings`

## Next Upgrade
AI Personalization module scaffolding can be added into `lib/` and future `/personalization` route for:
- Personalized recruiter replies
- Personalized cover letters
- Recommended resume keywords
