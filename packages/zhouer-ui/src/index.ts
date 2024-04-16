// 用于导出组件库整体
import type { App, Plugin } from 'vue'
import pkg from '../package.json'
import * as components from './components'

// 项目中导入方式

// import { Button } from 'zhouer-ui'
export * from './components'

// import ZhouerUI from 'zhouer-ui'
export default {
  install: (app: App) => {
    Object.entries(components).forEach(([_name, component]) => {
      if (component.install)
        app.use(component as any)
    })
  },
  version: pkg.version,
} as Plugin
// app.use(ZhouerUI)
