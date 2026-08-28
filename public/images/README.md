# Hostel photos

Real photos are already wired in for every section and every room type
(pool, gym, lounges, reception, staircase, dormitory beds, standard,
deluxe, queen, king, and family rooms, workspace — 21 photos in
total). No placeholders remain; see `src/components/PlaceholderImage.tsx`
if a future room type or section ever needs one again.

## Adding or replacing a photo

1. Save your photo as a `.jpg` file.
2. Name it to match the **slot id** below (e.g. `room-standard.jpg`).
3. Drop it into this folder (`public/images/`), overwriting if the slot
   already has a file.
4. Open `src/lib/images.ts` and make sure the slot id is listed in
   `realImageSlots` (already-wired slots are listed there; add any new
   one you fill in). That's it — `PlaceholderImage` picks it up
   automatically.

## Slot ids used across the site

| Slot id | Status | Used in |
|---|---|---|
| `hero-main` | ✅ real photo (entrance sign, night) | Hero background |
| `room-standard` | ✅ real photo | Rooms section + gallery |
| `room-deluxe` | ✅ real photo | Rooms section + gallery |
| `room-queen` | ✅ real photo | Rooms section + gallery |
| `room-king` | ✅ real photo | Rooms section + gallery |
| `room-family` | ✅ real photo | Rooms section + gallery |
| `room-dorm` | ✅ real photo | Rooms section + gallery |
| `pool-1` | ✅ real photo | Facilities + gallery |
| `pool-2` | ✅ real photo | Gallery |
| `pool-3` | ✅ real photo | Gallery |
| `pool-4` | ✅ real photo | Gallery |
| `gym-1` | ✅ real photo | Facilities + gallery |
| `gym-2` | ✅ real photo | Gallery |
| `lounge-1` | ✅ real photo | Facilities + gallery |
| `lounge-2` | ✅ real photo | Gallery |
| `workspace-1` | ✅ real photo | Facilities + gallery |
| `interior-1` | ✅ real photo (reception) | About + gallery |
| `interior-2` | ✅ real photo (staircase) | Gallery |
| `interior-3` | ✅ real photo (entrance hallway) | Gallery |
| `interior-4` | ✅ real photo (entrance sign, night) | Gallery |

Recommended sizes for any new photo: hero ~1920x1080px, room/gallery
photos ~1200x900px, exported at good quality (Next.js optimizes and
serves them as WebP/AVIF automatically, so raw JPGs under ~400KB are fine).
