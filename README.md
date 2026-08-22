# Beauty Care Cosmetology

Static site for Beauty Care Cosmetology in Rauma, Finland, with **Decap CMS** (Git-based, works on Vercel).

## Project layout

```
/
  index.html              Site
  admin/                  Decap CMS editor  →  /admin
  content/site.json       CMS content (services + gallery)
  images/                 Uploaded photos
  api/auth                GitHub login for the CMS
  my-cms/                 Optional Strapi app (not deployed to Vercel)
```

## Run locally

Site:

```bash
npm start
```

Open http://localhost:3000

CMS on your machine (optional):

```bash
npm run cms
```

Then open http://localhost:3000/admin  
Local editing uses `local_backend: true` in `admin/config.yml`.

## Deploy to GitHub + Vercel

1. Create a GitHub repo (this project is already set to `dagidack/cosmetology` in `admin/config.yml` — change that if the repo name differs).
2. Push `main`.
3. In [Vercel](https://vercel.com), **Import** the GitHub repo.
4. Root directory: repository root. Framework: Other. No build command.
5. Add environment variables:
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`
6. Deploy.

### GitHub OAuth App (required for /admin login)

1. GitHub → Settings → Developer settings → **OAuth Apps** → New.
Homepage URL: `https://www.estetiikka.com`
3. Authorization callback URL: `https://www.estetiikka.com/api/auth/callback`
4. Copy Client ID and Secret into Vercel env vars and redeploy.

After deploy, edit content at `https://www.estetiikka.com/admin`. Saving creates a commit on `main`; Vercel rebuilds the site.

## Strapi (`my-cms`)

Strapi is a Node CMS and **cannot run on Vercel**. It is ignored by Vercel. Use it only on a VPS / Railway / Render / Strapi Cloud if you need it later:

```bash
cd my-cms
npm run develop
```

Never commit `my-cms/.env`.

## CMS URLs

- Public site: `/`
- Editor: `/admin`
- Content file: `/content/site.json`
