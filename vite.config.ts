import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  base: '/Projet2Client/',  // Ajoutez cette ligne si vous déployez dans un sous-dossier
});
