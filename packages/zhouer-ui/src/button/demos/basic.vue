<docs>
---
title: 基础使用
---

这是一个`button`基础使用的例子
</docs>

<script setup lang="ts">
function handleClick() {
  console.log('click')
}
</script>

<template>
  <div>
    <z-button @click="handleClick">
      普通按钮
    </z-button>
    <z-button type="dashed" @click="handleClick">
      虚线按钮
    </z-button>
    <z-button type="primary" @click="handleClick">
      主题按钮
    </z-button>
  </div>
</template>

<style scoped>

</style>
