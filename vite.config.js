import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://luismawe.github.io/react-rick-morty/",
  plugins: [react()],
  server: {
    host: true,
  },
});
