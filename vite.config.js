import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ──────────────────────────────────────────────────────────────────────────
// IMPORTANT: set `base` to your repo name for GitHub Pages project sites.
// e.g. if your repo is github.com/yourname/career-os, deployed at
// yourname.github.io/career-os/, then base must be '/career-os/'.
//
// If you deploy to a USER/ORG page (yourname.github.io root repo), set
// base back to '/'.
// ──────────────────────────────────────────────────────────────────────────
export default defineConfig({
  plugins: [react()],
  base: '/career-os/',
})
