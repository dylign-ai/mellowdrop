# Mellowdrop

An English supplement brand concept with pouches, individual stick packs, and boxed sets. Built with React, TypeScript, and Vinext.

## Local development

Requires Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Page content lives in `app/page.tsx`, styles in `app/globals.css`, and product images in `public/images/`.

## GitHub Pages

Website: https://tobenext.github.io/

Push to `main` to build and publish automatically through `.github/workflows/pages.yml`. The workflow can also be run manually from GitHub Actions. Repository Settings → Pages → Source must be **GitHub Actions**.

```sh
npm run build:pages
```

The Pages build exports HTML, CSS, JavaScript, and images to `dist/client/`. Only that directory is published. It does not need a running server or any deployment secrets. This is an account website, so it is served at the domain root without a repository-name prefix.

The default `npm run build` retains the existing Sites/Cloudflare build. `GITHUB_PAGES=true` enables static export and skips the server hosting plugins for Pages.

## Product status

Mellowdrop is a brand concept. Product images and formats are illustrative, and no checkout or order collection is enabled.
