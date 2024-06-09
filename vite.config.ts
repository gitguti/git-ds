import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "git-ds",
      fileName: "git-ds",
      formats: ['es'],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  }
});
