import { fileURLToPath } from 'node:url'
import fs from 'node:fs'
import path from 'node:path'
import { gold, green, purple, red } from '@ant-design/colors'

let colors = ''

purple.forEach((color, index) => {
  // css variable
  // --zhouer-color-primary: #722ed1
  colors += `--zhouer-color-primary-${index + 1} : ${color};\n`
})

colors += '\n'

green.forEach((color, index) => {
  // css variable
  // --zhouer-color-primary: #722ed1
  colors += `--zhouer-color-success-${index + 1} : ${color};\n`
})

colors += '\n'

gold.forEach((color, index) => {
  // css variable
  // --zhouer-color-primary: #722ed1
  colors += `--zhouer-color-warning-${index + 1} : ${color};\n`
})

colors += '\n'

red.forEach((color, index) => {
  // css variable
  // --zhouer-color-primary: #722ed1
  colors += `--zhouer-color-danger-${index + 1} : ${color};\n`
})

const baseUrl = fileURLToPath(new URL('../', import.meta.url))
const cssFile = path.resolve(baseUrl, 'packages/zhouer-ui/src/style/theme/colors.css')

fs.writeFileSync(cssFile, `:root{\n${colors}\n}`)

console.log('success')
