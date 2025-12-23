import { defineConfig } from 'vite'

export default defineConfig({
    // Use relative base path so it deploys correctly on any subdirectory (like GitHub Pages)
    // Reverting to relative path as '.nojekyll' should fix the 404s, and this is safer for path matching
    base: './',
})
