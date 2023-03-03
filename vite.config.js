import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/Luismawe/react-rick-morty.git",
  plugins: [react()],
  server: {
    host: true,
  },
});
