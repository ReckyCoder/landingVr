import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@img': path.resolve(__dirname, './src/assets/img'),
      '@components': path.resolve(__dirname, './src/components'),
      '@json': path.resolve(__dirname, './src/assets/json'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@node_modules': path.resolve(__dirname, './node_modules'),
    }
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
