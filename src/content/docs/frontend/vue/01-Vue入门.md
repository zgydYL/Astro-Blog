---
title: Vue 入门
description: Vue 3 基础知识
---

## 什么是 Vue

Vue 是一个渐进式 JavaScript 框架，用于构建用户界面。

## 创建应用

```javascript
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

## 组件基础

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
    count.value++
}
</script>

<template>
    <button @click="increment">
        点击次数：{{ count }}
    </button>
</template>
```

## 核心特性

- 响应式数据绑定
- 组件化开发
- 组合式 API
- 单文件组件（SFC）
