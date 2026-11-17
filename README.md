# Ahmet Bütün Portfolio

Personal portfolio and product showcase for Ahmet Bütün, founder of Buhane Information Technologies. The site presents software architecture work, AI product launches, Buhane services, and direct contact paths in a fast static single-page experience.

[Live site](https://ahmet.sh/) | [Buhane IT](https://buhane.com.tr/) | [Apps](https://apps.ahmet.sh/)

## Snapshot

- 24+ years of engineering experience
- 13 live products
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
| Glow Spin | Game | [glowspin.app](https://glowspin.app/) | Color-rhythm arcade game with color matching, 500 levels, and leaderboard play. |
| Swipe Slip | Game | [swipeslip.app](https://swipeslip.app/) | Hyper-casual tunnel runner with 500 levels, 8 difficulty tiers, and power-ups. |
| Gridzle | Puzzle | [gridzle.app](https://gridzle.app/) | Counts-first logic puzzle with 250 hand-crafted levels across 5 difficulty tiers. |
| AstralPost | AI reflection | [astralpost.app](https://astralpost.app/) | AI-powered cosmic journaling app for anonymous expression and poetic reflections. |
| RULR | Fictional world | [rulr.lol](https://rulr.lol/) | Public web experience for exploring the fictional RULR Countries world, with country status, fictional rivalries, activity, and leaderboard surfaces. |
| Mintropolis | NFT atlas | [mintropolis.io](https://mintropolis.io/) | Wallet-native atlas and community layer for discovering city Embassies, collecting free Passport stamps, and following official NFT drops. |
| LeaseLore | Rental intelligence | [leaselore.com](https://leaselore.com/) | Address-level rental decision app for checking resident reviews, home scores, red flags, and score confidence before signing a lease. |

## Technology

This repository is intentionally simple:

- `index.html` defines the page structure, product ledger, metadata, navigation, and outbound links.
- `style.css` owns the visual system, responsive layout, restrained motion, and product ledger styling.
- `script.js` adds scroll state, section reveal, smooth anchors, mobile menu behavior, and interaction polish.
- `i18n.js` provides English and Turkish translations through static dictionaries and `data-i18n` hooks.
- `images/product-icons/` stores the product icons used by the product ledger.

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

## Personal wallet incident record

`/wallet-incident/` contains an English/Turkish public account, the two reported
Suited Ape item links and an IC3 complaint summary. Its standalone language module
shares the homepage's language preference without loading homepage metadata.
English content remains readable without JavaScript. Private reports and tracking
identifiers are not part of the site; only deliberately authored public facts and
the original two NFT images belong in this directory.

Run the dependency-free checks with Node.js 22 or newer:

```bash
node --test tests/wallet-incident.test.mjs
```

Publication must copy only the reviewed page assets and the updated homepage,
language file and sitemap. Do not deploy `.git`, tests, working notes or source
complaint files into the public web root.

## Product content updates

When adding or changing a product:

1. Update the product row in `index.html`.
2. Add or update the matching English and Turkish strings in `i18n.js`.
3. Add the product icon under `images/product-icons/` when the card uses an image.
4. Update the hero and about statistics if the product count or AI model count changes.
