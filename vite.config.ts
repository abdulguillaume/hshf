import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  // Production build (vite build) must use repo path for GitHub Pages
  const isBuild = command === "build";
  return {
    plugins: [react()],
    base: isBuild ? "/hshf/" : "/",
  };
});
