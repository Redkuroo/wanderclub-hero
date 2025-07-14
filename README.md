# Wander Club Landing Page

A pixel-perfect, responsive, animated landing page built with Next.js, Tailwind CSS, and Framer Motion, based on a Figma design.

---

## 🛠️ Tools Used

- **Next.js** (App Router, TypeScript)
- **Tailwind CSS** (utility-first styling)
- **Framer Motion** (animations and micro-interactions)
- **Custom Font:** TT Norms Pro (via TTF in `/public/fonts`)
- **SVG & PNG assets** (in `/public`)

---

## 🚀 How to View or Edit

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Edit the site

- Main page: `src/app/page.tsx`
- Components: `src/app/components/`
  - `PromoBar.tsx`, `Navbar.tsx`, `Carousel.tsx`, `Testimonial.tsx`, `HeroHeadlineCTA.tsx`
- Global styles: `src/app/globals.css`
- Font-face: defined in `globals.css`, font file in `public/fonts/`
- Images & SVGs: `public/`

The site uses a mobile-first, component-based structure. All main sections are React components for easy editing and reuse.

---

## ⚠️ Known Limitations & Setup Steps

- **Font:** TT Norms Pro is loaded via TTF in `/public/fonts` and set up in `globals.css` and `tailwind.config.js`. If you change the font file, update the `@font-face` rule accordingly.
- **SVG/Images:** All icons and images are expected in the `/public` folder. Use the same filenames or update imports in components.
- **No backend:** This is a static landing page. Search, cart, and menu icons are non-functional placeholders.
- **Browser support:** Modern browsers recommended for best animation and font rendering.

---

## 📄 License

This project is for demo/educational use. Replace assets and font with your own for production.
