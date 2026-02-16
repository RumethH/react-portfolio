import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// For GitHub Pages project site set VITE_BASE_PATH to /your-repo-name/ when building
export default defineConfig({
  // Set your repository name here for GitHub Pages, e.g. '/REPO_NAME/'
  // You can also override at build time with VITE_BASE_PATH env var.
  base: process.env.VITE_BASE_PATH || '/REPO_NAME/',
  plugins: [
    react(),
    tailwindcss()
  ],
})
