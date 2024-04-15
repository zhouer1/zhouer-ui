import mist from '@mistjs/eslint-config'

export default mist({
  rules: {
    'no-console': 0,
    'no-debugger': 0,
    // 定义变量却没有使用时不报错
    'unused-imports/no-unused-vars': 0,
  },
})
