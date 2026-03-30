# AlmaMed Implementation Overview (Detailed)

## Scope

This document summarizes all major changes implemented in the `network` branch, including:

- Code changes committed to git
- Deployment/debug fixes
- Sanity schema/content operations performed through MCP
- Final in-progress local change not yet committed

Reference branch/commits:

- Branch: `network`
- Commits:
  - `3c426a8` — `add cooperation page and network clinic integrations`
  - `ed22c09` — `fix vercel install by syncing pnpm lockfile`
- Current local (uncommitted): `next/src/HOCs/smooth-scroll.ts`

---

## 1) Monorepo and Tooling Setup

### Root workspace

- Added root workspace scripts to run Next + Sanity together.
- Added helper script to open both apps quickly.
- Added root dependency for concurrent process run.

Files:

- `package.json` (root) — monorepo scripts and dev dependency
- `package-lock.json` (root) — lockfile for root tooling deps

### Next dependency alignment

- Updated Next.js and ESLint config to compatible versions to resolve dependency conflicts.

Files:

- `next/package.json`
- `next/package-lock.json`

### Sanity dependency upgrade/alignment

- Upgraded AlmaMed Sanity stack to match Medicus-compatible versions (`sanity@^3.99.0` family).
- Added missing supporting dependency (`dotenv`) in Sanity project.

Files:

- `sanity/package.json`
- `sanity/package-lock.json`

---

## 2) Sanity Schema: Cooperation + Network Clinics

### New reusable component schemas

- Added network clinic object schema for shared clinic entries.
- Added cooperation group object schema for cooperation page content blocks.

Files:

- `sanity/schemas/components/networkClinic.js` (new)
- `sanity/schemas/components/cooperationGroup.js` (new)

### New cooperation singleton

- Added full cooperation singleton document schema with:
  - hero
  - intro
  - groups
  - network section copy
  - form settings (subjects + target email)
  - faq section
  - seo

File:

- `sanity/schemas/singleTypes/cooperation.js` (new)

### Global schema extension

- Added `networkClinics` array in global singleton for shared clinic data used by header/footer/network section.

File:

- `sanity/schemas/singleTypes/global.js`

### Schema registration

- Registered `Cooperation` in single types.
- Registered `networkClinic` and `cooperationGroup` in shared components.

File:

- `sanity/schemas/index.ts`

---

## 3) New Cooperation Page (Next.js)

### New route and server data mapping

- Added complete `/wspolpraca` page in App Router.
- Fetches `Cooperation` and `global.networkClinics` from Sanity.
- Added metadata generation from Sanity SEO fields.

File:

- `next/src/app/wspolpraca/page.tsx` (new)

### New API endpoint for cooperation form

- Added dedicated route handler for cooperation form submissions.
- Supports target email routing configured from Sanity.

File:

- `next/src/app/api/cooperation/route.ts` (new)

### Cooperation UI section components (new module)

- Hero section (initial custom implementation, later page switched to global hero component usage).
- Intro section.
- Groups section.
- Network section.
- Form section + constants + form implementation.

Files (new):

- `next/src/components/_cooperation/hero/*`
- `next/src/components/_cooperation/intro/*`
- `next/src/components/_cooperation/groups/*`
- `next/src/components/_cooperation/network/*`
- `next/src/components/_cooperation/form/*`

---

## 4) Header, Top Bar, Footer and Navigation Network Integration

### Header

- Header now fetches and receives network clinic data from Sanity global.
- Added top strip listing network clinics (name + city + active current-site indicator).
- Added `Współpraca` to main navigation.
- Navigation width/gap tuning to prevent overflow on common widths.
- Added responsive rule: hide the places strip below `960px` to avoid multi-line header growth and hero overlap.

Files:

- `next/src/components/_global/header/header.tsx`
- `next/src/components/_global/header/header-content.tsx`
- `next/src/components/_global/header/styles.module.scss`

### Footer

- Added network clinic cards section in footer based on global Sanity data.
- Added `Współpraca` link in footer navigation.
- Reworked footer columns/grid for links + network cards.
- Tuned footer background blob sizing/positioning for mobile breakpoints.

Files:

- `next/src/components/_global/footer/footer.tsx`
- `next/src/components/_global/footer/styles.module.scss`

---

## 5) Hero/Layout and Responsive Collision Fixes

- Increased top clearances across hero-like sections to account for expanded header/top utility bar.
- Adjusted global hero blob/image placement to avoid clipping and overlap.
- Changed hero content alignment behavior to avoid bottom CTA/blob collisions.

Files:

- `next/src/components/_global/hero/hero.module.scss`
- `next/src/components/_contact/hero/hero.module.scss`
- `next/src/components/_specialist/hero/hero.module.scss`
- `next/src/components/_cooperation/hero/hero.module.scss`

### Global hero hardening

- Added null guard in hero image renderer to avoid crashes when image is missing.

File:

- `next/src/components/_global/hero/hero-image.tsx`

---

## 6) Cooperation Page Visual Redesign Iterations

Multiple rounds were implemented to move the page closer to AlmaMed style:

