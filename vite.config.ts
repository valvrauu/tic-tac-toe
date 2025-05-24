import { defineConfig } from "vite";
import path from "path";

import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  base: "/tic-tac-toe/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
