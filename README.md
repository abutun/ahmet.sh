# Ahmet Bütün Portfolio

Personal portfolio and product showcase for Ahmet Bütün, founder of Buhane Information Technologies. The site presents software architecture work, AI product launches, Buhane services, and direct contact paths in a fast static single-page experience.

[Live site](https://ahmet.sh/) | [Buhane IT](https://buhane.com.tr/) | [Apps](https://apps.ahmet.sh/)

## Snapshot

- 24+ years of engineering experience
- 10 live products
- 120+ AI models integrated across products
- 10K+ active users
- Bilingual content: English and Turkish
- Static frontend with no build step

## Products

| Product | Category | Link | Summary |
|---|---|---|---|
| TheCosmicMeta.com | AI platform | [thecosmicmeta.com](https://thecosmicmeta.com/) | AI-powered technology news and content platform with curated insight on emerging digital trends. |
| Vynix | Creative AI | [vynix.app](https://vynix.app/) | Creative studio for generating images, videos, and audio with 120+ AI models. |
| MoodJot | Wellness | [moodjot.app](https://moodjot.app/) | Emotional wellness journal with AI insights, mood tracking, patterns, and analytics. |
| U2M.io | SaaS tool | [u2m.io](https://u2m.io/) | Smart URL shortening with analytics, QR codes, link management, and an API. |
| HiveDue | Community SaaS | [hivedue.com](https://hivedue.com/) | Community finance management for dues, payments, announcements, reports, and documents. |
| Lastimo | Routine tracker | [lastimo.app](https://lastimo.app/) | Private tracker for remembering the last time something happened, without streaks or goals. |
| Glow Spin | Game | [glowspin.app](https://glowspin.app/) | Neon rhythm arcade game with color matching, 500 levels, and leaderboard play. |
| Swipe Slip | Game | [swipeslip.app](https://swipeslip.app/) | Hyper-casual tunnel runner with 500 levels, 8 difficulty tiers, and power-ups. |
| Gridzle | Puzzle | [gridzle.app](https://gridzle.app/) | Counts-first logic puzzle with 250 hand-crafted levels across 5 difficulty tiers. |
| AstralPost | AI reflection | [astralpost.app](https://astralpost.app/) | AI-powered cosmic journaling app for anonymous expression and poetic reflections. |

## Technology

This repository is intentionally simple:

- `index.html` defines the page structure, product cards, metadata, navigation, and outbound links.
- `style.css` owns the visual system, responsive layout, animations, and product card styling.
- `script.js` adds particles, scroll state, counters, tilt effects, mobile menu behavior, and interaction polish.
- `i18n.js` provides English and Turkish translations through static dictionaries and `data-i18n` hooks.
- `images/product-icons/` stores the product icons used by the portfolio grid.

There is no bundler, backend, dependency install, or build step. The repository root is the static web root.

## Local Preview

Open `index.html` directly in a browser, or serve the directory with any static file server:

```bash
python3 -m http.server 3847
```

Then open `http://localhost:3847`.

## Deployment Notes

Any static hosting provider can serve this project. Keep root-relative assets such as `/site.webmanifest` available from the repository root, and keep `i18n.js` loaded before `script.js`.

## Content Updates

When adding or changing a product:

1. Update the product card in `index.html`.
2. Add or update the matching English and Turkish strings in `i18n.js`.
3. Add the product icon under `images/product-icons/` when the card uses an image.
4. Update the hero and about statistics if the product count or AI model count changes.
