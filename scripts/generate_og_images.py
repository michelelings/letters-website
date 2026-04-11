#!/usr/bin/env python3
"""
Generate Open Graph preview PNGs for pages that use the Letters tile strip
(data-static-word or data-letters-words), and sync og:image meta tags.

Matches words.js behavior:
  - data-static-word wins over data-letters-words
  - data-letters-words: first comma- or pipe-separated phrase is the preview

Run from repo root after installing deps:
  pip install -r scripts/requirements-og.txt
  python3 scripts/generate_og_images.py
"""

from __future__ import annotations

import argparse
import math
import re
import sys
from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print("Install Pillow: pip install -r scripts/requirements-og.txt", file=sys.stderr)
    raise

REPO_ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = REPO_ROOT / "og" / "generated"
BASE_URL = "https://www.letters.game"
OG_W = 1200
OG_H = 900
PAGE_BG = (239, 239, 239)
TILE_FACE = (245, 245, 247)
TILE_BORDER = (218, 218, 220)
TILE_TEXT = (28, 28, 30)
SHADOW_FILL = (198, 200, 204)
BASE_TILE_W = 82
TILE_RATIO = 88 / 56
MAX_STRIP_W = 980
# Extra canvas padding so slight rotations never clip (matches words.js stableRotationDeg).
TILE_PAD_FOR_ROTATION = 36

RE_STATIC = re.compile(r'data-static-word="([^"]*)"')
RE_WORDS = re.compile(r'data-letters-words="([^"]*)"')


def phrase_from_html(html: str) -> str | None:
    m = RE_STATIC.search(html)
    if m:
        s = m.group(1).strip()
        return s if s else None
    m = RE_WORDS.search(html)
    if not m:
        return None
    raw = m.group(1).strip()
    if not raw:
        return None
    first = re.split(r"[,|]", raw, maxsplit=1)[0].strip()
    return first if first else None


def slug_for_html_path(path: Path) -> str:
    rel = path.resolve().relative_to(REPO_ROOT)
    parts = list(rel.parts)
    if parts == ["404.html"]:
        return "404"
    if parts and parts[-1] == "index.html":
        parts = parts[:-1]
    if not parts:
        return "root"
    return "-".join(parts)


def stable_rotation_deg(index: int) -> float:
    """BuildBoardView.stableRotation (words.js), degrees."""
    seed = ((index * 7 + 3) % 11) / 11.0
    return (seed - 0.5) * 6.0


def load_font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    # SFNSRounded matches site stack (ui-rounded / system-ui on Apple).
    candidates = [
        "/System/Library/Fonts/SFNSRounded.ttf",
        "/System/Library/Fonts/Supplemental/Arial Rounded Bold.ttf",
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/Library/Fonts/Arial Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
        "C:\\Windows\\Fonts\\arialbd.ttf",
    ]
    for p in candidates:
        try:
            return ImageFont.truetype(p, size=size)
        except OSError:
            continue
    return ImageFont.load_default()


def _render_one_tile_rgba(
    ch: str,
    tile_w: int,
    tile_h: int,
    font: ImageFont.FreeTypeFont | ImageFont.ImageFont,
    radius: int,
    tilt_deg: float,
) -> Image.Image:
    """Single letter tile with shadow, face, and playful rotation (transform-origin: center)."""
    diag = math.hypot(tile_w, tile_h)
    s = int(math.ceil(diag)) + TILE_PAD_FOR_ROTATION
    if s % 2 == 0:
        s += 1
    cx = cy = s // 2
    fx0 = int(round(cx - tile_w / 2))
    fy0 = int(round(cy - tile_h / 2))
    fx1 = fx0 + tile_w - 1
    fy1 = fy0 + tile_h - 1

    sub = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    dr = ImageDraw.Draw(sub)
    dr.rounded_rectangle(
        (fx0 + 3, fy0 + 5, fx1 + 3, fy1 + 5),
        radius=radius,
        fill=(*SHADOW_FILL, 255),
    )
    dr.rounded_rectangle(
        (fx0, fy0, fx1, fy1),
        radius=radius,
        fill=(*TILE_FACE, 255),
        outline=(*TILE_BORDER, 255),
        width=2,
    )
    c = ch.upper()
    if c != " ":
        dr.text((cx, cy), c, font=font, fill=(*TILE_TEXT, 255), anchor="mm")

    # CSS rotate() is clockwise for positive deg; Pillow rotate() is counter-clockwise.
    return sub.rotate(
        -tilt_deg,
        center=(cx, cy),
        expand=True,
        resample=Image.Resampling.BICUBIC,
        fillcolor=(0, 0, 0, 0),
    )


