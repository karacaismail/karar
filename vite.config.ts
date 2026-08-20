import { defineConfig } from 'vite'

// GitHub Pages serves the site from https://<user>.github.io/karar/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/karar/' : '/',
})
