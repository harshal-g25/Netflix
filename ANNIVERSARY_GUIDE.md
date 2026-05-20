# One-Year Anniversary — Netflix Love Story

Your Netflix clone is now a cinematic anniversary experience. The **UI stays Netflix** (hero, rows, hover zoom, dark theme). The **content is your love story**.

## Quick start

```bash
npm install
npm run dev
```

1. Open the site → enter password (default: **`forever`**)
2. Browse home rows, journey, letters, future, and the finale

## Customize first

Edit **`src/Constants/anniversaryConfig.js`**:

| Setting | What to change |
|--------|----------------|
| `ANNIVERSARY_PASSWORD` | Secret word for the intro screen |
| `PARTNER_NAME` | His name |
| `HERO` | Banner title, subtitle, text |
| `MUSIC` | Song title, artist |
| `ANNIVERSARY_DATE` / `NEXT_ANNIVERSARY_DATE` | Countdown targets |

Edit **`src/Constants/anniversaryData.js`** for memory titles, love letters, journey chapters, and finale text.

## Add your media

Put files in **`public/media/`** (see `public/media/README.md`). Each placeholder on the site shows the exact path, e.g. `public/media/memories/memory-1.jpg`.

| File | Purpose |
|------|---------|
| `our-song.mp3` | Floating music player |
| `hero-backdrop.jpg` | Home hero image |
| `hero-video.mp4` | Optional hero video when pressing Play |

## Pages

| Route | Section |
|-------|---------|
| `/` | Password gate |
| `/home` | Netflix-style home + memory rows |
| `/journey` | Slideshow, timeline, typing animation |
| `/letters` | Click-to-open love letters |
| `/future` | Dreams + anniversary countdown |
| `/finale` | Confetti, ending message, fade to black |

## Lock / unlock

- **Lock** in the navbar clears the session and returns to the password screen.
- Password is stored in `sessionStorage` (per browser tab session).
