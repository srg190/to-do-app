import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@styles": "/src/styles",
      "@pages": "/src/pages",
      "@src": "/src",
    },
  },
  server: {
    hmr: { overlay: false },
  },
});
