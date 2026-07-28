# Codebase Concerns

**Analysis Date:** 2026-07-28

## Tech Debt

**Monolithic page and style surface:**
- Issue: `index.html`, `style.css`, `script.js`, and `i18n.js` hold the full site structure, visual system, behavior, and translations with no component/module boundaries.
- Files: `index.html`, `style.css`, `script.js`, `i18n.js`
- Impact: Product cards, navigation labels, analytics snippets, animation hooks, and localization keys must be kept in sync manually across large files.
- Fix approach: Split repeated product/card data into a structured data source, render repeated sections from data, and keep behavior modules separate from animation modules.

**Manual localization registry:**
- Issue: Every translatable string is duplicated between `index.html` `data-i18n` attributes and the `translations` object in `i18n.js`.
- Files: `index.html`, `i18n.js`
- Impact: Missing or renamed keys can leave mixed-language UI; HTML-capable translations depend on exact markup embedded in `i18n.js`.
- Fix approach: Add a key consistency check that compares `data-i18n`, `data-i18n-html`, and `data-i18n-template` usage in `index.html` against `i18n.js`.

**Inline content data mixed with markup:**
- Issue: Product names, outbound URLs, badge colors, icon paths, and fallback copy live directly in repeated card markup.
- Files: `index.html`, `images/product-icons/vynix.png`, `images/product-icons/moodjot.png`, `images/product-icons/hivedue.png`, `images/product-icons/glow-spin.png`, `images/product-icons/swipe-slip.png`, `images/product-icons/gridzle.png`, `images/product-icons/astralpost.png`
- Impact: Adding or changing a portfolio item requires coordinated edits across card markup, translations, image assets, and link handling.
- Fix approach: Store products in a plain JavaScript data array or JSON file and generate both card markup and translation coverage checks from that source.

## Known Bugs

**Mobile menu accessibility state is not synchronized:**
- Symptoms: The mobile menu opens visually, but the toggle does not expose expanded/collapsed state to assistive technology.
- Files: `index.html`, `script.js`, `style.css`
- Trigger: Activate `#mobileToggle` on a viewport using the mobile menu.
- Workaround: Visual users can infer state from `.mobile-menu.active`; assistive technology receives only the static `aria-label="Menu"`.
- Root cause: `toggleMobileMenu()` toggles CSS classes only and does not update `aria-expanded`, `aria-controls`, focus management, or escape-key handling.

**Hero year animation conflicts with localized headline semantics:**
- Symptoms: `#yearCounter` is replaced through `data-i18n-html` and then mutated by `animateYearCounter()`.
- Files: `index.html`, `i18n.js`, `script.js`
- Trigger: Switch language with `#langSwitcher` while the year interval is active.
- Workaround: The page keeps a visible year because both English and Turkish translations include a `#yearCounter` element.
- Root cause: Translation markup and animation state share the same DOM id instead of using a stable non-translated wrapper.

## Security Considerations

**Outbound links lack opener isolation:**
- Risk: Links opened with `target="_blank"` can expose `window.opener` to destination pages.
- Files: `index.html`
- Current mitigation: Not detected.
- Recommendations: Add `rel="noopener noreferrer"` to all outbound `target="_blank"` anchors in `index.html`.

**Third-party scripts load without local containment policy:**
- Risk: External Google Analytics and Google Fonts resources execute or load without a repository-defined CSP, SRI, or documented privacy boundary.
- Files: `index.html`
- Current mitigation: HTTPS URLs and `crossorigin` on the Google Fonts preconnect are present in `index.html`.
- Recommendations: Add a deployment-level Content Security Policy, document analytics consent expectations, and keep external origins explicit.

**HTML translations use `innerHTML`:**
- Risk: Any future dynamic or externally sourced translation string can become an XSS path through `data-i18n-html` or `data-i18n-template`.
- Files: `i18n.js`, `index.html`
- Current mitigation: Translation strings are hard-coded in `i18n.js`.
- Recommendations: Keep translation data local-only or sanitize HTML-capable translations; prefer text nodes plus small wrapper elements for common emphasis patterns.

## Performance Bottlenecks

**Continuous animation loops run for decorative effects:**
- Problem: Particle canvas and cursor glow use separate `requestAnimationFrame` loops, while the year animation uses an interval.
- Files: `script.js`, `style.css`, `index.html`
- Cause: `animateParticles()`, `updateCursorGlow()`, and `animateYearCounter()` start unconditionally in `init()`.
- Improvement path: Gate effects behind `prefers-reduced-motion`, pause them when the document is hidden, and skip cursor glow on coarse-pointer devices.

**Scroll handler recalculates sections on every scroll event:**
- Problem: `handleScroll()` queries all sections and reads layout positions during each scroll callback.
- Files: `script.js`, `index.html`
- Cause: `document.querySelectorAll('section[id]')`, `offsetTop`, and `offsetHeight` run inside the scroll handler.
- Improvement path: Cache section metadata on load/resize or replace active section tracking with `IntersectionObserver`.

**Render-blocking and uncached asset risks:**
- Problem: The page depends on remote fonts, analytics, a 144K `logo.png`, a 180K `images/product-icons/moodjot.png`, and large single-file CSS/JS payloads.
- Files: `index.html`, `style.css`, `script.js`, `i18n.js`, `logo.png`, `images/product-icons/moodjot.png`
- Cause: There is no bundling, minification, image optimization pipeline, or local performance budget.
- Improvement path: Add a lightweight build or verification script that checks asset size budgets, minifies static text assets, and verifies image dimensions/encoding.

