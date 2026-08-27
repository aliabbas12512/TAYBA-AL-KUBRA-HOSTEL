/**
 * Slot ids that have a real photo checked into public/images/<id>.jpg.
 * Any slot id not listed here falls back to the branded placeholder
 * (see PlaceholderImage.tsx). Add a file + entry here to swap in more photos.
 */
export const realImageSlots = new Set([
  "hero-main",
  "lounge-1",
  "lounge-2",
  "pool-1",
  "pool-2",
  "pool-3",
  "gym-1",
  "gym-2",
  "room-dorm",
  "room-dorm-2",
  "interior-1",
  "interior-2",
  "interior-3",
]);

export function hasRealImage(id: string) {
  return realImageSlots.has(id);
}
