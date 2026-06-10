---
title: JavaScript 入门
description: JavaScript 基础知识
---

## 什么是 JavaScript

JavaScript 是一种轻量级的、解释型的编程语言，主要用于网页开发。

## 基本语法

```javascript
// 变量声明
let name = '张三';
const age = 25;

// 函数
function greet(name) {
    return `你好，${name}！`;
}

// 箭头函数
const add = (a, b) => a + b;
```

## DOM 操作

```javascript
// 获取元素
const element = document.getElementById('app');

// 修改内容
element.textContent = '新内容';

// 添加事件监听
element.addEventListener('click', () => {
    alert('点击了！');
});
```

## ES6+ 特性

- `let` / `const`：块级作用域变量
- 箭头函数
- 模板字符串
- 解构赋值
- Promise / async-await
