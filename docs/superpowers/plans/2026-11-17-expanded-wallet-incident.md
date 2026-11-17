# Expanded incident record and NFT register

> **For agentic workers:** Use superpowers:executing-plans for inline implementation and requesting-code-review for a fresh whole-change review.

**Goal:** Expand the public account on ahmet.sh and link a separate searchable register of every individually documented NFT purchase in the incident records.

**Architecture:** Static English HTML with Turkish enhancement, existing site styling, a strictly allowlisted public JSON register and reproducible HTML generator. No private source document is deployed.

**Spec:** User requests detailed coverage of approximately 189 affected NFTs and a separate linked list of purchased NFTs. Available itemized schedules reconcile to 109 distinct assets (28 Ethereum, 81 Robinhood; 33 collections). The approximately 189 figure remains owner-reported; 87 separately mentioned historical receipts are not confirmed thefts. Ethereum purchase logs are locally verified; Robinhood sales are retained marketplace records with receipt verification outstanding.

## Global constraints
- Keep original artwork and full public asset/transaction links; no contact directory or present-owner assertions.
- Preserve IC3 attribution, privacy exclusions, dated OpenSea restriction wording and uncertainty about the signing mechanism.
- Static content remains readable without JavaScript. EN/TR share the site's language preference.
- Publish only explicit changed/new public files to existing hosting; back up changed files, compare live preconditions, retain TLS/Nginx and unrelated content.

## Review focus
- Repeated CSV exports must not inflate counts; identity includes chain, contract and decimal token string.
- Exact token/contract searches, empty results and reset must work without mobile overflow.
- Both languages preserve the distinction between reported theft, marketplace records and independent verification.
- No private references, contacts, source paths, raw reports or counterparties enter the public register.
- Browser and source data agree on all 109 items, evidence levels and five transaction groups.

## Task 1: Expanded public account and full register
- [x] Add failing tests for register counts, strict public schema, identities, canonical links, evidence levels, static completeness and translations.
- [x] Build sanitized JSON from the reconciled source privately; add generator, static register, report copy and progressive search.
- [x] Run Node tests, source reconciliation, private-token scan and desktop/mobile browser checks.
- [x] Review the entire branch independently, fix substantive findings and commit.
- [x] Publish a sealed file manifest with backups and atomic writes; verify origin/public bytes and browser behavior; push main without force.
