import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(path.resolve(), "src"),
      "/": path.resolve(path.resolve(), "./"),
    },
  },
  plugins: [react(), svgr()],
});
