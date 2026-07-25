# Gregory Li — Portfolio

Next.js site, statically exported and deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy target

This site is set up as a GitHub **user page**: the repo must be named exactly

```
gregoryzli.github.io
```

GitHub serves that from the domain root, so the live URL is
`https://gregoryzli.github.io` with no subpath. That's why `REPO_NAME` in
`next.config.mjs` is empty and why nothing needs a path prefix.

Naming the repo anything else (`portfolio`, say) makes it a *project page*
served from `https://gregoryzli.github.io/<repo>/`, which requires setting
`REPO_NAME` **and** `siteUrl` to match — otherwise assets and share previews
break.

## Before you deploy

1. **Repo name.** Create it as `gregoryzli.github.io` (see above).

2. **Check `lib/site.ts`.** `siteUrl` is `https://gregoryzli.github.io`, and
   the email / LinkedIn / GitHub links live there too. That one constant drives
   the canonical URL, social-share tags, sitemap, and JSON-LD, so a wrong value
   means broken link previews.

3. **Resume.** The file is `public/Resume.pdf`, and the contact link points at
   that exact name. **GitHub Pages is case-sensitive** — if you swap in a
   differently-cased filename (`resume.pdf`), update `components/Contact.tsx`
   to match, or the link will 404 in production while still working on macOS.

4. **Teammate repo links.** The SortaAI link in `data/projects.ts` points at a
   teammate's account (`lektphire`). If you fork it into your own account,
   update the `link` field.

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that builds and deploys automatically on every push to `main`.

One-time setup on GitHub:

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to **GitHub Actions**.
4. Push to `main` (or run the workflow manually from the Actions tab).

Your site will be live at **https://gregoryzli.github.io**.

## Editing content

- **Projects:** `data/projects.ts` — add, remove, or edit project entries and
  category descriptions here. Cards and section grouping update automatically.
  A category with one project renders a single full-width card; two or more
  render a 2-up grid.
- **Bio / hero:** `components/Terminal.tsx`
- **About / credentials / skills:** `components/About.tsx`
- **Contact:** `components/Contact.tsx`
- **Name, email, profile links:** `lib/site.ts`
- **Colors / fonts:** `tailwind.config.ts` and `app/layout.tsx`

## Social share image

`public/og.png` is what LinkedIn, Slack, and iMessage show when the link gets
shared. It's generated from `scripts/generate-og.mjs`:

```bash
npm run og
```

Re-run it and commit the PNG if you change the name or tagline on the card.

It's a committed PNG rather than Next's `opengraph-image` route on purpose:
that route emits an extensionless file, GitHub Pages serves it as
`application/octet-stream`, and social crawlers then refuse to render it.

## Notes

- **Hero animation** is CSS-only. The full text ships in the server-rendered
  HTML and is merely clipped, so there's no layout shift and it degrades
  cleanly with JS off. `prefers-reduced-motion` skips it.
- **Colors** are all at or above WCAG AA (4.5:1) against the background. Check
  any new text color before shipping — the original `faint` grey measured
  2.99:1 and was failing.
- **Phone number** is intentionally left off this public site — most people
  avoid publishing one on a page search engines index, to keep spam down.
  Email + LinkedIn are usually enough for recruiters. Add it back in
  `components/Contact.tsx` if you'd rather have it visible.
