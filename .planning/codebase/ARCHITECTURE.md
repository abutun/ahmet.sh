<!-- refreshed: 2026-07-28 -->
# Architecture

**Analysis Date:** 2026-07-28

## System Overview

```text
┌─────────────────────────────────────────────────────────────┐
│                 Static Portfolio Browser Document            │
│                         `index.html`                         │
├──────────────────┬──────────────────┬───────────────────────┤
│   Presentation   │   Interaction    │     Localization      │
│   `style.css`    │   `script.js`    │      `i18n.js`        │
└────────┬─────────┴────────┬─────────┴──────────┬────────────┘
         │                  │                     │
         ▼                  ▼                     ▼
┌─────────────────────────────────────────────────────────────┐
│              Browser DOM, Canvas, Events, Storage            │
│  `#particleCanvas`, `data-i18n`, `data-tilt`, `localStorage` │
└─────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│                 Static Assets and External Links             │
│ `logo.png`, `images/product-icons/`, `site.webmanifest`      │
└─────────────────────────────────────────────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| Document shell | Defines metadata, navigation, sections, product cards, contact links, script load order, and DOM targets. | `index.html` |
| Styling system | Owns theme tokens, page-region styles, animations, hover states, and responsive breakpoints. | `style.css` |
| Interaction runtime | Owns particle canvas, cursor glow, nav state, mobile menu, scroll reveal, counters, tilt, smooth scroll, magnetic buttons, and tag typing. | `script.js` |
| Localization runtime | Owns English/Turkish translation dictionaries, language persistence, DOM text replacement, and language switcher state. | `i18n.js` |
| PWA metadata | Declares standalone display mode and Android icon references. | `site.webmanifest` |
| Brand and product images | Provide logo, favicon, touch icon, Android icons, and product card icons. | `logo.png`, `images/product-icons/` |

## Pattern Overview

**Overall:** Flat static single-page application.

**Key Characteristics:**
- The deployable site is a static document rooted at `index.html` with no build step, package manifest, bundler, backend, or module imports.
- Styling is centralized in `style.css`; section names in `index.html` map directly to CSS region blocks such as `.hero`, `.about`, `.products`, `.expertise`, `.company`, and `.contact`.
- Runtime behavior is browser-only JavaScript in IIFEs in `i18n.js` and `script.js`.
- State is limited to in-memory animation/UI state in `script.js` and the selected language stored under `localStorage.lang` in `i18n.js`.

## Layers

**Document Layer:**
- Purpose: Provide semantic page structure, SEO metadata, asset references, navigable section anchors, and hook attributes for JavaScript.
- Location: `index.html`
- Contains: `<nav>`, mobile menu, `#hero`, `#about`, `#products`, `#expertise`, `#company`, `#contact`, `<footer>`, `data-i18n`, `data-i18n-html`, `data-section`, and `data-tilt` hooks.
- Depends on: `style.css`, `i18n.js`, `script.js`, `logo.png`, `images/product-icons/`, favicon assets, Google Fonts, and Google Analytics.
- Used by: Browser rendering, `i18n.js` DOM replacement, and `script.js` event/animation initialization.

**Presentation Layer:**
- Purpose: Define visual identity, layout, section composition, transitions, responsive behavior, and decorative animation styles.
- Location: `style.css`
- Contains: CSS custom properties, reset/base styles, navigation styles, hero styles, product card grid, timeline, company card, contact cards, footer, scroll animation states, and media queries.
- Depends on: Class names and IDs emitted by `index.html`.
- Used by: `index.html` markup and class toggles from `script.js`.

**Interaction Layer:**
- Purpose: Add non-content browser behavior and motion to the static document.
- Location: `script.js`
- Contains: `Particle`, `resizeCanvas()`, `initParticles()`, `handleScroll()`, `toggleMobileMenu()`, `initScrollAnimations()`, `animateCounters()`, `animateYearCounter()`, `initTiltEffect()`, `initSmoothScroll()`, `initMagneticButtons()`, `initTextReveal()`, and `initTypingEffect()`.
- Depends on: DOM IDs/classes in `index.html`, CSS classes in `style.css`, Canvas 2D API, `IntersectionObserver`, `requestAnimationFrame`, and browser events.
- Used by: DOM ready initialization in `script.js`.

