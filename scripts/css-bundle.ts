import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fg from 'fast-glob'
import fs from 'fs-extra'
import less from 'less'

const zhouerDir = fileURLToPath(new URL('../packages/zhouer-ui', import.meta.url))
const lessFlies = fg.sync([
  'src/**/style/index.less',
  '!src/style',
], { cwd: zhouerDir })

console.log(lessFlies)

async function compile() {
  for (const file of lessFlies) {
    const filePath = path.resolve(zhouerDir, file)

    const content = fs.readFileSync(filePath, 'utf-8')
    console.log(content)
    const css = await less.render(content, {
      paths: [path.dirname(filePath)],
    })

    const esDir = path.resolve(zhouerDir, `./es${file.slice(3, file.length - 4)}css`)
    const libDir = path.resolve(zhouerDir, `./lib${file.slice(3, file.length - 4)}css`)

    fs.outputFileSync(esDir, css.css)
    fs.outputFileSync(libDir, css.css)
    // fs.writeFileSync(file.replace(/\.less$/, '.css'), css.css)
  }
}

compile()
