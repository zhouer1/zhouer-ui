<docs>
---
title: size
---
`button`有`default`,`large`,`small`三种size
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
    <z-button size="large" @click="handleClick">
      大按钮
    </z-button>
    <z-button size="small" @click="handleClick">
      小按钮
    </z-button>
  </div>
</template>

    <style scoped>

    </style>
