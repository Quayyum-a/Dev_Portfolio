import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-countup'],
          'vendor-gsap': ['gsap', '@gsap/react'],
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing', 'postprocessing'],
          'vendor-emailjs': ['@emailjs/browser', 'emailjs'],
          'vendor-utils': ['react-responsive'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})