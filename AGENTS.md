# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project Overview

A single-page interactive CV/portfolio built with React 18 + Vite + TailwindCSS + framer-motion, deployed to Cloudflare Pages at `https://me.jjmowlab.com/`. All resume content is bilingual (Chinese/English) and lives in one data file — there is no backend or routing.

## Commands

```bash
npm run dev       # Start Vite dev server (http://localhost:5173/)
npm run build     # Production build to dist/
npm run preview   # Preview the production build locally
npm run lint      # ESLint (flat config, eslint.config.js)
```

There is no test suite configured in this repo.

## Architecture

- **Content/presentation split via [src/data/cvData.js](src/data/cvData.js).** Exports `cvData` keyed by language (`zh` / `en`) plus `SECTION_ORDER` (the canonical section sequence). Each language object has `name`, `contact`, `hero`, and `sections`. **The zh and en objects must stay structurally identical** (same keys, same shapes) — sections render by key lookup and a structural mismatch breaks one language silently. A quick parity check: recursively diff `Object.keys` of `cvData.zh` vs `cvData.en`.
- **[src/App.jsx](src/App.jsx) is a thin shell**: language/theme/modal state, the Galaxy mount condition, and a `SECTION_COMPONENTS` map that pairs each `SECTION_ORDER` key with its component. To add a section: add data to both languages in `cvData.js`, create a component in `src/components/sections/`, register it in the map, and append the key to `SECTION_ORDER`.
- **Component layout**: `src/components/layout/` (ControlBar, NavBar), `src/components/sections/` (one component per CV section), `src/components/shared/` (SectionReveal, SectionHeading, PhotoSlot, ImageModal). Each section component receives `section` (its data), `isDark`, `index`, `language`, and `onOpenImages`.
- **Animation is framer-motion throughout** (no gsap, no manual IntersectionObserver reveals): `SectionReveal` wraps every section with a `whileInView` fade-rise; NavBar's active pill uses `layoutId="nav-active"`; the theme toggle icon morphs via `AnimatePresence`; `ImageModal` animates mount/unmount and directional slides. All entrances share the expo-out easing `[0.16, 1, 0.3, 1]` — keep new animations on that curve for consistent rhythm. `useReducedMotion` gates the hero/section entrances.
- **`motion` and ESLint**: `<motion.div>` JSX member expressions aren't counted as usage by core `no-unused-vars`, so `eslint.config.js` whitelists `^motion$` in `varsIgnorePattern`.
- **Active-section nav tracking** lives in [src/hooks/useActiveSection.js](src/hooks/useActiveSection.js) — an IntersectionObserver over `#section-<key>` elements. Sections carry `id="section-<key>"` + `data-section-key`; nav click scrolls via `scrollIntoView` with the `scroll-mt-36` class handling the fixed-header offset (header height changes must update that class).
- **PhotoSlot** ([src/components/shared/PhotoSlot.jsx](src/components/shared/PhotoSlot.jsx)) renders an image or, if the src is missing/404s, a deliberate dashed-border placeholder. The hero portrait (`/imgs/hero/portrait.jpg`) and any missing project screenshots use this — dropping a correctly-named file into `public/imgs/` fills the slot with no code change.
- **Images**: static assets in `public/imgs/` (certificates at the root, project screenshots in `projects/`, portrait in `hero/`). Image paths in `cvData.js` are absolute `/imgs/<file>` from the root.
- **Design tokens** in [tailwind.config.js](tailwind.config.js): `font-display` (Space Grotesk) for headings/names, `font-sans` (Inter) body, `font-mono` (JetBrains Mono) for labels/tags/dates/periods — all with Noto Sans TC fallback for Chinese. Glow shadows (`shadow-glow-emerald` etc.) and keyframes (`aurora`, `pulse-ring`, `shimmer`) are defined there. Fonts load from Google Fonts in [index.html](index.html).
- **Dark/light theming** is the `isDark` boolean with `isDark ? '...' : '...'` ternaries (not Tailwind's `dark:` variant). Dark is the default theme and the signature look; the WebGL Galaxy background ([src/components/Galaxy.jsx](src/components/Galaxy.jsx), raw `ogl` + GLSL) mounts only in dark mode for performance. Identity palette: emerald (primary accent), purple (secondary), amber (tertiary) over slate.
- **PDF export** uses `react-to-print` on the `resumeRef` wrapping the resume card; print styles live in [src/index.css](src/index.css) (`@media print` forces black-on-transparent).
