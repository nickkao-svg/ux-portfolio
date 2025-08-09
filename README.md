# Avery Lee — UX Portfolio (Next.js + Tailwind + Contentlayer)

Minimal, accessible, and production-ready UX portfolio using Next.js App Router, Tailwind CSS, MDX (Contentlayer), and dark mode.

## Tech
- Next.js 14, TypeScript, App Router
- Tailwind CSS + @tailwindcss/forms
- Dark mode via next-themes (class)
- MDX with Contentlayer
- Icons: lucide-react
- Framer Motion (ready for page transitions)
- Prettier + ESLint
- Vercel Analytics (opt-in)

## Setup

### 1) Install dependencies
```bash
npm install
```

### 2) Dev
```bash
npm run dev
```
Open http://localhost:3000

### 3) Build
```bash
npm run build
npm start
```

### 4) Lint & Format
```bash
npm run lint
npm run format
```

### 5) Content
- Case studies live in `content/case-studies/*.mdx`
- Add a new case:
  1. Create `content/case-studies/my-new-case.mdx`
  2. Include frontmatter:
     ```md
     ---
     title: "Title"
     subtitle: "Subtitle"
     role: "Role"
     team: "Team"
     year: 2025
     duration: "3 months"
     tools: ["Figma"]
     impact: ["+15% metric"]
     heroImage: "/images/case-studies/my-new-case/hero.webp"
     tags: ["research", "flows"]
     links: [{ "label": "Prototype", "url": "https://..." }]
     ---
     ```
  3. Use components: `<Callout>`, `<Figure>`, `<Grid>`, `<Quote>`, `<Metric>`
  4. Add images under `public/images/case-studies/my-new-case/`

### 6) Configuration
- Site URL: set `NEXT_PUBLIC_SITE_URL` for correct canonical/OG URLs
- Analytics: set `NEXT_PUBLIC_ENABLE_ANALYTICS=1` to enable Vercel Analytics

## Deploy
- Push to GitHub and import repo in Vercel
- Set environment variables:
  - `NEXT_PUBLIC_SITE_URL`: `https://your-domain.com`
  - `NEXT_PUBLIC_ENABLE_ANALYTICS`: `1` (optional)
- Vercel builds will run `contentlayer build` automatically (via postinstall)

## Accessibility
- Proper landmarks, skip link, focus states
- Keyboard navigable components
- Color contrast >= AA
- Reduced motion respected

## Performance
- `next/image` everywhere for images
- Dynamic imports for MDX components
- Optimize hero images (replace placeholders)
- Lighthouse targets: 95+

## Print
- `/resume` and case studies print cleanly with black/white styles
- Use the “Download PDF” button on `/resume` to trigger native print
