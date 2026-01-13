import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Vite 與 Vitest 設定可直接合併
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "jsdom",
    globals: true,
  },
});
