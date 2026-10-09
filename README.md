# Are You Chicken? — Cadets Fundraiser Mockup

A static, single-page concept for a playful community fundraiser. It illustrates a possible challenge, donation, nomination, sponsor, and leaderboard experience; it is not a live fundraising service.

## Current scope

The page is a visual prototype only. Its buttons do not submit forms or navigate to real donation, nomination, sponsor, or leaderboard services. There is no payment processing, authentication, database, submission handling, or administrative moderation system. The sample leaderboard, challenge amount, and page copy are hard-coded presentation content, not live information or approved operating rules.

See [the product and flow guide](docs/PRODUCT_AND_FLOW.md) for what the prototype shows, what remains unimplemented, and the decisions needed before turning it into a service.

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Available project scripts:

```bash
npm run lint
npm run build
npm run start
```

There is currently no test script in `package.json`.

## Project map

| Path | Purpose |
| --- | --- |
| `app/page.jsx` | The `/` route and the complete static fundraiser page. |
| `app/layout.tsx` | Root document layout, global font setup, and site metadata. |
| `app/globals.css` | Tailwind CSS imports, design tokens, and global styles. |
| `components/ui/` | Shared button and card primitives used by the page. |
| `lib/utils.ts` | `cn`, a helper that combines and merges CSS class names. |
| `public/` | Static assets. |
| `app/page_old.tsx` | An older starter page; it is not the active `/` route. |

The active page is a client component because it uses Framer Motion. It builds its steps and leaderboard from arrays local to the page. The project uses Next.js App Router, React, Tailwind CSS, Lucide icons, and shared UI components; the page itself is JavaScript while the layout and UI components use TypeScript.

## Before extending the prototype

Agree on the fundraiser's real rules, content approval process, privacy expectations, and donation destination before connecting public submissions or payments. The UI currently presents moderation and safety statements, but does not enforce them. See the product and flow guide for specific open questions.
