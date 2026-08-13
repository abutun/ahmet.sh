---
quick_id: 260813-sf0
slug: ignore-macos-metadata
status: complete
source_commit: 6b830cc
completed: 2026-08-13
---

# Local macOS metadata exclusion

## Result

Added the standard root ignore rule so Finder metadata remains local and cannot enter future website commits.

## Verification

- `git check-ignore -v .DS_Store` resolves to the root `.gitignore` rule.
- The existing `.DS_Store` file was not staged.
