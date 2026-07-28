# External Integrations

**Analysis Date:** 2026-07-28

## APIs & External Services

**Analytics:**
- Google tag / Google Analytics - `index.html` loads gtag.js from `https://www.googletagmanager.com/gtag/js?id=G-KJXNT2SFKR` and calls `gtag('config', 'G-KJXNT2SFKR')`.
  - SDK/Client: Hosted browser script from `https://www.googletagmanager.com/gtag/js`.
  - Auth: Not applicable; measurement ID `G-KJXNT2SFKR` is embedded in `index.html`.

**Fonts:**
- Google Fonts - `index.html` preconnects to `https://fonts.googleapis.com` and `https://fonts.gstatic.com`, then loads Inter, Space Grotesk, and JetBrains Mono.
  - SDK/Client: CSS stylesheet link in `index.html`.
  - Auth: None.

**Outbound Portfolio Links:**
- Product links are plain external anchors in `index.html` with `target="_blank"`:
  - `https://thecosmicmeta.com/`
  - `https://vynix.app/`
  - `https://moodjot.app/`
  - `https://u2m.io/`
  - `https://hivedue.com/`
  - `https://glowspin.app/`
  - `https://swipeslip.app/`
  - `https://gridzle.app/`
  - `https://astralpost.app/`
- Company and hub links are plain external anchors in `index.html`:
  - `https://buhane.com.tr/`
  - `https://apps.ahmet.sh/`
- Social/contact link in `index.html`:
  - `https://www.linkedin.com/in/ahmetbutun/`
- Email contact link in `index.html`:
  - `mailto:hey@ahmet.sh`

## Data Storage

**Databases:**
- Not detected. `index.html`, `script.js`, and `i18n.js` do not import or call database clients.
  - Connection: Not applicable.
  - Client: Not applicable.

**Browser Storage:**
- `i18n.js` uses `localStorage.getItem('lang')` and `localStorage.setItem('lang', currentLang)` to persist the selected language.
- `i18n.js` exposes `window.i18n` for language toggling and direct language setting.

**File Storage:**
- Local static assets only. Images are stored in the repository root and `images/product-icons/`.

**Caching:**
- No application cache layer is implemented in `script.js` or `i18n.js`.
- Browser HTTP caching is the only expected cache behavior for static assets such as `style.css`, `script.js`, `i18n.js`, `logo.png`, and `images/product-icons/*.png`.

## Authentication & Identity

**Auth Provider:**
- Not detected. There is no login flow, OAuth client, session handling, token storage, or identity SDK in `index.html`, `script.js`, or `i18n.js`.
  - Implementation: Static public portfolio pages and external links.

## Monitoring & Observability

**Error Tracking:**
- Not detected. Sentry, Bugsnag, LogRocket, Datadog, and similar browser error-tracking SDKs are not present in `index.html`, `script.js`, or `i18n.js`.

**Analytics:**
- Google tag / Google Analytics is configured in `index.html` with measurement ID `G-KJXNT2SFKR`.

**Logs:**
- No application logging layer is present. `script.js` and `i18n.js` do not define console logging or remote log forwarding.

## CI/CD & Deployment

**Hosting:**
- Hosting provider is not declared in repository configuration. The site is deployable as static files from the repository root.
- `.claude/launch.json` is a local development launch helper that serves `/Users/ahmet/Documents/Workspaces/Buhane/ahmet.sh` on port `3847` with `npx serve`.

**Source Control:**
- Git remote `origin` points to `https://github.com/abutun/ahmet.sh.git`.

**CI Pipeline:**
- Not detected. `.github/` is not present, and no workflow files are present in the repository.
- No deployment config files are detected for Vercel, Netlify, Firebase Hosting, Cloudflare Workers/Pages, Docker, or Compose.

## Environment Configuration

**Runtime Environment Variables:**
- Not applicable. `index.html`, `script.js`, `i18n.js`, `style.css`, and `site.webmanifest` do not read environment variables.

**Secrets:**
- No `.env*`, `credentials.*`, `secrets.*`, `*.key`, `*.pem`, `.npmrc`, `.netrc`, or service-account-style files are detected in the safe filename scan.
- No secret file contents were read.

## Network Behavior

**Browser-Initiated Requests:**
- `index.html` requests Google Fonts from `https://fonts.googleapis.com` and font files from `https://fonts.gstatic.com`.
- `index.html` requests Google tag from `https://www.googletagmanager.com`.
- User clicks can navigate to external product, company, social, hub, and email links defined in `index.html`.

**Application API Calls:**
- Not detected. `script.js` and `i18n.js` do not call `fetch`, `XMLHttpRequest`, WebSocket, EventSource, or third-party API clients.

## Integration Guidance

**Adding New Analytics:**
- Add browser analytics scripts in `index.html` near the existing Google tag block.
- Keep any public measurement IDs visible in `index.html`; do not place private API keys in static assets.

**Adding New External Links:**
- Add anchors in `index.html` and translations in `i18n.js` when link text is localized.
- Place new product icon images under `images/product-icons/` and reference them from `index.html`.

**Adding Backend or API Integrations:**
- Do not embed private credentials in `index.html`, `script.js`, `i18n.js`, or `style.css`.
- Use a separate backend or serverless function for integrations that require secret keys.

---

*Integrations analysis: 2026-07-28*
