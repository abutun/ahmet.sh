# Technology Stack

**Analysis Date:** 2026-07-28

## Languages

**Primary:**
- HTML5 - Page structure, metadata, static content, SVG icons, and script/style entry points in `index.html`.
- CSS3 - Global reset, responsive layout, animations, design tokens, and visual effects in `style.css`.
- JavaScript (browser ES2015+) - DOM behavior, canvas particles, scroll effects, counters, tilt interactions, and navigation behavior in `script.js`.

**Secondary:**
- JavaScript object literals - Translation catalog and language switching in `i18n.js`.
- JSON - Progressive web app manifest metadata in `site.webmanifest` and local Codex/Claude launch configuration in `.claude/launch.json`.
- PNG/ICO assets - Favicons, logo, app icons, and product icons in `favicon.ico`, `logo.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`, `apple-touch-icon.png`, `favicon-16x16.png`, `favicon-32x32.png`, and `images/product-icons/`.

## Runtime

**Environment:**
- Static browser runtime only. `index.html` runs directly in modern browsers with no application server code in the repository.
- Browser APIs used by `script.js`: `CanvasRenderingContext2D`, `requestAnimationFrame`, `IntersectionObserver`, `performance.now`, `window` events, and DOM query/event APIs.
- Browser APIs used by `i18n.js`: `localStorage`, `document.documentElement.lang`, `document.title`, and DOM query/event APIs.

**Package Manager:**
- No project package manager is configured. `package.json`, `package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, and `bun.lockb` are not present.
- `.claude/launch.json` uses `npx serve /Users/ahmet/Documents/Workspaces/Buhane/ahmet.sh -l 3847` as a local static-server launch helper.
- Lockfile: not present.

## Frameworks

**Core:**
- Vanilla HTML/CSS/JavaScript - `index.html`, `style.css`, `script.js`, and `i18n.js` implement the complete site without React, Vue, Svelte, Next.js, Astro, or Vite.
- No module system is used. `index.html` loads `i18n.js` and then `script.js` through classic `<script src="...">` tags.

**UI & Animation:**
- Custom CSS animations and transitions are defined in `style.css`.
- Custom canvas particle system is implemented in `script.js`.
- Custom card tilt, magnetic button, counter, scroll reveal, cursor glow, and typing effects are implemented in `script.js`.

**Testing:**
- No test framework is configured. Jest, Vitest, Playwright, Cypress, and test files are not detected in the repository.

**Build/Dev:**
- No build tool is configured. Vite, Webpack, Rollup, Parcel, TypeScript, Babel, ESLint, Prettier, and Biome config files are not detected.
- Local preview is available through `.claude/launch.json` using `npx serve`.

## Key Dependencies

**Runtime Dependencies:**
- Google Fonts stylesheet - `index.html` loads Inter, Space Grotesk, and JetBrains Mono from `https://fonts.googleapis.com`.
- Google tag / gtag.js - `index.html` loads `https://www.googletagmanager.com/gtag/js?id=G-KJXNT2SFKR` and configures measurement ID `G-KJXNT2SFKR`.

**Local Assets:**
- Site icons and manifest assets are referenced from `index.html` and `site.webmanifest`: `apple-touch-icon.png`, `favicon-32x32.png`, `favicon-16x16.png`, `favicon.ico`, `android-chrome-192x192.png`, and `android-chrome-512x512.png`.
- Brand/logo asset is referenced from `index.html` as `logo.png`.
- Product icon assets are referenced from `index.html` under `images/product-icons/`: `images/product-icons/vynix.png`, `images/product-icons/moodjot.png`, `images/product-icons/hivedue.png`, `images/product-icons/glow-spin.png`, `images/product-icons/swipe-slip.png`, `images/product-icons/gridzle.png`, and `images/product-icons/astralpost.png`.

**Infrastructure:**
- No infrastructure SDKs are imported by `index.html`, `script.js`, or `i18n.js`.
- No backend client libraries, database clients, auth clients, or payment SDKs are present.

## Configuration

**Environment:**
- No runtime environment variables are used by `index.html`, `script.js`, `i18n.js`, `style.css`, or `site.webmanifest`.
- No `.env*`, `credentials.*`, `secrets.*`, `*.key`, `*.pem`, `.npmrc`, `.netrc`, or service-account-style files are detected in the safe filename scan.

**Site Metadata:**
- `index.html` defines document metadata, viewport configuration, favicon links, manifest link, Google Fonts preconnects, Google Fonts stylesheet, and Google tag script.
- `site.webmanifest` defines app icons, `theme_color`, `background_color`, and `display: "standalone"`.
- `i18n.js` manages English and Turkish copy and persists the selected language key in browser `localStorage`.

**Build:**
- No build config files are present. Source files in `index.html`, `style.css`, `script.js`, and `i18n.js` are production-served assets.

## Platform Requirements

**Development:**
- A browser can open `index.html` directly for static inspection.
- A static file server can serve the repository root. `.claude/launch.json` uses `npx serve` on port `3847`.
- Internet access is required for Google Fonts and Google tag to load from `index.html`.

**Production:**
- Any static hosting platform can serve the repository root because the site has no server-side runtime, no build step, and no API routes.
- Hosting configuration is not declared in the repository; `vercel.json`, `netlify.toml`, `firebase.json`, `wrangler.toml`, Docker files, and `.github/` workflows are not present.
- The Git remote is `https://github.com/abutun/ahmet.sh.git`; no CI/CD workflow files are present under `.github/`.

---

*Stack analysis: 2026-07-28*
