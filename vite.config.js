import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // build: {
  //   outDir: "dist",
  //   emptyOutDir: true,
  //   rollupOptions: {
  //     input: {
  //       widget: "widget.js", // 👈 MUST EXIST AT PROJECT ROOT
  //     },
  //     output: {
  //       entryFileNames: "chatbot-widget.js", // 👈 final file
  //       assetFileNames: "assets/[name][extname]",
  //       chunkFileNames: "chunks/[name].js",
  //       inlineDynamicImports: true,
  //     },
  //   },
  // },
});
