# Personal Site Agent Guide

A single-page personal site, server-rendered with Remix. Commands are the `package.json` scripts; CI (`.github/workflows/ci.yml`) runs `lint`, `format:check`, `type-check` and `test`.

## Building Features

Refer to ./.agents/skills/remix/SKILL.md for the Remix mental model and how to find guides and API READMEs through `node_modules/remix/INDEX.md`.

## Layout

- `app/routes.ts` defines the route contract; `app/router.ts` wires routes to controllers and installs the static and render middleware
- Put top-level route actions in `app/actions/controller.tsx`; add `app/actions/<route-key>/controller.tsx` for nested route maps
- `app/actions/document.tsx` renders `<html>`/`<head>` for every page from a `PageMeta` value (title, description, path): add a page's SEO and social tags there, not in the page
- `app/actions/home/` holds the home page's sections
- `app/data/` holds site content. Experience entries are written as `JobEntry` with `YYYY-MM` role dates; `defineJob` derives the display periods and current status
- `app/ui/` holds shared styling: `theme.ts` (colour palettes and typed `theme.*` token references; use these in place of raw `var(--…)` strings), `timeline.tsx`, `page-layout.tsx`, `styles.ts`
- Root `public/` contains static files served unchanged from the app root

## No browser runtime

Pages are pure server-rendered HTML: there is no asset server and no client entry, so components never hydrate and event handlers never run. Adding interactivity means first restoring a script entry through `remix/assets` (see the Remix interactivity guide).
