# Eshal Azhar: portfolio website

React + Vite site. All content lives in `src/data/content.js`.

## Run locally
1. Install Node.js 18+ from nodejs.org.
2. In this folder: `npm install`, then `npm run dev` and open the address it prints.
3. Production check: `npm run build` then `npm run preview`.

## Add real links and your CV
- Open `src/data/content.js`. GitHub, Softbloom and Pinterest links are already set under `profile`. Set each project's `repo` / `demo`. Empty values hide the button.
- CV: put a PDF in `public/` and set `profile.cvFile` to its file name. Export a version without your phone number and home address first, because text hidden under a redacted PDF can still be copied.
- Samples of writing or music: add entries to `creative.samples`.

## Deploy to GitHub Pages
1. Create a new empty repository on github.com (any name).
2. In this folder: `git init`, `git add .`, `git commit -m "Portfolio"`, `git branch -M main`, `git remote add origin <your repo URL>`, `git push -u origin main`.
3. On GitHub: Settings > Pages > Source: **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and publishes on each push. Your site appears at `https://<username>.github.io/<repo>/`.

The Vite `base` is `./` (relative paths), so no repository-name setting is needed.

## Security check
Run `npm audit` after `npm install` and `npm audit fix` if it reports anything. The site has no backend, no forms, no secrets and no tracking; only React and the Vite build tool are dependencies.
