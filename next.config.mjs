/** @type {import('next').NextConfig} */

// This site deploys as a GitHub *user page* — a repo named literally
// gregoryzli.github.io — which GitHub serves from the domain root. So there's
// no subpath and REPO_NAME stays empty.
//
// Only set it if you ever move to a project page
// (https://<user>.github.io/<repo>), where Pages serves from /<repo>/ and Next
// has to know that prefix at build time.
const REPO_NAME = '';

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd && REPO_NAME ? `/${REPO_NAME}` : '';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  // Next rewrites its own asset URLs for basePath, but not plain <a href> or
  // <img src> pointing into public/. Expose the prefix so lib/site.ts can.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true, // required for static export, no image optimization server
  },
  trailingSlash: true, // avoids GitHub Pages 404s on nested routes
};

export default nextConfig;
