import react from "@vitejs/plugin-react-swc";
import svgr from "@svgr/rollup";
// import url from "@rollup/plugin-url";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     // url({
//     //   output: "dist/assets",
//     // }),
//     svgr(),
//   ],
//   base: "/",
//   resolve: {
//     alias: { "@": "/src" },
//   },
// });

import { defineConfig } from "vite";
import { processAssetFileNames, entryFileNames, chunkFileNames, assetDir } from "./config/assets";
import { resolve } from "path";
import viteHtmlResolveAlias from "vite-plugin-html-resolve-alias";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
      // "@img": resolve(__dirname, "src/arr/"),
      "@rss": resolve(__dirname, "src/rss.xml"),
    },
  },
  plugins: [react(), svgr(), viteHtmlResolveAlias()],
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
