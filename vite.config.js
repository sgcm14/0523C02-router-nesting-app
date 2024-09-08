import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/0523C02-router-nesting-app/", // Ruta del repositorio
  plugins: [react()],
});
