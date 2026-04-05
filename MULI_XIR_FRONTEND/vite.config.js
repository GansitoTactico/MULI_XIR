import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['Mulix.png'],
      manifest: {
        name: 'MUL_XIR',
        short_name: 'MUL_XIR',
        description: 'Aplicación MUL_XIR',
        theme_color: '#0d6efd',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'Mulix.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'Mulix.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
