// vite.config.ts
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true, // ← esto activa el SW en modo dev
        type: 'module', // ← esto permite que funcione correctamente
      },
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'Restaurante App',
        short_name: 'Restaurante',
        description: 'App del restaurante hecha con Angular y Vite',
        theme_color: '#f2f2f2',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
