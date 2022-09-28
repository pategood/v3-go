import { fileURLToPath, URL } from 'node:url'

import AutoImport from "unplugin-auto-import/vite"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport ({
      imports: ["vue", "vue-router"], // 自动导入vue和vue-router相关函数
      dts: "src/types/auto-import.d.ts" // 生成 `auto-import.d.ts` 全局声明
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue'],
  },
  server: {
    port: 3070,
  }
})
