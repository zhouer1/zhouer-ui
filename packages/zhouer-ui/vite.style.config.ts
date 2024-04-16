import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import fs from 'fs-extra'

export default defineConfig({
  build: {
    emptyOutDir: false,
    rollupOptions: {
      output: {
        assetFileNames: () => 'zhouer-ui.css',
      },
    },
    lib: {
      entry: 'src/styles.ts',
      formats: ['es'],
      fileName: () => `zhouer-ui-style.js`,
    },
  },
  plugins: [
    {
      name: 'remove:zhouer-ui-style.js',
      closeBundle() {
        const zhouerPath = fileURLToPath(new URL('./dist', import.meta.url))
        const styleFilePath = path.resolve(zhouerPath, 'zhouer-ui-style.js')
        fs.removeSync(styleFilePath)
      },
    },
  ],
})
