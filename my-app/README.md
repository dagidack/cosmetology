Local scaffold of a Next.js app and Sanity schema (minimal).

Next steps (locally):

1. cd my-app
2. npm install
3. npx next dev

To connect Sanity and Vercel:

- Run `vercel login` and `vercel link` from this folder (interactive).
- Run `vercel env pull .env.local` to fetch environment variables set in Vercel.
- Run `npm create sanity@latest -- --dataset production --typescript --template clean` if you want the full Sanity Studio scaffold, and answer prompts as:
  - Add configuration files for a Sanity project in this Next.js folder: Yes
  - Embed Sanity Studio?: Yes
  - Add project ID and dataset to .env.local?: No (you should have pulled env from Vercel)

After creating the Studio, run `npm run dev` and visit http://localhost:3000 to see the app and http://localhost:3000/studio for the embedded Sanity Studio.
