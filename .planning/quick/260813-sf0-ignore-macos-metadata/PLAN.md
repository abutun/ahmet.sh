---
quick_id: 260813-sf0
slug: ignore-macos-metadata
status: in_progress
---

# Exclude local macOS metadata

## Objective

Keep Finder's local `.DS_Store` metadata out of the ahmet.sh website repository without changing any public website file.

## Scope

- Add a root `.gitignore` rule for `.DS_Store`.
- Do not add the existing local metadata file to Git.
- Confirm Git ignores it and the repository's tracked source remains unchanged.

## Success criteria

- `.DS_Store` is ignored.
- The commit contains only `.gitignore` and GSD quick-task records.
