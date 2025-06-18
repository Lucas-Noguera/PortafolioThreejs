import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    react(),
    ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          drei: ['@react-three/drei', '@react-three/fiber', 'three'],
        },
      },
    },
  },
})