# DJR Labs

A static Next.js browser IDE deployed to [djrlabs.fun](https://djrlabs.fun) with GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000. The editor runs JavaScript in a sandboxed preview and saves drafts to local storage.

## Deployment

Every push to `main` builds the static Next.js export and publishes it to `gh-pages` through GitHub Actions. The custom domain is declared in `public/CNAME`.

For the first deployment, enable GitHub Pages in **Settings → Pages**, choose **Deploy from a branch**, and select `gh-pages` / `/ (root)`. Add these DNS A records at your DNS provider:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Then return to Pages settings, confirm `djrlabs.fun` as the custom domain, and enable HTTPS after the certificate becomes available.
