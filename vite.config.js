import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "./",
  server: {
    // host: true,
    // port: "8080",
    // hot: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "static",
    rollupOptions: {
      input: "index.html",
    },
  },
});
