import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  //TO DEBUG
  // base: import.meta.env.NODE_ENV === "production" ? "/SPARK/" : "/",

  //本地端有問題的話註解掉
    base: "/SPARK/",

})
