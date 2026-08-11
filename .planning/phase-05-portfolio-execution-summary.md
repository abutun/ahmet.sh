# Phase 05 Portfolio Execution Summary — ahmet.sh

## Outcome

Plan `05-13` completed in `/Users/ahmet/Documents/Workspaces/Buhane/ahmet.sh` on 2026-08-11. The personal site now presents Ahmet Bütün as a Person, states the factual founder relationship to Buhane Bilgi Teknolojileri, and routes visitors through six registry-approved examples of selected work while leaving the complete commercial portfolio on Buhane.

The site remains one canonical document at `https://ahmet.sh/`. English and Turkish are client-side interface states; no false Turkish route or `hreflang` was added.

## Repository-local GSD execution

- Local `AGENTS.md`: absent.
- Local planning state read from `.planning/STATE.md` plus the codebase maps.
- `gsd-tools query init.quick --validate` exited `0` and reported `roadmap_exists: false`; it created no files. Execution therefore followed the approved parent `05-13` repository-local contract, with per-task commits and scoped staging.
- Starting branch: `main`.
- Starting HEAD: `b131ec4` (`origin/main`).
- Starting status: only `?? .DS_Store`.
- No push or deployment was performed.

## Delivered changes

| Commit | Scope |
| --- | --- |
| `5e80d4c` | Added page-specific title/description/canonical/social metadata, WebSite/Person/Organization JSON-LD, verified LinkedIn identity, visible founder relationship, and synchronized EN/TR identity copy. |
| `b040b1d` | Replaced the larger product directory with the approved selected-work set and localized full-portfolio CTA. |
| `d7b1fb2` | Kept the factual 2001 start year and portfolio counts stable by removing content-changing counter/year animations; versioned changed static assets. |
| `f212d0d` | Added an allow-all robots policy and a one-URL canonical sitemap without `lastmod` or fake locale routes. |

Scoped source paths changed before this summary:

- `index.html`
- `i18n.js`
- `style.css`
- `script.js`
- `robots.txt`
- `sitemap.xml`

## Selected-work registry contract

| ID | Display name | Preferred origin |
| --- | --- | --- |
| `vynix` | Vynix | `https://vynix.app/` |
| `moodjot` | MoodJot | `https://moodjot.app/` |
| `u2m` | U2M URL Shortener | `https://u2m.io/` |
| `lastimo` | Lastimo | `https://lastimo.app/` |
| `swipe-slip` | Swipe Slip | `https://swipeslip.app/` |
| `gridzle` | Gridzle | `https://gridzle.app/` |

All retained raster icons resolve under `images/product-icons/`; U2M keeps its local inline SVG. The complete-portfolio CTA resolves to `https://buhane.com.tr/products/` in English and `https://buhane.com.tr/tr/urunler/` in Turkish. Product sites are contextual work links, not Person or Organization `sameAs` identities.

## Verification evidence

| Check | Exit/result |
| --- | --- |
| Plan Task 1/2 shell checks (`test`, `rg`, local icon existence) | `0` |
| `node --check i18n.js` and `node --check script.js` | `0` |
| Custom static audit of title, H1, description, canonical, OG URL, JSON-LD cross-references, six cards, local assets, `_blank` rel values, robots, and XML sitemap | `0` |
| Local HTTP checks for `/`, `/robots.txt`, and `/sitemap.xml` | `0`; expected content returned |
| `git diff --check` | `0` |
| Parent central source validator for `ahmet-sh` | `0`; `high=0 medium=0 low=0 info=0` |
| Independent parent validator rerun against `f212d0d` | PASS; one indexable route and Person/Organization/WebSite schema |

Central command:

```sh
cd /Users/ahmet/Documents/Workspaces/Buhane/buhane.com.tr
python3 scripts/validate_portfolio.py --manifest .planning/portfolio-sites.json --mode source --site ahmet-sh --report /tmp/buhane-05-13-ahmet.json
```

Browser verification used the repository's static root at `http://127.0.0.1:3847/` with cache disabled. English and Turkish states rendered the same six IDs and stable values `2001`, `6`, `2`, and `11`; titles, descriptions, founder/company copy, accessible language label, and localized full-portfolio destinations switched correctly. No console warning/error was observed. The preview server and browser tab were closed after verification.

## Preserved unrelated dirt

`.DS_Store` was never edited, staged, deleted, ignored, or committed.

- Starting status: `?? .DS_Store`
- Final pre-summary status: `?? .DS_Store`
- Starting SHA-256: `2a7cfd3fb555381cf70651c7a44ad09645875ed050501186c7773f4e015fee6d`
- Final pre-summary SHA-256: `2a7cfd3fb555381cf70651c7a44ad09645875ed050501186c7773f4e015fee6d`
- Tracked/staged state: untracked and unstaged throughout

After committing this execution summary, the intended repository status is exactly the preserved `?? .DS_Store` entry.
