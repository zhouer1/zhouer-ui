<docs>
---
title: 禁用
---

这是一个禁用`button`的例子
</docs>

<script setup lang="ts">
function handleClick() {
  console.log('click')
}
</script>

<template>
  <div>
    <z-button :disabled="true" @click="handleClick">
      禁用按钮
    </z-button>
  </div>
</template>

    <style scoped>

    </style>
