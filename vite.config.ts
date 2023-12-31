import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@styles": "/src/styles",
      "@pages": "/src/pages",
      "@src": "/src",
      "@redux": "/src/redux",
      "@utility": "/src/utility",
      "@constant": "/src/constant",
    },
  },
});
