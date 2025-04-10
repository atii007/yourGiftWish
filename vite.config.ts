import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base : '/suggestion',
  resolve: {
    alias: {
      src: "/src",
      "@assets": "/src/assets/index.ts",
      "@common": "/src/common/index.ts",
      "@constant": "/src/constant/index.ts",
      "@service": "/src/services/index.ts",
      "@helpers": "/src/helpers/index.ts",
    },
  },
});
