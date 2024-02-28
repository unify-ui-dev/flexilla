import { resolve } from 'path';
import { defineConfig } from 'vite';



export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@flexilla/flexilla',
      fileName: 'lib',
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
        assetFileNames: "flexilla.[ext]"
      },
    }
  },
});
