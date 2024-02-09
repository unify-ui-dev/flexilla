import { resolve } from 'path';
import { defineConfig } from 'vite';
import sharedConfig from './../../shared/vite.config.shared';

export default defineConfig({
  ...sharedConfig,
  build: {
    ...sharedConfig.build,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@flexilla/custom-range',
      fileName: 'custom-range',
    },
    rollupOptions:{
      output:{
        assetFileNames:"custom-range.[ext]"
      }
    }
  },
});
