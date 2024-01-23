import { UserConfig } from 'vite';
import dts from 'vite-plugin-dts';

const sharedConfig: UserConfig = {
  plugins: [dts()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
};

export default sharedConfig;