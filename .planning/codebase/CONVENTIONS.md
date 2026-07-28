# Coding Conventions

**Analysis Date:** 2026-07-28

## Scope

- This map covers the tracked static portfolio surface in `index.html`, `style.css`, `script.js`, `i18n.js`, `site.webmanifest`, and `.claude/launch.json`.
- Keep browser code dependency-free in `script.js` and `i18n.js`; the tracked site has no `package.json`, bundler, module loader, or transpilation step.
- Keep the page as a static single-page site with `index.html` as the entry point and root/static assets such as `logo.png`, `favicon.ico`, and `images/product-icons/*.png`.

## Naming Patterns

**Files:**
- Use simple lowercase filenames at the root for primary static assets and source files: `index.html`, `style.css`, `script.js`, `i18n.js`, and `site.webmanifest`.
- Use hyphenated lowercase asset names for favicons and product icon files, including `favicon-16x16.png`, `android-chrome-192x192.png`, `images/product-icons/glow-spin.png`, and `images/product-icons/swipe-slip.png`.
- Keep product-specific PNG icons under `images/product-icons/`; the root remains reserved for global site assets such as `logo.png` and favicon files.

**HTML selectors and attributes:**
- Use kebab-case CSS classes in `index.html`, grouped by component prefix: `hero-*`, `nav-*`, `product-*`, `timeline-*`, `contact-*`, and `footer-*`.
- Use lowerCamelCase IDs for JavaScript hooks in `index.html`: `cursorGlow`, `particleCanvas`, `langSwitcher`, `langFlag`, `langCode`, `mobileToggle`, `mobileMenu`, and `yearCounter`.
- Use state classes for behavior-driven UI changes: `.active`, `.scrolled`, `.hidden`, and `.visible`.
- Use `data-i18n` for plain-text translations and `data-i18n-html` only where translated markup is required.
- Use `data-tilt` as a behavior hook for product cards animated by `script.js`.

**Functions:**
- Use camelCase for JavaScript functions in `script.js` and `i18n.js`.
- Use `init*` names for feature initializers such as `initParticles`, `initScrollAnimations`, `initTiltEffect`, `initSmoothScroll`, `initMagneticButtons`, `initTextReveal`, `initTypingEffect`, and `initI18n`.
- Use action-oriented names for event and animation helpers, including `handleScroll`, `toggleMobileMenu`, `toggleLanguage`, `applyTranslations`, `animateCounters`, `animateValue`, and `animateYearCounter`.
- Use PascalCase for classes; `script.js` defines the `Particle` class for canvas animation.

**Variables:**
- Use camelCase for JavaScript variables and DOM references, including `cursorGlow`, `scrollIndicator`, `mobileToggle`, `mobileMenu`, `currentLang`, `mouseX`, `mouseY`, and `animFrameId`.
- Use descriptive DOM collection names for queried elements in `script.js`, such as `navLinks`, `sections`, `counters`, `cards`, `buttons`, and `tags`.
- Use CSS custom properties in kebab-case under `:root` in `style.css`, such as `--bg-primary`, `--text-secondary`, `--accent-1`, `--gradient-primary`, `--font-display`, and `--ease-out-expo`.

**Types:**
- Not applicable. The tracked source uses plain JavaScript in `script.js` and `i18n.js`; no TypeScript types, interfaces, enums, or JSDoc typedefs are present.

## Code Style

**Formatting:**
- Use 4-space indentation in `index.html`, `style.css`, `script.js`, and `i18n.js`.
- Use semicolons in JavaScript statements in `script.js` and `i18n.js`.
- Use single quotes for JavaScript string literals and template literals for interpolated CSS values in `script.js`.
- Use double quotes for HTML attributes in `index.html`.
- Keep CSS grouped by section banners in `style.css`, with large blocks ordered from base styles to page sections, animations, and responsive rules.
- Keep responsive CSS in max-width media queries at `1024px`, `768px`, and `480px` in `style.css`.

**Linting:**
- Not detected. No tracked `.eslintrc*`, `eslint.config.*`, `biome.json`, `.prettierrc*`, `package.json`, or lint script exists.
- Preserve existing formatting manually when editing `index.html`, `style.css`, `script.js`, and `i18n.js`.

## CSS Patterns

