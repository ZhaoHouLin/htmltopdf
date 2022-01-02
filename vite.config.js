import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/',
  base: '/htmltopdf/',
  build: {
    chunkSizeWarningLimit: 30000, //設定打包檔案的容量限制
  },
  plugins: [vue()]
})
