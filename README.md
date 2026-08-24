# Beauty Care Cosmetology

Static website (Vercel) + **Strapi** CMS (`my-cms/`). Decap CMS has been removed.

```
/
  index.html          Public site
  content/site.json   Fallback content if Strapi is offline
  images/             Local photos
  my-cms/             Strapi (prices, gallery, photos)
```

The site first tries Strapi at `http://localhost:1337`. If Strapi is not running, it uses `content/site.json`.

## Website locally

```bash
npm start
```

Open http://localhost:3000

## Strapi locally

Strapi is a Node server. It **cannot** run on Vercel. Run it on your computer, then later on Railway, Render, Fly.io, a VPS, or [Strapi Cloud](https://cloud.strapi.io).

### 1. Node.js

Use **Node 20, 22, or 24** (not older). Check with `node -v`.

### 2. Install and create `.env`

```bash
cd my-cms
npm install
cp .env.example .env
```

Put real secrets in `.env` (each command prints one value; paste four different values into `APP_KEYS`, comma-separated):

```bash
openssl rand -base64 32
```

You need:

- `APP_KEYS` — four values, comma-separated
- `API_TOKEN_SALT`
- `ADMIN_JWT_SECRET`
- `TRANSFER_TOKEN_SALT`
- `JWT_SECRET`
- `ENCRYPTION_KEY`

Leave `HOST=0.0.0.0` and `PORT=1337`.

### 3. Start Strapi

```bash
npm run develop
```

First start can take a few minutes (it builds the admin UI).

Then open:

- Admin: http://localhost:1337/admin  
- API: http://localhost:1337/api

Create your admin email and password on the first visit.

### 4. Allow the website to read content

In Strapi admin:

1. **Settings → Users & Permissions → Roles → Public**
2. Enable **find** and **findOne** for:
   - Service
   - Gallery-item
   - Site-setting
3. Under **Upload**, enable **find** and **findOne** (so photos can be loaded)
4. Save

### 5. Add content

- **Service** — price list (category, titles, descriptions, price, photo, “featured” for the home page)
- **Gallery item** — gallery photos
- **Site settings** (single type) — hero photo and about photo

Publish each entry. The website only shows **published** items.

### 6. Open the site while Strapi is running

Keep `npm run develop` running in `my-cms`, and `npm start` in the project root. Reload http://localhost:3000 — prices and photos come from Strapi.

To point the live site at a hosted Strapi later, set in `index.html`:

```js
window.STRAPI_URL = 'https://your-strapi-host';
```

before the main script, or change the `STRAPI_URL` constant.

## Vercel (website only)

Import the GitHub repo. Root = repository root. No build command. Do **not** deploy `my-cms` to Vercel.

Host Strapi separately, then set `STRAPI_URL` on the website to that Strapi URL. Add your Vercel domain to CORS in `my-cms/config/middlewares.ts` if it is not already `estetiikka.com`.
