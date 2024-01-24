import { UserConfig } from 'vite';
import dts from 'vite-plugin-dts';

const sharedConfig: UserConfig = {
  plugins: [dts({ rollupTypes: true })],
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    }
  },
};

export default sharedConfig;