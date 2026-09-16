# Portfolio upgrade

This revision strengthens Evergrace Music as a self-initiated Brand System
portfolio project while preserving the approved identity and artwork.

## Added

- Site-wide self-initiated concept disclosure
- Portfolio-facing project-notes page at `/concept`
- Direct links to the roster, press assets, and living design system
- SEO metadata describing the work as a concept
- Vercel fallback routing for direct visits to nested application routes
- Skip navigation and larger touch targets
- Explicit image dimensions, loading behavior, and decoding hints

## Corrected

- Artist-page “All artists” navigation now returns to `/artists`
- Placeholder streaming, merchandise, and ticket destinations are visibly
  disabled instead of behaving like live links
- Fictional contact details are presented as inactive demonstration content
- Dormant AlbumCover and TrackList type errors no longer block production builds

## Verification

- `npm run build`
- `npm run lint`
- Visual checks at 375px, 1440px, and 1920px widths
