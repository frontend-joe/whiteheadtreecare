# Whitehead Tree Care

A modern marketing website for Whitehead Tree Care, built with **Next.js (App Router)**,
**TypeScript**, **Tailwind CSS v4** and **Motion** (Framer Motion) for on-scroll animations.

## Features

- Full-screen cinematic **video hero** with subtle parallax (clip from [mixkit.co](https://mixkit.co))
- Smooth scroll-reveal animations throughout (respects `prefers-reduced-motion`)
- Sections: Hero · Services · Why Us · About / service areas · Team · Get a Quote · Footer
- Working **Get a Quote** form backed by [Resend](https://resend.com)
- Minimal monochrome design with a bold green accent; fully responsive

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form (Resend)

Copy `.env.example` to `.env.local` and add your credentials:

```bash
cp .env.example .env.local
```

| Variable           | Purpose                                                        |
| ------------------ | ------------------------------------------------------------- |
| `RESEND_API_KEY`   | Resend API key. **If unset, the form runs in dev mode** and logs submissions to the server console instead of emailing. |
| `QUOTE_TO_EMAIL`   | Where quote requests are delivered.                           |
| `QUOTE_FROM_EMAIL` | A verified sender in your Resend account.                     |

## Editing content

All copy (services, team, areas, contact details) lives in [`lib/site.ts`](lib/site.ts).
Swap the hero video by replacing [`public/hero.mp4`](public/hero.mp4).

## Build

```bash
npm run build
```
