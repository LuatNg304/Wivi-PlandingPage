import path from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Same proxy as vercel.json, for `npm run dev` and `npm run preview`.
const apiProxy = {
  '/api': { target: 'http://160.30.161.213:3000', changeOrigin: true },
}

// https://vite.dev/config/
export default defineConfig({
  preview: { proxy: apiProxy },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true,
    proxy: apiProxy,
    watch: {
      ignored: ['**/public/modal3d/**'],
    },
  },
  plugins: [react(), tailwindcss()],
})

