# Animated OG preview plan (Letters landing page)

This document describes how to ship an **animated** Open Graph / link preview (e.g. iMessage) that reflects the **same motion** as the live site: letter tiles cycling random “welcome” words with staggered enter/exit (`words.js`, `styles.css`).

## What the site animates (source of truth)

- **Content**: Random picks from `WORDS` in `words.js` (multilingual “welcome” strings). Each character is a tile; spaces use `word-gap`.
- **Timing**: Words hold for **3s** (`WORD_CYCLE_MS`), then outgoing tiles exit with stagger and incoming tiles enter with overlap (`ENTER_OVERLAP_MS`, `--tile-enter-dur`, `--tile-exit-dur`, `--tile-stagger-ms` in `styles.css`).
- **Look**: Page background `#efefef`, tile face `#f5f5f7`, subtle tilt per letter (`stableRotationDeg`), rounded tiles, shadow, crossfade layers (`.word--crossfade`).

The preview asset cannot run that JavaScript in the crawler; you **record or export** a short loop that **visually matches** this behavior.

## Format choice

| Format   | Pros | Cons |
|----------|------|------|
| **MP4**  | Often **smoothest** in link previews; good compression | Needs `og:video` (+ `og:video:type`); still set a **poster** `og:image` for platforms that only show an image |
| **APNG** | Better quality/transparency than GIF; **smaller** than GIF for many loops | Encode toolchain less universal than GIF |
| **GIF**  | Widely recognized | Larger/heavier for same quality; limited colors |

**Practical combo**: **MP4** for motion + a **static or first-frame** PNG as `og:image`, **or** a single **animated GIF/APNG** as `og:image` if you want one tag only.

## Size and aspect ratio

- **Apple**: Total rich link metadata (images + icons) **under 10 MB**; prefer **much** smaller for speed.
- **Recommended canvas**: **1200 × 630** (≈ **1.91:1**) so previews crop predictably. The site currently uses **1200 × 900** static `og-image.png` (taller); for animation, **630 height** is a better match for OG conventions unless you intentionally keep 4:3.
- **HTTPS**: Asset URLs must be **`https://`** (e.g. `https://www.letters.game/...`).

## Production approaches (pick one)

### A. Record the real page (fastest to match)

1. Open the deployed site (or local static server) in a **desktop browser**.
2. Set the viewport to **1200 × 630** (or scale from a larger window and crop in post to 1200×630).
3. **Record** several word changes (include enter exit stagger so the recording is unmistakably “Letters”).
4. Trim to **2–4 full word cycles**, then loop seamlessly if possible (cut on a stable frame between two similar layout states).
5. Export:
   - **MP4**: H.264, short duration (e.g. **6–12 s** loop), reasonable bitrate (keep file small).
   - **GIF/APNG**: Use a tool that can **optimize** palette / frame disposal; cap frame count.

### B. Deterministic replay for a perfect loop (optional)

- Temporarily force a **fixed sequence** of words (or seed random) and optionally shorten `WORD_CYCLE_MS` only for the capture session so the loop length fits social limits without a long recording.
- Restore random timing after export.

### Design parity checklist

- Background **#efefef**, tile face **#f5f5f7**, borders/shadows as in `.tile__face`.
- Uppercase letters, same approximate **tile size/overlap** as CSS (`--tile-w`, `--answer-overlap`).
- **Staggered** motion on enter and exit, not a single fade for the whole word.

## HTML meta tags (after files are hosted)

Update `index.html` when the animatedURL and types are final.

**Animated image only (GIF or APNG):**

```html
<meta property="og:image" content="https://www.letters.game/og-animated.gif" />
<meta property="og:image:type" content="image/gif" />
<!-- For APNG use image/png -->
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

**MP4 + poster image (recommended for smooth playback):**

```html
<meta property="og:image" content="https://www.letters.game/og-poster-1200x630.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:video" content="https://www.letters.game/og-loop.mp4" />
<meta property="og:video:type" content="video/mp4" />
```

Keep **`twitter:card`** / **`twitter:image`** aligned with whatever Twitter/X should show (often the same poster as `og:image`).

## Testing and cache

- **Apple caches** link previews; updates can lag.
- **Bust cache** when testing: share `https://www.letters.game/?v=2` (increment query) so clients may refetch metadata.
- Use [Apple’s Link Presentation / developer tooling](https://developer.apple.com/documentation/linkpresentation) as applicable to validate appearance.

## File naming suggestion

- `og-poster-1200x630.png`, static fallback / Twitter / first frame  
- `og-loop.mp4`, animated preview  
- or `og-animated.apng` / `og-animated.gif`, single animated `og:image`

## Summary checklist

- [ ] Asset matches **tile word-cycle** animation and brand colors  
- [ ] **1200 × 630** (or documented intentional crop)  
- [ ] Under **10 MB** total metadata budget, ideally **well under 1–2 MB** for MP4/optimized GIF  
- [ ] **HTTPS** absolute URLs in meta tags  
- [ ] **`og:image:type`** matches actual file  
- [ ] If using video: **`og:video`** + **`og:video:type`** + poster **`og:image`**  
- [ ] Test share with **query-string version** after deploy
