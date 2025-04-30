import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig(({ mode }) => {
  // Load env variables based on mode
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH || '/emon-finance-ltd',
    server: {
      port: 3000,
      open: true,
      host: true, // Enable network access
    },
    preview: {
      port: 3000,
      open: true
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: mode !== 'production', // Enable sourcemaps in dev
      chunkSizeWarningLimit: 1600, // Increase chunk size warning limit
    },
    css: {
      postcss: {
        plugins: [
          tailwindcss(),
          autoprefixer()
        ]
      }
    },
    resolve: {
      alias: {
        '@': '/src', // Optional: Add path aliases
      }
    }
  }
});
