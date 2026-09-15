# anthonystefanuto.ca

Personal portfolio site. Vanilla TypeScript + Vite — no framework.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build      # outputs dist/
npm run preview    # local preview of the prod build
```

## Project layout

```
.
├── index.html              # entry HTML — loads /src/main.ts
├── public/
│   ├── favicon.svg
│   └── logos/              # served at /logos/<file>
└── src/
    ├── main.ts             # all rendering logic + data
    └── style.css           # all styles
```

`public/` files are served at the root path. Anything you reference like
`/logos/foo.jpeg` in `main.ts` is read from `public/logos/foo.jpeg`.

## Deploy

This builds to a static `dist/` — drop into Vercel, Netlify, Cloudflare Pages,
or GitHub Pages. For a custom domain (anthonystefanuto.com), point an A/CNAME
record at your host and configure the domain there.

## Updating content

All content (projects, experience, blog, interests) lives at the top of
`src/main.ts` as plain TypeScript arrays. Edit the data, save — Vite hot-reloads.
