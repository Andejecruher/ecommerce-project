import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') + '/' },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') + '/' },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') + '/' },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') + '/' },
    ],
  },
})
