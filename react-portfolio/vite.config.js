import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// For GitHub Pages project site set VITE_BASE_PATH to /your-repo-name/ when building
export default defineConfig({
  // Base path for the built assets.
  // For GitHub Pages project sites set `VITE_BASE_PATH` to '/your-repo-name/' at build time.
  // Fallback to '/' so local preview and non-pages builds work safely.
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [
    react(),
    tailwindcss()
  ],
})
