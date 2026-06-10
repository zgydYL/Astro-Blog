---
title: ElasticSearch 入门
description: ElasticSearch 基础知识
---

## 什么是 ElasticSearch

ElasticSearch 是一个分布式搜索和分析引擎。

## 基本概念

- **Index**：索引，类似于数据库
- **Document**：文档，类似于记录
- **Field**：字段
- **Mapping**：映射，类似于表结构

## 基本操作

```bash
# 创建索引
PUT /my_index

# 添加文档
PUT /my_index/_doc/1
{
    "name": "张三",
    "age": 25
}

# 查询文档
GET /my_index/_doc/1

# 搜索
GET /my_index/_search
{
    "query": {
        "match": {
            "name": "张三"
        }
    }
}
```

## 核心特性

- 分布式架构
- 近实时搜索
- 支持复杂查询
- 水平扩展
