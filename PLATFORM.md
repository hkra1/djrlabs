# DJRLABS Platform Standards

This document captures the higher-level platform standards and practices used for the DJRLABS portfolio site.

## Scope
The site is designed as a fast, secure, static portfolio for GitHub Pages. It intentionally minimizes runtime complexity and keeps the attack surface small.

## Security practices
- Static export only; no server-side runtime.
- No secrets or credentials checked into version control.
- `public/robots.txt` and `public/sitemap.xml` are used for crawlability.
- External links open in a new tab with `rel="noopener noreferrer"`.
- Dependency updates are handled with GitHub Dependabot.
- Contact form uses FormSubmit (no server secrets). Preferred long-term: custom-domain inbox via Forward Email or Cloudflare Email Routing.
- Cookie consent stores only an essential preference in `localStorage` — no tracking cookies.

## Performance practices
- Minimal JavaScript footprint.
- Static export for efficient GitHub Pages delivery.
- Responsive, mobile-first layout.
- CSS-driven visuals and lightweight design tokens.
- No unnecessary media dependencies by default.
- Caching: GitHub Pages applies edge caching (`Cache-Control: max-age=600` by default). For stronger immutable asset caching and custom headers, put Cloudflare in front of the domain (recommended next platform step).

## Reliability and scalability
- GitHub Pages hosting with static export keeps deployment simple and low-risk.
- CI build checks run for code changes.
- The site is simple to scale as a static site with static assets and a single domain.
- Pre-built for scale: same repo can later move to Cloudflare Pages / Vercel / Workers without rewriting product surface.

## UX and accessibility
- Keyboard-friendly navigation and focus states.
- Sufficient contrast for dark-mode product aesthetic.
- Semantic HTML, clear heading structure.
- Responsive layout from mobile to desktop.
- WhatsApp reach-out FAB + contact links for low-friction client contact.
- Essential-only cookie notice (localStorage preference).

## Contact & messaging
- Form: FormSubmit → studio inbox.
- Direct email: `hello@djrlabs.fun` (set up free forwarding — see setup notes below).
- WhatsApp: `+91 70043 17220` via floating action button and contact section.

### Free email + forwarding (recommended)
1. **Forward Email** (open source, free forwarding, unlimited domains/aliases, webhooks): https://forwardemail.net — best pure open-source path that also supports future automation.
2. **Cloudflare Email Routing** (free, unlimited, pairs with CDN/caching/Workers): move DNS to Cloudflare → Email Routing → destination = personal inbox.

After either is live, point FormSubmit at `hello@djrlabs.fun` or keep the current destination and let the forwarder deliver.

## Operational checklist
- [x] Static export build
- [x] GitHub Pages deployment workflow
- [x] Custom domain configured
- [x] Dependency monitoring enabled
- [x] CI build validation
- [x] Basic SEO metadata
- [x] Social / contact placeholders
- [x] Security-first static setup
- [x] WhatsApp reach-out
- [x] Essential cookie consent (localStorage)
- [ ] Custom-domain inbox live (Forward Email or Cloudflare)
- [ ] Optional: Cloudflare edge for advanced cache headers

## Recommended next hardening
- Complete free email forwarding for `hello@djrlabs.fun`.
- Optionally put Cloudflare in front for cache headers, security headers, and Workers.
- Generate and review a real favicon + OG image set.
- Add analytics only with privacy-conscious tooling (self-hosted Umami / Plausible) after explicit consent expansion.
- Maintain a visible security disclosure process.
