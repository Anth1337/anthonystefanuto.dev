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

Projects can also use `video: { src: '/projects/demo.mp4', label: 'Describe the demo' }`. Videos loop silently with playback controls; autoplay is disabled when reduced motion is preferred.

`thumos14-demo.mp4` is the complete highlight reel from [Thumos14ActionTransformer](https://github.com/Anth1337/Thumos14ActionTransformer/blob/main/demo/outputs/highlight_reel.mp4), converted from MPEG-4 Part 2 to browser-compatible H.264 at its original 1280×540 resolution. Encoding uses `libx264 -preset medium -crf 27 -pix_fmt yuv420p -movflags +faststart -an`.
