# Omkar Sonawane Portfolio

Modern, responsive, dark-theme single-page portfolio built with:
React (Vite), Tailwind CSS (v4), and Framer Motion.

It includes sections for Home, About/Skills, Projects, Blog, Resume (download), and Contact (mailto-based form) - all accessible on a single page with smooth scrolling navigation.

## Project Structure

- `src/components/` - shared UI components (Navbar, Footer, Cards, Reveal, ContactForm, etc.)
- `src/pages/` - page sections (Home, About, Projects, Blog, Resume, Contact) - now rendered as sections on a single page
- `src/projects/` - data module for project cards
- `src/blog/` - data module for blog cards
- `src/assets/projects/` - placeholder project screenshots
- `src/styles/globals.css` - dark + glassmorphism base styles

## Local Development

1. Install dependencies:
   `npm install`

2. Start the dev server:
   `npm run dev`

3. Open the app:
   `http://localhost:5173`

4. Build for production:
   `npm run build`

## Contact Form Behavior

The contact form uses `mailto:` to open the visitor's default email app with a prefilled subject and message body.

Notes:
- No API keys or environment variables are required for contact form usage.
- The Resume button downloads `public/resume.pdf` (currently a placeholder file).

## Deployment

### Netlify

1. In Netlify, create a new site from GitHub.
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. SPA routing:
   - The repo includes `public/_redirects` with a catch-all rule:
     - `/* /index.html 200`
   - This ensures client-side routes like `/projects` and `/blog` work on refresh.

### Vercel

1. Create a Vercel project from the repo.
2. Build settings:
   - Framework preset should detect Vite automatically.
   - Build command: `npm run build`
   - Output: `dist`
3. SPA routing:
   - The repo includes `vercel.json` to rewrite all routes to `index.html`.

### Render

1. In Render, create a new **Blueprint** and select this repository.
2. The repo includes `render.yaml`, which configures:
   - Build command: `npm install && npm run build`
   - Publish directory: `dist`
   - SPA rewrite to `index.html` for client-side routing

## Replace Placeholders Before Publishing

- Update `public/resume.pdf` with your real resume.
- Add real project `liveUrl` values when available.
- Replace placeholder project screenshots in `src/assets/projects/`.

