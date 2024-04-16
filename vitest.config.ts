import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'
import alias from './alias'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    tsxResolveTypes(),
  ],
  resolve: {
    alias,
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
