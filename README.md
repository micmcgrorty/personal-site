# Personal Site

The source for [micmcgrorty.dev](https://www.micmcgrorty.dev): a single-page site with Michael McGrorty's profile, work experience and contact links.

## Tech stack

- **[Remix 3](https://github.com/remix-run/remix)** (the `remix` package with `remix/*` imports). This is not Remix 1/2 or React Router: routes are declared in code, there is no file-based routing, and there is no build step.
- **Server-rendered only.** Every page is plain HTML and the site ships no client-side JavaScript.
- **TypeScript**, run directly by Node through `--import remix/node-tsx`.
- **[oxlint](https://oxc.rs/docs/guide/usage/linter)** for linting and **[oxfmt](https://oxc.rs/docs/guide/usage/formatter)** for formatting.
- **`remix test`** for tests, with `remix/assert` for assertions.

## Getting started

You need **Node.js 24.3 or later**.

```sh
npm ci
npm run dev
```

The site is served at <http://localhost:44100>. Set `PORT` to use a different port.

## Scripts

| Script                 | What it does                                                   |
| ---------------------- | -------------------------------------------------------------- |
| `npm run dev`          | Starts the server and restarts it when a file changes          |
| `npm run start`        | Starts the server with `NODE_ENV=production`                   |
| `npm run lint`         | Lints with oxlint                                              |
| `npm run lint:fix`     | Lints and applies automatic fixes                              |
| `npm run format`       | Formats every file with oxfmt                                  |
| `npm run format:check` | Checks formatting without changing files                       |
| `npm run type-check`   | Type-checks with `tsc --noEmit`                                |
| `npm test`             | Runs every `*.test.ts` and `*.test.tsx` file with `remix test` |

## Project structure

```
server.ts               Node HTTP server; listens on PORT (default 44100)
app/
  routes.ts             Route contract, used for type-safe hrefs
  router.ts             Wires routes to controllers; installs static-file and render middleware
  actions/
    controller.tsx      Top-level route actions
    document.tsx        <html>/<head> for every page: title, SEO and social tags, site-wide styles
    home-page.tsx       The home page
    home/               The home page's sections: masthead, experience, footer
  data/                 Site content: profile, experience, social links, site details
  ui/                   Shared styling: theme tokens, timeline, page layout, fonts, icons
public/                 Static files served unchanged from the site root
```

Tests sit next to the code they cover, for example `app/data/experience.test.ts`.

## Common tasks

### Updating content

All content lives in `app/data/`:

- `profile.ts`: name, job title, email, bio, and the description used in search results and link previews.
- `experience.ts`: jobs. Each job is a `JobEntry` with its roles listed **newest first** and dates written as `YYYY-MM`. Leave out `end` on a role that is still current. `defineJob` works out the display periods (e.g. "September 2025 – Present") and whether the job is current. Role periods are only shown when a job has more than one role.
- `socials.ts`: social links. Each icon is defined in `app/ui/icons.tsx`.
- `site.ts`: the site URL and the link-preview image.

### Adding a page

1. Add the route to `app/routes.ts`.
2. Add an action for it in `app/actions/controller.tsx`. For a nested route map, add `app/actions/<route-key>/controller.tsx`.
3. Wrap the page in `<Document meta={…}>`, passing a `PageMeta` (title, description and path). `Document` renders the page's SEO and social tags, so don't add them in the page itself.

### Styling

Colours are defined in `app/ui/theme.ts` as light, dark and print palettes, chosen with `prefers-color-scheme` and `@media print`. In styles, use the typed token references (`theme.text`, `theme.accent`, …) rather than raw `var(--…)` strings. Site-wide rules (fonts, resets, base type) are in `SITE_STYLES` in `app/actions/document.tsx`.

### Static files

Anything in `public/` is served from the site root: `public/photo.webp` is served as `/photo.webp`. This includes the favicon, the link-preview image (`og-image.png`, 1200×630) and the self-hosted fonts (Bricolage Grotesque and JetBrains Mono, both under the SIL Open Font License; see `public/fonts/*-OFL.txt`).

### Adding interactivity

Components never hydrate, so event handlers never run in the browser. Before adding client-side behaviour, set up a script entry through `remix/assets`; the Remix interactivity guide in `node_modules/remix/guides` explains how.

## Testing and CI

GitHub Actions (`.github/workflows/ci.yml`) runs on every pull request with Node 24 and checks:

```sh
npm run lint
npm run format:check
npm run type-check
npm test
```

Run the same four commands locally before opening a PR.

## Working with AI agents

[`AGENTS.md`](AGENTS.md) is the guide for coding agents working in this repo. [`.agents/skills/remix/SKILL.md`](.agents/skills/remix/SKILL.md) explains the Remix 3 mental model and how to find the installed docs through `node_modules/remix/INDEX.md`. That index is also the best starting point for people unfamiliar with Remix 3.
