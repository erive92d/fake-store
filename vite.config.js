import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // host: true,
    // port: "8080",
    // hot: true,
    proxy: {
      "/api": {
        target: "http://0.0.0.0:5000/",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
