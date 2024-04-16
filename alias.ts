import { fileURLToPath } from 'node:url'
import path from 'node:path'

const baseUrl = fileURLToPath(new URL('.', import.meta.url))

export default [
  {
    find: /^zhouer-ui/,
    replacement: path.resolve(baseUrl, 'packages/zhouer-ui/src'),
  },
  {
    find: /^@zhouer-ui\/utils/,
    replacement: path.resolve(baseUrl, 'packages/utils/src'),
  },
]
