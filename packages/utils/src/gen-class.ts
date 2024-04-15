import classNames from 'classnames'
import { computed } from 'vue'

// 要求传入类名的同时以这种格式传递类名的BEM类型信息
type BEMType = string | [string, 'B' | 'E' | 'M' | undefined]
export function useClassnames(componentName: string) {
  const prefix = 'zhouer'
  const className = `${prefix}-${componentName}`
  const c = (...arg: BEMType[]) => {
    // zhouer-a-b-c   c('a', 'b', 'c)
    if (arg.length > 1) {
      return arg.reduce((pre, cur) => {
        if (Array.isArray(cur)) {
          const arg1 = cur[0]
          const arg2 = cur[1]

          if (arg2 === 'E')
            return `${pre}__${arg1}`

          else if (arg2 === 'M')
            return `${pre}--${arg1}`
        }
        return `${pre}-${cur}`
      }, className)
    }

    return className
  }

  const ce = (e: string) => [e, 'E'] as BEMType
  const cm = (m: string) => [m, 'M'] as BEMType

  const cx = (cls: () => Record<string, boolean>) => {
    return computed(() => classNames(cls()))
  }

  return {
    c,
    cx,
  }
}
