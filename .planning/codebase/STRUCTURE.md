# Codebase Structure

**Analysis Date:** 2026-07-28

## Directory Layout

```text
ahmet.sh/
├── index.html                    # Static page document and browser entry point
├── style.css                     # Central stylesheet, theme tokens, responsive rules
├── script.js                     # First-party interaction and animation runtime
├── i18n.js                       # English/Turkish translation runtime
├── site.webmanifest              # PWA manifest metadata
├── logo.png                      # Brand logo used by nav and footer
├── favicon-16x16.png             # 16px favicon
├── favicon-32x32.png             # 32px favicon
├── favicon.ico                   # Multi-size ICO favicon
├── apple-touch-icon.png          # Apple touch icon
├── android-chrome-192x192.png    # Android manifest icon
├── android-chrome-512x512.png    # Android manifest icon
├── images/
│   └── product-icons/            # Product card icon PNG assets
├── .planning/
│   └── codebase/                 # GSD codebase intelligence documents
├── .claude/                      # Local Claude/Codex project configuration
└── .git/                         # Git repository metadata
```

## Directory Purposes

**`./`:**
- Purpose: Static web root for the portfolio.
- Contains: `index.html`, `style.css`, `script.js`, `i18n.js`, `site.webmanifest`, brand images, favicon files, and top-level browser assets.
- Key files: `index.html`, `style.css`, `script.js`, `i18n.js`, `site.webmanifest`, `logo.png`.
- Subdirectories: `images/`, `.planning/`, `.claude/`, `.git/`.

**`images/`:**
- Purpose: Asset namespace for non-favicon image files.
- Contains: Product icon subdirectory only.
- Key files: Not applicable at `images/` root.
- Subdirectories: `images/product-icons/`.

**`images/product-icons/`:**
- Purpose: PNG icon assets displayed inside product cards in `index.html`.
- Contains: `astralpost.png`, `glow-spin.png`, `gridzle.png`, `hivedue.png`, `moodjot.png`, `swipe-slip.png`, and `vynix.png`.
- Key files: Product cards in `index.html` reference `images/product-icons/vynix.png`, `images/product-icons/moodjot.png`, `images/product-icons/hivedue.png`, `images/product-icons/glow-spin.png`, `images/product-icons/swipe-slip.png`, `images/product-icons/gridzle.png`, and `images/product-icons/astralpost.png`.
- Subdirectories: None.

**`.planning/codebase/`:**
- Purpose: GSD codebase map artifacts for future planning and execution.
- Contains: `ARCHITECTURE.md` and `STRUCTURE.md` for the `arch` focus.
- Key files: `.planning/codebase/ARCHITECTURE.md`, `.planning/codebase/STRUCTURE.md`.
- Subdirectories: None.

**`.claude/`:**
- Purpose: Project-local assistant configuration outside the static site runtime.
- Contains: Tracked `launch.json`; local settings files may exist and are not part of the deployable site.
- Key files: `.claude/launch.json`.
- Subdirectories: None detected.

**`.git/`:**
- Purpose: Git version-control metadata.
- Contains: Repository objects, refs, hooks, logs, and index metadata.
- Key files: Do not edit directly; use Git commands from repository root.
- Subdirectories: Git-managed internals.

## Key File Locations

**Entry Points:**
- `index.html`: Browser entry point; defines metadata, navigation, page sections, external links, DOM hooks, Google Analytics bootstrap, and script tags.
- `i18n.js`: Localization entry point loaded by `index.html` before `script.js`.
- `script.js`: Interaction entry point loaded by `index.html` after `i18n.js`.
- `site.webmanifest`: Browser manifest entry referenced from `index.html`.

**Configuration:**
- `site.webmanifest`: Static manifest with Android icon paths and standalone display mode.
- `index.html`: Holds Google Fonts preconnects, Google Fonts stylesheet URL, favicon/touch-icon links, manifest link, and Google Analytics tag.
- `.claude/launch.json`: Project assistant launch configuration; not part of the static site runtime.
- Package/build configuration: Not detected; no `package.json`, bundler config, lockfile, or test config is present.

**Core Logic:**
- `index.html`: Source of page content, section structure, repeated product cards, contact links, and `data-*` hooks.
- `style.css`: Source of visual system, responsive layout, card/timeline/contact styling, and animation classes.
- `script.js`: Source of particles, cursor glow, navbar state, mobile menu, reveal/counter/year animations, card tilt, smooth scroll, magnetic buttons, and typing effect.
- `i18n.js`: Source of translation dictionaries, language toggle behavior, `localStorage.lang`, and `window.i18n`.

**Assets:**
- `logo.png`: Brand logo in `index.html` navigation and footer.
- `favicon-16x16.png`, `favicon-32x32.png`, `favicon.ico`: Browser favicon assets linked from `index.html`.
- `apple-touch-icon.png`: Apple touch icon linked from `index.html`.
- `android-chrome-192x192.png`, `android-chrome-512x512.png`: Manifest icons referenced by `site.webmanifest`.
- `images/product-icons/astralpost.png`, `images/product-icons/glow-spin.png`, `images/product-icons/gridzle.png`, `images/product-icons/hivedue.png`, `images/product-icons/moodjot.png`, `images/product-icons/swipe-slip.png`, `images/product-icons/vynix.png`: Product icon assets used by cards in `index.html`.

