# DJRLABS Platform Standards

This document captures the higher-level platform standards and practices used for the DJRLABS portfolio site.

## Scope
The site is designed as a fast, secure, static portfolio for GitHub Pages. It intentionally minimizes runtime complexity and keeps the attack surface small.

## Security practices
- Static export only; no server-side runtime.
- No secrets or credentials checked into version control.
- `public/robots.txt` and `public/sitemap.xml` are used for crawlability.
- External links open in a new tab with `rel="noreferrer"`.
- Dependency updates are handled with GitHub Dependabot.
- Manual review is still needed before production-facing contact forms are connected to a real backend or email service.

## Performance practices
- Minimal JavaScript footprint.
- Static export for efficient GitHub Pages delivery.
- Responsive, mobile-first layout.
- CSS-driven visuals and lightweight design tokens.
- No unnecessary media dependencies by default.

## Reliability and scalability
- GitHub Pages hosting with static export keeps deployment simple and low-risk.
- CI build checks run for code changes.
- The site is simple to scale as a static site with static assets and a single domain.

## UX and accessibility
- Keyboard-friendly navigation and focus states.
- Sufficient contrast for dark-mode product aesthetic.
- Semantic HTML, clear heading structure.
- Responsive layout from mobile to desktop.

## Operational checklist
- [x] Static export build
- [x] GitHub Pages deployment workflow
- [x] Custom domain configured
- [x] Dependency monitoring enabled
- [x] CI build validation
- [x] Basic SEO metadata
- [x] Social / contact placeholders
- [x] Security-first static setup

## Recommended next hardening
- Add a real Formspree or backend route for contact form delivery.
- Generate and review a real favicon + OG image set.
- Add analytics with privacy-conscious tooling.
- Add a complete security policy and maintain a visible disclosure process.
