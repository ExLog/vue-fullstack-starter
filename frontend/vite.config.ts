import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
import WindiCSS from 'vite-plugin-windicss'
import compress from 'vite-plugin-compress'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ViteComponents(), WindiCSS(), compress()]
})
