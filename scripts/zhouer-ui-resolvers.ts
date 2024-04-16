import type { ComponentResolver } from 'unplugin-vue-components'

export function zhouerUIResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve(name) {
      console.log(name)
      if (name.startsWith('Z')) {
        return {
          name,
          from: 'zhouer-ui',
        }
      }
    },
  }
}
