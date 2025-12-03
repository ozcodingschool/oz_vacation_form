// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // 필요에 따라 추가 설정
  build: {
    outDir: "build", // 빌드 출력 디렉토리 설정
  },
});
