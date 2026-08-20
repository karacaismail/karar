import { defineConfig } from 'vite'

// GitHub Pages serves the site from https://<user>.github.io/karar/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/karar/' : '/',
  define: {
    // Footer version stamp: makes a stale cached bundle immediately recognizable.
    __BUILD_STAMP__: JSON.stringify(new Date().toISOString().slice(0, 16).replace('T', ' ') + ' UTC'),
  },
})
