import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/renderApp.tsx",
      },
    }),
    react(),
  ],

  build: {
    target: "esnext",
    assetsInlineLimit: 40960,
    minify: false,
    cssCodeSplit: false,
    sourcemap: true,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
      },
    },
  },

  server: {
    origin: "http://localhost:5172",
    port: 5172,
    host: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
