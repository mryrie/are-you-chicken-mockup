# Product and flow guide

## Purpose and audience

This repository contains a visual concept for a community fundraiser supporting local cadets. It is intended to communicate a possible public-facing experience to stakeholders, not to collect donations or participant information. The page uses a lighthearted “prove you are not chicken” challenge as its theme.

## What the page presents

The active page is `app/page.jsx`, served at `/`. From top to bottom, it presents:

1. **Hero:** introduces the challenge and shows “Save Yourself” and “Nominate Someone” calls to action.
2. **How it works:** describes getting nominated, donating, nominating others, and appearing on a community board.
3. **Hall of Courage:** displays four sample leaderboard entries and a “View Full Board” call to action.
4. **Nomination, sponsor, and rules cards:** describes a proposed nomination form, sponsor options, and ground rules.
5. **Closing call to action:** invites visitors to donate or start a challenge.

The header links to page sections for “How It Works,” “Leaderboard,” and “Rules.” The page also includes a challenge card that says “Donate $10+ or nominate 3 brave souls.”

## What is and is not implemented

Everything listed above is rendered as a static mockup. The step descriptions, challenge copy, and leaderboard rows are hard-coded in `app/page.jsx`; they are not loaded from a service. Names, statuses, ranks, and amounts in the board are sample content and should not be treated as real participants, donations, or results.

The visible buttons are placeholders: they do not submit a nomination, start a challenge, process a payment, open rules, or load another leaderboard. The footer explicitly states that no payment or form processing is connected. There is no backend, persistence, login, payment integration, or moderator/admin interface in this repository.

## Moderation and safety statements

The mockup says the challenge is manually moderated, that submissions await admin approval, and that public listings should not include anonymous harassment, minors, or real animals. These are currently statements in page copy only; there is no code that verifies consent, age, submission content, or approval status. Treat the text as proposed guardrails for discussion, not as a complete policy or an enforced safety mechanism.

Before public launch, the organizers need to define and own the rules and moderation process. In particular, decide:

- Who may nominate someone, and how the nominee is notified and gives permission.
- What information is collected, who can access it, how long it is retained, and how a person can request correction or removal.
- Whether minors may participate privately, and what the rule is for displaying any information about them publicly.
- What content is disallowed, who reviews submissions, what review status means, and how reports or appeals are handled.
- Who operates the campaign and where donations go; what donation amounts, deadlines, sponsor terms, and public totals mean.
- What payment provider, data storage, access controls, and operational ownership are required if the prototype becomes a service.

Do not present the displayed challenge amount, nomination count, sample names, or sample donation amounts as final campaign rules or facts without organizer approval.

## Code orientation

- `app/page.jsx` contains the page markup and its local `steps` and `leaderboard` sample arrays.
- `app/layout.tsx` wraps the route and sets document-level metadata and fonts. Its metadata is still the default “Create Next App” text and should be updated before deployment.
- `app/globals.css` defines global styling and Tailwind theme tokens.
- `components/ui/button.tsx` and `components/ui/card.tsx` provide shared UI primitives.
- `lib/utils.ts` provides `cn`, which combines class names and resolves conflicting Tailwind classes.
- `app/page_old.tsx` is not the active route; check whether it is still useful before removing or updating it.

## Keeping this guide current

When page content or functionality changes, keep the scope statements, flow description, and implementation map aligned with the actual route. If forms, payments, public listings, or moderation are implemented, document their real behavior and responsible operators here; do not rely on presentation copy as a substitute for operational policy.
