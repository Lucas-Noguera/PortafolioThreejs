import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(), // esto separa automáticamente tus dependencias mayores
  ],
  build: {
    rollupOptions: {
      output: {
        // opcionalmente puedes agrupar manualmente:
        manualChunks: {
          drei: ['@react-three/drei', '@react-three/fiber', 'three'],
        },
      },
    },
  },
})