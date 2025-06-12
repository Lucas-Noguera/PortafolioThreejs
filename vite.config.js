import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 1) React y ReactDOM en su propio chunk
            if (
              id.match(/node_modules\/react($|\/)/) ||
              id.match(/node_modules\/react-dom($|\/)/) ||
              id.includes('node_modules/scheduler')
            ) {
              return 'react-vendor'
            }
            // 2) three + fiber + drei
            if (
              id.includes('three/') ||
              id.includes('@react-three/fiber') ||
              id.includes('@react-three/drei')
            ) {
              return 'three-vendor'
            }
            // 3) resto de libs
            return 'vendor'
          }
        },
      },
    },
  },
})