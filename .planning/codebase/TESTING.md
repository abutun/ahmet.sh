# Testing Patterns

**Analysis Date:** 2026-07-28

## Test Framework

**Runner:**
- Not detected. The tracked repository has no `package.json`, `jest.config.*`, `vitest.config.*`, `playwright.config.*`, `cypress.config.*`, or other automated test runner configuration.
- Static local serving is configured in `.claude/launch.json` through `npx serve /Users/ahmet/Documents/Workspaces/Buhane/ahmet.sh -l 3847`.

**Assertion Library:**
- Not detected. No assertion library is configured or used in tracked files.

**Run Commands:**
```bash
npx serve /Users/ahmet/Documents/Workspaces/Buhane/ahmet.sh -l 3847  # Serve the static site for browser verification
```

## Test File Organization

**Location:**
- Not detected. No tracked `*.test.*`, `*.spec.*`, `tests/`, `__tests__/`, `e2e/`, or fixture directory exists.

**Naming:**
- Not detected. There is no established test filename convention in the tracked repository.

**Structure:**
```text
.
├── index.html
├── style.css
├── script.js
├── i18n.js
├── site.webmanifest
├── .claude/launch.json
├── logo.png
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon.ico
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
└── images/product-icons/*.png
```

## Verification Entry Points

- `index.html` is the browser entry point and loads `style.css`, `i18n.js`, and `script.js`.
- `i18n.js` must load before `script.js` in `index.html` because it applies translated title and DOM content before the interaction script starts its animation and scroll behavior.
- `.claude/launch.json` defines the local static-server command and port `3847`.
- `site.webmanifest` references root-level Android icons: `android-chrome-192x192.png` and `android-chrome-512x512.png`.
- `index.html` references root-level favicon and touch icon files plus product icon PNGs under `images/product-icons/`.

## Manual Browser Smoke Pattern

Use the static server from `.claude/launch.json`, then verify these surfaces in the browser:

- `index.html` loads without visible missing assets from `style.css`, `i18n.js`, `script.js`, `logo.png`, favicon files, and `images/product-icons/*.png`.
- The particle canvas in `script.js` renders through `particleCanvas` and resizes with the viewport.
- The cursor glow in `script.js` follows mouse movement through `cursorGlow`.
- Navigation links in `index.html` scroll to `#hero`, `#about`, `#products`, `#expertise`, and `#contact`.
- The active navigation state in `script.js` follows the visible section and toggles `.active` on `.nav-link`.
- The fixed navigation bar toggles `.scrolled` after page scroll.
- The mobile menu toggles `.active` on `mobileMenu` and `mobileToggle` at the responsive layout defined in `style.css`.
- Scroll-triggered elements using `.animate-on-scroll` receive `.visible`.
- Hero counters in `script.js` animate values from `data-target` attributes in `index.html`.
- Product cards with `data-tilt` respond to pointer movement and reset on pointer leave.
- The language switcher in `i18n.js` toggles between English and Turkish, updates `html[lang]`, updates `document.title`, updates `langFlag` and `langCode`, and persists `localStorage.lang`.
- External links in `index.html` open the intended destinations for products, LinkedIn, and Buhane.

## Static Integrity Checks

- Every `data-i18n` and `data-i18n-html` key used in `index.html` must exist under both `en` and `tr` in `i18n.js`.
- Every translated value rendered through `data-i18n-html` in `i18n.js` must be trusted static markup because `applyTranslations` writes it through `innerHTML`.
- IDs consumed by `script.js` and `i18n.js` must exist in `index.html`: `particleCanvas`, `cursorGlow`, `navbar`, `mobileToggle`, `mobileMenu`, `yearCounter`, `langSwitcher`, `langFlag`, and `langCode`.
- CSS state classes mutated by `script.js` must exist in `style.css`: `.scrolled`, `.hidden`, `.active`, and `.visible`.
- Asset references in `index.html` and `site.webmanifest` must resolve relative to the static server root.
- Responsive behavior must be checked at widths matching the `style.css` breakpoints: `1024px`, `768px`, and `480px`.

## Test Structure

**Suite Organization:**
```text
Not detected. No describe/it/test suite pattern exists in tracked files.
```

**Patterns:**
- No automated setup, teardown, or assertion pattern exists.
- Verification is browser/manual around `index.html`, `style.css`, `script.js`, `i18n.js`, `site.webmanifest`, and `.claude/launch.json`.

## Mocking

**Framework:**
- Not detected. No Jest, Vitest, Sinon, Playwright, Cypress, or browser automation mock framework is configured.

**Patterns:**
```text
Not applicable. No mocked tests exist in tracked files.
```

**What to Mock:**
- No established mocking convention.

**What NOT to Mock:**
- No established mocking convention.

## Fixtures and Factories

**Test Data:**
```text
Not detected. No test fixtures or factories exist.
```

**Location:**
- Not detected. No tracked fixture directory exists.

## Coverage

**Requirements:**
- Not detected. No line, branch, function, or statement coverage target is configured.

**Configuration:**
- Not detected. No coverage tooling or coverage output directory is configured.

**View Coverage:**
```text
Not applicable. No coverage command exists.
```

## Test Types

**Unit Tests:**
- Not detected for `script.js` or `i18n.js`.

**Integration Tests:**
- Not detected for the interaction between `index.html`, `style.css`, `script.js`, and `i18n.js`.

**E2E Tests:**
- Not detected. The site has a local static-server launch config in `.claude/launch.json`, but no browser automation configuration.

## Common Patterns

**Async Testing:**
```text
Not detected. No automated async test pattern exists.
```

**Error Testing:**
```text
Not detected. No automated error test pattern exists.
```

**Snapshot Testing:**
- Not detected. No snapshot framework or snapshot directory exists.

---

*Testing analysis: 2026-07-28*
*Update when test patterns change*