def render_tile_strip_png(phrase: str, out_path: Path) -> None:
    word = phrase.strip()
    if not word:
        raise ValueError("empty phrase")
    chars = list(word)
    n = len(chars)
    tile_w = BASE_TILE_W
    tile_h = int(round(tile_w * TILE_RATIO))
    overlap = int(tile_w * 0.08)
    step = tile_w - overlap
    strip_w = (n - 1) * step + tile_w if n else 0
    if strip_w > MAX_STRIP_W and n > 0:
        scale = MAX_STRIP_W / strip_w
        tile_w = max(36, int(tile_w * scale))
        tile_h = int(round(tile_w * TILE_RATIO))
        overlap = max(2, int(tile_w * 0.08))
        step = tile_w - overlap
    # ~clamp(1.65rem, 5vw, 2.05rem) on tile face; single glyph, weight 900.
    font_size = max(24, min(88, int(tile_h * 0.52)))
    font = load_font(font_size)
    radius = min(20, max(6, tile_w // 4))

    total_w = (n - 1) * step + tile_w if n else 0
    x0 = (OG_W - total_w) // 2
    wy_base = OG_H / 2.0

    pieces: list[tuple[Image.Image, float, float]] = []
    for i, ch in enumerate(chars):
        tilt = stable_rotation_deg(i)
        tr = _render_one_tile_rgba(ch, tile_w, tile_h, font, radius, tilt)
        wx = x0 + i * step + tile_w / 2.0
        oy_top = wy_base - tr.height / 2.0
        pieces.append((tr, wx, oy_top))

    if pieces:
        tops = [oy for _, _, oy in pieces]
        bots = [oy + tr.height for tr, _, oy in pieces]
        delta = 0.5 * OG_H - 0.5 * (min(tops) + max(bots))
    else:
        delta = 0.0

    im = Image.new("RGB", (OG_W, OG_H), PAGE_BG)
    for tr, wx, oy_top in pieces:
        oy = int(round(oy_top + delta))
        ox = int(round(wx - tr.width / 2.0))
        im.paste(tr, (ox, oy), tr.split()[3])

    out_path.parent.mkdir(parents=True, exist_ok=True)
    im.save(out_path, "PNG", optimize=True)


def og_alt_text(phrase: str) -> str:
    return f"{phrase} | Letters"


def upsert_og_image_meta(html: str, image_url: str, alt: str) -> str:
    """Ensure og:image points to image_url and type/width/height/alt follow."""
    if 'property="og:image"' not in html:
        raise ValueError("no og:image slot to patch")

    html = re.sub(
        r'(<meta\s+property="og:image"\s+content=")([^"]*)("\s*>)',
        rf"\1{image_url}\3",
        html,
        count=1,
    )

    alt_line = f'  <meta property="og:image:alt" content="{_escape_attr(alt)}">'
    if 'property="og:image:type"' not in html:
        insert = (
            f'\n  <meta property="og:image:type" content="image/png">\n'
            f'  <meta property="og:image:width" content="{OG_W}">\n'
            f'  <meta property="og:image:height" content="{OG_H}">\n'
            f"{alt_line}"
        )
        html = re.sub(
            r'(<meta\s+property="og:image"\s+content="[^"]*"\s*>)',
            rf"\1{insert}",
            html,
            count=1,
        )
    else:
        if 'property="og:image:alt"' in html:
            html = re.sub(
                r'<meta\s+property="og:image:alt"\s+content="[^"]*"\s*>',
                alt_line,
                html,
                count=1,
            )
        else:
            html = re.sub(
                r'(<meta\s+property="og:image:height"\s+content="[^"]*"\s*>)',
                rf"\1\n{alt_line}",
                html,
                count=1,
            )

    if 'name="twitter:image"' in html:
        html = re.sub(
            r'(<meta\s+name="twitter:image"\s+content=")([^"]*)("\s*>)',
            rf"\1{image_url}\3",
            html,
            count=1,
        )
    return html


def _escape_attr(s: str) -> str:
    return s.replace("&", "&amp;").replace('"', "&quot;")


def insert_404_social_head(html: str, image_url: str, alt: str) -> str:
    """404.html ships without OG; insert a minimal block after charset/viewport."""
    if 'property="og:image"' in html:
        return upsert_og_image_meta(html, image_url, alt)
    block = f"""  <meta property="og:type" content="website">
  <meta property="og:title" content="Page not found | Letters">
  <meta property="og:description" content="We could not find that page on Letters. Head back home and try again.">
  <meta property="og:image" content="{image_url}">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="{OG_W}">
  <meta property="og:image:height" content="{OG_H}">
  <meta property="og:image:alt" content="{_escape_attr(alt)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Page not found | Letters">
  <meta name="twitter:description" content="We could not find that page on Letters. Head back home and try again.">
  <meta name="twitter:image" content="{image_url}">
"""
    return re.sub(
        r"(<meta\s+name=\"viewport\"[^>]*>\s*\n)",
        rf"\1{block}",
        html,
        count=1,
    )


def main() -> None:
    ap = argparse.ArgumentParser(description="Generate OG tile PNGs and patch HTML meta tags.")
    ap.add_argument(
        "--write-html",
        action=argparse.BooleanOptionalAction,
        default=True,
        help="Update HTML files (default: true). Use --no-write-html to only emit PNGs.",
    )
    args = ap.parse_args()

    html_paths = sorted(REPO_ROOT.rglob("*.html"))
    done = 0
    for path in html_paths:
        if "node_modules" in path.parts:
            continue
        text = path.read_text(encoding="utf-8")
        phrase = phrase_from_html(text)
        if not phrase:
            continue
        slug = slug_for_html_path(path)
        rel_url = f"{BASE_URL}/og/generated/{slug}.png"
        alt = og_alt_text(phrase)
        out_png = OUT_DIR / f"{slug}.png"
        render_tile_strip_png(phrase, out_png)
        if args.write_html:
            if path.name == "404.html" and path.resolve().parent == REPO_ROOT.resolve():
                new_html = insert_404_social_head(text, rel_url, alt)
            else:
                new_html = upsert_og_image_meta(text, rel_url, alt)
            if new_html != text:
                path.write_text(new_html, encoding="utf-8")
        done += 1
        print(f"OK {path.relative_to(REPO_ROOT)} -> {out_png.relative_to(REPO_ROOT)}")

    print(f"Processed {done} pages with tile phrases.")


if __name__ == "__main__":
    main()