## Fragile Areas

**DOM id assumptions in scripts:**
- Files: `script.js`, `i18n.js`, `index.html`
- Why fragile: `script.js` assumes `#particleCanvas`, `#cursorGlow`, `#navbar`, `#mobileToggle`, and `#mobileMenu` exist before initialization.
- Safe modification: Add null guards for required DOM nodes or fail with a clear console diagnostic during development.
- Test coverage: No DOM smoke test checks initialization against `index.html`.

**Animation and CSS class contracts:**
- Files: `script.js`, `style.css`, `index.html`
- Why fragile: Behavior depends on class names such as `.animate-on-scroll`, `.visible`, `.active`, `.scrolled`, `.mobile-menu`, `.product-card`, and `[data-tilt]`.
- Safe modification: Treat class names and data attributes as a public contract; add a smoke test that loads `index.html`, runs `script.js`, and verifies key selectors exist.
- Test coverage: No automated selector contract coverage detected.

**Visual responsiveness relies on manual breakpoints:**
- Files: `style.css`, `index.html`
- Why fragile: Large fixed decorative elements such as `.tech-orbit`, fixed navigation, full-screen mobile menu, and card grids depend on a small set of breakpoints.
- Safe modification: Validate desktop, tablet, and narrow mobile screenshots whenever `style.css` or `index.html` changes.
- Test coverage: No visual regression tests or Playwright screenshot checks detected.

## Scaling Limits

**Static single-page growth:**
- Current capacity: One portfolio page with 9 product cards and two language dictionaries.
- Limit: More products, languages, pages, or metadata increase manual synchronization work in `index.html` and `i18n.js`.
- Symptoms at limit: Larger translation objects, duplicated links, missed `data-i18n` keys, and slower manual review.
- Scaling path: Move repeated portfolio data into structured data and generate repeated HTML sections from a single source.

**No build-time validation layer:**
- Current capacity: Direct static-file editing and manual browser checks.
- Limit: HTML, CSS, accessibility, localization, and link regressions are only caught by human review.
- Symptoms at limit: Broken anchors, missing images, stale outbound links, and inaccessible controls can ship unnoticed.
- Scaling path: Add repository scripts for HTML validation, link checks, localization key checks, and browser smoke tests.

## Dependencies at Risk

**Unpinned runtime dependency for local serving:**
- Risk: `.claude/launch.json` uses `npx serve` without a project `package.json` or lockfile, so the local server version resolves outside the repository.
- Impact: Local preview behavior can differ between machines or over time.
- Migration plan: Add a `package.json` with pinned dev tooling or replace the launcher with a documented static server command.

**Remote font and analytics availability:**
- Risk: `index.html` depends on `fonts.googleapis.com`, `fonts.gstatic.com`, and `www.googletagmanager.com`.
- Impact: Font rendering and analytics behavior depend on external availability and client privacy/network settings.
- Migration plan: Self-host critical fonts or provide documented system-font fallback acceptance; keep analytics optional and isolated.

## Missing Critical Features

**Static site metadata is minimal:**
- Problem: Only charset and viewport metadata are present; no description, canonical URL, Open Graph, Twitter Card, or structured data is detected.
- Files: `index.html`
- Blocks: Rich previews, search snippets, and social sharing previews are under-specified.

**Manifest is incomplete:**
- Problem: `site.webmanifest` has empty `name` and `short_name` values.
- Files: `site.webmanifest`, `index.html`
- Blocks: Installable/PWA-like presentation uses blank application labels where the manifest is consumed.

**No documented deployment or verification path:**
- Problem: The tracked config only describes a local launcher through `.claude/launch.json`.
- Files: `.claude/launch.json`
- Blocks: Reproducible deployment checks, cache-header decisions, and production validation are not encoded in the repository.

## Test Coverage Gaps

**No automated test framework detected:**
- What's not tested: DOM initialization, navigation scrolling, mobile menu behavior, language switching, product links, and analytics loading assumptions.
- Files: `index.html`, `script.js`, `i18n.js`, `style.css`
- Risk: Static-site regressions can ship with syntactically valid JavaScript.
- Priority: High

**No localization regression tests:**
- What's not tested: Parity between `index.html` translation attributes and `i18n.js` dictionaries, including HTML-capable strings.
- Files: `index.html`, `i18n.js`
- Risk: Missing or mismatched keys leave mixed English/Turkish UI or broken headline markup.
- Priority: Medium

**No accessibility smoke tests:**
- What's not tested: Keyboard focus visibility, mobile menu state, reduced-motion behavior, landmark naming, and external-link behavior.
- Files: `index.html`, `style.css`, `script.js`
- Risk: Interactive elements remain visually functional but inaccessible.
- Priority: High

**No visual or responsive regression tests:**
- What's not tested: Product grid layout, hero text wrapping, fixed navigation overlap, mobile menu overlay, and animated decorative sections.
- Files: `index.html`, `style.css`, `script.js`, `images/product-icons/vynix.png`, `images/product-icons/moodjot.png`, `logo.png`
- Risk: CSS changes can break narrow/mobile layouts without failing any automated check.
- Priority: Medium

---

*Concerns audit: 2026-07-28*
*Update as issues are fixed or new ones discovered*
