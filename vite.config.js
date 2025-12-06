import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: `${env.VITE_API_BASE_URL}`,
          changeOrigin: true,
          secure: false,
          headers: {
            Cookie: `CF_AppSession=${env.VITE_CF_APP_SESSION}; CF_Authorization=${env.VITE_CF_AUTHORIZATION}`,
          },
        },
      },
    },
  };
});
