# Project screenshots

Place app screenshots, charts, or model output images here. Use a stable name such as `sunpay.webp`.

In the matching project record in `src/main.ts`, add:

```ts
image: { src: '/projects/sunpay.webp', alt: 'Describe the actual interface shown' },
links: [
  { label: 'GitHub', url: 'https://github.com/OWNER/REPOSITORY' },
  { label: 'Live demo', url: 'https://YOUR-APP-DOMAIN' },
  { label: 'Devpost', url: 'https://devpost.com/software/YOUR-PROJECT' },
],
```

Replace example URLs with real destinations; omit unavailable links. Screenshots retain full color and fit uncropped in a 16:10 preview. Missing or failed images display a local preview panel. Keep `summary` to one concise sentence; use `description` and optional `highlights` for detail views.