- Switched cooperation page to reuse global hero component for visual consistency.
- Redesigned groups section with richer cards, color accents, and improved spacing.
- Redesigned network section from dark-heavy style to lighter layered Alma-style section.
- Introduced (and then selectively tuned) hover behavior:
  - removed hover for groups cards
  - restored hover for network cards only
- Fixed horizontal overflow at specific viewport widths by clipping decorative overflow in groups wrapper.
- Fixed FAQ section width behavior causing right-side empty space/horizontal scroll on small widths.
- Added spacing adjustments around list text and bullets in groups cards.

Files:

- `next/src/components/_cooperation/groups/groups.tsx`
- `next/src/components/_cooperation/groups/groups.module.scss`
- `next/src/components/_cooperation/network/network.tsx`
- `next/src/components/_cooperation/network/network.module.scss`
- `next/src/components/_global/faq/faq.module.scss`

---

## 7) Routing and Discoverability Updates

- Added `/wspolpraca` to sitemap generation.
- Added `Współpraca` to page map structure.

Files:

- `next/src/app/sitemap.ts`
- `next/src/components/_global/page-map/page-map.tsx`

---

## 8) Additional Assets/Documentation Added

- Added project-wide architecture/operational onboarding document.
- Added logo asset used in UI.

Files:

- `PROJECT_OVERVIEW.md` (new)
- `next/src/components/ui/logo.svg` (new)

---

## 9) Sanity Content Operations (MCP, Non-Git)

The following content mutations were performed directly in Sanity dataset (`projectId: 796h059k`, `dataset: production`):

- Verified/deployed schema using `sanity schema deploy`.
- Created/populated and published the `Cooperation` document.
- Filled:
  - hero heading/paragraph/cta
  - intro heading/paragraph
  - 4 cooperation groups
  - network heading/paragraph
  - form heading/paragraph/subjects/target email
  - faq heading + 5 FAQ entries
  - seo title/description
- Subsequent copy refinements for AlmaMed tone and anchor CTA targets.

These changes are content-level (stored in Sanity), not visible as git diffs.

---

## 10) Vercel Deployment Debug + Fix

### Issue

- Vercel failed with:
  - `ERR_PNPM_OUTDATED_LOCKFILE`
  - lockfile specifiers didn’t match `next/package.json`

### Fix

- Regenerated `next/pnpm-lock.yaml` with pnpm v8-compatible format (`lockfileVersion: '6.0'`) to match Vercel environment expectations.
- Committed and pushed fix.

File:

- `next/pnpm-lock.yaml`

Commit:

- `ed22c09` — `fix vercel install by syncing pnpm lockfile`

---

## 11) Current Local Change (Not Yet Committed)

### Smooth anchor scrolling on same subpage

- Implemented Lenis-based smooth scrolling for hash anchors:
  - `#id`
  - `/current-path#id`
- Added hash-on-load handling.
- Added listener/RAF cleanup and `lenis.destroy()`.

File:

- `next/src/HOCs/smooth-scroll.ts` (modified locally, currently uncommitted)

---

## 12) Full Branch Diff File List (vs `main`)

```
PROJECT_OVERVIEW.md
next/package-lock.json
next/package.json
next/pnpm-lock.yaml
next/src/app/api/cooperation/route.ts
next/src/app/sitemap.ts
next/src/app/wspolpraca/page.tsx
next/src/components/_contact/hero/hero.module.scss
next/src/components/_cooperation/form/cooperation-form.tsx
next/src/components/_cooperation/form/form.constants.ts
next/src/components/_cooperation/form/form.module.scss
next/src/components/_cooperation/form/form.tsx
next/src/components/_cooperation/form/index.ts
next/src/components/_cooperation/groups/groups.module.scss
next/src/components/_cooperation/groups/groups.tsx
next/src/components/_cooperation/groups/index.ts
next/src/components/_cooperation/hero/hero.module.scss
next/src/components/_cooperation/hero/hero.tsx
next/src/components/_cooperation/hero/index.ts
next/src/components/_cooperation/intro/index.ts
next/src/components/_cooperation/intro/intro.module.scss
next/src/components/_cooperation/intro/intro.tsx
next/src/components/_cooperation/network/index.ts
next/src/components/_cooperation/network/network.module.scss
next/src/components/_cooperation/network/network.tsx
next/src/components/_global/faq/faq.module.scss
next/src/components/_global/footer/footer.tsx
next/src/components/_global/footer/styles.module.scss
next/src/components/_global/header/header-content.tsx
next/src/components/_global/header/header.tsx
next/src/components/_global/header/styles.module.scss
next/src/components/_global/hero/hero-image.tsx
next/src/components/_global/hero/hero.module.scss
next/src/components/_global/page-map/page-map.tsx
next/src/components/_specialist/hero/hero.module.scss
next/src/components/ui/logo.svg
package-lock.json
package.json
sanity/package-lock.json
sanity/package.json
sanity/schemas/components/cooperationGroup.js
sanity/schemas/components/networkClinic.js
sanity/schemas/index.ts
sanity/schemas/singleTypes/cooperation.js
sanity/schemas/singleTypes/global.js
```

