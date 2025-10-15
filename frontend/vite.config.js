import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig((command, mode) => {
  const env = loadEnv(mode, process.cwd(), "")

  console.log(env.VITE_DEBUG)

  return {
    plugins: [react()],
    server: {
    ...(env.VITE_DEBUG === "true" && {
      proxy: {
        "/api": {
          target: "https://choose-your-own-adventure-be.onrender.com",
          changeOrigin: true,
          secure: false
        }
      }
    }
    )}
  }
})