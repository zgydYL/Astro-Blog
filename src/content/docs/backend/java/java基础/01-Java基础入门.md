---
title: Java 基础入门
description: Java 基础语法和核心概念
---

## Java 基础

### 第一个 Java 程序

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### 变量和数据类型

```java
// 基本数据类型
int age = 25;
double price = 9.99;
boolean isTrue = true;
char letter = 'A';

// 引用类型
String name = "张三";
```

### 流程控制

```java
// if-else
if (age >= 18) {
    System.out.println("成年人");
} else {
    System.out.println("未成年人");
}

// for 循环
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}

// while 循环
while (age > 0) {
    age--;
}
```
