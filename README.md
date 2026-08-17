# BloodConnect — Capstone Skeleton

FE-04 assignment: initial routed skeleton for the Blood Donation Management
System capstone (previously a React/Vite frontend; rebuilt on Next.js per
assignment requirements).

## Stack

- Next.js (App Router) — JavaScript, no TypeScript
- Tailwind CSS v4
- ESLint
- No auth, no database, no backend, no external UI libraries
- Local/mock data only

## Routes

All routes are placeholder screens except Home, which links out to the rest.

| Route         | Screen           | Status                                |
|---------------|------------------|----------------------------------------|
| `/`           | Home / Dashboard | Landing page with nav cards to all screens |
| `/donors`     | Donor Search     | Placeholder |
| `/register`   | Register Donor   | Placeholder |
| `/blood-bank` | Blood Bank       | Placeholder |
| `/contact`    | Contact          | Placeholder |
| `/health`     | Health Check     | Renders data from a local mock source (`data/mockHealthData.js`) via a simulated async fetch — demonstrates the app can render fetched data without an external API |

Screens beyond these five (Home, Donor Search, Register Donor, Blood Bank,
Contact) were **not** invented — no screen specification document was
available in the workspace at the time of scaffolding, so this list was
used as a provisional set and confirmed with the project owner before
building.

## Implementation decisions

- **No `next/font/google`**: the default `create-next-app` template
  wires up Geist via Google Fonts, which requires build-time network
  access to `fonts.googleapis.com`. To keep the build fully
  self-contained, this was replaced with a system font stack in
  `app/globals.css` / `app/layout.js`.
- **Design tokens**: brand colors (red for the donation/urgency theme,
  teal as a secondary accent) are defined as CSS variables in
  `app/globals.css` and registered with Tailwind v4's `@theme inline`.
- **Shared `PagePlaceholder` component**: keeps the four placeholder
  screens (Donors, Register, Blood Bank, Contact) consistent and DRY
  until each is built out.
- **Health-check data**: `data/mockHealthData.js` exports a small mock
  array plus an `fetchMockHealthData()` function that resolves it via
  `setTimeout`, simulating an async data source. `/health` is a Server
  Component that `await`s this function, so the rendered table proves
  the app can fetch-and-render data end to end ahead of any real
  backend being connected.
- **`.env.example`**: committed with no real values, to establish a
  clean environment-variable structure for later API/backend work. The
  `.gitignore` blanket-ignores `.env*` but explicitly un-ignores
  `.env.example` (`!.env.example`) so the template is versioned while
  real env files never are.
- **Removed default template assets**: unused SVG icons and the
  auto-generated `AGENTS.md` / `CLAUDE.md` files from `create-next-app`
  were deleted to keep the skeleton minimal.

## Commands used

```bash
npx create-next-app@latest capstone-app \
  --js --tailwind --eslint --app --no-src-dir \
  --import-alias "@/*" --use-npm --no-turbopack

npx eslint .
npm run build
npm run start -- -p 3311   # local production-server smoke test
```

## Verification

- `eslint .` — no errors
- `next build` — compiled successfully, 0 errors, all 6 routes
  prerendered as static content
- Production server smoke test — all 6 routes (`/`, `/donors`,
  `/register`, `/blood-bank`, `/contact`, `/health`) returned HTTP 200
- `/health` confirmed to render all 4 mock records server-side

## Deployment

- Repository: _add GitHub URL after push_
- Live preview URL: _add Vercel/Netlify URL after deployment_

To deploy: push this repository to GitHub, then import it in Vercel
(or Netlify) with default Next.js build settings — no environment
variables are required for this skeleton.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.
