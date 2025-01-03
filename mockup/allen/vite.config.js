import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/mtlove",
  server: {
    // host: true, // 启用局域网访问
    // port: 5173, // 默认端口（可自定义）
  },
});
