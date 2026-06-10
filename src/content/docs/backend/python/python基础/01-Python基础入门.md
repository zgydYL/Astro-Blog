---
title: Python 基础入门
description: Python 基础语法和核心概念
---

## Python 基础

### 第一个 Python 程序

```python
print("Hello, World!")
```

### 变量和数据类型

```python title="变量.py"
# 变量
name = "张三"
age = 25
is_student = True

# 列表
fruits = ["苹果", "香蕉", "橙子"]

# 字典
person = {
    "name": "张三",
    "age": 25
}
```

### 流程控制

```python
# if-else
if age >= 18:
    print("成年人")
else:
    print("未成年人")

# for 循环
for fruit in fruits:
    print(fruit)

# while 循环
while age > 0:
    age -= 1
```

### 函数

```python
def greet(name):
    return f"你好，{name}！"

# Lambda 函数
add = lambda a, b: a + b
```
