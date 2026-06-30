# Career OS

Talentbank Tech Hackathon 2026 — University Track, Wildcard Module 06.
One unified platform, three role-gated views (Candidate / University / Employer),
sharing one spine and two signals: **Readiness** (Interview Intelligence) and
**Self-Awareness** (Career Mirror).

Full architecture rationale lives in the team's strategy doc — this README is just
the practical "how do I run/build this" reference.

## Stack

- React 18 + Vite
- React Router (`HashRouter` — required for GitHub Pages, see note below)
- Tailwind CSS
- No backend. All data flows through `src/api/mockApi.js` (the seam) and
  `src/api/mockAI.js` (deterministic, explainable scoring). Swapping mocks for
  a real API later means editing those two files only.

## Why HashRouter

GitHub Pages serves static files with no server-side rewrites. A `BrowserRouter`
route like `/university` would 404 on a hard refresh because there's no server
to redirect unknown paths back to `index.html`. `HashRouter` keeps everything
after the `#` client-side only (e.g. `yourname.github.io/career-os/#/university`),
so it always resolves correctly with zero extra config. If you want clean URLs
later, switch to `BrowserRouter` + the standard `404.html` GitHub Pages redirect
trick — but for a 4-week hackathon build, this isn't worth the setup risk.

## Getting started

```bash
npm install
npm run dev
```

Runs at `http://localhost:5173`.

## Project structure

```
src/
  api/
    mockApi.js          # the seam — all data fetching goes through here
    mockAI.js            # deterministic scoring functions
  shared/
    context/
      RoleContext.jsx    # one-click role bypass (candidate/university/employer)
      ProfileContext.jsx # THE SPINE — readiness + self-awareness signals
    layout/
      AppShell.jsx       # single responsive shell (no mobile/desktop split)
      ProtectedRoute.jsx # role gate
    components/
      LoginPage.jsx
      WorkAnimalOnboarding.jsx
  modules/
    wildcard-interview/  # ⚡ Interview Intelligence Layer — BUILD FIRST
    university/          # 🎓 Member 1
    candidate/            # 👤 Member 2
    employer/             # 💼 Member 3
```

Every module reads/writes the spine via `ProfileContext`, never holds its own
duplicate copy of readiness or self-awareness data.

## Build order (per architecture doc)

1. **Wildcard — Interview Intelligence Layer** (engine + medal system).
   Everything else depends on the `ReadinessSignal` this produces.
2. **University dashboard + Curriculum Gap Alert** — the differentiator.
3. **Career Mirror** — cheap, novel, pull forward, don't leave to last.
4. **Career Path Navigator + Talent Futures Market**

If you fall behind: cut Talent Futures Market down to a browse-only mockup.
Never cut #1 or #2.

## Styling

Tailwind is configured with placeholder design tokens in `tailwind.config.js`
under `theme.extend.colors` and `fontFamily`. Replace these with the real
values from the Figma prototype as soon as it's finalised — every component
should reference `brand`, `signal.readiness`, `signal.awareness`, `signal.employer`,
and `medal.bronze/silver/gold` rather than hardcoded hex values, so a palette
swap is a one-file change.

## Deploying to GitHub Pages

### One-time setup

1. Push this repo to GitHub.
2. In **Settings → Pages**, set Source to **GitHub Actions**.
3. In `vite.config.js`, confirm `base` matches your repo name exactly:
   ```js
   base: '/career-os/'
   ```
   (If your repo is named differently, change this to `/your-repo-name/`.)

### Deploy

Just push to `main` — `.github/workflows/deploy.yml` builds and deploys
automatically on every push. Check the **Actions** tab for build status and
the live URL.

Manual deploy alternative (if Actions is acting up):

```bash
npm run deploy
```

This uses `gh-pages` to push the `dist/` folder to a `gh-pages` branch directly.

## Team

| Member | Track | Modules |
|---|---|---|
| Member 1 | 🎓 University | Cohort dashboard, Curriculum Gap Alert |
| Member 2 | 👤 Candidate | Career Mirror, Career Path Navigator |
| Member 3 | 💼 Employer | Talent Futures Market |
| All 3 | ⚡ Wildcard | Interview Intelligence Layer (shared, build first) |
# career-os
