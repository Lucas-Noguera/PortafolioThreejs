import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Todo lo que venga de node_modules lo aisla
          if (id.includes('node_modules')) {
            // Agrupa three, fiber y drei juntos en un chunk “three-vendor”
            if (
              id.includes('three/') ||
              id.includes('@react-three/fiber') ||
              id.includes('@react-three/drei')
            ) {
              return 'three-vendor'
            }
            // El resto de dependencias en “vendor”
            return 'vendor'
          }
        },
      },
    },
  },
})