**Testing:**
- Test files: Not detected.
- Test configuration: Not detected.
- Test command location: Not detected.

**Documentation:**
- `.planning/codebase/ARCHITECTURE.md`: Conceptual architecture map for this static site.
- `.planning/codebase/STRUCTURE.md`: Physical layout and placement guidance for this static site.
- `README.md`: Not detected.

## Naming Conventions

**Files:**
- Conventional static-site lowercase filenames: `index.html`, `style.css`, `script.js`, `i18n.js`, and `site.webmanifest`.
- Browser icon filenames follow favicon/PWA conventions: `favicon-16x16.png`, `favicon-32x32.png`, `favicon.ico`, `apple-touch-icon.png`, `android-chrome-192x192.png`, and `android-chrome-512x512.png`.
- Product asset filenames use lowercase names with hyphens where needed: `images/product-icons/glow-spin.png`, `images/product-icons/swipe-slip.png`, and `images/product-icons/astralpost.png`.
- GSD codebase documents use uppercase Markdown names: `.planning/codebase/ARCHITECTURE.md` and `.planning/codebase/STRUCTURE.md`.

**Directories:**
- Runtime asset directories use lowercase plural names: `images/`.
- Product-specific static images live under the descriptive nested directory `images/product-icons/`.
- GSD planning artifacts live under dot-prefixed `.planning/codebase/`.
- Assistant configuration lives under dot-prefixed `.claude/`.

**Special Patterns:**
- Section IDs in `index.html` use lowercase semantic names such as `hero`, `about`, `products`, `expertise`, `company`, and `contact`.
- CSS classes in `style.css` use kebab-case and section/component prefixes such as `.hero-title`, `.product-card`, `.timeline-item`, and `.contact-card`.
- Translation keys in `i18n.js` use dot-separated namespaces such as `nav.home`, `hero.subtitle`, `products.vynix.desc`, and `company.cta`.
- JavaScript functions and variables in `script.js` and `i18n.js` use camelCase such as `initParticles()`, `handleScroll()`, `toggleLanguage()`, and `currentLang`.

## Where to Add New Code

**New Page Section:**
- Markup: Add a new `<section id="...">` block in `index.html`.
- Navigation: Add matching `.nav-link[data-section="..."]` and `.mobile-link` anchors in `index.html` if the section belongs in global navigation.
- Styles: Add section styles in `style.css`, keeping the existing region-block pattern near related sections.
- Scroll animation: Add `.animate-on-scroll` classes in `index.html` and rely on `script.js` `initScrollAnimations()`.
- Translations: Add `data-i18n` or `data-i18n-html` attributes in `index.html` and matching keys in both `translations.en` and `translations.tr` in `i18n.js`.

**New Product Card:**
- Markup: Add a `.product-card` block inside `.products-grid` in `index.html`.
- Icon: Add the PNG under `images/product-icons/` and reference it from the card image tag in `index.html`.
- Copy: Add product badge, description, tag, and link keys under the `products.*` namespace in `i18n.js`.
- Styling: Reuse `.product-card`, `.product-glow`, `.product-icon`, `.product-tags`, and `.product-link` in `style.css`; use inline CSS custom properties only for per-card colors as existing cards do.

**New Interaction:**
- Implementation: Add a focused initializer function in `script.js`.
- Initialization: Call the new initializer from `init()` in `script.js`.
- Hooks: Add IDs, classes, or `data-*` attributes in `index.html`; style states in `style.css`.
- State: Keep state closure-scoped in `script.js` unless it must be public; avoid new globals beside the existing `window.i18n` pattern in `i18n.js`.

**New Translation Copy:**
- Markup hook: Use `data-i18n` in `index.html` for plain text.
- Trusted rich text: Use `data-i18n-html` in `index.html` only for static authored HTML snippets.
- Dictionary entries: Add the same key to `translations.en` and `translations.tr` in `i18n.js`.
- Persistence: Reuse `localStorage.lang` via `applyTranslations()` in `i18n.js`.

**New Static Asset:**
- Product icon: Place under `images/product-icons/`.
- Brand/browser icon: Place at repository root only when it is referenced by `index.html` or `site.webmanifest`.
- References: Use paths that match the current serving model: root-relative paths for manifest/icon metadata in `index.html`, and relative paths for page-local assets like `images/product-icons/*.png`.

**New Tests:**
- Existing location: Not detected.
- First test infrastructure: Add an explicit test directory and config only with the chosen runner; document it in future `.planning/codebase/TESTING.md`.
- Static smoke checks: Prefer tests that load `index.html`, assert required IDs/classes, and verify `i18n.js` keys match `data-i18n`/`data-i18n-html` usage.

## Special Directories

**`images/product-icons/`:**
- Purpose: Runtime image assets for product cards.
- Generated: No.
- Committed: Yes.

**`.planning/codebase/`:**
- Purpose: GSD-generated codebase mapping documents.
- Generated: Yes.
- Committed: Intended for repository documentation.

**`.claude/`:**
- Purpose: Local assistant/project tooling configuration.
- Generated: Tool-managed.
- Committed: Partially; `.claude/launch.json` is tracked, local settings are not part of the static site runtime.

**`.git/`:**
- Purpose: Version-control metadata.
- Generated: Git-managed.
- Committed: No; Git metadata is not committed as files.

---

*Structure analysis: 2026-07-28*
