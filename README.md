# Ash Haven Insurance Brokerage Services Ltd. — Website

A fully responsive, multi-page corporate website for Ash Haven Insurance
Brokerage Services Ltd., built with HTML5, CSS3, vanilla JavaScript and
Bootstrap 5. No build step or server-side code is required.

## Project structure

```
ash-haven/
├── index.html              Homepage
├── about.html               About Us page
├── services.html            Services page
├── contact.html              Contact page with validated form
├── assets/
│   ├── css/
│   │   └── style.css         All custom styles (design tokens at the top)
│   ├── js/
│   │   └── script.js         Navigation, scroll animation, form handling
│   └── images/                Add real photography, favicon & OG image here
└── README.md
```

## Running the site locally

No installation is required — it's a static site.

**Option A — just open it:**
Double-click `index.html` (or right-click → Open with your browser).

**Option B — a local server (recommended, avoids any browser file-path quirks):**

```bash
# from inside the ash-haven/ folder
python3 -m http.server 8000
# then visit http://localhost:8000 in your browser
```

or, with Node.js installed:

```bash
npx serve .
```

## Editing content

- **Text & sections** — edit directly inside the relevant `.html` file. Every
  section is commented (e.g. `<!-- OUR SERVICES -->`) so you can find it fast.
- **Colors, fonts, spacing** — all defined once as CSS variables at the top of
  `assets/css/style.css` under `:root`. Changing `--blue-brand`, for example,
  updates the brand blue everywhere.
- **Contact details** (phone, email, address, GPS) — appear in four places on
  every page: the top bar, the contact preview section (homepage), the
  contact page, and the footer. Search-and-replace across the HTML files if
  any of these change.
- **Logo** — the header/footer currently use a text-based placeholder mark
  ("AH" in a circle, see `.brand-mark` in `style.css`). Once you have a
  transparent PNG/SVG of the official logo, replace the `<span class="brand-mark">AH</span>`
  elements with an `<img>` tag, and add the file to `assets/images/`.
- **Photography** — every image placeholder (dashed border, icon + caption)
  is marked with an HTML comment explaining what to replace it with. Save
  new images into `assets/images/` and swap the placeholder `<div>` for an
  `<img>` tag.
- **Favicon & social preview image** — add `favicon.png` and `og-cover.jpg`
  to `assets/images/`; both are already referenced in every page's `<head>`.
- **Contact form** — currently client-side only (validates fields and shows a
  confirmation message, but does not send email). To make it functional,
  connect it to a form backend (e.g. a serverless function, Formspree, or
  your own mail script) inside the submit handler in `assets/js/script.js`.
- **Map** — the contact page has a placeholder with instructions in an HTML
  comment for embedding a live Google Maps iframe once you have the exact
  coordinates or a Google Maps share link.

## Deploying

This is a static site, so it can be deployed to any static host. A few options:

**Netlify / Vercel (drag-and-drop, free tier available)**
1. Create an account.
2. Drag the `ash-haven` folder onto the dashboard (or connect a Git repo).
3. Point the custom domain `ashhavenbrokerage.com` at the generated site in
   the host's domain settings.

**Traditional web hosting (cPanel, etc.)**
1. Zip the contents of the `ash-haven` folder.
2. Upload and extract into the `public_html` (or equivalent) directory via
   your host's file manager or FTP.
3. Ensure `index.html` sits at the root of that directory.

**GitHub Pages**
1. Push this folder to a GitHub repository.
2. In the repository settings, enable Pages and point it at the root of the
   default branch.
3. Add a `CNAME` file containing `ashhavenbrokerage.com` if using a custom
   domain, and configure DNS per GitHub's instructions.

## Notes

- All icons are from Font Awesome (loaded via CDN) — no emoji are used
  anywhere on the site, per the brand requirements.
- Fonts (Fraunces, Inter, IBM Plex Mono) load from Google Fonts via CDN.
- No company statistics, awards, years of experience or certifications have
  been invented — only the details provided have been used. Add real details
  as they become available.
