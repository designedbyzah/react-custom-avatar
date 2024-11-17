import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
<<<<<<< HEAD

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
=======
import { viteSingleFile } from "vite-plugin-singlefile";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile()],
>>>>>>> main
});
