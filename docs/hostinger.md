# Hostinger deployment

The first hosted version is intended to run as a static site. This works well for a temporary Hostinger URL while the product is being tested.

## Build

From the repository root:

```bash
npm install
npm run build --workspace apps/web
```

The deployable website is generated in `apps/web/dist`.

## Upload

In Hostinger File Manager, open the temporary website's `public_html` directory and upload the contents of `apps/web/dist` (including `.htaccess`). Do not upload the `dist` folder itself as an extra nested directory.

The temporary Hostinger URL can then be used to review the interface before connecting a domain.

## Current limitation

This MVP uses mock data, so the static frontend works without a backend. Later, deploy the Express API on a Hostinger Node.js-capable plan or VPS and set `VITE_API_URL` to its HTTPS URL before building. Database, integrations, and authentication are intentionally future phases.
