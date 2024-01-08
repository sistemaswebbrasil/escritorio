/// <reference types="vitest" />
// Plugins
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";

// Utilities
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
      styles: { configFile: "src/styles/variables.scss" },
    }),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
    }),
  ],
  define: { "process.env": {} },
  test: {
    globals: true,
    environment: "happy-dom",
  },
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./", import.meta.url)),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@data": fileURLToPath(new URL("./src/data", import.meta.url)),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  build: {
    outDir: path.resolve(__dirname, "../resources/static"),
  },
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: { charset: false },
      css: { charset: false },
    },
  },
});
