import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        widget: "widget.js"   // important
      },
      output: {
        entryFileNames: "chatbot-widget.js",   // no hashes
        assetFileNames: "[name].[ext]",
        chunkFileNames: "chunks/[name].js",
        inlineDynamicImports: true
      }
    }
  }
});
