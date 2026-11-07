import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// For GitHub Pages instead of Vercel, add: base: '/haziq-portfolio/'
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
