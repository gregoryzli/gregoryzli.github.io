// Single source of truth for anything that needs to know where the site lives.
//
// siteUrl must be a full absolute origin, because metadata, the sitemap, and
// JSON-LD all need absolute URLs — they can't be relative. No trailing slash.
// If you move to a custom domain, change it here.
export const siteUrl = 'https://gregoryzli.github.io';

// next.config.mjs exposes the basePath so plain <a href> and <img src> can be
// prefixed by hand. Next only rewrites its own <Link>/next-font assets.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Prefix a path in `public/` with the deploy subpath. */
export const asset = (path: string) =>
  `${basePath}/${path.replace(/^\//, '')}`;

/** Site root. A bare '/' would leave the subpath on a project-page deploy. */
export const home = `${basePath}/`;

export const author = {
  name: 'Gregory Li',
  email: 'gregory.li.ziyuan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gregoryliziyuan',
  github: 'https://github.com/gregoryzli',
  school: 'University of California, Los Angeles',
  tagline:
    'Computer Science student at UCLA working across full-stack, security, game dev, and neurosymbolic AI.',
};
