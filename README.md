# Havrely — concept site

> **Havrely is a fictional brand.** This is a concept project by [Brandory Studio](https://www.brandorystudio.com), designed and built to show our work. Product details are invented and the photography is AI-generated. The site is set to `noindex`, and its forms validate on the server but store and send nothing.

Havrely is the oat-drink brand from Brandory's [Korea entry concept study](https://www.brandorystudio.com/work/havrely): a Copenhagen maker of a clean-label barista carton. This is the brand site it would have at home.

## Pages

| Route | What it shows |
|---|---|
| `/` | Hero, the range as tabs (Barista / Original / Light), four ingredients, café teaser, newsletter |
| `/for-cafes` | Three promises to the steam wand, a steaming guide, a sample-box request form |
| `/our-oats` | Where the oats come from, how it is made, what is left out, an honest note on footprint |
| `/contact` | Contact form and FAQ |

## Stack

- Next.js 15 (App Router, static pages, Server Actions for forms)
- React 19 `useActionState` for form state, with server-side validation
- Tailwind CSS v4, design tokens in `src/app/globals.css`
- framer-motion for reveals, tab transitions and a light parallax, all under `MotionConfig reducedMotion="user"`
- `next/font` (Newsreader, Work Sans), `next/image`

## Design notes

- **Identity from the carton.** Kraft beige, oat cream and the wordmark's deep green; the oat stem redrawn as an SVG line mark (`src/components/oat-mark.tsx`).
- **Accessibility.** Keyboard-operable tablist (arrow keys), labelled form fields with inline errors tied by `aria-describedby`, native `<details>` for the FAQ, visible focus, reduced-motion support.
- **Placeholders are honest.** A photo slot without a photo shows a kraft panel describing what will go there (`src/components/photo.tsx`).

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
src/
  app/            pages, layout, actions.ts (form handlers)
  components/     site chrome, forms, product tabs, photo, motion helpers
  data/           products.ts (the fictional range)
```

---

Designed and built by Brandory Studio, Seoul.
