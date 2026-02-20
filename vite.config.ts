import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: use "/" only if repo is username.github.io; otherwise use "/YOUR_REPO_NAME/"
  base: "/haitian-sports-dev-main/"
});
