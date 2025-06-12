import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Agrupa React y ReactDOM junto con three/fiber/drei
            if (
              id.match(/node_modules\/react($|\/)/) ||
              id.match(/node_modules\/react-dom($|\/)/) ||
              id.includes('three/') ||
              id.includes('@react-three/fiber') ||
              id.includes('@react-three/drei')
            ) {
              return 'three-vendor'
            }
            // El resto de dependencias generales
            return 'vendor'
          }
        },
      },
    },
  },
})