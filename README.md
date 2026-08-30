# Beauty Care Cosmetology

Static website (Vercel) + Sanity CMS (integration pending).

```
/
  index.html          Public site
  content/site.json   Fallback content if the CMS is offline
  images/             Local photos
```

The site first tries Strapi at `http://localhost:1337`. If Strapi is not running, it uses `content/site.json`.

## Website locally

```bash
npm start
```

Open http://localhost:3000

## CMS integration

Strapi was removed. This repository will use Sanity CMS for hosted content (Vertel). Implementation notes and deployment steps will be added here once the Sanity project is provisioned.

## Vercel (website only)

Import the GitHub repo. Root = repository root. No build command. Do **not** deploy `my-cms` to Vercel.

Host Strapi separately, then set `STRAPI_URL` on the website to that Strapi URL. Add your Vercel domain to CORS in `my-cms/config/middlewares.ts` if it is not already `estetiikka.com`.
