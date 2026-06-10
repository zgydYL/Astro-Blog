---
title: Redis 入门
description: Redis 基础知识
---

## 什么是 Redis

Redis 是一个开源的内存数据结构存储系统，可用作数据库、缓存和消息中间件。

## 基本操作

```bash
# 字符串操作
SET name "张三"
GET name

# 哈希操作
HSET user:1 name "张三" age 25
HGET user:1 name

# 列表操作
LPUSH mylist "item1" "item2"
LRANGE mylist 0 -1

# 集合操作
SADD myset "member1" "member2"
SMEMBERS myset
```

## 数据类型

- String：字符串
- Hash：哈希
- List：列表
- Set：集合
- Sorted Set：有序集合

## 核心特性

- 内存存储
- 高性能
- 支持持久化
- 支持发布订阅
