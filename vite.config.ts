import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    host: true,
    watch: {
      ignored: ['**/public/modal3d/**'],
    },
  },
  plugins: [react(), tailwindcss()],
})