**Localization Layer:**
- Purpose: Apply language-specific content without server rendering or route changes.
- Location: `i18n.js`
- Contains: `translations.en`, `translations.tr`, `currentLang`, `applyTranslations()`, `toggleLanguage()`, `initI18n()`, and `window.i18n`.
- Depends on: `data-i18n`, `data-i18n-html`, `#langFlag`, `#langCode`, `#langSwitcher`, `document.title`, `document.documentElement.lang`, and `localStorage`.
- Used by: The language switcher in `index.html` and any external script calling `window.i18n`.

**Static Asset Layer:**
- Purpose: Supply image files referenced directly from HTML and manifest metadata.
- Location: `logo.png`, `favicon-16x16.png`, `favicon-32x32.png`, `favicon.ico`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`, `images/product-icons/`
- Contains: Brand logo, favicon/touch images, Android Chrome icons, and product card icons.
- Depends on: Browser static file serving from repository root.
- Used by: `index.html` and `site.webmanifest`.

## Data Flow

### Page Load Path

1. Browser requests `index.html` and parses metadata, font preconnects, stylesheet link, Google Analytics bootstrap, page sections, and asset references.
2. Browser loads `style.css` from `index.html` and applies the central theme, layout, animation, and responsive rules.
3. Browser loads `i18n.js` before `script.js` from the bottom of `index.html`.
4. `i18n.js` reads `localStorage.lang` or defaults to `en`, then updates `[data-i18n]`, `[data-i18n-html]`, `document.documentElement.lang`, `document.title`, `#langFlag`, and `#langCode`.
5. `script.js` initializes on DOM ready, sizes `#particleCanvas`, starts `requestAnimationFrame` loops, registers scroll/mouse/resize/click listeners, and creates `IntersectionObserver` instances.
6. User interaction mutates DOM classes and inline transforms; CSS in `style.css` renders the final visual states.

### Language Switch Flow

1. User clicks `#langSwitcher` in `index.html`.
2. `toggleLanguage()` in `i18n.js` flips `currentLang` between `en` and `tr`.
3. `i18n.js` writes `localStorage.lang` and calls `applyTranslations(currentLang)`.
4. Elements marked with `data-i18n` receive `textContent`; elements marked with `data-i18n-html` receive authored HTML snippets from `i18n.js`.
5. `document.title`, `html[lang]`, `#langFlag`, and `#langCode` reflect the selected language.

### Interaction Flow

1. Mouse movement updates `mouseX`, `mouseY`, `glowX`, and `glowY` in `script.js`.
2. `updateCursorGlow()` moves `#cursorGlow`; `animateParticles()` updates/draws particles on `#particleCanvas`.
3. Scroll events call `handleScroll()` to toggle `.navbar.scrolled`, `.scroll-indicator.hidden`, and `.nav-link.active`.
4. `IntersectionObserver` callbacks add `.visible` to `.animate-on-scroll` elements and run counter/tag reveal behavior.
5. Product cards with `data-tilt` receive per-card pointer transforms in `script.js`.

**State Management:**
- `script.js` keeps animation and UI state in closure variables: `particles`, `mouseX`, `mouseY`, `glowX`, `glowY`, `currentGlowX`, `currentGlowY`, and `animFrameId`.
- `i18n.js` keeps language state in `currentLang` and persists it as `localStorage.lang`.
- `index.html` carries content state through static markup and `data-*` attributes.
- No database, backend session, API cache, or service worker state is present.

## Key Abstractions

**Section Anchor:**
- Purpose: Represent a page region addressable by navigation and scroll state.
- Examples: `#hero`, `#about`, `#products`, `#expertise`, `#company`, `#contact` in `index.html`.
- Pattern: Static `<section id="...">` blocks paired with `.nav-link[data-section]` and CSS region classes in `style.css`.

**Translation Key:**
- Purpose: Decouple visible copy from markup for English and Turkish content.
- Examples: `data-i18n="nav.home"` in `index.html` and `'nav.home'` in `i18n.js`.
- Pattern: Attribute-driven dictionary lookup; use `data-i18n` for plain text and `data-i18n-html` only for trusted authored markup.

**Product Card:**
- Purpose: Present portfolio products with badge, icon, description, tags, and outbound link.
- Examples: `.product-card` blocks in `index.html`, product icon files in `images/product-icons/`, `.product-card` rules in `style.css`, and `data-tilt` handling in `script.js`.
- Pattern: Repeated static card markup with inline CSS custom properties for per-product glow colors.

**Particle System:**
- Purpose: Provide ambient canvas animation behind content.
- Examples: `#particleCanvas` in `index.html`, `Particle` and `particles` in `script.js`, `#particleCanvas` styles in `style.css`.
- Pattern: Closure-scoped object array updated through `requestAnimationFrame`.

