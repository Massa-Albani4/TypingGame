import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/TypingGame/', // Replace 'your-repository-name' with your actual repository name
  build: {
    outDir: 'docs', // GitHub Pages uses 'docs' folder for hosting
  },
});
