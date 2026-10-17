import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes every asset path relative, so the built site works on
// GitHub Pages under any repository name (username.github.io/<repo>/) with no edits.
export default defineConfig({
  plugins: [react()],
  base: './',
})