**Scroll Reveal Target:**
- Purpose: Animate elements when they enter the viewport.
- Examples: `.animate-on-scroll` on section headers, cards, timeline entries, and wrappers in `index.html`.
- Pattern: `IntersectionObserver` in `script.js` adds `.visible`; `style.css` defines opacity/transform transitions.

## Entry Points

**Static Site Entry:**
- Location: `index.html`
- Triggers: Browser request for the site root or direct file load.
- Responsibilities: Load assets, define content, provide DOM hooks, bootstrap Google Analytics, and load scripts.

**Localization Script Entry:**
- Location: `i18n.js`
- Triggers: Script tag at `index.html` bottom; runs immediately or on `DOMContentLoaded`.
- Responsibilities: Apply translations, wire `#langSwitcher`, persist language, and expose `window.i18n`.

**Interaction Script Entry:**
- Location: `script.js`
- Triggers: Script tag after `i18n.js` at `index.html` bottom; runs immediately or on `DOMContentLoaded`.
- Responsibilities: Initialize animations, event listeners, menu behavior, scroll state, counters, and interaction effects.

**Manifest Entry:**
- Location: `site.webmanifest`
- Triggers: Browser reads `<link rel="manifest" href="/site.webmanifest">` in `index.html`.
- Responsibilities: Provide standalone display metadata and Android icon paths.

## Architectural Constraints

- **Threading:** `script.js` runs on the browser main thread; canvas, DOM mutation, observers, timers, and pointer handlers all share the same event loop. No Web Workers are present.
- **Global state:** `i18n.js` intentionally exposes `window.i18n`; Google Analytics creates `window.dataLayer` and `gtag()` in `index.html`; all other site state is inside IIFEs.
- **Script order:** `i18n.js` loads before `script.js` in `index.html`; keep this order because translations modify hero/title markup that `script.js` also animates.
- **DOM assumptions:** `script.js` assumes core nodes such as `#particleCanvas`, `#cursorGlow`, `#navbar`, `#mobileToggle`, and `#mobileMenu` exist in `index.html`.
- **Circular imports:** Not applicable; `script.js` and `i18n.js` use browser script tags and no ES modules.
- **Deployment model:** Assets are referenced with root-relative paths such as `/site.webmanifest` and relative paths such as `style.css`; host the repository root as the static web root.

## Anti-Patterns

### Untrusted HTML in Translation Values

**What happens:** `i18n.js` writes `innerHTML` for every element marked with `data-i18n-html`.
**Why it's wrong:** Adding dynamic or user-provided strings to `translations` would make the static translation layer a DOM injection surface.
**Do this instead:** Keep `data-i18n-html` values in `i18n.js` static and authored; use `data-i18n` with `textContent` in `index.html` for plain copy.

### Scattered Inline Behavior

**What happens:** `index.html` contains the Google Analytics bootstrap inline, while portfolio interactions live in `script.js`.
**Why it's wrong:** Adding more inline behavior to `index.html` mixes document structure with interaction code and bypasses the existing initialization pattern.
**Do this instead:** Put new first-party behavior in `script.js`, initialize it from `init()`, and keep `index.html` limited to markup, data attributes, and required vendor bootstrap.

## Error Handling

**Strategy:** Defensive guards exist for optional localization and animation targets; no centralized runtime error handler is present.

**Patterns:**
- `i18n.js` checks translation table and target element existence before writing to DOM nodes.
- `script.js` guards selected optional nodes such as `.scroll-indicator`, `.hero-title`, and `#yearCounter`.
- Core DOM targets in `script.js`, including `#particleCanvas`, `#cursorGlow`, `#mobileToggle`, and `#mobileMenu`, are required by architecture and should remain present in `index.html`.

## Cross-Cutting Concerns

**Logging:** Not detected in first-party files; `script.js` and `i18n.js` do not call `console.*`.
**Validation:** Attribute/key existence checks in `i18n.js`; limited DOM guard checks in `script.js`; no schema validation.
**Authentication:** Not applicable; this is a public static portfolio with outbound links and no private routes.
**Analytics:** Google Analytics tag `G-KJXNT2SFKR` is bootstrapped in `index.html`.
**Accessibility:** `index.html` includes image `alt` attributes, button `aria-label` attributes for language/menu controls, semantic anchors, and static text content.

---

*Architecture analysis: 2026-07-28*
