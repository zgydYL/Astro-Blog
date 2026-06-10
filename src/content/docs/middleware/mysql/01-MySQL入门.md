---
title: MySQL 入门
description: MySQL 基础知识
---

## 什么是 MySQL

MySQL 是最流行的开源关系型数据库管理系统。

## 基本操作

```sql
-- 创建数据库
CREATE DATABASE mydb;

-- 使用数据库
USE mydb;

-- 创建表
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## CRUD 操作

```sql
-- 插入数据
INSERT INTO users (name, email) VALUES ('张三', 'zhangsan@example.com');

-- 查询数据
SELECT * FROM users WHERE name = '张三';

-- 更新数据
UPDATE users SET email = 'new@example.com' WHERE id = 1;

-- 删除数据
DELETE FROM users WHERE id = 1;
```

## 核心特性

- 关系型数据库
- 支持 ACID 事务
- 支持索引优化
- 主从复制