- Define theme colors, typography, gradients, and easing tokens in `:root` at the top of `style.css`.
- Use component-prefixed class groups in `style.css`; examples include `.navbar`, `.hero`, `.about`, `.products`, `.timeline`, `.tech-stack`, `.company`, `.contact`, and `.footer`.
- Use pseudo-elements for decorative lines, glows, and hover surfaces in `style.css`, including `.btn-glow::before`, `.product-card::before`, `.products::before`, `.expertise::before`, and `.contact::before`.
- Use CSS transitions and named keyframes for UI polish: `pulse-dot`, `scroll-wheel`, `float`, `orbit-spin`, `counter-spin`, `counter-spin-reverse`, and `float-shape`.
- Use inline CSS custom properties in `index.html` only for per-item visual data such as `--glow-color`, `--icon-gradient`, and `--angle`.

## JavaScript Patterns

- Wrap browser code in an IIFE with `'use strict'` in both `script.js` and `i18n.js`.
- Use browser-native APIs only: `document.querySelectorAll`, `document.getElementById`, `IntersectionObserver`, `requestAnimationFrame`, `localStorage`, `performance.now`, and DOM event listeners.
- Initialize after DOM readiness with the same pattern in `script.js` and `i18n.js`: call immediately when `document.readyState` is not `loading`, otherwise attach `DOMContentLoaded`.
- Keep each interaction in a named initializer or helper function in `script.js`; `init()` wires particle animation, cursor glow, scroll state, counters, tilt, smooth scroll, magnetic buttons, text reveal, typing effect, and event listeners.
- Keep `i18n.js` responsible for translation state, DOM translation application, language switcher UI, `document.documentElement.lang`, `document.title`, and the limited `window.i18n` API.

## Import Organization

**Order:**
1. External browser resources in `index.html`, including Google Fonts preconnects and the Google Analytics script.
2. Site stylesheet via `style.css`.
3. Page body markup and static asset references.
4. Local scripts at the end of `index.html`, with `i18n.js` loaded before `script.js`.

**Path Aliases:**
- Not detected. `index.html`, `style.css`, `script.js`, and `i18n.js` use direct relative or root-relative paths only.

## Error Handling

**Patterns:**
- Explicit exception handling is not present in `script.js` or `i18n.js`.
- Use guard returns for optional DOM-dependent behavior, as seen in `animateYearCounter`, `initTextReveal`, and `initI18n`.
- Treat IDs and classes in `index.html` as runtime contracts for `script.js`; core hooks such as `particleCanvas`, `cursorGlow`, `navbar`, `mobileToggle`, and `mobileMenu` are assumed to exist.
- Keep `data-i18n-html` values controlled inside `i18n.js`; translated HTML is applied through `innerHTML`.

## Logging

**Framework:**
- Not detected. No logging framework or committed `console.*` diagnostic pattern is present in `script.js` or `i18n.js`.

**Patterns:**
- Avoid adding persistent console logging to the static site source files.

## Comments

**When to Comment:**
- Use section banners for major CSS and JavaScript areas, matching `style.css`, `script.js`, and `i18n.js`.
- Use short comments to label behavior groups such as navigation, particles, scroll animations, counters, language translation, and DOM initialization.
- Avoid inline comments for obvious assignments; most implementation detail is expressed through descriptive function and selector names.

**JSDoc/TSDoc:**
- Not detected. Public API documentation comments are not used in `script.js` or `i18n.js`.

## Function Design

**Size:**
- Keep one behavior per function in `script.js`; examples include `resizeCanvas`, `drawConnections`, `handleScroll`, `animateValue`, `initSmoothScroll`, and `initTypingEffect`.
- Keep feature wiring centralized in `init()` in `script.js` and `initI18n()` in `i18n.js`.

**Parameters:**
- Use primitive or DOM element parameters for focused helpers; `animateValue(element, start, end, duration)` is the largest function signature in `script.js`.
- Use no options objects unless a new behavior needs multiple related configuration values.

**Return Values:**
- Use side-effect-driven DOM functions for UI behavior.
- Use early returns for missing optional elements and unsupported translation keys.

## Module Design

**Exports:**
- Do not use ES module imports or exports in the tracked browser source.
- Keep `script.js` private to its IIFE.
- Keep the only intentional global API in `i18n.js` as `window.i18n` with `toggle` and `setLang`.

**Barrel Files:**
- Not applicable. No module tree or barrel files exist.

---

*Convention analysis: 2026-07-28*
*Update when patterns change*
