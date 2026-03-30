# AlmaMed Monorepo Overview

This document is a practical onboarding guide for the whole AlmaMed repository.
It covers the web app, CMS (Sanity), project structure, data flow, required environment variables, local run workflow, and common troubleshooting.

---

## 1) What this project is

This repository contains:

- A **Next.js website** for Centrum Medyczne Alma Med (`next/`)
- A **Sanity Studio CMS** for managing content (`sanity/`)
- A **root orchestration layer** to run both services together (`package.json` in repo root)

Core idea:

- Editors manage content in Sanity Studio
- The Next.js frontend fetches content from Sanity and renders pages
- Some form submissions are handled by Next API routes and external services (Resend, MailerLite)

---

## 2) Repository structure

```text
AlmaMed/
├── package.json                 # Root scripts to run Next + Sanity together
├── PROJECT_OVERVIEW.md          # This file
├── next/                        # Next.js App Router project
│   ├── package.json
│   ├── next.config.js
│   └── src/
│       ├── app/                 # Routes, layouts, API routes, sitemap/robots
│       ├── components/          # Domain components + UI primitives
│       ├── assets/              # Global styles, fonts
│       └── utils/               # Sanity client, helpers
└── sanity/                      # Sanity Studio
    ├── package.json
    ├── sanity.config.js
    ├── sanity.cli.ts
    ├── schemas/
    │   ├── singleTypes/
    │   ├── collectionTypes/
    │   └── components/
    └── components/              # Custom Studio inputs/renderers
```

---

## 3) Root workflow (monorepo run)

Root scripts (`/package.json`):

- `npm run dev` - runs both Next and Sanity in parallel
- `npm run dev:next` - runs only Next
- `npm run dev:sanity` - runs only Sanity Studio
- `npm run open:apps` - opens `http://localhost:3000` and `http://localhost:3333`

Important: this repo uses `--prefix` scripts (not npm workspaces), which is perfectly fine for this structure.

---

## 4) Web app (Next.js) architecture

### 4.1 Routing model

App Router lives in `next/src/app/`.
Important routes:

- `/` home
- `/dla-pacjenta`
- `/kontakt`
- `/wspolpraca` (cooperation page)
- `/uslugi`, `/uslugi/[slug]`
- `/specjalisci`, `/specjalisci/[slug]`
- `/blog` + dynamic category/pagination/post routes
- `/mapa-strony`
- `/polityka-prywatnosci`
- `/wyszukiwarka`
- `/(dynamic) [slug]` for localization pages

Shared app shell in `next/src/app/layout.tsx`:

- `Header`
- `SmoothScroll`
- `Footer`
- `Fathom` integration

### 4.2 Component domains

Main component folders in `next/src/components/`:

- `_global` - shared sections (header, footer, hero, faq, localization, blog, etc.)
- `_contact` - contact-page-specific sections
- `_cooperation` - cooperation page sections (hero/intro/groups/network/form)
- `_services`, `_specialist`, `_for-patient`, `_homepage`, `_localization`
- `ui` - reusable primitives (`button`, `input`, `select`, `check-box`, `image`, `markdown`, etc.)

### 4.3 Data layer

Sanity fetch wrapper: `next/src/utils/sanity-client.ts`

- Uses `next-sanity` `createClient`
- Uses `NEXT_PUBLIC_SANITY_PROJECT_ID`
- Uses API version from `NEXT_PUBLIC_SANITY_API_VERSION` (default fallback exists)
- Revalidation strategy: `next: { revalidate: 30 }`

Most pages run GROQ in `sanityFetch(...)` directly inside route/page files.

### 4.4 API routes

In `next/src/app/api/`:

- `contact/route.ts` - contact form email via Resend
- `cooperation/route.ts` - cooperation form email via Resend
- `newsletter/route.ts` - MailerLite subscription API pass-through

---

## 5) CMS (Sanity Studio) architecture

Sanity project config:

- `sanity/sanity.config.js`
- `sanity/sanity.cli.ts`
- Project id and dataset are configured there (currently hardcoded)

Schema entrypoint:

- `sanity/schemas/index.ts`

Schema groups:

- `singleTypes/` - singleton-like pages/settings (`global`, `IndexPage`, `Contact`, `Cooperation`, etc.)
- `collectionTypes/` - repeatable content (`services`, `doctors`, `blogEntry`, `localizations`, etc.)
- `components/` - reusable object fragments (`cta`, `faq_list_element`, `networkClinic`, `cooperationGroup`, etc.)

