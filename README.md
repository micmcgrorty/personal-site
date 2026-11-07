# Personal Site

My personal site, built in Remix.

## Shape

- `app/routes.ts` defines the shared route contract used for type-safe hrefs.
- `app/router.ts` wires routes to controllers and installs the static-file and render middleware.
- `app/actions/controller.tsx` owns the top-level route actions.
- `app/actions/document.tsx` renders the HTML document and the page's metadata; `app/actions/home-page.tsx` and `app/actions/home/` render the home page.
- `app/data/` holds the site's content: profile, experience and social links.
- `app/ui/` holds shared styling: theme tokens, the experience timeline, page layout.
- Root `public/` contains static files served unchanged from the app root.

The site is server-rendered only; it ships no client-side JavaScript.

## Commands

```sh
npm i
npm run dev
npm run start
npm run lint
npm run lint:fix
npm run format
npm run format:check
npm run type-check
npm run test
```
