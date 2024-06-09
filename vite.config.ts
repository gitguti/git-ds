import { defineConfig } from "vite";
import { extname, relative, resolve } from 'path';
import { globSync } from 'glob';
import { fileURLToPath } from 'node:url';
import react from "@vitejs/plugin-react";
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  plugins: [
    react(),
    dts(),
    libInjectCss()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "git-ds",
      fileName: "git-ds",
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(
        globSync('src/**/*.{ts,tsx}').map(file => [
          relative(
            'src',
            file.slice(0, file.length - extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      }
    },
  }
});