Desk structure:

- Global first
- Then single types
- Then collection types

---

## 6) Cooperation + network feature map

Recent additions are split across both projects:

### Sanity schemas

- `sanity/schemas/singleTypes/cooperation.js`
- `sanity/schemas/components/cooperationGroup.js`
- `sanity/schemas/components/networkClinic.js`
- `sanity/schemas/singleTypes/global.js` includes `networkClinics`

### Next frontend

- Route: `next/src/app/wspolpraca/page.tsx`
- Sections:
  - `next/src/components/_cooperation/hero/`
  - `next/src/components/_cooperation/intro/`
  - `next/src/components/_cooperation/groups/`
  - `next/src/components/_cooperation/network/`
  - `next/src/components/_cooperation/form/`
- API:
  - `next/src/app/api/cooperation/route.ts`

### Navigation integration

- Header includes `/wspolpraca`
- Footer includes `/wspolpraca`
- Sitemap and page-map include the route

---

## 7) Environment variables you need

### 7.1 Required for Next runtime

Create `next/.env.local` with at least:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=796h059k
NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03
```

Without `NEXT_PUBLIC_SANITY_PROJECT_ID`, Next fails with:
`Configuration must contain projectId`.

### 7.2 Required for forms/newsletter features

```env
RESEND_API_KEY=...
MAILERLITE_API_KEY=...
```

If missing, pages still render, but form/newsletter requests fail.

### 7.3 Sanity Studio env

Studio currently does not require env vars to boot because `projectId` and `dataset` are set in:

- `sanity/sanity.config.js`
- `sanity/sanity.cli.ts`

---

## 8) Styling and UI system

Global styling:

- `next/src/assets/global.scss`
- `next/src/assets/normalize.css`

Conventions:

- CSS Modules for section/component styles
- design tokens via CSS variables in `:root`
- utility-like typography classes (`h1`..`h5`, `p`, `bold`)

Next image config:

- `next/next.config.js`
- allows `cdn.sanity.io` remote images
- `dangerouslyAllowSVG: true`

---

## 9) Common commands

From repository root:

```bash
npm install
npm run dev
```

Per package:

```bash
# Next
npm run dev --prefix next
npm run build --prefix next
npm run lint --prefix next

# Sanity
npm run dev --prefix sanity
npm run build --prefix sanity
npm run deploy --prefix sanity
npm run deploy-graphql --prefix sanity
```

---

## 10) Known gotchas / newcomer traps

- **Path alias scope:** `@/...` is configured only for `@/components/*` in `next/tsconfig.json`. Use relative imports for utils unless alias is expanded.
- **Port collisions:** if `3333` is already used, Sanity won’t start. Stop existing process or run Sanity separately on another port.
- **Mixed lockfiles risk:** `next/` has npm lockfile; keep package manager usage consistent in team workflow.
- **Sanity schema import correctness matters:** bad import/export in schema files can cause a blank Studio page (runtime crash in browser).
- **Dynamic route overlap awareness:** `next/src/app/[slug]/page.tsx` exists; static routes still win, but slug naming in CMS should avoid collisions with top-level static paths.

---

## 11) First-day setup checklist

- [ ] Install deps in root and both packages (`npm install` at root, `next`, `sanity` if needed)
- [ ] Add `next/.env.local` with required Sanity vars
- [ ] Start with `npm run dev` from root
- [ ] Open both apps:
  - `http://localhost:3000`
  - `http://localhost:3333`
- [ ] Verify homepage renders (Next has Sanity connection)
- [ ] Verify Studio opens and loads schema tree
- [ ] Verify `/wspolpraca` renders and form endpoint responds

---

## 12) Where to extend next

If you need to implement features quickly:

- New page route: `next/src/app/...`
- Shared blocks: `next/src/components/_global/...`
- Page-specific blocks: `next/src/components/_{domain}/...`
- Content model: `sanity/schemas/...`
- Data fetches: keep GROQ near the page file using `sanityFetch(...)`
- New API behavior: `next/src/app/api/.../route.ts`

---

If you want, I can also add:

1) a short `ARCHITECTURE_DECISIONS.md` (trade-offs + conventions), and  
2) a `.env.example` file at repo root and in `next/` to make onboarding even faster.
