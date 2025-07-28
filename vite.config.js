import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // <<<<<<< HEAD
  base: "/CV-Generator/",
  // =======

  // >>>>>>> 77077529fd0b68cf5fc327e5b43b767fe848f3a1
  plugins: [react()],
});
