import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), url(), svgr()],
});
