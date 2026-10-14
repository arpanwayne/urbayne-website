// Editorial photos served from Unsplash's CDN (Unsplash permits hotlinking).
// The previous Lovable asset pointers (/__l5e/...) only resolve on Lovable
// hosting, so they broke on Vercel. These URLs work on any host.
const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=75`;

export const team = { url: unsplash("photo-1522071820081-009f0129c71c") };
export const planning = { url: unsplash("photo-1552664730-d307ca884978") };
export const people = { url: unsplash("photo-1521737604893-d14cc237f11d") };
