import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Required for project Pages: https://<user>.github.io/<repo>/
  base: '/cittaai-rise-landing/',
  plugins: [react(), tailwindcss()],
})
