# Evergrace Music

A coded design system and site for Evergrace Music — a fictional Christian
music label spanning worship, rock, and country acts. Built as a portfolio
piece demonstrating a token-driven design system carried all the way into a
working interface, not just a static style guide.

**Tagline:** One Faith. Every Voice.

## Stack

- Vite + React + TypeScript
- React Router v7
- Tailwind v4 (utilities only, no preflight — see `src/styles/global.css`
  for why) aliased to the project's own `--eg-` design tokens
- Self-hosted fonts via `@fontsource` (Bricolage Grotesque, Karla)

## Structure

- `src/styles/tokens.css` — every design token: color, type scale, spacing,
  motion. Single source of truth; Tailwind utilities and plain CSS both
  read from these, nothing is duplicated.
- `src/components/` — the coded component library (Button, GenreBadge,
  ArtistCard, ArtistPhoto, TourDateList, StreamingMerchButtons, MediaPlayer,
  SiteHeader/SiteLayout).
- `src/pages/` — Home, Roster (`/artists`), an artist page
  (`/artists/:artistId`), Tour (`/tour`).
- `src/pages/StyleGuide.tsx` (`/style-guide`) — living, functional
  documentation of every token and component. Deliberately **not** linked
  from the site's real navigation — it's dev-facing reference, not part of
  the public IA.
- `src/data/sampleData.ts` — fictional roster and tour data. See a note on
  why this project doesn't use real artists' names or photos: real Christian
  radio-network artist directories were considered and rejected, since
  presenting real, currently active musicians as signed to a fictional label
  would misrepresent them.

## Design system highlights

- **Genre accent system** — worship (purple), rock (red), and country (tan)
  each get their own accent pair, layered on a constant gold/charcoal core.
  One typeface pairing (Bricolage Grotesque + Karla) flexes across all three
  rather than each genre getting its own type treatment, so the accent
  colors do the differentiating work.
- **Motion tokens** (`--eg-motion-*`, `--eg-ease-*`) — every transition and
  animation site-wide reads from these rather than one-off durations.
  Decorative motion (hero light rays, glow pulses, the equalizer) respects
  `prefers-reduced-motion`.
- **ArtistPhoto fallback** — artists without a real photo get a designed
  genre-tinted gradient with that genre's symbol watermarked in, rather than
  a placeholder gray box.

## Running locally

```
npm install
npm run dev
```

## Building

```
npm run build
```
