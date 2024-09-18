import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/TypingGame/",
  plugins: [react()], // Replace 'your-repository-name' with your actual repository name
});
