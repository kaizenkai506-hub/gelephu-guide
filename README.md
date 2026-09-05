# Gelephu Guides — PWA Prototype (Frontend)

Mobile-first, guide-centric frontend prototype for a community-led tourism marketplace in Gelephu Mindfulness City.

Tech: Next.js (App Router), TypeScript, Tailwind CSS, mobile-first UI, PWA-ready manifest & service-worker stub. Supabase-ready placeholders included.

## Getting started

1. Install dependencies
   - npm install

2. Run locally
   - npm run dev
   - Open http://localhost:3000

3. Folder highlights
   - app/ — Next.js App Router pages (Guide, Host, Admin, public guest routes)
   - components/ — Shared UI pieces and layout
   - lib/ — sample data + supabase client stub
   - public/ — manifest, images, icons, service worker

## Notes & next steps
- This is a frontend prototype: actions store demo data locally (localStorage). No server-side or DB wiring yet.
- To connect Supabase:
  - Install `@supabase/supabase-js`, replace `lib/supabaseClient.ts` with a real client.
  - Create database tables: users (guides/hosts/admin), experiences, bookings, verifications.
- PWA:
  - The service worker is a minimal stub. For production use `next-pwa` or a Workbox pipeline.
- Design:
  - Color tokens and font families are in `tailwind.config.cjs` and `styles/globals.css`.
  - Replace placeholder images in `public/images/` with high-quality photography.

If you want, I can:
- Provide a single-zip of all files.
- Push this scaffold into a GitHub repo/branch (if you confirm owner/name).
- Replace localStorage mocks with actual Supabase calls and seed data.

Design & accessibility choices:
- Mobile-first with bottom navigation for guides.
- Calm Bhutan-inspired palette, clear typographic hierarchy, minimal motion.
- Guest flows require no login: public URLs /e/:id and /g/:guideId are shareable by guides.

Thanks — tell me if you want the entire file tree packaged into a zip or if you'd like me to push this into a repository and create a branch.
