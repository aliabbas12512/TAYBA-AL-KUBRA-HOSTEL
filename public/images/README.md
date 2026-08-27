# Adding your real hostel photos

No real photos were available when this site was generated, so every
image slot currently renders an elegant gold/charcoal placeholder
(see `src/components/PlaceholderImage.tsx`). Swapping in your real
photos is simple — no code knowledge needed.

## How to replace a placeholder

1. Save your photo as a `.jpg` file.
2. Name it to match the **slot id** below (e.g. `room-standard.jpg`).
3. Drop it into this folder (`public/images/`).
4. Open `src/components/PlaceholderImage.tsx` and change the
   placeholder `<div>` to a real `<img src={`/images/${id}.jpg`} .../>`
   (or ask Claude to "wire up the real photos in public/images" and it
   will do this automatically once the files exist).

## Slot ids used across the site

| Slot id | Used in |
|---|---|
| `hero-main` | Hero background |
| `room-standard` | Rooms section + gallery |
| `room-deluxe` | Rooms section + gallery |
| `room-family` | Rooms section + gallery |
| `room-dorm` | Rooms section |
| `pool-1` | Facilities + gallery |
| `gym-1` | Facilities + gallery |
| `lounge-1` | Facilities + gallery |
| `workspace-1` | Facilities + gallery |
| `interior-1` | About + gallery |
| `interior-2` | Gallery (reception) |

Recommended sizes: hero ~1920x1080px, room/gallery photos ~1200x900px,
all exported at good quality but compressed (web-optimized JPG, under
~400KB each) for fast loading.
