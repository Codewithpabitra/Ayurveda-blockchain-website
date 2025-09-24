import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  server: {
    port: 5173, // frontend server 
    proxy: {
      "/api": {
        target: "http://localhost:3000", // backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
