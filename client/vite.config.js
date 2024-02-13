import react from "@vitejs/plugin-react-swc";
import svgr from "@svgr/rollup";
import { defineConfig } from "vite";
import { processAssetFileNames, entryFileNames, chunkFileNames, assetDir } from "./config/assets";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [react(), svgr()],
  build: {
    minify: true,
    assetsDir: assetDir,
    assetsInlineLimit: 0,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: entryFileNames,
        assetFileNames: processAssetFileNames,
        chunkFileNames: chunkFileNames,
      },
    },
  },
});
