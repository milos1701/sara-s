import alias from "@rollup/plugin-alias";
import react from "@vitejs/plugin-react";
import {resolve} from "path";
import {defineConfig} from "vite";
import eslint from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";

// eslint-disable-next-line no-undef
const projectRootDir = resolve(__dirname);

export default defineConfig({
  build: {
    minify: false,
  },
  base: "/sara-s/",
  plugins: [
    react(),
    eslint(),
    svgr(),
    alias({
      entries: [
        {
          find: "@",
          replacement: resolve(projectRootDir, "src")
        }
      ]
    })
  ]
});
