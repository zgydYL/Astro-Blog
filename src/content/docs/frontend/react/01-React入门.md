---
title: React 入门
description: React 基础知识
---

## 什么是 React

React 是一个用于构建用户界面的 JavaScript 库。

## 创建组件

```jsx
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <button onClick={() => setCount(count + 1)}>
            点击次数：{count}
        </button>
    )
}

export default Counter
```

## JSX 语法

```jsx
const element = (
    <div>
        <h1>标题</h1>
        <p>内容</p>
    </div>
)
```

## 核心概念

- 组件：函数组件或类组件
- Props：组件属性
- State：组件状态
- Hooks：useState、useEffect 等
