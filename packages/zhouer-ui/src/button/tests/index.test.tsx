import { mount } from '@vue/test-utils'
import { Button } from 'zhouer-ui'

describe('button', () => {
  it('should work', () => {
    const wrapper = mount(<Button>测试111</Button>)
    console.log(wrapper.text())
  })
})
