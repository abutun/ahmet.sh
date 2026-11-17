# Personal Wallet Incident Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Publish a privacy-safe personal incident and NFT recovery page on ahmet.sh.

**Architecture:** Existing static hosting, shared visual tokens and English/Turkish content. A standalone directory index works without a backend or wallet. Raw reports remain outside the repository and web root.

**Tech Stack:** HTML, CSS, browser JavaScript modules; dependency-free Node tests.

**Spec:** User explicitly moved publication to ahmet.sh. Incident and initial filing 31 October 2026; supplemental filing 5 November 2026. Two reported stolen Suited Apes: Robinhood contract `0xe638f58c87258ece6c0eddc46f70327663635c69`, IDs 1648 and 1858. Publish the complainant’s account, not an FBI finding; omit contact details, signatures, tracking identifiers, private correspondence and original documents.

## Global Constraints
- Canonical URL: https://ahmet.sh/wallet-incident/
- English/Turkish, shared home language preference; English remains readable without JavaScript.
- Exact full OpenSea links; original images served locally.
- No wallet connection, donations, payment instructions or accusations against later holders.
- Add a homepage footer link and sitemap entry; no changes to Mintropolis.

## Review Focus
- Translated copy must preserve attribution and not claim confirmed investigation or guilt.
- Private identifiers must be absent from source, metadata, scripts and delivered assets.
- Full NFT links must remain usable without mobile overflow.
- Language switching must not replace the incident title with the homepage title.
- Deploy only the reviewed file manifest, retaining unrelated site content.

### Task 1: Public page and delivery

**Files:** Create `wallet-incident/index.html`, `incident-v1.css`, `incident-v1.js`, `copy-v1.js`, and two `assets/suited-ape-*-v1.png` files. Modify `index.html`, `i18n.js`, `sitemap.xml`, and README. Add `tests/wallet-incident.test.mjs`.

- [ ] Add failing Node tests for public identities, translated copy completeness, privacy boundary and discoverability.
- [ ] Run the tests and confirm missing page fails.
- [ ] Implement the static page and safe text-only language switch, using the site’s existing palette and typography.
- [ ] Run tests and private-token scan; check desktop/mobile and no-JavaScript content.
- [ ] Obtain a fresh privacy/correctness review, resolve material findings, and commit.
- [ ] Back up exact live files, transfer a hash-bound manifest to a private stage, publish new assets before entry links, and verify public bytes and UI.
- [ ] Push the reviewed commit to the existing main branch without force; preserve repository CI configuration and Mintropolis runtime.
