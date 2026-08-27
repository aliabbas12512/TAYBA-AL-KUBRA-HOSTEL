# Tayba Al Kubra Hostel | نُزل طيبة الكبرى

A premium, bilingual (English / Arabic, full RTL) website for Tayba Al Kubra
Hostel in Riyadh, built with Next.js 14 (App Router), TypeScript and
Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

1. Push this repo to GitHub (already done if you're reading this on GitHub).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables
   are required.
4. Click **Deploy**.

## Adding your real hostel photos

The site ships with elegant gold/charcoal placeholder images in every photo
slot (rooms, pool, gym, lounge, gallery, hero). See
[`public/images/README.md`](public/images/README.md) for the exact filenames
to drop in to replace them with your real photos.

## Editing content

All English/Arabic text (nav, room details, facilities, about, contact
labels, etc.) lives in one file: [`src/lib/dictionary.ts`](src/lib/dictionary.ts).
Real contact numbers (call, WhatsApp) and the email address live in
`contactInfo` at the bottom of that same file.

## Structure

- `src/app` — Next.js App Router entry (`layout.tsx`, `page.tsx`, global styles)
- `src/components` — all site sections (Header, Hero, Rooms, Gallery, Booking, etc.)
- `src/lib` — bilingual dictionary, language context/provider, contact info
- `public/images` — real photo slots (see README inside)
