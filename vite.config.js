import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/0523C02-router-nesting-app/", // Ruta del repositorio
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "404.html", // Origen del archivo
          dest: "", // Destino: la raíz de la carpeta `dist`
        },
      ],
    }),
  ],
});
