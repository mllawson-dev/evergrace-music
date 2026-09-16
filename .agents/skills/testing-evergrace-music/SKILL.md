---
name: testing-evergrace
description: Run local browser checks for Evergrace Music routes, concept placeholders, responsive layouts, and demonstration audio.
---

## Local setup
- From the repo root, run `. "$HOME/.nvm/nvm.sh" && nvm use 22 && npm run dev -- --host 0.0.0.0`.
- Open the Vite URL printed at startup (normally http://localhost:5173).
- This app is a static React frontend: no backend, account, or login is required.

## UI testing
- Use View project notes in the disclosure bar to reach /concept. Resource links are at the bottom of that page.
- Artist cards on /artists lead to detail pages. Test All artists against /artists, not home.
- Demo streaming, merch, and ticket destinations should be native disabled buttons, not active placeholder anchors.
- Verify contact addresses are labeled fictional/inactive and have no mailto links.
- Check audio by clicking Play, observing elapsed time advance, and confirming Pause freezes it. Tracks are short original demos; verify actual media state rather than decorative equalizer animation alone. Browser automation may mute sound.
- Check desktop and narrow mobile viewport widths explicitly, supplementing visual checks with document scrollWidth comparisons.
- The style guide is intentionally outside the shared site layout; assess any site-wide disclosure requirement with this exception in mind.
- Local nested-route reloads do not validate production host rewrite configuration.

## Devin Secrets Needed
None for local testing.
