<script lang="ts">
import type { PropType } from 'vue'
import {
  defineComponent,
} from 'vue'
import { useClassnames } from '@zhouer-ui/utils'

export default defineComponent({
  name: 'ZButton',
  props: {
    type: {
      type: String as PropType<'default' | 'primary' | 'dashed'>,
      default: 'default',
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    size: {
      type: String as PropType<'default' | 'small' | 'large'>,
      default: 'default',
    },
  },
  emits: ['cilck'],
  setup(props, { emit }) {
    const { c, cx, cm } = useClassnames('button')
    // 生成的类名
    const cls = cx(() => {
      return {
        [c()]: true,
        [c(cm(props.type))]: true,
        [c('size', cm(props.size))]: true,
      }
    })
    const handleClick = (e: Event) => {
      emit('cilck', e)
      console.log(cls)
    }
    return {
      handleClick,
      cls,
    }
  },
  methods: {},
})
</script>

<template>
  <button :class="cls" :disabled="disabled" @click="handleClick">
    <slot />
  </button>
</template>

<style lang="scss" scoped>

</style>
